"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=n(function(a,t){
var o=require('@stdlib/utils-get-prototype-of/dist'),f=require('@stdlib/utils-type-of/dist'),s=require('@stdlib/assert-is-error/dist');function u(r){if(typeof r!="object"||r===null)return!1;if(r instanceof RangeError)return!0;if(s(r))for(;r;){if(f(r)==="rangeerror")return!0;r=o(r)}return!1}t.exports=u
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
