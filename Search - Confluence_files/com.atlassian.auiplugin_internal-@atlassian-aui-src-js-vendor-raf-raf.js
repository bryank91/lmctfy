WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-raf-raf', location = 'node_modules/@atlassian/aui/src/js-vendor/raf/raf.js' */
("undefined"===typeof window?global:window).__5ca5c5ddaacf5652a879cfec07ca5db7=function(){for(var a=window,f=0,d=["webkit","moz"],b=a.requestAnimationFrame,c=a.cancelAnimationFrame,e=d.length;0<=--e&&!b;)b=a[d[e]+"RequestAnimationFrame"],c=a[d[e]+"CancelAnimationFrame"];if(!b||!c)b=function(a){var b=Date.now(),c=Math.max(f+16,b);return setTimeout(function(){a(f=c)},c-b)},c=clearTimeout;a.requestAnimationFrame=b;a.cancelAnimationFrame=c;return{}}.call(this);
}catch(e){WRMCB(e)};