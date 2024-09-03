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

let isLocked = true;

  // Used in status bar (iPhone).
function setStatusBar(StatusBar) {
  document.querySelector('meta[name="theme-color"]').setAttribute('content', ${StatusBar});
}

function updateColor() {
  // Settings page
  const colorSlider = document.getElementById('themeSlider');
  const colorPreview = document.getElementById('themePreview');
  const colorDisplay = document.getElementById('colorThemeDisplay');
  const settingEmbed = document.querySelectorAll('.settingembed');

  // Main changes
  const menuBar = document.getElementById('menu-bar-sticky-container');
  const breadcrumbText = document.querySelectorAll('.breadcrumb a');
  const sideBar = document.querySelector('.sidebar');
  const sideChapterBar = document.querySelector('.chapter li a.active')
  const setButtons = document.querySelectorAll('button');

  // Color Settings
  const hue = colorSlider.value;
  const saturation = 80;
  const lightness = 50;

  // Creating cute HSL colors
  const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const color2 = `hsl(${hue}, ${saturation}%, ${lightness - 20}%)`;
  const color3 = `hsl(${hue}, 80%, 15%)`;


  // Locked text gameplay
  if (isLocked) {
    if (document.body.style.background.includes('linear-gradient')) {
      const colorGradient1 = `hsl(${hue}, 80%, 20%)`;
      const colorGradient2 = `hsl(${hue}, 80%, 5%)`;
      document.body.style.background = `linear-gradient(to bottom right, ${colorGradient1}, ${colorGradient2})`;
    } else {
      document.body.style.background = `hsl(${hue}, 80%, 8%)`;
    }
    setStatusBar(`hsl(${hue}, 80%, 8%)`);
    document.body.style.color = `hsl(${hue}, 100%, 90%)`;
    updateJsonFile("theme-bg", document.body.style.background);
    updateJsonFile("theme-text", document.body.style.color);
  };

  // Updating design
  colorPreview.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
  colorSlider.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  colorDisplay.textContent = hue + '°';
  colorDisplay.style.background = color2;
  menuBar.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
  sideBar.style.background = color3;
  settingEmbed.forEach(element => {
    element.style.background = color3;
  });
  setButtons.forEach(button => {
    if (!button.matches('#menu-bar i') && !button.matches('#menu-bar .icon-button')) {
      button.style.background = `hsl(${hue}, 45%, 25%)`;
    }
  });

  hexColor.textContent = rgbToHex(color1);
  sideChapterBar.style.color = color1;
  breadcrumbText.forEach(link => {
    link.style.color = color1;
  });

  updateJsonFile("theme-main", hue);
}

// Lock is used to sync text color and background with main color
function lockTheme() {
  const lockText = document.getElementById('lockText');
  if (!isLocked) {
    lockText.textContent = "Locked";
    isLocked = true;
  } else {
    lockText.textContent = "Unlocked";
    isLocked = false;
  }
}

function useBackground() {
  const colorSlider = document.getElementById('themeSlider');

  const hue = colorSlider.value;
  const saturation = 80;
  const lightness = 8;

  const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  setStatusBar(backgroundColor);
  document.body.style.background = backgroundColor;
  updateJsonFile("theme-bg", backgroundColor);
};

function resetTheme() {
  const colorSlider = document.getElementById('themeSlider');

  colorSlider.value = 270;

  setStatusBar(`hsl(colorSlider.value, 80%, 8%)`);
  updateColor()
  useBackground()
};

function gradientBackground() {
  const colorSlider = document.getElementById('themeSlider');

  const hue = colorSlider.value;
  const saturation = 80;
  const lightness1 = 20;
  const lightness2 = 5;

  const color1 = `hsl(${hue}, ${saturation}%, ${lightness1}%)`; // Create the brighter color
  const color2 = `hsl(${hue}, ${saturation}%, ${lightness2}%)`; // Create the darker color

  document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`; // Apply gradient
};

function rgbToHex(rgb) {
  const c = rgb.match(/\d+/g).map(Number);
  return '#' + ('000000' + ((c[0] << 16) | (c[1] << 8) | c[2]).toString(16)).slice(-6);
}

function loadSettings() {
  const displaySize = document.getElementById("display-size");
  const range = document.getElementById("textsize");
  const themeChangerRange = document.getElementById("themeSlider");

  let data

  try {
    data = JSON.parse(localStorage.getItem('json'));
  } catch { }

  data ??= {
    "theme-main": "270",
    "theme-bg": "270",
    "theme-text": "270",
    "discord-example-theme": "light",
    "text-size": "60%",
    "text-hg": "none",
    "text-font": "Open Sans, sans-serif",
  }

  if (themeChangerRange) {
    themeChangerRange.value = parseInt(data['theme-main'].replace('%', ''));
  }

  if (displaySize) {
    displaySize.textContent = data['text-size'].replace('%', '');
    range.value = parseInt(data['text-size'].replace('%', ''));
  }
}

loadSettings();
try {
  updateColor();
} catch (err) {
  console.error("Failed to update color", err);
}
