/*! For license information please see index.36735f975827d69e5ad5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,r){"use strict";function n(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u}));var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var c=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,c=s(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))i.call(r,u)&&(c[u]=r[u]);if(o){n=o(r);for(var d=0;d<n.length;d++)a.call(r,n[d])&&(c[n[d]]=r[n[d]])}}return c},l=n((function(e,t){var r=60103,n=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,a=60112;t.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),n=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),o=u("react.provider"),i=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),s=u("react.memo"),l=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}function g(){}function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=y.prototype=new g;v.constructor=y,c(v,m.prototype),v.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:b.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===i?"."+A(c,0):i,Array.isArray(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),_(a,t,o,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=i+A(s=e[l],l);c+=_(s,t,o,u,a)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(s=e.next()).done;)c+=_(s=s.value,t,o,u=i+A(s,l++),a);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function O(){var e=I.current;if(null===e)throw Error(p(321));return e}var R={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:c};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=c({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=b.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return O().useCallback(e,t)},t.useContext=function(e,t){return O().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return O().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return O().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return O().useLayoutEffect(e,t)},t.useMemo=function(e,t){return O().useMemo(e,t)},t.useReducer=function(e,t,r){return O().useReducer(e,t,r)},t.useRef=function(e){return O().useRef(e)},t.useState=function(e){return O().useState(e)},t.version="17.0.2"})),u=n((function(e){e.exports=l}))},,function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"MODE",(function(){return o})),r.d(n,"NODE_ENV",(function(){return i})),r.d(n,"SSR",(function(){return a}));const o="production",i="production",a=!1;var s=r(0),c=s.c.createContext,l=s.c.useContext,u=s.c.useEffect,d=s.c.useReducer,p=r(1);function f(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}var m,g=f,y=h;function v(e){if(g===setTimeout)return setTimeout(e,0);if((g===f||!g)&&setTimeout)return g=setTimeout,setTimeout(e,0);try{return g(e,0)}catch(t){try{return g.call(null,e,0)}catch(t){return g.call(this,e,0)}}}"function"==typeof(m="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).setTimeout&&(g=setTimeout),"function"==typeof m.clearTimeout&&(y=clearTimeout);var b,w=[],S=!1,k=-1;function x(){S&&b&&(S=!1,b.length?w=b.concat(w):k=-1,w.length&&C())}function C(){if(!S){var e=v(x);S=!0;for(var t=w.length;t;){for(b=w,w=[];++k<t;)b&&b[k].run();k=-1,t=w.length}b=null,S=!1,function(e){if(y===clearTimeout)return clearTimeout(e);if((y===h||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(e);try{y(e)}catch(t){try{return y.call(null,e)}catch(t){return y.call(this,e)}}}(e)}}function A(e,t){this.fun=e,this.array=t}A.prototype.run=function(){this.fun.apply(null,this.array)};function _(){}var P=_,E=_,I=_,O=_,R=_,T=_,j=_;var N=m.performance||{},z=N.now||N.mozNow||N.msNow||N.oNow||N.webkitNow||function(){return(new Date).getTime()};var M=new Date;var $={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];w.push(new A(e,t)),1!==w.length||S||v(C)},title:"browser",browser:!0,env:{NODE_ENV:"production"},argv:[],version:"",versions:{},on:P,addListener:E,once:I,off:O,removeListener:R,removeAllListeners:T,emit:j,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*z.call(N),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-M)/1e3}},D="function"==typeof Symbol&&Symbol.for,F=D?Symbol.for("react.element"):60103,L=D?Symbol.for("react.portal"):60106,q=D?Symbol.for("react.fragment"):60107,B=D?Symbol.for("react.strict_mode"):60108,H=D?Symbol.for("react.profiler"):60114,U=D?Symbol.for("react.provider"):60109,W=D?Symbol.for("react.context"):60110,V=D?Symbol.for("react.async_mode"):60111,G=D?Symbol.for("react.concurrent_mode"):60111,Y=D?Symbol.for("react.forward_ref"):60112,X=D?Symbol.for("react.suspense"):60113,J=D?Symbol.for("react.suspense_list"):60120,Z=D?Symbol.for("react.memo"):60115,K=D?Symbol.for("react.lazy"):60116,Q=D?Symbol.for("react.block"):60121,ee=D?Symbol.for("react.fundamental"):60117,te=D?Symbol.for("react.responder"):60118,re=D?Symbol.for("react.scope"):60119;function ne(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case F:switch(e=e.type){case V:case G:case q:case H:case B:case X:return e;default:switch(e=e&&e.$$typeof){case W:case Y:case K:case Z:case U:return e;default:return t}}case L:return t}}}function oe(e){return ne(e)===G}var ie={AsyncMode:V,ConcurrentMode:G,ContextConsumer:W,ContextProvider:U,Element:F,ForwardRef:Y,Fragment:q,Lazy:K,Memo:Z,Portal:L,Profiler:H,StrictMode:B,Suspense:X,isAsyncMode:function(e){return oe(e)||ne(e)===V},isConcurrentMode:oe,isContextConsumer:function(e){return ne(e)===W},isContextProvider:function(e){return ne(e)===U},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===F},isForwardRef:function(e){return ne(e)===Y},isFragment:function(e){return ne(e)===q},isLazy:function(e){return ne(e)===K},isMemo:function(e){return ne(e)===Z},isPortal:function(e){return ne(e)===L},isProfiler:function(e){return ne(e)===H},isStrictMode:function(e){return ne(e)===B},isSuspense:function(e){return ne(e)===X},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===q||e===G||e===H||e===B||e===X||e===J||"object"==typeof e&&null!==e&&(e.$$typeof===K||e.$$typeof===Z||e.$$typeof===U||e.$$typeof===W||e.$$typeof===Y||e.$$typeof===ee||e.$$typeof===te||e.$$typeof===re||e.$$typeof===Q)},typeOf:ne},ae=Object(s.a)((function(e){e.exports=ie}));function se(e){function t(e,n,c,l,p){for(var f,h,m,g,w,k=0,x=0,C=0,A=0,_=0,T=0,N=m=f=0,M=0,$=0,D=0,F=0,L=c.length,q=L-1,B="",H="",U="",W="";M<L;){if(h=c.charCodeAt(M),M===q&&0!==x+A+C+k&&(0!==x&&(h=47===x?10:47),A=C=k=0,L++,q++),0===x+A+C+k){if(M===q&&(0<$&&(B=B.replace(d,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=c.charAt(M)}h=59}switch(h){case 123:for(f=(B=B.trim()).charCodeAt(0),m=1,F=++M;M<L;){switch(h=c.charCodeAt(M)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(M+1)){case 42:case 47:e:{for(N=M+1;N<q;++N)switch(c.charCodeAt(N)){case 47:if(42===h&&42===c.charCodeAt(N-1)&&M+2!==N){M=N+1;break e}break;case 10:if(47===h){M=N+1;break e}}M=N}}break;case 91:h++;case 40:h++;case 34:case 39:for(;M++<q&&c.charCodeAt(M)!==h;);}if(0===m)break;M++}switch(m=c.substring(F,M),0===f&&(f=(B=B.replace(u,"").trim()).charCodeAt(0)),f){case 64:switch(0<$&&(B=B.replace(d,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:$=n;break;default:$=R}if(F=(m=t(n,$,m,h,p+1)).length,0<j&&(w=s(3,m,$=r(R,B,D),n,E,P,F,h,p,l),B=$.join(""),void 0!==w&&0===(F=(m=w.trim()).length)&&(h=0,m="")),0<F)switch(h){case 115:B=B.replace(S,a);case 100:case 109:case 45:m=B+"{"+m+"}";break;case 107:m=(B=B.replace(y,"$1 $2"))+"{"+m+"}",m=1===O||2===O&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=B+m,112===l&&(H+=m,m="")}else m="";break;default:m=t(n,r(n,B,D),m,l,p+1)}U+=m,m=D=$=N=f=0,B="",h=c.charCodeAt(++M);break;case 125:case 59:if(1<(F=(B=(0<$?B.replace(d,""):B).trim()).length))switch(0===N&&(f=B.charCodeAt(0),45===f||96<f&&123>f)&&(F=(B=B.replace(" ",":")).length),0<j&&void 0!==(w=s(1,B,n,e,E,P,H.length,l,p,l))&&0===(F=(B=w.trim()).length)&&(B="\0\0"),f=B.charCodeAt(0),h=B.charCodeAt(1),f){case 0:break;case 64:if(105===h||99===h){W+=B+c.charAt(M);break}default:58!==B.charCodeAt(F-1)&&(H+=o(B,f,h,B.charCodeAt(2)))}D=$=N=f=0,B="",h=c.charCodeAt(++M)}}switch(h){case 13:case 10:47===x?x=0:0===1+f&&107!==l&&0<B.length&&($=1,B+="\0"),0<j*z&&s(0,B,n,e,E,P,H.length,l,p,l),P=1,E++;break;case 59:case 125:if(0===x+A+C+k){P++;break}default:switch(P++,g=c.charAt(M),h){case 9:case 32:if(0===A+k+x)switch(_){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===A+x+k&&($=D=1,g="\f"+g);break;case 108:if(0===A+x+k+I&&0<N)switch(M-N){case 2:112===_&&58===c.charCodeAt(M-3)&&(I=_);case 8:111===T&&(I=T)}break;case 58:0===A+x+k&&(N=M);break;case 44:0===x+C+A+k&&($=1,g+="\r");break;case 34:case 39:0===x&&(A=A===h?0:0===A?h:A);break;case 91:0===A+x+C&&k++;break;case 93:0===A+x+C&&k--;break;case 41:0===A+x+k&&C--;break;case 40:if(0===A+x+k){if(0===f)switch(2*_+3*T){case 533:break;default:f=1}C++}break;case 64:0===x+C+A+k+N+m&&(m=1);break;case 42:case 47:if(!(0<A+k+C))switch(x){case 0:switch(2*h+3*c.charCodeAt(M+1)){case 235:x=47;break;case 220:F=M,x=42}break;case 42:47===h&&42===_&&F+2!==M&&(33===c.charCodeAt(F+2)&&(H+=c.substring(F,M+1)),g="",x=0)}}0===x&&(B+=g)}T=_,_=h,M++}if(0<(F=H.length)){if($=n,0<j&&(void 0!==(w=s(2,H,$,e,E,P,F,l,p,l))&&0===(H=w).length))return W+H+U;if(H=$.join(",")+"{"+H+"}",0!=O*I){switch(2!==O||i(H,2)||(I=0),I){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}I=0}}return W+H+U}function r(e,t,r){var o=t.trim().split(m);t=o;var i=o.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<i;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<a;++l)t[c++]=n(e[l]+" ",o[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,r,n){var a=e+";",s=2*t+3*r+4*n;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===O||2===O&&i(c,1)?"-webkit-"+c+c:c}if(0===O||2===O&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(_,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return f.test(a)?a.replace(p,":-webkit-")+a.replace(p,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(w,"tb");break;case 232:c=a.replace(w,"tb-rl");break;case 220:c=a.replace(w,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+a}return a}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),N(2!==t?n:n.replace(C,"$1"),r,t)}function a(e,t){var r=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,o,i,a,s,c,u){for(var d,p=0,f=t;p<j;++p)switch(d=T[p].call(l,e,f,r,n,o,i,a,s,c,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function c(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!=typeof e?O=1:(O=2,N=e):O=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<j){var o=s(-1,r,n,n,E,P,0,0,0,0);void 0!==o&&"string"==typeof o&&(r=o)}var i=t(R,n,r,0,0);return 0<j&&(void 0!==(o=s(-2,i,n,n,E,P,i.length,0,0,0))&&(i=o)),"",I=0,P=E=1,i}var u=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,f=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,x=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,_=/([^-])(image-set\()/,P=1,E=1,I=0,O=1,R=[],T=[],j=0,N=null,z=0;return l.use=function e(t){switch(t){case void 0:case null:j=T.length=0;break;default:if("function"==typeof t)T[j++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else z=0|!!t}return e},l.set=c,void 0!==e&&c(e),l}var ce={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var le,ue,de=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pe=(le=function(e){return de.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91},ue={},function(e){return void 0===ue[e]&&(ue[e]=le(e)),ue[e]}),fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},he={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ge={};function ye(e){return ae.isMemo(e)?me:ge[e.$$typeof]||fe}ge[ae.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ge[ae.Memo]=me;var ve=Object.defineProperty,be=Object.getOwnPropertyNames,we=Object.getOwnPropertySymbols,Se=Object.getOwnPropertyDescriptor,ke=Object.getPrototypeOf,xe=Object.prototype;var Ce=function e(t,r,n){if("string"!=typeof r){if(xe){var o=ke(r);o&&o!==xe&&e(t,o,n)}var i=be(r);we&&(i=i.concat(we(r)));for(var a=ye(t),s=ye(r),c=0;c<i.length;++c){var l=i[c];if(!(he[l]||n&&n[l]||s&&s[l]||a&&a[l])){var u=Se(r,l);try{ve(t,l,u)}catch(e){}}}}return t};function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var _e=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},Pe=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!ae.typeOf(e)},Ee=Object.freeze([]),Ie=Object.freeze({});function Oe(e){return"function"==typeof e}function Re(e){return e.displayName||e.name||"Component"}function Te(e){return e&&"string"==typeof e.styledComponentId}var je=void 0!==$&&$.env.SC_ATTR||"data-styled",Ne="undefined"!=typeof window&&"HTMLElement"in window,ze=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==$&&void 0!==$.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==$.env.REACT_APP_SC_DISABLE_SPEEDY?$.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==$&&void 0!==$.env.SC_DISABLE_SPEEDY&&""!==$.env.SC_DISABLE_SPEEDY&&$.env.SC_DISABLE_SPEEDY),Me={};function $e(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var De=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)(o<<=1)<0&&$e(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),Fe=new Map,Le=new Map,qe=1,Be=function(e){if(Fe.has(e))return Fe.get(e);for(;Le.has(qe);)qe++;var t=qe++;return Fe.set(e,t),Le.set(t,e),t},He=function(e){return Le.get(e)},Ue=function(e,t){Fe.set(e,t),Le.set(t,e)},We="style["+je+'][data-styled-version="5.3.0"]',Ve=new RegExp("^"+je+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ge=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},Ye=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(Ve);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(Ue(l,c),Ge(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},Xe=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(je))return n}}(r),i=void 0!==o?o.nextSibling:null;n.setAttribute(je,"active"),n.setAttribute("data-styled-version","5.3.0");var a="undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null;return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},Je=function(){function e(e){var t=this.element=Xe(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}$e(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),Ze=function(){function e(e){var t=this.element=Xe(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ke=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Qe=Ne,et={isServer:!Ne,useCSSOMInjection:!ze},tt=function(){function e(e,t,r){void 0===e&&(e=Ie),void 0===t&&(t={}),this.options=Ae({},et,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&Ne&&Qe&&(Qe=!1,function(e){for(var t=document.querySelectorAll(We),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(je)&&(Ye(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return Be(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(Ae({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,o=t.target,e=r?new Ke(o):n?new Je(o):new Ze(o),new De(e)));var e,t,r,n,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(Be(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Be(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(Be(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++){var i=He(o);if(void 0!==i){var a=e.names.get(i),s=t.getGroup(o);if(void 0!==a&&0!==s.length){var c=je+".g"+o+'[id="'+i+'"]',l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),rt=/(a)(d)/gi,nt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ot(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=nt(t%52)+r;return(nt(t%52)+r).replace(rt,"$1-$2")}var it=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},at=function(e){return it(5381,e)};function st(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Oe(r)&&!Te(r))return!1}return!0}var ct=at("5.3.0"),lt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&st(e),this.componentId=t,this.baseHash=it(ct,t),this.baseStyle=r,tt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var i=At(this.rules,e,t,r).join(""),a=ot(it(this.baseHash,i.length)>>>0);if(!t.hasNameForId(n,a)){var s=r(i,"."+a,void 0,n);t.insertRules(n,a,s)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,l=it(this.baseHash,r.hash),u="",d=0;d<c;d++){var p=this.rules[d];if("string"==typeof p)u+=p;else if(p){var f=At(p,e,t,r),h=Array.isArray(f)?f.join(""):f;l=it(l,h+d),u+=h}}if(u){var m=ot(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}o.push(m)}}return o.join(" ")},e}(),ut=/^\s*\/\/.*$/gm,dt=[":","[",".","#"];var pt=s.c.createContext(),ft=(pt.Consumer,s.c.createContext()),ht=(ft.Consumer,new tt),mt=function(e){var t,r,n,o,i=void 0===e?Ie:e,a=i.options,s=void 0===a?Ie:a,c=i.plugins,l=void 0===c?Ee:c,u=new se(s),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,o,i,a,s,c,l,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(o[0]+n),"";default:return n+(0===d?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,n,i){return 0===n&&-1!==dt.indexOf(i[r.length])||i.match(o)?e:"."+t};function h(e,i,a,s){void 0===s&&(s="&");var c=e.replace(ut,""),l=i&&a?a+" "+i+" { "+c+" }":c;return t=s,r=i,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),u(a||!i?"":i,l)}return u.use([].concat(l,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(r)>0&&(o[0]=o[0].replace(n,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),h.hash=l.length?l.reduce((function(e,t){return t.name||$e(15),it(e,t.name)}),5381).toString():"",h}();function gt(){return s.c.useContext(pt)||ht}function yt(){return s.c.useContext(ft)||mt}var vt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=mt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return $e(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=mt),this.name+e.hash},e}(),bt=/([A-Z])/,wt=/([A-Z])/g,St=/^ms-/,kt=function(e){return"-"+e.toLowerCase()};function xt(e){return bt.test(e)?e.replace(wt,kt).replace(St,"-ms-"):e}var Ct=function(e){return null==e||!1===e||""===e};function At(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)""!==(o=At(e[a],t,r,n))&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}return Ct(e)?"":Te(e)?"."+e.styledComponentId:Oe(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:At(e(t),t,r,n):e instanceof vt?r?(e.inject(r,n),e.getName(n)):e:Pe(e)?function e(t,r){var n,o,i=[];for(var a in t)t.hasOwnProperty(a)&&!Ct(t[a])&&(Pe(t[a])?i.push.apply(i,e(t[a],a)):Oe(t[a])?i.push(xt(a)+":",t[a],";"):i.push(xt(a)+": "+(n=a,(null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in ce?String(o).trim():o+"px")+";")));return r?[r+" {"].concat(i,["}"]):i}(e):e.toString();var c}function _t(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Oe(e)||Pe(e)?At(_e(Ee,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:At(_e(e,r))}var Pt=function(e,t,r){return void 0===r&&(r=Ie),e.theme!==r.theme&&e.theme||t||r.theme},Et=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,It=/(^-|-$)/g;function Ot(e){return e.replace(Et,"-").replace(It,"")}var Rt=function(e){return ot(at(e)>>>0)};function Tt(e){return"string"==typeof e&&!0}var jt=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Nt=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function zt(e,t,r){var n=e[r];jt(t)&&jt(n)?Mt(n,t):e[r]=t}function Mt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(jt(a))for(var s in a)Nt(s)&&zt(e,a[s],s)}return e}var $t=s.c.createContext(),Dt=($t.Consumer,{});function Ft(e,t,r){var n=Te(e),o=!Tt(e),i=t.attrs,a=void 0===i?Ee:i,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Ot(e);Dt[r]=(Dt[r]||0)+1;var n=r+"-"+Rt("5.3.0"+r+Dt[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,u=t.displayName,d=void 0===u?function(e){return Tt(e)?"styled."+e:"Styled("+Re(e)+")"}(e):u,p=t.displayName&&t.componentId?Ot(t.displayName)+"-"+t.componentId:t.componentId||l,f=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;n&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(r,n,o){return e.shouldForwardProp(r,n,o)&&t.shouldForwardProp(r,n,o)}:e.shouldForwardProp);var m,g=new lt(r,p,n?e.componentStyle:void 0),y=g.isStatic&&0===a.length,v=function(e,t){return function(e,t,r,n){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,u=e.styledComponentId,d=e.target,p=function(e,t,r){void 0===e&&(e=Ie);var n=Ae({},t,{theme:e}),o={};return r.forEach((function(e){var t,r,i,a=e;for(t in Oe(a)&&(a=a(n)),a)n[t]=o[t]="className"===t?(r=o[t],i=a[t],r&&i?r+" "+i:r||i):a[t]})),[n,o]}(Pt(t,s.c.useContext($t),a)||Ie,t,o),f=p[0],h=p[1],m=function(e,t,r,n){var o=gt(),i=yt();return t?e.generateAndInjectStyles(Ie,o,i):e.generateAndInjectStyles(r,o,i)}(i,n,f),g=r,y=h.$as||t.$as||h.as||t.as||d,v=Tt(y),b=h!==t?Ae({},t,{},h):t,w={};for(var S in b)"$"!==S[0]&&"as"!==S&&("forwardedAs"===S?w.as=b[S]:(l?l(S,pe,y):!v||pe(S))&&(w[S]=b[S]));return t.style&&h.style!==t.style&&(w.style=Ae({},t.style,{},h.style)),w.className=Array.prototype.concat(c,u,m!==u?m:null,t.className,h.className).filter(Boolean).join(" "),w.ref=g,s.c.createElement(y,w)}(m,e,t,y)};return v.displayName=d,(m=s.c.forwardRef(v)).attrs=f,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=h,m.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ee,m.styledComponentId=p,m.target=n?e.target:e,m.withComponent=function(e){var n=t.componentId,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["componentId"]),i=n&&n+"-"+(Tt(e)?e:Ot(Re(e)));return Ft(e,Ae({},o,{attrs:f,componentId:i}),r)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?Mt({},e.defaultProps,t):t}}),m.toString=function(){return"."+m.styledComponentId},o&&Ce(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Lt=function(e){return function e(t,r,n){if(void 0===n&&(n=Ie),!ae.isValidElementType(r))return $e(1,String(r));var o=function(){return t(r,n,_t.apply(void 0,arguments))};return o.withConfig=function(o){return e(t,r,Ae({},n,{},o))},o.attrs=function(o){return e(t,r,Ae({},n,{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},o}(Ft,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Lt[e]=Lt(e)}));var qt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=st(e),tt.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var o=n(At(this.rules,t,r,n).join(""),""),i=this.componentId+e;r.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&tt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function Bt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=_t.apply(void 0,[e].concat(r)),i="sc-global-"+Rt(JSON.stringify(o)),a=new qt(o,i);function c(e){var t=gt(),r=yt(),n=s.c.useContext($t),o=s.c.useRef(t.allocateGSInstance(i)).current;return s.c.useLayoutEffect((function(){return l(o,e,t,n,r),function(){return a.removeStyles(o,t)}}),[o,e,t,n,r]),null}function l(e,t,r,n,o){if(a.isStatic)a.renderStyles(e,Me,r,o);else{var i=Ae({},t,{theme:Pt(t,n,c.defaultProps)});a.renderStyles(e,i,r,o)}}return s.c.memo(c)}var Ht=Lt;const Ut=Bt`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }

  hr {
    height: 0;
    color: inherit;
  }

  abbr[title] {
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }


  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.5;
  }

  body {
    font-family: inherit;
    line-height: inherit;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  hr {
    border-top-width: 1px;
  }

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }


      @keyframes spin {
          to { 
            transform: rotate(360deg);
          }
        }
      @keyframes ping {
          75%, 100% { 
            transform: scale(2); opacity: 0;
          }
        }
      @keyframes pulse {
          50% { 
            opacity: .5;
          }
        }
      @keyframes bounce {
          0%, 100% { 
            transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8,0,1,1);
          }
        
          50% { 
            transform: none; animationTimingFunction: cubic-bezier(0,0,0.2,1);
          }
        }
* {
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
  }
* {
  --tw-shadow: 0 0 #0000; }
`,Wt=Bt`
	body {
		-webkit-tap-highlight-color: ${"#8b5cf6"};
    ${{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}};
    ${{margin:"0px",padding:"0px"}}
	}
`;var Vt=()=>s.c.createElement(s.c.Fragment,null,s.c.createElement(Ut,null),s.c.createElement(Wt,null));const Gt=e=>{let t=!1,r=4;Math.ceil(100*Math.random())<=e&&(t=!0);const n=Math.ceil(100*Math.random());return n<=1?r=80:n<=5&&(r=10),t?r:0},Yt={pomodorosPlannedToday:21,pomodorosFinishedToday:0,rewardCoinsToday:0,pomodorosArray:[{id:"1",imageUrl:"https://miro.medium.com/max/4000/1*9eMyWLYOqU5aqBtVoFoi3Q.jpeg",description:"Invat despre Typescript",quantity:2,runningPomodoroStartedAt:null,pausedPomodoroMSecondsPassed:0},{id:"2",imageUrl:"https://cms-assets.tutsplus.com/uploads/users/30/posts/33545/preview_image/tailwind-pre.png",description:"Invat despre Tailwind chestiuni avansate",quantity:2,runningPomodoroStartedAt:null,pausedPomodoroMSecondsPassed:0},{id:"3",imageUrl:"https://worldfinancialreview.com/wp-content/uploads/2020/02/growth-hacking-2.jpg",description:"Lucrez la proiectele de growth hacking / recruiting",quantity:2,runningPomodoroStartedAt:null,pausedPomodoroMSecondsPassed:0},{id:"4",imageUrl:"https://images.newscientist.com/wp-content/uploads/2019/05/20111917/frank-bienewald-alamy-stock-photo.png",description:"Programez la proiectele hobby",quantity:3,runningPomodoroStartedAt:null,pausedPomodoroMSecondsPassed:0},{id:"5",imageUrl:"https://www.metro.ro/~/media/RO-Metro/image/corporate-image/despre-metro-wide.jpg?h=400&la=ro-RO&w=940",description:"Lucrez la proiectul MMetrics",quantity:12,runningPomodoroStartedAt:null,pausedPomodoroMSecondsPassed:0}]};function Xt(e,t){switch(t.type){case"stop":return{...e,pomodorosArray:e.pomodorosArray.map((e=>e.id===t.id?{...e,pausedPomodoroMSecondsPassed:e.pausedPomodoroMSecondsPassed+(new Date-e.runningPomodoroStartedAt),runningPomodoroStartedAt:null}:e))};case"start":return{...e,pomodorosArray:e.pomodorosArray.map((e=>e.id!==t.id&&null!==e.runningPomodoroStartedAt?{...e,pausedPomodoroMSecondsPassed:e.pausedPomodoroMSecondsPassed+(new Date-e.runningPomodoroStartedAt),runningPomodoroStartedAt:null}:e.id===t.id?{...e,runningPomodoroStartedAt:new Date}:e))};case"finish":return{...e,pomodorosFinishedToday:e.pomodorosFinishedToday+1,rewardCoinsToday:e.rewardCoinsToday+Gt(80),pomodorosArray:e.pomodorosArray.map((e=>e.id===t.id?{...e,quantity:e.quantity-1,runningPomodoroStartedAt:null,pausedPomodoroMSecondsPassed:0}:e))};default:return e}}const Jt=s.c.createContext({}),Zt=({children:e})=>{const[t,r]=d(Xt,Yt);return s.c.createElement(Jt.Provider,{value:{pomodoroState:t,pomodoroDispatch:r}},e)};var Kt=r.p+"assets/logo-d4e8ed48edb63456a8720c2359351e12.png";const Qt={pomodoroMaxValue:4,notificationsAreOn:!1,soundsAreOn:!1,skinnerBoxIsOn:!1};function er(e,t){switch(t.type){case"toggle sounds":return{...e,soundsAreOn:!e.soundsAreOn};case"toggle notifications":return{...e,notificationsAreOn:!e.notificationsAreOn};case"toggle skinner":return{...e,skinnerBoxIsOn:!e.skinnerBoxIsOn};case"update reward":return void 0!==t.value?{...e,pomodoroMaxValue:t.value}:e;default:return e}}const tr=c({}),rr=({children:e})=>{const[t,r]=d(er,Qt);return s.c.createElement(tr.Provider,{value:{userState:t,userDispatch:r}},e)};var nr=r.p+"assets/applause-4b8ca176250bc79f7ff09158e5c58ee1.mp3",or=r.p+"assets/click-8515d2a4e932291bcc9f798d5fdc2ca3.mp3";const ir=new Audio(nr),ar=new Audio(or),sr=_t(["width:100%;height:1.5px;background:linear-gradient(to right,#1e3a8a,#1e3a8a);background-color:#f3f4f6;position:absolute;top:0;left:0;right:0;margin:auto;border-radius:4px;background-size:20%;background-repeat:repeat-y;background-position:-20% 0;animation:scroll 1.7s ease-in-out infinite;@keyframes scroll{50%{background-size:80%;}100%{background-position:125% 0%;}}"]);var cr=Ht("div").withConfig({displayName:"TaskCard___StyledDiv",componentId:"yftq1c-0"})({width:"20%",height:"40%",marginLeft:"2.5rem","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",position:"relative",cursor:"pointer"}),lr=Ht("div").withConfig({displayName:"TaskCard___StyledDiv2",componentId:"yftq1c-1"})({height:"66.666667%",width:"100%"}),ur=Ht("div").withConfig({displayName:"TaskCard___StyledDiv3",componentId:"yftq1c-2"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(96, 165, 250, var(--tw-bg-opacity))",paddingLeft:"0.75rem",paddingRight:"0.75rem",fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",height:"33.333333%",position:"relative",display:"flex",alignItems:"center"}),dr=Ht("div").withConfig({displayName:"TaskCard___StyledDiv4",componentId:"yftq1c-3"})(["",""],(e=>e._css2)),pr=Ht("div").withConfig({displayName:"TaskCard___StyledDiv5",componentId:"yftq1c-4"})({width:"1.75rem",height:"1.75rem","--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",position:"absolute",borderRadius:"9999px","--tw-text-opacity":"1",color:"rgba(96, 165, 250, var(--tw-text-opacity))",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"600",top:"-0.75rem",left:"-0.75rem"});const fr=({individualPomodoro:e,startPomodoro:t,stopPomodoro:r,finishPomodoro:n})=>{const{userState:o}=l(tr);u((()=>{if(null!==e.runningPomodoroStartedAt){const t=setInterval((()=>{const t=new Date-e.runningPomodoroStartedAt+e.pausedPomodoroMSecondsPassed;console.log(t),t>5e3&&(console.log(o),o.soundsAreOn&&ir.play(),n(e.id))}),1e3);return()=>clearInterval(t)}}),[e.runningPomodoroStartedAt,o]);return s.c.createElement(cr,{onClick:()=>{null===e.runningPomodoroStartedAt?(o.soundsAreOn&&ar.play(),t(e.id)):null!==e.runningPomodoroStartedAt&&r(e.id)}},s.c.createElement(lr,{style:{backgroundImage:`url(${e.imageUrl})`,backgroundSize:"cover",backgroundPosition:"center center"}}),s.c.createElement(ur,null,null!==e.runningPomodoroStartedAt&&s.c.createElement(dr,{_css2:[sr]}),s.c.createElement(pr,null,e.quantity),e.description))};var hr=Ht("div").withConfig({displayName:"App___StyledDiv",componentId:"sc-12aow5e-0"})({width:"100%",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}),mr=Ht("div").withConfig({displayName:"App___StyledDiv2",componentId:"sc-12aow5e-1"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(30, 58, 138, var(--tw-bg-opacity))",height:"100%",width:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:"0px"}),gr=Ht("img").withConfig({displayName:"App___StyledImg",componentId:"sc-12aow5e-2"})({width:"1rem",height:"1rem"}),yr=Ht("div").withConfig({displayName:"App___StyledDiv3",componentId:"sc-12aow5e-3"})({maxWidth:"64rem",width:"100%",height:"100%",display:"flex",alignItems:"center"}),vr=Ht("div").withConfig({displayName:"App___StyledDiv4",componentId:"sc-12aow5e-4"})({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgba(30, 58, 138, var(--tw-text-opacity))"}),br=Ht("span").withConfig({displayName:"App___StyledSpan",componentId:"sc-12aow5e-5"})({"--tw-text-opacity":"1",color:"rgba(96, 165, 250, var(--tw-text-opacity))"}),wr=Ht("div").withConfig({displayName:"App___StyledDiv5",componentId:"sc-12aow5e-6"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",width:"100%",height:"100vh",maxHeight:"10rem",display:"flex",justifyContent:"center",alignItems:"center"}),Sr=Ht("div").withConfig({displayName:"App___StyledDiv6",componentId:"sc-12aow5e-7"})({maxWidth:"64rem",width:"100%",display:"flex"}),kr=Ht("div").withConfig({displayName:"App___StyledDiv7",componentId:"sc-12aow5e-8"})({borderLeftWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(96, 165, 250, var(--tw-border-opacity))",height:"1rem",marginTop:"0.5rem"}),xr=Ht("div").withConfig({displayName:"App___StyledDiv8",componentId:"sc-12aow5e-9"})({paddingLeft:"0.5rem",width:"50%"}),Cr=Ht("div").withConfig({displayName:"App___StyledDiv9",componentId:"sc-12aow5e-10"})({"--tw-text-opacity":"1",color:"rgba(30, 58, 138, var(--tw-text-opacity))",fontWeight:"500",fontSize:"1.125rem",lineHeight:"1.75rem"}),Ar=Ht("div").withConfig({displayName:"App___StyledDiv10",componentId:"sc-12aow5e-11"})({"--tw-text-opacity":"1",color:"rgba(209, 213, 219, var(--tw-text-opacity))",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"300",paddingTop:"0.5rem"}),_r=Ht("div").withConfig({displayName:"App___StyledDiv11",componentId:"sc-12aow5e-12"})({width:"100%",height:"100vh",maxHeight:"24rem",display:"flex",justifyContent:"center",paddingTop:"2.5rem",position:"relative"}),Pr=Ht("div").withConfig({displayName:"App___StyledDiv12",componentId:"sc-12aow5e-13"})({maxWidth:"64rem",width:"100%",display:"flex",flexWrap:"wrap",marginLeft:"-5rem"}),Er=Ht("div").withConfig({displayName:"App___StyledDiv13",componentId:"sc-12aow5e-14"})({position:"absolute",right:"4rem",bottom:"0px",fontSize:"0.75rem",lineHeight:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgba(96, 165, 250, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",paddingTop:"0.5rem",paddingBottom:"0.5rem",width:"12rem",textAlign:"center"}),Ir=Ht("div").withConfig({displayName:"App___StyledDiv14",componentId:"sc-12aow5e-15"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}),Or=Ht("div").withConfig({displayName:"App___StyledDiv15",componentId:"sc-12aow5e-16"})({maxWidth:"64rem",width:"100%",display:"flex",paddingTop:"0.5rem",fontSize:"0.75rem",lineHeight:"1rem"}),Rr=Ht("div").withConfig({displayName:"App___StyledDiv16",componentId:"sc-12aow5e-17"})(["",""],(e=>e._css)),Tr=Ht("svg").withConfig({displayName:"App___StyledSvg",componentId:"sc-12aow5e-18"})({fill:"currentColor",height:"0.75rem",width:"0.75rem",marginRight:"0.25rem"}),jr=Ht("div").withConfig({displayName:"App___StyledDiv17",componentId:"sc-12aow5e-19"})(["",""],(e=>e._css2)),Nr=Ht("svg").withConfig({displayName:"App___StyledSvg2",componentId:"sc-12aow5e-20"})({fill:"currentColor",height:"0.75rem",width:"0.75rem",marginRight:"0.25rem"}),zr=Ht("div").withConfig({displayName:"App___StyledDiv18",componentId:"sc-12aow5e-21"})(["",""],(e=>e._css3)),Mr=Ht("svg").withConfig({displayName:"App___StyledSvg3",componentId:"sc-12aow5e-22"})({fill:"currentColor",height:"0.75rem",width:"0.75rem",marginRight:"0.25rem"}),$r=Ht("div").withConfig({displayName:"App___StyledDiv19",componentId:"sc-12aow5e-23"})({position:"absolute",right:"4rem",top:"0px","--tw-bg-opacity":"1",backgroundColor:"rgba(30, 58, 138, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontSize:"0.75rem",lineHeight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",width:"12rem",textAlign:"center"});var Dr=()=>{const{pomodoroState:e,pomodoroDispatch:t}=l(Jt),{userState:r,userDispatch:n}=l(tr);return s.c.createElement(s.c.Fragment,null,s.c.createElement(hr,null,s.c.createElement(mr,null,s.c.createElement(gr,{src:Kt})),s.c.createElement(yr,null,s.c.createElement(vr,null,"Pomodoro ",s.c.createElement(br,null,"21.0")))),s.c.createElement(wr,null,s.c.createElement(Sr,null,s.c.createElement(kr,null),s.c.createElement(xr,null,s.c.createElement(Cr,null,"You can break today’s plan into small steps and take the first step right away."),s.c.createElement(Ar,null,"Inspired by Indira Gandhi")))),s.c.createElement(_r,{style:{backgroundImage:"linear-gradient(to bottom, rgba(208, 230, 255, 0.9), rgba(223, 238, 255, 0.9)), url('https://i.pinimg.com/originals/3b/7f/57/3b7f574e1e03b7bb3d4c7144763678da.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}},s.c.createElement(Pr,null,e&&e.pomodorosArray&&e.pomodorosArray.map(((e,r)=>e.quantity>0?s.c.createElement(fr,{key:e.id,individualPomodoro:e,startPomodoro:()=>t({type:"start",id:e.id}),stopPomodoro:()=>t({type:"stop",id:e.id}),finishPomodoro:()=>t({type:"finish",id:e.id})}):null))),s.c.createElement(Er,null,e.pomodorosPlannedToday-e.pomodorosFinishedToday," ","pomodoros left")),s.c.createElement(Ir,null,s.c.createElement(Or,null,s.c.createElement(Rr,{onClick:()=>n({type:"toggle skinner"}),_css:[{display:"flex",alignItems:"center",marginRight:"0.75rem","--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))",cursor:"pointer",userSelect:"none"},r.skinnerBoxIsOn&&{"--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))"}]},s.c.createElement(Tr,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.c.createElement("path",{fillRule:"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",clipRule:"evenodd"}),s.c.createElement("path",{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"})),"rewards"),s.c.createElement(jr,{onClick:()=>n({type:"toggle notifications"}),_css2:[{display:"flex",alignItems:"center",marginRight:"0.75rem","--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))",cursor:"pointer",userSelect:"none"},r.notificationsAreOn&&{"--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))"}]},s.c.createElement(Nr,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.c.createElement("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})),"notifications"),s.c.createElement(zr,{onClick:()=>n({type:"toggle sounds"}),_css3:[{display:"flex",alignItems:"center",marginRight:"0.75rem","--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))",cursor:"pointer",userSelect:"none"},r.soundsAreOn&&{"--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))"}]},s.c.createElement(Mr,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.c.createElement("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"})),"sound")),s.c.createElement($r,null,"total rewards ",e.rewardCoinsToday," ron")))};({url:function(e){const t=r.p;let n="";return(!t||t.indexOf("://")<0)&&(n+=window.location.protocol+"//"+window.location.host),n+=t||"/",n+e}("dist/index.js"),env:n}).env=n,p.a.render(s.c.createElement(s.c.StrictMode,null,s.c.createElement(Vt,null),s.c.createElement(rr,null,s.c.createElement(Zt,null,s.c.createElement(Dr,null)))),document.getElementById("root"))}],[[2,2,1]]]);