WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-has-touch', location = 'node_modules/@atlassian/aui/src/js/aui/internal/has-touch.js' */
("undefined"===typeof window?global:window).__2d5f094064a34a526c3e143503c89b91=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=window.DocumentTouch;a.default="ontouchstart"in window||b&&document instanceof b;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};