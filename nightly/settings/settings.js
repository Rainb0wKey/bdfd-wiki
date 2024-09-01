const themes = {
  'light-button': {
    exampleColor: '#FFF',
    reactionColor: '#F2F3F5',
    messageTextColor: '#313338'
  },
  'dark-button': {
    exampleColor: '#000',
    reactionColor: '#131318',
    messageTextColor: '#DDDEE1'
  },
  'redmoon-button': {
    reactionColor: '#4e0505',
    background: 'linear-gradient(-25deg, #240000, #740606)'
  },
  'nightsapphire-button': {
    reactionColor: '#11054e',
    background: 'linear-gradient(-25deg, #000124, #260674)'
  },
  'emeraldearth-button': {
    reactionColor: '#0c4e05',
    background: 'linear-gradient(-25deg, #0c2400, #067446)'
  },
  'nightviolet-button': {
    reactionColor: '#3c054e',
    background: 'linear-gradient(-25deg, #1d0024, #350674)'
  },
  'oldwood-button': {
    reactionColor: '#4e3b05',
    background: 'linear-gradient(-25deg, #240f00, #744806)'
  },
  'azuresky-button': {
    reactionColor: '#05474e',
    background: 'linear-gradient(-25deg, #001a24, #067465)'
  },
  'cherryvelvety-button': {
    reactionColor: '#4e0537',
    background: 'linear-gradient(-25deg, #240017, #74064d)'
  },
  'forestdepth-button': {
    reactionColor: '#4c4e05',
    background: 'linear-gradient(-25deg, #222400, #687406)'
  },
  'nightchestnut-button': {
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
  'high-blue': '257df0',
  'high-red': 'f02525',
  'high-green': '25f03e',
  'high-yellow': 'f0ea25',
  'high-purple': '8f25f0',
  'high-white': 'ffffff',
  'high-black': '000000',
  'high-pink': 'f025d7',
  'high-orange': 'f07025'
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

function changeDiscordTheme(ev) {
  const buttonId = ev.target.id;
  const discordMessages = document.querySelector('.discord-messages');
  const reaction = document.querySelector('.discord-reaction');
  const messageColor = document.querySelector('.discord-message-markup');

  const styles = {
    exampleColor: '#1C1D22',
    reactionColor: '#202226',
    messageTextColor: '#C6C7CC',
    // get styles for this button ID
    ...(themes[buttonId] || {})
  }

  if (discordMessages) {
    if (styles.background) discordMessages.style.background = styles.background;
    discordMessages.style.backgroundColor = styles.exampleColor;
    reaction.style.backgroundColor = styles.reactionColor;
    messageColor.style.color = styles.messageTextColor;
  }
}

function changeTextFont(ev) {
  const id = ev.target.id;
  const fontHtml = document.querySelector('html');
  let font = fonts[id] || 'Open Sans, sans-serif'

  fontHtml.style.fontFamily = font;

  // Save in Storage
  updateJsonFile("text-font", font);
}

function updateJsonFile(key, value) {
  let data = JSON.parse(localStorage.getItem('json')) || {};

  data[key] = value;

  localStorage.setItem('json', JSON.stringify(data, null, 2));
}

function changeTextHigh(ev) {
  const id = ev.target.id;
  const fonntHtml = document.querySelector('html');
  let color = textHighlights[id] || 'none';

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
