# Settings
Let's customize your exp in the bdfd wiki world 🌍!

<link rel="stylesheet" href="./settings.css">

<div class="settingembed">
  <h2>Theme</h2>
  <p>Select the theme for wiki:</p>
  <div class="themebuttons">
    <button id="bdfd" class="tbutton">BDFD</button>
    <button id="ios" class="tbutton">iOS</button>
    <button id="android" class="tbutton">Android</button>
    <button id="forest" class="tbutton">Forest</button>
    <button id="bloody-moon" class="tbutton">Bloody Moon</button>
    <button id="dark" class="tbutton">Dark</button>
    <button id="discord" class="tbutton">Discord</button>
    <button id="cyber" class="tbutton">Cyber</button>
    <button id="lemonade" class="tbutton">Lemonade</button>
    <button id="coffee" class="tbutton">Coffee</button>
    <button id="modern" class="tbutton">Modern</button>
    <button id="light" class="tbutton">Light</button>
  </div>
</div>

<div class="settingembed">
  <h2>Text Highlighting</h2>
  <p>Color?!</p>
  <div class="texthighbuttons">
    <button id="high-none" onClick="changeTextHigh" class="hbutton">Disable</button>
    <button id="high-white" onClick="changeTextHigh" class="hbutton">White</button>
    <button id="high-black" onClick="changeTextHigh" class="hbutton">Black</button>
    <button id="high-red" onClick="changeTextHigh" class="hbutton">Red</button>
    <button id="high-pink" onClick="changeTextHigh" class="hbutton">Pink</button>
    <button id="high-orange" onClick="changeTextHigh" class="hbutton">Orange</button>
    <button id="high-yellow" onClick="changeTextHigh" class="hbutton">Yellow</button>
    <button id="high-green" onClick="changeTextHigh" class="hbutton">Green</button>
    <button id="high-blue" onClick="changeTextHigh" class="hbutton">Blue</button>
    <button id="high-purple" onClick="changeTextHigh" class="hbutton">Purple</button>
  </div>
</div>

<div class="settingembed">
  <h2>Text Size</h2>
  <p>Can't see well? Let's edit the text size:</p>
  <div class="textsizebuttons">
    <label id="display-size">62</label>
    <input type="range" id="textsize" min="50" max="100" value="62" oninput="changeFontSize()"/>
    <p id="default-is">62%</p>
  </div>
</div>

<div class="settingembed">
  <h2>Text Font</h2>
  <p>Let's change the font!</p>
  <div class="textfontbuttons">
  	<button id="font1" class="fbutton" onClick="changeTextFont">Open Sans</button>
    <button id="font2" class="fbutton" onClick="changeTextFont">Serif</button>
  	<button id="font3" class="fbutton" onClick="changeTextFont">Montserrat</button>
  	<button id="font4" class="fbutton" onClick="changeTextFont">Cursive</button>
  	<button id="font5" class="fbutton" onClick="changeTextFont">Monospace</button>
  	<button id="font6" class="fbutton" onClick="changeTextFont">System UI</button>
    <p id="default-is">Open Sans</p>
  </div>
</div>

<div class="settingembed">
  <h2>Discord Example</h2>
  <p>Let's change the theme for discord examples!</p>
  <div class="discordexamplebuttons">
    <button id="light-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="light"></div>
      <div class="display-text">Light</div>
    </button>
    <button id="dark-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="dark"></div>
      <div class="display-text">Dark</div>
    </button>
    <button id="midnight-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="midnight"></div>
      <div class="display-text">Midnight</div>
    </button>
    <button id="redmoon-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="redmoon"></div>
      <div class="display-text">Red Moon</div>
    </button>
    <button id="nightsapphire-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="nightsapphire"></div>
      <div class="display-text">Night Sapphire</div>
    </button>
    <button id="emeraldearth-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="emeraldearth"></div>
      <div class="display-text">Emerald Earth</div>
    </button>
    <button id="nightviolet-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="nightviolet"></div>
      <div class="display-text">Night Violet</div>
    </button>
    <button id="oldwood-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="oldwood"></div>
      <div class="display-text">Old Wood</div>
    </button>
    <button id="azuresky-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="azuresky"></div>
      <div class="display-text">Azure Sky</div>
    </button>
    <button id="cherryvelvety-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="cherryvelvety"></div>
      <div class="display-text">Cherry Velvety</div>
    </button>
    <button id="forestdepth-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="forestdepth"></div>
      <div class="display-text">Forest Depth</div>
    </button>
    <button id="nightchestnut-button" class="dbutton" onClick="changeDiscordTheme">
      <div class="display-color" id="nightchestnut"></div>
      <div class="display-text">Night Chestnut</div>
    </button>
  </div>
</div>

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example ❤️
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png
      count: 1
      reacted: false
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Added!
```

<div class="settingembed">
  <h2>Code Highlighting</h2>
  <p>Input your  highlighting code here!</p>
  <div class="codehighlighting">
    <button id="copyHG" onClick="copyHGInput" class="hgButton">
      <p><i class="fa fa-clipboard" aria-hidden="true"></i> Copy</p>
    </button>
    <button class="hgButton">
      <p><i class="fa fa-book" aria-hidden="true"></i> What is this?</p>
    </button>
    <button id="resetHG" onClick="resetHGInput" class="hgButton">
      <p><i class="fa fa-refresh" aria-hidden="true"></i> Reset</p>
    </button>
    <textarea id="jsonhginput"></textarea>
  </div>
</div>