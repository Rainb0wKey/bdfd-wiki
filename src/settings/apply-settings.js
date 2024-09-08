const DiscordThemes = {
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

function setDiscordTheme(colorId) {
  const discordMessages = document.getElementsByTagName('discord-messages');

  const styles = {
    reactionColor: '#131318',
    messageTextColor: '#DDDEE1',
    background: '#000',
    ...(DiscordThemes[colorId] || {})
  }

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const reactions = document.getElementsByTagName('discord-reaction');
        const messageColors = document.getElementsByTagName('discord-message-markup');
        if (styles.background) mutation.target.style.background = styles.background;
        mutation.target.style.backgroundColor = styles.exampleColor;
        for (const reaction of reactions) {
          // change the div which is the actual reaction
          reaction.children.item(0).style.backgroundColor = styles.reactionColor;
        }
        for (const markup of messageColors) {
          markup.style.color = styles.messageTextColor;
        }
      }
    }
  };

  for (message of discordMessages) {
    const mutObv = new MutationObserver(callback);
    mutObv.observe(message, { attributes: true });
  }
}

function applySettings() {
  let data;

  try {
    data = JSON.parse(localStorage.getItem('json'));
  } catch { }


  if (!data) localStorage.setItem('json', JSON.stringify(defaultData))
  data ??= defaultData;

  const mainHue = data['theme-main']; // Мяу

  const setSaturation = 80;
  const setLightness = 50;

  const colorTheme1 = `hsl(${mainHue}, ${setSaturation}%, ${setLightness}%)`;
  const colorTheme2 = `hsl(${mainHue}, ${setSaturation}%, ${setLightness - 20}%)`;
  const colorTheme3 = `hsl(${mainHue}, 80%, 15%)`;

  const html = document.querySelector('html');

  html.style.fontFamily = data['text-font'];
  html.style.fontSize = data['text-size'];
  html.style.textShadow = data['text-hg'];

  document.querySelector('.sidebar').style.background = colorTheme3;
  document.querySelector('.chapter li a.active').style.color = colorTheme1;
  document.querySelectorAll('.breadcrumb a').forEach(link => {
    link.style.color = colorTheme1;
  });
  document.getElementById('menu-bar-sticky-container').style.background = `linear-gradient(to bottom right, ${colorTheme1}, ${colorTheme2})`;

  document.body.style.background = data['theme-bg'];
  document.body.style.color = data['theme-text'];

  setDiscordTheme(data['discord-example-theme']);
}

applySettings();
