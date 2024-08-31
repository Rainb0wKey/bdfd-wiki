function changeFontSize() {
  const range = document.getElementById("textsize");
  const displaySize = document.getElementById("display-size");
  const webSize = document.documentElement;
  displaySize.textContent = range.value;
  webSize.style.fontSize = `${range.value}%`;

  // Save in Storage
  updateJsonFile("text-size", range.value + "%"); 
}


function changeDiscordTheme() {
  const buttonid = event.srcElement.id;
  const discordMessages = document.querySelector('.discord-messages');
  const reaction = document.querySelector('.discord-reaction');
  const messageColor = document.querySelector('.discord-message-markup');

  let examplecolor = '#1C1D22';
  let reactionColor = '#202226';
  let messageTextColor = '#C6C7CC';

  if (buttonid == 'light')
    examplecolor = '#FFF';
    reactionColor = '#F2F3F5';
    messageTextColor = '#313338';
  else if (buttonid == 'midnight')
    examplecolor = '#000';
    reactionColor = '#131318';
    messageTextColor = '#DDDEE1';

  if (discordMessages) {
    discordMessages.style.backgroundColor = examplecolor;
    reaction.style.backgroundColor = reactionColor;
    messageColor.style.color = messageTextColor;
  }

}

function changeTextFont() {
  const id = event.srcElement.id;
  const fontHtml = document.querySelector('html');
  let font = 'Open Sans, sans-serif';
	
  if (id == 'font2')
    font = 'Georgia, serif';
  else if (id == 'font3')
    font = 'Montserrat';
  else if (id == 'font4')
    font = 'cursive';
  else if (id == 'font5')
    font = 'monospace';
  else if (id == 'font6')
    font = 'system-ui';

  fontHtml.style.fontFamily = font;

  // Save in Storage
  updateJsonFile("text-font", font); 
}

function updateJsonFile(key, value) {
  let data = JSON.parse(localStorage.getItem('json')) || {};

  data[key] = value;

  localStorage.setItem('json', JSON.stringify(data, null, 2));
}

function changeTextHigh() {
  const id = event.srcElement.id;
  const fonntHtml = document.querySelector('html');
  let color = 'none';
	
  if (id == 'high-blue')
    color = '257df0';
  else if (id == 'high-red')
    color = 'f02525';
  else if (id == 'high-green')
    color = '25f03e';
  else if (id == 'high-yellow')
    color = 'f0ea25';
  else if (id == 'high-purple')
    color = '8f25f0';
  else if (id == 'high-white')
    color = 'fff';
  else if (id == 'high-black')
    color = '000';
  else if (id == 'high-pink')
    color = 'f025d7';
  else if (id == 'high-orange')
    color = 'f07025';

  if ( color == 'none' )
    fonntHtml.style.textShadow = color;
  else
    fonntHtml.style.textShadow = '0 0 10px' + ' #' + color;

  // Save in Storage
  updateJsonFile("text-hg", fonntHtml.style.textShadow); 
}

function loadSettings() {
  const displaySize = document.getElementById("display-size");
  const range = document.getElementById("textsize");

  let data = JSON.parse(localStorage.getItem('json')) || {
    "theme": "bdfd",
    "discord-example-theme": "light",
    "text-size": "62%",
    "text-hg": "none",
    "text-font": "Open Sans, sans-serif",
  };

  document.querySelector('html').style.fontFamily = data['text-font'];
  document.querySelector('html').style.fontSize = data['text-size'];
  document.querySelector('html').style.textShadow = data['text-hg'];

  if (displaySize) {
    displaySize.textContent = data['text-size'].replace('%', '');
    range.value = parseInt(data['text-size'].replace('%', ''));
  }
}

window.onload = loadSettings;
