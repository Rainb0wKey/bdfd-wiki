# $disableInnerSpaceRemoval
Disables the removal of multiple spaces from within the message.

<style>
.discord-messages {
    margin-top: 1.5rem;
}

.discord-messages > .discord-message:before {
    color: var(--color1);
    background: var(--color3);
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: -1.8rem;
    margin-top: -.9rem;
    width: fit-content;
    transition: .3s;
    z-index: 1000;
}

.discord-messages > .discord-message:before {
    content: 'Without $disableInnerSpaceRemoval';
}

.discord-messages:first-of-type > .discord-message:before {
    content: 'With $disableInnerSpaceRemoval';
}

.discord-messages > .discord-message:hover:before {
    transform: scale(1.025);
    transform: rotate(-2.5deg);
    border-radius: 12.5px;
    transition: .3s;
}
</style>

## Syntax
```
$disableInnerSpaceRemoval
```

## Example
```
$nomention
$disableInnerSpaceRemoval
Hello               $displayName!
```

``` discord yaml
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
      Hello RainbowKey!
```

``` discord yaml
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
      Hello        RainbowKey!
  ```

```admonish question title="What is this?"
How [`$displayName`](./displayName.md) works?
```
