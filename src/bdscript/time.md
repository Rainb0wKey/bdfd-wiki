# $time
Changes the timezone for date/time functions.

## Syntax
```
$time[Timezone]
```

### Parameters
- `Timezone` `(Type: String || Flag: Required)`: The timezone to use in the date/time functions. Accepts [TZ database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) timezone name as input.

## Example
```
$nomention
$time[America/New_York]
New York Time: $hour:$minute, $day
$time[Europe/Moscow]
Moscow Time: $optOff[$hour:$minute, $day]
```

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
    <div id="time-mark"></div>
```

<script src="../theme/livetime.js"></script>
