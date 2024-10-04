# $random[]
Returns a random number between 'minimum' and 'maximum'.

> `$random[]` never returns the 'maximum' value, as it's right side exclusive range. Basically, to get a random number between 1 and 10; you'd put 11 as the 'maximum' instead of 10 i.e `$random[1;11]`.

## Syntax
```
$random[Minimum;Maximum]
````

### Parameters 
- `Minimum` `(Type: Integer, Float || Flag: Required)`: The minimum value.
- `Maximum` `(Type: Integer, Float || Flag: Required)`: The maximum value.

## Example
```
$nomention
The random number is **$random[1;21]**
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    The random number is <b>16</b>
```
