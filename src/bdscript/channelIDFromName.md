# $channelDFromName
<div class="functionTags">
  <span id="DeprectedTag">Deprecated</span>
</div>

> This function is deprecated, instead better use [`$channelID[]`](./channelIDComplex.md).

Returns a channel's ID from its name.

## Syntax
```
$channelIDFromName[Channel name]
```

### Parameters
- `Channel name` `(Type: String || Flag: Required)`: The channel name that the bot will return the channel ID for.

## Example
```
$nomention
Channel ID: $channelIDFromName[$mesaage]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example main-chat
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Channel ID: 1014546423032860754
```
