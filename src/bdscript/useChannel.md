# $useChannel
Redirects the bot's response message to a different channel.

```admonish warning
`$useChannel[]` **cannot** redirect the original slash command response.
```

## Syntax
```
$useChannel[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel to which the message will be redirected.

## Example
```
$nomention
$useChannel[$mentionedChannels[1]]
$description[Hello!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#secret-channel>
```

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  embed: 
    description: Hello!
```

```admonish question title="What is this?"
How [`$description[]`](./description.md) and [`$mentionedChannels[]`](./mentionedChannels.md) works?
```
