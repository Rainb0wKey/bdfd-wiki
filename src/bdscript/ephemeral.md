# $ephemeral
Makes the bot's response ephemeral.

> 🧙‍♂️ [What are ephemeral responses? (click-me)](https://support.discord.com/hc/en-us/articles/1500000580222-Ephemeral-Messages-FAQ)

## Syntax
```
$ephemeral
```
> ⚠️ You can get an ephemeral response only through an interaction (slash commands, buttons, select menus, etc.)

## Example
```
$nomention
$ephemeral
Hello!
```

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  ephemeral: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    color: "#E67E22"
    command: /example
  content: |
    Hello!
```

- Without `$ephemeral`:

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    color: "#E67E22"
    command: /example
  content: |
    Hello!
```
