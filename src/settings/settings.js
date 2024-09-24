const themes = {
  'light': {
    reactionColor: '#F2F3F5',
    messageTextColor: '#000',
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
    reactionColor: '#180052',
    background: 'linear-gradient(-25deg, #000124, #260674)'
  },
  'emeraldearth': {
    reactionColor: '#006d3f',
    background: 'linear-gradient(-25deg, #0c2400, #067446)'
  },
  'nightviolet': {
    reactionColor: '#390085',
    background: 'linear-gradient(-25deg, #1d0024, #350674)'
  },
  'oldwood': {
    reactionColor: '#714400',
    background: 'linear-gradient(-25deg, #240f00, #744806)'
  },
  'azuresky': {
    reactionColor: '#007162',
    background: 'linear-gradient(-25deg, #001a24, #067465)'
  },
  'cherryvelvety': {
    reactionColor: '#710049',
    background: 'linear-gradient(-25deg, #240017, #74064d)'
  },
  'forestdepth': {
    reactionColor: '#616d00',
    background: 'linear-gradient(-25deg, #222400, #687406)'
  },
  'nightchestnut': {
    reactionColor: '#4e0505',
    background: 'linear-gradient(-25deg, #190024, #740606)'
  },
  'mosscovered': {
    reactionColor: '#4b6d11',
    background: 'linear-gradient(-25deg, #1c2400, #4c7406)'
  },
  'deepruby': {
    reactionColor: '#74066e',
    background: 'linear-gradient(-25deg, #1f0024, #74066e)'
  },
  'fernvalley': {
    reactionColor: '#1e6d00',
    background: 'linear-gradient(-25deg, #00240a, #247406)'
  },
  'forestshadows': {
    reactionColor: '#086b00',
    background: 'linear-gradient(-25deg, #000624, #086700 , #0a7f01)'
  },
  'autumnblaze': {
    reactionColor: '#742006',
    background: 'linear-gradient(-25deg, #240800, #742006)'
  }
}

