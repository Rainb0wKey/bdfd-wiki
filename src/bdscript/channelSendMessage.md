# $channelSendMessage
Sends a message in the provided channel.

## Syntax
```
$channelSendMessage[Channel ID;Message]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to send the message in.
- `Message` `(Type: String || Flag: Required)`: The message that gets sent to the channel.

## Example
```
$nomention
The message was sent to  the channel: <#$mentionedChannels[1]>
$channelSendMessage[$mentionedChannels[1];Hello!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#secret-channel>
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    The message was sent to  the channel: <#secret-channel>
```

``` discord yaml
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello!
```

