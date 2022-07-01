// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isRangeError=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},o=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,c=u.__defineSetter__,a=u.__lookupGetter__,l=u.__lookupSetter__;var p=function(r,t,e){var n,o,p,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(a.call(r,t)||l.call(r,t)?(n=r.__proto__,r.__proto__=u,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&f&&f.call(r,t,e.get),y&&c&&c.call(r,t,e.set),r},y=o,s=p,b=n()?y:s;var v=function(r,t,e){b(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},d=v;var j=function(r){return"boolean"==typeof r};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return _&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(r){return w.call(r)},h=Object.prototype.hasOwnProperty;var E=function(r,t){return null!=r&&h.call(r,t)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=E,A=P,T=m;var B=O,x=function(r){var t,e,n;if(null==r)return T.call(r);e=r[A],t=S(r,A);try{r[A]=void 0}catch(t){return T.call(r)}return n=T.call(r),t?r[A]=e:delete r[A],n},k=g()?x:B,G=Boolean.prototype.toString;var R=k,V=function(r){try{return G.call(r),!0}catch(r){return!1}},C=g();var F=function(r){return"object"==typeof r&&(r instanceof Boolean||(C?V(r):"[object Boolean]"===R(r)))},L=j,M=F;var X=d,z=function(r){return L(r)||M(r)},D=F;X(z,"isPrimitive",j),X(z,"isObject",D);var I=z;var N=function(){return new Function("return this;")()},U="object"==typeof self?self:null,q="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=I.isPrimitive,Q=N,W=U,Y=q,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,er=Int8Array,nr=t,or=tr,ur=er;var ir=function(){return"function"==typeof nr||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},cr=fr;d(cr,"REGEXP",fr());var ar=cr,lr=k;var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)};var yr=function(r){return null!==r&&"object"==typeof r};d(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var sr=yr;var br=k,vr=ar.REGEXP,dr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var jr=function(r){var t,e,n;if(("Object"===(e=br(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=vr.exec(n.toString()))return t[1]}return dr(r)?"Buffer":e},_r=jr;var gr=jr;var mr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?_r(r).toLowerCase():t},wr=function(r){return gr(r).toLowerCase()},Or=ir()?wr:mr,hr=Or;var Er=function(r){return"function"===hr(r)},Pr=Object.getPrototypeOf;var Sr=function(r){return r.__proto__},Ar=k,Tr=Sr;var Br=function(r){var t=Tr(r);return t||null===t?t:"[object Function]"===Ar(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},xr=Pr,kr=Br,Gr=Er(Object.getPrototypeOf)?xr:kr;var Rr=function(r){return null==r?null:(r=Object(r),Gr(r))},Vr=Rr,Cr=k;var Fr=function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Cr(r))return!0;r=Vr(r)}return!1};return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof RangeError)return!0;if(Fr(r))for(;r;){if("rangeerror"===Or(r))return!0;r=Rr(r)}return!1}}));
//# sourceMappingURL=index.js.map
