# $alwaysReply
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
  <span id="CallbackTag">Callback</span>
</div>

*Triggered whenever a user sends a message.*

`$alwaysReply` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user sends a message.\
It's useful when creating leveling, auto-moderation, or message counting systems.

## Syntax
```
$alwaysReply
```

## Example
```
$nomention
Hello, $displayName!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Hello everyone!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello, RainbowKey!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  command:
    user_id: 803569638084313098
    color: "#E67E22"
    author: RainbowKey
    command: /example
  content: |
    I can't detect slash commands!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  ephemeral: true
  content: |
    And I can't detect ephemeral messages!
```
