WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:event', location = 'includes/js/api/event.js' */
define("confluence/api/event",["ajs"],function(a){return{bind:function(){a.bind.apply(this,arguments)},unbind:function(){a.unbind.apply(this,arguments)},trigger:function(){a.trigger.apply(this,arguments)},stopEvent:function(){a.stopEvent.apply(this,arguments)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/dark-features.js' */
define("confluence-ui-components/dark-features",["ajs"],function(a){return a.DarkFeatures});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/internal/space-resolver.js' */
define("confluence-ui-components/js/internal/space-resolver",["underscore","jquery","ajs"],function(i,b,h){var g={conf_all:"All spaces",conf_current:"Current space",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces"};function e(j){var k=i.map(j,function(l){return"spaceKey="+encodeURI(l)});return k.join("&")}function f(k,l){var j=typeof l==="undefined";var m=i.escape(j?k:l);return{id:k,text:m,idOnly:j}}function a(m,p){var n={};var o=[];i.each(m,function(r){var q=d(r);if(q){n[r]=f(r,q)}else{o.push(r)}});var k;if(o.length){var l=h.contextPath()+"/rest/api/space?"+e(o);k=b.getJSON(l)}else{k=new b.Deferred();k.resolve({results:[]})}function j(r){var q=r.results;i.each(q,function(t){n[t.key]=f(t.key,t.name)});var s=i.map(m,function(t){return n[t]||f(t)});p(s)}k.done(j)}function d(j){return g[j]}var c=["conf_favorites","conf_global","conf_personal"];return{getSpaceDisplayItems:a,getSpaceCategoryDisplayName:d,getSpaceTypeKeys:function(){return c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/space-picker.js' */
define("confluence-ui-components/js/space-picker",["underscore","ajs","jquery","confluence-ui-components/js/internal/space-resolver"],function(r,f,b,d){var a={data:null,suggestCategories:null};var p=function(s){return function(t){var u={id:t.spaceKey,text:t.spaceName};if(typeof s==="function"){return s(u)}return u}};var k;var c=function(s){return function(t,x){var w=b(t).val();if(w===""){return}var u=w.split(",");function v(y){if(!s.multiple){y=y[0]}x(y)}d.getSpaceDisplayItems(u,v)}};var e=function(t){var s;if(t.suggestCategories){var u={text:"Select a suggestion or type to search",children:r.map(t.suggestCategories,function(v){return{id:v,text:d.getSpaceCategoryDisplayName(v)}})}}return function(w){if(s){w.callback(s);return}function v(x){var y={results:[]};if(u){y.results.push(u)}if(x.length>0){y.results.push({text:"Suggested spaces",children:r.map(x,function(z){return{id:z.key,text:r.escape(z.name)}})})}s=y;w.callback(s)}b.getJSON(f.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(v).fail(function(){f.log("Couldn't fetch recent spaces");var x={results:[]};if(u){x.results.push(u)}w.callback(x)})}};var n=function(){return window.Select2.query.ajax({url:f.contextPath()+"/rest/quicknav/1/search?type=spacedesc&type=personalspacedesc",data:function(s){return{query:s,maxPerCategory:25}},quietMillis:250,results:function(u){var t=u.contentNameMatches;if(t.length<=1){return{results:[]}}else{var s=r.map(t[0],k);return{results:[{text:"Search results",children:s}]}}}})};function g(t){var s=n();var u=e(t);return function(v,x,w){if(v.term.length<2){return u(v)}else{if(typeof x==="function"){v.term=x(v.term)}k=p(w);return s(v)}}}function h(){var s=b(".select2-container-active").next("input");var t=s.val().trim();return(t!=="")?t.split(","):[]}function i(s){var t=r.intersection(s,d.getSpaceTypeKeys());return t.length>0}function j(s){return(typeof s.id!=="undefined")&&r.contains(d.getSpaceTypeKeys(),s.id)}function q(t,u,v){var s=[];t.forEach(function(w){if(w.children){var x=q(w.children,u,v);if(x.length){s.push(b.extend({},w,{children:x}))}}else{var y=j(w);if((u&&y)||(!u&&!y)){if(!r.contains(v,w.id)){s.push(w)}}}});return s}function m(t,v){if(!t.length||!v.length){return t}var u=i(v);var s=q(t,u,v);if(!s.length){s.push({text:"Can\'t filter by space types AND spaces",disabled:true})}return s}function o(s){var t=h();return m(s,t)}function l(t){t=r.extend({},a,t);var s={placeholder:"Select a space",formatResult:function(u,v,w){v.attr("title",b("<div/>").html(u.text).text());return b.fn.select2.defaults.formatResult.apply(this,arguments)},escapeMarkup:function(u){return u},multiple:t.multiple===true};if(t.disableMixedSpaceTypes){s.sortResults=o}if(t.data){return r.extend(s,{data:t.data})}else{return r.extend(s,{initSelection:c(t),query:g(t)})}}return{build:l,filterMixedTypesForValues:m}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/internal/space-picker-legacy.js' */
window.Confluence.UI.Components.SpacePicker=require("confluence-ui-components/js/space-picker");AJS.deprecate.prop(window.Confluence.UI.Components.SpacePicker,"build",{sinceVersion:"1.4.22",extraInfo:"Use require('confluence-ui-components/js/space-picker')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-ui-jquery-ui-datepicker', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
("undefined"===typeof window?global:window).__22e5f9dde23e62a30d105e8bdc75fa42=function(){(function(d){function B(){this.debug=!1;this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._inDialog=this._datepickerShowing=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass=
"ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January February March April May June July August September October November December".split(" "),monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" "),weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};d.extend(this._defaults,this.regional[""]);this.dpDiv=C(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function C(a){return a.bind("mouseout",
function(a){a=d(a.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");a.length&&a.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!d.datepicker._isDisabledDatepicker(D.inline?a.parent()[0]:D.input[0])&&b.length)b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
b.addClass("ui-state-hover"),b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover"),b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")})}function z(a,b){d.extend(a,b);for(var c in b)if(null==b[c]||void 0==b[c])a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.24"}});var x=(new Date).getTime(),D;d.extend(B.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){z(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null,e;for(e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f="div"==e||"span"==e;a.id||(this.uuid+=1,a.id="dp"+this.uuid);var j=this._newInst(d(a),f);j.settings=d.extend({},b||{},c||{});"input"==e?this._connectDatepicker(a,j):f&&this._inlineDatepicker(a,j)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:C(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),d.data(a,"datepicker",b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();c&&(b.append=d('<span class="'+this._appendClass+'">'+c+"</span>"),a[e?"before":"after"](b.append));a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");("focus"==
c||"both"==c)&&a.focus(this._showDatepicker);if("button"==c||"both"==c){var c=this._get(b,"buttonText"),f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(""==f?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){if(d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0])d.datepicker._hideDatepicker();
else{d.datepicker._datepickerShowing&&d.datepicker._lastInput!=a[0]&&d.datepicker._hideDatepicker();d.datepicker._showDatepicker(a[0])}return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){for(var b=0,c=0,d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":
"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),d.data(a,"datepicker",b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),
b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;a||(this.uuid+=1,this._dialogInput=d('<input type="text" id="dp'+this.uuid+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),d("body").append(this._dialogInput),a=this._dialogInst=this._newInst(this._dialogInput,!1),a.settings={},d.data(this._dialogInput[0],"datepicker",a));z(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);
this._pos=f?f.length?f:[f.pageX,f.pageY]:null;this._pos||(this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)]);this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);
d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");"input"==e?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"==e||"span"==e)&&b.removeClass(this.markerClassName).empty()}},
_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().removeClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");this._disabledInputs=d.map(this._disabledInputs,
function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().addClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled",
"disabled");this._disabledInputs=d.map(this._disabledInputs,function(b){return b==a?null:b});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(2==arguments.length&&"string"==typeof b)return"defaults"==
b?d.extend({},d.datepicker._defaults):e?"all"==b?d.extend({},e.settings):this._get(e,b):null;var f=b||{};"string"==typeof b&&(f={},f[b]=c);if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,!0),j=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");z(e.settings,f);null!==j&&(void 0!==f.dateFormat&&void 0===f.minDate)&&(e.settings.minDate=this._formatDate(e,j));null!==g&&(void 0!==f.dateFormat&&void 0===f.maxDate)&&(e.settings.maxDate=this._formatDate(e,g));this._attachments(d(a),
e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=
d.datepicker._getInst(a.target),c=!0,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=!1;break;case 13:return c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv),c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]),(a=d.datepicker._get(b,"onSelect"))?(c=d.datepicker._formatDate(b),a.apply(b.input?b.input[0]:null,[c,b])):d.datepicker._hideDatepicker(),
!1;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;
break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?1:-1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,
a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,7,"D");c=a.ctrlKey||a.metaKey;break;default:c=!1}else 36==a.keyCode&&a.ctrlKey?d.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){var b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat")),c=String.fromCharCode(void 0==
a.charCode?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||" ">c||!b||-1<b.indexOf(c)}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a)))d.datepicker._setDateFromField(a),d.datepicker._updateAlternate(a),d.datepicker._updateDatepicker(a)}catch(b){d.datepicker.log(b)}return!0},_showDatepicker:function(a){a=a.target||a;"input"!=a.nodeName.toLowerCase()&&
(a=d("input",a.parentNode)[0]);if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&(d.datepicker._curInst.dpDiv.stop(!0,!0),b&&d.datepicker._datepickerShowing&&d.datepicker._hideDatepicker(d.datepicker._curInst.input[0]));var c=d.datepicker._get(b,"beforeShow"),c=c?c.apply(a,[a,b]):{};if(!1!==c){z(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);d.datepicker._inDialog&&
(a.value="");d.datepicker._pos||(d.datepicker._pos=d.datepicker._findPos(a),d.datepicker._pos[1]+=a.offsetHeight);var e=!1;d(a).parents().each(function(){e=e|d(this).css("position")=="fixed";return!e});e&&d.browser.opera&&(d.datepicker._pos[0]-=document.documentElement.scrollLeft,d.datepicker._pos[1]-=document.documentElement.scrollTop);c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){var c=d.datepicker._get(b,"showAnim"),f=d.datepicker._get(b,"duration"),h=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(a.length){var c=d.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
!0;if(d.effects&&d.effects[c])b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h);else b.dpDiv[c||"show"](c?f:null,h);(!c||!f)&&h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);D=a;a.dpDiv.empty().append(this._generateHTML(a));this._attachHandlers(a);var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),
height:a.dpDiv.outerHeight()});a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");1<c&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(1!=b[0]||1!=b[1]?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&(d.datepicker._datepickerShowing&&
a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement)&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=
a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,j=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+(c?0:d(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:d(document).scrollTop());b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+j?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,
b.top+f>i&&i>f?Math.abs(f+j):0);return b},_findPos:function(a){for(var b=this._getInst(a),b=this._get(b,"isRTL");a&&("hidden"==a.type||1!=a.nodeType||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(b&&!(a&&b!=d.data(a,"datepicker"))&&this._datepickerShowing){var a=this._get(b,"showAnim"),c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b)};if(d.effects&&d.effects[a])b.dpDiv.hide(a,
d.datepicker._get(b,"showOptions"),c,e);else b.dpDiv["slideDown"==a?"slideUp":"fadeIn"==a?"fadeOut":"hide"](a?c:null,e);a||e();this._datepickerShowing=!1;(a=this._get(b,"onClose"))&&a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._lastInput=null;this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),d.blockUI&&(d.unblockUI(),d("body").append(this.dpDiv)));this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){var a=d(a.target),b=d.datepicker._getInst(a[0]);(a[0].id!=d.datepicker._mainDivId&&0==a.parents("#"+d.datepicker._mainDivId).length&&!a.hasClass(d.datepicker.markerClassName)&&!a.closest("."+d.datepicker._triggerClass).length&&d.datepicker._datepickerShowing&&(!d.datepicker._inDialog||!d.blockUI)||a.hasClass(d.datepicker.markerClassName)&&d.datepicker._curInst!=b)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var a=d(a),e=this._getInst(a[0]);
this._isDisabledDatepicker(a[0])||(this._adjustInstDate(e,b+("M"==c?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var a=d(a),b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay)b.selectedDay=b.currentDay,b.drawMonth=b.selectedMonth=b.currentMonth,b.drawYear=b.selectedYear=b.currentYear;else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},
_selectMonthYear:function(a,b,c){var a=d(a),e=this._getInst(a[0]);e["selected"+("M"==c?"Month":"Year")]=e["draw"+("M"==c?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);!d(e).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(f[0])&&(f=this._getInst(f[0]),f.selectedDay=f.currentDay=d("a",e).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,
f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){var c=d(a),c=this._getInst(c[0]),b=null!=b?b:this._formatDate(c);c.input&&c.input.val(b);this._updateAlternate(c);var e=this._get(c,"onSelect");e?e.apply(c.input?c.input[0]:null,[b,c]):c.input&&c.input.trigger("change");c.inline?this._updateDatepicker(c):(this._hideDatepicker(),this._lastInput=c.input[0],"object"!=typeof c.input[0]&&c.input.focus(),this._lastInput=
null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[0<a&&6>a,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(null==
a||null==b)throw"Invalid arguments";b="object"==typeof b?b.toString():b+"";if(""==b)return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,j=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,i=c=-1,p=-1,r=-1,k=!1,m=function(b){(b=y+1<a.length&&
a.charAt(y+1)==b)&&y++;return b},l=function(a){var c=m(a),a=RegExp("^\\d{1,"+("@"==a?14:"!"==a?20:"y"==a&&c?4:"o"==a?3:2)+"}"),a=b.substring(u).match(a);if(!a)throw"Missing number at position "+u;u+=a[0].length;return parseInt(a[0],10)},n=function(a,c,e){var a=d.map(m(a)?e:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;d.each(a,function(a,c){var d=c[1];if(b.substr(u,d.length).toLowerCase()==d.toLowerCase())return f=c[0],u+=d.length,!1});if(-1!=f)return f+
1;throw"Unknown name at position "+u;},s=function(){if(b.charAt(u)!=a.charAt(y))throw"Unexpected literal at position "+u;u++},u=0,y=0;y<a.length;y++)if(k)"'"==a.charAt(y)&&!m("'")?k=!1:s();else switch(a.charAt(y)){case "d":p=l("d");break;case "D":n("D",f,h);break;case "o":r=l("o");break;case "m":i=l("m");break;case "M":i=n("M",j,g);break;case "y":c=l("y");break;case "@":var v=new Date(l("@")),c=v.getFullYear(),i=v.getMonth()+1,p=v.getDate();break;case "!":v=new Date((l("!")-this._ticksTo1970)/1E4);
c=v.getFullYear();i=v.getMonth()+1;p=v.getDate();break;case "'":m("'")?s():k=!0;break;default:s()}if(u<b.length)throw"Extra/unparsed characters found in date: "+b.substring(u);-1==c?c=(new Date).getFullYear():100>c&&(c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100));if(-1<r){i=1;p=r;do{e=this._getDaysInMonth(c,i-1);if(p<=e)break;i++;p-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,i-1,p));if(v.getFullYear()!=c||v.getMonth()+1!=i||v.getDate()!=p)throw"Invalid date";return v},
ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864E9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,
c=(c?c.monthNames:null)||this._defaults.monthNames,j=function(b){(b=r+1<a.length&&a.charAt(r+1)==b)&&r++;return b},g=function(a,b,c){b=""+b;if(j(a))for(;b.length<c;)b="0"+b;return b},i="",p=!1;if(b)for(var r=0;r<a.length;r++)if(p)"'"==a.charAt(r)&&!j("'")?p=!1:i+=a.charAt(r);else switch(a.charAt(r)){case "d":i+=g("d",b.getDate(),2);break;case "D":var k;k=b.getDay();var m=d,l=f;k=j("D")?l[k]:m[k];i+=k;break;case "o":i+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":i+=g("m",b.getMonth()+1,2);break;case "M":k=b.getMonth();m=h;l=c;k=j("M")?l[k]:m[k];i+=k;break;case "y":i+=j("y")?b.getFullYear():(10>b.getYear()%100?"0":"")+b.getYear()%100;break;case "@":i+=b.getTime();break;case "!":i+=1E4*b.getTime()+this._ticksTo1970;break;case "'":j("'")?i+="'":p=!0;break;default:i+=a.charAt(r)}return i},_possibleChars:function(a){for(var b="",c=!1,d=function(b){(b=f+1<a.length&&a.charAt(f+1)==b)&&f++;return b},
f=0;f<a.length;f++)if(c)"'"==a.charAt(f)&&!d("'")?c=!1:b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var j=
this._getFormatConfig(a);try{f=this.parseDate(c,d,j)||h}catch(g){this.log(g),d=b?"":d}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=d?f.getDate():0;a.currentMonth=d?f.getMonth():0;a.currentYear=d?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){if(null==b||""===b)b=c;else{var e;if("string"==
typeof b)a:{try{e=d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),b,d.datepicker._getFormatConfig(a));break a}catch(f){}var h=(b.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,a=h.getFullYear();e=h.getMonth();for(var h=h.getDate(),j=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,g=j.exec(b);g;){switch(g[2]||"d"){case "d":case "D":h+=parseInt(g[1],10);break;case "w":case "W":h+=7*parseInt(g[1],10);break;case "m":case "M":e+=parseInt(g[1],10);h=Math.min(h,d.datepicker._getDaysInMonth(a,
e));break;case "y":case "Y":a+=parseInt(g[1],10),h=Math.min(h,d.datepicker._getDaysInMonth(a,e))}g=j.exec(b)}e=new Date(a,e,h)}else"number"==typeof b?isNaN(b)?b=c:(a=new Date,a.setDate(a.getDate()+b),b=a):b=new Date(b.getTime()),e=b;b=e}if(b=b&&"Invalid Date"==b.toString()?c:b)b.setHours(0),b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(12<a.getHours()?a.getHours()+2:0);return a},_setDate:function(a,
b,c){var d=!b,f=a.selectedMonth,h=a.selectedYear,b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();(f!=a.selectedMonth||h!=a.selectedYear)&&!c&&this._notifyChange(a);this._adjustInstDate(a);a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&""==a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,
a.currentMonth,a.currentDay))},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){d(this).bind(this.getAttribute("data-event"),{prev:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+x].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+x].datepicker._gotoToday(c)},selectDay:function(){window["DP_jQuery_"+
x].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"M");return!1},selectYear:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"Y");return!1}}[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date,b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate())),c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),
f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),j=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),p=1!=j[0]||1!=j[1],r=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),g=a.drawMonth-g,l=a.drawYear;0>g&&(g+=12,l--);if(m)for(var n=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-j[0]*j[1]+1,m.getDate())),
n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(l,g,1))>n;)g--,0>g&&(g=11,l--);a.drawMonth=g;a.drawYear=l;var n=this._get(a,"prevText"),n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(l,g-i,1)),this._getFormatConfig(a)),n=this._canAdjustMonth(a,-1,l,g)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+
n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>",s=this._get(a,"nextText"),s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(l,g+i,1)),this._getFormatConfig(a)),f=this._canAdjustMonth(a,1,l,g)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+s+"</span></a>",i=this._get(a,"currentText"),s=this._get(a,"gotoCurrent")&&a.currentDay?r:b,i=!h?i:this.formatDate(i,s,this._getFormatConfig(a)),h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>":"",e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+
i+"</button>":"")+(c?"":h)+"</div>":"",h=parseInt(this._get(a,"firstDay"),10),h=isNaN(h)?0:h,i=this._get(a,"showWeek"),s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var u=this._get(a,"dayNamesMin"),y=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),z=this._get(a,"showOtherMonths"),D=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var B=this._getDefaultDate(a),E="",F=0;F<j[0];F++){var I="";this.maxRows=4;for(var G=0;G<j[1];G++){var C=
this._daylightSavingAdjust(new Date(l,g,a.selectedDay)),t=" ui-corner-all",q="";if(p){q+='<div class="ui-datepicker-group';if(1<j[1])switch(G){case 0:q+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case j[1]-1:q+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:q+=" ui-datepicker-group-middle",t=""}q+='">'}for(var q=q+('<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&0==F?c?f:n:"")+(/all|right/.test(t)&&
0==F?c?n:f:"")+this._generateMonthYearHeader(a,g,l,k,m,0<F||0<G,y,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>'),w=i?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"",t=0;7>t;t++)var o=(t+h)%7,w=w+("<th"+(5<=(t+h+6)%7?' class="ui-datepicker-week-end"':"")+'><span title="'+s[o]+'">'+u[o]+"</span></th>");q+=w+"</tr></thead><tbody>";w=this._getDaysInMonth(l,g);l==a.selectedYear&&g==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,w));t=(this._getFirstDayOfMonth(l,
g)-h+7)%7;w=Math.ceil((t+w)/7);this.maxRows=w=p?this.maxRows>w?this.maxRows:w:w;for(var o=this._daylightSavingAdjust(new Date(l,g,1-t)),L=0;L<w;L++){for(var q=q+"<tr>",J=!i?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(o)+"</td>",t=0;7>t;t++){var H=x?x.apply(a.input?a.input[0]:null,[o]):[!0,""],A=o.getMonth()!=g,K=A&&!D||!H[0]||k&&o<k||m&&o>m,J=J+('<td class="'+(5<=(t+h+6)%7?" ui-datepicker-week-end":"")+(A?" ui-datepicker-other-month":"")+(o.getTime()==C.getTime()&&g==a.selectedMonth&&
a._keyEvent||B.getTime()==o.getTime()&&B.getTime()==C.getTime()?" "+this._dayOverClass:"")+(K?" "+this._unselectableClass+" ui-state-disabled":"")+(A&&!z?"":" "+H[1]+(o.getTime()==r.getTime()?" "+this._currentClass:"")+(o.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!A||z)&&H[2]?' title="'+H[2]+'"':"")+(K?"":' data-handler="selectDay" data-event="click" data-month="'+o.getMonth()+'" data-year="'+o.getFullYear()+'"')+">"+(A&&!z?"&#xa0;":K?'<span class="ui-state-default">'+o.getDate()+"</span>":
'<a class="ui-state-default'+(o.getTime()==b.getTime()?" ui-state-highlight":"")+(o.getTime()==r.getTime()?" ui-state-active":"")+(A?" ui-priority-secondary":"")+'" href="#">'+o.getDate()+"</a>")+"</td>");o.setDate(o.getDate()+1);o=this._daylightSavingAdjust(o)}q+=J+"</tr>"}g++;11<g&&(g=0,l++);q+="</tbody></table>"+(p?"</div>"+(0<j[0]&&G==j[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");I+=q}E+=I}E+=e+(d.browser.msie&&7>parseInt(d.browser.version,10)&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=!1;return E},_generateMonthYearHeader:function(a,b,c,d,f,h,j,g){var i=this._get(a,"changeMonth"),p=this._get(a,"changeYear"),r=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',m="";if(h||!i)m+='<span class="ui-datepicker-month">'+j[b]+"</span>";else{for(var j=d&&d.getFullYear()==c,l=f&&f.getFullYear()==c,m=m+'<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">',n=0;12>n;n++)if((!j||n>=d.getMonth())&&(!l||n<=f.getMonth()))m+='<option value="'+
n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";m+="</select>"}r||(k+=m+(h||!i||!p?"&#xa0;":""));if(!a.yearshtml)if(a.yearshtml="",h||!p)k+='<span class="ui-datepicker-year">'+c+"</span>";else{var g=this._get(a,"yearRange").split(":"),s=(new Date).getFullYear(),j=function(a){a=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?s+parseInt(a,10):parseInt(a,10);return isNaN(a)?s:a},b=j(g[0]),g=Math.max(b,j(g[1]||"")),b=d?Math.max(b,d.getFullYear()):b,g=f?Math.min(g,f.getFullYear()):
g;for(a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}k+=this._get(a,"yearSuffix");r&&(k+=(h||!i||!p?"&#xa0;":"")+m);return k+"</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"==c?b:0),f=a.drawMonth+("M"==c?b:0),b=Math.min(a.selectedDay,this._getDaysInMonth(d,f))+("D"==c?b:0),d=this._restrictMinMax(a,
this._daylightSavingAdjust(new Date(d,f,b)));a.selectedDay=d.getDate();a.drawMonth=a.selectedMonth=d.getMonth();a.drawYear=a.selectedYear=d.getFullYear();("M"==c||"Y"==c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),c=c&&b<c?c:b;return d&&c>d?d:c},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,
"numberOfMonths");return null==a?[1,1]:"number"==typeof a?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var f=this._getNumberOfMonths(a),c=this._daylightSavingAdjust(new Date(c,d+(0>b?b:f[0]*f[1]),1));0>b&&c.setDate(this._getDaysInMonth(c.getFullYear(),
c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff"),b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,
"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);b=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;d.datepicker.initialized||(d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv),
d.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return"string"==typeof a&&("isDisabled"==a||"getDate"==a||"widget"==a)||"option"==a&&2==arguments.length&&"string"==typeof arguments[1]?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new B;d.datepicker.initialized=!1;d.datepicker.uuid=
(new Date).getTime();d.datepicker.version="1.8.24";window["DP_jQuery_"+x]=d})(jQuery);return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-date-picker', location = 'node_modules/@atlassian/aui/src/js/aui/date-picker.js' */
("undefined"===typeof window?global:window).__6fbbfaa987b189547da2206cf1ac829b=function(){function i(a){return a&&a.__esModule?a:{"default":a}}function f(a,e){var d,c,b,i,h;d={};i=w++;b=(0,g.default)(a);b.attr("data-aui-dp-uuid",i);e=g.default.extend(void 0,f.prototype.defaultOptions,e);d.getField=function(){return b};d.getOptions=function(){return e};c=function(){var a,c,j,r,s,u,o,p,k,m;d.hide=function(){k.hide()};d.show=function(){k.show()};d.setDate=function(b){"undefined"!==typeof a&&a.datepicker("setDate",
b)};d.getDate=function(){if("undefined"!==typeof a)return a.datepicker("getDate")};u=function(f){m.off();if(e.hint){var l=(0,g.default)("<div/>").addClass("aui-datepicker-hint");l.append("<span/>").text(e.hint);m.append(l)}a=(0,g.default)("<div/>");a.attr("data-aui-dp-popup-uuid",i);m.append(a);l={dateFormat:e.dateFormat,defaultDate:b.val(),maxDate:b.attr("max"),minDate:b.attr("min"),nextText:">",onSelect:function(a){b.val(a);b.change();d.hide();o=!0;b.focus();e.onSelect&&e.onSelect.call(this,a)},
onChangeMonthYear:function(){setTimeout(k.refresh,0)},prevText:"<"};g.default.extend(l,f);-1<e.firstDay&&(l.firstDay=e.firstDay);"undefined"!==typeof b.attr("step")&&t.log("WARNING: The date picker polyfill currently does not support the step attribute!");a.datepicker(l);(0,g.default)("body").on("keydown",c);b.on("focusout keydown",j);b.on("propertychange keyup input paste",s)};c=function(a){var c=(0,g.default)(a.target),e=c.closest(m).length||c.is(b),f=c.closest(".ui-datepicker-header").length;!e&&
!f||a.keyCode===x.default.ESCAPE?d.hide():c[0]!==b[0]&&a.preventDefault()};j=function(){p||((0,g.default)("body").on("focus blur click mousedown","*",c),p=!0)};r=function(){o?o=!1:d.show()};s=function(){if((0,g.default)(this).val())a.datepicker("setDate",b.val()),a.datepicker("option",{maxDate:b.attr("max"),minDate:b.attr("min")})};d.destroyPolyfill=function(){d.hide();b.attr("placeholder",null);b.off("propertychange keyup input paste",s);b.off("focus click",r);b.off("focusout keydown",j);(0,g.default)("body").off("keydown",
j);f.prototype.browserSupportsDateField&&(b[0].type="date");"undefined"!==typeof a&&a.datepicker("destroy");delete d.destroyPolyfill;delete d.show;delete d.hide};p=o=!1;e.languageCode in f.prototype.localisations||(e.languageCode="");var v=f.prototype.localisations,q="",n=240;"large"===v.size&&(n=325,q="aui-datepicker-dialog-large");n={hideCallback:function(){(0,g.default)("body").off("focus blur click mousedown","*",c);p=false;h&&h._datePickerPopup&&delete h._datePickerPopup},hideDelay:null,noBind:!0,
persistent:!0,closeOthers:!1,width:n};e.position&&(n.calculatePositions=function(a,b){var c=(0,g.default)(a[0]);return e.position.call(this,c,b)});k=(0,y.default)(b,void 0,function(b,c,d){if(typeof a==="undefined"){m=b;u(v)}if(h=(0,g.default)(c).closest(".aui-inline-dialog").get(0))h._datePickerPopup=k;d()},n);k.addClass("aui-datepicker-dialog");k.addClass(q);b.on("focus click",r);b.attr("placeholder",e.dateFormat);if(e.overrideBrowserDefault&&f.prototype.browserSupportsDateField&&(b[0].type="text",
q=b[0].getAttribute("value")))b[0].value=q};d.reset=function(){"function"===typeof d.destroyPolyfill&&d.destroyPolyfill();(!f.prototype.browserSupportsDateField||e.overrideBrowserDefault)&&c()};d.reset();return d}var j={};"use strict";Object.defineProperty(j,"__esModule",{value:!0});var g=i(__02fa0d2334b5d2f9701871403ba9d89a);__22e5f9dde23e62a30d105e8bdc75fa42;var t;var c=__8139e9a1368a0224fc430963d21930c8;if(c&&c.__esModule)t=c;else{var a={};if(null!=c)for(var h in c)Object.prototype.hasOwnProperty.call(c,
h)&&(a[h]=c[h]);a.default=c;t=a}h=__5e83f2691a9745a1c96cce360720d675;var c=i(__fb27ffae84b96c14bf339e62cefcf116),y=i(__c1cf6dc594e57ddb907bd3313fe8b424),x=i(__d92d89c196b4703777e79d25a9f94b7f),a=i(__ff21a71b857b101095156bf4ff8b27ac),w=0;f.prototype.browserSupportsDateField=(0,h.supportsDateField)();f.prototype.defaultOptions={overrideBrowserDefault:!1,firstDay:-1,languageCode:(0,g.default)("html").attr("lang")||"en-AU",dateFormat:g.default.datepicker.W3C};f.prototype.localisations={dayNames:[a.default.getText("ajs.datepicker.localisations.day-names.sunday"),
a.default.getText("ajs.datepicker.localisations.day-names.monday"),a.default.getText("ajs.datepicker.localisations.day-names.tuesday"),a.default.getText("ajs.datepicker.localisations.day-names.wednesday"),a.default.getText("ajs.datepicker.localisations.day-names.thursday"),a.default.getText("ajs.datepicker.localisations.day-names.friday"),a.default.getText("ajs.datepicker.localisations.day-names.saturday")],dayNamesMin:[a.default.getText("ajs.datepicker.localisations.day-names-min.sunday"),a.default.getText("ajs.datepicker.localisations.day-names-min.monday"),
a.default.getText("ajs.datepicker.localisations.day-names-min.tuesday"),a.default.getText("ajs.datepicker.localisations.day-names-min.wednesday"),a.default.getText("ajs.datepicker.localisations.day-names-min.thursday"),a.default.getText("ajs.datepicker.localisations.day-names-min.friday"),a.default.getText("ajs.datepicker.localisations.day-names-min.saturday")],firstDay:a.default.getText("ajs.datepicker.localisations.first-day"),isRTL:"true"===a.default.getText("ajs.datepicker.localisations.is-RTL")?
!0:!1,monthNames:[a.default.getText("ajs.datepicker.localisations.month-names.january"),a.default.getText("ajs.datepicker.localisations.month-names.february"),a.default.getText("ajs.datepicker.localisations.month-names.march"),a.default.getText("ajs.datepicker.localisations.month-names.april"),a.default.getText("ajs.datepicker.localisations.month-names.may"),a.default.getText("ajs.datepicker.localisations.month-names.june"),a.default.getText("ajs.datepicker.localisations.month-names.july"),a.default.getText("ajs.datepicker.localisations.month-names.august"),
a.default.getText("ajs.datepicker.localisations.month-names.september"),a.default.getText("ajs.datepicker.localisations.month-names.october"),a.default.getText("ajs.datepicker.localisations.month-names.november"),a.default.getText("ajs.datepicker.localisations.month-names.december")],showMonthAfterYear:"true"===a.default.getText("ajs.datepicker.localisations.show-month-after-year")?!0:!1,yearSuffix:a.default.getText("ajs.datepicker.localisations.year-suffix")};g.default.fn.datePicker=function(a){return new f(this,
a)};(0,c.default)("DatePicker",f);j.default=f;return j=j["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-datepicker', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
("undefined"===typeof window?global:window).__22e5f9dde23e62a30d105e8bdc75fa42=function(){(function(d){function B(){this.debug=!1;this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._inDialog=this._datepickerShowing=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass=
"ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January February March April May June July August September October November December".split(" "),monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" "),weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};d.extend(this._defaults,this.regional[""]);this.dpDiv=C(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function C(a){return a.bind("mouseout",
function(a){a=d(a.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");a.length&&a.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!d.datepicker._isDisabledDatepicker(D.inline?a.parent()[0]:D.input[0])&&b.length)b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
b.addClass("ui-state-hover"),b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover"),b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")})}function z(a,b){d.extend(a,b);for(var c in b)if(null==b[c]||void 0==b[c])a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.24"}});var x=(new Date).getTime(),D;d.extend(B.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){z(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null,e;for(e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f="div"==e||"span"==e;a.id||(this.uuid+=1,a.id="dp"+this.uuid);var j=this._newInst(d(a),f);j.settings=d.extend({},b||{},c||{});"input"==e?this._connectDatepicker(a,j):f&&this._inlineDatepicker(a,j)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:C(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),d.data(a,"datepicker",b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();c&&(b.append=d('<span class="'+this._appendClass+'">'+c+"</span>"),a[e?"before":"after"](b.append));a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");("focus"==
c||"both"==c)&&a.focus(this._showDatepicker);if("button"==c||"both"==c){var c=this._get(b,"buttonText"),f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(""==f?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){if(d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0])d.datepicker._hideDatepicker();
else{d.datepicker._datepickerShowing&&d.datepicker._lastInput!=a[0]&&d.datepicker._hideDatepicker();d.datepicker._showDatepicker(a[0])}return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){for(var b=0,c=0,d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":
"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),d.data(a,"datepicker",b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),
b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;a||(this.uuid+=1,this._dialogInput=d('<input type="text" id="dp'+this.uuid+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),d("body").append(this._dialogInput),a=this._dialogInst=this._newInst(this._dialogInput,!1),a.settings={},d.data(this._dialogInput[0],"datepicker",a));z(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);
this._pos=f?f.length?f:[f.pageX,f.pageY]:null;this._pos||(this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)]);this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);
d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");"input"==e?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"==e||"span"==e)&&b.removeClass(this.markerClassName).empty()}},
_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().removeClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");this._disabledInputs=d.map(this._disabledInputs,
function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if("input"==e)a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==e||"span"==e)b=b.children("."+this._inlineClass),b.children().addClass("ui-state-disabled"),b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled",
"disabled");this._disabledInputs=d.map(this._disabledInputs,function(b){return b==a?null:b});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(2==arguments.length&&"string"==typeof b)return"defaults"==
b?d.extend({},d.datepicker._defaults):e?"all"==b?d.extend({},e.settings):this._get(e,b):null;var f=b||{};"string"==typeof b&&(f={},f[b]=c);if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,!0),j=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");z(e.settings,f);null!==j&&(void 0!==f.dateFormat&&void 0===f.minDate)&&(e.settings.minDate=this._formatDate(e,j));null!==g&&(void 0!==f.dateFormat&&void 0===f.maxDate)&&(e.settings.maxDate=this._formatDate(e,g));this._attachments(d(a),
e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=
d.datepicker._getInst(a.target),c=!0,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=!1;break;case 13:return c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv),c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]),(a=d.datepicker._get(b,"onSelect"))?(c=d.datepicker._formatDate(b),a.apply(b.input?b.input[0]:null,[c,b])):d.datepicker._hideDatepicker(),
!1;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;
break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?1:-1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:1,"D");c=a.ctrlKey||a.metaKey;a.originalEvent.altKey&&d.datepicker._adjustDate(a.target,
a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&d.datepicker._adjustDate(a.target,7,"D");c=a.ctrlKey||a.metaKey;break;default:c=!1}else 36==a.keyCode&&a.ctrlKey?d.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){var b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat")),c=String.fromCharCode(void 0==
a.charCode?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||" ">c||!b||-1<b.indexOf(c)}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a)))d.datepicker._setDateFromField(a),d.datepicker._updateAlternate(a),d.datepicker._updateDatepicker(a)}catch(b){d.datepicker.log(b)}return!0},_showDatepicker:function(a){a=a.target||a;"input"!=a.nodeName.toLowerCase()&&
(a=d("input",a.parentNode)[0]);if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&(d.datepicker._curInst.dpDiv.stop(!0,!0),b&&d.datepicker._datepickerShowing&&d.datepicker._hideDatepicker(d.datepicker._curInst.input[0]));var c=d.datepicker._get(b,"beforeShow"),c=c?c.apply(a,[a,b]):{};if(!1!==c){z(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);d.datepicker._inDialog&&
(a.value="");d.datepicker._pos||(d.datepicker._pos=d.datepicker._findPos(a),d.datepicker._pos[1]+=a.offsetHeight);var e=!1;d(a).parents().each(function(){e=e|d(this).css("position")=="fixed";return!e});e&&d.browser.opera&&(d.datepicker._pos[0]-=document.documentElement.scrollLeft,d.datepicker._pos[1]-=document.documentElement.scrollTop);c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){var c=d.datepicker._get(b,"showAnim"),f=d.datepicker._get(b,"duration"),h=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(a.length){var c=d.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
!0;if(d.effects&&d.effects[c])b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h);else b.dpDiv[c||"show"](c?f:null,h);(!c||!f)&&h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);D=a;a.dpDiv.empty().append(this._generateHTML(a));this._attachHandlers(a);var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),
height:a.dpDiv.outerHeight()});a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");1<c&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(1!=b[0]||1!=b[1]?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&(d.datepicker._datepickerShowing&&
a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement)&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=
a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,j=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+(c?0:d(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:d(document).scrollTop());b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+j?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,
b.top+f>i&&i>f?Math.abs(f+j):0);return b},_findPos:function(a){for(var b=this._getInst(a),b=this._get(b,"isRTL");a&&("hidden"==a.type||1!=a.nodeType||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(b&&!(a&&b!=d.data(a,"datepicker"))&&this._datepickerShowing){var a=this._get(b,"showAnim"),c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b)};if(d.effects&&d.effects[a])b.dpDiv.hide(a,
d.datepicker._get(b,"showOptions"),c,e);else b.dpDiv["slideDown"==a?"slideUp":"fadeIn"==a?"fadeOut":"hide"](a?c:null,e);a||e();this._datepickerShowing=!1;(a=this._get(b,"onClose"))&&a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._lastInput=null;this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),d.blockUI&&(d.unblockUI(),d("body").append(this.dpDiv)));this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){var a=d(a.target),b=d.datepicker._getInst(a[0]);(a[0].id!=d.datepicker._mainDivId&&0==a.parents("#"+d.datepicker._mainDivId).length&&!a.hasClass(d.datepicker.markerClassName)&&!a.closest("."+d.datepicker._triggerClass).length&&d.datepicker._datepickerShowing&&(!d.datepicker._inDialog||!d.blockUI)||a.hasClass(d.datepicker.markerClassName)&&d.datepicker._curInst!=b)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var a=d(a),e=this._getInst(a[0]);
this._isDisabledDatepicker(a[0])||(this._adjustInstDate(e,b+("M"==c?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var a=d(a),b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay)b.selectedDay=b.currentDay,b.drawMonth=b.selectedMonth=b.currentMonth,b.drawYear=b.selectedYear=b.currentYear;else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},
_selectMonthYear:function(a,b,c){var a=d(a),e=this._getInst(a[0]);e["selected"+("M"==c?"Month":"Year")]=e["draw"+("M"==c?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);!d(e).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(f[0])&&(f=this._getInst(f[0]),f.selectedDay=f.currentDay=d("a",e).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,
f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){var c=d(a),c=this._getInst(c[0]),b=null!=b?b:this._formatDate(c);c.input&&c.input.val(b);this._updateAlternate(c);var e=this._get(c,"onSelect");e?e.apply(c.input?c.input[0]:null,[b,c]):c.input&&c.input.trigger("change");c.inline?this._updateDatepicker(c):(this._hideDatepicker(),this._lastInput=c.input[0],"object"!=typeof c.input[0]&&c.input.focus(),this._lastInput=
null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[0<a&&6>a,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(null==
a||null==b)throw"Invalid arguments";b="object"==typeof b?b.toString():b+"";if(""==b)return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,j=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,i=c=-1,p=-1,r=-1,k=!1,m=function(b){(b=y+1<a.length&&
a.charAt(y+1)==b)&&y++;return b},l=function(a){var c=m(a),a=RegExp("^\\d{1,"+("@"==a?14:"!"==a?20:"y"==a&&c?4:"o"==a?3:2)+"}"),a=b.substring(u).match(a);if(!a)throw"Missing number at position "+u;u+=a[0].length;return parseInt(a[0],10)},n=function(a,c,e){var a=d.map(m(a)?e:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;d.each(a,function(a,c){var d=c[1];if(b.substr(u,d.length).toLowerCase()==d.toLowerCase())return f=c[0],u+=d.length,!1});if(-1!=f)return f+
1;throw"Unknown name at position "+u;},s=function(){if(b.charAt(u)!=a.charAt(y))throw"Unexpected literal at position "+u;u++},u=0,y=0;y<a.length;y++)if(k)"'"==a.charAt(y)&&!m("'")?k=!1:s();else switch(a.charAt(y)){case "d":p=l("d");break;case "D":n("D",f,h);break;case "o":r=l("o");break;case "m":i=l("m");break;case "M":i=n("M",j,g);break;case "y":c=l("y");break;case "@":var v=new Date(l("@")),c=v.getFullYear(),i=v.getMonth()+1,p=v.getDate();break;case "!":v=new Date((l("!")-this._ticksTo1970)/1E4);
c=v.getFullYear();i=v.getMonth()+1;p=v.getDate();break;case "'":m("'")?s():k=!0;break;default:s()}if(u<b.length)throw"Extra/unparsed characters found in date: "+b.substring(u);-1==c?c=(new Date).getFullYear():100>c&&(c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100));if(-1<r){i=1;p=r;do{e=this._getDaysInMonth(c,i-1);if(p<=e)break;i++;p-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,i-1,p));if(v.getFullYear()!=c||v.getMonth()+1!=i||v.getDate()!=p)throw"Invalid date";return v},
ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864E9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,
c=(c?c.monthNames:null)||this._defaults.monthNames,j=function(b){(b=r+1<a.length&&a.charAt(r+1)==b)&&r++;return b},g=function(a,b,c){b=""+b;if(j(a))for(;b.length<c;)b="0"+b;return b},i="",p=!1;if(b)for(var r=0;r<a.length;r++)if(p)"'"==a.charAt(r)&&!j("'")?p=!1:i+=a.charAt(r);else switch(a.charAt(r)){case "d":i+=g("d",b.getDate(),2);break;case "D":var k;k=b.getDay();var m=d,l=f;k=j("D")?l[k]:m[k];i+=k;break;case "o":i+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":i+=g("m",b.getMonth()+1,2);break;case "M":k=b.getMonth();m=h;l=c;k=j("M")?l[k]:m[k];i+=k;break;case "y":i+=j("y")?b.getFullYear():(10>b.getYear()%100?"0":"")+b.getYear()%100;break;case "@":i+=b.getTime();break;case "!":i+=1E4*b.getTime()+this._ticksTo1970;break;case "'":j("'")?i+="'":p=!0;break;default:i+=a.charAt(r)}return i},_possibleChars:function(a){for(var b="",c=!1,d=function(b){(b=f+1<a.length&&a.charAt(f+1)==b)&&f++;return b},
f=0;f<a.length;f++)if(c)"'"==a.charAt(f)&&!d("'")?c=!1:b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var j=
this._getFormatConfig(a);try{f=this.parseDate(c,d,j)||h}catch(g){this.log(g),d=b?"":d}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=d?f.getDate():0;a.currentMonth=d?f.getMonth():0;a.currentYear=d?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){if(null==b||""===b)b=c;else{var e;if("string"==
typeof b)a:{try{e=d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),b,d.datepicker._getFormatConfig(a));break a}catch(f){}var h=(b.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,a=h.getFullYear();e=h.getMonth();for(var h=h.getDate(),j=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,g=j.exec(b);g;){switch(g[2]||"d"){case "d":case "D":h+=parseInt(g[1],10);break;case "w":case "W":h+=7*parseInt(g[1],10);break;case "m":case "M":e+=parseInt(g[1],10);h=Math.min(h,d.datepicker._getDaysInMonth(a,
e));break;case "y":case "Y":a+=parseInt(g[1],10),h=Math.min(h,d.datepicker._getDaysInMonth(a,e))}g=j.exec(b)}e=new Date(a,e,h)}else"number"==typeof b?isNaN(b)?b=c:(a=new Date,a.setDate(a.getDate()+b),b=a):b=new Date(b.getTime()),e=b;b=e}if(b=b&&"Invalid Date"==b.toString()?c:b)b.setHours(0),b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(12<a.getHours()?a.getHours()+2:0);return a},_setDate:function(a,
b,c){var d=!b,f=a.selectedMonth,h=a.selectedYear,b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();(f!=a.selectedMonth||h!=a.selectedYear)&&!c&&this._notifyChange(a);this._adjustInstDate(a);a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&""==a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,
a.currentMonth,a.currentDay))},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){d(this).bind(this.getAttribute("data-event"),{prev:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+x].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+x].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+x].datepicker._gotoToday(c)},selectDay:function(){window["DP_jQuery_"+
x].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"M");return!1},selectYear:function(){window["DP_jQuery_"+x].datepicker._selectMonthYear(c,this,"Y");return!1}}[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date,b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate())),c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),
f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),j=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),p=1!=j[0]||1!=j[1],r=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),g=a.drawMonth-g,l=a.drawYear;0>g&&(g+=12,l--);if(m)for(var n=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-j[0]*j[1]+1,m.getDate())),
n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(l,g,1))>n;)g--,0>g&&(g=11,l--);a.drawMonth=g;a.drawYear=l;var n=this._get(a,"prevText"),n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(l,g-i,1)),this._getFormatConfig(a)),n=this._canAdjustMonth(a,-1,l,g)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+
n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>",s=this._get(a,"nextText"),s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(l,g+i,1)),this._getFormatConfig(a)),f=this._canAdjustMonth(a,1,l,g)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+s+"</span></a>",i=this._get(a,"currentText"),s=this._get(a,"gotoCurrent")&&a.currentDay?r:b,i=!h?i:this.formatDate(i,s,this._getFormatConfig(a)),h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>":"",e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+
i+"</button>":"")+(c?"":h)+"</div>":"",h=parseInt(this._get(a,"firstDay"),10),h=isNaN(h)?0:h,i=this._get(a,"showWeek"),s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var u=this._get(a,"dayNamesMin"),y=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),z=this._get(a,"showOtherMonths"),D=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var B=this._getDefaultDate(a),E="",F=0;F<j[0];F++){var I="";this.maxRows=4;for(var G=0;G<j[1];G++){var C=
this._daylightSavingAdjust(new Date(l,g,a.selectedDay)),t=" ui-corner-all",q="";if(p){q+='<div class="ui-datepicker-group';if(1<j[1])switch(G){case 0:q+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case j[1]-1:q+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:q+=" ui-datepicker-group-middle",t=""}q+='">'}for(var q=q+('<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&0==F?c?f:n:"")+(/all|right/.test(t)&&
0==F?c?n:f:"")+this._generateMonthYearHeader(a,g,l,k,m,0<F||0<G,y,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>'),w=i?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"",t=0;7>t;t++)var o=(t+h)%7,w=w+("<th"+(5<=(t+h+6)%7?' class="ui-datepicker-week-end"':"")+'><span title="'+s[o]+'">'+u[o]+"</span></th>");q+=w+"</tr></thead><tbody>";w=this._getDaysInMonth(l,g);l==a.selectedYear&&g==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,w));t=(this._getFirstDayOfMonth(l,
g)-h+7)%7;w=Math.ceil((t+w)/7);this.maxRows=w=p?this.maxRows>w?this.maxRows:w:w;for(var o=this._daylightSavingAdjust(new Date(l,g,1-t)),L=0;L<w;L++){for(var q=q+"<tr>",J=!i?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(o)+"</td>",t=0;7>t;t++){var H=x?x.apply(a.input?a.input[0]:null,[o]):[!0,""],A=o.getMonth()!=g,K=A&&!D||!H[0]||k&&o<k||m&&o>m,J=J+('<td class="'+(5<=(t+h+6)%7?" ui-datepicker-week-end":"")+(A?" ui-datepicker-other-month":"")+(o.getTime()==C.getTime()&&g==a.selectedMonth&&
a._keyEvent||B.getTime()==o.getTime()&&B.getTime()==C.getTime()?" "+this._dayOverClass:"")+(K?" "+this._unselectableClass+" ui-state-disabled":"")+(A&&!z?"":" "+H[1]+(o.getTime()==r.getTime()?" "+this._currentClass:"")+(o.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!A||z)&&H[2]?' title="'+H[2]+'"':"")+(K?"":' data-handler="selectDay" data-event="click" data-month="'+o.getMonth()+'" data-year="'+o.getFullYear()+'"')+">"+(A&&!z?"&#xa0;":K?'<span class="ui-state-default">'+o.getDate()+"</span>":
'<a class="ui-state-default'+(o.getTime()==b.getTime()?" ui-state-highlight":"")+(o.getTime()==r.getTime()?" ui-state-active":"")+(A?" ui-priority-secondary":"")+'" href="#">'+o.getDate()+"</a>")+"</td>");o.setDate(o.getDate()+1);o=this._daylightSavingAdjust(o)}q+=J+"</tr>"}g++;11<g&&(g=0,l++);q+="</tbody></table>"+(p?"</div>"+(0<j[0]&&G==j[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");I+=q}E+=I}E+=e+(d.browser.msie&&7>parseInt(d.browser.version,10)&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=!1;return E},_generateMonthYearHeader:function(a,b,c,d,f,h,j,g){var i=this._get(a,"changeMonth"),p=this._get(a,"changeYear"),r=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',m="";if(h||!i)m+='<span class="ui-datepicker-month">'+j[b]+"</span>";else{for(var j=d&&d.getFullYear()==c,l=f&&f.getFullYear()==c,m=m+'<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">',n=0;12>n;n++)if((!j||n>=d.getMonth())&&(!l||n<=f.getMonth()))m+='<option value="'+
n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";m+="</select>"}r||(k+=m+(h||!i||!p?"&#xa0;":""));if(!a.yearshtml)if(a.yearshtml="",h||!p)k+='<span class="ui-datepicker-year">'+c+"</span>";else{var g=this._get(a,"yearRange").split(":"),s=(new Date).getFullYear(),j=function(a){a=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?s+parseInt(a,10):parseInt(a,10);return isNaN(a)?s:a},b=j(g[0]),g=Math.max(b,j(g[1]||"")),b=d?Math.max(b,d.getFullYear()):b,g=f?Math.min(g,f.getFullYear()):
g;for(a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}k+=this._get(a,"yearSuffix");r&&(k+=(h||!i||!p?"&#xa0;":"")+m);return k+"</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"==c?b:0),f=a.drawMonth+("M"==c?b:0),b=Math.min(a.selectedDay,this._getDaysInMonth(d,f))+("D"==c?b:0),d=this._restrictMinMax(a,
this._daylightSavingAdjust(new Date(d,f,b)));a.selectedDay=d.getDate();a.drawMonth=a.selectedMonth=d.getMonth();a.drawYear=a.selectedYear=d.getFullYear();("M"==c||"Y"==c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),c=c&&b<c?c:b;return d&&c>d?d:c},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,
"numberOfMonths");return null==a?[1,1]:"number"==typeof a?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var f=this._getNumberOfMonths(a),c=this._daylightSavingAdjust(new Date(c,d+(0>b?b:f[0]*f[1]),1));0>b&&c.setDate(this._getDaysInMonth(c.getFullYear(),
c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff"),b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,
"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);b=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;d.datepicker.initialized||(d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv),
d.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return"string"==typeof a&&("isDisabled"==a||"getDate"==a||"widget"==a)||"option"==a&&2==arguments.length&&"string"==typeof arguments[1]?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new B;d.datepicker.initialized=!1;d.datepicker.uuid=
(new Date).getTime();d.datepicker.version="1.8.24";window["DP_jQuery_"+x]=d})(jQuery);return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-plugins-jquery-select2', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/plugins/jquery.select2.js' */
("undefined"===typeof window?global:window).__541108ffa7d92ccfa7bbf8536d20dbb0=function(){var y=jQuery;"undefined"==typeof y.fn.each2&&y.extend(y.fn,{each2:function(a){for(var b=y([0]),c=-1,d=this.length;++c<d&&(b.context=b[0]=this[c])&&!1!==a.call(b[0],c,b););return this}});var e=jQuery,w=function(a){var b,c,d,g;if(!a||1>a.length)return a;b="";c=0;for(d=a.length;c<d;c++)g=a.charAt(c),b+=O[g]||g;return b},k=function(a,b){for(var c=0,d=b.length;c<d;c+=1)if(m(a,b[c]))return c;return-1},m=function(a,
b){return a===b?!0:void 0===a||void 0===b||null===a||null===b?!1:a.constructor===String?a+""===b+"":b.constructor===String?b+""===a+"":!1},B=function(a,b){var c,d,g;if(null===a||1>a.length)return[];c=a.split(b);d=0;for(g=c.length;d<g;d+=1)c[d]=e.trim(c[d]);return c},G=function(a){a.on("keydown",function(){void 0===e.data(a,"keyup-change-value")&&e.data(a,"keyup-change-value",a.val())});a.on("keyup",function(){var b=e.data(a,"keyup-change-value");void 0!==b&&a.val()!==b&&(e.removeData(a,"keyup-change-value"),
a.trigger("keyup-change"))})},H=function(a,b,c){var c=c||void 0,d;return function(){var g=arguments;window.clearTimeout(d);d=window.setTimeout(function(){b.apply(c,g)},a)}},j=function(a){a.preventDefault();a.stopPropagation()},z=function(a,b,c){var d,g=[],h;(d=a.attr("class"))&&e((""+d).split(" ")).each2(function(){0===this.indexOf("select2-")&&g.push(this)});(d=b.attr("class"))&&e((""+d).split(" ")).each2(function(){0!==this.indexOf("select2-")&&(h=c(this))&&g.push(h)});a.attr("class",g.join(" "))},
I=function(a,b,c,d){var g=w(a.toUpperCase()).indexOf(w(b.toUpperCase())),b=b.length;0>g?c.push(d(a)):(c.push(d(a.substring(0,g))),c.push("<span class='select2-match'>"),c.push(d(a.substring(g,g+b))),c.push("</span>"),c.push(d(a.substring(g+b,a.length))))},J=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},K=function(a){var b,c=null,d=a.quietMillis||100,g=a.url,h=this;return function(l){window.clearTimeout(b);
b=window.setTimeout(function(){var b=a.data,d=g,t=a.transport||e.fn.select2.ajaxDefaults.transport,f=e.extend({},e.fn.select2.ajaxDefaults.params,{type:a.type||"GET",cache:a.cache||!1,jsonpCallback:a.jsonpCallback||void 0,dataType:a.dataType||"json"}),b=b?b.call(h,l.term,l.page,l.context):null,d="function"===typeof d?d.call(h,l.term,l.page,l.context):d;c&&c.abort();a.params&&(e.isFunction(a.params)?e.extend(f,a.params.call(h)):e.extend(f,a.params));e.extend(f,{url:d,dataType:a.dataType,data:b,success:function(b){b=
a.results(b,l.page);l.callback(b)}});c=t.call(h,f)},d)}},L=function(a){var b=a,c,d,g=function(a){return""+a.text};e.isArray(b)&&(d=b,b={results:d});!1===e.isFunction(b)&&(d=b,b=function(){return d});a=b();a.text&&(g=a.text,e.isFunction(g)||(c=a.text,g=function(a){return a[c]}));return function(a){var c=a.term,d={results:[]},n;if(c==="")a.callback(b());else{n=function(b,d){var i,f,b=b[0];if(b.children){i={};for(f in b)b.hasOwnProperty(f)&&(i[f]=b[f]);i.children=[];e(b.children).each2(function(a,b){n(b,
i.children)});(i.children.length||a.matcher(c,g(i),b))&&d.push(i)}else a.matcher(c,g(b),b)&&d.push(b)};e(b().results).each2(function(a,b){n(b,d.results)});a.callback(d)}}},M=function(a){var b=e.isFunction(a);return function(c){var d=c.term,g={results:[]};e(b?a():a).each(function(){var a=void 0!==this.text,b=a?this.text:this;if(""===d||c.matcher(d,b))g.results.push(a?this:{id:this,text:this})});c.callback(g)}},r=function(a,b){if(e.isFunction(a))return!0;if(!a)return!1;throw Error(b+" must be a function or a falsy value");
},o=function(a){return e.isFunction(a)?a():a},N=function(a){var b=0;e.each(a,function(a,d){d.children?b+=N(d.children):b++});return b},P=function(a,b,c,d){var g=a,h=!1,e,i,f,t;if(d.createSearchChoice&&d.tokenSeparators&&!(1>d.tokenSeparators.length)){for(;;){h=-1;i=0;for(f=d.tokenSeparators.length;i<f&&!(t=d.tokenSeparators[i],h=a.indexOf(t),0<=h);i++);if(0>h)break;e=a.substring(0,h);a=a.substring(h+t.length);if(0<e.length&&(e=d.createSearchChoice.call(this,e,b),void 0!==e&&null!==e&&void 0!==d.id(e)&&
null!==d.id(e))){h=!1;i=0;for(f=b.length;i<f;i++)if(m(d.id(e),d.id(b[i]))){h=!0;break}h||c(e)}}if(g!==a)return a}},C=function(a,b){var c=function(){};c.prototype=new a;c.prototype.constructor=c;c.prototype.parent=a.prototype;c.prototype=e.extend(c.prototype,b);return c};if(void 0===window.Select2){var f,s,D,E,A,v,x={x:0,y:0},F;f={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){a=
a.which?a.which:a;switch(a){case f.LEFT:case f.RIGHT:case f.UP:case f.DOWN:return!0}return!1},isControl:function(a){switch(a.which){case f.SHIFT:case f.CTRL:case f.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){a=a.which?a.which:a;return 112<=a&&123>=a}};var O={"\u24b6":"A","\uff21":"A","\u00c0":"A","\u00c1":"A","\u00c2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\u00c3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A",
"\u00c4":"A","\u01de":"A","\u1ea2":"A","\u00c5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\u00c6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C",
"\u00c7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\u00c8":"E","\u00c9":"E","\u00ca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\u00cb":"E","\u1eba":"E",
"\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H",
"\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\u00cc":"I","\u00cd":"I","\u00ce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\u00cf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K",
"\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\u00d1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N",
"\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\u00d2":"O","\u00d3":"O","\u00d4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\u00d5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\u00d6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O",
"\u1ed8":"O","\u01ea":"O","\u01ec":"O","\u00d8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R",
"\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\u00d9":"U","\u00da":"U","\u00db":"U",
"\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\u00dc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W",
"\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\u00dd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a",
"\u1e9a":"a","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\u00e3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\u00e4":"a","\u01df":"a","\u1ea3":"a","\u00e5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\u00e6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av",
"\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u00e7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e",
"\u00e8":"e","\u00e9":"e","\u00ea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\u00eb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g",
"\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\u00ec":"i","\u00ed":"i","\u00ee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\u00ef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i",
"\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l",
"\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\u00f1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\u00f5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o",
"\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\u00f6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\u00f8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p",
"\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\u00df":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s",
"\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\u00fc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u",
"\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\u00fd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y",
"\u1e8f":"y","\u00ff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z"};s=e(document);var Q=1;A=function(){return Q++};s.on("mousemove",function(a){x.x=a.pageX;x.y=a.pageY});s=C(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(a){var b,c;this.opts=a=this.prepareOpts(a);
this.id=a.id;void 0!==a.element.data("select2")&&null!==a.element.data("select2")&&a.element.data("select2").destroy();this.container=this.createContainer();this.containerId="s2id_"+(a.element.attr("id")||"autogen"+A());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",this.containerId);var d=!1,g;this.body=function(){!1===d&&(g=a.element.closest("body"),d=!0);return g};z(this.container,this.opts.element,this.opts.adaptContainerCssClass);
this.container.attr("style",a.element.attr("style"));this.container.css(o(a.containerCss));this.container.addClass(o(a.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabindex");this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",j);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");z(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(o(a.dropdownCssClass));
this.dropdown.data("select2",this);this.dropdown.on("click",j);this.results=b=this.container.find(".select2-results");this.search=c=this.container.find("input.select2-input");this.resultsPage=this.queryCount=0;this.context=null;this.initContainer();this.container.on("click",j);this.results.on("mousemove",function(a){(void 0===x||x.x!==a.pageX||x.y!==a.pageY)&&e(a.target).trigger("mousemove-filtered",a)});this.dropdown.on("mousemove-filtered touchstart touchmove touchend",".select2-results",this.bind(this.highlightUnderEvent));
var h=this.results,l=H(80,function(a){h.trigger("scroll-debounced",a)});h.on("scroll",function(a){0<=k(a.target,h.get())&&l(a)});this.dropdown.on("scroll-debounced",".select2-results",this.bind(this.loadMoreIfNeeded));e(this.container).on("change",".select2-input",function(a){a.stopPropagation()});e(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()});e.fn.mousewheel&&b.mousewheel(function(a,c,d,g){c=b.scrollTop();0<g&&0>=c-g?(b.scrollTop(0),j(a)):0>g&&b.get(0).scrollHeight-
b.scrollTop()+g<=b.height()&&(b.scrollTop(b.get(0).scrollHeight-b.height()),j(a))});G(c);c.on("keyup-change input paste",this.bind(this.updateResults));c.on("focus",function(){c.addClass("select2-focused")});c.on("blur",function(){c.removeClass("select2-focused")});this.dropdown.on("mouseup",".select2-results",this.bind(function(a){0<e(a.target).closest(".select2-result-selectable").length&&(this.highlightUnderEvent(a),this.selectHighlighted(a))}));this.dropdown.on("click mouseup mousedown",function(a){a.stopPropagation()});
e.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource());null!==a.maximumInputLength&&this.search.attr("maxlength",a.maximumInputLength);var i=a.element.prop("disabled");void 0===i&&(i=!1);this.enable(!i);i=a.element.prop("readonly");void 0===i&&(i=!1);this.readonly(i);if(!(i=F)){i=e("<div class='select2-measure-scrollbar'></div>");i.appendTo("body");var f={width:i.width()-i[0].clientWidth,height:i.height()-i[0].clientHeight};i.remove();i=f}F=i;this.autofocus=a.element.prop("autofocus");
a.element.prop("autofocus",!1);this.autofocus&&this.focus();this.nextSearchTerm=void 0},destroy:function(){var a=this.opts.element,b=a.data("select2");this.close();this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null);void 0!==b&&(b.container.remove(),b.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show())},
optionToData:function(a){if(a.is("option"))return{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:m(a.attr("locked"),"locked")||m(a.data("locked"),!0)};if(a.is("optgroup"))return{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}},prepareOpts:function(a){var b,c,d,g=this;b=a.element;"select"===b.get(0).tagName.toLowerCase()&&(this.select=c=a.element);c&&e.each("id multiple ajax query createSearchChoice initSelection data tags".split(" "),
function(){if(this in a)throw Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");});a=e.extend({},{populateResults:function(b,c,d){var f,t=this.opts.id;f=function(b,c,h){var l,j,m,k,o,u,q,b=a.sortResults(b,c,d);l=0;for(j=b.length;l<j;l=l+1){m=b[l];o=m.disabled===true;k=!o&&t(m)!==void 0;u=m.children&&m.children.length>0;q=e("<li></li>");q.addClass("select2-results-dept-"+h);q.addClass("select2-result");q.addClass(k?"select2-result-selectable":"select2-result-unselectable");
o&&q.addClass("select2-disabled");u&&q.addClass("select2-result-with-children");q.addClass(g.opts.formatResultCssClass(m));k=e(document.createElement("div"));k.addClass("select2-result-label");o=a.formatResult(m,k,d,g.opts.escapeMarkup);o!==void 0&&k.html(o);q.append(k);if(u){u=e("<ul></ul>");u.addClass("select2-result-sub");f(m.children,u,h+1);q.append(u)}q.data("select2-data",m);c.append(q)}};f(c,b,0)}},e.fn.select2.defaults,a);"function"!==typeof a.id&&(d=a.id,a.id=function(a){return a[d]});if(e.isArray(a.element.data("select2Tags"))){if("tags"in
a)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+a.element.attr("id");a.tags=a.element.data("select2Tags")}if(c)a.query=this.bind(function(a){var c={results:[],more:false},d=a.term,e,f,p;p=function(b,c){var e;if(b.is("option"))a.matcher(d,b.text(),b)&&c.push(g.optionToData(b));else if(b.is("optgroup")){e=g.optionToData(b);b.children().each2(function(a,b){p(b,e.children)});e.children.length>0&&c.push(e)}};e=b.children();if(this.getPlaceholder()!==void 0&&
e.length>0)(f=this.getPlaceholderOption())&&(e=e.not(f));e.each2(function(a,b){p(b,c.results)});a.callback(c)}),a.id=function(a){return a.id},a.formatResultCssClass=function(a){return a.css};else if(!("query"in a))if("ajax"in a){if((c=a.element.data("ajax-url"))&&0<c.length)a.ajax.url=c;a.query=K.call(a.element,a.ajax)}else if("data"in a)a.query=L(a.data);else if("tags"in a&&(a.query=M(a.tags),void 0===a.createSearchChoice&&(a.createSearchChoice=function(a){return{id:e.trim(a),text:e.trim(a)}}),void 0===
a.initSelection))a.initSelection=function(b,c){var d=[];e(B(b.val(),a.separator)).each(function(){var b={id:this,text:this},c=a.tags;e.isFunction(c)&&(c=c());e(c).each(function(){if(m(this.id,b.id)){b=this;return false}});d.push(b)});c(d)};if("function"!==typeof a.query)throw"query function not defined for Select2 "+a.element.attr("id");return a},monitorSource:function(){var a=this.opts.element,b,c;a.on("change.select2",this.bind(function(){!0!==this.opts.element.data("select2-change-triggered")&&
this.initSelection()}));b=this.bind(function(){var b=a.prop("disabled");void 0===b&&(b=!1);this.enable(!b);b=a.prop("readonly");void 0===b&&(b=!1);this.readonly(b);z(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.addClass(o(this.opts.containerCssClass));z(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(o(this.opts.dropdownCssClass))});a.on("propertychange.select2",b);void 0===this.mutationCallback&&(this.mutationCallback=function(a){a.forEach(b)});
c=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;void 0!==c&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new c(this.mutationCallback),this.propertyObserver.observe(a.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(a){a=e.Event("select2-selecting",{val:this.id(a),object:a});this.opts.element.trigger(a);return!a.isDefaultPrevented()},triggerChange:function(a){a=a||{};a=e.extend({},a,{type:"change",
val:this.val()});this.opts.element.data("select2-change-triggered",!0);this.opts.element.trigger(a);this.opts.element.data("select2-change-triggered",!1);this.opts.element.click();this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return!0===this.enabledInterface},enableInterface:function(){var a=this._enabled&&!this._readonly;if(a===this.enabledInterface)return!1;this.container.toggleClass("select2-container-disabled",!a);this.close();this.enabledInterface=a;return!0},
enable:function(a){void 0===a&&(a=!0);this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){void 0===a&&(a=!1);if(this._readonly===a)return!1;this._readonly=a;this.opts.element.prop("readonly",a);this.enableInterface();return!0},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var a=this.dropdown,b=this.container.offset(),c=this.container.outerHeight(!1),
d=this.container.outerWidth(!1),g=a.outerHeight(!1),h=e(window),f=h.width(),i=h.height(),n=h.scrollLeft()+f,j=h.scrollTop()+i,c=b.top+c,p=b.left,j=c+g<=j,m=b.top-g>=this.body().scrollTop(),k=a.outerWidth(!1),r=p+k<=n,s;a.hasClass("select2-drop-above")?(g=!0,!m&&j&&(s=!0,g=!1)):(g=!1,!j&&m&&(g=s=!0));s&&(a.hide(),b=this.container.offset(),c=this.container.outerHeight(!1),d=this.container.outerWidth(!1),a.outerHeight(!1),n=h.scrollLeft()+f,h.scrollTop(),c=b.top+c,p=b.left,k=a.outerWidth(!1),r=p+k<=
n,a.show());this.opts.dropdownAutoWidth?(h=e(".select2-results",a)[0],a.addClass("select2-drop-auto-width"),a.css("width",""),k=a.outerWidth(!1)+(h.scrollHeight===h.clientHeight?0:F.width),k>d?d=k:k=d,r=p+k<=n):this.container.removeClass("select2-drop-auto-width");"static"!==this.body().css("position")&&(n=this.body().offset(),c-=n.top,p-=n.left);r||(p=b.left+d-k);d={left:p,width:d};g?(d.bottom=i-b.top,d.top="auto",this.container.addClass("select2-drop-above"),a.addClass("select2-drop-above")):(d.top=
c,d.bottom="auto",this.container.removeClass("select2-drop-above"),a.removeClass("select2-drop-above"));d=e.extend(d,o(this.opts.dropdownCss));a.css(d)},shouldOpen:function(){var a;if(this.opened()||!1===this._enabled||!0===this._readonly)return!1;a=e.Event("select2-opening");this.opts.element.trigger(a);return!a.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return!1;
this.opening();return!0},opening:function(){var a=this.containerId,b="scroll."+a,c="resize."+a,d="orientationchange."+a;this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.clearDropdownAlignmentPreference();this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body());a=e("#select2-drop-mask");0==a.length&&(a=e(document.createElement("div")),a.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),a.hide(),a.appendTo(this.body()),
a.on("mousedown touchstart click",function(a){var b=e("#select2-drop");0<b.length&&(b=b.data("select2"),b.opts.selectOnBlur&&b.selectHighlighted({noFocus:!0}),b.close({focus:!0}),a.preventDefault(),a.stopPropagation())}));this.dropdown.prev()[0]!==a[0]&&this.dropdown.before(a);e("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");a.show();this.positionDropdown();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){e(this).on(c+
" "+b+" "+d,function(){g.positionDropdown()})})},close:function(){if(this.opened()){var a=this.containerId,b="scroll."+a,c="resize."+a,d="orientationchange."+a;this.container.parents().add(window).each(function(){e(this).off(b).off(c).off(d)});this.clearDropdownAlignmentPreference();e("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.search.removeClass("select2-active");
this.opts.element.trigger(e.Event("select2-close"))}},externalSearch:function(a){this.open();this.search.val(a);this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return o(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var a=this.results,b,c,d,g;c=this.highlight();0>c||(0==c?a.scrollTop(0):(b=this.findHighlightableChoices().find(".select2-result-label"),d=e(b[c]),g=d.offset().top+d.outerHeight(!0),c===b.length-1&&(b=a.find("li.select2-more-results"),
0<b.length&&(g=b.offset().top+b.outerHeight(!0))),b=a.offset().top+a.outerHeight(!0),g>b&&a.scrollTop(a.scrollTop()+(g-b)),g=d.offset().top-a.offset().top,0>g&&"none"!=d.css("display")&&a.scrollTop(a.scrollTop()+g)))},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")},moveHighlight:function(a){for(var b=this.findHighlightableChoices(),c=this.highlight();-1<c&&c<b.length;){var c=c+a,d=e(b[c]);if(d.hasClass("select2-result-selectable")&&
!d.hasClass("select2-disabled")&&!d.hasClass("select2-selected")){this.highlight(c);break}}},highlight:function(a){var b=this.findHighlightableChoices();if(0===arguments.length)return k(b.filter(".select2-highlighted")[0],b.get());a>=b.length&&(a=b.length-1);0>a&&(a=0);this.removeHighlight();b=e(b[a]);b.addClass("select2-highlighted");this.ensureHighlightVisible();(b=b.data("select2-data"))&&this.opts.element.trigger({type:"select2-highlight",val:this.id(b),choice:b})},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},
countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(a){a=e(a.target).closest(".select2-result-selectable");if(0<a.length&&!a.is(".select2-highlighted")){var b=this.findHighlightableChoices();this.highlight(b.index(a))}else 0==a.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var a=this.results,b=a.find("li.select2-more-results"),c,d=this.resultsPage+1,e=this,h=this.search.val(),f=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-
a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:h,page:d,context:f,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:h,page:d,context:f}),e.postprocessResults(c,!1,!1),!0===c.more?(b.detach().appendTo(a).text(e.opts.formatLoadMore(d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,
this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(a){function b(){d.removeClass("select2-active");i.positionDropdown()}function c(a){g.html(a);b()}var d=this.search,g=this.results,h=this.opts,f,i=this;f=d.val();var n=e.data(this.container,"select2-last-term"),j;if(!(!0!==a&&n&&m(f,n))&&(e.data(this.container,"select2-last-term",f),!(!0!==a&&(!1===this.showSearchInput||!this.opened())))){j=++this.queryCount;n=this.getMaximumSelectionSize();
if(1<=n&&(f=this.data(),e.isArray(f)&&f.length>=n&&r(h.formatSelectionTooBig,"formatSelectionTooBig"))){c("<li class='select2-selection-limit'>"+h.formatSelectionTooBig(n)+"</li>");return}d.val().length<h.minimumInputLength?(r(h.formatInputTooShort,"formatInputTooShort")?c("<li class='select2-no-results'>"+h.formatInputTooShort(d.val(),h.minimumInputLength)+"</li>"):c(""),a&&this.showSearch&&this.showSearch(!0)):h.maximumInputLength&&d.val().length>h.maximumInputLength?r(h.formatInputTooLong,"formatInputTooLong")?
c("<li class='select2-no-results'>"+h.formatInputTooLong(d.val(),h.maximumInputLength)+"</li>"):c(""):(h.formatSearching&&0===this.findHighlightableChoices().length&&c("<li class='select2-searching'>"+h.formatSearching()+"</li>"),d.addClass("select2-active"),this.removeHighlight(),f=this.tokenize(),void 0!=f&&null!=f&&d.val(f),this.resultsPage=1,h.query({element:h.element,term:d.val(),page:this.resultsPage,context:null,matcher:h.matcher,callback:this.bind(function(f){var l;j==this.queryCount&&(this.opened()?
(this.context=void 0===f.context?null:f.context,this.opts.createSearchChoice&&""!==d.val()&&(l=this.opts.createSearchChoice.call(i,d.val(),f.results),void 0!==l&&null!==l&&void 0!==i.id(l)&&null!==i.id(l)&&0===e(f.results).filter(function(){return m(i.id(this),i.id(l))}).length&&f.results.unshift(l)),0===f.results.length&&r(h.formatNoMatches,"formatNoMatches"))?c("<li class='select2-no-results'>"+h.formatNoMatches(d.val())+"</li>"):(g.empty(),i.opts.populateResults.call(this,g,f.results,{term:d.val(),
page:this.resultsPage,context:null}),!0===f.more&&r(h.formatLoadMore,"formatLoadMore")&&(g.append("<li class='select2-more-results'>"+i.opts.escapeMarkup(h.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){i.loadMoreIfNeeded()},10)),this.postprocessResults(f,a),b(),this.opts.element.trigger({type:"select2-loaded",items:f})):this.search.removeClass("select2-active"))})}))}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0});
this.close();this.container.removeClass("select2-container-active");this.search[0]===document.activeElement&&this.search.blur();this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){var a=this.search;a[0]!==document.activeElement&&window.setTimeout(function(){var b=a[0],c=a.val().length;a.focus();a.is(":visible")&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(b=b.createTextRange(),
b.collapse(!1),b.select()))},0)},selectHighlighted:function(a){var b=this.highlight(),c=this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data");c?(this.highlight(b),this.onSelect(c,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||(void 0!==(a=this.getPlaceholderOption())?a.text():void 0)},getPlaceholderOption:function(){if(this.select){var a=
this.select.children("option").first();if(void 0!==this.opts.placeholderOption)return"first"===this.opts.placeholderOption&&a||"function"===typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.text()&&""===a.val())return a}},initContainerWidth:function(){var a=function(){var a,c,d,g;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||
"resolve"===this.opts.width){a=this.opts.element.attr("style");if(void 0!==a){a=a.split(";");d=0;for(g=a.length;d<g;d+=1)if(c=a[d].replace(/\s/g,""),c=c.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==c&&1<=c.length)return c[1]}return"resolve"===this.opts.width?(a=this.opts.element.css("width"),0<a.indexOf("%")?a:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return e.isFunction(this.opts.width)?this.opts.width():this.opts.width}.call(this);
null!==a&&this.container.css("width",a)}});D=C(s,{createContainer:function(){return e(document.createElement("div")).attr({"class":"select2-container"}).html("<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>   <span class='select2-arrow'><b></b></span></a><input class='select2-focusser select2-offscreen' type='text'/><div class='select2-drop select2-display-none'>   <div class='select2-search'>       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>   </div>   <ul class='select2-results'>   </ul></div>")},
enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var a,b;0<=this.opts.minimumResultsForSearch&&this.showSearch(!0);this.parent.opening.apply(this,arguments);!1!==this.showSearchInput&&this.search.val(this.focusser.val());this.search.focus();a=this.search.get(0);a.createTextRange?(a=a.createTextRange(),a.collapse(!1),a.select()):a.setSelectionRange&&(b=this.search.val().length,a.setSelectionRange(b,
b));""===this.search.val()&&void 0!=this.nextSearchTerm&&(this.search.val(this.nextSearchTerm),this.search.select());this.focusser.prop("disabled",!0).val("");this.updateResults(!0);this.opts.element.trigger(e.Event("select2-open"))},close:function(a){this.opened()&&(this.parent.close.apply(this,arguments),a=a||{focus:!0},this.focusser.removeAttr("disabled"),a.focus&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.removeAttr("disabled"),this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},
cancel:function(){this.parent.cancel.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus()},destroy:function(){e("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id"));this.parent.destroy.apply(this,arguments)},initContainer:function(){var a,b=this.container,c=this.dropdown;0>this.opts.minimumResultsForSearch?this.showSearch(!1):this.showSearch(!0);this.selection=a=b.find(".select2-choice");this.focusser=b.find(".select2-focusser");this.focusser.attr("id",
"s2id_autogen"+A());e("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id"));this.focusser.attr("tabindex",this.elementTabIndex);this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled())if(a.which===f.PAGE_UP||a.which===f.PAGE_DOWN)j(a);else switch(a.which){case f.UP:case f.DOWN:this.moveHighlight(a.which===f.UP?-1:1);j(a);break;case f.ENTER:this.selectHighlighted();j(a);break;case f.TAB:this.selectHighlighted({noFocus:!0});break;case f.ESC:this.cancel(a),
j(a)}}));this.search.on("blur",this.bind(function(){document.activeElement===this.body().get(0)&&window.setTimeout(this.bind(function(){this.search.focus()}),0)}));this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&!(a.which===f.TAB||f.isControl(a)||f.isFunctionKey(a)||a.which===f.ESC))if(!1===this.opts.openOnEnter&&a.which===f.ENTER)j(a);else if(a.which==f.DOWN||a.which==f.UP||a.which==f.ENTER&&this.opts.openOnEnter)!a.altKey&&(!a.ctrlKey&&!a.shiftKey&&!a.metaKey)&&(this.open(),
j(a));else if(a.which==f.DELETE||a.which==f.BACKSPACE)this.opts.allowClear&&this.clear(),j(a)}));G(this.focusser);this.focusser.on("keyup-change input",this.bind(function(a){0<=this.opts.minimumResultsForSearch&&(a.stopPropagation(),this.opened()||this.open())}));a.on("mousedown","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),a.preventDefault(),a.stopImmediatePropagation(),this.close(),this.selection.focus())}));a.on("mousedown",this.bind(function(a){this.container.hasClass("select2-container-active")||
this.opts.element.trigger(e.Event("select2-focus"));this.opened()?this.close():this.isInterfaceEnabled()&&this.open();j(a)}));c.on("mousedown",this.bind(function(){this.search.focus()}));a.on("focus",this.bind(function(a){j(a)}));this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus"));this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),
this.opts.element.trigger(e.Event("select2-blur")))}));this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus"));this.container.addClass("select2-container-active")}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.setPlaceholder()},clear:function(a){var b=this.selection.data("select2-data");if(b){var c=e.Event("select2-clearing");this.opts.element.trigger(c);c.isDefaultPrevented()||
(c=this.getPlaceholderOption(),this.opts.element.val(c?c.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),!1!==a&&(this.opts.element.trigger({type:"select2-removed",val:this.id(b),choice:b}),this.triggerChange({removed:b})))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){void 0!==
b&&null!==b&&(a.updateSelection(b),a.close(),a.setPlaceholder())})}},isPlaceholderOptionSelected:function(){var a;return!this.getPlaceholder()?!1:void 0!==(a=this.getPlaceholderOption())&&a.prop("selected")||""===this.opts.element.val()||void 0===this.opts.element.val()||null===this.opts.element.val()},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments),b=this;"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(a,d){var e=a.find("option").filter(function(){return this.selected});
d(b.optionToData(e))}:"data"in a&&(a.initSelection=a.initSelection||function(b,d){var g=b.val(),f=null;a.query({matcher:function(b,c,d){(b=m(g,a.id(d)))&&(f=d);return b},callback:!e.isFunction(d)?e.noop:function(){d(f)}})});return a},getPlaceholder:function(){return this.select&&void 0===this.getPlaceholderOption()?void 0:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();this.isPlaceholderOptionSelected()&&void 0!==a&&!(this.select&&void 0===this.getPlaceholderOption())&&
(this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear"))},postprocessResults:function(a,b,c){var d=0,e=this;this.findHighlightableChoices().each2(function(a,b){if(m(e.id(b.data("select2-data")),e.opts.element.val()))return d=a,!1});!1!==c&&(!0===b&&0<=d?this.highlight(d):this.highlight(0));!0===b&&(b=this.opts.minimumResultsForSearch,0<=b&&this.showSearch(N(a.results)>=b))},showSearch:function(a){this.showSearchInput!==
a&&(this.showSearchInput=a,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!a),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!a),e(this.dropdown,this.container).toggleClass("select2-with-searchbox",a))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a));this.updateSelection(a);this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a});this.nextSearchTerm=
this.opts.nextSearchTerm(a,this.search.val());this.close();(!b||!b.noFocus)&&this.focusser.focus();m(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var b=this.selection.find(".select2-chosen"),c;this.selection.data("select2-data",a);b.empty();null!==a&&(c=this.opts.formatSelection(a,b,this.opts.escapeMarkup));void 0!==c&&b.append(c);a=this.opts.formatSelectionCssClass(a,b);void 0!==a&&b.addClass(a);this.selection.removeClass("select2-default");this.opts.allowClear&&
void 0!==this.getPlaceholder()&&this.container.addClass("select2-allowclear")},val:function(){var a,b=!1,c=null,d=this,e=this.data();if(0===arguments.length)return this.opts.element.val();a=arguments[0];1<arguments.length&&(b=arguments[1]);if(this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){c=d.optionToData(b);return!1}),this.updateSelection(c),this.setPlaceholder(),b&&this.triggerChange({added:c,removed:e});else if(!a&&0!==a)this.clear(b);
else{if(void 0===this.opts.initSelection)throw Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a);this.opts.initSelection(this.opts.element,function(a){d.opts.element.val(!a?"":d.id(a));d.updateSelection(a);d.setPlaceholder();b&&d.triggerChange({added:a,removed:e})})}},clearSearch:function(){this.search.val("");this.focusser.val("")},data:function(a){var b,c=!1;if(0===arguments.length)return b=this.selection.data("select2-data"),void 0==b&&(b=null),b;1<arguments.length&&
(c=arguments[1]);a?(b=this.data(),this.opts.element.val(!a?"":this.id(a)),this.updateSelection(a),c&&this.triggerChange({added:a,removed:b})):this.clear(c)}});E=C(s,{createContainer:function(){return e(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html("<ul class='select2-choices'>  <li class='select2-search-field'>    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>  </li></ul><div class='select2-drop select2-drop-multi select2-display-none'>   <ul class='select2-results'>   </ul></div>")},
prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments),b=this;"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(a,d){var e=[];a.find("option").filter(function(){return this.selected}).each2(function(a,c){e.push(b.optionToData(c))});d(e)}:"data"in a&&(a.initSelection=a.initSelection||function(b,d){var g=B(b.val(),a.separator),f=[];a.query({matcher:function(b,c,d){(b=e.grep(g,function(b){return m(b,a.id(d))}).length)&&f.push(d);return b},callback:!e.isFunction(d)?
e.noop:function(){for(var b=[],c=0;c<g.length;c++)for(var e=g[c],j=0;j<f.length;j++){var k=f[j];if(m(e,a.id(k))){b.push(k);f.splice(j,1);break}}d(b)}})});return a},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");if(!b.length||!(a&&a[0]==b[0]))b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a))},destroy:function(){e("label[for='"+
this.search.attr("id")+"']").attr("for",this.opts.element.attr("id"));this.parent.destroy.apply(this,arguments)},initContainer:function(){var a;this.searchContainer=this.container.find(".select2-search-field");this.selection=a=this.container.find(".select2-choices");var b=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(){b.search[0].focus();b.selectChoice(e(this))});this.search.attr("id","s2id_autogen"+A());e("label[for='"+this.opts.element.attr("id")+"']").attr("for",
this.search.attr("id"));this.search.on("input paste",this.bind(function(){this.isInterfaceEnabled()&&(this.opened()||this.open())}));this.search.attr("tabindex",this.elementTabIndex);this.keydowns=0;this.search.on("keydown",this.bind(function(b){var d,g;if(this.isInterfaceEnabled()){++this.keydowns;var h=a.find(".select2-search-choice-focus"),l=h.prev(".select2-search-choice:not(.select2-locked)"),i=h.next(".select2-search-choice:not(.select2-locked)");d=this.search;d=e(d)[0];var k=0;g=0;"selectionStart"in
d?(k=d.selectionStart,g=d.selectionEnd-k):"selection"in document&&(d.focus(),k=document.selection.createRange(),g=document.selection.createRange().text.length,k.moveStart("character",-d.value.length),k=k.text.length-g);d=k;if(h.length&&(b.which==f.LEFT||b.which==f.RIGHT||b.which==f.BACKSPACE||b.which==f.DELETE||b.which==f.ENTER))g=h,b.which==f.LEFT&&l.length?g=l:b.which==f.RIGHT?g=i.length?i:null:b.which===f.BACKSPACE?(this.unselect(h.first()),this.search.width(10),g=l.length?l:i):b.which==f.DELETE?
(this.unselect(h.first()),this.search.width(10),g=i.length?i:null):b.which==f.ENTER&&(g=null),this.selectChoice(g),j(b),(!g||!g.length)&&this.open();else if((b.which===f.BACKSPACE&&1==this.keydowns||b.which==f.LEFT)&&0==d&&!g)this.selectChoice(a.find(".select2-search-choice:not(.select2-locked)").last()),j(b);else{this.selectChoice(null);if(this.opened())switch(b.which){case f.UP:case f.DOWN:this.moveHighlight(b.which===f.UP?-1:1);j(b);return;case f.ENTER:this.selectHighlighted();j(b);return;case f.TAB:this.selectHighlighted({noFocus:!0});
this.close();return;case f.ESC:this.cancel(b);j(b);return}b.which===f.TAB||f.isControl(b)||f.isFunctionKey(b)||b.which===f.BACKSPACE||b.which===f.ESC||b.which===f.ENTER&&(!1===this.opts.openOnEnter||b.altKey||b.ctrlKey||b.shiftKey||b.metaKey)||(this.open(),(b.which===f.PAGE_UP||b.which===f.PAGE_DOWN)&&j(b),b.which===f.ENTER&&j(b))}}}));this.search.on("keyup",this.bind(function(){this.keydowns=0;this.resizeSearch()}));this.search.on("blur",this.bind(function(a){this.container.removeClass("select2-container-active");
this.search.removeClass("select2-focused");this.selectChoice(null);this.opened()||this.clearSearch();a.stopImmediatePropagation();this.opts.element.trigger(e.Event("select2-blur"))}));this.container.on("click",".select2-choices",this.bind(function(a){this.isInterfaceEnabled()&&!(0<e(a.target).closest(".select2-search-choice").length)&&(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.open(),
this.focusSearch(),a.preventDefault())}));this.container.on("focus",".select2-choices",this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,
arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||""!==this.opts.element.val()){var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){if(b!==void 0&&b!==null){a.updateSelection(b);a.close();a.clearSearch()}})}},clearSearch:function(){var a=this.getPlaceholder(),b=this.getMaxSearchWidth();void 0!==a&&
0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(a).addClass("select2-default"),this.search.width(0<b?b:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder();this.resizeSearch();this.parent.opening.apply(this,arguments);this.focusSearch();this.updateResults(!0);this.search.focus();this.opts.element.trigger(e.Event("select2-open"))},
close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(a){var b=[],c=[],d=this;e(a).each(function(){0>k(d.id(this),b)&&(b.push(d.id(this)),c.push(this))});a=c;this.selection.find(".select2-search-choice").remove();e(a).each(function(){d.addSelectedChoice(this)});d.postprocessResults()},tokenize:function(){var a=this.search.val(),a=this.opts.tokenizer.call(this,
a,this.data(),this.bind(this.onSelect),this.opts);null!=a&&void 0!=a&&(this.search.val(a),0<a.length&&this.open())},onSelect:function(a,b){this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,!0===this.opts.closeOnSelect),this.opts.closeOnSelect?(this.close(),this.search.width(10)):0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),0<this.getMaximumSelectionSize()&&
this.val().length>=this.getMaximumSelectionSize()&&this.updateResults(!0),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),(!b||!b.noFocus)&&this.focusSearch())},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(a){var b=!a.locked,c=e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),d=e("<li class='select2-search-choice select2-locked'><div></div></li>"),
c=b?c:d,d=this.id(a),f=this.getVal(),h;h=this.opts.formatSelection(a,c.find("div"),this.opts.escapeMarkup);void 0!=h&&c.find("div").replaceWith("<div>"+h+"</div>");h=this.opts.formatSelectionCssClass(a,c.find("div"));void 0!=h&&c.addClass(h);if(b)c.find(".select2-search-choice-close").on("mousedown",j).on("click dblclick",this.bind(function(a){this.isInterfaceEnabled()&&(e(a.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(e(a.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
this.close();this.focusSearch()})).dequeue(),j(a))})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))}));c.data("select2-data",a);c.insertBefore(this.searchContainer);f.push(d);this.setVal(f)},unselect:function(a){var b=this.getVal(),c,d,a=a.closest(".select2-search-choice");if(0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";if(c=a.data("select2-data")){for(;0<=
(d=k(this.id(c),b));)b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults();b=e.Event("select2-removing");b.val=this.id(c);b.choice=c;this.opts.element.trigger(b);b.isDefaultPrevented()||(a.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},postprocessResults:function(a,b,c){var d=this.getVal(),b=this.results.find(".select2-result"),e=this.results.find(".select2-result-with-children"),f=this;b.each2(function(a,b){var c=
f.id(b.data("select2-data"));0<=k(c,d)&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))});e.each2(function(a,b){!b.is(".select2-result-selectable")&&0===b.find(".select2-result-selectable:not(.select2-selected)").length&&b.addClass("select2-selected")});-1==this.highlight()&&!1!==c&&f.highlight(0);!this.opts.createSearchChoice&&0<!b.filter(".select2-result:not(.select2-selected)").length&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&
r(f.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+f.opts.formatNoMatches(f.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-(this.search.outerWidth(!1)-this.search.width())},resizeSearch:function(){var a,b,c,d,f=this.search.outerWidth(!1)-this.search.width();a=this.search;v||(c=a[0].currentStyle||window.getComputedStyle(a[0],null),v=e(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",
display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),v.attr("class","select2-sizer"),e("body").append(v));v.text(a.val());a=v.width()+10;b=this.search.offset().left;c=this.selection.width();d=this.selection.offset().left;b=c-(b-d)-f;b<a&&(b=c-f);40>b&&(b=c-f);0>=b&&(b=a);this.search.width(Math.floor(b))},getVal:function(){var a;if(this.select)return a=this.select.val(),
null===a?[]:a;a=this.opts.element.val();return B(a,this.opts.separator)},setVal:function(a){var b;this.select?this.select.val(a):(b=[],e(a).each(function(){0>k(this,b)&&b.push(this)}),this.opts.element.val(0===b.length?"":b.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)m(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),0<c&&c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(a,b){var c,
d=this;if(0===arguments.length)return this.getVal();c=this.data();c.length||(c=[]);if(!a&&0!==a)this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),b&&this.triggerChange({added:this.data(),removed:c});else{this.setVal(a);if(this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),b&&this.triggerChange(this.buildChangeDetails(c,this.data()));else{if(void 0===this.opts.initSelection)throw Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,
function(a){var f=e.map(a,d.id);d.setVal(f);d.updateSelection(a);d.clearSearch();b&&d.triggerChange(d.buildChangeDetails(c,d.data()))})}this.clearSearch()}},onSortStart:function(){if(this.select)throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var a=[],b=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();
this.selection.find(".select2-search-choice").each(function(){a.push(b.opts.id(e(this).data("select2-data")))});this.setVal(a);this.triggerChange()},data:function(a,b){var c=this,d,f;if(0===arguments.length)return this.selection.find(".select2-search-choice").map(function(){return e(this).data("select2-data")}).get();f=this.data();a||(a=[]);d=e.map(a,function(a){return c.opts.id(a)});this.setVal(d);this.updateSelection(a);this.clearSearch();b&&this.triggerChange(this.buildChangeDetails(f,this.data()))}});
e.fn.select2=function(){var a=Array.prototype.slice.call(arguments,0),b,c,d,f,h,j="val destroy opened open close focus isFocused container dropdown onSortStart onSortEnd enable disable readonly positionDropdown data search".split(" "),i=["opened","isFocused","container","dropdown"],m=["val","data"],o={search:"externalSearch"};this.each(function(){if(0===a.length||"object"===typeof a[0])b=0===a.length?{}:e.extend({},a[0]),b.element=e(this),"select"===b.element.get(0).tagName.toLowerCase()?h=b.element.prop("multiple"):
(h=b.multiple||!1,"tags"in b&&(b.multiple=h=!0)),c=h?new E:new D,c.init(b);else if("string"===typeof a[0]){if(0>k(a[0],j))throw"Unknown method: "+a[0];f=void 0;c=e(this).data("select2");if(void 0!==c&&(d=a[0],"container"===d?f=c.container:"dropdown"===d?f=c.dropdown:(o[d]&&(d=o[d]),f=c[d].apply(c,a.slice(1))),0<=k(a[0],i)||k(a[0],m)&&1==a.length))return!1}else throw"Invalid arguments to select2 plugin: "+a;});return void 0===f?this:f};e.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,
openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){b=[];I(a.text,c.term,b,d);return b.join("")},formatSelection:function(a,b,c){return a?c(a.text):void 0},sortResults:function(a){return a},formatResultCssClass:function(){},formatSelectionCssClass:function(){},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" more character"+(1==c?"":"s")},formatInputTooLong:function(a,
b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a.id},matcher:function(a,b){return 0<=w(""+b).toUpperCase().indexOf(w(""+a).toUpperCase())},separator:",",tokenSeparators:[],
tokenizer:P,escapeMarkup:J,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){}};e.fn.select2.ajaxDefaults={transport:e.ajax,params:{type:"GET",cache:!1,dataType:"json"}};window.Select2={query:{ajax:K,local:L,tags:M},util:{debounce:H,markMatch:I,escapeMarkup:J,stripDiacritics:w},"class":{"abstract":s,single:D,multi:E}}}return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-select2', location = 'node_modules/@atlassian/aui/src/js/aui/select2.js' */
("undefined"===typeof window?global:window).__0d8267f32c62ec811936d03ae0ef7267=function(){"use strict";var b=__02fa0d2334b5d2f9701871403ba9d89a,d=b&&b.__esModule?b:{"default":b};__541108ffa7d92ccfa7bbf8536d20dbb0;var e=d.default.fn.select2;d.default.fn.auiSelect2=function(b){var c;if(d.default.isPlainObject(b)){var a=d.default.extend({},b);c=a.hasAvatar?" aui-has-avatar":"";a.containerCssClass="aui-select2-container"+c+(a.containerCssClass?" "+a.containerCssClass:"");a.dropdownCssClass="aui-select2-drop aui-dropdown2 aui-style-default"+
c+(a.dropdownCssClass?" "+a.dropdownCssClass:"");c=Array.prototype.slice.call(arguments,1);c.unshift(a)}else c=arguments.length?arguments:[{containerCssClass:"aui-select2-container",dropdownCssClass:"aui-select2-drop aui-dropdown2 aui-style-default"}];return e.apply(this,c)};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/js/space-page-picker.js' */
define("confluence-ui-components/js/space-page-picker",["underscore","ajs","jquery"],function(J,s,y){var H={conf_all:"All spaces",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces",conf_current:"Current space"};var i={"currentContent()":"Current page"};var A={data:null,suggestCategories:null};var r="SPACE-PAGE-TRIGGER-VALUE";var m={placeholder:"Select a space or page",multiple:true,formatInputTooShort:function(){return "Start typing to search"},formatResult:function(M,O,R){if(M.children){O.addClass("space-page-picker-result-category");return y.fn.select2.defaults.formatResult.apply(this,arguments)}else{if(M.id){O.attr("title",M.text);O.addClass("space-page-picker-result-label-with-icon");var L=y("<span/>").addClass(M.className+" item-text").html(y.fn.select2.defaults.formatResult.apply(this,arguments));var Q=(M.subText)?y("<span/>").addClass("space-name").html(M.subText):y("");var N=y("<span/>").attr(e(M.id),M.id).append(L).append(Q);var P=y("<span/>").append(N);return P}else{O.addClass(M.className);return y.fn.select2.defaults.formatResult.apply(this,arguments)}}},formatSelection:function(M,N){N.addClass("space-page-picker-selected-item");N.attr("title",M.text);var L=y("<span/>").attr(e(M.id),M.id).addClass(M.className+" item-text").html(y.fn.select2.defaults.formatSelection.apply(this,arguments));N.append(L)},escapeMarkup:function(L){return L},formatResultCssClass:function(L){return(L.children||L.id)?"":"select2-result-space-page-separator"},containerCssClass:"space-page-picker-container",dropdownCssClass:"space-page-picker-drop"};var p=function(L,N){var M=L.data("select2").opts.manualInit;if(M===true){return}C(L.val(),L,N)};function K(N,M,L){var O=J.map(N,function(P){return M[P]});return(L)?O:((O.length>0)?O[0]:null)}var q=function(L){var N;if(L.suggestCategories){var O={text:"Suggested categories",children:J.map(L.suggestCategories,function(P){return g(P)})}}if(L.suggestedContentFunctions){var M=J.map(L.suggestedContentFunctions,function(P){return x(P)})}return function(Q){if(N){Q.callback(N);return}var P=[];N={results:[]};if(a(L)){var S=y.getJSON(s.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(function(T){var U=(O)?[O]:[];(T.length>0)&&U.push({text:"Suggested spaces",children:J.map(T,function(V){return z(V.key,J.escape(V.name),null,true)})});(U.length>0)&&(N.results=N.results.concat(U))}).fail(function(){s.debug("Couldn't fetch recent spaces");var T=(O)?[O]:[];(T.length>0)&&(N.results=N.results.concat(T))});P.push(S)}if(n(L)){var R=y.getJSON(s.contextPath()+"/rest/recentlyviewed/1.0/recent/pages",{noTrashedContent:true}).done(function(T){if(T.length>0||M){var U=[];if(M){U=U.concat(M)}if(T.length>0){U=U.concat(J.map(T,function(V){return t(V.id,J.escape(V.title),J.escape(V.space),"content-type-page",true)}))}N.results.push({text:"Suggested pages",children:U})}}).fail(function(){s.debug("Couldn't fetch recent pages")});P.push(R)}y.when.apply(y,J.map(P,function(U){var T=y.Deferred();U.always(function(){T.resolve()});return T})).done(function(){if(N.results.length===0){N.results=[{text:"",children:[]}]}Q.callback(N)})}};var u=function(L){var M="";if(!L||L.length===2&&L.indexOf("space")>=0&&L.indexOf("page")>=0){M="type=spacedesc&type=personalspacedesc&type=page"}else{if(L.length===1&&L[0]==="space"){M="type=spacedesc&type=personalspacedesc"}else{if(L.length===1&&L[0]==="page"){M="type=page"}else{return}}}return window.Select2.query.ajax({url:s.contextPath()+"/rest/quicknav/1/search?"+M,data:function(N,O){return{query:N,maxPerCategory:25}},quietMillis:250,results:function(Q,U){var T=Q.contentNameMatches;if(T.length<=1){return{results:[]}}else{var V=[];var O=function(W){return G(W.spaceKey,W.spaceName,W.id,W.name,W.className)};for(var R=0;R<T.length-1;R++){var S=[];for(var P=0;P<T[R].length;P++){var N=O(T[R][P]);if(N){S.push(N)}}if(S.length>0){V=V.concat(S);V.push({id:"",text:"",subText:"",className:"",disabled:true})}}return{results:[{text:"Search results",children:V}]}}}})};var I=function(M){var L=u(M.contentType);var N=q(M);return function(O){if(O.term.length<2){N(O)}else{L(O)}}};function e(L){return(L.indexOf("page:")===0)?"data-item-id":"data-item-key"}function z(L,O,M,N){M=(M)?M:((L.indexOf("~")===0)?"content-type-personalspacedesc":"content-type-spacedesc");return h("space",L,O,"",M,N)}function g(L){var M=H[L];return h("space-cat",L,M,"","content-type-space-category",M)}function x(L){var M=i[L];return h("content-function",L,M,"","content-type-page",M)}function t(P,O,L,M,N){return h("page",P,O,L,M,N)}function h(R,O,Q,N,M,P){var L=f(R,O);Q=(!Q)?O:Q;M=(P)?M:(M+" content-not-found");return{id:L,text:Q,subText:N,className:M,disabled:(P?false:true)}}function k(L){return"space-cat:"+L}function j(L){return"content-function:"+L}function v(L){return"space:"+L}function w(L){return"page:"+L}function G(P,M,Q,N,O){var L;if(O==="content-type-spacedesc"||O==="content-type-personalspacedesc"){L=z(P,M,O,true)}else{if(O==="content-type-page"){L=t(Q,N,M,O,true)}}return L}function f(){var L=Array.prototype.slice.apply(arguments);return L.join(":")}function a(L){return((!L.contentType||L.contentType.length===0||L.contentType.indexOf("space")>=0)&&L.showRecentlyViewedSpaces!==false)}function n(L){return((!L.contentType||L.contentType.length===0||L.contentType.indexOf("page")>=0)&&L.showRecentlyViewedPages!==false)}function E(M,L){var N=c("SpaceCat",M,L.inputSpaceCatId,(L.inputSpaceCatName)?L.inputSpaceCatName:L.inputSpaceCatId);return B(M,N.id,N.name)}function F(M,L){var O=L.inputContentFunctionId||"legacy-macro-param-content-funcs";var N=c("ContentFunction",M,O,L.inputContentFunctionName||O);return B(M,N.id,N.name)}function l(M,L){var N=c("Space",M,L.inputSpaceId,(L.inputSpaceName)?L.inputSpaceName:L.inputSpaceId);return B(M,N.id,N.name)}function o(M,L){var N=c("Page",M,L.inputPageId,(L.inputPageName)?L.inputPageName:L.inputPageId);return B(M,N.id,N.name)}function c(P,N,Q,M){var L;if(!Q){L=N.attr("id");if(!L){return null}Q=L+P}if(!M){var O=N.attr("name")||L;M=O+P}return{id:Q,name:M}}function B(M,O,L){var N=y("#"+O);if(N.length===0){N=y(Confluence.UI.Components.templates.hiddenField({id:O,name:L}));M.after(N)}return N}function b(M,O,N){if(!M){return}var L=J.filter(O,function(P){return P.indexOf(N)===0});L=J.map(L,function(P){return P.substring(N.length,P.length)});M.val(L.join(","))}function d(S,N,O,L){O=(O)?(J.isArray(O)?O:O.split(",")):[];L=(L)?L.split(","):[];var R=J.union(O,L);var M=J.map(R,function(U){return N+U});var P=S.val();var T=P?P.split(","):[];var Q=J.union(T,M);if(Q.length>0){S.val(Q.join(","))}}function D(M){var L=J.extend({},A,m,M);if(!M.data){L=J.extend({},{initSelection:p,query:I(L)},L)}var N=y(L.orgElement);if(!N||N.length!==1){return L}if(!N.val()&&!L.manualInit){N.val(r)}N.addClass("select2-input");return L}function C(R,U,N){var M=U.data("select2").opts;var P=M.placeholder||U.data("placeholder");var T=E(U,M);var W=F(U,M);var L=l(U,M);var X=o(U,M);U.on("change",function(ad){b(T,ad.val,"space-cat:");b(W,ad.val,"content-function:");b(L,ad.val,"space:");b(X,ad.val,"page:")});U.val("");var ab=(U["0"].tagName==="SELECT")?(U.context.multiple):(M.multiple);var V=[];var Y=[];var ac=[];var O=[];var aa={};var Q=(R)?R.split(","):[];Q=J.filter(Q,function(ad){var ae=ad.split(":");if(ae.length===2){return true}else{if(ae.length<0||ae.length>=3||(ae.length===1&&(ae[0]!==r&&ae[0]!==P))){s.debug("Error value: "+ae)}}});R=Q.join(",");U.val(R);d(U,"space-cat:",M.spaceCatKeys,(T)?T.val():"");d(U,"content-function:",M.pageCatKeys,(W)?W.val():"");d(U,"space:",M.spaceKeys,(L)?L.val():"");d(U,"page:",M.pageIds,(X)?X.val():"");R=U.val();Q=(R)?R.split(","):[];b(T,Q,"space-cat:");b(W,Q,"content-function:");b(L,Q,"space:");b(X,Q,"page:");if(Q.length===0){return}J.each(Q,function(ad,ae){var ah=ad.split(":");if(ah.length===2){var ag=ah[0];var af=ah[1];if(ag==="space-cat"){V.push(af)}else{if(ag==="content-function"){ac.push(af)}else{if(ag==="space"){Y.push(af)}else{if(ag==="page"){O.push(af)}}}}}});J.each(V,function(ad){aa[k(ad)]=g(ad)});J.each(ac,function(ad){aa[j(ad)]=x(ad)});var Z=[];if(Y.length>0){var S=y.getJSON(s.contextPath()+"/rest/prototype/1/space",{spaceKey:Y}).done(function(af){var ad=[];J.each(af.space,function(ag){aa[v(ag.key)]=z(ag.key,J.escape(ag.name),null,true);ad.push(ag.key)});var ae=J.difference(Y,ad);J.each(ae,function(ag){aa[v(ag)]=z(ag,ag,null,false)})}).fail(function(){s.debug("Couldn't resolve spaceKeys:",Y);J.each(Y,function(ad){aa[v(ad)]=z(ad,ad,null,false)})});Z.push(S)}J.each(O,function(ad){var ae=y.getJSON(s.contextPath()+"/rest/api/content/"+ad,{expand:"space"}).done(function(af){aa[w(af.id)]=t(af.id,J.escape(af.title),J.escape(af.space.name),"content-type-page",true)}).fail(function(){s.debug("Couldn't resolve pageId:",ad);aa[w(ad)]=t(ad,ad,"","content-type-page",false)});Z.push(ae)});y.when.apply(y,J.map(Z,function(ae){var ad=new y.Deferred();ae.always(function(){ad.resolve()});return ad.promise()})).done(function(){N(K(Q,aa,ab))})}return{build:D,setValue:function(M,L){C(M,L,function(N){L.auiSelect2("data",N)})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/js/internal/space-page-picker-legacy.js' */
window.Confluence.UI.Components.SpacePagePicker=require("confluence-ui-components/js/space-page-picker");AJS.deprecate.prop(window.Confluence.UI.Components.SpacePagePicker,"build",{sinceVersion:"1.4.34",extraInfo:"Use require('confluence-ui-components/js/space-page-picker')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/soy/space-page-picker.soy' */
// This file was automatically generated from space-page-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.templates == 'undefined') { Confluence.UI.Components.templates = {}; }


Confluence.UI.Components.templates.hiddenField = function(opt_data, opt_ignored) {
  return '<input type="hidden" id="' + soy.$$escapeHtml(opt_data.id) + '" name="' + soy.$$escapeHtml(opt_data.name) + '" />';
};
if (goog.DEBUG) {
  Confluence.UI.Components.templates.hiddenField.soyTemplateName = 'Confluence.UI.Components.templates.hiddenField';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:page-picker', location = '/js/page-picker.js' */
define("confluence-ui-components/js/page-picker",["ajs","confluence-ui-components/js/space-page-picker"],function(a,b){return{build:function(c){c.placeholder="Select a page";c.contentType=["page"];c.showRecentlyViewedSpaces=false;c.spaceCatKeys=[];c.spaceKeys=[];return b.build(c)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:page-picker', location = '/js/internal/page-picker-legacy.js' */
window.Confluence.UI.Components.PagePicker=require("confluence-ui-components/js/page-picker");AJS.deprecate.prop(window.Confluence.UI.Components.PagePicker,"build",{sinceVersion:"1.4.34",extraInfo:"Use require('confluence-ui-components/js/page-picker')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker.js' */
define("confluence-ui-components/js/label-picker",["ajs","confluence/legacy","jquery","underscore"],function(g,i,e,j){var a=/[;,\.\?&\[\(\)#\^\*@!<>\]]/g;function l(m){var n=j.uniq(m.match(a));return n.join(" ")}function b(m){return{id:m.name,text:m.name}}function c(m){if(!m||!m.length){return null}var n=j.map(m,b);return j.sortBy(n,function(o){return o.text.toLowerCase()})}function k(o){var n=o.contentNameMatches;var p=c(n[0]);var m=c(n[1]);if(p&&m){return[{text:"Suggested",children:p},{text:"Other",children:m}]}return p||m||[]}function f(m){return function(n){return e.extend({query:n,ignoreRelated:true,maxResults:10},m)}}var d={placeholder:"Add labels",multiple:true,minimumInputLength:1,maximumSelectionSize:20,tokenSeparators:[" ",","],formatInputTooShort:function(n,m){return "Start typing to search for a label"},formatSelectionTooBig:function(m){return g.format("You can only input {0} labels",m)},formatResult:function(m){return i.UI.Components.LabelPicker.templates.labelResult({label:{labelName:m.text,isNew:m.isNew}})},formatNoMatches:function(n){var m=l(n);if(m){return i.UI.Components.LabelPicker.templates.labelInvalid({inputValue:n,invalidCharacters:m})}return this.noMatches},createSearchChoice:function(n){if(!n){return null}var m=l(n);if(m){return null}return{id:n,text:n,isNew:true}},ajax:{data:f(),dataType:"json",url:i.getContextPath()+"/labels/autocompletelabel.action",results:function(m){return{results:k(m)}},quietMillis:300},dropdownCssClass:"labels-dropdown",containerCssClass:"labels-autocomplete",initSelection:function(m,p){var o=m.val().split(",");var n=j.map(o,function(q){return{id:q,text:q}});p(n)}};function h(n){var m=e.extend({},d,n);if(n&&n.queryOpts){m.ajax.data=f(n.queryOpts);delete m.queryOpts}if(!n||!n.noMatches){m.noMatches=m.placeholder}return m}return{build:h}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker-legacy.js' */
window.Confluence.UI.Components.LabelPicker=require("confluence-ui-components/js/label-picker");AJS.deprecate.prop(window.Confluence.UI.Components.LabelPicker,"build",{sinceVersion:"1.4.18",extraInfo:"Use require('confluence-ui-components/js/label-picker')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/soy/label-picker.soy' */
// This file was automatically generated from label-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.LabelPicker.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.LabelPicker == 'undefined') { Confluence.UI.Components.LabelPicker = {}; }
if (typeof Confluence.UI.Components.LabelPicker.templates == 'undefined') { Confluence.UI.Components.LabelPicker.templates = {}; }


Confluence.UI.Components.LabelPicker.templates.labelResult = function(opt_data, opt_ignored) {
  return '' + ((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format('\x22{0}\x22 - add a new label',opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
};
if (goog.DEBUG) {
  Confluence.UI.Components.LabelPicker.templates.labelResult.soyTemplateName = 'Confluence.UI.Components.LabelPicker.templates.labelResult';
}


Confluence.UI.Components.LabelPicker.templates.labelInvalid = function(opt_data, opt_ignored) {
  var output = '';
  var inputValueHtml__soy9 = '<b>' + soy.$$escapeHtml(opt_data.inputValue) + '</b>';
  var invalidCharactersHtml__soy13 = '<b>' + soy.$$escapeHtml(opt_data.invalidCharacters) + '</b>';
  output += soy.$$filterNoAutoescape(AJS.format('{0} contains invalid characters {1}',inputValueHtml__soy9,invalidCharactersHtml__soy13));
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.LabelPicker.templates.labelInvalid.soyTemplateName = 'Confluence.UI.Components.LabelPicker.templates.labelInvalid';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:include-exclude-picker', location = '/js/include-exclude-picker.js' */
define("confluence-ui-components/js/include-exclude-picker",["jquery","underscore"],function(d,j){var e="";function c(k){var l=k.charAt(0);if(j.contains(["-"],l)){e=l;k=k.substring(1)}else{e=""}return k}function h(k){var l=d.extend({},k);if(l.children){l.children=j.map(l.children,h)}else{l.id=e+l.id;l.text=e+l.text}return l}function b(k){return function(l){l=c(l);return k(l)}}function f(k){return function(m){var l=k?k(m):m;if(e){l.results=j.map(l.results,h)}return l}}function a(k){return function(l){return k(l,c,h)}}function g(k){var l=k.text.charAt(0);if(l==="-"){return"select2-search-choice-subtle"}return}function i(l){var k=d.extend({formatSelectionCssClass:g},l);if(k.query){k.query=a(k.query);return k}else{k.ajax=d.extend({},k.ajax);k.ajax.data=b(k.ajax.data);k.ajax.results=f(k.ajax.results);return k}}return{build:i}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:user-group-select2', location = '/js/user-group-select2.js' */
define("confluence-ui-components/js/user-group-select2",["ajs","confluence/legacy","jquery"],function(a,d,b){function c(f){f=f||document.body;var e=function(){var g=b(".select2-drop-active > .select2-results");if(g.children(".select2-result-selectable").length===0&&g.children(".select2-disabled").length){g.append('<li class="select2-no-results">'+a.escapeHtml("No matches found")+"</li>")}};b("input.autocomplete-multiusergroup[data-autocomplete-bound != 'true']",f).each(function(){var g=b(this);g.attr("data-autocomplete-bound","true");var h=g.attr("data-include-groups");g.auiSelect2({multiple:true,minimumInputLength:2,formatInputTooShort:function(){return h?"Start typing to search for a user or group":"Start typing to search for a user"},ajax:{transport:function(l){var m=l.success;delete l.success;return b.ajax.apply(b.ajax,arguments).done(m).done(e)},data:function(l){return{"max-results":6,query:l}},dataType:"json",url:d.getContextPath()+"/rest/prototype/1/search/user"+(h?"-or-group":"")+".json",results:function(m){var l=[];b.each(m.result,function(){if(this.type=="user"){l.push({id:this.username,text:this.title,imgSrc:this.thumbnailLink.href,entity:this})}else{l.push({id:this.name,text:this.name,imgSrc:a.contextPath()+"/images/icons/avatar_group_48.png",entity:this})}});return{results:l}},quietMillis:300},formatResult:function(l){return d.UI.Components.UserGroupSelect2.avatarWithName({size:"small",displayName:l.text,userId:l.id,avatarImageUrl:l.imgSrc})},escapeMarkup:function(l){return l},formatSelection:function(l){return d.UI.Components.UserGroupSelect2.avatarWithName({size:"xsmall",displayName:l.text,userId:l.id,avatarImageUrl:l.imgSrc})},dropdownCssClass:"users-dropdown",containerCssClass:"users-autocomplete",hasAvatar:true});if(!g.data("autofill-user")){return}var k=a.Meta.get("remote-user"),j=a.Meta.get("current-user-fullname"),i=a.Meta.get("current-user-avatar-uri-reference");if(k&&j&&i){g.auiSelect2("data",[{id:k,text:j,imgSrc:i}])}})}return{bind:c}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:user-group-select2', location = '/soy/user-group-select2.soy' */
// This file was automatically generated from user-group-select2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.UserGroupSelect2.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.UserGroupSelect2 == 'undefined') { Confluence.UI.Components.UserGroupSelect2 = {}; }


Confluence.UI.Components.UserGroupSelect2.avatarWithName = function(opt_data, opt_ignored) {
  return '' + aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-username': opt_data.userId}}) + soy.$$escapeHtml(opt_data.displayName);
};
if (goog.DEBUG) {
  Confluence.UI.Components.UserGroupSelect2.avatarWithName.soyTemplateName = 'Confluence.UI.Components.UserGroupSelect2.avatarWithName';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-component.soy' */
// This file was automatically generated from cql-component.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.Templates == 'undefined') { Confluence.UI.Components.CQL.Templates = {}; }


Confluence.UI.Components.CQL.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="cql-container"><div class="cql-error-container"></div><div class="cql-fields"></div></div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.Templates.container.soyTemplateName = 'Confluence.UI.Components.CQL.Templates.container';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-filter-field.soy' */
// This file was automatically generated from cql-filter-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQLFilters.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQLFilters == 'undefined') { Confluence.UI.Components.CQLFilters = {}; }
if (typeof Confluence.UI.Components.CQLFilters.Templates == 'undefined') { Confluence.UI.Components.CQLFilters.Templates = {}; }


Confluence.UI.Components.CQLFilters.Templates.baseFilterField = function(opt_data, opt_ignored) {
  var output = '<div class="cql-filter cql-field-' + soy.$$escapeHtml(opt_data.field.fieldName) + ' cql-type-' + soy.$$escapeHtml(opt_data.field.uiSupport.valueType) + '">';
  var id__soy8 = 'cql-field-' + soy.$$escapeHtml(opt_data.field.fieldName) + '-' + soy.$$escapeHtml(opt_data.counter);
  output += '<div class=\'cql-field-heading\'><label for="' + soy.$$escapeHtml(id__soy8) + '">' + soy.$$escapeHtml(opt_data.label) + ((! opt_data.field.fixed) ? '<span class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml('Remove filter') + '"></span>' : '') + '</label></div><div class=\'cql-filter-field-input-container\'><input type="text" class="cql-field-input text" id="' + soy.$$escapeHtml(id__soy8) + '"></div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQLFilters.Templates.baseFilterField.soyTemplateName = 'Confluence.UI.Components.CQLFilters.Templates.baseFilterField';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-filter-select.soy' */
// This file was automatically generated from cql-filter-select.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.FilterSelect.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.FilterSelect == 'undefined') { Confluence.UI.Components.CQL.FilterSelect = {}; }
if (typeof Confluence.UI.Components.CQL.FilterSelect.Templates == 'undefined') { Confluence.UI.Components.CQL.FilterSelect.Templates = {}; }


Confluence.UI.Components.CQL.FilterSelect.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="cql-add-filter-container"><button type="button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Add a filter') + '</button><div class="input-wrapper hidden"><input class="select2-input" type="text" /></div></div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.FilterSelect.Templates.container.soyTemplateName = 'Confluence.UI.Components.CQL.FilterSelect.Templates.container';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/date-picker.soy' */
// This file was automatically generated from date-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.DatePicker.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.DatePicker == 'undefined') { Confluence.UI.Components.DatePicker = {}; }
if (typeof Confluence.UI.Components.DatePicker.templates == 'undefined') { Confluence.UI.Components.DatePicker.templates = {}; }


Confluence.UI.Components.DatePicker.templates.input = function(opt_data, opt_ignored) {
  return '<div class="aui-navgroup-vertical"><ul class="aui-nav"><li class="aui-nav-selected"><a data-value="">' + soy.$$escapeHtml('Any date') + '</a></li><li><a data-value="now(\'-1d\')">' + soy.$$escapeHtml('Last 24 hours') + '</a></li><li><a data-value="now(\'-1w\')">' + soy.$$escapeHtml('Last week') + '</a></li><li><a data-value="now(\'-1M\')">' + soy.$$escapeHtml('Last month') + '</a></li><li><a data-value="now(\'-1y\')">' + soy.$$escapeHtml('Last year') + '</a></li><li><a data-value="custom">' + soy.$$escapeHtml('Custom') + '</a><span class="absolute-date-pickers"><input class="from-date-picker text" type="date" /><span>&ndash;</span><input class="to-date-picker text" type="date" /></span></li></ul></div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.DatePicker.templates.input.soyTemplateName = 'Confluence.UI.Components.DatePicker.templates.input';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-type-picker.soy' */
// This file was automatically generated from cql-type-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.TypePicker.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.TypePicker == 'undefined') { Confluence.UI.Components.CQL.TypePicker = {}; }
if (typeof Confluence.UI.Components.CQL.TypePicker.templates == 'undefined') { Confluence.UI.Components.CQL.TypePicker.templates = {}; }


Confluence.UI.Components.CQL.TypePicker.templates.suggestions = function(opt_data, opt_ignored) {
  var output = '<div class="aui-navgroup-vertical"><ul class="aui-nav">';
  var typeList4 = opt_data.types;
  var typeListLen4 = typeList4.length;
  for (var typeIndex4 = 0; typeIndex4 < typeListLen4; typeIndex4++) {
    var typeData4 = typeList4[typeIndex4];
    output += '<li ' + ((typeIndex4 == 0) ? ' class="aui-nav-selected"' : '') + '><a data-value="' + soy.$$escapeHtml(typeData4.type) + '">' + soy.$$escapeHtml(typeData4.label) + '</a></li>';
  }
  output += '<li><a data-value="custom">' + soy.$$escapeHtml('Custom') + '</a></li></ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.TypePicker.templates.suggestions.soyTemplateName = 'Confluence.UI.Components.CQL.TypePicker.templates.suggestions';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-space-field.soy' */
// This file was automatically generated from cql-space-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.SpaceField.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.SpaceField == 'undefined') { Confluence.UI.Components.CQL.SpaceField = {}; }
if (typeof Confluence.UI.Components.CQL.SpaceField.templates == 'undefined') { Confluence.UI.Components.CQL.SpaceField.templates = {}; }


Confluence.UI.Components.CQL.SpaceField.templates.archivedSpacesOption = function(opt_data, opt_ignored) {
  return '<span><input type="checkbox" value="true" id="search-filter-include-archived" name="includeArchivedSpaces"><label for="search-filter-include-archived">Search archived spaces</label></span>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.SpaceField.templates.archivedSpacesOption.soyTemplateName = 'Confluence.UI.Components.CQL.SpaceField.templates.archivedSpacesOption';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-special-spaces.js' */
define("confluence-ui-components/js/cql/internal/cql-special-spaces",["underscore"],function(c){var b={conf_current:"currentSpace()",conf_favorites:"favourite",conf_global:"global",conf_personal:"personal"};var f=c.invert(b);function d(g){if(g==="search-screen"){return c.omit(b,"conf_current")}return b}function a(g){return c.keys(d(g))}function e(g){return f[g]}return{getMap:d,getKeys:a,getUIValue:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-ajax.js' */
define("confluence-ui-components/js/cql/internal/cql-ajax",["jquery","underscore","ajs"],function(d,c,b){var g;function f(){if(!g){g=d.Deferred();var j=function(l){var m=c.values(l);if(!m.length){throw Error("Unknown CQL field data returned from server - cannot initialise CQL fields.")}var k=c.union.apply(c,m);k=c.sortBy(k,"fieldName");g.resolve(k)};var i=function(){g.reject()};d.getJSON(b.contextPath()+"/rest/cql/fields?filter=withUiSupport").done(j).fail(i)}return g.promise()}function e(i){return d.getJSON(b.contextPath()+"/rest/cql/expressions?cql="+encodeURIComponent(i))}function a(){return d.getJSON(b.contextPath()+"/rest/cql/contenttypes?category=content")}function h(){return d.getJSON(b.contextPath()+"/rest/cql/contenttypes?category=all")}return{getFields:f,parseClauses:e,getTypes:h,getContentTypes:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-date-picker.js' */
define("confluence-ui-components/js/cql/internal/cql-date-picker",["ajs","jquery"],function(a,b){function c(k){var h=b(Confluence.UI.Components.DatePicker.templates.input());var d=h.find(".aui-nav li");var g=h.find(".absolute-date-pickers").hide();var f=h.find(".from-date-picker");var i=h.find(".to-date-picker");var e=function(){};this.onChange=function(l){e=l;f.change(l);i.change(l)};h.on("click",".aui-nav a",function(){var l=d.filter("li.aui-nav-selected");var m=b(this).closest("li");if(l[0]!=m[0]){d.not(m).removeClass("aui-nav-selected");m.addClass("aui-nav-selected");e()}if(b(this).data("value")==="custom"){g.slideDown("fast")}else{g.slideUp("fast")}});var j={overrideBrowserDefault:true};a.DatePicker(f,j);a.DatePicker(i,j);f.attr("placeholder","From");i.attr("placeholder","To");k.replaceWith(h);return{getSelectedOption:function(){var l=d.filter(".aui-nav-selected").find("a");return l.data("value")},selectOption:function(m){var l=d.find('a[data-value="'+m+'"]');l.click()},getFromDate:function(){return f.val()},getToDate:function(){return i.val()},setFromDate:function(l){f.val(l);d.find("a[data-value='custom']").click()},setToDate:function(l){i.val(l);d.find("a[data-value='custom']").click()}}}return{build:c}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-type-picker.js' */
define("confluence-ui-components/js/cql/internal/cql-type-picker",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-ajax","confluence-ui-components/js/include-exclude-picker","confluence/legacy","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(e,k,g,a,c,j,f){var b;var d=[];function m(n){d=k.map(n,function(o){return{id:o.type,text:o.label}})}function l(){b=null;d=[]}function h(o,n){if(o.length===0){return""}if(o.length==1&&k.contains(k.pluck(n,"type"),o[0])){return o[0]}return"custom"}function i(o,s){var u,n,q,t=[];if(!b){b=s?a.getContentTypes():a.getTypes();b.done(m)}b.done(function(){if(o.length){var v=k.pluck(d,"id");t=[].concat(d);o.forEach(function(w){if(w.type!==""&&!k.contains(v,w.type)){t.push({id:w.type,text:w.label})}})}else{t=d}});var r={query:function(v,x,w){b.done(function(){x(v.term);var y=window.Select2.query.local({results:k.map(t,w)});y(v)})},initSelection:function(w,z){var v=w.val().split(",");var y="";var x=k.map(v,function(A){var B=A.charAt(0);if(B==="-"){y="-";return A.substring(1)}return A});b.done(function(){var A=k.filter(t,function(B){return k.contains(x,B.id)});z(k.map(A,function(B){return{id:y+B.id,text:y+B.text}}))})},multiple:true,placeholder:"All content types"};function p(v){u=v;if(g.trace){u.on("change",function(){g.trace("type.field.changed")})}if(o.length){var w=e(j.UI.Components.CQL.TypePicker.templates.suggestions({types:o}));n=w.find(".aui-nav li");u.before(w);w.on("click",".aui-nav a",function(){var A=e(this).closest("li");var z=n.filter(".aui-nav-selected");if(A[0]===z[0]){return}z.removeClass("aui-nav-selected");A.addClass("aui-nav-selected");var y=e(this).attr("data-value");if(y=="custom"){q.slideDown("fast")}else{q.hide()}var x=true;u.select2("val",[y],x)})}u.auiSelect2(c.build(r));if(o.length){q=u.closest(".cql-filter").find(".select2-container");q.hide()}}return{setupInput:p,setValues:function(v){if(n){var w=h(v,o);var y=n.find('[data-value="'+w+'"]').parent();n.not(y).removeClass("aui-nav-selected");y.addClass("aui-nav-selected");if(w==="custom"){q.show()}}var x=e.Deferred();b.done(function(){f.setValues(u,v).done(function(){x.resolve()})});return x}}}return{build:i,_clearCache:l,_getPicklistKey:h}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-field-model.js' */
define("confluence-ui-components/js/cql/internal/cql-field-model",[],function(){function a(b){return b.uiSupport.label.translation}return{getLabel:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-expression-adjuster.js' */
define("confluence-ui-components/js/cql/internal/cql-space-expression-adjuster",["underscore","confluence-ui-components/js/cql/internal/cql-special-spaces"],function(c,a){function b(f){var e=f.functionValues;if(!e||!e.length){return f}var d=[];c.each(e,function(g){if(g.functionName==="currentSpace"){d.push(a.getUIValue("currentSpace()"))}else{throw new Error(g.functionName+" is not a known function")}});f.values=d.concat(f.values);return f}return{convertFunctionValues:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-autocomplete-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-autocomplete-filter-field",["jquery","ajs","confluence/legacy","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(d,h,j,b,f){function k(m){var n=m.suggestedResults;var l=m.searchResults;if(!n.length){return l}if(!l.length){return n}return[{text:"Suggestions",children:n},{text:"Search results",children:l}]}function a(l){return{query:l,searchContext:JSON.stringify({spaceKey:h.Meta.get("space-key"),contentId:h.Meta.get("content-id")})}}var c={placeholder:"Start typing to search",multiple:true,tokenSeparators:[" ",","],createSearchChoice:function(l){if(!l){return null}return{id:l,text:"New result: "+l,isNew:true}},createSearchChoicePosition:"bottom",ajax:{data:a,results:function(l){return{results:k(l)}},quietMillis:300},initSelection:function(l,o){var n=l.val().split(",");var m=n.map(function(p){return{id:p,text:p}});o(m)}};function e(l){return l.indexOf("http://")===0||l.indexOf("https://")===0}function g(l){if(e(l)){return l}else{return j.getContextPath()+l}}function i(l){var m;return{setupInput:function(n){m=n;var p=d.extend({},c.ajax,{url:g(l.uiSupport.dataUri)});var o=d.extend({},c,{ajax:p});n.auiSelect2(o)},asCqlFunc:function(){var n=this.input.val().trim();if(!n){return undefined}return b.buildEqualityExpressionFromValuesString(this.fieldName,n)},setValues:function(n){return f.setValues(m,n.values)}}}return{build:i,_getUrl:g,_ajaxData:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-content-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-content-filter-field",["jquery","confluence-ui-components/js/page-picker","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(d,h,a,b){function e(i){return"page:"+i}function c(i){return"content-function:"+i.functionName+"()"}function g(i){return i.values.map(e).concat(i.functionValues.map(c))}function f(){var i;return{setupInput:function(j){i=j;var k={multiple:this.fieldName!=="parent",suggestedContentFunctions:["currentContent()"]};j.auiSelect2(h.build(k))},asCqlFunc:function(){var k=this.input.val().trim();if(!k){return undefined}var j=k.replace(/[a-z\-]+:/g,"");return a.buildEqualityExpressionFromValuesString(this.fieldName,j)},_addValuePrefixes:g,setValues:function(k){var j=g(k);return b.setValues(i,j)}}}return{build:f}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-type-suggestions.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-type-suggestions",["ajs"],function(b){var c=[{type:"",label:"All content"},{type:"page",label:"Pages"},{type:"blogpost",label:"Blog Posts"},{type:"attachment",label:"Attachments"},{type:"space",label:"Spaces"}];function a(){return c}return{getList:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-type-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-type-filter-field",["confluence-ui-components/js/cql/internal/cql-type-picker","confluence-ui-components/dark-features","confluence-ui-components/js/cql/internal/filterfields/cql-type-suggestions"],function(a,b,c){function d(f){var e;return{setupInput:function(g,h){var j=[];var i=true;if((h.environment==="search-screen"&&h.searchType=="all")||b.isEnabled("cql.force.full.search.mode")){j=c.getList();i=false}e=a.build(j,i);e.setupInput(g)},setValues:function(g){return e.setValues(g.values)}}}return{build:d}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-date-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-date-filter-field",["ajs","underscore","confluence-ui-components/js/cql/internal/cql-date-picker"],function(b,c,a){function d(g){var h=g.fieldName;var f;function e(){var j=f.getFromDate();var i=f.getToDate();var l,k;if(j){l=h+' >= "'+j+'"'}if(i){k=h+' <= "'+i+'"'}if(l&&k){return l+" and "+k}return l||k||""}return{setupInput:function(i){f=a.build.call(this,i)},setValues:function(k){if(!f){b.warn("DatePicker not set yet, can't set values");return}var j=k.expressions;if(j.length<1||j.length>2){b.warn("Can't set date value with expressions.length: "+j.length);return}if(j.length===1&&j[0].functionValues.length===1&&j[0].functionValues[0].functionName==="now"){if(j[0].operator!==">="){b.warn("Unsupported date picker relative date operator: "+j[0].operator);return}var i=j[0].functionValues[0].parameters[0];f.selectOption("now('"+i+"')")}else{c.each(j,function(m){if(m.values.length===1){var l=m.values[0];if(m.operator===">="){f.setFromDate(l)}else{if(m.operator==="<="){f.setToDate(l)}}}})}},asCqlFunc:function(){if(!f){b.warn("DatePicker not set yet, can't get CQL");return}var i=f.getSelectedOption();if(!i){return""}if(i==="custom"){return e()}return h+" >= "+i}}}return{build:d}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-label-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-label-filter-field",["jquery","ajs","confluence-ui-components/js/label-picker","confluence-ui-components/js/include-exclude-picker","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(d,c,a,e,b){function f(){var g;return{setupInput:function(h){g=h;h.auiSelect2(e.build(a.build({noMatches:"No matching labels found"})))},setValues:function(h){return b.setValues(g,h.values)}}}return{build:f}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-space-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-space-filter-field",["jquery","confluence-ui-components/js/space-picker","confluence-ui-components/js/include-exclude-picker","confluence-ui-components/js/cql/internal/cql-special-spaces","confluence-ui-components/js/cql/internal/cql-space-expression-adjuster","confluence-ui-components/js/cql/internal/cql-space-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper","confluence/legacy"],function(b,e,a,d,i,f,c,h){function g(){var j;return{setupInput:function(k,l){j=k;k.auiSelect2(a.build(e.build({multiple:true,suggestCategories:d.getKeys(l.environment),disableMixedSpaceTypes:true})));if(l.environment==="search-screen"){var m=b(h.UI.Components.CQL.SpaceField.templates.archivedSpacesOption());j.after(m);this.onChange=function(o){var n=m.find("#search-filter-include-archived");n.change(o);j.change(o)}}},asCqlFunc:function(){return f.buildExpressionFromValuesString(this.input.val())},setValues:function(k){i.convertFunctionValues(k);return c.setValues(j,k.values)}}}return{build:g}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-user-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-user-filter-field",["jquery","ajs","confluence-ui-components/js/user-group-select2"],function(c,b,a){function d(){var f;function e(h){var g=h[0].result[0];return{id:g.username,text:g.title,imgSrc:g.thumbnailLink.href}}return{setupInput:function(g){f=g;g.addClass("select2-input autocomplete-multiusergroup");a.bind(g.parent())},setValues:function(j){var h=j.values;if(!h||!h[0]){return}var i=h.map(function(k){return c.getJSON(b.contextPath()+"/rest/prototype/1/search/user.json?query="+encodeURI(k))});function g(){var l=i.length>1?arguments:[arguments];var k=l.map(e);f.auiSelect2("data",k)}return c.when.apply(c,i).done(g)}}}return{build:d}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-filter-field-configs.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-filter-field-configs",["confluence-ui-components/js/cql/internal/filterfields/cql-autocomplete-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-content-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-type-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-date-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-label-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-space-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-user-filter-field"],function(b,h,a,g,c,f,e){var d={contentId:h,contentType:a,date:g,label:c,space:f,user:e};return{getConfig:function(j){var i=j.uiSupport;if(i.dataUri){return b.build(j)}if(d[i.valueType]){return d[i.valueType].build(j)}return{}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-filter-field.js' */
define("confluence-ui-components/js/cql/internal/cql-filter-field",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-field-model","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/filterfields/cql-filter-field-configs"],function(d,j,h,g,c,a){var e=window.Confluence.UI.Components.CQLFilters.Templates;var f=0;function b(n){var l=g.getLabel(n);var m=d(e.baseFilterField({label:l,field:n,counter:f++}));var k=m.find("input");m.data("fieldName",n.fieldName);return d.extend({input:k,element:m,onChange:function(o){k.change(o)}},n)}function i(p,o){var n=p.uiSupport;var r=n.valueType;var q=p.fieldName;if(!r){throw new Error("Can't create filter without valueType.")}if(!q){throw new Error("Can't create filter without fieldName.")}var m=a.getConfig(p);var k=b(p);k.asCql=j.bind(m.asCqlFunc||function(){return c.buildExpression(k,this.input.val())},k);var l=k.element.find("input");if(typeof m.setupInput==="function"){k.setupInput=m.setupInput;k.setupInput(l,o.context)}k.setValues=m.setValues||function(s){l.val(s.values.join(","))};k.element.find(".aui-iconfont-remove").click(function(){k.element.remove();o.removeField(k)});return k}return{build:i}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-filter-select.js' */
define("confluence-ui-components/js/cql/internal/cql-filter-select",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-ajax","confluence-ui-components/js/cql/internal/cql-field-model"],function(f,c,a,e,b){var d=window.Confluence.UI.Components.CQL.FilterSelect.Templates;function g(t){var r=t.cqlContainer;var m=r.find(".cql-fields");var i=t.onSelection;if(!i){throw Error("An onSelection callback must be provided to the FilterSelect.")}var s=f(d.container());var n=s.children("button");var q=s.find(".input-wrapper");var p=s.find("input");function j(u){u.preventDefault();q.removeClass("hidden");n.hide();s.find(".select2-choice").mousedown()}n.click(j);function h(){q.addClass("hidden");n.show()}p.bind("select2-close",function(){a.debug("CQL Field selector closed");h();setTimeout(function(){a.log("Checking CQL Field selector focus");if(!f(document.activeElement).closest(".cql-filter").length){a.debug("Setting CQL Field selector focus");n.focus()}},1)});r.append(s);function o(u){if(!u.added){return}p.auiSelect2("val","");i(u.added);a.debug("CQL Field selection made");h()}function k(u){if(t.context.environment!=="search-screen"&&!a.DarkFeatures.isEnabled("cql.search.screen")){u=c.reject(u,function(w){return w.type==="date"})}u=c.reject(u,function(w){return c.contains(t.ignoredFields,w.fieldName)});function v(){if(!m[0]){throw new Error("Why no cql-container?")}var x=m.find(".cql-filter").map(function(){return f(this).data("fieldName")});var w=c.reject(u,function(y){return c.contains(x,y.fieldName)&&!c.contains(["label"],y.fieldName)});return{results:w,text:b.getLabel}}p.auiSelect2({id:"fieldName",data:v,formatResult:b.getLabel,formatSelection:b.getLabel,placeholder:"Add a filter"}).change(o)}function l(){a.log("Couldn't fetch CQL fields - unable to initialise CQL field picker")}e.getFields().done(k).fail(l);return p}return{build:g}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-expression-builder.js' */
define("confluence-ui-components/js/cql/internal/cql-space-expression-builder",["jquery","underscore","confluence-ui-components/js/cql/internal/cql-special-spaces","confluence-ui-components/js/cql/internal/cql-expression-builder"],function(d,c,b,a){function e(k){var l=k.trim();if(!l){return undefined}var g=l.split(",");var m=b.getKeys();var f=[];var j=[];c.each(g,function(n){if(n==="conf_current"){f.push("currentSpace()")}else{if(c.contains(m,n)){j.push(n)}else{f.push(n)}}});var h=[];if(j.length){var i=b.getMap();j=c.map(j,function(n){return i[n]});if(j.indexOf("global")!==-1){h.push(a.buildEqualityExpressionFromValuesString("space.type","-personal"));j=c.filter(j,function(n){return n!=="global"})}if(j.length>0){h.push(a.buildEqualityExpressionFromValuesArray("space.type",j))}}if(f.length){h.push(a.buildEqualityExpressionFromValuesArray("space",f))}if(h.length===1){return h[0]}return"("+h.join(" or ")+")"}return{buildExpressionFromValuesString:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-expression-builder.js' */
define("confluence-ui-components/js/cql/internal/cql-expression-builder",["jquery","underscore"],function(e,j){function c(n){if(j.contains(["currentContent()","currentSpace()"],n)){return n}return'"'+a(n)+'"'}function a(n){return n.replace(/"/g,'\\"')}function i(n,p){var o=p.trim();if(!o){return undefined}return n+" ~ "+c(o)}function f(n){var o={"+":[],"-":[],"":[]};j.each(n,function(q){var p=q.charAt(0);if(p==="+"){o["+"].push(q.substring(1))}else{if(p==="-"){o["-"].push(q.substring(1))}else{o[""].push(q)}}});return o}function d(p,n){var o=j.map(n,function(q){return p+" = "+c(q)});return o.join(" AND ")}function m(s,p,n){if(p.length===0){return""}var q=j.map(p,c);var o;if(q.length===1){o=n?" = ":" != ";return s+o+q[0]}var r=q.join(",");o=n?" in ":" not in ";return s+o+"("+r+")"}function l(o,n){return m(o,n,false)}function h(o,n){return m(o,n,true)}function k(t,q){var r=f(q);var n=[];var s=d(t,r["+"]);if(s){n.push(s)}var o=h(t,r[""]);if(o){n.push(o)}var p=l(t,r["-"]);if(p){n.push(p)}return n.join(" AND ")}function b(q,o){var p=o.trim();if(!p){return undefined}var n=p.split(",");n=j.map(n,function(r){return r.trim()});return k(q,n)}function g(o,n){if(o.type==="equality"){return b(o.fieldName,n)}if(o.type==="text"){return i(o.fieldName,n)}throw new Error("buildExpression does not yet support type: "+o.type)}return{buildExpression:g,buildEqualityExpressionFromValuesString:b,buildEqualityExpressionFromValuesArray:k,makeValueMap:f,makePlusCql:d,makeMinusCql:l,makeRegularCql:h}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-type-expression-converter.js' */
define("confluence-ui-components/js/cql/internal/cql-space-type-expression-converter",["underscore","confluence-ui-components/js/cql/internal/cql-special-spaces"],function(b,a){function c(h,d){var f=b.clone(d);var g=b.map(h.values,a.getUIValue);var e=h.negate&&g.length==1&&g[0]==="conf_personal";return{field:f,values:e?["conf_global"]:g,negate:e?false:h.negate}}return{convert:c}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-expression-aggregator.js' */
define("confluence-ui-components/js/cql/internal/cql-space-expression-aggregator",["underscore","confluence-ui-components/js/cql/internal/cql-space-type-expression-converter"],function(b,d){function c(h,f){var g=b.filter(h,function(j){return j.field.fieldName==="space.type"});if(g.length===0){return h}if(g.length>1){throw Error("Only a single space.type expression is supported.")}var e=d.convert(g[0],f);var i=b.filter(h,function(j){return j.field.fieldName==="space"});h=b.difference(h,g);if(i.length){i[0]=a(i[0],e)}else{h.push(e)}return h}function a(f,e){f.values=f.values.concat(e.values);return f}return{aggregate:c,combineSpaceExpressions:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-set-value-helper.js' */
define("confluence-ui-components/js/cql/internal/cql-set-value-helper",["jquery"],function(b){function a(f,c){var e=b.Deferred();f.on("change",function(){e.resolve()});c=c.map(function(g){return b("<div/>").text(g).html()});var d=true;f.select2("val",c,d);return e}return{setValues:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-date-expression-aggregator.js' */
define("confluence-ui-components/js/cql/internal/cql-date-expression-aggregator",["underscore","confluence-ui-components/js/cql/internal/cql-space-type-expression-converter"],function(a){function c(d){return{field:d.field,expressions:[d]}}function b(f){var d=[];var e={};f.forEach(function(h){var i=h.field.fieldName;if(h.field.type!=="date"){d.push(h)}else{if(!e[i]){var g=c(h);e[i]=g;d.push(g)}else{e[i].expressions.push(h)}}});return d}return{aggregate:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-negation-converter.js' */
define("confluence-ui-components/js/cql/internal/cql-negation-converter",["underscore"],function(a){function b(d){d.values=a.map(d.values,function(e){return"-"+e})}function c(e){var d=$.extend({},e);if(d.field.type==="equality"){if(d.operator==="!="){d.operator="=";b(d)}else{if(d.operator==="notin"){d.operator="in";b(d)}}}return d}return{convert:c}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-negation-aggregator.js' */
define("confluence-ui-components/js/cql/internal/cql-negation-aggregator",["underscore","confluence-ui-components/js/cql/internal/cql-negation-converter"],function(a,d){function b(i){var h=[];var g={};var f={};i.forEach(function(k){var l=k.field.fieldName;if(!a.contains(h,l)){h.push(l);g[l]=[];f[l]=[]}var j=d.convert(k);if(j.operator!==k.operator){f[l].push(j)}else{g[l].push(j)}});var e=[];h.forEach(function(k){var j=c(g[k],f[k]);e=e.concat(j)});return e}function c(g,e){if(!e.length){return g}var f=g[0];if(!f){f=e[0];e=a.rest(e)}e.forEach(function(h){f.values=f.values.concat(h.values)});if(f.operator==="="&&f.values.length>1){f.operator="in"}return[f].concat(a.rest(g))}return{aggregate:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-ignored-field-expression-converter.js' */
define("confluence-ui-components/js/cql/internal/cql-ignored-field-expression-converter",[],function(){function a(f,e,d){if(e){f=f.filter(function(g){if(e.indexOf(g.field.fieldName)>-1){return d}return !d})}return f}function c(e,d){return a(e,d,true)}function b(e,d){return a(e,d,false)}return{removeFieldsByName:b,getFieldsByName:c}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/cql-component.js' */
define("confluence-ui-components/js/cql/cql-component",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-ajax","confluence-ui-components/js/cql/internal/cql-filter-field","confluence-ui-components/js/cql/internal/cql-filter-select","confluence-ui-components/js/cql/internal/cql-space-expression-aggregator","confluence-ui-components/js/cql/internal/cql-date-expression-aggregator","confluence-ui-components/js/cql/internal/cql-negation-aggregator","confluence-ui-components/js/cql/internal/cql-ignored-field-expression-converter"],function(c,m,i,a,f,n,d,b,h,l){var j=window.Confluence.UI.Components.CQL.Templates;function e(o){var p=[];m.each(o,function(q){q.forEach(function(s){if(!s){return}var r=s.asCql();if(r){p.push(r)}})});return p.join(" and ")}function g(o,p){return m.find(o,function(q){return q.fieldName===p})}function k(s){var p=s.context||{environment:"macro-browser"};var F=s.defaultFieldNames;if(!F){F=s.defaultFields?s.defaultFields.split(","):[]}var x=c(j.container());if(s.container){c(s.container).append(x)}var G=x.find(".cql-fields");var C;var H=s.value||s.defaultValue;if(H){C=a.parseClauses(H)}else{C=new c.Deferred();C.resolve()}var v={};var w={};var u=new c.Deferred();var I=s.onChange||function(){};function o(t){var K=t.fieldName;v[K]=m.without(v[K],t);if(v[K].length===0){delete v[K];I()}}var B={element:x,loading:u,context:s.context||{environment:"macro-browser",searchType:"content"},getValue:function(){return e(v)},getIgnoredFields:function(){return w},removeField:o,fieldArrays:v,fieldRegistry:v};function A(L){var K=f.build(L,B);K.onChange(I);var M=L.fieldName;v[M]=v[M]||[];v[M].push(K);x.trigger("cql-field-adding",K);var t=G.find(".cql-field-"+M+":last");if(t.length){t.after(K.element)}else{G.append(K.element)}return K}function E(K,t){t=t||0;var L=K.fieldName;return v[L]&&v[L][t]}var D;function z(O){var K=c.Deferred();if(!O){K.resolve();return K}var N={};function L(Q){var P=N[Q];if(typeof P==="number"){N[Q]=P+1}else{N[Q]=0}return N[Q]}var t=m.findWhere(D,{fieldName:"space"});O=d.aggregate(O,t);O=b.aggregate(O);O=h.aggregate(O);w=l.getFieldsByName(O,s.ignoredFields);O=l.removeFieldsByName(O,s.ignoredFields);var M=[];m.each(O,function(T){var U=T.field.fieldName;var S=g(D,U);var Q=L(U);var P=E(S,Q)||A(S);var R=P.setValues(T);if(R){M.push(R)}});c.when.apply(c,M).then(function(){K.resolve()});return K}function r(K){var L,t;if(K){var M=m.escape(K);L="We can\'t load your filters";t=i.format("Curses! We had trouble with \"{0}\". Try refreshing the page, but you may need to re-enter your macro parameters.",M)}else{L="We couldn\'t load the macro";t="If you refresh your page, we\'ll give it another shot."}i.messages.error(".cql-error-container",{title:L,body:t,closeable:true})}function J(t){var K;if(t.element.find(".aui-nav-selected").length!==0){return}if(t.element.find(".select2-container-multi").length!==0){K=t.element.find("input.select2-input");K.focus().click()}else{K=t.element.find("a.select2-choice.select2-default");if(!K.length){K=c(":input:visible",t.element).first()}if(!K.length){i.log("Unable to focus CQL field: "+t.fieldName)}K.focus().mousedown()}}function y(L){var K=c.extend({},L,{fixed:false});var t=A(K);J(t)}function q(t){D=t;F.forEach(function(M){var L=g(D,M);if(!L){throw Error("Unknown fieldname: "+M)}var K=c.extend({fixed:true},L);A(K)});n.build({onSelection:y,cqlContainer:x,context:p,ignoredFields:s.ignoredFields});C.done(function(K){z(K).done(function(){u.resolve()})}).fail(function(){if(p.environment==="search-screen"){i.log("Error parsing CQL param from search screen URL: "+s.value)}else{r(s.value)}u.resolve()})}a.getFields().done(q).fail(function(){r()});return B}return{build:k}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-spin-spin', location = 'node_modules/@atlassian/aui/src/js-vendor/spin/spin.js' */
("undefined"===typeof window?global:window).__b0bead4f53ba672725336d6e7298cf51=function(){var m={exports:{}},r=m.exports,x={module:m,exports:r},s;s=function(p,e,h){var j=("undefined"===typeof window?global:window).define,f,k,h=[h,e,p].filter(function(e){return"function"===typeof e})[0],e=[e,p,[]].filter(Array.isArray)[0];f=h.apply(null,e.map(function(e){return x[e]}));k=typeof f;"function"===typeof j&&j("string"===typeof p?p:"__b0bead4f53ba672725336d6e7298cf51",e,h);"string"===k?f=String(f):"number"===
k?f=Number(f):"boolean"===k&&(f=Boolean(f));void 0!==f&&(r=m.exports=f)};s.amd=!0;var w=function(){function p(b,a){var c=document.createElement(b||"div"),d;for(d in a)c[d]=a[d];return c}function e(b){for(var a=1,c=arguments.length;a<c;a++)b.appendChild(arguments[a]);return b}function h(b,a){var c=b.style,d,e,a=a.charAt(0).toUpperCase()+a.slice(1);for(e=0;e<m.length;e++)if(d=m[e]+a,void 0!==c[d])return d;if(void 0!==c[a])return a}function j(b,a){for(var c in a)b.style[h(b,c)||c]=a[c];return b}function f(b){for(var a=
1;a<arguments.length;a++){var c=arguments[a],d;for(d in c)void 0===b[d]&&(b[d]=c[d])}return b}function k(b){for(var a={x:b.offsetLeft,y:b.offsetTop};b=b.offsetParent;)a.x+=b.offsetLeft+b.clientLeft,a.y+=b.offsetTop+b.clientTop;return a}function l(b){if("undefined"==typeof this)return new l(b);this.opts=f(b||{},l.defaults,r)}var m=["webkit","Moz","ms","O"],s={},t,u,n=p("style",{type:"text/css"});e(document.getElementsByTagName("head")[0],n);u=n.sheet||n.styleSheet;var r={lines:12,length:7,width:5,
radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:0.25,fps:20,zIndex:2E9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={};f(l.prototype,{spin:function(b){this.stop();var a=this,c=a.opts,d=a.el=j(p(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),e=c.radius+c.length+c.width,i,g;b&&(b.insertBefore(d,b.firstChild||null),g=k(b),i=k(d),j(d,{left:("auto"==c.left?g.x-i.x+(b.offsetWidth>>1):parseInt(c.left,10)+e)+"px",top:("auto"==
c.top?g.y-i.y+(b.offsetHeight>>1):parseInt(c.top,10)+e)+"px"}));d.setAttribute("role","progressbar");a.lines(d,a.opts);if(!t){var f=0,m=(c.lines-1)*(1-c.direction)/2,o,h=c.fps,q=h/c.speed,s=(1-c.opacity)/(q*c.trail/100),l=q/c.lines;(function y(){f++;for(var b=0;b<c.lines;b++){o=Math.max(1-(f+(c.lines-b)*l)%q*s,c.opacity);a.opacity(d,b*c.direction+m,o,c)}a.timeout=a.el&&setTimeout(y,~~(1E3/h))})()}return a},stop:function(){var b=this.el;b&&(clearTimeout(this.timeout),b.parentNode&&b.parentNode.removeChild(b),
this.el=void 0);return this},lines:function(b,a){function c(b,c){return j(p(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px,0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var d=0,f=(a.lines-1)*(1-a.direction)/2,i;d<a.lines;d++){i=p();var g=1+~(a.width/2)+"px",h=a.hwaccel?"translate3d(0,0,0)":"",m=a.opacity,o;if(o=t){o=a.opacity;var l=a.trail,q=f+
d*a.direction,k=a.lines,n=["opacity",l,~~(100*o),q,k].join("-"),q=0.01+100*(q/k),k=Math.max(1-(1-o)/l*(100-q),o),r=t.substring(0,t.indexOf("Animation")).toLowerCase(),r=r&&"-"+r+"-"||"";s[n]||(u.insertRule("@"+r+"keyframes "+n+"{0%{opacity:"+k+"}"+q+"%{opacity:"+o+"}"+(q+0.01)+"%{opacity:1}"+(q+l)%100+"%{opacity:"+o+"}100%{opacity:"+k+"}}",u.cssRules.length),s[n]=1);o=n+" "+1/a.speed+"s linear infinite"}i=j(i,{position:"absolute",top:g,transform:h,opacity:m,animation:o});a.shadow&&e(i,j(c("#000",
"0 0 4px #000"),{top:"2px"}));e(b,e(i,c("string"==typeof a.color?a.color:a.color[d%a.color.length],"0 0 1px rgba(0,0,0,.1)")))}return b},opacity:function(b,a,c){a<b.childNodes.length&&(b.childNodes[a].style.opacity=c)}});n=j(p("group"),{behavior:"url(#default#VML)"});if(!h(n,"transform")&&n.adj){var v=function(b,a){return p("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',a)};u.addRule(".spin-vml","behavior:url(#default#VML)");l.prototype.lines=function(b,a){function c(){return j(v("group",
{coordsize:i+" "+i,coordorigin:-f+" "+-f}),{width:i,height:i})}function d(b,d,g){e(h,e(j(c(),{rotation:360/a.lines*b+"deg",left:~~d}),e(j(v("roundrect",{arcsize:a.corners}),{width:f,height:a.width,left:a.radius,top:-a.width>>1,filter:g}),v("fill",{color:"string"==typeof a.color?a.color:a.color[b%a.color.length],opacity:a.opacity}),v("stroke",{opacity:0}))))}var f=a.length+a.width,i=2*f,g=2*-(a.width+a.length)+"px",h=j(c(),{position:"absolute",top:g,left:g});if(a.shadow)for(g=1;g<=a.lines;g++)d(g,
-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(g=1;g<=a.lines;g++)d(g);return e(b,h)};l.prototype.opacity=function(b,a,c,d){b=b.firstChild;d=d.shadow&&d.lines||0;if(b&&a+d<b.childNodes.length&&(b=(b=(b=b.childNodes[a+d])&&b.firstChild)&&b.firstChild))b.opacity=c}}else t=h(n,"animation");return l};"object"==typeof r?m.exports=w():"function"==typeof s&&s("aui/internal/spin",w);this.Spinner=w();return m.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-spin', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.spin.js' */
("undefined"===typeof window?global:window).__d8ff3af7054b670547578cbb83ac113e=function(){var b=jQuery;b.fn.spin=function(a,c){var f,d;if("string"===typeof a){if(!a in b.fn.spin.presets)throw Error("Preset '"+a+"' isn't defined");f=b.fn.spin.presets[a];d=c||{}}else{if(c)throw Error("Invalid arguments. Accepted arguments:\n$.spin([String preset[, Object options]]),\n$.spin(Object options),\n$.spin(Boolean shouldSpin)");f=b.fn.spin.presets.small;d=b.isPlainObject(a)?a:{}}if(window.Spinner)return this.each(function(){var c=
b(this),e=c.data();e.spinner&&(e.spinner.stop(),delete e.spinner);!1!==a&&(d=b.extend({color:c.css("color")},f,d),e.spinner=(new Spinner(d)).spin(this))});throw"Spinner class not available.";};b.fn.spin.presets={small:{lines:12,length:3,width:2,radius:3,trail:60,speed:1.5},medium:{lines:12,length:5,width:3,radius:8,trail:60,speed:1.5},large:{lines:12,length:8,width:4,radius:10,trail:60,speed:1.5}};b.fn.spinStop=function(){if(window.Spinner)return this.each(function(){var a=b(this).data();a.spinner&&
(a.spinner.stop(),delete a.spinner)});throw"Spinner class not available.";};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-spin', location = 'node_modules/@atlassian/aui/src/js/aui/spin.js' */
("undefined"===typeof window?global:window).__e0a09f3ee5af5c6a891a000b0e664556=function(){"use strict";__b0bead4f53ba672725336d6e7298cf51;__d8ff3af7054b670547578cbb83ac113e;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/event/constants.js' */
define("confluence-search/event/constants",[],function(){var a="CONFLUENCE_SEARCH";return{SLOW_RUNNING_SEARCH:a+".SLOW_RUNNING_SEARCH",SEARCH_FINISHED:a+".SEARCH_FINISHED"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/event/dispatcher.js' */
define("confluence-search/event/dispatcher",["underscore","backbone"],function(a,b){return a.clone(b.Events)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = 'templates/cql-search-result.soy' */
// This file was automatically generated from cql-search-result.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.CQLSearch.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.CQLSearch == 'undefined') { Confluence.Templates.CQLSearch = {}; }


Confluence.Templates.CQLSearch.searchResults = function(opt_data, opt_ignored) {
  var output = '<p id="search-results-meta" class="search-results-count" data-totalsize="' + soy.$$escapeHtml(opt_data.totalSize) + '">' + soy.$$filterNoAutoescape(AJS.format('Page {0} of {1}. Showing {2} results ({3} seconds)',opt_data.startIndex / opt_data.pageSize + 1,Math.ceil(opt_data.totalSize / opt_data.pageSize),opt_data.totalSize,opt_data.timeSpent / 1000)) + '</p><ol class="search-results cql" data-query="' + soy.$$escapeHtml(opt_data.queryString) + '">';
  var searchResultList11 = opt_data.searchResults;
  var searchResultListLen11 = searchResultList11.length;
  for (var searchResultIndex11 = 0; searchResultIndex11 < searchResultListLen11; searchResultIndex11++) {
    var searchResultData11 = searchResultList11[searchResultIndex11];
    output += '<li>' + Confluence.Templates.CQLSearch.searchResult(searchResultData11) + '</li>';
  }
  output += '</ol>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchResults.soyTemplateName = 'Confluence.Templates.CQLSearch.searchResults';
}


Confluence.Templates.CQLSearch.searchResult = function(opt_data, opt_ignored) {
  var output = '<h3>' + aui.icons.icon({icon: '', useIconFont: true, extraClasses: opt_data.iconCssClass}) + ((opt_data.content) ? '<a class="search-result-link visitable" href="' + soy.$$escapeHtml("/wiki" + opt_data.url) + '" data-type="' + soy.$$escapeHtml(opt_data.content.type) + '">' + soy.$$filterNoAutoescape(opt_data.title) + '</a>' : '<a class="search-result-link visitable" href="' + soy.$$escapeHtml("/wiki" + opt_data.url) + '" data-type="' + soy.$$escapeHtml(opt_data.entityType) + '">' + soy.$$filterNoAutoescape(opt_data.title) + '</a>') + '</h3><div class="highlights">' + soy.$$filterNoAutoescape(opt_data.excerpt) + '</div><div class="search-result-meta">';
  if (opt_data.breadcrumbs && opt_data.breadcrumbs.length > 0) {
    var breadcrumbList48 = opt_data.breadcrumbs;
    var breadcrumbListLen48 = breadcrumbList48.length;
    for (var breadcrumbIndex48 = 0; breadcrumbIndex48 < breadcrumbListLen48; breadcrumbIndex48++) {
      var breadcrumbData48 = breadcrumbList48[breadcrumbIndex48];
      output += '<a class="container" href="' + soy.$$escapeHtml("/wiki" + breadcrumbData48.url) + '" title="' + soy.$$escapeHtml(breadcrumbData48.label) + '">' + soy.$$escapeHtml(breadcrumbData48.label) + '</a>' + ((! (breadcrumbIndex48 == breadcrumbListLen48 - 1)) ? '<span>' + soy.$$escapeHtml(breadcrumbData48.separator) + '</span>' : '');
    }
  } else {
    output += (opt_data.resultGlobalContainer) ? '<a class="container" href="' + soy.$$escapeHtml("/wiki" + opt_data.resultGlobalContainer.displayUrl) + '" title="' + soy.$$escapeHtml('Space') + '">' + soy.$$escapeHtml(opt_data.resultGlobalContainer.title) + '</a>' + ((opt_data.resultParentContainer) ? '<span> / &#8230; / </span><a class="container" href="' + soy.$$escapeHtml("/wiki" + opt_data.resultParentContainer.displayUrl) + '" title="' + soy.$$escapeHtml('Page') + '">' + soy.$$escapeHtml(opt_data.resultParentContainer.title) + '</a>' : '') : '';
  }
  output += ((opt_data.resultGlobalContainer && opt_data.friendlyLastModified) ? ' &bull; ' : '') + ((opt_data.friendlyLastModified && opt_data.entityType != 'user') ? '<span class="date" title="' + soy.$$escapeHtml('Last Modified') + '">' + soy.$$escapeHtml(opt_data.friendlyLastModified) + '</span>' : '') + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchResult.soyTemplateName = 'Confluence.Templates.CQLSearch.searchResult';
}


Confluence.Templates.CQLSearch.noSearchResults = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.queryString == null) {
    output += soy.$$escapeHtml('No results found. Please try one of the following suggestions:');
  } else {
    var sanitizedSearchParam__soy97 = '' + soy.$$escapeHtml(opt_data.queryString);
    output += soy.$$filterNoAutoescape(AJS.format('No results found for \x3cstrong\x3e{0}\x3c/strong\x3e. Please try one of the following suggestions:',sanitizedSearchParam__soy97));
  }
  output += '<ul>' + ((opt_data.archivedResultsCount) ? (opt_data.archivedResultsCount > 0) ? '<li>' + soy.$$filterNoAutoescape(AJS.format('There were \x3cstrong\x3e{0}\x3c/strong\x3e results found in \x3cem\x3earchived spaces\x3c/em\x3e. Enable the option in advanced search tools to see these results.',opt_data.archivedResultsCount)) + '</li>' : '' : '') + '<li>' + soy.$$filterNoAutoescape(AJS.format('Use more general search terms or \x3ca href\x3d\x22{0}\x22\x3econsult the online documentation\x3c/a\x3e for tips.','https://confluence.atlassian.com/display/confcloud/Confluence+Search+Syntax')) + '</li><li>' + soy.$$escapeHtml('If you are filtering by space, content, last modification date or contributor, try removing or adjusting the filter') + '</li></ul><ul class="search-results" data-query="' + soy.$$escapeHtml(opt_data.queryString) + '"></ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.noSearchResults.soyTemplateName = 'Confluence.Templates.CQLSearch.noSearchResults';
}


Confluence.Templates.CQLSearch.searchError = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.CQLSearch.searchErrorMessage({errorMessage: soy.$$escapeHtml('We could not successfully complete the search.') + ' ' + soy.$$escapeHtml(opt_data.errorMessage)});
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchError.soyTemplateName = 'Confluence.Templates.CQLSearch.searchError';
}


Confluence.Templates.CQLSearch.searchMissingQuery = function(opt_data, opt_ignored) {
  return '<div class="search-results-blank-state"><p><strong>' + soy.$$escapeHtml('Enter your search into the search bar above.') + '</strong></p><p>' + soy.$$escapeHtml('You can use the controls on the left to refine your search.') + '</p></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchMissingQuery.soyTemplateName = 'Confluence.Templates.CQLSearch.searchMissingQuery';
}


Confluence.Templates.CQLSearch.searchTimeout = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.CQLSearch.searchErrorMessage({errorMessage: '' + soy.$$filterNoAutoescape('The server seems to be unavailable, or did not respond in time. \x3cbutton class\x3d\x22aui-button aui-button-link search-error\x22\x3eTry again\x3c/button\x3e.'), errorTitle: '' + soy.$$filterNoAutoescape('Search timed out')});
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchTimeout.soyTemplateName = 'Confluence.Templates.CQLSearch.searchTimeout';
}


Confluence.Templates.CQLSearch.searchUnauthorized = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.CQLSearch.searchErrorMessage({errorMessage: '' + soy.$$filterNoAutoescape('Your session has expired. Please reload the page to \x3cbutton class\x3d\x22aui-button aui-button-link search-error\x22\x3etry again\x3c/button\x3e.')});
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchUnauthorized.soyTemplateName = 'Confluence.Templates.CQLSearch.searchUnauthorized';
}


Confluence.Templates.CQLSearch.searchErrorMessage = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({titleContent: '' + soy.$$escapeHtml('Oops, something went wrong with your search.'), content: opt_data.errorMessage});
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchErrorMessage.soyTemplateName = 'Confluence.Templates.CQLSearch.searchErrorMessage';
}


Confluence.Templates.CQLSearch.searchResultIcon = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.iconCssClass) + '"></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.CQLSearch.searchResultIcon.soyTemplateName = 'Confluence.Templates.CQLSearch.searchResultIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = 'templates/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagination.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagination == 'undefined') { Confluence.Templates.Pagination = {}; }


Confluence.Templates.Pagination.pagination = function(opt_data, opt_ignored) {
  var output = '<ul class="pagination">';
  var currentPage__soy4 = Math.floor(opt_data.startIndex / opt_data.pageSize) + 1;
  var maxPageIndex__soy5 = Math.ceil(opt_data.totalSize / opt_data.pageSize);
  var minRangePageIndex__soy6 = Math.max(currentPage__soy4 - 4, 1);
  var maxRangePageIndex__soy7 = Math.min(currentPage__soy4 + 4, maxPageIndex__soy5);
  output += (currentPage__soy4 != 1) ? '<li><a class="pagination-prev" href="' + soy.$$filterNoAutoescape(opt_data.url) + 'startIndex=' + soy.$$escapeHtml(opt_data.startIndex - opt_data.pageSize) + '">' + soy.$$escapeHtml('Previous') + '</a></li>' : '';
  var pageInit18 = minRangePageIndex__soy6;
  var pageLimit18 = currentPage__soy4;
  for (var page18 = pageInit18; page18 < pageLimit18; page18++) {
    output += '<li><a href="' + soy.$$filterNoAutoescape(opt_data.url) + 'startIndex=' + soy.$$escapeHtml((page18 - 1) * opt_data.pageSize) + '">' + soy.$$escapeHtml(page18) + '</a></li>';
  }
  output += '<li data-index="' + soy.$$escapeHtml(currentPage__soy4) + '"><strong class="pagination-curr">' + soy.$$escapeHtml(currentPage__soy4) + '</strong></li>';
  var pageInit32 = currentPage__soy4 + 1;
  var pageLimit32 = maxRangePageIndex__soy7 + 1;
  for (var page32 = pageInit32; page32 < pageLimit32; page32++) {
    output += '<li><a href="' + soy.$$filterNoAutoescape(opt_data.url) + 'startIndex=' + soy.$$escapeHtml((page32 - 1) * opt_data.pageSize) + '">' + soy.$$escapeHtml(page32) + '</a></li>';
  }
  output += ((currentPage__soy4 != maxRangePageIndex__soy7) ? '<li><a class="pagination-next" href="' + soy.$$filterNoAutoescape(opt_data.url) + 'startIndex=' + soy.$$escapeHtml(opt_data.startIndex + opt_data.pageSize) + '">' + soy.$$escapeHtml('Next') + '</a></li>' : '') + '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Pagination.pagination.soyTemplateName = 'Confluence.Templates.Pagination.pagination';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = 'templates/help.soy' */
// This file was automatically generated from help.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Help.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Help == 'undefined') { Confluence.Templates.Help = {}; }


Confluence.Templates.Help.general = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Exact phrase search') + '</h2><p>' + soy.$$escapeHtml('To search for content that contains the exact phrase \x22chalk and cheese\x22:') + '</p><pre>' + soy.$$escapeHtml('\x22chalk and cheese\x22') + '</pre><h2>' + soy.$$escapeHtml('OR search') + '</h2><p>' + soy.$$escapeHtml('To search for content that contains one of the terms, \x22chalk\x22 OR \x22cheese\x22:') + '</p><pre>' + soy.$$escapeHtml('\x22chalk OR cheese\x22') + '</pre><h2>' + soy.$$escapeHtml('AND search') + '</h2><p>' + soy.$$escapeHtml('To search for content that contains both the terms \x22chalk\x22 AND \x22cheese\x22:') + '</p><pre>' + soy.$$escapeHtml('\x22chalk AND cheese\x22') + '</pre><h2>' + soy.$$escapeHtml('NOT search') + '</h2><p>' + soy.$$escapeHtml('To search for content that contains \x22chalk\x22 but NOT \x22cheese\x22:') + '</p><pre>' + soy.$$escapeHtml('\x22chalk NOT cheese\x22') + '</pre><h2>' + soy.$$escapeHtml('Excluded term search') + '</h2><p>' + soy.$$escapeHtml('Similar to the NOT search, to search for content that contains \x22chalk\x22 and \x22butter\x22 but NOT \x22cheese\x22:') + '</p><pre>' + soy.$$escapeHtml('chalk butter -cheese') + '</pre><h2>' + soy.$$escapeHtml('Grouping search') + '</h2><p>' + soy.$$escapeHtml('To search for content that MUST contain \x22chalk\x22 but CAN contain either \x22cheese\x22 or \x22butter\x22 use the search:') + '</p><pre>' + soy.$$escapeHtml('(cheese OR butter) AND chalk') + '</pre><h2>' + soy.$$escapeHtml('Title search') + '</h2><p>' + soy.$$escapeHtml('To search for content with \x22chalk\x22 in its title, where title is the field keyword.') + '</p><pre>' + soy.$$escapeHtml('title:chalk') + '</pre>';
};
if (goog.DEBUG) {
  Confluence.Templates.Help.general.soyTemplateName = 'Confluence.Templates.Help.general';
}


Confluence.Templates.Help.wildcards = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Single character') + '</h2><p>' + soy.$$escapeHtml('To search for \x22butter\x22 or \x22batter\x22 you can use the search:') + '</p><pre>' + soy.$$escapeHtml('b?tter') + '</pre><p>' + soy.$$escapeHtml('To search for \x22chicken\x22 or \x22chickpea\x22 you can use the search:') + '</p><pre>' + soy.$$escapeHtml('chick*') + '</pre><h2>' + soy.$$escapeHtml('Multiple characters') + '</h2><p>' + soy.$$escapeHtml('To search for \x22chick\x22 or \x22chickpea\x22:') + '</p><pre>' + soy.$$escapeHtml('c*c*') + '</pre><p>' + soy.$$escapeHtml('You can also combine search characters to get the exact word. For example the search term below will return \x22chick\x22 yet not \x22chickpea\x22:') + '</p><pre>' + soy.$$escapeHtml('c*c?') + '</pre>';
};
if (goog.DEBUG) {
  Confluence.Templates.Help.wildcards.soyTemplateName = 'Confluence.Templates.Help.wildcards';
}


Confluence.Templates.Help.macros = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Searching for macros') + '</h2><p>' + soy.$$escapeHtml('You can search Confluence content for anywhere a macro is used. To do this, just add macroName: to your search and append the macro name after the column. For example, search for all excerpt-include macros:') + '</p><pre>' + soy.$$escapeHtml('macroName:excerpt-include*') + '</pre>';
};
if (goog.DEBUG) {
  Confluence.Templates.Help.macros.soyTemplateName = 'Confluence.Templates.Help.macros';
}


Confluence.Templates.Help.other = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Searching for labels') + '</h2><p>' + soy.$$escapeHtml('Use the labelText: prefix to search specifically for content that has a specific label.') + '</p><pre>' + soy.$$escapeHtml('labelText:chocolate') + '</pre><h2>' + soy.$$escapeHtml('Proximity searches') + '</h2><p>' + soy.$$escapeHtml('This search ensure that the two words specified must be within a certain number of words of each other to be included.') + '</p><pre>' + soy.$$escapeHtml('\x22octagon post\x22~1') + '</pre><p>' + soy.$$escapeHtml('will return \x22Octagon blog post\x22.') + '</p><h2>' + soy.$$escapeHtml('Fuzzy search') + '</h2><p>' + soy.$$escapeHtml('This search looks for words spelled similarly. To search for octagon, if unsure about spelling:') + '</p><pre>' + soy.$$escapeHtml('octogan~') + '</pre><p>' + soy.$$escapeHtml('will correctly return \x22octagon\x22.') + '</p><h2>' + soy.$$escapeHtml('Combined search') + '</h2><p>' + soy.$$escapeHtml('You can also combine various search terms together:') + '</p><pre>' + soy.$$escapeHtml('o?tag* AND past~ AND (\x22blog\x22 AND \x22post\x22)') + '</pre>';
};
if (goog.DEBUG) {
  Confluence.Templates.Help.other.soyTemplateName = 'Confluence.Templates.Help.other';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/utils.js' */
define("confluence-search/utils",["jquery","confluence/meta","ajs","underscore","window"],function(e,c,a,b,d){function f(h){var g=d.encodeURIComponent(h);return g.replace(/%20/g,"+")}return{getFormParams:function(g){var h={};e.each(g.serializeArray(),function(i,j){if(!j.value.length){return true}h[j.name]=j.value});return h},getQueryStringParams:function(h){var j=e("<a />",{href:h}).prop("search");var i=/[?&;]*(.*?)=([^&;]*)/g;var g;var k={};if(j){while(g=i.exec(j)){k[g[1]]=d.decodeURIComponent(g[2]).replace(/\+/g," ")}}return k},getSearchResultsUrl:function(g){if(b.isObject(g)){g=this.serializeParams(g)}g=g.replace(/^\?/,"");g=g.replace(/(&|\?)[^=]+=(?=&|$)/g,"");return a.contextPath()+"/dosearchsite.action?"+g},serializeParams:function(h){var g=function(k){var j=[];for(var i in k){if(b.has(k,i)){j.push([i,k[i]])}}return j};return b.map(g(h),function(i){return b.map(i,f).join("=")}).join("&")},normalizeCqlParams:function(h){if(h.queryString){var g=h.cql;var i=h.queryString.replace(/\\/g,"\\\\").replace(/"/g,'\\"');h.cql='siteSearch ~ "'+i+'"';if(g){h.cql=h.cql+" and "+g}}return h},getRemoteUsername:function(){return c.get("remote-user")||""}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/md5.js' */
(function(m){var p=typeof process=="object"&&process.versions&&process.versions.node;if(p){m=global}var c=!m.JS_MD5_TEST&&typeof module=="object"&&module.exports;var h=typeof define=="function"&&define.amd;var l=!m.JS_MD5_TEST&&typeof ArrayBuffer!="undefined";var b="0123456789abcdef".split("");var q=[128,32768,8388608,-2147483648];var o=[0,8,16,24];var i=["hex","array","digest","buffer"];var a=[],j;if(l){var g=new ArrayBuffer(68);j=new Uint8Array(g);a=new Uint32Array(g)}var d=function(r){return function(s){return new k(true).update(s)[r]()}};var f=function(){var t=d("hex");if(p){t=n(t)}t.create=function(){return new k()};t.update=function(u){return t.create().update(u)};for(var r=0;r<i.length;++r){var s=i[r];t[s]=d(s)}return t};var n=function(v){var s,u;try{if(m.JS_MD5_TEST){throw"JS_MD5_TEST"}s=require("crypto");u=require("buffer").Buffer}catch(t){console.log(t);return v}var r=function(w){if(typeof w=="string"){if(w.length<=r.utf8Threshold){return v(w)}else{if(w.length<=r.asciiThreshold&&!/[^\x00-\x7F]/.test(w)){return v(w)}}return s.createHash("md5").update(w,"utf8").digest("hex")}else{if(w.constructor==ArrayBuffer){w=new Uint8Array(w)}else{if(w.length===undefined||w.length<=r.bytesThreshold){return v(w)}}}return s.createHash("md5").update(new u(w)).digest("hex")};r.utf8Threshold=18;r.asciiThreshold=60;r.bytesThreshold=245;return r};function k(s){if(s){a[0]=a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0;this.blocks=a;this.buffer8=j}else{if(l){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r);this.blocks=new Uint32Array(r)}else{this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=0;this.finalized=this.hashed=false;this.first=true}k.prototype.update=function(x){if(this.finalized){return}var s=typeof(x)!="string";if(s&&x.constructor==m.ArrayBuffer){x=new Uint8Array(x)}var w,r=0,t,v=x.length||0,y=this.blocks;var u=this.buffer8;while(r<v){if(this.hashed){this.hashed=false;y[0]=y[16];y[16]=y[1]=y[2]=y[3]=y[4]=y[5]=y[6]=y[7]=y[8]=y[9]=y[10]=y[11]=y[12]=y[13]=y[14]=y[15]=0}if(s){if(l){for(t=this.start;r<v&&t<64;++r){u[t++]=x[r]}}else{for(t=this.start;r<v&&t<64;++r){y[t>>2]|=x[r]<<o[t++&3]}}}else{if(l){for(t=this.start;r<v&&t<64;++r){w=x.charCodeAt(r);if(w<128){u[t++]=w}else{if(w<2048){u[t++]=192|(w>>6);u[t++]=128|(w&63)}else{if(w<55296||w>=57344){u[t++]=224|(w>>12);u[t++]=128|((w>>6)&63);u[t++]=128|(w&63)}else{w=65536+(((w&1023)<<10)|(x.charCodeAt(++r)&1023));u[t++]=240|(w>>18);u[t++]=128|((w>>12)&63);u[t++]=128|((w>>6)&63);u[t++]=128|(w&63)}}}}}else{for(t=this.start;r<v&&t<64;++r){w=x.charCodeAt(r);if(w<128){y[t>>2]|=w<<o[t++&3]}else{if(w<2048){y[t>>2]|=(192|(w>>6))<<o[t++&3];y[t>>2]|=(128|(w&63))<<o[t++&3]}else{if(w<55296||w>=57344){y[t>>2]|=(224|(w>>12))<<o[t++&3];y[t>>2]|=(128|((w>>6)&63))<<o[t++&3];y[t>>2]|=(128|(w&63))<<o[t++&3]}else{w=65536+(((w&1023)<<10)|(x.charCodeAt(++r)&1023));y[t>>2]|=(240|(w>>18))<<o[t++&3];y[t>>2]|=(128|((w>>12)&63))<<o[t++&3];y[t>>2]|=(128|((w>>6)&63))<<o[t++&3];y[t>>2]|=(128|(w&63))<<o[t++&3]}}}}}}this.lastByteIndex=t;this.bytes+=t-this.start;if(t>=64){this.start=t-64;this.hash();this.hashed=true}else{this.start=t}}return this};k.prototype.finalize=function(){if(this.finalized){return}this.finalized=true;var s=this.blocks,r=this.lastByteIndex;s[r>>2]|=q[r&3];if(r>=56){if(!this.hashed){this.hash()}s[0]=s[16];s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0}s[14]=this.bytes<<3;this.hash()};k.prototype.hash=function(){var s,r,x,w,u,t,v=this.blocks;if(this.first){s=v[0]-680876937;s=(s<<7|s>>>25)-271733879<<0;w=(-1732584194^s&2004318071)+v[1]-117830708;w=(w<<12|w>>>20)+s<<0;x=(-271733879^(w&(s^-271733879)))+v[2]-1126478375;x=(x<<17|x>>>15)+w<<0;r=(s^(x&(w^s)))+v[3]-1316259209;r=(r<<22|r>>>10)+x<<0}else{s=this.h0;r=this.h1;x=this.h2;w=this.h3;s+=(w^(r&(x^w)))+v[0]-680876936;s=(s<<7|s>>>25)+r<<0;w+=(x^(s&(r^x)))+v[1]-389564586;w=(w<<12|w>>>20)+s<<0;x+=(r^(w&(s^r)))+v[2]+606105819;x=(x<<17|x>>>15)+w<<0;r+=(s^(x&(w^s)))+v[3]-1044525330;r=(r<<22|r>>>10)+x<<0}s+=(w^(r&(x^w)))+v[4]-176418897;s=(s<<7|s>>>25)+r<<0;w+=(x^(s&(r^x)))+v[5]+1200080426;w=(w<<12|w>>>20)+s<<0;x+=(r^(w&(s^r)))+v[6]-1473231341;x=(x<<17|x>>>15)+w<<0;r+=(s^(x&(w^s)))+v[7]-45705983;r=(r<<22|r>>>10)+x<<0;s+=(w^(r&(x^w)))+v[8]+1770035416;s=(s<<7|s>>>25)+r<<0;w+=(x^(s&(r^x)))+v[9]-1958414417;w=(w<<12|w>>>20)+s<<0;x+=(r^(w&(s^r)))+v[10]-42063;x=(x<<17|x>>>15)+w<<0;r+=(s^(x&(w^s)))+v[11]-1990404162;r=(r<<22|r>>>10)+x<<0;s+=(w^(r&(x^w)))+v[12]+1804603682;s=(s<<7|s>>>25)+r<<0;w+=(x^(s&(r^x)))+v[13]-40341101;w=(w<<12|w>>>20)+s<<0;x+=(r^(w&(s^r)))+v[14]-1502002290;x=(x<<17|x>>>15)+w<<0;r+=(s^(x&(w^s)))+v[15]+1236535329;r=(r<<22|r>>>10)+x<<0;s+=(x^(w&(r^x)))+v[1]-165796510;s=(s<<5|s>>>27)+r<<0;w+=(r^(x&(s^r)))+v[6]-1069501632;w=(w<<9|w>>>23)+s<<0;x+=(s^(r&(w^s)))+v[11]+643717713;x=(x<<14|x>>>18)+w<<0;r+=(w^(s&(x^w)))+v[0]-373897302;r=(r<<20|r>>>12)+x<<0;s+=(x^(w&(r^x)))+v[5]-701558691;s=(s<<5|s>>>27)+r<<0;w+=(r^(x&(s^r)))+v[10]+38016083;w=(w<<9|w>>>23)+s<<0;x+=(s^(r&(w^s)))+v[15]-660478335;x=(x<<14|x>>>18)+w<<0;r+=(w^(s&(x^w)))+v[4]-405537848;r=(r<<20|r>>>12)+x<<0;s+=(x^(w&(r^x)))+v[9]+568446438;s=(s<<5|s>>>27)+r<<0;w+=(r^(x&(s^r)))+v[14]-1019803690;w=(w<<9|w>>>23)+s<<0;x+=(s^(r&(w^s)))+v[3]-187363961;x=(x<<14|x>>>18)+w<<0;r+=(w^(s&(x^w)))+v[8]+1163531501;r=(r<<20|r>>>12)+x<<0;s+=(x^(w&(r^x)))+v[13]-1444681467;s=(s<<5|s>>>27)+r<<0;w+=(r^(x&(s^r)))+v[2]-51403784;w=(w<<9|w>>>23)+s<<0;x+=(s^(r&(w^s)))+v[7]+1735328473;x=(x<<14|x>>>18)+w<<0;r+=(w^(s&(x^w)))+v[12]-1926607734;r=(r<<20|r>>>12)+x<<0;u=r^x;s+=(u^w)+v[5]-378558;s=(s<<4|s>>>28)+r<<0;w+=(u^s)+v[8]-2022574463;w=(w<<11|w>>>21)+s<<0;t=w^s;x+=(t^r)+v[11]+1839030562;x=(x<<16|x>>>16)+w<<0;r+=(t^x)+v[14]-35309556;r=(r<<23|r>>>9)+x<<0;u=r^x;s+=(u^w)+v[1]-1530992060;s=(s<<4|s>>>28)+r<<0;w+=(u^s)+v[4]+1272893353;w=(w<<11|w>>>21)+s<<0;t=w^s;x+=(t^r)+v[7]-155497632;x=(x<<16|x>>>16)+w<<0;r+=(t^x)+v[10]-1094730640;r=(r<<23|r>>>9)+x<<0;u=r^x;s+=(u^w)+v[13]+681279174;s=(s<<4|s>>>28)+r<<0;w+=(u^s)+v[0]-358537222;w=(w<<11|w>>>21)+s<<0;t=w^s;x+=(t^r)+v[3]-722521979;x=(x<<16|x>>>16)+w<<0;r+=(t^x)+v[6]+76029189;r=(r<<23|r>>>9)+x<<0;u=r^x;s+=(u^w)+v[9]-640364487;s=(s<<4|s>>>28)+r<<0;w+=(u^s)+v[12]-421815835;w=(w<<11|w>>>21)+s<<0;t=w^s;x+=(t^r)+v[15]+530742520;x=(x<<16|x>>>16)+w<<0;r+=(t^x)+v[2]-995338651;r=(r<<23|r>>>9)+x<<0;s+=(x^(r|~w))+v[0]-198630844;s=(s<<6|s>>>26)+r<<0;w+=(r^(s|~x))+v[7]+1126891415;w=(w<<10|w>>>22)+s<<0;x+=(s^(w|~r))+v[14]-1416354905;x=(x<<15|x>>>17)+w<<0;r+=(w^(x|~s))+v[5]-57434055;r=(r<<21|r>>>11)+x<<0;s+=(x^(r|~w))+v[12]+1700485571;s=(s<<6|s>>>26)+r<<0;w+=(r^(s|~x))+v[3]-1894986606;w=(w<<10|w>>>22)+s<<0;x+=(s^(w|~r))+v[10]-1051523;x=(x<<15|x>>>17)+w<<0;r+=(w^(x|~s))+v[1]-2054922799;r=(r<<21|r>>>11)+x<<0;s+=(x^(r|~w))+v[8]+1873313359;s=(s<<6|s>>>26)+r<<0;w+=(r^(s|~x))+v[15]-30611744;w=(w<<10|w>>>22)+s<<0;x+=(s^(w|~r))+v[6]-1560198380;x=(x<<15|x>>>17)+w<<0;r+=(w^(x|~s))+v[13]+1309151649;r=(r<<21|r>>>11)+x<<0;s+=(x^(r|~w))+v[4]-145523070;s=(s<<6|s>>>26)+r<<0;w+=(r^(s|~x))+v[11]-1120210379;w=(w<<10|w>>>22)+s<<0;x+=(s^(w|~r))+v[2]+718787259;x=(x<<15|x>>>17)+w<<0;r+=(w^(x|~s))+v[9]-343485551;r=(r<<21|r>>>11)+x<<0;if(this.first){this.h0=s+1732584193<<0;this.h1=r-271733879<<0;this.h2=x-1732584194<<0;this.h3=w+271733878<<0;this.first=false}else{this.h0=this.h0+s<<0;this.h1=this.h1+r<<0;this.h2=this.h2+x<<0;this.h3=this.h3+w<<0}};k.prototype.hex=function(){this.finalize();var u=this.h0,t=this.h1,s=this.h2,r=this.h3;return b[(u>>4)&15]+b[u&15]+b[(u>>12)&15]+b[(u>>8)&15]+b[(u>>20)&15]+b[(u>>16)&15]+b[(u>>28)&15]+b[(u>>24)&15]+b[(t>>4)&15]+b[t&15]+b[(t>>12)&15]+b[(t>>8)&15]+b[(t>>20)&15]+b[(t>>16)&15]+b[(t>>28)&15]+b[(t>>24)&15]+b[(s>>4)&15]+b[s&15]+b[(s>>12)&15]+b[(s>>8)&15]+b[(s>>20)&15]+b[(s>>16)&15]+b[(s>>28)&15]+b[(s>>24)&15]+b[(r>>4)&15]+b[r&15]+b[(r>>12)&15]+b[(r>>8)&15]+b[(r>>20)&15]+b[(r>>16)&15]+b[(r>>28)&15]+b[(r>>24)&15]};k.prototype.toString=k.prototype.hex;k.prototype.digest=function(){this.finalize();var u=this.h0,t=this.h1,s=this.h2,r=this.h3;return[u&255,(u>>8)&255,(u>>16)&255,(u>>24)&255,t&255,(t>>8)&255,(t>>16)&255,(t>>24)&255,s&255,(s>>8)&255,(s>>16)&255,(s>>24)&255,r&255,(r>>8)&255,(r>>16)&255,(r>>24)&255]};k.prototype.array=k.prototype.digest;k.prototype.buffer=function(){this.finalize();var r=new ArrayBuffer(16);var s=new Uint32Array(r);s[0]=this.h0;s[1]=this.h1;s[2]=this.h2;s[3]=this.h3;return r};var e=f();if(c){module.exports=e}else{m.md5=e;if(h){define(function(){return e})}}}(this));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/md5-amd.js' */
define("confluence-search/md5",function(){return md5});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/model/result.js' */
define("confluence-search/model/result",["backbone"],function(a){return a.Model.extend({})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/collection/cql-results.js' */
define("confluence-search/collection/cql-results",["confluence-search/model/result","confluence-search/utils","ajs","backbone","underscore","confluence/meta"],function(d,a,b,f,c,e){return f.Collection.extend({totalSize:null,timeSpent:null,startIndex:null,pageSize:null,uuid:null,model:d,url:b.contextPath()+"/rest/experimental/search",initialize:function(g){c.extend(this,g)},parse:function(g,h){this.totalSize=g.totalSize;this.timeSpent=g.searchDuration;this.archivedResultsCount=g.archivedResultsCount;this.querySuggestion=g.querySuggestion;this.uuid=g.uuid;return g.results},search:function(l){var j=c.bind(this.trigger,this,"searchComplete searchError",this,l);var k=c.bind(this.trigger,this,"searchComplete searchUnauthorized",this,l);var h=c.bind(this.trigger,this,"searchComplete searchMissingQuery",this,l);var g=c.bind(this.trigger,this,"searchComplete searchTimeout",this,l);var i=this._generateRequestData(l);if(!i.cql){h();return}this.fetch({data:i,success:c.bind(this.trigger,this,"searchComplete searchSuccess",this,l),statusCode:{400:j,401:k,408:g,500:j},timeout:l.searchTimeoutMillis||300000});this.trigger("search",l)},_generateRequestData:function(i){var j=+i.startIndex||0;var h=Boolean(i.includeArchivedSpaces);var g={user:a.getRemoteUsername(),sessionUuid:e.get("search-query-session-uuid"),cql:i.cql,start:j,limit:10,excerpt:"highlight",includeArchivedSpaces:h};return g}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/view/results.js' */
define("confluence-search/view/results",["confluence/dark-features","confluence-search/utils","confluence-search/history","confluence-search/event/dispatcher","confluence-search/event/constants","ajs","window","backbone","confluence/templates","underscore"],function(i,a,j,h,c,d,b,f,g,e){return f.View.extend({el:".search-results-wrapper",events:{"click .pagination a":"clickPagination"},initialize:function(){this.searchResults=this.$(".search-results-container");this.pagination=this.$(".pagination-container");this.$searchBlanket=this.$(".search-blanket");this.searchResults.on("click",".search-error",function(){b.location.reload()});this.collection.on("searchComplete",function(){this.stopLoading();this.pagination.empty()},this);this.collection.bind("searchSuccess",this.render,this);this.collection.on("searchError",function(n,p,o){var m;var l=JSON.parse(o.responseText);var k=l.message;m=g.CQLSearch.searchError({errorMessage:k});this.searchResults.html(m)},this);this.collection.on("searchTimeout",function(){this.searchResults.html(g.Search.searchTimeout())},this);this.collection.on("searchUnauthorized",function(){this.searchResults.html(g.CQLSearch.searchUnauthorized())},this);this.collection.on("searchMissingQuery",function(){this.searchResults.html(g.CQLSearch.searchMissingQuery())},this);this.collection.on("search",function(){this.startLoading()},this)},render:function(o,n){var p=function(s,q){var r=e.clone(s);e.each(q,function(u){var v=r[u];if(v){var t=d.escapeHtml(v);t=t.replace(/@@@hl@@@/g,"<strong>");t=t.replace(/@@@endhl@@@/g,"</strong>");r[u]=t}});return r};var l=function(s,q){var r=e.clone(s);e.each(q,function(u){var v=r[u];if(v){var t=v.replace(/@@@hl@@@/g,"<strong>");t=t.replace(/@@@endhl@@@/g,"</strong>");r[u]=t}});return r};var k=function(q){return l(q,["excerpt","title"])};var m={searchResults:e.map(o.toJSON(),k),pageSize:o.pageSize,totalSize:o.totalSize,timeSpent:o.timeSpent,startIndex:+(n.startIndex||0),queryString:n.queryString||""};this.searchResults.html(g.CQLSearch.searchResults(m));if(o.totalSize===0){this.searchResults.html(g.CQLSearch.noSearchResults({queryString:n.queryString||"",archivedResultsCount:+o.archivedResultsCount}))}else{if(o.totalSize>o.pageSize){var n=e.omit(n,"startIndex");this.pagination.html(g.Pagination.pagination(e.extend({},m,{url:a.getSearchResultsUrl(n)+"&"})))}}},startLoading:function(){this.$searchBlanket.show();this.loadingTimerId=b.setTimeout(function(){h.trigger(c.SLOW_RUNNING_SEARCH)},600)},stopLoading:function(){b.clearTimeout(this.loadingTimerId);h.trigger(c.SEARCH_FINISHED);this.$searchBlanket.fadeOut("fast");b.scrollTo(0,0)},clickPagination:function(l){if(j.pushStateSupport){l.preventDefault();var k=this.$(l.currentTarget);var m=a.getQueryStringParams(k.attr("href"));this.options.history.search(m)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/view/search.js' */
define("confluence-search/view/search",["ajs","backbone","underscore","confluence/templates","confluence-search/utils","confluence-search/event/dispatcher","confluence-search/event/constants"],function(a,g,b,c,e,d,f){return g.View.extend({el:"#search-form",events:{submit:"search","click .help-button":"showHelpDialog"},initialize:function(){this.$spinner=this.$(".loading-spinner");this.$querystring=this.$("#query-string");this.$querystring.focus().val(this.$querystring.val());this.listenTo(d,f.SLOW_RUNNING_SEARCH,this.showSpinner);this.listenTo(d,f.SEARCH_FINISHED,this.hideSpinner)},getSearchFieldValue:function(){return this.$querystring.val()},setSearchFieldValue:function(h){this.$querystring.val(h)},showSpinner:function(){this.$spinner.spin()},hideSpinner:function(){this.$spinner.spinStop()},search:function(h){h.preventDefault();this.trigger("search")},getParams:function(){return b.extend(e.getFormParams(this.$el),{})},enableInputs:function(){this.$("input, button").prop("disabled",false)},disableInputs:function(){this.$("input, button").prop("disabled",true)},restoreState:function(h){this.$("input").val(function(j,k){return h[this.name]?h[this.name]:""})},showHelpDialog:function(){var h=new a.Dialog({id:"search-help-dialog",width:800,height:600,closeOnOutsideClick:true});h.addLink("Close",function(i){i.hide()});h.addHeader("Search Help");h.addPanel("General",c.Help.general());h.get("panel:0");h.addPanel("Wildcards",c.Help.wildcards());h.addPanel("Macros",c.Help.macros());h.addPanel("Other",c.Help.other());h.gotoPanel(0);h.show()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/view/filter.js' */
define("confluence-search/view/filter",["confluence/legacy","confluence-search/utils","ajs","backbone","underscore"],function(e,a,b,d,c){return d.View.extend({el:"#filter-form",events:{"click .aui-nav a":"selectListFilter",submit:"submit","change #search-filter-by-space":"filter","change input[type=checkbox]":"filter","selected.autocomplete-user #autocomplete-user":"filter","paste #autocomplete-user":"filter","click .clear-button":"clearUserAutoComplete","open.autocomplete-user-or-group #autocomplete-user":"selectFirstUser"},initialize:function(){c.bindAll(this,"initialize","render","selectListFilter","getParams","submit","filter","enableInputs","disableInputs","restoreState","getUserAutoCompleteHidden","cleanUpUser","toggleUserAutocompleteClearButton","clearUserAutoComplete","selectFirstUser");this.$userAutoComplete=this.$("#autocomplete-user");this.$userAutoComplete.on("change keyup paste",this.toggleUserAutocompleteClearButton);this.toggleUserAutocompleteClearButton();this.$("#search-filter-by-space").auiSelect2(e.UI.Components.SpacePicker.build({suggestCategories:["conf_all","conf_favorites"]}))},render:function(){return this},selectListFilter:function(g){var f=this.$(g.target);f.parent().addClass("aui-nav-selected").siblings().removeClass("aui-nav-selected");this.filter()},getParams:function(){this.cleanUpUser();var f={};this.$("ul[data-key]").each(function(){var i=$(this);var g=i.data("key");var h=i.find("li.aui-nav-selected a").data("value");if(g&&h){f[g]=h}});f=c.extend(f,a.getFormParams(this.$el));if(this.$userAutoComplete.hasClass("placeholded")){delete f[this.$userAutoComplete.attr("name")]}return f},submit:function(f){f.preventDefault();this.filter()},filter:function(){this.cleanUpUser();this.trigger("search")},enableInputs:function(){},disableInputs:function(){},restoreState:function(f){if(!f.where){f.where="conf_all"}this.$("#search-filter-by-space").select2("val",b.escapeHtml(f.where));this.$("#search-filter-include-archived").val([f.includeArchivedSpaces]);if(!f.contributor){f.contributor=""}this.$userAutoComplete.val(f.contributor).change();if(!f.contributorUsername){f.contributorUsername=""}this.getUserAutoCompleteHidden().val(f.contributorUsername);if(!f.type){f.type=""}this.$("ul[data-key=type]").children().removeClass("aui-nav-selected");this.$("ul[data-key=type]").find("a[data-value="+f.type+"]").parent().addClass("aui-nav-selected");if(!f.lastModified){f.lastModified=""}this.$("ul[data-key=lastModified]").children().removeClass("aui-nav-selected");this.$("ul[data-key=lastModified]").find("a[data-value="+f.lastModified+"]").parent().addClass("aui-nav-selected")},getUserAutoCompleteHidden:function(){return $(this.$userAutoComplete.data("target"))},cleanUpUser:function(){var g=this.$userAutoComplete;var f=this.getUserAutoCompleteHidden();if(!g.val()){f.val("")}},toggleUserAutocompleteClearButton:function(){var f=this.$(".clear-button");if(this.$userAutoComplete.val().length&&!this.$userAutoComplete.hasClass("placeholded")){f.removeClass("hidden")}else{f.addClass("hidden")}},clearUserAutoComplete:function(){this.$userAutoComplete.val("");this.toggleUserAutocompleteClearButton();this.filter()},selectFirstUser:function(){b.dropDown.current.moveDown()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/view/cql-filter.js' */
define("confluence-search/view/cql-filter",["confluence-search/utils","confluence-search/view/filter","jquery","underscore","confluence/meta"],function(a,d,e,b,c){return d.extend({el:"#filter-form .aui-navgroup-inner",events:{submit:"submit"},initialize:function(){this._bindMethodsToView();this.cqlString=this._getCqlString();this.$el.bind("cql-field-adding",this._addNavClass);this.cqlComponent=this._buildCqlComponent(this.cqlString);this.cqlComponent.loading.done(this._loadingFinished.bind(this))},restoreState:function(g){this.$el.html("");this.cqlComponent=this._buildCqlComponent(g.cql);var f=this;this.cqlComponent.loading.done(function(){f.filterEnabled=true})},filter:function(){if(!this.filterEnabled){return}this.trigger("search")},getParams:function(){this.cqlString=this.cqlComponent.getValue();var f={cql:this.cqlString};if(this._getIncludeArchivedSpacesCheckbox().is(":checked")){f.includeArchivedSpaces=true}return f},_bindMethodsToView:function(){b.bindAll(this,"initialize","render","selectListFilter","getParams","submit","filter","enableInputs","disableInputs","restoreState","getUserAutoCompleteHidden","cleanUpUser","toggleUserAutocompleteClearButton","clearUserAutoComplete","selectFirstUser")},_getCqlString:function(){return e("<div/>").html(c.get("search-cql")).text()},_addNavClass:function(g,f){f.element.find(".cql-field-heading").addClass("aui-nav-heading")},_getQueryStringFromTextField:function(){var f=b.filter(this.cqlComponent.getIgnoredFields(),function(g){return g.field.fieldName==="siteSearch"});if(f.length){return f[0].values[0]}},_loadingFinished:function(){this.initialQueryString=this._getQueryStringFromTextField();if(!this.options.searchView.getSearchFieldValue()){this.options.searchView.setSearchFieldValue(this.initialQueryString)}var f=a.getQueryStringParams(window.location.href);if(f.includeArchivedSpaces==="true"){this._getIncludeArchivedSpacesCheckbox.prop("checked",true)}this.filterEnabled=true},_getIncludeArchivedSpacesCheckbox:function(){return this.$el.find("#search-filter-include-archived")},_buildCqlComponent:function(f){this.filterEnabled=false;return require("confluence-ui-components/js/cql/cql-component").build({defaultFieldNames:["contributor","space","lastmodified","type"],ignoredFields:["text","siteSearch"],param:{},value:f,container:this.$el,onChange:this.filter,context:{environment:"search-screen",searchType:"all"}})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/history.js' */
define("confluence-search/history",["jquery","window","underscore","backbone","document","confluence-search/utils"],function(f,e,c,g,a,d){var b=function(h){this.collection=h;this.pushedOnce=false;f(e).on("popstate",c.bind(this.restoreState,this))};b.prototype={search:function(i){var h=d.getSearchResultsUrl(i);if(b.pushStateSupport){e.history.pushState(i,a.title,h);this.pushedOnce=true;this.collection.search(i)}else{e.location.href=h}return h},restoreState:function(){if(!this.pushedOnce){return}var h=history.state;if(c.isEmpty(h)){h=d.normalizeCqlParams(d.getQueryStringParams(e.location.href))}this.trigger("restoreState",c.clone(h));this.collection.search(h)}};b.pushStateSupport="pushState" in e.history;c.extend(b.prototype,g.Events);return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/search-controller.js' */
define("confluence-search/search-controller",["confluence/meta","confluence/dark-features","underscore","confluence-search/utils"],function(d,b,a,c){return function(g,h,e){var f={};f._search=function(){var i=a.reduce(e,function(l,k){var j=k.getParams();return a.extend(l,j)},{});i=c.normalizeCqlParams(i);g.search(i)};f._disableInputs=function(){a.invoke(e,"disableInputs")};a.each(e,function(i){i.on("search",f._search)});h.on("search",f._disableInputs);h.on("searchComplete",function(i){d.set("search-query-uuid",i.uuid)});h.on("searchComplete searchError",function(){a.invoke(e,"enableInputs")});g.on("restoreState",function(i){a.invoke(e,"restoreState",i)});return f}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/confluence-search.js' */
define("confluence-search/confluence-search",["confluence/api/event","confluence/meta","confluence/dark-features","confluence-search/history","confluence-search/collection/cql-results","confluence-search/view/cql-filter","confluence-search/view/results","confluence-search/view/search","confluence-search/search-controller","confluence-search/utils","confluence-search/analytics"],function(b,d,k,c,e,f,a,i,j,g,h){return function(){var m={startIndex:+d.get("search-start-index"),pageSize:+d.get("search-page-size"),totalSize:+d.get("search-total-size")};var r=new i();var l;var q;q=new e(m);l=new f({collection:q,searchView:r});var p=new c(q);var o=new a({collection:q,history:p});var n=new j(p,q,[l,r]);h(q)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/analytics.js' */
define("confluence-search/analytics",["confluence/api/event","confluence/meta","window","jquery","underscore","confluence-search/utils","confluence-search/md5"],function(e,c,d,g,a,b,f){return function(i){function h(k){try{var l=new DOMParser().parseFromString(k,"text/html");return l.documentElement.textContent}catch(j){return a.unescape(k)}}i.on("searchComplete",function(){var j=b.getQueryStringParams(d.location.href);var n=j.queryString||"";var m=j.cql||"";var l=parseInt(j.startIndex||"0");var k=c.get("search-query-session-uuid")||"";if(l==0){e.trigger("analyticsEvent",{name:"confluence.search.SiteSearchComplete",data:{queryHash:n===""?"":f(n),cqlHash:m===""?"":f(m),numberOfTerms:(n.match(/\w+/g)||[]).length,numberOfDocs:i.totalSize,uuid:f(n.concat(m).concat(k)),startSession:false}})}});g(".search-results-container").on("mousedown",".search-result-link",function(){var k=b.getQueryStringParams(d.location.href);var o=k.queryString||"";var n=k.cql||h(c.get("search-cql")||"");var m=parseInt(k.startIndex||"0");var l=c.get("search-query-session-uuid")||"";var j=g(this).index(".search-result-link")+1+m;e.trigger("analyticsEvent",{name:"confluence.search.SiteSearchResultClick",data:{position:j,uuid:f(o.concat(n).concat(l)),numberOfDocs:i.totalSize,pageSize:i.pageSize}})})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.search.confluence-search:confluence-search-resources', location = '/js/confluence-search-main.js' */
require(["jquery","confluence-search/confluence-search"],function(b,a){b(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:legacy-editor-global-AVOID-IF-POSSIBLE', location = 'includes/js/amd/shim/confluence-editor-amd.js' */
define("confluence/legacy-editor-global-AVOID-IF-POSSIBLE",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Editor&&(Confluence.Editor={});return Confluence.Editor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.shortcuts.atlassian-shortcuts-plugin:shortcuts', location = '/js/keycommands.js' */
AJS.bind("initialize.keyboardshortcuts",function(){var D=AJS.$,B=function(F){return(AJS.Data&&AJS.Data.get(F))||AJS.params[F]},A=B("build-number"),E=B("keyboardshortcut-hash");if(!A||!E){throw new Error("build-number and keyboardshortcut-hash must both exist in AJS.Data or AJS.params.")}var C=AJS.contextPath()+"/rest/shortcuts/latest/shortcuts/"+encodeURIComponent(A)+"/"+encodeURIComponent(E);D.getJSON(C,function(H){var F=H.shortcuts;if(!F){throw new Error("Server returned no shortcuts.")}AJS.trigger("shortcuts-loaded.keyboardshortcuts",{shortcuts:F});var I=[];var K={enableContext:function(M){var L=D.grep(F,function(N){return N.context===M});I=I.concat(AJS.whenIType.fromJSON(L,true))}};var G=function(){AJS.trigger("register-contexts.keyboardshortcuts",{shortcutRegistry:K})};G();AJS.bind("add-bindings.keyboardshortcuts",G);var J=function(){D.each(I,function(){this.unbind()});I=[]};AJS.bind("remove-bindings.keyboardshortcuts",J)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'templates/confluence-keyboard-shortcuts.soy' */
// This file was automatically generated from confluence-keyboard-shortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialog.
 */

if (typeof __KeyboardShortcutsDialog == 'undefined') { var __KeyboardShortcutsDialog = {}; }


__KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_ignored) {
  return '<div class="module"><div class="mod-header"><h3>' + soy.$$escapeHtml(opt_data.title) + '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutModule.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutModule';
}


__KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.customHelpLink({href: '' + ((true == true) ? soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Keyboard+Shortcuts%2C+Markdown%2C+and+Autocomplete") : soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Keyboard+Shortcuts")), text: '' + soy.$$escapeHtml('View All Shortcuts')});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutHelpLink.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutHelpLink';
}


__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_ignored) {
  return '<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">' + soy.$$escapeHtml('Enable General Shortcuts') + '</label></form>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox';
}


__KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_ignored) {
  return '<div id=' + soy.$$escapeHtml(opt_data.panelId) + '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutPanel.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'js/confluence-keyboard-shortcuts-soy.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy",function(){return __KeyboardShortcutsDialog});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'templates/shortcut-dialog-tab-autoformat.soy' */
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialogAutoformat.
 */

if (typeof __KeyboardShortcutsDialogAutoformat == 'undefined') { var __KeyboardShortcutsDialogAutoformat = {}; }


__KeyboardShortcutsDialogAutoformat.configureAutocomplete = function(opt_data, opt_ignored) {
  return '<div id="keyboard-shortcut-autocomplete-message">' + soy.$$escapeHtml('To configure Autocomplete,') + ' <a target="_blank" href=' + soy.$$escapeHtml(opt_data.href) + '>' + soy.$$escapeHtml('go to your editor settings') + '</a></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.configureAutocomplete.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.configureAutocomplete';
}


__KeyboardShortcutsDialogAutoformat.helpItem = function(opt_data, opt_ignored) {
  return '<li class="item-details"><span class="item-description wiki-content">' + opt_data.output + '</span><span class="' + opt_data.actionClass + ' item-action">' + opt_data.type + '</span></li>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.helpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.helpItem';
}


__KeyboardShortcutsDialogAutoformat.simpleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.simpleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.simpleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.tableHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableHelpItem';
}


__KeyboardShortcutsDialogAutoformat.styleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.styleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.styleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: '' + soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.keyboardShortcutItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem';
}


__KeyboardShortcutsDialogAutoformat.emoticonHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.emoticonHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.emoticonHelpItem';
}


__KeyboardShortcutsDialogAutoformat.boldDescription = function(opt_data, opt_ignored) {
  return '<b>' + soy.$$escapeHtml('Bold') + '</b> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.boldDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.boldDescription';
}


__KeyboardShortcutsDialogAutoformat.underlineDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: underline;">' + soy.$$escapeHtml('Underline') + '</span> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.underlineDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.underlineDescription';
}


__KeyboardShortcutsDialogAutoformat.strikethroughDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: line-through;">' + soy.$$escapeHtml('Strikethrough') + '</span> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.strikethroughDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.strikethroughDescription';
}


__KeyboardShortcutsDialogAutoformat.italicDescription = function(opt_data, opt_ignored) {
  return '<em>' + soy.$$escapeHtml('Italic') + '</em> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.italicDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.italicDescription';
}


__KeyboardShortcutsDialogAutoformat.monospaceDescription = function(opt_data, opt_ignored) {
  return '<code>' + soy.$$escapeHtml('Monospace') + '</code> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.monospaceDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.monospaceDescription';
}


__KeyboardShortcutsDialogAutoformat.tableDescription = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><td class="confluenceTd">' + soy.$$escapeHtml('first cell') + '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableDescription';
}


__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><th class="confluenceTh">' + soy.$$escapeHtml('heading') + '</th><th class="confluenceTh">' + soy.$$escapeHtml('heading') + '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions';
}


__KeyboardShortcutsDialogAutoformat.h1Description = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('Heading') + '</h1>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h1Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h1Description';
}


__KeyboardShortcutsDialogAutoformat.h3Description = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml('Heading') + '</h3>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h3Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h3Description';
}


__KeyboardShortcutsDialogAutoformat.bqDescription = function(opt_data, opt_ignored) {
  return '<blockquote>' + soy.$$escapeHtml('Quote') + '</blockquote>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bqDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bqDescription';
}


__KeyboardShortcutsDialogAutoformat.numberedListDescription = function(opt_data, opt_ignored) {
  return '<ol><li>' + soy.$$escapeHtml('list') + '</li></ol>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.numberedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.numberedListDescription';
}


__KeyboardShortcutsDialogAutoformat.bulletedListDescription = function(opt_data, opt_ignored) {
  return '<ul><li>' + soy.$$escapeHtml('bullets') + '</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bulletedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bulletedListDescription';
}


__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription = function(opt_data, opt_ignored) {
  return '<ul class="inline-task-list"><li>task</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.inlineTaskListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'js/shortcut-dialog-tab-autoformat-soy.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy",function(){return __KeyboardShortcutsDialogAutoformat});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab', location = 'js/shortcut-dialog-tab-autoformat.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat",["ajs","confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy","confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy","jquery","confluence/dark-features"],function(a,h,b,g,c){c=c.isEnabled("editor.spa.uxenhancements");var l={context:"autoformat.font_formatting",description:b.strikethroughDescription(),action:"~~Strikethrough~~"},m={context:"autoformat.font_formatting",
description:b.boldDescription(),action:"**Bold** or __Bold__"},n={context:"autoformat.font_formatting",description:b.italicDescription(),action:"*Italic* or _Italic_"},p={context:"autoformat.font_formatting",description:b.monospaceDescription(),action:"`Monospace`"},q={context:"autoformat.styles",description:b.h1Description(),action:"# Heading 1"},
r={context:"autoformat.styles",description:b.h3Description(),action:"### Heading 3"},t={context:"autoformat.styles",description:b.bqDescription(),action:"\u003e Quote"},u={context:"autoformat.lists",description:b.numberedListDescription(),action:"1. list"},v=[c?m:{context:"autoformat.font_formatting",description:b.boldDescription(),action:"*Bold*"},
c?l:{context:"autoformat.font_formatting",description:b.underlineDescription(),action:"+Underline+"},c?n:{context:"autoformat.font_formatting",description:b.italicDescription(),action:"_Italic_"},c?p:{context:"autoformat.font_formatting",description:b.monospaceDescription(),action:"{{Monospace}}"},{context:"autoformat.tables",description:b.tableDescription(),
action:"||||| + enter"},{context:"autoformat.tables",description:b.tableWithHeadingsDiscriptions(),action:"||heading||heading||"},c?q:{context:"autoformat.styles",description:b.h1Description(),action:"h1. Heading"},c?r:{context:"autoformat.styles",description:b.h3Description(),action:"h3. Heading"},c?t:{context:"autoformat.styles",
description:b.bqDescription(),action:"bq. Quote"},{context:"autoformat.emoticons",img:"check.png",action:"(/)"},{context:"autoformat.emoticons",img:"smile.png",action:":)"},c?u:{context:"autoformat.lists",description:b.numberedListDescription(),action:"# list"},
{context:"autoformat.lists",description:b.bulletedListDescription(),action:"* bullets"},{context:"autoformat.lists",description:b.inlineTaskListDescription(),action:"[] task"},{context:"autoformat.autocomplete",description:"Image/Media",action:"!"},{context:"autoformat.autocomplete",description:"Link",
action:"["},{context:"autoformat.autocomplete",description:"Macro",action:"{"}],k=function(a,b,c){a=g(h.keyboardShortcutModule({title:a}));var d=a.find("ul");b=w(b);for(var f=0,e=b.length;f<e;f++)d.append(c(b[f]));return a},e=function(a,b,c){return k(a,b,function(a){return c({output:a.description,type:a.action})})},x=function(c,
d){var f=a.params.staticResourceUrlPrefix+"/images/icons/emoticons/";return k(c,d,function(a){return b.emoticonHelpItem({src:f+a.img,type:a.action})})},w=function(a){return g.grep(v,function(b){return b.context===a})};return function(){var c=g(h.keyboardShortcutPanel({panelId:"autoformat-shortcuts-panel"})),d=c.children(".shortcutsmenu");d.append(e("Font Formatting","autoformat.font_formatting",b.simpleHelpItem));d.append(e("Autocomplete",
"autoformat.autocomplete",b.keyboardShortcutItem));d.append(e("Tables","autoformat.tables",b.tableHelpItem));d.append(e("Styles","autoformat.styles",b.styleHelpItem).addClass("styles-module"));d.append(x("Emoticons","autoformat.emoticons"));d.append(e("Lists","autoformat.lists",b.simpleHelpItem));
a.Meta.get("remote-user")&&c.find(".keyboard-shortcut-dialog-panel-header").append(b.configureAutocomplete({href:a.contextPath()+"/users/viewmyeditorsettings.action"}));return c}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/confluence-keyboard-shortcuts.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts","ajs jquery confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy confluence/legacy-editor-global-AVOID-IF-POSSIBLE window confluence/dialog confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat confluence/dark-features".split(" "),function(a,f,n,p,w,z,A,x){var c,g={Autoformat:[],Editor:[],enabled:!1,ready:!1,dialog:null,closeDialog:function(){t().then(function(a){a.hide()});return!1},openDialog:function(){f(this).removeClass("interactive");
t().then(function(a){a.show()});return!1}},t=function(){function k(){p&&p.isVisible&&p.isVisible()?(c.overrideLastTab(),c.gotoPanel(1)):c.gotoPanel(0)}var e=f.Deferred();if(c)return k(),e.resolve(c);var h=g.shortcuts,u=-1!==w.navigator.platform.indexOf("Mac"),B=function(d){var b=a("span").addClass("item-action");d=d.keys[0];for(var f=0;f<d.length;f++){0<f&&b.append(y("then"));for(var c=b,l=d[f].split("+"),v=0;v<l.length;v++){0<v&&c.append(y("+"));for(var e=c,q=l[v].split(".."),
k=0;k<q.length;k++)0<k&&e.append(y("to")),e.append(t(q[k]))}}return b},t=function(d){var b=a("kbd");switch(d){case "Shift":case "Sh":b.text("Shift");b.addClass("modifier-key");break;case "Ctrl":d=u?"⌘":"Ctrl";b.text(d);b.addClass("modifier-key");break;case "Tab":b.text("Tab");b.addClass("modifier-key");break;case "Alt":b.text("Alt");
b.addClass("modifier-key");break;case "LeftAlt":d=u?"Option":"Left Alt";b.text(d);b.addClass("modifier-key");break;case "Control":b.text("Control");b.addClass("modifier-key");break;case "Option":b.text("Option");b.addClass("modifier-key");break;case "UpArrow":b.text("\u2191");b.addClass("regular-key");break;case "DownArrow":b.text("\u2193");
b.addClass("regular-key");break;case "LeftArrow":b.text("\u2190");b.addClass("regular-key");break;case "RightArrow":b.text("\u2192");b.addClass("regular-key");break;default:b.text(d),b.addClass("regular-key")}return b},y=function(d){var b=a("span");b.text(d);b.addClass("key-separator");return b},m=function(d,b,c){d=f(n.keyboardShortcutModule({title:d}));for(var k=d.find("ul"),l=0;l<c.length;l++){var e=c[l];if(!e.hidden&&
-1!==f.inArray(e.context,b)){var h=a("li").addClass("item-details"),q=e.description,q=a("strong").addClass("item-description").append(q);h.append(q);h.append(B(e));k.append(h)}}return d};c=z.component({width:950,height:660,id:"keyboard-shortcuts-dialog"});c.addHeader("Keyboard Shortcuts");c.addPanel("General",function(){var d=f(n.keyboardShortcutPanel({panelId:"general-shortcuts-panel"})),b=f(d).children(".shortcutsmenu");
a.Meta.get("remote-user")&&d.find(".keyboard-shortcut-dialog-panel-header").append(n.keyboardShortcutEnabledCheckbox());b.append(m("Global Shortcuts",["global"],h));b.append(m("Page / Blog Post Actions",["viewcontent","viewinfo"],h));return d}());c.addPanel("Editor",function(){var d=f(n.keyboardShortcutPanel({panelId:"editor-shortcuts-panel"})),b=f(d).children(".shortcutsmenu"),c=["tinymce.block"],
e=["tinymce.rich"],l=["tinymce.actions"];x.isEnabled("editor.spa.uxenhancements")&&(d.addClass("foxy-ux-enhancement"),c=["adg3.tinymce.block"],e=["adg3.tinymce.rich"],e.push(u?"adg3.tinymce.rich.mac":"adg3.tinymce.rich.win"),l=["adg3.tinymce.actions"],l.push(u?"adg3.tinymce.actions.mac":"adg3.tinymce.actions.win"));b.append(m("Block Formatting",c,h));b.append(m("Rich Formatting",e,h));b.append(m("Editing Actions",
l,h));return d}());c.addPanel("Editor Autoformatting",A());c.addCancel("Close",function(){a.debug("Hiding Shortcuts help");c.hide();return!1});c.popup.element.find(".dialog-title").prepend(n.keyboardShortcutHelpLink());a.trigger("keyboard-shortcut-dialog-ready",c);k();e.resolve(c);f("#keyboard-shortcut-enabled-checkbox").prop("checked",r.keyboardShortcuts.enabled).click(function(d){var b=f(this).prop("checked");f.ajax({type:"POST",url:a.contextPath()+
"/rest/confluenceshortcuts/latest/enabled",data:f.toJSON({enabled:b}),dataType:"json",contentType:"application/json"}).done(function(){r.keyboardShortcuts.enabled=b;r.keyboardShortcuts.ready=!1;b?a.trigger("add-bindings.keyboardshortcuts"):a.trigger("remove-bindings.keyboardshortcuts")})});return e},r={init:function(){a.debug("confluence-keyboard-shortcuts initialising");a.PageGadget||w.parent.AJS&&w.parent.AJS.PageGadget?a.debug("Inside the Page Gadget. Skipping keyboard shortcuts"):(g.enabled=a.Meta.getBoolean("use-keyboard-shortcuts"),
a.bind("shortcuts-loaded.keyboardshortcuts",function(a,c){g.shortcuts=c.shortcuts;f("#keyboard-shortcuts-link").click(g.openDialog)}),a.bind("register-contexts.keyboardshortcuts",function(c,e){if(g.enabled){c=e.shortcutRegistry;e=p&&p.isVisible&&p.isVisible();f("#action-menu-link").length&&!e&&c.enableContext("viewcontent");f("#viewPageLink").length&&c.enableContext("viewinfo");if(e){x.isEnabled("editor.spa.uxenhancements")?c.enableContext("adg3.tinymce.actions"):c.enableContext("editor");var h=require("tinymce"),
k=h.activeEditor,n=f("#rte").closest("form");f.each(g.shortcuts,function(c,e){if(0===e.context.indexOf("tinymce")){var m=e.op,d=e.param;f.each(e.keys,function(){var b=this,c;"click"==m?c=function(){f(d).click()}:"execute"==m&&(c=d);if(c){f.isArray(b)&&(b=b.join(","));var g=b.toLowerCase(),g=4<=parseInt(h.majorVersion,10)&&h.isMac?g.replace("ctrl","meta"):g;a.debug("Adding shortcut for "+g);k.addShortcut(g,"",c);x.isEnabled("editor.spa.uxenhancements")||"tinymce.actions"!=e.context||-1===b.indexOf("+")||
(a.debug("Binding shortcut on inputs too for "+b),n.delegate(":input","keydown",function(a){var d=a.keyCode?a.keyCode:a.which,e=b.split("+"),e=f.map(e,function(b){return"Ctrl"==b&&a.metaKey||"Shift"==b&&a.shiftKey||d==b.charCodeAt(0)?null:b});e.length||(c(),a.preventDefault())}))}else a.logError("ERROR: unkown editor shortcut key operation "+m+" for shortcut "+b)})}})}g.ready=!0}}),"undefined"!==typeof a.contextPath()&&(f("#rte").length?a.bind("init.rte",function(){a.trigger("initialize.keyboardshortcuts")}):
a.trigger("initialize.keyboardshortcuts")))}};r.keyboardShortcuts=g;return r});require("confluence/module-exporter").safeRequire("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts",function(a){var f=require("ajs");Confluence.KeyboardShortcuts=a.keyboardShortcuts;f.toInit(a.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__abec049fae3e0e24b94d659c3600ba01=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__02fa0d2334b5d2f9701871403ba9d89a),j=f(__8f23956215d754ca94df621efa6b0438),k=f(__fb27ffae84b96c14bf339e62cefcf116),
b=f(__b16464bbf0aa314bacb753553ada098e),l=f(__ecaadce486e7be7002d8453fc51f9873),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('Close') + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = 'includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","ajs"],function(b,a){return function(c){function e(){return b(".confluence-page-loading-blanket",c)}function f(){return b(".confluence-loading-indicator",c)}return{show:function(){0===e().length&&b(c).append('\x3cdiv class\x3d"confluence-page-loading-errors"\x3e\x3c/div\x3e\x3cdiv class\x3d"confluence-page-loading-blanket aui-blanket" aria-hidden\x3d"false"\x3e\x3cdiv class\x3d"confluence-loading-indicator"\x3e\x3c/div\x3e\x3c/div\x3e');e().show();
f().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){f().stop();e().hide()},showUntilResolved:function(b,d){this.show();b.always(this.hide.bind(this));d&&b.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:d})})},showUntilDialogVisible:function(c,d){var g=this,e=d||"An error has occurred connecting to the server. Please try again.";d=b(".aui-dialog:visible");var f=b(".aui-dialog2:visible");d.length||f.length||g.show();c.always(g.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",
{body:e})});a.bind("show.dialog",function h(){a.unbind("show.dialog",h);g.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",function k(){a.dialog2.off("show",k);g.hide()})},destroy:function(){c.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = 'includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-dialog-loader', location = 'includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["jquery","ajs","confluence/page-loading-indicator","confluence/api/event","wrm"],function(a,e,d,f,h){return function(){var g={userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},k=d(a("body"));Object.keys(g).forEach(function(d){var b=g[d];a("body").on("click",b.selector,function(a){var c=h.require("wr!"+b.resource,function(){f.trigger(b.event)});k.showUntilDialogVisible(c);c=b.resource+".requested";e.Analytics?e.Analytics.triggerPrivacyPolicySafeEvent(c):f.trigger("analyticsEvent",{name:c});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-permissions-deferred-loader', location = 'includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader",["confluence/dark-features","ajs","confluence/page-loading-indicator","jquery","wrm"],function(b,d,a,e,c){var f=a(e("body"));return function(a){var b=c.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){d.trigger("deferred.page.permissions")});f.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(b){var d=require("ajs"),a=require("skate");a("action-page-permissions",{type:a.types.CLASS,events:{click:function(a,c){b(c)}}});a("rte-button-restrictions",{type:a.types.CLASS,events:{click:function(a,c){b(c)}}});d.bind("system-content-metadata.open-restrictions-dialog",b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:site-status-web-item', location = 'includes/js/site-status-web-item.js' */
define("confluence/site-status-web-item",["document","confluence/api/event"],function(a,c){function d(){c.trigger("analyticsEvent",{name:"site-status.requested"})}return{bind:function(){var b=a.getElementById("site-status-menu-link");b&&(b.onclick=d)}}});require("confluence/module-exporter").safeRequire("confluence/site-status-web-item",function(a){require("ajs").toInit(a.bind)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:quick-nav', location = 'includes/js/quick-nav.js' */
define("confluence/quick-nav",["jquery","confluence/api/logger"],function(e,c){var d=[],b;return{addDropDownPostProcess:function(a){"undefined"!==typeof a?d.push(a):c.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},setMakeParams:function(a){b=a},init:function(a,c){a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:c,dropdownPostprocess:function(a){e.each(d,function(c,b){b&&b(a)})},makeParams:function(a){return b?b(a):{query:a}},ajsDropDownOptions:{className:"quick-search-dropdown"}})}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/quick-nav","Confluence.QuickNav");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:contentnamesearch', location = 'includes/js/contentnamesearch.js' */
define("confluence/contentnamesearch",["jquery","ajs","confluence/quick-nav"],function(b,e,l){return function(){var f=function(b){return function(c){b.closest("form").find(".quick-nav-drop-down").append(c)}},g=b("#quick-search-query"),d=b("#space-blog-quick-search-query"),h=b("#confluence-space-key"),m=f(g),k=e.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:l});k.init(g,m);k.addDropDownPostProcess(function(a){b("a",a).each(function(){var c=b(this),a=c.find("span").data("properties");
(a=a?a.spaceName:null)&&!c.is(".content-type-spacedesc")&&(c.after(c.clone().attr("class","space-name").html(a)),c.parent().addClass("with-space-name"))})});d.length&&h.length&&d.quicksearch("/rest/quicknav/1/search?type\x3dblogpost\x26spaceKey\x3d"+e("i").html(h.attr("content")).text(),null,{dropdownPlacement:f(d)});(function(){b("#quick-search").on("click","div.quick-search-dropdown li:not(:has(a.admin-item,a.search-for))",function(a){var c=b(this),d=b(a.target);d.is("a")&&1===d.parent().children("a").index(d)&&
void 0===a.originalEvent||(a=c.children("a:first").attr("class"),c=c.index("div.quick-search-dropdown li:not(:has(a.admin-item,a.search-for))"),e.trigger("analytics",{name:"quicknav-click-"+a,data:{index:c}}))});var a=function(){var a={name:"quicknav-hit-enter",data:{results:b("div.quick-search-dropdown li:not(:has(a.admin-item,a.search-for))").length}};e.trigger("analytics",a)};b("#quick-search").on("submit",a);b("#quick-search").on("click","div.quick-search-dropdown li:has(a.search-for)",a)})();
(function(){b("#quick-search").on({"quick-search-loading-start":function(){b(this).spin({className:"quick-search-spinner"}).addClass("quick-search-loading");b(".quick-search-spinner").css("left",b(this).outerWidth()-35+"px")},"quick-search-loading-stop":function(){b(this).spinStop().removeClass("quick-search-loading")}})})();(function(){b("#quick-search").on("keydown",function(a){var c=e.dropDown.current&&-1!=e.dropDown.current.getFocusIndex();13!==a.which||!a.metaKey&&!a.ctrlKey||c||(a=b(this),a.attr("target",
"_blank"),a.submit(),a.attr("target",""))})})()}});require("confluence/module-exporter").safeRequire("confluence/contentnamesearch",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:raphael', location = 'includes/js/third-party/raphael-spinner.js' */
var Raphael=Raphael||{};Raphael.spinner=function(d,a,e){var b=30*a/60;a={color:e||"#fff",width:13*a/60,radius:b,length:a-b,top:0,left:0,zIndex:0,speed:1.042};var c=$(d);c.spin(a);return function(){c.spinStop()}};Raphael.spinner=AJS.deprecate.fn(Raphael.spinner,"Raphael spinner",{alternativeName:"aui-spinner"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:raphael', location = 'includes/js/amd/shim/raphael-amd.js' */
define("raphael",function(){return Raphael});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = 'includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var d="",b;for(b in a)for(var c=0;c<a[b].length;c++)d+="\x26"+b,a[b][c]&&(d+="\x3d"+a[b][c]);return d.substring(1)},parse:function(a){var d={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var b=0;b<a.length;b++){var c=a[b].split("\x3d");d[c[0]]||(d[c[0]]=[]);d[c[0]].push(a[b].substring(c[0].length+1))}}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = 'includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","confluence/api/querystring","document","window"],function(c,p,b,h){var k=function(a){a=e(a);return"undefined"!==typeof a&&0!==a},e=function(a){a=c.get(a);if(!isNaN(a))return Number(a)},l=function(a){return(a=a.match(/[^/?#]*\/plugins\/servlet\/ac\/([^/?#]*)\/([^/?#]*)$/))?{addonKey:a[1],moduleKey:a[2]}:null},m=function(){return 0<b.querySelectorAll("[data-fabric-mode]").length},n=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},
f=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")||m()},g=function(){return c.get("content-type")},d=function(){return e("page-id")},q=function(a){var b=l(a.pathname),c=p.parse(a.search);a=Object.keys(c).reduce(function(a,b){a[decodeURIComponent(b).replace(/^ac\./g,"")]=c[b].map(decodeURIComponent);return a},{});return{target:"addonmodule",context:{addonKey:decodeURIComponent(b.addonKey),moduleKey:decodeURIComponent(b.moduleKey),context:a}}};return{getCurrent:function(){return f()&&
0===d()&&k("draft-id")||0<b.querySelectorAll("[data-fabric-mode\x3d'create']").length?{target:"contentcreate",context:{contentId:m()?d():e("draft-id"),contentType:g(),spaceKey:c.get("space-key")}}:f()&&!n()&&0!==d()||0<b.querySelectorAll("[data-fabric-mode\x3d'edit']").length?{target:"contentedit",context:{contentId:d(),contentType:g(),spaceKey:c.get("space-key")}}:!f()&&n()&&k("page-id")?{target:"contentview",context:{contentId:d(),contentType:g(),spaceKey:c.get("space-key")}}:null!=l(h.location.pathname)?
q(h.location):{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/ajs.js' */
define("atlassian-nps-plugin/js/amd-shims/ajs",function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/templates.js' */
define("atlassian-nps-plugin/js/amd-shims/templates",function(){return NPS.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/wrm.js' */
define("atlassian-nps-plugin/js/amd-shims/wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-util', location = '/js/nps/util.js' */
define("atlassian-nps-plugin/js/nps/util",["atlassian-nps-plugin/js/nps/product","atlassian-nps-plugin/js/amd-shims/ajs"],function(b,a){var c={};c.kfyShuffle=function(g){for(var f=g.length-1;f>0;f--){var d=Math.floor(Math.random()*(f+1));var e=g[f];g[f]=g[d];g[d]=e}return g};c.sendAnalyticsEvent=function(d,e){e=e||{};e.product=b.getProductName().toLowerCase();e.page=window.location.pathname.replace(/\//g," ");var f={name:"nps."+d,data:e};a.trigger("analyticsEvent",f)};c.hasShowingDialog=function(){return a.$(".aui-dialog:visible, aui-dialog2:visible").length>0};return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-util', location = '/js/nps/submission.js' */
define("atlassian-nps-plugin/js/nps/submission",["atlassian-nps-plugin/js/nps/util"],function(b){var a={};a.showNotification=function(c){b.sendAnalyticsEvent("notification.show",c)};a.startSurvey=function(){b.sendAnalyticsEvent("survey.start",{})};a.cancelSurvey=function(c){var d={};if(c){d.cancelContext=c}b.sendAnalyticsEvent("survey.cancel",d)};a.ignoreSurvey=function(){b.sendAnalyticsEvent("survey.ignore",{})};a.submitSurvey=function(c){b.sendAnalyticsEvent("survey.submit",c)};a.scheduleNextSurveyDate=function(c){b.sendAnalyticsEvent("survey.schedule",c)};a.showAcknowledgementFlag=function(c){b.sendAnalyticsEvent("server.acknowledge.show",c)};a.acceptAcknowledgementFlag=function(c){b.sendAnalyticsEvent("server.acknowledge.accept",c)};a.closeAcknowledgementFlag=function(c){b.sendAnalyticsEvent("server.acknowledge.close",c)};a.updateNpsStatus=function(c){b.sendAnalyticsEvent("server.status.changed",c)};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/product/confluence.js' */
define("atlassian-nps-plugin/js/nps/product",["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/amd-shims/wrm"],function(c,b){var e=".nps-dialog-target";var a;var d;var f;return{isNpsOptedOut:function(){if(f===undefined){f=b.data.claim("com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources.nps-opted-out")||c.Meta.get("nps-opted-out")}return f},waitBeforeStart:function(i,h){if(!this.hasAdg3NavigationSidebar()){i();return}if(h>20){console.info("Failed to read NPS data from Confluence AJS.Meta (populated by confluence-frontend LegacyBridge) after 20 attempts");return}var g=this;if(c.Meta.get("nps-opted-out")===undefined){setTimeout(function(){g.waitBeforeStart(i,(h||0)+1)},500)}else{i()}},getProductName:function(){return"Confluence"},setBindings:function(){require(["atlassian-nps-plugin/js/nps/client-storage"],function(g){c.bind("rte-ready",function(){g.remove("idleStart")});c.bind("rte-destroyed",function(){g.set("idleStart",Date.now())})})},getUserKey:function(){return c.Meta.get("remote-user")},hasAdg3NavigationSidebar:function(){return c.Meta&&c.Meta.get("version-number")&&c.Meta.get("version-number").indexOf("100")===0},getAdg3Flags:function(){return{userAdg3Enabled:this.hasAdg3NavigationSidebar()}},getAdg3SurveyInlineDialogClass:function(){return"confluence-adg3-nps-survey-dialog"},isServerMode:function(){if(a===undefined){var g=b.data.claim("com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources.is-server-instance-data-provider")||c.Meta.get("nps-is-server-instance-data-provider");a=(g===true)}return a},enableABTesting:function(){return true},allowDisplayNotification:function(){if(this.isNpsOptedOut()){return false}var k=this.getLocation();var i=/authenticate.action/.test(k.href);if(i){return false}if(c.DarkFeatures&&c.DarkFeatures.isEnabled("nps.survey.inline.dialog")){var h=k.search;var g=/(focusedCommentId|replyToComment)=(\d+)/.test(h);var j=/preview=/.test(h);return !g&&!j}else{return true}},getSurveyTrigger:function(){return this.hasAdg3NavigationSidebar()?e:"#help-menu-link"},getInlineDialogAlignment:function(){return this.hasAdg3NavigationSidebar()?"right top":"bottom right"},getLocation:function(){return window.location},allowDisplayAcknowledgementFlag:function(){if(this.isNpsOptedOut()){return false}var h=this.getLocation();var g=function(){var i=/\/welcome.action/.test(h.href);var k=sessionStorage.getItem("onboarding-state:tutorialFlow");var j=k&&k!=="__complete__";return i||j};return !g()},isUserSiteAdmin:function(){if(d===undefined){var g=b.data.claim("com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources.is-user-site-admin")||c.Meta.get("nps-is-user-site-admin");d=(g===true)}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/client-storage.js' */
define("atlassian-nps-plugin/js/nps/client-storage",["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/nps/product"],function(b,d){var f;function c(){if(f===undefined){f="nps-"+d.getUserKey()}return f}function a(g){return c()+"-"+g}function e(g){return a(d.getProductName().toLowerCase().replace(/\s+/g,"")+"-"+g)}return{set:function(g,h){try{localStorage.setItem(a(g),h)}catch(i){b.warn("Could not set NPS value: "+i)}},setProductValue:function(g,h){try{localStorage.setItem(e(g),h)}catch(i){b.warn("Could not set NPS value: "+i)}},get:function(g){return localStorage.getItem(a(g))},getProductValue:function(g){return localStorage.getItem(e(g))},remove:function(g){localStorage.removeItem(a(g))},removeProductValue:function(g){localStorage.removeItem(e(g))},containsKey:function(g){return localStorage.getItem(a(g))!==null},getNumber:function(g){var h=parseInt(this.get(g),10);if(isNaN(h)){return 0}return h},increment:function(g){this.set(g,(this.getNumber(g)+1))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/config-manager-server.js' */
define("atlassian-nps-plugin/js/nps/config-manager-server",["atlassian-nps-plugin/js/amd-shims/ajs","jquery","atlassian-nps-plugin/js/nps/client-storage","atlassian-nps-plugin/js/nps/submission"],function(a,e,d,b){var c={optedOut:null,dismissedCount:null,timeToNextSurvey:null};return{getCachedData:function(){return c},removeCachedData:function(){c={optedOut:null,dismissedCount:null,timeToNextSurvey:null}},fetchConfig:function(){return e.ajax({url:a.contextPath()+"/rest/nps/1.0/config",type:"GET",contentType:"application/json",cache:false,success:function(f){if(f.dismissedCount===null){f.dismissedCount=0}c=f;d.setProductValue("nextSurveyDate",Date.now()+c.timeToNextSurvey)},error:function(f){a.warn("Error getting NPS config: ",f)}})},setConfig:function(){var f;if(typeof arguments[0]==="object"){f=arguments[0]}else{if(arguments.length!==2){throw ("Need to provide key/value as argument to set NPS server config")}f={};f[arguments[0]]=arguments[1]}if(localStorage&&localStorage.getItem("nps-testing")==="true"){f.forceUpdate=true}return e.ajax({url:a.contextPath()+"/rest/nps/1.0/config",type:"PUT",contentType:"application/json",data:JSON.stringify(f),success:function(){e.extend(c,f)},error:function(g){a.warn("Error setting NPS config: ",g)}})},scheduleNextSurveyDate:function(){return e.ajax({url:a.contextPath()+"/rest/nps/1.0/config/nextSurveyDate",type:"POST",contentType:"application/json",success:function(f){b.scheduleNextSurveyDate({nextSurveyDate:f});d.setProductValue("nextSurveyDate",f)},error:function(f){a.warn("Error scheduling next survey date for NPS: ",f)}})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/session-manager.js' */
define("atlassian-nps-plugin/js/nps/session-manager",["atlassian-nps-plugin/js/nps/client-storage"],function(e){var b=1000*60;var c=5*b;var g=60*b;var f=10*b;function a(){if(!e.containsKey("sessionStart")){e.set("sessionStart",Date.now())}else{if((Date.now()-e.getNumber("lastActive"))>g){e.set("sessionStart",Date.now())}}}function d(){if(!e.containsKey("idleStart")){e.set("idleStart",Date.now())}}return{update:function(){d();a();e.set("lastActive",Date.now())},isSurveyTime:function(){return this.isInSession()&&this.isIdle()},isIdle:function(){var h=Date.now()-e.getNumber("idleStart");return h>c},isInSession:function(){var h=Date.now()-e.getNumber("sessionStart");return h>f},reset:function(){e.remove("lastActive");e.remove("sessionStart");e.remove("idleStart")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/atlassian-nps-plugin.js' */
define("atlassian-nps-plugin/js/atlassian-nps-plugin",["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/amd-shims/wrm","atlassian-nps-plugin/js/nps/client-storage","atlassian-nps-plugin/js/nps/product","atlassian-nps-plugin/js/nps/session-manager","atlassian-nps-plugin/js/nps/submission","atlassian-nps-plugin/js/nps/util","jquery"],function(j,a,b,g,d,i,k,e){var m;var o=1000*60*60*24*30;function n(p){m=p;var q=b.getNumber("displayCount");g.setBindings();d.update();if(b.get("optedOut")==="true"){m.setConfig("optedOut",true)}else{if(q!==0){l()}else{if(Date.now()-b.get("lastSurveyDate")>=o){if(b.getProductValue("nextSurveyDate")===null){m.fetchConfig().then(h)}else{if(b.getProductValue("nextSurveyDate")-Date.now()<0){m.fetchConfig().then(h)}}}}}}function h(){c().then(f)}function c(){var q=30000;var p=e.Deferred();if(j.DarkFeatures&&j.DarkFeatures.isEnabled("nps.survey.inline.dialog")){q=5000}if(localStorage&&localStorage.getItem("nps-testing")==="true"){q=0}setTimeout(function(){var r=!k.hasShowingDialog();if(r&&d.isSurveyTime()&&m.getCachedData().timeToNextSurvey!=null&&m.getCachedData().timeToNextSurvey<=0){p.resolve()}},q);return p.promise()}function f(){if(g.allowDisplayNotification()===true){a.require("wr!com.atlassian.plugins.atlassian-nps-plugin:nps-specific-resources-async",function(){require(["atlassian-nps-plugin/js/nps/main"],function(p){p.launch(m);b.increment("displayCount");i.showNotification({displayCount:b.getNumber("displayCount"),dismissedCount:parseInt(m.getCachedData().dismissedCount,10)});b.set("lastSurveyDate",Date.now())})})}}function l(){a.require("wr!com.atlassian.plugins.atlassian-nps-plugin:nps-submission-resources",function(){require(["atlassian-nps-plugin/js/nps/submission"],function(p){b.remove("displayCount");p.ignoreSurvey();m.scheduleNextSurveyDate();d.reset()})})}return{init:n}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/bootstrap.js' */
require(["atlassian-nps-plugin/js/amd-shims/ajs","atlassian-nps-plugin/js/atlassian-nps-plugin","atlassian-nps-plugin/js/nps/config-manager-server","atlassian-nps-plugin/js/nps/product"],function(b,d,a,c){if(!c.getUserKey()){return}var e=function(){b.toInit(function(){d.init(a)})};if(c.waitBeforeStart){c.waitBeforeStart(e)}else{e()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/page-visibility.js' */
define("atlassian/analytics/page-visibility",function(){var a=(document.hidden!==undefined);var b={supported:a,isHidden:function(){return a?document.hidden:false}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/user-activity-xhr-header.js' */
define("atlassian/analytics/user-activity-xhr-header",["atlassian/analytics/page-visibility"],function(f){var d="x-atlassian-mau-ignore";var e=XMLHttpRequest.prototype.send;var b=window.fetch;var g=XMLHttpRequest.prototype.open;var a=false;var i=Object.create(null);var h=new RegExp("^(?:[a-z]+:)?//","i");var c=function(j){var k=document.createElement("a");k.href=j;return k.hostname};return{install:function(){if(!a&&f.supported){XMLHttpRequest.prototype.open=function(k,j){this._url=j;return g.apply(this,arguments)};XMLHttpRequest.prototype.send=function(){var j=h.test(this._url)?c(this._url) in i:true;if(f.isHidden()&&j){this.setRequestHeader(d,f.isHidden())}e.apply(this,arguments)};if(b){window.fetch=function(j,m){var k=m||{};var l=k.headers;if(f.isHidden()){k.headers=(l)?new Headers(l):new Headers();k.headers.set(d,f.isHidden())}return b.call(this,j,k)}}a=true}},uninstall:function(){if(a){XMLHttpRequest.prototype.send=e;if(b){window.fetch=b}}a=false},addHost:function(j){i[j]=true}}});require("atlassian/analytics/user-activity-xhr-header").install();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/atlassian-analytics.js' */
(function(d){function e(x){var B=250*1024;var z="atlassian-analytics."+x;var y=z+".lock";var D="null";var A=(window.localStorage[z]||"").length;var C=(window.localStorage[y]||D)!==D;if(C&&A>B){window.localStorage[z]=JSON.stringify([{name:"grow0.event.queue.cleared",time:new Date().valueOf(),properties:{queueSize:A}}]);window.localStorage[y]=D}}["jira","confluence","unknown"].forEach(function(x){try{e(x)}catch(y){}});var q=AJS.$.ajax;var l="atlassian-analytics";var j=typeof AJS.contextPath=="function"?AJS.contextPath():typeof AJS.Confluence!="undefined"?AJS.Confluence.getContextPath():window.contextPath!=null?window.contextPath:"";var p=null;var m=null;var g=null;var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(z){var y=Math.random()*16|0,x=z=="x"?y:(y&3|8);return x.toString(16)});var t=function(){var x="unknown";if(document.body.id=="jira"){x="jira"}else{if(document.body.id=="com-atlassian-confluence"){x="confluence"}}m=l+"."+x;g=m+".lock"};var f=function(){if(store.get(g)){return false}store.set(g,r);return(store.get(g)===r)};var u=function(){store.set(g,null)};var i=function(){var y=[],A,B,x,z;if(AJS.EventQueue.length==0){return}y=store.get(m)||y;for(x=0,z=AJS.EventQueue.length;x<z;++x){B=AJS.EventQueue[x];if(B.name){A={name:B.name,properties:B.properties,time:B.time||0};y.push(A)}}AJS.EventQueue.length=0;store.set(m,y)};var v=0;var a=function(x){return Math.min(5000*Math.pow(2,x),5*60*1000)};var h=function(){var A;function y(){setTimeout(h,a(v=0))}function x(){setTimeout(h,a(++v))}if(!f()){return y()}i();A=store.get(m);if(!A||!A.length){u();return y()}store.remove(m);u();if(!o(A)){return y()}var B=new Date().getTime();for(var z=0;z<A.length;z++){if(A[z].time>0){A[z].timeDelta=A[z].time-B}else{A[z].timeDelta=z-A.length}delete A[z].time}p=q({type:"POST",url:j+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(A),contentType:"application/json",dataType:"json"});p.fail(function(){AJS.EventQueue.concat(A);i();x()});p.done(function(){y()})};var o=function(z){for(var y=z.length-1;y>=0;y--){var B="";var A=z[y];var x=A.properties;if(typeof A.name==="undefined"){B="you must provide a name for the event."}else{if(typeof x!=="undefined"&&x!==null){if(x.constructor!==Object){B="properties must be an object with key value pairs."}else{b(x)}}}if(B!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+B+"\nEvent: "+JSON.stringify(A));z.splice(y,1)}}return z.length};var b=function(z){for(var y in z){if(z.hasOwnProperty(y)){var x=z[y];if(c(x)&&k(x)){}else{if(c(x)&&x.toString){z[y]=x.toString()}else{z[y]=""}}}}};function c(x){return typeof x!=="undefined"&&x!==null}function k(x){return typeof x==="number"||typeof x==="string"||typeof x==="boolean"}var n=function(){if(p&&!(p.state()==="resolved"||p.state()==="rejected")){p.abort()}};AJS.EventQueue=AJS.EventQueue||[];var s=Array.prototype.push;AJS.EventQueue.push=function(x){x.time=new Date().getTime();s.call(AJS.EventQueue,x)};AJS.toInit(function(){t();setTimeout(h,500);w()});d(window).unload(function(){n();i()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(x,y){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:x,properties:y})}};AJS.bind("analytics",function(x,y){AJS.EventQueue.push({name:y.name,properties:y.data})});AJS.bind("analyticsEvent",function(x,y){AJS.EventQueue.push({name:y.name,properties:y.data})});var w=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var y=AJS.$(":contains(Enable Atlassian analytics)");if(y.size()>0){var x=y[y.size()-2];if(x){x.remove()}}}}}}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: 'Other applications', content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){var b=false;a.AdminShortcuts=(function(){var d=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var c=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{renderLoading:function(){var e=AJS.$(navlinks.templates.appswitcher.loading());a.ApplicationHeader.Cog.getDropdown().append(e)},render:function(){if(!AJS.$("#nl-remote-admin-section").length&&!b){a.AdminShortcuts.renderLoading();b=true;d().done(function(f){f=_.reject(f,function(g){return g.local===true});if(f.length){var e=navlinks.templates.adminshortcuts.section({links:f});a.ApplicationHeader.Cog.getDropdown().append(e);c()}}).always(function(){b=false;a.ApplicationHeader.Cog.getDropdown().find(".app-switcher-loading").remove()})}}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts.js' */
AJS.$(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.ApplicationHeader.Cog.getDropdown().on("aui-dropdown2-show",function(){NavLinks.AdminShortcuts.render()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css.js' */
/**
 * Look up addonKey+moduleKey from WRM data, then add Link tag onto page.
 * Browser will request for additional css from AddonStyleServlet
 */
define("ac/confluence/style/link-style-css", [], function () {
    "use strict";

    var cache = {};
    var URI_MAX_LENGTH = 2000;
    var STYLE_KEYS = [
        'com.atlassian.plugins.atlassian-connect-plugin:featured-macro-css-resources.featuredMacroCssData',
        'com.atlassian.plugins.atlassian-connect-plugin:icons-css-resources.iconsCssData',
        'com.atlassian.plugins.atlassian-connect-plugin:blueprint-css-resources.iconsCssData'
        //Add more keys here...
    ];

    function getIconStyleUrl() {
        return AJS.contextPath() + "/plugins/servlet/ac/css-style?";
    }

    function addLinkTag(params) {
        var uri = getIconStyleUrl() + params;
        var linkTag = document.createElement("link");
        linkTag.rel = "stylesheet";
        linkTag.href = uri;
        linkTag.type = "text/css";

        document.head.appendChild(linkTag);
    }

    function appendParam(urlBuffer, paramsString) {
        return urlBuffer + (urlBuffer.length == 0 ? "" : "&") + paramsString;
    }

    return {
        addLinkTags : function() {
            var urlBuffer = "";
            for (var key in STYLE_KEYS) {
                var styleKey = STYLE_KEYS[key];
                if (!cache[styleKey]) {
                    cache[styleKey] = WRM.data.claim(styleKey);
                }
                var addonToModules = cache[styleKey];

                for (var addon in addonToModules) {
                    var modules = addonToModules[addon];
                    var paramsString = addon + "=" + modules.join();
                    if (appendParam(urlBuffer, paramsString).length > (URI_MAX_LENGTH - getIconStyleUrl().length)) {
                        //add on link tag using the current urlBuffer
                        addLinkTag(urlBuffer);
                        //reset urlBuffer
                        urlBuffer = "";
                    }
                    urlBuffer = appendParam(urlBuffer, paramsString);
                }
            }

            if (urlBuffer.length > 0) {
                addLinkTag(urlBuffer);
            }
        }
    };
});







}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css-init.js' */
/**
 * js to execute link-icon-css
 */
require(["ac/confluence/style/link-style-css"], function(linkIconCss) {
    linkIconCss.addLinkTags();
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dialog-options-v5', location = 'v5/js/iframe/host/dialog-options.js' */
(function(){window._AP=window._AP||{};var a;a=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:dialog-options.data");for(var b in a)a.hasOwnProperty(b)&&(window._AP[b]=a[b])})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-core-v5', location = 'v5/js/core/connect-host.js' */
(function(y,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m():"function"===typeof define&&define.amd?define("connectHost",m):y.connectHost=m()})(this,function(){function y(){}function m(){m.init.call(this)}function Aa(b,a,d,c){var e,g;if("function"!==typeof d)throw new TypeError('"listener" argument must be a function');(e=b._events)?(e.newListener&&(b.emit("newListener",a,d.listener?d.listener:d),e=b._events),g=e[a]):(e=b._events=new y,b._eventsCount=0);g?("function"===
typeof g?g=e[a]=c?[d,g]:[g,d]:c?g.unshift(d):g.push(d),g.warned||(d=void 0===b._maxListeners?m.defaultMaxListeners:b._maxListeners)&&0<d&&g.length>d&&(g.warned=!0,d=Error("Possible EventEmitter memory leak detected. "+g.length+" "+a+" listeners added. Use emitter.setMaxListeners() to increase limit"),d.name="MaxListenersExceededWarning",d.emitter=b,d.type=a,d.count=g.length,"function"===typeof console.warn?console.warn(d):console.log(d))):(e[a]=d,++b._eventsCount);return b}function Ba(b,a,d){function c(){b.removeListener(a,
c);e||(e=!0,d.apply(b,arguments))}var e=!1;c.listener=d;return c}function Ca(b){var a=this._events;if(a){b=a[b];if("function"===typeof b)return 1;if(b)return b.length}return 0}function Q(b,a){for(var d=Array(a);a--;)d[a]=b[a];return d}function Da(b){if(!b)throw Error("No selector to escape");return b.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$\x26")}function K(b,a){return a.encode?a.strict?gb(b):encodeURIComponent(b):b}function Ea(){}function Fa(b){try{return decodeURIComponent(b)}catch(a){return String.fromCharCode(65533)}}
function hb(b){var a=4-b.length%4;1===a?b+="\x3d":2===a&&(b+="\x3d\x3d");return ib.prototype.decode(jb(b))}function ja(b){if(null===b||""===b)throw"Invalid JWT: must be neither null nor empty-string.";var a=b.indexOf("."),d=b.indexOf(".",a+1);if(0>a||d<=a)throw'Invalid JWT: must contain 2 period (".") characters.';b=b.substring(a+1,d);if(null===b||""===b)throw"Invalid JWT: encoded claims must be neither null nor empty-string.";b=hb.call(window,b);return JSON.parse(b)}function ka(b){return Z.parse(Z.extract(b)).jwt}
function Ga(b){return{addon_key:b.addon_key,key:b.key,url:b.url,options:b.options}}function aa(b){b=(b=b.attr("class"))?b.match(/ap-plugin-key-([^\s]*)/):null;return Array.isArray(b)?b[1]:!1}function la(b){b=(b=b.attr("class"))?b.match(/ap-module-key-([^\s]*)/):null;return Array.isArray(b)?b[1]:!1}function Ha(b){return aa(b)+"__"+la(b)}function Ia(b,a,d){b+="Modules";if(window._AP&&window._AP[b]&&window._AP[b][a]&&window._AP[b][a][d])return k.extend({},window._AP[b][a][d].options)}function Ja(b,a){var d=
aa(a);a=(a=a.attr("class"))?a.match(/ap-target-key-([^\s]*)/):null;a=Array.isArray(a)?a[1]:!1;return Ia(b,d,a)}function Ka(b){var a=b.attr("href"),d={},c;a||(a=b.find("a").attr("href"));if(a){var e=a.indexOf("#");if(0<=e){b=a.substring(e+1);try{c=JSON.parse(decodeURI(b))}catch(g){console.error("ACJS: cannot decode webitem anchor")}c&&window._AP&&window._AP._convertConnectOptions?d=window._AP._convertConnectOptions(c):console.error("ACJS: cannot convert webitem url to connect iframe options")}else c=
Ha(b),e=b.hasClass("ap-inline-dialog")?"inlineDialog":"dialog",d=Ja(e,b),!d&&window._AP&&window._AP[e+"Options"]&&(d=k.extend({},window._AP[e+"Options"][c])||{}),d||(d={},console.warn("no webitem "+e+"Options for "+c)),d.productContext=d.productContext||{},a=Z.parse(Z.extract(a)),k.extend(d.productContext,a),d={addon_key:aa(b),key:la(b),options:d}}return d}function D(){var b=AJS.LayerManager.global.getTopLayer();if(b&&kb.test(b.attr("id")))return b=AJS.dialog2(b),b._id=b.$el.attr("id").replace("ap-dialog-",
""),b}function La(b){var a=b.find(".header-control-panel");a.length||(a=b.find(".aui-dialog2-footer-actions"));return a}function ba(b,a){return La(a).find(".aui-button").filter(function(){return w.getIdentifier(this)===b})}function lb(b){var a={},d=["closeable","fadeout","delay","duration","id"];"object"===("undefined"===typeof b?"undefined":u(b))&&d.forEach(function(d){d in b&&(a[d]=b[d])});return a}function mb(){h(document).on("aui-message-close",function(b,a){b=a.attr("id").replace("ap-message-",
"");if(G[b]){if(h.isFunction(G[b].onCloseTrigger))G[b].onCloseTrigger();G[b]._destroy()}})}function L(b){return{constructor:function(a,d,c,e){e=k.last(arguments);var g=e._id;"string"!==typeof a&&(a="");"string"!==typeof d&&(d="");"object"!==("undefined"===typeof c?"undefined":u(c))&&(c={});c.id="ap-message-"+g;var l=a,f=d,M=c,r=e,E="AP.messages."+b;console.warn("DEPRECATED API - AP.messages."+b+" has been deprecated since ACJS 5.0 and will be removed in a future release. Use AP.flag.create instead.");
ca.trackDeprecatedMethodUsed(E,r._context.extension);if(r=p.getFrameworkAdaptor().getProviderByModuleName("messages"))E=r[b],E||(r[b]=r.generic),E(l,f,M);else{Ma||(mb(),Ma=!0);r=h("#ac-message-container");1>r.length&&(r=h('\x3cdiv id\x3d"ac-message-container" /\x3e').appendTo("body"));M=lb(M);h.extend(M,{title:l,body:AJS.escapeHtml(f)});if(0>Na.indexOf(b))throw"Invalid message type. Must be: "+Na.join(", ");Oa.test(M.id)&&(AJS.messages[b](r,M),r.css("margin-left","-"+r.innerWidth()/2+"px"))}G[g]=
this}}}function nb(){Pa||(h(document).on("aui-flag-close",function(b){b=ma.cleanKey(b.target.id);R.closed(b)}),h(document).on("click",".ac-flag-actions",function(b){var a=h(b.target);b=a.data("key");a=a.data("flag_id");R.actionInvoked(b,a)}),Pa=!0)}function Qa(b,a,d){if(S[b]){var c=S[b].extension;d=d||{};d.flagIdentifier=b;v.broadcast(a,{extension_id:c.extension_id},d)}}function Ra(){window.removeEventListener("scroll",Sa);da=na=void 0}function Sa(){var b=document.documentElement.scrollHeight,a=window.innerHeight,
d=.1*b;window.pageYOffset<=d?Ta("nearTop"):a+window.pageYOffset+d>=b?Ta("nearBottom"):da=void 0}function Ta(b){da!==b&&(v.broadcast("scroll."+b,{id:na},{}),da=b)}function ob(b){return b.map(function(a){if(a.list&&Array.isArray(a.list)){var d={heading:a.heading};d.items=a.list.map(function(d){var a={};if("string"===typeof d)a.content=d;else if(d.text&&"string"===typeof d.text)a.content=d.text,"boolean"===typeof d.disabled&&(a.disabled=d.disabled),"undefined"!==typeof d.itemId&&(a.itemId=d.itemId);
else throw Error("Unknown dropdown list item format.");return a});return d}})}y.prototype=Object.create(null);m.EventEmitter=m;m.usingDomains=!1;m.prototype.domain=void 0;m.prototype._events=void 0;m.prototype._maxListeners=void 0;m.defaultMaxListeners=10;m.init=function(){this.domain=null;!m.usingDomains||!(void 0).active||this instanceof(void 0).Domain||(this.domain=(void 0).active);this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new y,this._eventsCount=0);this._maxListeners=
this._maxListeners||void 0};m.prototype.setMaxListeners=function(b){if("number"!==typeof b||0>b||isNaN(b))throw new TypeError('"n" argument must be a positive number');this._maxListeners=b;return this};m.prototype.getMaxListeners=function(){return void 0===this._maxListeners?m.defaultMaxListeners:this._maxListeners};m.prototype.emit=function(b){var a,d,c,e,g;e="error"===b;if(a=this._events)e=e&&null==a.error;else if(!e)return!1;d=this.domain;if(e){a=arguments[1];if(d)a||(a=Error('Uncaught, unspecified "error" event')),
a.domainEmitter=this,a.domain=d,a.domainThrown=!1,d.emit("error",a);else{if(a instanceof Error)throw a;d=Error('Uncaught, unspecified "error" event. ('+a+")");d.context=a;throw d;}return!1}d=a[b];if(!d)return!1;a="function"===typeof d;c=arguments.length;switch(c){case 1:if(a)d.call(this);else for(a=d.length,d=Q(d,a),e=0;e<a;++e)d[e].call(this);break;case 2:e=arguments[1];if(a)d.call(this,e);else for(a=d.length,d=Q(d,a),c=0;c<a;++c)d[c].call(this,e);break;case 3:e=arguments[1];c=arguments[2];if(a)d.call(this,
e,c);else for(a=d.length,d=Q(d,a),g=0;g<a;++g)d[g].call(this,e,c);break;case 4:e=arguments[1];c=arguments[2];g=arguments[3];if(a)d.call(this,e,c,g);else{a=d.length;d=Q(d,a);for(var l=0;l<a;++l)d[l].call(this,e,c,g)}break;default:e=Array(c-1);for(g=1;g<c;g++)e[g-1]=arguments[g];if(a)d.apply(this,e);else for(a=d.length,d=Q(d,a),c=0;c<a;++c)d[c].apply(this,e)}return!0};m.prototype.addListener=function(b,a){return Aa(this,b,a,!1)};m.prototype.on=m.prototype.addListener;m.prototype.prependListener=function(b,
a){return Aa(this,b,a,!0)};m.prototype.once=function(b,a){if("function"!==typeof a)throw new TypeError('"listener" argument must be a function');this.on(b,Ba(this,b,a));return this};m.prototype.prependOnceListener=function(b,a){if("function"!==typeof a)throw new TypeError('"listener" argument must be a function');this.prependListener(b,Ba(this,b,a));return this};m.prototype.removeListener=function(b,a){var d,c,e,g,l;if("function"!==typeof a)throw new TypeError('"listener" argument must be a function');
c=this._events;if(!c)return this;d=c[b];if(!d)return this;if(d===a||d.listener&&d.listener===a)0===--this._eventsCount?this._events=new y:(delete c[b],c.removeListener&&this.emit("removeListener",b,d.listener||a));else if("function"!==typeof d){e=-1;for(g=d.length;0<g--;)if(d[g]===a||d[g].listener&&d[g].listener===a){l=d[g].listener;e=g;break}if(0>e)return this;if(1===d.length){d[0]=void 0;if(0===--this._eventsCount)return this._events=new y,this;delete c[b]}else{g=e+1;for(var f=d.length;g<f;e+=1,
g+=1)d[e]=d[g];d.pop()}c.removeListener&&this.emit("removeListener",b,l||a)}return this};m.prototype.removeAllListeners=function(b){var a;a=this._events;if(!a)return this;if(!a.removeListener)return 0===arguments.length?(this._events=new y,this._eventsCount=0):a[b]&&(0===--this._eventsCount?this._events=new y:delete a[b]),this;if(0===arguments.length){a=Object.keys(a);for(var d=0,c;d<a.length;++d)c=a[d],"removeListener"!==c&&this.removeAllListeners(c);this.removeAllListeners("removeListener");this._events=
new y;this._eventsCount=0;return this}a=a[b];if("function"===typeof a)this.removeListener(b,a);else if(a){do this.removeListener(b,a[a.length-1]);while(a[0])}return this};m.prototype.listeners=function(b){var a=this._events;if(a)if(b=a[b])if("function"===typeof b)b=[b.listener||b];else{for(var a=Array(b.length),d=0;d<a.length;++d)a[d]=b[d].listener||b[d];b=a}else b=[];else b=[];return b};m.listenerCount=function(b,a){return"function"===typeof b.listenerCount?b.listenerCount(a):Ca.call(b,a)};m.prototype.listenerCount=
Ca;m.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]};var u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"===typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},n=function(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");},Ua=function(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+
typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)},Va=function(b,a){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?b:a},f=new (function(b){function a(){n(this,a);var d=Va(this,b.call(this));d.setMaxListeners(20);return d}Ua(a,b);a.prototype.dispatch=function(d){for(var a=
arguments.length,b=Array(1<a?a-1:0),g=1;g<a;g++)b[g-1]=arguments[g];this.emit.apply(this,["before:"+d].concat(b));this.emit.apply(this,arguments);this.emit.apply(this,["after:"+d].concat(b))};a.prototype.registerOnce=function(d,a){if("string"===typeof d)this.once(d,a);else throw"ACJS: event name must be string";};a.prototype.register=function(d,a){if("string"===typeof d)this.on(d,a);else throw"ACJS: event name must be string";};a.prototype.unregister=function(d,a){if("string"===typeof d)this.removeListener(d,
a);else throw"ACJS: event name must be string";};return a}(m)),h=window.AJS&&window.AJS.$||function(){},A=new (function(){function b(){n(this,b);this._addons={}}b.prototype._track=function(a,d){var c=window;a="connect.addon."+a;d=d||{};d.version=c._AP&&c._AP.version?c._AP.version:void 0;d.userAgent=c.navigator.userAgent;if(!c.AJS)return!1;if(c.AJS.Analytics)c.AJS.Analytics.triggerPrivacyPolicySafeEvent(a,d);else if(c.AJS.trigger)AJS.trigger("analyticsEvent",{name:a,data:d});else return!1;return!0};
b.prototype._time=function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()};b.prototype.trackLoadingStarted=function(a){this._addons&&a&&a.id?(a.startLoading=this._time(),this._addons[a.id]=a):console.error("ACJS: cannot track loading analytics",this._addons,a)};b.prototype.trackLoadingEnded=function(a){if(this._addons&&a&&this._addons[a.id]){var d=a.url,d=void 0!==d&&-1===d.indexOf("xdm_e\x3d"),c=this._time()-this._addons[a.id].startLoading,b=this.getIframeLoadApdex(c);
this._track("iframe.performance.load",{addonKey:a.addon_key,moduleKey:a.key,iframeLoadMillis:c,iframeLoadApdex:b,iframeIsCacheable:d,value:2E4<c?"x":Math.ceil(c/100)})}else console.error("ACJS: cannot track loading end analytics",this._addons,a)};b.prototype.getIframeLoadApdex=function(a){return 300>=a?1:1200>=a?.5:0};b.prototype.trackLoadingTimeout=function(a){this._track("iframe.performance.timeout",{addonKey:a.addon_key,moduleKey:a.key});this.trackLoadingEnded(a)};b.prototype.trackLoadingCancel=
function(a){this._track("iframe.performance.cancel",{addonKey:a.addon_key,moduleKey:a.key})};b.prototype.trackUseOfDeprecatedMethod=function(a,d){this._track("jsapi.deprecated",{addonKey:d.addon_key,moduleKey:d.key,methodUsed:a})};b.prototype.trackMultipleDialogOpening=function(a,d){this._track("jsapi.dialog.multiple",{addonKey:d.addon_key,moduleKey:d.key,dialogType:a})};b.prototype.dispatch=function(a,d){this._track(a,d)};return b}());h.fn&&f.register("iframe-create",function(b){A.trackLoadingStarted(b.extension)});
f.register("iframe-bridge-start",function(b){A.trackLoadingStarted(b.extension)});f.register("iframe-bridge-established",function(b){A.trackLoadingEnded(b.extension)});f.register("iframe-bridge-timeout",function(b){A.trackLoadingTimeout(b.extension)});f.register("iframe-bridge-cancelled",function(b){A.trackLoadingCancel(b.extension)});f.register("analytics-deprecated-method-used",function(b){A.trackUseOfDeprecatedMethod(b.methodUsed,b.extension)});f.register("iframe-destroyed",function(b){delete A._addons[b.extension.extension_id]});
var Wa={timeout:function(b,a){f.dispatch("iframe-bridge-timeout",{$el:b,extension:a})},cancelled:function(b,a){f.dispatch("iframe-bridge-cancelled",{$el:b,extension:a})}},oa={loading:'\x3cdiv class\x3d"ap-loading"\x3e\x3cdiv class\x3d"small-spinner"\x3e\x3c/div\x3eLoading app...\x3c/div\x3e',"load-timeout":'\x3cdiv class\x3d"ap-load-timeout"\x3e\x3cdiv class\x3d"small-spinner"\x3e\x3c/div\x3eApp is not responding. Wait or \x3ca href\x3d"#" class\x3d"ap-btn-cancel"\x3ecancel\x3c/a\x3e?\x3c/div\x3e',
"load-error":"App failed to load."},T=new (function(){function b(){n(this,b);this._stateRegistry={}}b.prototype._loadingContainer=function(a){return a.find(".ap-status-indicator")};b.prototype.render=function(){var a=document.createElement("div");a.classList.add("ap-status-indicator");a.innerHTML=oa.loading;a=h(a);this._startSpinner(a);return a};b.prototype._startSpinner=function(a){setTimeout(function(){var d=a.find(".small-spinner");d.length&&d.spin&&d.spin({lines:12,length:3,width:2,radius:3,trail:60,
speed:1.5,zIndex:1})},10)};b.prototype.hide=function(a,d){clearTimeout(this._stateRegistry[d]);delete this._stateRegistry[d];this._loadingContainer(a)[0].style.display="none"};b.prototype.cancelled=function(a,d){d=oa["load-error"];this._loadingContainer(a).empty().text(d)};b.prototype._setupTimeout=function(a,d){this._stateRegistry[d.id]=setTimeout(function(){Wa.timeout(a,d)},12E3)};b.prototype.timeout=function(a,d){var c=h(oa["load-timeout"]),b=this._loadingContainer(a);b.empty().append(c);this._startSpinner(b);
h("a.ap-btn-cancel",b).click(function(){Wa.cancelled(a,d)});delete this._stateRegistry[d];return b};return b}());f.register("iframe-create",function(b){b.extension.options.noDom||T._setupTimeout(b.$el.parents(".ap-iframe-container"),b.extension)});f.register("iframe-bridge-established",function(b){b.extension.options.noDom||T.hide(b.$el.parents(".ap-iframe-container"),b.extension.id)});f.register("iframe-bridge-timeout",function(b){b.extension.options.noDom||T.timeout(b.$el,b.extension.id)});f.register("iframe-bridge-cancelled",
function(b){b.extension.options.noDom||T.cancelled(b.$el,b.extension.id)});for(var Xa=Function.prototype.bind,t={locationOrigin:function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},randomString:function(){return Math.floor(1E9*Math.random()).toString(16)},isString:function(b){return"string"===typeof b||b instanceof String},argumentsToArray:function(b){return Array.prototype.slice.call(b)},
argumentNames:function(b){return b.toString().replace(/((\/\/.*$)|(\/\*[^]*?\*\/))/mg,"").replace(/[^(]+\(([^)]*)[^]+/,"$1").match(/([^\s,]+)/g)||[]},hasCallback:function(b){var a=b.length;return 0<a&&"function"===typeof b[a-1]},error:function(b){if(window.console&&window.console.error){var a=[];"string"===typeof b?(a.push("[Simple-XDM] "+b),a=a.concat(Array.prototype.slice.call(arguments,1))):(a.push("[Simple-XDM] "),a=a.concat(Array.prototype.slice.call(arguments)));window.console.error.apply(null,
a)}},warn:function(b){window.console&&console.warn("[Simple-XDM] "+b)},log:function(b){window.console&&window.console.log("[Simple-XDM] "+b)},_bind:function(b,a){return Xa&&a.bind===Xa?a.bind(b):function(){return a.apply(b,arguments)}},throttle:function(b,a,d){var c=0;return function(){var e=Date.now();e-c>a&&(c=e,b.apply(d,arguments))}},each:function(b,a){var d,c;if(b)if(d=b.length,null!=d&&"function"!==typeof b)for(c=0;c<d&&!1!==a.call(b[c],c,b[c]);)c+=1;else for(c in b)if(b.hasOwnProperty(c)&&
!1===a.call(b[c],c,b[c]))break},extend:function(b){var a=arguments;[].slice.call(a,1,a.length).forEach(function(d){"object"===("undefined"===typeof d?"undefined":u(d))&&Object.getOwnPropertyNames(d).forEach(function(a){b[a]=d[a]})});return b},sanitizeStructuredClone:function(b){function a(b){if("function"===typeof b)return e("A function was detected and removed from the message."),null;if(c.some(function(d){return b instanceof d?(e(d.name+" object was detected and removed from the message."),!0):
!1}))return{};if(b&&"object"===("undefined"===typeof b?"undefined":u(b))&&d.every(function(d){return!(b instanceof d)})){var l=void 0;if(Array.isArray(b))l=b.map(function(d){return a(d)});else{if(-1<g.indexOf(b))return e("A circular reference was detected and removed from the message."),null;g.push(b);var l={},f;for(f in b)if(b.hasOwnProperty(f)){var h=a(b[f]);null!==h&&(l[f]=h)}g.pop()}return l}return b}var d=[Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer],c=[Error,Node],e=t.warn,g=[];
return a(b)},getOrigin:function(b,a){if("function"===typeof URL)try{return(new URL(b,a)).origin}catch(e){}var d=document.implementation.createHTMLDocument("");if(a){var c=d.createElement("base");c.href=a;d.head.appendChild(c)}a=d.createElement("a");a.href=b;d.body.appendChild(a);d=a.protocol+"//"+a.hostname;b.match(/\/\/[^/]+:[0-9]+\//)&&(d+=a.port?":"+a.port:"");return d}},pb=function(b){function a(d){n(this,a);d=d||{};var c=Va(this,b.call(this,d));c._registeredExtensions=d.extensions||{};c._registeredAPIModules=
{};c._registeredAPIModules._globals={};c._pendingCallbacks={};c._keycodeCallbacks={};c._clickHandler=null;c._pendingEvents={};c._messageHandlers={init:c._handleInit,req:c._handleRequest,resp:c._handleResponse,broadcast:c._handleBroadcast,event_query:c._handleEventQuery,key_triggered:c._handleKeyTriggered,addon_clicked:c._handleAddonClick,get_host_offset:c._getHostOffset,unload:c._handleUnload,sub:c._handleSubInit};return c}Ua(a,b);a.prototype._padUndefinedArguments=function(d,a){return d.length>=
a?d:d.concat(Array(a-d.length))};a.prototype._verifyAPI=function(d,a){function c(d,a){Object.getOwnPropertyNames(a).forEach(function(b){"object"===u(a[b])&&d[b]?c(d[b],a[b]):"parent"===a[b]&&d[b]&&(f=!0)})}var b=d.data.targets;if(b){var l=this.getApiSpec(),f=!1;c(l,b);d.source.postMessage({type:"api_tamper",tampered:f},a.extension.url)}};a.prototype._handleInit=function(d,a){this._registeredExtensions[a.extension_id].source=d.source;a.initCallback&&(a.initCallback(d.data.eid),delete a.initCallback);
d.data.targets&&this._verifyAPI(d,a)};a.prototype._handleSubInit=function(a,c){this.registerExtension(a.data.ext.id,{extension:a.data.ext})};a.prototype._getHostOffset=function(a,c){var d=a.source,b=null;c=c||window;c===c.top&&"function"===typeof c.getHostOffsetFunctionOverride&&(b=c.getHostOffsetFunctionOverride(d));if("number"!==typeof b)for(b=0;!this._hasSameOrigin(d);)b++,d=d.parent;a.source.postMessage({hostFrameOffset:b},a.origin)};a.prototype._hasSameOrigin=function(a){if(a===a.top)return!0;
try{var d="test_var_"+Math.random().toString(16).substr(2);a[d]=!0;return a[d]}catch(e){}return!1};a.prototype._handleResponse=function(a){a=a.data;var d=this._pendingCallbacks[a.mid];d&&(delete this._pendingCallbacks[a.mid],d.apply(window,a.args))};a.prototype.registerRequestNotifier=function(a){this._registeredRequestNotifier=a};a.prototype._handleRequest=function(a,c){function d(){var d=t.sanitizeStructuredClone(t.argumentsToArray(arguments));a.source.postMessage({mid:a.data.mid,type:"resp",forPlugin:!0,
args:d},c.extension.url)}var b=a.data,l=this._registeredAPIModules[b.mod],f=this.getRegisteredExtensions(c.extension)[0];if(l){var h=b.fn;if(b._cls){var k=l[b._cls],E=b.mod+"-"+b._cls+"-";d._id=b._id;"constructor"===h?(k._construct||(k.constructor.prototype._destroy=function(){delete this._context._proxies[E+this._id]},k._construct=function(){for(var a=arguments.length,d=Array(a),c=0;c<a;c++)d[c]=arguments[c];a=new (Function.prototype.bind.apply(k.constructor,[null].concat(d)));d=d[d.length-1];a._id=
d._id;a._context=d._context;return a._context._proxies[E+a._id]=a}),l=k,h="_construct"):l=f._proxies[E+b._id]}var m=l[h];if(m){var n=b.args,p=m.length-1;"_construct"===h&&(p=l.constructor.length-1);d._context=f;n=this._padUndefinedArguments(n,p);n.push(d);l=m.apply(l,n);m.returnsPromise&&(l&&l instanceof Promise?l.then(function(a){d(void 0,a)}).catch(function(a){a=a instanceof Error?a.message:a;d(a)}):d("Defined module method did not return a promise."));this._registeredRequestNotifier&&this._registeredRequestNotifier.call(null,
{module:b.mod,fn:b.fn,type:b.type,addon_key:c.extension.addon_key,key:c.extension.key,extension_id:c.extension_id})}}};a.prototype._handleBroadcast=function(a,c){a=a.data;this.dispatch(a.etyp,function(a){return a.extension.addon_key===c.extension.addon_key&&a.extension_id!==c.extension_id},a.evnt,null,null)};a.prototype._handleKeyTriggered=function(a,c){var d=a.data;a=this._keycodeKey(d.keycode,d.modifiers,c.extension_id);(a=this._keycodeCallbacks[a])&&a.forEach(function(a){a.call(null,{addon_key:c.extension.addon_key,
key:c.extension.key,extension_id:c.extension_id,keycode:d.keycode,modifiers:d.modifiers})},this)};a.prototype.defineAPIModule=function(a,c){c=c||"_globals";this._registeredAPIModules[c]=t.extend({},this._registeredAPIModules[c]||{},a);return this._registeredAPIModules};a.prototype._pendingEventKey=function(a,c){var d=a.addon_key||"global";a.key&&(d=d+"@@"+a.key);return d+"@@"+c};a.prototype.queueEvent=function(a,c,b,g){if(this._findRegistrations(c).some(function(a){return void 0!==a.registered_events},
this))this.dispatch(a,c,b,g);else{this._cleanupInvalidEvents();var d=(new Date).getTime();this._pendingEvents[this._pendingEventKey(c,d)]={type:a,targetSpec:c,event:b,callback:g,time:d,uid:t.randomString()}}};a.prototype._cleanupInvalidEvents=function(){var a=this,c=(new Date).getTime();Object.keys(this._pendingEvents).forEach(function(d){3E4>=c-a._pendingEvents[d].time||delete a._pendingEvents[d]})};a.prototype._handleEventQuery=function(a,c){var d=this,b={},l=(new Date).getTime();Object.keys(this._pendingEvents).forEach(function(e){var g=
d._pendingEvents[e],f=3E4>=l-g.time,h=!g.targetSpec||0!==d._findRegistrations(g.targetSpec).length;h&&g.targetSpec.key&&(h=g.targetSpec.addon_key===c.extension.addon_key&&g.targetSpec.key===c.extension.key);f&&h?(b[e]=g,g.targetSpec=g.targetSpec||{},d.dispatch(g.type,g.targetSpec,g.event,g.callback,a.source)):f||delete d._pendingEvents[e]});this._registeredExtensions[c.extension_id].registered_events=a.data.args;return b};a.prototype._handleUnload=function(a,c){c&&(c.extension_id&&this._registeredExtensions[c.extension_id]&&
delete this._registeredExtensions[c.extension_id].source,c.unloadCallback&&c.unloadCallback(a.data.eid))};a.prototype.dispatch=function(a,c,b,g,l){function d(d,c){if(d.source&&d.source.postMessage){var b;g&&(b=t.randomString(),this._pendingCallbacks[b]=g);d.source.postMessage({type:"evt",mid:b,etyp:a,evnt:c},d.extension.url)}}this._findRegistrations(c||{}).forEach(function(a){l&&!a.source&&(a.source=l);a.source&&t._bind(this,d)(a,b)},this)};a.prototype._findRegistrations=function(a){var d=this;if(0===
this._registeredExtensions.length)return t.error("no registered extensions",this._registeredExtensions),[];var b=Object.getOwnPropertyNames(a),g=Object.getOwnPropertyNames(this._registeredExtensions).map(function(a){return d._registeredExtensions[a]});return a instanceof Function?g.filter(a):g.filter(function(d){return b.every(function(c){return d.extension[c]===a[c]})})};a.prototype.registerExtension=function(a,c){c._proxies={};c.extension_id=a;this._registeredExtensions[a]=c};a.prototype._keycodeKey=
function(a,c,b){var d=a;c&&("string"===typeof c&&(c=[c]),c.sort(),c.forEach(function(a){d+="$$"+a},this));return d+"__"+b};a.prototype.registerKeyListener=function(a,c,b,g){"string"===typeof b&&(b=[b]);var d=this._registeredExtensions[a];a=this._keycodeKey(c,b,a);this._keycodeCallbacks[a]||(this._keycodeCallbacks[a]=[],d.source.postMessage({type:"key_listen",keycode:c,modifiers:b,action:"add"},d.extension.url));this._keycodeCallbacks[a].push(g)};a.prototype.unregisterKeyListener=function(a,c,b,g){var d=
this._keycodeKey(c,b,a),e=this._keycodeCallbacks[d];a=this._registeredExtensions[a];e&&(g?(g=e.indexOf(g),this._keycodeCallbacks[d].splice(g,1)):delete this._keycodeCallbacks[d],a.source&&a.source.postMessage&&a.source.postMessage({type:"key_listen",keycode:c,modifiers:b,action:"remove"},a.extension.url))};a.prototype.registerClickHandler=function(a){if("function"!==typeof a)throw Error("callback must be a function");if(null!==this._clickHandler)throw Error("ClickHandler already registered");this._clickHandler=
a};a.prototype._handleAddonClick=function(a,b){"function"===typeof this._clickHandler&&this._clickHandler({addon_key:b.extension.addon_key,key:b.extension.key,extension_id:b.extension_id})};a.prototype.unregisterClickHandler=function(){this._clickHandler=null};a.prototype.getApiSpec=function(){function a(a){function d(a){return Object.getOwnPropertyNames(a).reduce(function(b,c){var e=a[c];switch("undefined"===typeof e?"undefined":u(e)){case "function":b[c]={args:t.argumentNames(e),returnsPromise:e.returnsPromise||
!1};break;case "object":e.hasOwnProperty("constructor")&&(b[c]=d(e))}return b},{})}var c=b._registeredAPIModules[a];if(!c)throw Error("unregistered API module: "+a);return d(c)}var b=this;return Object.getOwnPropertyNames(this._registeredAPIModules).reduce(function(d,b){d[b]=a(b);return d},{})};a.prototype._originEqual=function(a,b){function d(a){return"string"===typeof a&&0<a.length}var c=t.getOrigin(a);return d(a)&&d(b)&&d(c)?b===c:!1};a.prototype._checkOrigin=function(a,b){var d=["init"],c=b&&
!b.source&&-1<d.indexOf(a.data.type),d=b&&a.source===b.source;b=b&&this._originEqual(b.extension.url,a.origin)&&(c||d);"get_host_offset"===a.data.type&&window===window.top&&(b=!0);"unload"!==a.data.type||!d&&void 0!==a.source||(b=!0);b||t.log("Failed to validate origin: "+a.origin);return b};a.prototype.getRegisteredExtensions=function(a){return a?this._findRegistrations(a):this._registeredExtensions};a.prototype.unregisterExtension=function(a){a=this._findRegistrations(a);0!==a.length&&a.forEach(function(a){var d=
this;Object.keys(this._pendingEvents).forEach(function(b){var c=d._pendingEvents[b].targetSpec||{};c.addon_key===a.extension.addon_key&&c.key===a.extension.key&&delete d._pendingEvents[b]});delete this._registeredExtensions[a.extension_id]},this)};return a}(function(){function b(a){n(this,b);this._registerListener((a||{}).listenOn)}b.prototype._registerListener=function(a){a&&a.addEventListener||(a=window);a.addEventListener("message",t._bind(this,this._receiveMessage),!1)};b.prototype._receiveMessage=
function(a){var d=this._messageHandlers[a.data.type],b=a.data.eid,e=void 0;b&&this._registeredExtensions&&(e=this._registeredExtensions[b]);if(!d||!this._checkOrigin(a,e))return!1;d.call(this,a,e)};return b}()),q=new (function(){function b(){n(this,b);this._xdm=new pb}b.prototype.dispatch=function(a,d,b,e){this._xdm.queueEvent(a,d,b,e);return this.getExtensions(d)};b.prototype.broadcast=function(a,d,b){this._xdm.dispatch(a,d,b,null,null);return this.getExtensions(d)};b.prototype._createId=function(a){if(!a.addon_key||
!a.key)throw Error("Extensions require addon_key and key");return a.addon_key+"__"+a.key+"__"+t.randomString()};b.prototype.create=function(a,d,b){d=this.registerExtension(a,d,b);b=a.options||{};b={extension_id:d,api:this._xdm.getApiSpec(),origin:t.locationOrigin(),options:b};return{id:d,name:JSON.stringify(b),src:a.url}};b.prototype.registerRequestNotifier=function(a){this._xdm.registerRequestNotifier(a)};b.prototype.registerExtension=function(a,d,b){var c=this._createId(a);this._xdm.registerExtension(c,
{extension:a,initCallback:d,unloadCallback:b});return c};b.prototype.registerKeyListener=function(a,d,b,e){this._xdm.registerKeyListener(a,d,b,e)};b.prototype.unregisterKeyListener=function(a,d,b,e){this._xdm.unregisterKeyListener(a,d,b,e)};b.prototype.registerClickHandler=function(a){this._xdm.registerClickHandler(a)};b.prototype.unregisterClickHandler=function(){this._xdm.unregisterClickHandler()};b.prototype.defineModule=function(a,d,b){this._xdm.defineAPIModule(d,a,b)};b.prototype.defineGlobals=
function(a){this._xdm.defineAPIModule(a)};b.prototype.getExtensions=function(a){return this._xdm.getRegisteredExtensions(a)};b.prototype.unregisterExtension=function(a){return this._xdm.unregisterExtension(a)};b.prototype.returnsPromise=function(a){a.returnsPromise=!0};return b}()),v={broadcast:function(b,a,d){q.dispatch(b,a,d);f.dispatch("event-dispatch",{type:b,targetSpec:a,event:d})},broadcastPublic:function(b,a,d){f.dispatch("event-public-dispatch",{type:b,event:a,sender:d});q.dispatch(b,{},{sender:{addonKey:d.addon_key,
key:d.key,options:t.sanitizeStructuredClone(d.options)},event:a})}},Ya=Object.getOwnPropertySymbols,qb=Object.prototype.hasOwnProperty,rb=Object.prototype.propertyIsEnumerable,pa=function(){try{if(!Object.assign)return!1;var b=new String("abc");b[5]="de";if("5"===Object.getOwnPropertyNames(b)[0])return!1;for(var a={},b=0;10>b;b++)a["_"+String.fromCharCode(b)]=b;if("0123456789"!==Object.getOwnPropertyNames(a).map(function(d){return a[d]}).join(""))return!1;var d={};"abcdefghijklmnopqrst".split("").forEach(function(a){d[a]=
a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},d)).join("")?!1:!0}catch(c){return!1}}()?Object.assign:function(b,a){var d,c;if(null===b||void 0===b)throw new TypeError("Object.assign cannot be called with null or undefined");c=Object(b);for(var e,g=1;g<arguments.length;g++){d=Object(arguments[g]);for(var l in d)qb.call(d,l)&&(c[l]=d[l]);if(Ya){e=Ya(d);for(var f=0;f<e.length;f++)rb.call(d,e[f])&&(c[e[f]]=d[e[f]])}}return c},k={escapeSelector:Da,stringToDimension:function(b){var a,
d="px";"string"===typeof b&&(a=b.indexOf("%")===b.length-1,b=parseInt(b,10),a&&(d="%"));if(!isNaN(b))return b+d},getIframeByExtensionId:function(b){return h("iframe#"+Da(b))},first:function(b,a){return a?b.slice(0,a):b[0]},last:function(b){return b[b.length-1]},pick:function(b,a){return"object"!==("undefined"===typeof b?"undefined":u(b))?{}:Object.keys(b).filter(function(d){return 0<=a.indexOf(d)}).reduce(function(a,c){var d;return pa(a,(d={},d[c]=b[c],d))},{})},debounce:function(b,a){var d;return function(){var c=
this,e=[].slice.call(arguments);d&&clearTimeout(d);d=setTimeout(function(){d=null;b.apply(c,e)},a||50)}},extend:pa},U={open:function(b,a){f.dispatch("dialog-extension-open",{extension:b,options:a})},close:function(){f.dispatch("dialog-close-active",{})},addUserButton:function(b,a){f.dispatch("dialog-button-add",{button:{text:b.text,identifier:b.identifier,data:{userButton:!0}},extension:a})}},z={close:function(b){f.dispatch("dialog-close",{dialog:b.dialog,extension:b.extension,customData:b.customData})},
closeActive:function(b){f.dispatch("dialog-close-active",b)},clickButton:function(b,a,d){f.dispatch("dialog-button-click",{identifier:b,$el:a,extension:d})},toggleButton:function(b){f.dispatch("dialog-button-toggle",b)},toggleButtonVisibility:function(b){f.dispatch("dialog-button-toggle-visibility",b)}},H={registerKeyEvent:function(b){q.registerKeyListener(b.extension_id,b.key,b.modifiers,b.callback);f.dispatch("dom-event-register",b)},unregisterKeyEvent:function(b){q.unregisterKeyListener(b.extension_id,
b.key,b.modifiers,b.callback);f.dispatch("dom-event-unregister",b)},registerWindowKeyEvent:function(b){window.addEventListener("keydown",function(a){a.keyCode===b.keyCode&&b.callback()})},registerClickHandler:function(b){q.registerClickHandler(function(a){(a=document.getElementById(a.extension_id))&&b(a)})},unregisterClickHandler:function(){q.unregisterClickHandler()}},Za=new (function(){function b(){n(this,b)}b.prototype.randomIdentifier=function(){return Math.random().toString(16).substring(7)};
return b}()),F=new (function(){function b(){n(this,b)}b.prototype._maxDimension=function(a,d){a=k.stringToDimension(a);var b=parseInt(a,10);d=parseInt(d,10);return-1<a.indexOf("%")&&100<=b||b>d?"100%":a};b.prototype._closeOnEscape=function(a){return!1===a.closeOnEscape?!1:!0};b.prototype._size=function(a){var d=a.size;"x-large"===a.size&&(d="xlarge");"maximum"!==a.size&&"100%"===a.width&&"100%"===a.height&&(d="fullscreen");return d};b.prototype._header=function(a){var d="";switch("undefined"===typeof a?
"undefined":u(a)){case "string":d=a;break;case "object":d=a.value}return d};b.prototype._hint=function(a){return"string"===typeof a?a:""};b.prototype._chrome=function(a){var d=!1;"boolean"===typeof a.chrome&&(d=a.chrome);"fullscreen"===a.size&&(d=!0);"maximum"===a.size&&(d=!1);return d};b.prototype._width=function(a){if(!a.size)return a.width?this._maxDimension(a.width,h(window).width()):"50%"};b.prototype._height=function(a){if(!a.size)return a.height?this._maxDimension(a.height,h(window).height()):
"50%"};b.prototype._actions=function(a){var d=[];a=a||{};a.actions||(d=[{name:"submit",identifier:"submit",text:a.submitText||"Submit",type:"primary",disabled:!0},{name:"cancel",identifier:"cancel",text:a.cancelText||"Cancel",type:"link",immutable:!0}]);a.buttons&&(d=d.concat(this._buttons(a)));return d};b.prototype._id=function(a){"string"!==typeof a&&(a=Math.random().toString(36).substring(2,8));return a};b.prototype._buttons=function(a){var d=[];a.buttons&&Array.isArray(a.buttons)&&a.buttons.forEach(function(a){var b,
c,l=!1;a.text&&"string"===typeof a.text&&(b=a.text);c=a.identifier&&"string"===typeof a.identifier?a.identifier:Za.randomIdentifier();a.disabled&&!0===a.disabled&&(l=!0);d.push({text:b,identifier:c,type:"secondary",custom:!0,disabled:l})});return d};b.prototype._onHide=function(a){return"function"===typeof a.onHide?a.onHide:function(){}};b.prototype.sanitizeOptions=function(a){a=a||{};a={chrome:this._chrome(a),header:this._header(a.header),hint:this._hint(a.hint),width:this._width(a),height:this._height(a),
$content:a.$content,extension:a.extension,actions:this._actions(a),id:this._id(a.id),size:a.size,closeOnEscape:this._closeOnEscape(a),onHide:this._onHide(a)};a.size=this._size(a);return a};b.prototype.moduleOptionsFromGlobal=function(a,d){var b={chrome:!0};return window._AP&&window._AP.dialogModules&&window._AP.dialogModules[a]&&window._AP.dialogModules[a][d]?k.extend({},b,window._AP.dialogModules[a][d].options):!1};b.prototype.trackMultipleDialogOpening=function(a,d){d=this._size(d);h(".ap-aui-dialog2:visible").length&&
(d=h("#macro-browser-dialog").length||AJS.Confluence&&AJS.Confluence.Editor&&AJS.Confluence.Editor.currentEditMode?"fullscreen"===d?"connect-macro-multiple-fullscreen":"connect-macro-multiple":"connect-multiple",A.trackMultipleDialogOpening(d,a))};b.prototype.assertActiveDialogOrThrow=function(a,d){if(!a.isActiveDialog(d))throw Error("Failed to find an active dialog for: "+d);};return b}()),ea={notifyIframeCreated:function(b,a){f.dispatch("iframe-create",{$el:b,extension:a})},notifyBridgeEstablished:function(b,
a){f.dispatch("iframe-bridge-established",{$el:b,extension:a})},notifyIframeDestroyed:function(b){"string"===typeof b&&(b={id:b});q.getExtensions(b).forEach(function(a){f.dispatch("iframe-destroyed",{extension:a});q.unregisterExtension({id:a.extension_id})},this)},notifyUnloaded:function(b,a){f.dispatch("iframe-unload",{$el:b,extension:a})}},gb=function(b){return encodeURIComponent(b).replace(/[!'()*]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})},Z={extract:function(b){return b.split("?")[1]||
""},parse:function(b){var a=Object.create(null);if("string"!==typeof b)return a;b=b.trim().replace(/^(\?|#|&)/,"");if(!b)return a;b.split("\x26").forEach(function(d){var b=d.replace(/\+/g," ").split("\x3d");d=b.shift();b=0<b.length?b.join("\x3d"):void 0;d=decodeURIComponent(d);b=void 0===b?null:decodeURIComponent(b);void 0===a[d]?a[d]=b:Array.isArray(a[d])?a[d].push(b):a[d]=[a[d],b]});return a},stringify:function(b,a){a=pa({encode:!0,strict:!0},a);return b?Object.keys(b).sort().map(function(d){var c=
b[d];if(void 0===c)return"";if(null===c)return K(d,a);if(Array.isArray(c)){var e=[];c.slice().forEach(function(b){void 0!==b&&(null===b?e.push(K(d,a)):e.push(K(d,a)+"\x3d"+K(b,a)))});return e.join("\x26")}return K(d,a)+"\x3d"+K(c,a)}).filter(function(a){return 0<a.length}).join("\x26"):""}},jb=function(b){var a,d;d=b.length;if(0<d%4)throw Error("Invalid string. Length must be a multiple of 4");var c=b.indexOf("\x3d");-1===c&&(c=d);d=[c,c===d?0:4-c%4];a=d[0];d=d[1];for(var c=new sb(3*(a+d)/4-d),e=
0,g=0<d?a-4:a,l=0;l<g;l+=4)a=x[b.charCodeAt(l)]<<18|x[b.charCodeAt(l+1)]<<12|x[b.charCodeAt(l+2)]<<6|x[b.charCodeAt(l+3)],c[e++]=a>>16&255,c[e++]=a>>8&255,c[e++]=a&255;2===d&&(a=x[b.charCodeAt(l)]<<2|x[b.charCodeAt(l+1)]>>4,c[e++]=a&255);1===d&&(a=x[b.charCodeAt(l)]<<10|x[b.charCodeAt(l+1)]<<4|x[b.charCodeAt(l+2)]>>2,c[e++]=a>>8&255,c[e++]=a&255);return c},x=[],sb="undefined"!==typeof Uint8Array?Uint8Array:Array,fa=0;64>fa;++fa)x["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(fa)]=
fa;x[45]=62;x[95]=63;Ea.prototype.decode=function(b){for(var a=b.length,d="",c="",a=Math.min(b.length,a||Infinity),e=0;e<a;e++)127>=b[e]?(d+=Fa(c)+String.fromCharCode(b[e]),c=""):c+="%"+b[e].toString(16);return d+Fa(c)};var ib=Ea,$a=60;f.register("jwt-skew-set",function(b){$a=b.skew});var ab={parseJwtIssuer:function(b){return ja(b).iss},parseJwtClaims:ja,isJwtExpired:function(b,a){void 0===a&&(a=$a);b=ja(b);var d=0,c=Math.floor(Date.now()/1E3);b&&b.exp&&(d=b.exp);return d-a<c?!0:!1}},N={hasJwt:function(b){return ka(b)&&
0!==ka(b).length},isJwtExpired:function(b){b=ka(b);return ab.isJwtExpired(b)}},qa={registerContentResolver:function(b){f.dispatch("content-resolver-register-by-extension",b)},requestRefreshUrl:function(b){if(!b.resolver)throw Error("ACJS: No content resolver supplied");var a=b.resolver.call(null,k.extend({classifier:"json"},b.extension));a.fail(function(a,c){f.dispatch("jwt-url-refreshed-failed",{extension:b.extension,$container:b.$container,errorText:c.text})});a.done(function(a){var d={};if("object"===
("undefined"===typeof a?"undefined":u(a)))d=a;else if("string"===typeof a)try{d=JSON.parse(a)}catch(e){console.error("ACJS: invalid response from content resolver")}b.extension.url=d.url;k.extend(b.extension.options,d.options);f.dispatch("jwt-url-refreshed",{extension:b.extension,$container:b.$container,url:b.extension.url})});f.dispatch("jwt-url-refresh-request",{data:b})},setClockSkew:function(b){"number"===typeof b?f.dispatch("jwt-skew-set",{skew:b}):console.error("ACJS: invalid JWT clock skew set")}},
tb={optionsToAttributes:function(b){var a={};b&&"object"===("undefined"===typeof b?"undefined":u(b))&&(b.width&&(a.width=k.stringToDimension(b.width)),b.height&&(a.height=k.stringToDimension(b.height)));return a}},ra=new (function(){function b(){n(this,b);this.store={}}b.prototype.set=function(a,d){if(d){var b={};b[a]=d}else b=a;k.extend(this.store,b)};b.prototype.get=function(a){return a?this.store[a]:k.extend({},this.store)};return b}()),sa={createSimpleXdmExtension:function(b){var a=Ga(b),d=ra.get();
b.options=a.options=k.extend({},a.options);b.options.globalOptions=d;d=q.create(a,function(){b.options.noDOM||(b.$el=h(document.getElementById(b.id)));ea.notifyBridgeEstablished(b.$el,b)},function(){ea.notifyUnloaded(b.$el,b)});a.id=d.id;b.id=d.id;k.extend(d,tb.optionsToAttributes(b.options));return{iframeAttributes:d,extension:b}},extensionConfigSanitizer:Ga},I=new (function(){function b(){n(this,b);this._contentResolver=!1}b.prototype.setContentResolver=function(a){this._contentResolver=a};b.prototype.resize=
function(a,d,b){a=k.stringToDimension(a);d=k.stringToDimension(d);b.css({width:a,height:d});b.trigger("resized",{width:a,height:d})};b.prototype.simpleXdmExtension=function(a,d){!a.url||N.hasJwt(a.url)&&N.isJwtExpired(a.url)?this._contentResolver?qa.requestRefreshUrl({extension:a,resolver:this._contentResolver,$container:d}):console.error("JWT is expired and no content resolver was specified"):this._appendExtension(d,this._simpleXdmCreate(a))};b.prototype._simpleXdmCreate=function(a){var d=sa.createSimpleXdmExtension(a);
a.id=d.iframeAttributes.id;a.$el=this.render(d.iframeAttributes);return a};b.prototype._appendExtension=function(a,d){var b=a.find("iframe");0<b.length&&b.destroy();d.options.hideIframeUntilLoad&&d.$el.css({visibility:"hidden"}).load(function(){d.$el.css({visibility:""})});a.prepend(d.$el);ea.notifyIframeCreated(d.$el,d)};b.prototype._appendExtensionError=function(a,d){var b=h('\x3cdiv class\x3d"connect-resolve-error"\x3e\x3c/div\x3e');d=h("\x3cp /\x3e").text(d);b.append('\x3cp class\x3d"error"\x3eError: The content resolver threw the following error:\x3c/p\x3e');
b.append(d);a.prepend(b)};b.prototype.resolverResponse=function(a){var b=this._simpleXdmCreate(a.extension);this._appendExtension(a.$container,b)};b.prototype.resolverFailResponse=function(a){this._appendExtensionError(a.$container,a.errorText)};b.prototype.render=function(a){a=a||{};a.referrerpolicy="no-referrer";return h("\x3ciframe /\x3e").attr(a).addClass("ap-iframe")};return b}());f.register("iframe-resize",function(b){I.resize(b.width,b.height,b.$el)});f.register("content-resolver-register-by-extension",
function(b){I.setContentResolver(b.callback)});f.register("jwt-url-refreshed",function(b){I.resolverResponse(b)});f.register("jwt-url-refreshed-failed",function(b){I.resolverFailResponse(b)});f.register("after:iframe-bridge-established",function(b){b.extension.options.noDom?b.extension.options.bridgeEstablished=!0:b.$el[0].bridgeEstablished=!0});var ta={clicked:function(b){f.dispatch("button-clicked",{$el:b})},toggle:function(b,a){f.dispatch("button-toggle",{$el:b,disabled:a})},toggleVisibility:function(b,
a){f.dispatch("button-toggle-visibility",{$el:b,hidden:a})}},ub=["primary","link","secondary"],bb=0,w=new (function(){function b(){n(this,b);this.AP_BUTTON_CLASS="ap-aui-button"}b.prototype.setType=function(a,b){b&&0<=ub.indexOf(b)&&a.addClass("aui-button-"+b);return a};b.prototype.setDisabled=function(a,b){"undefined"===typeof b||a.data("immutable")||a.attr("aria-disabled",b);return a};b.prototype.setHidden=function(a,b){"undefined"===typeof b||a.data("immutable")||a.toggle(!b);return a};b.prototype._setId=
function(a,b){b||(b="ap-button-"+bb,bb++);a.attr("id",b);return a};b.prototype._additionalClasses=function(a,b){b&&("string"!==typeof b&&(b=b.join(" ")),a.addClass(b));return a};b.prototype.getName=function(a){return h(a).data("name")};b.prototype.getText=function(a){return h(a).text()};b.prototype.getIdentifier=function(a){return h(a).data("identifier")};b.prototype.isVisible=function(a){return h(a).is(":visible")};b.prototype.isEnabled=function(a){return"true"!==h(a).attr("aria-disabled")};b.prototype.render=
function(a){var b=h("\x3cbutton /\x3e");a=a||{};b.addClass("aui-button "+this.AP_BUTTON_CLASS);b.text(a.text);b.data(a.data);b.data({name:a.name||a.identifier,identifier:a.identifier||Za.randomIdentifier(),immutable:a.immutable||!1});this._additionalClasses(b,a.additionalClasses);this.setType(b,a.type);this.setDisabled(b,a.disabled||!1);this._setId(b,a.id);return b};return b}());h(function(){h("body").on("click","."+w.AP_BUTTON_CLASS,function(b){b=h(b.target).closest("."+w.AP_BUTTON_CLASS);"true"!==
b.attr("aria-disabled")&&ta.clicked(b)})});f.register("button-toggle",function(b){w.setDisabled(b.$el,b.disabled)});f.register("button-toggle-visibility",function(b){w.setHidden(b.$el,b.hidden)});var vb=["ap-iframe-container"],ua=new (function(){function b(){n(this,b)}b.prototype.createExtension=function(a,b){var d=this._renderContainer();b&&!1===b.loadingIndicator||d.append(this._renderLoadingIndicator());I.simpleXdmExtension(a,d);return d};b.prototype._renderContainer=function(a){a=h("\x3cdiv /\x3e").attr(a||
{});a.addClass(vb.join(" "));return a};b.prototype._renderLoadingIndicator=function(){return T.render()};return b}());f.register("iframe-create",function(b){var a="embedded-"+b.extension.id;b.extension.$el.parents(".ap-iframe-container").attr("id",a)});var wb={defineCustomModule:function(b,a){var d={};a?(d.methods=a,d.name=b):d.methods=b;f.dispatch("module-define-custom",d)}},ca={trackDeprecatedMethodUsed:function(b,a){f.dispatch("analytics-deprecated-method-used",{methodUsed:b,extension:a})},trackIframeBridgeStart:function(b){f.dispatch("iframe-bridge-start",
{extension:b})}},B={sanitizeTriggers:function(b){var a;Array.isArray(b)?a=b.join(" "):"string"===typeof b&&(a=b.trim());return a},uniqueId:function(){return"webitem-"+Math.floor(1E9*Math.random()).toString(16)},getExtensionKey:aa,getKey:la,getOptionsForWebItem:function(b){var a=Ha(b),d=b.hasClass("ap-inline-dialog")?"inlineDialog":"dialog",c=Ja(d,b);!c&&window._AP&&window._AP[d+"Options"]&&(c=k.extend({},window._AP[d+"Options"][a])||{});c||(c={},console.warn("no webitem "+d+"Options for "+a));c.productContext=
c.productContext||{};c.structuredContext=c.structuredContext||{};(b=Ka(b))&&b.options&&(k.extend(c.productContext,b.options.productContext),k.extend(c.structuredContext,b.options.structuredContext),c.contextJwt=b.options.contextJwt);return c},getModuleOptionsByAddonAndModuleKey:Ia,getConfigFromTarget:Ka},V=new function a(){var d=this;n(this,a);this._providers={};this.registerProvider=function(a,e){d._providers[a]=e};this.getProvider=function(a){return d._providers[a]}},xb=new (function(){function a(){this.moduleNamesToModules=
new Map}a.prototype.registerModule=function(a,c){c=a.getModuleRegistrationName();this.moduleNamesToModules.set(c,a)};a.prototype.getModuleByName=function(a){return this.moduleNamesToModules.get(a)};a.prototype.getProviderByModuleName=function(a){if((a=this.moduleNamesToModules.get(a))&&a.isEnabled())return a.getProvider()};return a}()),p=new (function(){function a(){var d=this;n(this,a);this.create=function(a){return ua.createExtension(sa.extensionConfigSanitizer(a))};this.dialog={create:function(a,
d){var c=B.getModuleOptionsByAddonAndModuleKey("dialog",a.addon_key,a.key);d=k.extend({},c||{},d);U.open(a,d)},close:function(){U.close()}};this.registerContentResolver={resolveByExtension:function(a){d._contentResolver=a;qa.registerContentResolver({callback:a})}};this.getContentResolver=function(){return d._contentResolver};this.registerProvider=function(a,d){V.registerProvider(a,d)};this.getProvider=function(a){return V.getProvider(a)};this.frameworkAdaptor=xb}a.prototype.createExtension=function(a){a.options=
a.options||{};a.options.noDom=!0;a=sa.createSimpleXdmExtension(a);ca.trackIframeBridgeStart(a.extension);return a};a.prototype.setFrameworkAdaptor=function(a){this.frameworkAdaptor=a};a.prototype.getFrameworkAdaptor=function(){return this.frameworkAdaptor};a.prototype._cleanExtension=function(a){return k.pick(a,["id","addon_key","key","options","url"])};a.prototype.onIframeEstablished=function(a){a._wrapper=function(d){a.call({},{$el:d.$el,extension:this._cleanExtension(d.extension)})}.bind(this);
f.register("after:iframe-bridge-established",a._wrapper)};a.prototype.offIframeEstablished=function(a){if(a._wrapper)f.unregister("after:iframe-bridge-established",a._wrapper);else throw Error("cannot unregister event dispatch listener without _wrapper reference");};a.prototype.onIframeUnload=function(a){var d=this;f.register("after:iframe-unload",function(c){a.call({},{$el:c.$el,extension:d._cleanExtension(c.extension)})})};a.prototype.onPublicEventDispatched=function(a){a._wrapper=function(d){a.call({},
{type:d.type,event:d.event,extension:this._cleanExtension(d.sender)})}.bind(this);f.register("after:event-public-dispatch",a._wrapper)};a.prototype.offPublicEventDispatched=function(a){if(a._wrapper)f.unregister("after:event-public-dispatch",a._wrapper);else throw Error("cannot unregister event dispatch listener without _wrapper reference");};a.prototype.onKeyEvent=function(a,c,e,g){H.registerKeyEvent({extension_id:a,key:c,modifiers:e,callback:g})};a.prototype.offKeyEvent=function(a,c,e,g){H.unregisterKeyEvent({extension_id:a,
key:c,modifiers:e,callback:g})};a.prototype.onFrameClick=function(a){if("function"!==typeof a)throw Error("handleIframeClick must be a function");H.registerClickHandler(a)};a.prototype.offFrameClick=function(){H.unregisterClickHandler()};a.prototype.destroy=function(a){ea.notifyIframeDestroyed({id:a})};a.prototype.defineModule=function(a,c){wb.defineCustomModule(a,c)};a.prototype.broadcastEvent=function(a,c,e){v.broadcast(a,c,e)};a.prototype.getExtensions=function(a){return q.getExtensions(a)};a.prototype.trackDeprecatedMethodUsed=
function(a,c){ca.trackDeprecatedMethodUsed(a,c)};a.prototype.setJwtClockSkew=function(a){qa.setClockSkew(a)};a.prototype.isJwtExpired=function(a,c){return c?ab.isJwtExpired(a):N.isJwtExpired(a)};a.prototype.hasJwt=function(a){return N.hasJwt(a)};a.prototype.setExtensionConfigurationOptions=function(a,c){ra.set(a,c)};a.prototype.getExtensionConfigurationOption=function(a){return ra.get(a)};return a}()),kb=/^ap-dialog-[0-9A-Za-z]+$/,yb="small medium large xlarge fullscreen maximum".split(" "),J=new (function(){function a(){n(this,
a)}a.prototype._renderHeaderCloseBtn=function(){var a=h("\x3ca /\x3e").addClass("aui-dialog2-header-close"),c=h("\x3cspan /\x3e").addClass("aui-icon aui-icon-small aui-iconfont-close-dialog").text("Close");a.append(c);return a};a.prototype._renderFullScreenHeader=function(a,c){var d=h("\x3cdiv /\x3e").addClass("header-title-container aui-item expanded"),g=h("\x3cdiv /\x3e").append(h("\x3cspan /\x3e").addClass("header-title").text(c.header||""));d.append(g);a.append(d).append(this._renderHeaderActions(c.actions,
c.extension));return a};a.prototype._renderHeader=function(a){var d=h("\x3cheader /\x3e").addClass("aui-dialog2-header");if("fullscreen"===a.size)return this._renderFullScreenHeader(d,a);a.header&&(a=h("\x3ch2 /\x3e").addClass("aui-dialog2-header-main").text(a.header),d.append(a));d.append(this._renderHeaderCloseBtn());return d};a.prototype._renderHeaderActions=function(a,c){var d=h("\x3cdiv /\x3e").addClass("aui-item header-control-panel");a[0].additionalClasses=["aui-icon","aui-icon-small","aui-iconfont-success"];
a[1].additionalClasses=["aui-icon","aui-icon-small","aui-iconfont-close-dialog"];this._renderActionButtons(a,c).forEach(function(a){d.append(a)});return d};a.prototype._renderContent=function(a){var d=h("\x3cdiv /\x3e").addClass("aui-dialog2-content");a&&d.append(a);return d};a.prototype._renderFooter=function(a){var d=h("\x3cfooter /\x3e").addClass("aui-dialog2-footer");if("fullscreen"!==a.size){var e=this._renderFooterActions(a.actions,a.extension);d.append(e)}a.hint&&(a=h("\x3cdiv /\x3e").addClass("aui-dialog2-footer-hint").text(a.hint),
d.append(a));return d};a.prototype._renderActionButtons=function(a,c){var d=this,g=[];[].concat(a).forEach(function(a){g.push(d._renderDialogButton({text:a.text,name:a.name,type:a.type,additionalClasses:a.additionalClasses,custom:a.custom||!1,identifier:a.identifier,immutable:a.immutable,disabled:a.disabled||!1},c))});return g};a.prototype._renderFooterActions=function(a,c){var d=h("\x3cdiv /\x3e").addClass("aui-dialog2-footer-actions");this._renderActionButtons(a,c).forEach(function(a){d.append(a)});
return d};a.prototype._renderDialogButton=function(a,c){a.additionalClasses=a.additionalClasses||[];a.additionalClasses.push("ap-aui-dialog-button");a.custom&&a.additionalClasses.push("ap-dialog-custom-button");a=w.render(a);a.extension=c;return a};a.prototype.render=function(a){var d=k.extend({},a);a=F.sanitizeOptions(a);var e=h("\x3csection /\x3e").attr({role:"dialog",id:"ap-dialog-"+a.id});e.attr("data-aui-modal","true");e.data({"aui-remove-on-hide":!0,extension:a.extension});e.addClass("aui-layer aui-dialog2 ap-aui-dialog2");
0<=yb.indexOf(a.size)&&e.addClass("aui-dialog2-"+a.size);if("fullscreen"===a.size||"maximum"===a.size)a.chrome&&e.addClass("ap-header-controls"),e.addClass("aui-dialog2-maximum");e.append(this._renderContent(a.$content));a.chrome?(e.prepend(this._renderHeader({header:a.header,actions:a.actions,size:a.size})),e.append(this._renderFooter({extension:a.extension,actions:a.actions,hint:a.hint,size:a.size}))):e.addClass("aui-dialog2-chromeless");var g=AJS.dialog2(e);g._id=a.id;"fullscreen"===a.size&&(a.height=
a.width="100%");a.size&&"fullscreen"!==a.size||AJS.layer(e).changeSize(a.width,a.height);if(a.onHide)g.on("hide",a.onHide);g.show();g.$el.data("extension",a.extension);g.$el.data("originalOptions",d);return e};a.prototype.setIframeDimensions=function(a){I.resize("100%","100%",a)};a.prototype.getActive=function(){return D()};a.prototype.buttonIsEnabled=function(a){var d=D();if(d)return a=ba(a,d.$el),w.isEnabled(a)};a.prototype.buttonIsVisible=function(a){var d=D();if(d)return a=ba(a,d.$el),w.isVisible(a)};
a.prototype.getByExtension=function(a){var d;if("function"===typeof a)d=a;else{var e=Object.getOwnPropertyNames(a);d=function(d){var c=h(d).data("extension");return e.every(function(d){return c[d]===a[d]})}}return h(".ap-aui-dialog2").toArray().filter(d).map(function(a){return AJS.dialog2(a)})};a.prototype.addButton=function(a,c){c.custom=!0;c=this._renderDialogButton(c,a);a=this.getByExtension({addon_key:a.addon_key,key:a.key})[0].$el;La(a).append(c);return a};return a}());f.register("iframe-bridge-established",
function(a){if(a.extension.options.isDialog){var d=void 0,c=p.getFrameworkAdaptor().getProviderByModuleName("dialog");c?(d=c.close,c.setButtonDisabled("submit",!1)):(z.toggleButton({identifier:"submit",enabled:!0}),d=function(){z.close({dialog:D(),extension:a.extension})});a.extension.options.preventDialogCloseOnEscape||(H.registerKeyEvent({extension_id:a.extension.id,key:27,callback:d}),f.registerOnce("dialog-close",function(d){H.unregisterKeyEvent({extension_id:a.extension.id,key:27})}))}});f.register("dialog-close-active",
function(a){var d=D();d&&z.close({customData:a.customData,dialog:d,extension:a.extension})});f.register("dialog-close",function(a){a.dialog&&a.dialog.hide()});f.register("dialog-button-toggle",function(a){var d=D();d&&(d=ba(a.identifier,d.$el),ta.toggle(d,!a.enabled))});f.register("dialog-button-toggle-visibility",function(a){var d=D();d&&(d=ba(a.identifier,d.$el),ta.toggleVisibility(d,a.hidden))});f.register("button-clicked",function(a){a=a.$el;if(a.hasClass("ap-aui-dialog-button")){var d=a.parents(".ap-aui-dialog2"),
c=d.find("iframe");c.length&&c[0].bridgeEstablished?z.clickButton(w.getIdentifier(a),a,d.data("extension")):z.close({dialog:D(),extension:a.extension})}});h.fn&&(f.register("iframe-create",function(a){a.extension.options&&a.extension.options.isDialog&&J.setIframeDimensions(a.extension.$el)}),f.register("dialog-button-add",function(a){J.addButton(a.extension,a.button)}),f.register("host-window-resize",k.debounce(function(){h(".ap-aui-dialog2").each(function(a,d){a=h(d);a=F.sanitizeOptions(a.data("originalOptions"));
d.style.width=a.width;d.style.height=a.height})},100)));H.registerWindowKeyEvent({keyCode:27,callback:function(){z.closeActive({customData:{},extension:null})}});var O=new (function(){function a(){n(this,a)}a.prototype.render=function(a,c){a.options=a.options||{};c=c||{};a.options.isDialog=!0;a.options.dialogId=c.id;a.options.preventDialogCloseOnEscape=!1===c.closeOnEscape;a.options.hideIframeUntilLoad=!0;var d=ua.createExtension(a);return J.render({extension:a,$content:d,chrome:c.chrome,width:c.width,
height:c.height,size:c.size,header:c.header,hint:c.hint,submitText:c.submitText,cancelText:c.cancelText,buttons:c.buttons,onHide:c.onHide})};a.prototype.getActiveDialog=function(){return J.getActive()};a.prototype.buttonIsEnabled=function(a){return J.buttonIsEnabled(a)};a.prototype.buttonIsVisible=function(a){return J.buttonIsVisible(a)};a.prototype.getByExtension=function(a){"string"===typeof a&&(a={id:a});return J.getByExtension(a)};return a}());f.register("dialog-extension-open",function(a){O.render(a.extension,
a.options)});var cb={};f.register("dialog-close",function(a){a.dialog&&a.extension&&v.broadcast("dialog.close",{addon_key:a.extension.addon_key},a.customData)});f.register("dialog-button-click",function(a){var d={button:{name:w.getName(a.$el),identifier:w.getIdentifier(a.$el),text:w.getText(a.$el)}};a.$el.hasClass("ap-dialog-custom-button")||v.broadcast("dialog."+d.button.name,{addon_key:a.extension.addon_key,key:a.extension.key},d);v.broadcast("dialog.button.click",{addon_key:a.extension.addon_key,
key:a.extension.key},d)});var C=function(){function a(d,c){n(this,a);c=k.last(arguments);var e=p.getFrameworkAdaptor().getProviderByModuleName("dialog");if(e)F.assertActiveDialogOrThrow(e,c._context.extension.addon_key),this.identifier=this.name=d;else{if(!O.getActiveDialog())throw Error("Failed to find an active dialog.");this.identifier=this.name=d;this.enabled=O.buttonIsEnabled(d);this.hidden=!O.buttonIsVisible(d)}}a.prototype.enable=function(){this.setState({enabled:!0})};a.prototype.disable=
function(){this.setState({enabled:!1})};a.prototype.isEnabled=function(a){a=k.last(arguments);var d=p.getFrameworkAdaptor().getProviderByModuleName("dialog");d?a(!d.isButtonDisabled(this.identifier)):a(this.enabled)};a.prototype.toggle=function(){var a=p.getFrameworkAdaptor().getProviderByModuleName("dialog");a?a.toggleButton(this.identifier):this.setState({enabled:!this.enabled})};a.prototype.setState=function(a){var d=p.getFrameworkAdaptor().getProviderByModuleName("dialog");d?d.setButtonDisabled(this.identifier,
!a.enabled):(this.enabled=a.enabled,z.toggleButton({identifier:this.identifier,enabled:this.enabled}))};a.prototype.trigger=function(a){a=k.last(arguments);this.enabled&&z.dialogMessage({name:this.name,extension:a._context.extension})};a.prototype.isHidden=function(a){a=k.last(arguments);var d=p.getFrameworkAdaptor().getProviderByModuleName("dialog");d?a(d.isButtonHidden(this.identifier)):a(this.hidden)};a.prototype.hide=function(){this.setHidden(!0)};a.prototype.show=function(){this.setHidden(!1)};
a.prototype.setHidden=function(a){var d=p.getFrameworkAdaptor().getProviderByModuleName("dialog");d?d.setButtonHidden(this.identifier,a):(this.hidden=a,z.toggleButtonVisibility({identifier:this.identifier,hidden:this.hidden}))};return a}(),zb={create:{constructor:function d(c,e){n(this,d);e=k.last(arguments);var g=e._id,f=e._context.extension,f={addon_key:f.addon_key,key:c.key,options:k.pick(f.options,["customData","productContext"])};f.options.customData=c.customData;var h=F.moduleOptionsFromGlobal(f.addon_key,
f.key);c=k.extend({},h||{},c);c.id=g;if(h=p.getFrameworkAdaptor().getProviderByModuleName("dialog")){var m=function(d){var c=e._context.extension.key,g=e._context.extension.addon_key,f={button:{identifier:d.identifier,name:d.identifier,text:d.text}};0<=["submit","cancel"].indexOf(d.identifier)&&v.broadcast("dialog."+d.identifier,{addon_key:g,key:c},f);v.broadcast("dialog.button.click",{addon_key:g,key:c},f)},r=F.sanitizeOptions(c);f.options.preventDialogCloseOnEscape=!1===r.closeOnEscape;r.actions.map(function(d){return d.onClick=
m.bind(null,d)});h.create(r,f)}else F.trackMultipleDialogOpening(f,c),U.open(f,c);this.customData=c.customData;cb[g]=this}},close:function(d,c){c=k.last(arguments);var e=p.getFrameworkAdaptor().getProviderByModuleName("dialog");e?(F.assertActiveDialogOrThrow(e,c._context.extension.addon_key),v.broadcast("dialog.close",{addon_key:c._context.extension.addon_key},d),e.close()):(e=c._context.extension.options.isDialog?O.getByExtension(c._context.extension.id)[0]:O.getActiveDialog(),z.close({customData:d,
dialog:e,extension:c._context.extension}))},getCustomData:function(d){d=k.last(arguments);var c=cb[d._context.extension.options.dialogId];c?d(c.customData):d(void 0)},getButton:{constructor:C,enable:C.prototype.enable,disable:C.prototype.disable,toggle:C.prototype.toggle,isEnabled:C.prototype.isEnabled,trigger:C.prototype.trigger,hide:C.prototype.hide,show:C.prototype.show,isHidden:C.prototype.isHidden},createButton:{constructor:function c(e,g){n(this,c);g=k.last(arguments);var f=p.getFrameworkAdaptor().getProviderByModuleName("dialog");
f?(F.assertActiveDialogOrThrow(f,g._context.extension.addon_key),f.createButton({identifier:e.identifier,text:e.text,hidden:!1,disabled:e.disabled||!1,onClick:function(){v.broadcast("dialog.button.click",{addon_key:g._context.extension.addon_key,key:g._context.extension.key},{button:{identifier:e.identifier,text:e.text}})}})):U.addUserButton({identifier:e.identifier,text:e.text},g._context.extension)}}};f.register("iframe-resize",function(c){I.resize(c.width,c.height,c.$el)});f.register("iframe-size-to-parent",
function(c){var e=k.getIframeByExtensionId(c.extensionId);c.hideFooter?(e.addClass("full-size-general-page-no-footer"),h("#footer").css({display:"none"}),c=h(window).height()-h("#header \x3e nav").outerHeight()):(c=h(window).height()-h("#header \x3e nav").outerHeight()-h("#footer").outerHeight()-1,e.removeClass("full-size-general-page-no-footer"),h("#footer").css({display:"block"}));f.dispatch("iframe-resize",{width:"100%",height:c+"px",$el:e})});f.register("hide-footer",function(c){c&&h("#footer").css({display:"none"})});
window.addEventListener("resize",function(c){f.dispatch("host-window-resize",c)},!0);var ga={iframeResize:function(c,e,g){var l;l=g.extension_id?k.getIframeByExtensionId(g.extension_id):g;f.dispatch("iframe-resize",{width:c,height:e,$el:l,extension:g.extension})},sizeToParent:function(c,e){f.dispatch("iframe-size-to-parent",{hideFooter:e,extensionId:c})},hideFooter:function(c){f.dispatch("hide-footer",c)}},db=k.debounce,ha={},P=[],ia={},Ab={getLocation:function(c){c=k.last(arguments);c(window.location.href)},
resize:function(c,e,g){g=k.last(arguments);var f=V.getProvider("addon");if(f)f.resize(c,e,g._context);else{var f=g._context.extension.id,h=g._context.extension.options;if(-1!==P.indexOf(f)||h&&h.isDialog)return!1;ha[f]||(ha[f]=db(function(c,e,g){ga.iframeResize(c,e,g._context)},50));ha[f](c,e,g)}return!0},sizeToParent:db(function(c,e){e=k.last(arguments);var g=V.getProvider("addon");g?g.sizeToParent(c,e._context):e._context.extension.options.isFullPage?(k.getIframeByExtensionId(e._context.extension_id).addClass("full-size-general-page"),
ga.sizeToParent(e._context.extension_id,c),ia[e._context.extension_id]={hideFooter:c}):k.getIframeByExtensionId(e._context.extension_id).addClass("full-size-general-page-fail")}),hideFooter:function(c){c&&ga.hideFooter(c)}};f.register("host-window-resize",function(c){Object.getOwnPropertyNames(ia).forEach(function(c){ga.sizeToParent(c,ia[c].hideFooter)})});f.register("after:iframe-unload",function(c){delete ha[c.extension.id];delete ia[c.extension.id];-1!==P.indexOf(c.extension.id)&&P.splice(P.indexOf(c.extension.id),
1)});f.register("before:iframe-size-to-parent",function(c){-1===P.indexOf(c.extensionId)&&P.push(c.extensionId)});var va={hide:function(c){f.dispatch("inline-dialog-hide",{$el:c})},refresh:function(c){f.dispatch("inline-dialog-refresh",{$el:c})},hideTriggered:function(c,e){f.dispatch("inline-dialog-hidden",{extension_id:c,$el:e})},close:function(){f.dispatch("inline-dialog-close",{})},created:function(c){f.dispatch("inline-dialog-opened",{$el:c.$el,trigger:c.trigger,extension:c.extension})}},Na="generic error warning success info hint".split(" "),
Oa=/^ap-message-[0-9A-fa-f]+$/,G={},Ma=!1,Bb={clear:function(c){c="ap-message-"+c._id;if(Oa.test(c)){var e=p.getFrameworkAdaptor().getProviderByModuleName("messages");e?e.clear(c):h("#"+c).closeMessage()}},onClose:function(c,e){e=k.last(arguments);var g=c._id,f=p.getFrameworkAdaptor().getProviderByModuleName("messages");if(f)f.onClose("ap-message-"+c._id,e);else G[g]&&(G[g].onCloseTrigger=e)},generic:L("generic"),error:L("error"),warning:L("warning"),success:L("success"),info:L("info"),hint:L("hint")},
R={actionInvoked:function(c,e){f.dispatch("flag-action-invoked",{id:e,actionId:c})},open:function(c){f.dispatch("flag-open",{id:c})},close:function(c){f.dispatch("flag-close",{id:c})},closed:function(c){f.dispatch("flag-closed",{id:c})}},ma=new (function(){function c(){n(this,c)}c.prototype.cleanKey=function(c){return(c=c.match(/^ap-flag-(.+)$/))&&c[1]?c[1]:null};c.prototype._toHtmlString=function(c){if("string"===h.type(c))return c;if("object"===h.type(c)&&c instanceof h)return c.html()};c.prototype._renderBody=
function(c){c=this._toHtmlString(c);c=h("\x3cdiv /\x3e").html(c);h("\x3cp /\x3e").addClass("ac-flag-actions").appendTo(c);return c.html()};c.prototype._renderActions=function(c,g,f){var e=c.find(".ac-flag-actions");f=f||{};var l;Object.getOwnPropertyNames(f).forEach(function(c){l=h("\x3ca /\x3e").attr("href","#").data({key:c,flag_id:g}).text(f[c]);e.append(l)},this);return c};c.prototype.render=function(c){nb();var e="ap-flag-"+c.id,f=AJS.flag({type:c.type,title:c.title,body:this._renderBody(c.body),
close:c.close});f.setAttribute("id",e);e=h(f);this._renderActions(e,c.id,c.actions);e.addClass("ac-aui-flag");e.close=f.close;return e};c.prototype.close=function(c){document.getElementById(c).close()};return c}()),Pa=!1;f.register("flag-close",function(c){ma.close(c.id)});var S={},eb=function(){function c(e,g){n(this,c);g=k.last(arguments);if("object"===("undefined"===typeof e?"undefined":u(e))){var f=g._id,h=p.getFrameworkAdaptor().getProviderByModuleName("flag");if(h){var m=[];"object"===u(e.actions)&&
(m=Object.getOwnPropertyNames(e.actions).map(function(c){return{actionKey:c,actionText:e.actions[c],executeAction:R.actionInvoked.bind(null,c,f)}}));m={id:f,title:e.title,body:e.body,actions:m,onClose:R.closed,close:e.close,type:(e.type||"info").toLowerCase()};this.flag=h.create(m);(h=V.getProvider("addon"))&&h.registerUnmountCallback&&h.registerUnmountCallback(this.close.bind(this),g._context)}else this.flag=ma.render({type:e.type,title:e.title,body:AJS.escapeHtml(e.body),actions:e.actions,close:e.close,
id:f}),R.open(this.flag.attr("id"));this.onTriggers={};this.extension=g._context.extension;S[g._id]=this;g.call(null,g._id)}}c.prototype.close=function(){this.flag.close()};return c}();f.register("flag-closed",function(c){Qa(c.id,"flag.close");S[c.id]&&delete S[c.id]});f.register("flag-action-invoked",function(c){Qa(c.id,"flag.action",{actionIdentifier:c.actionId})});var Cb={create:{constructor:eb,close:eb.prototype.close}},na=void 0,da=void 0;f.register("iframe-bridge-established",function(c){c.extension.options.isFullPage&&
(window.addEventListener("scroll",Sa),na=c.extension.id)});f.register("iframe-destroyed",function(c){Ra()});f.register("iframe-unload",function(c){Ra()});var fb={itemSelected:function(c,e,g){f.dispatch("dropdown-item-selected",{id:c,item:e,extension:g})}};f.register("dropdown-item-selected",function(c){v.broadcast("dropdown-item-selected",{addon_key:c.extension.addon_key,key:c.extension.key},{dropdownId:c.id,item:c.item})});f.register("iframe-destroyed",function(c){var e=p.getFrameworkAdaptor().getProviderByModuleName("dropdown");
e&&e.destroyByExtension(c.extension.extension_id)});f.register("after:iframe-unload",function(c){var e=p.getFrameworkAdaptor().getProviderByModuleName("dropdown");e&&e.destroyByExtension(c.extension.extension_id)});var W=new (function(){function c(){n(this,c);this._webitems={};this._contentResolver=function(){}}c.prototype.setContentResolver=function(c){this._contentResolver=c};c.prototype.requestContent=function(c){if(c.addon_key&&c.key)return this._contentResolver.call(null,k.extend({classifier:"json"},
c))};c.prototype.getWebItemsBySelector=function(c){var e=this,f=void 0;Object.getOwnPropertyNames(this._webitems).some(function(g){g=e._webitems[g];return g.selector&&g.selector.trim()===c.trim()?(f=g,!0):!1});return f};c.prototype.setWebItem=function(c){return this._webitems[c.name]={name:c.name,selector:c.selector,triggers:c.triggers}};c.prototype._removeTriggers=function(c){var e=this,f=B.sanitizeTriggers(c.triggers);h(function(){h("body").off(f,c.selector,e._webitems[c.name]._on)});delete this._webitems[c.name]._on};
c.prototype._addTriggers=function(c){var e=B.sanitizeTriggers(c.triggers);c._on=function(e){e.preventDefault();var g=h(e.target).closest(c.selector),f=B.getConfigFromTarget(g),f=f&&f.url?f.url:void 0,g={addon_key:B.getExtensionKey(g),key:B.getKey(g),options:B.getOptionsForWebItem(g),url:f};wa.webitemInvoked(c,e,g)};h(function(){h("body").on(e,c.selector,c._on)})};return c}());f.register("webitem-added",function(c){W._addTriggers(c.webitem)});f.register("content-resolver-register-by-extension",function(c){W.setContentResolver(c.callback)});
document.addEventListener("aui-responsive-menu-item-created",function(c){var e=c.detail.originalItem.querySelector('a[class*\x3d"ap-"]');if(e){var g=c.detail.newItem.querySelector("a");[].slice.call(e.classList).forEach(function(c){/^ap-/.test(c)&&g.classList.add(c)})}});var wa={addWebItem:function(c){if(W.getWebItemsBySelector(c.selector))return!1;c=W.setWebItem(c);f.dispatch("webitem-added",{webitem:c})},webitemInvoked:function(c,e,g){f.dispatch("webitem-invoked:"+c.name,{webitem:c,event:e,extension:g})}},
Db={addExtension:function(c){f.dispatch("inline-dialog-extension",{$el:c.$el,extension:c.extension})}},X=new (function(){function c(){n(this,c)}c.prototype.resize=function(c){var e=k.stringToDimension(c.width),f=k.stringToDimension(c.height),h=c.$el.find(".contents");1===h.length&&(h.css({width:e,height:f}),va.refresh(c.$el))};c.prototype.refresh=function(c){c[0].popup.reset()};c.prototype._getInlineDialog=function(c){return AJS.InlineDialog(c)};c.prototype._renderContainer=function(){return h("\x3cdiv /\x3e").addClass("aui-inline-dialog-contents")};
c.prototype._displayInlineDialog=function(c){va.created({$el:c.$el,trigger:c.trigger,extension:c.extension})};c.prototype.hideInlineDialog=function(c){c.hide()};c.prototype.closeInlineDialog=function(){h(".aui-inline-dialog").filter(function(){return 0<h(this).find(".ap-iframe-container").length}).hide()};c.prototype.render=function(c){var e=this,f=h(document.getElementById("inline-dialog-"+c.id));0!==f.length&&f.remove();return AJS.InlineDialog(c.bindTo,c.id,function(g,f,h){g.append(c.$content);
e._displayInlineDialog({extension:c.extension,$el:g,trigger:f});h()},c.inlineDialogOptions)};return c}());f.register("iframe-resize",function(c){var e=c.$el.parents(".aui-inline-dialog");1===e.length&&X.resize({width:c.width,height:c.height,$el:e})});f.register("inline-dialog-refresh",function(c){X.refresh(c.$el)});f.register("inline-dialog-hide",function(c){X.hideInlineDialog(c.$el)});f.register("inline-dialog-close",function(c){X.closeInlineDialog()});var Eb=["mouseover","click"],Y=new (function(){function c(){n(this,
c);this._inlineDialogWebItemSpec={name:"inline-dialog",selector:".ap-inline-dialog",triggers:Eb};this._inlineDialogWebItems={}}c.prototype.getWebItem=function(){return this._inlineDialogWebItemSpec};c.prototype._createInlineDialog=function(c){return X.render({extension:c.extension,id:c.id,bindTo:c.$target,$content:h("\x3cdiv /\x3e"),inlineDialogOptions:c.extension.options})};c.prototype.triggered=function(c){if("click"===c.event.type||c.extension.options.onHover){var e=h(c.event.currentTarget),f=
e.data("inline-dialog-target-uid");this._createInlineDialog({id:f,extension:c.extension,$target:e,options:c.extension.options||{}}).show()}};c.prototype.opened=function(c){var e=c.$el.find("iframe");if(e&&1===e.length&&(e=e.attr("src"),0<e.length)){var f=N.hasJwt(e);if(f&&!N.isJwtExpired(e)||!f)return!1}e=W.requestContent(c.extension);if(!e)return console.warn("no content resolver found"),!1;e.then(function(e){e.options=e.options||{};k.extend(e.options,{autoresize:!0,widthinpx:!0});Db.addExtension({$el:c.$el,
extension:e})});return!0};c.prototype.addExtension=function(c){var e=ua.createExtension(c.extension);c.$el.empty().append(e)};c.prototype.createIfNotExists=function(c){c=h(c.event.currentTarget);var e=c.data("inline-dialog-target-uid");e||(e=B.uniqueId(),c.data("inline-dialog-target-uid",e))};return c}()),xa=Y.getWebItem();f.register("before:webitem-invoked:"+xa.name,function(c){Y.createIfNotExists(c)});f.register("webitem-invoked:"+xa.name,function(c){Y.triggered(c)});f.register("inline-dialog-opened",
function(c){Y.opened(c)});f.register("inline-dialog-extension",function(c){Y.addExtension(c)});wa.addWebItem(xa);var Fb=["click"],Gb={chrome:!0},ya=new (function(){function c(){n(this,c);this._dialogWebItem={name:"dialog",selector:".ap-dialog",triggers:Fb}}c.prototype.getWebItem=function(){return this._dialogWebItem};c.prototype._dialogOptions=function(c){return k.extend({},Gb,c||{})};c.prototype.triggered=function(c){var e=h(c.event.currentTarget).data("dialog-target-uid"),f=this._dialogOptions(c.extension.options);
f.id=e;U.open(c.extension,f)};c.prototype.createIfNotExists=function(c){c=h(c.event.currentTarget);var e=c.data("dialog-target-uid");e||(e=B.uniqueId(),c.data("dialog-target-uid",e))};return c}()),za=ya.getWebItem();f.register("webitem-invoked:"+za.name,function(c){ya.triggered(c)});f.register("before:webitem-invoked:"+za.name,ya.createIfNotExists);wa.addWebItem(za);window._AP||(window._AP={});window._AP.version||(window._AP.version="5.1.69");q.defineModule("messages",Bb);q.defineModule("flag",Cb);
q.defineModule("dialog",zb);q.defineModule("inlineDialog",{hide:function(c){c=k.last(arguments);var e=p.getFrameworkAdaptor().getProviderByModuleName("inlineDialog");e?e.hide(c._context):va.close()}});q.defineModule("env",Ab);q.defineModule("events",{emit:function(c){for(var e=arguments.length,f=Array(1<e?e-1:0),h=1;h<e;h++)f[h-1]=arguments[h];e=k.last(f);f=k.first(f,-1);v.broadcast(c,{addon_key:e._context.extension.addon_key},f)},emitPublic:function(c){for(var e=arguments.length,f=Array(1<e?e-1:
0),h=1;h<e;h++)f[h-1]=arguments[h];e=k.last(f)._context.extension;f=k.first(f,-1);v.broadcastPublic(c,f,e)}});q.defineModule("_analytics",{trackDeprecatedMethodUsed:function(c,e){e=k.last(arguments);ca.trackDeprecatedMethodUsed(c,e._context.extension)}});q.defineModule("scrollPosition",{getPosition:function(c){c=k.last(arguments);if(c._context.extension.options.isFullPage){var e=k.getIframeByExtensionId(c._context.extension_id).offset(),f=h(window);c({scrollY:f.scrollTop()-e.top,scrollX:f.scrollLeft()-
e.left,width:window.innerWidth,height:window.innerHeight})}},setVerticalPosition:function(c,e){e=k.last(arguments);if(e._context.extension.options&&e._context.extension.options.isFullPage){var f=k.getIframeByExtensionId(e._context.extension_id).offset();"number"===typeof c&&(document.documentElement.scrollTop=f.top+c)}}});q.defineModule("dropdown",{create:function(c,e){e=k.last(arguments);if("object"===("undefined"===typeof c?"undefined":u(c))){var f=p.getFrameworkAdaptor().getProviderByModuleName("dropdown");
if(f){var h=ob(c.list),h={dropdownId:c.dropdownId,dropdownGroups:h,dropdownItemNotifier:function(c){fb.itemSelected(c.dropdownId,c.item,e._context.extension)}};f.create(h,e._context);return h}}},showAt:function(c,e,f,h){var g=k.last(arguments),l={left:0,top:0},m=document.getElementById(g._context.extension_id);m?l=m.getBoundingClientRect():console.error("ACJS: no iframe found for dropdown");(m=p.getFrameworkAdaptor().getProviderByModuleName("dropdown"))&&m.showAt({dropdownId:c,x:e,y:f,width:h},{iframeDimensions:l,
onItemSelection:function(c,e){fb.itemSelected(c,e,g._context.extension)}})},hide:function(c){var e=p.getFrameworkAdaptor().getProviderByModuleName("dropdown");e&&e.hide(c)},itemDisable:function(c,e){var f=p.getFrameworkAdaptor().getProviderByModuleName("dropdown");f&&f.itemDisable(c,e)},itemEnable:function(c,e){var f=p.getFrameworkAdaptor().getProviderByModuleName("dropdown");f&&f.itemEnable(c,e)}});f.register("module-define-custom",function(c){q.defineModule(c.name,c.methods)});q.registerRequestNotifier(function(c){A.dispatch("bridge.invokemethod",
{module:c.module,fn:c.fn,addonKey:c.addon_key,moduleKey:c.key})});return p});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'v5/js/iframe/host/_uritemplate.js' */
(function(x){function n(a){var b;if(null===a||void 0===a)return!1;if(e.isArray(a))return 0<a.length;if("string"===typeof a||"number"===typeof a||"boolean"===typeof a)return!0;for(b in a)if(a.hasOwnProperty(b)&&n(a[b]))return!0;return!1}var m=function(){function a(b){this.options=b}a.prototype.toString=function(){return JSON&&JSON.stringify?JSON.stringify(this.options):this.options};return a}(),e=function(){function a(b){if("function"===typeof Object.freeze&&"object"===typeof b&&null!==b){Object.freeze(b);
var c,k;for(k in b)b.hasOwnProperty(k)&&(c=b[k],"object"===typeof c&&a(c))}return b}return{isArray:function(b){return"[object Array]"===Object.prototype.toString.apply(b)},isString:function(b){return"[object String]"===Object.prototype.toString.apply(b)},isNumber:function(b){return"[object Number]"===Object.prototype.toString.apply(b)},isBoolean:function(b){return"[object Boolean]"===Object.prototype.toString.apply(b)},join:function(b,c){var a="",d=!0,f;for(f=0;f<b.length;f+=1)d?d=!1:a+=c,a+=b[f];
return a},map:function(b,c){for(var a=[],d=0;d<b.length;d+=1)a.push(c(b[d]));return a},filter:function(b,c){for(var a=[],d=0;d<b.length;d+=1)c(b[d])&&a.push(b[d]);return a},deepFreeze:a}}(),t=function(){function a(b){return"0"<=b&&"9">=b}return{isAlpha:function(b){return"a"<=b&&"z">=b||"A"<=b&&"Z">=b},isDigit:a,isHexDigit:function(b){return a(b)||"a"<=b&&"f">=b||"A"<=b&&"F">=b}}}(),u=function(){function a(b,a){return"%"===b.charAt(a)&&t.isHexDigit(b.charAt(a+1))&&t.isHexDigit(b.charAt(a+2))}var b=
{encode:function(b){return unescape(encodeURIComponent(b))},numBytes:function(b){return 127>=b?1:194<=b&&223>=b?2:224<=b&&239>=b?3:240<=b&&244>=b?4:0},isValidFollowingCharCode:function(b){return 128<=b&&191>=b}};return{encodeCharacter:function(a){var c="";a=b.encode(a);var d,f;for(f=0;f<a.length;f+=1)d=a.charCodeAt(f),c+="%"+(16>d?"0":"")+d.toString(16).toUpperCase();return c},isPctEncoded:function(c){if(!a(c,0))return!1;var k=parseInt(c.substr(1,2),16),k=b.numBytes(k);if(0===k)return!1;for(var d=
1;d<k;d+=1)if(!a(c,3*d)||!b.isValidFollowingCharCode(parseInt(c.substr(3*d+1,2),16)))return!1;return!0},pctCharAt:function(c,k){var d=c.charAt(k);if(!a(c,k))return d;var f=parseInt(c.substr(k+1,2),16),f=b.numBytes(f);if(0===f)return d;for(var e=1;e<f;e+=1)if(!a(c,k+3*e)||!b.isValidFollowingCharCode(parseInt(c.substr(k+3*e+1,2),16)))return d;return c.substr(k,3*f)}}}(),v=function(){return{isVarchar:function(a){return t.isAlpha(a)||t.isDigit(a)||"_"===a||u.isPctEncoded(a)},isUnreserved:function(a){return t.isAlpha(a)||
t.isDigit(a)||"-"===a||"."===a||"_"===a||"~"===a},isReserved:function(a){return":"===a||"/"===a||"?"===a||"#"===a||"["===a||"]"===a||"@"===a||"!"===a||"$"===a||"\x26"===a||"("===a||")"===a||"*"===a||"+"===a||","===a||";"===a||"\x3d"===a||"'"===a}}}(),w=function(){function a(b,a){var c="",d,f;if("number"===typeof b||"boolean"===typeof b)b=b.toString();for(d=0;d<b.length;d+=f.length)f=b.charAt(d),c+=v.isUnreserved(f)||a&&v.isReserved(f)?f:u.encodeCharacter(f);return c}return{encode:a,encodePassReserved:function(b){return a(b,
!0)},encodeLiteral:function(b){var a="",k,d;for(k=0;k<b.length;k+=d.length)d=u.pctCharAt(b,k),a=1<d.length?a+d:a+(v.isReserved(d)||v.isUnreserved(d)?d:u.encodeCharacter(d));return a},encodeLiteralCharacter:function(b,a){b=u.pctCharAt(b,a);return 1<b.length?b:v.isReserved(b)||v.isUnreserved(b)?b:u.encodeCharacter(b)}}}(),A=function(){function a(a){b[a]={symbol:a,separator:"?"===a?"\x26":""===a||"+"===a||"#"===a?",":a,named:";"===a||"\x26"===a||"?"===a,ifEmpty:"\x26"===a||"?"===a?"\x3d":"",first:"+"===
a?"":a,encode:"+"===a||"#"===a?w.encodePassReserved:w.encode,toString:function(){return this.symbol}}}var b={};a("");a("+");a("#");a(".");a("/");a(";");a("?");a("\x26");return{valueOf:function(a){return b[a]?b[a]:0<="\x3d,!@|".indexOf(a)?null:b[""]}}}(),y=function(){function a(b){this.literal=w.encodeLiteral(b)}a.prototype.expand=function(){return this.literal};a.prototype.toString=a.prototype.expand;return a}(),C=function(){function a(b){function a(){var a=b.substring(q,g);if(0===a.length)throw new m({expressionText:b,
message:"a varname must be specified",position:g});e={varname:a,exploded:!1,maxLength:null};q=null}function k(){if(p===g)throw new m({expressionText:b,message:"after a ':' you have to specify the length",position:g});e.maxLength=parseInt(b.substring(p,g),10);p=null}var d,f=[],e=null,q=null,p=null,g,h="";d=function(a){var c=A.valueOf(a);if(null===c)throw new m({expressionText:b,message:"illegal use of reserved operator",position:g,operator:a});return c}(b.charAt(0));for(q=g=d.symbol.length;g<b.length;g+=
h.length){h=u.pctCharAt(b,g);if(null!==q){if("."===h){if(q===g)throw new m({expressionText:b,message:"a varname MUST NOT start with a dot",position:g});continue}if(v.isVarchar(h))continue;a()}if(null!==p){if(g===p&&"0"===h)throw new m({expressionText:b,message:"A :prefix must not start with digit 0",position:g});if(t.isDigit(h)){if(4<=g-p)throw new m({expressionText:b,message:"A :prefix must have max 4 digits",position:g});continue}k()}if(":"===h){if(null!==e.maxLength)throw new m({expressionText:b,
message:"only one :maxLength is allowed per varspec",position:g});if(e.exploded)throw new m({expressionText:b,message:"an exploeded varspec MUST NOT be varspeced",position:g});p=g+1}else if("*"===h){if(null===e)throw new m({expressionText:b,message:"exploded without varspec",position:g});if(e.exploded)throw new m({expressionText:b,message:"exploded twice",position:g});if(e.maxLength)throw new m({expressionText:b,message:"an explode (*) MUST NOT follow to a prefix",position:g});e.exploded=!0}else if(","===
h)f.push(e),e=null,q=g+1;else throw new m({expressionText:b,message:"illegal character",character:h,position:g});}null!==q&&a();null!==p&&k();f.push(e);return new B(b,d,f)}return function(b){var c,e,d=[],f=null,n=0;for(c=0;c<b.length;c+=1)if(e=b.charAt(c),null!==n){if("}"===e)throw new m({templateText:b,message:"unopened brace closed",position:c});"{"===e&&(n<c&&d.push(new y(b.substring(n,c))),n=null,f=c)}else if(null!==f){if("{"===e)throw new m({templateText:b,message:"brace already opened",position:c});
if("}"===e){if(f+1===c)throw new m({templateText:b,message:"empty braces",position:f});try{d.push(a(b.substring(f+1,c)))}catch(q){if(q.prototype===m.prototype)throw new m({templateText:b,message:q.options.message,position:f+q.options.position,details:q.options});throw q;}f=null;n=c+1}}else throw Error("reached unreachable code");if(null!==f)throw new m({templateText:b,message:"unclosed brace",position:f});n<b.length&&d.push(new y(b.substr(n)));return new z(b,d)}}(),B=function(){function a(a){if(!n(a))return!0;
if(e.isString(a))return""===a;if(e.isNumber(a)||e.isBoolean(a))return!1;if(e.isArray(a))return 0===a.length;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function b(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push({name:c,value:a[c]});return b}function c(a,b,c){this.templateText=a;this.operator=b;this.varspecs=c}function k(a,b,c){var d="";c=c.toString();if(b.named){d+=w.encodeLiteral(a.varname);if(""===c)return d+=b.ifEmpty;d+="\x3d"}null!==a.maxLength&&(c=c.substr(0,a.maxLength));return d+=
b.encode(c)}function d(a){return n(a.value)}function f(c,g,f){var h=[],l="";if(g.named){l+=w.encodeLiteral(c.varname);if(a(f))return l+=g.ifEmpty;l+="\x3d"}e.isArray(f)?(h=e.filter(f,n),h=e.map(h,g.encode)):(h=b(f),h=e.filter(h,d),h=e.map(h,function(a){return g.encode(a.name)+","+g.encode(a.value)}));return l+=e.join(h,",")}function m(c,g,f){var h=[];e.isArray(f)?(h=e.filter(f,n),h=e.map(h,function(b){var d=w.encodeLiteral(c.varname);return d=a(b)?d+g.ifEmpty:d+("\x3d"+g.encode(b))})):(h=b(f),h=e.filter(h,
d),h=e.map(h,function(b){var c=w.encodeLiteral(b.name);return c=a(b.value)?c+g.ifEmpty:c+("\x3d"+g.encode(b.value))}));return e.join(h,g.separator)}function q(a,c){var d=[],f="";e.isArray(c)?(d=e.filter(c,n),d=e.map(d,a.encode)):(d=b(c),d=e.filter(d,function(a){return n(a.value)}),d=e.map(d,function(b){return a.encode(b.name)+"\x3d"+a.encode(b.value)}));return f+=e.join(d,a.separator)}c.prototype.toString=function(){return this.templateText};c.prototype.expand=function(b){var c=[],d,p,l,r=this.operator;
for(d=0;d<this.varspecs.length;d+=1)if(p=this.varspecs[d],l=b[p.varname],null!==l&&void 0!==l)if(e.isArray(l),"string"===typeof l||"number"===typeof l||"boolean"===typeof l)c.push(k(p,r,l));else{if(p.maxLength&&n(l))throw b=Error,l=JSON&&JSON.stringify?JSON.stringify(l):l,new b("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+l);p.exploded?n(l)&&(r.named?c.push(m(p,r,l)):c.push(q(r,l))):!r.named&&a(l)||c.push(f(p,r,l))}return 0===c.length?
"":r.first+e.join(c,r.separator)};return c}(),z=function(){function a(a,c){this.templateText=a;this.expressions=c;e.deepFreeze(this)}a.prototype.toString=function(){return this.templateText};a.prototype.expand=function(a){var b,e="";for(b=0;b<this.expressions.length;b+=1)e+=this.expressions[b].expand(a);return e};a.parse=C;a.UriTemplateError=m;return a}();x(z)})(function(x){"function"===typeof define?define("_uritemplate",[],function(){return x}):"undefined"!==typeof window?window.UriTemplate=x:global.UriTemplate=
x});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'v5/js/navigator/context.js' */
define("ac/navigator/context",function(){var a;return{setContextFunction:function(b){a=b},getContextFunction:function(){return a}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'v5/js/navigator/module.js' */
define("ac/navigator/module",["ac/navigator/utils","ac/navigator/routes","ac/navigator/context"],function(d,e,f){return{getLocation:function(a){var b=f.getContextFunction();$.isFunction(b)?(context=b(),"object"===$.type(context)?a(context):console.error("navigator context callback did not return an object")):console.error("no context function defined")},go:function(a,b,c){a=a.toLowerCase();b=b||{};b.addonKey||(b.addonKey=c._context.extension.addon_key);if(d.isApiEnabled())if(c=e.getRoutes(),e.hasRoutes()&&
a in c)if("function"===typeof c[a])c[a](b,d.goToUrl);else d.goToUrl(d.buildUrl(c[a],b));else console.error("The URL target "+a+" is not available. Valid targets are: "+Object.keys(c).toString());else console.error("connect navigation api not yet implemented for this product")},reload:function(){window.location.reload()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'v5/js/navigator/routes.js' */
define("ac/navigator/routes",function(){function f(a){return Object.keys(a).map(function(b){return["ac."+b,a[b]].map(encodeURIComponent).join("\x3d")}).join("\x26")}var b={addonmodule:function(a,b){var d=a&&a.addonKey,e=a&&a.moduleKey;if(!d)throw Error("Missing addonKey parameter in the context.");if(!e)throw Error("Missing moduleKey parameter in the context.");var c=[d,e].map(encodeURIComponent).join("/"),c=AJS.contextPath()+"/plugins/servlet/ac/"+c;void 0!=a.context&&(console.warn("DEPRECATED API - The context field has been deprecated in favor of customData."),
connectHost.trackDeprecatedMethodUsed("AP.navigate-context",{addon_key:d,moduleKey:e}));a=AJS.$.extend({},a.context||{},a.customData||{});a=f(a);b.apply(this,[""!=a?c+"?"+a:c])}};return{hasRoutes:function(){return b&&0!==Object.getOwnPropertyNames(b).length},addRoutes:function(a){b=AJS.$.extend(b,a)},getRoutes:function(){return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'v5/js/navigator/utils.js' */
define("ac/navigator/utils",["_uritemplate"],function(d){var c=!1;return{enableApi:function(){c=!0},disableApi:function(){c=!1},isApiEnabled:function(){return c},buildUrl:function(a,b){"/"!==a[0]&&(a="/"+a);return AJS.contextPath()+d.parse(a).expand(b)},goToUrl:function(a){window.location.href=a},hasContext:function(a,b){return a[b]?!0:(AJS.error("Missing "+b+" in navigator context"),!1)},appendQueryParam:function(a,b,c){return a+(-1<a.indexOf("?")?"\x26":"?")+b+"\x3d"+encodeURIComponent(c)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions-v5', location = 'v5/js/core/connect-host-cookie.js' */
(function(p){"object"===typeof exports&&"undefined"!==typeof module?module.exports=p():"function"===typeof define&&define.amd?define([],p):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).connectHostCookie=p()})(function(){return function r(k,h,l){function m(b,e){if(!h[b]){if(!k[b]){var f="function"==typeof require&&require;if(!e&&f)return f(b,!0);if(n)return n(b,!0);e=Error("Cannot find module '"+b+"'");throw e.code="MODULE_NOT_FOUND",e;
}e=h[b]={exports:{}};k[b][0].call(e.exports,function(e){var a=k[b][1][e];return m(a?a:e)},e,e.exports,r,k,h,l)}return h[b].exports}for(var n="function"==typeof require&&require,f=0;f<l.length;f++)m(l[f]);return m}({1:[function(r,k,h){function l(a){a=new RegExp("\\b"+a.replace(q,"\\$\x26")+"\x3d((?:[^\\\\;]+|\\\\.)*)(?:;|$)");return(a=document.cookie.match(a))&&a[1].replace(b,"")}function m(a,d,c){var g=l("AJS.conglomerate.cookie"),b=new RegExp("(\\s|\\|)*\\b"+a.replace(q,"\\$\x26")+"\x3d[^|]*[|]*"),
g=(g||"").replace(b,"|");""!==d&&(a=a+"\x3d"+d,4020>g.length+a.length&&(g+="|"+a));g=g.replace(e,"|");c=c||365;a="";d='"'+g.replace(t,'\\"')+'"';c&&(a=new Date,a.setTime(+a+864E5*c),a="; expires\x3d"+a.toGMTString());document.cookie="AJS.conglomerate.cookie\x3d"+d+a+";path\x3d/"}function n(a,d){if(!a||0===a.length)throw Error("addon key must be defined on cookies");if(!d||0===d.length)throw Error("Name must be defined");return a+"$$"+d}function f(a){if(a&&a._context)return a._context.extension.addon_key;
throw Error("addon key not found in callback");}Object.defineProperty(h,"__esModule",{value:!0});var b=/(\\|^"|"$)/g,e=/\|\|+/g,t=/"/g,q=/[.*+?|^$()[\]{\\]/g;h["default"]={save:function(a,d,c){var g=arguments[arguments.length-1],b=n(f(g),a);g._context&&m(b,d,c)},read:function(a,d){d=arguments[arguments.length-1];var c;var b=n(f(d),a);c=(c=l("AJS.conglomerate.cookie"))||"";b=new RegExp(b.replace(q,"\\$\x26")+"\x3d([^|]+)");c=(c=c.match(b))&&c[1];c=null!=c?c:void 0;d(c);return c},erase:function(a){var b=
n(f(arguments[arguments.length-1]),a);m(b,"")}};k.exports=h["default"]},{}]},{},[1])(1)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions-v5', location = 'v5/js/core/connect-host-history.js' */
(function(C){"object"===typeof exports&&"undefined"!==typeof module?module.exports=C():"function"===typeof define&&define.amd?define([],C):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).connectHostHistory=C()})(function(){return function p(t,c,k){function g(f,b){if(!c[f]){if(!t[f]){var e="function"==typeof require&&require;if(!b&&e)return e(f,!0);if(m)return m(f,!0);b=Error("Cannot find module '"+f+"'");throw b.code="MODULE_NOT_FOUND",b;
}b=c[f]={exports:{}};t[f][0].call(b.exports,function(a){var b=t[f][1][a];return g(b?b:a)},b,b.exports,p,t,c,k)}return c[f].exports}for(var m="function"==typeof require&&require,q=0;q<k.length;q++)g(k[q]);return g}({1:[function(p,t,c){function k(a,r){(0,e.callConnectHost)(function(h){(0,e.values)(h.getExtensions()).forEach(function(e){e=e.extension.addon_key;var f=new b.Current({url:window.location.href,state:r.state}),f=new b.Route(f);h.broadcastEvent(a,{addon_key:e},f.render(e))})})}function g(){a||
(window.addEventListener("popstate",function(a){var b=(0,e.createEvent)("ap_popstate");b.state=(0,e.unwrapState)(a.state);window.dispatchEvent(b)}),window.addEventListener("ap_popstate",function(a){var b=(0,e.createEvent)("ap_changestate");b.state=a.state;window.dispatchEvent(b);k(f.HISTORY_POPSTATE,a)}),window.addEventListener("ap_pushstate",function(a){var b=(0,e.createEvent)("ap_changestate");b.state=a.state;window.dispatchEvent(b);k(f.HISTORY_PUSHSTATE,a)}),window.addEventListener("ap_replacestate",
function(a){var b=(0,e.createEvent)("ap_changestate");b.state=a.state;window.dispatchEvent(b);k(f.HISTORY_REPLACESTATE,a)}),window.addEventListener("ap_changestate",function(a){k(f.HISTORY_CHANGESTATE,a)}),a=!0)}function m(a){var b=a.state.render();a=a.url.render();window.history.pushState((0,e.wrapState)(b),a.title,a.url)}function q(a){var b=a.state.render();a=a.url.render();window.history.replaceState((0,e.wrapState)(b),a.title,a.url)}Object.defineProperty(c,"__esModule",{value:!0});var f=p("./constants"),
b=p("./models"),e=p("./utils"),a=!1;c["default"]={_registerWindowListeners:function(){g()},back:function(a){a=arguments[arguments.length-1];this.go(-1,a)},forward:function(a){a=arguments[arguments.length-1];this.go(1,a)},go:function(a){arguments[arguments.length-1]._context.extension.options.isFullPage?window.history.go(a):(0,e.log)("History is only available to page modules")},getState:function(a,f){f=arguments[arguments.length-1];var c=f._context.extension.addon_key,h=new b.Current({url:window.location.href,
state:(0,e.unwrapState)(window.history.state)}),c=(new b.Route(h)).render(c);a=a?"string"===typeof a?a:"hash":"hash";if("hash"===a)f(c.hash);else if("all"===a)f(c);else throw Error("invalid type for getState");},pushState:function(a,f){f=arguments[arguments.length-1];var c=f._context.extension.addon_key,h=new b.Current({url:window.location.href,state:(0,e.unwrapState)(window.history.state)}),h=new b.Route(h),c=new b.Change(a,c),c=new b.Route(c);f._context.extension.options.isFullPage?(c.url.isURLEqual(h.url)?
(h.merge(c),q(h)):c.url.isPathnameEqual(h.url)?(h.merge(c),m(h)):m(c),h=(0,e.createEvent)("ap_pushstate"),h.state=(0,e.unwrapState)(window.history.state),window.dispatchEvent(h)):(0,e.log)("History is only available to page modules")},replaceState:function(a,f){f=arguments[arguments.length-1];var c=f._context.extension.addon_key,h=new b.Current({url:window.location.href,state:(0,e.unwrapState)(window.history.state)}),h=new b.Route(h),c=new b.Change(a,c),c=new b.Route(c);f._context.extension.options.isFullPage?
(c.url.isURLEqual(h.url)?(h.merge(c),q(h)):c.url.isPathnameEqual(h.url)?(h.merge(c),q(h)):q(c),h=(0,e.createEvent)("ap_replacestate"),h.state=(0,e.unwrapState)(window.history.state),window.dispatchEvent(h)):(0,e.log)("History is only available to page modules")}};t.exports=c["default"]},{"./constants":7,"./models":8,"./utils":9}],2:[function(p,t,c){(function(k){(function(g){function m(a){throw RangeError(d[a]);}function q(a,d){for(var b=a.length;b--;)a[b]=d(a[b]);return a}function f(a,d){return q(a.split(w),
d).join(".")}function b(a){for(var d=[],b=0,l=a.length,e,c;b<l;)e=a.charCodeAt(b++),55296<=e&&56319>=e&&b<l?(c=a.charCodeAt(b++),56320==(c&64512)?d.push(((e&1023)<<10)+(c&1023)+65536):(d.push(e),b--)):d.push(e);return d}function e(a){return q(a,function(a){var d="";65535<a&&(a-=65536,d+=A(a>>>10&1023|55296),a=56320|a&1023);return d+=A(a)}).join("")}function a(a,d){return a+22+75*(26>a)-((0!=d)<<5)}function h(a,d,b){var l=0;a=b?z(a/700):a>>1;for(a+=z(a/d);455<a;l+=36)a=z(a/35);return z(l+36*a/(a+38))}
function r(a){var d=[],b=a.length,l,c=0,f=128,y=72,g,r,n,k,w;g=a.lastIndexOf("-");0>g&&(g=0);for(r=0;r<g;++r)128<=a.charCodeAt(r)&&m("not-basic"),d.push(a.charCodeAt(r));for(g=0<g?g+1:0;g<b;){r=c;l=1;for(n=36;;n+=36){g>=b&&m("invalid-input");k=a.charCodeAt(g++);k=10>k-48?k-22:26>k-65?k-65:26>k-97?k-97:36;(36<=k||k>z((2147483647-c)/l))&&m("overflow");c+=k*l;w=n<=y?1:n>=y+26?26:n-y;if(k<w)break;k=36-w;l>z(2147483647/k)&&m("overflow");l*=k}l=d.length+1;y=h(c-r,l,0==r);z(c/l)>2147483647-f&&m("overflow");
f+=z(c/l);c%=l;d.splice(c++,0,f)}return e(d)}function x(d){var l,e,c,f,g,k,r,y,n,w=[],u,x,q;d=b(d);u=d.length;l=128;e=0;g=72;for(k=0;k<u;++k)n=d[k],128>n&&w.push(A(n));for((c=f=w.length)&&w.push("-");c<u;){r=2147483647;for(k=0;k<u;++k)n=d[k],n>=l&&n<r&&(r=n);x=c+1;r-l>z((2147483647-e)/x)&&m("overflow");e+=(r-l)*x;l=r;for(k=0;k<u;++k)if(n=d[k],n<l&&2147483647<++e&&m("overflow"),n==l){y=e;for(r=36;;r+=36){n=r<=g?1:r>=g+26?26:r-g;if(y<n)break;q=y-n;y=36-n;w.push(A(a(n+q%y,0)));y=z(q/y)}w.push(A(a(y,
0)));g=h(e,x,c==f);e=0;++c}++e;++l}return w.join("")}var u="object"==typeof c&&c,p="object"==typeof t&&t&&t.exports==u&&t,v="object"==typeof k&&k;if(v.global===v||v.window===v)g=v;var B=/^xn--/,l=/[^ -~]/,w=/\x2E|\u3002|\uFF0E|\uFF61/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input \x3e\x3d 0x80 (not a basic code point)","invalid-input":"Invalid input"},z=Math.floor,A=String.fromCharCode,n,v={version:"1.2.4",ucs2:{decode:b,encode:e},decode:r,encode:x,toASCII:function(a){return f(a,
function(a){return l.test(a)?"xn--"+x(a):a})},toUnicode:function(a){return f(a,function(a){return B.test(a)?r(a.slice(4).toLowerCase()):a})}};if(u&&!u.nodeType)if(p)p.exports=v;else for(n in v)v.hasOwnProperty(n)&&(u[n]=v[n]);else g.punycode=v})(this)}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}],3:[function(p,t,c){function k(){this.href=this.path=this.pathname=this.query=this.search=this.hash=this.hostname=this.port=this.host=
this.auth=this.slashes=this.protocol=null}function g(a,b,d){if(a&&m(a)&&a instanceof k)return a;var l=new k;l.parse(a,b,d);return l}function m(a){return"object"===typeof a&&null!==a}var q=p("punycode");c.parse=g;c.resolve=function(a,b){return g(a,!1,!0).resolve(b)};c.resolveObject=function(a,b){return a?g(a,!1,!0).resolveObject(b):b};c.format=function(a){"string"===typeof a&&(a=g(a));return a instanceof k?a.format():k.prototype.format.call(a)};c.Url=k;var f=/^([a-z0-9.+-]+:)/i,b=/:[0-9]*$/;t="{}|\\^`".split("").concat('\x3c\x3e"` \r\n\t'.split(""));
var e=["'"].concat(t),a=["%","/","?",";","#"].concat(e),h=["/","?","#"],r=/^[a-z0-9A-Z_-]{0,63}$/,x=/^([a-z0-9A-Z_-]{0,63})(.*)$/,u={javascript:!0,"javascript:":!0},D={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},B=p("querystring");k.prototype.parse=function(b,c,d){if("string"!==typeof b)throw new TypeError("Parameter 'url' must be a string, not "+typeof b);b=b.trim();var l=f.exec(b);if(l){var l=l[0],k=l.toLowerCase();
this.protocol=k;b=b.substr(l.length)}if(d||l||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var n="//"===b.substr(0,2);!n||l&&D[l]||(b=b.substr(2),this.slashes=!0)}if(!D[l]&&(n||l&&!v[l])){n=-1;for(d=0;d<h.length;d++)l=b.indexOf(h[d]),-1!==l&&(-1===n||l<n)&&(n=l);n=-1===n?b.lastIndexOf("@"):b.lastIndexOf("@",n);-1!==n&&(d=b.slice(0,n),b=b.slice(n+1),this.auth=decodeURIComponent(d));n=-1;for(d=0;d<a.length;d++)l=b.indexOf(a[d]),-1!==l&&(-1===n||l<n)&&(n=l);-1===n&&(n=b.length);this.host=b.slice(0,n);b=b.slice(n);
this.parseHost();this.hostname=this.hostname||"";n="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!n){var g=this.hostname.split(/\./);d=0;for(l=g.length;d<l;d++){var m=g[d];if(m&&!m.match(r)){for(var w="",p=0,t=m.length;p<t;p++)w=127<m.charCodeAt(p)?w+"x":w+m[p];if(!w.match(r)){l=g.slice(0,d);d=g.slice(d+1);if(m=m.match(x))l.push(m[1]),d.unshift(m[2]);d.length&&(b="/"+d.join(".")+b);this.hostname=l.join(".");break}}}}this.hostname=255<this.hostname.length?"":this.hostname.toLowerCase();
if(!n){m=this.hostname.split(".");g=[];for(d=0;d<m.length;++d)l=m[d],g.push(l.match(/[^A-Za-z0-9_-]/)?"xn--"+q.encode(l):l);this.hostname=g.join(".")}d=this.port?":"+this.port:"";this.host=(this.hostname||"")+d;this.href+=this.host;n&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!u[k])for(d=0,l=e.length;d<l;d++)n=e[d],m=encodeURIComponent(n),m===n&&(m=escape(n)),b=b.split(n).join(m);d=b.indexOf("#");-1!==d&&(this.hash=b.substr(d),b=b.slice(0,d));d=b.indexOf("?");
-1!==d?(this.search=b.substr(d),this.query=b.substr(d+1),c&&(this.query=B.parse(this.query)),b=b.slice(0,d)):c&&(this.search="",this.query={});b&&(this.pathname=b);v[k]&&this.hostname&&!this.pathname&&(this.pathname="/");if(this.pathname||this.search)d=this.pathname||"",l=this.search||"",this.path=d+l;this.href=this.format();return this};k.prototype.format=function(){var a=this.auth||"";a&&(a=encodeURIComponent(a),a=a.replace(/%3A/i,":"),a+="@");var b=this.protocol||"",d=this.pathname||"",e=this.hash||
"",c=!1,f="";this.host?c=a+this.host:this.hostname&&(c=a+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(c+=":"+this.port));this.query&&m(this.query)&&Object.keys(this.query).length&&(f=B.stringify(this.query));a=this.search||f&&"?"+f||"";b&&":"!==b.substr(-1)&&(b+=":");this.slashes||(!b||v[b])&&!1!==c?(c="//"+(c||""),d&&"/"!==d.charAt(0)&&(d="/"+d)):c||(c="");e&&"#"!==e.charAt(0)&&(e="#"+e);a&&"?"!==a.charAt(0)&&(a="?"+a);d=d.replace(/[?#]/g,function(a){return encodeURIComponent(a)});
a=a.replace("#","%23");return b+c+d+a+e};k.prototype.resolve=function(a){return this.resolveObject(g(a,!1,!0)).format()};k.prototype.resolveObject=function(a){if("string"===typeof a){var b=new k;b.parse(a,!1,!0);a=b}var d=new k;Object.keys(this).forEach(function(a){d[a]=this[a]},this);d.hash=a.hash;if(""===a.href)return d.href=d.format(),d;if(a.slashes&&!a.protocol)return Object.keys(a).forEach(function(b){"protocol"!==b&&(d[b]=a[b])}),v[d.protocol]&&d.hostname&&!d.pathname&&(d.path=d.pathname="/"),
d.href=d.format(),d;if(a.protocol&&a.protocol!==d.protocol){if(!v[a.protocol])return Object.keys(a).forEach(function(b){d[b]=a[b]}),d.href=d.format(),d;d.protocol=a.protocol;if(a.host||D[a.protocol])d.pathname=a.pathname;else{for(var e=(a.pathname||"").split("/");e.length&&!(a.host=e.shift()););a.host||(a.host="");a.hostname||(a.hostname="");""!==e[0]&&e.unshift("");2>e.length&&e.unshift("");d.pathname=e.join("/")}d.search=a.search;d.query=a.query;d.host=a.host||"";d.auth=a.auth;d.hostname=a.hostname||
a.host;d.port=a.port;if(d.pathname||d.search)d.path=(d.pathname||"")+(d.search||"");d.slashes=d.slashes||a.slashes;d.href=d.format();return d}var b=d.pathname&&"/"===d.pathname.charAt(0),c=a.host||a.pathname&&"/"===a.pathname.charAt(0),f=b=c||b||d.host&&a.pathname,h=d.pathname&&d.pathname.split("/")||[],e=a.pathname&&a.pathname.split("/")||[],g=d.protocol&&!v[d.protocol];g&&(d.hostname="",d.port=null,d.host&&(""===h[0]?h[0]=d.host:h.unshift(d.host)),d.host="",a.protocol&&(a.hostname=null,a.port=null,
a.host&&(""===e[0]?e[0]=a.host:e.unshift(a.host)),a.host=null),b=b&&(""===e[0]||""===h[0]));if(c)d.host=a.host||""===a.host?a.host:d.host,d.hostname=a.hostname||""===a.hostname?a.hostname:d.hostname,d.search=a.search,d.query=a.query,h=e;else if(e.length)h||(h=[]),h.pop(),h=h.concat(e),d.search=a.search,d.query=a.query;else if(null!=a.search){g&&(d.hostname=d.host=h.shift(),g=d.host&&0<d.host.indexOf("@")?d.host.split("@"):!1)&&(d.auth=g.shift(),d.host=d.hostname=g.shift());d.search=a.search;d.query=
a.query;if(null!==d.pathname||null!==d.search)d.path=(d.pathname?d.pathname:"")+(d.search?d.search:"");d.href=d.format();return d}if(!h.length)return d.pathname=null,d.path=d.search?"/"+d.search:null,d.href=d.format(),d;for(var c=h.slice(-1)[0],e=(d.host||a.host)&&("."===c||".."===c)||""===c,l=0,r=h.length;0<=r;r--)c=h[r],"."==c?h.splice(r,1):".."===c?(h.splice(r,1),l++):l&&(h.splice(r,1),l--);if(!b&&!f)for(;l--;l)h.unshift("..");!b||""===h[0]||h[0]&&"/"===h[0].charAt(0)||h.unshift("");e&&"/"!==h.join("/").substr(-1)&&
h.push("");f=""===h[0]||h[0]&&"/"===h[0].charAt(0);g&&(d.hostname=d.host=f?"":h.length?h.shift():"",g=d.host&&0<d.host.indexOf("@")?d.host.split("@"):!1)&&(d.auth=g.shift(),d.host=d.hostname=g.shift());(b=b||d.host&&h.length)&&!f&&h.unshift("");h.length?d.pathname=h.join("/"):(d.pathname=null,d.path=null);if(null!==d.pathname||null!==d.search)d.path=(d.pathname?d.pathname:"")+(d.search?d.search:"");d.auth=a.auth||d.auth;d.slashes=d.slashes||a.slashes;d.href=d.format();return d};k.prototype.parseHost=
function(){var a=this.host,e=b.exec(a);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),a=a.substr(0,a.length-e.length));a&&(this.hostname=a)}},{punycode:2,querystring:6}],4:[function(p,t,c){t.exports=function(c,m,q,f){q=q||"\x3d";var b={};if("string"!==typeof c||0===c.length)return b;var e=/\+/g;c=c.split(m||"\x26");m=1E3;f&&"number"===typeof f.maxKeys&&(m=f.maxKeys);f=c.length;0<m&&f>m&&(f=m);for(m=0;m<f;++m){var a=c[m].replace(e,"%20"),h=a.indexOf(q),g;0<=h?(g=a.substr(0,h),a=a.substr(h+1)):(g=a,a=
"");g=decodeURIComponent(g);a=decodeURIComponent(a);Object.prototype.hasOwnProperty.call(b,g)?k(b[g])?b[g].push(a):b[g]=[b[g],a]:b[g]=a}return b};var k=Array.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)}},{}],5:[function(p,t,c){function k(c,b){if(c.map)return c.map(b);for(var e=[],a=0;a<c.length;a++)e.push(b(c[a],a));return e}var g=function(c){switch(typeof c){case "string":return c;case "boolean":return c?"true":"false";case "number":return isFinite(c)?c:"";default:return""}};
t.exports=function(c,b,e,a){b=b||"\x26";e=e||"\x3d";null===c&&(c=void 0);return"object"===typeof c?k(q(c),function(a){var h=encodeURIComponent(g(a))+e;return m(c[a])?k(c[a],function(a){return h+encodeURIComponent(g(a))}).join(b):h+encodeURIComponent(g(c[a]))}).join(b):a?encodeURIComponent(g(a))+e+encodeURIComponent(g(c)):""};var m=Array.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)},q=Object.keys||function(c){var b=[],e;for(e in c)Object.prototype.hasOwnProperty.call(c,
e)&&b.push(e);return b}},{}],6:[function(p,t,c){c.decode=c.parse=p("./decode");c.encode=c.stringify=p("./encode")},{"./decode":4,"./encode":5}],7:[function(p,t,c){Object.defineProperty(c,"__esModule",{value:!0});c.STATE_AP_KEY="_AP";c.QUERY_KEY_PREFIX="ac";c.QUERY_KEY_DELIMITER=".";c.ANCHOR_PREFIX="!";c.HISTORY_POPSTATE="history_popstate";c.HISTORY_PUSHSTATE="history_pushstate";c.HISTORY_REPLACESTATE="history_replacestate";c.HISTORY_CHANGESTATE="history_changestate"},{}],8:[function(p,t,c){function k(a){a=
a||{};if(!a.key)throw Error("missing key for addon");this.key=a.key;this.state=a.state;this.query=a.query||{};return this}function g(a){a=a||{};a.models=a.models||[];a.models instanceof Array||(a.models=[a.models]);a.models=a.models.map(function(a){return a instanceof k?a:new k(a)});this.models=a.models;return this}function m(a){a=a||{};a.addons=a.addons||[];a.addons instanceof g||(a.addons=new g(a.addons));this.addons=a.addons;return this}function q(a){a=a||{};a.addons=a.addons||[];a.global=a.global||
[];a.parsed instanceof b["default"].Url||(a.parsed=b["default"].parse(a.url));a.addons instanceof g||(a.addons=new g(a.addons));this.parsed=a.parsed;this.addons=a.addons;this.global=a.global;this.title=a.title||window.document.title}function f(a){a=a||{};if(!a.url)throw Error("missing url option");a.url instanceof q||(a.url=new q(a.url));if(!a.state)throw Error("missing state option");a.state instanceof m||(a.state=new m(a.state));this.url=a.url;this.state=a.state}Object.defineProperty(c,"__esModule",
{value:!0});c.Addon=k;c.Addons=g;c.Current=function(a){a=a||{};if(!a.url)throw Error("missing url");var c=b["default"].parse(a.url),f=new g,c=(0,e.parseQuery)(c.query).map(e.stripAddonQueryPrefix),x=(0,e.normalizeQueryByAddons)(c),c=x.filter(function(a){return a.key}),x=x.filter(function(a){return!a.key});c.forEach(function(a){a=new k(a);f.add(a)});this.url=new q({url:a.url,addons:f,global:x});this.state=new m(a.state);return this};c.Change=function(a,c){var h=typeof a,f=b["default"].parse(window.location.href),
u={},p,t;if("string"===h)u.protocol=f.protocol,u.slashes=f.slashes,u.hostname=f.hostname,u.pathname=f.pathname,u.port=f.port,u.search=f.search,u.query=f.query,u.hash=(0,e.addHash)((0,e.addHashPrefix)(a));else if("object"===h)t=a.href?b["default"].parse(a.href):f,u.protocol=f.protocol,u.slashes=f.slashes,u.hostname=f.hostname,u.port=f.port,u.pathname=t.pathname||f.pathname,u.search=null,u.query=null,u.hash=a.hash?(0,e.addHash)((0,e.addHashPrefix)(a.hash)):null,p=a.state,t=a.query;else throw Error("invalid option type");
f=new g;a=new g;p&&(p=new k({key:c,state:p}),f.add(p));t&&(c=new k({key:c,query:t}),a.add(c));c=new m({addons:f});u=new q({url:b["default"].format(u),addons:a});this.state=c;this.url=u;return this};c.State=m;c.URL=q;c.Route=f;var b=(t=p("url"))&&t.__esModule?t:{"default":t},e=p("./utils");g.prototype.add=function(a){this.models.push(a)};g.prototype.remove=function(a){this.models.splice(this.models.indexOf(a),1)};g.prototype.find=function(a){return(0,e.find)(this.models,function(b){return b.key===
a})};g.prototype.merge=function(a){var b=this.find(a.key);b&&this.remove(b);this.add(a)};m.prototype.merge=function(a){var b=this;a.addons.models.forEach(function(a){b.addons.merge(a)})};m.prototype.render=function(){return(0,e.deepCopy)(this)};q.prototype.isURLEqual=function(a){return this.render().url===a.render().url};q.prototype.isPathnameEqual=function(a){var b=this.parsed.slashes===a.parsed.slashes,c=this.parsed.hostname===a.parsed.hostname,e=this.parsed.pathname===a.parsed.pathname;return this.parsed.protocol===
a.parsed.protocol&&b&&c&&e};q.prototype.merge=function(a){var b=this;b.parsed.hash=a.parsed.hash;a.addons.models.forEach(function(a){b.addons.merge(a)})};q.prototype.render=function(){var a=(0,e.deepCopy)(this),c=a.parsed,f=(0,e.denormalizeQueryByAddons)(this.addons.models),g=(0,e.denormalizeQueryByAddons)(this.global),f=f.concat(g).map(e.addAddonQueryPrefix),f=(0,e.formatQuery)(f);c.query=f;c.search=c.query?"?"+c.query:null;a.url=b["default"].format(c);return a};f.prototype.merge=function(a){this.url.merge(a.url);
this.state.merge(a.state)};f.prototype.render=function(a){return(0,e.deepCopy)({key:a,hash:(0,e.stripHashPrefix)((0,e.stripHash)(this.url.parsed.hash)),query:this.url.addons.find(a)?this.url.addons.find(a).query:null,title:this.url.title,href:this.url.parsed.href,state:this.state.addons.find(a)?this.state.addons.find(a).state:null})}},{"./utils":9,url:3}],9:[function(p,t,c){function k(b,c,a){c in b?Object.defineProperty(b,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):b[c]=a;return b}function g(b){return void 0===
b||null===b||""===b?"":b.toString().replace(new RegExp("^"+f.ANCHOR_PREFIX),"")}function m(b){b=b?b.split("\x3d"):[];return 2===b.length?{key:b[0],value:b[1]}:null}function q(b){return"key"in b&&"value"in b?[b.key,"\x3d",b.value].join(""):null}Object.defineProperty(c,"__esModule",{value:!0});c.find=function(b,c){for(var a=0,e=b.length;a<e;a+=1)if(c(b[a]))return b[a]};c.values=function(b){var c=[];if(!b)return c;for(var a in b)c.push(b[a]);return c};c.stripHash=function(b){return b?b.slice(b.search("#")+
1):null};c.stripHashPrefix=g;c.addHash=function(b){return"#"+b};c.addHashPrefix=function(b){if(void 0===b||null===b)throw"You must supply text to prefix";return f.ANCHOR_PREFIX+g(b)};c.splitQueryParam=m;c.joinQueryParam=q;c.parseQuery=function(b){return(b?b.split("\x26"):[]).map(function(b){return m(b)}).filter(function(b){return b})};c.formatQuery=function(b){b=b.map(function(b){return q(b)}).filter(function(b){return b});return b.length?b.join("\x26"):null};c.stripAddonQueryPrefix=function(b){var c=
b.key?b.key.split(f.QUERY_KEY_DELIMITER):[],a=f.QUERY_KEY_PREFIX;return 3<=c.length&&a===c[0]?(a=c.slice(1,c.length-1).join(f.QUERY_KEY_DELIMITER),c=c.slice(c.length-1).join(f.QUERY_KEY_DELIMITER),{addonKey:a,key:c,value:b.value}):b};c.addAddonQueryPrefix=function(b){var c=f.QUERY_KEY_PREFIX;return"addonKey"in b&&b.addonKey?{key:[c,b.addonKey,b.key].join(f.QUERY_KEY_DELIMITER),value:b.value}:b};c.normalizeQueryByAddons=function(b){var c=[];b.forEach(function(a){var b=a.key,e=a.value,f=a.addonKey;
(a=c.filter(function(a){return a.key===f}))&&a.length?a[0].query[b]=e:c.push({key:f,query:k({},b,e)})});return c};c.denormalizeQueryByAddons=function(b){var c=[];b.forEach(function(a){var b=a.key;Object.keys(a.query).forEach(function(e){c.push({addonKey:b,key:e,value:a.query[e]})})});return c};c.deepCopy=function(b){return JSON.parse(JSON.stringify(b))};c.wrapState=function(b){var c={};c[f.STATE_AP_KEY]=b;return c};c.unwrapState=function(b){return b&&b[f.STATE_AP_KEY]?b[f.STATE_AP_KEY]:null};c.createEvent=
function(b){if("function"===typeof Event)var c=new Event(b);else c=document.createEvent("Event"),c.initEvent(b,!1,!1);return c};c.callConnectHost=function(b){p&&p.amd?p(["connect-host"],function(c){b(c)}):b(window.connectHost)};c.log=function(b,c){c||(c="log");console[c].call(null,"Atlassian Connect JS History: ",b)};var f=p("./constants")},{"./constants":7}]},{},[1])(1)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions-v5', location = 'v5/js/core/connect-host-request.js' */
(function(q){"object"===typeof exports&&"undefined"!==typeof module?module.exports=q():"function"===typeof define&&define.amd?define([],q):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).connectHostRequest=q()})(function(){return function t(n,h,l){function m(d,f){if(!h[d]){if(!n[d]){var k="function"==typeof require&&require;if(!f&&k)return k(d,!0);if(p)return p(d,!0);f=Error("Cannot find module '"+d+"'");throw f.code="MODULE_NOT_FOUND",f;
}f=h[d]={exports:{}};n[d][0].call(f.exports,function(a){var e=n[d][1][a];return m(e?e:a)},f,f.exports,t,n,h,l)}return h[d].exports}for(var p="function"==typeof require&&require,k=0;k<l.length;k++)m(l[k]);return m}({1:[function(t,n,h){function l(a){return a.replace(/(http[s]?:\/\/[^"]*?&jwt=[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*.*?)\\"/gi,'\\"')}function m(a){var e={headers:{}};d.forEach(function(c,d){e[c]=a[c];if("responseText"===c)try{JSON.parse(a[c]),e[c]=l(a[c])}catch(v){}},this);
f.forEach(function(c,d){e.headers[c]=a.getResponseHeader(c)},this);return e}function p(a,e,c){c._isBlob&&c.blob&&c.name?a.append(e,c.blob,c.name):a.append(e,c);return a}function k(a){a.contentType=!1;a.processData=!1;if(a.data&&"object"===typeof a.data){var e=new FormData;Object.keys(a.data).forEach(function(c){var d=a.data[c];Array.isArray(d)?d.forEach(function(a,b){e=p(e,c+"["+b+"]",a)}):e=p(e,c,d)});a.data=e;a.headers["X-Atlassian-Token"]="no-check"}else throw Error("For a Multipart request, data must to be an Object");
return a}Object.defineProperty(h,"__esModule",{value:!0});var d=["status","statusText","responseText"],f=["Content-Type","ETag"],u=["If-Match","If-None-Match"];h.stripJWTUrls=l;h["default"]={request:function(a,e){function c(a,b,c){e(c,m(a),c)}var d=AJS.contextPath(),f={};e=arguments[arguments.length-1];"string"===typeof a&&(a={url:a});d+=a.url;d=d.replace(/\/\.\.\//ig,"");a.headers=a.headers||{};Object.getOwnPropertyNames(a.headers).forEach(function(b){f[b.toLowerCase()]=a.headers[b]},this);var b=
{url:d,type:a.type||"GET",data:a.data,dataType:"text",contentType:a.contentType,cache:"undefined"!==typeof a.cache?!!a.cache:void 0,headers:{Accept:f.accept||"*/*","AP-Client-Key":e._context.extension.addon_key}};"multipart/form-data"===b.contentType&&(b=k(b));b.data&&"object"===typeof b.data&&"GET"===b.type.toUpperCase()&&Object.keys(b.data).forEach(function(a){b.url+=(0<=b.url.indexOf("?")?"\x26":"?")+encodeURIComponent(a)+"\x3d"+encodeURIComponent(b.data[a])});!0===a.experimental&&(b.headers["X-ExperimentalApi"]=
"opt-in");u.forEach(function(a,c){f[a.toLowerCase()]&&(b.headers[a]=f[a.toLowerCase()])},this);b.cache||(b.url+=(0<=b.url.indexOf("?")?"\x26":"?")+"_r\x3d"+(new Date).getTime());var g=new XMLHttpRequest;g.open(b.type,b.url,!0);b.contentType&&(b.headers["Content-type"]=b.contentType);Object.getOwnPropertyNames(b.headers).forEach(function(a){g.setRequestHeader(a,b.headers[a])});g.onload=function(){if(200<=this.status&&300>this.status){var a=g.responseText;e(!1,m(g),a)}else c(g,g.statusText,g.responseText)};
g.onerror=function(){c(g,g.statusText,g.responseText)};try{g.send(b.data||null)}catch(r){c(g,void 0,r),console.error("ACJS Request: ",r.message,r)}}}},{}]},{},[1])(1)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user-v5', location = 'v5/js/iframe/host/user.js' */
define("ac/user",function(){return{getUser:function(a){var b=a._context.extension.options.user,c=AJS.Meta.get("remote-user-fullname")||AJS.Meta.get("current-user-fullname")||null;a({fullName:c,id:b.uid,key:b.ukey})},getCurrentUser:function(a){var b=AJS.Meta.get("atlassian-account-id")||null;a({atlassianAccountId:b})},getTimeZone:function(a){a(a._context.extension.options.user.timeZone)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:content-resolver-v5', location = 'v5/js/iframe/host/content-resolver.js' */
(function(){function g(a,b){return AJS.contextPath()+"/plugins/servlet/ac/"+encodeURIComponent(a)+"/"+encodeURIComponent(b)}function h(a){var b={};_.keys(a).forEach(function(d){b["ac."+d]=a[d]});return b}function k(a,b){var d={};_.keys(a).forEach(function(c){b(c,a[c])&&(d[c]=a[c])});return d}function f(a){a=a.getResponseHeader("Date");a=Math.round(Date.parse(a)/1E3);var b=Math.round(Date.now()/1E3);isNaN(a)||(a=Math.abs(b-a),connectHost.setJwtClockSkew(a+60))}function e(a,b){return AJS.$.Deferred(function(d){var c=
{"plugin-key":a.addon_key,"product-context":JSON.stringify(a.options.productContext||{}),key:a.key,width:a.width||"100%",height:a.height||"100%",classifier:a.classifier||"raw"};a.options.contentClassifier&&(c.classifier=[a.options.contentClassifier,c.classifier]);var e=k(a.options.customData||{},function(a,b){return _.isObject(b)?!1:"string"===typeof b||b instanceof String?255>b.length:!0});AJS.$.ajax(g(a.addon_key,a.key),{dataType:"json"===a.classifier?"json":"html",data:AJS.$.extend({},c,h(e)),
type:"POST"}).then(function(a,c,e){f(e);b?d.resolve(window._AP._convertConnectOptions(a)):require(["ac/create"],function(b){d.resolve(window._AP._convertConnectOptions(a))})}).fail(function(b,c,e){f(b);d.reject({addon_key:a.addon_key,key:a.key,options:a.options},{text:"Unable to retrieve addon module URL. Please check your specified module key."})})}).promise()}define("ac/content-resolver",function(){return{resolveByExtension:e}});connectHost.registerContentResolver.resolveByExtension(e)})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-context-v5', location = 'v5/js/context/main.js' */
define("ac/context",["ac/content-resolver"],function(k){function d(a){if(a.id&&1<a.id.length)return a.id;throw Error("ACJS: cannot generate cache key for extension");}function g(a,b){var e={};if(b=c[b].context.license)e.license=b;a.confluence&&(e.confluence=a.confluence);a.jira&&(e.jira=a.jira);return e}function l(a){a=3E4+a;var b=Date.now();return a<b}function h(a,b){return{license:a.license,cachedAt:Date.now(),contextJwt:b}}function f(a){var b=d(a);if(!c[b]||!c[b].promise&&c[b].context&&l(c[b].context.cachedAt))a.classifier=
"json",c[b]={promise:k.resolveByExtension(a,!0).done(function(a){c[b].context=h(a.options.structuredContext,a.options.contextJwt)})}}var c={};window.connectHost.onIframeEstablished(function(a){var b=a.extension.options;b.contextJwt&&connectHost.isJwtExpired(b.contextJwt,!0)||!b.structuredContext?f(a.extension):(b=d(a.extension),c[b]={context:h(a.extension.options.structuredContext,a.extension.options.contextJwt)})});window.connectHost.onIframeUnload(function(a){delete c[d(a.extension)]});return{getToken:function(a){var b=
d(a._context.extension);f(a._context.extension);if(!a._context.extension.options.contextJwt||2>a._context.extension.options.contextJwt.length)throw Error("ACJS: Cannot get token. Add-on does not support JWT authentication");c[b].promise?c[b].promise.done(function(b){try{a(b.options.contextJwt)}catch(m){}}.bind(this)).fail(function(){console.error("ACJS: content resolver failed to get context jwt token")}).always(function(){delete c[b].promise}.bind(this)):a(c[b].context.contextJwt)},getContext:function(a){var b=
d(a._context.extension);f(a._context.extension);c[b].promise?c[b].promise.done(function(c){try{a(g(c.options.structuredContext,b))}catch(m){}}.bind(this)).fail(function(){console.error("ACJS: content resolver failed to get context")}).always(function(){delete c[b].promise}.bind(this)):a(g(a._context.extension.options.structuredContext,b))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:module-loader-v5', location = 'v5/js/iframe/host/module-loader.js' */
connectHost.defineModule("cookie",connectHostCookie);connectHost.defineModule("history",connectHostHistory);connectHost.defineModule(connectHostRequest.default);connectHost.defineModule("navigator",require("ac/navigator/module"));connectHost.defineModule("user",require("ac/user"));connectHost.defineModule("context",require("ac/context"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-insertion-v5', location = 'v5/js/iframe/combined/iframe-insertion.js' */
(function(){function h(a){var c;if("string"===typeof a&&1<a.length)try{c=JSON.parse(a)}catch(b){console.error("ACJS: failed to decode context",a)}"object"!==typeof c&&(c={});return c}function l(a,c){if("number"!==typeof a)return window.top;c=c||window;for(var b=0;b<a;b++)c=c.parent;return c}function g(a){function c(){var a=document.getElementById(b.containerId);window._AP.addonAttemptCounter[b.containerId]++;if(a)if(delete window._AP.addonAttemptCounter[b.containerId],window._AP.isSubHost){a.appendChild(d);
var a=d.contentDocument,f="(function(){ var w \x3d window; for (var i\x3d0; i\x3c"+b.options.hostFrameOffset+"; i++){w \x3d w.parent; } w.postMessage("+JSON.stringify({type:"set_inner_iframe_url",iframeData:b})+', "*");}());';a.open();a.write("\x3cscript\x3e"+f+"\x3c/script\x3e");a.close()}else{if(f=a.querySelector(".ap-iframe-container"))f.parentNode.removeChild(f),AJS.log&&AJS.log("AJS: duplicate iframe removed",b,a);d.appendTo(a);d.data("addon-key",b.addon_key);d.data("key",b.key)}else 10>=window._AP.addonAttemptCounter[b.containerId]&&
m(c)}window._AP.isSubHost=l(a.hostFrameOffset)!==window;var b=window._AP._convertConnectOptions(a),d;window._AP.isSubHost?d=window._AP._createSub(b):(n({addon_key:b.addon_key,key:b.key}).forEach(function(a){if(a.extension.options.uniqueKey===b.options.uniqueKey){var c=document.getElementById(a.extension_id);e().destroy(a.extension_id);c&&AJS.$(c).closest(".ap-iframe-container").remove()}},this),d=e().create(b));window._AP.addonAttemptCounter[b.containerId]=0;c()}var m=function(){return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,50)}}(),e=function(){return window.connectHost||window.AP},n=function(a){return e().getExtensions(a).filter(function(a){return!!document.getElementById(a.extension_id)})},k=function(a,c,b){try{var d=require(a);c(d)}catch(p){0>=b?(console.error("Unable to load module: "+a),c(null)):setTimeout(function(){k(a,c,b-1)},500)}};window._AP=window._AP||{};window._AP.addonAttemptCounter=window._AP.addonAttemptCounter||
{};window._AP._convertConnectOptions=function(a){var c={url:a.url,ns:a.uniqueKey,addon_key:a.addon_key,key:a.key,containerId:"embedded-"+a.uniqueKey,options:{history:{state:""},uniqueKey:a.uniqueKey,origin:a.origin,hostOrigin:a.hostOrigin,isFullPage:"1"===a.general,autoresize:!0,user:{timeZone:a.timeZone,fullName:a.fullName,uid:a.uid,ukey:a.ukey},productContext:h(a.productCtx),structuredContext:h(a.structuredContext),contextJwt:a.contextJwt,contextPath:a.cp,width:a.w||a.width,height:a.h||a.height,
targets:{env:{resize:"both"}}}};"string"===typeof a.contentClassifier&&(c.options.contentClassifier=a.contentClassifier);"number"===typeof a.hostFrameOffset&&(c.options.hostFrameOffset=a.hostFrameOffset+1);window._AP.isSubHost||(c.options.history.state=window.location.hash?window.location.hash.substr(2):"");return c};window._AP._createSub=function(a){var c=document.createElement("iframe"),b=e().subCreate(a);b.width=a.options.width||"";b.height=a.options.height||"";b.style="border:0;";b["class"]="ap-iframe";
b["data-addon-key"]=a.addon_key;b["data-key"]=a.key;delete b.src;Object.getOwnPropertyNames(b).forEach(function(a){c.setAttribute(a,b[a])});return c};window._AP.appendConnectAddon=function(a){var c=!1;try{window.top.karma&&(c=!0)}catch(d){}if(window===window.top||c)/com\.atlassian\.(jira|confluence)\.emcee(;|$|\.local|\.staging)/g.test(a.addon_key)?k("ac/marketplace",function(b){b&&e().defineModule("marketplace",b);g(a)},20):g(a);else{var b=function(c){c.source===window.top&&c.data&&void 0!==c.data.hostFrameOffset&&
(window.removeEventListener("message",b),a.hostFrameOffset=c.data.hostFrameOffset,g(a))};window.addEventListener("message",b);window.top.postMessage({type:"get_host_offset"},"*")}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'v5/js/iframe/host/util.js' */
_AP.util={escapeSelector:function(a){if(!a)throw Error("No selector to escape");return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$\x26")}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'v5/js/iframe/host/main.js' */
_AP.addonAttemptCounter={};connectHost.onIframeEstablished(function(a){a.$el.closest(".ap-iframe-container").addClass("iframe-init")});AJS.$(window).on("blur",function(){var a=AJS.LayerManager.global.getTopLayer();if(a&&a.hasClass("aui-dialog2"))return!1;AJS.$(document.activeElement).hasClass("ap-iframe")&&document.documentElement.click()});define("ac/create",function(){return{appendConnectAddon:function(a){return window._AP.appendConnectAddon(a)}}});
window.addEventListener("message",function(a){"set_inner_iframe_url"===a.data.type&&(a.source.location=a.data.iframeData.url)});connectHost.setExtensionConfigurationOptions("crev",window._AP.allJsVersion);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-content-property-api-v5', location = 'v5/js/confluence/contentproperty/content-property.js' */
(function(g,e){e("ac/confluence/content-property",["confluence/root","ajs"],function(e,d){function h(a){var b=e.getContentId();return d.contextPath()+"/rest/api/content/"+b+"/property/"+a}function k(a){d.log(a);d.flag({type:"error",title:a,body:"\x3cp\x3eThere was a problem communicating with the server. Please refresh the page and try again\x3c/p\x3e"})}function l(a,b){var c=h(a);g.getJSON(c).done(b).fail(function(c){404===c.status?b(null):k("Unable to check item state: "+a)})}function n(a,b){var c=
a.key,f={url:h(c),contentType:"application/json",data:JSON.stringify(a)};f.type=a.version&&a.version.number&&1<a.version.number?"PUT":"POST";g.ajax(f).done(function(a){d.log("contentProperty "+c+" "+f.type+" successful");"function"===typeof b&&b(a)}).fail(function(a,d,e){k("Unable to "+f.type+" item: "+c);"function"===typeof b&&b({error:e})})}function m(a,b){d.trigger("contentProperty.update",{contentProperty:a,extension:b})}return{getContentProperty:function(a,b){l(a,b)},syncPropertyFromServer:function(a,
b){l(a,function(a){m(a,b._context.extension);b(a)})},setContentProperty:function(a,b){m(a,b._context.extension);n(a,b)}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-api-v5', location = 'v5/js/confluence/utils.js' */
define("ac/confluence/utils",["document"],function(a){return{isFabricEditor:function(){return 0<a.querySelectorAll("[data-fabric-mode]").length}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-api-v5', location = 'v5/js/confluence/macro/macro.js' */
define("ac/confluence/macro",["confluence/root","ajs","ac/confluence/utils"],function(k,g,l){function h(){var a=require("confluence-macro-browser/macro-browser");void 0===a&&(a={getMacroName:function(a){},getMacroParams:function(a){},getMacroBody:function(){throw Error("confluence-macro-browser/macro-browser is unavailable");}});return a}var e=void 0,b={};return{getMacroBody:function(a){if(b&&"string"===typeof b.body)a(b.body);else{var c;try{var d=h().getMacroBody();c=a._context.extension.options.productContext["macro.id"];
var f=$($.parseXML('\x3croot xmlns:ac\x3d"guid"\x3e'+d+"\x3c/root\x3e")).find("[ac\\:macro-id\x3d'"+c+"']");1==f.length?a(f.html().replace('xmlns:ac\x3d"guid"',"")):a(d)}catch(m){c=a._context.extension.options.productContext,"false"===c["macro.truncated"]?a(c["macro.body"]):(d=c["page.id"],f=c["page.version"],c=c["macro.id"],g.$.ajax({url:g.contextPath()+"/rest/api/content/"+d+"/history/"+f+"/macro/id/"+c,dataType:"json",success:function(b){a(b.body)}}))}}},closeCurrentMacroPropertyPanel:function(){g.Confluence.PropertyPanel.destroy()},
setLastSelectedConnectMacroNode:function(a){b.locationToInsert=void 0;b.params=void 0;b.body=void 0;b.name=void 0;e=void 0!==h().getMacroName(a)?a:void 0},setUnsavedMacroData:function(a,c,d,f){b.body=c;b.params=d;b.locationToInsert=f;b.name=a},getCurrentMacroParameters:function(){return void 0===e?b.params:h().getMacroParams(e)},saveMacro:function(){return tinymce.confluence.MacroUtils.updateMacro.apply(this,arguments)},saveCurrentMacro:function(a,c){if(l.isFabricEditor())return require("confluence-macro-browser/macro-browser-facade").insert({name:b.name,
params:a});if(void 0===e)return b.params=a,b.body=c,a={contentId:k.getContentId(),macro:{name:b.name,params:b.params,body:null===b.body?"":b.body}},g.Rte.getEditor().selection.moveToBookmark(b.locationToInsert),tinymce.confluence.MacroUtils.insertMacro(a).done(function(a){e=a});var d=h().getMacroName(e);if(void 0!==d)return tinymce.confluence.MacroUtils.updateMacro(a,c,d,e).done(function(a){e=a})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/bookmark.js' */
(function(d,c){c("ac/confluence/macro/bookmark",["ajs"],function(b){var a;return{createBookmark:function(){return a=b.Rte.getEditor().selection.getBookmark()},destroyBookmark:function(){a&&(a.keep=!1,b.Rte.getEditor().selection.moveToBookmark(a),a=null)}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/editor.js' */
(function(m,e){e("ac/confluence/macro/editor",["ac/confluence/macro","ac/confluence/macro/bookmark","ajs","ac/confluence/utils"],function(f,g,h,e){var k;return{close:function(){connectHost.dialog.close()},getMacroData:function(a){return a(f.getCurrentMacroParameters())},getMacroBody:function(a){return a(k)},openCustomEditor:function(a,b){var c;if(!e.isFabricEditor()){h.Rte.getEditor().focus();var d=h.Rte.getEditor().selection.getNode();c=g.createBookmark();f.setLastSelectedConnectMacroNode(d)}f.setUnsavedMacroData(a.name,
a.body?a.body:"",a.params,c);k=a.body;c={addon_key:b.addonKey,key:a.name};var d=b.width||null,l=b.height||null;a={header:a.params?b.editTitle:b.insertTitle,submitText:a.params?"Save":"Insert",width:d,height:l,onHide:g.destroyBookmark};"100%"!==d&&"100%"!==l&&(a.chrome=!0);connectHost.dialog.create(c,a)}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-iframe.js' */
(function(c,b){b("ac/confluence/macro/property-panel-iframe",["ac/confluence/macro","ajs"],function(b,d){return function(e){return{propertyPanelIFrameInjector:function(f){var g=d.Rte.getEditor().selection;b.setLastSelectedConnectMacroNode(g.getNode());c.ajax(e,{data:{classifier:"property-panel"}}).done(function(a){a=c(a);a.css("display","none");f.panel.append(a)})}}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-controls.js' */
(function(g,c){c("ac/confluence/macro/property-panel-controls",["underscore"],function(a){return function(c){var d;return{getControls:function(e){var b;if(!(b=d)){var f=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-macro.property-panel-controls");try{b=a.first(a.filter(a.pluck(f,c),a.isObject))}catch(h){b=null}}d=b;e(d)}}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro-v5', location = 'v5/js/confluence/macro/property-panel-event.js' */
(function(h,d){d("ac/confluence/macro/property-panel-event",[],function(){var e,b=[],g=function(a,b,c){connectHost.broadcastEvent(a,function(a){return-1!==a.extension_id.indexOf(b)});c()};return{waitForPropertyPanelEventBindings:function(){e=!1;b=[]},propertyPanelEventsBound:function(){for(e=!0;0<b.length;){var a=b.shift();g(a.eventKey,a.macroName,a.doneCallback)}},handlePropertyPanelEvent:function(a,d,c){var f=h.Deferred();"click"===a&&(a="click."+d+"."+c+".macro.property-panel",e?g(a,c,f.resolve):
10>b.length&&b.push({eventKey:a,macroName:c,doneCallback:f.resolve}));return f},_getQueueLength:function(){return b.length}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes-v5', location = 'v5/js/confluence/navigator/routes.js' */
(function(l,f){f(["ac/navigator/routes","ac/navigator/utils"],function(f,g){function h(a,c){l.ajax({url:d+"/rest/api/content/"+a,dataType:"json"}).success(c).fail(function(){AJS.error("Content not found (ID\x3d"+a+")")})}var m=["page","blogpost","attachment","comment"],d=AJS.contextPath();AJS.Meta.get("enabled-dark-features");var e=g.hasContext,k=g.appendQueryParam;f.addRoutes({dashboard:"",contentedit:function(a,c){e(a,"contentId")&&h(a.contentId,function(a){var b=a.type;/^ac:/.test(b)?c(d+"/display/"+
a.space.key+"/customcontent/edit/"+a.id):-1!==m.indexOf(b)?c(d+"/pages/edit"+b+".action?pageId\x3d"+a.id):AJS.error('Cannot navigate to "contentedit" target for content (ID\x3d'+a.id+"). Content type \x3c"+b+"\x3e is not supported.")})},spacetools:"/spaces/viewspacesummary.action?key\x3d{spaceKey}",spaceview:"/spaces/{spaceKey}",userprofile:function(a,c){var b;e(a,"userAccountId")?b="/people/"+a.userAccountId:e(a,"username")&&(b=d+"/display/~"+a.username);b&&c(b)},contentview:function(a,c){e(a,"contentId")&&
h(a.contentId,function(b){b=d+b._links.webui;e(a,"versionOverride")&&(b=k(b,"versionOverride",a.versionOverride));e(a,"embeddedContentRender")&&(b=k(b,"embeddedContentRender",a.embeddedContentRender));b&&c(b)})},contentlist:function(a,c){var b=encodeURIComponent(a.spaceKey);a=a.contentType;"page"===a?c(d+"/spaces/"+b+"/pages"):"blogpost"===a?c(d+"/spaces/"+b+"/blog"):/^ac:/.test(a)?c(d+"/display/"+b+"/customcontent/list/"+encodeURIComponent(a)):AJS.error('Cannot navigate to "contentlist" target for content type \x3c'+
a+"\x3e")}});g.enableApi()})})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes-v5', location = 'v5/js/confluence/navigator/context.js' */
(function(c,a){a(["ac/navigator/context","confluence/api/navigator-context"],function(a,b){a.setContextFunction(b.getCurrent)})})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-customcontent-v5', location = 'v5/js/confluence/customcontent/custom-content-api.js' */
define("ac/confluence/custom-content-api",[],function(){function e(a){return function(b,f){if(g[a]&&d[a]){var c=d[a];clearTimeout(c.timeout);delete d[a];try{!1===b?c.reject("[object String]"===Object.prototype.toString.call(f)?f:""):c.proceed(b)}finally{c.done&&c.done()}}else AJS.error("Event callback for "+a+" has been invoked before a event happens.")}}function b(){}var g={},d={};b.prototype.intercept=function(a){g[a]=!0};b.prototype.submitCallback=e("confluence.customcontent.submit");b.prototype.submitErrorCallback=
e("confluence.customcontent.submitError");b.prototype.submitSuccessCallback=e("confluence.customcontent.submitSuccess");b.prototype.cancelCallback=e("confluence.customcontent.cancel");return{trigger:function(a,b,f,c,e){if(!g[a]){if("confluence.customcontent.submit"===a)throw Error("Add-on must intercept confluence.customcontent.submit event");return f()}d[a]&&clearTimeout(d[a].timeout);d[a]={proceed:f,reject:c,done:e,timeout:setTimeout(function(){delete d[a];AJS.error("Event handler for "+a+" did not call callback function in 10000ms.");
c("Timed out when waiting for callback of "+a+" event.")},1E4)};connectHost.broadcastEvent(a,{},b)},EditComponent:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-spa-inlinedialog-cleanup', location = 'v5/js/iframe/host/spa-inline-dialog-cleanup.js' */
require(["skate"],function(a){a("ap-inline-dialog",{type:function(){var b;(b=a&&a.types&&a.types.CLASS)||(b=a&&a.type&&a.type.CLASSNAME);return b}(),detached:function(a){document.querySelectorAll('iframe[id^\x3d"'+window._AP.util.escapeSelector(a.id)+'"]').forEach(function(a){AJS.$(a).parents(".aui-inline-dialog").remove()})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-product-extensions-v5', location = 'v5/js/confluence/main.js' */
define("ac/confluence",["ac/confluence/macro/editor","ac/confluence/macro","ac/confluence/macro/property-panel-event","ac/confluence/content-property"],function(c,a,d,b){return{saveMacro:a.saveCurrentMacro,closeMacroEditor:c.close,getMacroData:c.getMacroData,getMacroBody:a.getMacroBody,onMacroPropertyPanelEvent:d.propertyPanelEventsBound,closeMacroPropertyPanel:a.closeCurrentMacroPropertyPanel,getContentProperty:b.getContentProperty,setContentProperty:b.setContentProperty,syncPropertyFromServer:b.syncPropertyFromServer}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-product-extensions-v5', location = 'v5/js/confluence/custom-content.js' */
define("ac/customContent",["ac/confluence/custom-content-api"],function(a){return{getEditComponent:{constructor:a.EditComponent,intercept:a.EditComponent.prototype.intercept,submitCallback:a.EditComponent.prototype.submitCallback,submitErrorCallback:a.EditComponent.prototype.submitErrorCallback,submitSuccessCallback:a.EditComponent.prototype.submitSuccessCallback,cancelCallback:a.EditComponent.prototype.cancelCallback}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-module-loader-v5', location = 'v5/js/confluence/module-loader.js' */
connectHost.defineModule("confluence",require("ac/confluence"));connectHost.defineModule("custom-content",require("ac/customContent"));connectHost.defineModule("customContent",require("ac/customContent"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-initial-resources', location = 'webpack/init.js' */
!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(501),o=i(s),a=n(503),u=i(a),c=n(504),d=i(c);AJS.toInit(function(){function e(e,t){AJS.EventQueue.push({name:e,properties:r({},t)})}function t(t){if(c(t)){t.preventDefault(),h("#appswitcher-button").unbind("click").unbind("keydown"),h("body").addClass("loading-cursor"),e("appswitcher.trigger.click");var o=WRM.require("wr!com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-resources"),d=h.ajax({url:p+"/rest/menu/latest/appswitcher",dataType:"json"}),f=v?h.Deferred().reject():h.ajax({url:n()+"/api/client/recent/containers?cloudId="+g,xhrFields:{withCredentials:!0}});i([o,d,f]).then(function(t,n,i){if(h("body").removeClass("loading-cursor"),e("appswitcher.dropdown.show"),!t.success)return void e("appswitcher.dropdown.display.error",{reason:"WRM.require() failed"});n.success||e("appswitcher.dropdown.display.error");var o=s(n.response),c={recentContainers:i.success?i.response.data:[],linkedApplications:{configureLink:!!y.isUserAdmin&&m,apps:n.success?n.response.map(function(e){return{name:e.label,url:e.link,product:e.applicationType}}):[],error:!n.success},suggestedApplication:0===o.length?{show:!1}:r({show:y.isAppSuggestionAvailable,onDontShowAgainClick:function(){return a("key-no-thanks","true")}},o[0]),isAnonymousUser:v,i18n:u.default,analytics:e};requirejs("fabric/app-switcher").initAppSwitcher(c)})}}function n(){var e=window.location.hostname;return e.indexOf("jira-dev.com")>-1?"https://activity.staging.atlassian.io":"https://activity.atlassian.io"}function i(e){return h.when.apply(h,h.map(e,function(e){var t=h.Deferred();return e.done(function(e){t.resolve({success:!0,response:e})}).fail(function(e){t.resolve({success:!1,response:e})}),t.promise()}))}function s(e){var t=[{application:"jira",url:y.isUserAdmin?"/admin/billing/addapplication":"https://www.atlassian.com/software/jira"},{application:"confluence",url:y.isUserAdmin?"/admin/billing/addapplication?product=confluence.ondemand":"https://www.atlassian.com/software/confluence"}],n=new Set;return e.map(function(e){return e.applicationType.toLowerCase()}).forEach(function(e){return n.add(e)}),t.filter(function(e){return!n.has(e.application)})}function a(e,t){h.ajax({url:p+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:e,value:t})})}function c(e){return"click"===e.type||"keydown"===e.type&&(40===e.which||32===e.which||13===e.which)}(0,d.default)();var p=AJS.contextPath(),f=p.indexOf("/wiki")===-1,l=requirejs(f?"jira/util/data/meta":"confluence/meta"),h=requirejs("jquery"),g=WRM.data.claim("com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-initial-resources.cloud-id"),v=WRM.data.claim("com.atlassian.product.fabric.pf-jira-confluence-integration-plugin:app-switcher-initial-resources.is-anonymous"),y=h("#app-switcher").data("environment"),m=p+"/plugins/servlet/customize-application-navigator";l.getBoolean("show-new-app-switcher")&&(h(".app-switcher-trigger").filter(":visible").length&&(h(".app-switcher-trigger, #app-switcher").remove(),h(".aui-header-before").append('\n            <span id="appswitcher-container">\n                <a id="appswitcher-button" tabindex="0">\n                    <span class="aui-icon aui-icon-small aui-iconfont-appswitcher"></span>\n                </a>\n            </span>'),h("#appswitcher-button").click(t).keydown(t)),h(window).load(o.default))})},501:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={analyticsscheme:"https",analyticsserver:"analytics.atlassian.com",server:window.location.hostname,product:"home",queue:[],storage_key:"atlassian.home.analytics",save_interval:5e3,publish_interval:1e4},t=(0,s.default)(e);t.start()};var r=n(502),s=i(r)},502:function(e,t,n){!function(){var t,n;t=function(){var e={},t={};return e.getLocalStorage=function(){return window.localStorage},e.getSessionStorage=function(){return window.sessionStorage},e.getInternalStorage=function(){return t.getItem=function(e){return t[e]},t.setItem=function(e,n){t[e]=n},t.clear=function(){t={}},t},e.getStorage=function(){var t;try{var n=e.getLocalStorage();t="undefined"!=typeof n?n:e.getSessionStorage()}catch(e){}return"undefined"==typeof t&&(t=e.getInternalStorage()),t},e.isCORSRequest=function(e){var t=document.createElement("a");return t.href=e,t.host!==window.location.host},e.useXDomainRequest=function(t){return e.isCORSRequest(t)&&!!window.XDomainRequest&&(navigator.appVersion.indexOf("MSIE 8.")!==-1||navigator.appVersion.indexOf("MSIE 9.")!==-1)},e.getCookieValue=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},e}(),n=function(e){function t(e){return i&&i.is_started?(i.stop(),i.config=i.parseConfig(e)):(i=new n(e),window["herment-gas-client"]=i),i}function n(t){return this.STORAGE_KEY_PREAMBLE="herment",this.MAXEVENTS=100,this.PUBLISH_INTERVAL=5e3,this.SAVE_INTERVAL=1e3,this.config=this.parseConfig(t),this.storage=e.getStorage(),this.is_started=!1,"undefined"!=typeof window.addEventListener?window.addEventListener("unload",function(){this.moveQueueToStorage()}.bind(this)):window.attachEvent("onunload",function(){this.moveQueueToStorage()}.bind(this)),this}var i=window["herment-gas-client"];return n.prototype={getAtlPath:function(){return e.getCookieValue("__atl_path")},getServerName:function(){var e;return"undefined"!=typeof document.location&&"undefined"!=typeof document.location.hostname&&(e=document.location.hostname),""===e&&(e="-"),e},getProductNameFromServerName:function(e){return"undefined"!=typeof e?e.replace(".com","").replace(".net","").replace(".org","").replace(".au","").replace(".io",""):"-"},getSubdomain:function(e){var t="-",n=e.match(/^([a-z0-9\.]*)[\-\.]{1}([a-z0-9]+)+\.([a-z]{2,6})$/i);if(n){var i=e.split(".");i=2===i[i.length-1].length?i.slice(0,i.length-3):i.slice(0,i.length-2),0!==i.length&&(t=i.join("."))}return t},generateRandomStorageKey:function(){var e=2,t=12,n=(Math.random()+"").slice(e,t),i=(Math.random()+"").slice(e,t);return n.concat(i)},ajaxPost:function(t,n){var i;if(e.useXDomainRequest(t))i=new window.XDomainRequest;else if(window.XMLHttpRequest)i=new XMLHttpRequest;else{if(!window.ActiveXObject)return;i=new window.ActiveXObject("Microsoft.XMLHTTP")}i.open("POST",t,!0),"undefined"!=typeof i.setRequestHeader&&(i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Accept","application/json, text/javascript, */*;")),i.send(n)},parseConfig:function(e){var t,n,i,r,s,o,a,u,c,d,p,f,l,h,g,v,y,m,w,S,b;if("undefined"==typeof e||"undefined"==typeof e.queue){var _=window.AJS=window.AJS||{};_.EventQueue=_.EventQueue||[],t=_.EventQueue}else t=e.queue;return n="undefined"==typeof e||"undefined"==typeof e.analyticsscheme?"https":e.analyticsscheme,i="undefined"==typeof e||"undefined"==typeof e.analyticsserver?"mgas.prod.public.atl-paas.net":e.analyticsserver,r="undefined"==typeof e||"undefined"==typeof e.analyticsurl?"/v1/events":e.analyticsurl,s="undefined"==typeof e||"undefined"==typeof e.server?this.getServerName():e.server,o="undefined"==typeof e||"undefined"==typeof e.product?this.getProductNameFromServerName(s):e.product,"undefined"==typeof e||"undefined"==typeof e.subproduct?(a=this.getSubdomain(s),"undefined"==typeof a&&(a="-")):a=e.subproduct,u="undefined"==typeof e||"undefined"==typeof e.version?null:e.version,c="undefined"==typeof e||"undefined"==typeof e.session?null:e.session,d="undefined"==typeof e||"undefined"==typeof e.sen?null:e.sen,p="undefined"==typeof e||"undefined"==typeof e.sourceip?null:e.sourceip,f="undefined"==typeof e||"undefined"==typeof e.atlpath?this.getAtlPath():e.atlpath,l="undefined"==typeof e||"undefined"==typeof e.ajax?this.ajaxPost:e.ajax,h="undefined"==typeof e||"undefined"==typeof e.maxevents?this.MAXEVENTS:e.maxevents,g="undefined"==typeof e||"undefined"==typeof e.storage_key?this.STORAGE_KEY_PREAMBLE+this.generateRandomStorageKey()+this.generateRandomStorageKey():e.storage_key,v="undefined"==typeof e||"undefined"==typeof e.user?"default":e.user,y="undefined"==typeof e||"undefined"==typeof e.publish_interval?this.PUBLISH_INTERVAL:e.publish_interval,m="undefined"==typeof e||"undefined"==typeof e.save_interval?this.SAVE_INTERVAL:e.save_interval,w="undefined"==typeof e||"undefined"==typeof e.cloud_id?null:e.cloud_id,S="undefined"==typeof e||"undefined"==typeof e.user_id?null:e.user_id,b="undefined"==typeof e||"undefined"==typeof e.user_id_type?null:e.user_id_type,{cloud_id:w,queue:t,gasScheme:n,gasServer:i,gasUrl:r,serverName:s,productName:o,subProductName:a,version:u,session:c,sen:d,sourceIP:p,atlPath:f,post:l,maxevents:h,storageKey:g,user:v,user_id:S,user_id_type:b,publishInterval:y,saveInterval:m}},pushToServer:function(e,t){var n="undefined"!=typeof t?t:this.config.post,i=this.config.gasScheme+"://"+this.config.gasServer+this.config.gasUrl,r={events:e},s=JSON.stringify(r);n(i,s)},addEventsToArray:function(e,t,n){if("undefined"!=typeof n&&"undefined"!=typeof n.server&&"undefined"!=typeof n.product&&"undefined"!=typeof n.subproduct&&"undefined"!=typeof n.user)for(var i in e)if(e.hasOwnProperty(i)){var r=e[i];if(t.length>=this.config.maxevents)break;if(r.name&&r.properties){var s={cloud_id:n.cloud_id,name:r.name,properties:r.properties,serverTime:r.time||(new Date).getTime(),server:n.server,user:r.user||n.user,user_id:n.user_id,user_id_type:n.user_id_type,product:n.product,subproduct:n.subproduct,version:n.version,session:n.session,sen:n.sen,sourceIP:n.sourceIP,atlPath:n.atlPath};t.push(s)}}},publishFromQueueAndStorage:function(e){try{var t="undefined"!=typeof e?e:this.pushToServer.bind(this),n=[];if(this.config.queue.length<1&&("undefined"==typeof this.storage||this.storage.length<1))return;var i={cloud_id:this.config.cloud_id,server:this.config.serverName,user:this.config.user,user_id:this.config.user_id,user_id_type:this.config.user_id_type,product:this.config.productName,subproduct:this.config.subProductName,version:this.config.version,session:this.config.session,sen:this.config.sen,sourceIP:this.config.sourceIP,atlPath:this.config.atlPath};this.addEventsToArray(this.config.queue,n,i);var r=this.popEventsFromStorage();this.addEventsToArray(r,n,i),this.config.queue.length=0,n&&n.length&&t(n)}catch(e){}},serialiseEventsToString:function(e){return JSON.stringify(e)},deserialiseEvents:function(e){return JSON.parse(e)},storeEvents:function(e){if("undefined"!=typeof this.storage)try{if(this.storage[this.config.storageKey]){var t=this.deserialiseEvents(this.storage[this.config.storageKey])||[];t.length<this.config.maxevents&&t.push.apply(t,e),e=t}this.storage.setItem(this.config.storageKey,this.serialiseEventsToString(e))}catch(e){}},popEventsFromStorage:function(){if("undefined"==typeof this.storage)return[];try{if(this.storage[this.config.storageKey]){var e=this.deserialiseEvents(this.storage[this.config.storageKey]);return this.storage[this.config.storageKey]=this.serialiseEventsToString([]),e}}catch(e){}return[]},moveQueueToStorage:function(){0!==this.config.queue.length&&"undefined"!=typeof this.storage&&(this.storeEvents(this.config.queue),this.config.queue.length=0)},start:function(){this.is_started=!0;var e=Array.prototype.push;this.config.queue.push=function(t){t.time=(new Date).getTime(),e.call(this.config.queue,t)}.bind(this),this.initialSaveTimeout=setTimeout(this.publishFromQueueAndStorage.bind(this),this.config.saveInterval),this.saveInterval=setInterval(this.moveQueueToStorage.bind(this),this.config.saveInterval),this.startPublisher()},stop:function(){this.is_started=!1,this.publishFromQueueAndStorage(),clearTimeout(this.initialSaveTimeout),clearInterval(this.saveInterval),this.stopPublisher()},stopPublisher:function(){clearInterval(this.publishInterval)},startPublisher:function(){this.publishInterval=setInterval(this.publishFromQueueAndStorage.bind(this),this.config.publishInterval)},destroy:function(){this.stop(),window["herment-gas-client"]=t}},t}(t),window["herment-gas-client"]=n,e.exports=n}()},503:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:"Home",apps:"Apps",configure:"Configure",recent:"Recent","try.other.apps":"Try other Atlassian apps","don't.show.this.again":"Don\'t show this again","container.confluence-space":"Space","container.jira-project":"Project","suggested.application.description.confluence":"Collaboration and content sharing","suggested.application.description.jira":"Issue & project tracking software","applinks.error":"Unable to load linked applications"}},504:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-templates', location = 'includes/js/amd/shim/confluence-templates-amd.js' */
define("confluence/templates",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Templates&&(Confluence.Templates={});return Confluence.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dom-filter-field', location = 'includes/js/dom-filter-field.js' */
define("confluence/dom-filter-field",["ajs","confluence/templates","jquery"],function(f,m,e){return function(c){function k(){g=e(c.items)}function h(){return e.trim(b.filter(":not(.blank-search)").val())}function l(){c.searcher(g,h());c.postSearch(g.filter(":visible"))}var d={items:null,matcher:function(a,c){return-1<a.text().toLowerCase().indexOf(c)},searcher:function(a,b){""!==b?(b=b.toLowerCase(),a.each(function(){var a=e(this),d=c.matcher(a,b);a.toggleClass("hidden",!d)})):a.removeClass("hidden")},
postSearch:function(a){},placeholderText:"Search",submitCallback:function(a,b){f.debug("DomFilterField submitted with "+a.length+" item(s) for search text \x3e"+b+"\x3c")}};c=e.extend(d,c);var g;k();var d=e(m.DomFilterField.form()),b=d.find("input");b.keyup(function(a){l();return f.stopEvent(a)}).keyup(function(a){return f.stopEvent(a)}).focus(function(a){b.hasClass("blank-search")&&b.removeClass("blank-search").val("");a.target.select()}).blur(function(a){""===h()&&b.addClass("blank-search").val(c.placeholderText)}).blur();
c.formId&&d.attr("id",c.formId);c.inputId&&b.attr("id",c.inputId);d.submit(function(a){f.stopEvent(a);a=g.filter(":visible");a.length&&c.submitCallback(a,h());return!1});return{form:d,reset:function(){""!==h()&&(b.val("").blur(),c.searcher(g,""))},refreshItems:k,filter:l,focus:function(){b.focus()},focusAndSearch:function(a){a=e.trim(a);b.val(a).keyup();a&&b.removeClass("blank-search");b.focus()}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/dom-filter-field","Confluence.DomFilterField");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dom-filter-field', location = 'includes/soy/dom-filter-field.soy' */
// This file was automatically generated from dom-filter-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DomFilterField.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DomFilterField == 'undefined') { Confluence.Templates.DomFilterField = {}; }


Confluence.Templates.DomFilterField.form = function(opt_data, opt_ignored) {
  return '<form class="aui dom-filter-field-form"><input type="text" class="text"/></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.DomFilterField.form.soyTemplateName = 'Confluence.Templates.DomFilterField.form';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:legacy-message-queue', location = 'includes/js/legacy-message-queue.js' */
define("confluence/legacy-message-queue",["window"],function(b){b.legacyMessageQueue||(b.legacyMessageQueue=[]);return{push:function(a){var c;c="string"!==typeof a.type?!1:a.hasOwnProperty("type")&&a.hasOwnProperty("payload")?!0:!1;if(!c)throw Error("legacyMessageQueue: received Invalid Message: "+JSON.stringify(a));b.legacyMessageQueue.push(a)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/initial-templates.soy' */
// This file was automatically generated from initial-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogBody = function(opt_data, opt_ignored) {
  return Confluence.Templates.Blueprints.waitContainer(null) + '<div class="create-dialog-body loadable"><div class="template-select-container">' + Confluence.Templates.Blueprints.waitContainer(null) + '<div class="template-select-container-body loadable"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.createDialogBody.soyTemplateName = 'Confluence.Templates.Blueprints.createDialogBody';
}


Confluence.Templates.Blueprints.waitContainer = function(opt_data, opt_ignored) {
  return '<div class="wait-container">' + Confluence.Templates.Blueprints.waitIcon(null) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.waitContainer.soyTemplateName = 'Confluence.Templates.Blueprints.waitContainer';
}


Confluence.Templates.Blueprints.waitIcon = function(opt_data, opt_ignored) {
  return '<div class="wait-icon"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.waitIcon.soyTemplateName = 'Confluence.Templates.Blueprints.waitIcon';
}


Confluence.Templates.Blueprints.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https:\/\/confluence.atlassian.com\/display\/ConfCloud\/Pages+and+Blogs"});
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.helpLink.soyTemplateName = 'Confluence.Templates.Blueprints.helpLink';
}


Confluence.Templates.Blueprints.spaceHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https:\/\/confluence.atlassian.com\/display\/ConfCloud\/Create+a+Space"});
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.spaceHelpLink.soyTemplateName = 'Confluence.Templates.Blueprints.spaceHelpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/discovery-tooltip.soy' */
// This file was automatically generated from discovery-tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Quick.Create.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Quick == 'undefined') { Confluence.Quick = {}; }
if (typeof Confluence.Quick.Create == 'undefined') { Confluence.Quick.Create = {}; }


Confluence.Quick.Create.discoveryTooltip = function(opt_data, opt_ignored) {
  return '<p class="title">' + soy.$$escapeHtml('TIME-SAVING TEMPLATES') + '</p><p>' + soy.$$filterNoAutoescape('Want some help creating awesome pages quickly? There are some useful templates here, to help get you started.') + '</p><p><button class="aui-button" id="closeDisDialog">' + soy.$$escapeHtml('Okay, got it') + '</button></p>';
};
if (goog.DEBUG) {
  Confluence.Quick.Create.discoveryTooltip.soyTemplateName = 'Confluence.Quick.Create.discoveryTooltip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-base.js' */
Confluence.Dialogs=Confluence.Dialogs||{};(function(b){Confluence.Dialogs.CreateDialogBase=function a(K){var g,T,q=K.dialogId,w=K.webItemsPath,z=[],h=false,t=require("confluence/confluence-storage-manager")("confluence-create-content-plugin"),B;function A(){if(!T){return}if(T.find(".button-panel-cancel-link:visible").is(".disabled")){return}if(Confluence.Blueprint.HowToUse){Confluence.Blueprint.HowToUse.notifyCancel(g)}AJS.trigger("analytics",{name:q+".cancel"+B});g.remove();b(".tipsy").remove();g=null;T=null;return false}function R(){return b(".create-dialog-create-button:visible")}function P(){return b(".create-dialog-body .template:visible").length}function F(U){return U.data("content-blueprint-id")}function G(W){var Y=F(W),V=W.data("template-id"),X=Y||V,U=Y?"contentBlueprintId":"templateId";if(!X){return S("itemModuleCompleteKey",W.data("item-module-complete-key"))}return S(U,X)}function l(U){if(!P()){return false}if(b(this).attr("disabled")==="disabled"){return false}b(this).attr("disabled","disabled").before('<div class="create-dialog-button-spinner"></div>');b(".create-dialog-button-spinner").spin("small");var X=D.getSpaceKey();var W=b(".template.selected");var V=G(W);if(!V){throw new Error("Expected at least one template to be selected")}V.spaceKey=X;Confluence.Blueprint.fireWizard(U,V,g)}function y(){if(!P()){R().attr("disabled","disabled")}else{R().removeAttr("disabled")}}function S(U,V){return _.find(D.loadedWebitems[D.getSpaceKey()],function(W){return W[U]==V})}function M(U){return S("contentBlueprintId",U)}function H(W){var V=M(W);var U=V&&V.wizard;var X=e(!U);R().text(X)}function s(U){U.addClass("selected").siblings().removeClass("selected");H(F(U));AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{item:U})}function r(U,Z){var W=U.find(".template");var Y=W.filter(".selected");var V=W.index(Y)+Z;V=V%W.length;var X=W.eq(V);s(X);X.focus();U.simpleScrollTo(X)}function c(V){var U=2;switch(V){case 37:return -1;case 39:return +1;case 38:return -U;case 40:return +U}return 0}function L(U){U.bind("keydown",function(V){var W=c(V.which);if(W){r(U,W);return AJS.stopEvent(V)}})}function i(U){return U==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"||U==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post"||U==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-legacy"||U==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-fabric"}function m(ae,Y){var ad=D.getSpaceKey();var ag=D.loadedWebitems[ad];ag=D.filterWebItems(ag);h=ag&&ag.length>0&&_.some(ag,function(ah){return ah.isPromoted});z=o(ag);if(!h&&ae){ag=z}var V=Confluence.Templates.Blueprints.templates({webItems:ag,spaceKey:ad});var ab=b(V);var aa=J(ab);if(h&&aa===undefined){var ad=D.getSpaceKey();var X=b.parseJSON(t.getItem("showMore"))||{};var ac=X[ad];if(!ac||ac<3){var W=ab.find(".template");_.each(W,function(ai){var ah=b(ai);var aj=G(ah);if(!aj.isPromoted&&!i(aj.itemModuleCompleteKey)){ah.hide()}});var af=ab.append(Confluence.Templates.Blueprints.Promoted.showMore())[0];b("#promoted-link",af).click(function(){X[ad]=(ac||0)+1;t.setItemQuietly("showMore",JSON.stringify(X));b(this).closest(".templates").find(".template").css("display","");b(this).closest("li").remove();y()})}}var U=T.find(".templates");if(U.length){if(Y){U.fadeOut(150,function(){U.replaceWith(ab.fadeIn(150));v();p();L(ab)})}else{U.replaceWith(ab)}}else{b(".template-select-container-body").append(ab)}if(N()){var Z=!ae;C(z.length,Z)}else{d()}if(T.searcher){T.searcher.refreshItems();T.searcher.filter()}T.find(".loading").removeClass("loading");T.trigger("create-content.loaded");p();L(ab);if(N()){v()}if(aa!==undefined){T.find(".templates").simpleScrollTo(aa.first().click())}y()}function J(Y){if(!g.initContext){return}var Z;var V;var X=Confluence.Blueprint.Selector.getSelectors();for(var W=0,U=X.length;W<U;W++){Z=X[W](g.initContext);if(Z&&Z.length){V=Y.find('.template[data-item-module-complete-key="'+Z+'"]');if(V.length){return V}else{AJS.log("Attempted to select a blueprint that could not be found in the create dialog: "+Z)}}}}function v(){var U=b(".templates");U.css("height",U.outerHeight(false)-b("#discover-new-banner").outerHeight())}function p(){b(".template").click(function(){s(b(this))}).dblclick(function(){R().click()}).focus(function(){b(this).click()});b(".template:visible:first").click()}function o(Z){var Y="",W=[],X=[];for(var V=0,U=Z.length;V<U;V++){if(Z[V].isNew){X=Q();Y=(b.inArray(Z[V].itemModuleCompleteKey,X)!=-1);if(Y){Z[V].isNew=false}else{W.push(Z[V])}}}return W}function I(){var U=b.parseJSON(t.getItem("dismissed"));return U||[]}function Q(){var U=b.parseJSON(t.getItem("used"));return U||[]}function d(){var U=b("#discover-new-banner");if(U.length){U.remove()}}function C(X,V){d();var U=Confluence.Templates.Blueprints.discoverNewBanner({newItemsNo:X,showLinkToNew:V});var W=b(".template-select-container-body");W.prepend(U);W.find(".aui-button-link").click(function(){var Y=!b(this).data("is-filtered");D.fillWebItemsInDialog(Y,true)});b("#discover-new-banner .icon-close").click(function(){b("#discover-new-banner").slideUp(150);var Z=I();var Y,aa;for(Y=0,max=z.length;Y<max;Y++){aa=z[Y].itemModuleCompleteKey;if(b.inArray(aa,Z)==-1){Z.push(aa)}}t.setItemQuietly("dismissed",JSON.stringify(Z));D.fillWebItemsInDialog(false)})}function N(){if(z.length==0||h){return false}var V=I();if(V.length==0){return true}for(var U=0;U<z.length;++U){if(b.inArray(z[U].itemModuleCompleteKey,V)==-1){return true}}return false}function n(U){var U=U||{},W=function(Y){if(g){if(Y.keyCode===27){A()}else{if(Y.keyCode===13){var Z=Y.target.nodeName&&Y.target.nodeName.toLowerCase();if(Z=="textarea"){return}R().click()}}}};B=U.triggerSrc?"."+U.triggerSrc:"";var V={width:840,height:449,id:q,closeOnOutsideClick:false,keypressListener:W,focusSelector:".templates"};g=b.extend(new AJS.Dialog(V),D);T=g.popup.element;g.addHeader(K.headingText);g.initContext=U.initContext;var X=T.searcher=Confluence.DomFilterField({items:"#create-dialog .templates .template",inputId:"createDialogFilter",placeholderText:"Filter",postSearch:function(Y){if(Y.length==0){AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{noVisibleItem:true})}else{Y.eq(0).click()}if(!U.showStepOne){y()}},submitCallback:function(Y,Z){Y.eq(0).dblclick()}});X.form.find("input").attr("tabindex",100);T.find(".dialog-title").prepend(K.helpLinkTemplate(),X.form);g.addPanel("SinglePanel",Confluence.Templates.Blueprints.createDialogBody(),"loading");b.extend(g,{addButtonPanel:x,addFullButtonPanel:k,addBackButton:u,removeBackButton:j});g.addButtonPanel(g.getPage(0),l);g.prevPage=function(){T.find(".create-dialog-button-spinner").remove();T.find(".create-dialog-create-button").removeAttr("disabled");return AJS.Dialog.prototype.prevPage.apply(g,arguments)};T.find(".dialog-button-panel").find("button, .button-panel-link").attr("tabindex",100);T.options=U=b.extend({showDialog:true,updateHeight:true},U);g.getPanel(0).setPadding(0);g.gotoPanel(0);b("#create-dialog").find(".wait-icon").spin("medium");U.showDialog&&g.show();Confluence.sessionCheck();return g}function e(U){return U?"Create":"Next"}function f(U){return function(V,W,Y){var X=U&&U.call(this,V,W);if(X!==true&&Y){Y.preventDefault()}else{return X}}}function x(Y,X,U,W){var V=e(U);Y.addButton(AJS.I18n.getText(V),null,"create-dialog-create-button");Y.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");Y.buttonpanel.find(".create-dialog-create-button").addClass("aui-button-primary").click(X);Y.buttonpanel.find(".create-dialog-create-button").attr("data-test-id","create-dialog-create-button");if(W){Y.buttonpanel.addClass(W)}this.addCancel("Close",f(A))}function k(W,V,X,U){this.addBackButton(W,X);this.addButtonPanel(W,f(V),U);return W.buttonpanel}function u(U,V){U.addButton("Back",f(function(W){V&&V();if(W.curpage==1){W.fillWebItemsInDialog()}W.prevPage();if(W.curpage==0){v()}U.remove();W.page.pop();if(P()&&!b(".template.selected").length){b(".template:visible:first").click()}}),"button-panel-back")}function j(){var V=this.getPage(this.curpage);var U=V.buttonpanel.find(".button-panel-back");U.remove()}function O(W,V){var U=this,V=_.isUndefined(V)?true:V;U.loadedWebitems=U.loadedWebitems||{};var X=this.loadedWebitems[W];if(X){return AJS.$.Deferred().resolve([X])}return b.ajax({url:Confluence.getContextPath()+w,dataType:"json",data:{spaceKey:W},async:V}).done(function(Y){U.loadedWebitems[W]=Y})}function E(){var U=this;return AJS.$.getJSON(Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces",{promotedSpaceKey:AJS.params.spaceKey,promotedSpacesLimit:10,otherSpacesLimit:1000}).done(function(V){U.loadedSpaces=V;AJS.trigger("create-dialog.data-ready")})}var D={openDialog:n,closeDialog:A,requestWebItems:O,requestSpaces:E,loadedWebitems:{},loadedSpaces:{},fillWebItemsInDialog:m,filterWebItems:function(U){return U},getSpaceKey:function(){return null}};return D}}(AJS.$));Confluence.Dialogs.Events={};Confluence.Dialogs.Events.ITEM_SELECTED="create-dialog.item-selected";
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/loader.js' */
Confluence.Blueprint=Confluence.Blueprint||{};var resourcesLoaded=false;var noSpaceErrors={noAccess:"Request permission from your Confluence administrator.",createNew:"Pages are stored in spaces, which help you organize related work and keep it together.\u003cbr /\u003e\u003cbr /\u003eCreate a space first, so your pages have a place to live.",titleNoAccess:"Can\'t create new pages in this space",titleWithAccess:"Start by creating a space"};function createNewDialogBase(){Confluence.Blueprint.Dialog=Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/blueprints/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.helpLink,headingText:"Create"})}Confluence.Blueprint.loadDialog=function(c){var b=AJS.$.Deferred();var a;if(!resourcesLoaded||c.forceReload){if(c.forceReload){createNewDialogBase()}a=Confluence.Blueprint.Dialog.openDialog(c);var e=WRM.require("wrc!create-content");var d=AJS.$.Deferred();Confluence.Blueprint.Dialog.requestSpaces().done(function(){var g=Confluence.Blueprint.Dialog.loadedSpaces,f=g.promotedSpaces.spaces[0]||g.otherSpaces.spaces[0];if(f){Confluence.Blueprint.Dialog.requestWebItems(f.id).done(function(){d.resolve()})}else{$.ajax({url:AJS.contextPath()+"/rest/graph",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({operationName:"user",query:"query user {  user (current:true) {    operations { operation }  }}",variables:{location:"system.user"}}),success:function(k){var j=false;if(k&&k.data&&k.data.user&&Array.isArray(k.data.user.operations)){j=!!k.data.user.operations.find(function(l){return l.operation==="create_space"})}var i=$(".dialog-panel-body.loading .wait-container");var h=i.closest(".loading");i.replaceWith($("<div/>").addClass("no-spaces-found").append($("<div />").addClass("icon-wrapper").html('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18.38 18.38">  <title>group</title>  <rect x="2.9" y="2.9" width="14" height="14" rx="1.71" ry="1.71" transform="translate(-4.81 9.19) rotate(-45)" style="fill:#de350b"/>  <path d="M10,15a1,1,0,1,1,0-2h0a1,1,0,1,1,0,2Zm1-4a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z" transform="translate(-0.71 -0.71)" style="fill:#fff"/></svg>')).append($("<div/>").html(noSpaceErrors[j?"createNew":"noAccess"])));h.removeClass("loading");$(".create-dialog-create-button").hide();$(".dialog-title").html(noSpaceErrors[j?"titleWithAccess":"titleNoAccess"])}})}});AJS.$.when(e,d.promise()).done(function(){AJS.trigger("blueprint.wizard-register.load");Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog);c=AJS.$.extend(c,{createDialog:a,dialogBase:Confluence.Blueprint.Dialog});resourcesLoaded=true;b.resolve(Confluence.Blueprint.Dialog.openDialog(c))}).fail(function(){AJS.log("Could not load resources for create dialog")})}else{b.resolve(Confluence.Blueprint.Dialog.openDialog(c))}return b.promise()};function trackAnalyticEvent(){var a=window.location.pathname;if(a.indexOf("/draft-createpage.action")>-1){AJS.bind("rte-ready",function(c){$("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blue-print.save"})});$("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blue-print.close"})})})}else{if(a.indexOf("/createpage.action")>-1){var b=$("#createpageform input[name='queryString']").val();if(typeof b==="string"&&b.indexOf("src=quick-create")>-1){AJS.bind("rte-ready",function(c){$("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.save"})});$("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.close"})});$("#rte-button-location").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.change.location"})})})}else{AJS.bind("rte-ready",function(c){$("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blank.save"})});$("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blank.close"})})})}}}}createNewDialogBase();AJS.toInit(function(d){var c=false;AJS.bind("blueprint.wizard-register.load",function(){if(!c){AJS.trigger("blueprint.wizard-register.ready");c=true}});var b=d("#create-page-button:visible");if(!b.length){return}d(document).on("click",".create-child-page-link",function(){Confluence.Blueprint.loadDialog({location:"child-page"});return false});trackAnalyticEvent();if(AJS.DarkFeatures.isEnabled("adg3.create-experience")){}else{var a=d("#quick-create-page-button");if(a.is(":visible")){AJS.whenIType("c").followLink("#quick-create-page-button")}else{AJS.whenIType("c").click("#create-page-button")}}});AJS.bind("shortcuts-loaded.keyboardshortcuts",function(b,a){AJS.$.each(a.shortcuts,function(d,c){if(c.param=="#createPageLink"){a.shortcuts.splice(d,1);return false}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-launcher.js' */
(function(){function a(d,c,e){Confluence.Blueprint.Dialog.requestWebItems(d,c).done(function(f){var g=Confluence.Blueprint.Dialog.loadedWebitems[d];if(_.isEmpty(g)){AJS.log("create-from-template-macro: No Create dialog web items found for spaceKey >"+d+"<");return}e(f,g)}).fail(function(){AJS.log("create-from-template-macro: requestWebItems call for spaceKey >"+d+"< failed")})}function b(){var c={};AJS.$("#create-dialog-init-params div").each(function(){c[$(this).data("key")]=$(this).data("value")});return c}Confluence.Blueprint=$.extend(Confluence.Blueprint,{loadDialogAndOpenTemplate:function(c){if(!_.isObject(c)){throw new Error("Confluence.Blueprint.loadDialogAndOpenTemplate called with no options")}var e=c.spaceKey,h=c.contentBlueprintId,d=c.templateId,g=c.title,f=c.initContext?c.initContext:b();if(e){Confluence.Blueprint.loadDialog({showDialog:true,updateHeight:false,showStepOne:true,initContext:f}).done(function(i){a(e,true,function(m,n){var k=_.find(n,function(o){if(h){return o.contentBlueprintId==h}return o.templateId==d});if(!k){AJS.log("create-from-template-macro: No Create dialog web item found for contentBlueprintId >"+h+"< and templateId >"+d+"<");return}var l=k.itemModuleCompleteKey;k=$.extend({},k);k.title=g;k.spaceKey=""+e;AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{config:k});Confluence.Blueprint.fireWizard(m,k,i);i.removeBackButton();var j=k.howToUseTemplate&&!k.skipHowToUse;if(j||Confluence.Blueprint.hasWizard(l,k)){i.show()}})})}else{Confluence.Blueprint.loadDialog({initContext:f})}}});AJS.getWindowQueryParams=function(){var h={};if(window.location.search.length>1){var c=window.location.search.substr(1).split("&");for(var e=0;e<c.length;e++){var g=c[e].split("=");var d=unescape(g[0]);var f=g.length>1?unescape(g[1]):"";h[d]=f}}return h};AJS.toInit(function(){var e=b();if(e.createSpaceDialog){Confluence.SpaceBlueprint.loaded.then(function(){Confluence.SpaceBlueprint.Dialog.launch()});return}var f=AJS.getWindowQueryParams();var d=f.createDialogSpaceKey;if(!f.createDialog||!d){return}var c=f.createDialogBlueprintKey;if(d&&c){a(d,false,function(h,i){var g=_.find(i,function(j){return j.blueprintModuleCompleteKey==c});if(g){f.createDialogBlueprintId=g.contentBlueprintId}else{AJS.log("No blueprint found with key: "+c)}});delete f.createDialogBlueprintKey}if(d&&!f.createDialogBlueprintId&&!f.createDialogTemplateId){AJS.log("Confluence.Blueprint.launchDialog triggered with incorrect options - please check the URL query: "+window.location.search);return}Confluence.Blueprint.loadDialogAndOpenTemplate({spaceKey:d,contentBlueprintId:f.createDialogBlueprintId,templateId:f.createDialogTemplateId,initContext:e})})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-blueprint.js' */
define("confluence-create-content/space-blueprint",[],function(){return{loaded:AJS.$.Deferred()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-create-content/space-blueprint","Confluence.SpaceBlueprint");AJS.deprecate.prop(window.Confluence.SpaceBlueprint,"Dialog",{sinceVersion:"6.0.6",extraInfo:"Use require('confluence-create-content/space-blueprint')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog.js' */
AJS.toInit(function(c){Confluence.SpaceBlueprint.Dialog=c.extend(Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/space-blueprint/dialog/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.spaceHelpLink,headingText:"Create space"}),{getParentPageId:function(){return undefined},getSpaceKey:function(){return undefined},launch:function(f){var e=f?{showDialog:false,updateHeight:false,showStepOne:true,initContext:{}}:{};var d=Confluence.SpaceBlueprint.Dialog.openDialog(e);createSpacePromise=WRM.require("wrc!create-space");webItemsPromise=Confluence.SpaceBlueprint.Dialog.requestWebItems();AJS.$.when(createSpacePromise,webItemsPromise).done(function(j,i){AJS.trigger("blueprint.wizard-register.load");if(!f&&Confluence.SpaceBlueprint.WelcomeDialog.isShowWelcomeDialog()){Confluence.SpaceBlueprint.WelcomeDialog.showWelcomeDialog();d.remove();return}Confluence.SpaceBlueprint.Dialog.fillWebItemsInDialog();var k=Confluence.SpaceBlueprint.Dialog.loadedWebitems[undefined];if(_.isEmpty(k)){AJS.log("Could not load space dialog - web items not found");return}if(!f){return}var h=_.find(k,function(l){return l.itemModuleCompleteKey==f});if(!h){AJS.log("Error finding space blueprint with id"+f);return}Confluence.Blueprint.fireWizard(i[0],h,d);d.removeBackButton();var g=h.howToUseTemplate&&!h.skipHowToUse;if(g||Confluence.Blueprint.hasWizard(f,h)){d.show()}}).fail(function(){AJS.log("Could not load resources for space dialog")})}});var a=c('#create-space-button, a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]'),b=c("#create-personal-space-link");if(b.length){b.unbind("click");b.click(function(){Confluence.SpaceBlueprint.Dialog.launch("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item");return false})}if(!a.length){return}c('a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]').unbind("click");a.click(function(d){Confluence.SpaceBlueprint.Dialog.launch();return false});Confluence.SpaceBlueprint.loaded.resolve()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/blueprint-object.js' */
(function(s,b){var n={};var m;var w;var F={};var C={};function o(M,L,K){if(M==="space"){return"space-blueprint/create-space?favorite=true"}if(t("blueprint",K.replace(":","_"))){return"content/blueprint/"+K+"/instance"}if(M==="view"){return"content-blueprint/create-content"}return"content-blueprint/create-draft"}function J(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"}function d(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post"}function r(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-fabric"}function y(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-legacy"}function E(N,O){if(!N||N<0){return false}var L=O===AJS.Meta.get("space-key");var M=AJS.Meta.get("content-type")==="page";var K=s("#page-restricted-container").length;return L&&M&&!K}function i(L,K,O,N){var M={type:L,status:K,space:{key:O},metadata:{properties:{editor:{value:"v2"}}}};if(E(N,O)){M.ancestors=[{id:N}]}return M}function k(L,K,O,N){var M={type:L,status:K,space:{key:O}};if(E(N,O)){M.ancestors=[{id:N}]}return M}function D(K){return AJS.DarkFeatures.isEnabled(K)}function u(){return D("fabric.editor.blank.blogpost")}function z(){return u()&&D("fabric.editor.all-pages")}function j(){return z()||D("fabric.editor.blank.page")}function t(K,L){return z()||(u()&&D("fabric.editor."+K+"."+L))}function f(N,P,O,M){var L=Confluence.getContextPath()+"/rest/api/content";var K=i(N,"draft",P,O);A(L,K)}function c(L,M){var K=Confluence.getContextPath()+"/rest/api/content";A(K,{type:L,status:"draft",space:{key:M}})}function a(L,K,Q,O,N){var P=L.contentTemplateId||L.templateId||L.contentTemplateKey;var M={content:k("page",K,Q,O),contentBlueprintSpec:{context:N,blueprintId:L.contentBlueprintId}};if(P){M.contentBlueprintSpec.contentTemplateId=P}return M}function q(M,P,O,N){var L=Confluence.getContextPath()+"/rest/api/template/page/"+M.templateId+"/instance";var K=a(M,"draft",P,O,N);A(L,K)}function I(K,P,N,M){var O=Confluence.getContextPath()+"/pages/createpage-entervariables.action?templateId="+encodeURIComponent(K.templateId)+"&spaceKey="+encodeURIComponent(P)+"&title="+encodeURIComponent(K.title||"")+"&newSpaceKey="+encodeURIComponent(P);for(var L in M){O+="&"+encodeURIComponent(L)+"="+encodeURIComponent(M[L])}if(E(N,P)){O+="&fromPageId="+encodeURIComponent(N)}window.location=O}function B(L){var K=b("confluence/legacy-message-queue");var N=String(L.id);var M={containerType:"space",containerId:N,source:"createSpaceModal",action:"created",actionSubject:"space",attributes:{spaceTemplateKey:m.name}};K.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:M})}function A(M,L){var O=AJS.$(".create-dialog-button-spinner");var N=AJS.$("#create-dialog .dialog-button-panel");var K=N.find(".create-dialog-create-button");if(O.length===0){N.prepend('<div class="create-dialog-button-spinner"></div>');O=AJS.$(".create-dialog-button-spinner").spin("small")}s.ajax({url:M,type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(L)}).done(function(R){B(R);var P=R.createSuccessRedirectUrl||R.url;if(!P){var Q=R._links.editui||R.content._links.editui||R._links.webui||R.content._links.webui;P=Confluence.getContextPath()+Q}window.location=P}).fail(function(T,U,R){var Q=JSON.parse(T.responseText).errorMessage||"";var S="We can\'t create that blueprint right now.";var P=b("aui/flag");P({type:"error",title:S,body:Q});if(K.length&&K.prop("disabled")){K.prop("disabled",false)}}).always(function(){O.spinStop();O.remove()})}function g(T,L,S,R){AJS.trigger("blueprint.before-create");var P=b("confluence/confluence-storage-manager")("confluence-create-content-plugin");var U=s.parseJSON(P.getItem("used"))||[];U.push(m.itemModuleCompleteKey);P.setItemQuietly("used",JSON.stringify(U));var V=_.isString(T)?T:"";var N=m.createResult;var Q=m.blueprintModuleCompleteKey;var X=R&&R.getSubmissionRestPath?R.getSubmissionRestPath():"/rest/create-dialog/1.0/"+o(N,w,Q);var K=Confluence.getContextPath()+X;var W=S?S.getParentPageId():"";var M;if(R&&R.assembleSubmissionObject){M=R.assembleSubmissionObject(L)}else{if(N==="space"){M=x(L)}else{M=h(V,L,W);if(t("blueprint",Q.replace(":","_"))){var O=N==="view"?"current":"draft";M=a(M,O,w,M.parentPageId,M.context)}}}A(K,M);AJS.trigger("blueprint.after-create")}function x(K){return{context:K,name:K.name,spaceKey:K.spaceKey,description:K.description,permissions:K.spacePermission,spaceBlueprintId:m.contentBlueprintId}}function h(N,K,L){var M=K||{};return{context:M,spaceKey:w,title:M.title||N||"",parentPageId:M.parentPageId||L,contentTemplateId:M.contentTemplateId||"",contentBlueprintId:m.contentBlueprintId,contentTemplateKey:M.contentTemplateKey||"",viewPermissionsUsers:M.viewPermissionsUsers||""}}function v(M){var K=b("confluence/confluence-storage-manager")("confluence-create-content-plugin");var L=s.parseJSON(K.getItem("used"))||[];if(s.inArray(M,L)===-1){L.push(M)}K.setItemQuietly("used",JSON.stringify(L))}Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{register:function(K,L){n[K]=L},validateTitle:function(L,O,P,K){var N=s.trim(L.val()),M;if(!N){M=P||"Title is required."}else{if(!Confluence.Blueprint.canCreatePage(O,N)){M=K||"A page with this name already exists."}}if(M){L.focus().siblings(".error").html(M);return false}return true},canCreatePage:function(M,L){var K=false;s.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/can-create-page",dataType:"json",data:{spaceKey:M,pageTitle:L},async:false}).done(function(N){K=N}).fail(function(N){AJS.log("Failed to call 'can-create-page' - "+N)});return K},hasWizard:function G(L,K){return(C[L]||(K&&K.wizard))&&!F[L]},setWizard:function H(M,L){var K=s({});L(K);C[M]=K},getWizard:function(K){return C[K]||s({})},setDirectCallback:function(L,K){F[L]=K},getDirectCallback:function(K){return F[K]},fireWizard:function(V,P,aa){var O=aa.initContext||{};w=P.spaceKey;m=P;var M=P.itemModuleCompleteKey;var Z=aa.getParentPageId();v(M);AJS.trigger("analytics",{name:"confluence.create-content.submit",data:{blueprintId:P.contentBlueprintId,dialogType:aa.id,isNew:P.isNew,isPromoted:P.isPromoted,itemKey:M,name:P.name,spaceKey:w,templateId:P.templateId,}});if(M){var U=M.replace(/\.|:/g,"_");AJS.trigger("analytics",{name:aa.id+".submit."+U,data:{spaceKey:w}});if(P.directLink){var N={templateId:P.templateId,spaceKey:w,title:P.title||"",newSpaceKey:w,fromPageId:(Z&&w===AJS.Meta.get("space-key"))?Z:""};s.extend(N,O);var K=P.directLink;for(var Q in N){K=K.replace(new RegExp("{"+e(Q)+"}","g"),N[Q])}window.location=Confluence.getContextPath()+l(K);return}if(J(M)&&j()){return f("page",w,Z,O)}if(r(M)||(d(M)&&u())){return f("blogpost",w,Z,O)}if(y(M)){return c("blogpost",w,Z,O)}var Y;var T=this.getDirectCallback(M);if(T){Y=function W(){var ab={spaceKey:w,pageData:{},initContext:O};T(V,ab);var ac=s.extend(O,{pageData:ab.pageData});new Confluence.DialogWizard(aa,g).doFinalAction(V,ab,ac,g)}}else{if(P.wizard){var L=P.wizard.pages[0].id;Y=function R(){var ab=Confluence.Blueprint.getWizard(M);Confluence.DialogWizard(aa,g).newPage(P,L,{},s.extend(O,{spaceKey:w,pages:{},parentPageId:aa.getParentPageId(),title:P.title}),ab)}}else{if(n[M]){Y=function S(){n[M](aa,w,g)}}else{if(P.contentBlueprintId){Y=function X(){g(null,s.extend(O,P),aa)}}else{throw Error("No way to process item: "+M)}}}}if(P.howToUseTemplate){Confluence.Blueprint.HowToUse.check(aa,P,Y)}else{Y()}}else{if(P.templateId){AJS.trigger("analytics",{name:aa.id+".submit.template",data:{spaceKey:w,templateId:P.templateId}});if(t("template",P.templateId)){q(P,w,Z,O)}else{I(P,w,Z,O)}}else{throw new Error("Unknown item: "+P)}}}});function p(){var K={};if(AJS.Meta.get("page-title")){K.parentPageId=AJS.Meta.get("page-id");K.parentPageTitle=AJS.Meta.get("page-title")}else{K.parentPageId=AJS.Meta.get("parent-page-id");K.parentPageTitle=AJS.Meta.get("from-page-title")}return K}function l(M){var L=M.match(/^(.*)\?(.+)$/);if(!L){return M}var N=L[1];var K=L[2].split("&").filter(function(O){return/^.+=.+$/.test(O)}).join("&");return N+(K?"?":"")+K}function e(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")}Confluence.Blueprint.Util={};Confluence.Blueprint.Util.getParentPageLocation=p})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-blueprint-selector.js' */
(function(b){var a=[];Confluence.Blueprint.Selector={registerSelector:function(c){if(c&&typeof(c)==="function"){a.push(c)}},getSelectors:function(){return a}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pas:pas-everypage-static', location = 'js/pas-config.js' */
define("pas/pas-config",["jquery","confluence/storage-manager","confluence/api/constants"],function(c,b,a){return{timeUpdateInterval:6E4,pollingInterval:9E5,url:a.CONTEXT_PATH+"/rest/pas/latest/announcement",store:new b("confluence","pas"),nextAnnouncementKey:"nextAnnouncement",timeStampKey:"timeStamp",config:{url:a.CONTEXT_PATH+"/rest/pas/latest/settings",timeStampKey:"configTimeStampKey",pollingInterval:18E5,currentConfigKey:"currentConfigKey"},cookieKey:a.CONTEXT_PATH.replace("/","")+"_pas.dismiss"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pas:pas-everypage-static', location = 'js/pas.js' */
require("jquery aui/flag ajs pas/pas-config confluence/api/event confluence/api/logger".split(" "),function(f,v,h,a,m,w){var n=null,o=null,i=null,j=0,k,q,r,s=function(b){var a=function(a,b,c){for(a=""+a;a.length<c;)a=b+a;return a},e=function(a,b){var c=a+" "+b;a!==1&&(c=c+"s");return c};if(b<6E4)return"in less than a minute";if(b<36E5)return"in "+e(Math.round(b/6E4),"min");if(b<864E5)return"in "+e(Math.round(b/36E5),"hour")+" "+e(Math.round(b%36E5/6E4),"minute");e=new Date;e.setSeconds(e.getSeconds()+
Math.round(b/1E3));return a(e.getFullYear(),"0",4)+"/"+a(e.getMonth()+1,"0",2)+"/"+a(e.getDate(),"0",2)+" "+a(e.getHours(),"0",2)+":"+a(e.getMinutes(),"0",2)},t=function(){var b=a.announcementText,d=a.announcementUrl||"",e=a.announcementTime,l=a.announcementId,g=a.announcementTicket;k=a.announcementSource;q=/([A-Z])\w+/g.exec(g);r=/\d+/g.exec(g);var g=a.announcementTargetPath.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")||"",c;if(location.href.match(RegExp(g))!==null){c=v({type:"info",title:"Public service announcement",
body:b+d+e,close:"manual"});k==="alertr"&&p({name:"pas.alertr.announcement.display"})}if(c!==void 0){c.setAttribute("id","pas-announcement");c.setAttribute("announcementId",l);c.addEventListener("aui-flag-close",function(){var b=a.announcementId,c=new Date;c.setMonth(c.getMonth()+1);b=b+"; expires="+c.toUTCString();document.cookie=a.cookieKey+"="+b+"; path=/";m.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.dismiss-announcement.click",data:{message:f("#pas-announcement span:first").text()}});
k==="alertr"&&p({name:"pas.alertr.announcement.dismissed"})})}f("#more-info").on("click",function(){k==="alertr"&&p({name:"pas.alertr.announcement.url.clicked"})})},x=function(){if(j>0){var b=j-a.timeUpdateInterval;j=b;a.announcementTime=Atlassian.PAS.Templates.pasTime({time:s(b)})}else{clearInterval(i);i=null}},p=function(a){m.trigger("analyticsEvent",{name:a.name,data:{issueNumber:r,project:q[0]}})},u=function(){var b=JSON.parse(a.store.getItem(a.nextAnnouncementKey)),d;if(!(d=b==null))if(!(d=b.message==
null))a:{d=b.id;for(var e=a.cookieKey,l=document.cookie.split(";"),g=0;g<l.length;g++){var c=l[g],f=c.indexOf("="),h=c.substr(0,f).trim(),c=c.substr(f+1).trim();if(h===e){d=c===d.toString();break a}}d=false}if(!d){j=b.timeLeft;a.announcementText='<span class="pas-announcement-text">'+b.message+"</span>";a.announcementTime=Atlassian.PAS.Templates.pasTime({time:s(j)});i=setInterval(x,a.timeUpdateInterval);if(b.url)a.announcementUrl=Atlassian.PAS.Templates.pasUrl({url:b.url});a.announcementTargetPath=
b.targetPath;a.announcementId=b.id;d=b.duration;b.timeToStart=b.timeToStart-((new Date).getTime()-JSON.parse(a.store.getItem(a.timeStampKey)));if(b.source)a.announcementSource=b.source;if(b.incidentTicket)a.announcementTicket=b.incidentTicket;if(b.timeToStart>0){d=d+b.timeToStart;n=setTimeout(function(){t()},b.timeToStart)}else t();d>0&&(o=setTimeout(function(){n!=null&&clearTimeout(n);o!=null&&clearTimeout(o);i!=null&&clearInterval(i);document.getElementById("pas-announcement").close()},d))}};h.toInit(function(){f(document).on("click",
"#more-info",function(){m.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.more-info.click",data:{message:f("#pas-announcement span:first").text()}})});var b=a.pollingInterval,d=JSON.parse(a.store.getItem(a.timeStampKey)),e=(new Date).getTime()-d;if(d===void 0||e>b)h.Meta.get("remote-user")==="anonymous"||h.Meta.get("remote-user")===""||f.ajax({type:"GET",contentType:"application/json",url:a.url,cache:false,global:false,timeout:5E3,success:function(b){var d=(new Date).getTime();a.store.setItem(a.timeStampKey,
JSON.stringify(d));a.store.setItem(a.nextAnnouncementKey,JSON.stringify(b));u()},error:function(a,b,c){w.log("Could not get announcement from server: "+c)}});else u()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pas:pas-everypage-static', location = 'templates/soy/pas.soy' */
// This file was automatically generated from pas.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Atlassian.PAS.Templates.
 */

if (typeof Atlassian == 'undefined') { var Atlassian = {}; }
if (typeof Atlassian.PAS == 'undefined') { Atlassian.PAS = {}; }
if (typeof Atlassian.PAS.Templates == 'undefined') { Atlassian.PAS.Templates = {}; }


Atlassian.PAS.Templates.pasTime = function(opt_data, opt_ignored) {
  return '<span class="pas-announcement-time">' + soy.$$escapeHtml(opt_data.time) + '</span>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasTime.soyTemplateName = 'Atlassian.PAS.Templates.pasTime';
}


Atlassian.PAS.Templates.pasUrl = function(opt_data, opt_ignored) {
  return '<p><a id="more-info" target="_blank" href=\'' + soy.$$escapeHtml(opt_data.url) + '\'>' + soy.$$escapeHtml('More information') + '</a></p>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasUrl.soyTemplateName = 'Atlassian.PAS.Templates.pasUrl';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute('Filter') + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<div class="page-icon"><a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + ' class="icon icon-' + soy.$$escapeHtmlAttribute(opt_data.type) + '"></a></div><div class="page-title"><a class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</a></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="You haven\'t visited any pages yet. To get started, take a look under \u003cb\u003eMY SPACES\u003c/b\u003e in the sidebar."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\'t find any matching pages in your history."+" "+AJS.format("\u003ca href=\"{0}\"\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],type:a.type,name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b,d){d=d||[];var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(f){var g=f.get("name");var e=g.toLowerCase();return d.indexOf(f.get("type"))==-1&&_.all(c,function(h){return e.indexOf(h.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var h=a(this);var e=h.find("span");var g=e.data("properties");var f=g?g.spaceName:null;if(f&&!h.is(".content-type-spacedesc")){h.after(h.clone().attr("class","space-name").html(f));h.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){if(!AJS.Meta.get("remote-user")){return}var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o,["custom"]),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: 'Spaces', showIcon: true, text: 'Spaces'}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = 'includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^\?|#]+)[\?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(a.urlPath?a.urlPath:"")+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(a.anchor?"#"+a.anchor:"")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = 'includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(d,q,n,k,l,e){function r(){if("undefined"===typeof m){var a=d._data(k,"events");m=a&&a.analytics&&0<a.analytics.length}return m}var b={},m;b.setAnalyticsSource=function(a,f){r()&&a.attr("href",function(a,c){a=encodeURIComponent(f);c=e.parse(c);d.isEmptyObject(c)||(c.queryParams.src=[a]);return e.format(c)})};b.srcRemovedUrl=function(a){a=e.parse(a);delete a.queryParams.src;for(var f=
Object.keys(a.queryParams),b=0;b<f.length;b++){var c=f[b],g=c.split(".");3===g.length&&"src"===g[0]&&delete a.queryParams[c];"jwt"===c&&delete a.queryParams[c]}return e.format(a)};b.srcParamValues=function(a){return(a=e.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){a=e.parse(a).queryParams;for(var b={},p=Object.keys(a),c=0;c<p.length;c++){var g=p[c],h=g.split(".");if(3===h.length&&"src"===h[0]){var d=h[1],h=h[2];b[d]=b[d]||{};b[d][h]=decodeURIComponent(a[g][0])}}return b};
b.extractAnalyticsData=function(a){var f=[],d=b.srcParamValues(a);a=b.srcAttrParamValues(a);for(var c=0;c<d.length;c++){var g=d[c];f.push({src:g,attr:a[g]||{}})}return f};b.publish=function(a,b){q.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(l.URL),f={userKey:n.get("remote-user-key"),pageID:n.get("page-id")};if(0<a.length){for(var e=0;e<a.length;e++){var c=a[e],g=d.extend({},f,c.attr);b.publish("confluence.viewpage.src."+c.src,g)}k.history&&k.history.replaceState&&
(a=b.srcRemovedUrl(l.URL),l.URL!==a&&k.history.replaceState(null,"",a))}else b.publish("confluence.viewpage.src.empty",f)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(d){require("ajs").toInit(d.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var h=b(".acs-side-bar");var g=h.find("a:not(.external_link a, #acs-configure-link)");c(g,"sidebar");var f=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Pages")+"']");c(f,"sidebar-pages");var j=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Blog")+"']");c(j,"sidebar-blogs");var e=h.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var i=h.find(".ia-secondary-container a:not(.more-children-link)");if(h.find(".ia-secondary-container").data("tree-type")=="pages"){c(i,"contextnavchildmode")}else{if(h.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(i,"contextnavpagetreemode")}else{c(i,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,h){function g(a,c){return c?a+"."+c.replace(/\./g,"-"):a}var d=h("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(a){if(!a.name)throw'Missing attribute "name"';var c=a.getAttribute("data-persist"),b=a.getAttribute("data-persist-scope"),b=g(a.name,b),b=d.getItem(b),e=a.getAttribute("data-default-value");if(/value|checked/.test(c))b=b||e||null,null!==b&&("checked"===c&&(b="true"===
b),a[c]=b);else throw"Persistable only works with 'value' or 'checked' attributes!";},events:{change:function(a){var c=a.getAttribute("data-persist"),b=a.getAttribute("data-persist-scope"),b=g(a.name,b),e=a.getAttribute("data-default-value");String(a[c])===e?d.removeItem(b):d.setItem(b,a[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
define("confluence/flag",["ajs","jquery"],function(f,c){function l(a){a[0].close=function(){g(a)}}function h(a){var b=c('\x3cspan class\x3d"aui-icon icon-close" role\x3d"button" tabindex\x3d"0"\x3e\x3c/span\x3e');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function m(a){a.find(".aui-message").addClass("aui-will-close");setTimeout(function(){a[0].close()},5E3)}function g(a){var b=
a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();k(a);b.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:!0}));return b}function n(){c("#aui-flag-container").find(".aui-flag").get().forEach(function(a){"true"===a.getAttribute("aria-hidden")&&c(a).remove()})}function k(a){a.hasClass("aui-flag-stack")&&a.children('.aui-flag:not([aria-hidden\x3d"true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden\x3d"true"])').last().addClass("aui-flag-stack-top-item"))}
var p={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){a=c.extend({},p,a);var b;b=a;b=f.template('\x3cdiv class\x3d"aui-flag {extraClasses}"\x3e\x3cdiv class\x3d"aui-message aui-message-{type} {type} {closeable} shadowed"\x3e\x3cp class\x3d"title"\x3e\x3cstrong\x3e{title}\x3c/strong\x3e\x3c/p\x3e{body}\x3c!-- .aui-message --\x3e\x3c/div\x3e\x3c/div\x3e').fill({"body:html":b.body||"",closeable:"never"===b.close?"":"closeable",title:b.title||"",type:b.type,extraClasses:b.extraClasses||
""}).toString();b=c(b);l(b);"auto"===a.close?(h(b),m(b)):"manual"===a.close&&h(b);n();var e=c("#aui-flag-container");e.length||(e=c('\x3cdiv id\x3d"aui-flag-container"\x3e\x3c/div\x3e'),c("body").prepend(e));if(a.stack){var d=c('[data-aui-flag-stack\x3d"'+a.stack+'"]');d.length||(d=c('\x3cdiv data-aui-flag-stack\x3d"'+a.stack+'" class\x3d"aui-flag-stack"\x3e\x3c/div\x3e'),d.appendTo(e));d.find('[aria-hidden\x3d"false"]').length||d.detach().appendTo(e);a.fifo?b.appendTo(d):b.prependTo(d);k(d)}else b.appendTo(e);
a=b;a=a.length?a[0]:a;window.getComputedStyle(a,null).getPropertyValue("left");b=b.attr("aria-hidden","false")[0];b.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
define("confluence/flag-scroll",["jquery","ajs","confluence/meta","document"],function(c,g,h,k){function e(){var a=c("#aui-flag-container");if(a.find('.aui-flag[aria-hidden\x3d"false"]').length){var b;f?b=c("#header").height()+20:(b=d.scrollTop(),b=51>=b?71-Math.max(b,0):20);a.css("top",b)}}var f=!1,d;return function(a){d=(f=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);d.on("scroll",e);k.addEventListener("aui-flag-show",e);g.bind("rte-ready",function(){"page"===h.get("content-type")&&
a("#aui-flag-container").find('.aui-flag[aria-hidden\x3d"false"]').each(function(){this.close()})})}});require("confluence/module-exporter").safeRequire("confluence/flag-scroll",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=require("confluence/confluence-storage-manager")("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:util-resources', location = '/js/atlassian/um-utils.js' */
define('user-management/helpers/um-utils', [
    'jquery'
], function (
    $
) {
    var isSiteAdminWRM = WRM.data.claim("com.atlassian.crowd.user-provisioning-plugin:create-users-resources.isSiteAdmin");
    /*
        This is going to have to change when UM moves to a different URL.
        We'll also need to look at usages of this because commumication
        will need to be a bit different, eg. using CORS
     */
    function restBaseUrl() {
        return '/admin';
    }

    return {

        /**
         * @returns A promise which resolves to a boolean.
         */
        isSiteAdmin: function() {
            return $.when(isSiteAdminWRM).promise();
        },
        restBaseUrl: restBaseUrl,
        productName: function() {
            var contextPath = AJS.contextPath();
            var productName = "Unknown";
            if (contextPath === "") {
                productName = "jira";
            } else if (contextPath === "/builds") {
                productName = "bamboo";
            } else if (contextPath === "/wiki") {
                productName = "confluence";
            }
            return productName;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:adminmenu-analytics', location = 'js/atlassian/analytics-upp.js' */
require([
    'user-management/helpers/um-utils'
], function(
    umUtils
) {
    var triggerAnalytics = function (name, properties) {
        AJS.trigger("analytics", {
            name: "unified.admin." + name,
            data: properties || {}
        });
    };

    var getProductName = umUtils.productName;

    AJS.$(document)
        .on("click", "#admin-billing-link", function () {
            triggerAnalytics("menu.billing.click", {product:getProductName()});
        })
        .on("click", "#admin-discovernewapps-link", function () {
            triggerAnalytics("menu.addApplications.click", {product:getProductName()});
        })
        .on("click", "#admin-management-link", function () {
            triggerAnalytics("menu.userManagement.click", {product:getProductName()});
        })
        // handle admin menu links from JIRA due to required use of web sections
        .on("click", "#admin_billing_section", function () {
            triggerAnalytics("menu.billing.click", {product:getProductName()});
        })
        .on("click", "#admin_discovernewapps_section", function () {
            triggerAnalytics("menu.addApplications.click", {product:getProductName()});
        })
        .on("click", "#user_management_section", function () {
            triggerAnalytics("menu.userManagement.click", {product:getProductName()});
        })
        .on("click", "#pending-invites-flag .icon-close", function () {
            triggerAnalytics("inproduct.invite.pending.message.dismissed")
        })
    ;

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:common-flag-resources', location = '/js/atlassian/aui-polyfill/flag.js' */
/*
 * Polyfill for aui/flag for use in products that don't provide a version (due to using an ancient AUI version).
 */
(function() {
    try {
        require('aui/flag')
    } catch (e) {
        define('aui/flag', [], displayFlagAsMessage);
    }

    function displayFlagAsMessage(args) {
        var type = (args.type || "").toLowerCase();
        var message = typeof AJS.messages[type] == 'function' ? AJS.messages[type] : AJS.messages.generic;

        // for some reason we display info messages as warnings... keeping that for backward compatibility
        message(".notifications", { body: args.message });
    }
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:common-flag-resources', location = '/js/atlassian/flag.js' */
/**
 * This is a wrapper around AUI Flag which will escape the body text of the Flag unless explicitly told not to.
 *
 * The body will NOT be escaped iff the passed in object has an attribute 'isHtml' and it is set to true.
 */
define('user-management-common/flag', [
    'aui/flag',
    'underscore',
    'jquery'
], function(
    flag,
    _,
    $
) {
    return function(options){
        var createdFlag;
        // If not explicitly HTML, escape the body
        if(!options.isHtml) {
            options.body = _.escape(options.body);
        }

        createdFlag = flag(options);
        $(createdFlag).on('aui-flag-close', function(){
            createdFlag.dispatchEvent(new CustomEvent('um-flag-close', { bubbles: true }));
        });
        return createdFlag;
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:impersonation-resources', location = '/js/atlassian/helpers/cookies.js' */
define('user-management-common/helpers/cookies', [], function() {
    return {
        readCookie: function (name) {
            //document.cookie lists cookies in the format "name1=value1; name2=value2" etc
            //see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
            var nameEQ = name + "=";
            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];

                //Remove any leading spaces (normally 1, but I don't want to make assumptions)
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }

                //Remove the name1= part and return what is left
                if (cookie.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
                }
            }
            return null;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:impersonation-resources', location = '/js/atlassian/impersonation/impersonation.js' */
/**
 * This module displays an informational message with a link to drop the impersonation, if the current user is
 * being impersonated. This script is used in both user management and user provisioning plugins.
 */
define('user-management-common/impersonation/impersonation', [
    'jquery',
    'underscore',
    'user-management-common/flag',
    'user-management-common/helpers/cookies'
], function(
    $,
    _,
    flag,
    cookies
) {
    var showImpersonationMessaging = function(username){
        var message = AJS.format("You\'\'re temporarily logged in as {0}. When you\'\'re done, {1}switch back{2} to your account.",
            _.escape(impersonation.getDisplayName()),
            '<a id="impersonation-dismiss-trigger" href="#">', '</a>');

        var messageFlag = flag({ type: 'info', isHtml: true, body: message });

        $(messageFlag).find("#impersonation-dismiss-trigger").click(function (e) {
            e.preventDefault();
            impersonation.dropImpersonation().then(function () {
                if (username) {
                    window.open("/admin/users/view?username=" + encodeURIComponent(username), "_top");
                } else {
                    window.open("/admin/users", "_top");
                }
            });
        });
    };

    var impersonation = {
        init: function () {
            if (impersonation.isImpersonated()) {
                showImpersonationMessaging(impersonation.getUsername());
            }
        },

        getUsername: function () {
            return cookies.readCookie("um.user.impersonated.username");
        },

        getDisplayName: function () {
            return cookies.readCookie("um.user.impersonated.displayname");
        },

        dropImpersonation: function () {
            return $.ajax({
                type: "POST",
                contentType: 'application/json',
                url: "/admin/rest/um/1/impersonate/release"
            });
        },

        isImpersonated: function () {
            return !!impersonation.getUsername();
        }
    };
    return impersonation;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:impersonation-resources', location = '/js/atlassian/impersonation-init.js' */
require(['jquery', 'user-management-common/impersonation/impersonation'],
function($, impersonation) {
    $(impersonation.init);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:create-users-resources', location = '/js/atlassian/create-user/request-invite.js' */
/**
 * This module allows external products to request an invite for a user.
 */
define('user-management-common/create-user/request-invite', [
    'jquery',
    'user-management/helpers/um-utils'
], function(
    $,
    umUtils
) {
    function requestInvite(emailAddresses, extraProductId, extraGroups){
        return $.ajax({
            type: 'PUT',
            url: umUtils.restBaseUrl() + '/rest/um/1/requestaccess',
            contentType: 'application/json',
            data: JSON.stringify({
                emailAddresses: emailAddresses,
                extraProductId: extraProductId,
                extraGroups: extraGroups
            })
        });
    }
    return {
        createUser: requestInvite
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:create-users-resources', location = '/js/atlassian/create-user/pending-invites.js' */
/**
 * This module allows external products to request an invite for a user.
 */
define('user-management-common/create-user/pending-invites', [
    'jquery',
    'user-management-common/flag',
    'user-management-common/create-user/request-invite',
    'user-management/helpers/um-utils'
], function(
    $,
    flag,
    requestInvite,
    umUtils
) {
    var pendingInvites = {};
    pendingInvites.hasCompleted = false;
    var pendingInvitesFlag;
    var INVITES_FLAG_CLOSED_KEY = "uppPendingInvitesFlagClosed";
    var LAST_CHECK_FOR_PENDING_INVITES_TIME = "uppLastCheckForPendingInvitesTime";
    var PENDING_INVITES = "uppLastPendingInvites";
    var ONE_HOUR = (1000 * 60 * 60);

    pendingInvites.flagHasBeenDismissed = function () { //visible for testing
        var dismissed = false;
        var lastClosed = localStorage[INVITES_FLAG_CLOSED_KEY];
        if (lastClosed) {
            dismissed = (new Date().getTime() - lastClosed) < ONE_HOUR; // Show the flag again after one hour
        }
        return dismissed;
    };

    function pendingInviteCount() {
        var deferredCount = $.Deferred();
        if (localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME] != null && (new Date().getTime() - localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME]) < ONE_HOUR) {
            deferredCount.resolve(localStorage[PENDING_INVITES]);
        } else {
            $.ajax({
                url: umUtils.restBaseUrl() + '/rest/um/1/user/search?activeFilter=pending&max-results=1',
                dataType: 'json',
                // Revert JIRA's override of jQuery's default. This means the &_=<timestamp>
                // query param is not included on requests
                cache: true
            }).then(function (invites) {
                localStorage[PENDING_INVITES] = invites.length;
                localStorage[LAST_CHECK_FOR_PENDING_INVITES_TIME] = new Date().getTime();
                deferredCount.resolve(invites.length);
            }, deferredCount.reject);
        }

        return deferredCount.promise();
    }

    function showPendingInvitesFlag() {
        pendingInvitesFlag = flag({
            id: 'pending-invites-flag',
            type: 'info',
            isHtml: true,
            body: AJS.format("There are users with pending invites to your Atlassian Cloud. {0}Approve here{1}.", '<a href="/admin/users?activeFilter=pending&src=pending.flag.' + encodeURIComponent(umUtils.productName()) + '">', '</a>')
        });
        $(pendingInvitesFlag).on('um-flag-close', function() {
            localStorage[INVITES_FLAG_CLOSED_KEY] = new Date().getTime();
        });
    }

    pendingInvites.closePendingInvitesFlag = function() {
        if (pendingInvitesFlag != null) {
            pendingInvitesFlag.close();
        }
    };

    pendingInvites.init = function() {
        umUtils.isSiteAdmin().then(function (isSiteAdmin) {
            if (isSiteAdmin && !pendingInvites.flagHasBeenDismissed()) {
                return pendingInviteCount().then(function (inviteCount) {
                    if (inviteCount > 0) {
                        showPendingInvitesFlag();
                    }
                });
            }
        }).always(function() { pendingInvites.hasCompleted = true; })
    };

    return pendingInvites;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:create-users-resources', location = '/js/atlassian/create-user-init.js' */
require(['jquery', 'user-management-common/create-user/request-invite', 'user-management-common/create-user/pending-invites'],
function($, requestInvite, pendingInvites) {
    $(pendingInvites.init);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = 'includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = 'includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-on-space-resources', location = 'com/atlassian/confluence/extra/calendar3/js/calendar-on-space.js' */
(function(a){a(function(){function b(){var c="com.atlassian.confluence.extra.team-calendars:tc-on-space-blueprint-webitem";try{Confluence.Blueprint.setDirectCallback(c,function(g,f){f.finalUrl=Confluence.getContextPath()+"/spaces/"+f.spaceKey+"/calendars?src=sidebar&openAddCalDialog=true"})}catch(d){console.error("calendar-on-space.js: Team Calendars is using some global variable that threw an error",d)}}b()})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("/wiki") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){if(ev.type==="click"&&ev.which===2){window.open(state.finalUrl)}else{window.location=state.finalUrl}}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}return{success:function(callback){callback()}}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('With meeting notes you can...') + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Crowd-source your agenda') + '</h3><p>' + soy.$$escapeHtml('Distribute an agenda and keep meetings focused.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Capture meeting minutes') + '</h3><p>' + soy.$$escapeHtml('Take notes and make them available to everyone.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Create and assign tasks') + '</h3><p>' + soy.$$escapeHtml('Assign action items for attendees to work on afterward.') + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.growth.product-growth-confluence-plugin:growth-web-resources', location = 'js/store.js' */
var GROW=GROW||{};GROW.Store=GROW.Store||{};(function(a){GROW.Store.get=function(b){return AJS.Meta.get(b)};GROW.Store.getNumber=function(b){return AJS.Meta.getNumber(b)};GROW.Store.getBoolean=function(b){return AJS.Meta.getBoolean(b)};GROW.Store.set=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.setGlobal=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.remove=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})};GROW.Store.removeGlobal=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})}})(AJS.$);
}catch(e){WRMCB(e)};