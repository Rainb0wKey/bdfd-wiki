# Settings
Let's customize your experience in our Bot Designer For Discord wiki world!

<link rel="stylesheet" href="./settings.css">
<script src="./settings.js" defer></script>

<div class="settingembed">
  <h2>Wiki Theme</h2>
  <p>You can choose a color scheme that best suits your preferences and requirements.</p>
  <button class="resetSettingButton" id="resetTheme" onClick="resetTheme()">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <input type="range" id="themeSlider" min="0" max="360" oninput="updateColor()">
  <div id="themePreview">
    <div id="colorThemeDisplay"></div>
    <div id="hexColor"></div>
    <div class="lock-text" id="lockText" onClick="lockTheme()">Locked</div>
  </div>
  <div class="themebuttons">
    <button class="tbutton" id="setBackground" onClick="useBackground()">Set background</button>
    <button class="tbutton" id="gradientTheme" onClick="gradientBackground()">Gradient</button>
    <button class="tbutton" id="setDarkBackground" onClick="useDarkBackground()">Dark background</button>
    <button class="tbutton" id="setWhiteColor" onClick="useFontColor()">Light text</button>
  </div>
  <p id="default-is">270°</p>
</div>

<div class="settingembed">
  <h2>Text Highlighting</h2>
  <p>Improve readability and make your text stand out with  text highlighting.</p>
  <div class="texthighbuttons">
    <button id="high-none" onClick="changeTextHigh('none')" class="hbutton">Disable</button>
    <button id="high-white" onClick="changeTextHigh('white')" class="hbutton">White</button>
    <button id="high-black" onClick="changeTextHigh('black')" class="hbutton">Black</button>
    <button id="high-red" onClick="changeTextHigh('red')" class="hbutton">Red</button>
    <button id="high-pink" onClick="changeTextHigh('pink')" class="hbutton">Pink</button>
    <button id="high-orange" onClick="changeTextHigh('orange')" class="hbutton">Orange</button>
    <button id="high-yellow" onClick="changeTextHigh('yellow')" class="hbutton">Yellow</button>
    <button id="high-green" onClick="changeTextHigh('green')" class="hbutton">Green</button>
    <button id="high-blue" onClick="changeTextHigh('blue')" class="hbutton">Blue</button>
    <button id="high-purple" onClick="changeTextHigh('purple')" class="hbutton">Purple</button>
  </div>
</div>

<div class="settingembed">
  <h2>Text Size</h2>
  <p>Easily modify the size of text for optimal viewing and readability.</p>
  <button class="resetSettingButton" id="textResetButton" onClick="resetFontSize()">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="textsizebuttons">
    <label id="display-size">62</label>
    <input type="range" id="textsize" min="50" max="100" value="60" oninput="changeFontSize()"/>
    <p id="default-is">60%</p>
  </div>
</div>

<div class="settingembed">
  <h2>Text Font</h2>
  <p>Select the font that makes text more understandable.</p>
  <button class="resetSettingButton" id="font1" onClick="changeTextFont('font1')">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="textfontbuttons">
  	<button id="font1" class="fbutton" onClick="changeTextFont('font1')">Open Sans</button>
    <button id="font2" class="fbutton" onClick="changeTextFont('font2')">Serif</button>
  	<button id="font3" class="fbutton" onClick="changeTextFont('font3')">Montserrat</button>
  	<button id="font4" class="fbutton" onClick="changeTextFont('font4')">Cursive</button>
  	<button id="font5" class="fbutton" onClick="changeTextFont('font5')">Monospace</button>
  	<button id="font6" class="fbutton" onClick="changeTextFont('font6')">System UI</button>
    <p id="default-is">Open Sans</p>
  </div>
</div>

<div class="settingembed">
  <h2>Discord Example</h2>
  <p>Let’s give our Discord example previews a color makeover to make them look better.</p>
  <button class="resetSettingButton" onClick="changeDiscordTheme('dark')">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="discordexamplebuttons">
    <button id="light-button" class="dbutton" onClick="changeDiscordTheme('light')">
      <div class="display-color" id="light"></div>
      <div class="display-text"> Discord Light</div>
    </button>
    <button id="dark-button" class="dbutton" onClick="changeDiscordTheme('dark')">
      <div class="display-color" id="dark"></div>
      <div class="display-text"> Discord Dark</div>
    </button>
    <button id="midnight-button" class="dbutton" onClick="changeDiscordTheme('midnight')">
      <div class="display-color" id="midnight"></div>
      <div class="display-text">Discord Midnight</div>
    </button>
    <button id="redmoon-button" class="dbutton" onClick="changeDiscordTheme('redmoon')">
      <div class="display-color" id="redmoon"></div>
      <div class="display-text">Red Moon</div>
    </button>
    <button id="oldwood-button" class="dbutton" onClick="changeDiscordTheme('oldwood')">
      <div class="display-color" id="oldwood"></div>
      <div class="display-text">Old Wood</div>
    </button>
    <button id="nightsapphire-button" class="dbutton" onClick="changeDiscordTheme('nightsapphire')">
      <div class="display-color" id="nightsapphire"></div>
      <div class="display-text">Night Sapphire</div>
    </button>
    <button id="emeraldearth-button" class="dbutton" onClick="changeDiscordTheme('emeraldearth')">
      <div class="display-color" id="emeraldearth"></div>
      <div class="display-text">Emerald Earth</div>
    </button>
    <button id="cherryvelvety-button" class="dbutton" onClick="changeDiscordTheme('cherryvelvety')">
      <div class="display-color" id="cherryvelvety"></div>
      <div class="display-text">Cherry Velvety</div>
    </button>
    <button id="forestdepth-button" class="dbutton" onClick="changeDiscordTheme('forestdepth')">
      <div class="display-color" id="forestdepth"></div>
      <div class="display-text">Forest Depth</div>
    </button>
    <button id="nightchestnut-button" class="dbutton" onClick="changeDiscordTheme('nightchestnut')">
      <div class="display-color" id="nightchestnut"></div>
      <div class="display-text">Night Chestnut</div>
    </button>
    <button id="azuresky-button" class="dbutton" onClick="changeDiscordTheme('azuresky')">
      <div class="display-color" id="azuresky"></div>
      <div class="display-text">Azure Sky</div>
    </button>
    <button id="nightviolet-button" class="dbutton" onClick="changeDiscordTheme('nightviolet')">
      <div class="display-color" id="nightviolet"></div>
      <div class="display-text">Night Violet</div>
    </button>
  </div>
  <p id="default-is">Dark</p>
</div>

```discord yaml
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
  <button class="resetSettingButton" id="resetHG" onClick="resetHGInput()">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="codehighlighting">
    <button id="copyHG" onClick="copyHGInput()" class="hgButton">
      <p><i class="fa fa-clipboard" aria-hidden="true"></i> Copy</p>
    </button>
    <button class="hgButton">
      <p><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><i class="fa fa-book" aria-hidden="true"></i> What is this?</a></p>
    </button>
    <textarea id="jsonhginput" oninput="updateCodeHG()" maxlength="10000"></textarea>
  </div>
  <p class="charCount">0 / 10000</p>
</div>

```
$nomention
$allowUserMentions[]
$reply
$botTyping

$try
  $sendMessage[Hello, $username 👋, ping: $ping ms]
  $if[$toLowercase[$message]==secret]
    $footer[BDFD 🤩]
  $endif
$catch
  $sendMessage[Bye!]
  $botLeave $c[Kicks the bot😉]
$endtry
```
