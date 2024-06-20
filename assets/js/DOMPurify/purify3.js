/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,(function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});const u=N(Array.prototype.forEach),m=N(Array.prototype.pop),f=N(Array.prototype.push),p=N(String.prototype.toLowerCase),d=N(String.prototype.toString),h=N(String.prototype.match),g=N(String.prototype.replace),T=N(String.prototype.indexOf),y=N(String.prototype.trim),E=N(Object.prototype.hasOwnProperty),A=N(RegExp.prototype.test),_=(b=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(b,t)});var b;function N(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function S(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){const e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function R(e){for(let t=0;t<e.length;t++){E(e,t)||(e[t]=null)}return e}function w(t){const n=l(null);for(const[o,r]of e(t)){E(t,o)&&(Array.isArray(r)?n[o]=R(r):r&&"object"==typeof r&&r.constructor===Object?n[o]=w(r):n[o]=r)}return n}function D(e,t){for(;null!==e;){const n=r(e,t);if(n){if(n.get)return N(n.get);if("function"==typeof n.value)return N(n.value)}e=o(e)}return function(){return null}}const L=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),x=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),v=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),C=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),O=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),I=i(["#text"]),M=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),U=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),P=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),z=a(/<%[\w\W]*|[\w\W]*%>/gm),B=a(/\${[\w\W]*}/gm),W=a(/^data-[\-\w.\u00B7-\uFFFF]/),G=a(/^aria-[\-\w]+$/),Y=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),j=a(/^(?:\w+script|data):/i),q=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),X=a(/^html$/i);var K=Object.freeze({__proto__:null,MUSTACHE_EXPR:H,ERB_EXPR:z,TMPLIT_EXPR:B,DATA_ATTR:W,ARIA_ATTR:G,IS_ALLOWED_URI:Y,IS_SCRIPT_OR_DATA:j,ATTR_WHITESPACE:q,DOCTYPE_NAME:X});const V=function(){return"undefined"==typeof window?null:window},$=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};var Z=function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V();const o=e=>t(e);if(o.version="3.0.9",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;let{document:r}=n;const a=r,c=a.currentScript,{DocumentFragment:s,HTMLTemplateElement:b,Node:N,Element:R,NodeFilter:H,NamedNodeMap:z=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:B,DOMParser:W,trustedTypes:G}=n,j=R.prototype,q=D(j,"cloneNode"),Z=D(j,"nextSibling"),J=D(j,"childNodes"),Q=D(j,"parentNode");if("function"==typeof b){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let ee,te="";const{implementation:ne,createNodeIterator:oe,createDocumentFragment:re,getElementsByTagName:ie}=r,{importNode:ae}=a;let le={};o.isSupported="function"==typeof e&&"function"==typeof Q&&ne&&void 0!==ne.createHTMLDocument;const{MUSTACHE_EXPR:ce,ERB_EXPR:se,TMPLIT_EXPR:ue,DATA_ATTR:me,ARIA_ATTR:fe,IS_SCRIPT_OR_DATA:pe,ATTR_WHITESPACE:de}=K;let{IS_ALLOWED_URI:he}=K,ge=null;const Te=S({},[...L,...x,...v,...k,...I]);let ye=null;const Ee=S({},[...M,...U,...P,...F]);let Ae=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,be=null,Ne=!0,Se=!0,Re=!1,we=!0,De=!1,Le=!1,xe=!1,ve=!1,Ce=!1,ke=!1,Oe=!1,Ie=!0,Me=!1;const Ue="user-content-";let Pe=!0,Fe=!1,He={},ze=null;const Be=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let We=null;const Ge=S({},["audio","video","img","source","image","track"]);let Ye=null;const je=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),qe="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml";let Ve=Ke,$e=!1,Ze=null;const Je=S({},[qe,Xe,Ke],d);let Qe=null;const et=["application/xhtml+xml","text/html"],tt="text/html";let nt=null,ot=null;const rt=r.createElement("form"),it=function(e){return e instanceof RegExp||e instanceof Function},at=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!ot||ot!==e){if(e&&"object"==typeof e||(e={}),e=w(e),Qe=-1===et.indexOf(e.PARSER_MEDIA_TYPE)?tt:e.PARSER_MEDIA_TYPE,nt="application/xhtml+xml"===Qe?d:p,ge=E(e,"ALLOWED_TAGS")?S({},e.ALLOWED_TAGS,nt):Te,ye=E(e,"ALLOWED_ATTR")?S({},e.ALLOWED_ATTR,nt):Ee,Ze=E(e,"ALLOWED_NAMESPACES")?S({},e.ALLOWED_NAMESPACES,d):Je,Ye=E(e,"ADD_URI_SAFE_ATTR")?S(w(je),e.ADD_URI_SAFE_ATTR,nt):je,We=E(e,"ADD_DATA_URI_TAGS")?S(w(Ge),e.ADD_DATA_URI_TAGS,nt):Ge,ze=E(e,"FORBID_CONTENTS")?S({},e.FORBID_CONTENTS,nt):Be,_e=E(e,"FORBID_TAGS")?S({},e.FORBID_TAGS,nt):{},be=E(e,"FORBID_ATTR")?S({},e.FORBID_ATTR,nt):{},He=!!E(e,"USE_PROFILES")&&e.USE_PROFILES,Ne=!1!==e.ALLOW_ARIA_ATTR,Se=!1!==e.ALLOW_DATA_ATTR,Re=e.ALLOW_UNKNOWN_PROTOCOLS||!1,we=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,De=e.SAFE_FOR_TEMPLATES||!1,Le=e.WHOLE_DOCUMENT||!1,Ce=e.RETURN_DOM||!1,ke=e.RETURN_DOM_FRAGMENT||!1,Oe=e.RETURN_TRUSTED_TYPE||!1,ve=e.FORCE_BODY||!1,Ie=!1!==e.SANITIZE_DOM,Me=e.SANITIZE_NAMED_PROPS||!1,Pe=!1!==e.KEEP_CONTENT,Fe=e.IN_PLACE||!1,he=e.ALLOWED_URI_REGEXP||Y,Ve=e.NAMESPACE||Ke,Ae=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ae.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ae.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ae.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),De&&(Se=!1),ke&&(Ce=!0),He&&(ge=S({},I),ye=[],!0===He.html&&(S(ge,L),S(ye,M)),!0===He.svg&&(S(ge,x),S(ye,U),S(ye,F)),!0===He.svgFilters&&(S(ge,v),S(ye,U),S(ye,F)),!0===He.mathMl&&(S(ge,k),S(ye,P),S(ye,F))),e.ADD_TAGS&&(ge===Te&&(ge=w(ge)),S(ge,e.ADD_TAGS,nt)),e.ADD_ATTR&&(ye===Ee&&(ye=w(ye)),S(ye,e.ADD_ATTR,nt)),e.ADD_URI_SAFE_ATTR&&S(Ye,e.ADD_URI_SAFE_ATTR,nt),e.FORBID_CONTENTS&&(ze===Be&&(ze=w(ze)),S(ze,e.FORBID_CONTENTS,nt)),Pe&&(ge["#text"]=!0),Le&&S(ge,["html","head","body"]),ge.table&&(S(ge,["tbody"]),delete _e.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ee=e.TRUSTED_TYPES_POLICY,te=ee.createHTML("")}else void 0===ee&&(ee=$(G,c)),null!==ee&&"string"==typeof te&&(te=ee.createHTML(""));i&&i(e),ot=e}},lt=S({},["mi","mo","mn","ms","mtext"]),ct=S({},["foreignobject","desc","title","annotation-xml"]),st=S({},["title","style","font","a","script"]),ut=S({},[...x,...v,...C]),mt=S({},[...k,...O]),ft=function(e){let t=Q(e);t&&t.tagName||(t={namespaceURI:Ve,tagName:"template"});const n=p(e.tagName),o=p(t.tagName);return!!Ze[e.namespaceURI]&&(e.namespaceURI===Xe?t.namespaceURI===Ke?"svg"===n:t.namespaceURI===qe?"svg"===n&&("annotation-xml"===o||lt[o]):Boolean(ut[n]):e.namespaceURI===qe?t.namespaceURI===Ke?"math"===n:t.namespaceURI===Xe?"math"===n&&ct[o]:Boolean(mt[n]):e.namespaceURI===Ke?!(t.namespaceURI===Xe&&!ct[o])&&(!(t.namespaceURI===qe&&!lt[o])&&(!mt[n]&&(st[n]||!ut[n]))):!("application/xhtml+xml"!==Qe||!Ze[e.namespaceURI]))},pt=function(e){f(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},dt=function(e,t){try{f(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ye[e])if(Ce||ke)try{pt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},ht=function(e){let t=null,n=null;if(ve)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Qe&&Ve===Ke&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=ee?ee.createHTML(e):e;if(Ve===Ke)try{t=(new W).parseFromString(o,Qe)}catch(e){}if(!t||!t.documentElement){t=ne.createDocument(Ve,"template",null);try{t.documentElement.innerHTML=$e?te:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),Ve===Ke?ie.call(t,Le?"html":"body")[0]:Le?t.documentElement:i},gt=function(e){return oe.call(e.ownerDocument||e,e,H.SHOW_ELEMENT|H.SHOW_COMMENT|H.SHOW_TEXT,null)},Tt=function(e){return e instanceof B&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof z)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},yt=function(e){return"function"==typeof N&&e instanceof N},Et=function(e,t,n){le[e]&&u(le[e],(e=>{e.call(o,t,n,ot)}))},At=function(e){let t=null;if(Et("beforeSanitizeElements",e,null),Tt(e))return pt(e),!0;const n=nt(e.nodeName);if(Et("uponSanitizeElement",e,{tagName:n,allowedTags:ge}),e.hasChildNodes()&&!yt(e.firstElementChild)&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent))return pt(e),!0;if(!ge[n]||_e[n]){if(!_e[n]&&bt(n)){if(Ae.tagNameCheck instanceof RegExp&&A(Ae.tagNameCheck,n))return!1;if(Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(n))return!1}if(Pe&&!ze[n]){const t=Q(e)||e.parentNode,n=J(e)||e.childNodes;if(n&&t){for(let o=n.length-1;o>=0;--o)t.insertBefore(q(n[o],!0),Z(e))}}return pt(e),!0}return e instanceof R&&!ft(e)?(pt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!A(/<\/no(script|embed|frames)/i,e.innerHTML)?(De&&3===e.nodeType&&(t=e.textContent,u([ce,se,ue],(e=>{t=g(t,e," ")})),e.textContent!==t&&(f(o.removed,{element:e.cloneNode()}),e.textContent=t)),Et("afterSanitizeElements",e,null),!1):(pt(e),!0)},_t=function(e,t,n){if(Ie&&("id"===t||"name"===t)&&(n in r||n in rt))return!1;if(Se&&!be[t]&&A(me,t));else if(Ne&&A(fe,t));else if(!ye[t]||be[t]){if(!(bt(e)&&(Ae.tagNameCheck instanceof RegExp&&A(Ae.tagNameCheck,e)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(e))&&(Ae.attributeNameCheck instanceof RegExp&&A(Ae.attributeNameCheck,t)||Ae.attributeNameCheck instanceof Function&&Ae.attributeNameCheck(t))||"is"===t&&Ae.allowCustomizedBuiltInElements&&(Ae.tagNameCheck instanceof RegExp&&A(Ae.tagNameCheck,n)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(n))))return!1}else if(Ye[t]);else if(A(he,g(n,de,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(n,"data:")||!We[e]){if(Re&&!A(pe,g(n,de,"")));else if(n)return!1}else;return!0},bt=function(e){return"annotation-xml"!==e&&e.indexOf("-")>0},Nt=function(e){Et("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ye};let r=t.length;for(;r--;){const i=t[r],{name:a,namespaceURI:l,value:c}=i,s=nt(a);let f="value"===a?c:y(c);if(n.attrName=s,n.attrValue=f,n.keepAttr=!0,n.forceKeepAttr=void 0,Et("uponSanitizeAttribute",e,n),f=n.attrValue,n.forceKeepAttr)continue;if(dt(a,e),!n.keepAttr)continue;if(!we&&A(/\/>/i,f)){dt(a,e);continue}De&&u([ce,se,ue],(e=>{f=g(f,e," ")}));const p=nt(e.nodeName);if(_t(p,s,f)){if(!Me||"id"!==s&&"name"!==s||(dt(a,e),f=Ue+f),ee&&"object"==typeof G&&"function"==typeof G.getAttributeType)if(l);else switch(G.getAttributeType(p,s)){case"TrustedHTML":f=ee.createHTML(f);break;case"TrustedScriptURL":f=ee.createScriptURL(f)}try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),m(o.removed)}catch(e){}}}Et("afterSanitizeAttributes",e,null)},St=function e(t){let n=null;const o=gt(t);for(Et("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)Et("uponSanitizeShadowNode",n,null),At(n)||(n.content instanceof s&&e(n.content),Nt(n));Et("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,i=null,l=null;if($e=!e,$e&&(e="\x3c!--\x3e"),"string"!=typeof e&&!yt(e)){if("function"!=typeof e.toString)throw _("toString is not a function");if("string"!=typeof(e=e.toString()))throw _("dirty is not a string, aborting")}if(!o.isSupported)return e;if(xe||at(t),o.removed=[],"string"==typeof e&&(Fe=!1),Fe){if(e.nodeName){const t=nt(e.nodeName);if(!ge[t]||_e[t])throw _("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof N)n=ht("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),1===r.nodeType&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!Ce&&!De&&!Le&&-1===e.indexOf("<"))return ee&&Oe?ee.createHTML(e):e;if(n=ht(e),!n)return Ce?null:Oe?te:""}n&&ve&&pt(n.firstChild);const c=gt(Fe?e:n);for(;i=c.nextNode();)At(i)||(i.content instanceof s&&St(i.content),Nt(i));if(Fe)return e;if(Ce){if(ke)for(l=re.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(ye.shadowroot||ye.shadowrootmode)&&(l=ae.call(a,l,!0)),l}let m=Le?n.outerHTML:n.innerHTML;return Le&&ge["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&A(X,n.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+m),De&&u([ce,se,ue],(e=>{m=g(m,e," ")})),ee&&Oe?ee.createHTML(m):m},o.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};at(e),xe=!0},o.clearConfig=function(){ot=null,xe=!1},o.isValidAttribute=function(e,t,n){ot||at({});const o=nt(e),r=nt(t);return _t(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&(le[e]=le[e]||[],f(le[e],t))},o.removeHook=function(e){if(le[e])return m(le[e])},o.removeHooks=function(e){le[e]&&(le[e]=[])},o.removeAllHooks=function(){le={}},o}();return Z}));
