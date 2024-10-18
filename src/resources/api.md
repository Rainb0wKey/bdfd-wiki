# BDFD API
Public Bot Designer for Discord API.

<style>
summary {
    background: hsl(0deg 0% 100% / 5%) !important;
}
    
.mainAPI {
    position: relative;
    background-color: var(--color3);
    border-radius: 10px;
    padding-bottom: 1.5rem;
    padding-left: 15px;
    padding-right: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transition: .3s;
}

.mainAPI h2 {
    padding-top: 1rem;
    margin-top: 1rem;
}

.mainAPI code {
    color: var(--color1) !important;
}

.wrap-button,
.syntax-button {
    visibility: hidden;
}

.endpoint {
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    background: var(--color3);
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 1.25rem;
    margin-top: -3rem;
    transition: .3s;
}

.endpoint h3 {
    padding-top: 1rem;
}

.endpoint #GET {
    background: var(--color2);
    padding: .25rem;
    border-radius: 10px;
    transition: .3s;
}

.endpoint:hover {
    transform: scale(1.01);
    transition: .3s;
}

.endpoint:hover #GET {
    border-radius: 7px;
    transition: .3s;
}
</style>

<div class="mainAPI">
  <h2>API</h2>
  <p>Our API domain:</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api</code></pre>
</div>

## Endpoints

<div class="endpoint">
  <h3><span id="GET">GET</span> /function_list</h3>
  <p>Returns an array of function.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/function_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
      ...,
      {
        "tag": "$aiQuota",
        "shortDescription": "Get remaining AI quota for this bot",
        "longDescription": "",
        "arguments": null,
        "intents": 0,
        "premium": true,
        "color": 0
    }, ... 
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /callback_list</h3>
  <p>Returns an array of callback.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/callback_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
      ...,
      {
        "name": "$onMessageDelete[channel ID]",
        "description": "Triggers command when user deletes message",
        "arguments": [
            {
                "name": "Channel ID",
                "description": "Channel ID of the log channel",
                "type": "Snowflake",
                "required": true
            }
        ],
        "intents": 0,
        "is_premium": false
    }, ... 
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /function_tag_list</h3>
  <p>Returns an array of function tags.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/function_tag_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
    "$addButton[]",
    "$addCmdReactions[]",
    "$addEmoji[]",
    "$addField[]",
    "$addMessageReactions[]",
    "$addReactions[]",
    "$addSelectMenuOption[]",
    "$addTextInput[]",
    "$addTimestamp",
    "$addTimestamp[]",
    "$aiQuota", 
    ... 
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /callback_tag_list</h3>
  <p>Returns an array of callback tags.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/callback_tag_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
    "$onJoined[]",
    "$onLeave[]",
    "$onMessageDelete[]",
    "$onBanAdd[]",
    "$onBanRemove[]",
    "$alwaysReply",
    "$messageContains[]",
    "$awaitedCommand[]",
    "$reaction[]",
    "$onInteraction[]",
    "$onInteraction"
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /function/:function</h3>
  <p>Returns a function.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/function/$c[]</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">{
    "tag": "$c[Comment]",
    "shortDescription": "Can be used to comment your code.",
    "longDescription": "",
    "arguments": [
        {
            "name": "Comment",
            "type": "String",
            "required": true,
            "empty": true
        }
    ],
    "intents": 0,
    "premium": false,
    "color": 0
}</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /callback/:callback</h3>
  <p>Returns an array of callback tags.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/callback/$onJoined[]</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">{
    "name": "$onJoined[channel ID]",
    "description": "Triggers command when user joins server",
    "arguments": [
        {
            "name": "Channel ID",
            "description": "Channel ID of the welcome channel",
            "type": "Snowflake",
            "required": true
        }
    ],
    "intents": 2,
    "is_premium": false
}</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /emoji_alias_list</h3>
  <p>Returns a map, mapping emoji to a list of its aliases.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/emoji_alias_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">{
    "#️⃣": [
        ":hash:",
        ":keycap_hash:"
    ],
    "*️⃣": [
        ":keycap_asterisk:",
        ":asterisk:"
    ],
    "0️⃣": [
        ":keycap_0:",
        ":zero:"
    ],
    "1️⃣": [
        ":keycap_1:",
        ":one:"
    ], 
    ... 
}</code></pre>
  </details>
</div>


## Intents
- `0`: None
- `2`: Member Intent
- `256`: Presence Intent

```admonish faq title="What is this?"
Read more about intents in the our "[Gateway Intents](../guides/introduction/gatewayIntents.md)" guide.
```

## Data Structures
- `Can be empty` means the field can be set to a default value.
- `Can be omitted` means the field might not be included in the response.

### Function
| Field name       | Type                            | Description                                            | Can be empty | Can be omitted |
|------------------|---------------------------------|--------------------------------------------------------|--------------|----------------|
| tag              | String                          | Function name                                          | False        | False          |
| shortDescription | String                          | Description for a function without arguments           | True         | False          |
| longDescription  | String                          | Description for a function with arguments              | True         | False          |
| arguments        | Array of [Arguments](#Argument) | Arguments needed by a function                         | True         | False          |
| intents          | Integer                         | Discord intents needed by bot to execute this function | False        | False          |
| premium          | Bool                            | function needs premium                                 | False        | False          |
| deprecated       | Bool                            | function is deprecated                                 | False        | True           |
| deprecatedFor    | String                          | Name of the function that should be used instead       | False        | True           |

### Argument
| Field name  | Type                                     | Description                                                                                 | Can be omitted |
|-------------|------------------------------------------|---------------------------------------------------------------------------------------------|----------------|
| name        | String                                   | Argument name                                                                               | False          |
| description | String                                   | Description for a function's argument                                                       | True           |
| type        | String [Argument Types](#Argument-Types) | Argument type. `\|` is used for a compound type                                             | False          |
| required    | bool                                     | Argument is required                                                                        | False          |
| tupleTypes  | Array of [Arguments](#Argument)          | Array of arguments which can be repeated, i.e `channelID;messageID;channelID;messageID;...` | True           |
| empty       | Bool                                     | Argument can be empty                                                                       | True           |
| ellipsis    | Bool                                     | Argument accepts more data, i.e `username1;username2;username3;...`                         | True           |
| enumData    | Array of Strings                         | Possible options accepted as argument, i.e `primary/secondary/or/etc`                       | True           |

### Argument Types
Multiple types can be merged together with `|` *(OR)*. \
Possible argument types:
- `String`
- `Integer`
- `Float`
- `Snowflake`
- `Bool`
- `Color`
- `Permission`
- `Duration`
- `HowMany` *(`>`, `2`, `<`, etc)*
- `URL`
- `Enum`
- `Tuple`
