# mininow - a super tiny fromnow date formatter

```
npm install --save mininow
```

- i18n support
- small and normal formats (`1y`/`1 year`)
- extremely tiny, weighs `0.5 kb` minified and gzipped
- zero dependencies
- supports future/past contexts (`ago`/`in`)
- takes `unix`/`string`/`date`

### examples

```
const fromnow = require("mininow");

console.log(fromnow(1461077213)) // 30 seconds ago

console.log(fromnow(1461077213), true) // 30s

console.log(fromnow("2018.08.12", true)) // 2y

console.log(fromnow(new Date("2018.08.12"))) // in 2 years

console.log(fromnow(new Date("2018.08.12"), true)) // 2y
```

### module.export

Returns a formatted readable string

**Parameters**

-   `time` **Number or String or Object** unix number, string or date obj
-   `small` **Number or Boolean** minify the formatted string
-   `i18n` **Object** the i18n object, standard to momentjs

Returns **String**

### i18n Object

The i18n object formatters

```
var i18n_fromnow = {
  small: {
    future: "%s", past: "%s", s:  "s", m:  "1m",
    mm: "%dm", h:  "1h", hh: "%dh", d:  "1d",
    dd: "%dd", M:  "1m", MM: "%dm", y:  "1y",
    yy: "%dy"
  },
  normal: {
    future: "in %s", past: "%s ago", s:  "seconds", m:  "a minute",
    mm: "%d minutes", h:  "an hour", hh: "%d hours", d:  "a day",
    dd: "%d days", M:  "a month", MM: "%d months", y:  "a year",
    yy: "%d years"
  }
};

console.log(fromnow(new Date(), 1, i18n_fromnow));
```
