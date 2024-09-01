const themes = {
  'light': {
    exampleColor: '#FFF',
    reactionColor: '#F2F3F5',
    messageTextColor: '#313338'
  },
  'dark': {
    exampleColor: '#000',
    reactionColor: '#131318',
    messageTextColor: '#DDDEE1'
  },
  'redmoon': {
    reactionColor: '#4e0505',
    background: 'linear-gradient(-25deg, #240000, #740606)'
  },
  'nightsapphire': {
    reactionColor: '#11054e',
    background: 'linear-gradient(-25deg, #000124, #260674)'
  },
  'emeraldearth': {
    reactionColor: '#0c4e05',
    background: 'linear-gradient(-25deg, #0c2400, #067446)'
  },
  'nightviolet': {
    reactionColor: '#3c054e',
    background: 'linear-gradient(-25deg, #1d0024, #350674)'
  },
  'oldwood': {
    reactionColor: '#4e3b05',
    background: 'linear-gradient(-25deg, #240f00, #744806)'
  },
  'azuresky': {
    reactionColor: '#05474e',
    background: 'linear-gradient(-25deg, #001a24, #067465)'
  },
  'cherryvelvety': {
    reactionColor: '#4e0537',
    background: 'linear-gradient(-25deg, #240017, #74064d)'
  },
  'forestdepth': {
    reactionColor: '#4c4e05',
    background: 'linear-gradient(-25deg, #222400, #687406)'
  },
  'nightchestnut': {
    reactionColor: '#4e0505',
    background: 'linear-gradient(-25deg, #190024, #740606)'
  }
}

const fonts = {
  'font2': 'Georgia, serif',
  'font3': 'Montserrat',
  'font4': 'cursive',
  'font5': 'monospace',
  'font6': 'system-ui'
}

const textHighlights = {
  'blue': '257df0',
  'red': 'f02525',
  'green': '25f03e',
  'yellow': 'f0ea25',
  'purple': '8f25f0',
  'white': 'ffffff',
  'black': '000000',
  'pink': 'f025d7',
  'orange': 'f07025'
}

function changeFontSize() {
  const range = document.getElementById("textsize");
  const displaySize = document.getElementById("display-size");
  const webSize = document.documentElement;
  displaySize.textContent = range.value;
  webSize.style.fontSize = `${range.value}%`;

  // Save in Storage
  updateJsonFile("text-size", range.value + "%");
}

function copyHGInput() {
  const textarea = document.getElementById('jsonhginput');
  navigator.clipboard.writeText(textarea.value).catch((err) => console.error("Failed copying to clipboard", err));
}

function changeDiscordTheme(colorId) {
  const discordMessages = document.querySelector('.discord-messages');
  const reaction = document.querySelector('.discord-reaction');
  const messageColor = document.querySelector('.discord-message-markup');

  const styles = {
    exampleColor: '#1C1D22',
    reactionColor: '#202226',
    messageTextColor: '#C6C7CC',
    // get styles for this button ID
    ...(themes[colorId] || {})
  }

  if (discordMessages) {
    if (styles.background) discordMessages.style.background = styles.background;
    discordMessages.style.backgroundColor = styles.exampleColor;
    reaction.style.backgroundColor = styles.reactionColor;
    messageColor.style.color = styles.messageTextColor;
  }
}

function changeTextFont(fontId) {
  const fontHtml = document.querySelector('html');
  let font = fonts[fontId] || 'Open Sans, sans-serif'

  fontHtml.style.fontFamily = font;

  // Save in Storage
  updateJsonFile("text-font", font);
}

function updateJsonFile(key, value) {
  let data = JSON.parse(localStorage.getItem('json')) || {};

  data[key] = value;

  localStorage.setItem('json', JSON.stringify(data, null, 2));
}

function changeTextHigh(colorId) {
  const fonntHtml = document.querySelector('html');
  let color = textHighlights[colorId] || 'none';

  if (color == 'none')
    fonntHtml.style.textShadow = color;
  else
    fonntHtml.style.textShadow = '0 0 10px' + ' #' + color;

  // Save in Storage
  updateJsonFile("text-hg", fonntHtml.style.textShadow);
}

function loadSettings() {
  const displaySize = document.getElementById("display-size");
  const range = document.getElementById("textsize");

  let data

  try {
    // json parse breaks if it can't parse, it should have a try catch
    data = JSON.parse(localStorage.getItem('json'));
  } catch { }

  data ??= {
    "theme": "bdfd",
    "discord-example-theme": "light",
    "text-size": "62%",
    "text-hg": "none",
    "text-font": "Open Sans, sans-serif",
  }

  document.querySelector('html').style.fontFamily = data['text-font'];
  document.querySelector('html').style.fontSize = data['text-size'];
  document.querySelector('html').style.textShadow = data['text-hg'];

  if (displaySize) {
    displaySize.textContent = data['text-size'].replace('%', '');
    range.value = parseInt(data['text-size'].replace('%', ''));
  }
}

const colorSlider = document.getElementById('colorThemeSlider');
const colorPreview = document.getElementById('colorThemePreview');
const colorDisplay = document.getElementById('colorThemeDisplay');
const hexColor = document.getElementById('hexColor');
const useAsBackgroundButton = document.getElementById('useAsBackground');
const resetButton = document.getElementById('resetThemeButton');
const dontUseBackgroundButton = document.getElementById('dontUseBackground');
const gradientButton = document.getElementById('gradientThemeButton');

let isGradient = false;

function updateColor() { 
    const hue = colorSlider.value;
    const saturation = 80; 
    const lightness = 50;

    const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const color2 = `hsl(${hue}, ${saturation}%, ${lightness - 20}%)`; 

    colorPreview.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
    colorSlider.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

    colorDisplay.style.backgroundColor = color1; 
    hexColor.textContent = rgbToHex(color1); 
  }

    colorSlider.addEventListener('input', updateColor);

    useAsBackgroundButton.addEventListener('click', () => {
      const hue = colorSlider.value;
      const saturation = 80;
      const lightness = 5; 

      const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      document.body.style.background = backgroundColor;
      isGradient = false;
      gradientButton.classList.add('active');
    });

    resetButton.addEventListener('click', () => {
      colorSlider.value = 270;
      updateColor();
      document.body.style.background = '#f0f0f0';
      isGradient = false;
      gradientButton.classList.remove('active');
    });

    dontUseBackgroundButton.addEventListener('click', () => {
      document.body.style.background = '#f0f0f0';
      isGradient = false;
      gradientButton.classList.remove('active');
    });

  gradientButton.addEventListener('click', () => {
    if (gradientButton.classList.contains('active')) {
	    const hue = colorSlider.value;
	  	const saturation = 80;
	  	const lightness1 = 15;
		  const lightness2 = 5;
		
  	  const color1 = `hsl(${hue}, ${saturation}%, ${lightness1}%)`;
	    const color2 = `hsl(${hue}, ${saturation}%, ${lightness2}%)`;
        
      const currentBackgroundColor = document.body.style.backgroundColor;
      if (currentBackgroundColor !== '' && currentBackgroundColor !== '#f0f0f0') {
        document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
      }
    }
  });

  function rgbToHex(rgb) {
    const c = rgb.match(/\d+/g).map(Number);
    return '#' + ('000000' + ((c[0] << 16) | (c[1] << 8) | c[2]).toString(16)).slice(-6);
}

updateColor();

window.onload = loadSettings;
