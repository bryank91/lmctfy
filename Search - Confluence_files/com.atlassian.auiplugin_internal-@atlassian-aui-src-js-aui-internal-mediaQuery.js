WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-mediaQuery', location = 'node_modules/@atlassian/aui/src/js/aui/internal/mediaQuery.js' */
("undefined"===typeof window?global:window).__233c61f178d7afeb305a2369d3ca4c77=function(){var a={};Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a){if(window.matchMedia)return window.matchMedia(a).matches;var b=document.createElement("style");b.type="text/css";b.id="testMedia";b.innerText="@media "+a+" { #testMedia { width: 1px; } }";document.head.appendChild(b);a="1px"===window.getComputedStyle(b,null).width;b.parentNode.removeChild(b);return a};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};