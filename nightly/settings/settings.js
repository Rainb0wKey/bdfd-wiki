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

window.onload = loadSettings;
