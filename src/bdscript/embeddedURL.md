# $embeddedURL
Sets the title to be a hyperlink.

> 📝 Only works if `$title` is also used.

## Syntax
```
$embeddedURL[Link;(Index)]
```

### Parameters
- `Link` `(Type: URL || Flag: Emptiable)`: The link to set the title hyperlink to.
- `Index` `(Type: Integer || Flag: Optional)`: What embed the title hyperlink should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$title[Google]
$embeddedURL[https://google.com]
$footer[⬆️ Title hyperlink]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  embed:
    title: Google
    url: https://google.com
    footer:
      text: ⬆️ Title hyperlink
```
