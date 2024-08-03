# Error Handling
In this section, you’ll learn how to use the error handling.

```admonish danger title="BDScript 2"
You must use **BDScript 2** for the functions to work correctly.
```

## Content

## Functions Used
- [`$try`](../../../bdscript/try.md)
- [`$endtry`](../../../bdscript/endtry.md)
- [`$catch`](../../../bdscript/catch.md)
- [`$error[]`](../../../bdscript/error.md)

# $try
Opens the Error Handling block.

## Syntax
```
$try
```

## Example
- Let's create 3 commannds with different triggers: `!example`, `!test` and `!bot`.

Command code for `!example` trigger:
```
$nomention
$try
  $sum[2;a]
$endtry
```

Command code for `!test` trigger:
```
$nomention
$try
  $sum[2;2]
$edntry
```

```admonish question title="What is this?"
How [`$sum[]`](../../../bdscript/sum.md) works? The explanation of how [`$endtry`](#endtry) works will be given below.
```

Command code for `!bot` trigger:
```
$nomention
$sum[2;a]
```

Now let's run each command:

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !test
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    4
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !bot
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Function <code>$sum</code> at <code>2:9</code> returned an error: expected integer in position 2, got 'a'
```

As you can see only `!test` command returned a response, but why?

```dmonish abstract title="Explanation"
`$try` executes all the code (from top to bottom and from left to right) in its block and stops execution if it encounters an error.
```

```dmonish danger title="Need to know"
`$try` block does not support some errors. For example not closed bracket in the function.
```

# $endtry
Closes the Error Handling block.

## Syntax
```
$endtry
```

## Example
```
$nomention
$try
  $sum[2;2]
$endtry
```

- With `$endtry`:
```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    4
```

- Without `$endtry`:
```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <code>$try</code> not closed with <code>$endtry</code> or invalid use of <code>$sum</code>
```

# $catch
Used to create a sub-block between `$try` and `$endtry` that will contain the code that will be executed when an error occurs.

## Syntax
```
$catch
```

## Example
```
$nomention
$try
  $sum[2;$message]
$catch
  ❌ Invalid number!
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Invalid number!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 6
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    8
```

```admonish question title="What is this?"
How [`$message`](../../../bdscript/message.md) works?
```

# $error
Used in the `$catch` block to return the BDScript 2 error information.

## Syntax
```
$error[Type]
```

## Parameters
- `Type` `(Type: Enum || Flag: Required)`: What type of error data to return.

### Error Type
| Name | Description | Response example
| `command` | Returns the name of the function that returned the error. | $sum
| `message` | Returns the error message that was received. | expected integer in position 2, got 'a'
| `source` | Returns the content of the line where the error occurred. | $sum[2;a]
| `row` | Returns the number of the row in the code where the error occurred. | 2
| `column` | Returns the number of the column in the code where the error occurred. | 10

~~~admonish warning title="Syntax sensitivity"
The type input must only be written in lowercase letters.
❌ Not correct:
```
$error[ROW]
```
✅ Correct:
```
$error[row]
```
~~~

## Example
```
$nomention
$try
  $description[Hello developer!;]
$catch
❌ An error has occurred!
Function: $error[command]
Error: $error[message]
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ An error has occurred!
    Function: $description
    Error: expected valid value in position 2, got empty value
```

```admonish question title="What is this?"
How [`$description[]`](../../../bdscript/description.md) works?
```

# Create custom error
```
$nomention
$try
  $sum[2;$message]
$catch
  $title[Error!]
  $description[🚧 Description:
```$error[message]```]
  $addField[Location;Row: `$error[row]` | Column: `$error[column]`]
  $footer[🔍 $error[source]]
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 100
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    102
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  embed: 
    title: |
     Error!
    description: |
     🚧 Description:
     <code class="multiline">expected valid value in position 2, got empty value</code>
    fields:
    - name: Location
      value: |
        Row: <code>2</code> | Column: <code>17</code>
    footer:
      text: | 
       🔍 $sum[2;]
```

### Limiter Error
As a way to use Error Handling with Limiter Errors, we'll use `$cooldown[]`. With the help of Error Handling, we can make a nice cooldown error message.

To handle only the error of our limiter, we will use a [temporary variable](../../../bdscript/var.md) and [if statements](../ifStatements.md).
If `$cooldown[]` returns an error, the value of the temporary variable will be set to `true` (in which case our nice error message will be sent).

> **Note**: The `error message` argument in `$cooldown[]` must be left blank.

```
$nomention

$var[cooldownError;false]

$try
  $cooldown[3m;]
$catch
  $var[cooldownError;true]
$endtry

$if[$var[cooldownError]==false]
Hey $username, are you making an example for the guide?
$else
$color[E74C3C]
$author[Oops, $username!]
$authorIcon[$authorAvatar]
$title[You have a cooldown!]
$description[Come back <t:$sum[$getTimestamp;$getCooldown[normal]]:R>.]
$endif
```
![Limiter Error](https://user-images.githubusercontent.com/70456337/194721773-c9487fd5-89de-4d4d-8296-a56150b94db7.png)
![Limiter Error](https://user-images.githubusercontent.com/70456337/194721785-cbbd2936-033b-4e0b-b554-6af8b3325c38.png)
