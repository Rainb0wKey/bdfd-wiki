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

```
```discord yaml
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
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example -6.4
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 8
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 8
```
```
