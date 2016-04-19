module.exports = function (time, small, i18n) {
  time = typeof time === "number" && new Date(time * 1000) // unix
      || typeof time === "string" && new Date(time) || time; // string or date
  small = typeof small === "undefined" && false || Boolean(small); // defaults
  i18n = typeof i18n === "undefined" && {
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
  } || i18n;

  var diff = new Date() - time,
      seconds = Math.floor(Math.abs(diff) / 1000),
      minutes = Math.floor(seconds / 60);
  var r = minutes < 1 && {r: seconds, k: "s"}
       || minutes === 1 && {r: 1, k: "m"}
       || minutes <= 44 && {r: minutes, k: "mm"}
       || minutes <= 89 && {r: 1, k: "h"}
       || minutes <= 1439 && {r: Math.floor(minutes / 60), k: "hh"}
       || minutes <= 2519 && {r: 1, k: "d"}
       || minutes <= 43199 && {r: Math.floor(minutes / 1440), k: "dd"}
       || minutes <= 86399 && {r: 1, k: "m"}
       || minutes <= 525599 && {r: Math.floor(minutes / 43200), k: "mm"}
       || minutes <= 655199 && {r: 1, k: "y"}
       || minutes > 655199 && {r: Math.floor(minutes / 525600), k: "yy"};

  i18n = i18n[(small && "small" || "normal")];

  return (diff < 0 && i18n.future || i18n.past).replace("%s", i18n[r.k].replace("%d", r.r));
};
