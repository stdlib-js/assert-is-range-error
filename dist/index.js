"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var i=o(function(g,t){
var f=require('@stdlib/utils-get-prototype-of/dist'),s=require('@stdlib/utils-type-of/dist'),u=require('@stdlib/assert-is-error/dist');function c(r){if(typeof r!="object"||r===null)return!1;if(r instanceof RangeError)return!0;if(u(r))for(;r;){if(s(r)==="rangeerror")return!0;r=f(r)}return!1}t.exports=c
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