const codeScheme = {
  "defaultTextHighlight": {
    "color": 4288341353,
    "style": 0
  },
  "fallbackHighlight": {
    "color": 4285791231,
    "style": 0
  },
  "bracketHighlight": {
    "color": 4294921292,
    "style": 1
  },
  "semicolonHighlight": {
    "color": 4294920266,
    "style": 1
  },
  "functionsHighlights": {
    "$nomention": {
      "color": 4294932473,
      "style": 0
    },
    "$catch": {
      "color": 4288905212,
      "style": 0
    },
    "$else": {
      "color": 4288905212,
      "style": 0
    },
    "$elseif": {
      "color": 4288905212,
      "style": 0
    },
    "$endif": {
      "color": 4288905212,
      "style": 0
    },
    "$endtry": {
      "color": 4288905212,
      "style": 0
    },
    "$error": {
      "color": 4288905212,
      "style": 0
    },
    "$if": {
      "color": 4288905212,
      "style": 0
    },
    "$try": {
      "color": 4288905212,
      "style": 0
    }
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

function resetHGInput() {
  const codeInput = document.getElementById('jsonhginput');
  const charCountElement = document.querySelector('.charCount');

  var inputcodedesign = JSON.stringify(codeScheme);
  const charJSONCount = inputcodedesign.length;
    
  charCountElement.textContent = `${charJSONCount} / 10000`;
  codeInput.value = inputcodedesign;

  localStorage.setItem("code-hg", inputcodedesign);
}

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
    const messageColors = document.querySelectorAll('.discord-message .discord-message-markup');
    if (styles.background) message.style.background = styles.background;
    message.style.backgroundColor = styles.exampleColor;
    for (const reaction of reactions) {
      reaction.children.item(0).style.backgroundColor = styles.reactionColor;
    }
    messageColors.forEach(text => {
      text.style.color = styles.messageTextColor;
    });
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

  if (colorId == 'sync') {
    const originalShasowColor = document.body.style.color;
    const [r, g, b] = originalShasowColor.match(/\d+/g).map(Number);
    const darkerShadowColor = darkenRGB(r, g, b, 0.6);
    fonntHtml.style.textShadow = '0 0 10px ' + darkerShadowColor;
  } else {
    if (color == 'none'){
      fonntHtml.style.textShadow = color;
    } else {
      fonntHtml.style.textShadow = '0 0 10px' + ' #' + color;
    }
  }

  console.log(fonntHtml.style.textShadow);
  
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
  const colorDisplay = document.getElementById('colorThemeDisplay');
  const jsonInput = document.getElementById('jsonhginput');

  // Main changes
  const setButtons = document.querySelectorAll('button');
  const bdsCode = document.querySelector('code.hljs');
  const previousPage = document.querySelector('.previous');
  const nextPage = document.querySelector('.next');
  const headers = document.querySelectorAll('.content .header:link');

  // Sidebar
  const sidePages = document.querySelectorAll('.chapter li a');
  const sideMainPages = document.querySelectorAll('.chapter li');

  // Search changes
  const searchBar = document.getElementById('searchbar');
  
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
      updateJsonFile("theme-bg", `linear-gradient(to bottom right, ${colorGradient1}, ${colorGradient2})`);
    } else {
      document.body.style.background = `hsl(${hue}, 80%, 8%)`;
      updateJsonFile("theme-bg", `hsl(${hue}, 80%, 8%)`);
    }
    setStatusBar(hue);
    document.body.style.color = `hsl(${hue}, 100%, 90%)`;
    headers.forEach(head => {
      head.style.color = document.body.style.color;
    });
    document.documentElement.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;
    updateJsonFile("theme-text", document.body.style.color);
  };

  // Updating design
  document.documentElement.style.setProperty('--color1', color1);
  document.documentElement.style.setProperty('--color2', color2);
  document.documentElement.style.setProperty('--color3', color3);
  
  sidePages.forEach(page => {
    page.style.color = document.body.style.color;
  });
  sideMainPages.forEach(mainPage => {
    mainPage.style.color = document.body.style.color;
  });
  if (previousPage) {
    previousPage.style.background = `hsl(${hue}, 45%, 25%)`;
    nextPage.style.background = `hsl(${hue}, 45%, 25%)`;
  }
  if (searchBar) {
    searchBar.style.background = `hsl(${hue}, 60%, 20%)`;
    searchBar.style.color = document.body.style.color;
  }
  
  colorDisplay.textContent = hue + '°';
  jsonInput.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 60%, 20%)`;
  jsonInput.style.background = `hsl(${hue}, 60%, 20%)`;
  bdsCode.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + color3;
  setButtons.forEach(button => {
    if (!button.matches('#menu-bar i') && !button.matches('#menu-bar .icon-button')) {
      button.style.background = `hsl(${hue}, 45%, 25%)`;
    }
  });

  hexColor.textContent = rgbToHex(color1);

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

  const backgroundColor = `hsl(${hue}, 80%, 8%)`;
  setStatusBar(hue);
  document.body.style.background = backgroundColor;
  document.documentElement.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;
  updateJsonFile("theme-bg", backgroundColor);
};

function useFontColor() {
  const colorSlider = document.getElementById('themeSlider');
  const headers = document.querySelectorAll('.content .header:link');
  const sidePages = document.querySelectorAll('.chapter li a');
  const sideChapterBar = document.querySelector('.chapter li a.active');
  const sideMainPages = document.querySelectorAll('.chapter li');
  const searchBar = document.getElementById('searchbar');
  const hue = colorSlider.value;
  
  if (searchBar) {
    searchBar.style.color = `#fff`;
  }
  sidePages.forEach(page => {
    page.style.color = `#fff`;
  });
  sideMainPages.forEach(mainPage => {
    mainPage.style.color = `#fff`;
  });
  headers.forEach(head => {
    head.style.color = `#fff`;
  });
  document.body.style.color = `#fff`;
  sideChapterBar.style.color = `hsl(${hue}, 80%, 50%)`;
  updateJsonFile("theme-text", document.body.style.color);
}

