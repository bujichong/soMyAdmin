/**
 * 存放页面公用变量
 */
var $p = {
	// treeUrl : '/cmn/tree.htm',
	// comboUrl : '/cmn/combo.htm',
	// selectUrl : '/cmn/select.htm',
	// gridUrl : '/cmn/grid.htm',
	cmp:'爱尔',
	submitTip : '您确定要提交吗?',
	exportMax : 6000
}

//公共表格列定义
var $cols={
	// userSite : [[
	// {title:'id',field:'id',hidden:true},
	// {title:'网站名称',field:'name',width:120},
	// {title:'网站地址',field:'url',width:240}
	// ]]
};
define("param", function(){});

/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*! layer-v3.0.1 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
 ;!function(e,t){"use strict";var i,n,a=e.layui&&layui.define,o={getPath:function(){var e=document.scripts,t=e[e.length-1],i=t.src;if(!t.getAttribute("merge"))return i.substring(0,i.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},r={v:"3.0.1",ie:function(){var t=navigator.userAgent.toLowerCase();return!!(e.ActiveXObject||"ActiveXObject"in e)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:e.layer&&e.layer.v?1e5:0,path:o.getPath,config:function(e,t){return e=e||{},r.cache=o.config=i.extend({},o.config,e),r.path=o.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),o.config.path&&r.ready(),e.extend?(a?layui.addcss("modules/layer/"+e.extend):r.link("skin/"+e.extend),this):this},link:function(t,n,a){if(r.path){var o=i("head")[0],l=document.createElement("link");"string"==typeof n&&(a=n);var s=(a||t).replace(/\.|\//g,""),f="layuicss-"+s,c=0;l.rel="stylesheet",l.href=r.path+t,l.id=f,i("#"+f)[0]||o.appendChild(l),"function"==typeof n&&!function d(){return++c>80?e.console&&console.error("layer.css: Invalid"):void(1989===parseInt(i("#"+f).css("width"))?n():setTimeout(d,100))}()}},ready:function(e){var t="skinlayercss",i="1110";return a?layui.addcss("modules/layer/default/layer.css?v="+r.v+i,e,t):r.link("skin/default/layer.css?v="+r.v+i,e,t),this},alert:function(e,t,n){var a="function"==typeof t;return a&&(n=t),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a){var l="function"==typeof t;return l&&(a=n,n=t),r.open(i.extend({content:e,btn:o.btn,yes:n,btn2:a},l?{}:t))},msg:function(e,n,a){var l="function"==typeof n,f=o.config.skin,c=(f?f+" "+f+"-msg":"")||"layui-layer-msg",d=s.anim.length-1;return l&&(a=n),r.open(i.extend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,resize:!1,end:a},l&&!o.config.skin?{skin:c+" layui-layer-hui",anim:d}:function(){return n=n||{},(n.icon===-1||n.icon===t&&!o.config.skin)&&(n.skin=c+" "+(n.skin||"layui-layer-hui")),n}()))},load:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},l=function(e){var t=this;t.index=++r.index,t.config=i.extend({},t.config,o.config,e),document.body?t.creat():setTimeout(function(){t.creat()},50)};l.pt=l.prototype;var s=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];s.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],l.pt.config={type:0,shade:.3,fixed:!0,move:s[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},l.pt.vessel=function(e,t){var n=this,a=n.index,r=n.config,l=r.zIndex+a,f="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),d=r.title?'<div class="layui-layer-title" style="'+(f?r.title[1]:"")+'">'+(f?r.title[0]:r.title)+"</div>":"";return r.zIndex=l,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+a+'" times="'+a+'" style="'+("z-index:"+(l-1)+"; background-color:"+(r.shade[1]||"#000")+"; opacity:"+(r.shade[0]||r.shade)+"; filter:alpha(opacity="+(100*r.shade[0]||100*r.shade)+");")+'"></div>':"",'<div class="'+s[0]+(" layui-layer-"+o.type[r.type])+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+s[0]+a+'" type="'+o.type[r.type]+'" times="'+a+'" showtime="'+r.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+l+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fixed?"":";position:absolute;")+'">'+(e&&2!=r.type?"":d)+'<div id="'+(r.id||"")+'" class="layui-layer-content'+(0==r.type&&r.icon!==-1?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&r.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"></i>':"")+(1==r.type&&e?"":r.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=c?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return r.closeBtn&&(e+='<a class="layui-layer-ico '+s[7]+" "+s[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(r.btn?function(){var e="";"string"==typeof r.btn&&(r.btn=[r.btn]);for(var t=0,i=r.btn.length;t<i;t++)e+='<a class="'+s[6]+t+'" href="#">'+r.btn[t]+"</a>";return'<div class="'+s[6]+" layui-layer-btn-"+(r.btnAlign||"")+'">'+e+"</div>"}():"")+(r.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],d,i('<div class="layui-layer-move"></div>')),n},l.pt.creat=function(){var e=this,t=e.config,a=e.index,l=t.content,f="object"==typeof l,c=i("body");if(!i("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==r.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:o.btn[0],r.closeAll("dialog");break;case 2:var l=t.content=f?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+s[4]+a+'" name="'+s[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,r.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}e.vessel(f,function(n,r,d){c.append(n[0]),f?function(){2==t.type||4==t.type?function(){i("body").append(n[1])}():function(){l.parents("."+s[0])[0]||(l.data("display",l.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]),i("#"+s[0]+a).find("."+s[5]).before(r))}()}():c.append(n[1]),i(".layui-layer-move")[0]||c.append(o.moveElem=d),e.layero=i("#"+s[0]+a),t.scrollbar||s.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),2==t.type&&6==r.ie&&e.layero.find("iframe").attr("src",l[0]),4==t.type?e.tips():e.offset(),t.fixed&&n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(a),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),s.anim[t.anim]&&e.layero.addClass(s.anim[t.anim]).data("anim",!0)}},l.pt.auto=function(e){function t(e){e=l.find(e),e.height(f[1]-c-d-2*(0|parseFloat(e.css("padding"))))}var a=this,o=a.config,l=i("#"+s[0]+e);""===o.area[0]&&o.maxWidth>0&&(r.ie&&r.ie<8&&o.btn&&l.width(l.innerWidth()),l.outerWidth()>o.maxWidth&&l.width(o.maxWidth));var f=[l.innerWidth(),l.innerHeight()],c=l.find(s[1]).outerHeight()||0,d=l.find("."+s[6]).outerHeight()||0;switch(o.type){case 2:t("iframe");break;default:""===o.area[1]?o.fixed&&f[1]>=n.height()&&(f[1]=n.height(),t("."+s[5])):t("."+s[5])}return a},l.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],o="object"==typeof t.offset;e.offsetTop=(n.height()-a[1])/2,e.offsetLeft=(n.width()-a[0])/2,o?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=n.width()-a[0]:"b"===t.offset?e.offsetTop=n.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=n.width()-a[0]):"rb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=n.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=n.height()-(i.find(s[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},l.pt.tips=function(){var e=this,t=e.config,a=e.layero,o=[a.outerWidth(),a.outerHeight()],r=i(t.follow);r[0]||(r=i("body"));var l={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=a.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),l.autoLeft=function(){l.left+o[0]-n.width()>0?(l.tipLeft=l.left+l.width-o[0],f.css({right:12,left:"auto"})):l.tipLeft=l.left},l.where=[function(){l.autoLeft(),l.tipTop=l.top-o[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){l.tipLeft=l.left+l.width+10,l.tipTop=l.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){l.autoLeft(),l.tipTop=l.top+l.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){l.tipLeft=l.left-o[0]-10,l.tipTop=l.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],l.where[c-1](),1===c?l.top-(n.scrollTop()+o[1]+16)<0&&l.where[2]():2===c?n.width()-(l.left+l.width+o[0]+16)>0||l.where[3]():3===c?l.top-n.scrollTop()+l.height+o[1]+16-n.height()>0&&l.where[0]():4===c&&o[0]+16-l.left>0&&l.where[1](),a.find("."+s[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),a.css({left:l.tipLeft-(t.fixed?n.scrollLeft():0),top:l.tipTop-(t.fixed?n.scrollTop():0)})},l.pt.move=function(){var e=this,t=e.config,a=i(document),l=e.layero,s=l.find(t.move),f=l.find(".layui-layer-resize"),c={};return t.move&&s.css("cursor","move"),s.on("mousedown",function(e){e.preventDefault(),t.move&&(c.moveStart=!0,c.offset=[e.clientX-parseFloat(l.css("left")),e.clientY-parseFloat(l.css("top"))],o.moveElem.css("cursor","move").show())}),f.on("mousedown",function(e){e.preventDefault(),c.resizeStart=!0,c.offset=[e.clientX,e.clientY],c.area=[l.outerWidth(),l.outerHeight()],o.moveElem.css("cursor","se-resize").show()}),a.on("mousemove",function(i){if(c.moveStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1],s="fixed"===l.css("position");if(i.preventDefault(),c.stX=s?0:n.scrollLeft(),c.stY=s?0:n.scrollTop(),!t.moveOut){var f=n.width()-l.outerWidth()+c.stX,d=n.height()-l.outerHeight()+c.stY;a<c.stX&&(a=c.stX),a>f&&(a=f),o<c.stY&&(o=c.stY),o>d&&(o=d)}l.css({left:a,top:o})}if(t.resize&&c.resizeStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1];i.preventDefault(),r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=!0}}).on("mouseup",function(e){c.moveStart&&(delete c.moveStart,o.moveElem.hide(),t.moveEnd&&t.moveEnd()),c.resizeStart&&(delete c.resizeStart,o.moveElem.hide())}),e},l.pt.callback=function(){function e(){var e=a.cancel&&a.cancel(t.index,n);e===!1||r.close(t.index)}var t=this,n=t.layero,a=t.config;t.openLayer(),a.success&&(2==a.type?n.find("iframe").on("load",function(){a.success(n,t.index)}):a.success(n,t.index)),6==r.ie&&t.IE6(n),n.find("."+s[6]).children("a").on("click",function(){var e=i(this).index();if(0===e)a.yes?a.yes(t.index,n):a.btn1?a.btn1(t.index,n):r.close(t.index);else{var o=a["btn"+(e+1)]&&a["btn"+(e+1)](t.index,n);o===!1||r.close(t.index)}}),n.find("."+s[7]).on("click",e),a.shadeClose&&i("#layui-layer-shade"+t.index).on("click",function(){r.close(t.index)}),n.find(".layui-layer-min").on("click",function(){var e=a.min&&a.min(n);e===!1||r.min(t.index,a)}),n.find(".layui-layer-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(r.restore(t.index),a.restore&&a.restore(n)):(r.full(t.index,a),setTimeout(function(){a.full&&a.full(n)},100))}),a.end&&(o.end[t.index]=a.end)},o.reselect=function(){i.each(i("select"),function(e,t){var n=i(this);n.parents("."+s[0])[0]||1==n.attr("layer")&&i("."+s[0]).length<1&&n.removeAttr("layer").show(),n=null})},l.pt.IE6=function(e){i("select").each(function(e,t){var n=i(this);n.parents("."+s[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide(),n=null})},l.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(e){var t=function(){r.zIndex++,e.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),r.zIndex}},o.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=function(e){s.html.attr("layer-full")==e&&(s.html[0].style.removeProperty?s.html[0].style.removeProperty("overflow"):s.html[0].style.removeAttribute("overflow"),s.html.removeAttr("layer-full"))},e.layer=r,r.getChildFrame=function(e,t){return t=t||i("."+s[4]).attr("times"),i("#"+s[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return i("#"+e).parents("."+s[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=i("#"+s[0]+e),a=n.find(s[1]).outerHeight()||0,o=n.find("."+s[6]).outerHeight()||0;n.css({height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){i("#"+s[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var a=i("#"+s[0]+e),r=a.find(".layui-layer-content"),l=a.attr("type"),f=a.find(s[1]).outerHeight()||0,c=a.find("."+s[6]).outerHeight()||0;a.attr("minLeft");l!==o.type[3]&&l!==o.type[4]&&(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-c<=64&&(t.height=64+f+c)),a.css(t),c=a.find("."+s[6]).outerHeight(),l===o.type[2]?a.find("iframe").css({height:parseFloat(t.height)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=function(e,t){var a=i("#"+s[0]+e),l=a.find(s[1]).outerHeight()||0,f=a.attr("minLeft")||181*o.minIndex+"px",c=a.css("position");o.record(a),o.minLeft[0]&&(f=o.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width:180,height:l,left:f,top:n.height()-l,position:"fixed",overflow:"hidden"},!0),a.find(".layui-layer-min").hide(),"page"===a.attr("type")&&a.find(s[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr("minLeft",f)},r.restore=function(e){var t=i("#"+s[0]+e),n=t.attr("area").split(",");t.attr("type");r.style(e,{width:parseFloat(n[0]),height:parseFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(s[4]).show(),o.rescollbar(e)},r.full=function(e){var t,a=i("#"+s[0]+e);o.record(a),s.html.attr("layer-full")||s.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===a.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.find(".layui-layer-min").hide()},100)},r.title=function(e,t){var n=i("#"+s[0]+(t||r.index)).find(s[1]);n.html(e)},r.close=function(e){var t=i("#"+s[0]+e),n=t.attr("type"),a="layer-anim-close";if(t[0]){var l="layui-layer-wrap",f=function(){if(n===o.type[1]&&"object"===t.attr("conType")){t.children(":not(."+s[5]+")").remove();for(var a=t.find("."+l),r=0;r<2;r++)a.unwrap();a.css("display",a.data("display")).removeClass(l)}else{if(n===o.type[2])try{var f=i("#"+s[4]+e)[0];f.contentWindow.document.write(""),f.contentWindow.close(),t.find("."+s[5])[0].removeChild(f)}catch(c){}t[0].innerHTML="",t.remove()}"function"==typeof o.end[e]&&o.end[e](),delete o.end[e]};t.data("anim")&&t.addClass(a),i("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==r.ie&&o.reselect(),o.rescollbar(e),t.attr("minLeft")&&(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),setTimeout(function(){f()},r.ie&&r.ie<10||!t.data("anim")?0:200)}},r.closeAll=function(e){i.each(i("."+s[0]),function(){var t=i(this),n=e?t.attr("type")===e:1;n&&r.close(t.attr("times")),n=null})};var f=r.cache||{},c=function(e){return f.skin?" "+f.skin+" "+f.skin+"-"+e:""};r.prompt=function(e,t){var a="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var o=e.area;a='style="width: '+o[0]+"; height: "+o[1]+';"',delete e.area}var l,s=2==e.formType?'<textarea class="layui-layer-input"'+a+">"+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}();return r.open(i.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:s,skin:"layui-layer-prompt"+c("prompt"),maxWidth:n.width(),success:function(e){l=e.find(".layui-layer-input"),l.focus()},resize:!1,yes:function(i){var n=l.val();""===n?l.focus():n.length>(e.maxlength||500)?r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",l,{tips:1}):t&&t(n,i,l)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{};return r.open(i.extend({type:1,skin:"layui-layer-tab"+c("tab"),resize:!1,title:function(){var e=t.length,i=1,n="";if(e>0)for(n='<span class="layui-layer-tabnow">'+t[0].title+"</span>";i<e;i++)n+="<span>"+t[i].title+"</span>";return n}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,n="";if(e>0)for(n='<li class="layui-layer-tabli xubox_tab_layer">'+(t[0].content||"no content")+"</li>";i<e;i++)n+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return n}()+"</ul>",success:function(t){var n=t.find(".layui-layer-title").children(),a=t.find(".layui-layer-tabmain").children();n.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var n=i(this),o=n.index();n.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),a.eq(o).show().siblings().hide(),"function"==typeof e.change&&e.change(o)})}},e))},r.photos=function(t,n,a){function o(e,t,i){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},void(n.onerror=function(e){n.onerror=null,i(e)}))}var l={};if(t=t||{},t.photos){var s=t.photos.constructor===Object,f=s?t.photos:{},d=f.data||[],u=f.start||0;if(l.imgIndex=(0|u)+1,t.img=t.img||"img",s){if(0===d.length)return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var y=i(t.photos),p=function(){d=[],y.find(t.img).each(function(e){var t=i(this);t.attr("layer-index",e),d.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(p(),0===d.length)return;if(n||y.on("click",t.img,function(){var e=i(this),n=e.attr("layer-index");r.photos(i.extend(t,{photos:{start:n,data:d,tab:t.tab},full:t.full}),!0),p()}),!n)return}l.imgprev=function(e){l.imgIndex--,l.imgIndex<1&&(l.imgIndex=d.length),l.tabimg(e)},l.imgnext=function(e,t){l.imgIndex++,l.imgIndex>d.length&&(l.imgIndex=1,t)||l.tabimg(e)},l.keyup=function(e){if(!l.end){var t=e.keyCode;e.preventDefault(),37===t?l.imgprev(!0):39===t?l.imgnext(!0):27===t&&r.close(l.index)}},l.tabimg=function(e){d.length<=1||(f.start=l.imgIndex-1,r.close(l.index),r.photos(t,!0,e))},l.event=function(){l.bigimg.hover(function(){l.imgsee.show()},function(){l.imgsee.hide()}),l.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),l.imgprev()}),l.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),l.imgnext()}),i(document).on("keyup",l.keyup)},l.loadi=r.load(1,{shade:!("shade"in t)&&.9,scrollbar:!1}),o(d[u].src,function(n){r.close(l.loadi),l.index=r.open(i.extend({type:1,area:function(){var a=[n.width,n.height],o=[i(e).width()-100,i(e).height()-100];if(!t.full&&(a[0]>o[0]||a[1]>o[1])){var r=[a[0]/o[0],a[1]/o[1]];r[0]>r[1]?(a[0]=a[0]/r[0],a[1]=a[1]/r[0]):r[0]<r[1]&&(a[0]=a[0]/r[1],a[1]=a[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,anim:5*Math.random()|0,skin:"layui-layer-photos"+c("photos"),content:'<div class="layui-layer-phimg"><img src="'+d[u].src+'" alt="'+(d[u].alt||"")+'" layer-pid="'+d[u].pid+'"><div class="layui-layer-imgsee">'+(d.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(a?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(d[u].alt||"")+"</a><em>"+l.imgIndex+"/"+d.length+"</em></span></div></div></div>",success:function(e,i){l.bigimg=e.find(".layui-layer-phimg"),l.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),l.event(e),t.tab&&t.tab(d[u],e)},end:function(){l.end=!0,i(document).off("keyup",l.keyup)}},t))},function(){r.close(l.loadi),r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){d.length>1&&l.imgnext(!0,!0)}})})}},o.run=function(t){i=t,n=i(e),s.html=i("html"),r.open=function(e){var t=new l(e);return t.index}},e.layui&&layui.define?(r.ready(),layui.define("jquery",function(t){r.path=layui.cache.dir,o.run(layui.jquery),e.layer=r,t("layer",r)})):"function"==typeof define?define('layer.min',["jquery"],function(){return o.run(e.jQuery),r}):function(){o.run(e.jQuery),r.ready()}()}(window);

/*
 * My97 DatePicker 4.8 Beta2
 * License: http://www.my97.net/dp/license.asp
 */
 var my97Root = airBaseRoot?(airBaseRoot+'js/lib/my97/'):'js/lib/my97/';
var $dp,WdatePicker;(function(){var $={
$langList:[{name:"en",charset:"UTF-8"},{name:"zh-cn",charset:"UTF-8"},{name:"zh-tw",charset:"UTF-8"}],
$skinList:[
	{name:"default",charset:"gb2312"},
	{name:"whyGreen",charset:"gb2312"},
	{name:"blue",charset:"gb2312"},
	{name:"green",charset:"gb2312"},
	{name:"ext",charset:"gb2312"},
	{name:"blueFresh",charset:"gb2312"}
],
$wdate:true,
$crossFrame:true,
$preLoad:false,
doubleCalendar:false,
enableKeyboard:true,
enableInputMask:true,
autoUpdateOnChanged:null,
weekMethod:"ISO8601",
position:{},
lang:"zh-cn",
skin:"default",
dateFmt:"yyyy-MM-dd",
realDateFmt:"yyyy-MM-dd",
realTimeFmt:"HH:mm:ss",
realFullFmt:"%Date %Time",
minDate:"1900-01-01 00:00:00",
maxDate:"2099-12-31 23:59:59",
startDate:"",
alwaysUseStartDate:false,
yearOffset:1911,
firstDayOfWeek:0,
isShowWeek:false,
highLineWeekDay:true,
isShowClear:true,
isShowToday:true,
isShowOK:true,
isShowOthers:true,
readOnly:false,
errDealMode:0,
autoPickDate:null,
qsEnabled:true,
autoShowQS:false,

specialDates:null,specialDays:null,disabledDates:null,disabledDays:null,opposite:false,onpicking:null,onpicked:null,onclearing:null,oncleared:null,ychanging:null,ychanged:null,Mchanging:null,Mchanged:null,dchanging:null,dchanged:null,Hchanging:null,Hchanged:null,mchanging:null,mchanged:null,schanging:null,schanged:null,eCont:null,vel:null,elProp:"",errMsg:"",quickSel:[],has:{},getRealLang:function(){var _=$.$langList;for(var A=0;A<_.length;A++)if(_[A].name==this.lang)return _[A];return _[0]}};WdatePicker=T;var X=window,S={innerHTML:""},M="document",H="documentElement",C="getElementsByTagName",U,A,R,G,a,W=navigator.appName;if(W=="Microsoft Internet Explorer")R=true;else if(W=="Opera")a=true;else G=true;A=J();if($.$wdate)K(my97Root+"skin/WdatePicker.css");U=X;if($.$crossFrame){try{while(U.parent&&U.parent[M]!=U[M]&&U.parent[M][C]("frameset").length==0)U=U.parent}catch(N){}}if(!U.$dp)U.$dp={ff:G,ie:R,opera:a,status:0,defMinDate:$.minDate,defMaxDate:$.maxDate};B();if($.$preLoad&&$dp.status==0)E(X,"onload",function(){T(null,true)});if(!X[M].docMD){E(X[M],"onmousedown",D);X[M].docMD=true}if(!U[M].docMD){E(U[M],"onmousedown",D);U[M].docMD=true}E(X,"onunload",function(){if($dp.dd)O($dp.dd,"none")});function B(){U.$dp=U.$dp||{};obj={$:function($){return(typeof $=="string")?X[M].getElementById($):$},$D:function($,_){return this.$DV(this.$($).value,_)},$DV:function(_,$){if(_!=""){this.dt=$dp.cal.splitDate(_,$dp.cal.dateFmt);if($)for(var B in $)if(this.dt[B]===undefined)this.errMsg="invalid property:"+B;else{this.dt[B]+=$[B];if(B=="M"){var C=$["M"]>0?1:0,A=new Date(this.dt["y"],this.dt["M"],0).getDate();this.dt["d"]=Math.min(A+C,this.dt["d"])}}if(this.dt.refresh())return this.dt}return""},show:function(){var A=U[M].getElementsByTagName("div"),$=100000;for(var B=0;B<A.length;B++){var _=parseInt(A[B].style.zIndex);if(_>$)$=_}this.dd.style.zIndex=$+2;O(this.dd,"block")},hide:function(){O(this.dd,"none")},attachEvent:E};for(var $ in obj)U.$dp[$]=obj[$];$dp=U.$dp}function E(A,$,_){if(R)A.attachEvent($,_);else if(_){var B=$.replace(/on/,"");_._ieEmuEventHandler=function($){return _($)};A.addEventListener(B,_._ieEmuEventHandler,false)}}function J(){var _,A,$=X[M][C]("script");for(var B=0;B<$.length;B++){_=$[B].getAttribute("src")||"";_=_.substr(0,_.toLowerCase().indexOf("wdatepicker.js"));A=_.lastIndexOf("/");if(A>0)_=_.substring(0,A+1);if(_)break}return _}function K(A,$,B){var D=X[M][C]("HEAD").item(0),_=X[M].createElement("link");if(D){_.href=A;_.rel="stylesheet";_.type="text/css";if($)_.title=$;if(B)_.charset=B;D.appendChild(_)}}function F($){$=$||U;var A=0,_=0;while($!=U){var D=$.parent[M][C]("iframe");for(var F=0;F<D.length;F++){try{if(D[F].contentWindow==$){var E=V(D[F]);A+=E.left;_+=E.top;break}}catch(B){}}$=$.parent}return{"leftM":A,"topM":_}}function V(G,F){if(G.getBoundingClientRect)return G.getBoundingClientRect();else{var A={ROOT_TAG:/^body|html$/i,OP_SCROLL:/^(?:inline|table-row)$/i},E=false,I=null,_=G.offsetTop,H=G.offsetLeft,D=G.offsetWidth,B=G.offsetHeight,C=G.offsetParent;if(C!=G)while(C){H+=C.offsetLeft;_+=C.offsetTop;if(Q(C,"position").toLowerCase()=="fixed")E=true;else if(C.tagName.toLowerCase()=="body")I=C.ownerDocument.defaultView;C=C.offsetParent}C=G.parentNode;while(C.tagName&&!A.ROOT_TAG.test(C.tagName)){if(C.scrollTop||C.scrollLeft)if(!A.OP_SCROLL.test(O(C)))if(!a||C.style.overflow!=="visible"){H-=C.scrollLeft;_-=C.scrollTop}C=C.parentNode}if(!E){var $=Z(I);H-=$.left;_-=$.top}D+=H;B+=_;return{"left":H,"top":_,"right":D,"bottom":B}}}function L($){$=$||U;var B=$[M],A=($.innerWidth)?$.innerWidth:(B[H]&&B[H].clientWidth)?B[H].clientWidth:B.body.offsetWidth,_=($.innerHeight)?$.innerHeight:(B[H]&&B[H].clientHeight)?B[H].clientHeight:B.body.offsetHeight;return{"width":A,"height":_}}function Z($){$=$||U;var B=$[M],A=B[H],_=B.body;B=(A&&A.scrollTop!=null&&(A.scrollTop>_.scrollTop||A.scrollLeft>_.scrollLeft))?A:_;return{"top":B.scrollTop,"left":B.scrollLeft}}function D($){var _=$?($.srcElement||$.target):null;try{if($dp.cal&&!$dp.eCont&&$dp.dd&&_!=$dp.el&&$dp.dd.style.display=="block")$dp.cal.close()}catch($){}}function Y(){$dp.status=2}var P,_;function T(N,F){$dp.win=X;B();N=N||{};for(var K in $)if(K.substring(0,1)!="$"&&N[K]===undefined)N[K]=$[K];if(F){if(!L()){_=_||setInterval(function(){if(U[M].readyState=="complete")clearInterval(_);T(null,true)},50);return}if($dp.status==0){$dp.status=1;N.el=S;I(N,true)}else return}else if(N.eCont){N.eCont=$dp.$(N.eCont);N.el=S;N.autoPickDate=true;N.qsEnabled=false;I(N)}else{if($.$preLoad&&$dp.status!=2)return;var J=H();if(J){N.srcEl=J.srcElement||J.target;J.cancelBubble=true}N.el=N.el=$dp.$(N.el||N.srcEl);if(!N.el||N.el["My97Mark"]===true||N.el.disabled||($dp.dd&&O($dp.dd)!="none"&&$dp.dd.style.left!="-970px")){try{N.el["My97Mark"]=false}catch(C){}return}I(N);if(J&&N.el.nodeType==1&&N.el["My97Mark"]===undefined){var A,D;if(J.type=="focus"){A="onclick";D="onfocus"}else{A="onfocus";D="onclick"}E(N.el,A,N.el[D])}}function L(){if(R&&U!=X&&U[M].readyState!="complete")return false;return true}function H(){if(G){func=H.caller;while(func!=null){var $=func.arguments[0];if($&&($+"").indexOf("Event")>=0)return $;func=func.caller}return null}return event}}function Q(_,$){return _.currentStyle?_.currentStyle[$]:document.defaultView.getComputedStyle(_,false)[$]}function O(_,$){if(_)if($!=null)_.style.display=$;else return Q(_,"display")}function I(G,_){var D=G.el?G.el.nodeName:"INPUT";if(_||G.eCont||new RegExp(/input|textarea|div|span|p|a/ig).test(D))G.elProp=D=="INPUT"?"value":"innerHTML";else return;if(G.lang=="auto")G.lang=R?navigator.browserLanguage.toLowerCase():navigator.language.toLowerCase();if(!G.eCont)for(var C in G)$dp[C]=G[C];if(!$dp.dd||G.eCont||($dp.dd&&(G.getRealLang().name!=$dp.dd.lang||G.skin!=$dp.dd.skin))){if(G.eCont)E(G.eCont,G);else{$dp.dd=U[M].createElement("DIV");$dp.dd.style.cssText="position:absolute";U[M].body.appendChild($dp.dd);E($dp.dd,G);if(_)$dp.dd.style.left=$dp.dd.style.top="-970px";else{$dp.show();B($dp)}}}else if($dp.cal){$dp.show();$dp.cal.init();if(!$dp.eCont)B($dp)}function E(F,E){F.innerHTML="<iframe hideFocus=true width=97 height=9 frameborder=0 border=0 scrolling=no></iframe>";var D=F.lastChild.contentWindow[M],_=$.$langList,C=$.$skinList,H=E.getRealLang();F.lang=H.name;F.skin=E.skin;var G=["<head><script>","var $d, $dp, $cfg=document.cfg, $pdp = parent.$dp, $dt, $tdt, $sdt, $lastInput, $IE=$pdp.ie, $FF = $pdp.ff,$OPERA=$pdp.opera, $ny, $cMark = false;","if($cfg.eCont){$dp = {};for(var p in $pdp)$dp[p]=$pdp[p];}else{$dp=$pdp;};for(var p in $cfg){$dp[p]=$cfg[p];}","document.oncontextmenu=function(){try{$c._fillQS(!$dp.has.d,1);showB($d.qsDivSel);}catch(e){};return false;};","</script><script src=",my97Root,"lang/",H.name,".js charset=",H.charset,"></script>"];for(var I=0;I<C.length;I++)if(C[I].name==E.skin)G.push("<link rel=\"stylesheet\" type=\"text/css\" href=\""+my97Root+"skin/"+C[I].name+"/datepicker.css\" charset=\""+C[I].charset+"\"/>");G.push("<script type=\"text/javascript\" src=\""+my97Root+"calendar.js?\"+Math.random()+\" charset=\"gb2312\"></script>");G.push("</head><body leftmargin=\"0\" topmargin=\"0\" tabindex=0></body></html>");G.push("<script>var t;t=t||setInterval(function(){if(document.ready){new My97DP();$cfg.onload();$c.autoSize();$cfg.setPos($dp);clearInterval(t);}},20);if($FF||$OPERA)document.close();</script>");E.setPos=B;E.onload=Y;D.write("<html>");D.cfg=E;D.write(G.join(""))}function B(I){var G=I.position.left,B=I.position.top,C=I.el;if(C==S)return;if(C!=I.srcEl&&(O(C)=="none"||C.type=="hidden"))C=I.srcEl;var H=V(C),$=F(X),D=L(U),A=Z(U),E=$dp.dd.offsetHeight,_=$dp.dd.offsetWidth;if(isNaN(B))B=0;if(($.topM+H.bottom+E>D.height)&&($.topM+H.top-E>0))B+=A.top+$.topM+H.top-E-2;else B+=A.top+$.topM+Math.min(H.bottom,D.height-E)+2;if(isNaN(G))G=0;G+=A.left+Math.min($.leftM+H.left,D.width-_-5)-(R?2:0);I.dd.style.top=B+"px";I.dd.style.left=G+"px"}}})();
define("my97", function(){});

/**--jQuery.json-2.3.js--**/
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
    var type=typeof o;if(type==='undefined'){return undefined;}
    if(type==='number'||type==='boolean'){return''+o;}
    if(type==='string'){return $.quoteString(o);}
    if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
        if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
            if(day<10){day='0'+day;}
            if(hours<10){hours='0'+hours;}
            if(minutes<10){minutes='0'+minutes;}
            if(seconds<10){seconds='0'+seconds;}
            if(milli<100){milli='0'+milli;}
            if(milli<10){milli='0'+milli;}
            return'"'+year+'-'+month+'-'+day+'T'+
                hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
        if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
            return'['+ret.join(',')+']';}
        var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
            type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
            val=$.toJSON(o[k]);pairs.push(name+':'+val);}
        return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
        c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
    return'"'+string+'"';};})(jQuery);

//jQuery.cookie
jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};

//jQuery.color
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

/* soChange 1.6.2 - simple object change with jQuery */
/* 使用方法参考：http://sojs.bujichong.com/soChange/index.html */
/*
$(obj).soChange({
    thumbObj:null, // 导航对象，默认为空
    btnPrev:null, // 按钮上一个，默认为空
    btnNext:null, // 按钮下一个。默认为空
    changeType:'fade', // 切换方式，可选：fade,slide，默认为fade，1.6版新增方法，详见例3-定义对象切换方式为slide
    thumbNowClass:'now', // 导航对象当前的class,默认为now
    thumbOverEvent:true, // 鼠标经过thumbObj时是否切换对象，默认为true，为false时，只有鼠标点击thumbObj才切换对象
    slideTime:1000, // 平滑过渡时间，默认为1000ms，为0或负值时，忽略changeType方式，切换效果为直接显示隐藏
    autoChange:true, // 是否自动切换，默认为true
    clickFalse:true, // 导航对象点击是否链接无效，默认是return false链接无效，当thumbOverEvent为false时，此项必须为true，否则鼠标点击事件冲突
    overStop:true, // 鼠标经过切换对象时，是否停止切换，并于鼠标离开后重启自动切换，前提是已开启自动切换
    changeTime:5000, // 对象自动切换时间，默认为5000ms，即5秒
    delayTime:300 // 鼠标经过时对象切换迟滞时间，推荐值为300ms
    callback:function(prev,now){} // 切换返回函数，内部提供2个参数:切换前 index值 prev,当前 index值 now 1.6版新增方法
});
 */
(function(a){a.fn.extend({soChange:function(b){b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300,callback:function(){}},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{if(b.changeType=="fade"){h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}else{h.eq(e).slideUp(b.slideTime);h.eq(g).slideDown(b.slideTime)}}if(b.callback){b.callback(e,g)}e=g}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse){return false}});if(b.thumbOverEvent){i.hover(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)},function(){clearTimeout(f)})}}if(b.btnNext){a(b.btnNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.btnPrev){a(b.btnPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange){c=setInterval(j,b.changeTime);if(b.overStop){h.hover(function(){clearInterval(c)},function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

$.extend({
    /**
     * 地址转换 tree:dept -> /base/treeUrl?_code=dept
     */
    url : function(url) {
        var rst = '';
        if (url.indexOf('/') == -1) {
            var ar = url.split(":");
            rst+=$p[ar[0] + "Url"];
            if(ar[1]) rst+= "?_code=" + ar[1];
        } else {
            rst = url;
        }
        return rst;
    },
    /**
     * 默认值赋值
     * @param o 目标对象
     * @param c 默认值
     * @returns
     */
    applyIf : function(o, c) {
        if (o && c) {
            for ( var p in c) {
                if (typeof o[p] == "undefined") {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },
    /**
     * 格式化日期函数
     * @param format 格式化规则，如 "YYYY-MM-dd HH:mm:ss"
     * @param date 日期对象，可是是Date类型，也可以是时间戳字符串
     * @returns 对应的日期格式字符串
     */
    fmtDate: function (format, date) {
        date = date || new Date();
        if (typeof(date) == 'number') {
            date = new Date(date);
        }
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //hour
            "H+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        var week = {
            "0": "\u65e5",
            "1": "\u4e00",
            "2": "\u4e8c",
            "3": "\u4e09",
            "4": "\u56db",
            "5": "\u4e94",
            "6": "\u516d"
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        if (/(E+)/.test(format)) {
            format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    /**
     * 格式化日期函数
     * @param date 格式化规则，如 "YYYY-MM-dd HH:mm:ss"
     * @param type  null("long")/"short"，为short只返回年月日，否则返回完整时间
     * @returns 对应的日期格式字符串
     */
    getFullDate : function (date,type) {// Date,'long/short'
        var that = this;
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hh = date.getHours();// 时
        var mm = date.getMinutes();// 分
         var ss = date.getSeconds();//秒

        month = ('0'+month).slice(-2);
        day = ('0'+day).slice(-2);
        hh = ('0'+hh).slice(-2);
        mm = ('0'+mm).slice(-2);
        ss = ('0'+ss).slice(-2);
        if (type=='short') {
            //return year+'-'+month+'-'+day;
            return month+'-'+day+' '+hh+':'+mm+':'+ss;
        }else {
            return year+'-'+month+'-'+day+' '+hh+':'+mm;
        }
    },
    getLocalTime :function (nS) {// 转时间戳为本地时间，nS为时间戳字符串，错误格式无法返回
        return new Date(nS*1).toLocaleString().replace(/年|月/g, "-").replace(/日/g," ");
    },
    toHour: function (v) {//转换成小时，返回整数小时
        v = v * 1 || 0;
        return Math.ceil((v * 100) / (1000 * 60 * 60)) / 100;
    },
    toDay: function (v) {//转换成天，返回整数小时
        v = v * 1 || 0;
        return Math.ceil((v * 100) / (1000 * 60 * 60 * 24)) / 100;
    },
    getTimeLong : function (s) {//将秒转化成倒计时的时分秒
        var h = Math.floor(s/3600);
        h = h>9?h:('0'+h);
        var m = Math.floor(s%3600/60);
        m = m>9?m:('0'+m);
        var s = s%3600%60;
        s = s>9?s:('0'+s);
        return h==0?(m+':'+s):(h+':'+m+':'+s);
    },
    arrHasVal : function (arr,val) {//数组是否有某个值
        var l = arr.length;
        for (i = 0; i < l; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    },
    fullscreen : function (tofull) {//全屏辅助函数
      if(tofull){
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        }
        else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        }
        else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        }
      }else{
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    winW : $(window).width(),
    winH :$(window).height()
});


/**
 * 扩充方法
 */
$.fn.extend({
    //hoverClass $() 如： $(".ul_nav li").hoverClass("over");
    hoverClass:function(b){var a=this;a.each(function(c){a.eq(c).mouseenter(function(){$(this).addClass(b)});a.eq(c).mouseleave(function(){$(this).removeClass(b)})});return a},
    focusChangeStyle : function(b){var a=this;var b=(b==null)?"txt_focus":b;a.focus(function(){$(this).addClass(b)});a.blur(function(){$(this).removeClass(b)});return a},
    tabChange:function (o) {
        o= $.extend({
            thumbObj:null,//导航对象
            thumbNowClass:'now',//导航对象当前的class,默认为now
            eventClass:'eventStat',
            defaultEvent:function(){},
            callback:function () {},
            oneback:function(){}
        }, o || {});
        var _self = $(this);
        var size = _self.size();
        var thumbObj = $(o.thumbObj);
        _self.removeClass(o.eventClass).eq(0).addClass(o.eventClass);
        thumbObj.eq(0).addClass(o.thumbNowClass);
        o.defaultEvent();

        thumbObj.click(function () {
            var indx = thumbObj.index($(this));
            thumbObj.removeClass(o.thumbNowClass);
            $(this).addClass(o.thumbNowClass);
            _self.removeClass(o.eventClass).eq(indx).addClass(o.eventClass);
            return o.callback(indx);
        });
        thumbObj.each(function (i) {
            if (i>0) {
                $(this).one('click',function () {
                    return o.oneback(i);
                });
            }
        });
    },
    switchShow:function(cls,scope){//对象切换简易版，切换对象为cls dom对象组，只有对象的data-value 值vl，结合 cls+"_"+vl 显示
        $(this).click(function(){
            var $scope=scope?$(scope):$("body");
            $scope.find(cls).hide();
            var vl=$(this).val()||$(this).attr("data-value");
            $scope.find(cls+"_"+vl).show();
        });
        return $(this);
    },
    // clear : function(data) {
    //     $(":input:not(:submit)", this).val("");
    //     if (data)
    //         $(this).vals(data);
    // },
    sovals : function(dataToString) {//返回表单的序列，dataToString为true，将多选框的值以字符串的方式返回
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [ o[this.name] ];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        if (dataToString) {
            $.each(o,function (k,v) {
                if (v.push) {
                    o[k] = v.join(',');
                }
            });
        };
        return o;
    },
    soSelect : function(o){//简易下拉框，使用系统的select来初始化
      var defOpt = {//所有参数
        muti: false,//是否多选
        nullVal : true,//是否添加'请选择...'
        appendMode : false,//html还是append到元素中，默认直接html替换
        url : null,//远程请求地址
        data : null,//请求附加数据
        value : null,//被选中值，为字符串，多选用逗号隔开
        success : null,//初始化完成后 function(val,_self,opt){}
        change : null//change执行事件，字符串为全局函数，function为function(val,_self,opt){}函数
      };
      var opt = $T.data(this) || {};
      opt = $.extend(defOpt,opt,o||{});

      var mySelf = $(this);
      mySelf.each(function () {
        var _self = $(this);
        if (opt.value!==null) {
          var val =opt.value.toString();
          val = val.split(',');
        }
        var data = opt.data ||{};
        var rstData = null;
        if(opt.url){
          $.ajax({
            url :opt.url,
            data : data,
            type : 'post',
            dataType : 'json',
            async : false,
            success : function(rstData){
              // window.console&&console.log(rstData);
              if(rstData&&rstData.length){
                var optHtml = (opt.nullVal)?'<option value="">请选择...</option>':'';
                $.each(rstData,function(i,v){
                  if(v.selected||v.checked){val.push(v.value)};//json数据selected或checked为true也可以标示为选中
                  optHtml += '<option value="'+v.value+'">'+v.text+'</option>';
                });
                _self[opt.appendMode?'append':'html'](optHtml);//添加dom
              }else{
                window.console&&console.log('so-drop远程初始化失败或数据为空..');
              }
            }
          });
        }
        if(opt.muti){
          _self.attr('multiple','multiple');
        }
        if (val&&val.length) {//赋值
          if(!opt.muti){
            val=val.pop();
            _self.find('option[value='+val+']').attr('selected',true);
          }else{
            $.each(val,function(i,v){
              _self.find('option[value='+v+']').attr('selected',true);
            })
          }
        }
        if(opt.success){
          if(typeof opt.success === 'string'){//字符串为函数名
            window[opt.success](val,_self,opt);
          }else{//函数
            opt.success(val,_self,opt);
          }
        }
        if(opt.change){
          _self.change(function(){
            val = _self.val();
            if(typeof opt.change === 'string'){//字符串为函数名
              window[opt.change](val,_self,opt);
            }else{//函数
              opt.change(val,_self,opt);
            }
          })
        }
      });
      return mySelf;
    }
});

var $event = {
    stopBubble: function (e) {
      if (e && e.stopPropagation) {//非IE浏览器
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
    },
    stopDefault: function (e) {
      // 阻止默认浏览器动作(W3C)
      if (e && e.preventDefault) {
        e.preventDefault();
      } else {
          // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
      }
      return false;
    }
};


var $ajax = {//统一的异步post请求
    alertErr : function (rst,msg) {
    	var errDatails = rst.detail ||'';
    	var msg = rst.msg || msg ||'信息提交失败';
    	layer.open({
    	  type: 1,
    	  skin:'soerrPop',
    	  icon: 2, title:false,
    	  btnAlign: 'c',
    	  area:['300px','auto'],
    	  content: '<i class="layui-layer-ico layui-layer-ico2"></i><h2 class="h2-err">对不起！'+ msg +'</h2><p>请检查网络或发送邮件到管理员邮箱 <br /><a class="a-mail" href="mailto:servicer@aierchina.com">servicer@aierchina.com</a></p><span class="s-errDetails">查看错误信息</span> <div class="errPopInfoBox"><div class="errPopInfo">'+errDatails+'</div></div>',
    	  btn: ['确定'],
    	  yes : function(index, layero){
    		layer.close(index);
    	  },
    	  success : function(layero, index){
            	var errHtml = layero.find('.errPopInfoBox').html();
            	$('.s-errDetails').click(function(){
            	  layer.open({
            		title :'',
            		type: 1,
            		skin:'soerrPopInfo',
            		area : ['80%','80%'],
            		content: errHtml
            	  });
            	});
    	  }
    	});
    },
    post: function (url, data, tip) {
        var ajaxLoading = null, maskOpt = null, dtd = null;
        var canAjax = true;//用来过滤异步可能造成的多次提交
        if (tip) {//提示
          var msg = (tip === true ? $p.submitTip : tip);
          dtd = $.Deferred();
          var event = function (dtd) {
            var loadingIndex = null;
            layer.confirm(msg, {icon: 0, title:false,btnAlign: 'c',success: function ($layer) {
                $layer.find('.layui-layer-btn0').focus();//提交按钮获取焦点
            }}, function(index){
              if(canAjax){
                canAjax = false;
                $.ajax({
                  url: url, type: 'post', data: data, dataType: 'json',
                  beforeSend: function (jqXHR, settings) {
                    layer.close(index);
                    loadingIndex = layer.load(0, {shade: false});
                  },
                  complete: function (jqXHR, textStatus) {
                      canAjax = true;
                      //根据textStatus修改提示
                      //2秒后去掉提示
                  },
                  success: function (rst) {
                    layer.close(loadingIndex);
                    if (rst) {
                      var msg = (rst.tip == 1 ? rst.msg : (rst.state?"信息提交成功":"信息提交失败"));
                      if (rst.state) {
                        layer.msg(msg,{icon:1});
                      } else {
                        $ajax.alertErr(rst);
                      }
                    }
                    dtd.resolve(rst);
                  },
                  error: function (req, textStatus, errorThrown) {
                    layer.close(loadingIndex);
                    if(req.responseJSON&&req.responseJSON.msg){
                        var rst = req.responseJSON;
                        $ajax.alertErr(rst);
                    }else{
                        layer.alert('<p class="red">对不起，数据连接失败！</p>请检查网络或发送邮件到管理员邮箱 <br /><a class="a-mail" href="mailto:servicer@aierchina.com">servicer@aierchina.com</a>',{icon: 2, title:false,btnAlign: 'c'});
                    }
                    dtd.reject();
                  }
              });

              }
            });
            return dtd.promise();
          }
          return $.when(event(dtd));
        } else {
            var loadingIndex = null;
            if(canAjax){
              canAjax = false;
            dtd = $.ajax({
              url: url, type: 'post', data: data, dataType: 'json',
              beforeSend: function (jqXHR, settings) {
                maskOpt = $.extend({shade: false}, maskOpt || {});
                loadingIndex = layer.load(0, maskOpt);
              },
              complete: function (jqXHR, textStatus) {
                  canAjax = true;
                  //根据textStatus修改提示
                  //2秒后去掉提示
              },
              success: function (rst) {
                layer.close(loadingIndex);
                if(rst&&!rst.state){
                  $ajax.alertErr(rst,msg);
                }
              },
              error: function (req, textStatus, errorThrown) {
                layer.close(loadingIndex);
                if(req.responseJSON&&req.responseJSON.msg){
                  var rst = req.responseJSON;
                  $ajax.alertErr(rst);
                }else{
                  layer.alert('<p class="red">对不起，数据连接失败！</p>请检查网络或发送邮件到管理员邮箱 <br /><a class="a-mail" href="mailto:servicer@aierchina.com">servicer@aierchina.com</a>',{icon: 2, title:false,btnAlign: 'c'});
                }
              }
            });
            }
        }
        return dtd;
    }
};


var $T = {
    mul : function (a, b) {//修正版乘法
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },
    add : function (a,b) {//修正版加法
        var me = this;
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (me.mul(a, e) + me.mul(b, e)) / e;
    },
    sub : function (a,b) {//修正版减法
        var me = this;
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (me.mul(a, e) - me.mul(b, e)) / e;
    },
    div : function (a,b) {//修正版除法
        var me = this;
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), me.mul(c / d, Math.pow(10, f - e));
    },
    getCookie : function (key,co) {//增强版取cookie
        var co = co||'aso',$co = $.cookie(co);
        if ($co!==null) {
            var coArr = $co.split('||');
            var coLen = coArr.length;
            for (i = 0; i < coLen; i++) {
                var vk = coArr[i].split(':=');
                if (vk[0] === key) {
                    return vk[1];
                }
            }
        }else {
            return null;
        }
    },
    setCookie : function (key,value,co,root) {//增强版设置cookie
        root = root==undefined?true:root;//默认cookie都定义在root目录下，不到子目录下
        var co = co||'aso',$co = $.cookie(co);
        var coVal;
        if ($co!==null) {
            if ($co.indexOf(key)>-1) {
                var coArr = $co.split('||');
                var coLen = coArr.length;
                for (i = 0; i < coLen; i++) {
                    var vk = coArr[i].split(':=');
                    if (vk[0] === key) {
                        coArr[i] = key+':='+value;
                    }
                }
                coVal = coArr.join('||');
            }else {
                coVal = $co+'||'+key+':='+value;
            }
        }else {
            coVal = key+':='+value;
        }
        if (root) {
            $.cookie(co,coVal,{ path: '/'});
        }else {
            $.cookie(co,coVal);
        }
        window.console && console.log('cooke中 '+co+'更新为 " '+$.cookie(co)+' " ');
    },
    data: function (el, attrName) {//获取对象数据，支持非标准json格式写法，数据放在 data-opt中
        attrName = attrName || 'data-opt';
        var data = $(el).attr(attrName), m = /({.*})/.exec(data);
        if (m)data = m[1];
        data = data ? eval("(" + data + ")") : {};
        return data;
    },
    format: function (tpl, params) {//简单的模板格式方法
        if (arguments.length > 2 && params.constructor != Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor == String || params.constructor == Number) {
            params = [params];
        }
        function _replace(m, word) {
            var rst;
            if (Boolean(word.match(/^[0-9]+$/)) && params.constructor == Array) {
                rst = params[word * 1];
            } else {
                rst = params[word];
            }
            return rst === undefined || rst === null ? "" : rst;
        }

        return tpl.replace(/#?\{([A-Za-z_0-9]+)\}/g, _replace);
    },
    parseParam : function(param, key){
        var paramStr="";
        if(param instanceof String||param instanceof Number||param instanceof Boolean){
            paramStr+="&"+key+"="+encodeURIComponent(param);
        }else{
            $.each(param,function(i){
                var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);
                paramStr+='&'+$T.parseParam(this, k);
            });
        }
        return paramStr.substr(1);
    },
    notNull: function (obj, msg) {
        if (!$(obj).val()) {
            layer.msg( msg || '不能为空!',{icon:0});
            return false;
        }
        return true;
    },
    placeHolder : {//对低版本浏览器placeholder属性的兼容
        init : function(){//初始化
            if(!this._check()){
                this.fix();
            }
        },
        _check : function(){//检测
            return 'placeholder' in document.createElement('input');
        },
        fix : function(){//修复
            $(':input[placeholder]').each(function(index, element) {
                var self = $(this), txt = self.attr('placeholder');
                self.wrap($('<span></span>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
                var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
                var holder = $('<span class="s-placeholder"></span>').text(txt).css({position:'absolute', left:(pos.left+8), top:(pos.top+1), height:h, lineHeight:h+'px', paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
                if (self.val()) {holder.hide();};
                self.focusin(function(e) {
                    holder.hide();
                }).focusout(function(e) {
                    if(!self.val()){
                        holder.show();
                    }
                });
                holder.click(function(e) {
                    holder.hide();
                    self.focus();
                });
            });
        }
    }

}
;
define("jquery.extend", ["param","layer.min","my97"], function(){});

/**
 * EasyUI for jQuery 1.5.3
 *
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
$.easyui={indexOfArray:function(a,o,id){
for(var i=0,_1=a.length;i<_1;i++){
if(id==undefined){
if(a[i]==o){
return i;
}
}else{
if(a[i][o]==id){
return i;
}
}
}
return -1;
},removeArrayItem:function(a,o,id){
if(typeof o=="string"){
for(var i=0,_2=a.length;i<_2;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _3=this.indexOfArray(a,o);
if(_3!=-1){
a.splice(_3,1);
}
}
},addArrayItem:function(a,o,r){
var _4=this.indexOfArray(a,o,r?r[o]:undefined);
if(_4==-1){
a.push(r?r:o);
}else{
a[_4]=r?r:o;
}
},getArrayItem:function(a,o,id){
var _5=this.indexOfArray(a,o,id);
return _5==-1?null:a[_5];
},forEach:function(_6,_7,_8){
var _9=[];
for(var i=0;i<_6.length;i++){
_9.push(_6[i]);
}
while(_9.length){
var _a=_9.shift();
if(_8(_a)==false){
return;
}
if(_7&&_a.children){
for(var i=_a.children.length-1;i>=0;i--){
_9.unshift(_a.children[i]);
}
}
}
}};
$.parser={auto:true,onComplete:function(_b){
},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","switchbutton","progressbar","tree","textbox","passwordbox","filebox","combo","combobox","combotree","combogrid","combotreegrid","tagbox","numberbox","validatebox","searchbox","spinner","numberspinner","timespinner","datetimespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","datalist","tabs","accordion","window","dialog","form"],parse:function(_c){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _d=$.parser.plugins[i];
var r=$(".easyui-"+_d,_c);
if(_d=='validatebox'){
r = $(".easyui-"+_d+",.txt-validate",_c);
}
if(r.length){
if(r[_d]){
r.each(function(){
$(this)[_d]($.data(this,"options")||{});
});
}else{
aa.push({name:_d,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _e=[];
for(var i=0;i<aa.length;i++){
_e.push(aa[i].name);
}
easyloader.load(_e,function(){
for(var i=0;i<aa.length;i++){
var _f=aa[i].name;
var jq=aa[i].jq;
jq.each(function(){
$(this)[_f]($.data(this,"options")||{});
});
}
$.parser.onComplete.call($.parser,_c);
});
}else{
$.parser.onComplete.call($.parser,_c);
}
},parseValue:function(_10,_11,_12,_13){
_13=_13||0;
var v=$.trim(String(_11||""));
var _14=v.substr(v.length-1,1);
if(_14=="%"){
v=parseFloat(v.substr(0,v.length-1));
if(_10.toLowerCase().indexOf("width")>=0){
v=Math.floor((_12.width()-_13)*v/100);
}else{
v=Math.floor((_12.height()-_13)*v/100);
}
}else{
v=parseInt(v)||undefined;
}
return v;
},parseOptions:function(_15,_16){
var t=$(_15);
var _17={};
var s=$.trim(t.attr("data-options"));
if(s){
if(s.substring(0,1)!="{"){
s="{"+s+"}";
}
_17=(new Function("return "+s))();
}
$.map(["width","height","left","top","minWidth","maxWidth","minHeight","maxHeight"],function(p){
var pv=$.trim(_15.style[p]||"");
if(pv){
if(pv.indexOf("%")==-1){
pv=parseInt(pv);
if(isNaN(pv)){
pv=undefined;
}
}
_17[p]=pv;
}
});
if(_16){
var _18={};
for(var i=0;i<_16.length;i++){
var pp=_16[i];
if(typeof pp=="string"){
_18[pp]=t.attr(pp);
}else{
for(var _19 in pp){
var _1a=pp[_19];
if(_1a=="boolean"){
_18[_19]=t.attr(_19)?(t.attr(_19)=="true"):undefined;
}else{
if(_1a=="number"){
_18[_19]=t.attr(_19)=="0"?0:parseFloat(t.attr(_19))||undefined;
}
}
}
}
}
$.extend(_17,_18);
}
return _17;
}};
$(function(){
var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");
$._boxModel=d.outerWidth()!=100;
d.remove();
d=$("<div style=\"position:fixed\"></div>").appendTo("body");
$._positionFixed=(d.css("position")=="fixed");
d.remove();
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_1b){
if(_1b==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this._size("width",_1b);
};
$.fn._outerHeight=function(_1c){
if(_1c==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this._size("height",_1c);
};
$.fn._scrollLeft=function(_1d){
if(_1d==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_1d);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._size=function(_1e,_1f){
if(typeof _1e=="string"){
if(_1e=="clear"){
return this.each(function(){
$(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""});
});
}else{
if(_1e=="fit"){
return this.each(function(){
_20(this,this.tagName=="BODY"?$("body"):$(this).parent(),true);
});
}else{
if(_1e=="unfit"){
return this.each(function(){
_20(this,$(this).parent(),false);
});
}else{
if(_1f==undefined){
return _21(this[0],_1e);
}else{
return this.each(function(){
_21(this,_1e,_1f);
});
}
}
}
}
}else{
return this.each(function(){
_1f=_1f||$(this).parent();
$.extend(_1e,_20(this,_1f,_1e.fit)||{});
var r1=_22(this,"width",_1f,_1e);
var r2=_22(this,"height",_1f,_1e);
if(r1||r2){
$(this).addClass("easyui-fluid");
}else{
$(this).removeClass("easyui-fluid");
}
});
}
function _20(_23,_24,fit){
if(!_24.length){
return false;
}
var t=$(_23)[0];
var p=_24[0];
var _25=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_25+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
return {width:($(p).width()||1),height:($(p).height()||1)};
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_25-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
return false;
}
};
function _22(_26,_27,_28,_29){
var t=$(_26);
var p=_27;
var p1=p.substr(0,1).toUpperCase()+p.substr(1);
var min=$.parser.parseValue("min"+p1,_29["min"+p1],_28);
var max=$.parser.parseValue("max"+p1,_29["max"+p1],_28);
var val=$.parser.parseValue(p,_29[p],_28);
var _2a=(String(_29[p]||"").indexOf("%")>=0?true:false);
if(!isNaN(val)){
var v=Math.min(Math.max(val,min||0),max||99999);
if(!_2a){
_29[p]=v;
}
t._size("min"+p1,"");
t._size("max"+p1,"");
t._size(p,v);
}else{
t._size(p,"");
t._size("min"+p1,min);
t._size("max"+p1,max);
}
return _2a||_29.fit;
};
function _21(_2b,_2c,_2d){
var t=$(_2b);
if(_2d==undefined){
_2d=parseInt(_2b.style[_2c]);
if(isNaN(_2d)){
return undefined;
}
if($._boxModel){
_2d+=_2e();
}
return _2d;
}else{
if(_2d===""){
t.css(_2c,"");
}else{
if($._boxModel){
_2d-=_2e();
if(_2d<0){
_2d=0;
}
}
t.css(_2c,_2d+"px");
}
}
function _2e(){
if(_2c.toLowerCase().indexOf("width")>=0){
return t.outerWidth()-t.width();
}else{
return t.outerHeight()-t.height();
}
};
};
};
})(jQuery);
(function($){
var _2f=null;
var _30=null;
var _31=false;
function _32(e){
if(e.touches.length!=1){
return;
}
if(!_31){
_31=true;
dblClickTimer=setTimeout(function(){
_31=false;
},500);
}else{
clearTimeout(dblClickTimer);
_31=false;
_33(e,"dblclick");
}
_2f=setTimeout(function(){
_33(e,"contextmenu",3);
},1000);
_33(e,"mousedown");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _34(e){
if(e.touches.length!=1){
return;
}
if(_2f){
clearTimeout(_2f);
}
_33(e,"mousemove");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _35(e){
if(_2f){
clearTimeout(_2f);
}
_33(e,"mouseup");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _33(e,_36,_37){
var _38=new $.Event(_36);
_38.pageX=e.changedTouches[0].pageX;
_38.pageY=e.changedTouches[0].pageY;
_38.which=_37||1;
$(e.target).trigger(_38);
};
if(document.addEventListener){
document.addEventListener("touchstart",_32,true);
document.addEventListener("touchmove",_34,true);
document.addEventListener("touchend",_35,true);
}
})(jQuery);
(function($){
function _39(e){
var _3a=$.data(e.data.target,"draggable");
var _3b=_3a.options;
var _3c=_3a.proxy;
var _3d=e.data;
var _3e=_3d.startLeft+e.pageX-_3d.startX;
var top=_3d.startTop+e.pageY-_3d.startY;
if(_3c){
if(_3c.parent()[0]==document.body){
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e=e.pageX+_3b.deltaX;
}else{
_3e=e.pageX-e.data.offsetWidth;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top=e.pageY+_3b.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e+=e.data.offsetWidth+_3b.deltaX;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top+=e.data.offsetHeight+_3b.deltaY;
}
}
}
if(e.data.parent!=document.body){
_3e+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_3b.axis=="h"){
_3d.left=_3e;
}else{
if(_3b.axis=="v"){
_3d.top=top;
}else{
_3d.left=_3e;
_3d.top=top;
}
}
};
function _3f(e){
var _40=$.data(e.data.target,"draggable");
var _41=_40.options;
var _42=_40.proxy;
if(!_42){
_42=$(e.data.target);
}
_42.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_41.cursor);
};
function _43(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _44=$.data(e.data.target,"draggable");
var _45=_44.options;
var _46=$(".droppable:visible").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _47=$.data(this,"droppable").options.accept;
if(_47){
return $(_47).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_44.droppables=_46;
var _48=_44.proxy;
if(!_48){
if(_45.proxy){
if(_45.proxy=="clone"){
_48=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_48=_45.proxy.call(e.data.target,e.data.target);
}
_44.proxy=_48;
}else{
_48=$(e.data.target);
}
}
_48.css("position","absolute");
_39(e);
_3f(e);
_45.onStartDrag.call(e.data.target,e);
return false;
};
function _49(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _4a=$.data(e.data.target,"draggable");
_39(e);
if(_4a.options.onDrag.call(e.data.target,e)!=false){
_3f(e);
}
var _4b=e.data.target;
_4a.droppables.each(function(){
var _4c=$(this);
if(_4c.droppable("options").disabled){
return;
}
var p2=_4c.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_4c.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_4c.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_4b]);
this.entered=true;
}
$(this).trigger("_dragover",[_4b]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_4b]);
this.entered=false;
}
}
});
return false;
};
function _4d(e){
if(!$.fn.draggable.isDragging){
_4e();
return false;
}
_49(e);
var _4f=$.data(e.data.target,"draggable");
var _50=_4f.proxy;
var _51=_4f.options;
_51.onEndDrag.call(e.data.target,e);
if(_51.revert){
if(_52()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_50){
var _53,top;
if(_50.parent()[0]==document.body){
_53=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_53=e.data.startLeft;
top=e.data.startTop;
}
_50.animate({left:_53,top:top},function(){
_54();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_52();
}
_51.onStopDrag.call(e.data.target,e);
_4e();
function _54(){
if(_50){
_50.remove();
}
_4f.proxy=null;
};
function _52(){
var _55=false;
_4f.droppables.each(function(){
var _56=$(this);
if(_56.droppable("options").disabled){
return;
}
var p2=_56.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_56.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_56.outerHeight()){
if(_51.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
$(this).triggerHandler("_drop",[e.data.target]);
_54();
_55=true;
this.entered=false;
return false;
}
});
if(!_55&&!_51.revert){
_54();
}
return _55;
};
return false;
};
function _4e(){
if($.fn.draggable.timer){
clearTimeout($.fn.draggable.timer);
$.fn.draggable.timer=undefined;
}
$(document).unbind(".draggable");
$.fn.draggable.isDragging=false;
setTimeout(function(){
$("body").css("cursor","");
},100);
};
$.fn.draggable=function(_57,_58){
if(typeof _57=="string"){
return $.fn.draggable.methods[_57](this,_58);
}
return this.each(function(){
var _59;
var _5a=$.data(this,"draggable");
if(_5a){
_5a.handle.unbind(".draggable");
_59=$.extend(_5a.options,_57);
}else{
_59=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_57||{});
}
var _5b=_59.handle?(typeof _59.handle=="string"?$(_59.handle,this):_59.handle):$(this);
$.data(this,"draggable",{options:_59,handle:_5b});
if(_59.disabled){
$(this).css("cursor","");
return;
}
_5b.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if($.fn.draggable.isDragging){
return;
}
var _5c=$.data(e.data.target,"draggable").options;
if(_5d(e)){
$(this).css("cursor",_5c.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_5d(e)==false){
return;
}
$(this).css("cursor","");
var _5e=$(e.data.target).position();
var _5f=$(e.data.target).offset();
var _60={startPosition:$(e.data.target).css("position"),startLeft:_5e.left,startTop:_5e.top,left:_5e.left,top:_5e.top,startX:e.pageX,startY:e.pageY,width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),offsetWidth:(e.pageX-_5f.left),offsetHeight:(e.pageY-_5f.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_60);
var _61=$.data(e.data.target,"draggable").options;
if(_61.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_43);
$(document).bind("mousemove.draggable",e.data,_49);
$(document).bind("mouseup.draggable",e.data,_4d);
$.fn.draggable.timer=setTimeout(function(){
$.fn.draggable.isDragging=true;
_43(e);
},_61.delay);
return false;
});
function _5d(e){
var _62=$.data(e.data.target,"draggable");
var _63=_62.handle;
var _64=$(_63).offset();
var _65=$(_63).outerWidth();
var _66=$(_63).outerHeight();
var t=e.pageY-_64.top;
var r=_64.left+_65-e.pageX;
var b=_64.top+_66-e.pageY;
var l=e.pageX-_64.left;
return Math.min(t,r,b,l)>_62.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_67){
var t=$(_67);
return $.extend({},$.parser.parseOptions(_67,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number","delay":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,delay:100,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onEndDrag:function(e){
},onStopDrag:function(e){
}};
$.fn.draggable.isDragging=false;
})(jQuery);
(function($){
function _68(_69){
$(_69).addClass("droppable");
$(_69).bind("_dragenter",function(e,_6a){
$.data(_69,"droppable").options.onDragEnter.apply(_69,[e,_6a]);
});
$(_69).bind("_dragleave",function(e,_6b){
$.data(_69,"droppable").options.onDragLeave.apply(_69,[e,_6b]);
});
$(_69).bind("_dragover",function(e,_6c){
$.data(_69,"droppable").options.onDragOver.apply(_69,[e,_6c]);
});
$(_69).bind("_drop",function(e,_6d){
$.data(_69,"droppable").options.onDrop.apply(_69,[e,_6d]);
});
};
$.fn.droppable=function(_6e,_6f){
if(typeof _6e=="string"){
return $.fn.droppable.methods[_6e](this,_6f);
}
_6e=_6e||{};
return this.each(function(){
var _70=$.data(this,"droppable");
if(_70){
$.extend(_70.options,_6e);
}else{
_68(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_6e)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_71){
var t=$(_71);
return $.extend({},$.parser.parseOptions(_71,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_72){
},onDragOver:function(e,_73){
},onDragLeave:function(e,_74){
},onDrop:function(e,_75){
}};
})(jQuery);
(function($){
function _76(e){
var _77=e.data;
var _78=$.data(_77.target,"resizable").options;
if(_77.dir.indexOf("e")!=-1){
var _79=_77.startWidth+e.pageX-_77.startX;
_79=Math.min(Math.max(_79,_78.minWidth),_78.maxWidth);
_77.width=_79;
}
if(_77.dir.indexOf("s")!=-1){
var _7a=_77.startHeight+e.pageY-_77.startY;
_7a=Math.min(Math.max(_7a,_78.minHeight),_78.maxHeight);
_77.height=_7a;
}
if(_77.dir.indexOf("w")!=-1){
var _79=_77.startWidth-e.pageX+_77.startX;
_79=Math.min(Math.max(_79,_78.minWidth),_78.maxWidth);
_77.width=_79;
_77.left=_77.startLeft+_77.startWidth-_77.width;
}
if(_77.dir.indexOf("n")!=-1){
var _7a=_77.startHeight-e.pageY+_77.startY;
_7a=Math.min(Math.max(_7a,_78.minHeight),_78.maxHeight);
_77.height=_7a;
_77.top=_77.startTop+_77.startHeight-_77.height;
}
};
function _7b(e){
var _7c=e.data;
var t=$(_7c.target);
t.css({left:_7c.left,top:_7c.top});
if(t.outerWidth()!=_7c.width){
t._outerWidth(_7c.width);
}
if(t.outerHeight()!=_7c.height){
t._outerHeight(_7c.height);
}
};
function _7d(e){
$.fn.resizable.isResizing=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _7e(e){
_76(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_7b(e);
}
return false;
};
function _7f(e){
$.fn.resizable.isResizing=false;
_76(e,true);
_7b(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
function _80(e){
var _81=$(e.data.target).resizable("options");
var tt=$(e.data.target);
var dir="";
var _82=tt.offset();
var _83=tt.outerWidth();
var _84=tt.outerHeight();
var _85=_81.edge;
if(e.pageY>_82.top&&e.pageY<_82.top+_85){
dir+="n";
}else{
if(e.pageY<_82.top+_84&&e.pageY>_82.top+_84-_85){
dir+="s";
}
}
if(e.pageX>_82.left&&e.pageX<_82.left+_85){
dir+="w";
}else{
if(e.pageX<_82.left+_83&&e.pageX>_82.left+_83-_85){
dir+="e";
}
}
var _86=_81.handles.split(",");
_86=$.map(_86,function(h){
return $.trim(h).toLowerCase();
});
if($.inArray("all",_86)>=0||$.inArray(dir,_86)>=0){
return dir;
}
for(var i=0;i<dir.length;i++){
var _87=$.inArray(dir.substr(i,1),_86);
if(_87>=0){
return _86[_87];
}
}
return "";
};
$.fn.resizable=function(_88,_89){
if(typeof _88=="string"){
return $.fn.resizable.methods[_88](this,_89);
}
return this.each(function(){
var _8a=null;
var _8b=$.data(this,"resizable");
if(_8b){
$(this).unbind(".resizable");
_8a=$.extend(_8b.options,_88||{});
}else{
_8a=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_88||{});
$.data(this,"resizable",{options:_8a});
}
if(_8a.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if($.fn.resizable.isResizing){
return;
}
var dir=_80(e);
$(e.data.target).css("cursor",dir?dir+"-resize":"");
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_80(e);
if(dir==""){
return;
}
function _8c(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _8d={target:e.data.target,dir:dir,startLeft:_8c("left"),startTop:_8c("top"),left:_8c("left"),top:_8c("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_8d,_7d);
$(document).bind("mousemove.resizable",_8d,_7e);
$(document).bind("mouseup.resizable",_8d,_7f);
$("body").css("cursor",dir+"-resize");
});
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_8e){
var t=$(_8e);
return $.extend({},$.parser.parseOptions(_8e,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
$.fn.resizable.isResizing=false;
})(jQuery);
(function($){
function _8f(_90,_91){
var _92=$.data(_90,"linkbutton").options;
if(_91){
$.extend(_92,_91);
}
if(_92.width||_92.height||_92.fit){
var btn=$(_90);
var _93=btn.parent();
var _94=btn.is(":visible");
if(!_94){
var _95=$("<div style=\"display:none\"></div>").insertBefore(_90);
var _96={position:btn.css("position"),display:btn.css("display"),left:btn.css("left")};
btn.appendTo("body");
btn.css({position:"absolute",display:"inline-block",left:-20000});
}
btn._size(_92,_93);
var _97=btn.find(".l-btn-left");
_97.css("margin-top",0);
_97.css("margin-top",parseInt((btn.height()-_97.height())/2)+"px");
if(!_94){
btn.insertAfter(_95);
btn.css(_96);
_95.remove();
}
}
};
function _98(_99){
var _9a=$.data(_99,"linkbutton").options;
var t=$(_99).empty();
t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline");
t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_9a.size);
if(_9a.plain){
t.addClass("l-btn-plain");
}
if(_9a.outline){
t.addClass("l-btn-outline");
}
if(_9a.selected){
t.addClass(_9a.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
}
t.attr("group",_9a.group||"");
t.attr("id",_9a.id||"");
var _9b=$("<span class=\"l-btn-left\"></span>").appendTo(t);
if(_9a.text){
$("<span class=\"l-btn-text\"></span>").html(_9a.text).appendTo(_9b);
}else{
$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_9b);
}
if(_9a.iconCls){
$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_9a.iconCls).appendTo(_9b);
_9b.addClass("l-btn-icon-"+_9a.iconAlign);
}
t.unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_9a.disabled){
$(this).addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).removeClass("l-btn-focus");
}).bind("click.linkbutton",function(){
if(!_9a.disabled){
if(_9a.toggle){
if(_9a.selected){
$(this).linkbutton("unselect");
}else{
$(this).linkbutton("select");
}
}
_9a.onClick.call(this);
}
});
_9c(_99,_9a.selected);
_9d(_99,_9a.disabled);
};
function _9c(_9e,_9f){
var _a0=$.data(_9e,"linkbutton").options;
if(_9f){
if(_a0.group){
$("a.l-btn[group=\""+_a0.group+"\"]").each(function(){
var o=$(this).linkbutton("options");
if(o.toggle){
$(this).removeClass("l-btn-selected l-btn-plain-selected");
o.selected=false;
}
});
}
$(_9e).addClass(_a0.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
_a0.selected=true;
}else{
if(!_a0.group){
$(_9e).removeClass("l-btn-selected l-btn-plain-selected");
_a0.selected=false;
}
}
};
function _9d(_a1,_a2){
var _a3=$.data(_a1,"linkbutton");
var _a4=_a3.options;
$(_a1).removeClass("l-btn-disabled l-btn-plain-disabled");
if(_a2){
_a4.disabled=true;
var _a5=$(_a1).attr("href");
if(_a5){
_a3.href=_a5;
$(_a1).attr("href","javascript:;");
}
if(_a1.onclick){
_a3.onclick=_a1.onclick;
_a1.onclick=null;
}
_a4.plain?$(_a1).addClass("l-btn-disabled l-btn-plain-disabled"):$(_a1).addClass("l-btn-disabled");
}else{
_a4.disabled=false;
if(_a3.href){
$(_a1).attr("href",_a3.href);
}
if(_a3.onclick){
_a1.onclick=_a3.onclick;
}
}
};
$.fn.linkbutton=function(_a6,_a7){
if(typeof _a6=="string"){
return $.fn.linkbutton.methods[_a6](this,_a7);
}
_a6=_a6||{};
return this.each(function(){
var _a8=$.data(this,"linkbutton");
if(_a8){
$.extend(_a8.options,_a6);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_a6)});
$(this).removeAttr("disabled");
$(this).bind("_resize",function(e,_a9){
if($(this).hasClass("easyui-fluid")||_a9){
_8f(this);
}
return false;
});
}
_98(this);
_8f(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},resize:function(jq,_aa){
return jq.each(function(){
_8f(this,_aa);
});
},enable:function(jq){
return jq.each(function(){
_9d(this,false);
});
},disable:function(jq){
return jq.each(function(){
_9d(this,true);
});
},select:function(jq){
return jq.each(function(){
_9c(this,true);
});
},unselect:function(jq){
return jq.each(function(){
_9c(this,false);
});
}};
$.fn.linkbutton.parseOptions=function(_ab){
var t=$(_ab);
return $.extend({},$.parser.parseOptions(_ab,["id","iconCls","iconAlign","group","size","text",{plain:"boolean",toggle:"boolean",selected:"boolean",outline:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:($.trim(t.html())||undefined),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,outline:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function(){
}};
})(jQuery);
(function($){
function _ac(_ad){
var _ae=$.data(_ad,"pagination");
var _af=_ae.options;
var bb=_ae.bb={};
var _b0=$(_ad).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_b0.find("tr");
var aa=$.extend([],_af.layout);
if(!_af.showPageList){
_b1(aa,"list");
}
if(!_af.showPageInfo){
_b1(aa,"info");
}
if(!_af.showRefresh){
_b1(aa,"refresh");
}
if(aa[0]=="sep"){
aa.shift();
}
if(aa[aa.length-1]=="sep"){
aa.pop();
}
for(var _b2=0;_b2<aa.length;_b2++){
var _b3=aa[_b2];
if(_b3=="list"){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_af.pageSize=parseInt($(this).val());
_af.onChangePageSize.call(_ad,_af.pageSize);
_b9(_ad,_af.pageNumber);
});
for(var i=0;i<_af.pageList.length;i++){
$("<option></option>").text(_af.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
}else{
if(_b3=="sep"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
if(_b3=="first"){
bb.first=_b4("first");
}else{
if(_b3=="prev"){
bb.prev=_b4("prev");
}else{
if(_b3=="next"){
bb.next=_b4("next");
}else{
if(_b3=="last"){
bb.last=_b4("last");
}else{
if(_b3=="manual"){
$("<span style=\"padding-left:6px;\"></span>").html(_af.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _b5=parseInt($(this).val())||1;
_b9(_ad,_b5);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
}else{
if(_b3=="refresh"){
bb.refresh=_b4("refresh");
}else{
if(_b3=="links"){
$("<td class=\"pagination-links\"></td>").appendTo(tr);
}else{
if(_b3=="info"){
if(_b2==aa.length-1){
$("<div class=\"pagination-info\"></div>").appendTo(_b0);
}else{
$("<td><div class=\"pagination-info\"></div></td>").appendTo(tr);
}
}
}
}
}
}
}
}
}
}
}
}
if(_af.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
if($.isArray(_af.buttons)){
for(var i=0;i<_af.buttons.length;i++){
var btn=_af.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var a=$("<a href=\"javascript:;\"></a>").appendTo(td);
a[0].onclick=eval(btn.handler||function(){
});
a.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
var td=$("<td></td>").appendTo(tr);
$(_af.buttons).appendTo(td).show();
}
}
$("<div style=\"clear:both;\"></div>").appendTo(_b0);
function _b4(_b6){
var btn=_af.nav[_b6];
var a=$("<a href=\"javascript:;\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_ad);
});
return a;
};
function _b1(aa,_b7){
var _b8=$.inArray(_b7,aa);
if(_b8>=0){
aa.splice(_b8,1);
}
return aa;
};
};
function _b9(_ba,_bb){
var _bc=$.data(_ba,"pagination").options;
_bd(_ba,{pageNumber:_bb});
_bc.onSelectPage.call(_ba,_bc.pageNumber,_bc.pageSize);
};
function _bd(_be,_bf){
var _c0=$.data(_be,"pagination");
var _c1=_c0.options;
var bb=_c0.bb;
$.extend(_c1,_bf||{});
var ps=$(_be).find("select.pagination-page-list");
if(ps.length){
ps.val(_c1.pageSize+"");
_c1.pageSize=parseInt(ps.val());
}
var _c2=Math.ceil(_c1.total/_c1.pageSize)||1;
if(_c1.pageNumber<1){
_c1.pageNumber=1;
}
if(_c1.pageNumber>_c2){
_c1.pageNumber=_c2;
}
if(_c1.total==0){
_c1.pageNumber=0;
_c2=0;
}
if(bb.num){
bb.num.val(_c1.pageNumber);
}
if(bb.after){
bb.after.html(_c1.afterPageText.replace(/{pages}/,_c2));
}
var td=$(_be).find("td.pagination-links");
if(td.length){
td.empty();
var _c3=_c1.pageNumber-Math.floor(_c1.links/2);
if(_c3<1){
_c3=1;
}
var _c4=_c3+_c1.links-1;
if(_c4>_c2){
_c4=_c2;
}
_c3=_c4-_c1.links+1;
if(_c3<1){
_c3=1;
}
for(var i=_c3;i<=_c4;i++){
var a=$("<a class=\"pagination-link\" href=\"javascript:;\"></a>").appendTo(td);
a.linkbutton({plain:true,text:i});
if(i==_c1.pageNumber){
a.linkbutton("select");
}else{
a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){
_b9(_be,e.data.pageNumber);
});
}
}
}
var _c5=_c1.displayMsg;
_c5=_c5.replace(/{from}/,_c1.total==0?0:_c1.pageSize*(_c1.pageNumber-1)+1);
_c5=_c5.replace(/{to}/,Math.min(_c1.pageSize*(_c1.pageNumber),_c1.total));
_c5=_c5.replace(/{total}/,_c1.total);
$(_be).find("div.pagination-info").html(_c5);
if(bb.first){
bb.first.linkbutton({disabled:((!_c1.total)||_c1.pageNumber==1)});
}
if(bb.prev){
bb.prev.linkbutton({disabled:((!_c1.total)||_c1.pageNumber==1)});
}
if(bb.next){
bb.next.linkbutton({disabled:(_c1.pageNumber==_c2)});
}
if(bb.last){
bb.last.linkbutton({disabled:(_c1.pageNumber==_c2)});
}
_c6(_be,_c1.loading);
};
function _c6(_c7,_c8){
var _c9=$.data(_c7,"pagination");
var _ca=_c9.options;
_ca.loading=_c8;
if(_ca.showRefresh&&_c9.bb.refresh){
_c9.bb.refresh.linkbutton({iconCls:(_ca.loading?"pagination-loading":"pagination-load")});
}
};
$.fn.pagination=function(_cb,_cc){
if(typeof _cb=="string"){
return $.fn.pagination.methods[_cb](this,_cc);
}
_cb=_cb||{};
return this.each(function(){
var _cd;
var _ce=$.data(this,"pagination");
if(_ce){
_cd=$.extend(_ce.options,_cb);
}else{
_cd=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_cb);
$.data(this,"pagination",{options:_cd});
}
_ac(this);
_bd(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_c6(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_c6(this,false);
});
},refresh:function(jq,_cf){
return jq.each(function(){
_bd(this,_cf);
});
},select:function(jq,_d0){
return jq.each(function(){
_b9(this,_d0);
});
}};
$.fn.pagination.parseOptions=function(_d1){
var t=$(_d1);
return $.extend({},$.parser.parseOptions(_d1,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showPageInfo:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showPageInfo:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh","info"],onSelectPage:function(_d2,_d3){
},onBeforeRefresh:function(_d4,_d5){
},onRefresh:function(_d6,_d7){
},onChangePageSize:function(_d8){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _d9=$(this).pagination("options");
if(_d9.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _da=$(this).pagination("options");
if(_da.pageNumber>1){
$(this).pagination("select",_da.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _db=$(this).pagination("options");
var _dc=Math.ceil(_db.total/_db.pageSize);
if(_db.pageNumber<_dc){
$(this).pagination("select",_db.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _dd=$(this).pagination("options");
var _de=Math.ceil(_dd.total/_dd.pageSize);
if(_dd.pageNumber<_de){
$(this).pagination("select",_de);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _df=$(this).pagination("options");
if(_df.onBeforeRefresh.call(this,_df.pageNumber,_df.pageSize)!=false){
$(this).pagination("select",_df.pageNumber);
_df.onRefresh.call(this,_df.pageNumber,_df.pageSize);
}
}}}};
})(jQuery);
(function($){
function _e0(_e1){
var _e2=$(_e1);
_e2.addClass("tree");
return _e2;
};
function _e3(_e4){
var _e5=$.data(_e4,"tree").options;
$(_e4).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _e6=tt.closest("div.tree-node");
if(!_e6.length){
return;
}
_e6.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _e7=tt.closest("div.tree-node");
if(!_e7.length){
return;
}
_e7.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _e8=tt.closest("div.tree-node");
if(!_e8.length){
return;
}
if(tt.hasClass("tree-hit")){
_146(_e4,_e8[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_10d(_e4,_e8[0]);
return false;
}else{
_189(_e4,_e8[0]);
_e5.onClick.call(_e4,_eb(_e4,_e8[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _e9=$(e.target).closest("div.tree-node");
if(!_e9.length){
return;
}
_189(_e4,_e9[0]);
_e5.onDblClick.call(_e4,_eb(_e4,_e9[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _ea=$(e.target).closest("div.tree-node");
if(!_ea.length){
return;
}
_e5.onContextMenu.call(_e4,e,_eb(_e4,_ea[0]));
e.stopPropagation();
});
};
function _ec(_ed){
var _ee=$.data(_ed,"tree").options;
_ee.dnd=false;
var _ef=$(_ed).find("div.tree-node");
_ef.draggable("disable");
_ef.css("cursor","pointer");
};
function _f0(_f1){
var _f2=$.data(_f1,"tree");
var _f3=_f2.options;
var _f4=_f2.tree;
_f2.disabledNodes=[];
_f3.dnd=true;
_f4.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_f5){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_f5).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_f3.onBeforeDrag.call(_f1,_eb(_f1,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
var _f6=$(this).find("span.tree-indent");
if(_f6.length){
e.data.offsetWidth-=_f6.length*_f6.width();
}
},onStartDrag:function(e){
$(this).next("ul").find("div.tree-node").each(function(){
$(this).droppable("disable");
_f2.disabledNodes.push(this);
});
$(this).draggable("proxy").css({left:-10000,top:-10000});
_f3.onStartDrag.call(_f1,_eb(_f1,this));
var _f7=_eb(_f1,this);
if(_f7.id==undefined){
_f7.id="easyui_tree_node_id_temp";
_12d(_f1,_f7);
}
_f2.draggingNodeId=_f7.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
for(var i=0;i<_f2.disabledNodes.length;i++){
$(_f2.disabledNodes[i]).droppable("enable");
}
_f2.disabledNodes=[];
var _f8=_183(_f1,_f2.draggingNodeId);
if(_f8&&_f8.id=="easyui_tree_node_id_temp"){
_f8.id="";
_12d(_f1,_f8);
}
_f3.onStopDrag.call(_f1,_f8);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_f9){
if(_f3.onDragEnter.call(_f1,this,_fa(_f9))==false){
_fb(_f9,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f2.disabledNodes.push(this);
}
},onDragOver:function(e,_fc){
if($(this).droppable("options").disabled){
return;
}
var _fd=_fc.pageY;
var top=$(this).offset().top;
var _fe=top+$(this).outerHeight();
_fb(_fc,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_fd>top+(_fe-top)/2){
if(_fe-_fd<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_fd-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_f3.onDragOver.call(_f1,this,_fa(_fc))==false){
_fb(_fc,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f2.disabledNodes.push(this);
}
},onDragLeave:function(e,_ff){
_fb(_ff,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_f3.onDragLeave.call(_f1,this,_fa(_ff));
},onDrop:function(e,_100){
var dest=this;
var _101,_102;
if($(this).hasClass("tree-node-append")){
_101=_103;
_102="append";
}else{
_101=_104;
_102=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_f3.onBeforeDrop.call(_f1,dest,_fa(_100),_102)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_101(_100,dest,_102);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _fa(_105,pop){
return $(_105).closest("ul.tree").tree(pop?"pop":"getData",_105);
};
function _fb(_106,_107){
var icon=$(_106).draggable("proxy").find("span.tree-dnd-icon");
icon.removeClass("tree-dnd-yes tree-dnd-no").addClass(_107?"tree-dnd-yes":"tree-dnd-no");
};
function _103(_108,dest){
if(_eb(_f1,dest).state=="closed"){
_13e(_f1,dest,function(){
_109();
});
}else{
_109();
}
function _109(){
var node=_fa(_108,true);
$(_f1).tree("append",{parent:dest,data:[node]});
_f3.onDrop.call(_f1,dest,node,"append");
};
};
function _104(_10a,dest,_10b){
var _10c={};
if(_10b=="top"){
_10c.before=dest;
}else{
_10c.after=dest;
}
var node=_fa(_10a,true);
_10c.data=node;
$(_f1).tree("insert",_10c);
_f3.onDrop.call(_f1,dest,node,_10b);
};
};
function _10d(_10e,_10f,_110,_111){
var _112=$.data(_10e,"tree");
var opts=_112.options;
if(!opts.checkbox){
return;
}
var _113=_eb(_10e,_10f);
if(!_113.checkState){
return;
}
var ck=$(_10f).find(".tree-checkbox");
if(_110==undefined){
if(ck.hasClass("tree-checkbox1")){
_110=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_110=true;
}else{
if(_113._checked==undefined){
_113._checked=$(_10f).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_110=!_113._checked;
}
}
}
_113._checked=_110;
if(_110){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_111){
if(opts.onBeforeCheck.call(_10e,_113,_110)==false){
return;
}
}
if(opts.cascadeCheck){
_114(_10e,_113,_110);
_115(_10e,_113);
}else{
_116(_10e,_113,_110?"1":"0");
}
if(!_111){
opts.onCheck.call(_10e,_113,_110);
}
};
function _114(_117,_118,_119){
var opts=$.data(_117,"tree").options;
var flag=_119?1:0;
_116(_117,_118,flag);
if(opts.deepCheck){
$.easyui.forEach(_118.children||[],true,function(n){
_116(_117,n,flag);
});
}else{
var _11a=[];
if(_118.children&&_118.children.length){
_11a.push(_118);
}
$.easyui.forEach(_118.children||[],true,function(n){
if(!n.hidden){
_116(_117,n,flag);
if(n.children&&n.children.length){
_11a.push(n);
}
}
});
for(var i=_11a.length-1;i>=0;i--){
var node=_11a[i];
_116(_117,node,_11b(node));
}
}
};
function _116(_11c,_11d,flag){
var opts=$.data(_11c,"tree").options;
if(!_11d.checkState||flag==undefined){
return;
}
if(_11d.hidden&&!opts.deepCheck){
return;
}
var ck=$("#"+_11d.domId).find(".tree-checkbox");
_11d.checkState=["unchecked","checked","indeterminate"][flag];
_11d.checked=(_11d.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
};
function _115(_11e,_11f){
var pd=_120(_11e,$("#"+_11f.domId)[0]);
if(pd){
_116(_11e,pd,_11b(pd));
_115(_11e,pd);
}
};
function _11b(row){
var c0=0;
var c1=0;
var len=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _121(_122,_123){
var opts=$.data(_122,"tree").options;
if(!opts.checkbox){
return;
}
var node=$(_123);
var ck=node.find(".tree-checkbox");
var _124=_eb(_122,_123);
if(opts.view.hasCheckbox(_122,_124)){
if(!ck.length){
_124.checkState=_124.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(node.find(".tree-title"));
}
if(_124.checkState=="checked"){
_10d(_122,_123,true,true);
}else{
if(_124.checkState=="unchecked"){
_10d(_122,_123,false,true);
}else{
var flag=_11b(_124);
if(flag===0){
_10d(_122,_123,false,true);
}else{
if(flag===1){
_10d(_122,_123,true,true);
}
}
}
}
}else{
ck.remove();
_124.checkState=undefined;
_124.checked=undefined;
_115(_122,_124);
}
};
function _125(_126,ul,data,_127,_128){
var _129=$.data(_126,"tree");
var opts=_129.options;
var _12a=$(ul).prevAll("div.tree-node:first");
data=opts.loadFilter.call(_126,data,_12a[0]);
var _12b=_12c(_126,"domId",_12a.attr("id"));
if(!_127){
_12b?_12b.children=data:_129.data=data;
$(ul).empty();
}else{
if(_12b){
_12b.children?_12b.children=_12b.children.concat(data):_12b.children=data;
}else{
_129.data=_129.data.concat(data);
}
}
opts.view.render.call(opts.view,_126,ul,data);
if(opts.dnd){
_f0(_126);
}
if(_12b){
_12d(_126,_12b);
}
for(var i=0;i<_129.tmpIds.length;i++){
_10d(_126,$("#"+_129.tmpIds[i])[0],true,true);
}
_129.tmpIds=[];
setTimeout(function(){
_12e(_126,_126);
},0);
if(!_128){
opts.onLoadSuccess.call(_126,_12b,data);
}
};
function _12e(_12f,ul,_130){
var opts=$.data(_12f,"tree").options;
if(opts.lines){
$(_12f).addClass("tree-lines");
}else{
$(_12f).removeClass("tree-lines");
return;
}
if(!_130){
_130=true;
$(_12f).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_12f).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _131=$(_12f).tree("getRoots");
if(_131.length>1){
$(_131[0].target).addClass("tree-root-first");
}else{
if(_131.length==1){
$(_131[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_132(node);
}
_12e(_12f,ul,_130);
}else{
_133(node);
}
});
var _134=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_134.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _133(node,_135){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _132(node){
var _136=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_136-1)+")").addClass("tree-line");
});
};
};
function _137(_138,ul,_139,_13a){
var opts=$.data(_138,"tree").options;
_139=$.extend({},opts.queryParams,_139||{});
var _13b=null;
if(_138!=ul){
var node=$(ul).prev();
_13b=_eb(_138,node[0]);
}
if(opts.onBeforeLoad.call(_138,_13b,_139)==false){
return;
}
var _13c=$(ul).prev().children("span.tree-folder");
_13c.addClass("tree-loading");
var _13d=opts.loader.call(_138,_139,function(data){
_13c.removeClass("tree-loading");
_125(_138,ul,data);
if(_13a){
_13a();
}
},function(){
_13c.removeClass("tree-loading");
opts.onLoadError.apply(_138,arguments);
if(_13a){
_13a();
}
});
if(_13d==false){
_13c.removeClass("tree-loading");
}
};
function _13e(_13f,_140,_141){
var opts=$.data(_13f,"tree").options;
var hit=$(_140).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_eb(_13f,_140);
if(opts.onBeforeExpand.call(_13f,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_140).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
});
}else{
ul.css("display","block");
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
}
}else{
var _142=$("<ul style=\"display:none\"></ul>").insertAfter(_140);
_137(_13f,_142[0],{id:node.id},function(){
if(_142.is(":empty")){
_142.remove();
}
if(opts.animate){
_142.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
});
}else{
_142.css("display","block");
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
}
});
}
};
function _143(_144,_145){
var opts=$.data(_144,"tree").options;
var hit=$(_145).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_eb(_144,_145);
if(opts.onBeforeCollapse.call(_144,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_145).next();
if(opts.animate){
ul.slideUp("normal",function(){
node.state="closed";
opts.onCollapse.call(_144,node);
});
}else{
ul.css("display","none");
node.state="closed";
opts.onCollapse.call(_144,node);
}
};
function _146(_147,_148){
var hit=$(_148).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_143(_147,_148);
}else{
_13e(_147,_148);
}
};
function _149(_14a,_14b){
var _14c=_14d(_14a,_14b);
if(_14b){
_14c.unshift(_eb(_14a,_14b));
}
for(var i=0;i<_14c.length;i++){
_13e(_14a,_14c[i].target);
}
};
function _14e(_14f,_150){
var _151=[];
var p=_120(_14f,_150);
while(p){
_151.unshift(p);
p=_120(_14f,p.target);
}
for(var i=0;i<_151.length;i++){
_13e(_14f,_151[i].target);
}
};
function _152(_153,_154){
var c=$(_153).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_154);
var ntop=n.offset().top;
if(c[0].tagName!="BODY"){
var ctop=c.offset().top;
if(ntop<ctop){
c.scrollTop(c.scrollTop()+ntop-ctop);
}else{
if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);
}
}
}else{
c.scrollTop(ntop);
}
};
function _155(_156,_157){
var _158=_14d(_156,_157);
if(_157){
_158.unshift(_eb(_156,_157));
}
for(var i=0;i<_158.length;i++){
_143(_156,_158[i].target);
}
};
function _159(_15a,_15b){
var node=$(_15b.parent);
var data=_15b.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
var ul;
if(node.length==0){
ul=$(_15a);
}else{
if(_15c(_15a,node[0])){
var _15d=node.find("span.tree-icon");
_15d.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_15d);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=node.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(node);
}
}
_125(_15a,ul[0],data,true,true);
};
function _15e(_15f,_160){
var ref=_160.before||_160.after;
var _161=_120(_15f,ref);
var data=_160.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
_159(_15f,{parent:(_161?_161.target:null),data:data});
var _162=_161?_161.children:$(_15f).tree("getRoots");
for(var i=0;i<_162.length;i++){
if(_162[i].domId==$(ref).attr("id")){
for(var j=data.length-1;j>=0;j--){
_162.splice((_160.before?i:(i+1)),0,data[j]);
}
_162.splice(_162.length-data.length,data.length);
break;
}
}
var li=$();
for(var i=0;i<data.length;i++){
li=li.add($("#"+data[i].domId).parent());
}
if(_160.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _163(_164,_165){
var _166=del(_165);
$(_165).parent().remove();
if(_166){
if(!_166.children||!_166.children.length){
var node=$(_166.target);
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
node.next().remove();
}
_12d(_164,_166);
}
_12e(_164,_164);
function del(_167){
var id=$(_167).attr("id");
var _168=_120(_164,_167);
var cc=_168?_168.children:$.data(_164,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _168;
};
};
function _12d(_169,_16a){
var opts=$.data(_169,"tree").options;
var node=$(_16a.target);
var data=_eb(_169,_16a.target);
if(data.iconCls){
node.find(".tree-icon").removeClass(data.iconCls);
}
$.extend(data,_16a);
node.find(".tree-title").html(opts.formatter.call(_169,data));
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
_121(_169,_16a.target);
};
function _16b(_16c,_16d){
if(_16d){
var p=_120(_16c,_16d);
while(p){
_16d=p.target;
p=_120(_16c,_16d);
}
return _eb(_16c,_16d);
}else{
var _16e=_16f(_16c);
return _16e.length?_16e[0]:null;
}
};
function _16f(_170){
var _171=$.data(_170,"tree").data;
for(var i=0;i<_171.length;i++){
_172(_171[i]);
}
return _171;
};
function _14d(_173,_174){
var _175=[];
var n=_eb(_173,_174);
var data=n?(n.children||[]):$.data(_173,"tree").data;
$.easyui.forEach(data,true,function(node){
_175.push(_172(node));
});
return _175;
};
function _120(_176,_177){
var p=$(_177).closest("ul").prevAll("div.tree-node:first");
return _eb(_176,p[0]);
};
function _178(_179,_17a){
_17a=_17a||"checked";
if(!$.isArray(_17a)){
_17a=[_17a];
}
var _17b=[];
$.easyui.forEach($.data(_179,"tree").data,true,function(n){
if(n.checkState&&$.easyui.indexOfArray(_17a,n.checkState)!=-1){
_17b.push(_172(n));
}
});
return _17b;
};
function _17c(_17d){
var node=$(_17d).find("div.tree-node-selected");
return node.length?_eb(_17d,node[0]):null;
};
function _17e(_17f,_180){
var data=_eb(_17f,_180);
if(data&&data.children){
$.easyui.forEach(data.children,true,function(node){
_172(node);
});
}
return data;
};
function _eb(_181,_182){
return _12c(_181,"domId",$(_182).attr("id"));
};
function _183(_184,id){
return _12c(_184,"id",id);
};
function _12c(_185,_186,_187){
var data=$.data(_185,"tree").data;
var _188=null;
$.easyui.forEach(data,true,function(node){
if(node[_186]==_187){
_188=_172(node);
return false;
}
});
return _188;
};
function _172(node){
node.target=$("#"+node.domId)[0];
return node;
};
function _189(_18a,_18b){
var opts=$.data(_18a,"tree").options;
var node=_eb(_18a,_18b);
if(opts.onBeforeSelect.call(_18a,node)==false){
return;
}
$(_18a).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_18b).addClass("tree-node-selected");
opts.onSelect.call(_18a,node);
};
function _15c(_18c,_18d){
return $(_18d).children("span.tree-hit").length==0;
};
function _18e(_18f,_190){
var opts=$.data(_18f,"tree").options;
var node=_eb(_18f,_190);
if(opts.onBeforeEdit.call(_18f,node)==false){
return;
}
$(_190).css("position","relative");
var nt=$(_190).find(".tree-title");
var _191=nt.outerWidth();
nt.empty();
var _192=$("<input class=\"tree-editor\">").appendTo(nt);
_192.val(node.text).focus();
_192.width(_191+20);
_192._outerHeight(18);
_192.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_193(_18f,_190);
return false;
}else{
if(e.keyCode==27){
_197(_18f,_190);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_193(_18f,_190);
});
};
function _193(_194,_195){
var opts=$.data(_194,"tree").options;
$(_195).css("position","");
var _196=$(_195).find("input.tree-editor");
var val=_196.val();
_196.remove();
var node=_eb(_194,_195);
node.text=val;
_12d(_194,node);
opts.onAfterEdit.call(_194,node);
};
function _197(_198,_199){
var opts=$.data(_198,"tree").options;
$(_199).css("position","");
$(_199).find("input.tree-editor").remove();
var node=_eb(_198,_199);
_12d(_198,node);
opts.onCancelEdit.call(_198,node);
};
function _19a(_19b,q){
var _19c=$.data(_19b,"tree");
var opts=_19c.options;
var ids={};
$.easyui.forEach(_19c.data,true,function(node){
if(opts.filter.call(_19b,q,node)){
$("#"+node.domId).removeClass("tree-node-hidden");
ids[node.domId]=1;
node.hidden=false;
}else{
$("#"+node.domId).addClass("tree-node-hidden");
node.hidden=true;
}
});
for(var id in ids){
_19d(id);
}
function _19d(_19e){
var p=$(_19b).tree("getParent",$("#"+_19e)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_19b).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_19f,_1a0){
if(typeof _19f=="string"){
return $.fn.tree.methods[_19f](this,_1a0);
}
var _19f=_19f||{};
return this.each(function(){
var _1a1=$.data(this,"tree");
var opts;
if(_1a1){
opts=$.extend(_1a1.options,_19f);
_1a1.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_19f);
$.data(this,"tree",{options:opts,tree:_e0(this),data:[],tmpIds:[]});
var data=$.fn.tree.parseData(this);
if(data.length){
_125(this,this,data);
}
}
_e3(this);
if(opts.data){
_125(this,this,$.extend(true,[],opts.data));
}
_137(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_125(this,this,data);
});
},getNode:function(jq,_1a2){
return _eb(jq[0],_1a2);
},getData:function(jq,_1a3){
return _17e(jq[0],_1a3);
},reload:function(jq,_1a4){
return jq.each(function(){
if(_1a4){
var node=$(_1a4);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_13e(this,_1a4);
}else{
$(this).empty();
_137(this,this);
}
});
},getRoot:function(jq,_1a5){
return _16b(jq[0],_1a5);
},getRoots:function(jq){
return _16f(jq[0]);
},getParent:function(jq,_1a6){
return _120(jq[0],_1a6);
},getChildren:function(jq,_1a7){
return _14d(jq[0],_1a7);
},getChecked:function(jq,_1a8){
return _178(jq[0],_1a8);
},getSelected:function(jq){
return _17c(jq[0]);
},isLeaf:function(jq,_1a9){
return _15c(jq[0],_1a9);
},find:function(jq,id){
return _183(jq[0],id);
},select:function(jq,_1aa){
return jq.each(function(){
_189(this,_1aa);
});
},check:function(jq,_1ab){
return jq.each(function(){
_10d(this,_1ab,true);
});
},uncheck:function(jq,_1ac){
return jq.each(function(){
_10d(this,_1ac,false);
});
},collapse:function(jq,_1ad){
return jq.each(function(){
_143(this,_1ad);
});
},expand:function(jq,_1ae){
return jq.each(function(){
_13e(this,_1ae);
});
},collapseAll:function(jq,_1af){
return jq.each(function(){
_155(this,_1af);
});
},expandAll:function(jq,_1b0){
return jq.each(function(){
_149(this,_1b0);
});
},expandTo:function(jq,_1b1){
return jq.each(function(){
_14e(this,_1b1);
});
},scrollTo:function(jq,_1b2){
return jq.each(function(){
_152(this,_1b2);
});
},toggle:function(jq,_1b3){
return jq.each(function(){
_146(this,_1b3);
});
},append:function(jq,_1b4){
return jq.each(function(){
_159(this,_1b4);
});
},insert:function(jq,_1b5){
return jq.each(function(){
_15e(this,_1b5);
});
},remove:function(jq,_1b6){
return jq.each(function(){
_163(this,_1b6);
});
},pop:function(jq,_1b7){
var node=jq.tree("getData",_1b7);
jq.tree("remove",_1b7);
return node;
},update:function(jq,_1b8){
return jq.each(function(){
_12d(this,$.extend({},_1b8,{checkState:_1b8.checked?"checked":(_1b8.checked===false?"unchecked":undefined)}));
});
},enableDnd:function(jq){
return jq.each(function(){
_f0(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_ec(this);
});
},beginEdit:function(jq,_1b9){
return jq.each(function(){
_18e(this,_1b9);
});
},endEdit:function(jq,_1ba){
return jq.each(function(){
_193(this,_1ba);
});
},cancelEdit:function(jq,_1bb){
return jq.each(function(){
_197(this,_1bb);
});
},doFilter:function(jq,q){
return jq.each(function(){
_19a(this,q);
});
}};
$.fn.tree.parseOptions=function(_1bc){
var t=$(_1bc);
return $.extend({},$.parser.parseOptions(_1bc,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_1bd){
var data=[];
_1be(data,$(_1bd));
return data;
function _1be(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _1bf=node.children("ul");
if(_1bf.length){
item.children=[];
_1be(item.children,_1bf);
}
aa.push(item);
});
};
};
var _1c0=1;
var _1c1={render:function(_1c2,ul,data){
var _1c3=$.data(_1c2,"tree");
var opts=_1c3.options;
var _1c4=$(ul).prev(".tree-node");
var _1c5=_1c4.length?$(_1c2).tree("getNode",_1c4[0]):null;
var _1c6=_1c4.find("span.tree-indent, span.tree-hit").length;
var cc=_1c7.call(this,_1c6,data);
$(ul).append(cc.join(""));
function _1c7(_1c8,_1c9){
var cc=[];
for(var i=0;i<_1c9.length;i++){
var item=_1c9[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_1c0++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");
for(var j=0;j<_1c8;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_1c2,item)){
var flag=0;
if(_1c5&&_1c5.checkState=="checked"&&opts.cascadeCheck){
flag=1;
item.checked=true;
}else{
if(item.checked){
$.easyui.addArrayItem(_1c3.tmpIds,item.domId);
}
}
item.checkState=flag?"checked":"unchecked";
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
item.checkState=undefined;
item.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_1c2,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_1c7.call(this,_1c8+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
},hasCheckbox:function(_1ca,item){
var _1cb=$.data(_1ca,"tree");
var opts=_1cb.options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_1ca,item)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(item.state=="open"&&!(item.children&&item.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
var qq=[];
$.map($.isArray(q)?q:[q],function(q){
q=$.trim(q);
if(q){
qq.push(q);
}
});
for(var i=0;i<qq.length;i++){
var _1cc=node.text.toLowerCase().indexOf(qq[i].toLowerCase());
if(_1cc>=0){
return true;
}
}
return !qq.length;
},loader:function(_1cd,_1ce,_1cf){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_1cd,dataType:"json",success:function(data){
_1ce(data);
},error:function(){
_1cf.apply(this,arguments);
}});
},loadFilter:function(data,_1d0){
return data;
},view:_1c1,onBeforeLoad:function(node,_1d1){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_1d2){
},onCheck:function(node,_1d3){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_1d4,_1d5){
},onDragOver:function(_1d6,_1d7){
},onDragLeave:function(_1d8,_1d9){
},onBeforeDrop:function(_1da,_1db,_1dc){
},onDrop:function(_1dd,_1de,_1df){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_1e0){
$(_1e0).addClass("progressbar");
$(_1e0).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");
$(_1e0).bind("_resize",function(e,_1e1){
if($(this).hasClass("easyui-fluid")||_1e1){
_1e2(_1e0);
}
return false;
});
return $(_1e0);
};
function _1e2(_1e3,_1e4){
var opts=$.data(_1e3,"progressbar").options;
var bar=$.data(_1e3,"progressbar").bar;
if(_1e4){
opts.width=_1e4;
}
bar._size(opts);
bar.find("div.progressbar-text").css("width",bar.width());
bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});
};
$.fn.progressbar=function(_1e5,_1e6){
if(typeof _1e5=="string"){
var _1e7=$.fn.progressbar.methods[_1e5];
if(_1e7){
return _1e7(this,_1e6);
}
}
_1e5=_1e5||{};
return this.each(function(){
var _1e8=$.data(this,"progressbar");
if(_1e8){
$.extend(_1e8.options,_1e5);
}else{
_1e8=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1e5),bar:init(this)});
}
$(this).progressbar("setValue",_1e8.options.value);
_1e2(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_1e9){
return jq.each(function(){
_1e2(this,_1e9);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_1ea){
if(_1ea<0){
_1ea=0;
}
if(_1ea>100){
_1ea=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_1ea);
var _1eb=opts.value;
opts.value=_1ea;
$(this).find("div.progressbar-value").width(_1ea+"%");
$(this).find("div.progressbar-text").html(text);
if(_1eb!=_1ea){
opts.onChange.call(this,_1ea,_1eb);
}
});
}};
$.fn.progressbar.parseOptions=function(_1ec){
return $.extend({},$.parser.parseOptions(_1ec,["width","height","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function(_1ed,_1ee){
}};
})(jQuery);
(function($){
function init(_1ef){
$(_1ef).addClass("tooltip-f");
};
function _1f0(_1f1){
var opts=$.data(_1f1,"tooltip").options;
$(_1f1).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){
$(_1f1).tooltip("show",e);
}).bind(opts.hideEvent+".tooltip",function(e){
$(_1f1).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(opts.trackMouse){
opts.trackMouseX=e.pageX;
opts.trackMouseY=e.pageY;
$(_1f1).tooltip("reposition");
}
});
};
function _1f2(_1f3){
var _1f4=$.data(_1f3,"tooltip");
if(_1f4.showTimer){
clearTimeout(_1f4.showTimer);
_1f4.showTimer=null;
}
if(_1f4.hideTimer){
clearTimeout(_1f4.hideTimer);
_1f4.hideTimer=null;
}
};
function _1f5(_1f6){
var _1f7=$.data(_1f6,"tooltip");
if(!_1f7||!_1f7.tip){
return;
}
var opts=_1f7.options;
var tip=_1f7.tip;
var pos={left:-100000,top:-100000};
if($(_1f6).is(":visible")){
pos=_1f8(opts.position);
if(opts.position=="top"&&pos.top<0){
pos=_1f8("bottom");
}else{
if((opts.position=="bottom")&&(pos.top+tip._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
pos=_1f8("top");
}
}
if(pos.left<0){
if(opts.position=="left"){
pos=_1f8("right");
}else{
$(_1f6).tooltip("arrow").css("left",tip._outerWidth()/2+pos.left);
pos.left=0;
}
}else{
if(pos.left+tip._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(opts.position=="right"){
pos=_1f8("left");
}else{
var left=pos.left;
pos.left=$(window)._outerWidth()+$(document)._scrollLeft()-tip._outerWidth();
$(_1f6).tooltip("arrow").css("left",tip._outerWidth()/2-(pos.left-left));
}
}
}
}
tip.css({left:pos.left,top:pos.top,zIndex:(opts.zIndex!=undefined?opts.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
opts.onPosition.call(_1f6,pos.left,pos.top);
function _1f8(_1f9){
opts.position=_1f9||"bottom";
tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);
var left,top;
var _1fa=$.isFunction(opts.deltaX)?opts.deltaX.call(_1f6,opts.position):opts.deltaX;
var _1fb=$.isFunction(opts.deltaY)?opts.deltaY.call(_1f6,opts.position):opts.deltaY;
if(opts.trackMouse){
t=$();
left=opts.trackMouseX+_1fa;
top=opts.trackMouseY+_1fb;
}else{
var t=$(_1f6);
left=t.offset().left+_1fa;
top=t.offset().top+_1fb;
}
switch(opts.position){
case "right":
left+=t._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "left":
left-=tip._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "top":
left-=(tip._outerWidth()-t._outerWidth())/2;
top-=tip._outerHeight()+12+(opts.trackMouse?12:0);
break;
case "bottom":
left-=(tip._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(opts.trackMouse?12:0);
break;
}
return {left:left,top:top};
};
};
function _1fc(_1fd,e){
var _1fe=$.data(_1fd,"tooltip");
var opts=_1fe.options;
var tip=_1fe.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_1fe.tip=tip;
_1ff(_1fd);
}
_1f2(_1fd);
_1fe.showTimer=setTimeout(function(){
$(_1fd).tooltip("reposition");
tip.show();
opts.onShow.call(_1fd,e);
var _200=tip.children(".tooltip-arrow-outer");
var _201=tip.children(".tooltip-arrow");
var bc="border-"+opts.position+"-color";
_200.add(_201).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_200.css(bc,tip.css(bc));
_201.css(bc,tip.css("backgroundColor"));
},opts.showDelay);
};
function _202(_203,e){
var _204=$.data(_203,"tooltip");
if(_204&&_204.tip){
_1f2(_203);
_204.hideTimer=setTimeout(function(){
_204.tip.hide();
_204.options.onHide.call(_203,e);
},_204.options.hideDelay);
}
};
function _1ff(_205,_206){
var _207=$.data(_205,"tooltip");
var opts=_207.options;
if(_206){
opts.content=_206;
}
if(!_207.tip){
return;
}
var cc=typeof opts.content=="function"?opts.content.call(_205):opts.content;
_207.tip.children(".tooltip-content").html(cc);
opts.onUpdate.call(_205,cc);
};
function _208(_209){
var _20a=$.data(_209,"tooltip");
if(_20a){
_1f2(_209);
var opts=_20a.options;
if(_20a.tip){
_20a.tip.remove();
}
if(opts._title){
$(_209).attr("title",opts._title);
}
$.removeData(_209,"tooltip");
$(_209).unbind(".tooltip").removeClass("tooltip-f");
opts.onDestroy.call(_209);
}
};
$.fn.tooltip=function(_20b,_20c){
if(typeof _20b=="string"){
return $.fn.tooltip.methods[_20b](this,_20c);
}
_20b=_20b||{};
return this.each(function(){
var _20d=$.data(this,"tooltip");
if(_20d){
$.extend(_20d.options,_20b);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_20b)});
init(this);
}
_1f0(this);
_1ff(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_1fc(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_202(this,e);
});
},update:function(jq,_20e){
return jq.each(function(){
_1ff(this,_20e);
});
},reposition:function(jq){
return jq.each(function(){
_1f5(this);
});
},destroy:function(jq){
return jq.each(function(){
_208(this);
});
}};
$.fn.tooltip.parseOptions=function(_20f){
var t=$(_20f);
var opts=$.extend({},$.parser.parseOptions(_20f,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!opts.content){
opts.content=opts._title;
}
return opts;
};
$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_210){
},onPosition:function(left,top){
},onDestroy:function(){
}};
})(jQuery);
(function($){
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _211(node){
node._remove();
};
function _212(_213,_214){
var _215=$.data(_213,"panel");
var opts=_215.options;
var _216=_215.panel;
var _217=_216.children(".panel-header");
var _218=_216.children(".panel-body");
var _219=_216.children(".panel-footer");
var _21a=(opts.halign=="left"||opts.halign=="right");
if(_214){
$.extend(opts,{width:_214.width,height:_214.height,minWidth:_214.minWidth,maxWidth:_214.maxWidth,minHeight:_214.minHeight,maxHeight:_214.maxHeight,left:_214.left,top:_214.top});
}
_216._size(opts);
if(!_21a){
_217._outerWidth(_216.width());
}
_218._outerWidth(_216.width());
if(!isNaN(parseInt(opts.height))){
if(_21a){
if(opts.header){
var _21b=$(opts.header)._outerWidth();
}else{
_217.css("width","");
var _21b=_217._outerWidth();
}
var _21c=_217.find(".panel-title");
_21b+=Math.min(_21c._outerWidth(),_21c._outerHeight());
var _21d=_216.height();
_217._outerWidth(_21b)._outerHeight(_21d);
_21c._outerWidth(_217.height());
_218._outerWidth(_216.width()-_21b-_219._outerWidth())._outerHeight(_21d);
_219._outerHeight(_21d);
_218.css({left:"",right:""}).css(opts.halign,(_217.position()[opts.halign]+_21b)+"px");
opts.panelCssWidth=_216.css("width");
if(opts.collapsed){
_216._outerWidth(_21b+_219._outerWidth());
}
}else{
_218._outerHeight(_216.height()-_217._outerHeight()-_219._outerHeight());
}
}else{
_218.css("height","");
var min=$.parser.parseValue("minHeight",opts.minHeight,_216.parent());
var max=$.parser.parseValue("maxHeight",opts.maxHeight,_216.parent());
var _21e=_217._outerHeight()+_219._outerHeight()+_216._outerHeight()-_216.height();
_218._size("minHeight",min?(min-_21e):"");
_218._size("maxHeight",max?(max-_21e):"");
}
_216.css({height:(_21a?undefined:""),minHeight:"",maxHeight:"",left:opts.left,top:opts.top});
opts.onResize.apply(_213,[opts.width,opts.height]);
$(_213).panel("doLayout");
};
function _21f(_220,_221){
var _222=$.data(_220,"panel");
var opts=_222.options;
var _223=_222.panel;
if(_221){
if(_221.left!=null){
opts.left=_221.left;
}
if(_221.top!=null){
opts.top=_221.top;
}
}
_223.css({left:opts.left,top:opts.top});
_223.find(".tooltip-f").each(function(){
$(this).tooltip("reposition");
});
opts.onMove.apply(_220,[opts.left,opts.top]);
};
function _224(_225){
$(_225).addClass("panel-body")._size("clear");
var _226=$("<div class=\"panel\"></div>").insertBefore(_225);
_226[0].appendChild(_225);
_226.bind("_resize",function(e,_227){
if($(this).hasClass("easyui-fluid")||_227){
_212(_225);
}
return false;
});
return _226;
};
function _228(_229){
var _22a=$.data(_229,"panel");
var opts=_22a.options;
var _22b=_22a.panel;
_22b.css(opts.style);
_22b.addClass(opts.cls);
_22b.removeClass("panel-hleft panel-hright").addClass("panel-h"+opts.halign);
_22c();
_22d();
var _22e=$(_229).panel("header");
var body=$(_229).panel("body");
var _22f=$(_229).siblings(".panel-footer");
if(opts.border){
_22e.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
_22f.removeClass("panel-footer-noborder");
}else{
_22e.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
_22f.addClass("panel-footer-noborder");
}
_22e.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
$(_229).attr("id",opts.id||"");
if(opts.content){
$(_229).panel("clear");
$(_229).html(opts.content);
$.parser.parse($(_229));
}
function _22c(){
if(opts.noheader||(!opts.title&&!opts.header)){
_211(_22b.children(".panel-header"));
_22b.children(".panel-body").addClass("panel-body-noheader");
}else{
if(opts.header){
$(opts.header).addClass("panel-header").prependTo(_22b);
}else{
var _230=_22b.children(".panel-header");
if(!_230.length){
_230=$("<div class=\"panel-header\"></div>").prependTo(_22b);
}
if(!$.isArray(opts.tools)){
_230.find("div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_230.empty();
var _231=$("<div class=\"panel-title\"></div>").html(opts.title).appendTo(_230);
if(opts.iconCls){
_231.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_230);
}
if(opts.halign=="left"||opts.halign=="right"){
_231.addClass("panel-title-"+opts.titleDirection);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_230);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if($.isArray(opts.tools)){
$.map(opts.tools,function(t){
_232(tool,t.iconCls,eval(t.handler));
});
}else{
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}
}
if(opts.collapsible){
_232(tool,"panel-tool-collapse",function(){
if(opts.collapsed==true){
_252(_229,true);
}else{
_243(_229,true);
}
});
}
if(opts.minimizable){
_232(tool,"panel-tool-min",function(){
_258(_229);
});
}
if(opts.maximizable){
_232(tool,"panel-tool-max",function(){
if(opts.maximized==true){
_25b(_229);
}else{
_242(_229);
}
});
}
if(opts.closable){
_232(tool,"panel-tool-close",function(){
_244(_229);
});
}
}
_22b.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _232(c,icon,_233){
var a=$("<a href=\"javascript:;\"></a>").addClass(icon).appendTo(c);
a.bind("click",_233);
};
function _22d(){
if(opts.footer){
$(opts.footer).addClass("panel-footer").appendTo(_22b);
$(_229).addClass("panel-body-nobottom");
}else{
_22b.children(".panel-footer").remove();
$(_229).removeClass("panel-body-nobottom");
}
};
};
function _234(_235,_236){
var _237=$.data(_235,"panel");
var opts=_237.options;
if(_238){
opts.queryParams=_236;
}
if(!opts.href){
return;
}
if(!_237.isLoaded||!opts.cache){
var _238=$.extend({},opts.queryParams);
if(opts.onBeforeLoad.call(_235,_238)==false){
return;
}
_237.isLoaded=false;
if(opts.loadingMessage){
$(_235).panel("clear");
$(_235).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
opts.loader.call(_235,_238,function(data){
var _239=opts.extractor.call(_235,data);
$(_235).panel("clear");
$(_235).html(_239);
$.parser.parse($(_235));
opts.onLoad.apply(_235,arguments);
_237.isLoaded=true;
},function(){
opts.onLoadError.apply(_235,arguments);
});
}
};
function _23a(_23b){
var t=$(_23b);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _23c(_23d){
$(_23d).panel("doLayout",true);
};
function _23e(_23f,_240){
var opts=$.data(_23f,"panel").options;
var _241=$.data(_23f,"panel").panel;
if(_240!=true){
if(opts.onBeforeOpen.call(_23f)==false){
return;
}
}
_241.stop(true,true);
if($.isFunction(opts.openAnimation)){
opts.openAnimation.call(_23f,cb);
}else{
switch(opts.openAnimation){
case "slide":
_241.slideDown(opts.openDuration,cb);
break;
case "fade":
_241.fadeIn(opts.openDuration,cb);
break;
case "show":
_241.show(opts.openDuration,cb);
break;
default:
_241.show();
cb();
}
}
function cb(){
opts.closed=false;
opts.minimized=false;
var tool=_241.children(".panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_23f);
if(opts.maximized==true){
opts.maximized=false;
_242(_23f);
}
if(opts.collapsed==true){
opts.collapsed=false;
_243(_23f);
}
if(!opts.collapsed){
_234(_23f);
_23c(_23f);
}
};
};
function _244(_245,_246){
var _247=$.data(_245,"panel");
var opts=_247.options;
var _248=_247.panel;
if(_246!=true){
if(opts.onBeforeClose.call(_245)==false){
return;
}
}
_248.find(".tooltip-f").each(function(){
$(this).tooltip("hide");
});
_248.stop(true,true);
_248._size("unfit");
if($.isFunction(opts.closeAnimation)){
opts.closeAnimation.call(_245,cb);
}else{
switch(opts.closeAnimation){
case "slide":
_248.slideUp(opts.closeDuration,cb);
break;
case "fade":
_248.fadeOut(opts.closeDuration,cb);
break;
case "hide":
_248.hide(opts.closeDuration,cb);
break;
default:
_248.hide();
cb();
}
}
function cb(){
opts.closed=true;
opts.onClose.call(_245);
};
};
function _249(_24a,_24b){
var _24c=$.data(_24a,"panel");
var opts=_24c.options;
var _24d=_24c.panel;
if(_24b!=true){
if(opts.onBeforeDestroy.call(_24a)==false){
return;
}
}
$(_24a).panel("clear").panel("clear","footer");
_211(_24d);
opts.onDestroy.call(_24a);
};
function _243(_24e,_24f){
var opts=$.data(_24e,"panel").options;
var _250=$.data(_24e,"panel").panel;
var body=_250.children(".panel-body");
var _251=_250.children(".panel-header");
var tool=_251.find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_24e)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_24f==true){
if(opts.halign=="left"||opts.halign=="right"){
_250.animate({width:_251._outerWidth()+_250.children(".panel-footer")._outerWidth()},function(){
cb();
});
}else{
body.slideUp("normal",function(){
cb();
});
}
}else{
if(opts.halign=="left"||opts.halign=="right"){
_250._outerWidth(_251._outerWidth()+_250.children(".panel-footer")._outerWidth());
}
cb();
}
function cb(){
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_24e);
};
};
function _252(_253,_254){
var opts=$.data(_253,"panel").options;
var _255=$.data(_253,"panel").panel;
var body=_255.children(".panel-body");
var tool=_255.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_253)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_254==true){
if(opts.halign=="left"||opts.halign=="right"){
body.show();
_255.animate({width:opts.panelCssWidth},function(){
cb();
});
}else{
body.slideDown("normal",function(){
cb();
});
}
}else{
if(opts.halign=="left"||opts.halign=="right"){
_255.css("width",opts.panelCssWidth);
}
cb();
}
function cb(){
body.show();
opts.collapsed=false;
opts.onExpand.call(_253);
_234(_253);
_23c(_253);
};
};
function _242(_256){
var opts=$.data(_256,"panel").options;
var _257=$.data(_256,"panel").panel;
var tool=_257.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_256,"panel").original){
$.data(_256,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_212(_256);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_256);
};
function _258(_259){
var opts=$.data(_259,"panel").options;
var _25a=$.data(_259,"panel").panel;
_25a._size("unfit");
_25a.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_259);
};
function _25b(_25c){
var opts=$.data(_25c,"panel").options;
var _25d=$.data(_25c,"panel").panel;
var tool=_25d.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_25d.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_25c,"panel").original);
_212(_25c);
opts.minimized=false;
opts.maximized=false;
$.data(_25c,"panel").original=null;
opts.onRestore.call(_25c);
};
function _25e(_25f,_260){
$.data(_25f,"panel").options.title=_260;
$(_25f).panel("header").find("div.panel-title").html(_260);
};
var _261=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_261){
clearTimeout(_261);
}
_261=setTimeout(function(){
var _262=$("body.layout");
if(_262.length){
_262.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_261=null;
},100);
});
$.fn.panel=function(_263,_264){
if(typeof _263=="string"){
return $.fn.panel.methods[_263](this,_264);
}
_263=_263||{};
return this.each(function(){
var _265=$.data(this,"panel");
var opts;
if(_265){
opts=$.extend(_265.options,_263);
_265.isLoaded=false;
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_263);
$(this).attr("title","");
_265=$.data(this,"panel",{options:opts,panel:_224(this),isLoaded:false});
}
_228(this);
$(this).show();
if(opts.doSize==true){
_265.panel.css("display","block");
_212(this);
}
if(opts.closed==true||opts.minimized==true){
_265.panel.hide();
}else{
_23e(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_266){
return jq.each(function(){
_25e(this,_266);
});
},open:function(jq,_267){
return jq.each(function(){
_23e(this,_267);
});
},close:function(jq,_268){
return jq.each(function(){
_244(this,_268);
});
},destroy:function(jq,_269){
return jq.each(function(){
_249(this,_269);
});
},clear:function(jq,type){
return jq.each(function(){
_23a(type=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,href){
return jq.each(function(){
var _26a=$.data(this,"panel");
_26a.isLoaded=false;
if(href){
if(typeof href=="string"){
_26a.options.href=href;
}else{
_26a.options.queryParams=href;
}
}
_234(this);
});
},resize:function(jq,_26b){
return jq.each(function(){
_212(this,_26b);
});
},doLayout:function(jq,all){
return jq.each(function(){
_26c(this,"body");
_26c($(this).siblings(".panel-footer")[0],"footer");
function _26c(_26d,type){
if(!_26d){
return;
}
var _26e=_26d==$("body")[0];
var s=$(_26d).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_26f,el){
var p=$(el).parents(".panel-"+type+":first");
return _26e?p.length==0:p[0]==_26d;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_270){
return jq.each(function(){
_21f(this,_270);
});
},maximize:function(jq){
return jq.each(function(){
_242(this);
});
},minimize:function(jq){
return jq.each(function(){
_258(this);
});
},restore:function(jq){
return jq.each(function(){
_25b(this);
});
},collapse:function(jq,_271){
return jq.each(function(){
_243(this,_271);
});
},expand:function(jq,_272){
return jq.each(function(){
_252(this,_272);
});
}};
$.fn.panel.parseOptions=function(_273){
var t=$(_273);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_273,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer","halign","titleDirection",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,halign:"top",titleDirection:"down",collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_274,_275,_276){
var opts=$(this).panel("options");
if(!opts.href){
return false;
}
$.ajax({type:opts.method,url:opts.href,cache:false,data:_274,dataType:"html",success:function(data){
_275(data);
},error:function(){
_276.apply(this,arguments);
}});
},extractor:function(data){
var _277=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _278=_277.exec(data);
if(_278){
return _278[1];
}else{
return data;
}
},onBeforeLoad:function(_279){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_27a,_27b){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _27c(_27d,_27e){
var _27f=$.data(_27d,"window");
if(_27e){
if(_27e.left!=null){
_27f.options.left=_27e.left;
}
if(_27e.top!=null){
_27f.options.top=_27e.top;
}
}
$(_27d).panel("move",_27f.options);
if(_27f.shadow){
_27f.shadow.css({left:_27f.options.left,top:_27f.options.top});
}
};
function _280(_281,_282){
var opts=$.data(_281,"window").options;
var pp=$(_281).window("panel");
var _283=pp._outerWidth();
if(opts.inline){
var _284=pp.parent();
opts.left=Math.ceil((_284.width()-_283)/2+_284.scrollLeft());
}else{
opts.left=Math.ceil(($(window)._outerWidth()-_283)/2+$(document).scrollLeft());
}
if(_282){
_27c(_281);
}
};
function _285(_286,_287){
var opts=$.data(_286,"window").options;
var pp=$(_286).window("panel");
var _288=pp._outerHeight();
if(opts.inline){
var _289=pp.parent();
opts.top=Math.ceil((_289.height()-_288)/2+_289.scrollTop());
}else{
opts.top=Math.ceil(($(window)._outerHeight()-_288)/2+$(document).scrollTop());
}
if(_287){
_27c(_286);
}
};
function _28a(_28b){
var _28c=$.data(_28b,"window");
var opts=_28c.options;
var win=$(_28b).panel($.extend({},_28c.options,{border:false,doSize:true,closed:true,cls:"window "+(!opts.border?"window-thinborder window-noborder ":(opts.border=="thin"?"window-thinborder ":""))+(opts.cls||""),headerCls:"window-header "+(opts.headerCls||""),bodyCls:"window-body "+(opts.noheader?"window-body-noheader ":" ")+(opts.bodyCls||""),onBeforeDestroy:function(){
if(opts.onBeforeDestroy.call(_28b)==false){
return false;
}
if(_28c.shadow){
_28c.shadow.remove();
}
if(_28c.mask){
_28c.mask.remove();
}
},onClose:function(){
if(_28c.shadow){
_28c.shadow.hide();
}
if(_28c.mask){
_28c.mask.hide();
}
opts.onClose.call(_28b);
},onOpen:function(){
if(_28c.mask){
_28c.mask.css($.extend({display:"block",zIndex:$.fn.window.defaults.zIndex++},$.fn.window.getMaskSize(_28b)));
}
if(_28c.shadow){
_28c.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:opts.left,top:opts.top,width:_28c.window._outerWidth(),height:_28c.window._outerHeight()});
}
_28c.window.css("z-index",$.fn.window.defaults.zIndex++);
opts.onOpen.call(_28b);
},onResize:function(_28d,_28e){
var _28f=$(this).panel("options");
$.extend(opts,{width:_28f.width,height:_28f.height,left:_28f.left,top:_28f.top});
if(_28c.shadow){
_28c.shadow.css({left:opts.left,top:opts.top,width:_28c.window._outerWidth(),height:_28c.window._outerHeight()});
}
opts.onResize.call(_28b,_28d,_28e);
},onMinimize:function(){
if(_28c.shadow){
_28c.shadow.hide();
}
if(_28c.mask){
_28c.mask.hide();
}
_28c.options.onMinimize.call(_28b);
},onBeforeCollapse:function(){
if(opts.onBeforeCollapse.call(_28b)==false){
return false;
}
if(_28c.shadow){
_28c.shadow.hide();
}
},onExpand:function(){
if(_28c.shadow){
_28c.shadow.show();
}
opts.onExpand.call(_28b);
}}));
_28c.window=win.panel("panel");
if(_28c.mask){
_28c.mask.remove();
}
if(opts.modal){
_28c.mask=$("<div class=\"window-mask\" style=\"display:none\"></div>").insertAfter(_28c.window);
}
if(_28c.shadow){
_28c.shadow.remove();
}
if(opts.shadow){
_28c.shadow=$("<div class=\"window-shadow\" style=\"display:none\"></div>").insertAfter(_28c.window);
}
var _290=opts.closed;
if(opts.left==null){
_280(_28b);
}
if(opts.top==null){
_285(_28b);
}
_27c(_28b);
if(!_290){
win.window("open");
}
};
function _291(left,top,_292,_293){
var _294=this;
var _295=$.data(_294,"window");
var opts=_295.options;
if(!opts.constrain){
return {};
}
if($.isFunction(opts.constrain)){
return opts.constrain.call(_294,left,top,_292,_293);
}
var win=$(_294).window("window");
var _296=opts.inline?win.parent():$(window);
if(left<0){
left=0;
}
if(top<_296.scrollTop()){
top=_296.scrollTop();
}
if(left+_292>_296.width()){
if(_292==win.outerWidth()){
left=_296.width()-_292;
}else{
_292=_296.width()-left;
}
}
if(top-_296.scrollTop()+_293>_296.height()){
if(_293==win.outerHeight()){
top=_296.height()-_293+_296.scrollTop();
}else{
_293=_296.height()-top+_296.scrollTop();
}
}
return {left:left,top:top,width:_292,height:_293};
};
function _297(_298){
var _299=$.data(_298,"window");
_299.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_299.options.draggable==false,onBeforeDrag:function(e){
if(_299.mask){
_299.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_299.shadow){
_299.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_299.window.css("z-index",$.fn.window.defaults.zIndex++);
},onStartDrag:function(e){
_29a(e);
},onDrag:function(e){
_29b(e);
return false;
},onStopDrag:function(e){
_29c(e,"move");
}});
_299.window.resizable({disabled:_299.options.resizable==false,onStartResize:function(e){
_29a(e);
},onResize:function(e){
_29b(e);
return false;
},onStopResize:function(e){
_29c(e,"resize");
}});
function _29a(e){
if(_299.pmask){
_299.pmask.remove();
}
_299.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_299.window);
_299.pmask.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_299.window._outerWidth(),height:_299.window._outerHeight()});
if(_299.proxy){
_299.proxy.remove();
}
_299.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_299.window);
_299.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_299.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
_299.proxy.hide();
setTimeout(function(){
if(_299.pmask){
_299.pmask.show();
}
if(_299.proxy){
_299.proxy.show();
}
},500);
};
function _29b(e){
$.extend(e.data,_291.call(_298,e.data.left,e.data.top,e.data.width,e.data.height));
_299.pmask.show();
_299.proxy.css({display:"block",left:e.data.left,top:e.data.top});
_299.proxy._outerWidth(e.data.width);
_299.proxy._outerHeight(e.data.height);
};
function _29c(e,_29d){
$.extend(e.data,_291.call(_298,e.data.left,e.data.top,e.data.width+0.1,e.data.height+0.1));
$(_298).window(_29d,e.data);
_299.pmask.remove();
_299.pmask=null;
_299.proxy.remove();
_299.proxy=null;
};
};
$(function(){
if(!$._positionFixed){
$(window).resize(function(){
$("body>div.window-mask:visible").css({width:"",height:""});
setTimeout(function(){
$("body>div.window-mask:visible").css($.fn.window.getMaskSize());
},50);
});
}
});
$.fn.window=function(_29e,_29f){
if(typeof _29e=="string"){
var _2a0=$.fn.window.methods[_29e];
if(_2a0){
return _2a0(this,_29f);
}else{
return this.panel(_29e,_29f);
}
}
_29e=_29e||{};
return this.each(function(){
var _2a1=$.data(this,"window");
if(_2a1){
$.extend(_2a1.options,_29e);
}else{
_2a1=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_29e)});
if(!_2a1.options.inline){
document.body.appendChild(this);
}
}
_28a(this);
_297(this);
});
};
$.fn.window.methods={options:function(jq){
var _2a2=jq.panel("options");
var _2a3=$.data(jq[0],"window").options;
return $.extend(_2a3,{closed:_2a2.closed,collapsed:_2a2.collapsed,minimized:_2a2.minimized,maximized:_2a2.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_2a4){
return jq.each(function(){
_27c(this,_2a4);
});
},hcenter:function(jq){
return jq.each(function(){
_280(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_285(this,true);
});
},center:function(jq){
return jq.each(function(){
_280(this);
_285(this);
_27c(this);
});
}};
$.fn.window.getMaskSize=function(_2a5){
var _2a6=$(_2a5).data("window");
if(_2a6&&_2a6.options.inline){
return {};
}else{
if($._positionFixed){
return {position:"fixed"};
}else{
return {width:$(document).width(),height:$(document).height()};
}
}
};
$.fn.window.parseOptions=function(_2a7){
return $.extend({},$.fn.panel.parseOptions(_2a7),$.parser.parseOptions(_2a7,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,border:true,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false,constrain:false});
})(jQuery);
(function($){
function _2a8(_2a9){
var opts=$.data(_2a9,"dialog").options;
opts.inited=false;
$(_2a9).window($.extend({},opts,{onResize:function(w,h){
if(opts.inited){
_2ae(this);
opts.onResize.call(this,w,h);
}
}}));
var win=$(_2a9).window("window");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$(_2a9).siblings("div.dialog-toolbar").remove();
var _2aa=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").appendTo(win);
var tr=_2aa.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("dialog-toolbar").appendTo(win);
$(opts.toolbar).show();
}
}else{
$(_2a9).siblings("div.dialog-toolbar").remove();
}
if(opts.buttons){
if($.isArray(opts.buttons)){
$(_2a9).siblings("div.dialog-button").remove();
var _2ab=$("<div class=\"dialog-button\"></div>").appendTo(win);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _2ac=$("<a href=\"javascript:;\"></a>").appendTo(_2ab);
if(p.handler){
_2ac[0].onclick=p.handler;
}
_2ac.linkbutton(p);
}
}else{
$(opts.buttons).addClass("dialog-button").appendTo(win);
$(opts.buttons).show();
}
}else{
$(_2a9).siblings("div.dialog-button").remove();
}
opts.inited=true;
var _2ad=opts.closed;
win.show();
$(_2a9).window("resize");
if(_2ad){
win.hide();
}
};
function _2ae(_2af,_2b0){
var t=$(_2af);
var opts=t.dialog("options");
var _2b1=opts.noheader;
var tb=t.siblings(".dialog-toolbar");
var bb=t.siblings(".dialog-button");
tb.insertBefore(_2af).css({borderTopWidth:(_2b1?1:0),top:(_2b1?tb.length:0)});
bb.insertAfter(_2af);
tb.add(bb)._outerWidth(t._outerWidth()).find(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
var _2b2=tb._outerHeight()+bb._outerHeight();
if(!isNaN(parseInt(opts.height))){
t._outerHeight(t._outerHeight()-_2b2);
}else{
var _2b3=t._size("min-height");
if(_2b3){
t._size("min-height",_2b3-_2b2);
}
var _2b4=t._size("max-height");
if(_2b4){
t._size("max-height",_2b4-_2b2);
}
}
var _2b5=$.data(_2af,"window").shadow;
if(_2b5){
var cc=t.panel("panel");
_2b5.css({width:cc._outerWidth(),height:cc._outerHeight()});
}
};
$.fn.dialog=function(_2b6,_2b7){
if(typeof _2b6=="string"){
var _2b8=$.fn.dialog.methods[_2b6];
if(_2b8){
return _2b8(this,_2b7);
}else{
return this.window(_2b6,_2b7);
}
}
_2b6=_2b6||{};
return this.each(function(){
var _2b9=$.data(this,"dialog");
if(_2b9){
$.extend(_2b9.options,_2b6);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_2b6)});
}
_2a8(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _2ba=$.data(jq[0],"dialog").options;
var _2bb=jq.panel("options");
$.extend(_2ba,{width:_2bb.width,height:_2bb.height,left:_2bb.left,top:_2bb.top,closed:_2bb.closed,collapsed:_2bb.collapsed,minimized:_2bb.minimized,maximized:_2bb.maximized});
return _2ba;
},dialog:function(jq){
return jq.window("window");
}};
$.fn.dialog.parseOptions=function(_2bc){
var t=$(_2bc);
return $.extend({},$.fn.window.parseOptions(_2bc),$.parser.parseOptions(_2bc,["toolbar","buttons"]),{toolbar:(t.children(".dialog-toolbar").length?t.children(".dialog-toolbar").removeClass("dialog-toolbar"):undefined),buttons:(t.children(".dialog-button").length?t.children(".dialog-button").removeClass("dialog-button"):undefined)});
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function _2bd(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).dialog("close");
});
}else{
if(e.keyCode==9){
var win=$("body").children("div.messager-window");
if(!win.length){
return;
}
var _2be=win.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_2be.length;i++){
if($(_2be[i]).is(":focus")){
$(_2be[i>=_2be.length-1?0:i+1]).focus();
return false;
}
}
}else{
if(e.keyCode==13){
var _2bf=$(e.target).closest("input.messager-input");
if(_2bf.length){
var dlg=_2bf.closest(".messager-body");
_2c0(dlg,_2bf.val());
}
}
}
}
});
};
function _2c1(){
$(document).unbind(".messager");
};
function _2c2(_2c3){
var opts=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:250,height:100,minHeight:0,showType:"slide",showSpeed:600,content:_2c3.msg,timeout:4000},_2c3);
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},opts,{noheader:(opts.title?false:true),openAnimation:(opts.showType),closeAnimation:(opts.showType=="show"?"hide":opts.showType),openDuration:opts.showSpeed,closeDuration:opts.showSpeed,onOpen:function(){
dlg.dialog("dialog").hover(function(){
if(opts.timer){
clearTimeout(opts.timer);
}
},function(){
_2c4();
});
_2c4();
function _2c4(){
if(opts.timeout>0){
opts.timer=setTimeout(function(){
if(dlg.length&&dlg.data("dialog")){
dlg.dialog("close");
}
},opts.timeout);
}
};
if(_2c3.onOpen){
_2c3.onOpen.call(this);
}else{
opts.onOpen.call(this);
}
},onClose:function(){
if(opts.timer){
clearTimeout(opts.timer);
}
if(_2c3.onClose){
_2c3.onClose.call(this);
}else{
opts.onClose.call(this);
}
dlg.dialog("destroy");
}}));
dlg.dialog("dialog").css(opts.style);
dlg.dialog("open");
return dlg;
};
function _2c5(_2c6){
_2bd();
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},_2c6,{noheader:(_2c6.title?false:true),onClose:function(){
_2c1();
if(_2c6.onClose){
_2c6.onClose.call(this);
}
dlg.dialog("destroy");
}}));
var win=dlg.dialog("dialog").addClass("messager-window");
win.find(".dialog-button").addClass("messager-button").find("a:first").focus();
return dlg;
};
function _2c0(dlg,_2c7){
var opts=dlg.dialog("options");
dlg.dialog("close");
opts.fn(_2c7);
};
$.messager={show:function(_2c8){
return _2c2(_2c8);
},alert:function(_2c9,msg,icon,fn){
var opts=typeof _2c9=="object"?_2c9:{title:_2c9,msg:msg,icon:icon,fn:fn};
var cls=opts.icon?"messager-icon messager-"+opts.icon:"";
opts=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c0(dlg);
}}];
}
var dlg=_2c5(opts);
return dlg;
},confirm:function(_2ca,msg,fn){
var opts=typeof _2ca=="object"?_2ca:{title:_2ca,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c0(dlg,true);
}},{text:opts.cancel,onClick:function(){
_2c0(dlg,false);
}}];
}
var dlg=_2c5(opts);
return dlg;
},prompt:function(_2cb,msg,fn){
var opts=typeof _2cb=="object"?_2cb:{title:_2cb,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c0(dlg,dlg.find(".messager-input").val());
}},{text:opts.cancel,onClick:function(){
_2c0(dlg);
}}];
}
var dlg=_2c5(opts);
dlg.find(".messager-input").focus();
return dlg;
},progress:function(_2cc){
var _2cd={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var dlg=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(dlg.length){
dlg.dialog("close");
}
}};
if(typeof _2cc=="string"){
var _2ce=_2cd[_2cc];
return _2ce();
}
_2cc=_2cc||{};
var opts=$.extend({},{title:"",minHeight:0,content:undefined,msg:"",text:undefined,interval:300},_2cc);
var dlg=_2c5($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+opts.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},opts,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_2cc.onClose){
_2cc.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=dlg.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
dlg.dialog("resize");
if(opts.interval){
dlg[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return dlg;
}};
$.messager.defaults=$.extend({},$.fn.dialog.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",minHeight:150,modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);
(function($){
function _2cf(_2d0,_2d1){
var _2d2=$.data(_2d0,"accordion");
var opts=_2d2.options;
var _2d3=_2d2.panels;
var cc=$(_2d0);
var _2d4=(opts.halign=="left"||opts.halign=="right");
cc.children(".panel-last").removeClass("panel-last");
cc.children(".panel:last").addClass("panel-last");
if(_2d1){
$.extend(opts,{width:_2d1.width,height:_2d1.height});
}
cc._size(opts);
var _2d5=0;
var _2d6="auto";
var _2d7=cc.find(">.panel>.accordion-header");
if(_2d7.length){
if(_2d4){
$(_2d3[0]).panel("resize",{width:cc.width(),height:cc.height()});
_2d5=$(_2d7[0])._outerWidth();
}else{
_2d5=$(_2d7[0]).css("height","")._outerHeight();
}
}
if(!isNaN(parseInt(opts.height))){
if(_2d4){
_2d6=cc.width()-_2d5*_2d7.length;
}else{
_2d6=cc.height()-_2d5*_2d7.length;
}
}
_2d8(true,_2d6-_2d8(false));
function _2d8(_2d9,_2da){
var _2db=0;
for(var i=0;i<_2d3.length;i++){
var p=_2d3[i];
if(_2d4){
var h=p.panel("header")._outerWidth(_2d5);
}else{
var h=p.panel("header")._outerHeight(_2d5);
}
if(p.panel("options").collapsible==_2d9){
var _2dc=isNaN(_2da)?undefined:(_2da+_2d5*h.length);
if(_2d4){
p.panel("resize",{height:cc.height(),width:(_2d9?_2dc:undefined)});
_2db+=p.panel("panel")._outerWidth()-_2d5*h.length;
}else{
p.panel("resize",{width:cc.width(),height:(_2d9?_2dc:undefined)});
_2db+=p.panel("panel").outerHeight()-_2d5*h.length;
}
}
}
return _2db;
};
};
function _2dd(_2de,_2df,_2e0,all){
var _2e1=$.data(_2de,"accordion").panels;
var pp=[];
for(var i=0;i<_2e1.length;i++){
var p=_2e1[i];
if(_2df){
if(p.panel("options")[_2df]==_2e0){
pp.push(p);
}
}else{
if(p[0]==$(_2e0)[0]){
return i;
}
}
}
if(_2df){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _2e2(_2e3){
return _2dd(_2e3,"collapsed",false,true);
};
function _2e4(_2e5){
var pp=_2e2(_2e5);
return pp.length?pp[0]:null;
};
function _2e6(_2e7,_2e8){
return _2dd(_2e7,null,_2e8);
};
function _2e9(_2ea,_2eb){
var _2ec=$.data(_2ea,"accordion").panels;
if(typeof _2eb=="number"){
if(_2eb<0||_2eb>=_2ec.length){
return null;
}else{
return _2ec[_2eb];
}
}
return _2dd(_2ea,"title",_2eb);
};
function _2ed(_2ee){
var opts=$.data(_2ee,"accordion").options;
var cc=$(_2ee);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function init(_2ef){
var _2f0=$.data(_2ef,"accordion");
var cc=$(_2ef);
cc.addClass("accordion");
_2f0.panels=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_2f0.panels.push(pp);
_2f2(_2ef,pp,opts);
});
cc.bind("_resize",function(e,_2f1){
if($(this).hasClass("easyui-fluid")||_2f1){
_2cf(_2ef);
}
return false;
});
};
function _2f2(_2f3,pp,_2f4){
var opts=$.data(_2f3,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body",halign:opts.halign},_2f4,{onBeforeExpand:function(){
if(_2f4.onBeforeExpand){
if(_2f4.onBeforeExpand.call(this)==false){
return false;
}
}
if(!opts.multiple){
var all=$.grep(_2e2(_2f3),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_2fc(_2f3,_2e6(_2f3,all[i]));
}
}
var _2f5=$(this).panel("header");
_2f5.addClass("accordion-header-selected");
_2f5.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
$(_2f3).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
if(_2f4.onExpand){
_2f4.onExpand.call(this);
}
opts.onSelect.call(_2f3,$(this).panel("options").title,_2e6(_2f3,this));
},onBeforeCollapse:function(){
if(_2f4.onBeforeCollapse){
if(_2f4.onBeforeCollapse.call(this)==false){
return false;
}
}
$(_2f3).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var _2f6=$(this).panel("header");
_2f6.removeClass("accordion-header-selected");
_2f6.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(isNaN(parseInt(opts.height))){
$(_2f3).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
}
if(_2f4.onCollapse){
_2f4.onCollapse.call(this);
}
opts.onUnselect.call(_2f3,$(this).panel("options").title,_2e6(_2f3,this));
}}));
var _2f7=pp.panel("header");
var tool=_2f7.children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:;\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);
t.bind("click",function(){
_2f8(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
if(opts.halign=="left"||opts.halign=="right"){
t.hide();
}
_2f7.click(function(){
_2f8(pp);
return false;
});
function _2f8(p){
var _2f9=p.panel("options");
if(_2f9.collapsible){
var _2fa=_2e6(_2f3,p);
if(_2f9.collapsed){
_2fb(_2f3,_2fa);
}else{
_2fc(_2f3,_2fa);
}
}
};
};
function _2fb(_2fd,_2fe){
var p=_2e9(_2fd,_2fe);
if(!p){
return;
}
_2ff(_2fd);
var opts=$.data(_2fd,"accordion").options;
p.panel("expand",opts.animate);
};
function _2fc(_300,_301){
var p=_2e9(_300,_301);
if(!p){
return;
}
_2ff(_300);
var opts=$.data(_300,"accordion").options;
p.panel("collapse",opts.animate);
};
function _302(_303){
var opts=$.data(_303,"accordion").options;
$(_303).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var p=_2dd(_303,"selected",true);
if(p){
_304(_2e6(_303,p));
}else{
_304(opts.selected);
}
function _304(_305){
var _306=opts.animate;
opts.animate=false;
_2fb(_303,_305);
opts.animate=_306;
};
};
function _2ff(_307){
var _308=$.data(_307,"accordion").panels;
for(var i=0;i<_308.length;i++){
_308[i].stop(true,true);
}
};
function add(_309,_30a){
var _30b=$.data(_309,"accordion");
var opts=_30b.options;
var _30c=_30b.panels;
if(_30a.selected==undefined){
_30a.selected=true;
}
_2ff(_309);
var pp=$("<div></div>").appendTo(_309);
_30c.push(pp);
_2f2(_309,pp,_30a);
_2cf(_309);
opts.onAdd.call(_309,_30a.title,_30c.length-1);
if(_30a.selected){
_2fb(_309,_30c.length-1);
}
};
function _30d(_30e,_30f){
var _310=$.data(_30e,"accordion");
var opts=_310.options;
var _311=_310.panels;
_2ff(_30e);
var _312=_2e9(_30e,_30f);
var _313=_312.panel("options").title;
var _314=_2e6(_30e,_312);
if(!_312){
return;
}
if(opts.onBeforeRemove.call(_30e,_313,_314)==false){
return;
}
_311.splice(_314,1);
_312.panel("destroy");
if(_311.length){
_2cf(_30e);
var curr=_2e4(_30e);
if(!curr){
_2fb(_30e,0);
}
}
opts.onRemove.call(_30e,_313,_314);
};
$.fn.accordion=function(_315,_316){
if(typeof _315=="string"){
return $.fn.accordion.methods[_315](this,_316);
}
_315=_315||{};
return this.each(function(){
var _317=$.data(this,"accordion");
if(_317){
$.extend(_317.options,_315);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_315),accordion:$(this).addClass("accordion"),panels:[]});
init(this);
}
_2ed(this);
_2cf(this);
_302(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_318){
return jq.each(function(){
_2cf(this,_318);
});
},getSelections:function(jq){
return _2e2(jq[0]);
},getSelected:function(jq){
return _2e4(jq[0]);
},getPanel:function(jq,_319){
return _2e9(jq[0],_319);
},getPanelIndex:function(jq,_31a){
return _2e6(jq[0],_31a);
},select:function(jq,_31b){
return jq.each(function(){
_2fb(this,_31b);
});
},unselect:function(jq,_31c){
return jq.each(function(){
_2fc(this,_31c);
});
},add:function(jq,_31d){
return jq.each(function(){
add(this,_31d);
});
},remove:function(jq,_31e){
return jq.each(function(){
_30d(this,_31e);
});
}};
$.fn.accordion.parseOptions=function(_31f){
var t=$(_31f);
return $.extend({},$.parser.parseOptions(_31f,["width","height","halign",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,halign:"top",onSelect:function(_320,_321){
},onUnselect:function(_322,_323){
},onAdd:function(_324,_325){
},onBeforeRemove:function(_326,_327){
},onRemove:function(_328,_329){
}};
})(jQuery);
(function($){
function _32a(c){
var w=0;
$(c).children().each(function(){
w+=$(this).outerWidth(true);
});
return w;
};
function _32b(_32c){
var opts=$.data(_32c,"tabs").options;
if(opts.tabPosition=="left"||opts.tabPosition=="right"||!opts.showHeader){
return;
}
var _32d=$(_32c).children("div.tabs-header");
var tool=_32d.children("div.tabs-tool:not(.tabs-tool-hidden)");
var _32e=_32d.children("div.tabs-scroller-left");
var _32f=_32d.children("div.tabs-scroller-right");
var wrap=_32d.children("div.tabs-wrap");
var _330=_32d.outerHeight();
if(opts.plain){
_330-=_330-_32d.height();
}
tool._outerHeight(_330);
var _331=_32a(_32d.find("ul.tabs"));
var _332=_32d.width()-tool._outerWidth();
if(_331>_332){
_32e.add(_32f).show()._outerHeight(_330);
if(opts.toolPosition=="left"){
tool.css({left:_32e.outerWidth(),right:""});
wrap.css({marginLeft:_32e.outerWidth()+tool._outerWidth(),marginRight:_32f._outerWidth(),width:_332-_32e.outerWidth()-_32f.outerWidth()});
}else{
tool.css({left:"",right:_32f.outerWidth()});
wrap.css({marginLeft:_32e.outerWidth(),marginRight:_32f.outerWidth()+tool._outerWidth(),width:_332-_32e.outerWidth()-_32f.outerWidth()});
}
}else{
_32e.add(_32f).hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_332});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_332});
}
}
};
function _333(_334){
var opts=$.data(_334,"tabs").options;
var _335=$(_334).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_335);
$(opts.tools).show();
}else{
_335.children("div.tabs-tool").remove();
var _336=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_335);
var tr=_336.find("tr");
for(var i=0;i<opts.tools.length;i++){
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_335.children("div.tabs-tool").remove();
}
};
function _337(_338,_339){
var _33a=$.data(_338,"tabs");
var opts=_33a.options;
var cc=$(_338);
if(!opts.doSize){
return;
}
if(_339){
$.extend(opts,{width:_339.width,height:_339.height});
}
cc._size(opts);
var _33b=cc.children("div.tabs-header");
var _33c=cc.children("div.tabs-panels");
var wrap=_33b.find("div.tabs-wrap");
var ul=wrap.find(".tabs");
ul.children("li").removeClass("tabs-first tabs-last");
ul.children("li:first").addClass("tabs-first");
ul.children("li:last").addClass("tabs-last");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_33b._outerWidth(opts.showHeader?opts.headerWidth:0);
_33c._outerWidth(cc.width()-_33b.outerWidth());
_33b.add(_33c)._size("height",isNaN(parseInt(opts.height))?"":cc.height());
wrap._outerWidth(_33b.width());
ul._outerWidth(wrap.width()).css("height","");
}else{
_33b.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display",opts.showHeader?"block":"none");
_33b._outerWidth(cc.width()).css("height","");
if(opts.showHeader){
_33b.css("background-color","");
wrap.css("height","");
}else{
_33b.css("background-color","transparent");
_33b._outerHeight(0);
wrap._outerHeight(0);
}
ul._outerHeight(opts.tabHeight).css("width","");
ul._outerHeight(ul.outerHeight()-ul.height()-1+opts.tabHeight).css("width","");
_33c._size("height",isNaN(parseInt(opts.height))?"":(cc.height()-_33b.outerHeight()));
_33c._size("width",cc.width());
}
if(_33a.tabs.length){
var d1=ul.outerWidth(true)-ul.width();
var li=ul.children("li:first");
var d2=li.outerWidth(true)-li.width();
var _33d=_33b.width()-_33b.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth();
var _33e=Math.floor((_33d-d1-d2*_33a.tabs.length)/_33a.tabs.length);
$.map(_33a.tabs,function(p){
_33f(p,(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0)?_33e:undefined);
});
if(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0){
var _340=_33d-d1-_32a(ul);
_33f(_33a.tabs[_33a.tabs.length-1],_33e+_340);
}
}
_32b(_338);
function _33f(p,_341){
var _342=p.panel("options");
var p_t=_342.tab.find("a.tabs-inner");
var _341=_341?_341:(parseInt(_342.tabWidth||opts.tabWidth||undefined));
if(_341){
p_t._outerWidth(_341);
}else{
p_t.css("width","");
}
p_t._outerHeight(opts.tabHeight);
p_t.css("lineHeight",p_t.height()+"px");
p_t.find(".easyui-fluid:visible").triggerHandler("_resize");
};
};
function _343(_344){
var opts=$.data(_344,"tabs").options;
var tab=_345(_344);
if(tab){
var _346=$(_344).children("div.tabs-panels");
var _347=opts.width=="auto"?"auto":_346.width();
var _348=opts.height=="auto"?"auto":_346.height();
tab.panel("resize",{width:_347,height:_348});
}
};
function _349(_34a){
var tabs=$.data(_34a,"tabs").tabs;
var cc=$(_34a).addClass("tabs-container");
var _34b=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);
cc.children("div").each(function(){
_34b[0].appendChild(this);
});
cc[0].appendChild(_34b[0]);
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_34a);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{disabled:($(this).attr("disabled")?true:undefined),selected:($(this).attr("selected")?true:undefined)});
_358(_34a,opts,$(this));
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_34c){
if($(this).hasClass("easyui-fluid")||_34c){
_337(_34a);
_343(_34a);
}
return false;
});
};
function _34d(_34e){
var _34f=$.data(_34e,"tabs");
var opts=_34f.options;
$(_34e).children("div.tabs-header").unbind().bind("click",function(e){
if($(e.target).hasClass("tabs-scroller-left")){
$(_34e).tabs("scrollBy",-opts.scrollIncrement);
}else{
if($(e.target).hasClass("tabs-scroller-right")){
$(_34e).tabs("scrollBy",opts.scrollIncrement);
}else{
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return false;
}
var a=$(e.target).closest("a.tabs-close");
if(a.length){
_371(_34e,_350(li));
}else{
if(li.length){
var _351=_350(li);
var _352=_34f.tabs[_351].panel("options");
if(_352.collapsible){
_352.closed?_368(_34e,_351):_385(_34e,_351);
}else{
_368(_34e,_351);
}
}
}
return false;
}
}
}).bind("contextmenu",function(e){
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return;
}
if(li.length){
opts.onContextMenu.call(_34e,e,li.find("span.tabs-title").html(),_350(li));
}
});
function _350(li){
var _353=0;
li.parent().children("li").each(function(i){
if(li[0]==this){
_353=i;
return false;
}
});
return _353;
};
};
function _354(_355){
var opts=$.data(_355,"tabs").options;
var _356=$(_355).children("div.tabs-header");
var _357=$(_355).children("div.tabs-panels");
_356.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_357.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_356.insertBefore(_357);
}else{
if(opts.tabPosition=="bottom"){
_356.insertAfter(_357);
_356.addClass("tabs-header-bottom");
_357.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_356.addClass("tabs-header-left");
_357.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_356.addClass("tabs-header-right");
_357.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_356.addClass("tabs-header-plain");
}else{
_356.removeClass("tabs-header-plain");
}
_356.removeClass("tabs-header-narrow").addClass(opts.narrow?"tabs-header-narrow":"");
var tabs=_356.find(".tabs");
tabs.removeClass("tabs-pill").addClass(opts.pill?"tabs-pill":"");
tabs.removeClass("tabs-narrow").addClass(opts.narrow?"tabs-narrow":"");
tabs.removeClass("tabs-justified").addClass(opts.justified?"tabs-justified":"");
if(opts.border==true){
_356.removeClass("tabs-header-noborder");
_357.removeClass("tabs-panels-noborder");
}else{
_356.addClass("tabs-header-noborder");
_357.addClass("tabs-panels-noborder");
}
opts.doSize=true;
};
function _358(_359,_35a,pp){
_35a=_35a||{};
var _35b=$.data(_359,"tabs");
var tabs=_35b.tabs;
if(_35a.index==undefined||_35a.index>tabs.length){
_35a.index=tabs.length;
}
if(_35a.index<0){
_35a.index=0;
}
var ul=$(_359).children("div.tabs-header").find("ul.tabs");
var _35c=$(_359).children("div.tabs-panels");
var tab=$("<li>"+"<a href=\"javascript:;\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>"+"</li>");
if(!pp){
pp=$("<div></div>");
}
if(_35a.index>=tabs.length){
tab.appendTo(ul);
pp.appendTo(_35c);
tabs.push(pp);
}else{
tab.insertBefore(ul.children("li:eq("+_35a.index+")"));
pp.insertBefore(_35c.children("div.panel:eq("+_35a.index+")"));
tabs.splice(_35a.index,0,pp);
}
pp.panel($.extend({},_35a,{tab:tab,border:false,noheader:true,closed:true,doSize:false,iconCls:(_35a.icon?_35a.icon:undefined),onLoad:function(){
if(_35a.onLoad){
_35a.onLoad.apply(this,arguments);
}
_35b.options.onLoad.call(_359,$(this));
},onBeforeOpen:function(){
if(_35a.onBeforeOpen){
if(_35a.onBeforeOpen.call(this)==false){
return false;
}
}
var p=$(_359).tabs("getSelected");
if(p){
if(p[0]!=this){
$(_359).tabs("unselect",_363(_359,p));
p=$(_359).tabs("getSelected");
if(p){
return false;
}
}else{
_343(_359);
return false;
}
}
var _35d=$(this).panel("options");
_35d.tab.addClass("tabs-selected");
var wrap=$(_359).find(">div.tabs-header>div.tabs-wrap");
var left=_35d.tab.position().left;
var _35e=left+_35d.tab.outerWidth();
if(left<0||_35e>wrap.width()){
var _35f=left-(wrap.width()-_35d.tab.width())/2;
$(_359).tabs("scrollBy",_35f);
}else{
$(_359).tabs("scrollBy",0);
}
var _360=$(this).panel("panel");
_360.css("display","block");
_343(_359);
_360.css("display","none");
},onOpen:function(){
if(_35a.onOpen){
_35a.onOpen.call(this);
}
var _361=$(this).panel("options");
_35b.selectHis.push(_361.title);
_35b.options.onSelect.call(_359,_361.title,_363(_359,this));
},onBeforeClose:function(){
if(_35a.onBeforeClose){
if(_35a.onBeforeClose.call(this)==false){
return false;
}
}
$(this).panel("options").tab.removeClass("tabs-selected");
},onClose:function(){
if(_35a.onClose){
_35a.onClose.call(this);
}
var _362=$(this).panel("options");
_35b.options.onUnselect.call(_359,_362.title,_363(_359,this));
}}));
$(_359).tabs("update",{tab:pp,options:pp.panel("options"),type:"header"});
};
function _364(_365,_366){
var _367=$.data(_365,"tabs");
var opts=_367.options;
if(_366.selected==undefined){
_366.selected=true;
}
_358(_365,_366);
opts.onAdd.call(_365,_366.title,_366.index);
if(_366.selected){
_368(_365,_366.index);
}
};
function _369(_36a,_36b){
_36b.type=_36b.type||"all";
var _36c=$.data(_36a,"tabs").selectHis;
var pp=_36b.tab;
var opts=pp.panel("options");
var _36d=opts.title;
$.extend(opts,_36b.options,{iconCls:(_36b.options.icon?_36b.options.icon:undefined)});
if(_36b.type=="all"||_36b.type=="body"){
pp.panel();
}
if(_36b.type=="all"||_36b.type=="header"){
var tab=opts.tab;
if(opts.header){
tab.find(".tabs-inner").html($(opts.header));
}else{
var _36e=tab.find("span.tabs-title");
var _36f=tab.find("span.tabs-icon");
_36e.html(opts.title);
_36f.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_36e.addClass("tabs-closable");
$("<a href=\"javascript:;\" class=\"tabs-close\"></a>").appendTo(tab);
}else{
_36e.removeClass("tabs-closable");
}
if(opts.iconCls){
_36e.addClass("tabs-with-icon");
_36f.addClass(opts.iconCls);
}else{
_36e.removeClass("tabs-with-icon");
}
if(opts.tools){
var _370=tab.find("span.tabs-p-tool");
if(!_370.length){
var _370=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
}
if($.isArray(opts.tools)){
_370.empty();
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:;\"></a>").appendTo(_370);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}else{
$(opts.tools).children().appendTo(_370);
}
var pr=_370.children().length*12;
if(opts.closable){
pr+=8;
_370.css("right","");
}else{
pr-=3;
_370.css("right","5px");
}
_36e.css("padding-right",pr+"px");
}else{
tab.find("span.tabs-p-tool").remove();
_36e.css("padding-right","");
}
}
if(_36d!=opts.title){
for(var i=0;i<_36c.length;i++){
if(_36c[i]==_36d){
_36c[i]=opts.title;
}
}
}
}
if(opts.disabled){
opts.tab.addClass("tabs-disabled");
}else{
opts.tab.removeClass("tabs-disabled");
}
_337(_36a);
$.data(_36a,"tabs").options.onUpdate.call(_36a,opts.title,_363(_36a,pp));
};
function _371(_372,_373){
var opts=$.data(_372,"tabs").options;
var tabs=$.data(_372,"tabs").tabs;
var _374=$.data(_372,"tabs").selectHis;
if(!_375(_372,_373)){
return;
}
var tab=_376(_372,_373);
var _377=tab.panel("options").title;
var _378=_363(_372,tab);
if(opts.onBeforeClose.call(_372,_377,_378)==false){
return;
}
var tab=_376(_372,_373,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_372,_377,_378);
_337(_372);
for(var i=0;i<_374.length;i++){
if(_374[i]==_377){
_374.splice(i,1);
i--;
}
}
var _379=_374.pop();
if(_379){
_368(_372,_379);
}else{
if(tabs.length){
_368(_372,0);
}
}
};
function _376(_37a,_37b,_37c){
var tabs=$.data(_37a,"tabs").tabs;
var tab=null;
if(typeof _37b=="number"){
if(_37b>=0&&_37b<tabs.length){
tab=tabs[_37b];
if(_37c){
tabs.splice(_37b,1);
}
}
}else{
var tmp=$("<span></span>");
for(var i=0;i<tabs.length;i++){
var p=tabs[i];
tmp.html(p.panel("options").title);
if(tmp.text()==_37b){
tab=p;
if(_37c){
tabs.splice(i,1);
}
break;
}
}
tmp.remove();
}
return tab;
};
function _363(_37d,tab){
var tabs=$.data(_37d,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _345(_37e){
var tabs=$.data(_37e,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").tab.hasClass("tabs-selected")){
return tab;
}
}
return null;
};
function _37f(_380){
var _381=$.data(_380,"tabs");
var tabs=_381.tabs;
for(var i=0;i<tabs.length;i++){
var opts=tabs[i].panel("options");
if(opts.selected&&!opts.disabled){
_368(_380,i);
return;
}
}
_368(_380,_381.options.selected);
};
function _368(_382,_383){
var p=_376(_382,_383);
if(p&&!p.is(":visible")){
_384(_382);
if(!p.panel("options").disabled){
p.panel("open");
}
}
};
function _385(_386,_387){
var p=_376(_386,_387);
if(p&&p.is(":visible")){
_384(_386);
p.panel("close");
}
};
function _384(_388){
$(_388).children("div.tabs-panels").each(function(){
$(this).stop(true,true);
});
};
function _375(_389,_38a){
return _376(_389,_38a)!=null;
};
function _38b(_38c,_38d){
var opts=$.data(_38c,"tabs").options;
opts.showHeader=_38d;
$(_38c).tabs("resize");
};
function _38e(_38f,_390){
var tool=$(_38f).find(">.tabs-header>.tabs-tool");
if(_390){
tool.removeClass("tabs-tool-hidden").show();
}else{
tool.addClass("tabs-tool-hidden").hide();
}
$(_38f).tabs("resize").tabs("scrollBy",0);
};
$.fn.tabs=function(_391,_392){
if(typeof _391=="string"){
return $.fn.tabs.methods[_391](this,_392);
}
_391=_391||{};
return this.each(function(){
var _393=$.data(this,"tabs");
if(_393){
$.extend(_393.options,_391);
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_391),tabs:[],selectHis:[]});
_349(this);
}
_333(this);
_354(this);
_337(this);
_34d(this);
_37f(this);
});
};
$.fn.tabs.methods={options:function(jq){
var cc=jq[0];
var opts=$.data(cc,"tabs").options;
var s=_345(cc);
opts.selected=s?_363(cc,s):-1;
return opts;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq,_394){
return jq.each(function(){
_337(this,_394);
_343(this);
});
},add:function(jq,_395){
return jq.each(function(){
_364(this,_395);
});
},close:function(jq,_396){
return jq.each(function(){
_371(this,_396);
});
},getTab:function(jq,_397){
return _376(jq[0],_397);
},getTabIndex:function(jq,tab){
return _363(jq[0],tab);
},getSelected:function(jq){
return _345(jq[0]);
},select:function(jq,_398){
return jq.each(function(){
_368(this,_398);
});
},unselect:function(jq,_399){
return jq.each(function(){
_385(this,_399);
});
},exists:function(jq,_39a){
return _375(jq[0],_39a);
},update:function(jq,_39b){
return jq.each(function(){
_369(this,_39b);
});
},enableTab:function(jq,_39c){
return jq.each(function(){
var opts=$(this).tabs("getTab",_39c).panel("options");
opts.tab.removeClass("tabs-disabled");
opts.disabled=false;
});
},disableTab:function(jq,_39d){
return jq.each(function(){
var opts=$(this).tabs("getTab",_39d).panel("options");
opts.tab.addClass("tabs-disabled");
opts.disabled=true;
});
},showHeader:function(jq){
return jq.each(function(){
_38b(this,true);
});
},hideHeader:function(jq){
return jq.each(function(){
_38b(this,false);
});
},showTool:function(jq){
return jq.each(function(){
_38e(this,true);
});
},hideTool:function(jq){
return jq.each(function(){
_38e(this,false);
});
},scrollBy:function(jq,_39e){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_39e,_39f());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _39f(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_3a0){
return $.extend({},$.parser.parseOptions(_3a0,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:true,plain:false,fit:false,border:true,justified:false,narrow:false,pill:false,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_3a1){
},onSelect:function(_3a2,_3a3){
},onUnselect:function(_3a4,_3a5){
},onBeforeClose:function(_3a6,_3a7){
},onClose:function(_3a8,_3a9){
},onAdd:function(_3aa,_3ab){
},onUpdate:function(_3ac,_3ad){
},onContextMenu:function(e,_3ae,_3af){
}};
})(jQuery);
(function($){
var _3b0=false;
function _3b1(_3b2,_3b3){
var _3b4=$.data(_3b2,"layout");
var opts=_3b4.options;
var _3b5=_3b4.panels;
var cc=$(_3b2);
if(_3b3){
$.extend(opts,{width:_3b3.width,height:_3b3.height});
}
if(_3b2.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(opts);
}
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
_3b6(_3b7(_3b5.expandNorth)?_3b5.expandNorth:_3b5.north,"n");
_3b6(_3b7(_3b5.expandSouth)?_3b5.expandSouth:_3b5.south,"s");
_3b8(_3b7(_3b5.expandEast)?_3b5.expandEast:_3b5.east,"e");
_3b8(_3b7(_3b5.expandWest)?_3b5.expandWest:_3b5.west,"w");
_3b5.center.panel("resize",cpos);
function _3b6(pp,type){
if(!pp.length||!_3b7(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:opts.height});
var _3b9=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(type=="n"?0:cc.height()-_3b9)});
cpos.height-=_3b9;
if(type=="n"){
cpos.top+=_3b9;
if(!opts.split&&opts.border){
cpos.top--;
}
}
if(!opts.split&&opts.border){
cpos.height++;
}
};
function _3b8(pp,type){
if(!pp.length||!_3b7(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:opts.width,height:cpos.height});
var _3ba=pp.panel("panel").outerWidth();
pp.panel("move",{left:(type=="e"?cc.width()-_3ba:0),top:cpos.top});
cpos.width-=_3ba;
if(type=="w"){
cpos.left+=_3ba;
if(!opts.split&&opts.border){
cpos.left--;
}
}
if(!opts.split&&opts.border){
cpos.width++;
}
};
};
function init(_3bb){
var cc=$(_3bb);
cc.addClass("layout");
function _3bc(el){
var _3bd=$.fn.layout.parsePanelOptions(el);
if("north,south,east,west,center".indexOf(_3bd.region)>=0){
_3c0(_3bb,_3bd,el);
}
};
var opts=cc.layout("options");
var _3be=opts.onAdd;
opts.onAdd=function(){
};
cc.find(">div,>form>div").each(function(){
_3bc(this);
});
opts.onAdd=_3be;
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_3bf){
if($(this).hasClass("easyui-fluid")||_3bf){
_3b1(_3bb);
}
return false;
});
};
function _3c0(_3c1,_3c2,el){
_3c2.region=_3c2.region||"center";
var _3c3=$.data(_3c1,"layout").panels;
var cc=$(_3c1);
var dir=_3c2.region;
if(_3c3[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _3c4=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,onOpen:function(){
var tool=$(this).panel("header").children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var _3c5={north:"up",south:"down",east:"right",west:"left"};
if(!_3c5[dir]){
return;
}
var _3c6="layout-button-"+_3c5[dir];
var t=tool.children("a."+_3c6);
if(!t.length){
t=$("<a href=\"javascript:;\"></a>").addClass(_3c6).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_3dd(_3c1,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_3c2,{cls:((_3c2.cls||"")+" layout-panel layout-panel-"+dir),bodyCls:((_3c2.bodyCls||"")+" layout-body")});
pp.panel(_3c4);
_3c3[dir]=pp;
var _3c7={north:"s",south:"n",east:"w",west:"e"};
var _3c8=pp.panel("panel");
if(pp.panel("options").split){
_3c8.addClass("layout-split-"+dir);
}
_3c8.resizable($.extend({},{handles:(_3c7[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_3b0=true;
if(dir=="north"||dir=="south"){
var _3c9=$(">div.layout-split-proxy-v",_3c1);
}else{
var _3c9=$(">div.layout-split-proxy-h",_3c1);
}
var top=0,left=0,_3ca=0,_3cb=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_3c8.css("top"))+_3c8.outerHeight()-_3c9.height();
pos.left=parseInt(_3c8.css("left"));
pos.width=_3c8.outerWidth();
pos.height=_3c9.height();
}else{
if(dir=="south"){
pos.top=parseInt(_3c8.css("top"));
pos.left=parseInt(_3c8.css("left"));
pos.width=_3c8.outerWidth();
pos.height=_3c9.height();
}else{
if(dir=="east"){
pos.top=parseInt(_3c8.css("top"))||0;
pos.left=parseInt(_3c8.css("left"))||0;
pos.width=_3c9.width();
pos.height=_3c8.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_3c8.css("top"))||0;
pos.left=_3c8.outerWidth()-_3c9.width();
pos.width=_3c9.width();
pos.height=_3c8.outerHeight();
}
}
}
}
_3c9.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _3cc=_3cd(this);
$(this).resizable("options").maxHeight=_3cc;
var _3ce=$(">div.layout-split-proxy-v",_3c1);
var top=dir=="north"?e.data.height-_3ce.height():$(_3c1).height()-e.data.height;
_3ce.css("top",top);
}else{
var _3cf=_3cd(this);
$(this).resizable("options").maxWidth=_3cf;
var _3ce=$(">div.layout-split-proxy-h",_3c1);
var left=dir=="west"?e.data.width-_3ce.width():$(_3c1).width()-e.data.width;
_3ce.css("left",left);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_3b1(_3c1);
_3b0=false;
cc.find(">div.layout-mask").remove();
}},_3c2));
cc.layout("options").onAdd.call(_3c1,dir);
function _3cd(p){
var _3d0="expand"+dir.substring(0,1).toUpperCase()+dir.substring(1);
var _3d1=_3c3["center"];
var _3d2=(dir=="north"||dir=="south")?"minHeight":"minWidth";
var _3d3=(dir=="north"||dir=="south")?"maxHeight":"maxWidth";
var _3d4=(dir=="north"||dir=="south")?"_outerHeight":"_outerWidth";
var _3d5=$.parser.parseValue(_3d3,_3c3[dir].panel("options")[_3d3],$(_3c1));
var _3d6=$.parser.parseValue(_3d2,_3d1.panel("options")[_3d2],$(_3c1));
var _3d7=_3d1.panel("panel")[_3d4]()-_3d6;
if(_3b7(_3c3[_3d0])){
_3d7+=_3c3[_3d0][_3d4]()-1;
}else{
_3d7+=$(p)[_3d4]();
}
if(_3d7>_3d5){
_3d7=_3d5;
}
return _3d7;
};
};
function _3d8(_3d9,_3da){
var _3db=$.data(_3d9,"layout").panels;
if(_3db[_3da].length){
_3db[_3da].panel("destroy");
_3db[_3da]=$();
var _3dc="expand"+_3da.substring(0,1).toUpperCase()+_3da.substring(1);
if(_3db[_3dc]){
_3db[_3dc].panel("destroy");
_3db[_3dc]=undefined;
}
$(_3d9).layout("options").onRemove.call(_3d9,_3da);
}
};
function _3dd(_3de,_3df,_3e0){
if(_3e0==undefined){
_3e0="normal";
}
var _3e1=$.data(_3de,"layout").panels;
var p=_3e1[_3df];
var _3e2=p.panel("options");
if(_3e2.onBeforeCollapse.call(p)==false){
return;
}
var _3e3="expand"+_3df.substring(0,1).toUpperCase()+_3df.substring(1);
if(!_3e1[_3e3]){
_3e1[_3e3]=_3e4(_3df);
var ep=_3e1[_3e3].panel("panel");
if(!_3e2.expandMode){
ep.css("cursor","default");
}else{
ep.bind("click",function(){
if(_3e2.expandMode=="dock"){
_3f0(_3de,_3df);
}else{
p.panel("expand",false).panel("open");
var _3e5=_3e6();
p.panel("resize",_3e5.collapse);
p.panel("panel").animate(_3e5.expand,function(){
$(this).unbind(".layout").bind("mouseleave.layout",{region:_3df},function(e){
if(_3b0==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_3dd(_3de,e.data.region);
});
$(_3de).layout("options").onExpand.call(_3de,_3df);
});
}
return false;
});
}
}
var _3e7=_3e6();
if(!_3b7(_3e1[_3e3])){
_3e1.center.panel("resize",_3e7.resizeC);
}
p.panel("panel").animate(_3e7.collapse,_3e0,function(){
p.panel("collapse",false).panel("close");
_3e1[_3e3].panel("open").panel("resize",_3e7.expandP);
$(this).unbind(".layout");
$(_3de).layout("options").onCollapse.call(_3de,_3df);
});
function _3e4(dir){
var _3e8={"east":"left","west":"right","north":"down","south":"up"};
var isns=(_3e2.region=="north"||_3e2.region=="south");
var icon="layout-button-"+_3e8[dir];
var p=$("<div></div>").appendTo(_3de);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",titleDirection:_3e2.titleDirection,iconCls:(_3e2.hideCollapsedContent?null:_3e2.iconCls),closed:true,minWidth:0,minHeight:0,doSize:false,region:_3e2.region,collapsedSize:_3e2.collapsedSize,noheader:(!isns&&_3e2.hideExpandTool),tools:((isns&&_3e2.hideExpandTool)?null:[{iconCls:icon,handler:function(){
_3f0(_3de,_3df);
return false;
}}]),onResize:function(){
var _3e9=$(this).children(".layout-expand-title");
if(_3e9.length){
_3e9._outerWidth($(this).height());
var left=($(this).width()-Math.min(_3e9._outerWidth(),_3e9._outerHeight()))/2;
var top=Math.max(_3e9._outerWidth(),_3e9._outerHeight());
if(_3e9.hasClass("layout-expand-title-down")){
left+=Math.min(_3e9._outerWidth(),_3e9._outerHeight());
top=0;
}
_3e9.css({left:(left+"px"),top:(top+"px")});
}
}}));
if(!_3e2.hideCollapsedContent){
var _3ea=typeof _3e2.collapsedContent=="function"?_3e2.collapsedContent.call(p[0],_3e2.title):_3e2.collapsedContent;
isns?p.panel("setTitle",_3ea):p.html(_3ea);
}
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _3e6(){
var cc=$(_3de);
var _3eb=_3e1.center.panel("options");
var _3ec=_3e2.collapsedSize;
if(_3df=="east"){
var _3ed=p.panel("panel")._outerWidth();
var _3ee=_3eb.width+_3ed-_3ec;
if(_3e2.split||!_3e2.border){
_3ee++;
}
return {resizeC:{width:_3ee},expand:{left:cc.width()-_3ed},expandP:{top:_3eb.top,left:cc.width()-_3ec,width:_3ec,height:_3eb.height},collapse:{left:cc.width(),top:_3eb.top,height:_3eb.height}};
}else{
if(_3df=="west"){
var _3ed=p.panel("panel")._outerWidth();
var _3ee=_3eb.width+_3ed-_3ec;
if(_3e2.split||!_3e2.border){
_3ee++;
}
return {resizeC:{width:_3ee,left:_3ec-1},expand:{left:0},expandP:{left:0,top:_3eb.top,width:_3ec,height:_3eb.height},collapse:{left:-_3ed,top:_3eb.top,height:_3eb.height}};
}else{
if(_3df=="north"){
var _3ef=p.panel("panel")._outerHeight();
var hh=_3eb.height;
if(!_3b7(_3e1.expandNorth)){
hh+=_3ef-_3ec+((_3e2.split||!_3e2.border)?1:0);
}
_3e1.east.add(_3e1.west).add(_3e1.expandEast).add(_3e1.expandWest).panel("resize",{top:_3ec-1,height:hh});
return {resizeC:{top:_3ec-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_3ec},collapse:{top:-_3ef,width:cc.width()}};
}else{
if(_3df=="south"){
var _3ef=p.panel("panel")._outerHeight();
var hh=_3eb.height;
if(!_3b7(_3e1.expandSouth)){
hh+=_3ef-_3ec+((_3e2.split||!_3e2.border)?1:0);
}
_3e1.east.add(_3e1.west).add(_3e1.expandEast).add(_3e1.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_3ef},expandP:{top:cc.height()-_3ec,left:0,width:cc.width(),height:_3ec},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _3f0(_3f1,_3f2){
var _3f3=$.data(_3f1,"layout").panels;
var p=_3f3[_3f2];
var _3f4=p.panel("options");
if(_3f4.onBeforeExpand.call(p)==false){
return;
}
var _3f5="expand"+_3f2.substring(0,1).toUpperCase()+_3f2.substring(1);
if(_3f3[_3f5]){
_3f3[_3f5].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _3f6=_3f7();
p.panel("resize",_3f6.collapse);
p.panel("panel").animate(_3f6.expand,function(){
_3b1(_3f1);
$(_3f1).layout("options").onExpand.call(_3f1,_3f2);
});
}
function _3f7(){
var cc=$(_3f1);
var _3f8=_3f3.center.panel("options");
if(_3f2=="east"&&_3f3.expandEast){
return {collapse:{left:cc.width(),top:_3f8.top,height:_3f8.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_3f2=="west"&&_3f3.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_3f8.top,height:_3f8.height},expand:{left:0}};
}else{
if(_3f2=="north"&&_3f3.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_3f2=="south"&&_3f3.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _3b7(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _3f9(_3fa){
var _3fb=$.data(_3fa,"layout");
var opts=_3fb.options;
var _3fc=_3fb.panels;
var _3fd=opts.onCollapse;
opts.onCollapse=function(){
};
_3fe("east");
_3fe("west");
_3fe("north");
_3fe("south");
opts.onCollapse=_3fd;
function _3fe(_3ff){
var p=_3fc[_3ff];
if(p.length&&p.panel("options").collapsed){
_3dd(_3fa,_3ff,0);
}
};
};
function _400(_401,_402,_403){
var p=$(_401).layout("panel",_402);
p.panel("options").split=_403;
var cls="layout-split-"+_402;
var _404=p.panel("panel").removeClass(cls);
if(_403){
_404.addClass(cls);
}
_404.resizable({disabled:(!_403)});
_3b1(_401);
};
$.fn.layout=function(_405,_406){
if(typeof _405=="string"){
return $.fn.layout.methods[_405](this,_406);
}
_405=_405||{};
return this.each(function(){
var _407=$.data(this,"layout");
if(_407){
$.extend(_407.options,_405);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_405);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
}
_3b1(this);
_3f9(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_408){
return jq.each(function(){
_3b1(this,_408);
});
},panel:function(jq,_409){
return $.data(jq[0],"layout").panels[_409];
},collapse:function(jq,_40a){
return jq.each(function(){
_3dd(this,_40a);
});
},expand:function(jq,_40b){
return jq.each(function(){
_3f0(this,_40b);
});
},add:function(jq,_40c){
return jq.each(function(){
_3c0(this,_40c);
_3b1(this);
if($(this).layout("panel",_40c.region).panel("options").collapsed){
_3dd(this,_40c.region,0);
}
});
},remove:function(jq,_40d){
return jq.each(function(){
_3d8(this,_40d);
_3b1(this);
});
},split:function(jq,_40e){
return jq.each(function(){
_400(this,_40e,true);
});
},unsplit:function(jq,_40f){
return jq.each(function(){
_400(this,_40f,false);
});
}};
$.fn.layout.parseOptions=function(_410){
return $.extend({},$.parser.parseOptions(_410,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false,onExpand:function(_411){
},onCollapse:function(_412){
},onAdd:function(_413){
},onRemove:function(_414){
}};
$.fn.layout.parsePanelOptions=function(_415){
var t=$(_415);
return $.extend({},$.fn.panel.parseOptions(_415),$.parser.parseOptions(_415,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,expandMode:"float",hideExpandTool:false,hideCollapsedContent:true,collapsedContent:function(_416){
var p=$(this);
var opts=p.panel("options");
if(opts.region=="north"||opts.region=="south"){
return _416;
}
var cc=[];
if(opts.iconCls){
cc.push("<div class=\"panel-icon "+opts.iconCls+"\"></div>");
}
cc.push("<div class=\"panel-title layout-expand-title");
cc.push(" layout-expand-title-"+opts.titleDirection);
cc.push(opts.iconCls?" layout-expand-with-icon":"");
cc.push("\">");
cc.push(_416);
cc.push("</div>");
return cc.join("");
},minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var m=$(e.target).closest("div.menu,div.combo-p");
if(m.length){
return;
}
$("body>div.menu-top:visible").not(".menu-inline").menu("hide");
_417($("body>div.menu:visible").not(".menu-inline"));
});
});
function init(_418){
var opts=$.data(_418,"menu").options;
$(_418).addClass("menu-top");
opts.inline?$(_418).addClass("menu-inline"):$(_418).appendTo("body");
$(_418).bind("_resize",function(e,_419){
if($(this).hasClass("easyui-fluid")||_419){
$(_418).menu("resize",_418);
}
return false;
});
var _41a=_41b($(_418));
for(var i=0;i<_41a.length;i++){
_41e(_418,_41a[i]);
}
function _41b(menu){
var _41c=[];
menu.addClass("menu");
_41c.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _41d=$(this).children("div");
if(_41d.length){
_41d.appendTo("body");
this.submenu=_41d;
var mm=_41b(_41d);
_41c=_41c.concat(mm);
}
});
}
return _41c;
};
};
function _41e(_41f,div){
var menu=$(div).addClass("menu");
if(!menu.data("menu")){
menu.data("menu",{options:$.parser.parseOptions(menu[0],["width","height"])});
}
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
_420(_41f,this);
});
$("<div class=\"menu-line\"></div>").prependTo(menu);
}
_421(_41f,menu);
if(!menu.hasClass("menu-inline")){
menu.hide();
}
_422(_41f,menu);
};
function _420(_423,div,_424){
var item=$(div);
var _425=$.extend({},$.parser.parseOptions(item[0],["id","name","iconCls","href",{separator:"boolean"}]),{disabled:(item.attr("disabled")?true:undefined),text:$.trim(item.html()),onclick:item[0].onclick},_424||{});
_425.onclick=_425.onclick||_425.handler||null;
item.data("menuitem",{options:_425});
if(_425.separator){
item.addClass("menu-sep");
}
if(!item.hasClass("menu-sep")){
item.addClass("menu-item");
item.empty().append($("<div class=\"menu-text\"></div>").html(_425.text));
if(_425.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_425.iconCls).appendTo(item);
}
if(_425.id){
item.attr("id",_425.id);
}
if(_425.onclick){
if(typeof _425.onclick=="string"){
item.attr("onclick",_425.onclick);
}else{
item[0].onclick=eval(_425.onclick);
}
}
if(_425.disabled){
_426(_423,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
}
};
function _421(_427,menu){
var opts=$.data(_427,"menu").options;
var _428=menu.attr("style")||"";
var _429=menu.is(":visible");
menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});
menu.find(".menu-item").each(function(){
$(this)._outerHeight(opts.itemHeight);
$(this).find(".menu-text").css({height:(opts.itemHeight-2)+"px",lineHeight:(opts.itemHeight-2)+"px"});
});
menu.removeClass("menu-noline").addClass(opts.noline?"menu-noline":"");
var _42a=menu.data("menu").options;
var _42b=_42a.width;
var _42c=_42a.height;
if(isNaN(parseInt(_42b))){
_42b=0;
menu.find("div.menu-text").each(function(){
if(_42b<$(this).outerWidth()){
_42b=$(this).outerWidth();
}
});
_42b=_42b?_42b+40:"";
}
var _42d=menu.outerHeight();
if(isNaN(parseInt(_42c))){
_42c=_42d;
if(menu.hasClass("menu-top")&&opts.alignTo){
var at=$(opts.alignTo);
var h1=at.offset().top-$(document).scrollTop();
var h2=$(window)._outerHeight()+$(document).scrollTop()-at.offset().top-at._outerHeight();
_42c=Math.min(_42c,Math.max(h1,h2));
}else{
if(_42c>$(window)._outerHeight()){
_42c=$(window).height();
}
}
}
menu.attr("style",_428);
menu.show();
menu._size($.extend({},_42a,{width:_42b,height:_42c,minWidth:_42a.minWidth||opts.minWidth,maxWidth:_42a.maxWidth||opts.maxWidth}));
menu.find(".easyui-fluid").triggerHandler("_resize",[true]);
menu.css("overflow",menu.outerHeight()<_42d?"auto":"hidden");
menu.children("div.menu-line")._outerHeight(_42d-2);
if(!_429){
menu.hide();
}
};
function _422(_42e,menu){
var _42f=$.data(_42e,"menu");
var opts=_42f.options;
menu.unbind(".menu");
for(var _430 in opts.events){
menu.bind(_430+".menu",{target:_42e},opts.events[_430]);
}
};
function _431(e){
var _432=e.data.target;
var _433=$.data(_432,"menu");
if(_433.timer){
clearTimeout(_433.timer);
_433.timer=null;
}
};
function _434(e){
var _435=e.data.target;
var _436=$.data(_435,"menu");
if(_436.options.hideOnUnhover){
_436.timer=setTimeout(function(){
_437(_435,$(_435).hasClass("menu-inline"));
},_436.options.duration);
}
};
function _438(e){
var _439=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
item.siblings().each(function(){
if(this.submenu){
_417(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if(item.hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _43a=item[0].submenu;
if(_43a){
$(_439).menu("show",{menu:_43a,parent:item});
}
}
};
function _43b(e){
var item=$(e.target).closest(".menu-item");
if(item.length){
item.removeClass("menu-active menu-active-disabled");
var _43c=item[0].submenu;
if(_43c){
if(e.pageX>=parseInt(_43c.css("left"))){
item.addClass("menu-active");
}else{
_417(_43c);
}
}else{
item.removeClass("menu-active");
}
}
};
function _43d(e){
var _43e=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
var opts=$(_43e).data("menu").options;
var _43f=item.data("menuitem").options;
if(_43f.disabled){
return;
}
if(!item[0].submenu){
_437(_43e,opts.inline);
if(_43f.href){
location.href=_43f.href;
}
}
item.trigger("mouseenter");
opts.onClick.call(_43e,$(_43e).menu("getItem",item[0]));
}
};
function _437(_440,_441){
var _442=$.data(_440,"menu");
if(_442){
if($(_440).is(":visible")){
_417($(_440));
if(_441){
$(_440).show();
}else{
_442.options.onHide.call(_440);
}
}
}
return false;
};
function _443(_444,_445){
_445=_445||{};
var left,top;
var opts=$.data(_444,"menu").options;
var menu=$(_445.menu||_444);
$(_444).menu("resize",menu[0]);
if(menu.hasClass("menu-top")){
$.extend(opts,_445);
left=opts.left;
top=opts.top;
if(opts.alignTo){
var at=$(opts.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
if(opts.align=="right"){
left+=at.outerWidth()-menu.outerWidth();
}
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(left<0){
left=0;
}
top=_446(top,opts.alignTo);
}else{
var _447=_445.parent;
left=_447.offset().left+_447.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_447.offset().left-menu.outerWidth()+2;
}
top=_446(_447.offset().top-3);
}
function _446(top,_448){
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
if(_448){
top=$(_448).offset().top-menu._outerHeight();
}else{
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight();
}
}
if(top<0){
top=0;
}
return top;
};
menu.css(opts.position.call(_444,menu[0],left,top));
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:(menu.hasClass("menu-inline")?"none":"block"),zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
opts.onShow.call(_444);
}
});
};
function _417(menu){
if(menu&&menu.length){
_449(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_417(this.submenu);
}
$(this).removeClass("menu-active");
});
}
function _449(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _44a(_44b,text){
var _44c=null;
var tmp=$("<div></div>");
function find(menu){
menu.children("div.menu-item").each(function(){
var item=$(_44b).menu("getItem",this);
var s=tmp.empty().html(item.text).text();
if(text==$.trim(s)){
_44c=item;
}else{
if(this.submenu&&!_44c){
find(this.submenu);
}
}
});
};
find($(_44b));
tmp.remove();
return _44c;
};
function _426(_44d,_44e,_44f){
var t=$(_44e);
if(t.hasClass("menu-item")){
var opts=t.data("menuitem").options;
opts.disabled=_44f;
if(_44f){
t.addClass("menu-item-disabled");
t[0].onclick=null;
}else{
t.removeClass("menu-item-disabled");
t[0].onclick=opts.onclick;
}
}
};
function _450(_451,_452){
var opts=$.data(_451,"menu").options;
var menu=$(_451);
if(_452.parent){
if(!_452.parent.submenu){
var _453=$("<div></div>").appendTo("body");
_452.parent.submenu=_453;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_452.parent);
_41e(_451,_453);
}
menu=_452.parent.submenu;
}
var div=$("<div></div>").appendTo(menu);
_420(_451,div,_452);
};
function _454(_455,_456){
function _457(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_457(this);
});
var _458=el.submenu[0].shadow;
if(_458){
_458.remove();
}
el.submenu.remove();
}
$(el).remove();
};
_457(_456);
};
function _459(_45a,_45b,_45c){
var menu=$(_45b).parent();
if(_45c){
$(_45b).show();
}else{
$(_45b).hide();
}
_421(_45a,menu);
};
function _45d(_45e){
$(_45e).children("div.menu-item").each(function(){
_454(_45e,this);
});
if(_45e.shadow){
_45e.shadow.remove();
}
$(_45e).remove();
};
$.fn.menu=function(_45f,_460){
if(typeof _45f=="string"){
return $.fn.menu.methods[_45f](this,_460);
}
_45f=_45f||{};
return this.each(function(){
var _461=$.data(this,"menu");
if(_461){
$.extend(_461.options,_45f);
}else{
_461=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_45f)});
init(this);
}
$(this).css({left:_461.options.left,top:_461.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_443(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_437(this);
});
},destroy:function(jq){
return jq.each(function(){
_45d(this);
});
},setText:function(jq,_462){
return jq.each(function(){
var item=$(_462.target).data("menuitem").options;
item.text=_462.text;
$(_462.target).children("div.menu-text").html(_462.text);
});
},setIcon:function(jq,_463){
return jq.each(function(){
var item=$(_463.target).data("menuitem").options;
item.iconCls=_463.iconCls;
$(_463.target).children("div.menu-icon").remove();
if(_463.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_463.iconCls).appendTo(_463.target);
}
});
},getItem:function(jq,_464){
var item=$(_464).data("menuitem").options;
return $.extend({},item,{target:$(_464)[0]});
},findItem:function(jq,text){
return _44a(jq[0],text);
},appendItem:function(jq,_465){
return jq.each(function(){
_450(this,_465);
});
},removeItem:function(jq,_466){
return jq.each(function(){
_454(this,_466);
});
},enableItem:function(jq,_467){
return jq.each(function(){
_426(this,_467,false);
});
},disableItem:function(jq,_468){
return jq.each(function(){
_426(this,_468,true);
});
},showItem:function(jq,_469){
return jq.each(function(){
_459(this,_469,true);
});
},hideItem:function(jq,_46a){
return jq.each(function(){
_459(this,_46a,false);
});
},resize:function(jq,_46b){
return jq.each(function(){
_421(this,_46b?$(_46b):$(this));
});
}};
$.fn.menu.parseOptions=function(_46c){
return $.extend({},$.parser.parseOptions(_46c,[{minWidth:"number",itemHeight:"number",duration:"number",hideOnUnhover:"boolean"},{fit:"boolean",inline:"boolean",noline:"boolean"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:120,itemHeight:22,duration:100,hideOnUnhover:true,inline:false,fit:false,noline:false,events:{mouseenter:_431,mouseleave:_434,mouseover:_438,mouseout:_43b,click:_43d},position:function(_46d,left,top){
return {left:left,top:top};
},onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
function init(_46e){
var opts=$.data(_46e,"menubutton").options;
var btn=$(_46e);
btn.linkbutton(opts);
if(opts.hasDownArrow){
btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");
btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);
var _46f=btn.find(".l-btn-left");
$("<span></span>").addClass(opts.cls.arrow).appendTo(_46f);
$("<span></span>").addClass("m-btn-line").appendTo(_46f);
}
$(_46e).menubutton("resize");
if(opts.menu){
$(opts.menu).menu({duration:opts.duration});
var _470=$(opts.menu).menu("options");
var _471=_470.onShow;
var _472=_470.onHide;
$.extend(_470,{onShow:function(){
var _473=$(this).menu("options");
var btn=$(_473.alignTo);
var opts=btn.menubutton("options");
btn.addClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_471.call(this);
},onHide:function(){
var _474=$(this).menu("options");
var btn=$(_474.alignTo);
var opts=btn.menubutton("options");
btn.removeClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_472.call(this);
}});
}
};
function _475(_476){
var opts=$.data(_476,"menubutton").options;
var btn=$(_476);
var t=btn.find("."+opts.cls.trigger);
if(!t.length){
t=btn;
}
t.unbind(".menubutton");
var _477=null;
t.bind("click.menubutton",function(){
if(!_478()){
_479(_476);
return false;
}
}).bind("mouseenter.menubutton",function(){
if(!_478()){
_477=setTimeout(function(){
_479(_476);
},opts.duration);
return false;
}
}).bind("mouseleave.menubutton",function(){
if(_477){
clearTimeout(_477);
}
$(opts.menu).triggerHandler("mouseleave");
});
function _478(){
return $(_476).linkbutton("options").disabled;
};
};
function _479(_47a){
var opts=$(_47a).menubutton("options");
if(opts.disabled||!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
var btn=$(_47a);
var mm=$(opts.menu);
if(mm.length){
mm.menu("options").alignTo=btn;
mm.menu("show",{alignTo:btn,align:opts.menuAlign});
}
btn.blur();
};
$.fn.menubutton=function(_47b,_47c){
if(typeof _47b=="string"){
var _47d=$.fn.menubutton.methods[_47b];
if(_47d){
return _47d(this,_47c);
}else{
return this.linkbutton(_47b,_47c);
}
}
_47b=_47b||{};
return this.each(function(){
var _47e=$.data(this,"menubutton");
if(_47e){
$.extend(_47e.options,_47b);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_47b)});
$(this).removeAttr("disabled");
}
init(this);
_475(this);
});
};
$.fn.menubutton.methods={options:function(jq){
var _47f=jq.linkbutton("options");
return $.extend($.data(jq[0],"menubutton").options,{toggle:_47f.toggle,selected:_47f.selected,disabled:_47f.disabled});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_480){
var t=$(_480);
return $.extend({},$.fn.linkbutton.parseOptions(_480),$.parser.parseOptions(_480,["menu",{plain:"boolean",hasDownArrow:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,hasDownArrow:true,menu:null,menuAlign:"left",duration:100,cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});
})(jQuery);
(function($){
function init(_481){
var opts=$.data(_481,"splitbutton").options;
$(_481).menubutton(opts);
$(_481).addClass("s-btn");
};
$.fn.splitbutton=function(_482,_483){
if(typeof _482=="string"){
var _484=$.fn.splitbutton.methods[_482];
if(_484){
return _484(this,_483);
}else{
return this.menubutton(_482,_483);
}
}
_482=_482||{};
return this.each(function(){
var _485=$.data(this,"splitbutton");
if(_485){
$.extend(_485.options,_482);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_482)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
var _486=jq.menubutton("options");
var _487=$.data(jq[0],"splitbutton").options;
$.extend(_487,{disabled:_486.disabled,toggle:_486.toggle,selected:_486.selected});
return _487;
}};
$.fn.splitbutton.parseOptions=function(_488){
var t=$(_488);
return $.extend({},$.fn.linkbutton.parseOptions(_488),$.parser.parseOptions(_488,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});
})(jQuery);
(function($){
function init(_489){
var _48a=$("<span class=\"switchbutton\">"+"<span class=\"switchbutton-inner\">"+"<span class=\"switchbutton-on\"></span>"+"<span class=\"switchbutton-handle\"></span>"+"<span class=\"switchbutton-off\"></span>"+"<input class=\"switchbutton-value\" type=\"checkbox\">"+"</span>"+"</span>").insertAfter(_489);
var t=$(_489);
t.addClass("switchbutton-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("switchbuttonName",name);
_48a.find(".switchbutton-value").attr("name",name);
}
_48a.bind("_resize",function(e,_48b){
if($(this).hasClass("easyui-fluid")||_48b){
_48c(_489);
}
return false;
});
return _48a;
};
function _48c(_48d,_48e){
var _48f=$.data(_48d,"switchbutton");
var opts=_48f.options;
var _490=_48f.switchbutton;
if(_48e){
$.extend(opts,_48e);
}
var _491=_490.is(":visible");
if(!_491){
_490.appendTo("body");
}
_490._size(opts);
var w=_490.width();
var h=_490.height();
var w=_490.outerWidth();
var h=_490.outerHeight();
var _492=parseInt(opts.handleWidth)||_490.height();
var _493=w*2-_492;
_490.find(".switchbutton-inner").css({width:_493+"px",height:h+"px",lineHeight:h+"px"});
_490.find(".switchbutton-handle")._outerWidth(_492)._outerHeight(h).css({marginLeft:-_492/2+"px"});
_490.find(".switchbutton-on").css({width:(w-_492/2)+"px",textIndent:(opts.reversed?"":"-")+_492/2+"px"});
_490.find(".switchbutton-off").css({width:(w-_492/2)+"px",textIndent:(opts.reversed?"-":"")+_492/2+"px"});
opts.marginWidth=w-_492;
_494(_48d,opts.checked,false);
if(!_491){
_490.insertAfter(_48d);
}
};
function _495(_496){
var _497=$.data(_496,"switchbutton");
var opts=_497.options;
var _498=_497.switchbutton;
var _499=_498.find(".switchbutton-inner");
var on=_499.find(".switchbutton-on").html(opts.onText);
var off=_499.find(".switchbutton-off").html(opts.offText);
var _49a=_499.find(".switchbutton-handle").html(opts.handleText);
if(opts.reversed){
off.prependTo(_499);
on.insertAfter(_49a);
}else{
on.prependTo(_499);
off.insertAfter(_49a);
}
_498.find(".switchbutton-value")._propAttr("checked",opts.checked);
_498.removeClass("switchbutton-disabled").addClass(opts.disabled?"switchbutton-disabled":"");
_498.removeClass("switchbutton-reversed").addClass(opts.reversed?"switchbutton-reversed":"");
_494(_496,opts.checked);
_49b(_496,opts.readonly);
$(_496).switchbutton("setValue",opts.value);
};
function _494(_49c,_49d,_49e){
var _49f=$.data(_49c,"switchbutton");
var opts=_49f.options;
opts.checked=_49d;
var _4a0=_49f.switchbutton.find(".switchbutton-inner");
var _4a1=_4a0.find(".switchbutton-on");
var _4a2=opts.reversed?(opts.checked?opts.marginWidth:0):(opts.checked?0:opts.marginWidth);
var dir=_4a1.css("float").toLowerCase();
var css={};
css["margin-"+dir]=-_4a2+"px";
_49e?_4a0.animate(css,200):_4a0.css(css);
var _4a3=_4a0.find(".switchbutton-value");
var ck=_4a3.is(":checked");
$(_49c).add(_4a3)._propAttr("checked",opts.checked);
if(ck!=opts.checked){
opts.onChange.call(_49c,opts.checked);
}
};
function _4a4(_4a5,_4a6){
var _4a7=$.data(_4a5,"switchbutton");
var opts=_4a7.options;
var _4a8=_4a7.switchbutton;
var _4a9=_4a8.find(".switchbutton-value");
if(_4a6){
opts.disabled=true;
$(_4a5).add(_4a9).attr("disabled","disabled");
_4a8.addClass("switchbutton-disabled");
}else{
opts.disabled=false;
$(_4a5).add(_4a9).removeAttr("disabled");
_4a8.removeClass("switchbutton-disabled");
}
};
function _49b(_4aa,mode){
var _4ab=$.data(_4aa,"switchbutton");
var opts=_4ab.options;
opts.readonly=mode==undefined?true:mode;
_4ab.switchbutton.removeClass("switchbutton-readonly").addClass(opts.readonly?"switchbutton-readonly":"");
};
function _4ac(_4ad){
var _4ae=$.data(_4ad,"switchbutton");
var opts=_4ae.options;
_4ae.switchbutton.unbind(".switchbutton").bind("click.switchbutton",function(){
if(!opts.disabled&&!opts.readonly){
_494(_4ad,opts.checked?false:true,true);
}
});
};
$.fn.switchbutton=function(_4af,_4b0){
if(typeof _4af=="string"){
return $.fn.switchbutton.methods[_4af](this,_4b0);
}
_4af=_4af||{};
return this.each(function(){
var _4b1=$.data(this,"switchbutton");
if(_4b1){
$.extend(_4b1.options,_4af);
}else{
_4b1=$.data(this,"switchbutton",{options:$.extend({},$.fn.switchbutton.defaults,$.fn.switchbutton.parseOptions(this),_4af),switchbutton:init(this)});
}
_4b1.options.originalChecked=_4b1.options.checked;
_495(this);
_48c(this);
_4ac(this);
});
};
$.fn.switchbutton.methods={options:function(jq){
var _4b2=jq.data("switchbutton");
return $.extend(_4b2.options,{value:_4b2.switchbutton.find(".switchbutton-value").val()});
},resize:function(jq,_4b3){
return jq.each(function(){
_48c(this,_4b3);
});
},enable:function(jq){
return jq.each(function(){
_4a4(this,false);
});
},disable:function(jq){
return jq.each(function(){
_4a4(this,true);
});
},readonly:function(jq,mode){
return jq.each(function(){
_49b(this,mode);
});
},check:function(jq){
return jq.each(function(){
_494(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_494(this,false);
});
},clear:function(jq){
return jq.each(function(){
_494(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).switchbutton("options");
_494(this,opts.originalChecked);
});
},setValue:function(jq,_4b4){
return jq.each(function(){
$(this).val(_4b4);
$.data(this,"switchbutton").switchbutton.find(".switchbutton-value").val(_4b4);
});
}};
$.fn.switchbutton.parseOptions=function(_4b5){
var t=$(_4b5);
return $.extend({},$.parser.parseOptions(_4b5,["onText","offText","handleText",{handleWidth:"number",reversed:"boolean"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined)});
};
$.fn.switchbutton.defaults={handleWidth:"auto",width:60,height:26,checked:false,disabled:false,readonly:false,reversed:false,onText:"ON",offText:"OFF",handleText:"",value:"on",onChange:function(_4b6){
}};
})(jQuery);
(function($){
function init(_4b7){
$(_4b7).addClass("validatebox-text");
};
function _4b8(_4b9){
var _4ba=$.data(_4b9,"validatebox");
_4ba.validating=false;
if(_4ba.vtimer){
clearTimeout(_4ba.vtimer);
}
if(_4ba.ftimer){
clearTimeout(_4ba.ftimer);
}
$(_4b9).tooltip("destroy");
$(_4b9).unbind();
$(_4b9).remove();
};
function _4bb(_4bc){
var opts=$.data(_4bc,"validatebox").options;
$(_4bc).unbind(".validatebox");
if(opts.novalidate||opts.disabled){
return;
}
for(var _4bd in opts.events){
$(_4bc).bind(_4bd+".validatebox",{target:_4bc},opts.events[_4bd]);
}
};
function _4be(e){
var _4bf=e.data.target;
var _4c0=$.data(_4bf,"validatebox");
var opts=_4c0.options;
if($(_4bf).attr("readonly")){
return;
}
_4c0.validating=true;
_4c0.value=opts.val(_4bf);
(function(){
if(!$(_4bf).is(":visible")){
_4c0.validating=false;
}
if(_4c0.validating){
var _4c1=opts.val(_4bf);
if(_4c0.value!=_4c1){
_4c0.value=_4c1;
if(_4c0.vtimer){
clearTimeout(_4c0.vtimer);
}
_4c0.vtimer=setTimeout(function(){
$(_4bf).validatebox("validate");
},opts.delay);
}else{
if(_4c0.message){
opts.err(_4bf,_4c0.message);
}
}
_4c0.ftimer=setTimeout(arguments.callee,opts.interval);
}
})();
};
function _4c2(e){
var _4c3=e.data.target;
var _4c4=$.data(_4c3,"validatebox");
var opts=_4c4.options;
_4c4.validating=false;
if(_4c4.vtimer){
clearTimeout(_4c4.vtimer);
_4c4.vtimer=undefined;
}
if(_4c4.ftimer){
clearTimeout(_4c4.ftimer);
_4c4.ftimer=undefined;
}
if(opts.validateOnBlur){
setTimeout(function(){
$(_4c3).validatebox("validate");
},0);
}
opts.err(_4c3,_4c4.message,"hide");
};
function _4c5(e){
var _4c6=e.data.target;
var _4c7=$.data(_4c6,"validatebox");
_4c7.options.err(_4c6,_4c7.message,"show");
};
function _4c8(e){
var _4c9=e.data.target;
var _4ca=$.data(_4c9,"validatebox");
if(!_4ca.validating){
_4ca.options.err(_4c9,_4ca.message,"hide");
}
};
function _4cb(_4cc,_4cd,_4ce){
var _4cf=$.data(_4cc,"validatebox");
var opts=_4cf.options;
var t=$(_4cc);
if(_4ce=="hide"||!_4cd){
t.tooltip("hide");
}else{
if((t.is(":focus")&&_4cf.validating)||_4ce=="show"){
t.tooltip($.extend({},opts.tipOptions,{content:_4cd,position:opts.tipPosition,deltaX:opts.deltaX,deltaY:opts.deltaY})).tooltip("show");
}
}
};
function _4d0(_4d1){
var _4d2=$.data(_4d1,"validatebox");
var opts=_4d2.options;
var box=$(_4d1);

var needMsg = $(_4d1).attr('noNull');
if(needMsg){
$(_4d1).addClass('required');
opts.required = true;
opts.missingMessage = needMsg;
}

opts.onBeforeValidate.call(_4d1);
var _4d3=_4d4();
_4d3?box.removeClass("validatebox-invalid"):box.addClass("validatebox-invalid");
opts.err(_4d1,_4d2.message);
opts.onValidate.call(_4d1,_4d3);
return _4d3;
function _4d5(msg){
_4d2.message=msg;
};
function _4d6(_4d7,_4d8){
var _4d9=opts.val(_4d1);
var _4da=/([a-zA-Z_]+)(.*)/.exec(_4d7);
var rule=opts.rules[_4da[1]];
if(rule&&_4d9){
var _4db=_4d8||opts.validParams||eval(_4da[2]);
if(!rule["validator"].call(_4d1,_4d9,_4db)){
var _4dc=rule["message"];
if(_4db){
for(var i=0;i<_4db.length;i++){
_4dc=_4dc.replace(new RegExp("\\{"+i+"\\}","g"),_4db[i]);
}
}
_4d5(opts.invalidMessage||_4dc);
return false;
}
}
return true;
};
function _4d4(){
_4d5("");
if(!opts._validateOnCreate){
setTimeout(function(){
opts._validateOnCreate=true;
},0);
return true;
}
if(opts.novalidate||opts.disabled){
return true;
}
if(opts.required){
if(opts.val(_4d1)==""){
_4d5(opts.missingMessage);
return false;
}
}
if(opts.validType){
if($.isArray(opts.validType)){
for(var i=0;i<opts.validType.length;i++){
if(!_4d6(opts.validType[i])){
return false;
}
}
}else{
if(typeof opts.validType=="string"){
if(!_4d6(opts.validType)){
return false;
}
}else{
for(var _4dd in opts.validType){
var _4de=opts.validType[_4dd];
if(!_4d6(_4dd,_4de)){
return false;
}
}
}
}
}
return true;
};
};
function _4df(_4e0,_4e1){
var opts=$.data(_4e0,"validatebox").options;
if(_4e1!=undefined){
opts.disabled=_4e1;
}
if(opts.disabled){
$(_4e0).addClass("validatebox-disabled").attr("disabled","disabled");
}else{
$(_4e0).removeClass("validatebox-disabled").removeAttr("disabled");
}
};
function _4e2(_4e3,mode){
var opts=$.data(_4e3,"validatebox").options;
opts.readonly=mode==undefined?true:mode;
if(opts.readonly||!opts.editable){
$(_4e3).triggerHandler("blur.validatebox");
$(_4e3).addClass("validatebox-readonly").attr("readonly","readonly");
}else{
$(_4e3).removeClass("validatebox-readonly").removeAttr("readonly");
}
};
$.fn.validatebox=function(_4e4,_4e5){
if(typeof _4e4=="string"){
return $.fn.validatebox.methods[_4e4](this,_4e5);
}
_4e4=_4e4||{};
return this.each(function(){
var _4e6=$.data(this,"validatebox");
if(_4e6){
$.extend(_4e6.options,_4e4);
}else{
init(this);
_4e6=$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_4e4)});
}
_4e6.options._validateOnCreate=_4e6.options.validateOnCreate;
_4df(this,_4e6.options.disabled);
_4e2(this,_4e6.options.readonly);
_4bb(this);
_4d0(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_4b8(this);
});
},validate:function(jq){
return jq.each(function(){
_4d0(this);
});
},isValid:function(jq){
return _4d0(jq[0]);
},enableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=false;
_4bb(this);
_4d0(this);
});
},disableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=true;
_4bb(this);
_4d0(this);
});
},resetValidation:function(jq){
return jq.each(function(){
var opts=$(this).validatebox("options");
opts._validateOnCreate=opts.validateOnCreate;
_4d0(this);
});
},enable:function(jq){
return jq.each(function(){
_4df(this,false);
_4bb(this);
_4d0(this);
});
},disable:function(jq){
return jq.each(function(){
_4df(this,true);
_4bb(this);
_4d0(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4e2(this,mode);
_4bb(this);
_4d0(this);
});
}};
$.fn.validatebox.parseOptions=function(_4e7){
var t=$(_4e7);
return $.extend({},$.parser.parseOptions(_4e7,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",interval:"number",deltaX:"number"},{editable:"boolean",validateOnCreate:"boolean",validateOnBlur:"boolean"}]),{required:(t.attr("required")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined),novalidate:(t.attr("novalidate")!=undefined?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,interval:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,deltaY:0,novalidate:false,editable:true,disabled:false,readonly:false,validateOnCreate:true,validateOnBlur:false,events:{focus:_4be,blur:_4c2,mouseenter:_4c5,mouseleave:_4c8,click:function(e){
var t=$(e.data.target);
if(t.attr("type")=="checkbox"||t.attr("type")=="radio"){
t.focus().validatebox("validate");
}
}},val:function(_4e8){
return $(_4e8).val();
},err:function(_4e9,_4ea,_4eb){
_4cb(_4e9,_4ea,_4eb);
},tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("destroy");
}},rules:{email:{validator:function(_4ec){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_4ec);
},message:"Please enter a valid email address."},url:{validator:function(_4ed){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_4ed);
},message:"Please enter a valid URL."},length:{validator:function(_4ee,_4ef){
var len=$.trim(_4ee).length;
return len>=_4ef[0]&&len<=_4ef[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_4f0,_4f1){
var data={};
data[_4f1[1]]=_4f0;
var _4f2=$.ajax({url:_4f1[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _4f2=="true";
},message:"Please fix this field."}},onBeforeValidate:function(){
},onValidate:function(_4f3){
}};
})(jQuery);
(function($){
var _4f4=0;
function init(_4f5){
$(_4f5).addClass("textbox-f").hide();
var span=$("<span class=\"textbox\">"+"<input class=\"textbox-text\" autocomplete=\"off\">"+"<input type=\"hidden\" class=\"textbox-value\">"+"</span>").insertAfter(_4f5);
var name=$(_4f5).attr("name");
if(name){
span.find("input.textbox-value").attr("name",name);
$(_4f5).removeAttr("name").attr("textboxName",name);
}
return span;
};
function _4f6(_4f7){
var _4f8=$.data(_4f7,"textbox");
var opts=_4f8.options;
var tb=_4f8.textbox;
var _4f9="_easyui_textbox_input"+(++_4f4);
tb.addClass(opts.cls);
tb.find(".textbox-text").remove();
if(opts.multiline){
$("<textarea id=\""+_4f9+"\" class=\"textbox-text\" autocomplete=\"off\"></textarea>").prependTo(tb);
}else{
$("<input id=\""+_4f9+"\" type=\""+opts.type+"\" class=\"textbox-text\" autocomplete=\"off\">").prependTo(tb);
}
$("#"+_4f9).attr("tabindex",$(_4f7).attr("tabindex")||"").css("text-align",_4f7.style.textAlign||"");
tb.find(".textbox-addon").remove();
var bb=opts.icons?$.extend(true,[],opts.icons):[];
if(opts.iconCls){
bb.push({iconCls:opts.iconCls,disabled:true});
}
if(bb.length){
var bc=$("<span class=\"textbox-addon\"></span>").prependTo(tb);
bc.addClass("textbox-addon-"+opts.iconAlign);
for(var i=0;i<bb.length;i++){
bc.append("<a href=\"javascript:;\" class=\"textbox-icon "+bb[i].iconCls+"\" icon-index=\""+i+"\" tabindex=\"-1\"></a>");
}
}
tb.find(".textbox-button").remove();
if(opts.buttonText||opts.buttonIcon){
var btn=$("<a href=\"javascript:;\" class=\"textbox-button\"></a>").prependTo(tb);
btn.addClass("textbox-button-"+opts.buttonAlign).linkbutton({text:opts.buttonText,iconCls:opts.buttonIcon,onClick:function(){
var t=$(this).parent().prev();
t.textbox("options").onClickButton.call(t[0]);
}});
}
if(opts.label){
if(typeof opts.label=="object"){
_4f8.label=$(opts.label);
_4f8.label.attr("for",_4f9);
}else{
$(_4f8.label).remove();
_4f8.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_4f8.label.css("textAlign",opts.labelAlign).attr("for",_4f9);
if(opts.labelPosition=="after"){
_4f8.label.insertAfter(tb);
}else{
_4f8.label.insertBefore(_4f7);
}
_4f8.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_4f8.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_4f8.label).remove();
}
_4fa(_4f7);
_4fb(_4f7,opts.disabled);
_4fc(_4f7,opts.readonly);
};
function _4fd(_4fe){
var _4ff=$.data(_4fe,"textbox");
var tb=_4ff.textbox;
tb.find(".textbox-text").validatebox("destroy");
tb.remove();
$(_4ff.label).remove();
$(_4fe).remove();
};
function _500(_501,_502){
var _503=$.data(_501,"textbox");
var opts=_503.options;
var tb=_503.textbox;
var _504=tb.parent();
if(_502){
if(typeof _502=="object"){
$.extend(opts,_502);
}else{
opts.width=_502;
}
}
if(isNaN(parseInt(opts.width))){
var c=$(_501).clone();
c.css("visibility","hidden");
c.insertAfter(_501);
opts.width=c.outerWidth();
c.remove();
}
var _505=tb.is(":visible");
if(!_505){
tb.appendTo("body");
}
var _506=tb.find(".textbox-text");
var btn=tb.find(".textbox-button");
var _507=tb.find(".textbox-addon");
var _508=_507.find(".textbox-icon");
if(opts.height=="auto"){
_506.css({margin:"",paddingTop:"",paddingBottom:"",height:"",lineHeight:""});
}
tb._size(opts,_504);
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_503.label._size({width:opts.labelWidth=="auto"?tb.outerWidth():opts.labelWidth},tb);
if(opts.height!="auto"){
tb._size("height",tb.outerHeight()-_503.label.outerHeight());
}
}else{
_503.label._size({width:opts.labelWidth,height:tb.outerHeight()},tb);
if(!opts.multiline){
_503.label.css("lineHeight",_503.label.height()+"px");
}
tb._size("width",tb.outerWidth()-_503.label.outerWidth());
}
}
if(opts.buttonAlign=="left"||opts.buttonAlign=="right"){
btn.linkbutton("resize",{height:tb.height()});
}else{
btn.linkbutton("resize",{width:"100%"});
}
var _509=tb.width()-_508.length*opts.iconWidth-_50a("left")-_50a("right");
var _50b=opts.height=="auto"?_506.outerHeight():(tb.height()-_50a("top")-_50a("bottom"));
_507.css(opts.iconAlign,_50a(opts.iconAlign)+"px");
_507.css("top",_50a("top")+"px");
_508.css({width:opts.iconWidth+"px",height:_50b+"px"});
_506.css({paddingLeft:(_501.style.paddingLeft||""),paddingRight:(_501.style.paddingRight||""),marginLeft:_50c("left"),marginRight:_50c("right"),marginTop:_50a("top"),marginBottom:_50a("bottom")});
if(opts.multiline){
_506.css({paddingTop:(_501.style.paddingTop||""),paddingBottom:(_501.style.paddingBottom||"")});
_506._outerHeight(_50b);
}else{
_506.css({paddingTop:0,paddingBottom:0,height:_50b+"px",lineHeight:_50b+"px"});
}
_506._outerWidth(_509);
opts.onResizing.call(_501,opts.width,opts.height);
if(!_505){
tb.insertAfter(_501);
}
opts.onResize.call(_501,opts.width,opts.height);
function _50c(_50d){
return (opts.iconAlign==_50d?_507._outerWidth():0)+_50a(_50d);
};
function _50a(_50e){
var w=0;
btn.filter(".textbox-button-"+_50e).each(function(){
if(_50e=="left"||_50e=="right"){
w+=$(this).outerWidth();
}else{
w+=$(this).outerHeight();
}
});
return w;
};
};
function _4fa(_50f){
var opts=$(_50f).textbox("options");
var _510=$(_50f).textbox("textbox");
_510.validatebox($.extend({},opts,{deltaX:function(_511){
return $(_50f).textbox("getTipX",_511);
},deltaY:function(_512){
return $(_50f).textbox("getTipY",_512);
},onBeforeValidate:function(){
opts.onBeforeValidate.call(_50f);
var box=$(this);
if(!box.is(":focus")){
if(box.val()!==opts.value){
opts.oldInputValue=box.val();
box.val(opts.value);
}
}
},onValidate:function(_513){
var box=$(this);
if(opts.oldInputValue!=undefined){
box.val(opts.oldInputValue);
opts.oldInputValue=undefined;
}
var tb=box.parent();
if(_513){
tb.removeClass("textbox-invalid");
}else{
tb.addClass("textbox-invalid");
}
opts.onValidate.call(_50f,_513);
}}));
};
function _514(_515){
var _516=$.data(_515,"textbox");
var opts=_516.options;
var tb=_516.textbox;
var _517=tb.find(".textbox-text");
_517.attr("placeholder",opts.prompt);
_517.unbind(".textbox");
$(_516.label).unbind(".textbox");
if(!opts.disabled&&!opts.readonly){
if(_516.label){
$(_516.label).bind("click.textbox",function(e){
if(!opts.hasFocusMe){
_517.focus();
$(_515).textbox("setSelectionRange",{start:0,end:_517.val().length});
}
});
}
_517.bind("blur.textbox",function(e){
if(!tb.hasClass("textbox-focused")){
return;
}
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt).addClass("textbox-prompt");
}else{
$(this).removeClass("textbox-prompt");
}
tb.removeClass("textbox-focused");
}).bind("focus.textbox",function(e){
opts.hasFocusMe=true;
if(tb.hasClass("textbox-focused")){
return;
}
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("textbox-prompt");
tb.addClass("textbox-focused");
});
for(var _518 in opts.inputEvents){
_517.bind(_518+".textbox",{target:_515},opts.inputEvents[_518]);
}
}
var _519=tb.find(".textbox-addon");
_519.unbind().bind("click",{target:_515},function(e){
var icon=$(e.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
if(icon.length){
var _51a=parseInt(icon.attr("icon-index"));
var conf=opts.icons[_51a];
if(conf&&conf.handler){
conf.handler.call(icon[0],e);
}
opts.onClickIcon.call(_515,_51a);
}
});
_519.find(".textbox-icon").each(function(_51b){
var conf=opts.icons[_51b];
var icon=$(this);
if(!conf||conf.disabled||opts.disabled||opts.readonly){
icon.addClass("textbox-icon-disabled");
}else{
icon.removeClass("textbox-icon-disabled");
}
});
var btn=tb.find(".textbox-button");
btn.linkbutton((opts.disabled||opts.readonly)?"disable":"enable");
tb.unbind(".textbox").bind("_resize.textbox",function(e,_51c){
if($(this).hasClass("easyui-fluid")||_51c){
_500(_515);
}
return false;
});
};
function _4fb(_51d,_51e){
var _51f=$.data(_51d,"textbox");
var opts=_51f.options;
var tb=_51f.textbox;
var _520=tb.find(".textbox-text");
var ss=$(_51d).add(tb.find(".textbox-value"));
opts.disabled=_51e;
if(opts.disabled){
_520.blur();
_520.validatebox("disable");
tb.addClass("textbox-disabled");
ss.attr("disabled","disabled");
$(_51f.label).addClass("textbox-label-disabled");
}else{
_520.validatebox("enable");
tb.removeClass("textbox-disabled");
ss.removeAttr("disabled");
$(_51f.label).removeClass("textbox-label-disabled");
}
};
function _4fc(_521,mode){
var _522=$.data(_521,"textbox");
var opts=_522.options;
var tb=_522.textbox;
var _523=tb.find(".textbox-text");
opts.readonly=mode==undefined?true:mode;
if(opts.readonly){
_523.triggerHandler("blur.textbox");
}
_523.validatebox("readonly",opts.readonly);
tb.removeClass("textbox-readonly").addClass(opts.readonly?"textbox-readonly":"");
};
$.fn.textbox=function(_524,_525){
if(typeof _524=="string"){
var _526=$.fn.textbox.methods[_524];
if(_526){
return _526(this,_525);
}else{
return this.each(function(){
var _527=$(this).textbox("textbox");
_527.validatebox(_524,_525);
});
}
}
_524=_524||{};
return this.each(function(){
var _528=$.data(this,"textbox");
if(_528){
$.extend(_528.options,_524);
if(_524.value!=undefined){
_528.options.originalValue=_524.value;
}
}else{
_528=$.data(this,"textbox",{options:$.extend({},$.fn.textbox.defaults,$.fn.textbox.parseOptions(this),_524),textbox:init(this)});
_528.options.originalValue=_528.options.value;
}
_4f6(this);
_514(this);
if(_528.options.doSize){
_500(this);
}
var _529=_528.options.value;
_528.options.value="";
$(this).textbox("initValue",_529);
});
};
$.fn.textbox.methods={options:function(jq){
return $.data(jq[0],"textbox").options;
},cloneFrom:function(jq,from){
return jq.each(function(){
var t=$(this);
if(t.data("textbox")){
return;
}
if(!$(from).data("textbox")){
$(from).textbox();
}
var opts=$.extend(true,{},$(from).textbox("options"));
var name=t.attr("name")||"";
t.addClass("textbox-f").hide();
t.removeAttr("name").attr("textboxName",name);
var span=$(from).next().clone().insertAfter(t);
var _52a="_easyui_textbox_input"+(++_4f4);
span.find(".textbox-value").attr("name",name);
span.find(".textbox-text").attr("id",_52a);
var _52b=$($(from).textbox("label")).clone();
if(_52b.length){
_52b.attr("for",_52a);
if(opts.labelPosition=="after"){
_52b.insertAfter(t.next());
}else{
_52b.insertBefore(t);
}
}
$.data(this,"textbox",{options:opts,textbox:span,label:(_52b.length?_52b:undefined)});
var _52c=$(from).textbox("button");
if(_52c.length){
t.textbox("button").linkbutton($.extend(true,{},_52c.linkbutton("options")));
}
_514(this);
_4fa(this);
});
},textbox:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-text");
},button:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-button");
},label:function(jq){
return $.data(jq[0],"textbox").label;
},destroy:function(jq){
return jq.each(function(){
_4fd(this);
});
},resize:function(jq,_52d){
return jq.each(function(){
_500(this,_52d);
});
},disable:function(jq){
return jq.each(function(){
_4fb(this,true);
_514(this);
});
},enable:function(jq){
return jq.each(function(){
_4fb(this,false);
_514(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4fc(this,mode);
_514(this);
});
},isValid:function(jq){
return jq.textbox("textbox").validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setValue","");
});
},setText:function(jq,_52e){
return jq.each(function(){
var opts=$(this).textbox("options");
var _52f=$(this).textbox("textbox");
_52e=_52e==undefined?"":String(_52e);
if($(this).textbox("getText")!=_52e){
_52f.val(_52e);
}
opts.value=_52e;
if(!_52f.is(":focus")){
if(_52e){
_52f.removeClass("textbox-prompt");
}else{
_52f.val(opts.prompt).addClass("textbox-prompt");
}
}
$(this).textbox("validate");
});
},initValue:function(jq,_530){
return jq.each(function(){
var _531=$.data(this,"textbox");
$(this).textbox("setText",_530);
_531.textbox.find(".textbox-value").val(_530);
$(this).val(_530);
});
},setValue:function(jq,_532){
return jq.each(function(){
var opts=$.data(this,"textbox").options;
var _533=$(this).textbox("getValue");
$(this).textbox("initValue",_532);
if(_533!=_532){
opts.onChange.call(this,_532,_533);
$(this).closest("form").trigger("_change",[this]);
}
});
},getText:function(jq){
var _534=jq.textbox("textbox");
if(_534.is(":focus")){
return _534.val();
}else{
return jq.textbox("options").value;
}
},getValue:function(jq){
return jq.data("textbox").textbox.find(".textbox-value").val();
},reset:function(jq){
return jq.each(function(){
var opts=$(this).textbox("options");
$(this).textbox("textbox").val(opts.originalValue);
$(this).textbox("setValue",opts.originalValue);
});
},getIcon:function(jq,_535){
return jq.data("textbox").textbox.find(".textbox-icon:eq("+_535+")");
},getTipX:function(jq,_536){
var _537=jq.data("textbox");
var opts=_537.options;
var tb=_537.textbox;
var _538=tb.find(".textbox-text");
var _536=_536||opts.tipPosition;
var p1=tb.offset();
var p2=_538.offset();
var w1=tb.outerWidth();
var w2=_538.outerWidth();
if(_536=="right"){
return w1-w2-p2.left+p1.left;
}else{
if(_536=="left"){
return p1.left-p2.left;
}else{
return (w1-w2-p2.left+p1.left)/2-(p2.left-p1.left)/2;
}
}
},getTipY:function(jq,_539){
var _53a=jq.data("textbox");
var opts=_53a.options;
var tb=_53a.textbox;
var _53b=tb.find(".textbox-text");
var _539=_539||opts.tipPosition;
var p1=tb.offset();
var p2=_53b.offset();
var h1=tb.outerHeight();
var h2=_53b.outerHeight();
if(_539=="left"||_539=="right"){
return (h1-h2-p2.top+p1.top)/2-(p2.top-p1.top)/2;
}else{
if(_539=="bottom"){
return (h1-h2-p2.top+p1.top);
}else{
return (p1.top-p2.top);
}
}
},getSelectionStart:function(jq){
return jq.textbox("getSelectionRange").start;
},getSelectionRange:function(jq){
var _53c=jq.textbox("textbox")[0];
var _53d=0;
var end=0;
if(typeof _53c.selectionStart=="number"){
_53d=_53c.selectionStart;
end=_53c.selectionEnd;
}else{
if(_53c.createTextRange){
var s=document.selection.createRange();
var _53e=_53c.createTextRange();
_53e.setEndPoint("EndToStart",s);
_53d=_53e.text.length;
end=_53d+s.text.length;
}
}
return {start:_53d,end:end};
},setSelectionRange:function(jq,_53f){
return jq.each(function(){
var _540=$(this).textbox("textbox")[0];
var _541=_53f.start;
var end=_53f.end;
if(_540.setSelectionRange){
_540.setSelectionRange(_541,end);
}else{
if(_540.createTextRange){
var _542=_540.createTextRange();
_542.collapse();
_542.moveEnd("character",end);
_542.moveStart("character",_541);
_542.select();
}
}
});
}};
$.fn.textbox.parseOptions=function(_543){
var t=$(_543);
return $.extend({},$.fn.validatebox.parseOptions(_543),$.parser.parseOptions(_543,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign","label","labelPosition","labelAlign",{multiline:"boolean",iconWidth:"number",labelWidth:"number"}]),{value:(t.val()||undefined),type:(t.attr("type")?t.attr("type"):undefined)});
};
$.fn.textbox.defaults=$.extend({},$.fn.validatebox.defaults,{doSize:true,width:"auto",height:"auto",cls:null,prompt:"",value:"",type:"text",multiline:false,icons:[],iconCls:null,iconAlign:"right",iconWidth:18,buttonText:"",buttonIcon:null,buttonAlign:"right",label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",inputEvents:{blur:function(e){
var t=$(e.data.target);
var opts=t.textbox("options");
if(t.textbox("getValue")!=opts.value){
t.textbox("setValue",opts.value);
}
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.textbox("setValue",t.textbox("getText"));
}
}},onChange:function(_544,_545){
},onResizing:function(_546,_547){
},onResize:function(_548,_549){
},onClickButton:function(){
},onClickIcon:function(_54a){
}});
})(jQuery);
(function($){
function _54b(_54c){
var _54d=$.data(_54c,"passwordbox");
var opts=_54d.options;
var _54e=$.extend(true,[],opts.icons);
if(opts.showEye){
_54e.push({iconCls:"passwordbox-open",handler:function(e){
opts.revealed=!opts.revealed;
_54f(_54c);
}});
}
$(_54c).addClass("passwordbox-f").textbox($.extend({},opts,{icons:_54e}));
_54f(_54c);
};
function _550(_551,_552,all){
var t=$(_551);
var opts=t.passwordbox("options");
if(opts.revealed){
t.textbox("setValue",_552);
return;
}
var _553=unescape(opts.passwordChar);
var cc=_552.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c!=vv[i]){
if(c!=_553){
vv.splice(i,0,c);
}
}
}
var pos=t.passwordbox("getSelectionStart");
if(cc.length<vv.length){
vv.splice(pos,vv.length-cc.length,"");
}
for(var i=0;i<cc.length;i++){
if(all||i!=pos-1){
cc[i]=_553;
}
}
t.textbox("setValue",vv.join(""));
t.textbox("setText",cc.join(""));
t.textbox("setSelectionRange",{start:pos,end:pos});
};
function _54f(_554,_555){
var t=$(_554);
var opts=t.passwordbox("options");
var icon=t.next().find(".passwordbox-open");
var _556=unescape(opts.passwordChar);
_555=_555==undefined?t.textbox("getValue"):_555;
t.textbox("setValue",_555);
t.textbox("setText",opts.revealed?_555:_555.replace(/./ig,_556));
opts.revealed?icon.addClass("passwordbox-close"):icon.removeClass("passwordbox-close");
};
function _557(e){
var _558=e.data.target;
var t=$(e.data.target);
var _559=t.data("passwordbox");
var opts=t.data("passwordbox").options;
_559.checking=true;
_559.value=t.passwordbox("getText");
(function(){
if(_559.checking){
var _55a=t.passwordbox("getText");
if(_559.value!=_55a){
_559.value=_55a;
if(_559.lastTimer){
clearTimeout(_559.lastTimer);
_559.lastTimer=undefined;
}
_550(_558,_55a);
_559.lastTimer=setTimeout(function(){
_550(_558,t.passwordbox("getText"),true);
_559.lastTimer=undefined;
},opts.lastDelay);
}
setTimeout(arguments.callee,opts.checkInterval);
}
})();
};
function _55b(e){
var _55c=e.data.target;
var _55d=$(_55c).data("passwordbox");
_55d.checking=false;
if(_55d.lastTimer){
clearTimeout(_55d.lastTimer);
_55d.lastTimer=undefined;
}
_54f(_55c);
};
$.fn.passwordbox=function(_55e,_55f){
if(typeof _55e=="string"){
var _560=$.fn.passwordbox.methods[_55e];
if(_560){
return _560(this,_55f);
}else{
return this.textbox(_55e,_55f);
}
}
_55e=_55e||{};
return this.each(function(){
var _561=$.data(this,"passwordbox");
if(_561){
$.extend(_561.options,_55e);
}else{
_561=$.data(this,"passwordbox",{options:$.extend({},$.fn.passwordbox.defaults,$.fn.passwordbox.parseOptions(this),_55e)});
}
_54b(this);
});
};
$.fn.passwordbox.methods={options:function(jq){
return $.data(jq[0],"passwordbox").options;
},setValue:function(jq,_562){
return jq.each(function(){
_54f(this,_562);
});
},clear:function(jq){
return jq.each(function(){
_54f(this,"");
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
_54f(this);
});
},showPassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=true;
_54f(this);
});
},hidePassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=false;
_54f(this);
});
}};
$.fn.passwordbox.parseOptions=function(_563){
return $.extend({},$.fn.textbox.parseOptions(_563),$.parser.parseOptions(_563,["passwordChar",{checkInterval:"number",lastDelay:"number",revealed:"boolean",showEye:"boolean"}]));
};
$.fn.passwordbox.defaults=$.extend({},$.fn.textbox.defaults,{passwordChar:"%u25CF",checkInterval:200,lastDelay:500,revealed:false,showEye:true,inputEvents:{focus:_557,blur:_55b},val:function(_564){
return $(_564).parent().prev().passwordbox("getValue");
}});
})(jQuery);
(function($){
var _565=0;
function _566(_567){
var _568=$.data(_567,"filebox");
var opts=_568.options;
opts.fileboxId="filebox_file_id_"+(++_565);
$(_567).addClass("filebox-f").textbox(opts);
$(_567).textbox("textbox").attr("readonly","readonly");
_568.filebox=$(_567).next().addClass("filebox");
var file=_569(_567);
var btn=$(_567).filebox("button");
if(btn.length){
$("<label class=\"filebox-label\" for=\""+opts.fileboxId+"\"></label>").appendTo(btn);
if(btn.linkbutton("options").disabled){
file.attr("disabled","disabled");
}else{
file.removeAttr("disabled");
}
}
};
function _569(_56a){
var _56b=$.data(_56a,"filebox");
var opts=_56b.options;
_56b.filebox.find(".textbox-value").remove();
opts.oldValue="";
var file=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_56b.filebox);
file.attr("id",opts.fileboxId).attr("name",$(_56a).attr("textboxName")||"");
file.attr("accept",opts.accept);
file.attr("capture",opts.capture);
if(opts.multiple){
file.attr("multiple","multiple");
}
file.change(function(){
var _56c=this.value;
if(this.files){
_56c=$.map(this.files,function(file){
return file.name;
}).join(opts.separator);
}
$(_56a).filebox("setText",_56c);
opts.onChange.call(_56a,_56c,opts.oldValue);
opts.oldValue=_56c;
});
return file;
};
$.fn.filebox=function(_56d,_56e){
if(typeof _56d=="string"){
var _56f=$.fn.filebox.methods[_56d];
if(_56f){
return _56f(this,_56e);
}else{
return this.textbox(_56d,_56e);
}
}
_56d=_56d||{};
return this.each(function(){
var _570=$.data(this,"filebox");
if(_570){
$.extend(_570.options,_56d);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_56d)});
}
_566(this);
});
};
$.fn.filebox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
_569(this);
});
},reset:function(jq){
return jq.each(function(){
$(this).filebox("clear");
});
},setValue:function(jq){
return jq;
},setValues:function(jq){
return jq;
}};
$.fn.filebox.parseOptions=function(_571){
var t=$(_571);
return $.extend({},$.fn.textbox.parseOptions(_571),$.parser.parseOptions(_571,["accept","capture","separator"]),{multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{},accept:"",capture:"",separator:",",multiple:false});
})(jQuery);
(function($){
function _572(_573){
var _574=$.data(_573,"searchbox");
var opts=_574.options;
var _575=$.extend(true,[],opts.icons);
_575.push({iconCls:"searchbox-button",handler:function(e){
var t=$(e.data.target);
var opts=t.searchbox("options");
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
}});
_576();
var _577=_578();
$(_573).addClass("searchbox-f").textbox($.extend({},opts,{icons:_575,buttonText:(_577?_577.text:"")}));
$(_573).attr("searchboxName",$(_573).attr("textboxName"));
_574.searchbox=$(_573).next();
_574.searchbox.addClass("searchbox");
_579(_577);
function _576(){
if(opts.menu){
_574.menu=$(opts.menu).menu();
var _57a=_574.menu.menu("options");
var _57b=_57a.onClick;
_57a.onClick=function(item){
_579(item);
_57b.call(this,item);
};
}else{
if(_574.menu){
_574.menu.menu("destroy");
}
_574.menu=null;
}
};
function _578(){
if(_574.menu){
var item=_574.menu.children("div.menu-item:first");
_574.menu.children("div.menu-item").each(function(){
var _57c=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_57c.selected){
item=$(this);
return false;
}
});
return _574.menu.menu("getItem",item[0]);
}else{
return null;
}
};
function _579(item){
if(!item){
return;
}
$(_573).textbox("button").menubutton({text:item.text,iconCls:(item.iconCls||null),menu:_574.menu,menuAlign:opts.buttonAlign,plain:false});
_574.searchbox.find("input.textbox-value").attr("name",item.name||item.text);
$(_573).searchbox("resize");
};
};
$.fn.searchbox=function(_57d,_57e){
if(typeof _57d=="string"){
var _57f=$.fn.searchbox.methods[_57d];
if(_57f){
return _57f(this,_57e);
}else{
return this.textbox(_57d,_57e);
}
}
_57d=_57d||{};
return this.each(function(){
var _580=$.data(this,"searchbox");
if(_580){
$.extend(_580.options,_57d);
}else{
$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_57d)});
}
_572(this);
});
};
$.fn.searchbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"searchbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.textbox-value").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item").each(function(){
var item=menu.menu("getItem",this);
if(item.name==name){
$(this).triggerHandler("click");
return false;
}
});
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$(this).textbox("destroy");
});
}};
$.fn.searchbox.parseOptions=function(_581){
var t=$(_581);
return $.extend({},$.fn.textbox.parseOptions(_581),$.parser.parseOptions(_581,["menu"]),{searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:$.extend({},$.fn.textbox.defaults.inputEvents,{keydown:function(e){
if(e.keyCode==13){
e.preventDefault();
var t=$(e.data.target);
var opts=t.searchbox("options");
t.searchbox("setValue",$(this).val());
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
return false;
}
}}),buttonAlign:"left",menu:null,searcher:function(_582,name){
}});
})(jQuery);
(function($){
function _583(_584,_585){
var opts=$.data(_584,"form").options;
$.extend(opts,_585||{});
var _586=$.extend({},opts.queryParams);
if(opts.onSubmit.call(_584,_586)==false){
return;
}
var _587=$(_584).find(".textbox-text:focus");
_587.triggerHandler("blur");
_587.focus();
var _588=null;
if(opts.dirty){
var ff=[];
$.map(opts.dirtyFields,function(f){
if($(f).hasClass("textbox-f")){
$(f).next().find(".textbox-value").each(function(){
ff.push(this);
});
}else{
ff.push(f);
}
});
_588=$(_584).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function(){
return $.inArray(this,ff)==-1;
});
_588.attr("disabled","disabled");
}
if(opts.ajax){
if(opts.iframe){
_589(_584,_586);
}else{
if(window.FormData!==undefined){
_58a(_584,_586);
}else{
_589(_584,_586);
}
}
}else{
$(_584).submit();
}
if(opts.dirty){
_588.removeAttr("disabled");
}
};
function _589(_58b,_58c){
var opts=$.data(_58b,"form").options;
var _58d="easyui_frame_"+(new Date().getTime());
var _58e=$("<iframe id="+_58d+" name="+_58d+"></iframe>").appendTo("body");
_58e.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_58e.css({position:"absolute",top:-1000,left:-1000});
_58e.bind("load",cb);
_58f(_58c);
function _58f(_590){
var form=$(_58b);
if(opts.url){
form.attr("action",opts.url);
}
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_58d);
var _591=$();
try{
for(var n in _590){
var _592=$("<input type=\"hidden\" name=\""+n+"\">").val(_590[n]).appendTo(form);
_591=_591.add(_592);
}
_593();
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
_591.remove();
}
};
function _593(){
var f=$("#"+_58d);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_593,100);
}
}
catch(e){
cb();
}
};
var _594=10;
function cb(){
var f=$("#"+_58d);
if(!f.length){
return;
}
f.unbind();
var data="";
try{
var body=f.contents().find("body");
data=body.html();
if(data==""){
if(--_594){
setTimeout(cb,100);
return;
}
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
}
catch(e){
}
opts.success.call(_58b,data);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function _58a(_595,_596){
var opts=$.data(_595,"form").options;
var _597=new FormData($(_595)[0]);
for(var name in _596){
_597.append(name,_596[name]);
}
$.ajax({url:opts.url,type:"post",xhr:function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener("progress",function(e){
if(e.lengthComputable){
var _598=e.total;
var _599=e.loaded||e.position;
var _59a=Math.ceil(_599*100/_598);
opts.onProgress.call(_595,_59a);
}
},false);
}
return xhr;
},data:_597,dataType:"html",cache:false,contentType:false,processData:false,complete:function(res){
opts.success.call(_595,res.responseText);
}});
};
function load(_59b,data){
var opts=$.data(_59b,"form").options;
if(typeof data=="string"){
var _59c={};
if(opts.onBeforeLoad.call(_59b,_59c)==false){
return;
}
$.ajax({url:data,data:_59c,dataType:"json",success:function(data){
_59d(data);
},error:function(){
opts.onLoadError.apply(_59b,arguments);
}});
}else{
_59d(data);
}
function _59d(data){
var form=$(_59b);
for(var name in data){
var val=data[name];
if(!_59e(name,val)){
if(!_59f(name,val)){
form.find("input[name=\""+name+"\"]").val(val);
form.find("textarea[name=\""+name+"\"]").val(val);
form.find("select[name=\""+name+"\"]").val(val);
}
}
}
opts.onLoadSuccess.call(_59b,data);
form.form("validate");
};
function _59e(name,val){
var cc=$(_59b).find("[switchbuttonName=\""+name+"\"]");
if(cc.length){
cc.switchbutton("uncheck");
cc.each(function(){
if(_5a0($(this).switchbutton("options").value,val)){
$(this).switchbutton("check");
}
});
return true;
}
cc=$(_59b).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
if(_5a0($(this).val(),val)){
$(this)._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _5a0(v,val){
if(v==String(val)||$.inArray(v,$.isArray(val)?val:[val])>=0){
return true;
}else{
return false;
}
};
function _59f(name,val){
var _5a1=$(_59b).find("[textboxName=\""+name+"\"],[sliderName=\""+name+"\"]");
if(_5a1.length){
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _5a2=_5a1.data(type);
if(_5a2){
if(_5a2.options.multiple||_5a2.options.range){
_5a1[type]("setValues",val);
}else{
_5a1[type]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _5a3(_5a4){
$("input,select,textarea",_5a4).each(function(){
if($(this).hasClass("textbox-value")){
return;
}
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
if(!file.hasClass("textbox-value")){
var _5a5=file.clone().val("");
_5a5.insertAfter(file);
if(file.data("validatebox")){
file.validatebox("destroy");
_5a5.validatebox();
}else{
file.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var tmp=$();
var form=$(_5a4);
var opts=$.data(_5a4,"form").options;
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _5a6=form.find("."+type+"-f").not(tmp);
if(_5a6.length&&_5a6[type]){
_5a6[type]("clear");
tmp=tmp.add(_5a6);
}
}
form.form("validate");
};
function _5a7(_5a8){
_5a8.reset();
var form=$(_5a8);
var opts=$.data(_5a8,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _5a9=form.find("."+type+"-f");
if(_5a9.length&&_5a9[type]){
_5a9[type]("reset");
}
}
form.form("validate");
};
function _5aa(_5ab){
var _5ac=$.data(_5ab,"form").options;
$(_5ab).unbind(".form");
if(_5ac.ajax){
$(_5ab).bind("submit.form",function(){
setTimeout(function(){
_583(_5ab,_5ac);
},0);
return false;
});
}
$(_5ab).bind("_change.form",function(e,t){
if($.inArray(t,_5ac.dirtyFields)==-1){
_5ac.dirtyFields.push(t);
}
_5ac.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
if($.inArray(t,_5ac.dirtyFields)==-1){
_5ac.dirtyFields.push(t);
}
_5ac.onChange.call(this,t);
}
});
_5ad(_5ab,_5ac.novalidate);
};
function _5ae(_5af,_5b0){
_5b0=_5b0||{};
var _5b1=$.data(_5af,"form");
if(_5b1){
$.extend(_5b1.options,_5b0);
}else{
$.data(_5af,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_5af),_5b0)});
}
};
function _5b2(_5b3){
if($.fn.validatebox){
var t=$(_5b3);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _5b4=t.find(".validatebox-invalid");
_5b4.filter(":not(:disabled):first").focus();
return _5b4.length==0;
}
return true;
};
function _5ad(_5b5,_5b6){
var opts=$.data(_5b5,"form").options;
opts.novalidate=_5b6;
$(_5b5).find(".validatebox-text:not(:disabled)").validatebox(_5b6?"disableValidation":"enableValidation");
};
$.fn.form=function(_5b7,_5b8){
if(typeof _5b7=="string"){
this.each(function(){
_5ae(this);
});
return $.fn.form.methods[_5b7](this,_5b8);
}
return this.each(function(){
_5ae(this,_5b7);
_5aa(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_5b9){
return jq.each(function(){
_583(this,_5b9);
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_5a3(this);
});
},reset:function(jq){
return jq.each(function(){
_5a7(this);
});
},validate:function(jq){
return _5b2(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_5ad(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_5ad(this,false);
});
},resetValidation:function(jq){
return jq.each(function(){
$(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation");
});
},resetDirty:function(jq){
return jq.each(function(){
$(this).form("options").dirtyFields=[];
});
}};
$.fn.form.parseOptions=function(_5ba){
var t=$(_5ba);
return $.extend({},$.parser.parseOptions(_5ba,[{ajax:"boolean",dirty:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["tagbox","combobox","combotree","combogrid","combotreegrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","passwordbox","filebox","textbox","switchbutton"],novalidate:false,ajax:true,iframe:true,dirty:false,dirtyFields:[],url:null,queryParams:{},onSubmit:function(_5bb){
return $(this).form("validate");
},onProgress:function(_5bc){
},success:function(data){
},onBeforeLoad:function(_5bd){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onChange:function(_5be){
}};
})(jQuery);
(function($){
function _5bf(_5c0){
var _5c1=$.data(_5c0,"numberbox");
var opts=_5c1.options;
$(_5c0).addClass("numberbox-f").textbox(opts);
$(_5c0).textbox("textbox").css({imeMode:"disabled"});
$(_5c0).attr("numberboxName",$(_5c0).attr("textboxName"));
_5c1.numberbox=$(_5c0).next();
_5c1.numberbox.addClass("numberbox");
var _5c2=opts.parser.call(_5c0,opts.value);
var _5c3=opts.formatter.call(_5c0,_5c2);
$(_5c0).numberbox("initValue",_5c2).numberbox("setText",_5c3);
};
function _5c4(_5c5,_5c6){
var _5c7=$.data(_5c5,"numberbox");
var opts=_5c7.options;
opts.value=parseFloat(_5c6);
var _5c6=opts.parser.call(_5c5,_5c6);
var text=opts.formatter.call(_5c5,_5c6);
opts.value=_5c6;
$(_5c5).textbox("setText",text).textbox("setValue",_5c6);
text=opts.formatter.call(_5c5,$(_5c5).textbox("getValue"));
$(_5c5).textbox("setText",text);
};
$.fn.numberbox=function(_5c8,_5c9){
if(typeof _5c8=="string"){
var _5ca=$.fn.numberbox.methods[_5c8];
if(_5ca){
return _5ca(this,_5c9);
}else{
return this.textbox(_5c8,_5c9);
}
}
_5c8=_5c8||{};
return this.each(function(){
var _5cb=$.data(this,"numberbox");
if(_5cb){
$.extend(_5cb.options,_5c8);
}else{
_5cb=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_5c8)});
}
_5bf(this);
});
};
$.fn.numberbox.methods={options:function(jq){
var opts=jq.data("textbox")?jq.textbox("options"):{};
return $.extend($.data(jq[0],"numberbox").options,{width:opts.width,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},fix:function(jq){
return jq.each(function(){
var opts=$(this).numberbox("options");
opts.value=null;
var _5cc=opts.parser.call(this,$(this).numberbox("getText"));
$(this).numberbox("setValue",_5cc);
});
},setValue:function(jq,_5cd){
return jq.each(function(){
_5c4(this,_5cd);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
$(this).numberbox("options").value="";
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
$(this).numberbox("setValue",$(this).numberbox("getValue"));
});
}};
$.fn.numberbox.parseOptions=function(_5ce){
var t=$(_5ce);
return $.extend({},$.fn.textbox.parseOptions(_5ce),$.parser.parseOptions(_5ce,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{keypress:function(e){
var _5cf=e.data.target;
var opts=$(_5cf).numberbox("options");
return opts.filter.call(_5cf,e);
},blur:function(e){
$(e.data.target).numberbox("fix");
},keydown:function(e){
if(e.keyCode==13){
$(e.data.target).numberbox("fix");
}
}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(e){
var opts=$(this).numberbox("options");
var s=$(this).numberbox("getText");
if(e.metaKey||e.ctrlKey){
return true;
}
if($.inArray(String(e.which),["46","8","13","0"])>=0){
return true;
}
var tmp=$("<span></span>");
tmp.html(String.fromCharCode(e.which));
var c=tmp.text();
tmp.remove();
if(!c){
return true;
}
if(c=="-"||c==opts.decimalSeparator){
return (s.indexOf(c)==-1)?true:false;
}else{
if(c==opts.groupSeparator){
return true;
}else{
if("0123456789".indexOf(c)>=0){
return true;
}else{
return false;
}
}
}
},formatter:function(_5d0){
if(!_5d0){
return _5d0;
}
_5d0=_5d0+"";
var opts=$(this).numberbox("options");
var s1=_5d0,s2="";
var dpos=_5d0.indexOf(".");
if(dpos>=0){
s1=_5d0.substring(0,dpos);
s2=_5d0.substring(dpos+1,_5d0.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(opts.prefix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));
}
if(opts.suffix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));
}
if(parseFloat(s)!=opts.value){
if(opts.groupSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));
}
if(opts.decimalSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));
}
s=s.replace(/\s/g,"");
}
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
}});
})(jQuery);
(function($){
function _5d1(_5d2,_5d3){
var opts=$.data(_5d2,"calendar").options;
var t=$(_5d2);
if(_5d3){
$.extend(opts,{width:_5d3.width,height:_5d3.height});
}
t._size(opts,t.parent());
t.find(".calendar-body")._outerHeight(t.height()-t.find(".calendar-header")._outerHeight());
if(t.find(".calendar-menu").is(":visible")){
_5d4(_5d2);
}
};
function init(_5d5){
$(_5d5).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-nav calendar-prevmonth\"></div>"+"<div class=\"calendar-nav calendar-nextmonth\"></div>"+"<div class=\"calendar-nav calendar-prevyear\"></div>"+"<div class=\"calendar-nav calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span class=\"calendar-text\"></span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-nav calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-nav calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_5d5).bind("_resize",function(e,_5d6){
if($(this).hasClass("easyui-fluid")||_5d6){
_5d1(_5d5);
}
return false;
});
};
function _5d7(_5d8){
var opts=$.data(_5d8,"calendar").options;
var menu=$(_5d8).find(".calendar-menu");
menu.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar",function(e){
if(e.keyCode==13){
_5d9(true);
}
});
$(_5d8).unbind(".calendar").bind("mouseover.calendar",function(e){
var t=_5da(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.addClass("calendar-nav-hover");
}
}).bind("mouseout.calendar",function(e){
var t=_5da(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.removeClass("calendar-nav-hover");
}
}).bind("click.calendar",function(e){
var t=_5da(e.target);
if(t.hasClass("calendar-menu-next")||t.hasClass("calendar-nextyear")){
_5db(1);
}else{
if(t.hasClass("calendar-menu-prev")||t.hasClass("calendar-prevyear")){
_5db(-1);
}else{
if(t.hasClass("calendar-menu-month")){
menu.find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
_5d9(true);
}else{
if(t.hasClass("calendar-prevmonth")){
_5dc(-1);
}else{
if(t.hasClass("calendar-nextmonth")){
_5dc(1);
}else{
if(t.hasClass("calendar-text")){
if(menu.is(":visible")){
menu.hide();
}else{
_5d4(_5d8);
}
}else{
if(t.hasClass("calendar-day")){
if(t.hasClass("calendar-disabled")){
return;
}
var _5dd=opts.current;
t.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
var _5de=t.attr("abbr").split(",");
var y=parseInt(_5de[0]);
var m=parseInt(_5de[1]);
var d=parseInt(_5de[2]);
opts.current=new Date(y,m-1,d);
opts.onSelect.call(_5d8,opts.current);
if(!_5dd||_5dd.getTime()!=opts.current.getTime()){
opts.onChange.call(_5d8,opts.current,_5dd);
}
if(opts.year!=y||opts.month!=m){
opts.year=y;
opts.month=m;
show(_5d8);
}
}
}
}
}
}
}
}
});
function _5da(t){
var day=$(t).closest(".calendar-day");
if(day.length){
return day;
}else{
return $(t);
}
};
function _5d9(_5df){
var menu=$(_5d8).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _5e0=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_5e0);
show(_5d8);
}
if(_5df){
menu.hide();
}
};
function _5db(_5e1){
opts.year+=_5e1;
show(_5d8);
menu.find(".calendar-menu-year").val(opts.year);
};
function _5dc(_5e2){
opts.month+=_5e2;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_5d8);
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
};
function _5d4(_5e3){
var opts=$.data(_5e3,"calendar").options;
$(_5e3).find(".calendar-menu").show();
if($(_5e3).find(".calendar-menu-month-inner").is(":empty")){
$(_5e3).find(".calendar-menu-month-inner").empty();
var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_5e3).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-nav calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
}
var body=$(_5e3).find(".calendar-body");
var sele=$(_5e3).find(".calendar-menu");
var _5e4=sele.find(".calendar-menu-year-inner");
var _5e5=sele.find(".calendar-menu-month-inner");
_5e4.find("input").val(opts.year).focus();
_5e5.find("td.calendar-selected").removeClass("calendar-selected");
_5e5.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_5e5._outerHeight(sele.height()-_5e4._outerHeight());
};
function _5e6(_5e7,year,_5e8){
var opts=$.data(_5e7,"calendar").options;
var _5e9=[];
var _5ea=new Date(year,_5e8,0).getDate();
for(var i=1;i<=_5ea;i++){
_5e9.push([year,_5e8,i]);
}
var _5eb=[],week=[];
var _5ec=-1;
while(_5e9.length>0){
var date=_5e9.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_5ec==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_5eb.push(week);
week=[];
}
}
_5ec=day;
}
if(week.length){
_5eb.push(week);
}
var _5ed=_5eb[0];
if(_5ed.length<7){
while(_5ed.length<7){
var _5ee=_5ed[0];
var date=new Date(_5ee[0],_5ee[1]-1,_5ee[2]-1);
_5ed.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _5ee=_5ed[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5ee[0],_5ee[1]-1,_5ee[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5eb.unshift(week);
}
var _5ef=_5eb[_5eb.length-1];
while(_5ef.length<7){
var _5f0=_5ef[_5ef.length-1];
var date=new Date(_5f0[0],_5f0[1]-1,_5f0[2]+1);
_5ef.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_5eb.length<6){
var _5f0=_5ef[_5ef.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5f0[0],_5f0[1]-1,_5f0[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5eb.push(week);
}
return _5eb;
};
function show(_5f1){
var opts=$.data(_5f1,"calendar").options;
if(opts.current&&!opts.validator.call(_5f1,opts.current)){
opts.current=null;
}
var now=new Date();
var _5f2=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
var _5f3=opts.current?(opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate()):"";
var _5f4=6-opts.firstDay;
var _5f5=_5f4+1;
if(_5f4>=7){
_5f4-=7;
}
if(_5f5>=7){
_5f5-=7;
}
$(_5f1).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_5f1).find("div.calendar-body");
body.children("table").remove();
var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
data.push("<thead><tr>");
if(opts.showWeek){
data.push("<th class=\"calendar-week\">"+opts.weekNumberHeader+"</th>");
}
for(var i=opts.firstDay;i<opts.weeks.length;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
data.push("</tr></thead>");
data.push("<tbody>");
var _5f6=_5e6(_5f1,opts.year,opts.month);
for(var i=0;i<_5f6.length;i++){
var week=_5f6[i];
var cls="";
if(i==0){
cls="calendar-first";
}else{
if(i==_5f6.length-1){
cls="calendar-last";
}
}
data.push("<tr class=\""+cls+"\">");
if(opts.showWeek){
var _5f7=opts.getWeekNumber(new Date(week[0][0],parseInt(week[0][1])-1,week[0][2]));
data.push("<td class=\"calendar-week\">"+_5f7+"</td>");
}
for(var j=0;j<week.length;j++){
var day=week[j];
var s=day[0]+","+day[1]+","+day[2];
var _5f8=new Date(day[0],parseInt(day[1])-1,day[2]);
var d=opts.formatter.call(_5f1,_5f8);
var css=opts.styler.call(_5f1,_5f8);
var _5f9="";
var _5fa="";
if(typeof css=="string"){
_5fa=css;
}else{
if(css){
_5f9=css["class"]||"";
_5fa=css["style"]||"";
}
}
var cls="calendar-day";
if(!(opts.year==day[0]&&opts.month==day[1])){
cls+=" calendar-other-month";
}
if(s==_5f2){
cls+=" calendar-today";
}
if(s==_5f3){
cls+=" calendar-selected";
}
if(j==_5f4){
cls+=" calendar-saturday";
}else{
if(j==_5f5){
cls+=" calendar-sunday";
}
}
if(j==0){
cls+=" calendar-first";
}else{
if(j==week.length-1){
cls+=" calendar-last";
}
}
cls+=" "+_5f9;
if(!opts.validator.call(_5f1,_5f8)){
cls+=" calendar-disabled";
}
data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_5fa+"\">"+d+"</td>");
}
data.push("</tr>");
}
data.push("</tbody>");
data.push("</table>");
body.append(data.join(""));
body.children("table.calendar-dtable").prependTo(body);
opts.onNavigate.call(_5f1,opts.year,opts.month);
};
$.fn.calendar=function(_5fb,_5fc){
if(typeof _5fb=="string"){
return $.fn.calendar.methods[_5fb](this,_5fc);
}
_5fb=_5fb||{};
return this.each(function(){
var _5fd=$.data(this,"calendar");
if(_5fd){
$.extend(_5fd.options,_5fb);
}else{
_5fd=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_5fb)});
init(this);
}
if(_5fd.options.border==false){
$(this).addClass("calendar-noborder");
}
_5d1(this);
_5d7(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq,_5fe){
return jq.each(function(){
_5d1(this,_5fe);
});
},moveTo:function(jq,date){
return jq.each(function(){
if(!date){
var now=new Date();
$(this).calendar({year:now.getFullYear(),month:now.getMonth()+1,current:date});
return;
}
var opts=$(this).calendar("options");
if(opts.validator.call(this,date)){
var _5ff=opts.current;
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
if(!_5ff||_5ff.getTime()!=date.getTime()){
opts.onChange.call(this,opts.current,_5ff);
}
}
});
}};
$.fn.calendar.parseOptions=function(_600){
var t=$(_600);
return $.extend({},$.parser.parseOptions(_600,["weekNumberHeader",{firstDay:"number",fit:"boolean",border:"boolean",showWeek:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,showWeek:false,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:(function(){
var d=new Date();
return new Date(d.getFullYear(),d.getMonth(),d.getDate());
})(),weekNumberHeader:"",getWeekNumber:function(date){
var _601=new Date(date.getTime());
_601.setDate(_601.getDate()+4-(_601.getDay()||7));
var time=_601.getTime();
_601.setMonth(0);
_601.setDate(1);
return Math.floor(Math.round((time-_601)/86400000)/7)+1;
},formatter:function(date){
return date.getDate();
},styler:function(date){
return "";
},validator:function(date){
return true;
},onSelect:function(date){
},onChange:function(_602,_603){
},onNavigate:function(year,_604){
}};
})(jQuery);
(function($){
function _605(_606){
var _607=$.data(_606,"spinner");
var opts=_607.options;
var _608=$.extend(true,[],opts.icons);
if(opts.spinAlign=="left"||opts.spinAlign=="right"){
opts.spinArrow=true;
opts.iconAlign=opts.spinAlign;
var _609={iconCls:"spinner-arrow",handler:function(e){
var spin=$(e.target).closest(".spinner-arrow-up,.spinner-arrow-down");
_613(e.data.target,spin.hasClass("spinner-arrow-down"));
}};
if(opts.spinAlign=="left"){
_608.unshift(_609);
}else{
_608.push(_609);
}
}else{
opts.spinArrow=false;
if(opts.spinAlign=="vertical"){
if(opts.buttonAlign!="top"){
opts.buttonAlign="bottom";
}
opts.clsLeft="textbox-button-bottom";
opts.clsRight="textbox-button-top";
}else{
opts.clsLeft="textbox-button-left";
opts.clsRight="textbox-button-right";
}
}
$(_606).addClass("spinner-f").textbox($.extend({},opts,{icons:_608,doSize:false,onResize:function(_60a,_60b){
if(!opts.spinArrow){
var span=$(this).next();
var btn=span.find(".textbox-button:not(.spinner-button)");
if(btn.length){
var _60c=btn.outerWidth();
var _60d=btn.outerHeight();
var _60e=span.find(".spinner-button."+opts.clsLeft);
var _60f=span.find(".spinner-button."+opts.clsRight);
if(opts.buttonAlign=="right"){
_60f.css("marginRight",_60c+"px");
}else{
if(opts.buttonAlign=="left"){
_60e.css("marginLeft",_60c+"px");
}else{
if(opts.buttonAlign=="top"){
_60f.css("marginTop",_60d+"px");
}else{
_60e.css("marginBottom",_60d+"px");
}
}
}
}
}
opts.onResize.call(this,_60a,_60b);
}}));
$(_606).attr("spinnerName",$(_606).attr("textboxName"));
_607.spinner=$(_606).next();
_607.spinner.addClass("spinner");
if(opts.spinArrow){
var _610=_607.spinner.find(".spinner-arrow");
_610.append("<a href=\"javascript:;\" class=\"spinner-arrow-up\" tabindex=\"-1\"></a>");
_610.append("<a href=\"javascript:;\" class=\"spinner-arrow-down\" tabindex=\"-1\"></a>");
}else{
var _611=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsLeft).appendTo(_607.spinner);
var _612=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsRight).appendTo(_607.spinner);
_611.linkbutton({iconCls:opts.reversed?"spinner-button-up":"spinner-button-down",onClick:function(){
_613(_606,!opts.reversed);
}});
_612.linkbutton({iconCls:opts.reversed?"spinner-button-down":"spinner-button-up",onClick:function(){
_613(_606,opts.reversed);
}});
if(opts.disabled){
$(_606).spinner("disable");
}
if(opts.readonly){
$(_606).spinner("readonly");
}
}
$(_606).spinner("resize");
};
function _613(_614,down){
var opts=$(_614).spinner("options");
opts.spin.call(_614,down);
opts[down?"onSpinDown":"onSpinUp"].call(_614);
$(_614).spinner("validate");
};
$.fn.spinner=function(_615,_616){
if(typeof _615=="string"){
var _617=$.fn.spinner.methods[_615];
if(_617){
return _617(this,_616);
}else{
return this.textbox(_615,_616);
}
}
_615=_615||{};
return this.each(function(){
var _618=$.data(this,"spinner");
if(_618){
$.extend(_618.options,_615);
}else{
_618=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_615)});
}
_605(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.spinner.parseOptions=function(_619){
return $.extend({},$.fn.textbox.parseOptions(_619),$.parser.parseOptions(_619,["min","max","spinAlign",{increment:"number",reversed:"boolean"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spinAlign:"right",reversed:false,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _61a(_61b){
$(_61b).addClass("numberspinner-f");
var opts=$.data(_61b,"numberspinner").options;
$(_61b).numberbox($.extend({},opts,{doSize:false})).spinner(opts);
$(_61b).numberbox("setValue",opts.value);
};
function _61c(_61d,down){
var opts=$.data(_61d,"numberspinner").options;
var v=parseFloat($(_61d).numberbox("getValue")||opts.value)||0;
if(down){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_61d).numberbox("setValue",v);
};
$.fn.numberspinner=function(_61e,_61f){
if(typeof _61e=="string"){
var _620=$.fn.numberspinner.methods[_61e];
if(_620){
return _620(this,_61f);
}else{
return this.numberbox(_61e,_61f);
}
}
_61e=_61e||{};
return this.each(function(){
var _621=$.data(this,"numberspinner");
if(_621){
$.extend(_621.options,_61e);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_61e)});
}
_61a(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=jq.numberbox("options");
return $.extend($.data(jq[0],"numberspinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.numberspinner.parseOptions=function(_622){
return $.extend({},$.fn.spinner.parseOptions(_622),$.fn.numberbox.parseOptions(_622),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_61c(this,down);
}});
})(jQuery);
(function($){
function _623(_624){
var opts=$.data(_624,"timespinner").options;
$(_624).addClass("timespinner-f").spinner(opts);
var _625=opts.formatter.call(_624,opts.parser.call(_624,opts.value));
$(_624).timespinner("initValue",_625);
};
function _626(e){
var _627=e.data.target;
var opts=$.data(_627,"timespinner").options;
var _628=$(_627).timespinner("getSelectionStart");
for(var i=0;i<opts.selections.length;i++){
var _629=opts.selections[i];
if(_628>=_629[0]&&_628<=_629[1]){
_62a(_627,i);
return;
}
}
};
function _62a(_62b,_62c){
var opts=$.data(_62b,"timespinner").options;
if(_62c!=undefined){
opts.highlight=_62c;
}
var _62d=opts.selections[opts.highlight];
if(_62d){
var tb=$(_62b).timespinner("textbox");
$(_62b).timespinner("setSelectionRange",{start:_62d[0],end:_62d[1]});
tb.focus();
}
};
function _62e(_62f,_630){
var opts=$.data(_62f,"timespinner").options;
var _630=opts.parser.call(_62f,_630);
var text=opts.formatter.call(_62f,_630);
$(_62f).spinner("setValue",text);
};
function _631(_632,down){
var opts=$.data(_632,"timespinner").options;
var s=$(_632).timespinner("getValue");
var _633=opts.selections[opts.highlight];
var s1=s.substring(0,_633[0]);
var s2=s.substring(_633[0],_633[1]);
var s3=s.substring(_633[1]);
var v=s1+((parseInt(s2,10)||0)+opts.increment*(down?-1:1))+s3;
$(_632).timespinner("setValue",v);
_62a(_632);
};
$.fn.timespinner=function(_634,_635){
if(typeof _634=="string"){
var _636=$.fn.timespinner.methods[_634];
if(_636){
return _636(this,_635);
}else{
return this.spinner(_634,_635);
}
}
_634=_634||{};
return this.each(function(){
var _637=$.data(this,"timespinner");
if(_637){
$.extend(_637.options,_634);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_634)});
}
_623(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},setValue:function(jq,_638){
return jq.each(function(){
_62e(this,_638);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_639){
return $.extend({},$.fn.spinner.parseOptions(_639),$.parser.parseOptions(_639,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_626.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(date){
if(!date){
return "";
}
var opts=$(this).timespinner("options");
var tt=[_63a(date.getHours()),_63a(date.getMinutes())];
if(opts.showSeconds){
tt.push(_63a(date.getSeconds()));
}
return tt.join(opts.separator);
function _63a(_63b){
return (_63b<10?"0":"")+_63b;
};
},parser:function(s){
var opts=$(this).timespinner("options");
var date=_63c(s);
if(date){
var min=_63c(opts.min);
var max=_63c(opts.max);
if(min&&min>date){
date=min;
}
if(max&&max<date){
date=max;
}
}
return date;
function _63c(s){
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(down){
_631(this,down);
}});
})(jQuery);
(function($){
function _63d(_63e){
var opts=$.data(_63e,"datetimespinner").options;
$(_63e).addClass("datetimespinner-f").timespinner(opts);
};
$.fn.datetimespinner=function(_63f,_640){
if(typeof _63f=="string"){
var _641=$.fn.datetimespinner.methods[_63f];
if(_641){
return _641(this,_640);
}else{
return this.timespinner(_63f,_640);
}
}
_63f=_63f||{};
return this.each(function(){
var _642=$.data(this,"datetimespinner");
if(_642){
$.extend(_642.options,_63f);
}else{
$.data(this,"datetimespinner",{options:$.extend({},$.fn.datetimespinner.defaults,$.fn.datetimespinner.parseOptions(this),_63f)});
}
_63d(this);
});
};
$.fn.datetimespinner.methods={options:function(jq){
var opts=jq.timespinner("options");
return $.extend($.data(jq[0],"datetimespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.datetimespinner.parseOptions=function(_643){
return $.extend({},$.fn.timespinner.parseOptions(_643),$.parser.parseOptions(_643,[]));
};
$.fn.datetimespinner.defaults=$.extend({},$.fn.timespinner.defaults,{formatter:function(date){
if(!date){
return "";
}
return $.fn.datebox.defaults.formatter.call(this,date)+" "+$.fn.timespinner.defaults.formatter.call(this,date);
},parser:function(s){
s=$.trim(s);
if(!s){
return null;
}
var dt=s.split(" ");
var _644=$.fn.datebox.defaults.parser.call(this,dt[0]);
if(dt.length<2){
return _644;
}
var _645=$.fn.timespinner.defaults.parser.call(this,dt[1]);
return new Date(_644.getFullYear(),_644.getMonth(),_644.getDate(),_645.getHours(),_645.getMinutes(),_645.getSeconds());
},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]});
})(jQuery);
(function($){
var _646=0;
function _647(a,o){
return $.easyui.indexOfArray(a,o);
};
function _648(a,o,id){
$.easyui.removeArrayItem(a,o,id);
};
function _649(a,o,r){
$.easyui.addArrayItem(a,o,r);
};
function _64a(_64b,aa){
return $.data(_64b,"treegrid")?aa.slice(1):aa;
};
function _64c(_64d){
var _64e=$.data(_64d,"datagrid");
var opts=_64e.options;
var _64f=_64e.panel;
var dc=_64e.dc;
var ss=null;
if(opts.sharedStyleSheet){
ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;
}else{
ss=_64f.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _650=$.data(cc[0],"ss");
if(!_650){
_650=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_651){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_651.length;i++){
_650.cache[_651[i][0]]={width:_651[i][1]};
}
var _652=0;
for(var s in _650.cache){
var item=_650.cache[s];
item.index=_652++;
ss.push(s+"{width:"+item.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_653){
var _654=cc.children("style[easyui]:last")[0];
var _655=_654.styleSheet?_654.styleSheet:(_654.sheet||document.styleSheets[document.styleSheets.length-1]);
var _656=_655.cssRules||_655.rules;
return _656[_653];
},set:function(_657,_658){
var item=_650.cache[_657];
if(item){
item.width=_658;
var rule=this.getRule(item.index);
if(rule){
rule.style["width"]=_658;
}
}
},remove:function(_659){
var tmp=[];
for(var s in _650.cache){
if(s.indexOf(_659)==-1){
tmp.push([s,_650.cache[s].width]);
}
}
_650.cache={};
this.add(tmp);
},dirty:function(_65a){
if(_65a){
_650.dirty.push(_65a);
}
},clean:function(){
for(var i=0;i<_650.dirty.length;i++){
this.remove(_650.dirty[i]);
}
_650.dirty=[];
}};
};
function _65b(_65c,_65d){
var _65e=$.data(_65c,"datagrid");
var opts=_65e.options;
var _65f=_65e.panel;
if(_65d){
$.extend(opts,_65d);
}
if(opts.fit==true){
var p=_65f.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_65f.panel("resize",opts);
};
function _660(_661){
var _662=$.data(_661,"datagrid");
var opts=_662.options;
var dc=_662.dc;
var wrap=_662.panel;
var _663=wrap.width();
var _664=wrap.height();
var view=dc.view;
var _665=dc.view1;
var _666=dc.view2;
var _667=_665.children("div.datagrid-header");
var _668=_666.children("div.datagrid-header");
var _669=_667.find("table");
var _66a=_668.find("table");
view.width(_663);
var _66b=_667.children("div.datagrid-header-inner").show();
_665.width(_66b.find("table").width());
if(!opts.showHeader){
_66b.hide();
}
_666.width(_663-_665._outerWidth());
_665.children()._outerWidth(_665.width());
_666.children()._outerWidth(_666.width());
var all=_667.add(_668).add(_669).add(_66a);
all.css("height","");
var hh=Math.max(_669.height(),_66a.height());
all._outerHeight(hh);
view.children(".datagrid-empty").css("top",hh+"px");
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _66c=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _66d=_66c+_668._outerHeight()+_666.children(".datagrid-footer")._outerHeight();
wrap.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function(){
_66d+=$(this)._outerHeight();
});
var _66e=wrap.outerHeight()-wrap.height();
var _66f=wrap._size("minHeight")||"";
var _670=wrap._size("maxHeight")||"";
_665.add(_666).children("div.datagrid-body").css({marginTop:_66c,height:(isNaN(parseInt(opts.height))?"":(_664-_66d)),minHeight:(_66f?_66f-_66e-_66d:""),maxHeight:(_670?_670-_66e-_66d:"")});
view.height(_666.height());
};
function _671(_672,_673,_674){
var rows=$.data(_672,"datagrid").data.rows;
var opts=$.data(_672,"datagrid").options;
var dc=$.data(_672,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_674)){
if(_673!=undefined){
var tr1=opts.finder.getTr(_672,_673,"body",1);
var tr2=opts.finder.getTr(_672,_673,"body",2);
_675(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_672,0,"allbody",1);
var tr2=opts.finder.getTr(_672,0,"allbody",2);
_675(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_672,0,"allfooter",1);
var tr2=opts.finder.getTr(_672,0,"allfooter",2);
_675(tr1,tr2);
}
}
}
_660(_672);
if(opts.height=="auto"){
var _676=dc.body1.parent();
var _677=dc.body2;
var _678=_679(_677);
var _67a=_678.height;
if(_678.width>_677.width()){
_67a+=18;
}
_67a-=parseInt(_677.css("marginTop"))||0;
_676.height(_67a);
_677.height(_67a);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _675(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _67b=Math.max(tr1.height(),tr2.height());
tr1.css("height",_67b);
tr2.css("height",_67b);
}
};
function _679(cc){
var _67c=0;
var _67d=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_67d+=c._outerHeight();
if(_67c<c._outerWidth()){
_67c=c._outerWidth();
}
}
});
return {width:_67c,height:_67d};
};
};
function _67e(_67f,_680){
var _681=$.data(_67f,"datagrid");
var opts=_681.options;
var dc=_681.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_682(true);
_682(false);
_660(_67f);
function _682(_683){
var _684=_683?1:2;
var tr=opts.finder.getTr(_67f,_680,"body",_684);
(_683?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _685(_686,_687){
function _688(){
var _689=[];
var _68a=[];
$(_686).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["id","field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_689.push(cols):_68a.push(cols);
});
});
return [_689,_68a];
};
var _68b=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_686);
_68b.panel({doSize:false,cls:"datagrid"});
$(_686).addClass("datagrid-f").hide().appendTo(_68b.children("div.datagrid-view"));
var cc=_688();
var view=_68b.children("div.datagrid-view");
var _68c=view.children("div.datagrid-view1");
var _68d=view.children("div.datagrid-view2");
return {panel:_68b,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_68c,view2:_68d,header1:_68c.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_68d.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_68c.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_68d.children("div.datagrid-body"),footer1:_68c.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_68d.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _68e(_68f){
var _690=$.data(_68f,"datagrid");
var opts=_690.options;
var dc=_690.dc;
var _691=_690.panel;
_690.ss=$(_68f).datagrid("createStyleSheet");
_691.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_692,_693){
if($.data(_68f,"datagrid")){
_660(_68f);
$(_68f).datagrid("fitColumns");
opts.onResize.call(_691,_692,_693);
}
},onExpand:function(){
if($.data(_68f,"datagrid")){
$(_68f).datagrid("fixRowHeight").datagrid("fitColumns");
opts.onExpand.call(_691);
}
}}));
_690.rowIdPrefix="datagrid-row-r"+(++_646);
_690.cellClassPrefix="datagrid-cell-c"+_646;
_694(dc.header1,opts.frozenColumns,true);
_694(dc.header2,opts.columns,false);
_695();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$("div.datagrid-toolbar",_691).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_691);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_691);
$(opts.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_691).remove();
}
$("div.datagrid-pager",_691).remove();
if(opts.pagination){
var _696=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_696.appendTo(_691);
}else{
if(opts.pagePosition=="top"){
_696.addClass("datagrid-pager-top").prependTo(_691);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_691);
_696.appendTo(_691);
_696=_696.add(ptop);
}
}
_696.pagination({total:0,pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_697,_698){
opts.pageNumber=_697||1;
opts.pageSize=_698;
_696.pagination("refresh",{pageNumber:_697,pageSize:_698});
_6e0(_68f);
}});
opts.pageSize=_696.pagination("options").pageSize;
}
function _694(_699,_69a,_69b){
if(!_69a){
return;
}
$(_699).show();
$(_699).empty();
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-99999px\"></div>").appendTo("body");
tmp._outerWidth(99);
var _69c=100-parseInt(tmp[0].style.width);
tmp.remove();
var _69d=[];
var _69e=[];
var _69f=[];
if(opts.sortName){
_69d=opts.sortName.split(",");
_69e=opts.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_699);
for(var i=0;i<_69a.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_69a[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
if(!col.id){
col.id=["datagrid-td-group"+_646,i,j].join("-");
}
}
if(col.id){
attr+="id=\""+col.id+"\"";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
td.find("span:first").html(col.title);
var cell=td.find("div.datagrid-cell");
var pos=_647(_69d,col.field);
if(pos>=0){
cell.addClass("datagrid-sort-"+_69e[pos]);
}
if(col.sortable){
cell.addClass("datagrid-sort");
}
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
var _6a0=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0));
col.deltaWidth=_69c;
col.boxWidth=_6a0-_69c;
}else{
col.auto=true;
}
cell.css("text-align",(col.halign||col.align||""));
col.cellClass=_690.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
cell.addClass(col.cellClass);
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
_69f.push(col.field);
}
}
}
if(_69b&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
for(var i=0;i<_69f.length;i++){
_6e2(_68f,_69f[i],-1);
}
};
function _695(){
var _6a1=[[".datagrid-header-rownumber",(opts.rownumberWidth-1)+"px"],[".datagrid-cell-rownumber",(opts.rownumberWidth-1)+"px"]];
var _6a2=_6a3(_68f,true).concat(_6a3(_68f));
for(var i=0;i<_6a2.length;i++){
var col=_6a4(_68f,_6a2[i]);
if(col&&!col.checkbox){
_6a1.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_690.ss.add(_6a1);
_690.ss.dirty(_690.cellSelectorPrefix);
_690.cellSelectorPrefix="."+_690.cellClassPrefix;
};
};
function _6a5(_6a6){
var _6a7=$.data(_6a6,"datagrid");
var _6a8=_6a7.panel;
var opts=_6a7.options;
var dc=_6a7.dc;
var _6a9=dc.header1.add(dc.header2);
_6a9.unbind(".datagrid");
for(var _6aa in opts.headerEvents){
_6a9.bind(_6aa+".datagrid",opts.headerEvents[_6aa]);
}
var _6ab=_6a9.find("div.datagrid-cell");
var _6ac=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_6ab.each(function(){
$(this).resizable({handles:_6ac,edge:opts.resizeEdge,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_6a7.resizing=true;
_6a9.css("cursor",$("body").css("cursor"));
if(!_6a7.proxy){
_6a7.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
if(e.data.dir=="e"){
e.data.deltaEdge=$(this)._outerWidth()-(e.pageX-$(this).offset().left);
}else{
e.data.deltaEdge=$(this).offset().left-e.pageX-1;
}
_6a7.proxy.css({left:e.pageX-$(_6a8).offset().left-1+e.data.deltaEdge,display:"none"});
setTimeout(function(){
if(_6a7.proxy){
_6a7.proxy.show();
}
},500);
},onResize:function(e){
_6a7.proxy.css({left:e.pageX-$(_6a8).offset().left-1+e.data.deltaEdge,display:"block"});
return false;
},onStopResize:function(e){
_6a9.css("cursor","");
$(this).css("height","");
var _6ad=$(this).parent().attr("field");
var col=_6a4(_6a6,_6ad);
col.width=$(this)._outerWidth()+1;
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_6a6).datagrid("fixColumnSize",_6ad);
_6a7.proxy.remove();
_6a7.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_660(_6a6);
}
$(_6a6).datagrid("fitColumns");
opts.onResizeColumn.call(_6a6,_6ad,col.width);
setTimeout(function(){
_6a7.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _6aa in opts.rowEvents){
bb.bind(_6aa,opts.rowEvents[_6aa]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
e.preventDefault();
var e1=e.originalEvent||window.event;
var _6ae=e1.wheelDelta||e1.detail*(-1);
if("deltaY" in e1){
_6ae=e1.deltaY*-1;
}
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_6ae);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
b1.scrollTop($(this).scrollTop());
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var top1=c1.offset().top;
var top2=c2.offset().top;
if(top1!=top2){
b1.scrollTop(b1.scrollTop()+top1-top2);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _6af(_6b0){
return function(e){
var td=$(e.target).closest("td[field]");
if(td.length){
var _6b1=_6b2(td);
if(!$(_6b1).data("datagrid").resizing&&_6b0){
td.addClass("datagrid-header-over");
}else{
td.removeClass("datagrid-header-over");
}
}
};
};
function _6b3(e){
var _6b4=_6b2(e.target);
var opts=$(_6b4).datagrid("options");
var ck=$(e.target).closest("input[type=checkbox]");
if(ck.length){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if(ck.is(":checked")){
_6b5(_6b4);
}else{
_6b6(_6b4);
}
e.stopPropagation();
}else{
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
_6b7(_6b4,cell.parent().attr("field"));
}
}
}
};
function _6b8(e){
var _6b9=_6b2(e.target);
var opts=$(_6b9).datagrid("options");
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _6ba=cell.parent().attr("field");
var col=_6a4(_6b9,_6ba);
if(col.resizable==false){
return;
}
$(_6b9).datagrid("autoSizeColumn",_6ba);
col.auto=false;
}
}
};
function _6bb(e){
var _6bc=_6b2(e.target);
var opts=$(_6bc).datagrid("options");
var td=$(e.target).closest("td[field]");
opts.onHeaderContextMenu.call(_6bc,e,td.attr("field"));
};
function _6bd(_6be){
return function(e){
var tr=_6bf(e.target);
if(!tr){
return;
}
var _6c0=_6b2(tr);
if($.data(_6c0,"datagrid").resizing){
return;
}
var _6c1=_6c2(tr);
if(_6be){
_6c3(_6c0,_6c1);
}else{
var opts=$.data(_6c0,"datagrid").options;
opts.finder.getTr(_6c0,_6c1).removeClass("datagrid-row-over");
}
};
};
function _6c4(e){
var tr=_6bf(e.target);
if(!tr){
return;
}
var _6c5=_6b2(tr);
var opts=$.data(_6c5,"datagrid").options;
var _6c6=_6c2(tr);
var tt=$(e.target);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
tt._propAttr("checked",!tt.is(":checked"));
_6c7(_6c5,_6c6);
}else{
if(tt.is(":checked")){
tt._propAttr("checked",false);
_6c7(_6c5,_6c6);
}else{
tt._propAttr("checked",true);
_6c8(_6c5,_6c6);
}
}
}else{
var row=opts.finder.getRow(_6c5,_6c6);
var td=tt.closest("td[field]",tr);
if(td.length){
var _6c9=td.attr("field");
opts.onClickCell.call(_6c5,_6c6,_6c9,row[_6c9]);
}
if(opts.singleSelect==true){
_6ca(_6c5,_6c6);
}else{
if(opts.ctrlSelect){
if(e.metaKey||e.ctrlKey){
if(tr.hasClass("datagrid-row-selected")){
_6cb(_6c5,_6c6);
}else{
_6ca(_6c5,_6c6);
}
}else{
if(e.shiftKey){
$(_6c5).datagrid("clearSelections");
var _6cc=Math.min(opts.lastSelectedIndex||0,_6c6);
var _6cd=Math.max(opts.lastSelectedIndex||0,_6c6);
for(var i=_6cc;i<=_6cd;i++){
_6ca(_6c5,i);
}
}else{
$(_6c5).datagrid("clearSelections");
_6ca(_6c5,_6c6);
opts.lastSelectedIndex=_6c6;
}
}
}else{
if(tr.hasClass("datagrid-row-selected")){
_6cb(_6c5,_6c6);
}else{
_6ca(_6c5,_6c6);
}
}
}
opts.onClickRow.apply(_6c5,_64a(_6c5,[_6c6,row]));
}
};
function _6ce(e){
var tr=_6bf(e.target);
if(!tr){
return;
}
var _6cf=_6b2(tr);
var opts=$.data(_6cf,"datagrid").options;
var _6d0=_6c2(tr);
var row=opts.finder.getRow(_6cf,_6d0);
var td=$(e.target).closest("td[field]",tr);
if(td.length){
var _6d1=td.attr("field");
opts.onDblClickCell.call(_6cf,_6d0,_6d1,row[_6d1]);
}
opts.onDblClickRow.apply(_6cf,_64a(_6cf,[_6d0,row]));
};
function _6d2(e){
var tr=_6bf(e.target);
if(tr){
var _6d3=_6b2(tr);
var opts=$.data(_6d3,"datagrid").options;
var _6d4=_6c2(tr);
var row=opts.finder.getRow(_6d3,_6d4);
opts.onRowContextMenu.call(_6d3,e,_6d4,row);
}else{
var body=_6bf(e.target,".datagrid-body");
if(body){
var _6d3=_6b2(body);
var opts=$.data(_6d3,"datagrid").options;
opts.onRowContextMenu.call(_6d3,e,-1,null);
}
}
};
function _6b2(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _6bf(t,_6d5){
var tr=$(t).closest(_6d5||"tr.datagrid-row");
if(tr.length&&tr.parent().length){
return tr;
}else{
return undefined;
}
};
function _6c2(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
function _6b7(_6d6,_6d7){
var _6d8=$.data(_6d6,"datagrid");
var opts=_6d8.options;
_6d7=_6d7||{};
var _6d9={sortName:opts.sortName,sortOrder:opts.sortOrder};
if(typeof _6d7=="object"){
$.extend(_6d9,_6d7);
}
var _6da=[];
var _6db=[];
if(_6d9.sortName){
_6da=_6d9.sortName.split(",");
_6db=_6d9.sortOrder.split(",");
}
if(typeof _6d7=="string"){
var _6dc=_6d7;
var col=_6a4(_6d6,_6dc);
if(!col.sortable||_6d8.resizing){
return;
}
var _6dd=col.order||"asc";
var pos=_647(_6da,_6dc);
if(pos>=0){
var _6de=_6db[pos]=="asc"?"desc":"asc";
if(opts.multiSort&&_6de==_6dd){
_6da.splice(pos,1);
_6db.splice(pos,1);
}else{
_6db[pos]=_6de;
}
}else{
if(opts.multiSort){
_6da.push(_6dc);
_6db.push(_6dd);
}else{
_6da=[_6dc];
_6db=[_6dd];
}
}
_6d9.sortName=_6da.join(",");
_6d9.sortOrder=_6db.join(",");
}
if(opts.onBeforeSortColumn.call(_6d6,_6d9.sortName,_6d9.sortOrder)==false){
return;
}
$.extend(opts,_6d9);
var dc=_6d8.dc;
var _6df=dc.header1.add(dc.header2);
_6df.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
for(var i=0;i<_6da.length;i++){
var col=_6a4(_6d6,_6da[i]);
_6df.find("div."+col.cellClass).addClass("datagrid-sort-"+_6db[i]);
}
if(opts.remoteSort){
_6e0(_6d6);
}else{
_6e1(_6d6,$(_6d6).datagrid("getData"));
}
opts.onSortColumn.call(_6d6,opts.sortName,opts.sortOrder);
};
function _6e2(_6e3,_6e4,_6e5){
_6e6(true);
_6e6(false);
function _6e6(_6e7){
var aa=_6e8(_6e3,_6e7);
if(aa.length){
var _6e9=aa[aa.length-1];
var _6ea=_647(_6e9,_6e4);
if(_6ea>=0){
for(var _6eb=0;_6eb<aa.length-1;_6eb++){
var td=$("#"+aa[_6eb][_6ea]);
var _6ec=parseInt(td.attr("colspan")||1)+(_6e5||0);
td.attr("colspan",_6ec);
if(_6ec){
td.show();
}else{
td.hide();
}
}
}
}
};
};
function _6ed(_6ee){
var _6ef=$.data(_6ee,"datagrid");
var opts=_6ef.options;
var dc=_6ef.dc;
var _6f0=dc.view2.children("div.datagrid-header");
dc.body2.css("overflow-x","");
_6f1();
_6f2();
_6f3();
_6f1(true);
if(_6f0.width()>=_6f0.find("table").width()){
dc.body2.css("overflow-x","hidden");
}
function _6f3(){
if(!opts.fitColumns){
return;
}
if(!_6ef.leftWidth){
_6ef.leftWidth=0;
}
var _6f4=0;
var cc=[];
var _6f5=_6a3(_6ee,false);
for(var i=0;i<_6f5.length;i++){
var col=_6a4(_6ee,_6f5[i]);
if(_6f6(col)){
_6f4+=col.width;
cc.push({field:col.field,col:col,addingWidth:0});
}
}
if(!_6f4){
return;
}
cc[cc.length-1].addingWidth-=_6ef.leftWidth;
var _6f7=_6f0.children("div.datagrid-header-inner").show();
var _6f8=_6f0.width()-_6f0.find("table").width()-opts.scrollbarSize+_6ef.leftWidth;
var rate=_6f8/_6f4;
if(!opts.showHeader){
_6f7.hide();
}
for(var i=0;i<cc.length;i++){
var c=cc[i];
var _6f9=parseInt(c.col.width*rate);
c.addingWidth+=_6f9;
_6f8-=_6f9;
}
cc[cc.length-1].addingWidth+=_6f8;
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c.col.boxWidth+c.addingWidth>0){
c.col.boxWidth+=c.addingWidth;
c.col.width+=c.addingWidth;
}
}
_6ef.leftWidth=_6f8;
$(_6ee).datagrid("fixColumnSize");
};
function _6f2(){
var _6fa=false;
var _6fb=_6a3(_6ee,true).concat(_6a3(_6ee,false));
$.map(_6fb,function(_6fc){
var col=_6a4(_6ee,_6fc);
if(String(col.width||"").indexOf("%")>=0){
var _6fd=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0))-col.deltaWidth;
if(_6fd>0){
col.boxWidth=_6fd;
_6fa=true;
}
}
});
if(_6fa){
$(_6ee).datagrid("fixColumnSize");
}
};
function _6f1(fit){
var _6fe=dc.header1.add(dc.header2).find(".datagrid-cell-group");
if(_6fe.length){
_6fe.each(function(){
$(this)._outerWidth(fit?$(this).parent().width():10);
});
if(fit){
_660(_6ee);
}
}
};
function _6f6(col){
if(String(col.width||"").indexOf("%")>=0){
return false;
}
if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){
return true;
}
};
};
function _6ff(_700,_701){
var _702=$.data(_700,"datagrid");
var opts=_702.options;
var dc=_702.dc;
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");
if(_701){
_65b(_701);
$(_700).datagrid("fitColumns");
}else{
var _703=false;
var _704=_6a3(_700,true).concat(_6a3(_700,false));
for(var i=0;i<_704.length;i++){
var _701=_704[i];
var col=_6a4(_700,_701);
if(col.auto){
_65b(_701);
_703=true;
}
}
if(_703){
$(_700).datagrid("fitColumns");
}
}
tmp.remove();
function _65b(_705){
var _706=dc.view.find("div.datagrid-header td[field=\""+_705+"\"] div.datagrid-cell");
_706.css("width","");
var col=$(_700).datagrid("getColumnOption",_705);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_700).datagrid("fixColumnSize",_705);
var _707=Math.max(_708("header"),_708("allbody"),_708("allfooter"))+1;
_706._outerWidth(_707-1);
col.width=_707;
col.boxWidth=parseInt(_706[0].style.width);
col.deltaWidth=_707-col.boxWidth;
_706.css("width","");
$(_700).datagrid("fixColumnSize",_705);
opts.onResizeColumn.call(_700,_705,col.width);
function _708(type){
var _709=0;
if(type=="header"){
_709=_70a(_706);
}else{
opts.finder.getTr(_700,0,type).find("td[field=\""+_705+"\"] div.datagrid-cell").each(function(){
var w=_70a($(this));
if(_709<w){
_709=w;
}
});
}
return _709;
function _70a(cell){
return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();
};
};
};
};
function _70b(_70c,_70d){
var _70e=$.data(_70c,"datagrid");
var opts=_70e.options;
var dc=_70e.dc;
var _70f=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_70f.css("table-layout","fixed");
if(_70d){
fix(_70d);
}else{
var ff=_6a3(_70c,true).concat(_6a3(_70c,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_70f.css("table-layout","");
_710(_70c);
_671(_70c);
_711(_70c);
function fix(_712){
var col=_6a4(_70c,_712);
if(col.cellClass){
_70e.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");
}
};
};
function _710(_713,tds){
var dc=$.data(_713,"datagrid").dc;
tds=tds||dc.view.find("td.datagrid-td-merged");
tds.each(function(){
var td=$(this);
var _714=td.attr("colspan")||1;
if(_714>1){
var col=_6a4(_713,td.attr("field"));
var _715=col.boxWidth+col.deltaWidth-1;
for(var i=1;i<_714;i++){
td=td.next();
col=_6a4(_713,td.attr("field"));
_715+=col.boxWidth+col.deltaWidth;
}
$(this).children("div.datagrid-cell")._outerWidth(_715);
}
});
};
function _711(_716){
var dc=$.data(_716,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _717=cell.parent().attr("field");
var col=$(_716).datagrid("getColumnOption",_717);
cell._outerWidth(col.boxWidth+col.deltaWidth-1);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _6a4(_718,_719){
function find(_71a){
if(_71a){
for(var i=0;i<_71a.length;i++){
var cc=_71a[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_719){
return c;
}
}
}
}
return null;
};
var opts=$.data(_718,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _6e8(_71b,_71c){
var opts=$.data(_71b,"datagrid").options;
var _71d=_71c?opts.frozenColumns:opts.columns;
var aa=[];
var _71e=_71f();
for(var i=0;i<_71d.length;i++){
aa[i]=new Array(_71e);
}
for(var _720=0;_720<_71d.length;_720++){
$.map(_71d[_720],function(col){
var _721=_722(aa[_720]);
if(_721>=0){
var _723=col.field||col.id||"";
for(var c=0;c<(col.colspan||1);c++){
for(var r=0;r<(col.rowspan||1);r++){
aa[_720+r][_721]=_723;
}
_721++;
}
}
});
}
return aa;
function _71f(){
var _724=0;
$.map(_71d[0]||[],function(col){
_724+=col.colspan||1;
});
return _724;
};
function _722(a){
for(var i=0;i<a.length;i++){
if(a[i]==undefined){
return i;
}
}
return -1;
};
};
function _6a3(_725,_726){
var aa=_6e8(_725,_726);
return aa.length?aa[aa.length-1]:aa;
};
function _6e1(_727,data){
var _728=$.data(_727,"datagrid");
var opts=_728.options;
var dc=_728.dc;
data=opts.loadFilter.call(_727,data);
if($.isArray(data)){
data={total:data.length,rows:data};
}
data.total=parseInt(data.total);
_728.data=data;
if(data.footer){
_728.footer=data.footer;
}
if(!opts.remoteSort&&opts.sortName){
var _729=opts.sortName.split(",");
var _72a=opts.sortOrder.split(",");
data.rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_729.length;i++){
var sn=_729[i];
var so=_72a[i];
var col=_6a4(_727,sn);
var _72b=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_72b(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_727,data.rows);
}
opts.view.render.call(opts.view,_727,dc.body2,false);
opts.view.render.call(opts.view,_727,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_727,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_727,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_727);
}
_728.ss.clean();
var _72c=$(_727).datagrid("getPager");
if(_72c.length){
var _72d=_72c.pagination("options");
if(_72d.total!=data.total){
_72c.pagination("refresh",{pageNumber:opts.pageNumber,total:data.total});
if(opts.pageNumber!=_72d.pageNumber&&_72d.pageNumber>0){
opts.pageNumber=_72d.pageNumber;
_6e0(_727);
}
}
}
_671(_727);
dc.body2.triggerHandler("scroll");
$(_727).datagrid("setSelectionState");
$(_727).datagrid("autoSizeColumn");
opts.onLoadSuccess.call(_727,data);
};
function _72e(_72f){
var _730=$.data(_72f,"datagrid");
var opts=_730.options;
var dc=_730.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
var _731=$.data(_72f,"treegrid")?true:false;
var _732=opts.onSelect;
var _733=opts.onCheck;
opts.onSelect=opts.onCheck=function(){
};
var rows=opts.finder.getRows(_72f);
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _734=_731?row[opts.idField]:$(_72f).datagrid("getRowIndex",row[opts.idField]);
if(_735(_730.selectedRows,row)){
_6ca(_72f,_734,true,true);
}
if(_735(_730.checkedRows,row)){
_6c7(_72f,_734,true);
}
}
opts.onSelect=_732;
opts.onCheck=_733;
}
function _735(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
function _736(_737,row){
var _738=$.data(_737,"datagrid");
var opts=_738.options;
var rows=_738.data.rows;
if(typeof row=="object"){
return _647(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _739(_73a){
var _73b=$.data(_73a,"datagrid");
var opts=_73b.options;
var data=_73b.data;
if(opts.idField){
return _73b.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_73a,"","selected",2).each(function(){
rows.push(opts.finder.getRow(_73a,$(this)));
});
return rows;
}
};
function _73c(_73d){
var _73e=$.data(_73d,"datagrid");
var opts=_73e.options;
if(opts.idField){
return _73e.checkedRows;
}else{
var rows=[];
opts.finder.getTr(_73d,"","checked",2).each(function(){
rows.push(opts.finder.getRow(_73d,$(this)));
});
return rows;
}
};
function _73f(_740,_741){
var _742=$.data(_740,"datagrid");
var dc=_742.dc;
var opts=_742.options;
var tr=opts.finder.getTr(_740,_741);
if(tr.length){
if(tr.closest("table").hasClass("datagrid-btable-frozen")){
return;
}
var _743=dc.view2.children("div.datagrid-header")._outerHeight();
var _744=dc.body2;
var _745=opts.scrollbarSize;
if(_744[0].offsetHeight&&_744[0].clientHeight&&_744[0].offsetHeight<=_744[0].clientHeight){
_745=0;
}
var _746=_744.outerHeight(true)-_744.outerHeight();
var top=tr.position().top-_743-_746;
if(top<0){
_744.scrollTop(_744.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_744.height()-_745){
_744.scrollTop(_744.scrollTop()+top+tr._outerHeight()-_744.height()+_745);
}
}
}
};
function _6c3(_747,_748){
var _749=$.data(_747,"datagrid");
var opts=_749.options;
opts.finder.getTr(_747,_749.highlightIndex).removeClass("datagrid-row-over");
opts.finder.getTr(_747,_748).addClass("datagrid-row-over");
_749.highlightIndex=_748;
};
function _6ca(_74a,_74b,_74c,_74d){
var _74e=$.data(_74a,"datagrid");
var opts=_74e.options;
var row=opts.finder.getRow(_74a,_74b);
if(!row){
return;
}
if(opts.onBeforeSelect.apply(_74a,_64a(_74a,[_74b,row]))==false){
return;
}
if(opts.singleSelect){
_74f(_74a,true);
_74e.selectedRows=[];
}
if(!_74c&&opts.checkOnSelect){
_6c7(_74a,_74b,true);
}
if(opts.idField){
_649(_74e.selectedRows,opts.idField,row);
}
opts.finder.getTr(_74a,_74b).addClass("datagrid-row-selected");
opts.onSelect.apply(_74a,_64a(_74a,[_74b,row]));
if(!_74d&&opts.scrollOnSelect){
_73f(_74a,_74b);
}
};
function _6cb(_750,_751,_752){
var _753=$.data(_750,"datagrid");
var dc=_753.dc;
var opts=_753.options;
var row=opts.finder.getRow(_750,_751);
if(!row){
return;
}
if(opts.onBeforeUnselect.apply(_750,_64a(_750,[_751,row]))==false){
return;
}
if(!_752&&opts.checkOnSelect){
_6c8(_750,_751,true);
}
opts.finder.getTr(_750,_751).removeClass("datagrid-row-selected");
if(opts.idField){
_648(_753.selectedRows,opts.idField,row[opts.idField]);
}
opts.onUnselect.apply(_750,_64a(_750,[_751,row]));
};
function _754(_755,_756){
var _757=$.data(_755,"datagrid");
var opts=_757.options;
var rows=opts.finder.getRows(_755);
var _758=$.data(_755,"datagrid").selectedRows;
if(!_756&&opts.checkOnSelect){
_6b5(_755,true);
}
opts.finder.getTr(_755,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _759=0;_759<rows.length;_759++){
_649(_758,opts.idField,rows[_759]);
}
}
opts.onSelectAll.call(_755,rows);
};
function _74f(_75a,_75b){
var _75c=$.data(_75a,"datagrid");
var opts=_75c.options;
var rows=opts.finder.getRows(_75a);
var _75d=$.data(_75a,"datagrid").selectedRows;
if(!_75b&&opts.checkOnSelect){
_6b6(_75a,true);
}
opts.finder.getTr(_75a,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _75e=0;_75e<rows.length;_75e++){
_648(_75d,opts.idField,rows[_75e][opts.idField]);
}
}
opts.onUnselectAll.call(_75a,rows);
};
function _6c7(_75f,_760,_761){
var _762=$.data(_75f,"datagrid");
var opts=_762.options;
var row=opts.finder.getRow(_75f,_760);
if(!row){
return;
}
if(opts.onBeforeCheck.apply(_75f,_64a(_75f,[_760,row]))==false){
return;
}
if(opts.singleSelect&&opts.selectOnCheck){
_6b6(_75f,true);
_762.checkedRows=[];
}
if(!_761&&opts.selectOnCheck){
_6ca(_75f,_760,true);
}
var tr=opts.finder.getTr(_75f,_760).addClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
tr=opts.finder.getTr(_75f,"","checked",2);
if(tr.length==opts.finder.getRows(_75f).length){
var dc=_762.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",true);
}
if(opts.idField){
_649(_762.checkedRows,opts.idField,row);
}
opts.onCheck.apply(_75f,_64a(_75f,[_760,row]));
};
function _6c8(_763,_764,_765){
var _766=$.data(_763,"datagrid");
var opts=_766.options;
var row=opts.finder.getRow(_763,_764);
if(!row){
return;
}
if(opts.onBeforeUncheck.apply(_763,_64a(_763,[_764,row]))==false){
return;
}
if(!_765&&opts.selectOnCheck){
_6cb(_763,_764,true);
}
var tr=opts.finder.getTr(_763,_764).removeClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",false);
var dc=_766.dc;
var _767=dc.header1.add(dc.header2);
_767.find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
_648(_766.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.apply(_763,_64a(_763,[_764,row]));
};
function _6b5(_768,_769){
var _76a=$.data(_768,"datagrid");
var opts=_76a.options;
var rows=opts.finder.getRows(_768);
if(!_769&&opts.selectOnCheck){
_754(_768,true);
}
var dc=_76a.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_768,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_649(_76a.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_768,rows);
};
function _6b6(_76b,_76c){
var _76d=$.data(_76b,"datagrid");
var opts=_76d.options;
var rows=opts.finder.getRows(_76b);
if(!_76c&&opts.selectOnCheck){
_74f(_76b,true);
}
var dc=_76d.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_76b,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_648(_76d.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_76b,rows);
};
function _76e(_76f,_770){
var opts=$.data(_76f,"datagrid").options;
var tr=opts.finder.getTr(_76f,_770);
var row=opts.finder.getRow(_76f,_770);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.apply(_76f,_64a(_76f,[_770,row]))==false){
return;
}
tr.addClass("datagrid-row-editing");
_771(_76f,_770);
_711(_76f);
tr.find("div.datagrid-editable").each(function(){
var _772=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_772]);
});
_773(_76f,_770);
opts.onBeginEdit.apply(_76f,_64a(_76f,[_770,row]));
};
function _774(_775,_776,_777){
var _778=$.data(_775,"datagrid");
var opts=_778.options;
var _779=_778.updatedRows;
var _77a=_778.insertedRows;
var tr=opts.finder.getTr(_775,_776);
var row=opts.finder.getRow(_775,_776);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_777){
if(!_773(_775,_776)){
return;
}
var _77b=false;
var _77c={};
tr.find("div.datagrid-editable").each(function(){
var _77d=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var t=$(ed.target);
var _77e=t.data("textbox")?t.textbox("textbox"):t;
if(_77e.is(":focus")){
_77e.triggerHandler("blur");
}
var _77f=ed.actions.getValue(ed.target);
if(row[_77d]!==_77f){
row[_77d]=_77f;
_77b=true;
_77c[_77d]=_77f;
}
});
if(_77b){
if(_647(_77a,row)==-1){
if(_647(_779,row)==-1){
_779.push(row);
}
}
}
opts.onEndEdit.apply(_775,_64a(_775,[_776,row,_77c]));
}
tr.removeClass("datagrid-row-editing");
_780(_775,_776);
$(_775).datagrid("refreshRow",_776);
if(!_777){
opts.onAfterEdit.apply(_775,_64a(_775,[_776,row,_77c]));
}else{
opts.onCancelEdit.apply(_775,_64a(_775,[_776,row]));
}
};
function _781(_782,_783){
var opts=$.data(_782,"datagrid").options;
var tr=opts.finder.getTr(_782,_783);
var _784=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_784.push(ed);
}
});
return _784;
};
function _785(_786,_787){
var _788=_781(_786,_787.index!=undefined?_787.index:_787.id);
for(var i=0;i<_788.length;i++){
if(_788[i].field==_787.field){
return _788[i];
}
}
return null;
};
function _771(_789,_78a){
var opts=$.data(_789,"datagrid").options;
var tr=opts.finder.getTr(_789,_78a);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _78b=$(this).attr("field");
var col=_6a4(_789,_78b);
if(col&&col.editor){
var _78c,_78d;
if(typeof col.editor=="string"){
_78c=col.editor;
}else{
_78c=col.editor.type;
_78d=col.editor.options;
}
var _78e=opts.editors[_78c];
if(_78e){
var _78f=cell.html();
var _790=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_790);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_78e,target:_78e.init(cell.find("td"),$.extend({height:opts.editorHeight},_78d)),field:_78b,type:_78c,oldHtml:_78f});
}
}
});
_671(_789,_78a,true);
};
function _780(_791,_792){
var opts=$.data(_791,"datagrid").options;
var tr=opts.finder.getTr(_791,_792);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _773(_793,_794){
var tr=$.data(_793,"datagrid").options.finder.getTr(_793,_794);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _795=tr.find(".validatebox-invalid");
return _795.length==0;
};
function _796(_797,_798){
var _799=$.data(_797,"datagrid").insertedRows;
var _79a=$.data(_797,"datagrid").deletedRows;
var _79b=$.data(_797,"datagrid").updatedRows;
if(!_798){
var rows=[];
rows=rows.concat(_799);
rows=rows.concat(_79a);
rows=rows.concat(_79b);
return rows;
}else{
if(_798=="inserted"){
return _799;
}else{
if(_798=="deleted"){
return _79a;
}else{
if(_798=="updated"){
return _79b;
}
}
}
}
return [];
};
function _79c(_79d,_79e){
var _79f=$.data(_79d,"datagrid");
var opts=_79f.options;
var data=_79f.data;
var _7a0=_79f.insertedRows;
var _7a1=_79f.deletedRows;
$(_79d).datagrid("cancelEdit",_79e);
var row=opts.finder.getRow(_79d,_79e);
if(_647(_7a0,row)>=0){
_648(_7a0,row);
}else{
_7a1.push(row);
}
_648(_79f.selectedRows,opts.idField,row[opts.idField]);
_648(_79f.checkedRows,opts.idField,row[opts.idField]);
opts.view.deleteRow.call(opts.view,_79d,_79e);
if(opts.height=="auto"){
_671(_79d);
}
$(_79d).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _7a2(_7a3,_7a4){
var data=$.data(_7a3,"datagrid").data;
var view=$.data(_7a3,"datagrid").options.view;
var _7a5=$.data(_7a3,"datagrid").insertedRows;
view.insertRow.call(view,_7a3,_7a4.index,_7a4.row);
_7a5.push(_7a4.row);
$(_7a3).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _7a6(_7a7,row){
var data=$.data(_7a7,"datagrid").data;
var view=$.data(_7a7,"datagrid").options.view;
var _7a8=$.data(_7a7,"datagrid").insertedRows;
view.insertRow.call(view,_7a7,null,row);
_7a8.push(row);
$(_7a7).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _7a9(_7aa,_7ab){
var _7ac=$.data(_7aa,"datagrid");
var opts=_7ac.options;
var row=opts.finder.getRow(_7aa,_7ab.index);
var _7ad=false;
_7ab.row=_7ab.row||{};
for(var _7ae in _7ab.row){
if(row[_7ae]!==_7ab.row[_7ae]){
_7ad=true;
break;
}
}
if(_7ad){
if(_647(_7ac.insertedRows,row)==-1){
if(_647(_7ac.updatedRows,row)==-1){
_7ac.updatedRows.push(row);
}
}
opts.view.updateRow.call(opts.view,_7aa,_7ab.index,_7ab.row);
}
};
function _7af(_7b0){
var _7b1=$.data(_7b0,"datagrid");
var data=_7b1.data;
var rows=data.rows;
var _7b2=[];
for(var i=0;i<rows.length;i++){
_7b2.push($.extend({},rows[i]));
}
_7b1.originalRows=_7b2;
_7b1.updatedRows=[];
_7b1.insertedRows=[];
_7b1.deletedRows=[];
};
function _7b3(_7b4){
var data=$.data(_7b4,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_773(_7b4,i)){
$(_7b4).datagrid("endEdit",i);
}else{
ok=false;
}
}
if(ok){
_7af(_7b4);
}
};
function _7b5(_7b6){
var _7b7=$.data(_7b6,"datagrid");
var opts=_7b7.options;
var _7b8=_7b7.originalRows;
var _7b9=_7b7.insertedRows;
var _7ba=_7b7.deletedRows;
var _7bb=_7b7.selectedRows;
var _7bc=_7b7.checkedRows;
var data=_7b7.data;
function _7bd(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _7be(ids,_7bf){
for(var i=0;i<ids.length;i++){
var _7c0=_736(_7b6,ids[i]);
if(_7c0>=0){
(_7bf=="s"?_6ca:_6c7)(_7b6,_7c0,true);
}
}
};
for(var i=0;i<data.rows.length;i++){
$(_7b6).datagrid("cancelEdit",i);
}
var _7c1=_7bd(_7bb);
var _7c2=_7bd(_7bc);
_7bb.splice(0,_7bb.length);
_7bc.splice(0,_7bc.length);
data.total+=_7ba.length-_7b9.length;
data.rows=_7b8;
_6e1(_7b6,data);
_7be(_7c1,"s");
_7be(_7c2,"c");
_7af(_7b6);
};
function _6e0(_7c3,_7c4,cb){
var opts=$.data(_7c3,"datagrid").options;
if(_7c4){
opts.queryParams=_7c4;
}
var _7c5=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_7c5,{page:opts.pageNumber||1,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_7c5,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_7c3,_7c5)==false){
opts.view.setEmptyMsg(_7c3);
return;
}
$(_7c3).datagrid("loading");
var _7c6=opts.loader.call(_7c3,_7c5,function(data){
$(_7c3).datagrid("loaded");
$(_7c3).datagrid("loadData",data);
if(cb){
cb();
}
},function(){
$(_7c3).datagrid("loaded");
opts.onLoadError.apply(_7c3,arguments);
});
if(_7c6==false){
$(_7c3).datagrid("loaded");
opts.view.setEmptyMsg(_7c3);
}
};
function _7c7(_7c8,_7c9){
var opts=$.data(_7c8,"datagrid").options;
_7c9.type=_7c9.type||"body";
_7c9.rowspan=_7c9.rowspan||1;
_7c9.colspan=_7c9.colspan||1;
if(_7c9.rowspan==1&&_7c9.colspan==1){
return;
}
var tr=opts.finder.getTr(_7c8,(_7c9.index!=undefined?_7c9.index:_7c9.id),_7c9.type);
if(!tr.length){
return;
}
var td=tr.find("td[field=\""+_7c9.field+"\"]");
td.attr("rowspan",_7c9.rowspan).attr("colspan",_7c9.colspan);
td.addClass("datagrid-td-merged");
_7ca(td.next(),_7c9.colspan-1);
for(var i=1;i<_7c9.rowspan;i++){
tr=tr.next();
if(!tr.length){
break;
}
_7ca(tr.find("td[field=\""+_7c9.field+"\"]"),_7c9.colspan);
}
_710(_7c8,td);
function _7ca(td,_7cb){
for(var i=0;i<_7cb;i++){
td.hide();
td=td.next();
}
};
};
$.fn.datagrid=function(_7cc,_7cd){
if(typeof _7cc=="string"){
return $.fn.datagrid.methods[_7cc](this,_7cd);
}
_7cc=_7cc||{};
return this.each(function(){
var _7ce=$.data(this,"datagrid");
var opts;
if(_7ce){
opts=$.extend(_7ce.options,_7cc);
_7ce.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_7cc);
$(this).css("width","").css("height","");
var _7cf=_685(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_7cf.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_7cf.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_7cf.panel,dc:_7cf.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_68e(this);
_6a5(this);
_65b(this);
if(opts.data){
$(this).datagrid("loadData",opts.data);
}else{
var data=$.fn.datagrid.parseData(this);
if(data.total>0){
$(this).datagrid("loadData",data);
}else{
$(this).datagrid("autoSizeColumn");
}
}
_6e0(this);
});
};
function _7d0(_7d1){
var _7d2={};
$.map(_7d1,function(name){
_7d2[name]=_7d3(name);
});
return _7d2;
function _7d3(name){
function isA(_7d4){
return $.data($(_7d4)[0],name)!=undefined;
};
return {init:function(_7d5,_7d6){
var _7d7=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7d5);
if(_7d7[name]&&name!="text"){
return _7d7[name](_7d6);
}else{
return _7d7;
}
},destroy:function(_7d8){
if(isA(_7d8,name)){
$(_7d8)[name]("destroy");
}
},getValue:function(_7d9){
if(isA(_7d9,name)){
var opts=$(_7d9)[name]("options");
if(opts.multiple){
return $(_7d9)[name]("getValues").join(opts.separator);
}else{
return $(_7d9)[name]("getValue");
}
}else{
return $(_7d9).val();
}
},setValue:function(_7da,_7db){
if(isA(_7da,name)){
var opts=$(_7da)[name]("options");
if(opts.multiple){
if(_7db){
$(_7da)[name]("setValues",_7db.split(opts.separator));
}else{
$(_7da)[name]("clear");
}
}else{
$(_7da)[name]("setValue",_7db);
}
}else{
$(_7da).val(_7db);
}
},resize:function(_7dc,_7dd){
if(isA(_7dc,name)){
$(_7dc)[name]("resize",_7dd);
}else{
$(_7dc)._size({width:_7dd,height:$.fn.datagrid.defaults.editorHeight});
}
}};
};
};
var _7de=$.extend({},_7d0(["text","textbox","passwordbox","filebox","numberbox","numberspinner","combobox","combotree","combogrid","combotreegrid","datebox","datetimebox","timespinner","datetimespinner"]),{textarea:{init:function(_7df,_7e0){
var _7e1=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_7df);
_7e1.css("vertical-align","middle")._outerHeight(_7e0.height);
return _7e1;
},getValue:function(_7e2){
return $(_7e2).val();
},setValue:function(_7e3,_7e4){
$(_7e3).val(_7e4);
},resize:function(_7e5,_7e6){
$(_7e5)._outerWidth(_7e6);
}},checkbox:{init:function(_7e7,_7e8){
var _7e9=$("<input type=\"checkbox\">").appendTo(_7e7);
_7e9.val(_7e8.on);
_7e9.attr("offval",_7e8.off);
return _7e9;
},getValue:function(_7ea){
if($(_7ea).is(":checked")){
return $(_7ea).val();
}else{
return $(_7ea).attr("offval");
}
},setValue:function(_7eb,_7ec){
var _7ed=false;
if($(_7eb).val()==_7ec){
_7ed=true;
}
$(_7eb)._propAttr("checked",_7ed);
}},validatebox:{init:function(_7ee,_7ef){
var _7f0=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7ee);
_7f0.validatebox(_7ef);
return _7f0;
},destroy:function(_7f1){
$(_7f1).validatebox("destroy");
},getValue:function(_7f2){
return $(_7f2).val();
},setValue:function(_7f3,_7f4){
$(_7f3).val(_7f4);
},resize:function(_7f5,_7f6){
$(_7f5)._outerWidth(_7f6)._outerHeight($.fn.datagrid.defaults.editorHeight);
}}});
$.fn.datagrid.methods={options:function(jq){
var _7f7=$.data(jq[0],"datagrid").options;
var _7f8=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_7f7,{width:_7f8.width,height:_7f8.height,closed:_7f8.closed,collapsed:_7f8.collapsed,minimized:_7f8.minimized,maximized:_7f8.maximized});
return opts;
},setSelectionState:function(jq){
return jq.each(function(){
_72e(this);
});
},createStyleSheet:function(jq){
return _64c(jq[0]);
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_7f9){
return _6a3(jq[0],_7f9);
},getColumnOption:function(jq,_7fa){
return _6a4(jq[0],_7fa);
},resize:function(jq,_7fb){
return jq.each(function(){
_65b(this,_7fb);
});
},load:function(jq,_7fc){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7fc=="string"){
opts.url=_7fc;
_7fc=null;
}
opts.pageNumber=1;
var _7fd=$(this).datagrid("getPager");
_7fd.pagination("refresh",{pageNumber:1});
_6e0(this,_7fc);
});
},reload:function(jq,_7fe){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7fe=="string"){
opts.url=_7fe;
_7fe=null;
}
_6e0(this,_7fe);
});
},reloadFooter:function(jq,_7ff){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_7ff){
$.data(this,"datagrid").footer=_7ff;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _800=$(this).datagrid("getPanel");
if(!_800.children("div.datagrid-mask").length){
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_800);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_800);
msg._outerHeight(40);
msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _801=$(this).datagrid("getPanel");
_801.children("div.datagrid-mask-msg").remove();
_801.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_6ed(this);
});
},fixColumnSize:function(jq,_802){
return jq.each(function(){
_70b(this,_802);
});
},fixRowHeight:function(jq,_803){
return jq.each(function(){
_671(this,_803);
});
},freezeRow:function(jq,_804){
return jq.each(function(){
_67e(this,_804);
});
},autoSizeColumn:function(jq,_805){
return jq.each(function(){
_6ff(this,_805);
});
},loadData:function(jq,data){
return jq.each(function(){
_6e1(this,data);
_7af(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _736(jq[0],id);
},getChecked:function(jq){
return _73c(jq[0]);
},getSelected:function(jq){
var rows=_739(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _739(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _806=$.data(this,"datagrid");
var _807=_806.selectedRows;
var _808=_806.checkedRows;
_807.splice(0,_807.length);
_74f(this);
if(_806.options.checkOnSelect){
_808.splice(0,_808.length);
}
});
},clearChecked:function(jq){
return jq.each(function(){
var _809=$.data(this,"datagrid");
var _80a=_809.selectedRows;
var _80b=_809.checkedRows;
_80b.splice(0,_80b.length);
_6b6(this);
if(_809.options.selectOnCheck){
_80a.splice(0,_80a.length);
}
});
},scrollTo:function(jq,_80c){
return jq.each(function(){
_73f(this,_80c);
});
},highlightRow:function(jq,_80d){
return jq.each(function(){
_6c3(this,_80d);
_73f(this,_80d);
});
},selectAll:function(jq){
return jq.each(function(){
_754(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_74f(this);
});
},selectRow:function(jq,_80e){
return jq.each(function(){
_6ca(this,_80e);
});
},selectRecord:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
if(opts.idField){
var _80f=_736(this,id);
if(_80f>=0){
$(this).datagrid("selectRow",_80f);
}
}
});
},unselectRow:function(jq,_810){
return jq.each(function(){
_6cb(this,_810);
});
},checkRow:function(jq,_811){
return jq.each(function(){
_6c7(this,_811);
});
},uncheckRow:function(jq,_812){
return jq.each(function(){
_6c8(this,_812);
});
},checkAll:function(jq){
return jq.each(function(){
_6b5(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_6b6(this);
});
},beginEdit:function(jq,_813){
return jq.each(function(){
_76e(this,_813);
});
},endEdit:function(jq,_814){
return jq.each(function(){
_774(this,_814,false);
});
},cancelEdit:function(jq,_815){
return jq.each(function(){
_774(this,_815,true);
});
},getEditors:function(jq,_816){
return _781(jq[0],_816);
},getEditor:function(jq,_817){
return _785(jq[0],_817);
},refreshRow:function(jq,_818){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_818);
});
},validateRow:function(jq,_819){
return _773(jq[0],_819);
},updateRow:function(jq,_81a){
return jq.each(function(){
_7a9(this,_81a);
});
},appendRow:function(jq,row){
return jq.each(function(){
_7a6(this,row);
});
},insertRow:function(jq,_81b){
return jq.each(function(){
_7a2(this,_81b);
});
},deleteRow:function(jq,_81c){
return jq.each(function(){
_79c(this,_81c);
});
},getChanges:function(jq,_81d){
return _796(jq[0],_81d);
},acceptChanges:function(jq){
return jq.each(function(){
_7b3(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_7b5(this);
});
},mergeCells:function(jq,_81e){
return jq.each(function(){
_7c7(this,_81e);
});
},showColumn:function(jq,_81f){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_81f);
if(col.hidden){
col.hidden=false;
$(this).datagrid("getPanel").find("td[field=\""+_81f+"\"]").show();
_6e2(this,_81f,1);
$(this).datagrid("fitColumns");
}
});
},hideColumn:function(jq,_820){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_820);
if(!col.hidden){
col.hidden=true;
$(this).datagrid("getPanel").find("td[field=\""+_820+"\"]").hide();
_6e2(this,_820,-1);
$(this).datagrid("fitColumns");
}
});
},sort:function(jq,_821){
return jq.each(function(){
_6b7(this,_821);
});
},gotoPage:function(jq,_822){
return jq.each(function(){
var _823=this;
var page,cb;
if(typeof _822=="object"){
page=_822.page;
cb=_822.callback;
}else{
page=_822;
}
$(_823).datagrid("options").pageNumber=page;
$(_823).datagrid("getPager").pagination("refresh",{pageNumber:page});
_6e0(_823,null,function(){
if(cb){
cb.call(_823,page);
}
});
});
}};
$.fn.datagrid.parseOptions=function(_824){
var t=$(_824);
return $.extend({},$.fn.panel.parseOptions(_824),$.parser.parseOptions(_824,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number",scrollOnSelect:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
$.fn.datagrid.parseData=function(_825){
var t=$(_825);
var data={total:0,rows:[]};
var _826=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));
t.find("tbody tr").each(function(){
data.total++;
var row={};
$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));
for(var i=0;i<_826.length;i++){
row[_826[i]]=$(this).find("td:eq("+i+")").html();
}
data.rows.push(row);
});
return data;
};
var _827={render:function(_828,_829,_82a){
var rows=$(_828).datagrid("getRows");
$(_829).empty().html(this.renderTable(_828,0,rows,_82a));
},renderFooter:function(_82b,_82c,_82d){
var opts=$.data(_82b,"datagrid").options;
var rows=$.data(_82b,"datagrid").footer||[];
var _82e=$(_82b).datagrid("getColumnFields",_82d);
var _82f=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_82f.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_82f.push(this.renderRow.call(this,_82b,_82e,_82d,i,rows[i]));
_82f.push("</tr>");
}
_82f.push("</tbody></table>");
$(_82c).html(_82f.join(""));
},renderTable:function(_830,_831,rows,_832){
var _833=$.data(_830,"datagrid");
var opts=_833.options;
if(_832){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return "";
}
}
var _834=$(_830).datagrid("getColumnFields",_832);
var _835=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var css=opts.rowStyler?opts.rowStyler.call(_830,_831,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_831%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _836=cs.s?"style=\""+cs.s+"\"":"";
var _837=_833.rowIdPrefix+"-"+(_832?1:2)+"-"+_831;
_835.push("<tr id=\""+_837+"\" datagrid-row-index=\""+_831+"\" "+cls+" "+_836+">");
_835.push(this.renderRow.call(this,_830,_834,_832,_831,row));
_835.push("</tr>");
_831++;
}
_835.push("</tbody></table>");
return _835.join("");
},renderRow:function(_838,_839,_83a,_83b,_83c){
var opts=$.data(_838,"datagrid").options;
var cc=[];
if(_83a&&opts.rownumbers){
var _83d=_83b+1;
if(opts.pagination){
_83d+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_83d+"</div></td>");
}
for(var i=0;i<_839.length;i++){
var _83e=_839[i];
var col=$(_838).datagrid("getColumnOption",_83e);
if(col){
var _83f=_83c[_83e];
var css=col.styler?(col.styler.call(_838,_83f,_83c,_83b)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _840=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_83e+"\" "+cls+" "+_840+">");
var _840="";
if(!col.checkbox){
if(col.align){
_840+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_840+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_840+="height:auto;";
}
}
}
cc.push("<div style=\""+_840+"\" ");
cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");
cc.push(">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" "+(_83c.checked?"checked=\"checked\"":""));
cc.push(" name=\""+_83e+"\" value=\""+(_83f!=undefined?_83f:"")+"\">");
}else{
if(col.formatter){
cc.push(col.formatter(_83f,_83c,_83b));
}else{
cc.push(_83f);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},getStyleValue:function(css){
var _841="";
var _842="";
if(typeof css=="string"){
_842=css;
}else{
if(css){
_841=css["class"]||"";
_842=css["style"]||"";
}
}
return {c:_841,s:_842};
},refreshRow:function(_843,_844){
this.updateRow.call(this,_843,_844,{});
},updateRow:function(_845,_846,row){
var opts=$.data(_845,"datagrid").options;
var _847=opts.finder.getRow(_845,_846);
$.extend(_847,row);
var cs=_848.call(this,_846);
var _849=cs.s;
var cls="datagrid-row "+(_846%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c;
function _848(_84a){
var css=opts.rowStyler?opts.rowStyler.call(_845,_84a,_847):"";
return this.getStyleValue(css);
};
function _84b(_84c){
var tr=opts.finder.getTr(_845,_846,"body",(_84c?1:2));
if(!tr.length){
return;
}
var _84d=$(_845).datagrid("getColumnFields",_84c);
var _84e=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_845,_84d,_84c,_846,_847));
var _84f=(tr.hasClass("datagrid-row-checked")?" datagrid-row-checked":"")+(tr.hasClass("datagrid-row-selected")?" datagrid-row-selected":"");
tr.attr("style",_849).attr("class",cls+_84f);
if(_84e){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_84b.call(this,true);
_84b.call(this,false);
$(_845).datagrid("fixRowHeight",_846);
},insertRow:function(_850,_851,row){
var _852=$.data(_850,"datagrid");
var opts=_852.options;
var dc=_852.dc;
var data=_852.data;
if(_851==undefined||_851==null){
_851=data.rows.length;
}
if(_851>data.rows.length){
_851=data.rows.length;
}
function _853(_854){
var _855=_854?1:2;
for(var i=data.rows.length-1;i>=_851;i--){
var tr=opts.finder.getTr(_850,i,"body",_855);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_852.rowIdPrefix+"-"+_855+"-"+(i+1));
if(_854&&opts.rownumbers){
var _856=i+2;
if(opts.pagination){
_856+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_856);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");
}
}
};
function _857(_858){
var _859=_858?1:2;
var _85a=$(_850).datagrid("getColumnFields",_858);
var _85b=_852.rowIdPrefix+"-"+_859+"-"+_851;
var tr="<tr id=\""+_85b+"\" class=\"datagrid-row\" datagrid-row-index=\""+_851+"\"></tr>";
if(_851>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_850,"","last",_859).after(tr);
}else{
var cc=_858?dc.body1:dc.body2;
cc.html("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_850,_851+1,"body",_859).before(tr);
}
};
_853.call(this,true);
_853.call(this,false);
_857.call(this,true);
_857.call(this,false);
data.total+=1;
data.rows.splice(_851,0,row);
this.setEmptyMsg(_850);
this.refreshRow.call(this,_850,_851);
},deleteRow:function(_85c,_85d){
var _85e=$.data(_85c,"datagrid");
var opts=_85e.options;
var data=_85e.data;
function _85f(_860){
var _861=_860?1:2;
for(var i=_85d+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_85c,i,"body",_861);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_85e.rowIdPrefix+"-"+_861+"-"+(i-1));
if(_860&&opts.rownumbers){
var _862=i;
if(opts.pagination){
_862+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_862);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");
}
}
};
opts.finder.getTr(_85c,_85d).remove();
_85f.call(this,true);
_85f.call(this,false);
data.total-=1;
data.rows.splice(_85d,1);
this.setEmptyMsg(_85c);
},onBeforeRender:function(_863,rows){
},onAfterRender:function(_864){
var _865=$.data(_864,"datagrid");
var opts=_865.options;
if(opts.showFooter){
var _866=$(_864).datagrid("getPanel").find("div.datagrid-footer");
_866.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
this.setEmptyMsg(_864);
},setEmptyMsg:function(_867){
var _868=$.data(_867,"datagrid");
var opts=_868.options;
var _869=opts.finder.getRows(_867).length==0;
if(_869){
this.renderEmptyRow(_867);
}
if(opts.emptyMsg){
_868.dc.view.children(".datagrid-empty").remove();
if(_869){
var h=_868.dc.header2.parent().outerHeight();
var d=$("<div class=\"datagrid-empty\"></div>").appendTo(_868.dc.view);
d.html(opts.emptyMsg).css("top",h+"px");
}
}
},renderEmptyRow:function(_86a){
var cols=$.map($(_86a).datagrid("getColumnFields"),function(_86b){
return $(_86a).datagrid("getColumnOption",_86b);
});
$.map(cols,function(col){
col.formatter1=col.formatter;
col.styler1=col.styler;
col.formatter=col.styler=undefined;
});
var _86c=$.data(_86a,"datagrid").dc.body2;
_86c.html(this.renderTable(_86a,0,[{}],false));
_86c.find("tbody *").css({height:1,borderColor:"transparent",background:"transparent"});
var tr=_86c.find(".datagrid-row");
tr.removeClass("datagrid-row").removeAttr("datagrid-row-index");
tr.find(".datagrid-cell,.datagrid-cell-check").empty();
$.map(cols,function(col){
col.formatter=col.formatter1;
col.styler=col.styler1;
col.formatter1=col.styler1=undefined;
});
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",resizeEdge:5,autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",emptyMsg:"",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollOnSelect:true,scrollbarSize:18,rownumberWidth:30,editorHeight:24,headerEvents:{mouseover:_6af(true),mouseout:_6af(false),click:_6b3,dblclick:_6b8,contextmenu:_6bb},rowEvents:{mouseover:_6bd(true),mouseout:_6bd(false),click:_6c4,dblclick:_6ce,contextmenu:_6d2},rowStyler:function(_86d,_86e){
},loader:function(_86f,_870,_871){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_86f,dataType:"json",success:function(data){
_870(data);
},error:function(){
_871.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},editors:_7de,finder:{getTr:function(_872,_873,type,_874){
type=type||"body";
_874=_874||0;
var _875=$.data(_872,"datagrid");
var dc=_875.dc;
var opts=_875.options;
if(_874==0){
var tr1=opts.finder.getTr(_872,_873,type,1);
var tr2=opts.finder.getTr(_872,_873,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_875.rowIdPrefix+"-"+_874+"-"+_873);
if(!tr.length){
tr=(_874==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_873+"]");
}
return tr;
}else{
if(type=="footer"){
return (_874==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_873+"]");
}else{
if(type=="selected"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");
}else{
if(type=="editing"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-editing");
}else{
if(type=="last"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_874==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_874==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
}
}
}
},getRow:function(_876,p){
var _877=(typeof p=="object")?p.attr("datagrid-row-index"):p;
return $.data(_876,"datagrid").data.rows[parseInt(_877)];
},getRows:function(_878){
return $(_878).datagrid("getRows");
}},view:_827,onBeforeLoad:function(_879){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_87a,_87b){
},onDblClickRow:function(_87c,_87d){
},onClickCell:function(_87e,_87f,_880){
},onDblClickCell:function(_881,_882,_883){
},onBeforeSortColumn:function(sort,_884){
},onSortColumn:function(sort,_885){
},onResizeColumn:function(_886,_887){
},onBeforeSelect:function(_888,_889){
},onSelect:function(_88a,_88b){
},onBeforeUnselect:function(_88c,_88d){
},onUnselect:function(_88e,_88f){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onBeforeCheck:function(_890,_891){
},onCheck:function(_892,_893){
},onBeforeUncheck:function(_894,_895){
},onUncheck:function(_896,_897){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_898,_899){
},onBeginEdit:function(_89a,_89b){
},onEndEdit:function(_89c,_89d,_89e){
},onAfterEdit:function(_89f,_8a0,_8a1){
},onCancelEdit:function(_8a2,_8a3){
},onHeaderContextMenu:function(e,_8a4){
},onRowContextMenu:function(e,_8a5,_8a6){
}});
})(jQuery);
(function($){
var _8a7;
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.datagrid-view,div.combo-panel");
if(p.length){
return;
}
_8a8(_8a7);
_8a7=undefined;
});
function _8a9(_8aa){
var _8ab=$.data(_8aa,"propertygrid");
var opts=$.data(_8aa,"propertygrid").options;
$(_8aa).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?opts.groupView:opts.view),onBeforeEdit:function(_8ac,row){
if(opts.onBeforeEdit.call(_8aa,_8ac,row)==false){
return false;
}
var dg=$(this);
var row=dg.datagrid("getRows")[_8ac];
var col=dg.datagrid("getColumnOption","value");
col.editor=row.editor;
},onClickCell:function(_8ad,_8ae,_8af){
if(_8a7!=this){
_8a8(_8a7);
_8a7=this;
}
if(opts.editIndex!=_8ad){
_8a8(_8a7);
$(this).datagrid("beginEdit",_8ad);
var ed=$(this).datagrid("getEditor",{index:_8ad,field:_8ae});
if(!ed){
ed=$(this).datagrid("getEditor",{index:_8ad,field:"value"});
}
if(ed){
var t=$(ed.target);
var _8b0=t.data("textbox")?t.textbox("textbox"):t;
_8b0.focus();
opts.editIndex=_8ad;
}
}
opts.onClickCell.call(_8aa,_8ad,_8ae,_8af);
},loadFilter:function(data){
_8a8(this);
return opts.loadFilter.call(this,data);
}}));
};
function _8a8(_8b1){
var t=$(_8b1);
if(!t.length){
return;
}
var opts=$.data(_8b1,"propertygrid").options;
opts.finder.getTr(_8b1,null,"editing").each(function(){
var _8b2=parseInt($(this).attr("datagrid-row-index"));
if(t.datagrid("validateRow",_8b2)){
t.datagrid("endEdit",_8b2);
}else{
t.datagrid("cancelEdit",_8b2);
}
});
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_8b3,_8b4){
if(typeof _8b3=="string"){
var _8b5=$.fn.propertygrid.methods[_8b3];
if(_8b5){
return _8b5(this,_8b4);
}else{
return this.datagrid(_8b3,_8b4);
}
}
_8b3=_8b3||{};
return this.each(function(){
var _8b6=$.data(this,"propertygrid");
if(_8b6){
$.extend(_8b6.options,_8b3);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_8b3);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_8a9(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_8b7){
return $.extend({},$.fn.datagrid.parseOptions(_8b7),$.parser.parseOptions(_8b7,[{showGroup:"boolean"}]));
};
var _8b8=$.extend({},$.fn.datagrid.defaults.view,{render:function(_8b9,_8ba,_8bb){
var _8bc=[];
var _8bd=this.groups;
for(var i=0;i<_8bd.length;i++){
_8bc.push(this.renderGroup.call(this,_8b9,i,_8bd[i],_8bb));
}
$(_8ba).html(_8bc.join(""));
},renderGroup:function(_8be,_8bf,_8c0,_8c1){
var _8c2=$.data(_8be,"datagrid");
var opts=_8c2.options;
var _8c3=$(_8be).datagrid("getColumnFields",_8c1);
var _8c4=[];
_8c4.push("<div class=\"datagrid-group\" group-index="+_8bf+">");
if((_8c1&&(opts.rownumbers||opts.frozenColumns.length))||(!_8c1&&!(opts.rownumbers||opts.frozenColumns.length))){
_8c4.push("<span class=\"datagrid-group-expander\">");
_8c4.push("<span class=\"datagrid-row-expander datagrid-row-collapse\">&nbsp;</span>");
_8c4.push("</span>");
}
if(!_8c1){
_8c4.push("<span class=\"datagrid-group-title\">");
_8c4.push(opts.groupFormatter.call(_8be,_8c0.value,_8c0.rows));
_8c4.push("</span>");
}
_8c4.push("</div>");
_8c4.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
var _8c5=_8c0.startIndex;
for(var j=0;j<_8c0.rows.length;j++){
var css=opts.rowStyler?opts.rowStyler.call(_8be,_8c5,_8c0.rows[j]):"";
var _8c6="";
var _8c7="";
if(typeof css=="string"){
_8c7=css;
}else{
if(css){
_8c6=css["class"]||"";
_8c7=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_8c5%2&&opts.striped?"datagrid-row-alt ":" ")+_8c6+"\"";
var _8c8=_8c7?"style=\""+_8c7+"\"":"";
var _8c9=_8c2.rowIdPrefix+"-"+(_8c1?1:2)+"-"+_8c5;
_8c4.push("<tr id=\""+_8c9+"\" datagrid-row-index=\""+_8c5+"\" "+cls+" "+_8c8+">");
_8c4.push(this.renderRow.call(this,_8be,_8c3,_8c1,_8c5,_8c0.rows[j]));
_8c4.push("</tr>");
_8c5++;
}
_8c4.push("</tbody></table>");
return _8c4.join("");
},bindEvents:function(_8ca){
var _8cb=$.data(_8ca,"datagrid");
var dc=_8cb.dc;
var body=dc.body1.add(dc.body2);
var _8cc=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
body.unbind("click").bind("click",function(e){
var tt=$(e.target);
var _8cd=tt.closest("span.datagrid-row-expander");
if(_8cd.length){
var _8ce=_8cd.closest("div.datagrid-group").attr("group-index");
if(_8cd.hasClass("datagrid-row-collapse")){
$(_8ca).datagrid("collapseGroup",_8ce);
}else{
$(_8ca).datagrid("expandGroup",_8ce);
}
}else{
_8cc(e);
}
e.stopPropagation();
});
},onBeforeRender:function(_8cf,rows){
var _8d0=$.data(_8cf,"datagrid");
var opts=_8d0.options;
_8d1();
var _8d2=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _8d3=_8d4(row[opts.groupField]);
if(!_8d3){
_8d3={value:row[opts.groupField],rows:[row]};
_8d2.push(_8d3);
}else{
_8d3.rows.push(row);
}
}
var _8d5=0;
var _8d6=[];
for(var i=0;i<_8d2.length;i++){
var _8d3=_8d2[i];
_8d3.startIndex=_8d5;
_8d5+=_8d3.rows.length;
_8d6=_8d6.concat(_8d3.rows);
}
_8d0.data.rows=_8d6;
this.groups=_8d2;
var that=this;
setTimeout(function(){
that.bindEvents(_8cf);
},0);
function _8d4(_8d7){
for(var i=0;i<_8d2.length;i++){
var _8d8=_8d2[i];
if(_8d8.value==_8d7){
return _8d8;
}
}
return null;
};
function _8d1(){
if(!$("#datagrid-group-style").length){
$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:"+opts.groupHeight+"px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}"+".datagrid-group-title,.datagrid-group-expander{display:inline-block;vertical-align:bottom;height:100%;line-height:"+opts.groupHeight+"px;padding:0 4px;}"+".datagrid-group-expander{width:"+opts.expanderWidth+"px;text-align:center;padding:0}"+".datagrid-row-expander{margin:"+Math.floor((opts.groupHeight-16)/2)+"px 0;display:inline-block;width:16px;height:16px;cursor:pointer}"+"</style>");
}
};
}});
$.extend($.fn.datagrid.methods,{groups:function(jq){
return jq.datagrid("options").view.groups;
},expandGroup:function(jq,_8d9){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8da=view.find(_8d9!=undefined?"div.datagrid-group[group-index=\""+_8d9+"\"]":"div.datagrid-group");
var _8db=_8da.find("span.datagrid-row-expander");
if(_8db.hasClass("datagrid-row-expand")){
_8db.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_8da.next("table").show();
}
$(this).datagrid("fixRowHeight");
});
},collapseGroup:function(jq,_8dc){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8dd=view.find(_8dc!=undefined?"div.datagrid-group[group-index=\""+_8dc+"\"]":"div.datagrid-group");
var _8de=_8dd.find("span.datagrid-row-expander");
if(_8de.hasClass("datagrid-row-collapse")){
_8de.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_8dd.next("table").hide();
}
$(this).datagrid("fixRowHeight");
});
}});
$.extend(_8b8,{refreshGroupTitle:function(_8df,_8e0){
var _8e1=$.data(_8df,"datagrid");
var opts=_8e1.options;
var dc=_8e1.dc;
var _8e2=this.groups[_8e0];
var span=dc.body2.children("div.datagrid-group[group-index="+_8e0+"]").find("span.datagrid-group-title");
span.html(opts.groupFormatter.call(_8df,_8e2.value,_8e2.rows));
},insertRow:function(_8e3,_8e4,row){
var _8e5=$.data(_8e3,"datagrid");
var opts=_8e5.options;
var dc=_8e5.dc;
var _8e6=null;
var _8e7;
if(!_8e5.data.rows.length){
$(_8e3).datagrid("loadData",[row]);
return;
}
for(var i=0;i<this.groups.length;i++){
if(this.groups[i].value==row[opts.groupField]){
_8e6=this.groups[i];
_8e7=i;
break;
}
}
if(_8e6){
if(_8e4==undefined||_8e4==null){
_8e4=_8e5.data.rows.length;
}
if(_8e4<_8e6.startIndex){
_8e4=_8e6.startIndex;
}else{
if(_8e4>_8e6.startIndex+_8e6.rows.length){
_8e4=_8e6.startIndex+_8e6.rows.length;
}
}
$.fn.datagrid.defaults.view.insertRow.call(this,_8e3,_8e4,row);
if(_8e4>=_8e6.startIndex+_8e6.rows.length){
_8e8(_8e4,true);
_8e8(_8e4,false);
}
_8e6.rows.splice(_8e4-_8e6.startIndex,0,row);
}else{
_8e6={value:row[opts.groupField],rows:[row],startIndex:_8e5.data.rows.length};
_8e7=this.groups.length;
dc.body1.append(this.renderGroup.call(this,_8e3,_8e7,_8e6,true));
dc.body2.append(this.renderGroup.call(this,_8e3,_8e7,_8e6,false));
this.groups.push(_8e6);
_8e5.data.rows.push(row);
}
this.refreshGroupTitle(_8e3,_8e7);
function _8e8(_8e9,_8ea){
var _8eb=_8ea?1:2;
var _8ec=opts.finder.getTr(_8e3,_8e9-1,"body",_8eb);
var tr=opts.finder.getTr(_8e3,_8e9,"body",_8eb);
tr.insertAfter(_8ec);
};
},updateRow:function(_8ed,_8ee,row){
var opts=$.data(_8ed,"datagrid").options;
$.fn.datagrid.defaults.view.updateRow.call(this,_8ed,_8ee,row);
var tb=opts.finder.getTr(_8ed,_8ee,"body",2).closest("table.datagrid-btable");
var _8ef=parseInt(tb.prev().attr("group-index"));
this.refreshGroupTitle(_8ed,_8ef);
},deleteRow:function(_8f0,_8f1){
var _8f2=$.data(_8f0,"datagrid");
var opts=_8f2.options;
var dc=_8f2.dc;
var body=dc.body1.add(dc.body2);
var tb=opts.finder.getTr(_8f0,_8f1,"body",2).closest("table.datagrid-btable");
var _8f3=parseInt(tb.prev().attr("group-index"));
$.fn.datagrid.defaults.view.deleteRow.call(this,_8f0,_8f1);
var _8f4=this.groups[_8f3];
if(_8f4.rows.length>1){
_8f4.rows.splice(_8f1-_8f4.startIndex,1);
this.refreshGroupTitle(_8f0,_8f3);
}else{
body.children("div.datagrid-group[group-index="+_8f3+"]").remove();
for(var i=_8f3+1;i<this.groups.length;i++){
body.children("div.datagrid-group[group-index="+i+"]").attr("group-index",i-1);
}
this.groups.splice(_8f3,1);
}
var _8f1=0;
for(var i=0;i<this.groups.length;i++){
var _8f4=this.groups[i];
_8f4.startIndex=_8f1;
_8f1+=_8f4.rows.length;
}
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{groupHeight:21,expanderWidth:16,singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_8b8,groupField:"group",groupFormatter:function(_8f5,rows){
return _8f5;
}});
})(jQuery);
(function($){
function _8f6(_8f7){
var _8f8=$.data(_8f7,"treegrid");
var opts=_8f8.options;
$(_8f7).datagrid($.extend({},opts,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_8f9,_8fa){
_907(_8f7);
opts.onResizeColumn.call(_8f7,_8f9,_8fa);
},onBeforeSortColumn:function(sort,_8fb){
if(opts.onBeforeSortColumn.call(_8f7,sort,_8fb)==false){
return false;
}
},onSortColumn:function(sort,_8fc){
opts.sortName=sort;
opts.sortOrder=_8fc;
if(opts.remoteSort){
_906(_8f7);
}else{
var data=$(_8f7).treegrid("getData");
_935(_8f7,null,data);
}
opts.onSortColumn.call(_8f7,sort,_8fc);
},onClickCell:function(_8fd,_8fe){
opts.onClickCell.call(_8f7,_8fe,find(_8f7,_8fd));
},onDblClickCell:function(_8ff,_900){
opts.onDblClickCell.call(_8f7,_900,find(_8f7,_8ff));
},onRowContextMenu:function(e,_901){
opts.onContextMenu.call(_8f7,e,find(_8f7,_901));
}}));
var _902=$.data(_8f7,"datagrid").options;
opts.columns=_902.columns;
opts.frozenColumns=_902.frozenColumns;
_8f8.dc=$.data(_8f7,"datagrid").dc;
if(opts.pagination){
var _903=$(_8f7).datagrid("getPager");
_903.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_904,_905){
opts.pageNumber=_904;
opts.pageSize=_905;
_906(_8f7);
}});
opts.pageSize=_903.pagination("options").pageSize;
}
};
function _907(_908,_909){
var opts=$.data(_908,"datagrid").options;
var dc=$.data(_908,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_909!=undefined){
var _90a=_90b(_908,_909);
for(var i=0;i<_90a.length;i++){
_90c(_90a[i][opts.idField]);
}
}
}
$(_908).datagrid("fixRowHeight",_909);
function _90c(_90d){
var tr1=opts.finder.getTr(_908,_90d,"body",1);
var tr2=opts.finder.getTr(_908,_90d,"body",2);
tr1.css("height","");
tr2.css("height","");
var _90e=Math.max(tr1.height(),tr2.height());
tr1.css("height",_90e);
tr2.css("height",_90e);
};
};
function _90f(_910){
var dc=$.data(_910,"datagrid").dc;
var opts=$.data(_910,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _911(_912){
return function(e){
$.fn.datagrid.defaults.rowEvents[_912?"mouseover":"mouseout"](e);
var tt=$(e.target);
var fn=_912?"addClass":"removeClass";
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover");
}
};
};
function _913(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length||!tr.parent().length){
return;
}
var _914=tr.attr("node-id");
var _915=_916(tr);
if(tt.hasClass("tree-hit")){
_917(_915,_914);
}else{
if(tt.hasClass("tree-checkbox")){
_918(_915,_914);
}else{
var opts=$(_915).datagrid("options");
if(!tt.parent().hasClass("datagrid-cell-check")&&!opts.singleSelect&&e.shiftKey){
var rows=$(_915).treegrid("getChildren");
var idx1=$.easyui.indexOfArray(rows,opts.idField,opts.lastSelectedIndex);
var idx2=$.easyui.indexOfArray(rows,opts.idField,_914);
var from=Math.min(Math.max(idx1,0),idx2);
var to=Math.max(idx1,idx2);
var row=rows[idx2];
var td=tt.closest("td[field]",tr);
if(td.length){
var _919=td.attr("field");
opts.onClickCell.call(_915,_914,_919,row[_919]);
}
$(_915).treegrid("clearSelections");
for(var i=from;i<=to;i++){
$(_915).treegrid("selectRow",rows[i][opts.idField]);
}
opts.onClickRow.call(_915,row);
}else{
$.fn.datagrid.defaults.rowEvents.click(e);
}
}
}
};
function _916(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _918(_91a,_91b,_91c,_91d){
var _91e=$.data(_91a,"treegrid");
var _91f=_91e.checkedRows;
var opts=_91e.options;
if(!opts.checkbox){
return;
}
var row=find(_91a,_91b);
if(!row.checkState){
return;
}
var tr=opts.finder.getTr(_91a,_91b);
var ck=tr.find(".tree-checkbox");
if(_91c==undefined){
if(ck.hasClass("tree-checkbox1")){
_91c=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_91c=true;
}else{
if(row._checked==undefined){
row._checked=ck.hasClass("tree-checkbox1");
}
_91c=!row._checked;
}
}
}
row._checked=_91c;
if(_91c){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_91d){
if(opts.onBeforeCheckNode.call(_91a,row,_91c)==false){
return;
}
}
if(opts.cascadeCheck){
_920(_91a,row,_91c);
_921(_91a,row);
}else{
_922(_91a,row,_91c?"1":"0");
}
if(!_91d){
opts.onCheckNode.call(_91a,row,_91c);
}
};
function _922(_923,row,flag){
var _924=$.data(_923,"treegrid");
var _925=_924.checkedRows;
var opts=_924.options;
if(!row.checkState||flag==undefined){
return;
}
var tr=opts.finder.getTr(_923,row[opts.idField]);
var ck=tr.find(".tree-checkbox");
if(!ck.length){
return;
}
row.checkState=["unchecked","checked","indeterminate"][flag];
row.checked=(row.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
if(flag==0){
$.easyui.removeArrayItem(_925,opts.idField,row[opts.idField]);
}else{
$.easyui.addArrayItem(_925,opts.idField,row);
}
};
function _920(_926,row,_927){
var flag=_927?1:0;
_922(_926,row,flag);
$.easyui.forEach(row.children||[],true,function(r){
_922(_926,r,flag);
});
};
function _921(_928,row){
var opts=$.data(_928,"treegrid").options;
var prow=_929(_928,row[opts.idField]);
if(prow){
_922(_928,prow,_92a(prow));
_921(_928,prow);
}
};
function _92a(row){
var len=0;
var c0=0;
var c1=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _92b(_92c,_92d){
var opts=$.data(_92c,"treegrid").options;
if(!opts.checkbox){
return;
}
var row=find(_92c,_92d);
var tr=opts.finder.getTr(_92c,_92d);
var ck=tr.find(".tree-checkbox");
if(opts.view.hasCheckbox(_92c,row)){
if(!ck.length){
row.checkState=row.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(tr.find(".tree-title"));
}
if(row.checkState=="checked"){
_918(_92c,_92d,true,true);
}else{
if(row.checkState=="unchecked"){
_918(_92c,_92d,false,true);
}else{
var flag=_92a(row);
if(flag===0){
_918(_92c,_92d,false,true);
}else{
if(flag===1){
_918(_92c,_92d,true,true);
}
}
}
}
}else{
ck.remove();
row.checkState=undefined;
row.checked=undefined;
_921(_92c,row);
}
};
function _92e(_92f,_930){
var opts=$.data(_92f,"treegrid").options;
var tr1=opts.finder.getTr(_92f,_930,"body",1);
var tr2=opts.finder.getTr(_92f,_930,"body",2);
var _931=$(_92f).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _932=$(_92f).datagrid("getColumnFields",false).length;
_933(tr1,_931);
_933(tr2,_932);
function _933(tr,_934){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_934+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _935(_936,_937,data,_938,_939){
var _93a=$.data(_936,"treegrid");
var opts=_93a.options;
var dc=_93a.dc;
data=opts.loadFilter.call(_936,data,_937);
var node=find(_936,_937);
if(node){
var _93b=opts.finder.getTr(_936,_937,"body",1);
var _93c=opts.finder.getTr(_936,_937,"body",2);
var cc1=_93b.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_93c.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_938){
node.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_938){
_93a.data=[];
}
}
if(!_938){
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_936,_937,data);
}
opts.view.render.call(opts.view,_936,cc1,true);
opts.view.render.call(opts.view,_936,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_936,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_936,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_936);
}
if(!_937&&opts.pagination){
var _93d=$.data(_936,"treegrid").total;
var _93e=$(_936).datagrid("getPager");
if(_93e.pagination("options").total!=_93d){
_93e.pagination({total:_93d});
}
}
_907(_936);
_90f(_936);
$(_936).treegrid("showLines");
$(_936).treegrid("setSelectionState");
$(_936).treegrid("autoSizeColumn");
if(!_939){
opts.onLoadSuccess.call(_936,node,data);
}
};
function _906(_93f,_940,_941,_942,_943){
var opts=$.data(_93f,"treegrid").options;
var body=$(_93f).datagrid("getPanel").find("div.datagrid-body");
if(_940==undefined&&opts.queryParams){
opts.queryParams.id=undefined;
}
if(_941){
opts.queryParams=_941;
}
var _944=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_944,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_944,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_93f,_940);
if(opts.onBeforeLoad.call(_93f,row,_944)==false){
return;
}
var _945=body.find("tr[node-id=\""+_940+"\"] span.tree-folder");
_945.addClass("tree-loading");
$(_93f).treegrid("loading");
var _946=opts.loader.call(_93f,_944,function(data){
_945.removeClass("tree-loading");
$(_93f).treegrid("loaded");
_935(_93f,_940,data,_942);
if(_943){
_943();
}
},function(){
_945.removeClass("tree-loading");
$(_93f).treegrid("loaded");
opts.onLoadError.apply(_93f,arguments);
if(_943){
_943();
}
});
if(_946==false){
_945.removeClass("tree-loading");
$(_93f).treegrid("loaded");
}
};
function _947(_948){
var _949=_94a(_948);
return _949.length?_949[0]:null;
};
function _94a(_94b){
return $.data(_94b,"treegrid").data;
};
function _929(_94c,_94d){
var row=find(_94c,_94d);
if(row._parentId){
return find(_94c,row._parentId);
}else{
return null;
}
};
function _90b(_94e,_94f){
var data=$.data(_94e,"treegrid").data;
if(_94f){
var _950=find(_94e,_94f);
data=_950?(_950.children||[]):[];
}
var _951=[];
$.easyui.forEach(data,true,function(node){
_951.push(node);
});
return _951;
};
function _952(_953,_954){
var opts=$.data(_953,"treegrid").options;
var tr=opts.finder.getTr(_953,_954);
var node=tr.children("td[field=\""+opts.treeField+"\"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_955,_956){
var _957=$.data(_955,"treegrid");
var opts=_957.options;
var _958=null;
$.easyui.forEach(_957.data,true,function(node){
if(node[opts.idField]==_956){
_958=node;
return false;
}
});
return _958;
};
function _959(_95a,_95b){
var opts=$.data(_95a,"treegrid").options;
var row=find(_95a,_95b);
var tr=opts.finder.getTr(_95a,_95b);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_95a,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_95a).treegrid("autoSizeColumn");
_907(_95a,_95b);
opts.onCollapse.call(_95a,row);
});
}else{
cc.hide();
$(_95a).treegrid("autoSizeColumn");
_907(_95a,_95b);
opts.onCollapse.call(_95a,row);
}
};
function _95c(_95d,_95e){
var opts=$.data(_95d,"treegrid").options;
var tr=opts.finder.getTr(_95d,_95e);
var hit=tr.find("span.tree-hit");
var row=find(_95d,_95e);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_95d,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _95f=tr.next("tr.treegrid-tr-tree");
if(_95f.length){
var cc=_95f.children("td").children("div");
_960(cc);
}else{
_92e(_95d,row[opts.idField]);
var _95f=tr.next("tr.treegrid-tr-tree");
var cc=_95f.children("td").children("div");
cc.hide();
var _961=$.extend({},opts.queryParams||{});
_961.id=row[opts.idField];
_906(_95d,row[opts.idField],_961,true,function(){
if(cc.is(":empty")){
_95f.remove();
}else{
_960(cc);
}
});
}
function _960(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_95d).treegrid("autoSizeColumn");
_907(_95d,_95e);
opts.onExpand.call(_95d,row);
});
}else{
cc.show();
$(_95d).treegrid("autoSizeColumn");
_907(_95d,_95e);
opts.onExpand.call(_95d,row);
}
};
};
function _917(_962,_963){
var opts=$.data(_962,"treegrid").options;
var tr=opts.finder.getTr(_962,_963);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_959(_962,_963);
}else{
_95c(_962,_963);
}
};
function _964(_965,_966){
var opts=$.data(_965,"treegrid").options;
var _967=_90b(_965,_966);
if(_966){
_967.unshift(find(_965,_966));
}
for(var i=0;i<_967.length;i++){
_959(_965,_967[i][opts.idField]);
}
};
function _968(_969,_96a){
var opts=$.data(_969,"treegrid").options;
var _96b=_90b(_969,_96a);
if(_96a){
_96b.unshift(find(_969,_96a));
}
for(var i=0;i<_96b.length;i++){
_95c(_969,_96b[i][opts.idField]);
}
};
function _96c(_96d,_96e){
var opts=$.data(_96d,"treegrid").options;
var ids=[];
var p=_929(_96d,_96e);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_929(_96d,id);
}
for(var i=0;i<ids.length;i++){
_95c(_96d,ids[i]);
}
};
function _96f(_970,_971){
var _972=$.data(_970,"treegrid");
var opts=_972.options;
if(_971.parent){
var tr=opts.finder.getTr(_970,_971.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_92e(_970,_971.parent);
}
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
var _973=cell.children("span.tree-icon");
if(_973.hasClass("tree-file")){
_973.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_973);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_935(_970,_971.parent,_971.data,_972.data.length>0,true);
};
function _974(_975,_976){
var ref=_976.before||_976.after;
var opts=$.data(_975,"treegrid").options;
var _977=_929(_975,ref);
_96f(_975,{parent:(_977?_977[opts.idField]:null),data:[_976.data]});
var _978=_977?_977.children:$(_975).treegrid("getRoots");
for(var i=0;i<_978.length;i++){
if(_978[i][opts.idField]==ref){
var _979=_978[_978.length-1];
_978.splice(_976.before?i:(i+1),0,_979);
_978.splice(_978.length-1,1);
break;
}
}
_97a(true);
_97a(false);
_90f(_975);
$(_975).treegrid("showLines");
function _97a(_97b){
var _97c=_97b?1:2;
var tr=opts.finder.getTr(_975,_976.data[opts.idField],"body",_97c);
var _97d=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_975,ref,"body",_97c);
if(_976.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_97d.remove();
};
};
function _97e(_97f,_980){
var _981=$.data(_97f,"treegrid");
var opts=_981.options;
var prow=_929(_97f,_980);
$(_97f).datagrid("deleteRow",_980);
$.easyui.removeArrayItem(_981.checkedRows,opts.idField,_980);
_90f(_97f);
if(prow){
_92b(_97f,prow[opts.idField]);
}
_981.total-=1;
$(_97f).datagrid("getPager").pagination("refresh",{total:_981.total});
$(_97f).treegrid("showLines");
};
function _982(_983){
var t=$(_983);
var opts=t.treegrid("options");
if(opts.lines){
t.treegrid("getPanel").addClass("tree-lines");
}else{
t.treegrid("getPanel").removeClass("tree-lines");
return;
}
t.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
t.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
var _984=t.treegrid("getRoots");
if(_984.length>1){
_985(_984[0]).addClass("tree-root-first");
}else{
if(_984.length==1){
_985(_984[0]).addClass("tree-root-one");
}
}
_986(_984);
_987(_984);
function _986(_988){
$.map(_988,function(node){
if(node.children&&node.children.length){
_986(node.children);
}else{
var cell=_985(node);
cell.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_988.length){
var cell=_985(_988[_988.length-1]);
cell.addClass("tree-node-last");
cell.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _987(_989){
$.map(_989,function(node){
if(node.children&&node.children.length){
_987(node.children);
}
});
for(var i=0;i<_989.length-1;i++){
var node=_989[i];
var _98a=t.treegrid("getLevel",node[opts.idField]);
var tr=opts.finder.getTr(_983,node[opts.idField]);
var cc=tr.next().find("tr.datagrid-row td[field=\""+opts.treeField+"\"] div.datagrid-cell");
cc.find("span:eq("+(_98a-1)+")").addClass("tree-line");
}
};
function _985(node){
var tr=opts.finder.getTr(_983,node[opts.idField]);
var cell=tr.find("td[field=\""+opts.treeField+"\"] div.datagrid-cell");
return cell;
};
};
$.fn.treegrid=function(_98b,_98c){
if(typeof _98b=="string"){
var _98d=$.fn.treegrid.methods[_98b];
if(_98d){
return _98d(this,_98c);
}else{
return this.datagrid(_98b,_98c);
}
}
_98b=_98b||{};
return this.each(function(){
var _98e=$.data(this,"treegrid");
if(_98e){
$.extend(_98e.options,_98b);
}else{
_98e=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_98b),data:[],checkedRows:[],tmpIds:[]});
}
_8f6(this);
if(_98e.options.data){
$(this).treegrid("loadData",_98e.options.data);
}
_906(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_98f){
return jq.each(function(){
$(this).datagrid("resize",_98f);
});
},fixRowHeight:function(jq,_990){
return jq.each(function(){
_907(this,_990);
});
},loadData:function(jq,data){
return jq.each(function(){
_935(this,data.parent,data);
});
},load:function(jq,_991){
return jq.each(function(){
$(this).treegrid("options").pageNumber=1;
$(this).treegrid("getPager").pagination({pageNumber:1});
$(this).treegrid("reload",_991);
});
},reload:function(jq,id){
return jq.each(function(){
var opts=$(this).treegrid("options");
var _992={};
if(typeof id=="object"){
_992=id;
}else{
_992=$.extend({},opts.queryParams);
_992.id=id;
}
if(_992.id){
var node=$(this).treegrid("find",_992.id);
if(node.children){
node.children.splice(0,node.children.length);
}
opts.queryParams=_992;
var tr=opts.finder.getTr(this,_992.id);
tr.next("tr.treegrid-tr-tree").remove();
tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_95c(this,_992.id);
}else{
_906(this,null,_992);
}
});
},reloadFooter:function(jq,_993){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_993){
$.data(this,"treegrid").footer=_993;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _947(jq[0]);
},getRoots:function(jq){
return _94a(jq[0]);
},getParent:function(jq,id){
return _929(jq[0],id);
},getChildren:function(jq,id){
return _90b(jq[0],id);
},getLevel:function(jq,id){
return _952(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_959(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_95c(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_917(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_964(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_968(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_96c(this,id);
});
},append:function(jq,_994){
return jq.each(function(){
_96f(this,_994);
});
},insert:function(jq,_995){
return jq.each(function(){
_974(this,_995);
});
},remove:function(jq,id){
return jq.each(function(){
_97e(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_996){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var row=_996.row;
opts.view.updateRow.call(opts.view,this,_996.id,row);
if(row.checked!=undefined){
row=find(this,_996.id);
$.extend(row,{checkState:row.checked?"checked":(row.checked===false?"unchecked":undefined)});
_92b(this,_996.id);
}
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
},showLines:function(jq){
return jq.each(function(){
_982(this);
});
},setSelectionState:function(jq){
return jq.each(function(){
$(this).datagrid("setSelectionState");
var _997=$(this).data("treegrid");
for(var i=0;i<_997.tmpIds.length;i++){
_918(this,_997.tmpIds[i],true,true);
}
_997.tmpIds=[];
});
},getCheckedNodes:function(jq,_998){
_998=_998||"checked";
var rows=[];
$.easyui.forEach(jq.data("treegrid").checkedRows,false,function(row){
if(row.checkState==_998){
rows.push(row);
}
});
return rows;
},checkNode:function(jq,id){
return jq.each(function(){
_918(this,id,true);
});
},uncheckNode:function(jq,id){
return jq.each(function(){
_918(this,id,false);
});
},clearChecked:function(jq){
return jq.each(function(){
var _999=this;
var opts=$(_999).treegrid("options");
$(_999).datagrid("clearChecked");
$.map($(_999).treegrid("getCheckedNodes"),function(row){
_918(_999,row[opts.idField],false,true);
});
});
}};
$.fn.treegrid.parseOptions=function(_99a){
return $.extend({},$.fn.datagrid.parseOptions(_99a),$.parser.parseOptions(_99a,["treeField",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean"}]));
};
var _99b=$.extend({},$.fn.datagrid.defaults.view,{render:function(_99c,_99d,_99e){
var opts=$.data(_99c,"treegrid").options;
var _99f=$(_99c).datagrid("getColumnFields",_99e);
var _9a0=$.data(_99c,"datagrid").rowIdPrefix;
if(_99e){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
if(this.treeNodes&&this.treeNodes.length){
var _9a1=_9a2.call(this,_99e,this.treeLevel,this.treeNodes);
$(_99d).append(_9a1.join(""));
}
function _9a2(_9a3,_9a4,_9a5){
var _9a6=$(_99c).treegrid("getParent",_9a5[0][opts.idField]);
var _9a7=(_9a6?_9a6.children.length:$(_99c).treegrid("getRoots").length)-_9a5.length;
var _9a8=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_9a5.length;i++){
var row=_9a5[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var css=opts.rowStyler?opts.rowStyler.call(_99c,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_9a7++%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _9a9=cs.s?"style=\""+cs.s+"\"":"";
var _9aa=_9a0+"-"+(_9a3?1:2)+"-"+row[opts.idField];
_9a8.push("<tr id=\""+_9aa+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_9a9+">");
_9a8=_9a8.concat(view.renderRow.call(view,_99c,_99f,_9a3,_9a4,row));
_9a8.push("</tr>");
if(row.children&&row.children.length){
var tt=_9a2.call(this,_9a3,_9a4+1,row.children);
var v=row.state=="closed"?"none":"block";
_9a8.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_99f.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_9a8=_9a8.concat(tt);
_9a8.push("</div></td></tr>");
}
}
_9a8.push("</tbody></table>");
return _9a8;
};
},renderFooter:function(_9ab,_9ac,_9ad){
var opts=$.data(_9ab,"treegrid").options;
var rows=$.data(_9ab,"treegrid").footer||[];
var _9ae=$(_9ab).datagrid("getColumnFields",_9ad);
var _9af=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_9af.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");
_9af.push(this.renderRow.call(this,_9ab,_9ae,_9ad,0,row));
_9af.push("</tr>");
}
_9af.push("</tbody></table>");
$(_9ac).html(_9af.join(""));
},renderRow:function(_9b0,_9b1,_9b2,_9b3,row){
var _9b4=$.data(_9b0,"treegrid");
var opts=_9b4.options;
var cc=[];
if(_9b2&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_9b1.length;i++){
var _9b5=_9b1[i];
var col=$(_9b0).datagrid("getColumnOption",_9b5);
if(col){
var css=col.styler?(col.styler(row[_9b5],row)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _9b6=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_9b5+"\" "+cls+" "+_9b6+">");
var _9b6="";
if(!col.checkbox){
if(col.align){
_9b6+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_9b6+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_9b6+="height:auto;";
}
}
}
cc.push("<div style=\""+_9b6+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_9b5+"\" value=\""+(row[_9b5]!=undefined?row[_9b5]:"")+"\">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_9b5],row);
}else{
val=row[_9b5];
}
if(_9b5==opts.treeField){
for(var j=0;j<_9b3;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_9b0,row)){
var flag=0;
var crow=$.easyui.getArrayItem(_9b4.checkedRows,opts.idField,row[opts.idField]);
if(crow){
flag=crow.checkState=="checked"?1:2;
row.checkState=crow.checkState;
row.checked=crow.checked;
$.easyui.addArrayItem(_9b4.checkedRows,opts.idField,row);
}else{
var prow=$.easyui.getArrayItem(_9b4.checkedRows,opts.idField,row._parentId);
if(prow&&prow.checkState=="checked"&&opts.cascadeCheck){
flag=1;
row.checked=true;
$.easyui.addArrayItem(_9b4.checkedRows,opts.idField,row);
}else{
if(row.checked){
$.easyui.addArrayItem(_9b4.tmpIds,row[opts.idField]);
}
}
row.checkState=flag?"checked":"unchecked";
}
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
row.checkState=undefined;
row.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},hasCheckbox:function(_9b7,row){
var opts=$.data(_9b7,"treegrid").options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_9b7,row)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(row.state=="open"&&!(row.children&&row.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
},refreshRow:function(_9b8,id){
this.updateRow.call(this,_9b8,id,{});
},updateRow:function(_9b9,id,row){
var opts=$.data(_9b9,"treegrid").options;
var _9ba=$(_9b9).treegrid("find",id);
$.extend(_9ba,row);
var _9bb=$(_9b9).treegrid("getLevel",id)-1;
var _9bc=opts.rowStyler?opts.rowStyler.call(_9b9,_9ba):"";
var _9bd=$.data(_9b9,"datagrid").rowIdPrefix;
var _9be=_9ba[opts.idField];
function _9bf(_9c0){
var _9c1=$(_9b9).treegrid("getColumnFields",_9c0);
var tr=opts.finder.getTr(_9b9,id,"body",(_9c0?1:2));
var _9c2=tr.find("div.datagrid-cell-rownumber").html();
var _9c3=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_9b9,_9c1,_9c0,_9bb,_9ba));
tr.attr("style",_9bc||"");
tr.find("div.datagrid-cell-rownumber").html(_9c2);
if(_9c3){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_9be!=id){
tr.attr("id",_9bd+"-"+(_9c0?1:2)+"-"+_9be);
tr.attr("node-id",_9be);
}
};
_9bf.call(this,true);
_9bf.call(this,false);
$(_9b9).treegrid("fixRowHeight",id);
},deleteRow:function(_9c4,id){
var opts=$.data(_9c4,"treegrid").options;
var tr=opts.finder.getTr(_9c4,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _9c5=del(id);
if(_9c5){
if(_9c5.children.length==0){
tr=opts.finder.getTr(_9c4,_9c5[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
this.setEmptyMsg(_9c4);
function del(id){
var cc;
var _9c6=$(_9c4).treegrid("getParent",id);
if(_9c6){
cc=_9c6.children;
}else{
cc=$(_9c4).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _9c6;
};
},onBeforeRender:function(_9c7,_9c8,data){
if($.isArray(_9c8)){
data={total:_9c8.length,rows:_9c8};
_9c8=null;
}
if(!data){
return false;
}
var _9c9=$.data(_9c7,"treegrid");
var opts=_9c9.options;
if(data.length==undefined){
if(data.footer){
_9c9.footer=data.footer;
}
if(data.total){
_9c9.total=data.total;
}
data=this.transfer(_9c7,_9c8,data.rows);
}else{
function _9ca(_9cb,_9cc){
for(var i=0;i<_9cb.length;i++){
var row=_9cb[i];
row._parentId=_9cc;
if(row.children&&row.children.length){
_9ca(row.children,row[opts.idField]);
}
}
};
_9ca(data,_9c8);
}
this.sort(_9c7,data);
this.treeNodes=data;
this.treeLevel=$(_9c7).treegrid("getLevel",_9c8);
var node=find(_9c7,_9c8);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
_9c9.data=_9c9.data.concat(data);
}
},sort:function(_9cd,data){
var opts=$.data(_9cd,"treegrid").options;
if(!opts.remoteSort&&opts.sortName){
var _9ce=opts.sortName.split(",");
var _9cf=opts.sortOrder.split(",");
_9d0(data);
}
function _9d0(rows){
rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_9ce.length;i++){
var sn=_9ce[i];
var so=_9cf[i];
var col=$(_9cd).treegrid("getColumnOption",sn);
var _9d1=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_9d1(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i<rows.length;i++){
var _9d2=rows[i].children;
if(_9d2&&_9d2.length){
_9d0(_9d2);
}
}
};
},transfer:function(_9d3,_9d4,data){
var opts=$.data(_9d3,"treegrid").options;
var rows=$.extend([],data);
var _9d5=_9d6(_9d4,rows);
var toDo=$.extend([],_9d5);
while(toDo.length){
var node=toDo.shift();
var _9d7=_9d6(node[opts.idField],rows);
if(_9d7.length){
if(node.children){
node.children=node.children.concat(_9d7);
}else{
node.children=_9d7;
}
toDo=toDo.concat(_9d7);
}
}
return _9d5;
function _9d6(_9d8,rows){
var rr=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==_9d8){
rr.push(row);
rows.splice(i,1);
i--;
}
}
return rr;
};
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,animate:false,singleSelect:true,view:_99b,rowEvents:$.extend({},$.fn.datagrid.defaults.rowEvents,{mouseover:_911(true),mouseout:_911(false),click:_913}),loader:function(_9d9,_9da,_9db){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_9d9,dataType:"json",success:function(data){
_9da(data);
},error:function(){
_9db.apply(this,arguments);
}});
},loadFilter:function(data,_9dc){
return data;
},finder:{getTr:function(_9dd,id,type,_9de){
type=type||"body";
_9de=_9de||0;
var dc=$.data(_9dd,"datagrid").dc;
if(_9de==0){
var opts=$.data(_9dd,"treegrid").options;
var tr1=opts.finder.getTr(_9dd,id,type,1);
var tr2=opts.finder.getTr(_9dd,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_9dd,"datagrid").rowIdPrefix+"-"+_9de+"-"+id);
if(!tr.length){
tr=(_9de==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");
}
return tr;
}else{
if(type=="footer"){
return (_9de==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");
}else{
if(type=="selected"){
return (_9de==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_9de==1?dc.body1:dc.body2).find("tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_9de==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");
}else{
if(type=="last"){
return (_9de==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_9de==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_9de==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
}
}
},getRow:function(_9df,p){
var id=(typeof p=="object")?p.attr("node-id"):p;
return $(_9df).treegrid("find",id);
},getRows:function(_9e0){
return $(_9e0).treegrid("getChildren");
}},onBeforeLoad:function(row,_9e1){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_9e2,row){
},onDblClickCell:function(_9e3,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_9e4){
},onCancelEdit:function(row){
},onBeforeCheckNode:function(row,_9e5){
},onCheckNode:function(row,_9e6){
}});
})(jQuery);
(function($){
function _9e7(_9e8){
var opts=$.data(_9e8,"datalist").options;
$(_9e8).datagrid($.extend({},opts,{cls:"datalist"+(opts.lines?" datalist-lines":""),frozenColumns:(opts.frozenColumns&&opts.frozenColumns.length)?opts.frozenColumns:(opts.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(opts.columns&&opts.columns.length)?opts.columns:[[{field:opts.textField,width:"100%",formatter:function(_9e9,row,_9ea){
return opts.textFormatter?opts.textFormatter(_9e9,row,_9ea):_9e9;
}}]]}));
};
var _9eb=$.extend({},$.fn.datagrid.defaults.view,{render:function(_9ec,_9ed,_9ee){
var _9ef=$.data(_9ec,"datagrid");
var opts=_9ef.options;
if(opts.groupField){
var g=this.groupRows(_9ec,_9ef.data.rows);
this.groups=g.groups;
_9ef.data.rows=g.rows;
var _9f0=[];
for(var i=0;i<g.groups.length;i++){
_9f0.push(this.renderGroup.call(this,_9ec,i,g.groups[i],_9ee));
}
$(_9ed).html(_9f0.join(""));
}else{
$(_9ed).html(this.renderTable(_9ec,0,_9ef.data.rows,_9ee));
}
},renderGroup:function(_9f1,_9f2,_9f3,_9f4){
var _9f5=$.data(_9f1,"datagrid");
var opts=_9f5.options;
var _9f6=$(_9f1).datagrid("getColumnFields",_9f4);
var _9f7=[];
_9f7.push("<div class=\"datagrid-group\" group-index="+_9f2+">");
if(!_9f4){
_9f7.push("<span class=\"datagrid-group-title\">");
_9f7.push(opts.groupFormatter.call(_9f1,_9f3.value,_9f3.rows));
_9f7.push("</span>");
}
_9f7.push("</div>");
_9f7.push(this.renderTable(_9f1,_9f3.startIndex,_9f3.rows,_9f4));
return _9f7.join("");
},groupRows:function(_9f8,rows){
var _9f9=$.data(_9f8,"datagrid");
var opts=_9f9.options;
var _9fa=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _9fb=_9fc(row[opts.groupField]);
if(!_9fb){
_9fb={value:row[opts.groupField],rows:[row]};
_9fa.push(_9fb);
}else{
_9fb.rows.push(row);
}
}
var _9fd=0;
var rows=[];
for(var i=0;i<_9fa.length;i++){
var _9fb=_9fa[i];
_9fb.startIndex=_9fd;
_9fd+=_9fb.rows.length;
rows=rows.concat(_9fb.rows);
}
return {groups:_9fa,rows:rows};
function _9fc(_9fe){
for(var i=0;i<_9fa.length;i++){
var _9ff=_9fa[i];
if(_9ff.value==_9fe){
return _9ff;
}
}
return null;
};
}});
$.fn.datalist=function(_a00,_a01){
if(typeof _a00=="string"){
var _a02=$.fn.datalist.methods[_a00];
if(_a02){
return _a02(this,_a01);
}else{
return this.datagrid(_a00,_a01);
}
}
_a00=_a00||{};
return this.each(function(){
var _a03=$.data(this,"datalist");
if(_a03){
$.extend(_a03.options,_a00);
}else{
var opts=$.extend({},$.fn.datalist.defaults,$.fn.datalist.parseOptions(this),_a00);
opts.columns=$.extend(true,[],opts.columns);
_a03=$.data(this,"datalist",{options:opts});
}
_9e7(this);
if(!_a03.options.data){
var data=$.fn.datalist.parseData(this);
if(data.total){
$(this).datalist("loadData",data);
}
}
});
};
$.fn.datalist.methods={options:function(jq){
return $.data(jq[0],"datalist").options;
}};
$.fn.datalist.parseOptions=function(_a04){
return $.extend({},$.fn.datagrid.parseOptions(_a04),$.parser.parseOptions(_a04,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]));
};
$.fn.datalist.parseData=function(_a05){
var opts=$.data(_a05,"datalist").options;
var data={total:0,rows:[]};
$(_a05).children().each(function(){
var _a06=$.parser.parseOptions(this,["value","group"]);
var row={};
var html=$(this).html();
row[opts.valueField]=_a06.value!=undefined?_a06.value:html;
row[opts.textField]=html;
if(opts.groupField){
row[opts.groupField]=_a06.group;
}
data.total++;
data.rows.push(row);
});
return data;
};
$.fn.datalist.defaults=$.extend({},$.fn.datagrid.defaults,{fitColumns:true,singleSelect:true,showHeader:false,checkbox:false,lines:false,valueField:"value",textField:"text",groupField:"",view:_9eb,textFormatter:function(_a07,row){
return _a07;
},groupFormatter:function(_a08,rows){
return _a08;
}});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_a09(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _a0a(_a0b){
var _a0c=$.data(_a0b,"combo");
var opts=_a0c.options;
if(!_a0c.panel){
_a0c.panel=$("<div class=\"combo-panel\"></div>").appendTo("body");
_a0c.panel.panel({minWidth:opts.panelMinWidth,maxWidth:opts.panelMaxWidth,minHeight:opts.panelMinHeight,maxHeight:opts.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _a0d=$(this).panel("options").comboTarget;
var _a0e=$.data(_a0d,"combo");
if(_a0e){
_a0e.options.onShowPanel.call(_a0d);
}
},onBeforeClose:function(){
_a09($(this).parent());
},onClose:function(){
var _a0f=$(this).panel("options").comboTarget;
var _a10=$(_a0f).data("combo");
if(_a10){
_a10.options.onHidePanel.call(_a0f);
}
}});
}
var _a11=$.extend(true,[],opts.icons);
if(opts.hasDownArrow){
_a11.push({iconCls:"combo-arrow",handler:function(e){
_a15(e.data.target);
}});
}
$(_a0b).addClass("combo-f").textbox($.extend({},opts,{icons:_a11,onChange:function(){
}}));
$(_a0b).attr("comboName",$(_a0b).attr("textboxName"));
_a0c.combo=$(_a0b).next();
_a0c.combo.addClass("combo");
};
function _a12(_a13){
var _a14=$.data(_a13,"combo");
var opts=_a14.options;
var p=_a14.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!opts.cloned){
p.panel("destroy");
}
$(_a13).textbox("destroy");
};
function _a15(_a16){
var _a17=$.data(_a16,"combo").panel;
if(_a17.is(":visible")){
var _a18=_a17.combo("combo");
_a19(_a18);
if(_a18!=_a16){
$(_a16).combo("showPanel");
}
}else{
var p=$(_a16).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(_a17).not(p).panel("close");
$(_a16).combo("showPanel");
}
$(_a16).combo("textbox").focus();
};
function _a09(_a1a){
$(_a1a).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _a1b(e){
var _a1c=e.data.target;
var _a1d=$.data(_a1c,"combo");
var opts=_a1d.options;
if(!opts.editable){
_a15(_a1c);
}else{
var p=$(_a1c).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(p).each(function(){
var _a1e=$(this).combo("combo");
if(_a1e!=_a1c){
_a19(_a1e);
}
});
}
};
function _a1f(e){
var _a20=e.data.target;
var t=$(_a20);
var _a21=t.data("combo");
var opts=t.combo("options");
_a21.panel.panel("options").comboTarget=_a20;
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_a20,e);
break;
case 40:
opts.keyHandler.down.call(_a20,e);
break;
case 37:
opts.keyHandler.left.call(_a20,e);
break;
case 39:
opts.keyHandler.right.call(_a20,e);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_a20,e);
return false;
case 9:
case 27:
_a19(_a20);
break;
default:
if(opts.editable){
if(_a21.timer){
clearTimeout(_a21.timer);
}
_a21.timer=setTimeout(function(){
var q=t.combo("getText");
if(_a21.previousText!=q){
_a21.previousText=q;
t.combo("showPanel");
opts.keyHandler.query.call(_a20,q,e);
t.combo("validate");
}
},opts.delay);
}
}
};
function _a22(_a23){
var _a24=$.data(_a23,"combo");
var _a25=_a24.combo;
var _a26=_a24.panel;
var opts=$(_a23).combo("options");
var _a27=_a26.panel("options");
_a27.comboTarget=_a23;
if(_a27.closed){
_a26.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:($.fn.window?$.fn.window.defaults.zIndex++:99)),left:-999999});
_a26.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_a25._outerWidth()),height:opts.panelHeight});
_a26.panel("panel").hide();
_a26.panel("open");
}
(function(){
if(_a27.comboTarget==_a23&&_a26.is(":visible")){
_a26.panel("move",{left:_a28(),top:_a29()});
setTimeout(arguments.callee,200);
}
})();
function _a28(){
var left=_a25.offset().left;
if(opts.panelAlign=="right"){
left+=_a25._outerWidth()-_a26._outerWidth();
}
if(left+_a26._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_a26._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _a29(){
var top=_a25.offset().top+_a25._outerHeight();
if(top+_a26._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_a25.offset().top-_a26._outerHeight();
}
if(top<$(document).scrollTop()){
top=_a25.offset().top+_a25._outerHeight();
}
return top;
};
};
function _a19(_a2a){
var _a2b=$.data(_a2a,"combo").panel;
_a2b.panel("close");
};
function _a2c(_a2d,text){
var _a2e=$.data(_a2d,"combo");
var _a2f=$(_a2d).textbox("getText");
if(_a2f!=text){
$(_a2d).textbox("setText",text);
}
_a2e.previousText=text;
};
function _a30(_a31){
var _a32=$.data(_a31,"combo");
var opts=_a32.options;
var _a33=$(_a31).next();
var _a34=[];
_a33.find(".textbox-value").each(function(){
_a34.push($(this).val());
});
if(opts.multivalue){
return _a34;
}else{
return _a34.length?_a34[0].split(opts.separator):_a34;
}
};
function _a35(_a36,_a37){
var _a38=$.data(_a36,"combo");
var _a39=_a38.combo;
var opts=$(_a36).combo("options");
if(!$.isArray(_a37)){
_a37=_a37.split(opts.separator);
}
var _a3a=_a30(_a36);
_a39.find(".textbox-value").remove();
if(_a37.length){
if(opts.multivalue){
for(var i=0;i<_a37.length;i++){
_a3b(_a37[i]);
}
}else{
_a3b(_a37.join(opts.separator));
}
}
function _a3b(_a3c){
var name=$(_a36).attr("textboxName")||"";
var _a3d=$("<input type=\"hidden\" class=\"textbox-value\">").appendTo(_a39);
_a3d.attr("name",name);
if(opts.disabled){
_a3d.attr("disabled","disabled");
}
_a3d.val(_a3c);
};
var _a3e=(function(){
if(_a3a.length!=_a37.length){
return true;
}
for(var i=0;i<_a37.length;i++){
if(_a37[i]!=_a3a[i]){
return true;
}
}
return false;
})();
if(_a3e){
$(_a36).val(_a37.join(opts.separator));
if(opts.multiple){
opts.onChange.call(_a36,_a37,_a3a);
}else{
opts.onChange.call(_a36,_a37[0],_a3a[0]);
}
$(_a36).closest("form").trigger("_change",[_a36]);
}
};
function _a3f(_a40){
var _a41=_a30(_a40);
return _a41[0];
};
function _a42(_a43,_a44){
_a35(_a43,[_a44]);
};
function _a45(_a46){
var opts=$.data(_a46,"combo").options;
var _a47=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
_a35(_a46,opts.value?opts.value:[]);
}else{
_a42(_a46,opts.value);
}
opts.onChange=_a47;
};
$.fn.combo=function(_a48,_a49){
if(typeof _a48=="string"){
var _a4a=$.fn.combo.methods[_a48];
if(_a4a){
return _a4a(this,_a49);
}else{
return this.textbox(_a48,_a49);
}
}
_a48=_a48||{};
return this.each(function(){
var _a4b=$.data(this,"combo");
if(_a4b){
$.extend(_a4b.options,_a48);
if(_a48.value!=undefined){
_a4b.options.originalValue=_a48.value;
}
}else{
_a4b=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_a48),previousText:""});
if(_a4b.options.multiple&&_a4b.options.value==""){
_a4b.options.originalValue=[];
}else{
_a4b.options.originalValue=_a4b.options.value;
}
}
_a0a(this);
_a45(this);
});
};
$.fn.combo.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"combo").options,{width:opts.width,height:opts.height,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"combo",{options:$.extend(true,{cloned:true},$(from).combo("options")),combo:$(this).next(),panel:$(from).combo("panel")});
$(this).addClass("combo-f").attr("comboName",$(this).attr("textboxName"));
});
},combo:function(jq){
return jq.closest(".combo-panel").panel("options").comboTarget;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},destroy:function(jq){
return jq.each(function(){
_a12(this);
});
},showPanel:function(jq){
return jq.each(function(){
_a22(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_a19(this);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setText","");
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",[]);
}else{
$(this).combo("setValue","");
}
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},setText:function(jq,text){
return jq.each(function(){
_a2c(this,text);
});
},getValues:function(jq){
return _a30(jq[0]);
},setValues:function(jq,_a4c){
return jq.each(function(){
_a35(this,_a4c);
});
},getValue:function(jq){
return _a3f(jq[0]);
},setValue:function(jq,_a4d){
return jq.each(function(){
_a42(this,_a4d);
});
}};
$.fn.combo.parseOptions=function(_a4e){
var t=$(_a4e);
return $.extend({},$.fn.textbox.parseOptions(_a4e),$.parser.parseOptions(_a4e,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",reversed:"boolean",multivalue:"boolean",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{click:_a1b,keydown:_a1f,paste:_a1f,drop:_a1f},panelWidth:null,panelHeight:200,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",reversed:false,multiple:false,multivalue:true,selectOnNavigation:true,separator:",",hasDownArrow:true,delay:200,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
},query:function(q,e){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_a4f,_a50){
}});
})(jQuery);
(function($){
function _a51(_a52,_a53){
var _a54=$.data(_a52,"combobox");
return $.easyui.indexOfArray(_a54.data,_a54.options.valueField,_a53);
};
function _a55(_a56,_a57){
var opts=$.data(_a56,"combobox").options;
var _a58=$(_a56).combo("panel");
var item=opts.finder.getEl(_a56,_a57);
if(item.length){
if(item.position().top<=0){
var h=_a58.scrollTop()+item.position().top;
_a58.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_a58.height()){
var h=_a58.scrollTop()+item.position().top+item.outerHeight()-_a58.height();
_a58.scrollTop(h);
}
}
}
_a58.triggerHandler("scroll");
};
function nav(_a59,dir){
var opts=$.data(_a59,"combobox").options;
var _a5a=$(_a59).combobox("panel");
var item=_a5a.children("div.combobox-item-hover");
if(!item.length){
item=_a5a.children("div.combobox-item-selected");
}
item.removeClass("combobox-item-hover");
var _a5b="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _a5c="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!item.length){
item=_a5a.children(dir=="next"?_a5b:_a5c);
}else{
if(dir=="next"){
item=item.nextAll(_a5b);
if(!item.length){
item=_a5a.children(_a5b);
}
}else{
item=item.prevAll(_a5b);
if(!item.length){
item=_a5a.children(_a5c);
}
}
}
if(item.length){
item.addClass("combobox-item-hover");
var row=opts.finder.getRow(_a59,item);
if(row){
$(_a59).combobox("scrollTo",row[opts.valueField]);
if(opts.selectOnNavigation){
_a5d(_a59,row[opts.valueField]);
}
}
}
};
function _a5d(_a5e,_a5f,_a60){
var opts=$.data(_a5e,"combobox").options;
var _a61=$(_a5e).combo("getValues");
if($.inArray(_a5f+"",_a61)==-1){
if(opts.multiple){
_a61.push(_a5f);
}else{
_a61=[_a5f];
}
_a62(_a5e,_a61,_a60);
}
};
function _a63(_a64,_a65){
var opts=$.data(_a64,"combobox").options;
var _a66=$(_a64).combo("getValues");
var _a67=$.inArray(_a65+"",_a66);
if(_a67>=0){
_a66.splice(_a67,1);
_a62(_a64,_a66);
}
};
function _a62(_a68,_a69,_a6a){
var opts=$.data(_a68,"combobox").options;
var _a6b=$(_a68).combo("panel");
if(!$.isArray(_a69)){
_a69=_a69.split(opts.separator);
}
if(!opts.multiple){
_a69=_a69.length?[_a69[0]]:[""];
}
var _a6c=$(_a68).combo("getValues");
if(_a6b.is(":visible")){
_a6b.find(".combobox-item-selected").each(function(){
var row=opts.finder.getRow(_a68,$(this));
if(row){
if($.easyui.indexOfArray(_a6c,row[opts.valueField])==-1){
$(this).removeClass("combobox-item-selected");
}
}
});
}
$.map(_a6c,function(v){
if($.easyui.indexOfArray(_a69,v)==-1){
var el=opts.finder.getEl(_a68,v);
if(el.hasClass("combobox-item-selected")){
el.removeClass("combobox-item-selected");
opts.onUnselect.call(_a68,opts.finder.getRow(_a68,v));
}
}
});
var _a6d=null;
var vv=[],ss=[];
for(var i=0;i<_a69.length;i++){
var v=_a69[i];
var s=v;
var row=opts.finder.getRow(_a68,v);
if(row){
s=row[opts.textField];
_a6d=row;
var el=opts.finder.getEl(_a68,v);
if(!el.hasClass("combobox-item-selected")){
el.addClass("combobox-item-selected");
opts.onSelect.call(_a68,row);
}
}
vv.push(v);
ss.push(s);
}
if(!_a6a){
$(_a68).combo("setText",ss.join(opts.separator));
}
if(opts.showItemIcon){
var tb=$(_a68).combobox("textbox");
tb.removeClass("textbox-bgicon "+opts.textboxIconCls);
if(_a6d&&_a6d.iconCls){
tb.addClass("textbox-bgicon "+_a6d.iconCls);
opts.textboxIconCls=_a6d.iconCls;
}
}
$(_a68).combo("setValues",vv);
_a6b.triggerHandler("scroll");
};
function _a6e(_a6f,data,_a70){
var _a71=$.data(_a6f,"combobox");
var opts=_a71.options;
_a71.data=opts.loadFilter.call(_a6f,data);
opts.view.render.call(opts.view,_a6f,$(_a6f).combo("panel"),_a71.data);
var vv=$(_a6f).combobox("getValues");
$.easyui.forEach(_a71.data,false,function(row){
if(row["selected"]){
$.easyui.addArrayItem(vv,row[opts.valueField]+"");
}
});
if(opts.multiple){
_a62(_a6f,vv,_a70);
}else{
_a62(_a6f,vv.length?[vv[vv.length-1]]:[],_a70);
}
opts.onLoadSuccess.call(_a6f,data);
};
function _a72(_a73,url,_a74,_a75){
var opts=$.data(_a73,"combobox").options;
if(url){
opts.url=url;
}
_a74=$.extend({},opts.queryParams,_a74||{});
if(opts.onBeforeLoad.call(_a73,_a74)==false){
return;
}
opts.loader.call(_a73,_a74,function(data){
_a6e(_a73,data,_a75);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _a76(_a77,q){
var _a78=$.data(_a77,"combobox");
var opts=_a78.options;
var _a79=$();
var qq=opts.multiple?q.split(opts.separator):[q];
if(opts.mode=="remote"){
_a7a(qq);
_a72(_a77,null,{q:q},true);
}else{
var _a7b=$(_a77).combo("panel");
_a7b.find(".combobox-item-hover").removeClass("combobox-item-hover");
_a7b.find(".combobox-item,.combobox-group").hide();
var data=_a78.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _a7c=q;
var _a7d=undefined;
_a79=$();
for(var i=0;i<data.length;i++){
var row=data[i];
if(opts.filter.call(_a77,q,row)){
var v=row[opts.valueField];
var s=row[opts.textField];
var g=row[opts.groupField];
var item=opts.finder.getEl(_a77,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_a7c=v;
if(opts.reversed){
_a79=item;
}else{
_a5d(_a77,v,true);
}
}
if(opts.groupField&&_a7d!=g){
opts.finder.getGroupEl(_a77,g).show();
_a7d=g;
}
}
}
vv.push(_a7c);
});
_a7a(vv);
}
function _a7a(vv){
if(opts.reversed){
_a79.addClass("combobox-item-hover");
}else{
_a62(_a77,opts.multiple?(q?vv:[]):vv,true);
}
};
};
function _a7e(_a7f){
var t=$(_a7f);
var opts=t.combobox("options");
var _a80=t.combobox("panel");
var item=_a80.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_a7f,item);
var _a81=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
t.combobox("unselect",_a81);
}else{
t.combobox("select",_a81);
}
}else{
t.combobox("select",_a81);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_a51(_a7f,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!opts.multiple){
t.combobox("hidePanel");
}
};
function _a82(_a83){
var _a84=$.data(_a83,"combobox");
var opts=_a84.options;
$(_a83).addClass("combobox-f");
$(_a83).combo($.extend({},opts,{onShowPanel:function(){
$(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
_a62(this,$(this).combobox("getValues"),true);
$(this).combobox("scrollTo",$(this).combobox("getValue"));
opts.onShowPanel.call(this);
}}));
var p=$(_a83).combo("panel");
p.unbind(".combobox");
for(var _a85 in opts.panelEvents){
p.bind(_a85+".combobox",{target:_a83},opts.panelEvents[_a85]);
}
};
function _a86(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var item=$(e.target).closest("div.combobox-item");
if(!item.hasClass("combobox-item-disabled")){
item.addClass("combobox-item-hover");
}
e.stopPropagation();
};
function _a87(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
};
function _a88(e){
var _a89=$(this).panel("options").comboTarget;
if(!_a89){
return;
}
var opts=$(_a89).combobox("options");
var item=$(e.target).closest("div.combobox-item");
if(!item.length||item.hasClass("combobox-item-disabled")){
return;
}
var row=opts.finder.getRow(_a89,item);
if(!row){
return;
}
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
opts.blurTimer=null;
}
opts.onClick.call(_a89,row);
var _a8a=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_a63(_a89,_a8a);
}else{
_a5d(_a89,_a8a);
}
}else{
$(_a89).combobox("setValue",_a8a).combobox("hidePanel");
}
e.stopPropagation();
};
function _a8b(e){
var _a8c=$(this).panel("options").comboTarget;
if(!_a8c){
return;
}
var opts=$(_a8c).combobox("options");
if(opts.groupPosition=="sticky"){
var _a8d=$(this).children(".combobox-stick");
if(!_a8d.length){
_a8d=$("<div class=\"combobox-stick\"></div>").appendTo(this);
}
_a8d.hide();
var _a8e=$(_a8c).data("combobox");
$(this).children(".combobox-group:visible").each(function(){
var g=$(this);
var _a8f=opts.finder.getGroup(_a8c,g);
var _a90=_a8e.data[_a8f.startIndex+_a8f.count-1];
var last=opts.finder.getEl(_a8c,_a90[opts.valueField]);
if(g.position().top<0&&last.position().top>0){
_a8d.show().html(g.html());
return false;
}
});
}
};
$.fn.combobox=function(_a91,_a92){
if(typeof _a91=="string"){
var _a93=$.fn.combobox.methods[_a91];
if(_a93){
return _a93(this,_a92);
}else{
return this.combo(_a91,_a92);
}
}
_a91=_a91||{};
return this.each(function(){
var _a94=$.data(this,"combobox");
if(_a94){
$.extend(_a94.options,_a91);
}else{
_a94=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_a91),data:[]});
}
_a82(this);
if(_a94.options.data){
_a6e(this,_a94.options.data);
}else{
var data=$.fn.combobox.parseData(this);
if(data.length){
_a6e(this,data);
}
}
_a72(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _a95=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_a95.width,height:_a95.height,originalValue:_a95.originalValue,disabled:_a95.disabled,readonly:_a95.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combobox",$(from).data("combobox"));
$(this).addClass("combobox-f").attr("comboboxName",$(this).attr("textboxName"));
});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_a96){
return jq.each(function(){
_a62(this,_a96);
});
},setValue:function(jq,_a97){
return jq.each(function(){
_a62(this,$.isArray(_a97)?_a97:[_a97]);
});
},clear:function(jq){
return jq.each(function(){
_a62(this,[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_a6e(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_a72(this,url);
}else{
if(url){
var opts=$(this).combobox("options");
opts.queryParams=url;
}
_a72(this);
}
});
},select:function(jq,_a98){
return jq.each(function(){
_a5d(this,_a98);
});
},unselect:function(jq,_a99){
return jq.each(function(){
_a63(this,_a99);
});
},scrollTo:function(jq,_a9a){
return jq.each(function(){
_a55(this,_a9a);
});
}};
$.fn.combobox.parseOptions=function(_a9b){
var t=$(_a9b);
return $.extend({},$.fn.combo.parseOptions(_a9b),$.parser.parseOptions(_a9b,["valueField","textField","groupField","groupPosition","mode","method","url",{showItemIcon:"boolean",limitToList:"boolean"}]));
};
$.fn.combobox.parseData=function(_a9c){
var data=[];
var opts=$(_a9c).combobox("options");
$(_a9c).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _a9d=$(this).attr("label");
$(this).children().each(function(){
_a9e(this,_a9d);
});
}else{
_a9e(this);
}
});
return data;
function _a9e(el,_a9f){
var t=$(el);
var row={};
row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[opts.textField]=t.text();
row["iconCls"]=$.parser.parseOptions(el,["iconCls"]).iconCls;
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_a9f){
opts.groupField=opts.groupField||"group";
row[opts.groupField]=_a9f;
}
data.push(row);
};
};
var _aa0=0;
var _aa1={render:function(_aa2,_aa3,data){
var _aa4=$.data(_aa2,"combobox");
var opts=_aa4.options;
_aa0++;
_aa4.itemIdPrefix="_easyui_combobox_i"+_aa0;
_aa4.groupIdPrefix="_easyui_combobox_g"+_aa0;
_aa4.groups=[];
var dd=[];
var _aa5=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
var v=row[opts.valueField]+"";
var s=row[opts.textField];
var g=row[opts.groupField];
if(g){
if(_aa5!=g){
_aa5=g;
_aa4.groups.push({value:g,startIndex:i,count:1});
dd.push("<div id=\""+(_aa4.groupIdPrefix+"_"+(_aa4.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(opts.groupFormatter?opts.groupFormatter.call(_aa2,g):g);
dd.push("</div>");
}else{
_aa4.groups[_aa4.groups.length-1].count++;
}
}else{
_aa5=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_aa4.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
if(opts.showItemIcon&&row.iconCls){
dd.push("<span class=\"combobox-icon "+row.iconCls+"\"></span>");
}
dd.push(opts.formatter?opts.formatter.call(_aa2,row):s);
dd.push("</div>");
}
$(_aa3).html(dd.join(""));
}};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupPosition:"static",groupField:null,groupFormatter:function(_aa6){
return _aa6;
},mode:"local",method:"post",url:null,data:null,queryParams:{},showItemIcon:false,limitToList:false,view:_aa1,keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_a7e(this);
},query:function(q,e){
_a76(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _aa7=e.data.target;
var opts=$(_aa7).combobox("options");
if(opts.reversed||opts.limitToList){
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
}
opts.blurTimer=setTimeout(function(){
var _aa8=$(_aa7).parent().length;
if(_aa8){
if(opts.reversed){
$(_aa7).combobox("setValues",$(_aa7).combobox("getValues"));
}else{
if(opts.limitToList){
var vv=[];
$.map($(_aa7).combobox("getValues"),function(v){
var _aa9=$.easyui.indexOfArray($(_aa7).combobox("getData"),opts.valueField,v);
if(_aa9>=0){
vv.push(v);
}
});
$(_aa7).combobox("setValues",vv);
}
}
opts.blurTimer=null;
}
},50);
}
}}),panelEvents:{mouseover:_a86,mouseout:_a87,click:_a88,scroll:_a8b},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())>=0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_aaa,_aab,_aac){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_aaa,dataType:"json",success:function(data){
_aab(data);
},error:function(){
_aac.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},finder:{getEl:function(_aad,_aae){
var _aaf=_a51(_aad,_aae);
var id=$.data(_aad,"combobox").itemIdPrefix+"_"+_aaf;
return $("#"+id);
},getGroupEl:function(_ab0,_ab1){
var _ab2=$.data(_ab0,"combobox");
var _ab3=$.easyui.indexOfArray(_ab2.groups,"value",_ab1);
var id=_ab2.groupIdPrefix+"_"+_ab3;
return $("#"+id);
},getGroup:function(_ab4,p){
var _ab5=$.data(_ab4,"combobox");
var _ab6=p.attr("id").substr(_ab5.groupIdPrefix.length+1);
return _ab5.groups[parseInt(_ab6)];
},getRow:function(_ab7,p){
var _ab8=$.data(_ab7,"combobox");
var _ab9=(p instanceof $)?p.attr("id").substr(_ab8.itemIdPrefix.length+1):_a51(_ab7,p);
return _ab8.data[parseInt(_ab9)];
}},onBeforeLoad:function(_aba){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onSelect:function(_abb){
},onUnselect:function(_abc){
},onClick:function(_abd){
}});
})(jQuery);
(function($){
function _abe(_abf){
var _ac0=$.data(_abf,"combotree");
var opts=_ac0.options;
var tree=_ac0.tree;
$(_abf).addClass("combotree-f");
$(_abf).combo($.extend({},opts,{onShowPanel:function(){
if(opts.editable){
tree.tree("doFilter","");
}
opts.onShowPanel.call(this);
}}));
var _ac1=$(_abf).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_ac1);
_ac0.tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _ac2=$(_abf).combotree("getValues");
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
$.easyui.addArrayItem(_ac2,node.id);
});
}
_ac7(_abf,_ac2,_ac0.remainText);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
if(opts.multiple){
$(this).tree(node.checked?"uncheck":"check",node.target);
}else{
$(_abf).combo("hidePanel");
}
_ac0.remainText=false;
_ac4(_abf);
opts.onClick.call(this,node);
},onCheck:function(node,_ac3){
_ac0.remainText=false;
_ac4(_abf);
opts.onCheck.call(this,node,_ac3);
}}));
};
function _ac4(_ac5){
var _ac6=$.data(_ac5,"combotree");
var opts=_ac6.options;
var tree=_ac6.tree;
var vv=[];
if(opts.multiple){
vv=$.map(tree.tree("getChecked"),function(node){
return node.id;
});
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
}
}
vv=vv.concat(opts.unselectedValues);
_ac7(_ac5,vv,_ac6.remainText);
};
function _ac7(_ac8,_ac9,_aca){
var _acb=$.data(_ac8,"combotree");
var opts=_acb.options;
var tree=_acb.tree;
var _acc=tree.tree("options");
var _acd=_acc.onBeforeCheck;
var _ace=_acc.onCheck;
var _acf=_acc.onSelect;
_acc.onBeforeCheck=_acc.onCheck=_acc.onSelect=function(){
};
if(!$.isArray(_ac9)){
_ac9=_ac9.split(opts.separator);
}
if(!opts.multiple){
_ac9=_ac9.length?[_ac9[0]]:[""];
}
var vv=$.map(_ac9,function(_ad0){
return String(_ad0);
});
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
$.map(tree.tree("getChecked"),function(node){
if($.inArray(String(node.id),vv)==-1){
tree.tree("uncheck",node.target);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var node=tree.tree("find",v);
if(node){
tree.tree("check",node.target).tree("select",node.target);
ss.push(_ad1(node));
}else{
ss.push(_ad2(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
var id=String(node.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_ad1(node));
}
});
}
_acc.onBeforeCheck=_acd;
_acc.onCheck=_ace;
_acc.onSelect=_acf;
if(!_aca){
var s=ss.join(opts.separator);
if($(_ac8).combo("getText")!=s){
$(_ac8).combo("setText",s);
}
}
$(_ac8).combo("setValues",vv);
function _ad2(_ad3,a){
var item=$.easyui.getArrayItem(a,"id",_ad3);
return item?_ad1(item):undefined;
};
function _ad1(node){
return node[opts.textField||""]||node.text;
};
};
function _ad4(_ad5,q){
var _ad6=$.data(_ad5,"combotree");
var opts=_ad6.options;
var tree=_ad6.tree;
_ad6.remainText=true;
tree.tree("doFilter",opts.multiple?q.split(opts.separator):q);
};
function _ad7(_ad8){
var _ad9=$.data(_ad8,"combotree");
_ad9.remainText=false;
$(_ad8).combotree("setValues",$(_ad8).combotree("getValues"));
$(_ad8).combotree("hidePanel");
};
$.fn.combotree=function(_ada,_adb){
if(typeof _ada=="string"){
var _adc=$.fn.combotree.methods[_ada];
if(_adc){
return _adc(this,_adb);
}else{
return this.combo(_ada,_adb);
}
}
_ada=_ada||{};
return this.each(function(){
var _add=$.data(this,"combotree");
if(_add){
$.extend(_add.options,_ada);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_ada)});
}
_abe(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _ade=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_ade.width,height:_ade.height,originalValue:_ade.originalValue,disabled:_ade.disabled,readonly:_ade.readonly});
},clone:function(jq,_adf){
var t=jq.combo("clone",_adf);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_ae0){
return jq.each(function(){
var opts=$(this).combotree("options");
if($.isArray(_ae0)){
_ae0=$.map(_ae0,function(_ae1){
if(_ae1&&typeof _ae1=="object"){
$.easyui.addArrayItem(opts.mappingRows,"id",_ae1);
return _ae1.id;
}else{
return _ae1;
}
});
}
_ac7(this,_ae0);
});
},setValue:function(jq,_ae2){
return jq.each(function(){
$(this).combotree("setValues",$.isArray(_ae2)?_ae2:[_ae2]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotree("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_ae3){
return $.extend({},$.fn.combo.parseOptions(_ae3),$.fn.tree.parseOptions(_ae3));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false,textField:null,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_ad7(this);
},query:function(q,e){
_ad4(this,q);
}}});
})(jQuery);
(function($){
function _ae4(_ae5){
var _ae6=$.data(_ae5,"combogrid");
var opts=_ae6.options;
var grid=_ae6.grid;
$(_ae5).addClass("combogrid-f").combo($.extend({},opts,{onShowPanel:function(){
_afb(this,$(this).combogrid("getValues"),true);
var p=$(this).combogrid("panel");
var _ae7=p.outerHeight()-p.height();
var _ae8=p._size("minHeight");
var _ae9=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_ae8?_ae8-_ae7:""),maxHeight:(_ae9?_ae9-_ae7:"")});
var row=dg.datagrid("getSelected");
if(row){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",row));
}
opts.onShowPanel.call(this);
}}));
var _aea=$(_ae5).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_aea);
_ae6.grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,singleSelect:(!opts.multiple),onLoadSuccess:_aeb,onClickRow:_aec,onSelect:_aed("onSelect"),onUnselect:_aed("onUnselect"),onSelectAll:_aed("onSelectAll"),onUnselectAll:_aed("onUnselectAll")}));
function _aee(dg){
return $(dg).closest(".combo-panel").panel("options").comboTarget||_ae5;
};
function _aeb(data){
var _aef=_aee(this);
var _af0=$(_aef).data("combogrid");
var opts=_af0.options;
var _af1=$(_aef).combo("getValues");
_afb(_aef,_af1,_af0.remainText);
opts.onLoadSuccess.call(this,data);
};
function _aec(_af2,row){
var _af3=_aee(this);
var _af4=$(_af3).data("combogrid");
var opts=_af4.options;
_af4.remainText=false;
_af5.call(this);
if(!opts.multiple){
$(_af3).combo("hidePanel");
}
opts.onClickRow.call(this,_af2,row);
};
function _aed(_af6){
return function(_af7,row){
var _af8=_aee(this);
var opts=$(_af8).combogrid("options");
if(_af6=="onUnselectAll"){
if(opts.multiple){
_af5.call(this);
}
}else{
_af5.call(this);
}
opts[_af6].call(this,_af7,row);
};
};
function _af5(){
var dg=$(this);
var _af9=_aee(dg);
var _afa=$(_af9).data("combogrid");
var opts=_afa.options;
var vv=$.map(dg.datagrid("getSelections"),function(row){
return row[opts.idField];
});
vv=vv.concat(opts.unselectedValues);
_afb(_af9,vv,_afa.remainText);
};
};
function nav(_afc,dir){
var _afd=$.data(_afc,"combogrid");
var opts=_afd.options;
var grid=_afd.grid;
var _afe=grid.datagrid("getRows").length;
if(!_afe){
return;
}
var tr=opts.finder.getTr(grid[0],null,"highlight");
if(!tr.length){
tr=opts.finder.getTr(grid[0],null,"selected");
}
var _aff;
if(!tr.length){
_aff=(dir=="next"?0:_afe-1);
}else{
var _aff=parseInt(tr.attr("datagrid-row-index"));
_aff+=(dir=="next"?1:-1);
if(_aff<0){
_aff=_afe-1;
}
if(_aff>=_afe){
_aff=0;
}
}
grid.datagrid("highlightRow",_aff);
if(opts.selectOnNavigation){
_afd.remainText=false;
grid.datagrid("selectRow",_aff);
}
};
function _afb(_b00,_b01,_b02){
var _b03=$.data(_b00,"combogrid");
var opts=_b03.options;
var grid=_b03.grid;
var _b04=$(_b00).combo("getValues");
var _b05=$(_b00).combo("options");
var _b06=_b05.onChange;
_b05.onChange=function(){
};
var _b07=grid.datagrid("options");
var _b08=_b07.onSelect;
var _b09=_b07.onUnselectAll;
_b07.onSelect=_b07.onUnselectAll=function(){
};
if(!$.isArray(_b01)){
_b01=_b01.split(opts.separator);
}
if(!opts.multiple){
_b01=_b01.length?[_b01[0]]:[""];
}
var vv=$.map(_b01,function(_b0a){
return String(_b0a);
});
vv=$.grep(vv,function(v,_b0b){
return _b0b===$.inArray(v,vv);
});
var _b0c=$.grep(grid.datagrid("getSelections"),function(row,_b0d){
return $.inArray(String(row[opts.idField]),vv)>=0;
});
grid.datagrid("clearSelections");
grid.data("datagrid").selectedRows=_b0c;
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var _b0e=grid.datagrid("getRowIndex",v);
if(_b0e>=0){
grid.datagrid("selectRow",_b0e);
}else{
opts.unselectedValues.push(v);
}
ss.push(_b0f(v,grid.datagrid("getRows"))||_b0f(v,_b0c)||_b0f(v,opts.mappingRows)||v);
});
$(_b00).combo("setValues",_b04);
_b05.onChange=_b06;
_b07.onSelect=_b08;
_b07.onUnselectAll=_b09;
if(!_b02){
var s=ss.join(opts.separator);
if($(_b00).combo("getText")!=s){
$(_b00).combo("setText",s);
}
}
$(_b00).combo("setValues",_b01);
function _b0f(_b10,a){
var item=$.easyui.getArrayItem(a,opts.idField,_b10);
return item?item[opts.textField]:undefined;
};
};
function _b11(_b12,q){
var _b13=$.data(_b12,"combogrid");
var opts=_b13.options;
var grid=_b13.grid;
_b13.remainText=true;
var qq=opts.multiple?q.split(opts.separator):[q];
qq=$.grep(qq,function(q){
return $.trim(q)!="";
});
if(opts.mode=="remote"){
_b14(qq);
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
grid.datagrid("highlightRow",-1);
var rows=grid.datagrid("getRows");
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _b15=q;
_b16(opts.mappingRows,q);
_b16(grid.datagrid("getSelections"),q);
var _b17=_b16(rows,q);
if(_b17>=0){
if(opts.reversed){
grid.datagrid("highlightRow",_b17);
}
}else{
$.map(rows,function(row,i){
if(opts.filter.call(_b12,q,row)){
grid.datagrid("highlightRow",i);
}
});
}
});
_b14(vv);
}
function _b16(rows,q){
for(var i=0;i<rows.length;i++){
var row=rows[i];
if((row[opts.textField]||"").toLowerCase()==q.toLowerCase()){
vv.push(row[opts.idField]);
return i;
}
}
return -1;
};
function _b14(vv){
if(!opts.reversed){
_afb(_b12,vv,true);
}
};
};
function _b18(_b19){
var _b1a=$.data(_b19,"combogrid");
var opts=_b1a.options;
var grid=_b1a.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_b1a.remainText=false;
if(tr.length){
var _b1b=parseInt(tr.attr("datagrid-row-index"));
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.datagrid("unselectRow",_b1b);
}else{
grid.datagrid("selectRow",_b1b);
}
}else{
grid.datagrid("selectRow",_b1b);
}
}
var vv=[];
$.map(grid.datagrid("getSelections"),function(row){
vv.push(row[opts.idField]);
});
$.map(opts.unselectedValues,function(v){
if($.easyui.indexOfArray(opts.mappingRows,opts.idField,v)>=0){
$.easyui.addArrayItem(vv,v);
}
});
$(_b19).combogrid("setValues",vv);
if(!opts.multiple){
$(_b19).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_b1c,_b1d){
if(typeof _b1c=="string"){
var _b1e=$.fn.combogrid.methods[_b1c];
if(_b1e){
return _b1e(this,_b1d);
}else{
return this.combo(_b1c,_b1d);
}
}
_b1c=_b1c||{};
return this.each(function(){
var _b1f=$.data(this,"combogrid");
if(_b1f){
$.extend(_b1f.options,_b1c);
}else{
_b1f=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_b1c)});
}
_ae4(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _b20=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_b20.width,height:_b20.height,originalValue:_b20.originalValue,disabled:_b20.disabled,readonly:_b20.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combogrid",{options:$.extend(true,{cloned:true},$(from).combogrid("options")),combo:$(this).next(),panel:$(from).combo("panel"),grid:$(from).combogrid("grid")});
});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_b21){
return jq.each(function(){
var opts=$(this).combogrid("options");
if($.isArray(_b21)){
_b21=$.map(_b21,function(_b22){
if(_b22&&typeof _b22=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b22);
return _b22[opts.idField];
}else{
return _b22;
}
});
}
_afb(this,_b21);
});
},setValue:function(jq,_b23){
return jq.each(function(){
$(this).combogrid("setValues",$.isArray(_b23)?_b23:[_b23]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_b24){
var t=$(_b24);
return $.extend({},$.fn.combo.parseOptions(_b24),$.fn.datagrid.parseOptions(_b24),$.parser.parseOptions(_b24,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_b18(this);
},query:function(q,e){
_b11(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b25=e.data.target;
var opts=$(_b25).combogrid("options");
if(opts.reversed){
$(_b25).combogrid("setValues",$(_b25).combogrid("getValues"));
}
}}),filter:function(q,row){
var opts=$(this).combogrid("options");
return (row[opts.textField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b26(_b27){
var _b28=$.data(_b27,"combotreegrid");
var opts=_b28.options;
$(_b27).addClass("combotreegrid-f").combo($.extend({},opts,{onShowPanel:function(){
var p=$(this).combotreegrid("panel");
var _b29=p.outerHeight()-p.height();
var _b2a=p._size("minHeight");
var _b2b=p._size("maxHeight");
var dg=$(this).combotreegrid("grid");
dg.treegrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_b2a?_b2a-_b29:""),maxHeight:(_b2b?_b2b-_b29:"")});
var row=dg.treegrid("getSelected");
if(row){
dg.treegrid("scrollTo",row[opts.idField]);
}
opts.onShowPanel.call(this);
}}));
if(!_b28.grid){
var _b2c=$(_b27).combo("panel");
_b28.grid=$("<table></table>").appendTo(_b2c);
}
_b28.grid.treegrid($.extend({},opts,{border:false,checkbox:opts.multiple,onLoadSuccess:function(row,data){
var _b2d=$(_b27).combotreegrid("getValues");
if(opts.multiple){
$.map($(this).treegrid("getCheckedNodes"),function(row){
$.easyui.addArrayItem(_b2d,row[opts.idField]);
});
}
_b32(_b27,_b2d);
opts.onLoadSuccess.call(this,row,data);
_b28.remainText=false;
},onClickRow:function(row){
if(opts.multiple){
$(this).treegrid(row.checked?"uncheckNode":"checkNode",row[opts.idField]);
$(this).treegrid("unselect",row[opts.idField]);
}else{
$(_b27).combo("hidePanel");
}
_b2f(_b27);
opts.onClickRow.call(this,row);
},onCheckNode:function(row,_b2e){
_b2f(_b27);
opts.onCheckNode.call(this,row,_b2e);
}}));
};
function _b2f(_b30){
var _b31=$.data(_b30,"combotreegrid");
var opts=_b31.options;
var grid=_b31.grid;
var vv=[];
if(opts.multiple){
vv=$.map(grid.treegrid("getCheckedNodes"),function(row){
return row[opts.idField];
});
}else{
var row=grid.treegrid("getSelected");
if(row){
vv.push(row[opts.idField]);
}
}
vv=vv.concat(opts.unselectedValues);
_b32(_b30,vv);
};
function _b32(_b33,_b34){
var _b35=$.data(_b33,"combotreegrid");
var opts=_b35.options;
var grid=_b35.grid;
if(!$.isArray(_b34)){
_b34=_b34.split(opts.separator);
}
if(!opts.multiple){
_b34=_b34.length?[_b34[0]]:[""];
}
var vv=$.map(_b34,function(_b36){
return String(_b36);
});
vv=$.grep(vv,function(v,_b37){
return _b37===$.inArray(v,vv);
});
var _b38=grid.treegrid("getSelected");
if(_b38){
grid.treegrid("unselect",_b38[opts.idField]);
}
$.map(grid.treegrid("getCheckedNodes"),function(row){
if($.inArray(String(row[opts.idField]),vv)==-1){
grid.treegrid("uncheckNode",row[opts.idField]);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var row=grid.treegrid("find",v);
if(row){
if(opts.multiple){
grid.treegrid("checkNode",v);
}else{
grid.treegrid("select",v);
}
ss.push(_b39(row));
}else{
ss.push(_b3a(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(grid.treegrid("getCheckedNodes"),function(row){
var id=String(row[opts.idField]);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_b39(row));
}
});
}
if(!_b35.remainText){
var s=ss.join(opts.separator);
if($(_b33).combo("getText")!=s){
$(_b33).combo("setText",s);
}
}
$(_b33).combo("setValues",vv);
function _b3a(_b3b,a){
var item=$.easyui.getArrayItem(a,opts.idField,_b3b);
return item?_b39(item):undefined;
};
function _b39(row){
return row[opts.textField||""]||row[opts.treeField];
};
};
function _b3c(_b3d,q){
var _b3e=$.data(_b3d,"combotreegrid");
var opts=_b3e.options;
var grid=_b3e.grid;
_b3e.remainText=true;
grid.treegrid("clearSelections").treegrid("clearChecked").treegrid("highlightRow",-1);
if(opts.mode=="remote"){
$(_b3d).combotreegrid("clear");
grid.treegrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(q){
var data=grid.treegrid("getData");
var vv=[];
var qq=opts.multiple?q.split(opts.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
var v=undefined;
$.easyui.forEach(data,true,function(row){
if(q.toLowerCase()==String(row[opts.treeField]).toLowerCase()){
v=row[opts.idField];
return false;
}else{
if(opts.filter.call(_b3d,q,row)){
grid.treegrid("expandTo",row[opts.idField]);
grid.treegrid("highlightRow",row[opts.idField]);
return false;
}
}
});
if(v==undefined){
$.easyui.forEach(opts.mappingRows,false,function(row){
if(q.toLowerCase()==String(row[opts.treeField])){
v=row[opts.idField];
return false;
}
});
}
if(v!=undefined){
vv.push(v);
}
}
});
_b32(_b3d,vv);
_b3e.remainText=false;
}
}
};
function _b3f(_b40){
_b2f(_b40);
};
$.fn.combotreegrid=function(_b41,_b42){
if(typeof _b41=="string"){
var _b43=$.fn.combotreegrid.methods[_b41];
if(_b43){
return _b43(this,_b42);
}else{
return this.combo(_b41,_b42);
}
}
_b41=_b41||{};
return this.each(function(){
var _b44=$.data(this,"combotreegrid");
if(_b44){
$.extend(_b44.options,_b41);
}else{
_b44=$.data(this,"combotreegrid",{options:$.extend({},$.fn.combotreegrid.defaults,$.fn.combotreegrid.parseOptions(this),_b41)});
}
_b26(this);
});
};
$.fn.combotreegrid.methods={options:function(jq){
var _b45=jq.combo("options");
return $.extend($.data(jq[0],"combotreegrid").options,{width:_b45.width,height:_b45.height,originalValue:_b45.originalValue,disabled:_b45.disabled,readonly:_b45.readonly});
},grid:function(jq){
return $.data(jq[0],"combotreegrid").grid;
},setValues:function(jq,_b46){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if($.isArray(_b46)){
_b46=$.map(_b46,function(_b47){
if(_b47&&typeof _b47=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b47);
return _b47[opts.idField];
}else{
return _b47;
}
});
}
_b32(this,_b46);
});
},setValue:function(jq,_b48){
return jq.each(function(){
$(this).combotreegrid("setValues",$.isArray(_b48)?_b48:[_b48]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotreegrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if(opts.multiple){
$(this).combotreegrid("setValues",opts.originalValue);
}else{
$(this).combotreegrid("setValue",opts.originalValue);
}
});
}};
$.fn.combotreegrid.parseOptions=function(_b49){
var t=$(_b49);
return $.extend({},$.fn.combo.parseOptions(_b49),$.fn.treegrid.parseOptions(_b49),$.parser.parseOptions(_b49,["mode",{limitToGrid:"boolean"}]));
};
$.fn.combotreegrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.treegrid.defaults,{editable:false,singleSelect:true,limitToGrid:false,unselectedValues:[],mappingRows:[],mode:"local",textField:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b3f(this);
},query:function(q,e){
_b3c(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b4a=e.data.target;
var opts=$(_b4a).combotreegrid("options");
if(opts.limitToGrid){
_b3f(_b4a);
}
}}),filter:function(q,row){
var opts=$(this).combotreegrid("options");
return (row[opts.treeField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b4b(_b4c){
var _b4d=$.data(_b4c,"tagbox");
var opts=_b4d.options;
$(_b4c).addClass("tagbox-f").combobox($.extend({},opts,{cls:"tagbox",reversed:true,onChange:function(_b4e,_b4f){
_b50();
$(this).combobox("hidePanel");
opts.onChange.call(_b4c,_b4e,_b4f);
},onResizing:function(_b51,_b52){
var _b53=$(this).combobox("textbox");
var tb=$(this).data("textbox").textbox;
tb.css({height:"",paddingLeft:_b53.css("marginLeft"),paddingRight:_b53.css("marginRight")});
_b53.css("margin",0);
tb._size({width:opts.width},$(this).parent());
_b66(_b4c);
_b58(this);
opts.onResizing.call(_b4c,_b51,_b52);
},onLoadSuccess:function(data){
_b50();
opts.onLoadSuccess.call(_b4c,data);
}}));
_b50();
_b66(_b4c);
function _b50(){
$(_b4c).next().find(".tagbox-label").remove();
var _b54=$(_b4c).tagbox("textbox");
var ss=[];
$.map($(_b4c).tagbox("getValues"),function(_b55,_b56){
var row=opts.finder.getRow(_b4c,_b55);
var text=opts.tagFormatter.call(_b4c,_b55,row);
var cs={};
var css=opts.tagStyler.call(_b4c,_b55,row)||"";
if(typeof css=="string"){
cs={s:css};
}else{
cs={c:css["class"]||"",s:css["style"]||""};
}
var _b57=$("<span class=\"tagbox-label\"></span>").insertBefore(_b54).html(text);
_b57.attr("tagbox-index",_b56);
_b57.attr("style",cs.s).addClass(cs.c);
$("<a href=\"javascript:;\" class=\"tagbox-remove\"></a>").appendTo(_b57);
});
_b58(_b4c);
$(_b4c).combobox("setText","");
};
};
function _b58(_b59,_b5a){
var span=$(_b59).next();
var _b5b=_b5a?$(_b5a):span.find(".tagbox-label");
if(_b5b.length){
var _b5c=$(_b59).tagbox("textbox");
var _b5d=$(_b5b[0]);
var _b5e=_b5d.outerHeight(true)-_b5d.outerHeight();
var _b5f=_b5c.outerHeight()-_b5e*2;
_b5b.css({height:_b5f+"px",lineHeight:_b5f+"px"});
var _b60=span.find(".textbox-addon").css("height","100%");
_b60.find(".textbox-icon").css("height","100%");
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
}
};
function _b61(_b62){
var span=$(_b62).next();
span.unbind(".tagbox").bind("click.tagbox",function(e){
var opts=$(_b62).tagbox("options");
if(opts.disabled||opts.readonly){
return;
}
if($(e.target).hasClass("tagbox-remove")){
var _b63=parseInt($(e.target).parent().attr("tagbox-index"));
var _b64=$(_b62).tagbox("getValues");
if(opts.onBeforeRemoveTag.call(_b62,_b64[_b63])==false){
return;
}
opts.onRemoveTag.call(_b62,_b64[_b63]);
_b64.splice(_b63,1);
$(_b62).tagbox("setValues",_b64);
}else{
var _b65=$(e.target).closest(".tagbox-label");
if(_b65.length){
var _b63=parseInt(_b65.attr("tagbox-index"));
var _b64=$(_b62).tagbox("getValues");
opts.onClickTag.call(_b62,_b64[_b63]);
}
}
$(this).find(".textbox-text").focus();
}).bind("keyup.tagbox",function(e){
_b66(_b62);
}).bind("mouseover.tagbox",function(e){
if($(e.target).closest(".textbox-button,.textbox-addon,.tagbox-label").length){
$(this).triggerHandler("mouseleave");
}else{
$(this).find(".textbox-text").triggerHandler("mouseenter");
}
}).bind("mouseleave.tagbox",function(e){
$(this).find(".textbox-text").triggerHandler("mouseleave");
});
};
function _b66(_b67){
var opts=$(_b67).tagbox("options");
var _b68=$(_b67).tagbox("textbox");
var span=$(_b67).next();
var tmp=$("<span></span>").appendTo("body");
tmp.attr("style",_b68.attr("style"));
tmp.css({position:"absolute",top:-9999,left:-9999,width:"auto",fontFamily:_b68.css("fontFamily"),fontSize:_b68.css("fontSize"),fontWeight:_b68.css("fontWeight"),whiteSpace:"nowrap"});
var _b69=_b6a(_b68.val());
var _b6b=_b6a(opts.prompt||"");
tmp.remove();
var _b6c=Math.min(Math.max(_b69,_b6b)+20,span.width());
_b68._outerWidth(_b6c);
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
function _b6a(val){
var s=val.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");
tmp.html(s);
return tmp.outerWidth();
};
};
function _b6d(_b6e){
var t=$(_b6e);
var opts=t.tagbox("options");
if(opts.limitToList){
var _b6f=t.tagbox("panel");
var item=_b6f.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_b6e,item);
var _b70=row[opts.valueField];
$(_b6e).tagbox(item.hasClass("combobox-item-selected")?"unselect":"select",_b70);
}
$(_b6e).tagbox("hidePanel");
}else{
var v=$.trim($(_b6e).tagbox("getText"));
if(v!==""){
var _b71=$(_b6e).tagbox("getValues");
_b71.push(v);
$(_b6e).tagbox("setValues",_b71);
}
}
};
function _b72(_b73,_b74){
$(_b73).combobox("setText","");
_b66(_b73);
$(_b73).combobox("setValues",_b74);
$(_b73).combobox("setText","");
$(_b73).tagbox("validate");
};
$.fn.tagbox=function(_b75,_b76){
if(typeof _b75=="string"){
var _b77=$.fn.tagbox.methods[_b75];
if(_b77){
return _b77(this,_b76);
}else{
return this.combobox(_b75,_b76);
}
}
_b75=_b75||{};
return this.each(function(){
var _b78=$.data(this,"tagbox");
if(_b78){
$.extend(_b78.options,_b75);
}else{
$.data(this,"tagbox",{options:$.extend({},$.fn.tagbox.defaults,$.fn.tagbox.parseOptions(this),_b75)});
}
_b4b(this);
_b61(this);
});
};
$.fn.tagbox.methods={options:function(jq){
var _b79=jq.combobox("options");
return $.extend($.data(jq[0],"tagbox").options,{width:_b79.width,height:_b79.height,originalValue:_b79.originalValue,disabled:_b79.disabled,readonly:_b79.readonly});
},setValues:function(jq,_b7a){
return jq.each(function(){
_b72(this,_b7a);
});
},reset:function(jq){
return jq.each(function(){
$(this).combobox("reset").combobox("setText","");
});
}};
$.fn.tagbox.parseOptions=function(_b7b){
return $.extend({},$.fn.combobox.parseOptions(_b7b),$.parser.parseOptions(_b7b,[]));
};
$.fn.tagbox.defaults=$.extend({},$.fn.combobox.defaults,{hasDownArrow:false,multiple:true,reversed:true,selectOnNavigation:false,tipOptions:$.extend({},$.fn.textbox.defaults.tipOptions,{showDelay:200}),val:function(_b7c){
var vv=$(_b7c).parent().prev().tagbox("getValues");
if($(_b7c).is(":focus")){
vv.push($(_b7c).val());
}
return vv.join(",");
},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b7d=e.data.target;
var opts=$(_b7d).tagbox("options");
if(opts.limitToList){
_b6d(_b7d);
}
}}),keyHandler:$.extend({},$.fn.combobox.defaults.keyHandler,{enter:function(e){
_b6d(this);
},query:function(q,e){
var opts=$(this).tagbox("options");
if(opts.limitToList){
$.fn.combobox.defaults.keyHandler.query.call(this,q,e);
}else{
$(this).combobox("hidePanel");
}
}}),tagFormatter:function(_b7e,row){
var opts=$(this).tagbox("options");
return row?row[opts.textField]:_b7e;
},tagStyler:function(_b7f,row){
return "";
},onClickTag:function(_b80){
},onBeforeRemoveTag:function(_b81){
},onRemoveTag:function(_b82){
}});
})(jQuery);
(function($){
function _b83(_b84){
var _b85=$.data(_b84,"datebox");
var opts=_b85.options;
$(_b84).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function(){
_b86(this);
_b87(this);
_b88(this);
_b96(this,$(this).datebox("getText"),true);
opts.onShowPanel.call(this);
}}));
if(!_b85.calendar){
var _b89=$(_b84).combo("panel").css("overflow","hidden");
_b89.panel("options").onBeforeDestroy=function(){
var c=$(this).find(".calendar-shared");
if(c.length){
c.insertBefore(c[0].pholder);
}
};
var cc=$("<div class=\"datebox-calendar-inner\"></div>").prependTo(_b89);
if(opts.sharedCalendar){
var c=$(opts.sharedCalendar);
if(!c[0].pholder){
c[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(c);
}
c.addClass("calendar-shared").appendTo(cc);
if(!c.hasClass("calendar")){
c.calendar();
}
_b85.calendar=c;
}else{
_b85.calendar=$("<div></div>").appendTo(cc).calendar();
}
$.extend(_b85.calendar.calendar("options"),{fit:true,border:false,onSelect:function(date){
var _b8a=this.target;
var opts=$(_b8a).datebox("options");
_b96(_b8a,opts.formatter.call(_b8a,date));
$(_b8a).combo("hidePanel");
opts.onSelect.call(_b8a,date);
}});
}
$(_b84).combo("textbox").parent().addClass("datebox");
$(_b84).datebox("initValue",opts.value);
function _b86(_b8b){
var opts=$(_b8b).datebox("options");
var _b8c=$(_b8b).combo("panel");
_b8c.unbind(".datebox").bind("click.datebox",function(e){
if($(e.target).hasClass("datebox-button-a")){
var _b8d=parseInt($(e.target).attr("datebox-button-index"));
opts.buttons[_b8d].handler.call(e.target,_b8b);
}
});
};
function _b87(_b8e){
var _b8f=$(_b8e).combo("panel");
if(_b8f.children("div.datebox-button").length){
return;
}
var _b90=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_b8f);
var tr=_b90.find("tr");
for(var i=0;i<opts.buttons.length;i++){
var td=$("<td></td>").appendTo(tr);
var btn=opts.buttons[i];
var t=$("<a class=\"datebox-button-a\" href=\"javascript:;\"></a>").html($.isFunction(btn.text)?btn.text(_b8e):btn.text).appendTo(td);
t.attr("datebox-button-index",i);
}
tr.find("td").css("width",(100/opts.buttons.length)+"%");
};
function _b88(_b91){
var _b92=$(_b91).combo("panel");
var cc=_b92.children("div.datebox-calendar-inner");
_b92.children()._outerWidth(_b92.width());
_b85.calendar.appendTo(cc);
_b85.calendar[0].target=_b91;
if(opts.panelHeight!="auto"){
var _b93=_b92.height();
_b92.children().not(cc).each(function(){
_b93-=$(this).outerHeight();
});
cc._outerHeight(_b93);
}
_b85.calendar.calendar("resize");
};
};
function _b94(_b95,q){
_b96(_b95,q,true);
};
function _b97(_b98){
var _b99=$.data(_b98,"datebox");
var opts=_b99.options;
var _b9a=_b99.calendar.calendar("options").current;
if(_b9a){
_b96(_b98,opts.formatter.call(_b98,_b9a));
$(_b98).combo("hidePanel");
}
};
function _b96(_b9b,_b9c,_b9d){
var _b9e=$.data(_b9b,"datebox");
var opts=_b9e.options;
var _b9f=_b9e.calendar;
_b9f.calendar("moveTo",opts.parser.call(_b9b,_b9c));
if(_b9d){
$(_b9b).combo("setValue",_b9c);
}else{
if(_b9c){
_b9c=opts.formatter.call(_b9b,_b9f.calendar("options").current);
}
$(_b9b).combo("setText",_b9c).combo("setValue",_b9c);
}
};
$.fn.datebox=function(_ba0,_ba1){
if(typeof _ba0=="string"){
var _ba2=$.fn.datebox.methods[_ba0];
if(_ba2){
return _ba2(this,_ba1);
}else{
return this.combo(_ba0,_ba1);
}
}
_ba0=_ba0||{};
return this.each(function(){
var _ba3=$.data(this,"datebox");
if(_ba3){
$.extend(_ba3.options,_ba0);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_ba0)});
}
_b83(this);
});
};
$.fn.datebox.methods={options:function(jq){
var _ba4=jq.combo("options");
return $.extend($.data(jq[0],"datebox").options,{width:_ba4.width,height:_ba4.height,originalValue:_ba4.originalValue,disabled:_ba4.disabled,readonly:_ba4.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"datebox",{options:$.extend(true,{},$(from).datebox("options")),calendar:$(from).datebox("calendar")});
$(this).addClass("datebox-f");
});
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},initValue:function(jq,_ba5){
return jq.each(function(){
var opts=$(this).datebox("options");
var _ba6=opts.value;
if(_ba6){
_ba6=opts.formatter.call(this,opts.parser.call(this,_ba6));
}
$(this).combo("initValue",_ba6).combo("setText",_ba6);
});
},setValue:function(jq,_ba7){
return jq.each(function(){
_b96(this,_ba7);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_ba8){
return $.extend({},$.fn.combo.parseOptions(_ba8),$.parser.parseOptions(_ba8,["sharedCalendar"]));
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b97(this);
},query:function(q,e){
_b94(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function(_ba9){
return $(_ba9).datebox("options").currentText;
},handler:function(_baa){
var now=new Date();
$(_baa).datebox("calendar").calendar({year:now.getFullYear(),month:now.getMonth()+1,current:new Date(now.getFullYear(),now.getMonth(),now.getDate())});
_b97(_baa);
}},{text:function(_bab){
return $(_bab).datebox("options").closeText;
},handler:function(_bac){
$(this).closest("div.combo-panel").panel("close");
}}],formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return (m<10?("0"+m):m)+"/"+(d<10?("0"+d):d)+"/"+y;
},parser:function(s){
if(!s){
return new Date();
}
var ss=s.split("/");
var m=parseInt(ss[0],10);
var d=parseInt(ss[1],10);
var y=parseInt(ss[2],10);
if(!isNaN(y)&&!isNaN(m)&&!isNaN(d)){
return new Date(y,m-1,d);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _bad(_bae){
var _baf=$.data(_bae,"datetimebox");
var opts=_baf.options;
$(_bae).datebox($.extend({},opts,{onShowPanel:function(){
var _bb0=$(this).datetimebox("getValue");
_bb6(this,_bb0,true);
opts.onShowPanel.call(this);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_bae).removeClass("datebox-f").addClass("datetimebox-f");
$(_bae).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(this.target,date);
}});
if(!_baf.spinner){
var _bb1=$(_bae).datebox("panel");
var p=$("<div style=\"padding:2px\"><input></div>").insertAfter(_bb1.children("div.datebox-calendar-inner"));
_baf.spinner=p.children("input");
}
_baf.spinner.timespinner({width:opts.spinnerWidth,showSeconds:opts.showSeconds,separator:opts.timeSeparator});
$(_bae).datetimebox("initValue",opts.value);
};
function _bb2(_bb3){
var c=$(_bb3).datetimebox("calendar");
var t=$(_bb3).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _bb4(_bb5,q){
_bb6(_bb5,q,true);
};
function _bb7(_bb8){
var opts=$.data(_bb8,"datetimebox").options;
var date=_bb2(_bb8);
_bb6(_bb8,opts.formatter.call(_bb8,date));
$(_bb8).combo("hidePanel");
};
function _bb6(_bb9,_bba,_bbb){
var opts=$.data(_bb9,"datetimebox").options;
$(_bb9).combo("setValue",_bba);
if(!_bbb){
if(_bba){
var date=opts.parser.call(_bb9,_bba);
$(_bb9).combo("setText",opts.formatter.call(_bb9,date));
$(_bb9).combo("setValue",opts.formatter.call(_bb9,date));
}else{
$(_bb9).combo("setText",_bba);
}
}
var date=opts.parser.call(_bb9,_bba);
$(_bb9).datetimebox("calendar").calendar("moveTo",date);
$(_bb9).datetimebox("spinner").timespinner("setValue",_bbc(date));
function _bbc(date){
function _bbd(_bbe){
return (_bbe<10?"0":"")+_bbe;
};
var tt=[_bbd(date.getHours()),_bbd(date.getMinutes())];
if(opts.showSeconds){
tt.push(_bbd(date.getSeconds()));
}
return tt.join($(_bb9).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_bbf,_bc0){
if(typeof _bbf=="string"){
var _bc1=$.fn.datetimebox.methods[_bbf];
if(_bc1){
return _bc1(this,_bc0);
}else{
return this.datebox(_bbf,_bc0);
}
}
_bbf=_bbf||{};
return this.each(function(){
var _bc2=$.data(this,"datetimebox");
if(_bc2){
$.extend(_bc2.options,_bbf);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_bbf)});
}
_bad(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var _bc3=jq.datebox("options");
return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_bc3.originalValue,disabled:_bc3.disabled,readonly:_bc3.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).datebox("cloneFrom",from);
$.data(this,"datetimebox",{options:$.extend(true,{},$(from).datetimebox("options")),spinner:$(from).datetimebox("spinner")});
$(this).removeClass("datebox-f").addClass("datetimebox-f");
});
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},initValue:function(jq,_bc4){
return jq.each(function(){
var opts=$(this).datetimebox("options");
var _bc5=opts.value;
if(_bc5){
_bc5=opts.formatter.call(this,opts.parser.call(this,_bc5));
}
$(this).combo("initValue",_bc5).combo("setText",_bc5);
});
},setValue:function(jq,_bc6){
return jq.each(function(){
_bb6(this,_bc6);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_bc7){
var t=$(_bc7);
return $.extend({},$.fn.datebox.parseOptions(_bc7),$.parser.parseOptions(_bc7,["timeSeparator","spinnerWidth",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{spinnerWidth:"100%",showSeconds:true,timeSeparator:":",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_bb7(this);
},query:function(q,e){
_bb4(this,q);
}},buttons:[{text:function(_bc8){
return $(_bc8).datetimebox("options").currentText;
},handler:function(_bc9){
var opts=$(_bc9).datetimebox("options");
_bb6(_bc9,opts.formatter.call(_bc9,new Date()));
$(_bc9).datetimebox("hidePanel");
}},{text:function(_bca){
return $(_bca).datetimebox("options").okText;
},handler:function(_bcb){
_bb7(_bcb);
}},{text:function(_bcc){
return $(_bcc).datetimebox("options").closeText;
},handler:function(_bcd){
$(_bcd).datetimebox("hidePanel");
}}],formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _bce(_bcf){
return (_bcf<10?"0":"")+_bcf;
};
var _bd0=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_bce(h)+_bd0+_bce(M);
if($(this).datetimebox("options").showSeconds){
r+=_bd0+_bce(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _bd1=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_bd1);
var hour=parseInt(tt[0],10)||0;
var _bd2=parseInt(tt[1],10)||0;
var _bd3=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_bd2,_bd3);
}});
})(jQuery);
(function($){
function init(_bd4){
var _bd5=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_bd4);
var t=$(_bd4);
t.addClass("slider-f").hide();
var name=t.attr("name");
if(name){
_bd5.find("input.slider-value").attr("name",name);
t.removeAttr("name").attr("sliderName",name);
}
_bd5.bind("_resize",function(e,_bd6){
if($(this).hasClass("easyui-fluid")||_bd6){
_bd7(_bd4);
}
return false;
});
return _bd5;
};
function _bd7(_bd8,_bd9){
var _bda=$.data(_bd8,"slider");
var opts=_bda.options;
var _bdb=_bda.slider;
if(_bd9){
if(_bd9.width){
opts.width=_bd9.width;
}
if(_bd9.height){
opts.height=_bd9.height;
}
}
_bdb._size(opts);
if(opts.mode=="h"){
_bdb.css("height","");
_bdb.children("div").css("height","");
}else{
_bdb.css("width","");
_bdb.children("div").css("width","");
_bdb.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_bdb._outerHeight());
}
_bdc(_bd8);
};
function _bdd(_bde){
var _bdf=$.data(_bde,"slider");
var opts=_bdf.options;
var _be0=_bdf.slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_be1(aa);
function _be1(aa){
var rule=_be0.find("div.slider-rule");
var _be2=_be0.find("div.slider-rulelabel");
rule.empty();
_be2.empty();
for(var i=0;i<aa.length;i++){
var _be3=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_be3);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_be2);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_be3,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_be3,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _be4(_be5){
var _be6=$.data(_be5,"slider");
var opts=_be6.options;
var _be7=_be6.slider;
_be7.removeClass("slider-h slider-v slider-disabled");
_be7.addClass(opts.mode=="h"?"slider-h":"slider-v");
_be7.addClass(opts.disabled?"slider-disabled":"");
var _be8=_be7.find(".slider-inner");
_be8.html("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
if(opts.range){
_be8.append("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
}
_be7.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _be9=_be7.width();
if(opts.mode!="h"){
left=e.data.top;
_be9=_be7.height();
}
if(left<0||left>_be9){
return false;
}else{
_bea(left,this);
return false;
}
},onStartDrag:function(){
_be6.isDragging=true;
opts.onSlideStart.call(_be5,opts.value);
},onStopDrag:function(e){
_bea(opts.mode=="h"?e.data.left:e.data.top,this);
opts.onSlideEnd.call(_be5,opts.value);
opts.onComplete.call(_be5,opts.value);
_be6.isDragging=false;
}});
_be7.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_be6.isDragging||opts.disabled){
return;
}
var pos=$(this).offset();
_bea(opts.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
opts.onComplete.call(_be5,opts.value);
});
function _bea(pos,_beb){
var _bec=_bed(_be5,pos);
var s=Math.abs(_bec%opts.step);
if(s<opts.step/2){
_bec-=s;
}else{
_bec=_bec-s+opts.step;
}
if(opts.range){
var v1=opts.value[0];
var v2=opts.value[1];
var m=parseFloat((v1+v2)/2);
if(_beb){
var _bee=$(_beb).nextAll(".slider-handle").length>0;
if(_bec<=v2&&_bee){
v1=_bec;
}else{
if(_bec>=v1&&(!_bee)){
v2=_bec;
}
}
}else{
if(_bec<v1){
v1=_bec;
}else{
if(_bec>v2){
v2=_bec;
}else{
_bec<m?v1=_bec:v2=_bec;
}
}
}
$(_be5).slider("setValues",[v1,v2]);
}else{
$(_be5).slider("setValue",_bec);
}
};
};
function _bef(_bf0,_bf1){
var _bf2=$.data(_bf0,"slider");
var opts=_bf2.options;
var _bf3=_bf2.slider;
var _bf4=$.isArray(opts.value)?opts.value:[opts.value];
var _bf5=[];
if(!$.isArray(_bf1)){
_bf1=$.map(String(_bf1).split(opts.separator),function(v){
return parseFloat(v);
});
}
_bf3.find(".slider-value").remove();
var name=$(_bf0).attr("sliderName")||"";
for(var i=0;i<_bf1.length;i++){
var _bf6=_bf1[i];
if(_bf6<opts.min){
_bf6=opts.min;
}
if(_bf6>opts.max){
_bf6=opts.max;
}
var _bf7=$("<input type=\"hidden\" class=\"slider-value\">").appendTo(_bf3);
_bf7.attr("name",name);
_bf7.val(_bf6);
_bf5.push(_bf6);
var _bf8=_bf3.find(".slider-handle:eq("+i+")");
var tip=_bf8.next();
var pos=_bf9(_bf0,_bf6);
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_bf0,_bf6));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _bfa="left:"+pos+"px;";
_bf8.attr("style",_bfa);
tip.attr("style",_bfa+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _bfa="top:"+pos+"px;";
_bf8.attr("style",_bfa);
tip.attr("style",_bfa+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
opts.value=opts.range?_bf5:_bf5[0];
$(_bf0).val(opts.range?_bf5.join(opts.separator):_bf5[0]);
if(_bf4.join(",")!=_bf5.join(",")){
opts.onChange.call(_bf0,opts.value,(opts.range?_bf4:_bf4[0]));
}
};
function _bdc(_bfb){
var opts=$.data(_bfb,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_bef(_bfb,opts.value);
opts.onChange=fn;
};
function _bf9(_bfc,_bfd){
var _bfe=$.data(_bfc,"slider");
var opts=_bfe.options;
var _bff=_bfe.slider;
var size=opts.mode=="h"?_bff.width():_bff.height();
var pos=opts.converter.toPosition.call(_bfc,_bfd,size);
if(opts.mode=="v"){
pos=_bff.height()-pos;
}
if(opts.reversed){
pos=size-pos;
}
return pos.toFixed(0);
};
function _bed(_c00,pos){
var _c01=$.data(_c00,"slider");
var opts=_c01.options;
var _c02=_c01.slider;
var size=opts.mode=="h"?_c02.width():_c02.height();
var pos=opts.mode=="h"?(opts.reversed?(size-pos):pos):(opts.reversed?pos:(size-pos));
var _c03=opts.converter.toValue.call(_c00,pos,size);
return _c03.toFixed(0);
};
$.fn.slider=function(_c04,_c05){
if(typeof _c04=="string"){
return $.fn.slider.methods[_c04](this,_c05);
}
_c04=_c04||{};
return this.each(function(){
var _c06=$.data(this,"slider");
if(_c06){
$.extend(_c06.options,_c04);
}else{
_c06=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_c04),slider:init(this)});
$(this).removeAttr("disabled");
}
var opts=_c06.options;
opts.min=parseFloat(opts.min);
opts.max=parseFloat(opts.max);
if(opts.range){
if(!$.isArray(opts.value)){
opts.value=$.map(String(opts.value).split(opts.separator),function(v){
return parseFloat(v);
});
}
if(opts.value.length<2){
opts.value.push(opts.max);
}
}else{
opts.value=parseFloat(opts.value);
}
opts.step=parseFloat(opts.step);
opts.originalValue=opts.value;
_be4(this);
_bdd(this);
_bd7(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_c07){
return jq.each(function(){
_bd7(this,_c07);
});
},getValue:function(jq){
return jq.slider("options").value;
},getValues:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_c08){
return jq.each(function(){
_bef(this,[_c08]);
});
},setValues:function(jq,_c09){
return jq.each(function(){
_bef(this,_c09);
});
},clear:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
_bef(this,opts.range?[opts.min,opts.max]:[opts.min]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
$(this).slider(opts.range?"setValues":"setValue",opts.originalValue);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_be4(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_be4(this);
});
}};
$.fn.slider.parseOptions=function(_c0a){
var t=$(_c0a);
return $.extend({},$.parser.parseOptions(_c0a,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,range:false,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(_c0b){
return _c0b;
},converter:{toPosition:function(_c0c,size){
var opts=$(this).slider("options");
return (_c0c-opts.min)/(opts.max-opts.min)*size;
},toValue:function(pos,size){
var opts=$(this).slider("options");
return opts.min+(opts.max-opts.min)*(pos/size);
}},onChange:function(_c0d,_c0e){
},onSlideStart:function(_c0f){
},onSlideEnd:function(_c10){
},onComplete:function(_c11){
}};
})(jQuery);

define("easyui", ["jquery"], function(){});

/*---------easyui和requirejs集成---------*/
(function(){
    var _9203 = setInterval(parse,10);
    function parse(){
        if($.parser && $.fn.slider && !window.renderedFlag){
            clearInterval(_9203);
            $.parser.parse();
            window.renderedFlag = true;
        }
    }
})();

/*------------中文包-----------*/
if ($.fn.pagination){
  $.fn.pagination.defaults.beforePageText = '第';
  $.fn.pagination.defaults.afterPageText = '共{pages}页';
  $.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid){
  $.fn.datagrid.defaults.loadMsg = '玩命加载中，请稍待...';
}
if ($.fn.treegrid && $.fn.datagrid){
  $.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
  $.messager.defaults.ok = '确定';
  $.messager.defaults.cancel = '取消';
}
$.map(['validatebox','textbox','passwordbox','filebox','searchbox',
    'combo','combobox','combogrid','combotree',
    'datebox','datetimebox','numberbox',
    'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
  if ($.fn[plugin]){
    $.fn[plugin].defaults.missingMessage = '此项必填';
  }
});
if ($.fn.validatebox){
  $.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮箱';
  $.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
  $.fn.validatebox.defaults.rules.length.message = '内容长度介于{0}和{1}之间';
  $.fn.validatebox.defaults.rules.remote.message = '该名称已存在';
}
if ($.fn.calendar){
  $.fn.calendar.defaults.weeks = ['日','一','二','三','四','五','六'];
  $.fn.calendar.defaults.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
}
if ($.fn.datebox){
  $.fn.datebox.defaults.currentText = '今天';
  $.fn.datebox.defaults.closeText = '关闭';
  $.fn.datebox.defaults.okText = '确定';
  $.fn.datebox.defaults.formatter = function(date){
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
  };
  $.fn.datebox.defaults.parser = function(s){
    if (!s) return new Date();
    var ss = s.split('-');
    var y = parseInt(ss[0],10);
    var m = parseInt(ss[1],10);
    var d = parseInt(ss[2],10);
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
      return new Date(y,m-1,d);
    } else {
      return new Date();
    }
  };
}
if ($.fn.datetimebox && $.fn.datebox){
  $.extend($.fn.datetimebox.defaults,{
    currentText: $.fn.datebox.defaults.currentText,
    closeText: $.fn.datebox.defaults.closeText,
    okText: $.fn.datebox.defaults.okText
  });
}
if ($.fn.datetimespinner){
  $.fn.datetimespinner.defaults.selections = [[0,4],[5,7],[8,10],[11,13],[14,16],[17,19]]
}

/*------------cellediting---------------------*/
(function($){$.extend($.fn.datagrid.defaults,{clickToEdit:true,dblclickToEdit:false,navHandler:{37:function(e){var opts=$(this).datagrid("options");return navHandler.call(this,e,opts.isRtl?"right":"left")},39:function(e){var opts=$(this).datagrid("options");return navHandler.call(this,e,opts.isRtl?"left":"right")},38:function(e){return navHandler.call(this,e,"up")},40:function(e){return navHandler.call(this,e,"down")},13:function(e){return enterHandler.call(this,e)},27:function(e){return escHandler.call(this,e)},8:function(e){return clearHandler.call(this,e)},46:function(e){return clearHandler.call(this,e)},keypress:function(e){if(e.metaKey||e.ctrlKey){return}var dg=$(this);var param=dg.datagrid("cell");if(!param){return}var input=dg.datagrid("input",param);if(!input){var tmp=$("<span></span>");tmp.html(String.fromCharCode(e.which));var c=tmp.text();tmp.remove();if(c){dg.datagrid("editCell",{index:param.index,field:param.field,value:c});return false}}}},onBeforeCellEdit:function(index,field){},onCellEdit:function(index,field,value){var input=$(this).datagrid("input",{index:index,field:field});if(input){if(value!=undefined){input.val(value)}}},onSelectCell:function(index,field){},onUnselectCell:function(index,field){}});function navHandler(e,dir){var dg=$(this);var param=dg.datagrid("cell");var input=dg.datagrid("input",param);if(!input){dg.datagrid("gotoCell",dir);return false}}function enterHandler(e){var dg=$(this);var cell=dg.datagrid("cell");if(!cell){return}var input=dg.datagrid("input",cell);if(input){endCellEdit(this,true)}else{dg.datagrid("editCell",cell)}return false}function escHandler(e){endCellEdit(this,false);return false}function clearHandler(e){var dg=$(this);var param=dg.datagrid("cell");if(!param){return}var input=dg.datagrid("input",param);if(!input){dg.datagrid("editCell",{index:param.index,field:param.field,value:""});return false}}function getCurrCell(target){var cell=$(target).datagrid("getPanel").find("td.datagrid-row-selected");if(cell.length){return{index:parseInt(cell.closest("tr.datagrid-row").attr("datagrid-row-index")),field:cell.attr("field")}}else{return null}}function unselectCell(target,p){var opts=$(target).datagrid("options");var cell=opts.finder.getTr(target,p.index).find('td[field="'+p.field+'"]');cell.removeClass("datagrid-row-selected");opts.onUnselectCell.call(target,p.index,p.field)}function unselectAllCells(target){var panel=$(target).datagrid("getPanel");panel.find("td.datagrid-row-selected").removeClass("datagrid-row-selected")}function selectCell(target,p){var opts=$(target).datagrid("options");if(opts.singleSelect){unselectAllCells(target)}var cell=opts.finder.getTr(target,p.index).find('td[field="'+p.field+'"]');cell.addClass("datagrid-row-selected");opts.onSelectCell.call(target,p.index,p.field)}function getSelectedCells(target){var cells=[];var panel=$(target).datagrid("getPanel");panel.find("td.datagrid-row-selected").each(function(){var td=$(this);cells.push({index:parseInt(td.closest("tr.datagrid-row").attr("datagrid-row-index")),field:td.attr("field")})});return cells}function gotoCell(target,p){var dg=$(target);var opts=dg.datagrid("options");var panel=dg.datagrid("getPanel").focus();var cparam=dg.datagrid("cell");if(cparam){var input=dg.datagrid("input",cparam);if(input){input.focus();return}}if(typeof p=="object"){_go(p);return}var cell=panel.find("td.datagrid-row-selected");if(!cell){return}var fields=dg.datagrid("getColumnFields",true).concat(dg.datagrid("getColumnFields"));var field=cell.attr("field");var tr=cell.closest("tr.datagrid-row");var rowIndex=parseInt(tr.attr("datagrid-row-index"));var colIndex=$.inArray(field,fields);if(p=="up"&&rowIndex>0){rowIndex--}else if(p=="down"){if(opts.finder.getRow(target,rowIndex+1)){rowIndex++}}else if(p=="left"){var i=colIndex-1;while(i>=0){var col=dg.datagrid("getColumnOption",fields[i]);if(!col.hidden){colIndex=i;break}i--}}else if(p=="right"){var i=colIndex+1;while(i<=fields.length-1){var col=dg.datagrid("getColumnOption",fields[i]);if(!col.hidden){colIndex=i;break}i++}}field=fields[colIndex];_go({index:rowIndex,field:field});function _go(p){dg.datagrid("scrollTo",p.index);unselectAllCells(target);selectCell(target,p);var td=opts.finder.getTr(target,p.index,"body",2).find('td[field="'+p.field+'"]');if(td.length){var body2=dg.data("datagrid").dc.body2;var left=td.position().left;if(left<0){body2._scrollLeft(body2._scrollLeft()+left*(opts.isRtl?-1:1))}else if(left+td._outerWidth()>body2.width()){body2._scrollLeft(body2._scrollLeft()+(left+td._outerWidth()-body2.width())*(opts.isRtl?-1:1))}}}}function endCellEdit(target,accepted){var dg=$(target);var cell=dg.datagrid("cell");if(cell){var input=dg.datagrid("input",cell);if(input){if(accepted){if(dg.datagrid("validateRow",cell.index)){dg.datagrid("endEdit",cell.index);dg.datagrid("gotoCell",cell)}else{dg.datagrid("gotoCell",cell);input.focus();return false}var opts=$(target).datagrid("options");var td=opts.finder.getTr(target,cell.index).find('td[field="'+cell.field+'"]');td.removeClass("x-editor");td.addClass("x-editor-edited")}else{dg.datagrid("cancelEdit",cell.index);dg.datagrid("gotoCell",cell)}}}return true}function editCell(target,param){var dg=$(target);var opts=dg.datagrid("options");var input=dg.datagrid("input",param);if(input){dg.datagrid("gotoCell",param);input.focus();return}if(!endCellEdit(target,true)){return}if(opts.onBeforeCellEdit.call(target,param.index,param.field)==false){return}var fields=dg.datagrid("getColumnFields",true).concat(dg.datagrid("getColumnFields"));$.map(fields,function(field){var col=dg.datagrid("getColumnOption",field);col.editor1=col.editor;if(field!=param.field){col.editor=null}});var col=dg.datagrid("getColumnOption",param.field);if(col.editor){dg.datagrid("beginEdit",param.index);var input=dg.datagrid("input",param);if(input){dg.datagrid("gotoCell",param);setTimeout(function(){input.unbind(".cellediting").bind("keydown.cellediting",function(e){if(e.keyCode==13){opts.navHandler["13"].call(target,e);return false}});input.focus()},0);opts.onCellEdit.call(target,param.index,param.field,param.value)}else{dg.datagrid("cancelEdit",param.index);dg.datagrid("gotoCell",param)}}else{dg.datagrid("gotoCell",param)}$.map(fields,function(field){var col=dg.datagrid("getColumnOption",field);col.editor=col.editor1})}function enableCellSelecting(target){var dg=$(target);var state=dg.data("datagrid");var panel=dg.datagrid("getPanel");var opts=state.options;var dc=state.dc;panel.attr("tabindex",1).css("outline-style","none").unbind(".cellediting").bind("keydown.cellediting",function(e){var h=opts.navHandler[e.keyCode];if(h){return h.call(target,e)}});dc.body1.add(dc.body2).unbind(".cellediting").bind("click.cellediting",function(e){var tr=$(e.target).closest(".datagrid-row");if(tr.length&&tr.parent().length){var td=$(e.target).closest("td[field]",tr);if(td.length){var index=parseInt(tr.attr("datagrid-row-index"));var field=td.attr("field");var p={index:index,field:field};if(opts.singleSelect){selectCell(target,p)}else{if(opts.ctrlSelect){if(e.ctrlKey){if(td.hasClass("datagrid-row-selected")){unselectCell(target,p)}else{selectCell(target,p)}}else{unselectAllCells(target);selectCell(target,p)}}else{if(td.hasClass("datagrid-row-selected")){unselectCell(target,p)}else{selectCell(target,p)}}}}}}).bind("mouseover.cellediting",function(e){var td=$(e.target).closest("td[field]");if(td.length){td.addClass("datagrid-row-over");td.closest("tr.datagrid-row").removeClass("datagrid-row-over")}}).bind("mouseout.cellediting",function(e){var td=$(e.target).closest("td[field]");td.removeClass("datagrid-row-over")});opts.isRtl=dg.datagrid("getPanel").css("direction").toLowerCase()=="rtl";opts.OldOnBeforeSelect=opts.onBeforeSelect;opts.onBeforeSelect=function(){return false};dg.datagrid("clearSelections")}function disableCellSelecting(target){var dg=$(target);var state=dg.data("datagrid");var panel=dg.datagrid("getPanel");var opts=state.options;opts.onBeforeSelect=opts.OldOnBeforeSelect||opts.onBeforeSelect;panel.unbind(".cellediting").find("td.datagrid-row-selected").removeClass("datagrid-row-selected");var dc=state.dc;dc.body1.add(dc.body2).unbind("cellediting")}function enableCellEditing(target){var dg=$(target);var opts=dg.datagrid("options");var panel=dg.datagrid("getPanel");panel.attr("tabindex",1).css("outline-style","none").unbind(".cellediting").bind("keydown.cellediting",function(e){var h=opts.navHandler[e.keyCode];if(h){return h.call(target,e)}}).bind("keypress.cellediting",function(e){return opts.navHandler["keypress"].call(target,e)});panel.panel("panel").unbind(".cellediting").bind("keydown.cellediting",function(e){e.stopPropagation()}).bind("keypress.cellediting",function(e){e.stopPropagation()}).bind("mouseover.cellediting",function(e){var td=$(e.target).closest("td[field]");if(td.length){td.addClass("datagrid-row-over");td.closest("tr.datagrid-row").removeClass("datagrid-row-over")}}).bind("mouseout.cellediting",function(e){var td=$(e.target).closest("td[field]");td.removeClass("datagrid-row-over")});opts.isRtl=dg.datagrid("getPanel").css("direction").toLowerCase()=="rtl";opts.oldOnClickCell=opts.onClickCell;opts.oldOnDblClickCell=opts.onDblClickCell;opts.onClickCell=function(index,field,value){if(opts.clickToEdit){$(this).datagrid("editCell",{index:index,field:field})}else{if(endCellEdit(this,true)){$(this).datagrid("gotoCell",{index:index,field:field})}}opts.oldOnClickCell.call(this,index,field,value)};if(opts.dblclickToEdit){opts.onDblClickCell=function(index,field,value){$(this).datagrid("editCell",{index:index,field:field});opts.oldOnDblClickCell.call(this,index,field,value)}}opts.OldOnBeforeSelect=opts.onBeforeSelect;opts.onBeforeSelect=function(){return false};dg.datagrid("clearSelections")}function disableCellEditing(target){var dg=$(target);var panel=dg.datagrid("getPanel");var opts=dg.datagrid("options");opts.onClickCell=opts.oldOnClickCell||opts.onClickCell;opts.onDblClickCell=opts.oldOnDblClickCell||opts.onDblClickCell;opts.onBeforeSelect=opts.OldOnBeforeSelect||opts.onBeforeSelect;panel.unbind(".cellediting").find("td.datagrid-row-selected").removeClass("datagrid-row-selected");panel.panel("panel").unbind(".cellediting")}$.extend($.fn.datagrid.methods,{editCell:function(jq,param){return jq.each(function(){editCell(this,param)})},isEditing:function(jq,index){var opts=$.data(jq[0],"datagrid").options;var tr=opts.finder.getTr(jq[0],index);return tr.length&&tr.hasClass("datagrid-row-editing")},gotoCell:function(jq,param){return jq.each(function(){gotoCell(this,param)})},enableCellEditing:function(jq){return jq.each(function(){enableCellEditing(this)})},disableCellEditing:function(jq){return jq.each(function(){disableCellEditing(this)})},enableCellSelecting:function(jq){return jq.each(function(){enableCellSelecting(this)})},disableCellSelecting:function(jq){return jq.each(function(){disableCellSelecting(this)})},input:function(jq,param){if(!param){return null}var ed=jq.datagrid("getEditor",param);if(ed){var t=$(ed.target);if(t.hasClass("textbox-f")){t=t.textbox("textbox")}return t}else{return null}},cell:function(jq){return getCurrCell(jq[0])},getSelectedCells:function(jq){return getSelectedCells(jq[0])}})})(jQuery);var detailview=$.extend({},$.fn.datagrid.defaults.view,{render:function(target,container,frozen){var state=$.data(target,"datagrid");var opts=state.options;if(frozen){if(!(opts.rownumbers||opts.frozenColumns&&opts.frozenColumns.length)){return}}var rows=state.data.rows;var fields=$(target).datagrid("getColumnFields",frozen);var table=[];table.push('<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>');for(var i=0;i<rows.length;i++){var css=opts.rowStyler?opts.rowStyler.call(target,i,rows[i]):"";var classValue="";var styleValue="";if(typeof css=="string"){styleValue=css}else if(css){classValue=css["class"]||"";styleValue=css["style"]||""}var cls='class="datagrid-row '+(i%2&&opts.striped?"datagrid-row-alt ":" ")+classValue+'"';var style=styleValue?'style="'+styleValue+'"':"";var rowId=state.rowIdPrefix+"-"+(frozen?1:2)+"-"+i;table.push('<tr id="'+rowId+'" datagrid-row-index="'+i+'" '+cls+" "+style+">");table.push(this.renderRow.call(this,target,fields,frozen,i,rows[i]));table.push("</tr>");table.push('<tr style="display:none;">');if(frozen){table.push("<td colspan="+(fields.length+(opts.rownumbers?1:0))+' style="border-right:0">')}else{table.push("<td colspan="+fields.length+">")}table.push('<div class="datagrid-row-detail">');if(frozen){table.push("&nbsp;")}else{table.push(opts.detailFormatter.call(target,i,rows[i]))}table.push("</div>");table.push("</td>");table.push("</tr>")}table.push("</tbody></table>");$(container).html(table.join(""))},renderRow:function(target,fields,frozen,rowIndex,rowData){var opts=$.data(target,"datagrid").options;var cc=[];if(frozen&&opts.rownumbers){var rownumber=rowIndex+1;if(opts.pagination){rownumber+=(opts.pageNumber-1)*opts.pageSize}cc.push('<td class="datagrid-td-rownumber"><div class="datagrid-cell-rownumber">'+rownumber+"</div></td>")}for(var i=0;i<fields.length;i++){var field=fields[i];var col=$(target).datagrid("getColumnOption",field);if(col){var value=rowData[field];var css=col.styler?col.styler(value,rowData,rowIndex)||"":"";var classValue="";var styleValue="";if(typeof css=="string"){styleValue=css}else if(cc){classValue=css["class"]||"";styleValue=css["style"]||""}var cls=classValue?'class="'+classValue+'"':"";var style=col.hidden?'style="display:none;'+styleValue+'"':styleValue?'style="'+styleValue+'"':"";cc.push('<td field="'+field+'" '+cls+" "+style+">");if(col.checkbox){style=""}else if(col.expander){style="text-align:center;height:16px;"}else{style=styleValue;if(col.align){style+=";text-align:"+col.align+";"}if(!opts.nowrap){style+=";white-space:normal;height:auto;"}else if(opts.autoRowHeight){style+=";height:auto;"}}cc.push('<div style="'+style+'" ');if(col.checkbox){cc.push('class="datagrid-cell-check ')}else{cc.push('class="datagrid-cell '+col.cellClass)}cc.push('">');if(col.checkbox){cc.push('<input type="checkbox" name="'+field+'" value="'+(value!=undefined?value:"")+'">')}else if(col.expander){cc.push('<span class="datagrid-row-expander datagrid-row-expand" style="display:inline-block;width:16px;height:16px;cursor:pointer;" />')}else if(col.formatter){cc.push(col.formatter(value,rowData,rowIndex))}else{cc.push(value)}cc.push("</div>");cc.push("</td>")}}return cc.join("")},insertRow:function(target,index,row){var opts=$.data(target,"datagrid").options;var dc=$.data(target,"datagrid").dc;var panel=$(target).datagrid("getPanel");var view1=dc.view1;var view2=dc.view2;var isAppend=false;var rowLength=$(target).datagrid("getRows").length;if(rowLength==0){$(target).datagrid("loadData",{total:1,rows:[row]});return}if(index==undefined||index==null||index>=rowLength){index=rowLength;isAppend=true;this.canUpdateDetail=false}$.fn.datagrid.defaults.view.insertRow.call(this,target,index,row);_insert(true);_insert(false);this.canUpdateDetail=true;function _insert(frozen){var v=frozen?view1:view2;var tr=v.find("tr[datagrid-row-index="+index+"]");if(isAppend){var newDetail=tr.next().clone();tr.insertAfter(tr.next())}else{var newDetail=tr.next().next().clone()}newDetail.insertAfter(tr);newDetail.hide();if(!frozen){newDetail.find("div.datagrid-row-detail").html(opts.detailFormatter.call(target,index,row))}}},deleteRow:function(target,index){var opts=$.data(target,"datagrid").options;var dc=$.data(target,"datagrid").dc;var tr=opts.finder.getTr(target,index);tr.next().remove();$.fn.datagrid.defaults.view.deleteRow.call(this,target,index);dc.body2.triggerHandler("scroll")},updateRow:function(target,rowIndex,row){var dc=$.data(target,"datagrid").dc;var opts=$.data(target,"datagrid").options;var cls=$(target).datagrid("getExpander",rowIndex).attr("class");$.fn.datagrid.defaults.view.updateRow.call(this,target,rowIndex,row);$(target).datagrid("getExpander",rowIndex).attr("class",cls);if(this.canUpdateDetail){var row=$(target).datagrid("getRows")[rowIndex];var detail=$(target).datagrid("getRowDetail",rowIndex);detail.html(opts.detailFormatter.call(target,rowIndex,row))}},bindEvents:function(target){var state=$.data(target,"datagrid");if(state.ss.bindDetailEvents){return}state.ss.bindDetailEvents=true;var dc=state.dc;var opts=state.options;var body=dc.body1.add(dc.body2);var clickHandler=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;body.unbind("click").bind("click",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!tr.length){return}if(tt.hasClass("datagrid-row-expander")){var rowIndex=parseInt(tr.attr("datagrid-row-index"));if(tt.hasClass("datagrid-row-expand")){$(target).datagrid("expandRow",rowIndex)}else{$(target).datagrid("collapseRow",rowIndex)}$(target).datagrid("fixRowHeight")}else{clickHandler(e)}e.stopPropagation()})},onBeforeRender:function(target){var state=$.data(target,"datagrid");var opts=state.options;var dc=state.dc;var t=$(target);var hasExpander=false;var fields=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields"));for(var i=0;i<fields.length;i++){var col=t.datagrid("getColumnOption",fields[i]);if(col.expander){hasExpander=true;break}}if(!hasExpander){if(opts.frozenColumns&&opts.frozenColumns.length){opts.frozenColumns[0].splice(0,0,{field:"_expander",expander:true,width:24,resizable:false,fixed:true})}else{opts.frozenColumns=[[{field:"_expander",expander:true,width:24,resizable:false,fixed:true}]]}var t=dc.view1.children("div.datagrid-header").find("table");var td=$('<td rowspan="'+opts.frozenColumns.length+'"><div class="datagrid-header-expander" style="width:24px;"></div></td>');if($("tr",t).length==0){td.wrap("<tr></tr>").parent().appendTo($("tbody",t))}else if(opts.rownumbers){td.insertAfter(t.find("td:has(div.datagrid-header-rownumber)"))}else{td.prependTo(t.find("tr:first"))}}},onAfterRender:function(target){var that=this;var state=$.data(target,"datagrid");var dc=state.dc;var opts=state.options;var panel=$(target).datagrid("getPanel");$.fn.datagrid.defaults.view.onAfterRender.call(this,target);if(!state.onResizeColumn){state.onResizeColumn=opts.onResizeColumn}if(!state.onResize){state.onResize=opts.onResize}function resizeDetails(){var ht=dc.header2.find("table");var fr=ht.find("tr.datagrid-filter-row").hide();var ww=ht.width()-1;var details=dc.body2.find(">table.datagrid-btable>tbody>tr>td>div.datagrid-row-detail:visible")._outerWidth(ww);details.find(".easyui-fluid").trigger("_resize");fr.show()}opts.onResizeColumn=function(field,width){if(!opts.fitColumns){resizeDetails()}var rowCount=$(target).datagrid("getRows").length;for(var i=0;i<rowCount;i++){$(target).datagrid("fixDetailRowHeight",i)}state.onResizeColumn.call(target,field,width)};opts.onResize=function(width,height){if(opts.fitColumns){resizeDetails()}state.onResize.call(panel,width,height)};this.canUpdateDetail=true;var footer=dc.footer1.add(dc.footer2);footer.find("span.datagrid-row-expander").css("visibility","hidden");$(target).datagrid("resize");this.bindEvents(target);var detail=dc.body1.add(dc.body2).find("div.datagrid-row-detail");detail.unbind().bind("mouseover mouseout click dblclick contextmenu scroll",function(e){e.stopPropagation()})}});$.extend($.fn.datagrid.methods,{fixDetailRowHeight:function(jq,index){return jq.each(function(){var opts=$.data(this,"datagrid").options;if(!(opts.rownumbers||opts.frozenColumns&&opts.frozenColumns.length)){return}var dc=$.data(this,"datagrid").dc;var tr1=opts.finder.getTr(this,index,"body",1).next();var tr2=opts.finder.getTr(this,index,"body",2).next();if(tr2.is(":visible")){tr1.css("height","");tr2.css("height","");var height=Math.max(tr1.height(),tr2.height());tr1.css("height",height);tr2.css("height",height)}dc.body2.triggerHandler("scroll")})},getExpander:function(jq,index){var opts=$.data(jq[0],"datagrid").options;return opts.finder.getTr(jq[0],index).find("span.datagrid-row-expander")},getRowDetail:function(jq,index){var opts=$.data(jq[0],"datagrid").options;var tr=opts.finder.getTr(jq[0],index,"body",2);return tr.next().find(">td>div.datagrid-row-detail")},expandRow:function(jq,index){return jq.each(function(){var opts=$(this).datagrid("options");var dc=$.data(this,"datagrid").dc;var expander=$(this).datagrid("getExpander",index);if(expander.hasClass("datagrid-row-expand")){expander.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");var tr1=opts.finder.getTr(this,index,"body",1).next();var tr2=opts.finder.getTr(this,index,"body",2).next();tr1.show();tr2.show();$(this).datagrid("fixDetailRowHeight",index);if(opts.onExpandRow){var row=$(this).datagrid("getRows")[index];opts.onExpandRow.call(this,index,row)}}})},collapseRow:function(jq,index){return jq.each(function(){var opts=$(this).datagrid("options");var dc=$.data(this,"datagrid").dc;var expander=$(this).datagrid("getExpander",index);if(expander.hasClass("datagrid-row-collapse")){expander.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");var tr1=opts.finder.getTr(this,index,"body",1).next();var tr2=opts.finder.getTr(this,index,"body",2).next();tr1.hide();tr2.hide();dc.body2.triggerHandler("scroll");if(opts.onCollapseRow){var row=$(this).datagrid("getRows")[index];opts.onCollapseRow.call(this,index,row)}}})}});$.extend($.fn.datagrid.methods,{subgrid:function(jq,conf){return jq.each(function(){createGrid(this,conf);function createGrid(target,conf,prow){var queryParams=$.extend({},conf.options.queryParams||{});queryParams[conf.options.foreignField]=prow?prow[conf.options.foreignField]:undefined;$(target).datagrid($.extend({},conf.options,{subgrid:conf.subgrid,view:conf.subgrid?detailview:undefined,queryParams:queryParams,detailFormatter:function(index,row){return'<div><table class="datagrid-subgrid"></table></div>'},onExpandRow:function(index,row){var opts=$(this).datagrid("options");var rd=$(this).datagrid("getRowDetail",index);var dg=getSubGrid(rd);if(!dg.data("datagrid")){createGrid(dg[0],opts.subgrid,row)}rd.find(".easyui-fluid").trigger("_resize");setHeight(this,index);if(conf.options.onExpandRow){conf.options.onExpandRow.call(this,index,row)}},onCollapseRow:function(index,row){setHeight(this,index);if(conf.options.onCollapseRow){conf.options.onCollapseRow.call(this,index,row)}},onResize:function(){var dg=$(this).children("div.datagrid-view").children("table");setParentHeight(this)},onResizeColumn:function(field,width){setParentHeight(this);if(conf.options.onResizeColumn){conf.options.onResizeColumn.call(this,field,width)}},onLoadSuccess:function(data){setParentHeight(this);if(conf.options.onLoadSuccess){conf.options.onLoadSuccess.call(this,data)}}}))}function getSubGrid(rowDetail){var div=$(rowDetail).children("div");if(div.children("div.datagrid").length){return div.find(">div.datagrid>div.panel-body>div.datagrid-view>table.datagrid-subgrid")}else{return div.find(">table.datagrid-subgrid")}}function setParentHeight(target){var tr=$(target).closest("div.datagrid-row-detail").closest("tr").prev();if(tr.length){var index=parseInt(tr.attr("datagrid-row-index"));var dg=tr.closest("div.datagrid-view").children("table");setHeight(dg[0],index)}}function setHeight(target,index){$(target).datagrid("fixDetailRowHeight",index);$(target).datagrid("fixRowHeight",index);var tr=$(target).closest("div.datagrid-row-detail").closest("tr").prev();if(tr.length){var index=parseInt(tr.attr("datagrid-row-index"));var dg=tr.closest("div.datagrid-view").children("table");setHeight(dg[0],index)}}})},getParentGrid:function(jq){var detail=jq.closest("div.datagrid-row-detail");if(detail.length){return detail.closest(".datagrid-view").children(".datagrid-f")}else{return null}},getParentRowIndex:function(jq){var detail=jq.closest("div.datagrid-row-detail");if(detail.length){var tr=detail.closest("tr").prev();return parseInt(tr.attr("datagrid-row-index"))}else{return-1}}});

/*------------detailview---------------------*/
var detailview=$.extend({},$.fn.datagrid.defaults.view,{render:function(target,container,frozen){var state=$.data(target,"datagrid");var opts=state.options;if(frozen){if(!(opts.rownumbers||opts.frozenColumns&&opts.frozenColumns.length)){return}}var rows=state.data.rows;var fields=$(target).datagrid("getColumnFields",frozen);var table=[];table.push('<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>');for(var i=0;i<rows.length;i++){var css=opts.rowStyler?opts.rowStyler.call(target,i,rows[i]):"";var classValue="";var styleValue="";if(typeof css=="string"){styleValue=css}else if(css){classValue=css["class"]||"";styleValue=css["style"]||""}var cls='class="datagrid-row '+(i%2&&opts.striped?"datagrid-row-alt ":" ")+classValue+'"';var style=styleValue?'style="'+styleValue+'"':"";var rowId=state.rowIdPrefix+"-"+(frozen?1:2)+"-"+i;table.push('<tr id="'+rowId+'" datagrid-row-index="'+i+'" '+cls+" "+style+">");table.push(this.renderRow.call(this,target,fields,frozen,i,rows[i]));table.push("</tr>");table.push('<tr style="display:none;">');if(frozen){table.push("<td colspan="+(fields.length+(opts.rownumbers?1:0))+' style="border-right:0">')}else{table.push("<td colspan="+fields.length+">")}table.push('<div class="datagrid-row-detail">');if(frozen){table.push("&nbsp;")}else{table.push(opts.detailFormatter.call(target,i,rows[i]))}table.push("</div>");table.push("</td>");table.push("</tr>")}table.push("</tbody></table>");$(container).html(table.join(""))},renderRow:function(target,fields,frozen,rowIndex,rowData){var opts=$.data(target,"datagrid").options;var cc=[];if(frozen&&opts.rownumbers){var rownumber=rowIndex+1;if(opts.pagination){rownumber+=(opts.pageNumber-1)*opts.pageSize}cc.push('<td class="datagrid-td-rownumber"><div class="datagrid-cell-rownumber">'+rownumber+"</div></td>")}for(var i=0;i<fields.length;i++){var field=fields[i];var col=$(target).datagrid("getColumnOption",field);if(col){var value=rowData[field];var css=col.styler?col.styler(value,rowData,rowIndex)||"":"";var classValue="";var styleValue="";if(typeof css=="string"){styleValue=css}else if(cc){classValue=css["class"]||"";styleValue=css["style"]||""}var cls=classValue?'class="'+classValue+'"':"";var style=col.hidden?'style="display:none;'+styleValue+'"':styleValue?'style="'+styleValue+'"':"";cc.push('<td field="'+field+'" '+cls+" "+style+">");if(col.checkbox){style=""}else if(col.expander){style="text-align:center;height:16px;"}else{style=styleValue;if(col.align){style+=";text-align:"+col.align+";"}if(!opts.nowrap){style+=";white-space:normal;height:auto;"}else if(opts.autoRowHeight){style+=";height:auto;"}}cc.push('<div style="'+style+'" ');if(col.checkbox){cc.push('class="datagrid-cell-check ')}else{cc.push('class="datagrid-cell '+col.cellClass)}cc.push('">');if(col.checkbox){cc.push('<input type="checkbox" name="'+field+'" value="'+(value!=undefined?value:"")+'">')}else if(col.expander){cc.push('<span class="datagrid-row-expander datagrid-row-expand" style="display:inline-block;width:16px;height:16px;cursor:pointer;" />')}else if(col.formatter){cc.push(col.formatter(value,rowData,rowIndex))}else{cc.push(value)}cc.push("</div>");cc.push("</td>")}}return cc.join("")},insertRow:function(target,index,row){var opts=$.data(target,"datagrid").options;var dc=$.data(target,"datagrid").dc;var panel=$(target).datagrid("getPanel");var view1=dc.view1;var view2=dc.view2;var isAppend=false;var rowLength=$(target).datagrid("getRows").length;if(rowLength==0){$(target).datagrid("loadData",{total:1,rows:[row]});return}if(index==undefined||index==null||index>=rowLength){index=rowLength;isAppend=true;this.canUpdateDetail=false}$.fn.datagrid.defaults.view.insertRow.call(this,target,index,row);_insert(true);_insert(false);this.canUpdateDetail=true;function _insert(frozen){var v=frozen?view1:view2;var tr=v.find("tr[datagrid-row-index="+index+"]");if(isAppend){var newDetail=tr.next().clone();tr.insertAfter(tr.next())}else{var newDetail=tr.next().next().clone()}newDetail.insertAfter(tr);newDetail.hide();if(!frozen){newDetail.find("div.datagrid-row-detail").html(opts.detailFormatter.call(target,index,row))}}},deleteRow:function(target,index){var opts=$.data(target,"datagrid").options;var dc=$.data(target,"datagrid").dc;var tr=opts.finder.getTr(target,index);tr.next().remove();$.fn.datagrid.defaults.view.deleteRow.call(this,target,index);dc.body2.triggerHandler("scroll")},updateRow:function(target,rowIndex,row){var dc=$.data(target,"datagrid").dc;var opts=$.data(target,"datagrid").options;var cls=$(target).datagrid("getExpander",rowIndex).attr("class");$.fn.datagrid.defaults.view.updateRow.call(this,target,rowIndex,row);$(target).datagrid("getExpander",rowIndex).attr("class",cls);if(this.canUpdateDetail){var row=$(target).datagrid("getRows")[rowIndex];var detail=$(target).datagrid("getRowDetail",rowIndex);detail.html(opts.detailFormatter.call(target,rowIndex,row))}},bindEvents:function(target){var state=$.data(target,"datagrid");if(state.ss.bindDetailEvents){return}state.ss.bindDetailEvents=true;var dc=state.dc;var opts=state.options;var body=dc.body1.add(dc.body2);var clickHandler=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;body.unbind("click").bind("click",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!tr.length){return}if(tt.hasClass("datagrid-row-expander")){var rowIndex=parseInt(tr.attr("datagrid-row-index"));if(tt.hasClass("datagrid-row-expand")){$(target).datagrid("expandRow",rowIndex)}else{$(target).datagrid("collapseRow",rowIndex)}$(target).datagrid("fixRowHeight")}else{clickHandler(e)}e.stopPropagation()})},onBeforeRender:function(target){var state=$.data(target,"datagrid");var opts=state.options;var dc=state.dc;var t=$(target);var hasExpander=false;var fields=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields"));for(var i=0;i<fields.length;i++){var col=t.datagrid("getColumnOption",fields[i]);if(col.expander){hasExpander=true;break}}if(!hasExpander){if(opts.frozenColumns&&opts.frozenColumns.length){opts.frozenColumns[0].splice(0,0,{field:"_expander",expander:true,width:24,resizable:false,fixed:true})}else{opts.frozenColumns=[[{field:"_expander",expander:true,width:24,resizable:false,fixed:true}]]}var t=dc.view1.children("div.datagrid-header").find("table");var td=$('<td rowspan="'+opts.frozenColumns.length+'"><div class="datagrid-header-expander" style="width:24px;"></div></td>');if($("tr",t).length==0){td.wrap("<tr></tr>").parent().appendTo($("tbody",t))}else if(opts.rownumbers){td.insertAfter(t.find("td:has(div.datagrid-header-rownumber)"))}else{td.prependTo(t.find("tr:first"))}}},onAfterRender:function(target){var that=this;var state=$.data(target,"datagrid");var dc=state.dc;var opts=state.options;var panel=$(target).datagrid("getPanel");$.fn.datagrid.defaults.view.onAfterRender.call(this,target);if(!state.onResizeColumn){state.onResizeColumn=opts.onResizeColumn}if(!state.onResize){state.onResize=opts.onResize}function resizeDetails(){var ht=dc.header2.find("table");var fr=ht.find("tr.datagrid-filter-row").hide();var ww=ht.width()-1;var details=dc.body2.find(">table.datagrid-btable>tbody>tr>td>div.datagrid-row-detail:visible")._outerWidth(ww);details.find(".easyui-fluid").trigger("_resize");fr.show()}opts.onResizeColumn=function(field,width){if(!opts.fitColumns){resizeDetails()}var rowCount=$(target).datagrid("getRows").length;for(var i=0;i<rowCount;i++){$(target).datagrid("fixDetailRowHeight",i)}state.onResizeColumn.call(target,field,width)};opts.onResize=function(width,height){if(opts.fitColumns){resizeDetails()}state.onResize.call(panel,width,height)};this.canUpdateDetail=true;var footer=dc.footer1.add(dc.footer2);footer.find("span.datagrid-row-expander").css("visibility","hidden");$(target).datagrid("resize");this.bindEvents(target);var detail=dc.body1.add(dc.body2).find("div.datagrid-row-detail");detail.unbind().bind("mouseover mouseout click dblclick contextmenu scroll",function(e){e.stopPropagation()})}});$.extend($.fn.datagrid.methods,{fixDetailRowHeight:function(jq,index){return jq.each(function(){var opts=$.data(this,"datagrid").options;if(!(opts.rownumbers||opts.frozenColumns&&opts.frozenColumns.length)){return}var dc=$.data(this,"datagrid").dc;var tr1=opts.finder.getTr(this,index,"body",1).next();var tr2=opts.finder.getTr(this,index,"body",2).next();if(tr2.is(":visible")){tr1.css("height","");tr2.css("height","");var height=Math.max(tr1.height(),tr2.height());tr1.css("height",height);tr2.css("height",height)}dc.body2.triggerHandler("scroll")})},getExpander:function(jq,index){var opts=$.data(jq[0],"datagrid").options;return opts.finder.getTr(jq[0],index).find("span.datagrid-row-expander")},getRowDetail:function(jq,index){var opts=$.data(jq[0],"datagrid").options;var tr=opts.finder.getTr(jq[0],index,"body",2);return tr.next().find(">td>div.datagrid-row-detail")},expandRow:function(jq,index){return jq.each(function(){var opts=$(this).datagrid("options");var dc=$.data(this,"datagrid").dc;var expander=$(this).datagrid("getExpander",index);if(expander.hasClass("datagrid-row-expand")){expander.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");var tr1=opts.finder.getTr(this,index,"body",1).next();var tr2=opts.finder.getTr(this,index,"body",2).next();tr1.show();tr2.show();$(this).datagrid("fixDetailRowHeight",index);if(opts.onExpandRow){var row=$(this).datagrid("getRows")[index];opts.onExpandRow.call(this,index,row)}}})},collapseRow:function(jq,index){return jq.each(function(){var opts=$(this).datagrid("options");var dc=$.data(this,"datagrid").dc;var expander=$(this).datagrid("getExpander",index);if(expander.hasClass("datagrid-row-collapse")){expander.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");var tr1=opts.finder.getTr(this,index,"body",1).next();var tr2=opts.finder.getTr(this,index,"body",2).next();tr1.hide();tr2.hide();dc.body2.triggerHandler("scroll");if(opts.onCollapseRow){var row=$(this).datagrid("getRows")[index];opts.onCollapseRow.call(this,index,row)}}})}});$.extend($.fn.datagrid.methods,{subgrid:function(jq,conf){return jq.each(function(){createGrid(this,conf);function createGrid(target,conf,prow){var queryParams=$.extend({},conf.options.queryParams||{});queryParams[conf.options.foreignField]=prow?prow[conf.options.foreignField]:undefined;$(target).datagrid($.extend({},conf.options,{subgrid:conf.subgrid,view:conf.subgrid?detailview:undefined,queryParams:queryParams,detailFormatter:function(index,row){return'<div><table class="datagrid-subgrid"></table></div>'},onExpandRow:function(index,row){var opts=$(this).datagrid("options");var rd=$(this).datagrid("getRowDetail",index);var dg=getSubGrid(rd);if(!dg.data("datagrid")){createGrid(dg[0],opts.subgrid,row)}rd.find(".easyui-fluid").trigger("_resize");setHeight(this,index);if(conf.options.onExpandRow){conf.options.onExpandRow.call(this,index,row)}},onCollapseRow:function(index,row){setHeight(this,index);if(conf.options.onCollapseRow){conf.options.onCollapseRow.call(this,index,row)}},onResize:function(){var dg=$(this).children("div.datagrid-view").children("table");setParentHeight(this)},onResizeColumn:function(field,width){setParentHeight(this);if(conf.options.onResizeColumn){conf.options.onResizeColumn.call(this,field,width)}},onLoadSuccess:function(data){setParentHeight(this);if(conf.options.onLoadSuccess){conf.options.onLoadSuccess.call(this,data)}}}))}function getSubGrid(rowDetail){var div=$(rowDetail).children("div");if(div.children("div.datagrid").length){return div.find(">div.datagrid>div.panel-body>div.datagrid-view>table.datagrid-subgrid")}else{return div.find(">table.datagrid-subgrid")}}function setParentHeight(target){var tr=$(target).closest("div.datagrid-row-detail").closest("tr").prev();if(tr.length){var index=parseInt(tr.attr("datagrid-row-index"));var dg=tr.closest("div.datagrid-view").children("table");setHeight(dg[0],index)}}function setHeight(target,index){$(target).datagrid("fixDetailRowHeight",index);$(target).datagrid("fixRowHeight",index);var tr=$(target).closest("div.datagrid-row-detail").closest("tr").prev();if(tr.length){var index=parseInt(tr.attr("datagrid-row-index"));var dg=tr.closest("div.datagrid-view").children("table");setHeight(dg[0],index)}}})},getParentGrid:function(jq){var detail=jq.closest("div.datagrid-row-detail");if(detail.length){return detail.closest(".datagrid-view").children(".datagrid-f")}else{return null}},getParentRowIndex:function(jq){var detail=jq.closest("div.datagrid-row-detail");if(detail.length){var tr=detail.closest("tr").prev();return parseInt(tr.attr("datagrid-row-index"))}else{return-1}}});

$.fn.tree.defaults.loadFilter = function (data, parent) {
    var opt = $(this).data().tree.options;
    if (opt.flatData) {
        var idFiled,textFiled,parentField;
        idFiled = opt.idFiled || 'id';
        textFiled = opt.textFiled || 'name';
        parentField = opt.parentField || 'pid';

        var i,l,treeData = [],tmpMap = [];

        for (i = 0, l = data.length; i < l; i++) {
            tmpMap[data[i][idFiled]] = data[i];
        }

        for (i = 0, l = data.length; i < l; i++) {
            if (tmpMap[data[i][parentField]] && data[i][idFiled] != data[i][parentField]) {
                if (!tmpMap[data[i][parentField]]['children'])
                    tmpMap[data[i][parentField]]['children'] = [];
                data[i]['text'] = data[i][textFiled];
                tmpMap[data[i][parentField]]['children'].push(data[i]);
            } else {
                data[i]['text'] = data[i][textFiled];
                treeData.push(data[i]);
            }
        }
        return treeData;
    }
    return data;
};
$.fn.treegrid.defaults.loadFilter = function (data, parent) {
    var opt = $(this).data().treegrid.options;
    if (opt.flatData) {
        var idFiled,textFiled,parentField;
        idFiled = opt.idFiled || 'id';
        textFiled = opt.textFiled || 'name';
        parentField = opt.parentField || 'pid';

        var i,l,treeData = [],tmpMap = [];

        for (i = 0, l = data.length; i < l; i++) {
            tmpMap[data[i][idFiled]] = data[i];
        }

        for (i = 0, l = data.length; i < l; i++) {
            if (tmpMap[data[i][parentField]] && data[i][idFiled] != data[i][parentField]) {
                if (!tmpMap[data[i][parentField]]['children'])
                    tmpMap[data[i][parentField]]['children'] = [];
                data[i]['text'] = data[i][textFiled];
                tmpMap[data[i][parentField]]['children'].push(data[i]);
            } else {
                data[i]['text'] = data[i][textFiled];
                treeData.push(data[i]);
            }
        }
        return treeData;
    }
    return data;
};
$.fn.combotree.defaults.loadFilter = function(data, parent) {
    var opt = $(this).data().tree.options;
    if (opt.flatData) {
        var idFiled, textFiled, parentField;
        idFiled = opt.idFiled || 'id';
        textFiled = opt.textFiled || 'name';
        parentField = opt.parentField || 'pid';

        var i, l, treeData = [], tmpMap = [];

        for (i = 0, l = data.length; i < l; i++) {
            tmpMap[data[i][idFiled]] = data[i];
        }

        for (i = 0, l = data.length; i < l; i++) {
            if (tmpMap[data[i][parentField]] && data[i][idFiled] != data[i][parentField]) {
                if (!tmpMap[data[i][parentField]]['children'])
                    tmpMap[data[i][parentField]]['children'] = [];
                data[i]['text'] = data[i][textFiled];
                tmpMap[data[i][parentField]]['children'].push(data[i]);
            } else {
                data[i]['text'] = data[i][textFiled];
                treeData.push(data[i]);
            }
        }
        return treeData;
    }
    return data;
};

define("easyui.extend", ["easyui"], function(){});

/**
* jQuery EasyUI 1.4.3
* Copyright (c) 2009-2015 www.jeasyui.com. All rights reserved.
*
* Licensed under the GPL license: http://www.gnu.org/licenses/gpl.txt
* To use it on other terms please contact us at info@jeasyui.com
* http://www.jeasyui.com/license_commercial.php
*
* jQuery EasyUI validatebox 扩展
* jeasyui.extensions.validatebox.rules.js
* 开发 流云
* 由 落阳 整理
* 最近更新：2015-10-27
*
* 依赖项：
*   1、jquery.jdirk.js
*   2、jeasyui.extensions.validatebox.css
*
* Copyright (c) 2015 ChenJianwei personal All rights reserved.
*/
(function () {

  //从规则集合中获取“存在于现有validatebox规则集合”中的那部分规则
  function getEffectValidType(rs) {
    var thisRules = [];
    var allRules = $.fn.validatebox.defaults.rules;
    rs.forEach(function (validType) {
        var types = /([a-zA-Z_]+)(.*)/.exec(validType);
        var tempRules = allRules[types[1]];
        //var validParams = eval(types[2]);
        if (tempRules != undefined) { thisRules.push(validType); }
    });
    return thisRules;
  }
//临时添加验证规则
//例如：
//var idcardRule = 'idCardNo["birthday,sex,age"]';
//$cardNo.validatebox('addRule',idcardRule);
  function addRule(target, rs) {
    var currentRules = [];
    if ($.type(rs)=="string") { currentRules.push(rs); }
    else if ($.isArray(rs)) { currentRules = rs; }
    else { return; }
    if (currentRules.length == 0) { return; }

    var thisRules = getEffectValidType(currentRules);
    if (thisRules.length == 0) { return; }

    var t = $(target), opts = t.validatebox("options");
    var _validType = opts.validType ? ($.type(opts.validType)=="string"?[opts.validType]:opts.validType) : [];
    if (_validType.length && _validType.length >= 0) {
      $.each(thisRule,function(k,rule){
        _validType.push(rule);
      });
    }else {
        _validType = thisRules;
    }
    opts.validType = _validType;
    t.validatebox("validate");
  };
//临时移除验证规则
//例如：
//var idcardRule = 'idCardNo["birthday,sex,age"]';
//$cardNo.validatebox('removeRule',idcardRule);
  function removeRule(target, rs) {
    var currentRules = [];
    if ($.type(rs)=="string") { currentRules.push(rs); }
    else if ($.isArray(rs)) { currentRules = rs; }
    else { return; }
    if (currentRules.length == 0) { return; }

    var thisRules = getEffectValidType(currentRules);
    if (thisRules.length == 0) { return; }

    var t = $(target), opts = t.validatebox("options");
    var _validType = opts.validType;
    if (_validType&&_validType.length && _validType.length > 0) {
        $.each(thisRules,function (k,rule) {
          var index = _validType.indexOf(rule);
          if (index > -1) {
            _validType.splice(index, 1);
          }
        });
        opts.validType = _validType;
        t.validatebox("validate");
    }
  }


  $.extend($.fn.validatebox.methods,{
      //   rules:表示要动态添加的规则，该参数可以是如下类型
      //   1、String类型：表示一个要动态添加的规则；
      //   2、Array类型：表示一组要动态添加的规则；
      //  返回值：返回表示当前 easyui-validatebox 控件的 jQuery 链式对象。
//例如：
//var idcardRule = 'idCardNo["birthday,sex,age"]';
//$cardNo.validatebox('addRule',idcardRule);
      addRule: function (jq, rules) { return jq.each(function () { addRule(this, rules); }); },
      //   rules:表示要动态移除的规则，该参数可以是如下类型
      //   1、String类型：表示一个要动态移除的规则；
      //   2、Array类型：表示一组要动态移除的规则；
      //  返回值：返回表示当前 easyui-validatebox 控件的 jQuery 链式对象。
//例如：
//var idcardRule = 'idCardNo["birthday,sex,age"]';
//$cardNo.validatebox('removeRule',idcardRule);
      removeRule: function (jq, rules) { return jq.each(function () { removeRule(this, rules); }); }
  });


  var $rules = $.fn.validatebox.defaults.rules;
  $.extend($rules, {
    // multipleValidType :{//多个校验的使用
    many :{//多个校验的使用,ep: validType= "many['pFloatFix','range[0,20]']"
        validator: function(value, param){
            var options = $.fn.validatebox.defaults;//获取校验属性
            var returnFlag = true;
            for(var i = 0 ; i < param.length ; i++){
                var result = /([a-zA-Z_0-9]+)(.*)/.exec(param[i]); //匹配校验方法
                var rule = options.rules[result[1]];  //获取校验方法
                if(value && rule){
                    var ruleParam = eval(result[2]);  //获取校验参数
                    if(!rule["validator"].call(this,value, ruleParam)){
                    // if(!rule["validator"](value, ruleParam,this)){
                        var message = rule["message"];
                        window.console&&console.log(ruleParam,message);
                        if (ruleParam) {
                            for ( var i = 0; i < ruleParam.length; i++) {
                              message = String(message).replace(new RegExp("\\{" + i + "\\}", "g"), ruleParam[i]);
                            }
                        }
                      //  $.fn.validatebox.defaults.rules.multipleValidType.message = message;
                       $.fn.validatebox.defaults.rules.many.message = message;
                       returnFlag = false;
                       break;
                    }
                }
            }
            return returnFlag;
        },
        message:""
    },
    forceValidFail: {//强行验证失败
        validator: function (value, param) {
            var result = param[1];
            return result;
        },
        message: "{0}"
    },
    required3 : {//自定义必填
      validator: function (value, param) {
        if(param) $rules.required3.message = param[0];//自定义提示
        return $.trim(value)!=='';
      },
      message: "{0}"
    },
    minlength : {
      validator: function (value,param) {
        if(param[1]) $rules.minlength.message = param[1];
        var len = value.length;
        return len >= param[0];
      },
      message: '最小长度{0}'
    },
    maxlength : {
      validator: function (value,param) {
        if(param[1]) $rules.maxlength.message = param[1];
        var len = value.length;
        return len <= param[0];
      },
      message: '最大长度{0}'
    },
    rangelength : {
      validator: function (value,param) {
        if(param[2]) $rules.rangelength.message = param[2];
        var len = value.length;
  			return len >= param[0] && len <= param[1];
      },
      message: '最小长度{0}，最大长度{1}'
    },
    min : {
      validator: function (value,param) {
        if(param[1]) $rules.min.message = param[1];
        return value >= param[0];
      },
      message: '数字最小为{0}'
    },
    max : {
      validator: function (value,param) {
        if(param[1]) $rules.max.message = param[1];
        return value <= param[0];
      },
      message: '数字最大为{0}'
    },
    range : {
      validator: function (value,param) {
        if(param[2]) $rules.range.message = param[2];
        return  value >= param[0] && value <= param[1];
      },
      message: '数字只能在{0}与{1}之间'
    },
    //  只允许输入英文字母或数字
    username : {
      validator: function (value,param) {
        if(param) $rules.username.message = param[0];
        return /^[0-9a-zA-Z_]{1,}$/.test(value);
      },
      message: '请输入字母、数字或下划线'
    },
    normalPass : {
      validator: function (value,param) {
          if(param) $rules.normalPass.message = param[0];
          return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/.test(value);
      },
      message: '须含大小写字母及数字'
    },
    complexPass : {
      validator: function (value,param) {
          if(param) $rules.complexPass.message = param[0];
          return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]).*$/.test(value);
      },
      message: '须含大小写字母、数字及特殊字符'
    },
    cn : {
      validator: function (value,param) {
          if(param) $rules.cn.message = param[0];
          return /^[\u0391-\uFFE5]+$/.test(value);
      },
      message: '请输入中文'
    },
    en : {// 判断英文字符
      validator: function (value,param) {
        if(param&&param[0]) $rules.isEnglish.message = param[0];
        return /^[A-Za-z]+$/.test(value);
      },
      message: '只能包含英文字符'
    },
    engNum: {
      validator: function (value) {
          return /^[0-9a-zA-Z]*$/.test(value);
      },
      message: '请输入英文字母或数字'
    },
    //  只允许汉字、英文字母或数字
    chsEngNum: {
      validator: function (value, param) {
          return /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$/.test(value);
      },
      message: '只允许汉字、英文字母或数字。'
    },
    number : {// 匹配数值类型，包括整数和浮点数
      validator: function (value,param) {
        if(param&&param[0]) $rules.number.message = param[0];
        return /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
      },
      message: '请输入正确的数字'
    },
    pNumber : {
      validator: function (value,param) {
          if(param) $rules.pNumber.message = param[0];
          return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value);
      },
      message: '请输入一个正数'
    },
    pInt : {
      validator: function (value,param) {
          if(param) $rules.pInt.message = param[0];
          return /^(0|[1-9]\d*)$/.test(value);
      },
      message: '请输入一个正整数'
    },
    int : {
      validator: function (value,param) {
          if(param) $rules.int.message = param[0];
          return /^-?\d+$/.test(value);
      },
      message: '请输入一个整数'
    },
    float : {// 判断浮点型
      validator: function (value,param) {
        if(param&&param[0]) $rules.float.message = param[0];
        return /^[-\+]?\d+(\.\d+)?$/.test(value);
      },
      message: '请输入正确的小数'
    },
    floatNEqZero : {// 判断浮点数value是否不等于0
      validator: function (value,param) {
        if(param&&param[0]) $rules.floatNEqZero.message = param[0];
        var value = parseFloat(value);
        return value!=0;
      },
      message: '浮点数不可以等于0'
    },
    floatLtZero : {
     validator: function (value,param) {
       if(param&&param[0]) $rules.floatLtZero.message = param[0];
       var value = parseFloat(value);
       return value<0;
     },
     message: '浮点数必须小于0'
   },
   floatLteZero : { // 判断浮点数value是否小于或等于0
    validator: function (value,param) {
      if(param&&param[0]) $rules.floatLteZero.message = param[0];
      var value = parseFloat(value);
      return value<=0;
    },
    message: '浮点数必须小于或等于0'
  },
  isFloatGteZero : {
    validator: function (value,param) {
        if(param) $rules.isFloatGteZero.message = param[0];
        return /^\d+(\.\d+)?$/.test(value);
    },
    message: '浮点数必须大于或等于0'
  },
  pFloatFix : {
    validator: function (value,param) {
      if(param&&param[1]) $rules.pFloatFix.message = param[1];
      var state = /^\d+(\.\d+)?$/.test(value);
      if(value&&state){
        var _self = $(this);
        if(_self instanceof Array){_self = _self[0]};
        var opt = param[0] || 2;
        _self.blur(function () {
         _self.val(new Number(value).toFixed(opt)).unbind('blur');
        });
      }
      return state;
    },
    message: '请填写正确的正数'
  },
  floatFix : {
    validator: function (value,param) {
      if(param&&param[1]) $rules.floatFix.message = param[1];
      var state = /^[-\+]?\d+(\.\d+)?$/.test(value);
      if(value&&state){
        var _self = $(this);
        if(_self instanceof Array){_self = _self[0]};
        var opt = param[0] || 2;
        _self.blur(function () {
         _self.val(new Number(value).toFixed(opt)).unbind('blur');
        });
      }
      return state;
    },
    message: '请填写正确的正数'
  },
  diymonth : {
    validator: function (value,param) {
        if(param) $rules.diymonth.message = param[0];
        return /^[0-9]+(\.[0-9]{1})?$/.test(value);
    },
    message: '月数为正整数或一位小数'
  },
  normalDate : {
    validator: function (value,param) {
        if(param) $rules.normalDate.message = param[0];
        return /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(value);
    },
    message: '日期格式如：1980-01-01'
  },
  age : {
    validator: function (value,param) {
      if(param&&param[0]) $rules.age.message = param[0];
      return /^[-\+]?\d+$/.test(value) && parseInt(value)>0&&parseInt(value)<120;
    },
    message: '请输入正确的年龄'
  },
  digits : {// 只能输入[0-9]数字
    validator: function (value,param) {
      if(param&&param[0]) $rules.digits.message = param[0];
      return /^\d+$/.test(value);
    },
    message: '只能输入0-9数字'
  },
  mobile : {// 判断英文字符
    validator: function (value) {
      return length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value);
    },
    message: '请填写正确的手机号码'
  },
  phone : {// 电话号码验证
    validator: function (value) {
      var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
      return tel.test(value);
    },
    message: '请填写正确的电话号码'
  },
  phoneArea : {
    validator: function (value) {
      var tel = /^[08]\d{2,3}$/g;
      return tel.test(value);
    },
    message: '请填写正确的区号'
  },
  phoneNumber : {
    validator: function (value) {
      var tel = /^\d{7,9}$/g;
      return tel.test(value);
    },
    message: '请填写正确的电话号码'
  },
  tel : {// 联系电话(手机/电话皆可)验证
    validator: function (value) {
      var length = value.length;
      var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
      return tel.test(value) || (length==11 && mobile.test(value));
    },
    message: '请填写正确的联系方式'
  },
  qq : {//匹配qq
    validator: function (value,param) {
      if(param&&param[0]) $rules.qq.message = param[0];
      return /^[1-9]\d{4,12}$/.test(value);
    },
    message: '请填写正确的QQ号码'
  },
  zipCode : {//邮政编码验证
    validator: function (value,param) {
      if(param&&param[0]) $rules.zipCode.message = param[0];
      var zip = /^[0-9]{6}$/;
      return zip.test(value);
    },
    message: '请填写正确的邮政编码'
  },
  ip : {
    validator: function (value,param) {
        if(param) $rules.ip.message = param[0];
        return /^[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]$/.test(value);
    },
    message: '请输入合法的IP'
  },
  idCardNo : {//身份证号码验证
    validator: function (value,param) {
      if(param&&param[1]) $rules.idCardNo.message = param[1];
      return isIdCardNo(value,param[0]);
    },
    message: '请填写正确的身份证号码'
  },
  containsSpecialChar : {//判断是否包含中英文特殊字符，除英文"-_"字符外
    validator: function (value,param) {
      if(param&&param[0]) $rules.containsSpecialChar.message = param[0];
      var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
      return reg.test(value);
    },
    message: '含有中英文特殊字符'
  },
  //  只允许汉字、英文字母、数字及下划线
  code: {
    validator: function (value, param) {
        return /^[\u0391-\uFFE5\w]+$/.test(value);
    },
    message: '只允许汉字、英文字母、数字及下划线.'
  },
  //  输入的字符必须是指定的内容相同
  equals: {
    validator: function (value, param) {
      if(param[1]) $rules.equals.message = param[1];
      return value == $(param[0]).val();
    },
    message: "输入的内容不匹配."
  }
});

})(jQuery);


//身份证号码的验证规则
function isIdCardNo(code,opt){
  var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
  var tip = "";
  var pass= true;

  // if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
    // if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
    if (!code || !/^[1-9]\d{5}((1[89]|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dx]$/i.test(code)) {
      tip = "身份证号格式错误";
      pass = false;
  }

  else if(!city[code.substr(0,2)]){
      tip = "地址编码错误";
      pass = false;
  }
  else{
      //18位身份证需要验证最后一位校验位
      if(code.length == 18){
          codeArr = code.split('');
          //∑(ai×Wi)(mod 11)
          //加权因子
          var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
          //校验位
          var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
          var sum = 0;
          var ai = 0;
          var wi = 0;
          for (var i = 0; i < 17; i++)
          {
              ai = codeArr[i];
              wi = factor[i];
              sum += ai * wi;
          }
          var last = parity[sum % 11];
          if(parity[sum % 11] != codeArr[17].toUpperCase()){
              tip = "校验位错误";
              pass =false;
          }
      }
  }
  window.console && console.log(pass,tip);

  if (opt) {
      var optArr = opt.split(',');
      var $bir = $('#'+optArr[0]);
      var $sex = $('#'+optArr[1]);
      var $age = $('#'+optArr[2]);
      if (pass) {
      $bir.val(GetBirthday(code,$age));
      $sex.val(Getsex(code));
  }else{
      $bir.val('');
      $sex.val('');
      $age.val('');
  };
  };
  return pass;
}

function GetBirthday(psidno,$age){
  var birthdayno,birthdaytemp;
  if(psidno.length==18){
      birthdayno=psidno.substring(6,14)
  }else if(psidno.length==15){
      birthdaytemp=psidno.substring(6,12)
      birthdayno="19"+birthdaytemp
  }else{
      window.console&&console.log("错误的身份证号码，请核对！")
      return false
  }
  var birY = birthdayno.substring(0,4);
  var birM = birthdayno.substring(4,6);
  var birD = birthdayno.substring(6,8);
  var birthday=birY+"-"+birM+"-"+birD;

  var now = new Date();
  now =  $.getFullDate(now);
  window.console && console.log(now);
  now = now.split(' ')[0].split('-');
  var age = (now[0]-birY)*100+(now[1]-birM)/12*10*10+(now[2]-birD)/30*10;
  $age.val(Math.floor(age/100));
  return birthday;
}

function Getsex(psidno){
  var sexno,sex;
  if(psidno.length==18){
      sexno=psidno.substring(16,17)
  }else if(psidno.length==15){
      sexno=psidno.substring(14,15)
  }else{
      window.console&&console.log("错误的身份证号码，请核对！")
      return false
  }
  var tempid=sexno%2;
  sex = (tempid==0)?'2':'1';
  return sex;
}
;
define("easyvalidate.extend", ["easyui"], function(){});

var $util = {
    down: function (url, param, method) {//下载方法
        var inputs = [];
        if (!method) {
            method = !param ? "get" : "post";
        }
        if (param) {
            $.each(param, function (k, v) {
                inputs.put($T.format("<input type='hidden' name='#{name}' value='#{value}'>", {name: k, value: v}));
            });
        }
        if (!$('_exprotBox').length) {
            $('<div id="_exportBox" class="hide"></div>').append("<iframe id='export_frame' name='export_frame'></iframe>")
                .append('<form action="' + url + '" method="' + (method || 'post') + '" target="export_frame">' + inputs.join('') + '</form>')
                .appendTo('body');
        } else {
            $("#_exportBox form").html(inputs.join(''));
        }
        $("#_exportBox form").submit();
    },
    excel: function (url, titles, fields, param) {//导出excel，需要后台对应配置
        param = param || {};
        $.applyIf(param, {
            _start: 0,
            _pagin: 1,
            _limit: 6000,
            _export_titles: titles.join(","),
            _export_fields: fields.join(",")
        });
        var frame = $("#export_frame");
        if (frame.length == 0) {
            frame = $("<iframe id='export_frame' class='hide' name='export_frame' style='display:none'></iframe>");
            $('body').append(frame);
        }
        // if (Ext.isIE) frame.src = Ext.SSL_SECURE_URL;
        var form = $("#export_form");
        if (form.length == 0) {
            form = $("<form method='post' id='export_form' target='export_frame' class='hide'></form>");
            $('body').append(form);
            if ($.browser.msie)
                document.frames["export_frame"].name = "export_frame";
        }
        form.attr("action", url);
        $.each(param, function (k, v) {
            form.append($T.format(
                "<input type='hidden' name='#{name}' value='#{value}'>", {
                    name: k,
                    value: v
                }));
        });
        form.submit().html("");
    },
    tabs: function (tab, events, cfg) {
        events = events || [];
        $(tab).tabs({
            onSelect: function (t, ix) {
                console.log("init tab" + ix);
                $('.tabs', this).attr('class', 'tabs tab-state-' + ix);
                var init = $(this).attr("data-init" + ix);
                if (!init) {
                    var fn = events[ix];
                    if (fn && $.isFunction(fn))fn();
                    $(this).attr("data-init" + ix, true);
                }
            }
        });
    },
    iframePop : function (opt,grid) {//pop的方式打开iframePop
        window._refreshParent = false;
        if (typeof(opt)=='string') {
            opt = {content:opt};
        };
        var layerOpt = $.extend({//layer
          type: 2,
          title :'提示',
          // content:url,
          area :['100%', '100%']
        },opt||{});
        if (grid) {
          layerOpt.end = function (){
              opt.end&&opt.end();
              if (window._refreshParent){
                  if(grid instanceof Array){
                      $.each(grid,function (i,v) {
                          $grid.reload(v);
                      })
                  }else{
                      $grid.reload(grid);
                  }
              }
          }
        }
        var popIndex = layer.open(layerOpt);
    },
    closePop : function (opt) {//统一的关闭pop方法
        var opt = $.extend({
            popIndex : null,
            callback : function () {},
            refreshGrid : false
        },opt||{});

        if (opt.popIndex) {//如果关闭当前window下的pop
            opt.callback();
            layer.close(opt.popIndex);
            return;
        }else{//关闭父级pop
            var p = parent.window;

            if (opt.refreshGrid) {
                p._refreshParent = true;
            };

            try {//试运行callback
                opt.callback(p);
            } catch (e) {
                window.console && console.log(e);
            }

            try {//试关闭open
              var index = parent.layer.getFrameIndex(window.name);
              p.layer.close(index);
            } catch (e) {
                window.console && console.log(e);
            }
        };
    },
/*
合并列方法
grid,
data:数据,
aStr:值相同的字段,
bStr:需要合并的字段(不设置，则使用aStr)
 */
    gridMergeCols : function (grid,data,aStr,bStr) {
        if (data&&data.rows.length) {
        var bStr = bStr?bStr:aStr;
        var merges =[{index:0}];
        var ix = 0;
        var span = 0;
          var nowStr = data.rows[0][aStr];
          $.each(data.rows,function (i,v) {
            if (v[aStr]!= nowStr) {
                ix++;
                merges[ix] = {index:i};
                merges[ix-1].rowspan = span;
                span = 1;
                nowStr = v[aStr];
            }else{
              span++;
            };
          });
          merges[ix].rowspan = span;
          window.console && console.log('merges 数组：',merges);

          for(var i=0; i<merges.length; i++){
                if(merges[i].rowspan>1){
                  if (bStr instanceof Array) {//如果有多个字段，为数组
                      $.each(bStr,function(j,v){
                        $(grid).datagrid('mergeCells',{
                          index: merges[i].index,
                          field: v,
                          rowspan: merges[i].rowspan
                        });
                      });
                  }else{//单个字段，字符串
                    $(grid).datagrid('mergeCells',{
                      index: merges[i].index,
                      field: bStr,
                      rowspan: merges[i].rowspan
                    });
                  };
                }
            }
        };
    }
};

var $grid = {
    getRows: function (grid) {//获取rows
        return $(grid).datagrid("getData").rows;
    },
    load: function (grid, param) {//grid 更新参数后load，返回第一页
        param = param || {};
        var ui = $(grid).attr("data-ui");
        if (ui == 'treegrid') {
            if (param.$url)$(grid).treegrid("options").url = param.$url;
            $(grid).treegrid("load", param);
        } else {
            if (param.$url) $(grid).datagrid("options").url = param.$url;
            $(grid).datagrid("load", param);
        }
    },
    reload: function (grid, param) {//grid 更新参数后reload，保留在刷新前的页码
        var ui = $(grid).attr("data-ui");
        if (ui == 'treegrid') {
            $(grid).treegrid("reload", param);
        } else {
            $(grid).datagrid("reload", param);
        }
    },
    clear: function (grid) {//grid 清空数据
        $(grid).datagrid("loadData", []);
    },
    deleteSelected: function (grid) {//grid 删除选择行
        //指定idField
        var rows = $(grid).datagrid("getSelections");
        for (var i = 0; i < rows.length; i++) {
            var inx = $(grid).datagrid("getRowIndex", rows[i]);
            $(grid).datagrid("deleteRow", inx);
        }
        $(grid).datagrid("clearSelections");
    },
    newGrid: function (grid, cfg) {//二次封装的grid方法，cfg参数相当于easyui的参数对象，具体方法请参考api手册
        if (!$(grid).length) {
            layer.alert("页面不存在" + grid);
            return;
        }
        var top = $(grid).position().top || 36;
        var gridCfg = {
            fitColumns: true,
            singleSelect: true,
            pagination: true,
            pageSize: 10,
            pageList: [10, 20, 50, 100, 200, 500],
            autoRowHeight: true,
            striped: true,
            rownumbers: true,
            width: '100%',
            height: $(window).height()-top
        };
        $.extend(true, gridCfg, cfg);
        var titles = [], fields = [];
        if (gridCfg.offset) gridCfg.height += gridCfg.offset;
        gridCfg.height = gridCfg.height -10;
        for (var i = 0; i < gridCfg.columns.length; i++) {
            var cols = gridCfg.columns[i];
            $.each(cols, function (inx, col) {
                if (col.checkbox)return;
                $.applyIf(col, {align: 'center'});
                if (col.format) {
                    col.formatter = function (v, r, inx) {
                        return v ? $.fmtDate(col.format, v) : '';
                    }
                }
                if (!col.width)col.width = 60;
                if (col.title && col.field) {
                    titles.push(col.title);
                    fields.push(col.field);
                }
                if (col.editor) {
                    col.styler = function (v, r, inx) {
                        return {'class': 'x-editor'};
                    }
                }
                if(col.titletip){
                    col.formatter=function(r){
                       return '<span title="'+r+'">'+r+'</span>';
                     }
                }
            });
        }
        console.log("初始化" + grid, gridCfg);
        if (gridCfg.toolbar)gridCfg.toolbar = $grid.initToolBar(grid, gridCfg.toolbar);
        if (gridCfg.tools){
            var toolsId = $grid.initTools(grid, gridCfg.tools);
            gridCfg.toolbar = '#'+toolsId;
        };
        if (gridCfg.treeField) {
            gridCfg.pagination = false;
            gridCfg.animate = false;
            $(grid).treegrid(gridCfg);
            $(grid).attr("data-ui", "treegrid");
        } else {
            $(grid).datagrid(gridCfg);
            $(grid).attr("data-ui", "datagrid");
        }

        var pager = $(grid).datagrid('getPager'), btns = [];
        if (cfg.excel) {
            btns.push({
                iconCls: 'icon-excel',
                handler: function () {
                    var ps = $(grid).datagrid("options").queryParams;
                    $util.excel(cfg.excel, titles, fields, ps);
                }
            });
        }

        if (cfg.auto) {
            var btnAutoId = $(grid).attr("id") + "_auto", auto = cfg.auto;
            auto = (auto === true) ? 60 * 1000 : auto * 1000;
            btns.push({
                id: btnAutoId,
                handler: function () {
                    var btn = $(this);
                    var taskId = btn.attr("data-task");
                    if (!taskId) {
                        taskId = setInterval(function () {
                            $grid.reload(grid);
                        }, auto);
                        btn.attr("data-task", taskId);
                        btn.addClass("icon-autofreshing");
                    } else {
                        clearInterval(taskId);
                        btn.removeAttr("data-task");
                        btn.removeClass("icon-autofreshing");
                    }
                }
            });
            $('#' + btnAutoId).addClass("icon-autofresh icon-autofreshing");
            $('#' + btnAutoId).click();
        }

        if (btns.length > 0) {
            pager.pagination({buttons: btns});
        }
    },
    renderTools : function (grid,btnArr,$par,singerMode) {
      var $gridO = $(grid);
       $.each(btnArr, function (i, opt) {
          //iconCls:'icon-add',text:'新增',url:'form.html',noMax: true,popHeight:350,title:'用户信息-新增'
          var o= $.extend({
              iconCls :'plus',//默认按钮图标
              btnCls : 'default',//默认按钮类型
              text : '新增',//按钮文本
              url : null,//请求地址
              popMax : false,//是否最大化
              popWidth : 560,//弹窗宽度
              popHeight : 300,//弹窗高度
              ajaxMsg : '你确定提交此操作吗？',
              title : '信息窗口',//默认弹窗标题
              check:false,//是否返回是check的值，即勾选行，默认返回select的值，即选择行
              notNull : false,//不能不选择行
              onlyOne : false,//只能选择一行
              newWin : false,//在新窗口打开
              ajax : false,//ajax事件
              post : false,//ajax改为 post参数方式
              endBack : function () {},
              ajaxBack : function (data) {},
              click : function () {}
          },opt||{});
          var $btn = $('<span class="btn s-tool'+(singerMode?" s-tool-singer":"")+' btn-default"><b class="icon icon-'+o.iconCls+'"></b> '+o.text+'</span>');
          $btn.click(function () {
              var _self = $(this);
              var rows = $gridO.datagrid(o.check?"getChecked":"getSelections");
              if (o.notNull && rows.length == 0) {
                  if (o.notNull === true) o.notNull = "请选择记录!";
                  layer.msg(o.notNull,{icon:0});
                  // $.sobox.warning(o.notNull);
                   _self.blur();
                  return;
              }
              if (o.onlyOne && rows.length != 1) {
                  if (o.onlyOne === true)o.onlyOne = "请选择需要操作的一条记录!";
                  layer.msg(o.onlyOne,{icon:0});
                  // $.sobox.warning(o.onlyOne);
                   _self.blur();
                  return;
              }
              var url = o.url;
              if (url) {
                  if (typeof url == 'function') {
                      url = url();
                  };
                  if (o.post) {
                      if (o.post.constructor !== String) {o.post = 'id=id'};//默认取id
                      var map= [];
                      if (rows.length>0) {
                          var ps = [],keyArr = [];
                          ps = o.post.split('&');
                          for (var c = 0; c < ps.length; c++) {
                              keyArr.push(ps[c].split('='));
                              // map[keyArr[c][0]]=[];
                          }
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map.push(keyArr[j][0]+'='+tt[keyArr[j][1]]);
                              }
                          }
                          map = map.join('&');

                      };
                  }else{
                      var ps = [], re = /\{(\w+)\}/g, c, map = {};
                      while (c = re.exec(url)) {
                          ps.push(c[1]);
                          map[c[1]] = [];
                      }
                      if (ps.length > 0 && rows.length > 0) {
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map[ps[j]].push(tt[ps[j]]);
                              }
                          }
                          for (var k in map) {
                              map[k] = map[k].join(",");
                          }
                          url = $T.format(url, map);
                      }
                  };
                  // window.console && console.log(url);
                  // window.console && console.log(map);
                  if(o.newWin){
                      window.open(url);
                      _self.blur();
                      return;
                  }
                  if (o.ajax) {
                      var ajaxData = o.post?map:{};
                      $ajax.post(url, ajaxData, o.ajaxMsg).done(function (rst) {
                          o.ajaxBack(rst);
                          if (rst.state) {
                              $grid.reload(grid);
                          }
                      });
                      _self.blur();
                  } else {
                      window._refreshParent = false;
                      var areaVal = o.popMax?['100%', '100%']:[(o.popWidth+'px') || '560px',(o.popHeight+'px') || '300px'];
                      layer.open({//layer
                        type: 2,
                        title : o.title,
                        content:url,
                        area :areaVal,
                        end : function () {
                            if (window._refreshParent){
                              $grid.reload(grid);
                              o.endBack();
                            }
                        }
                      });
                      _self.blur();
                  }
              }else{
                  if (o.onlyOne) {rows = rows[0]};
                  if (o.click) {
                      o.click($gridO,rows);
                      _self.blur();
                      return;
                  };
              }
          });
          $par.append($btn);
       });
      // return $par;
    },
    initTools : function (grid,cfg) {//newGrid的分支方法，初始化工具栏
      var me = this;
      var randomId = 'tool-'+Math.ceil(Math.random()*100000000);
      var $wrap = $('<div id="'+randomId+'" class="baseToobar"></div>');
      var $gridO = $(grid);
      // window.console && console.log(cfg);
      if (cfg[0] instanceof Array) {
          $.each(cfg,function (h,btnArr) {
              var $btnGroup = $('<div class="item-group toolGroup"></div>');
              me.renderTools(grid,btnArr,$btnGroup);
              $wrap.append($btnGroup);
          });
      }else{
          me.renderTools(grid,cfg,$wrap,true);
      };
      var $none = $('<div class="none"></div>');
      $none.append($wrap);
      $('body').append($none);
      return randomId;
    },
    initToolBar: function (grid, cfg) {//newGrid的分支方法，初始化工具栏方式2
      $.each(cfg, function (i, opt) {
          if (opt == '-')return;
          if (!opt.handler) {
              opt.handler = function () {
                  var _self = $(this);
                  var rows = $(grid).datagrid(opt.check?"getChecked":"getSelections");
                  if (opt.notNull && rows.length == 0) {
                      if (opt.notNull === true) opt.notNull = "请选择记录!";
                      layer.msg(opt.notNull,{icon:0});
                      // $.sobox.warning(opt.notNull);
                      _self.blur();
                      return;
                  }
                  if (opt.onlyOne && rows.length != 1) {
                      if (opt.onlyOne === true)opt.onlyOne = "请选择需要操作的一条记录!";
                      layer.msg(opt.onlyOne,{icon:0});
                      _self.blur();
                      // $.sobox.warning(opt.onlyOne);
                      return;
                  }
                  var url = opt.url;
                  if (url) {
                      var ps = [], re = /\{(\w+)\}/g, c, map = {};
                      while (c = re.exec(url)) {
                          ps.push(c[1]);
                          map[c[1]] = [];
                      }
                      if (ps.length > 0 && rows.length > 0) {
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map[ps[j]].push(tt[ps[j]]);
                              }
                          }
                          for (var k in map) {
                              map[k] = map[k].join(",");
                          }
                          url = $T.format(url, map);
                      }
                      if(opt.newWin){
                          window.open(url);
                          _self.blur();
                          return;
                      }
                      if (opt.ajax) {
                          $ajax.post(url, {}, true).done(function (rst) {
                              if (rst.state) {
                                  $grid.reload(grid);
                              }
                          });
                          _self.blur();
                      } else {
                          window._refreshParent = false;
                          opt.popWidth = opt.popWidth || 560;
                          opt.popHeight = opt.popHeight || 300;
                          var areaVal = opt.popMax?['100%', '100%']:[(opt.popWidth+'px'),(opt.popHeight+'px')];
                          layer.open({//layer
                            type: 2,
                            title : opt.title,
                            content:url,
                            area :areaVal,
                            end : function () {
                                if (window._refreshParent)$grid.reload(grid);
                            }
                          });
                          _self.blur();
                      }
                  } else {
                      if (opt.onlyOne) {rows = rows[0]};
                      if (opt.click){
                          opt.click($(grid), rows);
                          _self.blur();
                      };
                  }
              }
          }
      });
      return cfg;
    }
};

var $pop = {
  popForm : function (opt) {//pop form, opt是所有参数
      var opt =$.extend({
          target : null,//需要弹出的对象class或者id
          refreshGrid : true,//是否刷新grid
          gridId : 'gridBox',//需要刷新grid的id
          width : 400,height:300,//pop宽高
          beforePop : function ($formBox) {},//弹窗之前的事情
          afterSubmit : function (rst,$formBox) {}//提交之后的事件
      },opt||{});
      var temPop;
      var $formBox = $(opt.target);
      $formBox.find('.form-validate').attr("data-opt","{'callback':'submitPopForm'}");
      window.submitPopForm = function (rst) {
          if (rst.state) {
              layer.close(temPop);
              if (opt.refreshGrid) {$grid.reload(opt.grid);};
              opt.afterSubmit(rst,$formBox);
          };
      }
      opt.beforePop($formBox);
      temPop = layer.open({
          type:1,
          title : opt.title,
          area:[opt.width+'px',opt.height+'px'],
          content : $formBox,
          end: function () {
              $formBox.clear();
          }
      });
      $formBox.find('.btn-closePop').click(function () {
          layer.close(temPop);
      });
      return temPop;//返回layer的序列
  },
  popGrid: function (opt,target) {//弹窗grid
      opt = opt || {};
      if (!opt.url && !opt.code) {
          layer.alert("请配置表格数据源参数url或者code");
          return;
      }
      if (!opt.code && !opt.gridId) {
          layer.alert("请配置表格数据参数gridId");
          return;
      }
      var data = opt || {};
      data.gridCfg = data.gridCfg ||{};
      var gridId = data.gridId || 'grid_' + data.code.replace(/[\^@]/g, '')
          , url = data.url || "/sys/widget/grid.htm?_code=" + encodeURIComponent(data.code)
          , init = $('#' + gridId).length > 0;
          data.gridCfg.singleSelect = data.gridCfg.singleSelect  || !data.muti;
      var muti = !data.gridCfg.singleSelect;
          window.console && console.log(muti);
      if (init && $('#pop_' + gridId).length == 0) layer.alert("请另外指定gridId," + gridId + "已存在!");
      if (!init) {
          var searchName = data.searchName || 'searchValue';
          var searchLabel = data.searchLabel || '';
          var boxTpl = "<div id='pop_{gridId}' style='display:none'>"+
          "<form class='form-inline popGridHead pad10'>"+
          "<div class='form-group'><input type='text' class='form-control' name='"+searchName+"' placeholder='"+searchLabel+"'> </div>"+
          " <button type='button' class='btn btn-info fnSearch'>查 询</button>"+
          "<button type='button' class='btn btn-warning fnSure"+(muti?'':' none')+"'>确 定</button>"+
              // "<span><input type='button' class='btn btn-submit fnSearch' value='查 询' /></span>"+
              // "<input type='button' class='btn btn-submit fnSure' value='确 定' />"+
          "</form>"+
          "<div class='pad-l10 pad-r10 pad-b5'><div id='{gridId}'></div></div></div>";
          $('body').append($T.format(boxTpl, {gridId: gridId}));
      }

      var boxOpt = {
          type :1,
          title: muti?'选择后点击确定按钮':'请双击选择行',
    area : ['500px','494px'],
          content: $('#pop_' + gridId)
      };
      $.extend(true, boxOpt, data.boxOpt || {});
      if (data.boxOpt.width) {boxOpt.area[0] = data.boxOpt.width+'px'};
      if (data.boxOpt.height) {boxOpt.area[1] = data.boxOpt.height+'px'};
      //清除验证的tooltip
      // var $form = $(target).parents('.form-validate');
      // if ($form) {
      //     $form.find(".form-validate .txta,:input").tooltip("destroy");
      // };
      $pop[gridId] = layer.open(boxOpt);
      if (!init) {
          var valueId = data.valueId, textId = data.textId
          ,valueVal = data.valueVal||'id', textVal = data.textVal||'text'
              , gridCfg = {height: (boxOpt.height - 85), width: '100%'};
          $.extend(true, gridCfg, data.gridCfg || {});
          gridCfg.columns = gridCfg.columns || data.cols;
          if (!gridCfg.columns && data.code) {
              var cType = data.code.replace(/[\^@]/g, '');
              if (!$cols[cType]) {
                  layer.alert('请在param.js里面定义' + cType + '表格列信息!');
                  return;
              }
              gridCfg.columns = $cols[cType];
          }
          if (!gridCfg.columns) {
              layer.alert("请配置表格列信息!");
              return;
          }
          gridCfg.fitColumns = (opt.fitCol?opt.fitCol:true);
          gridCfg.onDblClickRow = function (index, row) {
              window.console && console.log(textId,valueId,row);
              if (valueId)$('#' + valueId).val(row[valueVal]);
              if (textId)$('#' + textId).val(row[textVal]);
              if (boxOpt.onOk)boxOpt.onOk([row]);
              layer.close($pop[gridId]);
              if(data.values){
                  $.each(data.values,function (key,val) {
                      $('#'+key).val(row[val]);
                  });
              }
              // $pop[gridId].removePop();
          }
          $grid.newGrid('#' + gridId, gridCfg);
          $('.fnSearch', '#pop_' + gridId).click(function () {
              var ps = $('#pop_' + gridId).find('.popGridHead').sovals();
              $grid.load('#' + gridId, ps);
          });
          if (muti) {
              $('.fnSure', '#pop_' + gridId).show().click(function () {
                  console.log("点击确定按钮!");
                  var rows = muti ? ($('#' + gridId).datagrid("getChecked") || []) : [$('#' + gridId).datagrid("getSelected")];
                  var id = [], text = [];
                  for (var i = 0; i < rows.length; i++) {
                      var row = rows[i];
                      id.push(row[valueVal]);
                      text.push(row[textVal]);
                  }
                  if (valueId)$('#' + valueId).val(id.join(','));
                  if (textId)$('#' + textId).val(text.join(','));
                  if (boxOpt.onOk)boxOpt.onOk(rows);
                  layer.close($pop[gridId]);
              });
          };

      }
      var params = data.gridParams || data.params || {};
      if (typeof(params) == "function") {
          params = params();
      }
      var urlParams = data.urlParams || '';
      if (typeof(urlParams) == "function") {
          urlParams = urlParams();
      }
      // urlParams = $T.parseParam(urlParams);
      params.$url = url;
      if (urlParams) {params.$url = params.$url+urlParams};
      $grid.load('#' + gridId, params);
  }
};

var $ff = {
    /**
     * 页面表格查询功能绑定，主要用在列表的搜索栏
     */
    search: function (btnCls) {
        var cls = btnCls || '.so-search';
        if ($(cls).length) {
            $(cls).each(function () {
                var data = $T.data(this);
                var scope = data.scope;
                if (scope != null ){
                    $(scope).submit(function () {
                        var formId = data.form;
                        if (formId != null && !$(formId).valid()) {
                            return;
                        }
                        var scope = data.scope, param = $(scope).sovals(), gridId = data.grid;
                        if (data.tab) {
                            var sli = $('li.tabs-selected', data.tab), inx = $('.tabs li', data.tab).index(sli);
                            gridId += (inx + 1);
                        }
                        $grid.load(gridId, param);
                        return false;
                    });
                }
            });
            $(cls).click(function () {
                var data = $T.data(this);
                var scope = data.scope;
                $(scope).submit();
                return false;
            });
        }
    },
    formAEnterFun : function(callback,formCls){//表单输入框回车事件支持
      setTimeout(function () {
          var $form = $(formCls?formCls:'.form-enter');
          var $input = $form.find(':input').filter(':visible');
          // window.console && console.log($input);
          $input.keydown(function(e) {
              if (e.keyCode == 13) {
                  if ($(this).hasClass('btn')) {return;};
                  var ix = $input.index(this);
                  // window.console && console.log(ix);
                  $input.eq(ix+1).focus();
                  return false;
              };
          });
          $input&&$input.eq(0).focus();
          callback&&callback();
      },400);
    },
    formAEnterFunB : function (callback,formCls) {//表单输入框回车事件支持，部分特殊输入框的处理

      setTimeout(function () {//重置输入框回车事件

          var $form = $(formCls?formCls:'.form-enter');

          $form.find('.textbox-text').each(function (){
            var _self = $(this);
            var $sourInput = _self.parents('.combo').prev('.required');
            if ($sourInput.length) {_self.addClass('required')};
          });

          var $input = $form.find(':input.required,.btn-easyFormSubmit').filter(':visible');
          //$("input:disabled")
          // window.console && console.log($input);
          $input.keydown(function(e) {//required输入框进入获取下一焦点
              if (e.keyCode == 13) {
                  if ($(this).hasClass('btn')) {return;};
                  var ix = $input.index(this);
                  // window.console && console.log(ix);
                  $input.eq(ix+1).focus();
                  return false;
              };
          });

          $form.find('.textbox-text').focus(function () {//获取焦点时自动下拉
            var $prev = $(this).parents('.combo').prev();
            if ($prev.hasClass('easyui-combogrid')||$prev.hasClass('easyui-combobox')||$prev.hasClass('easyui-combotree')) {
              $prev.combo('showPanel');
            }
          });
          $input&&$input.eq(0).focus();
          // window.console && console.log($input.eq(0));
          callback&&callback();
      },500);
    },
    /**
     * 页面控件初始化集合
     */
    someMix: function () {
        var me = this;

        $T.placeHolder.init();//对低版本浏览器placeholder属性的兼容

        if ($('.so-time').length) {//时间控件初始化
            // $('.so-time').addClass('Wdate').each(function () {
            //     var _self = $(this);
            //     if (_self.hasClass('inline')) {_self.css('width', 150)};
            //     _self.click(function () {
            //         var data = $T.data(this) || {};
            //         $.applyIf(data, {dateFmt: 'yyyy-MM-dd HH:mm', readOnly: true});
            //         WdatePicker(data);
            //     });
            // });

            $('.so-time').each(function () {
              var _self  = $(this);
              var data = $T.data(this) || {};
              _self.css('width', _self.hasClass('inline')?'160px':'100%');
              _self.datetimebox(data);
            });

        }

        if ($('.so-date').length) {//日期控件初始化
            $('.so-date').each(function () {
              var _self  = $(this);
              var data = $T.data(this) || {};
              _self.css('width', _self.hasClass('inline')?'100px':'100%');
              _self.datebox(data);
            });
        }
        // if ($(".so-form .btn-cancel").length) {
        //     $(".so-form .btn-cancel").click(function () {
        //         $util.closePop();
        //     });
        // }
        if ($(".form-validate .btn-cancel").length) {//表单里的关闭按钮，关闭事件
            $(".form-validate .btn-cancel").click(function () {
                $util.closePop();
            });
        }
        if ($(".form-validate .btn-closePop").length) {//表单里的关闭按钮，关闭事件
            $(".form-validate .btn-closePop").click(function () {
                $util.closePop();
            });
        }
        if ($('.form-enter').length) {//回车替代tab事件
          me.formAEnterFun();
          me.formAEnterFunB();
        };

        if ($('.drop').length) {//drop通过rel来初始化选择值
            $('.drop').each(function () {
                var v = $(this).attr('rel');
                if (v) {$(this).val(v);};
            })
        };

        if ($(':input[noNull],.required').length) {//时间和选择控件对应的必填输入框添加必填小三角样式
            $(':input[noNull],.required').each(function () {
              var _self = $(this);
              // if (_self.hasClass('so-time') || _self.hasClass('so-date')) {
              //     _self.addClass('txt-requireDate');
              // }
              if (_self.hasClass('so-choice') || _self.hasClass('so-pop')) {
                  _self.addClass('so-requirePop');
              }
            });
        }

        if ($('.so-drop').length) {//简单的easyui下拉控件初始化
            $('.so-drop').each(function () {
                var _self = $(this);
                var url = _self.attr('url');
                var required = _self.hasClass('required');
                _self.css({width:'100%'}).combobox({
                    url:url,
                    valueField:'value',
                    textField:'text',
                    onBeforeLoad : function (d) {
                        if (required) {
                            var $newTxt = _self.next('.combo').find('.textbox-text');
                            // _self.next('.combo').addClass('required');
                            //window.console && console.log($newTxt);
                            $newTxt.attr('placeholder','请选择...').addClass('required {required:true,messages:{required:"此项为必选"}}');
                            // .rules("add",{required:true});
                        };
                    }
                });
            });
        };

        if ($('.so-pop').length) {//sopop控件初始化，慢慢被easyui的comb控件替换，保留是为了兼容一些旧的事件
            $('.so-pop').each(function () {
                var _self = $(this);
                var rdm = Math.floor(Math.random()*1000000);
                var myOpt = $T.data(_self);

                if (myOpt.type=='tree') {
                    var pData = $.extend({
                        // type: null,//'tree'
                        url : null,//json url
                        valueId : null,
                        valuePid : null,
                         selectedId : null,
                        width:'400px',height:'300px',
                        title : '请双击选择',
                        value:'text',
                        justLeaf: false,
                        data : null,
                        flatData : true,
                        onDblClick : function (node) {}
                    },myOpt||{});

                $('body').append('<div id="popTreeP-'+rdm+'" class="pad15 none"><ul id="ul-Tree-'+rdm+'"></ul></div>');
                var alreadyRenderTree = false,treePop= null;
                  _self.click(function() {
                    treePop = layer.open({
                        type: 1,
                        content: $('#popTreeP-'+rdm),
                        area : [pData.width,pData.height],
                        title :pData.title,
                        btn:null
                      });

                        var treeOpt = {
                            animate : true,
                            lines : true,
                            url : pData.url,
                            data : pData.data,
                            flatData: pData.flatData,
                            onDblClick : function (node) {
                                window.console && console.log(node);
                                if (pData.justLeaf&&node.children!=null) {return false;};
                                  _self.val(node[pData.value]);
                                   pData.selectedId = node.id;
                                  if (pData.valueId) {$('#'+pData.valueId).val(node.id)};
                                  if (pData.valuePid&&node.pid) {$('#'+pData.valuePid).val(node.pid)};
                                  layer.close(treePop);
                                  pData.onDblClick(node);
                            },
                            onLoadSuccess : function (node,data) {
                                pData.data = data;
                            }
                      }

                        if (!alreadyRenderTree) {
                            $('#ul-Tree-'+rdm).tree(treeOpt);
                            alreadyRenderTree = true;
                        }

                  });

                };

            if (myOpt.type =='grid') {//初始化popGrid
                 _self.click(function() {
                    myOpt.textId = myOpt.textId || this.name;
                    $pop.popGrid(myOpt,this);
                });
            };

          });
      };
      // 下拉框初始化
      if ($(".so-select").length) {//初始化soSelect
        $(".so-select").soSelect();
      }
    },
    /**
     * 统一的表单验证
     */
     validate : function () {
       var me = this;
       $('.btn-easyFormSubmit').bind('click',function() {
           var $btn = $(this);
           var $form = $btn.parents('.form-validate');
           var validate = $form.form("validate");
           var back = false;
           window.console&&console.log(validate);
           if(validate){
             var formData = $T.data($form);//form个性化附加数据
             var loadingIndex = null;//loading容器
             var msg = $btn.attr("msg") || "您确定要提交吗?";//确认框提示信息
             var action = $btn.attr("action") || $form.action;//表单请求地址
             var noconfirm = $btn.attr("noconfirm");//获取不弹窗提示确认，只能为true才不提示
             var formSubmitEvent = me.formSubmitEvent(action,formData,loadingIndex);

             if( noconfirm==='true'){//如果不弹窗提示确认
               $form.form('submit',formSubmitEvent);
             }else{//不弹窗提示确认
               layer.confirm(msg, {
                 icon: 0, title:false,btnAlign: 'c',success: function ($layer) {
                     $layer.find('.layui-layer-btn0').focus();//提交按钮获取焦点
                 }
               }, function(index){
                   layer.close(index);
                   $form.form('submit',formSubmitEvent);
               });
             }

           }
       });

     },
     formSubmitEvent : function (action,formData,loadingIndex) {
       return {
           url: action,
           // iframe: false,
           // ajax : true,
           onSubmit: function(param){
             var callSumbit = true;
             if (formData.beforeCallback){//提交之前事件函数名，多个可用 || 隔开
                 var callName = formData.beforeCallback.split('||');
                 $.each(callName,function (i,v) {
                     callSumbit = window[v]&&window[v](formData);
                     return callSumbit;//为false提前跳出循环
                 });
             }
             // if (formData.beforeCallback) {
             //     callSumbit = window[formData.beforeCallback](formData);
             // };
             loadingIndex = layer.load(0, {shade: false});
             var dataPlus = formData.params ||{};//附加提交表单值
             param = $.extend(param,dataPlus);
             console.log(param);
             if(!callSumbit){layer.close(loadingIndex);};
             return callSumbit;
           },
           success:function(rst){
             if(rst){
               layer.close(loadingIndex);
               try{
                 var rst = eval('(' + rst + ')');
                 parent.window._refreshParent = true;
                 //window.console && console.log(data.callback);
                 if (formData.callback){//提交之后事件函数名，多个可用 || 隔开
                     var callName = formData.callback.split('||');
                     $.each(callName,function (i,v) {
                         window[v]&&window[v](rst,formData);
                     });
                 }
                 if (formData.submitClear)$(formData.submitClear).val("");
                 var msg = (rst.tip == 1 ? rst.msg : (rst.state?"信息提交成功":"信息提交失败"));
                 if (rst.state) {
                   layer.msg(msg,{icon:1});
                   setTimeout(function(){
                     $util.closePop();
                   },400);
                 }else{
                   layer.alert('<p class="red">对不起，提交数据失败！</p>' + msg,{icon: 2, title:false,btnAlign: 'c'});
                 };
               }catch(e){
                 window.console&&console.log(e);
                 layer.alert('<p class="red">对不起，提交数据失败！</p>请检查网络或联系管理员',{icon: 2, title:false,btnAlign: 'c'});
               }
             }
           }
       };
     },
    wdDate: function (cls) {//日期范围选择组件
        cls = cls || '.wd_date';
        if (!$(cls).length) {
        } else {
            var start = $(cls).find("#" + $(cls).attr("data-start"));
            var end = $(cls).find("#" + $(cls).attr("data-end"));
            var target = $($(cls).attr("data-bind"));//关联按钮会触发
            if (end.length == 0)end = start;
            $(".first", cls).click(function () {
                var startDate = new Date(start.val().replace(/-/g, '/'));
                startDate.setDate(1);
                start.val($.fmtDate('yyyy-MM-dd', startDate));
                if (target.length)target.click();
            });
            $(".prev", cls).click(function () {
                var startDate = new Date(start.val().replace(/-/g, '/'));
                startDate.setDate(startDate.getDate() - 1);
                start.val($.fmtDate('yyyy-MM-dd', startDate));
                if (target.length)target.click();
            });
            $(".next", cls).click(function () {
                var endDate = new Date(end.val().replace(/-/g, '/'));
                endDate.setDate(endDate.getDate() + 1);
                end.val($.fmtDate('yyyy-MM-dd', endDate));
                if (target.length)target.click();
            });
            $(".last", cls).click(function () {
                var endDate = new Date(end.val().replace(/-/g, '/'));
                endDate.setMonth(endDate.getMonth() + 1);
                endDate.setDate(0);
                end.val($.fmtDate('yyyy-MM-dd', endDate));
                if (target.length)target.click();
            });
        }
    }
};

$(function () {
    $ff.someMix();//存放比较零碎的
    $ff.validate();
    $ff.search();
    // $ff.wdDate();
});

define("pub", ["jquery.extend","easyui.extend","easyvalidate.extend"], function(){});

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.382 (June 24 2010)
 *
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 *
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
if(!window.SyntaxHighlighter){var SyntaxHighlighter=function(){var a={defaults:{"class-name":"","first-line":1,"pad-line-numbers":true,"highlight":null,"smart-tabs":true,"tab-size":4,"gutter":true,"toolbar":true,"collapse":false,"auto-links":true,"light":false,"wrap-lines":true,"html-script":false},config:{useScriptTags:true,clipboardSwf:null,toolbarItemWidth:16,toolbarItemHeight:16,bloggerMode:false,stripBrs:false,tagName:"pre",strings:{expandSource:"show source",viewSource:"view source",copyToClipboard:"copy to clipboard",copyToClipboardConfirmation:"The code is in your clipboard now",print:"print",help:"?",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:3em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:4em;"><div>version 2.1.382 (June 24 2010)</div><div><a href="http://alexgorbatchev.com" target="_blank" style="color:#0099FF;text-decoration:none;">http://alexgorbatchev.com</a></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#0099FF;text-decoration:none;">donate</a> to keep development active!</div></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2009 Alex Gorbatchev.</div></div></body></html>'},debug:false},vars:{discoveredBrushes:null,spaceWidth:null,printFrame:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:/\/\*[\s\S]*?\*\//gm,singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:/"([^\\"]|\\.)*"/g,multiLineSingleQuotedString:/'([^\\']|\\.)*'/g,xmlComments:/(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,url:/&lt;\w+:\/\/[\w-.\/?%&=@:;]*&gt;|\w+:\/\/[\w-.\/?%&=@:;]*/g,phpScriptTags:{left:/(&lt;|<)\?=?/g,right:/\?(&gt;|>)/g},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{create:function(d){var h=document.createElement("DIV"),b=a.toolbar.items;h.className="toolbar";for(var c in b){var f=b[c],g=new f(d),e=g.create();d.toolbarCommands[c]=g;if(e==null){continue}if(typeof(e)=="string"){e=a.toolbar.createButton(e,d.id,c)}e.className+="item "+c;h.appendChild(e)}return h},createButton:function(f,c,g){var d=document.createElement("a"),i=d.style,e=a.config,h=e.toolbarItemWidth,b=e.toolbarItemHeight;d.href="#"+g;d.title=f;d.highlighterId=c;d.commandName=g;d.innerHTML=f;if(isNaN(h)==false){i.width=h+"px"}if(isNaN(b)==false){i.height=b+"px"}d.onclick=function(j){try{a.toolbar.executeCommand(this,j||window.event,this.highlighterId,this.commandName)}catch(j){a.utils.alert(j.message)}return false};return d},executeCommand:function(f,g,b,e,d){var c=a.vars.highlighters[b],h;if(c==null||(h=c.toolbarCommands[e])==null){return null}return h.execute(f,g,d)},items:{expandSource:function(b){this.create=function(){if(b.getParam("collapse")!=true){return}return a.config.strings.expandSource};this.execute=function(d,e,c){var f=b.div;d.parentNode.removeChild(d);f.className=f.className.replace("collapsed","")}},viewSource:function(b){this.create=function(){return a.config.strings.viewSource};this.execute=function(d,g,c){var f=a.utils.fixInputString(b.originalCode).replace(/</g,"&lt;"),e=a.utils.popup("","_blank",750,400,"location=0, resizable=1, menubar=0, scrollbars=1");f=a.utils.unindent(f);e.document.write("<pre>"+f+"</pre>");e.document.close()}},copyToClipboard:function(d){var e,c,b=d.id;this.create=function(){var g=a.config;if(g.clipboardSwf==null){return null}function l(o){var m="";for(var n in o){m+="<param name='"+n+"' value='"+o[n]+"'/>"}return m}function f(o){var m="";for(var n in o){m+=" "+n+"='"+o[n]+"'"}return m}var k={width:g.toolbarItemWidth,height:g.toolbarItemHeight,id:b+"_clipboard",type:"application/x-shockwave-flash",title:a.config.strings.copyToClipboard},j={allowScriptAccess:"always",wmode:"transparent",flashVars:"highlighterId="+b,menu:"false"},i=g.clipboardSwf,h;if(/msie/i.test(navigator.userAgent)){h="<object"+f({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"})+f(k)+">"+l(j)+l({movie:i})+"</object>"}else{h="<embed"+f(k)+f(j)+f({src:i})+"/>"}e=document.createElement("div");e.innerHTML=h;return e};this.execute=function(g,i,f){var j=f.command;switch(j){case"get":var h=a.utils.unindent(a.utils.fixInputString(d.originalCode).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));
    if(window.clipboardData){window.clipboardData.setData("text",h)}else{return a.utils.unindent(h)}case"ok":a.utils.alert(a.config.strings.copyToClipboardConfirmation);break;case"error":a.utils.alert(f.message);break}}},printSource:function(b){this.create=function(){return a.config.strings.print};this.execute=function(e,g,d){var f=document.createElement("IFRAME"),h=null;if(a.vars.printFrame!=null){document.body.removeChild(a.vars.printFrame)}a.vars.printFrame=f;f.style.cssText="position:absolute;width:0px;height:0px;left:-500px;top:-500px;";document.body.appendChild(f);h=f.contentWindow.document;c(h,window.document);h.write('<div class="'+b.div.className.replace("collapsed","")+' printing">'+b.div.innerHTML+"</div>");h.close();f.contentWindow.focus();f.contentWindow.print();function c(j,m){var k=m.getElementsByTagName("link");for(var l=0;l<k.length;l++){if(k[l].rel.toLowerCase()=="stylesheet"&&/shCore\.css$/.test(k[l].href)){j.write('<link type="text/css" rel="stylesheet" href="'+k[l].href+'"></link>')}}}}},about:function(b){this.create=function(){return a.config.strings.help};this.execute=function(c,e){var d=a.utils.popup("","_blank",500,250,"scrollbars=0"),f=d.document;f.write(a.config.strings.aboutDialog);f.close();d.focus()}}}},utils:{indexOf:function(e,b,d){d=Math.max(d||0,0);for(var c=d;c<e.length;c++){if(e[c]==b){return c}}return -1},guid:function(b){return b+Math.round(Math.random()*1000000).toString()},merge:function(e,d){var b={},c;for(c in e){b[c]=e[c]}for(c in d){b[c]=d[c]}return b},toBoolean:function(b){switch(b){case"true":return true;case"false":return false}return b},popup:function(f,e,g,c,d){var b=(screen.width-g)/2,i=(screen.height-c)/2;d+=", left="+b+", top="+i+", width="+g+", height="+c;d=d.replace(/^,/,"");var h=window.open(f,e,d);h.focus();return h},addEvent:function(d,b,c){if(d.attachEvent){d["e"+b+c]=c;d[b+c]=function(){d["e"+b+c](window.event)};d.attachEvent("on"+b,d[b+c])}else{d.addEventListener(b,c,false)}},alert:function(b){alert(a.config.strings.alert+b)},findBrush:function(f,h){var g=a.vars.discoveredBrushes,b=null;if(g==null){g={};for(var d in a.brushes){var c=a.brushes[d].aliases;if(c==null){continue}a.brushes[d].name=d.toLowerCase();for(var e=0;e<c.length;e++){g[c[e]]=d}}a.vars.discoveredBrushes=g}b=a.brushes[g[f]];if(b==null&&h!=false){a.utils.alert(a.config.strings.noBrush+f)}return b},eachLine:function(d,e){var b=d.split("\n");for(var c=0;c<b.length;c++){b[c]=e(b[c])}return b.join("\n")},trimFirstAndLastLines:function(b){return b.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"")},parseParams:function(h){var d,c={},e=new XRegExp("^\\[(?<values>(.*?))\\]$"),f=new XRegExp("(?<name>[\\w-]+)"+"\\s*:\\s*"+"(?<value>"+"[\\w-%#]+|"+"\\[.*?\\]|"+'".*?"|'+"'.*?'"+")\\s*;?","g");while((d=f.exec(h))!=null){var g=d.value.replace(/^['"]|['"]$/g,"");if(g!=null&&e.test(g)){var b=e.exec(g);g=b.values.length>0?b.values.split(/\s*,\s*/):[]}c[d.name]=g}return c},decorate:function(c,b){if(c==null||c.length==0||c=="\n"){return c}c=c.replace(/</g,"&lt;");c=c.replace(/ {2,}/g,function(d){var e="";for(var f=0;f<d.length-1;f++){e+="&nbsp;"}return e+" "});if(b!=null){c=a.utils.eachLine(c,function(d){if(d.length==0){return""}var e="";d=d.replace(/^(&nbsp;| )+/,function(f){e=f;return""});if(d.length==0){return e}return e+'<code class="'+b+'">'+d+"</code>"})}return c},padNumber:function(d,c){var b=d.toString();while(b.length<c){b="0"+b}return b},measureSpace:function(){var c=document.createElement("div"),h,j=0,f=document.body,d=a.utils.guid("measureSpace"),i='<div class="',g="</div>",e="</span>";c.innerHTML=i+'syntaxhighlighter">'+i+'lines">'+i+'line">'+i+"content"+'"><span class="block"><span id="'+d+'">&nbsp;'+e+e+g+g+g+g;f.appendChild(c);h=document.getElementById(d);if(/opera/i.test(navigator.userAgent)){var b=window.getComputedStyle(h,null);j=parseInt(b.getPropertyValue("width"))}else{j=h.offsetWidth}f.removeChild(c);return j},processTabs:function(d,e){var c="";for(var b=0;b<e;b++){c+=" "}return d.replace(/\t/g,c)},processSmartTabs:function(f,g){var b=f.split("\n"),e="\t",c="";for(var d=0;d<50;d++){c+="                    "}function h(i,k,j){return i.substr(0,k)+c.substr(0,j)+i.substr(k+1,i.length)}f=a.utils.eachLine(f,function(i){if(i.indexOf(e)==-1){return i}var k=0;while((k=i.indexOf(e))!=-1){var j=g-k%g;i=h(i,k,j)}return i});return f},fixInputString:function(c){var b=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;if(a.config.bloggerMode==true){c=c.replace(b,"\n")}if(a.config.stripBrs==true){c=c.replace(b,"")}return c},trim:function(b){return b.replace(/^\s+|\s+$/g,"")},unindent:function(j){var c=a.utils.fixInputString(j).split("\n"),h=new Array(),f=/^\s*/,e=1000;for(var d=0;d<c.length&&e>0;d++){var b=c[d];if(a.utils.trim(b).length==0){continue}var g=f.exec(b);if(g==null){return j}e=Math.min(g[0].length,e)}if(e>0){for(var d=0;d<c.length;d++){c[d]=c[d].substr(e)}}return c.join("\n")},matchesSortCallback:function(c,b){if(c.index<b.index){return -1}else{if(c.index>b.index){return 1}else{if(c.length<b.length){return -1}else{if(c.length>b.length){return 1
}}}}return 0},getMatches:function(f,g){function h(i,j){return[new a.Match(i[0],i.index,j.css)]}var d=0,c=null,b=[],e=g.func?g.func:h;while((c=g.regex.exec(f))!=null){b=b.concat(e(c,g))}return b},processUrls:function(d){var b="&lt;",c="&gt;";return d.replace(a.regexLib.url,function(e){var g="",f="";if(e.indexOf(b)==0){f=b;e=e.substring(b.length)}if(e.indexOf(c)==e.length-c.length){e=e.substring(0,e.length-c.length);g=c}return f+'<a href="'+e+'">'+e+"</a>"+g})},getSyntaxHighlighterScriptTags:function(){var c=document.getElementsByTagName("script"),b=[];for(var d=0;d<c.length;d++){if(c[d].type=="syntaxhighlighter"){b.push(c[d])}}return b},stripCData:function(c){var d="<![CDATA[",b="]]>",f=a.utils.trim(c),e=false;if(f.indexOf(d)==0){f=f.substring(d.length);e=true}if(f.indexOf(b)==f.length-b.length){f=f.substring(0,f.length-b.length);e=true}return e?f:c}},highlight:function(h,f){function e(s){var q=[];for(var r=0;r<s.length;r++){q.push(s[r])}return q}var b=f?[f]:e(document.getElementsByTagName(a.config.tagName)),j="innerHTML",n=null,l=a.config;if(l.useScriptTags){b=b.concat(a.utils.getSyntaxHighlighterScriptTags())}if(b.length===0){return}for(var g=0;g<b.length;g++){var k=b[g],d=a.utils.parseParams(k.className),o,c,p;d=a.utils.merge(h,d);o=d["brush"];if(o==null){continue}if(d["html-script"]=="true"||a.defaults["html-script"]==true){n=new a.HtmlScript(o);o="htmlscript"}else{var m=a.utils.findBrush(o);if(m){o=m.name;n=new m()}else{continue}}c=k[j];if(l.useScriptTags){c=a.utils.stripCData(c)}d["brush-name"]=o;n.highlight(c,d);p=n.div;if(a.config.debug){p=document.createElement("textarea");p.value=n.div.innerHTML;p.style.width="70em";p.style.height="30em"}k.parentNode.replaceChild(p,k)}},all:function(b){a.utils.addEvent(window,"load",function(){a.highlight(b)})}};a.Match=function(d,b,c){this.value=d;this.index=b;this.length=d.length;this.css=c;this.brushName=null};a.Match.prototype.toString=function(){return this.value};a.HtmlScript=function(b){var d=a.utils.findBrush(b),c,h=new a.brushes.Xml(),g=null;if(d==null){return}c=new d();this.xmlBrush=h;if(c.htmlScript==null){a.utils.alert(a.config.strings.brushNotHtmlScript+b);return}h.regexList.push({regex:c.htmlScript.code,func:f});function e(k,l){for(var i=0;i<k.length;i++){k[i].index+=l}}function f(r,l){var k=r.code,q=[],p=c.regexList,n=r.index+r.left.length,s=c.htmlScript,t;for(var o=0;o<p.length;o++){t=a.utils.getMatches(k,p[o]);e(t,n);q=q.concat(t)}if(s.left!=null&&r.left!=null){t=a.utils.getMatches(r.left,s.left);e(t,r.index);q=q.concat(t)}if(s.right!=null&&r.right!=null){t=a.utils.getMatches(r.right,s.right);e(t,r.index+r[0].lastIndexOf(r.right));q=q.concat(t)}for(var m=0;m<q.length;m++){q[m].brushName=d.name}return q}};a.HtmlScript.prototype.highlight=function(b,c){this.xmlBrush.highlight(b,c);this.div=this.xmlBrush.div};a.Highlighter=function(){};a.Highlighter.prototype={getParam:function(d,c){var b=this.params[d];return a.utils.toBoolean(b==null?c:b)},create:function(b){return document.createElement(b)},findMatches:function(e,d){var b=[];if(e!=null){for(var c=0;c<e.length;c++){if(typeof(e[c])=="object"){b=b.concat(a.utils.getMatches(d,e[c]))}}}return b.sort(a.utils.matchesSortCallback)},removeNestedMatches:function(){var f=this.matches;for(var e=0;e<f.length;e++){if(f[e]===null){continue}var b=f[e],d=b.index+b.length;for(var c=e+1;c<f.length&&f[e]!==null;c++){var g=f[c];if(g===null){continue}else{if(g.index>d){break}else{if(g.index==b.index&&g.length>b.length){this.matches[e]=null}else{if(g.index>=b.index&&g.index<d){this.matches[c]=null}}}}}}},createDisplayLines:function(b){var n=b.split("\n"),l=parseInt(this.getParam("first-line")),h=this.getParam("pad-line-numbers"),m=this.getParam("highlight",[]),f=this.getParam("gutter");b="";if(h==true){h=(l+n.length-1).toString().length}else{if(isNaN(h)==true){h=0}}for(var g=0;g<n.length;g++){var o=n[g],c=/^(&nbsp;|\s)+/.exec(o),k="alt"+(g%2==0?1:2),d=a.utils.padNumber(l+g,h),e=a.utils.indexOf(m,(l+g).toString())!=-1,j=null;if(c!=null){j=c[0].toString();o=o.substr(j.length)}o=a.utils.trim(o);if(o.length==0){o="&nbsp;"}if(e){k+=" highlighted"}b+='<div class="line '+k+'">'+"<table>"+"<tr>"+(f?'<td class="number"><code>'+d+"</code></td>":"")+'<td class="content">'+(j!=null?'<code class="spaces">'+j.replace(" ","&nbsp;")+"</code>":"")+o+"</td>"+"</tr>"+"</table>"+"</div>"}return b},processMatches:function(b,h){var j=0,l="",c=a.utils.decorate,k=this.getParam("brush-name","");function e(m){var i=m?(m.brushName||k):k;return i?i+" ":""}for(var f=0;f<h.length;f++){var g=h[f],d;if(g===null||g.length===0){continue}d=e(g);l+=c(b.substr(j,g.index-j),d+"plain")+c(g.value,d+g.css);j=g.index+g.length}l+=c(b.substr(j),e()+"plain");return l},highlight:function(c,e){var j=a.config,k=a.vars,b,g,h,d="important";this.params={};this.div=null;this.lines=null;this.code=null;this.bar=null;this.toolbarCommands={};this.id=a.utils.guid("highlighter_");k.highlighters[this.id]=this;if(c===null){c=""}this.params=a.utils.merge(a.defaults,e||{});if(this.getParam("light")==true){this.params.toolbar=this.params.gutter=false
}this.div=b=this.create("DIV");this.lines=this.create("DIV");this.lines.className="lines";className="syntaxhighlighter";b.id=this.id;if(this.getParam("collapse")){className+=" collapsed"}if(this.getParam("gutter")==false){className+=" nogutter"}if(this.getParam("wrap-lines")==false){this.lines.className+=" no-wrap"}className+=" "+this.getParam("class-name");className+=" "+this.getParam("brush-name");b.className=className;this.originalCode=c;this.code=a.utils.trimFirstAndLastLines(c).replace(/\r/g," ");h=this.getParam("tab-size");this.code=this.getParam("smart-tabs")==true?a.utils.processSmartTabs(this.code,h):a.utils.processTabs(this.code,h);this.code=a.utils.unindent(this.code);if(this.getParam("toolbar")){this.bar=this.create("DIV");this.bar.className="bar";this.bar.appendChild(a.toolbar.create(this));b.appendChild(this.bar);var i=this.bar;function f(){i.className="bar"}b.onmouseover=function(){f();i.className="bar show"};b.onmouseout=function(){f()}}b.appendChild(this.lines);this.matches=this.findMatches(this.regexList,this.code);this.removeNestedMatches();c=this.processMatches(this.code,this.matches);c=this.createDisplayLines(a.utils.trim(c));if(this.getParam("auto-links")){c=a.utils.processUrls(c)}this.lines.innerHTML=c},getKeywords:function(b){b=b.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|");return"\\b(?:"+b+")\\b"},forHtmlScript:function(b){this.htmlScript={left:{regex:b.left,css:"script"},right:{regex:b.right,css:"script"},code:new XRegExp("(?<left>"+b.left.source+")"+"(?<code>.*?)"+"(?<right>"+b.right.source+")","sgi")}}};return a}()}if(!window.XRegExp){(function(){var e={exec:RegExp.prototype.exec,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},d={part:/(?:[^\\([#\s.]+|\\(?!k<[\w$]+>|[pP]{[^}]+})[\S\s]?|\((?=\?(?!#|<[\w$]+>)))+|(\()(?:\?(?:(#)[^)]*\)|<([$\w]+)>))?|\\(?:k<([\w$]+)>|[pP]{([^}]+)})|(\[\^?)|([\S\s])/g,replaceVar:/(?:[^$]+|\$(?![1-9$&`']|{[$\w]+}))+|\$(?:([1-9]\d*|[$&`'])|{([$\w]+)})/g,extended:/^(?:\s+|#.*)+/,quantifier:/^(?:[?*+]|{\d+(?:,\d*)?})/,classLeft:/&&\[\^?/g,classRight:/]/g},b=function(j,g,h){for(var f=h||0;f<j.length;f++){if(j[f]===g){return f}}return -1},c=/()??/.exec("")[1]!==undefined,a={};XRegExp=function(o,i){if(o instanceof RegExp){if(i!==undefined){throw TypeError("can't supply flags when constructing one RegExp from another")}return o.addFlags()}var i=i||"",f=i.indexOf("s")>-1,k=i.indexOf("x")>-1,p=false,r=[],h=[],g=d.part,l,j,n,m,q;g.lastIndex=0;while(l=e.exec.call(g,o)){if(l[2]){if(!d.quantifier.test(o.slice(g.lastIndex))){h.push("(?:)")}}else{if(l[1]){r.push(l[3]||null);if(l[3]){p=true}h.push("(")}else{if(l[4]){m=b(r,l[4]);h.push(m>-1?"\\"+(m+1)+(isNaN(o.charAt(g.lastIndex))?"":"(?:)"):l[0])}else{if(l[5]){h.push(a.unicode?a.unicode.get(l[5],l[0].charAt(1)==="P"):l[0])}else{if(l[6]){if(o.charAt(g.lastIndex)==="]"){h.push(l[6]==="["?"(?!)":"[\\S\\s]");g.lastIndex++}else{j=XRegExp.matchRecursive("&&"+o.slice(l.index),d.classLeft,d.classRight,"",{escapeChar:"\\"})[0];h.push(l[6]+j+"]");g.lastIndex+=j.length+1}}else{if(l[7]){if(f&&l[7]==="."){h.push("[\\S\\s]")}else{if(k&&d.extended.test(l[7])){n=e.exec.call(d.extended,o.slice(g.lastIndex-1))[0].length;if(!d.quantifier.test(o.slice(g.lastIndex-1+n))){h.push("(?:)")}g.lastIndex+=n-1}else{h.push(l[7])}}}else{h.push(l[0])}}}}}}}q=RegExp(h.join(""),e.replace.call(i,/[sx]+/g,""));q._x={source:o,captureNames:p?r:null};return q};XRegExp.addPlugin=function(f,g){a[f]=g};RegExp.prototype.exec=function(k){var h=e.exec.call(this,k),g,j,f;if(h){if(c&&h.length>1){f=new RegExp("^"+this.source+"$(?!\\s)",this.getNativeFlags());e.replace.call(h[0],f,function(){for(j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){h[j]=undefined}}})}if(this._x&&this._x.captureNames){for(j=1;j<h.length;j++){g=this._x.captureNames[j-1];if(g){h[g]=h[j]}}}if(this.global&&this.lastIndex>(h.index+h[0].length)){this.lastIndex--}}return h}})()}RegExp.prototype.getNativeFlags=function(){return(this.global?"g":"")+(this.ignoreCase?"i":"")+(this.multiline?"m":"")+(this.extended?"x":"")+(this.sticky?"y":"")};RegExp.prototype.addFlags=function(a){var b=new XRegExp(this.source,(a||"")+this.getNativeFlags());if(this._x){b._x={source:this._x.source,captureNames:this._x.captureNames?this._x.captureNames.slice(0):null}}return b};RegExp.prototype.call=function(a,b){return this.exec(b)};RegExp.prototype.apply=function(b,a){return this.exec(a[0])};XRegExp.cache=function(c,a){var b="/"+c+"/"+(a||"");return XRegExp.cache[b]||(XRegExp.cache[b]=new XRegExp(c,a))};XRegExp.escape=function(a){return a.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")};XRegExp.matchRecursive=function(p,d,s,f,b){var b=b||{},v=b.escapeChar,k=b.valueNames,f=f||"",q=f.indexOf("g")>-1,c=f.indexOf("i")>-1,h=f.indexOf("m")>-1,u=f.indexOf("y")>-1,f=f.replace(/y/g,""),d=d instanceof RegExp?(d.global?d:d.addFlags("g")):new XRegExp(d,"g"+f),s=s instanceof RegExp?(s.global?s:s.addFlags("g")):new XRegExp(s,"g"+f),i=[],a=0,j=0,n=0,l=0,m,e,o,r,g,t;if(v){if(v.length>1){throw SyntaxError("can't supply more than one escape character")
}if(h){throw TypeError("can't supply escape character when using the multiline flag")}g=XRegExp.escape(v);t=new RegExp("^(?:"+g+"[\\S\\s]|(?:(?!"+d.source+"|"+s.source+")[^"+g+"])+)+",c?"i":"")}while(true){d.lastIndex=s.lastIndex=n+(v?(t.exec(p.slice(n))||[""])[0].length:0);o=d.exec(p);r=s.exec(p);if(o&&r){if(o.index<=r.index){r=null}else{o=null}}if(o||r){j=(o||r).index;n=(o?d:s).lastIndex}else{if(!a){break}}if(u&&!a&&j>l){break}if(o){if(!a++){m=j;e=n}}else{if(r&&a){if(!--a){if(k){if(k[0]&&m>l){i.push([k[0],p.slice(l,m),l,m])}if(k[1]){i.push([k[1],p.slice(m,e),m,e])}if(k[2]){i.push([k[2],p.slice(e,j),e,j])}if(k[3]){i.push([k[3],p.slice(j,n),j,n])}}else{i.push(p.slice(e,j))}l=n;if(!q){break}}}else{d.lastIndex=s.lastIndex=0;throw Error("subject data contains unbalanced delimiters")}}if(j===n){n++}}if(q&&!u&&k&&k[0]&&p.length>l){i.push([k[0],p.slice(l),l,p.length])}d.lastIndex=s.lastIndex=0;return i};SyntaxHighlighter.brushes.AS3=function(){var b="class interface function package";var a="-Infinity ...rest Array as AS3 Boolean break case catch const continue Date decodeURI "+"decodeURIComponent default delete do dynamic each else encodeURI encodeURIComponent escape "+"extends false final finally flash_proxy for get if implements import in include Infinity "+"instanceof int internal is isFinite isNaN isXMLName label namespace NaN native new null "+"Null Number Object object_proxy override parseFloat parseInt private protected public "+"return set static String super switch this throw true try typeof uint undefined unescape "+"use void while with";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"color3"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"},{regex:new RegExp("var","gm"),css:"variable"},{regex:new RegExp("trace","gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags)};SyntaxHighlighter.brushes.AS3.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.AS3.aliases=["actionscript3","as3"];SyntaxHighlighter.brushes.Bash=function(){var b="if fi then elif else for do done until while break continue case function return in eq ne gt lt ge le";var a="alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot"+"cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df "+"diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval "+"exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format "+"free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig "+"import install join kill less let ln local locate logname logout look lpc lpr lprint "+"lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools "+"mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap "+"printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice "+"remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown "+"sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time "+"times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias "+"uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir "+"vi watch wc whereis which who whoami Wget xargs yes";this.findMatches=function(d,c){c=c.replace(/&gt;/g,">").replace(/&lt;/g,"<");this.code=c;return SyntaxHighlighter.Highlighter.prototype.findMatches.apply(this,[d,c])};this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"functions"}]};SyntaxHighlighter.brushes.Bash.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Bash.aliases=["bash","shell"];SyntaxHighlighter.brushes.ColdFusion=function(){var b="Abs ACos AddSOAPRequestHeader AddSOAPResponseHeader AjaxLink AjaxOnLoad ArrayAppend ArrayAvg ArrayClear ArrayDeleteAt "+"ArrayInsertAt ArrayIsDefined ArrayIsEmpty ArrayLen ArrayMax ArrayMin ArraySet ArraySort ArraySum ArraySwap ArrayToList "+"Asc ASin Atn BinaryDecode BinaryEncode BitAnd BitMaskClear BitMaskRead BitMaskSet BitNot BitOr BitSHLN BitSHRN BitXor "+"Ceiling CharsetDecode CharsetEncode Chr CJustify Compare CompareNoCase Cos CreateDate CreateDateTime CreateObject "+"CreateODBCDate CreateODBCDateTime CreateODBCTime CreateTime CreateTimeSpan CreateUUID DateAdd DateCompare DateConvert "+"DateDiff DateFormat DatePart Day DayOfWeek DayOfWeekAsString DayOfYear DaysInMonth DaysInYear DE DecimalFormat DecrementValue "+"Decrypt DecryptBinary DeleteClientVariable DeserializeJSON DirectoryExists DollarFormat DotNetToCFType Duplicate Encrypt "+"EncryptBinary Evaluate Exp ExpandPath FileClose FileCopy FileDelete FileExists FileIsEOF FileMove FileOpen FileRead "+"FileReadBinary FileReadLine FileSetAccessMode FileSetAttribute FileSetLastModified FileWrite Find FindNoCase FindOneOf "+"FirstDayOfMonth Fix FormatBaseN GenerateSecretKey GetAuthUser GetBaseTagData GetBaseTagList GetBaseTemplatePath "+"GetClientVariablesList GetComponentMetaData GetContextRoot GetCurrentTemplatePath GetDirectoryFromPath GetEncoding "+"GetException GetFileFromPath GetFileInfo GetFunctionList GetGatewayHelper GetHttpRequestData GetHttpTimeString "+"GetK2ServerDocCount GetK2ServerDocCountLimit GetLocale GetLocaleDisplayName GetLocalHostIP GetMetaData GetMetricData "+"GetPageContext GetPrinterInfo GetProfileSections GetProfileString GetReadableImageFormats GetSOAPRequest GetSOAPRequestHeader "+"GetSOAPResponse GetSOAPResponseHeader GetTempDirectory GetTempFile GetTemplatePath GetTickCount GetTimeZoneInfo GetToken "+"GetUserRoles GetWriteableImageFormats Hash Hour HTMLCodeFormat HTMLEditFormat IIf ImageAddBorder ImageBlur ImageClearRect "+"ImageCopy ImageCrop ImageDrawArc ImageDrawBeveledRect ImageDrawCubicCurve ImageDrawLine ImageDrawLines ImageDrawOval "+"ImageDrawPoint ImageDrawQuadraticCurve ImageDrawRect ImageDrawRoundRect ImageDrawText ImageFlip ImageGetBlob ImageGetBufferedImage "+"ImageGetEXIFTag ImageGetHeight ImageGetIPTCTag ImageGetWidth ImageGrayscale ImageInfo ImageNegative ImageNew ImageOverlay ImagePaste "+"ImageRead ImageReadBase64 ImageResize ImageRotate ImageRotateDrawingAxis ImageScaleToFit ImageSetAntialiasing ImageSetBackgroundColor "+"ImageSetDrawingColor ImageSetDrawingStroke ImageSetDrawingTransparency ImageSharpen ImageShear ImageShearDrawingAxis ImageTranslate "+"ImageTranslateDrawingAxis ImageWrite ImageWriteBase64 ImageXORDrawingMode IncrementValue InputBaseN Insert Int IsArray IsBinary "+"IsBoolean IsCustomFunction IsDate IsDDX IsDebugMode IsDefined IsImage IsImageFile IsInstanceOf IsJSON IsLeapYear IsLocalHost "+"IsNumeric IsNumericDate IsObject IsPDFFile IsPDFObject IsQuery IsSimpleValue IsSOAPRequest IsStruct IsUserInAnyRole IsUserInRole "+"IsUserLoggedIn IsValid IsWDDX IsXML IsXmlAttribute IsXmlDoc IsXmlElem IsXmlNode IsXmlRoot JavaCast JSStringFormat LCase Left Len "+"ListAppend ListChangeDelims ListContains ListContainsNoCase ListDeleteAt ListFind ListFindNoCase ListFirst ListGetAt ListInsertAt "+"ListLast ListLen ListPrepend ListQualify ListRest ListSetAt ListSort ListToArray ListValueCount ListValueCountNoCase LJustify Log "+"Log10 LSCurrencyFormat LSDateFormat LSEuroCurrencyFormat LSIsCurrency LSIsDate LSIsNumeric LSNumberFormat LSParseCurrency LSParseDateTime "+"LSParseEuroCurrency LSParseNumber LSTimeFormat LTrim Max Mid Min Minute Month MonthAsString Now NumberFormat ParagraphFormat ParseDateTime "+"Pi PrecisionEvaluate PreserveSingleQuotes Quarter QueryAddColumn QueryAddRow QueryConvertForGrid QueryNew QuerySetCell QuotedValueList Rand "+"Randomize RandRange REFind REFindNoCase ReleaseComObject REMatch REMatchNoCase RemoveChars RepeatString Replace ReplaceList ReplaceNoCase "+"REReplace REReplaceNoCase Reverse Right RJustify Round RTrim Second SendGatewayMessage SerializeJSON SetEncoding SetLocale SetProfileString "+"SetVariable Sgn Sin Sleep SpanExcluding SpanIncluding Sqr StripCR StructAppend StructClear StructCopy StructCount StructDelete StructFind "+"StructFindKey StructFindValue StructGet StructInsert StructIsEmpty StructKeyArray StructKeyExists StructKeyList StructKeyList StructNew "+"StructSort StructUpdate Tan TimeFormat ToBase64 ToBinary ToScript ToString Trim UCase URLDecode URLEncodedFormat URLSessionFormat Val "+"ValueList VerifyClient Week Wrap Wrap WriteOutput XmlChildPos XmlElemNew XmlFormat XmlGetNodeType XmlNew XmlParse XmlSearch XmlTransform "+"XmlValidate Year YesNoFormat";
    var c="cfabort cfajaximport cfajaxproxy cfapplet cfapplication cfargument cfassociate cfbreak cfcache cfcalendar "+"cfcase cfcatch cfchart cfchartdata cfchartseries cfcol cfcollection cfcomponent cfcontent cfcookie cfdbinfo "+"cfdefaultcase cfdirectory cfdiv cfdocument cfdocumentitem cfdocumentsection cfdump cfelse cfelseif cferror "+"cfexchangecalendar cfexchangeconnection cfexchangecontact cfexchangefilter cfexchangemail cfexchangetask "+"cfexecute cfexit cffeed cffile cfflush cfform cfformgroup cfformitem cfftp cffunction cfgrid cfgridcolumn "+"cfgridrow cfgridupdate cfheader cfhtmlhead cfhttp cfhttpparam cfif cfimage cfimport cfinclude cfindex "+"cfinput cfinsert cfinterface cfinvoke cfinvokeargument cflayout cflayoutarea cfldap cflocation cflock cflog "+"cflogin cfloginuser cflogout cfloop cfmail cfmailparam cfmailpart cfmenu cfmenuitem cfmodule cfNTauthenticate "+"cfobject cfobjectcache cfoutput cfparam cfpdf cfpdfform cfpdfformparam cfpdfparam cfpdfsubform cfpod cfpop "+"cfpresentation cfpresentationslide cfpresenter cfprint cfprocessingdirective cfprocparam cfprocresult "+"cfproperty cfquery cfqueryparam cfregistry cfreport cfreportparam cfrethrow cfreturn cfsavecontent cfschedule "+"cfscript cfsearch cfselect cfset cfsetting cfsilent cfslider cfsprydataset cfstoredproc cfswitch cftable "+"cftextarea cfthread cfthrow cftimer cftooltip cftrace cftransaction cftree cftreeitem cftry cfupdate cfwddx "+"cfwindow cfxml cfzip cfzipparam";var a="all and any between cross in join like not null or outer some";this.regexList=[{regex:new RegExp("--(.*)$","gm"),css:"comments"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"keyword"}]};SyntaxHighlighter.brushes.ColdFusion.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.ColdFusion.aliases=["coldfusion","cf"];SyntaxHighlighter.brushes.Cpp=function(){var c="ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR "+"DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH "+"HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP "+"HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY "+"HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT "+"HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE "+"LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF "+"LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR "+"LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR "+"PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT "+"PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 "+"POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR "+"PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 "+"PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT "+"SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG "+"ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM "+"char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t "+"clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS "+"FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t "+"__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t "+"jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler "+"sig_atomic_t size_t _stat __stat64 _stati64 terminate_function "+"time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf "+"va_list wchar_t wctrans_t wctype_t wint_t signed";var a="break case catch class const __finally __exception __try "+"const_cast continue private public protected __declspec "+"default delete deprecated dllexport dllimport do dynamic_cast "+"else enum explicit extern if for friend goto inline "+"mutable naked namespace new noinline noreturn nothrow "+"register reinterpret_cast return selectany "+"sizeof static static_cast struct switch template this "+"thread throw true false try typedef typeid typename union "+"using uuid virtual void volatile whcar_t while";var b="assert isalnum isalpha iscntrl isdigit isgraph islower isprint"+"ispunct isspace isupper isxdigit tolower toupper errno localeconv "+"setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod "+"frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf "+"longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start "+"clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen "+"fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell "+"fwrite getc getchar gets perror printf putc putchar puts remove "+"rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam "+"ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol "+"bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs "+"mbtowc qsort rand realloc srand strtod strtol strtoul system "+"wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr "+"strcmp strcoll strcpy strcspn strerror strlen strncat strncmp "+"strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime "+"clock ctime difftime gmtime localtime mktime strftime time";
    this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^ *#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"color1 bold"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"functions bold"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword bold"}]};SyntaxHighlighter.brushes.Cpp.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Cpp.aliases=["cpp","c"];SyntaxHighlighter.brushes.CSharp=function(){var b="abstract as base bool break byte case catch char checked class const "+"continue decimal default delegate do double else enum event explicit "+"extern false finally fixed float for foreach get goto if implicit in int "+"interface internal is lock long namespace new null object operator out "+"override params private protected public readonly ref return sbyte sealed set "+"short sizeof stackalloc static string struct switch this throw true try "+"typeof uint ulong unchecked unsafe ushort using virtual void while";function a(c,e){var d=(c[0].indexOf("///")==0)?"color1":"comments";return[new SyntaxHighlighter.Match(c[0],c.index,d)]}this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,func:a},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:/@"(?:[^"]|"")*"/g,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"},{regex:/\bpartial(?=\s+(?:class|interface|struct)\b)/g,css:"keyword"},{regex:/\byield(?=\s+(?:return|break)\b)/g,css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.CSharp.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.CSharp.aliases=["c#","c-sharp","csharp"];SyntaxHighlighter.brushes.CSS=function(){function a(f){return"\\b([a-z_]|)"+f.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b"}function c(f){return"\\b"+f.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b"}var d="ascent azimuth background-attachment background-color background-image background-position "+"background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top "+"border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color "+"border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width "+"border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color "+"content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display "+"elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font "+"height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top "+"margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans "+"outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page "+"page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position "+"quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress "+"table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em "+"vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index";var b="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder "+"both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed "+"continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double "+"embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia "+"gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic "+"justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha "+"lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower "+"navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset "+"outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side "+"rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow "+"small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize "+"table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal "+"text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin "+"upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow";
    var e="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";this.regexList=[{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:"value"},{regex:/!important/g,css:"color3"},{regex:new RegExp(a(d),"gm"),css:"keyword"},{regex:new RegExp(c(b),"g"),css:"value"},{regex:new RegExp(this.getKeywords(e),"g"),css:"color1"}];this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi})};SyntaxHighlighter.brushes.CSS.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.CSS.aliases=["css"];SyntaxHighlighter.brushes.Delphi=function(){var a="abs addr and ansichar ansistring array as asm begin boolean byte cardinal "+"case char class comp const constructor currency destructor div do double "+"downto else end except exports extended false file finalization finally "+"for function goto if implementation in inherited int64 initialization "+"integer interface is label library longint longword mod nil not object "+"of on or packed pansichar pansistring pchar pcurrency pdatetime pextended "+"pint64 pointer private procedure program property pshortstring pstring "+"pvariant pwidechar pwidestring protected public published raise real real48 "+"record repeat set shl shortint shortstring shr single smallint string then "+"threadvar to true try type unit until uses val var varirnt while widechar "+"widestring with word write writeln xor";this.regexList=[{regex:/\(\*[\s\S]*?\*\)/gm,css:"comments"},{regex:/{(?!\$)[\s\S]*?}/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\{\$[a-zA-Z]+ .+\}/g,css:"color1"},{regex:/\b[\d\.]+\b/g,css:"value"},{regex:/\$[a-zA-Z0-9]+\b/g,css:"value"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"keyword"}]};SyntaxHighlighter.brushes.Delphi.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Delphi.aliases=["delphi","pascal","pas"];SyntaxHighlighter.brushes.Erlang=function(){var a="after and andalso band begin bnot bor bsl bsr bxor "+"case catch cond div end fun if let not of or orelse "+"query receive rem try when xor"+" module export import define";this.regexList=[{regex:new RegExp("[A-Z][A-Za-z0-9_]+","g"),css:"constants"},{regex:new RegExp("\\%.+","gm"),css:"comments"},{regex:new RegExp("\\?[A-Za-z0-9_]+","g"),css:"preprocessor"},{regex:new RegExp("[a-z0-9_]+:[a-z0-9_]+","g"),css:"functions"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}]};SyntaxHighlighter.brushes.Erlang.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Erlang.aliases=["erl","erlang"];SyntaxHighlighter.brushes.Groovy=function(){var d="as assert break case catch class continue def default do else extends finally "+"if in implements import instanceof interface new package property return switch "+"throw throws try while public protected private static";var c="void boolean byte char short int long float double";var b="null";var a="allProperties count get size "+"collect each eachProperty eachPropertyName eachWithIndex find findAll "+"findIndexOf grep inject max min reverseEach sort "+"asImmutable asSynchronized flatten intersect join pop reverse subMap toList "+"padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize "+"eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText "+"splitEachLine withReader append encodeBase64 decodeBase64 filterLine "+"transformChar transformLine withOutputStream withPrintWriter withStream "+"withStreams withWriter withWriterAppend write writeLine "+"dump inspect invokeMethod print println step times upto use waitForOrKill "+"getText";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/""".*"""/g,css:"string"},{regex:new RegExp("\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b","gi"),css:"value"},{regex:new RegExp(this.getKeywords(d),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"color1"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"constants"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"functions"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Groovy.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Groovy.aliases=["groovy"];SyntaxHighlighter.brushes.Java=function(){var a="abstract assert boolean break byte case catch char class const "+"continue default do double else enum extends "+"false final finally float for goto if implements import "+"instanceof int interface long native new null "+"package private protected public return "+"short static strictfp super switch synchronized this throw throws true "+"transient try void volatile while";
    this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:/\/\*([^\*][\s\S]*)?\*\//gm,css:"comments"},{regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];this.forHtmlScript({left:/(&lt;|<)%[@!=]?/g,right:/%(&gt;|>)/g})};SyntaxHighlighter.brushes.Java.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Java.aliases=["java"];SyntaxHighlighter.brushes.JavaFX=function(){var b="Boolean Byte Character Double Duration "+"Float Integer Long Number Short String Void";var a="abstract after and as assert at before bind bound break catch class "+"continue def delete else exclusive extends false finally first for from "+"function if import in indexof init insert instanceof into inverse last "+"lazy mixin mod nativearray new not null on or override package postinit "+"protected public public-init public-read replace return reverse sizeof "+"step super then this throw true try tween typeof var where while with "+"attribute let private readonly static trigger";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,css:"color2"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"variable"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.JavaFX.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.JavaFX.aliases=["jfx","javafx"];SyntaxHighlighter.brushes.JScript=function(){var a="break case catch continue "+"default delete do else false  "+"for function if in instanceof "+"new null return super switch "+"this throw true try typeof var while with";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags)};SyntaxHighlighter.brushes.JScript.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.JScript.aliases=["js","jscript","javascript"];SyntaxHighlighter.brushes.Perl=function(){var a="abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr "+"chroot close closedir connect cos crypt defined delete each endgrent "+"endhostent endnetent endprotoent endpwent endservent eof exec exists "+"exp fcntl fileno flock fork format formline getc getgrent getgrgid "+"getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr "+"getnetbyname getnetent getpeername getpgrp getppid getpriority "+"getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid "+"getservbyname getservbyport getservent getsockname getsockopt glob "+"gmtime grep hex index int ioctl join keys kill lc lcfirst length link "+"listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd "+"oct open opendir ord pack pipe pop pos print printf prototype push "+"quotemeta rand read readdir readline readlink readpipe recv rename "+"reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl "+"semget semop send setgrent sethostent setnetent setpgrp setpriority "+"setprotoent setpwent setservent setsockopt shift shmctl shmget shmread "+"shmwrite shutdown sin sleep socket socketpair sort splice split sprintf "+"sqrt srand stat study substr symlink syscall sysopen sysread sysseek "+"system syswrite tell telldir time times tr truncate uc ucfirst umask "+"undef unlink unpack unshift utime values vec wait waitpid warn write";var b="bless caller continue dbmclose dbmopen die do dump else elsif eval exit "+"for foreach goto if import last local my next no our package redo ref "+"require return sub tie tied unless untie until use wantarray while";this.regexList=[{regex:new RegExp("#[^!].*$","gm"),css:"comments"},{regex:new RegExp("^\\s*#!.*$","gm"),css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp("(\\$|@|%)\\w+","g"),css:"variable"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)
};SyntaxHighlighter.brushes.Perl.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Perl.aliases=["perl","Perl","pl"];SyntaxHighlighter.brushes.Php=function(){var a="abs acos acosh addcslashes addslashes "+"array_change_key_case array_chunk array_combine array_count_values array_diff "+"array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill "+"array_filter array_flip array_intersect array_intersect_assoc array_intersect_key "+"array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map "+"array_merge array_merge_recursive array_multisort array_pad array_pop array_product "+"array_push array_rand array_reduce array_reverse array_search array_shift "+"array_slice array_splice array_sum array_udiff array_udiff_assoc "+"array_udiff_uassoc array_uintersect array_uintersect_assoc "+"array_uintersect_uassoc array_unique array_unshift array_values array_walk "+"array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert "+"basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress "+"bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir "+"checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists "+"closedir closelog copy cos cosh count count_chars date decbin dechex decoct "+"deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log "+"error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded "+"feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents "+"fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype "+"floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf "+"fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname "+"gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt "+"getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext "+"gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set "+"interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double "+"is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long "+"is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault "+"is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br "+"parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir "+"round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split "+"str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes "+"stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk "+"strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime "+"strtoupper strtr strval substr substr_compare";var c="and or xor array as break case "+"cfunction class const continue declare default die do else "+"elseif enddeclare endfor endforeach endif endswitch endwhile "+"extends for foreach function include include_once global if "+"new old_function return static switch use require require_once "+"var while abstract interface public implements extends private protected throw";var b="__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\$\w+/g,css:"variable"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"constants"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)};SyntaxHighlighter.brushes.Php.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Php.aliases=["php"];SyntaxHighlighter.brushes.Plain=function(){};SyntaxHighlighter.brushes.Plain.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Plain.aliases=["text","plain"];SyntaxHighlighter.brushes.Python=function(){var c="and assert break class continue def del elif else "+"except exec finally for from global if import in is "+"lambda not or pass print raise return try yield while";var a="__import__ abs all any apply basestring bin bool buffer callable "+"chr classmethod cmp coerce compile complex delattr dict dir "+"divmod enumerate eval execfile file filter float format frozenset "+"getattr globals hasattr hash help hex id input int intern "+"isinstance issubclass iter len list locals long map max min next "+"object oct open ord pow print property range raw_input reduce "+"reload repr reversed round set setattr slice sorted staticmethod "+"str sum super tuple type type unichr unicode vars xrange zip";
    var b="None True False self cls class_";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:/^\s*@\w+/gm,css:"decorator"},{regex:/(['\"]{3})([^\1])*?\1/gm,css:"comments"},{regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,css:"string"},{regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,css:"string"},{regex:/\+|\-|\*|\/|\%|=|==/gm,css:"keyword"},{regex:/\b\d+\.?\w*/g,css:"value"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Python.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Python.aliases=["py","python"];SyntaxHighlighter.brushes.Ruby=function(){var a="alias and BEGIN begin break case class def define_method defined do each else elsif "+"END end ensure false for if in module new next nil not or raise redo rescue retry return "+"self super then throw true undef unless until when while yield";var b="Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload "+"Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol "+"ThreadGroup Thread Time TrueClass";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b[A-Z0-9_]+\b/g,css:"constants"},{regex:/:[a-z][A-Za-z0-9_]*/g,css:"color2"},{regex:/(\$|@@|@)\w+/g,css:"variable bold"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Ruby.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Ruby.aliases=["ruby","rails","ror","rb"];SyntaxHighlighter.brushes.Scala=function(){var b="val sealed case def true trait implicit forSome import match object null finally super "+"override try lazy for var catch throw type extends class while with new final yield abstract "+"else do if return protected private this package false";var a="[_:=><%#@]+";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/0x[a-f0-9]+|\d+(\.\d+)?/gi,css:"value"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"},{regex:new RegExp(a,"gm"),css:"keyword"}]};SyntaxHighlighter.brushes.Scala.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Scala.aliases=["scala"];SyntaxHighlighter.brushes.Sql=function(){var b="abs avg case cast coalesce convert count current_timestamp "+"current_user day isnull left lower month nullif replace right "+"session_user space substring sum system_user upper user year";var c="absolute action add after alter as asc at authorization begin bigint "+"binary bit by cascade char character check checkpoint close collate "+"column commit committed connect connection constraint contains continue "+"create cube current current_date current_time cursor database date "+"deallocate dec decimal declare default delete desc distinct double drop "+"dynamic else end end-exec escape except exec execute false fetch first "+"float for force foreign forward free from full function global goto grant "+"group grouping having hour ignore index inner insensitive insert instead "+"int integer intersect into is isolation key last level load local max min "+"minute modify move name national nchar next no numeric of off on only "+"open option order out output partial password precision prepare primary "+"prior privileges procedure public read real references relative repeatable "+"restrict return returns revoke rollback rollup rows rule schema scroll "+"second section select sequence serializable set size smallint static "+"statistics table temp temporary then time timestamp to top transaction "+"translation trigger true truncate uncommitted union unique update values "+"varchar varying view when where with work";var a="all and any between cross in join like not null or outer some";this.regexList=[{regex:/--(.*)$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"keyword"}]};SyntaxHighlighter.brushes.Sql.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Sql.aliases=["sql"];
SyntaxHighlighter.brushes.Vb=function(){var a="AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto "+"Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate "+"CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType "+"Date Decimal Declare Default Delegate Dim DirectCast Do Double Each "+"Else ElseIf End Enum Erase Error Event Exit False Finally For Friend "+"Function Get GetType GoSub GoTo Handles If Implements Imports In "+"Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module "+"MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing "+"NotInheritable NotOverridable Object On Option Optional Or OrElse "+"Overloads Overridable Overrides ParamArray Preserve Private Property "+"Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume "+"Return Select Set Shadows Shared Short Single Static Step Stop String "+"Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until "+"Variant When While With WithEvents WriteOnly Xor";this.regexList=[{regex:/'.*$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/^\s*#.*$/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Vb.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Vb.aliases=["vb","vbnet"];SyntaxHighlighter.brushes.Lua=function(){var a="and break do else elseif end false for function if in "+"local nil not or repeat return then true until while";var b="_G _VERSION assert collectgarbage dofile error getfenv "+"getmetatable ipairs load module next pairs pcall print "+" rawequal rawget rawset require select setfenv setmetatable "+"tonumber tostring type unpack xpcall "+"coroutine.create coroutine.resume coroutine.running "+"coroutine.status coroutine.wrap coroutine.yield "+"debug.debug debug.getfenv debug.gethook debug.getinfo "+"debug.getlocal debug.getmetatable debug.getregistry "+"debug.getupvalue debug.setfenv debug.sethook debug.setlocal "+"debug.setmetatable debug.setupvalue debug.traceback "+"file:close file:flush file:lines file:read file:seek "+"file:setvbuf file:write"+"io.close io.flush io.input io.lines io.open io.output "+"io.popen io.read io.stderr io.stdin io.stdout io.tmpfile "+"io.type io.write "+"math.abs math.acos math.asin math.atan math.atan2 math.ceil "+"math.cos math.cosh math.deg math.exp math.floor math.fmod "+"math.frexp math.huge math.ldexp math.log math.log10 math.max "+"math.min math.modf math.pi math.pow math.rad math.random "+"math.randomseed math.sin math.sinh math.sqrt math.tan math.tanh "+"os.clock os.date os.difftime os.execute os.exit os.getenv os.remove "+"os.rename os.setlocale os.time os.tmpname "+"package.cpath package.loaded package.loaders package.loadlib "+"package.path package.preload package.seeall "+"string.byte string.char string.dump string.find string.format "+"string.gmatch string.gsub string.len string.lower string.match "+"string.rep string.reverse string.sub string.upper table.concat "+"table.insert table.maxn table.remove table.sort";this.regexList=[{regex:/--.*/gm,css:"comments"},{regex:/--\[\[[\S\s]*\]\]/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"functions"}]};SyntaxHighlighter.brushes.Lua.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Lua.aliases=["lua"];SyntaxHighlighter.brushes.Xml=function(){function a(e,i){var f=SyntaxHighlighter.Match,h=e[0],c=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(h),b=[];if(e.attributes!=null){var d,g=new XRegExp("(?<name> [\\w:\\-\\.]+)"+"\\s*=\\s*"+"(?<value> \".*?\"|'.*?'|\\w+)","xg");while((d=g.exec(h))!=null){b.push(new f(d.name,e.index+d.index,"color1"));b.push(new f(d.value,e.index+d.index+d[0].indexOf(d.value),"string"))}}if(c!=null){b.push(new f(c.name,e.index+c[0].indexOf(c.name),"keyword"))}return b}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:a}]};SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html"];
define("hightlight", ["jquery"], function(){});

/**console.log **/
(function(){var method;var noop=function(){};var methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());//兼容浏览器console

var v=".js?v="+(new Date()).getTime();//获取时间戳
var airBaseRoot = '/';
require.config({
    // baseUrl : '/js/',
    map: {
        "*": {"css": "css.min"}
    },
    paths: {
        // "my97":"lib/my97/WdatePicker",//日历控件
        "jquery": "jquery-1.11.3.min",//jquery
        "easyui":"lib/easyui/jquery.easyui.min",//easyui ，细节有修改
        "easyui.extend":"lib/easyui/jquery.easyui.base.extend",//基础扩展，包括语言包、官方gridedit、扁平树扩展 和requirejs结合修正
        "md5":"lib/md5",//md5加密脚本，仅供参考
        // "jquery.validate": "plus/jquery.validate",
        "jquery.extend": "plus/jquery.extend",//jquery基础扩展
        "easyvalidate.extend": "plus/easyvalidate.extend",//easyui验证扩展，包括各种验证规则
        "easygridEdit": "plus/easygridEdit.extend",//easyui gridedit方法扩展
        "param":"plus/param", //全局公用变量
        "pub":"plus/pub"+v,//基于基础扩展写的公共处理脚本库
        // "print":"plus/print",
        "layer.min":"lib/layer/layer.min",//layer弹窗控件
        "pinyin_dict":"lib/pinyinjs/dict/pinyin_dict",//拼音库
        "pinyin":"lib/pinyinjs/pinyinUtil",//拼音库支持工具
        "template":"lib/template",//art template
        "hotkeys" : "lib/hotkeys",//快捷键注册库
        "echarts":"lib/echarts/echarts",//echarts完整库
        "echartsMap":"lib/echarts/echarts-map",//echarts扩展地图
        "chinaMap":"lib/echarts/china",//echarts中国地图
        "WebUploader":"lib/webuploader/webuploader.min",//百度上传控件
        "myupload":"lib/webuploader/MyAmdWebUpload",//上传控件扩展amd版，上传require此文件
        "fancybox":"lib/fancybox/jquery.fancybox-1.3.4.pack",//fancybox弹窗控件
        "baidueditor": "lib/ueditor1.4.3.3-utf8-jsp/myue",//ue编辑器
        "bdlang": "lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn",//ue编辑器
        "zeroclipboard": "lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min",//ue编辑器
        "hightlight": "lib/SyntaxHighlighter/brush"//代码高亮
    },
    shim:{
        "jquery.validate":["jquery"],
        "layer.min":["jquery"],
        "fancybox":["jquery"],
        "hightlight":["jquery"],
        // "jquery.extend":["param","layer.min","my97"],//依赖这些基础配置
        "jquery.extend":["param","layer.min"],//依赖这些基础配置
        "easyui":["jquery"],
        // "jquery.jdirk":["jquery"],
        "easyui.extend":["easyui"],
        "easyvalidate.extend":["easyui"],
        "easygridEdit":["easyui"],
        "bootstrap":["jquery"],
        "pinyin": ["pinyin_dict"],
        // "template": {exports: "template"},
        "chinaMap":["echarts","echartsMap"],
        "pub":["jquery.extend","easyui.extend","easyvalidate.extend"],//依赖
        "baidueditor": {deps: ["lib/ueditor1.4.3.3-utf8-jsp/ueditor.config", "css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor"]},
        "bdlang":{deps: ["baidueditor"]}
    }
});

// require(["pub"],function(){//默认只引入pub及相关依赖的所有文件，个体文件需要依赖，文件内require

require(["pub","hightlight"],function(){
    SyntaxHighlighter.config.clipboardSwf = 'js/lib/SyntaxHighlighter/clipboard.swf';//代码高亮
    SyntaxHighlighter.highlight();

    //通过body上的 data-js来寻找执行文件及对应函数格式： data-js="文件名:函数名"，文件统一放置在js/app 扁平目录下，如：<body data-js="sys:group">
    //需要执行多个函数用 || 隔开，如：<body data-js="sys:group||api:init">
    //如果是init函数可直接省略冒号及函数名，如：<body data-js="api:init">可简写为<body data-js="api">
    var crumb=$('body').attr("data-js");
    if(crumb){
        var crumbArr = crumb.split('||');
        $.each(crumbArr,function(i,v){
            var vArr = v.split(":");
            var modId = vArr[0] , funcId = vArr[1]||'init';
            window.console && console.log('page执行 app/'+modId+'.js中的'+funcId+'方法');//打开页面时，注意看控制台提示执行的是哪个页面的哪个方法
            // require(['/js/app/'+modId+v],function(mod){
            require(['app/'+modId],function(mod){
                if(mod){
                    var init=mod[funcId];
                    if(init&&$.isFunction(init)){
                        mod[funcId](window);
                    }else{
                        window.console && console.log("请在"+modId+".js文件中定义"+funcId+"方法");//不存在提示
                    }
                }
            });
        });
    }
});

define("main.un", function(){});

