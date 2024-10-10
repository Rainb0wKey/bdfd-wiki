# $isNumber
Returns whether the provided value is a number or not.

> 🧙‍♂"true" means the value is a number, "false" means it isn't.

## Syntax
```
$isNumber[Value]
```

### Parameters
- `Value` `(Type: String || Flag: Emptiable)`: The text to check.

## Example
```
$nomention
Number? $isNumber[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 52
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Number? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 52.4
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Number? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example hello
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Number? false
```
