const next = require("eslint-config-next");

module.exports = [
  ...next,
  { rules: { "react/no-unescaped-entities": "off" } },
];
