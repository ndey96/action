
let appTheme = {};

/* eslint-disable global-require */
if (typeof __PRODUCTION__ !== 'undefined' && __PRODUCTION__) {
  /*
   * Production optimization, built by npm run build:server
   * and /webpack/utilsJS.js:
   */
  appTheme = require('appTheme.json');
} else {
  appTheme = require('./theme.js');
}
/* eslint-enable */

const exportTheme = appTheme;
export default exportTheme;
