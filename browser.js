// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isRangeError=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=/./,e=r(Object.freeze({__proto__:null,default:()=>window}))(),n=e.document&&e.document.childNodes,o=Int8Array,u=t,i=n,c=o;var f=function(){return"function"==typeof u||"object"==typeof c||"function"==typeof i};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var l=function(){return a&&"symbol"==typeof Symbol.toStringTag},p=Object.prototype.toString,y=p;var s=function(r){return y.call(r)},b=Object.prototype.hasOwnProperty;var v=function(r,t){return null!=r&&b.call(r,t)},_="function"==typeof Symbol?Symbol.toStringTag:"",d=v,j=_,g=p;var m=s,O=function(r){var t,e,n;if(null==r)return g.call(r);e=r[j],t=d(r,j);try{r[j]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[j]=e:delete r[j],n},w=l()?O:m,h="function"==typeof Object.defineProperty?Object.defineProperty:null;var E=function(){try{return h({},"x",{}),!0}catch(r){return!1}},P=Object.defineProperty,S=Object.prototype,A=S.toString,T=S.__defineGetter__,k=S.__defineSetter__,x=S.__lookupGetter__,B=S.__lookupSetter__;var G=P,R=function(r,t,e){var n,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(x.call(r,t)||B.call(r,t)?(n=r.__proto__,r.__proto__=S,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&T&&T.call(r,t,e.get),i&&k&&k.call(r,t,e.set),r},C=E()?G:R;var L=function(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var V=function(){return/^\s*function\s*([^(]*)/i},F=V;L(F,"REGEXP",V());var M=F,X=w;var z=Array.isArray?Array.isArray:function(r){return"[object Array]"===X(r)};var D=function(r){return null!==r&&"object"==typeof r};L(D,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!z(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(D));var I=D;var N=w,q=M.REGEXP,H=function(r){return I(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var J=function(r){var t,e,n;if(("Object"===(e=N(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=q.exec(n.toString()))return t[1]}return H(r)?"Buffer":e},K=J;var Q=J;var U=function(r){var t;return null===r?"null":"object"===(t=typeof r)?K(r).toLowerCase():t},W=function(r){return Q(r).toLowerCase()},Y=f()?W:U,Z=Y;var $=function(r){return"function"===Z(r)},rr=Object.getPrototypeOf;var tr=w,er=function(r){return r.__proto__};var nr=function(r){var t=er(r);return t||null===t?t:"[object Function]"===tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},or=rr,ur=nr,ir=$(Object.getPrototypeOf)?or:ur;var cr=function(r){return null==r?null:(r=Object(r),ir(r))},fr=cr,ar=w;var lr=cr,pr=Y,yr=function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===ar(r))return!0;r=fr(r)}return!1};return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof RangeError)return!0;if(yr(r))for(;r;){if("rangeerror"===pr(r))return!0;r=lr(r)}return!1}}));
//# sourceMappingURL=browser.js.map
