# $userServerAvatar
Returns the URL for the server avatar of a given user.

## Syntax
```
$userServerAvatar[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user from whom to get the server avatar. If the user doesn't have a server avatar, then the default user avatar will be returned instead.

## Example
```
$nomention
$image[$userServerAvatar[$authorID]?size=4096]
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
    image: https://github.com/user-attachments/assets/3f669ece-44b2-441d-9051-014c13720978
```

```admonish question title="What is this?"
How [`$image[]`](./image.md) and [`$authorID`](./authorID.md) works?
```
