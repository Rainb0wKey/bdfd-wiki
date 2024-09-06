const themes = {
  'light': {
    reactionColor: '#F2F3F5',
    messageTextColor: '#35373C',
    background: '#FFF',
  },
  'dark': {
    reactionColor: '#202226',
    messageTextColor: '#C6C7CC',
    background: '#1C1D22',
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
    reactionColor: '#2c054e',
    background: 'linear-gradient(-25deg, #1d0024, #350674)'
  },
  'oldwood': {
    reactionColor: '#4e2e05',
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
  const bdsCodeSize = document.querySelector('code.hljs');
  const webSize = document.documentElement;
  displaySize.textContent = range.value;
  
  bdsCodeSize.style.fontSize = parseInt(range.value) + 35 + '%';
  webSize.style.fontSize = `${range.value}%`;

  // Save in Storage
  updateJsonFile("text-size", range.value + "%");
}

function resetFontSize() {
  const range = document.getElementById("textsize");
  const displaySize = document.getElementById("display-size");
  const bdsCodeSize = document.querySelector('code.hljs');
  const webSize = document.documentElement;
  range.value = 60;
  displaySize.textContent = range.value;
  
  bdsCodeSize.style.fontSize = parseInt(range.value) + 35 + '%';
  webSize.style.fontSize = `${range.value}%`;

  // Save in Storage
  updateJsonFile("text-size", range.value + "%");
};

function copyHGInput() {
  const textarea = document.getElementById('jsonhginput');
  navigator.clipboard.writeText(textarea.value).catch((err) => console.error("Failed copying to clipboard", err));
}

function changeDiscordTheme(colorId) {
  const discordMessages = document.getElementsByTagName('discord-messages');

  const styles = {
    reactionColor: '#131318',
    messageTextColor: '#DDDEE1',
    background: '#000',
    ...(DiscordThemes[colorId] || {})
  }

  for (const message of discordMessages) {
    const reactions = document.getElementsByTagName('discord-reaction');
    const messageColors = document.getElementsByTagName('discord-message-markup');
    if (styles.background) message.style.background = styles.background;
    message.style.backgroundColor = styles.exampleColor;
    for (const reaction of reactions) {
      // change the div which is the actual reaction
      reaction.children.item(0).style.backgroundColor = styles.reactionColor;
    }
    for (const markup of messageColors) {
      markup.style.color = styles.messageTextColor;
    }
  }

  updateJsonFile("discord-example-theme", colorId);
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
function setStatusBar(HueInput) {
  if (HueInput != 'dark') {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', `hsl(${HueInput}, 80%, 8%)`);
  } else {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', `#000`);
  }
}

function updateColor() {
  // Settings page
  const colorSlider = document.getElementById('themeSlider');
  const colorPreview = document.getElementById('themePreview');
  const colorDisplay = document.getElementById('colorThemeDisplay');
  const jsonInput = document.getElementById('jsonhginput');
  const settingEmbed = document.querySelectorAll('.settingembed');

  // Main changes
  const menuBar = document.getElementById('menu-bar-sticky-container');
  const breadcrumbText = document.querySelectorAll('.breadcrumb a');
  const sideBar = document.querySelector('.sidebar');
  const sideChapterBar = document.querySelector('.chapter li a.active');
  const sideSpacerBar = document.querySelector('.chapter .spacer');
  const setButtons = document.querySelectorAll('button');
  const bdsCode = document.querySelector('code.hljs');
  const previousPage = document.querySelector('.previous');
  const nextPage = document.querySelector('.next');
  
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
    setStatusBar(hue);
    document.body.style.color = `hsl(${hue}, 100%, 90%)`;
    document.documentElement.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;
    updateJsonFile("theme-bg", document.body.style.background);
    updateJsonFile("theme-text", document.body.style.color);
  };

  // Updating design
  colorPreview.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
  colorSlider.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  if (previousPage) {
    previousPage.style.background = `hsl(${hue}, 45%, 25%)`;
    nextPage.style.background = `hsl(${hue}, 45%, 25%)`;
  }
  colorDisplay.textContent = hue + '°';
  colorDisplay.style.background = color2;
  menuBar.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
  sideBar.style.background = color3;
  jsonInput.style.background = `hsl(${hue}, 60%, 20%)`;
  sideSpacerBar.style.background = `hsl(${hue}, 100%, 80%)`;
  bdsCode.style.background = color3;
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
  setStatusBar(hue);
  document.body.style.background = backgroundColor;
  updateJsonFile("theme-bg", backgroundColor);
};

function useFontColor() {
  document.body.style.color = `#fff`;
  updateJsonFile("theme-text", document.body.style.color);
}

function useDarkBackground() {
  document.body.style.background = `#000`;
  document.documentElement.style.scrollbarColor = `#000` + `#fff`;
  setStatusBar('dark');
  updateJsonFile("theme-bg", document.body.style.background);
  
}

function resetTheme() {
  const colorSlider = document.getElementById('themeSlider');

  colorSlider.value = 270;

  setStatusBar(colorSlider.value);
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

  setStatusBar(hue);
  document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`; // Apply gradient
};

function updateCodeHG() {
  const codeInput = document.getElementById('jsonhginput');
  const charCountElement = document.querySelector('.charCount');
  const jsonHG = codeInput.value;

  const charCount = codeInput.value.length; 
  charCountElement.textContent = `${charCount} / 10000`;

  if (charCount >= 10000) {
    charCountElement.style.color = 'red'; 
  } else {
    charCountElement.style.color = document.body.style.color; 
  }  
  
  if (isJson(jsonHG)) {
    codeInput.style.boxShadow = '0 0 10px green';
    updateJsonFile("code-hg", jsonHG);
  } else {
    codeInput.style.boxShadow = '0 0 10px red';
  }
}

function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

function rgbToHex(rgb) {
  const c = rgb.match(/\d+/g).map(Number);
  return '#' + ('000000' + ((c[0] << 16) | (c[1] << 8) | c[2]).toString(16)).slice(-6);
}

function loadSettings() {
  const displaySize = document.getElementById("display-size");
  const range = document.getElementById("textsize");
  const themeChangerRange = document.getElementById("themeSlider");
  const codeTextInput = document.getElementById('jsonhginput');
  const charCountElement = document.querySelector('.charCount');

  let data

  try {
    data = JSON.parse(localStorage.getItem('json'));
  } catch { }

  data ??= {
    "theme-main": "270",
    "theme-bg": "270",
    "theme-text": "270",
    "discord-example-theme": "dark",
    "text-size": "60%",
    "text-hg": "none",
    "text-font": "Open Sans, sans-serif",
    "code-hg": {
   "defaultTextHighlight":{
      "color":4288341353,
      "style":0
   },
   "fallbackHighlight":{
      "color":4285791231,
      "style":0
   },
   "bracketHighlight":{
      "color":4294921292,
      "style":1
   },
   "semicolonHighlight":{
      "color":4294920266,
      "style":1
   },
   "functionsHighlights":{
      "$nomention":{
         "color":4294932473,
         "style":0
      },
      "$catch":{
         "color":4288905212,
         "style":0
      },
      "$else":{
         "color":4288905212,
         "style":0
      },
      "$elseif":{
         "color":4288905212,
         "style":0
      },
      "$endif":{
         "color":4288905212,
         "style":0
      },
      "$endtry":{
         "color":4288905212,
         "style":0
      },
      "$error":{
         "color":4288905212,
         "style":0
      },
      "$if":{
         "color":4288905212,
         "style":0
      },
      "$try":{
         "color":4288905212,
         "style":0
      }
   }
}
  }
  
  if (codeTextInput) {
    const charJSONCount = data['code-hg'].length; 
    charCountElement.textContent = `${charJSONCount} / 10000`;
    codeTextInput.value =  data['code-hg'];
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
