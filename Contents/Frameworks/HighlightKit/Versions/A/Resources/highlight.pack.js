/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0===n.index}function a(e){return M.test(e)}function i(e){var t,n,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",n=k.exec(o))return w(n[1])?n[1]:"no-highlight";for(o=o.split(/\s+/),t=0,r=o.length;r>t;t++)if(i=o[t],a(i)||w(i))return i}function o(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach(function(e){for(t in e)n[t]=e[t]}),n}function c(e){var t=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:a,node:i}),a=r(i,a),n(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:i}));return a}(e,0),t}function s(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}l+="<"+n(e)+E.map.call(e.attributes,r).join("")+">"}function c(e){l+="</"+n(e)+">"}function s(e){("start"===e.event?o:c)(e.node)}for(var u=0,l="",f=[];e.length||r.length;){var g=i();if(l+=t(a.substring(u,g[0].offset)),u=g[0].offset,g===e){f.reverse().forEach(c);do s(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===u);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),s(g.splice(0,1)[0])}return l+t(a.substr(u))}function u(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(t){return o(e,{v:null},t)})),e.cached_variants||e.eW&&[o(e)]||[e]}function l(e,t){function n(e){return e&&e.source||e}function r(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function a(i,o){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var c={},s=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");c[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.k?s("keyword",i.k):y(i.k).forEach(function(e){s(e,i.k[e])}),i.k=c}if(i.lR=r(i.l||/\w+/,!0),o){if(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=r(i.b),i.endSameAsBegin&&(i.e=i.b),i.e||i.eW||(i.e=/\B|\b/),t&&i.e&&i.i){var l=i.e instanceof RegExp?i.e.source:i.e,f=i.i instanceof RegExp?i.i.source:i.i;i.eR=r(l+"|"+f)}else i.e&&(i.eR=r(i.e));i.tE=n(i.e)||"",i.eW&&o.tE&&(i.tE+=(i.e?"|":"")+o.tE)}i.i&&(i.iR=r(i.i)),null==i.r&&(i.r=1),i.c||(i.c=[]),i.c=Array.prototype.concat.apply([],i.c.map(function(e){return u("self"===e?i:e)})),i.c.forEach(function(e){a(e,i)}),i.starts&&a(i.starts,o);var g=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(n).filter(Boolean);i.t=g.length?r(g.join("|"),!0):{exec:function(){return null}}}}a(e)}function f(e,n,a,i){function o(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function c(e,t){var n,a;for(n=0,a=t.c.length;a>n;n++)if(r(t.c[n].bR,e))return t.c[n].endSameAsBegin&&(t.c[n].eR=o(t.c[n].bR.exec(e)[0])),t.c[n]}function s(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,t):void 0}function u(e,t){return!a&&r(t.iR,e)}function b(e,t){var n=N.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var a=r?"":S.classPrefix,i='<span class="'+a,o=n?"":B;return i+=e+'">',i+t+o}function d(){var e,n,r,a;if(!y.k)return t(k);for(a="",n=0,y.lR.lastIndex=0,r=y.lR.exec(k);r;)a+=t(k.substring(n,r.index)),e=b(y,r),e?(L+=e[1],a+=p(e[0],t(r[0]))):a+=t(r[0]),n=y.lR.lastIndex,r=y.lR.exec(k);return a+t(k.substr(n))}function h(){var e="string"==typeof y.sL;if(e&&!x[y.sL])return t(k);var n=e?f(y.sL,k,!0,C[y.sL]):g(k,y.sL.length?y.sL:void 0);return y.r>0&&(L+=n.r),e&&(C[y.sL]=n.top),p(n.language,n.value,!1,!0)}function m(){M+=null!=y.sL?h():d(),k=""}function v(e){M+=e.cN?p(e.cN,"",!0):"",y=Object.create(e,{parent:{value:y}})}function R(e,t){if(k+=e,null==t)return m(),0;var n=c(t,y);if(n)return n.skip?k+=t:(n.eB&&(k+=t),m(),n.rB||n.eB||(k=t)),v(n,t),n.rB?0:t.length;var r=s(y,t);if(r){var a=y;a.skip?k+=t:(a.rE||a.eE||(k+=t),m(),a.eE&&(k=t));do y.cN&&(M+=B),y.skip||y.sL||(L+=y.r),y=y.parent;while(y!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.eR=r.eR),v(r.starts,"")),a.rE?0:t.length}if(u(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.cN||"<unnamed>")+'"');return k+=t,t.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');l(N,a);var E,y=i||N,C={},M="";for(E=y;E!==N;E=E.parent)E.cN&&(M=p(E.cN,"",!0)+M);var k="",L=0;try{for(var I,A,U=0;;){if(y.t.lastIndex=U,I=y.t.exec(n),!I)break;A=R(n.substring(U,I.index),I[0]),U=I.index+A}for(R(n.substr(U)),E=y;E.parent;E=E.parent)E.cN&&(M+=B);return{r:L,value:M,language:e,top:y}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:t(n)};throw T}}function g(e,n){n=n||S.languages||y(x);var r={r:0,value:t(e)},a=r;return n.filter(w).forEach(function(t){var n=f(t,e,!1);n.language=t,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function b(e){return S.tabReplace||S.useBR?e.replace(L,function(e,t){return S.useBR&&"\n"===e?"<br>":S.tabReplace?t.replace(/\t/g,S.tabReplace):""}):e}function p(e,t,n){var r=t?C[t]:n,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var t,n,r,o,u,l=i(e);a(l)||(S.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,u=t.textContent,r=l?f(l,u,!0):g(u),n=c(t),n.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=s(n,c(o),u)),r.value=b(r.value),e.innerHTML=r.value,e.className=p(e.className,l,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function h(e){S=o(S,e)}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,d)}}function v(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)}function R(t,n){var r=x[t]=n(e);r.aliases&&r.aliases.forEach(function(e){C[e]=t})}function N(){return y(x)}function w(e){return e=(e||"").toLowerCase(),x[e]||x[C[e]]}var E=[],y=Object.keys,x={},C={},M=/^(no-?highlight|plain|text)$/i,k=/\blang(?:uage)?-([\w-]+)\b/i,L=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,B="</span>",S={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=b,e.highlightBlock=d,e.configure=h,e.initHighlighting=m,e.initHighlightingOnLoad=v,e.registerLanguage=R,e.listLanguages=N,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(t,n,r){var a=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e.registerLanguage("scriptable",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static ",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl argumentsmodule console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise Alert App args Calendar CalendarEvent CallbackURL Color config console Contact ContactsContainer ContactsGroup Data DateFormatter DatePicker Device Dictation DocumentPicker DrawContext FileManager Font Image Keychain LinearGradient ListWidget Location Mail Message module Notification Pasteboard Path Photos Point QuickLook Rect RecurrenceRule RelativeDateTimeFormatter Reminder Request SFSymbol Safari Script ShareSheet Size Speech Timer UITable UITableCell UITableRow URLScheme UUID WebView WidgetDate WidgetImage WidgetSpacer WidgetStack WidgetText XMLParser"},r={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:n,c:[]},i={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,i,r,e.RM];var o=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:n,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,i,e.CLCM,e.CBCM,r,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:n,c:o}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:o}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),e});