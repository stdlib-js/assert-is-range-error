// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},o=Object.defineProperty,u=Object.prototype,i=u.toString,c=u.__defineGetter__,f=u.__defineSetter__,a=u.__lookupGetter__,l=u.__lookupSetter__;var p=function(r,t,e){var n,o,p,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(a.call(r,t)||l.call(r,t)?(n=r.__proto__,r.__proto__=u,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&c&&c.call(r,t,e.get),y&&f&&f.call(r,t,e.set),r},y=o,v=p,b=n()?y:v;var s=function(r,t,e){b(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},_=s;var j=function(r){return"boolean"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return d&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(r){return w.call(r)},h=Object.prototype.hasOwnProperty;var E=function(r,t){return null!=r&&h.call(r,t)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=E,A=P,B=m;var T=O,k=function(r){var t,e,n;if(null==r)return B.call(r);e=r[A],t=S(r,A);try{r[A]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[A]=e:delete r[A],n},x=g()?k:T,G=Boolean.prototype.toString;var V=x,C=function(r){try{return G.call(r),!0}catch(r){return!1}},F=g();var L=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?C(r):"[object Boolean]"===V(r)))},M=j,R=L;var X=_,z=function(r){return M(r)||R(r)},D=L;X(z,"isPrimitive",j),X(z,"isObject",D);var I="object"==typeof self?self:null,N="object"==typeof window?window:null,U=z.isPrimitive,q=function(){return new Function("return this;")()},H=I,J=N,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!U(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},W=Q(),Y=W.document&&W.document.childNodes,Z=Int8Array,$=t,rr=Y,tr=Z;var er=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},or=nr;_(or,"REGEXP",nr());var ur=or,ir=x;var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};var fr=function(r){return null!==r&&"object"==typeof r};_(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(fr));var ar=fr;var lr=x,pr=ur.REGEXP,yr=function(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var vr=function(r){var t,e,n;if(("Object"===(e=lr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return yr(r)?"Buffer":e},br=vr;var sr=vr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?br(r).toLowerCase():t},jr=function(r){return sr(r).toLowerCase()},dr=er()?jr:_r,gr=dr;var mr=function(r){return"function"===gr(r)},wr=Object.getPrototypeOf;var Or=function(r){return r.__proto__},hr=x,Er=Or;var Pr=function(r){var t=Er(r);return t||null===t?t:"[object Function]"===hr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Sr=wr,Ar=Pr,Br=mr(Object.getPrototypeOf)?Sr:Ar;var Tr=function(r){return null==r?null:(r=Object(r),Br(r))},kr=Tr,xr=x;var Gr=Tr,Vr=dr,Cr=function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===xr(r))return!0;r=kr(r)}return!1};var Fr=function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof RangeError)return!0;if(Cr(r))for(;r;){if("rangeerror"===Vr(r))return!0;r=Gr(r)}return!1};export{Fr as default};
//# sourceMappingURL=mod.js.map
