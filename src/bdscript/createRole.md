# $createRole
Creates a new role.

## Syntax
```
$createRole[Role name;Color hex;Hoist?;Mentionable?]
```
> Discord allows users to create up to 250 roles per server.

### Parameters
- `Role name` `(Type: String || Flag: Required)`: The name to give the new role.
> Role names can have a maximum of 100 characters.
- `Color hex` `(Type: Color || Flag: Required)`: The [color hex](https://htmlcolorcodes.com/color-picker) of the new role.
- `Hoist?` `(Type: Bool || Flag: Vacantable)`: Whether the role should be displayed separately (hoisted) or not. `no` means the role won't be hoisted, `yes` means it will.\
  ![example](https://user-images.githubusercontent.com/69215413/122795705-965e9480-d28b-11eb-8e4e-98338f143ecb.png)
- `Mentionable?` `(Type: Bool || Flag: Vacantable)`: Whether the role should be mentionable by everyone. `no` means the role won't be mentionable, `yes` means it will.\
  ![example](https://user-images.githubusercontent.com/69215413/122795765-a37b8380-d28b-11eb-8f06-c23e01bafc11.png)

## Example
```
$nomention
$createRole[Cool Role;#FFFF00;yes;no]
New role created!
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
    New role created!
```
\
![example](https://user-images.githubusercontent.com/69215413/125973030-7c9b980c-cffb-4f8e-aacc-a644a6fa23c3.png)

> [You can use `$roleID[]` to return the role ID.](./roleID.md)
