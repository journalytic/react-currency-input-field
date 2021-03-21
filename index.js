!function(e){var t={};function a(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(r,l,function(t){return e[t]}.bind(null,l));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=6)}([function(e,t){e.exports=React},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegExp=void 0,t.escapeRegExp=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}},function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},u=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.CurrencyInput=void 0;var o=i(a(0)),c=a(3);t.CurrencyInput=o.forwardRef((function(e,t){var a=e.allowDecimals,l=void 0===a||a,n=e.allowNegativeValue,i=void 0===n||n,d=e.id,s=e.name,f=e.className,m=e.customInput,v=e.decimalsLimit,p=e.defaultValue,b=e.disabled,g=void 0!==b&&b,h=e.maxLength,E=e.value,y=e.onValueChange,x=e.fixedDecimalLength,_=e.placeholder,N=e.decimalScale,S=e.prefix,O=e.suffix,w=e.intlConfig,j=e.step,P=e.min,M=e.max,C=e.disableGroupSeparators,V=void 0!==C&&C,D=e.disableAbbreviations,R=void 0!==D&&D,F=e.decimalSeparator,A=e.groupSeparator,I=e.onChange,k=e.onFocus,B=e.onBlur,L=e.onKeyDown,T=e.onKeyUp,G=u(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp"]);if(F&&A&&F===A)throw new Error("decimalSeparator cannot be the same as groupSeparator");if(F&&c.isNumber(F))throw new Error("decimalSeparator cannot be a number");if(A&&c.isNumber(A))throw new Error("groupSeparator cannot be a number");var U=o.useMemo((function(){return c.getLocaleConfig(w)}),[w]),$=F||U.decimalSeparator||"",H=A||U.groupSeparator||"",K={decimalSeparator:$,groupSeparator:H,disableGroupSeparators:V,intlConfig:w,prefix:S||U.prefix,suffix:O},z={decimalSeparator:$,groupSeparator:H,allowDecimals:l,decimalsLimit:v||x||2,allowNegativeValue:i,disableAbbreviations:R,prefix:S||U.prefix},W=void 0!==p?c.formatValue(r(r({},K),{decimalScale:N,value:String(p)})):void 0!==E?c.formatValue(r(r({},K),{decimalScale:N,value:String(E)})):"",J=o.useState(W),q=J[0],Y=J[1],Q=o.useState(!1),X=Q[0],Z=Q[1],ee=o.useState(0),te=ee[0],ae=ee[1],re=t||o.useRef(null),le=function(e,t){Z(!0);var a=c.cleanValue(r({value:e},z));if(""===a)return y&&y(void 0,s),void Y("");if(!(h&&a.replace(/-/g,"").length>h)){if("-"===a||a===$)return y&&y(void 0,s),void Y(e);var l=c.formatValue(r({value:a},K));if(null!=t){var n=t+(l.length-e.length)||1;ae(n)}Y(l),y&&y(a,s)}};o.useEffect((function(){X&&"-"!==q&&re&&"object"==typeof re&&re.current&&re.current.setSelectionRange(te,te)}),[te,re,X]);var ne=void 0!==E?c.formatValue(r(r({},K),{decimalScale:X?void 0:N,value:String(E)})):void 0,ie=r({type:"text",inputMode:"decimal",id:d,name:s,className:f,onChange:function(e){var t=e.target,a=t.value,r=t.selectionStart;le(a,r),I&&I(e)},onBlur:function(e){var t=e.target.value,a=c.cleanValue(r({value:t},z));if("-"===a||!a)return Y(""),void(B&&B(e));var l=c.fixedDecimalValue(a,$,x),n=c.padTrimValue(l,$,void 0!==N?N:x);y&&y(n,s);var i=c.formatValue(r(r({},K),{value:n}));Y(i),B&&B(e)},onFocus:function(e){return k&&k(e),q?q.length:0},onKeyDown:function(e){var t=e.key;if(j&&("ArrowUp"===t||"ArrowDown"===t)){e.preventDefault(),ae(q.length);var a=parseFloat(void 0!==E?String(E).replace($,"."):c.cleanValue(r({value:q},z)))||0,l="ArrowUp"===t?a+j:a-j;if(void 0!==P&&l<P)return;if(void 0!==M&&l>M)return;var n=String(j).includes($)?Number(String(j).split($)[1].length):void 0;le(String(n?l.toFixed(n):l).replace(".",$))}L&&L(e)},onKeyUp:function(e){var t=e.key,a=e.currentTarget.selectionStart;if("ArrowUp"!==t&&"ArrowDown"!==t&&"-"!==q){var r=c.getSuffix(q,{groupSeparator:H,decimalSeparator:$});if(r&&a&&a>q.length-r.length&&re&&"object"==typeof re&&re.current){var l=q.length-r.length;re.current.setSelectionRange(l,l)}}T&&T(e)},placeholder:_,disabled:g,value:void 0!==ne&&"-"!==q&&q!==$?ne:q,ref:re},G);if(m){var ue=m;return o.default.createElement(ue,r({},ie))}return o.default.createElement("input",r({},ie))})),t.CurrencyInput.displayName="CurrencyInput",t.default=t.CurrencyInput},function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||t.hasOwnProperty(a)||r(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),l(a(9),t),l(a(13),t),l(a(4),t),l(a(14),t),l(a(5),t),l(a(15),t),l(a(16),t)},function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},l=this&&this.__spreadArrays||function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var r=Array(e),l=0;for(t=0;t<a;t++)for(var n=arguments[t],i=0,u=n.length;i<u;i++,l++)r[l]=n[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.formatValue=void 0;var n=a(1),i=a(5);t.formatValue=function(e){var t=e.value,a=e.decimalSeparator,l=e.intlConfig,c=e.decimalScale,d=e.prefix,s=void 0===d?"":d,f=e.suffix,m=void 0===f?"":f;if(""===t||void 0===t)return"";if("-"===t)return"-";var v=new RegExp("^\\d?-"+(s?n.escapeRegExp(s)+"?":"")+"\\d").test(t),p="."!==a?u(t,a,v):t,b=(l?new Intl.NumberFormat(l.locale,l.currency?{style:"currency",currency:l.currency,minimumFractionDigits:c||0,maximumFractionDigits:20}:void 0):new Intl.NumberFormat(void 0,{minimumFractionDigits:c||0,maximumFractionDigits:20})).formatToParts(Number(p)),g=o(b,e),h=i.getSuffix(g,r({},e)),E=t.slice(-1)===a?a:"",y=(p.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return void 0===c&&y&&a&&(g=g.includes(a)?g.replace(RegExp("(\\d+)("+n.escapeRegExp(a)+")(\\d+)","g"),"$1$2"+y):h&&!m?g.replace(h,""+a+y+h):""+g+a+y),m&&E?""+g+E+m:h&&E?g.replace(h,""+E+h):h&&m?g.replace(h,""+E+m):[g,E,m].join("")};var u=function(e,t,a){var r=e;return t&&"."!==t&&(r=r.replace(RegExp(n.escapeRegExp(t),"g"),"."),a&&"-"===t&&(r="-"+r.slice(1))),r},o=function(e,t){var a=t.prefix,r=t.groupSeparator,n=t.decimalSeparator,i=t.decimalScale,u=t.disableGroupSeparators,o=void 0!==u&&u;return e.reduce((function(e,t,u){var c=t.type,d=t.value;return 0===u&&a?"minusSign"===c?[d,a]:"currency"===c?l(e,[a]):[a,d]:"currency"===c?a?e:l(e,[d]):"group"===c?o?e:l(e,[void 0!==r?r:d]):"decimal"===c?void 0!==i&&0===i?e:l(e,[void 0!==n?n:d]):l(e,"fraction"===c?[void 0!==i?d.slice(0,i):d]:[d])}),[""]).join("")}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSuffix=void 0;var r=a(1);t.getSuffix=function(e,t){var a=t.groupSeparator,l=void 0===a?",":a,n=t.decimalSeparator,i=void 0===n?".":n,u=new RegExp("\\d([^"+r.escapeRegExp(l)+r.escapeRegExp(i)+"0-9]+)"),o=e.match(u);return o?o[1]:void 0}},function(e,t,a){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(7)),i=r(a(8)),u=r(a(17)),o=r(a(21)),c=r(a(22)),d=r(a(24));n.default.render(l.default.createElement(i.default,null),document.getElementById("example-1")),n.default.render(l.default.createElement(u.default,null),document.getElementById("example-2")),n.default.render(l.default.createElement(o.default,null),document.getElementById("example-3")),n.default.render(l.default.createElement(c.default,null),document.getElementById("example-4")),n.default.render(l.default.createElement(d.default,null),document.getElementById("format-values-example"))},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Example1=void 0;var u=n(a(0)),o=i(a(2));t.Example1=function(){var e=u.useState(""),t=e[0],a=e[1],r=u.useState(""),l=r[0],n=r[1],i=u.useState(123.45),c=i[0],d=i[1],s=u.useState(" "),f=s[0],m=s[1];return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12 mb-4"},u.default.createElement("a",{href:"https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/Example1.tsx"},u.default.createElement("h2",null,"Example 1")),u.default.createElement("ul",null,u.default.createElement("li",null,"'£'"," prefix"),u.default.createElement("li",null,"Allows decimals (up to 2 decimal places)"),u.default.createElement("li",null,"Value is set programmatically (passed in via props)")),u.default.createElement("form",{className:"needs-validation"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"form-group col"},u.default.createElement("label",{htmlFor:"validationCustom01"},"Please enter a value (max £1,000)"),u.default.createElement(o.default,{id:"validationCustom01",name:"input-1",className:"form-control "+l,value:c,onValueChange:function(e){return m(void 0===e?"undefined":e||" "),e?Number.isNaN(Number(e))?(a("Please enter a valid number"),void n("is-invalid")):Number(e)>1e3?(a("Max: £1000"),n("is-invalid"),void d(e)):(n("is-valid"),void d(e)):(n(""),void d(""))},placeholder:"Please enter a number",prefix:"£",step:1,decimalScale:2}),u.default.createElement("div",{className:"invalid-feedback"},t)),u.default.createElement("div",{className:"form-group col"},u.default.createElement("pre",{className:"h-100 p-3 bg-dark text-white"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-6"},u.default.createElement("div",{className:"text-muted mr-3"},"onValueChange:"),f))))))))},t.default=t.Example1},function(e,t,a){"use strict";var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var r=Array(e),l=0;for(t=0;t<a;t++)for(var n=arguments[t],i=0,u=n.length;i<u;i++,l++)r[l]=n[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.cleanValue=void 0;var l=a(10),n=a(11),i=a(12),u=a(1);t.cleanValue=function(e){var t=e.value,a=e.groupSeparator,o=void 0===a?",":a,c=e.decimalSeparator,d=void 0===c?".":c,s=e.allowDecimals,f=void 0===s||s,m=e.decimalsLimit,v=void 0===m?2:m,p=e.allowNegativeValue,b=void 0===p||p,g=e.disableAbbreviations,h=void 0!==g&&g,E=e.prefix,y=void 0===E?"":E;if("-"===t)return t;var x=h?[]:["k","m","b"],_=new RegExp("((^|\\D)-\\d)|(-"+u.escapeRegExp(y)+")").test(t),N=RegExp("(\\d+)-?"+u.escapeRegExp(y)).exec(t)||[],S=N[0],O=N[1],w=y?S?t.replace(S,"").concat(O):t.replace(y,""):t,j=n.removeSeparators(w,o),P=i.removeInvalidChars(j,r([o,d],x)),M=P;if(!h){if(x.some((function(e){return e===P.toLowerCase()})))return"";var C=l.parseAbbrValue(P,d);C&&(M=String(C))}var V=_&&b?"-":"";if(d&&M.includes(d)){var D=P.split(d),R=D[0],F=D[1],A=v&&F?F.slice(0,v):F;return""+V+R+(f?""+d+A:"")}return""+V+M}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseAbbrValue=t.abbrValue=void 0;var r=a(1);t.abbrValue=function(e,t,a){if(void 0===t&&(t="."),void 0===a&&(a=10),e>999){var r=(""+e).length,l=Math.pow,n=l(10,a);return r-=r%3,(Math.round(e*n/l(10,r))/n+" kMGTPE"[r/3]).replace(".",t)}return String(e)};var l={k:1e3,m:1e6,b:1e9};t.parseAbbrValue=function(e,t){void 0===t&&(t=".");var a=new RegExp("(\\d+("+r.escapeRegExp(t)+"\\d+)?)([kmb])$","i"),n=e.match(a);if(n){var i=n[1],u=n[3],o=l[u.toLowerCase()];return Number(i.replace(t,"."))*o}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSeparators=void 0;var r=a(1);t.removeSeparators=function(e,t){void 0===t&&(t=",");var a=new RegExp(r.escapeRegExp(t),"g");return e.replace(a,"")}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeInvalidChars=void 0;var r=a(1);t.removeInvalidChars=function(e,t){var a=r.escapeRegExp(t.join("")),l=new RegExp("[^\\d"+a+"]","gi");return e.replace(l,"")}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fixedDecimalValue=void 0,t.fixedDecimalValue=function(e,t,a){if(a&&e.length>1){if(e.includes(t)){var r=e.split(t),l=r[0];if((n=r[1]).length>a)return""+l+t+n.slice(0,a)}var n,i=e.length>a?new RegExp("(\\d+)(\\d{"+a+"})"):new RegExp("(\\d)(\\d+)"),u=e.match(i);if(u)return""+(l=u[1])+t+(n=u[2])}return e}},function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getLocaleConfig=void 0;var l={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""};t.getLocaleConfig=function(e){var t=e||{},a=t.locale,n=t.currency;return(a?new Intl.NumberFormat(a,n?{currency:n,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce((function(e,t,a){return"currency"===t.type?r(r({},e),0===a?{currencySymbol:t.value,prefix:t.value}:{currencySymbol:t.value,suffix:t.value}):"group"===t.type?r(r({},e),{groupSeparator:t.value}):"decimal"===t.type?r(r({},e),{decimalSeparator:t.value}):e}),l)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNumber=void 0,t.isNumber=function(e){return RegExp(/\d/,"gi").test(e)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.padTrimValue=void 0,t.padTrimValue=function(e,t,a){if(void 0===t&&(t="."),void 0===a||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var r=e.split(t),l=r[0],n=r[1];if(0===a)return l;var i=n||"";if(i.length<a)for(;i.length<a;)i+="0";else i=i.slice(0,a);return""+l+t+i}},function(e,t,a){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Example2=void 0;var u=n(a(0)),o=a(19),c=i(a(2));t.Example2=function(){var e=u.useState(""),t=e[0],a=e[1],r=u.useState(""),l=r[0],n=r[1],i=u.useState(" "),o=i[0],d=i[1];return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12 mb-4"},u.default.createElement("a",{href:"https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/Example2.tsx"},u.default.createElement("h2",null,"Example 2")),u.default.createElement("ul",null,u.default.createElement("li",null,"'$'"," prefix"),u.default.createElement("li",null,"Has placeholder"),u.default.createElement("li",null,"Does not allow decimals"),u.default.createElement("li",null,"Value is stored via component state")),u.default.createElement("form",{className:"needs-validation"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col"},u.default.createElement("label",{htmlFor:"validation-example-2-field"},"Please enter a value:"),u.default.createElement(c.default,{id:"validation-example-2-field",placeholder:"$1,234,567",allowDecimals:!1,className:"form-control "+l,onValueChange:function(e){d((void 0===e?"undefined":e)||" "),e?Number.isNaN(Number(e))?(a("Please enter a valid number"),n("is-invalid")):n("is-valid"):n("")},prefix:"$",step:10}),u.default.createElement("div",{className:"invalid-feedback"},t)),u.default.createElement("div",{className:"form-group col"},u.default.createElement("pre",{className:"h-100 p-3 bg-dark text-white"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-6"},u.default.createElement("div",{className:"text-muted mr-3"},"onValueChange:"),o))))))))},t.default=o.hot(e)(t.Example2)}).call(this,a(18)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,a){"use strict";e.exports=a(20)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,l=(r=a(0))&&"object"==typeof r&&"default"in r?r.default:r;function n(e){return n.warnAboutHMRDisabled&&(n.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),l.Children.only(e.children)}n.warnAboutHMRDisabled=!1;var i=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return l.createElement(n,null,l.createElement(e,t))}}:function(e){return e}};i.shouldWrapWithAppContainer=!1;t.AppContainer=n,t.hot=i,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Example3=void 0;var u=n(a(0)),o=i(a(2)),c=[{locale:"de-DE",currency:"EUR"},{locale:"en-US",currency:"USD"},{locale:"en-GB",currency:"GBP"},{locale:"ja-JP",currency:"JPY"},{locale:"en-IN",currency:"INR"}];t.Example3=function(){var e=u.useState(c[0]),t=e[0],a=e[1],r=u.useState("123"),l=r[0],n=r[1],i=u.useState(" "),d=i[0],s=i[1];return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12 mb-4"},u.default.createElement("a",{href:"https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/Example3.tsx"},u.default.createElement("h2",null,"Example 3")),u.default.createElement("ul",null,u.default.createElement("li",null,"Intl config")),u.default.createElement("div",{className:"row"}),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"form-group col"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12"},u.default.createElement(o.default,{id:"validationCustom04",name:"input-1",intlConfig:t,className:"form-control",onValueChange:function(e){s(void 0===e?"undefined":e||" "),n(e)},decimalsLimit:6,value:l,step:1})),u.default.createElement("div",{className:"col-12 mt-3"},u.default.createElement("label",{htmlFor:"intlConfigSelect"},"Intl option"),u.default.createElement("select",{className:"form-control",id:"intlConfigSelect",onChange:function(e){var t=c[Number(e.target.value)];t&&a(t)}},c.map((function(e,t){if(e){var a=e.locale,r=e.currency;return u.default.createElement("option",{key:""+a+r,value:t},a)}})))))),u.default.createElement("div",{className:"form-group col"},u.default.createElement("pre",{className:"h-100 p-3 bg-dark text-white"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12"},u.default.createElement("div",{className:"text-muted mr-3"},"onValueChange:"),d,u.default.createElement("div",{className:"text-muted mr-3 mt-3"},"intlConfig:"),JSON.stringify(t))))))))},t.default=t.Example3},function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Example4=void 0;var u=i(a(0)),o=i(a(23));function c(e,t){var a,l=t.fieldName,n=t.value;return r(r({},e),((a={})[l]=n,a))}var d={field1:{value:100,validationClass:"",errorMessage:""},field2:{value:200,validationClass:"",errorMessage:""}};t.Example4=function(){var e=u.useReducer(c,d),t=e[0],a=e[1],r=function(e,t){if(t){if(!e)return a({fieldName:t,value:{value:void 0,validationClass:"",errorMessage:""}});var r=Number(e);Number.isNaN(r)?a({fieldName:t,value:{value:r,validationClass:"is-invalid",errorMessage:"Please enter a valid number"}}):a({fieldName:t,value:{value:r,validationClass:"is-valid",errorMessage:""}})}},l=(t.field1.value||0)+(t.field2.value||0);return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12 mb-4"},u.default.createElement("a",{href:"https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/Example4.tsx"},u.default.createElement("h2",null,"Example 4")),u.default.createElement("ul",null,u.default.createElement("li",null,"Add two values together"),u.default.createElement("li",null,"Format the total value")),u.default.createElement("form",{className:"needs-validation"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col"},u.default.createElement("label",{htmlFor:"validation-example-3-field1"},"Value 1"),u.default.createElement(o.default,{id:"validation-example-3-field1",name:"field1",className:"form-control "+t.field1.validationClass,value:t.field1.value,onValueChange:r,prefix:"£"}),u.default.createElement("div",{className:"invalid-feedback"},t.field1.errorMessage)),u.default.createElement("div",{className:"col"},u.default.createElement("label",{htmlFor:"validation-example-3-field2"},"Value 2"),u.default.createElement(o.default,{id:"validation-example-3-field2",name:"field2",className:"form-control "+t.field2.validationClass,value:t.field2.value,onValueChange:r,prefix:"£"}),u.default.createElement("div",{className:"invalid-feedback"},t.field1.errorMessage)),u.default.createElement("div",{className:"col"},u.default.createElement("div",{className:""},u.default.createElement("label",null,"Total:"),u.default.createElement("div",{className:"h3"},o.formatValue({prefix:"£",value:String(l)}))))))))},t.default=t.Example4},function(e,t,a){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(2));t.default=l.default;var n=a(4);Object.defineProperty(t,"formatValue",{enumerable:!0,get:function(){return n.formatValue}})},function(e,t,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(a(0)),u=a(3);t.default=function(){var e=i.useState("123456789.999"),t=e[0],a=e[1],r=i.useState("$"),l=r[0],n=r[1],o=i.useState(","),c=o[0],d=o[1],s=i.useState("."),f=s[0],m=s[1],v=i.useState(!1),p=v[0],b=v[1],g=function(e){var t=e.target.value;b("true"===t)};return i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-12 mb-4"},i.default.createElement("a",{href:"https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/FormatValuesExample.tsx"},i.default.createElement("h2",null,"Format values example")),i.default.createElement("ul",null,i.default.createElement("li",null,"Use the `formatValue` function convert a value to a user friendly string")),i.default.createElement("div",{className:"col-10"},i.default.createElement("div",{className:"row mt-3"},i.default.createElement("div",{className:"col"},i.default.createElement("label",null,"Value (Number only)"),i.default.createElement("input",{type:"number",className:"form-control",value:t,onChange:function(e){var t=e.target.value;a(t)}})),i.default.createElement("div",{className:"col-3"},i.default.createElement("label",null,"Prefix"),i.default.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){var t=e.target.value;n(t)}})),i.default.createElement("div",{className:"col-3"},i.default.createElement("label",null,"Group Separator"),i.default.createElement("input",{type:"text",className:"form-control",value:c,onChange:function(e){var t=e.target.value;d(t)}})),i.default.createElement("div",{className:"col-3"},i.default.createElement("label",null,"Decimal Separator"),i.default.createElement("input",{type:"text",className:"form-control",value:f,onChange:function(e){var t=e.target.value;m(t)}}))),i.default.createElement("div",{className:"row mt-3"},i.default.createElement("div",{className:"col mt-3"},"Turn off separators:",i.default.createElement("div",{className:"ml-3 custom-control custom-radio custom-control-inline"},i.default.createElement("input",{type:"radio",id:"disableGroupSeparatorsTrue",className:"custom-control-input",value:"true",onChange:g,checked:p}),i.default.createElement("label",{className:"custom-control-label",htmlFor:"disableGroupSeparatorsTrue"},"True")),i.default.createElement("div",{className:"custom-control custom-radio custom-control-inline"},i.default.createElement("input",{type:"radio",id:"disableGroupSeparatorsFalse",className:"custom-control-input",value:"false",onChange:g,checked:!1===p}),i.default.createElement("label",{className:"custom-control-label",htmlFor:"disableGroupSeparatorsFalse"},"False")))),i.default.createElement("div",{className:"mt-5"},"Formatted value:",i.default.createElement("div",{className:"display-4"},u.formatValue({value:t,groupSeparator:c,decimalSeparator:f,disableGroupSeparators:p,prefix:l}))))))}}]);
//# sourceMappingURL=index.js.map