function useDarkBackground() {
  document.body.style.background = `#000`;
  document.documentElement.style.scrollbarColor = `#fff` + `#000`;
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

  const color1 = `hsl(${hue}, 80%, 20%)`;
  const color2 = `hsl(${hue}, 80%, 5%)`;

  setStatusBar(hue);
  document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
  document.documentElement.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;

  updateJsonFile("theme-bg", document.body.style.background);
};

let timer;
let time = 2000; // 2 Seconds
let interval;
let isMouseDown = false;
let buttonMouseDownTime = null;

function resetAllHover() {
  const button = document.querySelector('.resetToDefault');
  const progress = document.querySelector('.resetToDefault .progress');
  progress.style.width = '0%';

  button.mousedownTime = Date.now();
  isMouseDown = true;

  timer = setTimeout(() => {
    if (isMouseDown) {
      console.log("Button held for 2 seconds!");
    }
  }, time);

  interval = setInterval(() => {
    const elapsedTime = Date.now() - button.mousedownTime;
    const progressPercent = (elapsedTime / time) * 100;

    if (progressPercent < 100) {
      progress.style.width = progressPercent + 20 + '%';
    } else {
      progress.style.width = '100%';
      clearInterval(interval);
      button.classList.add('pulsating');
      setTimeout(() => {
        button.classList.remove('pulsating');
      }, 100);
    }

  }, 100);
}

function resettAllNone() {
  clearTimeout(timer);
  clearInterval(interval);
  const progress = document.querySelector('.resetToDefault .progress');
  progress.style.width = '0%';
  isMouseDown = false;
}

function resetAllLeave() {
  if (isMouseDown) {
    const progress = document.querySelector('.resetToDefault .progress');
    progress.style.width = '0%';
    clearInterval(interval);
    clearTimeout(timer);
  }
  isMouseDown = false;
}

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

function updateCodeHG() {
  const codeInput = document.getElementById('jsonhginput');
  const charCountElement = document.querySelector('.charCount');
  const jsonHG = codeInput.value;
  
  const charCount = codeInput.value.replace(/[\s\n]/g, '').length; // Ignore spaces and new rows
  charCountElement.textContent = `${charCount} / 10000`;

  if (charCount >= 10000) {
    charCountElement.style.color = 'red'; 
  } else {
    charCountElement.style.color = document.body.style.color; 
  }  
  
  if (isJson(jsonHG)) {
    codeInput.style.boxShadow = '0 0 10px green';
    localStorage.setItem("code-hg", jsonHG);
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

function darkenRGB(r, g, b) {
  return `rgb(${Math.round(r * 0.5)}, ${Math.round(g * 0.5)}, ${Math.round(b * 0.5)})`;
}

function reloadHGPage() {
  location.reload();
}

function loadSettings() {
  const displaySize = document.getElementById("display-size");
  const range = document.getElementById("textsize");
  const themeChangerRange = document.getElementById("themeSlider");
  const codeTextInput = document.getElementById('jsonhginput');
  const charCountElement = document.querySelector('.charCount');
  const settingsButtons = document.querySelectorAll('button');

  let data

  try {
    data = JSON.parse(localStorage.getItem('json'));
  } catch { }

  data ??= {
    "theme-main": "270",
    "theme-bg": "270",
    "theme-text": "270",
    "folders": false,
    "discord-example-theme": "dark",
    "text-size": "60%",
    "language": "en",
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

  var codedesign = data['code-hg'];

  if (codeTextInput) {
    try {
        if(localStorage.getItem("code-hg")) codedesign = JSON.parse(localStorage.getItem("code-hg"));
    } catch { }

    var inputcodedesign = JSON.stringify(codedesign);
    const charJSONCount = inputcodedesign.length;
    
    charCountElement.textContent = `${charJSONCount} / 10000`;
    codeTextInput.value = inputcodedesign;
  }
  
  if (themeChangerRange) {
    themeChangerRange.value = parseInt(data['theme-main'].replace('%', ''));
  }

  var hueM = data['theme-main'];

  settingsButtons.forEach(button => {
    if (!button.matches('#menu-bar i') && !button.matches('#menu-bar .icon-button')) {
      button.style.background = `hsl(${hueM}, 45%, 25%)`;
    }
  });
  
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
