(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();var Md={exports:{}},ql={};var i_;function MS(){if(i_)return ql;i_=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:r,key:f,ref:o!==void 0?o:null,props:c}}return ql.Fragment=e,ql.jsx=a,ql.jsxs=a,ql}var a_;function ES(){return a_||(a_=1,Md.exports=MS()),Md.exports}var x=ES(),Ed={exports:{}},dt={};var s_;function TS(){if(s_)return dt;s_=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function b(B){return B===null||typeof B!="object"?null:(B=y&&B[y]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(B,te,be){this.props=B,this.context=te,this.refs=M,this.updater=be||E}v.prototype.isReactComponent={},v.prototype.setState=function(B,te){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,te,"setState")},v.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function w(){}w.prototype=v.prototype;function N(B,te,be){this.props=B,this.context=te,this.refs=M,this.updater=be||E}var P=N.prototype=new w;P.constructor=N,A(P,v.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function U(B,te,be){var Ae=be.ref;return{$$typeof:i,type:B,key:te,ref:Ae!==void 0?Ae:null,props:be}}function D(B,te){return U(B.type,te,B.props)}function k(B){return typeof B=="object"&&B!==null&&B.$$typeof===i}function Q(B){var te={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(be){return te[be]})}var re=/\/+/g;function pe(B,te){return typeof B=="object"&&B!==null&&B.key!=null?Q(""+B.key):te.toString(36)}function ue(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(O,O):(B.status="pending",B.then(function(te){B.status==="pending"&&(B.status="fulfilled",B.value=te)},function(te){B.status==="pending"&&(B.status="rejected",B.reason=te)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,te,be,Ae,Be){var ie=typeof B;(ie==="undefined"||ie==="boolean")&&(B=null);var oe=!1;if(B===null)oe=!0;else switch(ie){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(B.$$typeof){case i:case e:oe=!0;break;case g:return oe=B._init,z(oe(B._payload),te,be,Ae,Be)}}if(oe)return Be=Be(B),oe=Ae===""?"."+pe(B,0):Ae,G(Be)?(be="",oe!=null&&(be=oe.replace(re,"$&/")+"/"),z(Be,te,be,"",function(Ye){return Ye})):Be!=null&&(k(Be)&&(Be=D(Be,be+(Be.key==null||B&&B.key===Be.key?"":(""+Be.key).replace(re,"$&/")+"/")+oe)),te.push(Be)),1;oe=0;var Ne=Ae===""?".":Ae+":";if(G(B))for(var Ge=0;Ge<B.length;Ge++)Ae=B[Ge],ie=Ne+pe(Ae,Ge),oe+=z(Ae,te,be,ie,Be);else if(Ge=b(B),typeof Ge=="function")for(B=Ge.call(B),Ge=0;!(Ae=B.next()).done;)Ae=Ae.value,ie=Ne+pe(Ae,Ge++),oe+=z(Ae,te,be,ie,Be);else if(ie==="object"){if(typeof B.then=="function")return z(ue(B),te,be,Ae,Be);throw te=String(B),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return oe}function W(B,te,be){if(B==null)return B;var Ae=[],Be=0;return z(B,Ae,"","",function(ie){return te.call(be,ie,Be++)}),Ae}function X(B){if(B._status===-1){var te=B._result;te=te(),te.then(function(be){(B._status===0||B._status===-1)&&(B._status=1,B._result=be)},function(be){(B._status===0||B._status===-1)&&(B._status=2,B._result=be)}),B._status===-1&&(B._status=0,B._result=te)}if(B._status===1)return B._result.default;throw B._result}var _e=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},ye={map:W,forEach:function(B,te,be){W(B,function(){te.apply(this,arguments)},be)},count:function(B){var te=0;return W(B,function(){te++}),te},toArray:function(B){return W(B,function(te){return te})||[]},only:function(B){if(!k(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return dt.Activity=_,dt.Children=ye,dt.Component=v,dt.Fragment=a,dt.Profiler=o,dt.PureComponent=N,dt.StrictMode=r,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,dt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return F.H.useMemoCache(B)}},dt.cache=function(B){return function(){return B.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(B,te,be){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ae=A({},B.props),Be=B.key;if(te!=null)for(ie in te.key!==void 0&&(Be=""+te.key),te)!K.call(te,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&te.ref===void 0||(Ae[ie]=te[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=be;else if(1<ie){for(var oe=Array(ie),Ne=0;Ne<ie;Ne++)oe[Ne]=arguments[Ne+2];Ae.children=oe}return U(B.type,Be,Ae)},dt.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},dt.createElement=function(B,te,be){var Ae,Be={},ie=null;if(te!=null)for(Ae in te.key!==void 0&&(ie=""+te.key),te)K.call(te,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=te[Ae]);var oe=arguments.length-2;if(oe===1)Be.children=be;else if(1<oe){for(var Ne=Array(oe),Ge=0;Ge<oe;Ge++)Ne[Ge]=arguments[Ge+2];Be.children=Ne}if(B&&B.defaultProps)for(Ae in oe=B.defaultProps,oe)Be[Ae]===void 0&&(Be[Ae]=oe[Ae]);return U(B,ie,Be)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(B){return{$$typeof:h,render:B}},dt.isValidElement=k,dt.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:X}},dt.memo=function(B,te){return{$$typeof:p,type:B,compare:te===void 0?null:te}},dt.startTransition=function(B){var te=F.T,be={};F.T=be;try{var Ae=B(),Be=F.S;Be!==null&&Be(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,_e)}catch(ie){_e(ie)}finally{te!==null&&be.types!==null&&(te.types=be.types),F.T=te}},dt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},dt.use=function(B){return F.H.use(B)},dt.useActionState=function(B,te,be){return F.H.useActionState(B,te,be)},dt.useCallback=function(B,te){return F.H.useCallback(B,te)},dt.useContext=function(B){return F.H.useContext(B)},dt.useDebugValue=function(){},dt.useDeferredValue=function(B,te){return F.H.useDeferredValue(B,te)},dt.useEffect=function(B,te){return F.H.useEffect(B,te)},dt.useEffectEvent=function(B){return F.H.useEffectEvent(B)},dt.useId=function(){return F.H.useId()},dt.useImperativeHandle=function(B,te,be){return F.H.useImperativeHandle(B,te,be)},dt.useInsertionEffect=function(B,te){return F.H.useInsertionEffect(B,te)},dt.useLayoutEffect=function(B,te){return F.H.useLayoutEffect(B,te)},dt.useMemo=function(B,te){return F.H.useMemo(B,te)},dt.useOptimistic=function(B,te){return F.H.useOptimistic(B,te)},dt.useReducer=function(B,te,be){return F.H.useReducer(B,te,be)},dt.useRef=function(B){return F.H.useRef(B)},dt.useState=function(B){return F.H.useState(B)},dt.useSyncExternalStore=function(B,te,be){return F.H.useSyncExternalStore(B,te,be)},dt.useTransition=function(){return F.H.useTransition()},dt.version="19.2.0",dt}var r_;function ou(){return r_||(r_=1,Ed.exports=TS()),Ed.exports}var ve=ou(),Td={exports:{}},Wl={},Ad={exports:{}},Rd={};var l_;function AS(){return l_||(l_=1,(function(i){function e(z,W){var X=z.length;z.push(W);e:for(;0<X;){var _e=X-1>>>1,ye=z[_e];if(0<o(ye,W))z[_e]=W,z[X]=ye,X=_e;else break e}}function a(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],X=z.pop();if(X!==W){z[0]=X;e:for(var _e=0,ye=z.length,B=ye>>>1;_e<B;){var te=2*(_e+1)-1,be=z[te],Ae=te+1,Be=z[Ae];if(0>o(be,X))Ae<ye&&0>o(Be,be)?(z[_e]=Be,z[Ae]=X,_e=Ae):(z[_e]=be,z[te]=X,_e=te);else if(Ae<ye&&0>o(Be,X))z[_e]=Be,z[Ae]=X,_e=Ae;else break e}}return W}function o(z,W){var X=z.sortIndex-W.sortIndex;return X!==0?X:z.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();i.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,y=3,b=!1,E=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var W=a(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=z)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=a(p)}}function G(z){if(A=!1,P(z),!E)if(a(m)!==null)E=!0,O||(O=!0,Q());else{var W=a(p);W!==null&&ue(G,W.startTime-z)}}var O=!1,F=-1,K=5,U=-1;function D(){return M?!0:!(i.unstable_now()-U<K)}function k(){if(M=!1,O){var z=i.unstable_now();U=z;var W=!0;try{e:{E=!1,A&&(A=!1,w(F),F=-1),b=!0;var X=y;try{t:{for(P(z),_=a(m);_!==null&&!(_.expirationTime>z&&D());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,y=_.priorityLevel;var ye=_e(_.expirationTime<=z);if(z=i.unstable_now(),typeof ye=="function"){_.callback=ye,P(z),W=!0;break t}_===a(m)&&r(m),P(z)}else r(m);_=a(m)}if(_!==null)W=!0;else{var B=a(p);B!==null&&ue(G,B.startTime-z),W=!1}}break e}finally{_=null,y=X,b=!1}W=void 0}}finally{W?Q():O=!1}}}var Q;if(typeof N=="function")Q=function(){N(k)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,pe=re.port2;re.port1.onmessage=k,Q=function(){pe.postMessage(null)}}else Q=function(){v(k,0)};function ue(z,W){F=v(function(){z(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_next=function(z){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var X=y;y=W;try{return z()}finally{y=X}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=y;y=z;try{return W()}finally{y=X}},i.unstable_scheduleCallback=function(z,W,X){var _e=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_e+X:_e):X=_e,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=X+ye,z={id:g++,callback:W,priorityLevel:z,startTime:X,expirationTime:ye,sortIndex:-1},X>_e?(z.sortIndex=X,e(p,z),a(m)===null&&z===a(p)&&(A?(w(F),F=-1):A=!0,ue(G,X-_e))):(z.sortIndex=ye,e(m,z),E||b||(E=!0,O||(O=!0,Q()))),z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(z){var W=y;return function(){var X=y;y=W;try{return z.apply(this,arguments)}finally{y=X}}}})(Rd)),Rd}var o_;function RS(){return o_||(o_=1,Ad.exports=AS()),Ad.exports}var Cd={exports:{}},kn={};var c_;function CS(){if(c_)return kn;c_=1;var i=ou();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},kn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},kn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:b}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},kn.requestFormReset=function(m){r.d.r(m)},kn.unstable_batchedUpdates=function(m,p){return m(p)},kn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},kn.version="19.2.0",kn}var u_;function wS(){if(u_)return Cd.exports;u_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Cd.exports=CS(),Cd.exports}var f_;function NS(){if(f_)return Wl;f_=1;var i=RS(),e=ou(),a=wS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===l)return m(u),n;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=d;else{for(var S=!1,R=u.child;R;){if(R===s){S=!0,s=u,l=d;break}if(R===l){S=!0,l=u,s=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===s){S=!0,s=d,l=u;break}if(R===l){S=!0,l=d,s=u;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case O:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ue=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},_e=[],ye=-1;function B(t){return{current:t}}function te(t){0>ye||(t.current=_e[ye],_e[ye]=null,ye--)}function be(t,n){ye++,_e[ye]=t.current,t.current=n}var Ae=B(null),Be=B(null),ie=B(null),oe=B(null);function Ne(t,n){switch(be(ie,n),be(Be,t),be(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ax(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ax(n),t=Rx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ae),be(Ae,t)}function Ge(){te(Ae),te(Be),te(ie)}function Ye(t){t.memoizedState!==null&&be(oe,t);var n=Ae.current,s=Rx(n,t.type);n!==s&&(be(Be,t),be(Ae,s))}function ct(t){Be.current===t&&(te(Ae),te(Be)),oe.current===t&&(te(oe),Vl._currentValue=X)}var bt,ut;function Mt(t){if(bt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);bt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+ut}var H=!1;function ft(t,n){if(!t||H)return"";H=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var ae=le}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(le){ae=le}t.call(Se.prototype)}}else{try{throw Error()}catch(le){ae=le}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var I=S.split(`
`),ee=R.split(`
`);for(u=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(l===I.length||u===ee.length)for(l=I.length-1,u=ee.length-1;1<=l&&0<=u&&I[l]!==ee[u];)u--;for(;1<=l&&0<=u;l--,u--)if(I[l]!==ee[u]){if(l!==1||u!==1)do if(l--,u--,0>u||I[l]!==ee[u]){var he=`
`+I[l].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=l&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Mt(s):""}function ht(t,n){switch(t.tag){case 26:case 27:case 5:return Mt(t.type);case 16:return Mt("Lazy");case 13:return t.child!==n&&n!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Mt("Activity");default:return""}}function yt(t){try{var n="",s=null;do n+=ht(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xe=Object.prototype.hasOwnProperty,kt=i.unstable_scheduleCallback,Ze=i.unstable_cancelCallback,Le=i.unstable_shouldYield,L=i.unstable_requestPaint,T=i.unstable_now,$=i.unstable_getCurrentPriorityLevel,xe=i.unstable_ImmediatePriority,Me=i.unstable_UserBlockingPriority,ce=i.unstable_NormalPriority,$e=i.unstable_LowPriority,Ue=i.unstable_IdlePriority,Je=i.log,We=i.unstable_setDisableYieldValue,Ee=null,Te=null;function Ie(t){if(typeof Je=="function"&&We(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var He=Math.clz32?Math.clz32:V,Pe=Math.log,at=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Pe(t)/at|0)|0}var De=256,Re=262144,Ce=4194304;function me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fe(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?u=me(l):(S&=R,S!==0?u=me(S):s||(s=R&~t,s!==0&&(u=me(s))))):(R=l&~d,R!==0?u=me(R):S!==0?u=me(S):s||(s=l&~t,s!==0&&(u=me(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function Lt(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ti(t,n,s,l,u,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,I=t.expirationTimes,ee=t.hiddenUpdates;for(s=S&~s;0<s;){var he=31-He(s),Se=1<<he;R[he]=0,I[he]=-1;var ae=ee[he];if(ae!==null)for(ee[he]=null,he=0;he<ae.length;he++){var le=ae[he];le!==null&&(le.lane&=-536870913)}s&=~Se}l!==0&&xo(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function xo(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function el(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-He(s),u=1<<l;u&n|t[l]&n&&(t[l]|=n),s&=~u}}function tl(t,n){var s=n&-n;return s=(s&42)!==0?1:Ci(s),(s&(t.suspendedLanes|n))!==0?0:s}function Ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _s(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function nl(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Kx(t.type))}function il(t,n){var s=W.p;try{return W.p=t,n()}finally{W.p=s}}var ni=Math.random().toString(36).slice(2),_n="__reactFiber$"+ni,Mn="__reactProps$"+ni,$i="__reactContainer$"+ni,Zs="__reactEvents$"+ni,xu="__reactListeners$"+ni,_u="__reactHandles$"+ni,_o="__reactResources$"+ni,gs="__reactMarker$"+ni;function al(t){delete t[_n],delete t[Mn],delete t[Zs],delete t[xu],delete t[_u]}function La(t){var n=t[_n];if(n)return n;for(var s=t.parentNode;s;){if(n=s[$i]||s[_n]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Ox(t);t!==null;){if(s=t[_n])return s;t=Ox(t)}return n}t=s,s=t.parentNode}return null}function C(t){if(t=t[_n]||t[$i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function se(t){var n=t[_o];return n||(n=t[_o]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ne(t){t[gs]=!0}var Z=new Set,we={};function Oe(t,n){Ve(t,n),Ve(t+"Capture",n)}function Ve(t,n){for(we[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},rt={};function et(t){return Xe.call(rt,t)?!0:Xe.call(it,t)?!1:je.test(t)?rt[t]=!0:(it[t]=!0,!1)}function xt(t,n,s){if(et(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Pt(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ft(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Ct(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Jt(t){if(!t._valueTracker){var n=jt(t)?"checked":"value";t._valueTracker=nt(t,n,""+t[n])}}function wt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=jt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function wn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oa=/[\n"\\]/g;function tn(t){return t.replace(Oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Qi(t,n,s,l,u,d,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ct(n)):t.value!==""+Ct(n)&&(t.value=""+Ct(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Nn(t,S,Ct(n)):s!=null?Nn(t,S,Ct(s)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ct(R):t.removeAttribute("name")}function nn(t,n,s,l,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Jt(t);return}s=s!=null?""+Ct(s):"",n=n!=null?""+Ct(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Jt(t)}function Nn(t,n,s){n==="number"&&wn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function En(t,n,s,l){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ct(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Dn(t,n,s){if(n!=null&&(n=""+Ct(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Ct(s):""}function Fn(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(ue(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Ct(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Jt(t)}function Hi(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mp(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Ji.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Ep(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&s[u]!==l&&Mp(t,u,l)}else for(var d in n)n.hasOwnProperty(d)&&Mp(t,d,n[d])}function gu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function go(t){return yv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var vu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,$s=null;function Tp(t){var n=C(t);if(n&&(t=n.stateNode)){var s=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Qi(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+tn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var u=l[Mn]||null;if(!u)throw Error(r(90));Qi(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&wt(l)}break e;case"textarea":Dn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&En(t,!!s.multiple,n,!1)}}}var Su=!1;function Ap(t,n,s){if(Su)return t(n,s);Su=!0;try{var l=t(n);return l}finally{if(Su=!1,(Ks!==null||$s!==null)&&(sc(),Ks&&(n=Ks,t=$s,$s=Ks=null,Tp(n),t)))for(n=0;n<t.length;n++)Tp(t[n])}}function sl(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Mn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(ta)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){bu=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{bu=!1}var Pa=null,Mu=null,vo=null;function Rp(){if(vo)return vo;var t,n=Mu,s=n.length,l,u="value"in Pa?Pa.value:Pa.textContent,d=u.length;for(t=0;t<s&&n[t]===u[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===u[d-l];l++);return vo=u.slice(t,1<l?1-l:void 0)}function yo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function Cp(){return!1}function Yn(t){function n(s,l,u,d,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?So:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),n}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Yn(vs),ll=_({},vs,{view:0,detail:0}),Sv=Yn(ll),Eu,Tu,ol,Mo=_({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ol&&(ol&&t.type==="mousemove"?(Eu=t.screenX-ol.screenX,Tu=t.screenY-ol.screenY):Tu=Eu=0,ol=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),wp=Yn(Mo),bv=_({},Mo,{dataTransfer:0}),Mv=Yn(bv),Ev=_({},ll,{relatedTarget:0}),Au=Yn(Ev),Tv=_({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=Yn(Tv),Rv=_({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=Yn(Rv),wv=_({},vs,{data:0}),Np=Yn(wv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Uv[t])?!!n[t]:!1}function Ru(){return Lv}var Ov=_({},ll,{key:function(t){if(t.key){var n=Nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pv=Yn(Ov),Bv=_({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Yn(Bv),Fv=_({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),zv=Yn(Fv),Iv=_({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=Yn(Iv),Gv=_({},Mo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Yn(Gv),kv=_({},vs,{newState:0,oldState:0}),jv=Yn(kv),Xv=[9,13,27,32],Cu=ta&&"CompositionEvent"in window,cl=null;ta&&"documentMode"in document&&(cl=document.documentMode);var qv=ta&&"TextEvent"in window&&!cl,Up=ta&&(!Cu||cl&&8<cl&&11>=cl),Lp=" ",Op=!1;function Pp(t,n){switch(t){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function Wv(t,n){switch(t){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Op=!0,Lp);case"textInput":return t=n.data,t===Lp&&Op?null:t;default:return null}}function Yv(t,n){if(Qs)return t==="compositionend"||!Cu&&Pp(t,n)?(t=Rp(),vo=Mu=Pa=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zv[t.type]:n==="textarea"}function zp(t,n,s,l){Ks?$s?$s.push(l):$s=[l]:Ks=l,n=dc(n,"onChange"),0<n.length&&(s=new bo("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var ul=null,fl=null;function Kv(t){yx(t,0)}function Eo(t){var n=q(t);if(wt(n))return t}function Ip(t,n){if(t==="change")return n}var Hp=!1;if(ta){var wu;if(ta){var Nu="oninput"in document;if(!Nu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Nu=typeof Gp.oninput=="function"}wu=Nu}else wu=!1;Hp=wu&&(!document.documentMode||9<document.documentMode)}function Vp(){ul&&(ul.detachEvent("onpropertychange",kp),fl=ul=null)}function kp(t){if(t.propertyName==="value"&&Eo(fl)){var n=[];zp(n,fl,t,yu(t)),Ap(Kv,n)}}function $v(t,n,s){t==="focusin"?(Vp(),ul=n,fl=s,ul.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eo(fl)}function Jv(t,n){if(t==="click")return Eo(n)}function ey(t,n){if(t==="input"||t==="change")return Eo(n)}function ty(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:ty;function dl(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Xe.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,n){var s=jp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=jp(s)}}function qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=wn(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=wn(t.document)}return n}function Du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ny=ta&&"documentMode"in document&&11>=document.documentMode,Js=null,Uu=null,hl=null,Lu=!1;function Yp(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lu||Js==null||Js!==wn(l)||(l=Js,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hl&&dl(hl,l)||(hl=l,l=dc(Uu,"onSelect"),0<l.length&&(n=new bo("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Js)))}function ys(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var er={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Ou={},Zp={};ta&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ss(t){if(Ou[t])return Ou[t];if(!er[t])return t;var n=er[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Zp)return Ou[t]=n[s];return t}var Kp=Ss("animationend"),$p=Ss("animationiteration"),Qp=Ss("animationstart"),iy=Ss("transitionrun"),ay=Ss("transitionstart"),sy=Ss("transitioncancel"),Jp=Ss("transitionend"),em=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function wi(t,n){em.set(t,n),Oe(n,[t])}var To=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],tr=0,Bu=0;function Ao(){for(var t=tr,n=Bu=tr=0;n<t;){var s=_i[n];_i[n++]=null;var l=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,l!==null&&u!==null){var S=l.pending;S===null?u.next=u:(u.next=S.next,S.next=u),l.pending=u}d!==0&&tm(s,u,d)}}function Ro(t,n,s,l){_i[tr++]=t,_i[tr++]=n,_i[tr++]=s,_i[tr++]=l,Bu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Fu(t,n,s,l){return Ro(t,n,s,l),Co(t)}function bs(t,n){return Ro(t,null,null,n),Co(t)}function tm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-He(s),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[n]:l.push(n),n.lane=s|536870912),d):null}function Co(t){if(50<Pl)throw Pl=0,Wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var nr={};function ry(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,s,l){return new ry(t,n,s,l)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var s=t.alternate;return s===null?(s=ai(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function nm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wo(t,n,s,l,u,d){var S=0;if(l=t,typeof t=="function")zu(t)&&(S=1);else if(typeof t=="string")S=fS(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=ai(31,s,n,u),t.elementType=U,t.lanes=d,t;case A:return Ms(s.children,u,d,n);case M:S=8,u|=24;break;case v:return t=ai(12,s,n,u|2),t.elementType=v,t.lanes=d,t;case G:return t=ai(13,s,n,u),t.elementType=G,t.lanes=d,t;case O:return t=ai(19,s,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:S=10;break e;case w:S=9;break e;case P:S=11;break e;case F:S=14;break e;case K:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=ai(S,s,n,u),n.elementType=t,n.type=l,n.lanes=d,n}function Ms(t,n,s,l){return t=ai(7,t,l,n),t.lanes=s,t}function Iu(t,n,s){return t=ai(6,t,null,n),t.lanes=s,t}function im(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,s){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var s=am.get(t);return s!==void 0?s:(n={value:t,source:n,stack:yt(n)},am.set(t,n),n)}return{value:t,source:n,stack:yt(n)}}var ir=[],ar=0,No=null,pl=0,vi=[],yi=0,Ba=null,Gi=1,Vi="";function ia(t,n){ir[ar++]=pl,ir[ar++]=No,No=t,pl=n}function sm(t,n,s){vi[yi++]=Gi,vi[yi++]=Vi,vi[yi++]=Ba,Ba=t;var l=Gi;t=Vi;var u=32-He(l)-1;l&=~(1<<u),s+=1;var d=32-He(n)+u;if(30<d){var S=u-u%5;d=(l&(1<<S)-1).toString(32),l>>=S,u-=S,Gi=1<<32-He(n)+u|s<<u|l,Vi=d+t}else Gi=1<<d|s<<u|l,Vi=t}function Gu(t){t.return!==null&&(ia(t,1),sm(t,1,0))}function Vu(t){for(;t===No;)No=ir[--ar],ir[ar]=null,pl=ir[--ar],ir[ar]=null;for(;t===Ba;)Ba=vi[--yi],vi[yi]=null,Vi=vi[--yi],vi[yi]=null,Gi=vi[--yi],vi[yi]=null}function rm(t,n){vi[yi++]=Gi,vi[yi++]=Vi,vi[yi++]=Ba,Gi=n.id,Vi=n.overflow,Ba=t}var zn=null,an=null,Nt=!1,Fa=null,Si=!1,ku=Error(r(519));function za(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ml(gi(n,t)),ku}function lm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[_n]=t,n[Mn]=l,s){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(s=0;s<Fl.length;s++)Tt(Fl[s],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),nn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),Fn(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Ex(n.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),l.onScroll!=null&&Tt("scroll",n),l.onScrollEnd!=null&&Tt("scrollend",n),l.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||za(t,!0)}function om(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:zn=zn.return}}function sr(t){if(t!==zn)return!1;if(!Nt)return om(t),Nt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||od(t.type,t.memoizedProps)),s=!s),s&&an&&za(t),om(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=Lx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=Lx(t)}else n===27?(n=an,Qa(t.type)?(t=hd,hd=null,an=t):an=n):an=zn?Mi(t.stateNode.nextSibling):null;return!0}function Es(){an=zn=null,Nt=!1}function ju(){var t=Fa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Fa=null),t}function ml(t){Fa===null?Fa=[t]:Fa.push(t)}var Xu=B(null),Ts=null,aa=null;function Ia(t,n,s){be(Xu,n._currentValue),n._currentValue=s}function sa(t){t._currentValue=Xu.current,te(Xu)}function qu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Wu(t,n,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var I=0;I<n.length;I++)if(R.context===n[I]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),qu(d.return,s,t),l||(S=null);break e}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),qu(S,s,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function rr(t,n,s,l){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=u.type;ii(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===oe.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vl):t=[Vl])}u=u.return}t!==null&&Wu(n,t,s,l),n.flags|=262144}function Do(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return cm(Ts,t)}function Uo(t,n){return Ts===null&&As(t),cm(t,n)}function cm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},aa===null){if(t===null)throw Error(r(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return s}var ly=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},oy=i.unstable_scheduleCallback,cy=i.unstable_NormalPriority,gn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new ly,data:new Map,refCount:0}}function xl(t){t.refCount--,t.refCount===0&&oy(cy,function(){t.controller.abort()})}var _l=null,Zu=0,lr=0,or=null;function uy(t,n){if(_l===null){var s=_l=[];Zu=0,lr=Jf(),or={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Zu++,n.then(um,um),n}function um(){if(--Zu===0&&_l!==null){or!==null&&(or.status="fulfilled");var t=_l;_l=null,lr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fy(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var fm=z.S;z.S=function(t,n){Y0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),fm!==null&&fm(t,n)};var Rs=B(null);function Ku(){var t=Rs.current;return t!==null?t:en.pooledCache}function Lo(t,n){n===null?be(Rs,Rs.current):be(Rs,n.pool)}function dm(){var t=Ku();return t===null?null:{parent:gn._currentValue,pool:t}}var cr=Error(r(460)),$u=Error(r(474)),Oo=Error(r(542)),Po={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ea,ea),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t}throw ws=n,cr}}function Cs(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ws=s,cr):s}}var ws=null;function mm(){if(ws===null)throw Error(r(459));var t=ws;return ws=null,t}function xm(t){if(t===cr||t===Oo)throw Error(r(483))}var ur=null,gl=0;function Bo(t){var n=gl;return gl+=1,ur===null&&(ur=[]),pm(ur,t,n)}function vl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Fo(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _m(t){function n(Y,j){if(t){var J=Y.deletions;J===null?(Y.deletions=[j],Y.flags|=16):J.push(j)}}function s(Y,j){if(!t)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function l(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function u(Y,j){return Y=na(Y,j),Y.index=0,Y.sibling=null,Y}function d(Y,j,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<j?(Y.flags|=67108866,j):J):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,j,J,ge){return j===null||j.tag!==6?(j=Iu(J,Y.mode,ge),j.return=Y,j):(j=u(j,J),j.return=Y,j)}function I(Y,j,J,ge){var tt=J.type;return tt===A?he(Y,j,J.props.children,ge,J.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===K&&Cs(tt)===j.type)?(j=u(j,J.props),vl(j,J),j.return=Y,j):(j=wo(J.type,J.key,J.props,null,Y.mode,ge),vl(j,J),j.return=Y,j)}function ee(Y,j,J,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=Hu(J,Y.mode,ge),j.return=Y,j):(j=u(j,J.children||[]),j.return=Y,j)}function he(Y,j,J,ge,tt){return j===null||j.tag!==7?(j=Ms(J,Y.mode,ge,tt),j.return=Y,j):(j=u(j,J),j.return=Y,j)}function Se(Y,j,J){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Iu(""+j,Y.mode,J),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return J=wo(j.type,j.key,j.props,null,Y.mode,J),vl(J,j),J.return=Y,J;case E:return j=Hu(j,Y.mode,J),j.return=Y,j;case K:return j=Cs(j),Se(Y,j,J)}if(ue(j)||Q(j))return j=Ms(j,Y.mode,J,null),j.return=Y,j;if(typeof j.then=="function")return Se(Y,Bo(j),J);if(j.$$typeof===N)return Se(Y,Uo(Y,j),J);Fo(Y,j)}return null}function ae(Y,j,J,ge){var tt=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return tt!==null?null:R(Y,j,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===tt?I(Y,j,J,ge):null;case E:return J.key===tt?ee(Y,j,J,ge):null;case K:return J=Cs(J),ae(Y,j,J,ge)}if(ue(J)||Q(J))return tt!==null?null:he(Y,j,J,ge,null);if(typeof J.then=="function")return ae(Y,j,Bo(J),ge);if(J.$$typeof===N)return ae(Y,j,Uo(Y,J),ge);Fo(Y,J)}return null}function le(Y,j,J,ge,tt){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(J)||null,R(j,Y,""+ge,tt);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case b:return Y=Y.get(ge.key===null?J:ge.key)||null,I(j,Y,ge,tt);case E:return Y=Y.get(ge.key===null?J:ge.key)||null,ee(j,Y,ge,tt);case K:return ge=Cs(ge),le(Y,j,J,ge,tt)}if(ue(ge)||Q(ge))return Y=Y.get(J)||null,he(j,Y,ge,tt,null);if(typeof ge.then=="function")return le(Y,j,J,Bo(ge),tt);if(ge.$$typeof===N)return le(Y,j,J,Uo(j,ge),tt);Fo(j,ge)}return null}function qe(Y,j,J,ge){for(var tt=null,zt=null,Ke=j,_t=j=0,Rt=null;Ke!==null&&_t<J.length;_t++){Ke.index>_t?(Rt=Ke,Ke=null):Rt=Ke.sibling;var It=ae(Y,Ke,J[_t],ge);if(It===null){Ke===null&&(Ke=Rt);break}t&&Ke&&It.alternate===null&&n(Y,Ke),j=d(It,j,_t),zt===null?tt=It:zt.sibling=It,zt=It,Ke=Rt}if(_t===J.length)return s(Y,Ke),Nt&&ia(Y,_t),tt;if(Ke===null){for(;_t<J.length;_t++)Ke=Se(Y,J[_t],ge),Ke!==null&&(j=d(Ke,j,_t),zt===null?tt=Ke:zt.sibling=Ke,zt=Ke);return Nt&&ia(Y,_t),tt}for(Ke=l(Ke);_t<J.length;_t++)Rt=le(Ke,Y,_t,J[_t],ge),Rt!==null&&(t&&Rt.alternate!==null&&Ke.delete(Rt.key===null?_t:Rt.key),j=d(Rt,j,_t),zt===null?tt=Rt:zt.sibling=Rt,zt=Rt);return t&&Ke.forEach(function(is){return n(Y,is)}),Nt&&ia(Y,_t),tt}function st(Y,j,J,ge){if(J==null)throw Error(r(151));for(var tt=null,zt=null,Ke=j,_t=j=0,Rt=null,It=J.next();Ke!==null&&!It.done;_t++,It=J.next()){Ke.index>_t?(Rt=Ke,Ke=null):Rt=Ke.sibling;var is=ae(Y,Ke,It.value,ge);if(is===null){Ke===null&&(Ke=Rt);break}t&&Ke&&is.alternate===null&&n(Y,Ke),j=d(is,j,_t),zt===null?tt=is:zt.sibling=is,zt=is,Ke=Rt}if(It.done)return s(Y,Ke),Nt&&ia(Y,_t),tt;if(Ke===null){for(;!It.done;_t++,It=J.next())It=Se(Y,It.value,ge),It!==null&&(j=d(It,j,_t),zt===null?tt=It:zt.sibling=It,zt=It);return Nt&&ia(Y,_t),tt}for(Ke=l(Ke);!It.done;_t++,It=J.next())It=le(Ke,Y,_t,It.value,ge),It!==null&&(t&&It.alternate!==null&&Ke.delete(It.key===null?_t:It.key),j=d(It,j,_t),zt===null?tt=It:zt.sibling=It,zt=It);return t&&Ke.forEach(function(bS){return n(Y,bS)}),Nt&&ia(Y,_t),tt}function Kt(Y,j,J,ge){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:e:{for(var tt=J.key;j!==null;){if(j.key===tt){if(tt=J.type,tt===A){if(j.tag===7){s(Y,j.sibling),ge=u(j,J.props.children),ge.return=Y,Y=ge;break e}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===K&&Cs(tt)===j.type){s(Y,j.sibling),ge=u(j,J.props),vl(ge,J),ge.return=Y,Y=ge;break e}s(Y,j);break}else n(Y,j);j=j.sibling}J.type===A?(ge=Ms(J.props.children,Y.mode,ge,J.key),ge.return=Y,Y=ge):(ge=wo(J.type,J.key,J.props,null,Y.mode,ge),vl(ge,J),ge.return=Y,Y=ge)}return S(Y);case E:e:{for(tt=J.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){s(Y,j.sibling),ge=u(j,J.children||[]),ge.return=Y,Y=ge;break e}else{s(Y,j);break}else n(Y,j);j=j.sibling}ge=Hu(J,Y.mode,ge),ge.return=Y,Y=ge}return S(Y);case K:return J=Cs(J),Kt(Y,j,J,ge)}if(ue(J))return qe(Y,j,J,ge);if(Q(J)){if(tt=Q(J),typeof tt!="function")throw Error(r(150));return J=tt.call(J),st(Y,j,J,ge)}if(typeof J.then=="function")return Kt(Y,j,Bo(J),ge);if(J.$$typeof===N)return Kt(Y,j,Uo(Y,J),ge);Fo(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,j!==null&&j.tag===6?(s(Y,j.sibling),ge=u(j,J),ge.return=Y,Y=ge):(s(Y,j),ge=Iu(J,Y.mode,ge),ge.return=Y,Y=ge),S(Y)):s(Y,j)}return function(Y,j,J,ge){try{gl=0;var tt=Kt(Y,j,J,ge);return ur=null,tt}catch(Ke){if(Ke===cr||Ke===Oo)throw Ke;var zt=ai(29,Ke,null,Y.mode);return zt.lanes=ge,zt.return=Y,zt}finally{}}}var Ns=_m(!0),gm=_m(!1),Ha=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Vt&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=Co(t),tm(t,null,s),n}return Ro(t,l,n,s),Co(t)}function yl(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,el(t,s)}}function ef(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var tf=!1;function Sl(){if(tf){var t=or;if(t!==null)throw t}}function bl(t,n,s,l){tf=!1;var u=t.updateQueue;Ha=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var I=R,ee=I.next;I.next=null,S===null?d=ee:S.next=ee,S=I;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==S&&(R===null?he.firstBaseUpdate=ee:R.next=ee,he.lastBaseUpdate=I))}if(d!==null){var Se=u.baseState;S=0,he=ee=I=null,R=d;do{var ae=R.lane&-536870913,le=ae!==R.lane;if(le?(At&ae)===ae:(l&ae)===ae){ae!==0&&ae===lr&&(tf=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,st=R;ae=n;var Kt=s;switch(st.tag){case 1:if(qe=st.payload,typeof qe=="function"){Se=qe.call(Kt,Se,ae);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=st.payload,ae=typeof qe=="function"?qe.call(Kt,Se,ae):qe,ae==null)break e;Se=_({},Se,ae);break e;case 2:Ha=!0}}ae=R.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ee=he=le,I=Se):he=he.next=le,S|=ae;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);he===null&&(I=Se),u.baseState=I,u.firstBaseUpdate=ee,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),Wa|=S,t.lanes=S,t.memoizedState=Se}}function vm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ym(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)vm(s[t],n)}var fr=B(null),zo=B(0);function Sm(t,n){t=pa,be(zo,t),be(fr,n),pa=t|n.baseLanes}function nf(){be(zo,pa),be(fr,fr.current)}function af(){pa=zo.current,te(fr),te(zo)}var si=B(null),bi=null;function ka(t){var n=t.alternate;be(fn,fn.current&1),be(si,t),bi===null&&(n===null||fr.current!==null||n.memoizedState!==null)&&(bi=t)}function sf(t){be(fn,fn.current),be(si,t),bi===null&&(bi=t)}function bm(t){t.tag===22?(be(fn,fn.current),be(si,t),bi===null&&(bi=t)):ja()}function ja(){be(fn,fn.current),be(si,si.current)}function ri(t){te(si),bi===t&&(bi=null),te(fn)}var fn=B(0);function Io(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||fd(s)||dd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,pt=null,Yt=null,vn=null,Ho=!1,dr=!1,Ds=!1,Go=0,Ml=0,hr=null,dy=0;function cn(){throw Error(r(321))}function rf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!ii(t[s],n[s]))return!1;return!0}function lf(t,n,s,l,u,d){return ra=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?s0:bf,Ds=!1,d=s(l,u),Ds=!1,dr&&(d=Em(n,s,l,u)),Mm(t),d}function Mm(t){z.H=Al;var n=Yt!==null&&Yt.next!==null;if(ra=0,vn=Yt=pt=null,Ho=!1,Ml=0,hr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Do(t)&&(yn=!0))}function Em(t,n,s,l){pt=t;var u=0;do{if(dr&&(hr=null),Ml=0,dr=!1,25<=u)throw Error(r(301));if(u+=1,vn=Yt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=r0,d=n(s,l)}while(dr);return d}function hy(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?El(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(pt.flags|=1024),n}function of(){var t=Go!==0;return Go=0,t}function cf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function uf(t){if(Ho){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ho=!1}ra=0,vn=Yt=pt=null,dr=!1,Ml=Go=0,hr=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?pt.memoizedState=vn=t:vn=vn.next=t,vn}function dn(){if(Yt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=vn===null?pt.memoizedState:vn.next;if(n!==null)vn=n,Yt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},vn===null?pt.memoizedState=vn=t:vn=vn.next=t}return vn}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(t){var n=Ml;return Ml+=1,hr===null&&(hr=[]),t=pm(hr,t,n),n=pt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?s0:bf),t}function ko(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return El(t);if(t.$$typeof===N)return In(t)}throw Error(r(438,String(t)))}function ff(t){var n=null,s=pt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=pt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Vo(),pt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=D;return n.index++,s}function la(t,n){return typeof n=="function"?n(t):n}function jo(t){var n=dn();return df(n,Yt,t)}function df(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=S=null,I=null,ee=n,he=!1;do{var Se=ee.lane&-536870913;if(Se!==ee.lane?(At&Se)===Se:(ra&Se)===Se){var ae=ee.revertLane;if(ae===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Se===lr&&(he=!0);else if((ra&ae)===ae){ee=ee.next,ae===lr&&(he=!0);continue}else Se={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(R=I=Se,S=d):I=I.next=Se,pt.lanes|=ae,Wa|=ae;Se=ee.action,Ds&&s(d,Se),d=ee.hasEagerState?ee.eagerState:s(d,Se)}else ae={lane:Se,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(R=I=ae,S=d):I=I.next=ae,pt.lanes|=Se,Wa|=Se;ee=ee.next}while(ee!==null&&ee!==n);if(I===null?S=d:I.next=R,!ii(d,t.memoizedState)&&(yn=!0,he&&(s=or,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=I,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function hf(t){var n=dn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);ii(d,n.memoizedState)||(yn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,l]}function Tm(t,n,s){var l=pt,u=dn(),d=Nt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!ii((Yt||u).memoizedState,s);if(S&&(u.memoizedState=s,yn=!0),u=u.queue,xf(Cm.bind(null,l,u,t),[t]),u.getSnapshot!==n||S||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,pr(9,{destroy:void 0},Rm.bind(null,l,u,s,n),null),en===null)throw Error(r(349));d||(ra&127)!==0||Am(l,n,s)}return s}function Am(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=pt.updateQueue,n===null?(n=Vo(),pt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Rm(t,n,s,l){n.value=s,n.getSnapshot=l,wm(n)&&Nm(t)}function Cm(t,n,s){return s(function(){wm(n)&&Nm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!ii(t,s)}catch{return!0}}function Nm(t){var n=bs(t,2);n!==null&&Jn(n,t,2)}function pf(t){var n=qn();if(typeof t=="function"){var s=t;if(t=s(),Ds){Ie(!0);try{s()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function Dm(t,n,s,l){return t.baseState=s,df(t,Yt,typeof l=="function"?l:la)}function py(t,n,s,l,u){if(Wo(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?s(!0):d.isTransition=!1,l(d),s=n.pending,s===null?(d.next=n.pending=d,Um(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Um(t,n){var s=n.action,l=n.payload,u=t.state;if(n.isTransition){var d=z.T,S={};z.T=S;try{var R=s(u,l),I=z.S;I!==null&&I(S,R),Lm(t,n,R)}catch(ee){mf(t,n,ee)}finally{d!==null&&S.types!==null&&(d.types=S.types),z.T=d}}else try{d=s(u,l),Lm(t,n,d)}catch(ee){mf(t,n,ee)}}function Lm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Om(t,n,l)},function(l){return mf(t,n,l)}):Om(t,n,s)}function Om(t,n,s){n.status="fulfilled",n.value=s,Pm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Um(t,s)))}function mf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Pm(n),n=n.next;while(n!==l)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bm(t,n){return n}function Fm(t,n){if(Nt){var s=en.formState;if(s!==null){e:{var l=pt;if(Nt){if(an){t:{for(var u=an,d=Si;u.nodeType!==8;){if(!d){u=null;break t}if(u=Mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){an=Mi(u.nextSibling),l=u.data==="F!";break e}}za(l)}l=!1}l&&(n=s[0])}}return s=qn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},s.queue=l,s=n0.bind(null,pt,l),l.dispatch=s,l=pf(!1),d=Sf.bind(null,pt,!1,l.queue),l=qn(),u={state:n,dispatch:null,action:t,pending:null},l.queue=u,s=py.bind(null,pt,u,d,s),u.dispatch=s,l.memoizedState=t,[n,s,!1]}function zm(t){var n=dn();return Im(n,Yt,t)}function Im(t,n,s){if(n=df(t,n,Bm)[0],t=jo(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=El(n)}catch(S){throw S===cr?Oo:S}else l=n;n=dn();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(pt.flags|=2048,pr(9,{destroy:void 0},my.bind(null,u,s),null)),[l,d,t]}function my(t,n){t.action=n}function Hm(t){var n=dn(),s=Yt;if(s!==null)return Im(n,s,t);dn(),n=n.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function pr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Vo(),pt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function Gm(){return dn().memoizedState}function Xo(t,n,s,l){var u=qn();pt.flags|=t,u.memoizedState=pr(1|n,{destroy:void 0},s,l===void 0?null:l)}function qo(t,n,s,l){var u=dn();l=l===void 0?null:l;var d=u.memoizedState.inst;Yt!==null&&l!==null&&rf(l,Yt.memoizedState.deps)?u.memoizedState=pr(n,d,s,l):(pt.flags|=t,u.memoizedState=pr(1|n,d,s,l))}function Vm(t,n){Xo(8390656,8,t,n)}function xf(t,n){qo(2048,8,t,n)}function xy(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Vo(),pt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function km(t){var n=dn().memoizedState;return xy({ref:n,nextImpl:t}),function(){if((Vt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return qo(4,2,t,n)}function Xm(t,n){return qo(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wm(t,n,s){s=s!=null?s.concat([t]):null,qo(4,4,qm.bind(null,n,t),s)}function _f(){}function Ym(t,n){var s=dn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&rf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function Zm(t,n){var s=dn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&rf(n,l[1]))return l[0];if(l=t(),Ds){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,n],l}function gf(t,n,s){return s===void 0||(ra&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=K0(),pt.lanes|=t,Wa|=t,s)}function Km(t,n,s,l){return ii(s,n)?s:fr.current!==null?(t=gf(t,s,l),ii(t,n)||(yn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(At&261930)===0?(yn=!0,t.memoizedState=s):(t=K0(),pt.lanes|=t,Wa|=t,n)}function $m(t,n,s,l,u){var d=W.p;W.p=d!==0&&8>d?d:8;var S=z.T,R={};z.T=R,Sf(t,!1,n,s);try{var I=u(),ee=z.S;if(ee!==null&&ee(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=fy(I,l);Tl(t,n,he,ci(t))}else Tl(t,n,l,ci(t))}catch(Se){Tl(t,n,{then:function(){},status:"rejected",reason:Se},ci())}finally{W.p=d,S!==null&&R.types!==null&&(S.types=R.types),z.T=S}}function _y(){}function vf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var u=Qm(t).queue;$m(t,u,n,X,s===null?_y:function(){return Jm(t),s(l)})}function Qm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:X},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jm(t){var n=Qm(t);n.next===null&&(n=t.alternate.memoizedState),Tl(t,n.next.queue,{},ci())}function yf(){return In(Vl)}function e0(){return dn().memoizedState}function t0(){return dn().memoizedState}function gy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=ci();t=Ga(s);var l=Va(n,t,s);l!==null&&(Jn(l,n,s),yl(l,n,s)),n={cache:Yu()},t.payload=n;return}n=n.return}}function vy(t,n,s){var l=ci();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Wo(t)?i0(n,s):(s=Fu(t,n,s,l),s!==null&&(Jn(s,t,l),a0(s,n,l)))}function n0(t,n,s){var l=ci();Tl(t,n,s,l)}function Tl(t,n,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Wo(t))i0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,s);if(u.hasEagerState=!0,u.eagerState=R,ii(R,S))return Ro(t,n,u,0),en===null&&Ao(),!1}catch{}finally{}if(s=Fu(t,n,u,l),s!==null)return Jn(s,t,l),a0(s,n,l),!0}return!1}function Sf(t,n,s,l){if(l={lane:2,revertLane:Jf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Wo(t)){if(n)throw Error(r(479))}else n=Fu(t,s,l,2),n!==null&&Jn(n,t,2)}function Wo(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function i0(t,n){dr=Ho=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function a0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,el(t,s)}}var Al={readContext:In,use:ko,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Al.useEffectEvent=cn;var s0={readContext:In,use:ko,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:Vm,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Xo(4194308,4,qm.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Xo(4194308,4,t,n)},useInsertionEffect:function(t,n){Xo(4,2,t,n)},useMemo:function(t,n){var s=qn();n=n===void 0?null:n;var l=t();if(Ds){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=qn();if(s!==void 0){var u=s(n);if(Ds){Ie(!0);try{s(n)}finally{Ie(!1)}}}else u=n;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=vy.bind(null,pt,t),[l.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,s=n0.bind(null,pt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:_f,useDeferredValue:function(t,n){var s=qn();return gf(s,t,n)},useTransition:function(){var t=pf(!1);return t=$m.bind(null,pt,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=pt,u=qn();if(Nt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(At&127)!==0||Am(l,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,Vm(Cm.bind(null,l,d,t),[t]),l.flags|=2048,pr(9,{destroy:void 0},Rm.bind(null,l,d,s,n),null),s},useId:function(){var t=qn(),n=en.identifierPrefix;if(Nt){var s=Vi,l=Gi;s=(l&~(1<<32-He(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Go++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=dy++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Sf.bind(null,pt,!0,s),s.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return qn().memoizedState=gy.bind(null,pt)},useEffectEvent:function(t){var n=qn(),s={impl:t};return n.memoizedState=s,function(){if((Vt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},bf={readContext:In,use:ko,useCallback:Ym,useContext:In,useEffect:xf,useImperativeHandle:Wm,useInsertionEffect:jm,useLayoutEffect:Xm,useMemo:Zm,useReducer:jo,useRef:Gm,useState:function(){return jo(la)},useDebugValue:_f,useDeferredValue:function(t,n){var s=dn();return Km(s,Yt.memoizedState,t,n)},useTransition:function(){var t=jo(la)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:El(t),n]},useSyncExternalStore:Tm,useId:e0,useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var s=dn();return Dm(s,Yt,t,n)},useMemoCache:ff,useCacheRefresh:t0};bf.useEffectEvent=km;var r0={readContext:In,use:ko,useCallback:Ym,useContext:In,useEffect:xf,useImperativeHandle:Wm,useInsertionEffect:jm,useLayoutEffect:Xm,useMemo:Zm,useReducer:hf,useRef:Gm,useState:function(){return hf(la)},useDebugValue:_f,useDeferredValue:function(t,n){var s=dn();return Yt===null?gf(s,t,n):Km(s,Yt.memoizedState,t,n)},useTransition:function(){var t=hf(la)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:El(t),n]},useSyncExternalStore:Tm,useId:e0,useHostTransitionStatus:yf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var s=dn();return Yt!==null?Dm(s,Yt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ff,useCacheRefresh:t0};r0.useEffectEvent=km;function Mf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ef={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=ci(),u=Ga(l);u.payload=n,s!=null&&(u.callback=s),n=Va(t,u,l),n!==null&&(Jn(n,t,l),yl(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=ci(),u=Ga(l);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Va(t,u,l),n!==null&&(Jn(n,t,l),yl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=ci(),l=Ga(s);l.tag=2,n!=null&&(l.callback=n),n=Va(t,l,s),n!==null&&(Jn(n,t,s),yl(n,t,s))}};function l0(t,n,s,l,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):n.prototype&&n.prototype.isPureReactComponent?!dl(s,l)||!dl(u,d):!0}function o0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Us(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function c0(t){To(t)}function u0(t){console.error(t)}function f0(t){To(t)}function Yo(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function d0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,s){return s=Ga(s),s.tag=3,s.payload={element:null},s.callback=function(){Yo(t,n)},s}function h0(t){return t=Ga(t),t.tag=3,t}function p0(t,n,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){d0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){d0(n,s,l),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function yy(t,n,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&rr(n,s,u,!0),s=si.current,s!==null){switch(s.tag){case 31:case 13:return bi===null?rc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Po?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Kf(t,l,u)),!1;case 22:return s.flags|=65536,l===Po?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Kf(t,l,u)),!1}throw Error(r(435,s.tag))}return Kf(t,l,u),rc(),!1}if(Nt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==ku&&(t=Error(r(422),{cause:l}),ml(gi(t,s)))):(l!==ku&&(n=Error(r(423),{cause:l}),ml(gi(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=gi(l,s),u=Tf(t.stateNode,l,u),ef(t,u),un!==4&&(un=2)),!1;var d=Error(r(520),{cause:l});if(d=gi(d,s),Ol===null?Ol=[d]:Ol.push(d),un!==4&&(un=2),n===null)return!0;l=gi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Tf(s.stateNode,l,t),ef(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ya===null||!Ya.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=h0(u),p0(u,t,s,l),ef(s,u),!1}s=s.return}while(s!==null);return!1}var Af=Error(r(461)),yn=!1;function Hn(t,n,s,l){n.child=t===null?gm(n,null,s,l):Ns(n,t.child,s,l)}function m0(t,n,s,l,u){s=s.render;var d=n.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return As(n),l=lf(t,n,s,S,d,u),R=of(),t!==null&&!yn?(cf(t,n,u),oa(t,n,u)):(Nt&&R&&Gu(n),n.flags|=1,Hn(t,n,l,u),n.child)}function x0(t,n,s,l,u){if(t===null){var d=s.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,_0(t,n,d,l,u)):(t=wo(s.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:dl,s(S,l)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=na(d,l),t.ref=n.ref,t.return=n,n.child=t}function _0(t,n,s,l,u){if(t!==null){var d=t.memoizedProps;if(dl(d,l)&&t.ref===n.ref)if(yn=!1,n.pendingProps=l=d,Of(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return Rf(t,n,s,l,u)}function g0(t,n,s,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=n.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,n.child=null;return v0(t,n,d,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Lo(n,d!==null?d.cachePool:null),d!==null?Sm(n,d):nf(),bm(n);else return l=n.lanes=536870912,v0(t,n,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Lo(n,d.cachePool),Sm(n,d),ja(),n.memoizedState=null):(t!==null&&Lo(n,null),nf(),ja());return Hn(t,n,u,s),n.child}function Rl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function v0(t,n,s,l,u){var d=Ku();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&Lo(n,null),nf(),bm(n),t!==null&&rr(t,n,l,!0),n.childLanes=u,null}function Zo(t,n){return n=$o({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function y0(t,n,s){return Ns(n,t.child,null,s),t=Zo(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Sy(t,n,s){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Nt){if(l.mode==="hidden")return t=Zo(n,l),n.lanes=536870912,Rl(null,t);if(sf(n),(t=an)?(t=Ux(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},s=im(t),s.return=n,n.child=s,zn=n,an=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return Zo(n,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=y0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||rr(t,n,s,!1),u=(s&t.childLanes)!==0,yn||u){if(l=en,l!==null&&(S=tl(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,bs(t,S),Jn(l,t,S),Af;rc(),n=y0(t,n,s)}else t=d.treeContext,an=Mi(S.nextSibling),zn=n,Nt=!0,Fa=null,Si=!1,t!==null&&rm(n,t),n=Zo(n,l),n.flags|=4096;return n}return t=na(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ko(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Rf(t,n,s,l,u){return As(n),s=lf(t,n,s,l,void 0,u),l=of(),t!==null&&!yn?(cf(t,n,u),oa(t,n,u)):(Nt&&l&&Gu(n),n.flags|=1,Hn(t,n,s,u),n.child)}function S0(t,n,s,l,u,d){return As(n),n.updateQueue=null,s=Em(n,l,s,u),Mm(t),l=of(),t!==null&&!yn?(cf(t,n,d),oa(t,n,d)):(Nt&&l&&Gu(n),n.flags|=1,Hn(t,n,s,d),n.child)}function b0(t,n,s,l,u){if(As(n),n.stateNode===null){var d=nr,S=s.contextType;typeof S=="object"&&S!==null&&(d=In(S)),d=new s(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Qu(n),S=s.contextType,d.context=typeof S=="object"&&S!==null?In(S):nr,d.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Mf(n,s,S,l),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ef.enqueueReplaceState(d,d.state,null),bl(n,l,d,u),Sl(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,I=Us(s,R);d.props=I;var ee=d.context,he=s.contextType;S=nr,typeof he=="object"&&he!==null&&(S=In(he));var Se=s.getDerivedStateFromProps;he=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==S)&&o0(n,d,l,S),Ha=!1;var ae=n.memoizedState;d.state=ae,bl(n,l,d,u),Sl(),ee=n.memoizedState,R||ae!==ee||Ha?(typeof Se=="function"&&(Mf(n,s,Se,l),ee=n.memoizedState),(I=Ha||l0(n,s,I,l,ae,ee,S))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ee),d.props=l,d.state=ee,d.context=S,l=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,Ju(t,n),S=n.memoizedProps,he=Us(s,S),d.props=he,Se=n.pendingProps,ae=d.context,ee=s.contextType,I=nr,typeof ee=="object"&&ee!==null&&(I=In(ee)),R=s.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Se||ae!==I)&&o0(n,d,l,I),Ha=!1,ae=n.memoizedState,d.state=ae,bl(n,l,d,u),Sl();var le=n.memoizedState;S!==Se||ae!==le||Ha||t!==null&&t.dependencies!==null&&Do(t.dependencies)?(typeof R=="function"&&(Mf(n,s,R,l),le=n.memoizedState),(he=Ha||l0(n,s,he,l,ae,le,I)||t!==null&&t.dependencies!==null&&Do(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,le,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,le,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=le),d.props=l,d.state=le,d.context=I,l=he):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),l=!1)}return d=l,Ko(t,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&l?(n.child=Ns(n,t.child,null,u),n.child=Ns(n,null,s,u)):Hn(t,n,s,u),n.memoizedState=d.state,t=n.child):t=oa(t,n,u),t}function M0(t,n,s,l){return Es(),n.flags|=256,Hn(t,n,s,l),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:dm()}}function Nf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=oi),t}function E0(t,n,s){var l=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?ka(n):ja(),(t=an)?(t=Ux(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},s=im(t),s.return=n,n.child=s,zn=n,an=null)):t=null,t===null)throw za(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,u?(ja(),u=n.mode,R=$o({mode:"hidden",children:R},u),l=Ms(l,u,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=wf(s),l.childLanes=Nf(t,S,s),n.memoizedState=Cf,Rl(null,l)):(ka(n),Df(n,R))}var I=t.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(d)n.flags&256?(ka(n),n.flags&=-257,n=Uf(t,n,s)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,n=null):(ja(),R=l.fallback,u=n.mode,l=$o({mode:"visible",children:l.children},u),R=Ms(R,u,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,Ns(n,t.child,null,s),l=n.child,l.memoizedState=wf(s),l.childLanes=Nf(t,S,s),n.memoizedState=Cf,n=Rl(null,l));else if(ka(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ee=S.dgst;S=ee,l=Error(r(419)),l.stack="",l.digest=S,ml({value:l,source:null,stack:null}),n=Uf(t,n,s)}else if(yn||rr(t,n,s,!1),S=(s&t.childLanes)!==0,yn||S){if(S=en,S!==null&&(l=tl(S,s),l!==0&&l!==I.retryLane))throw I.retryLane=l,bs(t,l),Jn(S,t,l),Af;fd(R)||rc(),n=Uf(t,n,s)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,an=Mi(R.nextSibling),zn=n,Nt=!0,Fa=null,Si=!1,t!==null&&rm(n,t),n=Df(n,l.children),n.flags|=4096);return n}return u?(ja(),R=l.fallback,u=n.mode,I=t.child,ee=I.sibling,l=na(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,ee!==null?R=na(ee,R):(R=Ms(R,u,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,Rl(null,l),l=n.child,R=t.child.memoizedState,R===null?R=wf(s):(u=R.cachePool,u!==null?(I=gn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=dm(),R={baseLanes:R.baseLanes|s,cachePool:u}),l.memoizedState=R,l.childLanes=Nf(t,S,s),n.memoizedState=Cf,Rl(t.child,l)):(ka(n),s=t.child,t=s.sibling,s=na(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Df(t,n){return n=$o({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function $o(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function Uf(t,n,s){return Ns(n,t.child,null,s),t=Df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function T0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),qu(t.return,n,s)}function Lf(t,n,s,l,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=u,S.treeForkCount=d)}function A0(t,n,s){var l=n.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var S=fn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,be(fn,S),Hn(t,n,l,s),l=Nt?pl:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,s,n);else if(t.tag===19)T0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&Io(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),Lf(n,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Io(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Lf(n,!0,s,null,d,l);break;case"together":Lf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function oa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(rr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=na(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=na(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Do(t)))}function by(t,n,s){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ia(n,gn,t.memoizedState.cache),Es();break;case 27:case 5:Ye(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(n),n.flags|=128,null):(s&n.child.childLanes)!==0?E0(t,n,s):(ka(n),t=oa(t,n,s),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(rr(t,n,s,!1),l=(s&n.childLanes)!==0),u){if(l)return A0(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(fn,fn.current),l)break;return null;case 22:return n.lanes=0,g0(t,n,s,n.pendingProps);case 24:Ia(n,gn,t.memoizedState.cache)}return oa(t,n,s)}function R0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!Of(t,s)&&(n.flags&128)===0)return yn=!1,by(t,n,s);yn=(t.flags&131072)!==0}else yn=!1,Nt&&(n.flags&1048576)!==0&&sm(n,pl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Cs(n.elementType),n.type=t,typeof t=="function")zu(t)?(l=Us(t,l),n.tag=1,n=b0(null,n,t,l,s)):(n.tag=0,n=Rf(null,n,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=m0(null,n,t,l,s);break e}else if(u===F){n.tag=14,n=x0(null,n,t,l,s);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,u=Us(l,n.pendingProps),b0(t,n,l,u,s);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var d=n.memoizedState;u=d.element,Ju(t,n),bl(n,l,null,s);var S=n.memoizedState;if(l=S.cache,Ia(n,gn,l),l!==d.cache&&Wu(n,[gn],s,!0),Sl(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=M0(t,n,l,s);break e}else if(l!==u){u=gi(Error(r(424)),n),ml(u),n=M0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=Mi(t.firstChild),zn=n,Nt=!0,Fa=null,Si=!0,s=gm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Es(),l===u){n=oa(t,n,s);break e}Hn(t,n,l,s)}n=n.child}return n;case 26:return Ko(t,n),t===null?(s=zx(n.type,null,n.pendingProps,null))?n.memoizedState=s:Nt||(s=n.type,t=n.pendingProps,l=hc(ie.current).createElement(s),l[_n]=n,l[Mn]=t,Gn(l,s,t),ne(l),n.stateNode=l):n.memoizedState=zx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ye(n),t===null&&Nt&&(l=n.stateNode=Px(n.type,n.pendingProps,ie.current),zn=n,Si=!0,u=an,Qa(n.type)?(hd=u,an=Mi(l.firstChild)):an=u),Hn(t,n,n.pendingProps.children,s),Ko(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=l=an)&&(l=Qy(l,n.type,n.pendingProps,Si),l!==null?(n.stateNode=l,zn=n,an=Mi(l.firstChild),Si=!1,u=!0):u=!1),u||za(n)),Ye(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,od(u,d)?l=null:S!==null&&od(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(t,n,hy,null,null,s),Vl._currentValue=u),Ko(t,n),Hn(t,n,l,s),n.child;case 6:return t===null&&Nt&&((t=s=an)&&(s=Jy(s,n.pendingProps,Si),s!==null?(n.stateNode=s,zn=n,an=null,t=!0):t=!1),t||za(n)),null;case 13:return E0(t,n,s);case 4:return Ne(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ns(n,null,l,s):Hn(t,n,l,s),n.child;case 11:return m0(t,n,n.type,n.pendingProps,s);case 7:return Hn(t,n,n.pendingProps,s),n.child;case 8:return Hn(t,n,n.pendingProps.children,s),n.child;case 12:return Hn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ia(n,n.type,l.value),Hn(t,n,l.children,s),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,As(n),u=In(u),l=l(u),n.flags|=1,Hn(t,n,l,s),n.child;case 14:return x0(t,n,n.type,n.pendingProps,s);case 15:return _0(t,n,n.type,n.pendingProps,s);case 19:return A0(t,n,s);case 31:return Sy(t,n,s);case 22:return g0(t,n,s,n.pendingProps);case 24:return As(n),l=In(gn),t===null?(u=Ku(),u===null&&(u=en,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:l,cache:u},Qu(n),Ia(n,gn,u)):((t.lanes&s)!==0&&(Ju(t,n),bl(n,null,null,s),Sl()),u=t.memoizedState,d=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,gn,l)):(l=d.cache,Ia(n,gn,l),l!==u.cache&&Wu(n,[gn],s,!0))),Hn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ca(t){t.flags|=4}function Pf(t,n,s,l,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ex())t.flags|=8192;else throw ws=Po,$u}else t.flags&=-16777217}function C0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kx(n))if(ex())t.flags|=8192;else throw ws=Po,$u}function Qo(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bt():536870912,t.lanes|=n,gr|=n)}function Cl(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function sn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function My(t,n,s){var l=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return sn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),sa(gn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(sr(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),sn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ca(n),d!==null?(sn(n),C0(n,d)):(sn(n),Pf(n,u,null,l,s))):d?d!==t.memoizedState?(ca(n),sn(n),C0(n,d)):(sn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&ca(n),sn(n),Pf(n,u,t,l,s)),null;case 27:if(ct(n),s=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ca(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return sn(n),null}t=Ae.current,sr(n)?lm(n):(t=Px(u,l,s),n.stateNode=t,ca(n))}return sn(n),null;case 5:if(ct(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ca(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return sn(n),null}if(d=Ae.current,sr(n))lm(n);else{var S=hc(ie.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(u,{is:l.is}):S.createElement(u)}}d[_n]=n,d[Mn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Gn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ca(n)}}return sn(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&ca(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,sr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,u=zn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[_n]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Ex(t.nodeValue,s)),t||za(n,!0)}else t=hc(t).createTextNode(l),t[_n]=n,n.stateNode=t}return sn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=sr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[_n]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),t=!1}else s=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return sn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=sr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_n]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),u=!1}else u=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Qo(n,n.updateQueue),sn(n),null);case 4:return Ge(),t===null&&id(n.stateNode.containerInfo),sn(n),null;case 10:return sa(n.type),sn(n),null;case 19:if(te(fn),l=n.memoizedState,l===null)return sn(n),null;if(u=(n.flags&128)!==0,d=l.rendering,d===null)if(u)Cl(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Io(t),d!==null){for(n.flags|=128,Cl(l,!1),t=d.updateQueue,n.updateQueue=t,Qo(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)nm(s,t),s=s.sibling;return be(fn,fn.current&1|2),Nt&&ia(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&T()>ic&&(n.flags|=128,u=!0,Cl(l,!1),n.lanes=4194304)}else{if(!u)if(t=Io(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Qo(n,t),Cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Nt)return sn(n),null}else 2*T()-l.renderingStartTime>ic&&s!==536870912&&(n.flags|=128,u=!0,Cl(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(t=l.last,t!==null?t.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=fn.current,be(fn,u?s&1|2:s&1),Nt&&ia(n,l.treeForkCount),t):(sn(n),null);case 22:case 23:return ri(n),af(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),s=n.updateQueue,s!==null&&Qo(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&te(Rs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),sa(gn),sn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ey(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(gn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(fn),null;case 4:return Ge(),null;case 10:return sa(n.type),null;case 22:case 23:return ri(n),af(),t!==null&&te(Rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(gn),null;case 25:return null;default:return null}}function w0(t,n){switch(Vu(n),n.tag){case 3:sa(gn),Ge();break;case 26:case 27:case 5:ct(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:te(fn);break;case 10:sa(n.type);break;case 22:case 23:ri(n),af(),t!==null&&te(Rs);break;case 24:sa(gn)}}function wl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==u)}}catch(R){Wt(n,n.return,R)}}function Xa(t,n,s){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var I=s,ee=R;try{ee()}catch(he){Wt(u,I,he)}}}l=l.next}while(l!==d)}}catch(he){Wt(n,n.return,he)}}function N0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{ym(n,s)}catch(l){Wt(t,t.return,l)}}}function D0(t,n,s){s.props=Us(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,n,l)}}function Nl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){Wt(t,n,u)}}function ki(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Wt(t,n,u)}else s.current=null}function U0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Wt(t,t.return,u)}}function Bf(t,n,s){try{var l=t.stateNode;qy(l,t.type,s,n),l[Mn]=n}catch(u){Wt(t,t.return,u)}}function L0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ea));else if(l!==4&&(l===27&&Qa(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(zf(t,n,s),t=t.sibling;t!==null;)zf(t,n,s),t=t.sibling}function Jo(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Qa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Jo(t,n,s),t=t.sibling;t!==null;)Jo(t,n,s),t=t.sibling}function O0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Gn(n,l,s),n[_n]=t,n[Mn]=s}catch(d){Wt(t,t.return,d)}}var ua=!1,Sn=!1,If=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Un=null;function Ty(t,n){if(t=t.containerInfo,rd=yc,t=Wp(t),Du(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,R=-1,I=-1,ee=0,he=0,Se=t,ae=null;t:for(;;){for(var le;Se!==s||u!==0&&Se.nodeType!==3||(R=S+u),Se!==d||l!==0&&Se.nodeType!==3||(I=S+l),Se.nodeType===3&&(S+=Se.nodeValue.length),(le=Se.firstChild)!==null;)ae=Se,Se=le;for(;;){if(Se===t)break t;if(ae===s&&++ee===u&&(R=S),ae===d&&++he===l&&(I=S),(le=Se.nextSibling)!==null)break;Se=ae,ae=Se.parentNode}Se=le}s=R===-1||I===-1?null:{start:R,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(ld={focusedElem:t,selectionRange:s},yc=!1,Un=n;Un!==null;)if(n=Un,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Un=t;else for(;Un!==null;){switch(n=Un,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var qe=Us(s.type,u);t=l.getSnapshotBeforeUpdate(qe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){Wt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)ud(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Un=t;break}Un=n.return}}function B0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:da(t,s),l&4&&wl(5,s);break;case 1:if(da(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Wt(s,s.return,S)}else{var u=Us(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Wt(s,s.return,S)}}l&64&&N0(s),l&512&&Nl(s,s.return);break;case 3:if(da(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{ym(t,n)}catch(S){Wt(s,s.return,S)}}break;case 27:n===null&&l&4&&O0(s);case 26:case 5:da(t,s),n===null&&l&4&&U0(s),l&512&&Nl(s,s.return);break;case 12:da(t,s);break;case 31:da(t,s),l&4&&I0(t,s);break;case 13:da(t,s),l&4&&H0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Oy.bind(null,s),eS(t,s))));break;case 22:if(l=s.memoizedState!==null||ua,!l){n=n!==null&&n.memoizedState!==null||Sn,u=ua;var d=Sn;ua=l,(Sn=n)&&!d?ha(t,s,(s.subtreeFlags&8772)!==0):da(t,s),ua=u,Sn=d}break;case 30:break;default:da(t,s)}}function F0(t){var n=t.alternate;n!==null&&(t.alternate=null,F0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&al(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Zn=!1;function fa(t,n,s){for(s=s.child;s!==null;)z0(t,n,s),s=s.sibling}function z0(t,n,s){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,s)}catch{}switch(s.tag){case 26:Sn||ki(s,n),fa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||ki(s,n);var l=ln,u=Zn;Qa(s.type)&&(ln=s.stateNode,Zn=!1),fa(t,n,s),Il(s.stateNode),ln=l,Zn=u;break;case 5:Sn||ki(s,n);case 6:if(l=ln,u=Zn,ln=null,fa(t,n,s),ln=l,Zn=u,ln!==null)if(Zn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(d){Wt(s,n,d)}else try{ln.removeChild(s.stateNode)}catch(d){Wt(s,n,d)}break;case 18:ln!==null&&(Zn?(t=ln,Nx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ar(t)):Nx(ln,s.stateNode));break;case 4:l=ln,u=Zn,ln=s.stateNode.containerInfo,Zn=!0,fa(t,n,s),ln=l,Zn=u;break;case 0:case 11:case 14:case 15:Xa(2,s,n),Sn||Xa(4,s,n),fa(t,n,s);break;case 1:Sn||(ki(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&D0(s,n,l)),fa(t,n,s);break;case 21:fa(t,n,s);break;case 22:Sn=(l=Sn)||s.memoizedState!==null,fa(t,n,s),Sn=l;break;default:fa(t,n,s)}}function I0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(s){Wt(n,n.return,s)}}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(s){Wt(n,n.return,s)}}function Ay(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new P0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new P0),n;default:throw Error(r(435,t.tag))}}function ec(t,n){var s=Ay(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var u=Py.bind(null,t,l);l.then(u,u)}})}function Kn(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){ln=R.stateNode,Zn=!1;break e}break;case 5:ln=R.stateNode,Zn=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,Zn=!0;break e}R=R.return}if(ln===null)throw Error(r(160));z0(d,S,u),ln=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G0(n,t),n=n.sibling}var Ni=null;function G0(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),$n(t),l&4&&(Xa(3,t,t.return),wl(3,t),Xa(5,t,t.return));break;case 1:Kn(n,t),$n(t),l&512&&(Sn||s===null||ki(s,s.return)),l&64&&ua&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Ni;if(Kn(n,t),$n(t),l&512&&(Sn||s===null||ki(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[gs]||d[_n]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Gn(d,l,s),d[_n]=t,ne(d),l=d;break e;case"link":var S=Gx("link","href",u).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}d=u.createElement(l),Gn(d,l,s),u.head.appendChild(d);break;case"meta":if(S=Gx("meta","content",u).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}d=u.createElement(l),Gn(d,l,s),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[_n]=t,ne(d),l=d}t.stateNode=l}else Vx(u,t.type,t.stateNode);else t.stateNode=Hx(u,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Vx(u,t.type,t.stateNode):Hx(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(n,t),$n(t),l&512&&(Sn||s===null||ki(s,s.return)),s!==null&&l&4&&Bf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(n,t),$n(t),l&512&&(Sn||s===null||ki(s,s.return)),t.flags&32){u=t.stateNode;try{Hi(u,"")}catch(qe){Wt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Bf(t,u,s!==null?s.memoizedProps:u)),l&1024&&(If=!0);break;case 6:if(Kn(n,t),$n(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(xc=null,u=Ni,Ni=pc(n.containerInfo),Kn(n,t),Ni=u,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(qe){Wt(t,t.return,qe)}If&&(If=!1,V0(t));break;case 4:l=Ni,Ni=pc(t.stateNode.containerInfo),Kn(n,t),$n(t),Ni=l;break;case 12:Kn(n,t),$n(t);break;case 31:Kn(n,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ec(t,l)));break;case 13:Kn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(nc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ec(t,l)));break;case 22:u=t.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,ee=ua,he=Sn;if(ua=ee||u,Sn=he||I,Kn(n,t),Sn=he,ua=ee,$n(t),l&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||I||ua||Sn||Ls(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){I=s=n;try{if(d=I.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=I.stateNode;var Se=I.memoizedProps.style,ae=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(qe){Wt(I,I.return,qe)}}}else if(n.tag===6){if(s===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(qe){Wt(I,I.return,qe)}}}else if(n.tag===18){if(s===null){I=n;try{var le=I.stateNode;u?Dx(le,!0):Dx(I.stateNode,!1)}catch(qe){Wt(I,I.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ec(t,s))));break;case 19:Kn(n,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ec(t,l)));break;case 30:break;case 21:break;default:Kn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(L0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=Ff(t);Jo(t,d,u);break;case 5:var S=s.stateNode;s.flags&32&&(Hi(S,""),s.flags&=-33);var R=Ff(t);Jo(t,R,S);break;case 3:case 4:var I=s.stateNode.containerInfo,ee=Ff(t);zf(t,ee,I);break;default:throw Error(r(161))}}catch(he){Wt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function V0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;V0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(t,n.alternate,n),n=n.sibling}function Ls(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ls(n);break;case 1:ki(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&D0(n,n.return,s),Ls(n);break;case 27:Il(n.stateNode);case 26:case 5:ki(n,n.return),Ls(n);break;case 22:n.memoizedState===null&&Ls(n);break;case 30:Ls(n);break;default:Ls(n)}t=t.sibling}}function ha(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ha(u,d,s),wl(4,d);break;case 1:if(ha(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Wt(l,l.return,ee)}if(l=d,u=l.updateQueue,u!==null){var R=l.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)vm(I[u],R)}catch(ee){Wt(l,l.return,ee)}}s&&S&64&&N0(d),Nl(d,d.return);break;case 27:O0(d);case 26:case 5:ha(u,d,s),s&&l===null&&S&4&&U0(d),Nl(d,d.return);break;case 12:ha(u,d,s);break;case 31:ha(u,d,s),s&&S&4&&I0(u,d);break;case 13:ha(u,d,s),s&&S&4&&H0(u,d);break;case 22:d.memoizedState===null&&ha(u,d,s),Nl(d,d.return);break;case 30:break;default:ha(u,d,s)}n=n.sibling}}function Hf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&xl(s))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xl(t))}function Di(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k0(t,n,s,l),n=n.sibling}function k0(t,n,s,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,s,l),u&2048&&wl(9,n);break;case 1:Di(t,n,s,l);break;case 3:Di(t,n,s,l),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xl(t)));break;case 12:if(u&2048){Di(t,n,s,l),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Wt(n,n.return,I)}}else Di(t,n,s,l);break;case 31:Di(t,n,s,l);break;case 13:Di(t,n,s,l);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Di(t,n,s,l):Dl(t,n):d._visibility&2?Di(t,n,s,l):(d._visibility|=2,mr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Di(t,n,s,l),u&2048&&Gf(n.alternate,n);break;default:Di(t,n,s,l)}}function mr(t,n,s,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,R=s,I=l,ee=S.flags;switch(S.tag){case 0:case 11:case 15:mr(d,S,R,I,u),wl(8,S);break;case 23:break;case 22:var he=S.stateNode;S.memoizedState!==null?he._visibility&2?mr(d,S,R,I,u):Dl(d,S):(he._visibility|=2,mr(d,S,R,I,u)),u&&ee&2048&&Hf(S.alternate,S);break;case 24:mr(d,S,R,I,u),u&&ee&2048&&Gf(S.alternate,S);break;default:mr(d,S,R,I,u)}n=n.sibling}}function Dl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,u=l.flags;switch(l.tag){case 22:Dl(s,l),u&2048&&Hf(l.alternate,l);break;case 24:Dl(s,l),u&2048&&Gf(l.alternate,l);break;default:Dl(s,l)}n=n.sibling}}var Ul=8192;function xr(t,n,s){if(t.subtreeFlags&Ul)for(t=t.child;t!==null;)j0(t,n,s),t=t.sibling}function j0(t,n,s){switch(t.tag){case 26:xr(t,n,s),t.flags&Ul&&t.memoizedState!==null&&dS(s,Ni,t.memoizedState,t.memoizedProps);break;case 5:xr(t,n,s);break;case 3:case 4:var l=Ni;Ni=pc(t.stateNode.containerInfo),xr(t,n,s),Ni=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ul,Ul=16777216,xr(t,n,s),Ul=l):xr(t,n,s));break;default:xr(t,n,s)}}function X0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Un=l,W0(l,t)}X0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:Ll(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Ll(t);break;case 12:Ll(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):Ll(t);break;default:Ll(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Un=l,W0(l,t)}X0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),tc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function W0(t,n){for(;Un!==null;){var s=Un;switch(s.tag){case 0:case 11:case 15:Xa(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Un=l;else e:for(s=t;Un!==null;){l=Un;var u=l.sibling,d=l.return;if(F0(l),l===s){Un=null;break e}if(u!==null){u.return=d,Un=u;break e}Un=d}}}var Ry={getCacheForType:function(t){var n=In(gn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return In(gn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Vt=0,en=null,Et=null,At=0,qt=0,li=null,qa=!1,_r=!1,Vf=!1,pa=0,un=0,Wa=0,Os=0,kf=0,oi=0,gr=0,Ol=null,Qn=null,jf=!1,nc=0,Y0=0,ic=1/0,ac=null,Ya=null,Tn=0,Za=null,vr=null,ma=0,Xf=0,qf=null,Z0=null,Pl=0,Wf=null;function ci(){return(Vt&2)!==0&&At!==0?At&-At:z.T!==null?Jf():nl()}function K0(){if(oi===0)if((At&536870912)===0||Nt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),oi=t}else oi=536870912;return t=si.current,t!==null&&(t.flags|=32),oi}function Jn(t,n,s){(t===en&&(qt===2||qt===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Ka(t,At,oi,!1)),Vn(t,s),((Vt&2)===0||t!==en)&&(t===en&&((Vt&2)===0&&(Os|=s),un===4&&Ka(t,At,oi,!1)),ji(t))}function $0(t,n,s){if((Vt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=l?Dy(t,n):Zf(t,n,!0),d=l;do{if(u===0){_r&&!l&&Ka(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!wy(s)){u=Zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;u=Ol;var I=R.current.memoizedState.isDehydrated;if(I&&(yr(R,S).flags|=256),S=Zf(R,S,!1),S!==2){if(Vf&&!I){R.errorRecoveryDisabledLanes|=d,Os|=d,u=4;break e}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){yr(t,0),Ka(t,n,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ka(l,n,oi,!qa);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=nc+300-T(),10<u)){if(Ka(l,n,oi,!qa),fe(l,0,!0)!==0)break e;ma=n,l.timeoutHandle=Cx(Q0.bind(null,l,s,Qn,ac,jf,n,oi,Os,gr,qa,d,"Throttled",-0,0),u);break e}Q0(l,s,Qn,ac,jf,n,oi,Os,gr,qa,d,null,-0,0)}}break}while(!0);ji(t)}function Q0(t,n,s,l,u,d,S,R,I,ee,he,Se,ae,le){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},j0(n,d,Se);var qe=(d&62914560)===d?nc-T():(d&4194048)===d?Y0-T():0;if(qe=hS(Se,qe),qe!==null){ma=d,t.cancelPendingCommit=qe(rx.bind(null,t,n,d,s,l,u,S,R,I,he,Se,null,ae,le)),Ka(t,d,S,!ee);return}}rx(t,n,d,s,l,u,S,R,I)}function wy(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!ii(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(t,n,s,l){n&=~kf,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var u=n;0<u;){var d=31-He(u),S=1<<d;l[d]=-1,u&=~S}s!==0&&xo(t,s,n)}function sc(){return(Vt&6)===0?(Bl(0),!1):!0}function Yf(){if(Et!==null){if(qt===0)var t=Et.return;else t=Et,aa=Ts=null,uf(t),ur=null,gl=0,t=Et;for(;t!==null;)w0(t.alternate,t),t=t.return;Et=null}}function yr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Zy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ma=0,Yf(),en=t,Et=s=na(t.current,null),At=n,qt=0,li=null,qa=!1,_r=Fe(t,n),Vf=!1,gr=oi=kf=Os=Wa=un=0,Qn=Ol=null,jf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var u=31-He(l),d=1<<u;n|=t[u],l&=~d}return pa=n,Ao(),s}function J0(t,n){pt=null,z.H=Al,n===cr||n===Oo?(n=mm(),qt=3):n===$u?(n=mm(),qt=4):qt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Et===null&&(un=1,Yo(t,gi(n,t.current)))}function ex(){var t=si.current;return t===null?!0:(At&4194048)===At?bi===null:(At&62914560)===At||(At&536870912)!==0?t===bi:!1}function tx(){var t=z.H;return z.H=Al,t===null?Al:t}function nx(){var t=z.A;return z.A=Ry,t}function rc(){un=4,qa||(At&4194048)!==At&&si.current!==null||(_r=!0),(Wa&134217727)===0&&(Os&134217727)===0||en===null||Ka(en,At,oi,!1)}function Zf(t,n,s){var l=Vt;Vt|=2;var u=tx(),d=nx();(en!==t||At!==n)&&(ac=null,yr(t,n)),n=!1;var S=un;e:do try{if(qt!==0&&Et!==null){var R=Et,I=li;switch(qt){case 8:Yf(),S=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ee=qt;if(qt=0,li=null,Sr(t,R,I,ee),s&&_r){S=0;break e}break;default:ee=qt,qt=0,li=null,Sr(t,R,I,ee)}}Ny(),S=un;break}catch(he){J0(t,he)}while(!0);return n&&t.shellSuspendCounter++,aa=Ts=null,Vt=l,z.H=u,z.A=d,Et===null&&(en=null,At=0,Ao()),S}function Ny(){for(;Et!==null;)ix(Et)}function Dy(t,n){var s=Vt;Vt|=2;var l=tx(),u=nx();en!==t||At!==n?(ac=null,ic=T()+500,yr(t,n)):_r=Fe(t,n);e:do try{if(qt!==0&&Et!==null){n=Et;var d=li;t:switch(qt){case 1:qt=0,li=null,Sr(t,n,d,1);break;case 2:case 9:if(hm(d)){qt=0,li=null,ax(n);break}n=function(){qt!==2&&qt!==9||en!==t||(qt=7),ji(t)},d.then(n,n);break e;case 3:qt=7;break e;case 4:qt=5;break e;case 7:hm(d)?(qt=0,li=null,ax(n)):(qt=0,li=null,Sr(t,n,d,7));break;case 5:var S=null;switch(Et.tag){case 26:S=Et.memoizedState;case 5:case 27:var R=Et;if(S?kx(S):R.stateNode.complete){qt=0,li=null;var I=R.sibling;if(I!==null)Et=I;else{var ee=R.return;ee!==null?(Et=ee,lc(ee)):Et=null}break t}}qt=0,li=null,Sr(t,n,d,5);break;case 6:qt=0,li=null,Sr(t,n,d,6);break;case 8:Yf(),un=6;break e;default:throw Error(r(462))}}Uy();break}catch(he){J0(t,he)}while(!0);return aa=Ts=null,z.H=l,z.A=u,Vt=s,Et!==null?0:(en=null,At=0,Ao(),un)}function Uy(){for(;Et!==null&&!Le();)ix(Et)}function ix(t){var n=R0(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?lc(t):Et=n}function ax(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=S0(s,n,n.pendingProps,n.type,void 0,At);break;case 11:n=S0(s,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:uf(n);default:w0(s,n),n=Et=nm(n,pa),n=R0(s,n,pa)}t.memoizedProps=t.pendingProps,n===null?lc(t):Et=n}function Sr(t,n,s,l){aa=Ts=null,uf(n),ur=null,gl=0;var u=n.return;try{if(yy(t,u,n,s,At)){un=1,Yo(t,gi(s,t.current)),Et=null;return}}catch(d){if(u!==null)throw Et=u,d;un=1,Yo(t,gi(s,t.current)),Et=null;return}n.flags&32768?(Nt||l===1?t=!0:_r||(At&536870912)!==0?t=!1:(qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=si.current,l!==null&&l.tag===13&&(l.flags|=16384))),sx(n,t)):lc(n)}function lc(t){var n=t;do{if((n.flags&32768)!==0){sx(n,qa);return}t=n.return;var s=My(n.alternate,n,pa);if(s!==null){Et=s;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);un===0&&(un=5)}function sx(t,n){do{var s=Ey(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);un=6,Et=null}function rx(t,n,s,l,u,d,S,R,I){t.cancelPendingCommit=null;do oc();while(Tn!==0);if((Vt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Bu,ti(t,s,d,S,R,I),t===en&&(Et=en=null,At=0),vr=n,Za=t,ma=s,Xf=d,qf=u,Z0=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,By(ce,function(){return fx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,u=W.p,W.p=2,S=Vt,Vt|=4;try{Ty(t,n,s)}finally{Vt=S,W.p=u,z.T=l}}Tn=1,lx(),ox(),cx()}}function lx(){if(Tn===1){Tn=0;var t=Za,n=vr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=W.p;W.p=2;var u=Vt;Vt|=4;try{G0(n,t);var d=ld,S=Wp(t.containerInfo),R=d.focusedElem,I=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&qp(R.ownerDocument.documentElement,R)){if(I!==null&&Du(R)){var ee=I.start,he=I.end;if(he===void 0&&(he=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(he,R.value.length);else{var Se=R.ownerDocument||document,ae=Se&&Se.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),qe=R.textContent.length,st=Math.min(I.start,qe),Kt=I.end===void 0?st:Math.min(I.end,qe);!le.extend&&st>Kt&&(S=Kt,Kt=st,st=S);var Y=Xp(R,st),j=Xp(R,Kt);if(Y&&j&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var J=Se.createRange();J.setStart(Y.node,Y.offset),le.removeAllRanges(),st>Kt?(le.addRange(J),le.extend(j.node,j.offset)):(J.setEnd(j.node,j.offset),le.addRange(J))}}}}for(Se=[],le=R;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ge=Se[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}yc=!!rd,ld=rd=null}finally{Vt=u,W.p=l,z.T=s}}t.current=n,Tn=2}}function ox(){if(Tn===2){Tn=0;var t=Za,n=vr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=W.p;W.p=2;var u=Vt;Vt|=4;try{B0(t,n.alternate,n)}finally{Vt=u,W.p=l,z.T=s}}Tn=3}}function cx(){if(Tn===4||Tn===3){Tn=0,L();var t=Za,n=vr,s=ma,l=Z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,vr=Za=null,ux(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ya=null),_s(s),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,u=W.p,W.p=2,z.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];d(R.value,{componentStack:R.stack})}}finally{z.T=n,W.p=u}}(ma&3)!==0&&oc(),ji(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Wf?Pl++:(Pl=0,Wf=t):Pl=0,Bl(0)}}function ux(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xl(n)))}function oc(){return lx(),ox(),cx(),fx()}function fx(){if(Tn!==5)return!1;var t=Za,n=Xf;Xf=0;var s=_s(ma),l=z.T,u=W.p;try{W.p=32>s?32:s,z.T=null,s=qf,qf=null;var d=Za,S=ma;if(Tn=0,vr=Za=null,ma=0,(Vt&6)!==0)throw Error(r(331));var R=Vt;if(Vt|=4,q0(d.current),k0(d,d.current,S,s),Vt=R,Bl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{W.p=u,z.T=l,ux(t,n)}}function dx(t,n,s){n=gi(s,n),n=Tf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(Vn(t,2),ji(t))}function Wt(t,n,s){if(t.tag===3)dx(t,t,s);else for(;n!==null;){if(n.tag===3){dx(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ya===null||!Ya.has(l))){t=gi(s,t),s=h0(2),l=Va(n,s,2),l!==null&&(p0(s,l,n,t),Vn(l,2),ji(l));break}}n=n.return}}function Kf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Cy;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(s)||(Vf=!0,u.add(s),t=Ly.bind(null,t,n,s),n.then(t,t))}function Ly(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(At&s)===s&&(un===4||un===3&&(At&62914560)===At&&300>T()-nc?(Vt&2)===0&&yr(t,0):kf|=s,gr===At&&(gr=0)),ji(t)}function hx(t,n){n===0&&(n=Bt()),t=bs(t,n),t!==null&&(Vn(t,n),ji(t))}function Oy(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),hx(t,s)}function Py(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),hx(t,s)}function By(t,n){return kt(t,n)}var cc=null,br=null,$f=!1,uc=!1,Qf=!1,$a=0;function ji(t){t!==br&&t.next===null&&(br===null?cc=br=t:br=br.next=t),uc=!0,$f||($f=!0,zy())}function Bl(t,n){if(!Qf&&uc){Qf=!0;do for(var s=!1,l=cc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var S=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-He(42|t)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,_x(l,d))}else d=At,d=fe(l,l===en?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Fe(l,d)||(s=!0,_x(l,d));l=l.next}while(s);Qf=!1}}function Fy(){px()}function px(){uc=$f=!1;var t=0;$a!==0&&Yy()&&(t=$a);for(var n=T(),s=null,l=cc;l!==null;){var u=l.next,d=mx(l,n);d===0?(l.next=null,s===null?cc=u:s.next=u,u===null&&(br=s)):(s=l,(t!==0||(d&3)!==0)&&(uc=!0)),l=u}Tn!==0&&Tn!==5||Bl(t),$a!==0&&($a=0)}function mx(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-He(d),R=1<<S,I=u[S];I===-1?((R&s)===0||(R&l)!==0)&&(u[S]=Qe(R,n)):I<=n&&(t.expiredLanes|=R),d&=~R}if(n=en,s=At,s=fe(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(qt===2||qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ze(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Ze(l),_s(s)){case 2:case 8:s=Me;break;case 32:s=ce;break;case 268435456:s=Ue;break;default:s=ce}return l=xx.bind(null,t),s=kt(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Ze(l),t.callbackPriority=2,t.callbackNode=null,2}function xx(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(oc()&&t.callbackNode!==s)return null;var l=At;return l=fe(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:($0(t,l,n),mx(t,T()),t.callbackNode!=null&&t.callbackNode===s?xx.bind(null,t):null)}function _x(t,n){if(oc())return null;$0(t,n,!0)}function zy(){Ky(function(){(Vt&6)!==0?kt(xe,Fy):px()})}function Jf(){if($a===0){var t=lr;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),$a=t}return $a}function gx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:go(""+t)}function vx(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function Iy(t,n,s,l,u){if(n==="submit"&&s&&s.stateNode===u){var d=gx((u[Mn]||null).action),S=l.submitter;S&&(n=(n=S[Mn]||null)?gx(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new bo("action","action",null,l,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($a!==0){var I=S?vx(u,S):new FormData(u);vf(s,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(R.preventDefault(),I=S?vx(u,S):new FormData(u),vf(s,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],Hy=td.toLowerCase(),Gy=td[0].toUpperCase()+td.slice(1);wi(Hy,"on"+Gy)}wi(Kp,"onAnimationEnd"),wi($p,"onAnimationIteration"),wi(Qp,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(iy,"onTransitionRun"),wi(ay,"onTransitionStart"),wi(sy,"onTransitionCancel"),wi(Jp,"onTransitionEnd"),Ve("onMouseEnter",["mouseout","mouseover"]),Ve("onMouseLeave",["mouseout","mouseover"]),Ve("onPointerEnter",["pointerout","pointerover"]),Ve("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function yx(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var d=void 0;if(n)for(var S=l.length-1;0<=S;S--){var R=l[S],I=R.instance,ee=R.currentTarget;if(R=R.listener,I!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(he){To(he)}u.currentTarget=null,d=I}else for(S=0;S<l.length;S++){if(R=l[S],I=R.instance,ee=R.currentTarget,R=R.listener,I!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(he){To(he)}u.currentTarget=null,d=I}}}}function Tt(t,n){var s=n[Zs];s===void 0&&(s=n[Zs]=new Set);var l=t+"__bubble";s.has(l)||(Sx(n,t,2,!1),s.add(l))}function nd(t,n,s){var l=0;n&&(l|=4),Sx(s,t,l,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[fc]){t[fc]=!0,Z.forEach(function(s){s!=="selectionchange"&&(Vy.has(s)||nd(s,!1,t),nd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,nd("selectionchange",!1,n))}}function Sx(t,n,s,l){switch(Kx(n)){case 2:var u=xS;break;case 8:u=_S;break;default:u=gd}s=u.bind(null,n,s,t),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function ad(t,n,s,l,u){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=l.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=La(R),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){l=d=S;continue e}R=R.parentNode}}l=l.return}Ap(function(){var ee=d,he=yu(s),Se=[];e:{var ae=em.get(t);if(ae!==void 0){var le=bo,qe=t;switch(t){case"keypress":if(yo(s)===0)break e;case"keydown":case"keyup":le=Pv;break;case"focusin":qe="focus",le=Au;break;case"focusout":qe="blur",le=Au;break;case"beforeblur":case"afterblur":le=Au;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=zv;break;case Kp:case $p:case Qp:le=Av;break;case Jp:le=Hv;break;case"scroll":case"scrollend":le=Sv;break;case"wheel":le=Vv;break;case"copy":case"cut":case"paste":le=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Dp;break;case"toggle":case"beforetoggle":le=jv}var st=(n&4)!==0,Kt=!st&&(t==="scroll"||t==="scrollend"),Y=st?ae!==null?ae+"Capture":null:ae;st=[];for(var j=ee,J;j!==null;){var ge=j;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||Y===null||(ge=sl(j,Y),ge!=null&&st.push(zl(j,ge,J))),Kt)break;j=j.return}0<st.length&&(ae=new le(ae,qe,null,s,he),Se.push({event:ae,listeners:st}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&s!==vu&&(qe=s.relatedTarget||s.fromElement)&&(La(qe)||qe[$i]))break e;if((le||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(qe=s.relatedTarget||s.toElement,le=ee,qe=qe?La(qe):null,qe!==null&&(Kt=c(qe),st=qe.tag,qe!==Kt||st!==5&&st!==27&&st!==6)&&(qe=null)):(le=null,qe=ee),le!==qe)){if(st=wp,ge="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(st=Dp,ge="onPointerLeave",Y="onPointerEnter",j="pointer"),Kt=le==null?ae:q(le),J=qe==null?ae:q(qe),ae=new st(ge,j+"leave",le,s,he),ae.target=Kt,ae.relatedTarget=J,ge=null,La(he)===ee&&(st=new st(Y,j+"enter",qe,s,he),st.target=J,st.relatedTarget=Kt,ge=st),Kt=ge,le&&qe)t:{for(st=ky,Y=le,j=qe,J=0,ge=Y;ge;ge=st(ge))J++;ge=0;for(var tt=j;tt;tt=st(tt))ge++;for(;0<J-ge;)Y=st(Y),J--;for(;0<ge-J;)j=st(j),ge--;for(;J--;){if(Y===j||j!==null&&Y===j.alternate){st=Y;break t}Y=st(Y),j=st(j)}st=null}else st=null;le!==null&&bx(Se,ae,le,st,!1),qe!==null&&Kt!==null&&bx(Se,Kt,qe,st,!0)}}e:{if(ae=ee?q(ee):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var zt=Ip;else if(Fp(ae))if(Hp)zt=ey;else{zt=Qv;var Ke=$v}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&gu(ee.elementType)&&(zt=Ip):zt=Jv;if(zt&&(zt=zt(t,ee))){zp(Se,zt,s,he);break e}Ke&&Ke(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Nn(ae,"number",ae.value)}switch(Ke=ee?q(ee):window,t){case"focusin":(Fp(Ke)||Ke.contentEditable==="true")&&(Js=Ke,Uu=ee,hl=null);break;case"focusout":hl=Uu=Js=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Yp(Se,s,he);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Yp(Se,s,he)}var _t;if(Cu)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else Qs?Pp(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(Up&&s.locale!=="ko"&&(Qs||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Qs&&(_t=Rp()):(Pa=he,Mu="value"in Pa?Pa.value:Pa.textContent,Qs=!0)),Ke=dc(ee,Rt),0<Ke.length&&(Rt=new Np(Rt,t,null,s,he),Se.push({event:Rt,listeners:Ke}),_t?Rt.data=_t:(_t=Bp(s),_t!==null&&(Rt.data=_t)))),(_t=qv?Wv(t,s):Yv(t,s))&&(Rt=dc(ee,"onBeforeInput"),0<Rt.length&&(Ke=new Np("onBeforeInput","beforeinput",null,s,he),Se.push({event:Ke,listeners:Rt}),Ke.data=_t)),Iy(Se,t,ee,s,he)}yx(Se,n)})}function zl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function dc(t,n){for(var s=n+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=sl(t,s),u!=null&&l.unshift(zl(t,u,d)),u=sl(t,n),u!=null&&l.push(zl(t,u,d))),t.tag===3)return l;t=t.return}return[]}function ky(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bx(t,n,s,l,u){for(var d=n._reactName,S=[];s!==null&&s!==l;){var R=s,I=R.alternate,ee=R.stateNode;if(R=R.tag,I!==null&&I===l)break;R!==5&&R!==26&&R!==27||ee===null||(I=ee,u?(ee=sl(s,d),ee!=null&&S.unshift(zl(s,ee,I))):u||(ee=sl(s,d),ee!=null&&S.push(zl(s,ee,I)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var jy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function Mx(t){return(typeof t=="string"?t:""+t).replace(jy,`
`).replace(Xy,"")}function Ex(t,n){return n=Mx(n),Mx(t)===n}function Zt(t,n,s,l,u,d){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Hi(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Hi(t,""+l);break;case"className":Pt(t,"class",l);break;case"tabIndex":Pt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(t,s,l);break;case"style":Ep(t,l,d);break;case"data":if(n!=="object"){Pt(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=go(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=go(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ea);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=go(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),xt(t,"popover",l);break;case"xlinkActuate":Ft(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":xt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=vv.get(s)||s,xt(t,s,l))}}function sd(t,n,s,l,u,d){switch(s){case"style":Ep(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Hi(t,l):(typeof l=="number"||typeof l=="bigint")&&Hi(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!we.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),d=t[Mn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):xt(t,s,l)}}}function Gn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,d,S,s,null)}}u&&Zt(t,n,"srcSet",s.srcSet,s,null),l&&Zt(t,n,"src",s.src,s,null);return;case"input":Tt("invalid",t);var R=d=S=u=null,I=null,ee=null;for(l in s)if(s.hasOwnProperty(l)){var he=s[l];if(he!=null)switch(l){case"name":u=he;break;case"type":S=he;break;case"checked":I=he;break;case"defaultChecked":ee=he;break;case"value":d=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Zt(t,n,l,he,s,null)}}nn(t,d,R,I,ee,S,u,!1);return;case"select":Tt("invalid",t),l=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Zt(t,n,u,R,s,null)}n=d,s=S,t.multiple=!!l,n!=null?En(t,!!l,n,!1):s!=null&&En(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),d=u=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Zt(t,n,S,R,s,null)}Fn(t,l,u,d);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(t,n,I,l,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<Fl.length;l++)Tt(Fl[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(l=s[ee],l!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,ee,l,s,null)}return;default:if(gu(n)){for(he in s)s.hasOwnProperty(he)&&(l=s[he],l!==void 0&&sd(t,n,he,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Zt(t,n,R,l,s,null))}function qy(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,I=null,ee=null,he=null;for(le in s){var Se=s[le];if(s.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=Se;default:l.hasOwnProperty(le)||Zt(t,n,le,null,l,Se)}}for(var ae in l){var le=l[ae];if(Se=s[ae],l.hasOwnProperty(ae)&&(le!=null||Se!=null))switch(ae){case"type":d=le;break;case"name":u=le;break;case"checked":ee=le;break;case"defaultChecked":he=le;break;case"value":S=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==Se&&Zt(t,n,ae,le,l,Se)}}Qi(t,S,R,I,ee,he,d,u);return;case"select":le=S=R=ae=null;for(d in s)if(I=s[d],s.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":le=I;default:l.hasOwnProperty(d)||Zt(t,n,d,null,l,I)}for(u in l)if(d=l[u],I=s[u],l.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":ae=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==I&&Zt(t,n,u,d,l,I)}n=R,s=S,l=le,ae!=null?En(t,!!s,ae,!1):!!l!=!!s&&(n!=null?En(t,!!s,n,!0):En(t,!!s,s?[]:"",!1));return;case"textarea":le=ae=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,l,u)}for(S in l)if(u=l[S],d=s[S],l.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ae=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Zt(t,n,S,u,l,d)}Dn(t,ae,le);return;case"option":for(var qe in s)if(ae=s[qe],s.hasOwnProperty(qe)&&ae!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Zt(t,n,qe,null,l,ae)}for(I in l)if(ae=l[I],le=s[I],l.hasOwnProperty(I)&&ae!==le&&(ae!=null||le!=null))switch(I){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Zt(t,n,I,ae,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)ae=s[st],s.hasOwnProperty(st)&&ae!=null&&!l.hasOwnProperty(st)&&Zt(t,n,st,null,l,ae);for(ee in l)if(ae=l[ee],le=s[ee],l.hasOwnProperty(ee)&&ae!==le&&(ae!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Zt(t,n,ee,ae,l,le)}return;default:if(gu(n)){for(var Kt in s)ae=s[Kt],s.hasOwnProperty(Kt)&&ae!==void 0&&!l.hasOwnProperty(Kt)&&sd(t,n,Kt,void 0,l,ae);for(he in l)ae=l[he],le=s[he],!l.hasOwnProperty(he)||ae===le||ae===void 0&&le===void 0||sd(t,n,he,ae,l,le);return}}for(var Y in s)ae=s[Y],s.hasOwnProperty(Y)&&ae!=null&&!l.hasOwnProperty(Y)&&Zt(t,n,Y,null,l,ae);for(Se in l)ae=l[Se],le=s[Se],!l.hasOwnProperty(Se)||ae===le||ae==null&&le==null||Zt(t,n,Se,ae,l,le)}function Tx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&Tx(S)){for(S=0,R=u.responseEnd,l+=1;l<s.length;l++){var I=s[l],ee=I.startTime;if(ee>R)break;var he=I.transferSize,Se=I.initiatorType;he&&Tx(Se)&&(I=I.responseEnd,S+=he*(I<R?1:(R-ee)/(I-ee)))}if(--l,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,ld=null;function hc(t){return t.nodeType===9?t:t.ownerDocument}function Ax(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function od(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function Yy(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Cx=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,wx=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof wx<"u"?function(t){return wx.resolve(null).then(t).catch($y)}:Cx;function $y(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function Nx(t,n){var s=n,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),Ar(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Il(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Il(s);for(var d=s.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[gs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&Il(t.ownerDocument.body);s=u}while(s);Ar(n)}function Dx(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ud(s),al(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Qy(t,n,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[gs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function Jy(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Mi(t.nextSibling),t===null))return null;return t}function Ux(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eS(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function Lx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Mi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Ox(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Px(t,n,s){switch(n=hc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Il(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);al(t)}var Ei=new Map,Bx=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=W.d;W.d={f:tS,r:nS,D:iS,C:aS,L:sS,m:rS,X:oS,S:lS,M:cS};function tS(){var t=xa.f(),n=sc();return t||n}function nS(t){var n=C(t);n!==null&&n.tag===5&&n.type==="form"?Jm(n):xa.r(t)}var Mr=typeof document>"u"?null:document;function Fx(t,n,s){var l=Mr;if(l&&typeof n=="string"&&n){var u=tn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Bx.has(u)||(Bx.add(u),t={rel:t,crossOrigin:s,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Gn(n,"link",t),ne(n),l.head.appendChild(n)))}}function iS(t){xa.D(t),Fx("dns-prefetch",t,null)}function aS(t,n){xa.C(t,n),Fx("preconnect",t,n)}function sS(t,n,s){xa.L(t,n,s);var l=Mr;if(l&&t&&n){var u='link[rel="preload"][as="'+tn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+tn(s.imageSizes)+'"]')):u+='[href="'+tn(t)+'"]';var d=u;switch(n){case"style":d=Er(t);break;case"script":d=Tr(t)}Ei.has(d)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ei.set(d,t),l.querySelector(u)!==null||n==="style"&&l.querySelector(Hl(d))||n==="script"&&l.querySelector(Gl(d))||(n=l.createElement("link"),Gn(n,"link",t),ne(n),l.head.appendChild(n)))}}function rS(t,n){xa.m(t,n);var s=Mr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+tn(l)+'"][href="'+tn(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Tr(t)}if(!Ei.has(d)&&(t=_({rel:"modulepreload",href:t},n),Ei.set(d,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Gl(d)))return}l=s.createElement("link"),Gn(l,"link",t),ne(l),s.head.appendChild(l)}}}function lS(t,n,s){xa.S(t,n,s);var l=Mr;if(l&&t){var u=se(l).hoistableStyles,d=Er(t);n=n||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(Hl(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ei.get(d))&&pd(t,s);var I=S=l.createElement("link");ne(I),Gn(I,"link",t),I._p=new Promise(function(ee,he){I.onload=ee,I.onerror=he}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,mc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function oS(t,n){xa.X(t,n);var s=Mr;if(s&&t){var l=se(s).hoistableScripts,u=Tr(t),d=l.get(u);d||(d=s.querySelector(Gl(u)),d||(t=_({src:t,async:!0},n),(n=Ei.get(u))&&md(t,n),d=s.createElement("script"),ne(d),Gn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function cS(t,n){xa.M(t,n);var s=Mr;if(s&&t){var l=se(s).hoistableScripts,u=Tr(t),d=l.get(u);d||(d=s.querySelector(Gl(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Ei.get(u))&&md(t,n),d=s.createElement("script"),ne(d),Gn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function zx(t,n,s,l){var u=(u=ie.current)?pc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Er(s.href),s=se(u).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Er(s.href);var d=se(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Hl(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Ei.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(t,s),d||uS(u,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(s),s=se(u).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Er(t){return'href="'+tn(t)+'"'}function Hl(t){return'link[rel="stylesheet"]['+t+"]"}function Ix(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Gn(n,"link",s),ne(n),t.head.appendChild(n))}function Tr(t){return'[src="'+tn(t)+'"]'}function Gl(t){return"script[async]"+t}function Hx(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+tn(s.href)+'"]');if(l)return n.instance=l,ne(l),l;var u=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ne(l),Gn(l,"style",u),mc(l,s.precedence,t),n.instance=l;case"stylesheet":u=Er(s.href);var d=t.querySelector(Hl(u));if(d)return n.state.loading|=4,n.instance=d,ne(d),d;l=Ix(s),(u=Ei.get(u))&&pd(l,u),d=(t.ownerDocument||t).createElement("link"),ne(d);var S=d;return S._p=new Promise(function(R,I){S.onload=R,S.onerror=I}),Gn(d,"link",l),n.state.loading|=4,mc(d,s.precedence,t),n.instance=d;case"script":return d=Tr(s.src),(u=t.querySelector(Gl(d)))?(n.instance=u,ne(u),u):(l=s,(u=Ei.get(d))&&(l=_({},s),md(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),ne(u),Gn(u,"link",l),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,mc(l,s.precedence,t));return n.instance}function mc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var xc=null;function Gx(t,n,s){if(xc===null){var l=new Map,u=xc=new Map;u.set(s,l)}else u=xc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[gs]||d[_n]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var R=l.get(S);R?R.push(d):l.set(S,[d])}}return l}function Vx(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dS(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Er(l.href),d=n.querySelector(Hl(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,ne(d);return}d=n.ownerDocument||n,l=Ix(l),(u=Ei.get(u))&&pd(l,u),d=d.createElement("link"),ne(d);var S=d;S._p=new Promise(function(R,I){S.onload=R,S.onerror=I}),Gn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=_c.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var xd=0;function hS(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&xd===0&&(xd=62500*Wy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>xd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gc=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gc=new Map,n.forEach(pS,t),gc=null,_c.call(t))}function pS(t,n){if(!(n.state.loading&4)){var s=gc.get(t);if(s)var l=s.get(null);else{s=new Map,gc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}u=n.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,u),s.set(S,u),this.count++,l=_c.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vl={$$typeof:N,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function mS(t,n,s,l,u,d,S,R,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function jx(t,n,s,l,u,d,S,R,I,ee,he,Se){return t=new mS(t,n,s,S,I,ee,he,Se,R),n=1,d===!0&&(n|=24),d=ai(3,null,null,n),t.current=d,d.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:n},Qu(d),t}function Xx(t){return t?(t=nr,t):nr}function qx(t,n,s,l,u,d){u=Xx(u),l.context===null?l.context=u:l.pendingContext=u,l=Ga(n),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Va(t,l,n),s!==null&&(Jn(s,t,n),yl(s,t,n))}function Wx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function _d(t,n){Wx(t,n),(t=t.alternate)&&Wx(t,n)}function Yx(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&Jn(n,t,67108864),_d(t,67108864)}}function Zx(t){if(t.tag===13||t.tag===31){var n=ci();n=Ci(n);var s=bs(t,n);s!==null&&Jn(s,t,n),_d(t,n)}}var yc=!0;function xS(t,n,s,l){var u=z.T;z.T=null;var d=W.p;try{W.p=2,gd(t,n,s,l)}finally{W.p=d,z.T=u}}function _S(t,n,s,l){var u=z.T;z.T=null;var d=W.p;try{W.p=8,gd(t,n,s,l)}finally{W.p=d,z.T=u}}function gd(t,n,s,l){if(yc){var u=vd(l);if(u===null)ad(t,n,l,Sc,s),$x(t,l);else if(vS(u,t,n,s,l))l.stopPropagation();else if($x(t,l),n&4&&-1<gS.indexOf(t)){for(;u!==null;){var d=C(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=me(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var I=1<<31-He(S);R.entanglements[1]|=I,S&=~I}ji(d),(Vt&6)===0&&(ic=T()+500,Bl(0))}}break;case 31:case 13:R=bs(d,2),R!==null&&Jn(R,d,2),sc(),_d(d,2)}if(d=vd(l),d===null&&ad(t,n,l,Sc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else ad(t,n,l,null,s)}}function vd(t){return t=yu(t),yd(t)}var Sc=null;function yd(t){if(Sc=null,t=La(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function Kx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xe:return 2;case Me:return 8;case ce:case $e:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Sd=!1,Ja=null,es=null,ts=null,kl=new Map,jl=new Map,ns=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $x(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":kl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(n.pointerId)}}function Xl(t,n,s,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},n!==null&&(n=C(n),n!==null&&Yx(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function vS(t,n,s,l,u){switch(n){case"focusin":return Ja=Xl(Ja,t,n,s,l,u),!0;case"dragenter":return es=Xl(es,t,n,s,l,u),!0;case"mouseover":return ts=Xl(ts,t,n,s,l,u),!0;case"pointerover":var d=u.pointerId;return kl.set(d,Xl(kl.get(d)||null,t,n,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,jl.set(d,Xl(jl.get(d)||null,t,n,s,l,u)),!0}return!1}function Qx(t){var n=La(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,il(t.priority,function(){Zx(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,il(t.priority,function(){Zx(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=vd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vu=l,s.target.dispatchEvent(l),vu=null}else return n=C(s),n!==null&&Yx(n),t.blockedOn=s,!1;n.shift()}return!0}function Jx(t,n,s){bc(t)&&s.delete(n)}function yS(){Sd=!1,Ja!==null&&bc(Ja)&&(Ja=null),es!==null&&bc(es)&&(es=null),ts!==null&&bc(ts)&&(ts=null),kl.forEach(Jx),jl.forEach(Jx)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yS)))}var Ec=null;function e_(t){Ec!==t&&(Ec=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],u=t[n+2];if(typeof l!="function"){if(yd(l||s)===null)continue;break}var d=C(s);d!==null&&(t.splice(n,3),n-=3,vf(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Ar(t){function n(I){return Mc(I,t)}Ja!==null&&Mc(Ja,t),es!==null&&Mc(es,t),ts!==null&&Mc(ts,t),kl.forEach(n),jl.forEach(n);for(var s=0;s<ns.length;s++){var l=ns[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ns.length&&(s=ns[0],s.blockedOn===null);)Qx(s),s.blockedOn===null&&ns.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],S=u[Mn]||null;if(typeof d=="function")S||e_(s);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Mn]||null)R=S.formAction;else if(yd(u)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),e_(s)}}}function t_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bd(t){this._internalRoot=t}Tc.prototype.render=bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=ci();qx(s,l,t,n,null,null)},Tc.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qx(t.current,2,null,t,null,null),sc(),n[$i]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=nl();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ns.length&&n!==0&&n<ns[s].priority;s++);ns.splice(s,0,t),s===0&&Qx(t)}};var n_=e.version;if(n_!=="19.2.0")throw Error(r(527,n_,"19.2.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var SS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ee=Ac.inject(SS),Te=Ac}catch{}}return Wl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",u=c0,d=u0,S=f0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=jx(t,1,!1,null,null,s,l,null,u,d,S,t_),t[$i]=n.current,id(t),new bd(n)},Wl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,u="",d=c0,S=u0,R=f0,I=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),n=jx(t,1,!0,n,s??null,l,u,I,d,S,R,t_),n.context=Xx(null),s=n.current,l=ci(),l=Ci(l),u=Ga(l),u.callback=null,Va(s,u,l),s=l,n.current.lanes=s,Vn(n,s),ji(n),t[$i]=n.current,id(t),new Tc(n)},Wl.version="19.2.0",Wl}var d_;function DS(){if(d_)return Td.exports;d_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Td.exports=NS(),Td.exports}var US=DS(),wd={exports:{}},Nd={};var h_;function LS(){if(h_)return Nd;h_=1;var i=ou().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Nd.c=function(e){return i.H.useMemoCache(e)},Nd}var p_;function OS(){return p_||(p_=1,wd.exports=LS()),wd.exports}var Zi=OS();var m_="popstate";function PS(i={}){function e(r,o){let{pathname:c,search:f,hash:h}=r.location;return hh("",{pathname:c,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(r,o){return typeof o=="string"?o:no(o)}return FS(e,a,null,i)}function on(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function zi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BS(){return Math.random().toString(36).substring(2,10)}function x_(i,e){return{usr:i.state,key:i.key,idx:e}}function hh(i,e,a=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Zr(e):e,state:a,key:e&&e.key||r||BS()}}function no({pathname:i="/",search:e="",hash:a=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(i+=a.charAt(0)==="#"?a:"#"+a),i}function Zr(i){let e={};if(i){let a=i.indexOf("#");a>=0&&(e.hash=i.substring(a),i=i.substring(0,a));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function FS(i,e,a,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,f=o.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let M=g(),v=M==null?null:M-p;p=M,m&&m({action:h,location:A.location,delta:v})}function y(M,v){h="PUSH";let w=hh(A.location,M,v);p=g()+1;let N=x_(w,p),P=A.createHref(w);try{f.pushState(N,"",P)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;o.location.assign(P)}c&&m&&m({action:h,location:A.location,delta:1})}function b(M,v){h="REPLACE";let w=hh(A.location,M,v);p=g();let N=x_(w,p),P=A.createHref(w);f.replaceState(N,"",P),c&&m&&m({action:h,location:A.location,delta:0})}function E(M){return zS(M)}let A={get action(){return h},get location(){return i(o,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(m_,_),m=M,()=>{o.removeEventListener(m_,_),m=null}},createHref(M){return e(o,M)},createURL:E,encodeLocation(M){let v=E(M);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:y,replace:b,go(M){return f.go(M)}};return A}function zS(i,e=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),on(a,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:no(i);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=a+r),new URL(r,a)}function Tg(i,e,a="/"){return IS(i,e,a,!1)}function IS(i,e,a,r){let o=typeof e=="string"?Zr(e):e,c=Ca(o.pathname||"/",a);if(c==null)return null;let f=Ag(i);HS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=$S(c);h=ZS(f[m],p,r)}return h}function Ag(i,e=[],a=[],r="",o=!1){let c=(f,h,m=o,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;on(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Aa([r,g.relativePath]),y=a.concat(g);f.children&&f.children.length>0&&(on(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Ag(f.children,e,y,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:WS(_,f.index),routesMeta:y})};return i.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Rg(f.path))c(f,h,!0,m)}),e}function Rg(i){let e=i.split("/");if(e.length===0)return[];let[a,...r]=e,o=a.endsWith("?"),c=a.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let f=Rg(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),o&&h.push(...f),h.map(m=>i.startsWith("/")&&m===""?"/":m)}function HS(i){i.sort((e,a)=>e.score!==a.score?a.score-e.score:YS(e.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var GS=/^:[\w-]+$/,VS=3,kS=2,jS=1,XS=10,qS=-2,__=i=>i==="*";function WS(i,e){let a=i.split("/"),r=a.length;return a.some(__)&&(r+=qS),e&&(r+=kS),a.filter(o=>!__(o)).reduce((o,c)=>o+(GS.test(c)?VS:c===""?jS:XS),r)}function YS(i,e){return i.length===e.length&&i.slice(0,-1).every((r,o)=>r===e[o])?i[i.length-1]-e[e.length-1]:0}function ZS(i,e,a=!1){let{routesMeta:r}=i,o={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),y=m.route;if(!_&&p&&a&&!r[r.length-1].route.index&&(_=iu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),f.push({params:o,pathname:Aa([c,_.pathname]),pathnameBase:nb(Aa([c,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(c=Aa([c,_.pathnameBase]))}return f}function iu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[a,r]=KS(i.path,i.caseSensitive,i.end),o=e.match(a);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},y)=>{if(g==="*"){let E=h[y]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[y];return _&&!b?p[g]=void 0:p[g]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:i}}function KS(i,e=!1,a=!0){zi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function $S(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ca(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,r=i.charAt(a);return r&&r!=="/"?null:i.slice(a)||"/"}var QS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JS=i=>QS.test(i);function eb(i,e="/"){let{pathname:a,search:r="",hash:o=""}=typeof i=="string"?Zr(i):i,c;if(a)if(JS(a))c=a;else{if(a.includes("//")){let f=a;a=a.replace(/\/\/+/g,"/"),zi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${a}`)}a.startsWith("/")?c=g_(a.substring(1),"/"):c=g_(a,e)}else c=e;return{pathname:c,search:ib(r),hash:ab(o)}}function g_(i,e){let a=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Dd(i,e,a,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tb(i){return i.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function Cg(i){let e=tb(i);return e.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase)}function wg(i,e,a,r=!1){let o;typeof i=="string"?o=Zr(i):(o={...i},on(!o.pathname||!o.pathname.includes("?"),Dd("?","pathname","search",o)),on(!o.pathname||!o.pathname.includes("#"),Dd("#","pathname","hash",o)),on(!o.search||!o.search.includes("#"),Dd("#","search","hash",o)));let c=i===""||o.pathname==="",f=c?"/":o.pathname,h;if(f==null)h=a;else{let _=e.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),_-=1;o.pathname=y.join("/")}h=_>=0?e[_]:"/"}let m=eb(o,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var Aa=i=>i.join("/").replace(/\/\/+/g,"/"),nb=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ib=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ab=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function sb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ng=["POST","PUT","PATCH","DELETE"];new Set(Ng);var rb=["GET",...Ng];new Set(rb);var Kr=ve.createContext(null);Kr.displayName="DataRouter";var cu=ve.createContext(null);cu.displayName="DataRouterState";ve.createContext(!1);var Dg=ve.createContext({isTransitioning:!1});Dg.displayName="ViewTransition";var lb=ve.createContext(new Map);lb.displayName="Fetchers";var ob=ve.createContext(null);ob.displayName="Await";var Ki=ve.createContext(null);Ki.displayName="Navigation";var ro=ve.createContext(null);ro.displayName="Location";var Da=ve.createContext({outlet:null,matches:[],isDataRoute:!1});Da.displayName="Route";var rp=ve.createContext(null);rp.displayName="RouteError";function cb(i,{relative:e}={}){on(lo(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=ve.useContext(Ki),{hash:o,pathname:c,search:f}=oo(i,{relative:e}),h=c;return a!=="/"&&(h=c==="/"?a:Aa([a,c])),r.createHref({pathname:h,search:f,hash:o})}function lo(){return ve.useContext(ro)!=null}function Ys(){return on(lo(),"useLocation() may be used only in the context of a <Router> component."),ve.useContext(ro).location}var Ug="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lg(i){ve.useContext(Ki).static||ve.useLayoutEffect(i)}function ub(){let{isDataRoute:i}=ve.useContext(Da);return i?Mb():fb()}function fb(){on(lo(),"useNavigate() may be used only in the context of a <Router> component.");let i=ve.useContext(Kr),{basename:e,navigator:a}=ve.useContext(Ki),{matches:r}=ve.useContext(Da),{pathname:o}=Ys(),c=JSON.stringify(Cg(r)),f=ve.useRef(!1);return Lg(()=>{f.current=!0}),ve.useCallback((m,p={})=>{if(zi(f.current,Ug),!f.current)return;if(typeof m=="number"){a.go(m);return}let g=wg(m,JSON.parse(c),o,p.relative==="path");i==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Aa([e,g.pathname])),(p.replace?a.replace:a.push)(g,p.state,p)},[e,a,c,o,i])}ve.createContext(null);function oo(i,{relative:e}={}){let{matches:a}=ve.useContext(Da),{pathname:r}=Ys(),o=JSON.stringify(Cg(a));return ve.useMemo(()=>wg(i,JSON.parse(o),r,e==="path"),[i,o,r,e])}function db(i,e){return Og(i,e)}function Og(i,e,a,r,o){on(lo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ve.useContext(Ki),{matches:f}=ve.useContext(Da),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let w=_&&_.path||"";Pg(p,!_||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=Ys(),b;if(e){let w=typeof e=="string"?Zr(e):e;on(g==="/"||w.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),b=w}else b=y;let E=b.pathname||"/",A=E;if(g!=="/"){let w=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let M=Tg(i,{pathname:A});zi(_||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),zi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=_b(M&&M.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:Aa([g,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:Aa([g,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,a,r,o);return e&&v?ve.createElement(ro.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},v):v}function hb(){let i=bb(),e=sb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),a=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=ve.createElement(ve.Fragment,null,ve.createElement("p",null,"💿 Hey developer 👋"),ve.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ve.createElement("code",{style:c},"ErrorBoundary")," or"," ",ve.createElement("code",{style:c},"errorElement")," prop on your route.")),ve.createElement(ve.Fragment,null,ve.createElement("h2",null,"Unexpected Application Error!"),ve.createElement("h3",{style:{fontStyle:"italic"}},e),a?ve.createElement("pre",{style:o},a):null,f)}var pb=ve.createElement(hb,null),mb=class extends ve.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?ve.createElement(Da.Provider,{value:this.props.routeContext},ve.createElement(rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xb({routeContext:i,match:e,children:a}){let r=ve.useContext(Kr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ve.createElement(Da.Provider,{value:i},a)}function _b(i,e=[],a=null,r=null,o=null){if(i==null){if(!a)return null;if(a.errors)i=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)i=a.matches;else return null}let c=i,f=a?.errors;if(f!=null){let g=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);on(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(a)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:y,errors:b}=a,E=_.route.loader&&!y.hasOwnProperty(_.route.id)&&(!b||b[_.route.id]===void 0);if(_.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=a&&r?(g,_)=>{r(g,{location:a.location,params:a.matches?.[0]?.params??{},errorInfo:_})}:void 0;return c.reduceRight((g,_,y)=>{let b,E=!1,A=null,M=null;a&&(b=f&&_.route.id?f[_.route.id]:void 0,A=_.route.errorElement||pb,h&&(m<0&&y===0?(Pg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):m===y&&(E=!0,M=_.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,y+1)),w=()=>{let N;return b?N=A:E?N=M:_.route.Component?N=ve.createElement(_.route.Component,null):_.route.element?N=_.route.element:N=g,ve.createElement(xb,{match:_,routeContext:{outlet:g,matches:v,isDataRoute:a!=null},children:N})};return a&&(_.route.ErrorBoundary||_.route.errorElement||y===0)?ve.createElement(mb,{location:a.location,revalidation:a.revalidation,component:A,error:b,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):w()},null)}function lp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gb(i){let e=ve.useContext(Kr);return on(e,lp(i)),e}function vb(i){let e=ve.useContext(cu);return on(e,lp(i)),e}function yb(i){let e=ve.useContext(Da);return on(e,lp(i)),e}function op(i){let e=yb(i),a=e.matches[e.matches.length-1];return on(a.route.id,`${i} can only be used on routes that contain a unique "id"`),a.route.id}function Sb(){return op("useRouteId")}function bb(){let i=ve.useContext(rp),e=vb("useRouteError"),a=op("useRouteError");return i!==void 0?i:e.errors?.[a]}function Mb(){let{router:i}=gb("useNavigate"),e=op("useNavigate"),a=ve.useRef(!1);return Lg(()=>{a.current=!0}),ve.useCallback(async(o,c={})=>{zi(a.current,Ug),a.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...c}))},[i,e])}var v_={};function Pg(i,e,a){!e&&!v_[i]&&(v_[i]=!0,zi(!1,a))}ve.memo(Eb);function Eb({routes:i,future:e,state:a,unstable_onError:r}){return Og(i,void 0,a,r,e)}function us(i){on(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tb({basename:i="/",children:e=null,location:a,navigationType:r="POP",navigator:o,static:c=!1}){on(!lo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),h=ve.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof a=="string"&&(a=Zr(a));let{pathname:m="/",search:p="",hash:g="",state:_=null,key:y="default"}=a,b=ve.useMemo(()=>{let E=Ca(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:_,key:y},navigationType:r}},[f,m,p,g,_,y,r]);return zi(b!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ve.createElement(Ki.Provider,{value:h},ve.createElement(ro.Provider,{children:e,value:b}))}function Ab({children:i,location:e}){return db(ph(i),e)}function ph(i,e=[]){let a=[];return ve.Children.forEach(i,(r,o)=>{if(!ve.isValidElement(r))return;let c=[...e,o];if(r.type===ve.Fragment){a.push.apply(a,ph(r.props.children,c));return}on(r.type===us,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),on(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ph(r.props.children,c)),a.push(f)}),a}var Zc="get",Kc="application/x-www-form-urlencoded";function uu(i){return i!=null&&typeof i.tagName=="string"}function Rb(i){return uu(i)&&i.tagName.toLowerCase()==="button"}function Cb(i){return uu(i)&&i.tagName.toLowerCase()==="form"}function wb(i){return uu(i)&&i.tagName.toLowerCase()==="input"}function Nb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Db(i,e){return i.button===0&&(!e||e==="_self")&&!Nb(i)}var Rc=null;function Ub(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var Lb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ud(i){return i!=null&&!Lb.has(i)?(zi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kc}"`),null):i}function Ob(i,e){let a,r,o,c,f;if(Cb(i)){let h=i.getAttribute("action");r=h?Ca(h,e):null,a=i.getAttribute("method")||Zc,o=Ud(i.getAttribute("enctype"))||Kc,c=new FormData(i)}else if(Rb(i)||wb(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||h.getAttribute("action");if(r=m?Ca(m,e):null,a=i.getAttribute("formmethod")||h.getAttribute("method")||Zc,o=Ud(i.getAttribute("formenctype"))||Ud(h.getAttribute("enctype"))||Kc,c=new FormData(h,i),!Ub()){let{name:p,type:g,value:_}=i;if(g==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,_)}}else{if(uu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Zc,r=null,o=Kc,f=i}return c&&o==="text/plain"&&(f=c,c=void 0),{action:r,method:a.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Pb(i,e,a){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${a}`:e&&Ca(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${a}`,r}async function Bb(i,e){if(i.id in e)return e[i.id];try{let a=await import(i.module);return e[i.id]=a,a}catch(a){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function zb(i,e,a){let r=await Promise.all(i.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await Bb(c,a);return f.links?f.links():[]}return[]}));return Vb(r.flat(1).filter(Fb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function y_(i,e,a,r,o,c){let f=(m,p)=>a[p]?m.route.id!==a[p].route.id:!0,h=(m,p)=>a[p].pathname!==m.pathname||a[p].route.path?.endsWith("*")&&a[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Ib(i,e,{includeHydrateFallback:a}={}){return Hb(i.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Hb(i){return[...new Set(i)]}function Gb(i){let e={},a=Object.keys(i).sort();for(let r of a)e[r]=i[r];return e}function Vb(i,e){let a=new Set;return new Set(e),i.reduce((r,o)=>{let c=JSON.stringify(Gb(o));return a.has(c)||(a.add(c),r.push({key:c,link:o})),r},[])}function Bg(){let i=ve.useContext(Kr);return cp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function kb(){let i=ve.useContext(cu);return cp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var up=ve.createContext(void 0);up.displayName="FrameworkContext";function Fg(){let i=ve.useContext(up);return cp(i,"You must render this element inside a <HydratedRouter> element"),i}function jb(i,e){let a=ve.useContext(up),[r,o]=ve.useState(!1),[c,f]=ve.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,y=ve.useRef(null);ve.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let A=v=>{v.forEach(w=>{f(w.isIntersecting)})},M=new IntersectionObserver(A,{threshold:.5});return y.current&&M.observe(y.current),()=>{M.disconnect()}}},[i]),ve.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let b=()=>{o(!0)},E=()=>{o(!1),f(!1)};return a?i!=="intent"?[c,y,{}]:[c,y,{onFocus:Yl(h,b),onBlur:Yl(m,E),onMouseEnter:Yl(p,b),onMouseLeave:Yl(g,E),onTouchStart:Yl(_,b)}]:[!1,y,{}]}function Yl(i,e){return a=>{i&&i(a),a.defaultPrevented||e(a)}}function Xb({page:i,...e}){let{router:a}=Bg(),r=ve.useMemo(()=>Tg(a.routes,i,a.basename),[a.routes,i,a.basename]);return r?ve.createElement(Wb,{page:i,matches:r,...e}):null}function qb(i){let{manifest:e,routeModules:a}=Fg(),[r,o]=ve.useState([]);return ve.useEffect(()=>{let c=!1;return zb(i,e,a).then(f=>{c||o(f)}),()=>{c=!0}},[i,e,a]),r}function Wb({page:i,matches:e,...a}){let r=Ys(),{manifest:o,routeModules:c}=Fg(),{basename:f}=Bg(),{loaderData:h,matches:m}=kb(),p=ve.useMemo(()=>y_(i,e,m,o,r,"data"),[i,e,m,o,r]),g=ve.useMemo(()=>y_(i,e,m,o,r,"assets"),[i,e,m,o,r]),_=ve.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(v=>{let w=o.routes[v.route.id];!w||!w.hasLoader||(!p.some(N=>N.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||w.hasClientLoader?A=!0:E.add(v.route.id))}),E.size===0)return[];let M=Pb(i,f,"data");return A&&E.size>0&&M.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[M.pathname+M.search]},[f,h,r,o,p,e,i,c]),y=ve.useMemo(()=>Ib(g,o),[g,o]),b=qb(g);return ve.createElement(ve.Fragment,null,_.map(E=>ve.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...a})),y.map(E=>ve.createElement("link",{key:E,rel:"modulepreload",href:E,...a})),b.map(({key:E,link:A})=>ve.createElement("link",{key:E,nonce:a.nonce,...A})))}function Yb(...i){return e=>{i.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var zg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zg&&(window.__reactRouterVersion="7.9.6")}catch{}function Zb({basename:i,children:e,window:a}){let r=ve.useRef();r.current==null&&(r.current=PS({window:a,v5Compat:!0}));let o=r.current,[c,f]=ve.useState({action:o.action,location:o.location}),h=ve.useCallback(m=>{ve.startTransition(()=>f(m))},[f]);return ve.useLayoutEffect(()=>o.listen(h),[o,h]),ve.createElement(Tb,{basename:i,children:e,location:c.location,navigationType:c.action,navigator:o})}var Ig=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fu=ve.forwardRef(function({onClick:e,discover:a="render",prefetch:r="none",relative:o,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:_,...y},b){let{basename:E}=ve.useContext(Ki),A=typeof p=="string"&&Ig.test(p),M,v=!1;if(typeof p=="string"&&A&&(M=p,zg))try{let U=new URL(window.location.href),D=p.startsWith("//")?new URL(U.protocol+p):new URL(p),k=Ca(D.pathname,E);D.origin===U.origin&&k!=null?p=k+D.search+D.hash:v=!0}catch{zi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=cb(p,{relative:o}),[N,P,G]=jb(r,y),O=Qb(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:o,viewTransition:_});function F(U){e&&e(U),U.defaultPrevented||O(U)}let K=ve.createElement("a",{...y,...G,href:M||w,onClick:v||c?e:F,ref:Yb(b,P),target:m,"data-discover":!A&&a==="render"?"true":void 0});return N&&!A?ve.createElement(ve.Fragment,null,K,ve.createElement(Xb,{page:w})):K});fu.displayName="Link";var Hg=ve.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:r="",end:o=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let _=oo(f,{relative:p.relative}),y=Ys(),b=ve.useContext(cu),{navigator:E,basename:A}=ve.useContext(Ki),M=b!=null&&i1(_)&&h===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,w=y.pathname,N=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;a||(w=w.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&A&&(N=Ca(N,A)||N);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let G=w===v||!o&&w.startsWith(v)&&w.charAt(P)==="/",O=N!=null&&(N===v||!o&&N.startsWith(v)&&N.charAt(v.length)==="/"),F={isActive:G,isPending:O,isTransitioning:M},K=G?e:void 0,U;typeof r=="function"?U=r(F):U=[r,G?"active":null,O?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(F):c;return ve.createElement(fu,{...p,"aria-current":K,className:U,ref:g,style:D,to:f,viewTransition:h},typeof m=="function"?m(F):m)});Hg.displayName="NavLink";var Kb=ve.forwardRef(({discover:i="render",fetcherKey:e,navigate:a,reloadDocument:r,replace:o,state:c,method:f=Zc,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,...y},b)=>{let E=t1(),A=n1(h,{relative:p}),M=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&Ig.test(h),w=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let P=N.nativeEvent.submitter,G=P?.getAttribute("formmethod")||f;E(P||N.currentTarget,{fetcherKey:e,method:G,navigate:a,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:_})};return ve.createElement("form",{ref:b,method:M,action:A,onSubmit:r?m:w,...y,"data-discover":!v&&i==="render"?"true":void 0})});Kb.displayName="Form";function $b(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gg(i){let e=ve.useContext(Kr);return on(e,$b(i)),e}function Qb(i,{target:e,replace:a,state:r,preventScrollReset:o,relative:c,viewTransition:f}={}){let h=ub(),m=Ys(),p=oo(i,{relative:c});return ve.useCallback(g=>{if(Db(g,e)){g.preventDefault();let _=a!==void 0?a:no(m)===no(p);h(i,{replace:_,state:r,preventScrollReset:o,relative:c,viewTransition:f})}},[m,h,p,a,r,e,i,o,c,f])}var Jb=0,e1=()=>`__${String(++Jb)}__`;function t1(){let{router:i}=Gg("useSubmit"),{basename:e}=ve.useContext(Ki),a=Sb();return ve.useCallback(async(r,o={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=Ob(r,e);if(o.navigate===!1){let g=o.fetcherKey||e1();await i.fetch(g,a,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await i.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:a,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,a])}function n1(i,{relative:e}={}){let{basename:a}=ve.useContext(Ki),r=ve.useContext(Da);on(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...oo(i||".",{relative:e})},f=Ys();if(i==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!i||i===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:Aa([a,c.pathname])),no(c)}function i1(i,{relative:e}={}){let a=ve.useContext(Dg);on(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Gg("useViewTransitionState"),o=oo(i,{relative:e});if(!a.isTransitioning)return!1;let c=Ca(a.currentLocation.pathname,r)||a.currentLocation.pathname,f=Ca(a.nextLocation.pathname,r)||a.nextLocation.pathname;return iu(o.pathname,f)!=null||iu(o.pathname,c)!=null}const a1="_nav_11nqb_1",s1="_navLink_11nqb_33",r1="_active_11nqb_131",l1="_supportLink_11nqb_183",$c={nav:a1,navLink:s1,active:r1,supportLink:l1},o1=[{to:"/",label:"Главная"},{to:"/courses",label:"Курсы"},{to:"/practice",label:"Практика"},{to:"/achievements",label:"Достижения"},{to:"/profile",label:"Профиль"},{to:"/support",label:"Поддержка",isSupport:!0}];function Vg(){const i=Zi.c(1);let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsx("nav",{className:$c.nav,children:o1.map(c1)}),i[0]=e):e=i[0],e}function c1(i){return x.jsxs(Hg,{to:i.to,className:e=>{const{isActive:a}=e;return`
            ${$c.navLink} 
            ${i.isSupport?$c.supportLink:""}
            ${a?` ${$c.active}`:""}
          `},children:[i.isSupport&&x.jsx("i",{className:"fas fa-heart","aria-hidden":"true"}),i.label]},i.to)}const u1="_page_1c22z_5",f1="_pixelback_1c22z_25",d1="_hero_1c22z_63",h1="_heroText_1c22z_85",p1="_heroStats_1c22z_129",m1="_card_1c22z_143",x1="_statNumber_1c22z_157",_1="_label_1c22z_171",g1="_codeCard_1c22z_183",v1="_codeHead_1c22z_207",y1="_codeDots_1c22z_227",S1="_codeBody_1c22z_239",b1="_courses_1c22z_261",M1="_cardGrid_1c22z_281",E1="_courseCard_1c22z_297",T1="_locked_1c22z_365",A1="_courseHead_1c22z_379",R1="_courseIcon_1c22z_395",C1="_progressInfo_1c22z_423",w1="_courseMeta_1c22z_455",N1="_taskCard_1c22z_505",D1="_taskHead_1c22z_517",U1="_hints_1c22z_555",L1="_modal_1c22z_569",O1="_modalHead_1c22z_591",P1="_modalBody_1c22z_605",Dt={page:u1,pixelback:f1,hero:d1,heroText:h1,heroStats:p1,card:m1,statNumber:x1,label:_1,codeCard:g1,codeHead:v1,codeDots:y1,codeBody:S1,courses:b1,cardGrid:M1,courseCard:E1,locked:T1,courseHead:A1,courseIcon:R1,progressInfo:C1,courseMeta:w1,taskCard:N1,taskHead:D1,hints:U1,modal:L1,modalHead:O1,modalBody:P1};const du="181",B1=0,S_=1,F1=2,kg=1,z1=2,Ma=3,wa=0,On=1,di=2,Fi=0,Gr=1,b_=2,M_=3,E_=4,I1=5,Vs=100,H1=101,G1=102,V1=103,k1=104,j1=200,X1=201,q1=202,W1=203,mh=204,xh=205,Y1=206,Z1=207,K1=208,$1=209,Q1=210,J1=211,eM=212,tM=213,nM=214,_h=0,au=1,gh=2,kr=3,vh=4,yh=5,Sh=6,bh=7,jg=0,iM=1,aM=2,ds=0,sM=1,rM=2,lM=3,oM=4,cM=5,uM=6,fM=7,Xg=300,jr=301,Xr=302,Mh=303,Eh=304,hu=306,Th=1e3,Ea=1001,Ah=1002,hi=1003,dM=1004,Cc=1005,Pn=1006,Ld=1007,js=1008,mi=1009,qg=1010,Wg=1011,io=1012,fp=1013,hs=1014,Ta=1015,$r=1016,dp=1017,hp=1018,qr=1020,Yg=35902,Zg=35899,Kg=1021,$g=1022,Bi=1023,ao=1026,Wr=1027,Qg=1028,pp=1029,mp=1030,xp=1031,_p=1033,Qc=33776,Jc=33777,eu=33778,tu=33779,Rh=35840,Ch=35841,wh=35842,Nh=35843,Dh=36196,Uh=37492,Lh=37496,Oh=37808,Ph=37809,Bh=37810,Fh=37811,zh=37812,Ih=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,jh=37818,Xh=37819,qh=37820,Wh=37821,Yh=36492,Zh=36494,Kh=36495,$h=36283,Qh=36284,Jh=36285,ep=36286,co=3200,hM=3201,pM=0,mM=1,qi="",pn="srgb",ps="srgb-linear",su="linear",$t="srgb",Rr=7680,T_=519,xM=512,_M=513,gM=514,Jg=515,vM=516,yM=517,SM=518,bM=519,A_=35044,tp="300 es",Wi=2e3,ru=2001;function ev(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function MM(){const i=lu("canvas");return i.style.display="block",i}const R_={};function C_(...i){const e="THREE."+i.shift();console.log(e,...i)}function mt(...i){const e="THREE."+i.shift();console.warn(e,...i)}function mn(...i){const e="THREE."+i.shift();console.error(e,...i)}function so(...i){const e=i.join(" ");e in R_||(R_[e]=!0,mt(...i))}function EM(i,e,a){return new Promise(function(r,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,a);break;default:r()}}setTimeout(c,a)})}class ms{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(a)===-1&&r[e].push(a)}hasEventListener(e,a){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(a)!==-1}removeEventListener(e,a){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(a);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const r=a[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,np=180/Math.PI;function uo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[a&63|128]+jn[a>>8&255]+"-"+jn[a>>16&255]+jn[a>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Ut(i,e,a){return Math.max(e,Math.min(a,i))}function TM(i,e){return(i%e+e)%e}function Pd(i,e,a){return(1-a)*i+a*e}function Zl(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,a=0){St.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,r=this.y,o=e.elements;return this.x=o[0]*a+o[3]*r+o[6],this.y=o[1]*a+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Ut(this.x,e.x,a.x),this.y=Ut(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Ut(this.x,e,a),this.y=Ut(this.y,e,a),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(e)/a;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,r=this.y-e.y;return a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const r=Math.cos(a),o=Math.sin(a),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fo{constructor(e=0,a=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=r,this._w=o}static slerpFlat(e,a,r,o,c,f,h){let m=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3],y=c[f+0],b=c[f+1],E=c[f+2],A=c[f+3];if(h<=0){e[a+0]=m,e[a+1]=p,e[a+2]=g,e[a+3]=_;return}if(h>=1){e[a+0]=y,e[a+1]=b,e[a+2]=E,e[a+3]=A;return}if(_!==A||m!==y||p!==b||g!==E){let M=m*y+p*b+g*E+_*A;M<0&&(y=-y,b=-b,E=-E,A=-A,M=-M);let v=1-h;if(M<.9995){const w=Math.acos(M),N=Math.sin(w);v=Math.sin(v*w)/N,h=Math.sin(h*w)/N,m=m*v+y*h,p=p*v+b*h,g=g*v+E*h,_=_*v+A*h}else{m=m*v+y*h,p=p*v+b*h,g=g*v+E*h,_=_*v+A*h;const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}e[a]=m,e[a+1]=p,e[a+2]=g,e[a+3]=_}static multiplyQuaternionsFlat(e,a,r,o,c,f){const h=r[o],m=r[o+1],p=r[o+2],g=r[o+3],_=c[f],y=c[f+1],b=c[f+2],E=c[f+3];return e[a]=h*E+g*_+m*b-p*y,e[a+1]=m*E+g*y+p*_-h*b,e[a+2]=p*E+g*b+h*y-m*_,e[a+3]=g*E-h*_-m*y-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,r,o){return this._x=e,this._y=a,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const r=e._x,o=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(o/2),_=h(c/2),y=m(r/2),b=m(o/2),E=m(c/2);switch(f){case"XYZ":this._x=y*g*_+p*b*E,this._y=p*b*_-y*g*E,this._z=p*g*E+y*b*_,this._w=p*g*_-y*b*E;break;case"YXZ":this._x=y*g*_+p*b*E,this._y=p*b*_-y*g*E,this._z=p*g*E-y*b*_,this._w=p*g*_+y*b*E;break;case"ZXY":this._x=y*g*_-p*b*E,this._y=p*b*_+y*g*E,this._z=p*g*E+y*b*_,this._w=p*g*_-y*b*E;break;case"ZYX":this._x=y*g*_-p*b*E,this._y=p*b*_+y*g*E,this._z=p*g*E-y*b*_,this._w=p*g*_+y*b*E;break;case"YZX":this._x=y*g*_+p*b*E,this._y=p*b*_+y*g*E,this._z=p*g*E-y*b*_,this._w=p*g*_-y*b*E;break;case"XZY":this._x=y*g*_-p*b*E,this._y=p*b*_-y*g*E,this._z=p*g*E+y*b*_,this._w=p*g*_+y*b*E;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const r=a/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,r=a[0],o=a[4],c=a[8],f=a[1],h=a[5],m=a[9],p=a[2],g=a[6],_=a[10],y=r+h+_;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-p)*b,this._z=(f-o)*b}else if(r>h&&r>_){const b=2*Math.sqrt(1+r-h-_);this._w=(g-m)/b,this._x=.25*b,this._y=(o+f)/b,this._z=(c+p)/b}else if(h>_){const b=2*Math.sqrt(1+h-r-_);this._w=(c-p)/b,this._x=(o+f)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+_-r-h);this._w=(f-o)/b,this._x=(c+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let r=e.dot(a)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,a){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,a/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const r=e._x,o=e._y,c=e._z,f=e._w,h=a._x,m=a._y,p=a._z,g=a._w;return this._x=r*g+f*h+o*p-c*m,this._y=o*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-o*h,this._w=f*g-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,a){if(a<=0)return this;if(a>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,f=-f,h=-h);let m=1-a;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,a=Math.sin(a*p)/g,this._x=this._x*m+r*a,this._y=this._y*m+o*a,this._z=this._z*m+c*a,this._w=this._w*m+f*a,this._onChangeCallback()}else this._x=this._x*m+r*a,this._y=this._y*m+o*a,this._z=this._z*m+c*a,this._w=this._w*m+f*a,this.normalize();return this}slerpQuaternions(e,a,r){return this.copy(e).slerp(a,r)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(a),c*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,a=0,r=0){de.prototype.isVector3=!0,this.x=e,this.y=a,this.z=r}set(e,a,r){return r===void 0&&(r=this.z),this.x=e,this.y=a,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(w_.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*a+c[3]*r+c[6]*o,this.y=c[1]*a+c[4]*r+c[7]*o,this.z=c[2]*a+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*a+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*a+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*a+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*a+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const a=this.x,r=this.y,o=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*o-h*r),g=2*(h*a-c*o),_=2*(c*r-f*a);return this.x=a+m*p+f*_-h*g,this.y=r+m*g+h*p-c*_,this.z=o+m*_+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*a+c[4]*r+c[8]*o,this.y=c[1]*a+c[5]*r+c[9]*o,this.z=c[2]*a+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Ut(this.x,e.x,a.x),this.y=Ut(this.y,e.y,a.y),this.z=Ut(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Ut(this.x,e,a),this.y=Ut(this.y,e,a),this.z=Ut(this.z,e,a),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this.z=e.z+(a.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const r=e.x,o=e.y,c=e.z,f=a.x,h=a.y,m=a.z;return this.x=o*m-c*h,this.y=c*f-r*m,this.z=r*h-o*f,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const r=e.dot(this)/a;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(e)/a;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return a*a+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,r){const o=Math.sin(a)*e;return this.x=o*Math.sin(r),this.y=Math.cos(a)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,r){return this.x=e*Math.sin(a),this.y=r,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=r,this.z=o,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,r=Math.sqrt(1-a*a);return this.x=r*Math.cos(e),this.y=a,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new de,w_=new fo;class gt{constructor(e,a,r,o,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,r,o,c,f,h,m,p)}set(e,a,r,o,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=a,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,r=e.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],this}extractBasis(e,a,r){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const r=e.elements,o=a.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],_=r[7],y=r[2],b=r[5],E=r[8],A=o[0],M=o[3],v=o[6],w=o[1],N=o[4],P=o[7],G=o[2],O=o[5],F=o[8];return c[0]=f*A+h*w+m*G,c[3]=f*M+h*N+m*O,c[6]=f*v+h*P+m*F,c[1]=p*A+g*w+_*G,c[4]=p*M+g*N+_*O,c[7]=p*v+g*P+_*F,c[2]=y*A+b*w+E*G,c[5]=y*M+b*N+E*O,c[8]=y*v+b*P+E*F,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],r=e[1],o=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return a*f*g-a*h*p-r*c*g+r*h*m+o*c*p-o*f*m}invert(){const e=this.elements,a=e[0],r=e[1],o=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*f-h*p,y=h*m-g*c,b=p*c-f*m,E=a*_+r*y+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(o*p-g*r)*A,e[2]=(h*r-o*f)*A,e[3]=y*A,e[4]=(g*a-o*m)*A,e[5]=(o*c-h*a)*A,e[6]=b*A,e[7]=(r*m-p*a)*A,e[8]=(f*a-r*c)*A,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,r,o,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-o*p,o*m,-o*(-p*f+m*h)+h+a,0,0,1),this}scale(e,a){return this.premultiply(Fd.makeScale(e,a)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,a){return this.premultiply(Fd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,-r,0,r,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,r=e.elements;for(let o=0;o<9;o++)if(a[o]!==r[o])return!1;return!0}fromArray(e,a=0){for(let r=0;r<9;r++)this.elements[r]=e[r+a];return this}toArray(e=[],a=0){const r=this.elements;return e[a]=r[0],e[a+1]=r[1],e[a+2]=r[2],e[a+3]=r[3],e[a+4]=r[4],e[a+5]=r[5],e[a+6]=r[6],e[a+7]=r[7],e[a+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fd=new gt,N_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){const i={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$t&&(o.r=Ra(o.r),o.g=Ra(o.g),o.b=Ra(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$t&&(o.r=Vr(o.r),o.g=Vr(o.g),o.b=Vr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qi?su:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[ps]:{primaries:e,whitePoint:r,transfer:su,toXYZ:N_,fromXYZ:D_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:r,transfer:$t,toXYZ:N_,fromXYZ:D_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const Ht=AM();function Ra(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cr;class RM{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cr===void 0&&(Cr=lu("canvas")),Cr.width=e.width,Cr.height=e.height;const o=Cr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Cr}return r.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=lu("canvas");a.width=e.width,a.height=e.height;const r=a.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return r.putImageData(o,0,0),a}else if(e.data){const a=e.data.slice(0);for(let r=0;r<a.length;r++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[r]=Math.floor(Ra(a[r]/255)*255):a[r]=Ra(a[r]);return{data:a,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(zd(o[f].image)):c.push(zd(o[f]))}else c=zd(o);r.url=c}return a||(e.images[this.uuid]=r),r}}function zd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?RM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let wM=0;const Id=new de;class Bn extends ms{constructor(e=Bn.DEFAULT_IMAGE,a=Bn.DEFAULT_MAPPING,r=Ea,o=Ea,c=Pn,f=js,h=Bi,m=mi,p=Bn.DEFAULT_ANISOTROPY,g=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=uo(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const r=e[a];if(r===void 0){mt(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const o=this[a];if(o===void 0){mt(`Texture.setValues(): property '${a}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[a]=r}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),a||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Xg;Bn.DEFAULT_ANISOTROPY=1;class xn{constructor(e=0,a=0,r=0,o=1){xn.prototype.isVector4=!0,this.x=e,this.y=a,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,r,o){return this.x=e,this.y=a,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*a+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*a+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*a+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*a+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,r,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],y=m[1],b=m[5],E=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const N=(p+1)/2,P=(b+1)/2,G=(v+1)/2,O=(g+y)/4,F=(_+A)/4,K=(E+M)/4;return N>P&&N>G?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=O/r,c=F/r):P>G?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=O/o,c=K/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=F/c,o=K/c),this.set(r,o,c,a),this}let w=Math.sqrt((M-E)*(M-E)+(_-A)*(_-A)+(y-g)*(y-g));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(_-A)/w,this.z=(y-g)/w,this.w=Math.acos((p+b+v-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Ut(this.x,e.x,a.x),this.y=Ut(this.y,e.y,a.y),this.z=Ut(this.z,e.z,a.z),this.w=Ut(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Ut(this.x,e,a),this.y=Ut(this.y,e,a),this.z=Ut(this.z,e,a),this.w=Ut(this.w,e,a),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this.z=e.z+(a.z-e.z)*r,this.w=e.w+(a.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NM extends ms{constructor(e=1,a=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=r.depth,this.scissor=new xn(0,0,e,a),this.scissorTest=!1,this.viewport=new xn(0,0,e,a);const o={width:e,height:a,depth:r.depth},c=new Bn(o);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const a={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,r=1){if(this.width!==e||this.height!==a||this.depth!==r){this.width=e,this.height=a,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=a,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,r=e.textures.length;a<r;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const o=Object.assign({},e.textures[a].image);this.textures[a].source=new gp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends NM{constructor(e=1,a=1,r={}){super(e,a,r),this.isWebGLRenderTarget=!0}}class tv extends Bn{constructor(e=null,a=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends Bn{constructor(e=null,a=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(e=new de(1/0,1/0,1/0),a=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,r=e.length;a<r;a+=3)this.expandByPoint(Ui.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,r=e.count;a<r;a++)this.expandByPoint(Ui.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,r=e.length;a<r;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const r=Ui.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(a===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wc.copy(r.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,r;return e.normal.x>0?(a=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),a<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kl),Nc.subVectors(this.max,Kl),wr.subVectors(e.a,Kl),Nr.subVectors(e.b,Kl),Dr.subVectors(e.c,Kl),as.subVectors(Nr,wr),ss.subVectors(Dr,Nr),Ps.subVectors(wr,Dr);let a=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Ps.z,Ps.y,as.z,0,-as.x,ss.z,0,-ss.x,Ps.z,0,-Ps.x,-as.y,as.x,0,-ss.y,ss.x,0,-Ps.y,Ps.x,0];return!Hd(a,wr,Nr,Dr,Nc)||(a=[1,0,0,0,1,0,0,0,1],!Hd(a,wr,Nr,Dr,Nc))?!1:(Dc.crossVectors(as,ss),a=[Dc.x,Dc.y,Dc.z],Hd(a,wr,Nr,Dr,Nc))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new de,new de,new de,new de,new de,new de,new de,new de],Ui=new de,wc=new ho,wr=new de,Nr=new de,Dr=new de,as=new de,ss=new de,Ps=new de,Kl=new de,Nc=new de,Dc=new de,Bs=new de;function Hd(i,e,a,r,o){for(let c=0,f=i.length-3;c<=f;c+=3){Bs.fromArray(i,c);const h=o.x*Math.abs(Bs.x)+o.y*Math.abs(Bs.y)+o.z*Math.abs(Bs.z),m=e.dot(Bs),p=a.dot(Bs),g=r.dot(Bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const UM=new ho,$l=new de,Gd=new de;class vp{constructor(e=new de,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const r=this.center;a!==void 0?r.copy(a):UM.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const r=this.center.distanceToSquared(e);return a.copy(e),r>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$l.subVectors(e,this.center);const a=$l.lengthSq();if(a>this.radius*this.radius){const r=Math.sqrt(a),o=(r-this.radius)*.5;this.center.addScaledVector($l,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($l.copy(e.center).add(Gd)),this.expandByPoint($l.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new de,Vd=new de,Uc=new de,rs=new de,kd=new de,Lc=new de,jd=new de;class LM{constructor(e=new de,a=new de(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const r=a.dot(this.direction);return r<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ga.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,a),ga.distanceToSquared(e))}distanceSqToSegment(e,a,r,o){Vd.copy(e).add(a).multiplyScalar(.5),Uc.copy(a).sub(e).normalize(),rs.copy(this.origin).sub(Vd);const c=e.distanceTo(a)*.5,f=-this.direction.dot(Uc),h=rs.dot(this.direction),m=-rs.dot(Uc),p=rs.lengthSq(),g=Math.abs(1-f*f);let _,y,b,E;if(g>0)if(_=f*m-h,y=f*h-m,E=c*g,_>=0)if(y>=-E)if(y<=E){const A=1/g;_*=A,y*=A,b=_*(_+f*y+2*h)+y*(f*_+y+2*m)+p}else y=c,_=Math.max(0,-(f*y+h)),b=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(f*y+h)),b=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-f*c+h)),y=_>0?-c:Math.min(Math.max(-c,-m),c),b=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-c,-m),c),b=y*(y+2*m)+p):(_=Math.max(0,-(f*c+h)),y=_>0?c:Math.min(Math.max(-c,-m),c),b=-_*_+y*(y+2*m)+p);else y=f>0?-c:c,_=Math.max(0,-(f*y+h)),b=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Vd).addScaledVector(Uc,y),b}intersectSphere(e,a){ga.subVectors(e.center,this.origin);const r=ga.dot(this.direction),o=ga.dot(ga)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,a):this.at(h,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/a;return r>=0?r:null}intersectPlane(e,a){const r=this.distanceToPlane(e);return r===null?null:this.at(r,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let r,o,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(e.min.z-y.z)*_,m=(e.max.z-y.z)*_):(h=(e.max.z-y.z)*_,m=(e.min.z-y.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,a)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,a,r,o,c){kd.subVectors(a,e),Lc.subVectors(r,e),jd.crossVectors(kd,Lc);let f=this.direction.dot(jd),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;rs.subVectors(this.origin,e);const m=h*this.direction.dot(Lc.crossVectors(rs,Lc));if(m<0)return null;const p=h*this.direction.dot(kd.cross(rs));if(p<0||m+p>f)return null;const g=-h*rs.dot(jd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An{constructor(e,a,r,o,c,f,h,m,p,g,_,y,b,E,A,M){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,r,o,c,f,h,m,p,g,_,y,b,E,A,M)}set(e,a,r,o,c,f,h,m,p,g,_,y,b,E,A,M){const v=this.elements;return v[0]=e,v[4]=a,v[8]=r,v[12]=o,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=b,v[7]=E,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(e){const a=this.elements,r=e.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],a[9]=r[9],a[10]=r[10],a[11]=r[11],a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],this}copyPosition(e){const a=this.elements,r=e.elements;return a[12]=r[12],a[13]=r[13],a[14]=r[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,r){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,a,r){return this.set(e.x,a.x,r.x,0,e.y,a.y,r.y,0,e.z,a.z,r.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,r=e.elements,o=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),f=1/Ur.setFromMatrixColumn(e,2).length();return a[0]=r[0]*o,a[1]=r[1]*o,a[2]=r[2]*o,a[3]=0,a[4]=r[4]*c,a[5]=r[5]*c,a[6]=r[6]*c,a[7]=0,a[8]=r[8]*f,a[9]=r[9]*f,a[10]=r[10]*f,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=f*g,b=f*_,E=h*g,A=h*_;a[0]=m*g,a[4]=-m*_,a[8]=p,a[1]=b+E*p,a[5]=y-A*p,a[9]=-h*m,a[2]=A-y*p,a[6]=E+b*p,a[10]=f*m}else if(e.order==="YXZ"){const y=m*g,b=m*_,E=p*g,A=p*_;a[0]=y+A*h,a[4]=E*h-b,a[8]=f*p,a[1]=f*_,a[5]=f*g,a[9]=-h,a[2]=b*h-E,a[6]=A+y*h,a[10]=f*m}else if(e.order==="ZXY"){const y=m*g,b=m*_,E=p*g,A=p*_;a[0]=y-A*h,a[4]=-f*_,a[8]=E+b*h,a[1]=b+E*h,a[5]=f*g,a[9]=A-y*h,a[2]=-f*p,a[6]=h,a[10]=f*m}else if(e.order==="ZYX"){const y=f*g,b=f*_,E=h*g,A=h*_;a[0]=m*g,a[4]=E*p-b,a[8]=y*p+A,a[1]=m*_,a[5]=A*p+y,a[9]=b*p-E,a[2]=-p,a[6]=h*m,a[10]=f*m}else if(e.order==="YZX"){const y=f*m,b=f*p,E=h*m,A=h*p;a[0]=m*g,a[4]=A-y*_,a[8]=E*_+b,a[1]=_,a[5]=f*g,a[9]=-h*g,a[2]=-p*g,a[6]=b*_+E,a[10]=y-A*_}else if(e.order==="XZY"){const y=f*m,b=f*p,E=h*m,A=h*p;a[0]=m*g,a[4]=-_,a[8]=p*g,a[1]=y*_+A,a[5]=f*g,a[9]=b*_-E,a[2]=E*_-b,a[6]=h*g,a[10]=A*_+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OM,e,PM)}lookAt(e,a,r){const o=this.elements;return ui.subVectors(e,a),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ls.crossVectors(r,ui),ls.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ls.crossVectors(r,ui)),ls.normalize(),Oc.crossVectors(ui,ls),o[0]=ls.x,o[4]=Oc.x,o[8]=ui.x,o[1]=ls.y,o[5]=Oc.y,o[9]=ui.y,o[2]=ls.z,o[6]=Oc.z,o[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const r=e.elements,o=a.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],_=r[5],y=r[9],b=r[13],E=r[2],A=r[6],M=r[10],v=r[14],w=r[3],N=r[7],P=r[11],G=r[15],O=o[0],F=o[4],K=o[8],U=o[12],D=o[1],k=o[5],Q=o[9],re=o[13],pe=o[2],ue=o[6],z=o[10],W=o[14],X=o[3],_e=o[7],ye=o[11],B=o[15];return c[0]=f*O+h*D+m*pe+p*X,c[4]=f*F+h*k+m*ue+p*_e,c[8]=f*K+h*Q+m*z+p*ye,c[12]=f*U+h*re+m*W+p*B,c[1]=g*O+_*D+y*pe+b*X,c[5]=g*F+_*k+y*ue+b*_e,c[9]=g*K+_*Q+y*z+b*ye,c[13]=g*U+_*re+y*W+b*B,c[2]=E*O+A*D+M*pe+v*X,c[6]=E*F+A*k+M*ue+v*_e,c[10]=E*K+A*Q+M*z+v*ye,c[14]=E*U+A*re+M*W+v*B,c[3]=w*O+N*D+P*pe+G*X,c[7]=w*F+N*k+P*ue+G*_e,c[11]=w*K+N*Q+P*z+G*ye,c[15]=w*U+N*re+P*W+G*B,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],r=e[4],o=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],y=e[10],b=e[14],E=e[3],A=e[7],M=e[11],v=e[15];return E*(+c*m*_-o*p*_-c*h*y+r*p*y+o*h*b-r*m*b)+A*(+a*m*b-a*p*y+c*f*y-o*f*b+o*p*g-c*m*g)+M*(+a*p*_-a*h*b-c*f*_+r*f*b+c*h*g-r*p*g)+v*(-o*h*g-a*m*_+a*h*y+o*f*_-r*f*y+r*m*g)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=a,o[14]=r),this}invert(){const e=this.elements,a=e[0],r=e[1],o=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],y=e[10],b=e[11],E=e[12],A=e[13],M=e[14],v=e[15],w=_*M*p-A*y*p+A*m*b-h*M*b-_*m*v+h*y*v,N=E*y*p-g*M*p-E*m*b+f*M*b+g*m*v-f*y*v,P=g*A*p-E*_*p+E*h*b-f*A*b-g*h*v+f*_*v,G=E*_*m-g*A*m-E*h*y+f*A*y+g*h*M-f*_*M,O=a*w+r*N+o*P+c*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=w*F,e[1]=(A*y*c-_*M*c-A*o*b+r*M*b+_*o*v-r*y*v)*F,e[2]=(h*M*c-A*m*c+A*o*p-r*M*p-h*o*v+r*m*v)*F,e[3]=(_*m*c-h*y*c-_*o*p+r*y*p+h*o*b-r*m*b)*F,e[4]=N*F,e[5]=(g*M*c-E*y*c+E*o*b-a*M*b-g*o*v+a*y*v)*F,e[6]=(E*m*c-f*M*c-E*o*p+a*M*p+f*o*v-a*m*v)*F,e[7]=(f*y*c-g*m*c+g*o*p-a*y*p-f*o*b+a*m*b)*F,e[8]=P*F,e[9]=(E*_*c-g*A*c-E*r*b+a*A*b+g*r*v-a*_*v)*F,e[10]=(f*A*c-E*h*c+E*r*p-a*A*p-f*r*v+a*h*v)*F,e[11]=(g*h*c-f*_*c-g*r*p+a*_*p+f*r*b-a*h*b)*F,e[12]=G*F,e[13]=(g*A*o-E*_*o+E*r*y-a*A*y-g*r*M+a*_*M)*F,e[14]=(E*h*o-f*A*o-E*r*m+a*A*m+f*r*M-a*h*M)*F,e[15]=(f*_*o-g*h*o+g*r*m-a*_*m-f*r*y+a*h*y)*F,this}scale(e){const a=this.elements,r=e.x,o=e.y,c=e.z;return a[0]*=r,a[4]*=o,a[8]*=c,a[1]*=r,a[5]*=o,a[9]*=c,a[2]*=r,a[6]*=o,a[10]*=c,a[3]*=r,a[7]*=o,a[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,r,o))}makeTranslation(e,a,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,r,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,a,-r,0,0,r,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,0,r,0,0,1,0,0,-r,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,-r,0,0,r,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const r=Math.cos(a),o=Math.sin(a),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+r,g*m-o*f,0,p*m-o*h,g*m+o*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,a,r){return this.set(e,0,0,0,0,a,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,a,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,a,o,1,0,0,0,0,1),this}compose(e,a,r){const o=this.elements,c=a._x,f=a._y,h=a._z,m=a._w,p=c+c,g=f+f,_=h+h,y=c*p,b=c*g,E=c*_,A=f*g,M=f*_,v=h*_,w=m*p,N=m*g,P=m*_,G=r.x,O=r.y,F=r.z;return o[0]=(1-(A+v))*G,o[1]=(b+P)*G,o[2]=(E-N)*G,o[3]=0,o[4]=(b-P)*O,o[5]=(1-(y+v))*O,o[6]=(M+w)*O,o[7]=0,o[8]=(E+N)*F,o[9]=(M-w)*F,o[10]=(1-(y+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,a,r){const o=this.elements;let c=Ur.set(o[0],o[1],o[2]).length();const f=Ur.set(o[4],o[5],o[6]).length(),h=Ur.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Li.copy(this);const p=1/c,g=1/f,_=1/h;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,a.setFromRotationMatrix(Li),r.x=c,r.y=f,r.z=h,this}makePerspective(e,a,r,o,c,f,h=Wi,m=!1){const p=this.elements,g=2*c/(a-e),_=2*c/(r-o),y=(a+e)/(a-e),b=(r+o)/(r-o);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===Wi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===ru)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,r,o,c,f,h=Wi,m=!1){const p=this.elements,g=2/(a-e),_=2/(r-o),y=-(a+e)/(a-e),b=-(r+o)/(r-o);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===Wi)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===ru)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,r=e.elements;for(let o=0;o<16;o++)if(a[o]!==r[o])return!1;return!0}fromArray(e,a=0){for(let r=0;r<16;r++)this.elements[r]=e[r+a];return this}toArray(e=[],a=0){const r=this.elements;return e[a]=r[0],e[a+1]=r[1],e[a+2]=r[2],e[a+3]=r[3],e[a+4]=r[4],e[a+5]=r[5],e[a+6]=r[6],e[a+7]=r[7],e[a+8]=r[8],e[a+9]=r[9],e[a+10]=r[10],e[a+11]=r[11],e[a+12]=r[12],e[a+13]=r[13],e[a+14]=r[14],e[a+15]=r[15],e}}const Ur=new de,Li=new An,OM=new de(0,0,0),PM=new de(1,1,1),ls=new de,Oc=new de,ui=new de,U_=new An,L_=new fo;class Na{constructor(e=0,a=0,r=0,o=Na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,r,o=this._order){return this._x=e,this._y=a,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],y=o[6],b=o[10];switch(a){case"XYZ":this._y=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ut(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,r){return U_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U_,a,r)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Na.DEFAULT_ORDER="XYZ";class nv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BM=0;const O_=new de,Lr=new fo,va=new An,Pc=new de,Ql=new de,FM=new de,zM=new fo,P_=new de(1,0,0),B_=new de(0,1,0),F_=new de(0,0,1),z_={type:"added"},IM={type:"removed"},Or={type:"childadded",child:null},Xd={type:"childremoved",child:null};class pi extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new de,a=new Na,r=new fo,o=new de(1,1,1);function c(){r.setFromEuler(a,!1)}function f(){a.setFromQuaternion(r,void 0,!1)}a._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new An},normalMatrix:{value:new gt}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Lr.setFromAxisAngle(e,a),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,a){return Lr.setFromAxisAngle(e,a),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(F_,e)}translateOnAxis(e,a){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(F_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,a,r){e.isVector3?Pc.copy(e):Pc.set(e,a,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Ql,Pc,this.up):va.lookAt(Pc,Ql,this.up),this.quaternion.setFromRotationMatrix(va),o&&(va.extractRotation(o.matrixWorld),Lr.setFromRotationMatrix(va),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(mn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z_),Or.child=e,this.dispatchEvent(Or),Or.child=null):mn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(IM),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z_),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,a);if(f!==void 0)return f}}getObjectsByProperty(e,a,r=[]){this[e]===a&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,a,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,zM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateMatrixWorld(e)}updateWorldMatrix(e,a){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",r={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(a){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),y=f(e.skeletons),b=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}pi.DEFAULT_UP=new de(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new de,ya=new de,qd=new de,Sa=new de,Pr=new de,Br=new de,I_=new de,Wd=new de,Yd=new de,Zd=new de,Kd=new xn,$d=new xn,Qd=new xn;class Pi{constructor(e=new de,a=new de,r=new de){this.a=e,this.b=a,this.c=r}static getNormal(e,a,r,o){o.subVectors(r,a),Oi.subVectors(e,a),o.cross(Oi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,a,r,o,c){Oi.subVectors(o,a),ya.subVectors(r,a),qd.subVectors(e,a);const f=Oi.dot(Oi),h=Oi.dot(ya),m=Oi.dot(qd),p=ya.dot(ya),g=ya.dot(qd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,b=(p*m-h*g)*y,E=(f*g-h*m)*y;return c.set(1-b-E,E,b)}static containsPoint(e,a,r,o){return this.getBarycoord(e,a,r,o,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,a,r,o,c,f,h,m){return this.getBarycoord(e,a,r,o,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(h,Sa.z),m)}static getInterpolatedAttribute(e,a,r,o,c,f){return Kd.setScalar(0),$d.setScalar(0),Qd.setScalar(0),Kd.fromBufferAttribute(e,a),$d.fromBufferAttribute(e,r),Qd.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Kd,c.x),f.addScaledVector($d,c.y),f.addScaledVector(Qd,c.z),f}static isFrontFacing(e,a,r,o){return Oi.subVectors(r,a),ya.subVectors(e,a),Oi.cross(ya).dot(o)<0}set(e,a,r){return this.a.copy(e),this.b.copy(a),this.c.copy(r),this}setFromPointsAndIndices(e,a,r,o){return this.a.copy(e[a]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,a,r,o){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Oi.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Pi.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,r,o,c){return Pi.getInterpolation(e,this.a,this.b,this.c,a,r,o,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const r=this.a,o=this.b,c=this.c;let f,h;Pr.subVectors(o,r),Br.subVectors(c,r),Wd.subVectors(e,r);const m=Pr.dot(Wd),p=Br.dot(Wd);if(m<=0&&p<=0)return a.copy(r);Yd.subVectors(e,o);const g=Pr.dot(Yd),_=Br.dot(Yd);if(g>=0&&_<=g)return a.copy(o);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),a.copy(r).addScaledVector(Pr,f);Zd.subVectors(e,c);const b=Pr.dot(Zd),E=Br.dot(Zd);if(E>=0&&b<=E)return a.copy(c);const A=b*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),a.copy(r).addScaledVector(Br,h);const M=g*E-b*_;if(M<=0&&_-g>=0&&b-E>=0)return I_.subVectors(c,o),h=(_-g)/(_-g+(b-E)),a.copy(o).addScaledVector(I_,h);const v=1/(M+A+y);return f=A*v,h=y*v,a.copy(r).addScaledVector(Pr,f).addScaledVector(Br,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Jd(i,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?i+(e-i)*6*a:a<1/2?e:a<2/3?i+(e-i)*6*(2/3-a):i}class Xt{constructor(e,a,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,r)}set(e,a,r){if(a===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,a,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,a),this}setRGB(e,a,r,o=Ht.workingColorSpace){return this.r=e,this.g=a,this.b=r,Ht.colorSpaceToWorking(this,o),this}setHSL(e,a,r,o=Ht.workingColorSpace){if(e=TM(e,1),a=Ut(a,0,1),r=Ut(r,0,1),a===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+a):r+a-r*a,f=2*r-c;this.r=Jd(f,c,e+1/3),this.g=Jd(f,c,e),this.b=Jd(f,c,e-1/3)}return Ht.colorSpaceToWorking(this,o),this}setStyle(e,a=pn){function r(c){c!==void 0&&parseFloat(c)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,a);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,a);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,a);break;default:mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,a);if(f===6)return this.setHex(parseInt(c,16),a);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=pn){const r=iv[e.toLowerCase()];return r!==void 0?this.setHex(r,a):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Ht.workingToColorSpace(Xn.copy(this),e),Math.round(Ut(Xn.r*255,0,255))*65536+Math.round(Ut(Xn.g*255,0,255))*256+Math.round(Ut(Xn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Ht.workingColorSpace){Ht.workingToColorSpace(Xn.copy(this),a);const r=Xn.r,o=Xn.g,c=Xn.b,f=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,a=Ht.workingColorSpace){return Ht.workingToColorSpace(Xn.copy(this),a),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=pn){Ht.workingToColorSpace(Xn.copy(this),e);const a=Xn.r,r=Xn.g,o=Xn.b;return e!==pn?`color(${e} ${a.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,a,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+a,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,r){return this.r=e.r+(a.r-e.r)*r,this.g=e.g+(a.g-e.g)*r,this.b=e.b+(a.b-e.b)*r,this}lerpHSL(e,a){this.getHSL(os),e.getHSL(Bc);const r=Pd(os.h,Bc.h,a),o=Pd(os.s,Bc.s,a),c=Pd(os.l,Bc.l,a);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*a+c[3]*r+c[6]*o,this.g=c[1]*a+c[4]*r+c[7]*o,this.b=c[2]*a+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Xt;Xt.NAMES=iv;let HM=0;class Qr extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=Gr,this.side=wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=xh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const r=e[a];if(r===void 0){mt(`Material: parameter '${a}' has value of undefined.`);continue}const o=this[a];if(o===void 0){mt(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[a]=r}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(r.blending=this.blending),this.side!==wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==Vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(a){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let r=null;if(a!==null){const o=a.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=a[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class av extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Na,this.combine=jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bn=new de,Fc=new St;let GM=0;class Ri{constructor(e,a,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=r,this.usage=A_,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,r){e*=this.itemSize,r*=a.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=a.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,r=this.count;a<r;a++)Fc.fromBufferAttribute(this,a),Fc.applyMatrix3(e),this.setXY(a,Fc.x,Fc.y);else if(this.itemSize===3)for(let a=0,r=this.count;a<r;a++)bn.fromBufferAttribute(this,a),bn.applyMatrix3(e),this.setXYZ(a,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let a=0,r=this.count;a<r;a++)bn.fromBufferAttribute(this,a),bn.applyMatrix4(e),this.setXYZ(a,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let a=0,r=this.count;a<r;a++)bn.fromBufferAttribute(this,a),bn.applyNormalMatrix(e),this.setXYZ(a,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let a=0,r=this.count;a<r;a++)bn.fromBufferAttribute(this,a),bn.transformDirection(e),this.setXYZ(a,bn.x,bn.y,bn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let r=this.array[e*this.itemSize+a];return this.normalized&&(r=Zl(r,this.array)),r}setComponent(e,a,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+a]=r,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Zl(a,this.array)),a}setX(e,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Zl(a,this.array)),a}setY(e,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Zl(a,this.array)),a}setZ(e,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Zl(a,this.array)),a}setW(e,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,r){return e*=this.itemSize,this.normalized&&(a=ei(a,this.array),r=ei(r,this.array)),this.array[e+0]=a,this.array[e+1]=r,this}setXYZ(e,a,r,o){return e*=this.itemSize,this.normalized&&(a=ei(a,this.array),r=ei(r,this.array),o=ei(o,this.array)),this.array[e+0]=a,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,a,r,o,c){return e*=this.itemSize,this.normalized&&(a=ei(a,this.array),r=ei(r,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[e+0]=a,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A_&&(e.usage=this.usage),e}}class sv extends Ri{constructor(e,a,r){super(new Uint16Array(e),a,r)}}class rv extends Ri{constructor(e,a,r){super(new Uint32Array(e),a,r)}}class qs extends Ri{constructor(e,a,r){super(new Float32Array(e),a,r)}}let VM=0;const Ti=new An,eh=new pi,Fr=new de,fi=new ho,Jl=new ho,Ln=new de;class Ua extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?rv:sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,r=0){this.groups.push({start:e,count:a,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,a,r){return Ti.makeTranslation(e,a,r),this.applyMatrix4(Ti),this}scale(e,a,r){return Ti.makeScale(e,a,r),this.applyMatrix4(Ti),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qs(r,3))}else{const r=Math.min(e.length,a.count);for(let o=0;o<r;o++){const c=e[o];a.setXYZ(o,c.x,c.y,c.z||0)}e.length>a.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let r=0,o=a.length;r<o;r++){const c=a[r];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vp);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),a)for(let c=0,f=a.length;c<f;c++){const h=a[c];Jl.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(fi.min,Jl.min),fi.expandByPoint(Ln),Ln.addVectors(fi.max,Jl.max),fi.expandByPoint(Ln)):(fi.expandByPoint(Jl.min),fi.expandByPoint(Jl.max))}fi.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)Ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Ln));if(a)for(let c=0,f=a.length;c<f;c++){const h=a[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Ln.fromBufferAttribute(h,p),m&&(Fr.fromBufferAttribute(e,p),Ln.add(Fr)),o=Math.max(o,r.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&mn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){mn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=a.position,o=a.normal,c=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new de,m[K]=new de;const p=new de,g=new de,_=new de,y=new St,b=new St,E=new St,A=new de,M=new de;function v(K,U,D){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,D),y.fromBufferAttribute(c,K),b.fromBufferAttribute(c,U),E.fromBufferAttribute(c,D),g.sub(p),_.sub(p),b.sub(y),E.sub(y);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-b.y).multiplyScalar(k),M.copy(_).multiplyScalar(b.x).addScaledVector(g,-E.x).multiplyScalar(k),h[K].add(A),h[U].add(A),h[D].add(A),m[K].add(M),m[U].add(M),m[D].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let K=0,U=w.length;K<U;++K){const D=w[K],k=D.start,Q=D.count;for(let re=k,pe=k+Q;re<pe;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new de,P=new de,G=new de,O=new de;function F(K){G.fromBufferAttribute(o,K),O.copy(G);const U=h[K];N.copy(U),N.sub(G.multiplyScalar(G.dot(U))).normalize(),P.crossVectors(O,U);const k=P.dot(m[K])<0?-1:1;f.setXYZW(K,N.x,N.y,N.z,k)}for(let K=0,U=w.length;K<U;++K){const D=w[K],k=D.start,Q=D.count;for(let re=k,pe=k+Q;re<pe;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(a.count*3),3),this.setAttribute("normal",r);else for(let y=0,b=r.count;y<b;y++)r.setXYZ(y,0,0,0);const o=new de,c=new de,f=new de,h=new de,m=new de,p=new de,g=new de,_=new de;if(e)for(let y=0,b=e.count;y<b;y+=3){const E=e.getX(y+0),A=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(a,E),c.fromBufferAttribute(a,A),f.fromBufferAttribute(a,M),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,b=a.count;y<b;y+=3)o.fromBufferAttribute(a,y+0),c.fromBufferAttribute(a,y+1),f.fromBufferAttribute(a,y+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,r=e.count;a<r;a++)Ln.fromBufferAttribute(e,a),Ln.normalize(),e.setXYZ(a,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,y=new p.constructor(m.length*g);let b=0,E=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?b=m[A]*h.data.stride+h.offset:b=m[A]*g;for(let v=0;v<g;v++)y[E++]=p[b++]}return new Ri(y,g,_)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ua,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);a.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const y=p[g],b=e(y,r);m.push(b)}a.morphAttributes[h]=m}a.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];a.addGroup(p.start,p.count,p.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const b=p[_];g.push(b.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(a))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,b=_.length;y<b;y++)g.push(_[y].clone(a));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new An,Fs=new LM,zc=new vp,G_=new de,Ic=new de,Hc=new de,Gc=new de,th=new de,Vc=new de,V_=new de,kc=new de;class Yi extends pi{constructor(e=new Ua,a=new av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,r=Object.keys(a);if(r.length>0){const o=a[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,a){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;a.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(th.fromBufferAttribute(_,e),f?Vc.addScaledVector(th,g):Vc.addScaledVector(th.sub(a),g))}a.add(Vc)}return a}raycast(e,a){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(c),Fs.copy(e.ray).recast(e.near),!(zc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(zc,G_)===null||Fs.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(H_.copy(c).invert(),Fs.copy(e.ray).applyMatrix4(H_),!(r.boundingBox!==null&&Fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,a,Fs)))}_computeIntersections(e,a,r){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=y.length;E<A;E++){const M=y[E],v=f[M.materialIndex],w=Math.max(M.start,b.start),N=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let P=w,G=N;P<G;P+=3){const O=h.getX(P),F=h.getX(P+1),K=h.getX(P+2);o=jc(this,v,e,r,p,g,_,O,F,K),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,a.push(o))}}else{const E=Math.max(0,b.start),A=Math.min(h.count,b.start+b.count);for(let M=E,v=A;M<v;M+=3){const w=h.getX(M),N=h.getX(M+1),P=h.getX(M+2);o=jc(this,f,e,r,p,g,_,w,N,P),o&&(o.faceIndex=Math.floor(M/3),a.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=y.length;E<A;E++){const M=y[E],v=f[M.materialIndex],w=Math.max(M.start,b.start),N=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let P=w,G=N;P<G;P+=3){const O=P,F=P+1,K=P+2;o=jc(this,v,e,r,p,g,_,O,F,K),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,a.push(o))}}else{const E=Math.max(0,b.start),A=Math.min(m.count,b.start+b.count);for(let M=E,v=A;M<v;M+=3){const w=M,N=M+1,P=M+2;o=jc(this,f,e,r,p,g,_,w,N,P),o&&(o.faceIndex=Math.floor(M/3),a.push(o))}}}}function kM(i,e,a,r,o,c,f,h){let m;if(e.side===On?m=r.intersectTriangle(f,c,o,!0,h):m=r.intersectTriangle(o,c,f,e.side===wa,h),m===null)return null;kc.copy(h),kc.applyMatrix4(i.matrixWorld);const p=a.ray.origin.distanceTo(kc);return p<a.near||p>a.far?null:{distance:p,point:kc.clone(),object:i}}function jc(i,e,a,r,o,c,f,h,m,p){i.getVertexPosition(h,Ic),i.getVertexPosition(m,Hc),i.getVertexPosition(p,Gc);const g=kM(i,e,a,r,Ic,Hc,Gc,V_);if(g){const _=new de;Pi.getBarycoord(V_,Ic,Hc,Gc,_),o&&(g.uv=Pi.getInterpolatedAttribute(o,h,m,p,_,new St)),c&&(g.uv1=Pi.getInterpolatedAttribute(c,h,m,p,_,new St)),f&&(g.normal=Pi.getInterpolatedAttribute(f,h,m,p,_,new de),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new de,materialIndex:0};Pi.getNormal(Ic,Hc,Gc,y.normal),g.face=y,g.barycoord=_}return g}class po extends Ua{constructor(e=1,a=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let y=0,b=0;E("z","y","x",-1,-1,r,a,e,f,c,0),E("z","y","x",1,-1,r,a,-e,f,c,1),E("x","z","y",1,1,e,r,a,o,f,2),E("x","z","y",1,-1,e,r,-a,o,f,3),E("x","y","z",1,-1,e,a,r,o,c,4),E("x","y","z",-1,-1,e,a,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new qs(p,3)),this.setAttribute("normal",new qs(g,3)),this.setAttribute("uv",new qs(_,2));function E(A,M,v,w,N,P,G,O,F,K,U){const D=P/F,k=G/K,Q=P/2,re=G/2,pe=O/2,ue=F+1,z=K+1;let W=0,X=0;const _e=new de;for(let ye=0;ye<z;ye++){const B=ye*k-re;for(let te=0;te<ue;te++){const be=te*D-Q;_e[A]=be*w,_e[M]=B*N,_e[v]=pe,p.push(_e.x,_e.y,_e.z),_e[A]=0,_e[M]=0,_e[v]=O>0?1:-1,g.push(_e.x,_e.y,_e.z),_.push(te/F),_.push(1-ye/K),W+=1}}for(let ye=0;ye<K;ye++)for(let B=0;B<F;B++){const te=y+B+ue*ye,be=y+B+ue*(ye+1),Ae=y+(B+1)+ue*(ye+1),Be=y+(B+1)+ue*ye;m.push(te,be,Be),m.push(be,Ae,Be),X+=6}h.addGroup(b,X,U),b+=X,y+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(i){const e={};for(const a in i){e[a]={};for(const r in i[a]){const o=i[a][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][r]=null):e[a][r]=o.clone():Array.isArray(o)?e[a][r]=o.slice():e[a][r]=o}}return e}function Wn(i){const e={};for(let a=0;a<i.length;a++){const r=Yr(i[a]);for(const o in r)e[o]=r[o]}return e}function jM(i){const e=[];for(let a=0;a<i.length;a++)e.push(i[a].clone());return e}function lv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const XM={clone:Yr,merge:Wn};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=jM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?a.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?a.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?a.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?a.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?a.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?a.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?a.uniforms[o]={type:"m4",value:f.toArray()}:a.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(a.extensions=r),a}}class ov extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new de,k_=new St,j_=new St;class Ai extends ov{constructor(e=50,a=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,r){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,a){return this.getViewBounds(e,k_,j_),a.subVectors(j_,k_)}setViewOffset(e,a,r,o,c,f){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(Od*.5*this.fov)/this.zoom,r=2*a,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,a-=f.offsetY*r/p,o*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,a,a-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const zr=-90,Ir=1;class YM extends pi{constructor(e,a,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(zr,Ir,e,a);o.layers=this.layers,this.add(o);const c=new Ai(zr,Ir,e,a);c.layers=this.layers,this.add(c);const f=new Ai(zr,Ir,e,a);f.layers=this.layers,this.add(f);const h=new Ai(zr,Ir,e,a);h.layers=this.layers,this.add(h);const m=new Ai(zr,Ir,e,a);m.layers=this.layers,this.add(m);const p=new Ai(zr,Ir,e,a);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[r,o,c,f,h,m]=a;for(const p of a)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ru)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of a)this.add(p),p.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(a,c),e.setRenderTarget(r,1,o),e.render(a,f),e.setRenderTarget(r,2,o),e.render(a,h),e.setRenderTarget(r,3,o),e.render(a,m),e.setRenderTarget(r,4,o),e.render(a,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(a,g),e.setRenderTarget(_,y,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class cv extends Bn{constructor(e=[],a=jr,r,o,c,f,h,m,p,g){super(e,a,r,o,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZM extends Ii{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new cv(o),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new po(5,5,5),c=new xi({name:"CubemapFromEquirect",uniforms:Yr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Fi});c.uniforms.tEquirect.value=a;const f=new Yi(o,c),h=a.minFilter;return a.minFilter===js&&(a.minFilter=Pn),new YM(1,10,this).update(e,f),a.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,a=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(a,r,o);e.setRenderTarget(c)}}class Xc extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const r of e.hand.values())this._getHandJoint(a,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,r){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const M=a.getJointPose(A,r),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),b=.02,E=.005;p.inputState.pinching&&y>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=a.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=a.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const r=new Xc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[a.jointName]=r,e.add(r)}return e.joints[a.jointName]}}class ip extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Na,this.environmentIntensity=1,this.environmentRotation=new Na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class $M extends Bn{constructor(e=null,a=1,r=1,o,c,f,h,m,p=hi,g=hi,_,y){super(null,f,h,m,p,g,o,c,_,y),this.isDataTexture=!0,this.image={data:e,width:a,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new de,QM=new de,JM=new gt;class Gs{constructor(e=new de(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,r,o){return this.normal.set(e,a,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,r){const o=ih.subVectors(r,a).cross(QM.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const r=e.delta(ih),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:a.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const a=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return a<0&&r>0||r<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const r=a||JM.getNormalMatrix(e),o=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new vp,e3=new St(.5,.5),qc=new de;class uv{constructor(e=new Gs,a=new Gs,r=new Gs,o=new Gs,c=new Gs,f=new Gs){this.planes=[e,a,r,o,c,f]}set(e,a,r,o,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(a),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(e){const a=this.planes;for(let r=0;r<6;r++)a[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,a=Wi,r=!1){const o=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],b=c[7],E=c[8],A=c[9],M=c[10],v=c[11],w=c[12],N=c[13],P=c[14],G=c[15];if(o[0].setComponents(p-f,b-g,v-E,G-w).normalize(),o[1].setComponents(p+f,b+g,v+E,G+w).normalize(),o[2].setComponents(p+h,b+_,v+A,G+N).normalize(),o[3].setComponents(p-h,b-_,v-A,G-N).normalize(),r)o[4].setComponents(m,y,M,P).normalize(),o[5].setComponents(p-m,b-y,v-M,G-P).normalize();else if(o[4].setComponents(p-m,b-y,v-M,G-P).normalize(),a===Wi)o[5].setComponents(p+m,b+y,v+M,G+P).normalize();else if(a===ru)o[5].setComponents(m,y,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),zs.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const a=e3.distanceTo(e.center);return zs.radius=.7071067811865476+a,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const a=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(a[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const a=this.planes;for(let r=0;r<6;r++){const o=a[r];if(qc.x=o.normal.x>0?e.max.x:e.min.x,qc.y=o.normal.y>0?e.max.y:e.min.y,qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let r=0;r<6;r++)if(a[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yp extends Bn{constructor(e,a,r=hs,o,c,f,h=hi,m=hi,p,g=ao,_=1){if(g!==ao&&g!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:a,depth:_};super(y,o,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class fv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends Ua{constructor(e=1,a=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:r,heightSegments:o};const c=e/2,f=a/2,h=Math.floor(r),m=Math.floor(o),p=h+1,g=m+1,_=e/h,y=a/m,b=[],E=[],A=[],M=[];for(let v=0;v<g;v++){const w=v*y-f;for(let N=0;N<p;N++){const P=N*_-c;E.push(P,-w,0),A.push(0,0,1),M.push(N/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<h;w++){const N=w+p*v,P=w+p*(v+1),G=w+1+p*(v+1),O=w+1+p*v;b.push(N,P,O),b.push(P,G,O)}this.setIndex(b),this.setAttribute("position",new qs(E,3)),this.setAttribute("normal",new qs(A,3)),this.setAttribute("uv",new qs(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class t3 extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=co,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n3 extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sp extends ov{constructor(e=-1,a=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=o+a,m=o-a;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class i3 extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=performance.now();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}}class hn{constructor(e){this.value=e}clone(){return new hn(this.value.clone===void 0?this.value:this.value.clone())}}function X_(i,e,a,r){const o=s3(r);switch(a){case Kg:return i*e;case Qg:return i*e/o.components*o.byteLength;case pp:return i*e/o.components*o.byteLength;case mp:return i*e*2/o.components*o.byteLength;case xp:return i*e*2/o.components*o.byteLength;case $g:return i*e*3/o.components*o.byteLength;case Bi:return i*e*4/o.components*o.byteLength;case _p:return i*e*4/o.components*o.byteLength;case Qc:case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Nh:return Math.max(i,16)*Math.max(e,8)/4;case Rh:case wh:return Math.max(i,8)*Math.max(e,8)/2;case Dh:case Uh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yh:case Zh:case Kh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $h:case Qh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jh:case ep:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function s3(i){switch(i){case mi:case qg:return{byteLength:1,components:1};case io:case Wg:case $r:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case hs:case fp:case Ta:return{byteLength:4,components:1};case Yg:case Zg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function dv(){let i=null,e=!1,a=null,r=null;function o(c,f){a(c,f),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&a!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){a=c},setContext:function(c){i=c}}}function r3(i){const e=new WeakMap;function a(h,m){const p=h.array,g=h.usage,_=p.byteLength,y=i.createBuffer();i.bindBuffer(m,y),i.bufferData(m,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=i.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=i.HALF_FLOAT:b=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=i.SHORT;else if(p instanceof Uint32Array)b=i.UNSIGNED_INT;else if(p instanceof Int32Array)b=i.INT;else if(p instanceof Int8Array)b=i.BYTE;else if(p instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const g=m.array,_=m.updateRanges;if(i.bindBuffer(p,h),_.length===0)i.bufferSubData(p,0,g);else{_.sort((b,E)=>b.start-E.start);let y=0;for(let b=1;b<_.length;b++){const E=_[y],A=_[b];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,_[y]=A)}_.length=y+1;for(let b=0,E=_.length;b<E;b++){const A=_[b];i.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(i.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,a(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:f}}var l3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,x3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F3="gl_FragColor = linearToOutputTexel( gl_FragColor );",z3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,J3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:l3,alphahash_pars_fragment:o3,alphamap_fragment:c3,alphamap_pars_fragment:u3,alphatest_fragment:f3,alphatest_pars_fragment:d3,aomap_fragment:h3,aomap_pars_fragment:p3,batching_pars_vertex:m3,batching_vertex:x3,begin_vertex:_3,beginnormal_vertex:g3,bsdfs:v3,iridescence_fragment:y3,bumpmap_pars_fragment:S3,clipping_planes_fragment:b3,clipping_planes_pars_fragment:M3,clipping_planes_pars_vertex:E3,clipping_planes_vertex:T3,color_fragment:A3,color_pars_fragment:R3,color_pars_vertex:C3,color_vertex:w3,common:N3,cube_uv_reflection_fragment:D3,defaultnormal_vertex:U3,displacementmap_pars_vertex:L3,displacementmap_vertex:O3,emissivemap_fragment:P3,emissivemap_pars_fragment:B3,colorspace_fragment:F3,colorspace_pars_fragment:z3,envmap_fragment:I3,envmap_common_pars_fragment:H3,envmap_pars_fragment:G3,envmap_pars_vertex:V3,envmap_physical_pars_fragment:J3,envmap_vertex:k3,fog_vertex:j3,fog_pars_vertex:X3,fog_fragment:q3,fog_pars_fragment:W3,gradientmap_pars_fragment:Y3,lightmap_pars_fragment:Z3,lights_lambert_fragment:K3,lights_lambert_pars_fragment:$3,lights_pars_begin:Q3,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:sE,lights_fragment_begin:rE,lights_fragment_maps:lE,lights_fragment_end:oE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:dE,map_fragment:hE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:xE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:gE,morphinstance_vertex:vE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:bE,morphtarget_vertex:ME,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:CE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:LE,opaque_fragment:OE,packing:PE,premultiplied_alpha_fragment:BE,project_vertex:FE,dithering_fragment:zE,dithering_pars_fragment:IE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:jE,shadowmask_pars_fragment:XE,skinbase_vertex:qE,skinning_pars_vertex:WE,skinning_vertex:YE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:$E,tonemapping_fragment:QE,tonemapping_pars_fragment:JE,transmission_fragment:eT,transmission_pars_fragment:tT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:sT,background_vert:rT,background_frag:lT,backgroundCube_vert:oT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:dT,depth_frag:hT,distanceRGBA_vert:pT,distanceRGBA_frag:mT,equirect_vert:xT,equirect_frag:_T,linedashed_vert:gT,linedashed_frag:vT,meshbasic_vert:yT,meshbasic_frag:ST,meshlambert_vert:bT,meshlambert_frag:MT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:wT,meshphysical_vert:NT,meshphysical_frag:DT,meshtoon_vert:UT,meshtoon_frag:LT,points_vert:OT,points_frag:PT,shadow_vert:BT,shadow_frag:FT,sprite_vert:zT,sprite_frag:IT},ze={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Xi={basic:{uniforms:Wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Xt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Wn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Wn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Xt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Wn([ze.points,ze.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Wn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Wn([ze.common,ze.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Wn([ze.sprite,ze.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Wn([ze.common,ze.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Wn([ze.lights,ze.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Xi.physical={uniforms:Wn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Wc={r:0,b:0,g:0},Is=new Na,HT=new An;function GT(i,e,a,r,o,c,f){const h=new Xt(0);let m=c===!0?0:1,p,g,_=null,y=0,b=null;function E(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?a:e).get(P)),P}function A(N){let P=!1;const G=E(N);G===null?v(h,m):G&&G.isColor&&(v(G,1),P=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(i.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(N,P){const G=E(P);G&&(G.isCubeTexture||G.mapping===hu)?(g===void 0&&(g=new Yi(new po(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Yr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Is.copy(P.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Is)),g.material.toneMapped=Ht.getTransfer(G.colorSpace)!==$t,(_!==G||y!==G.version||b!==i.toneMapping)&&(g.material.needsUpdate=!0,_=G,y=G.version,b=i.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Yi(new mo(2,2),new xi({name:"BackgroundMaterial",uniforms:Yr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ht.getTransfer(G.colorSpace)!==$t,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||y!==G.version||b!==i.toneMapping)&&(p.material.needsUpdate=!0,_=G,y=G.version,b=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,P){N.getRGB(Wc,lv(i)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,P,f)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,P=1){h.set(N),m=P,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:A,addToRenderList:M,dispose:w}}function VT(i,e){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,f=!1;function h(D,k,Q,re,pe){let ue=!1;const z=_(re,Q,k);c!==z&&(c=z,p(c.object)),ue=b(D,re,Q,pe),ue&&E(D,re,Q,pe),pe!==null&&e.update(pe,i.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,P(D,k,Q,re),pe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return i.createVertexArray()}function p(D){return i.bindVertexArray(D)}function g(D){return i.deleteVertexArray(D)}function _(D,k,Q){const re=Q.wireframe===!0;let pe=r[D.id];pe===void 0&&(pe={},r[D.id]=pe);let ue=pe[k.id];ue===void 0&&(ue={},pe[k.id]=ue);let z=ue[re];return z===void 0&&(z=y(m()),ue[re]=z),z}function y(D){const k=[],Q=[],re=[];for(let pe=0;pe<a;pe++)k[pe]=0,Q[pe]=0,re[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:re,object:D,attributes:{},index:null}}function b(D,k,Q,re){const pe=c.attributes,ue=k.attributes;let z=0;const W=Q.getAttributes();for(const X in W)if(W[X].location>=0){const ye=pe[X];let B=ue[X];if(B===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),ye===void 0||ye.attribute!==B||B&&ye.data!==B.data)return!0;z++}return c.attributesNum!==z||c.index!==re}function E(D,k,Q,re){const pe={},ue=k.attributes;let z=0;const W=Q.getAttributes();for(const X in W)if(W[X].location>=0){let ye=ue[X];ye===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const B={};B.attribute=ye,ye&&ye.data&&(B.data=ye.data),pe[X]=B,z++}c.attributes=pe,c.attributesNum=z,c.index=re}function A(){const D=c.newAttributes;for(let k=0,Q=D.length;k<Q;k++)D[k]=0}function M(D){v(D,0)}function v(D,k){const Q=c.newAttributes,re=c.enabledAttributes,pe=c.attributeDivisors;Q[D]=1,re[D]===0&&(i.enableVertexAttribArray(D),re[D]=1),pe[D]!==k&&(i.vertexAttribDivisor(D,k),pe[D]=k)}function w(){const D=c.newAttributes,k=c.enabledAttributes;for(let Q=0,re=k.length;Q<re;Q++)k[Q]!==D[Q]&&(i.disableVertexAttribArray(Q),k[Q]=0)}function N(D,k,Q,re,pe,ue,z){z===!0?i.vertexAttribIPointer(D,k,Q,pe,ue):i.vertexAttribPointer(D,k,Q,re,pe,ue)}function P(D,k,Q,re){A();const pe=re.attributes,ue=Q.getAttributes(),z=k.defaultAttributeValues;for(const W in ue){const X=ue[W];if(X.location>=0){let _e=pe[W];if(_e===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),_e!==void 0){const ye=_e.normalized,B=_e.itemSize,te=e.get(_e);if(te===void 0)continue;const be=te.buffer,Ae=te.type,Be=te.bytesPerElement,ie=Ae===i.INT||Ae===i.UNSIGNED_INT||_e.gpuType===fp;if(_e.isInterleavedBufferAttribute){const oe=_e.data,Ne=oe.stride,Ge=_e.offset;if(oe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<X.locationSize;Ye++)v(X.location+Ye,oe.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ye=0;Ye<X.locationSize;Ye++)M(X.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Ye=0;Ye<X.locationSize;Ye++)N(X.location+Ye,B/X.locationSize,Ae,ye,Ne*Be,(Ge+B/X.locationSize*Ye)*Be,ie)}else{if(_e.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)v(X.location+oe,_e.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let oe=0;oe<X.locationSize;oe++)M(X.location+oe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let oe=0;oe<X.locationSize;oe++)N(X.location+oe,B/X.locationSize,Ae,ye,B*Be,B/X.locationSize*oe*Be,ie)}}else if(z!==void 0){const ye=z[W];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(X.location,ye);break;case 3:i.vertexAttrib3fv(X.location,ye);break;case 4:i.vertexAttrib4fv(X.location,ye);break;default:i.vertexAttrib1fv(X.location,ye)}}}}w()}function G(){K();for(const D in r){const k=r[D];for(const Q in k){const re=k[Q];for(const pe in re)g(re[pe].object),delete re[pe];delete k[Q]}delete r[D]}}function O(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const Q in k){const re=k[Q];for(const pe in re)g(re[pe].object),delete re[pe];delete k[Q]}delete r[D.id]}function F(D){for(const k in r){const Q=r[k];if(Q[D.id]===void 0)continue;const re=Q[D.id];for(const pe in re)g(re[pe].object),delete re[pe];delete Q[D.id]}}function K(){U(),f=!0,c!==o&&(c=o,p(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:K,resetDefaultState:U,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function kT(i,e,a){let r;function o(p){r=p}function c(p,g){i.drawArrays(r,p,g),a.update(g,r,1)}function f(p,g,_){_!==0&&(i.drawArraysInstanced(r,p,g,_),a.update(g,r,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let b=0;for(let E=0;E<_;E++)b+=g[E];a.update(b,r,1)}function m(p,g,_,y){if(_===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)f(p[E],g[E],y[E]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*y[A];a.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function jT(i,e,a,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==Bi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const K=F===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==mi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ta&&!K)}function m(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=a.precision!==void 0?a.precision:"highp";const g=m(p);g!==p&&(mt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=a.logarithmicDepthBuffer===!0,y=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:G,maxSamples:O}}function XT(i){const e=this;let a=null,r=0,o=!1,c=!1;const f=new Gs,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const b=_.length!==0||y||r!==0||o;return o=y,r=_.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){a=g(_,y,0)},this.setState=function(_,y,b){const E=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,v=i.get(_);if(!o||E===null||E.length===0||c&&!M)c?g(null):p();else{const w=c?0:r,N=w*4;let P=v.clippingState||null;m.value=P,P=g(E,y,N,b);for(let G=0;G!==N;++G)P[G]=a[G];v.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==a&&(m.value=a,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,y,b,E){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const v=b+A*4,w=y.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,P=b;N!==A;++N,P+=4)f.copy(_[N]).applyMatrix4(w,h),f.normal.toArray(M,P),M[P+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function qT(i){let e=new WeakMap;function a(f,h){return h===Mh?f.mapping=jr:h===Eh&&(f.mapping=Xr),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Mh||h===Eh)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ZM(m.height);return p.fromEquirectangularTexture(i,f),e.set(f,p),f.addEventListener("dispose",o),a(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const fs=4,q_=[.125,.215,.35,.446,.526,.582],ks=20,WT=256,eo=new Sp,W_=new Xt;let ah=null,sh=0,rh=0,lh=!1;const YT=new de;class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,r=.1,o=100,c={}){const{size:f=256,position:h=YT}=c;ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),a>0&&this._blur(m,0,0,a),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,sh,rh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===jr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=a||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:$r,format:Bi,colorSpace:ps,depthBuffer:!1},o=Z_(e,a,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,a,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(c)),this._blurMaterial=$T(c,e,a),this._ggxMaterial=KT(c,e,a)}return o}_compileMaterial(e){const a=new Yi(new Ua,e);this._renderer.compile(a,eo)}_sceneToCubeUV(e,a,r,o,c){const m=new Ai(90,1,a,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,b=_.toneMapping;_.getClearColor(W_),_.toneMapping=ds,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new po,new av({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let v=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,v=!0):(M.color.copy(W_),v=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const G=this._cubeSize;Hr(o,P*G,N>2?G:0,G,G),_.setRenderTarget(o),v&&_.render(A,m),_.render(e,m)}_.toneMapping=b,_.autoClear=y,e.background=w}_textureToCubeUV(e,a){const r=this._renderer,o=e.mapping===jr||e.mapping===Xr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Hr(a,0,0,3*m,2*m),r.setRenderTarget(a),r.render(f,eo)}_applyPMREM(e){const a=this._renderer,r=a.autoClear;a.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);a.autoClear=r}_applyGGXFilter(e,a,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=a/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),y=.05+p*.95,b=_*y,{_lodMax:E}=this,A=this._sizeLods[r],M=3*A*(r>E-fs?r-E+fs:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-a,Hr(c,M,v,3*A,2*A),o.setRenderTarget(c),o.render(h,eo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Hr(e,M,v,3*A,2*A),o.setRenderTarget(e),o.render(h,eo)}_blur(e,a,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,a,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,a,r,o,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&mn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const y=p.uniforms,b=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*ks-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):ks;M>ks&&mt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ks}`);const v=[];let w=0;for(let F=0;F<ks;++F){const K=F/A,U=Math.exp(-K*K/2);v.push(U),F===0?w+=U:F<M&&(w+=2*U)}for(let F=0;F<v.length;F++)v[F]=v[F]/w;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-r;const P=this._sizeLods[o],G=3*P*(o>N-fs?o-N+fs:0),O=4*(this._cubeSize-P);Hr(a,G,O,3*P,2*P),m.setRenderTarget(a),m.render(_,eo)}}function ZT(i){const e=[],a=[],r=[];let o=i;const c=i-fs+1+q_.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);e.push(h);let m=1/h;f>i-fs?m=q_[f-i+fs-1]:f===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],b=6,E=6,A=3,M=2,v=1,w=new Float32Array(A*E*b),N=new Float32Array(M*E*b),P=new Float32Array(v*E*b);for(let O=0;O<b;O++){const F=O%3*2/3-1,K=O>2?0:-1,U=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];w.set(U,A*E*O),N.set(y,M*E*O);const D=[O,O,O,O,O,O];P.set(D,v*E*O)}const G=new Ua;G.setAttribute("position",new Ri(w,A)),G.setAttribute("uv",new Ri(N,M)),G.setAttribute("faceIndex",new Ri(P,v)),r.push(new Yi(G,null)),o>fs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:a}}function Z_(i,e,a){const r=new Ii(i,e,a);return r.texture.mapping=hu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hr(i,e,a,r,o){i.viewport.set(e,a,r,o),i.scissor.set(e,a,r,o)}function KT(i,e,a){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function $T(i,e,a){const r=new Float32Array(ks),o=new de(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function K_(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function $_(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QT(i){let e=new WeakMap,a=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Mh||m===Eh,g=m===jr||m===Xr;if(p||g){let _=e.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return a===null&&(a=new Y_(i)),_=p?a.fromEquirectangular(h,_):a.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const b=h.image;return p&&b&&b.height>0||g&&b&&o(b)?(a===null&&(a=new Y_(i)),_=p?a.fromEquirectangular(h):a.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:f}}function JT(i){const e={};function a(r){if(e[r]!==void 0)return e[r];const o=i.getExtension(r);return e[r]=o,o}return{has:function(r){return a(r)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(r){const o=a(r);return o===null&&so("WebGLRenderer: "+r+" extension not supported."),o}}}function e2(i,e,a,r){const o={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete o[y.id];const b=c.get(y);b&&(e.remove(b),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function h(_,y){return o[y.id]===!0||(y.addEventListener("dispose",f),o[y.id]=!0,a.memory.geometries++),y}function m(_){const y=_.attributes;for(const b in y)e.update(y[b],i.ARRAY_BUFFER)}function p(_){const y=[],b=_.index,E=_.attributes.position;let A=0;if(b!==null){const w=b.array;A=b.version;for(let N=0,P=w.length;N<P;N+=3){const G=w[N+0],O=w[N+1],F=w[N+2];y.push(G,O,O,F,F,G)}}else if(E!==void 0){const w=E.array;A=E.version;for(let N=0,P=w.length/3-1;N<P;N+=3){const G=N+0,O=N+1,F=N+2;y.push(G,O,O,F,F,G)}}else return;const M=new(ev(y)?rv:sv)(y,1);M.version=A;const v=c.get(_);v&&e.remove(v),c.set(_,M)}function g(_){const y=c.get(_);if(y){const b=_.index;b!==null&&y.version<b.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function t2(i,e,a){let r;function o(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,b){i.drawElements(r,b,c,y*f),a.update(b,r,1)}function p(y,b,E){E!==0&&(i.drawElementsInstanced(r,b,c,y*f,E),a.update(b,r,E))}function g(y,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,y,0,E);let M=0;for(let v=0;v<E;v++)M+=b[v];a.update(M,r,1)}function _(y,b,E,A){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/f,b[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(r,b,0,c,y,0,A,0,E);let v=0;for(let w=0;w<E;w++)v+=b[w]*A[w];a.update(v,r,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function n2(i){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(a.calls++,f){case i.TRIANGLES:a.triangles+=h*(c/3);break;case i.LINES:a.lines+=h*(c/2);break;case i.LINE_STRIP:a.lines+=h*(c-1);break;case i.LINE_LOOP:a.lines+=h*c;break;case i.POINTS:a.points+=h*c;break;default:mn("WebGLInfo: Unknown draw mode:",f);break}}function o(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:o,update:r}}function i2(i,e,a){const r=new WeakMap,o=new xn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let D=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var b=D;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),M===!0&&(P=3);let G=h.attributes.position.count*P,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*O*4*_),K=new tv(F,G,O,_);K.type=Ta,K.needsUpdate=!0;const U=P*4;for(let k=0;k<_;k++){const Q=v[k],re=w[k],pe=N[k],ue=G*O*4*k;for(let z=0;z<Q.count;z++){const W=z*U;E===!0&&(o.fromBufferAttribute(Q,z),F[ue+W+0]=o.x,F[ue+W+1]=o.y,F[ue+W+2]=o.z,F[ue+W+3]=0),A===!0&&(o.fromBufferAttribute(re,z),F[ue+W+4]=o.x,F[ue+W+5]=o.y,F[ue+W+6]=o.z,F[ue+W+7]=0),M===!0&&(o.fromBufferAttribute(pe,z),F[ue+W+8]=o.x,F[ue+W+9]=o.y,F[ue+W+10]=o.z,F[ue+W+11]=pe.itemSize===4?o.w:1)}}y={count:_,texture:K,size:new St(G,O)},r.set(h,y),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",f.morphTexture,a);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(i,"morphTargetBaseInfluence",A),m.getUniforms().setValue(i,"morphTargetInfluences",p)}m.getUniforms().setValue(i,"morphTargetsTexture",y.texture,a),m.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:c}}function a2(i,e,a,r){let o=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(a.update(m.instanceMatrix,i.ARRAY_BUFFER),m.instanceColor!==null&&a.update(m.instanceColor,i.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function f(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),a.remove(p.instanceMatrix),p.instanceColor!==null&&a.remove(p.instanceColor)}return{update:c,dispose:f}}const hv=new Bn,Q_=new yp(1,1),pv=new tv,mv=new DM,xv=new cv,J_=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function Jr(i,e,a){const r=i[0];if(r<=0||r>0)return i;const o=e*a;let c=J_[o];if(c===void 0&&(c=new Float32Array(o),J_[o]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=a,i[f].toArray(c,h)}return c}function Rn(i,e){if(i.length!==e.length)return!1;for(let a=0,r=i.length;a<r;a++)if(i[a]!==e[a])return!1;return!0}function Cn(i,e){for(let a=0,r=e.length;a<r;a++)i[a]=e[a]}function mu(i,e){let a=eg[e];a===void 0&&(a=new Int32Array(e),eg[e]=a);for(let r=0;r!==e;++r)a[r]=i.allocateTextureUnit();return a}function s2(i,e){const a=this.cache;a[0]!==e&&(i.uniform1f(this.addr,e),a[0]=e)}function r2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Rn(a,e))return;i.uniform2fv(this.addr,e),Cn(a,e)}}function l2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Rn(a,e))return;i.uniform3fv(this.addr,e),Cn(a,e)}}function o2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Rn(a,e))return;i.uniform4fv(this.addr,e),Cn(a,e)}}function c2(i,e){const a=this.cache,r=e.elements;if(r===void 0){if(Rn(a,e))return;i.uniformMatrix2fv(this.addr,!1,e),Cn(a,e)}else{if(Rn(a,r))return;ig.set(r),i.uniformMatrix2fv(this.addr,!1,ig),Cn(a,r)}}function u2(i,e){const a=this.cache,r=e.elements;if(r===void 0){if(Rn(a,e))return;i.uniformMatrix3fv(this.addr,!1,e),Cn(a,e)}else{if(Rn(a,r))return;ng.set(r),i.uniformMatrix3fv(this.addr,!1,ng),Cn(a,r)}}function f2(i,e){const a=this.cache,r=e.elements;if(r===void 0){if(Rn(a,e))return;i.uniformMatrix4fv(this.addr,!1,e),Cn(a,e)}else{if(Rn(a,r))return;tg.set(r),i.uniformMatrix4fv(this.addr,!1,tg),Cn(a,r)}}function d2(i,e){const a=this.cache;a[0]!==e&&(i.uniform1i(this.addr,e),a[0]=e)}function h2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Rn(a,e))return;i.uniform2iv(this.addr,e),Cn(a,e)}}function p2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Rn(a,e))return;i.uniform3iv(this.addr,e),Cn(a,e)}}function m2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Rn(a,e))return;i.uniform4iv(this.addr,e),Cn(a,e)}}function x2(i,e){const a=this.cache;a[0]!==e&&(i.uniform1ui(this.addr,e),a[0]=e)}function _2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Rn(a,e))return;i.uniform2uiv(this.addr,e),Cn(a,e)}}function g2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Rn(a,e))return;i.uniform3uiv(this.addr,e),Cn(a,e)}}function v2(i,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Rn(a,e))return;i.uniform4uiv(this.addr,e),Cn(a,e)}}function y2(i,e,a){const r=this.cache,o=a.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Q_.compareFunction=Jg,c=Q_):c=hv,a.setTexture2D(e||c,o)}function S2(i,e,a){const r=this.cache,o=a.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),a.setTexture3D(e||mv,o)}function b2(i,e,a){const r=this.cache,o=a.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),a.setTextureCube(e||xv,o)}function M2(i,e,a){const r=this.cache,o=a.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),a.setTexture2DArray(e||pv,o)}function E2(i){switch(i){case 5126:return s2;case 35664:return r2;case 35665:return l2;case 35666:return o2;case 35674:return c2;case 35675:return u2;case 35676:return f2;case 5124:case 35670:return d2;case 35667:case 35671:return h2;case 35668:case 35672:return p2;case 35669:case 35673:return m2;case 5125:return x2;case 36294:return _2;case 36295:return g2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return S2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return M2}}function T2(i,e){i.uniform1fv(this.addr,e)}function A2(i,e){const a=Jr(e,this.size,2);i.uniform2fv(this.addr,a)}function R2(i,e){const a=Jr(e,this.size,3);i.uniform3fv(this.addr,a)}function C2(i,e){const a=Jr(e,this.size,4);i.uniform4fv(this.addr,a)}function w2(i,e){const a=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,a)}function N2(i,e){const a=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,a)}function D2(i,e){const a=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,a)}function U2(i,e){i.uniform1iv(this.addr,e)}function L2(i,e){i.uniform2iv(this.addr,e)}function O2(i,e){i.uniform3iv(this.addr,e)}function P2(i,e){i.uniform4iv(this.addr,e)}function B2(i,e){i.uniform1uiv(this.addr,e)}function F2(i,e){i.uniform2uiv(this.addr,e)}function z2(i,e){i.uniform3uiv(this.addr,e)}function I2(i,e){i.uniform4uiv(this.addr,e)}function H2(i,e,a){const r=this.cache,o=e.length,c=mu(a,o);Rn(r,c)||(i.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)a.setTexture2D(e[f]||hv,c[f])}function G2(i,e,a){const r=this.cache,o=e.length,c=mu(a,o);Rn(r,c)||(i.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)a.setTexture3D(e[f]||mv,c[f])}function V2(i,e,a){const r=this.cache,o=e.length,c=mu(a,o);Rn(r,c)||(i.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)a.setTextureCube(e[f]||xv,c[f])}function k2(i,e,a){const r=this.cache,o=e.length,c=mu(a,o);Rn(r,c)||(i.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)a.setTexture2DArray(e[f]||pv,c[f])}function j2(i){switch(i){case 5126:return T2;case 35664:return A2;case 35665:return R2;case 35666:return C2;case 35674:return w2;case 35675:return N2;case 35676:return D2;case 5124:case 35670:return U2;case 35667:case 35671:return L2;case 35668:case 35672:return O2;case 35669:case 35673:return P2;case 5125:return B2;case 36294:return F2;case 36295:return z2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return H2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return k2}}class X2{constructor(e,a,r){this.id=e,this.addr=r,this.cache=[],this.type=a.type,this.setValue=E2(a.type)}}class q2{constructor(e,a,r){this.id=e,this.addr=r,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=j2(a.type)}}class W2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(e,a[h.id],r)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function ag(i,e){i.seq.push(e),i.map[e.id]=e}function Y2(i,e,a){const r=i.name,o=r.length;for(oh.lastIndex=0;;){const c=oh.exec(r),f=oh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===o){ag(a,p===void 0?new X2(h,i,e):new q2(h,i,e));break}else{let _=a.map[h];_===void 0&&(_=new W2(h),ag(a,_)),a=_}}}class nu{constructor(e,a){this.seq=[],this.map={};const r=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(a,o),f=e.getUniformLocation(a,c.name);Y2(c,f,this)}}setValue(e,a,r,o){const c=this.map[a];c!==void 0&&c.setValue(e,r,o)}setOptional(e,a,r){const o=a[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,a,r,o){for(let c=0,f=a.length;c!==f;++c){const h=a[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,a){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in a&&r.push(f)}return r}}function sg(i,e,a){const r=i.createShader(e);return i.shaderSource(r,a),i.compileShader(r),r}const Z2=37297;let K2=0;function $2(i,e){const a=i.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,a.length);for(let f=o;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${a[f]}`)}return r.join(`
`)}const rg=new gt;function Q2(i){Ht._getMatrix(rg,Ht.workingColorSpace,i);const e=`mat3( ${rg.elements.map(a=>a.toFixed(4))} )`;switch(Ht.getTransfer(i)){case su:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lg(i,e,a){const r=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+$2(i.getShaderSource(e),h)}else return c}function J2(i,e){const a=Q2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function eA(i,e){let a;switch(e){case sM:a="Linear";break;case rM:a="Reinhard";break;case lM:a="Cineon";break;case oM:a="ACESFilmic";break;case uM:a="AgX";break;case fM:a="Neutral";break;case cM:a="Custom";break;default:mt("WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+i+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const Yc=new de;function tA(){Ht.getLuminanceCoefficients(Yc);const i=Yc.x.toFixed(4),e=Yc.y.toFixed(4),a=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function iA(i){const e=[];for(const a in i){const r=i[a];r!==!1&&e.push("#define "+a+" "+r)}return e.join(`
`)}function aA(i,e){const a={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=i.getActiveAttrib(e,o),f=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),a[f]={type:c.type,location:i.getAttribLocation(e,f),locationSize:h}}return a}function to(i){return i!==""}function og(i,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(i){return i.replace(sA,lA)}const rA=new Map;function lA(i,e){let a=vt[e];if(a===void 0){const r=rA.get(e);if(r!==void 0)a=vt[r],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ap(a)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(i){return i.replace(oA,cA)}function cA(i,e,a,r){let o="";for(let c=parseInt(e);c<parseInt(a);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function fg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===z1?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function fA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jr:case Xr:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function hA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jg:e="ENVMAP_BLENDING_MULTIPLY";break;case iM:e="ENVMAP_BLENDING_MIX";break;case aM:e="ENVMAP_BLENDING_ADD";break}return e}function pA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:r,maxMip:a}}function mA(i,e,a,r){const o=i.getContext(),c=a.defines;let f=a.vertexShader,h=a.fragmentShader;const m=uA(a),p=fA(a),g=dA(a),_=hA(a),y=pA(a),b=nA(a),E=iA(c),A=o.createProgram();let M,v,w=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,E].filter(to).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,E].filter(to).join(`
`),v.length>0&&(v+=`
`)):(M=[fg(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,E,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+g:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),v=[fg(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,E,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+p:"",a.envMap?"#define "+g:"",a.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ds?"#define TONE_MAPPING":"",a.toneMapping!==ds?vt.tonemapping_pars_fragment:"",a.toneMapping!==ds?eA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,J2("linearToOutputTexel",a.outputColorSpace),tA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(to).join(`
`)),f=ap(f),f=og(f,a),f=cg(f,a),h=ap(h),h=og(h,a),h=cg(h,a),f=ug(f),h=ug(h),a.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",a.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=w+M+f,P=w+v+h,G=sg(o,o.VERTEX_SHADER,N),O=sg(o,o.FRAGMENT_SHADER,P);o.attachShader(A,G),o.attachShader(A,O),a.index0AttributeName!==void 0?o.bindAttribLocation(A,0,a.index0AttributeName):a.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(k){if(i.debug.checkShaderErrors){const Q=o.getProgramInfoLog(A)||"",re=o.getShaderInfoLog(G)||"",pe=o.getShaderInfoLog(O)||"",ue=Q.trim(),z=re.trim(),W=pe.trim();let X=!0,_e=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,A,G,O);else{const ye=lg(o,G,"vertex"),B=lg(o,O,"fragment");mn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ue+`
`+ye+`
`+B)}else ue!==""?mt("WebGLProgram: Program Info Log:",ue):(z===""||W==="")&&(_e=!1);_e&&(k.diagnostics={runnable:X,programLog:ue,vertexShader:{log:z,prefix:M},fragmentShader:{log:W,prefix:v}})}o.deleteShader(G),o.deleteShader(O),K=new nu(o,A),U=aA(o,A)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let D=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(A,Z2)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=K2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=O,this}let xA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(a),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const r of a)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let r=a.get(e);return r===void 0&&(r=new Set,a.set(e,r)),r}_getShaderStage(e){const a=this.shaderCache;let r=a.get(e);return r===void 0&&(r=new gA(e),a.set(e,r)),r}}class gA{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function vA(i,e,a,r,o,c,f){const h=new nv,m=new _A,p=new Set,g=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let b=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return p.add(U),U===0?"uv":`uv${U}`}function M(U,D,k,Q,re){const pe=Q.fog,ue=re.geometry,z=U.isMeshStandardMaterial?Q.environment:null,W=(U.isMeshStandardMaterial?a:e).get(U.envMap||z),X=W&&W.mapping===hu?W.image.height:null,_e=E[U.type];U.precision!==null&&(b=o.getMaxPrecision(U.precision),b!==U.precision&&mt("WebGLProgram.getParameters:",U.precision,"not supported, using",b,"instead."));const ye=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,B=ye!==void 0?ye.length:0;let te=0;ue.morphAttributes.position!==void 0&&(te=1),ue.morphAttributes.normal!==void 0&&(te=2),ue.morphAttributes.color!==void 0&&(te=3);let be,Ae,Be,ie;if(_e){const Lt=Xi[_e];be=Lt.vertexShader,Ae=Lt.fragmentShader}else be=U.vertexShader,Ae=U.fragmentShader,m.update(U),Be=m.getVertexShaderID(U),ie=m.getFragmentShaderID(U);const oe=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),Ge=re.isInstancedMesh===!0,Ye=re.isBatchedMesh===!0,ct=!!U.map,bt=!!U.matcap,ut=!!W,Mt=!!U.aoMap,H=!!U.lightMap,ft=!!U.bumpMap,ht=!!U.normalMap,yt=!!U.displacementMap,Xe=!!U.emissiveMap,kt=!!U.metalnessMap,Ze=!!U.roughnessMap,Le=U.anisotropy>0,L=U.clearcoat>0,T=U.dispersion>0,$=U.iridescence>0,xe=U.sheen>0,Me=U.transmission>0,ce=Le&&!!U.anisotropyMap,$e=L&&!!U.clearcoatMap,Ue=L&&!!U.clearcoatNormalMap,Je=L&&!!U.clearcoatRoughnessMap,We=$&&!!U.iridescenceMap,Ee=$&&!!U.iridescenceThicknessMap,Te=xe&&!!U.sheenColorMap,Ie=xe&&!!U.sheenRoughnessMap,He=!!U.specularMap,Pe=!!U.specularColorMap,at=!!U.specularIntensityMap,V=Me&&!!U.transmissionMap,De=Me&&!!U.thicknessMap,Re=!!U.gradientMap,Ce=!!U.alphaMap,me=U.alphaTest>0,fe=!!U.alphaHash,Fe=!!U.extensions;let Qe=ds;U.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const Bt={shaderID:_e,shaderType:U.type,shaderName:U.name,vertexShader:be,fragmentShader:Ae,defines:U.defines,customVertexShaderID:Be,customFragmentShaderID:ie,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:b,batching:Ye,batchingColor:Ye&&re._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&re.instanceColor!==null,instancingMorph:Ge&&re.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ps,alphaToCoverage:!!U.alphaToCoverage,map:ct,matcap:bt,envMap:ut,envMapMode:ut&&W.mapping,envMapCubeUVHeight:X,aoMap:Mt,lightMap:H,bumpMap:ft,normalMap:ht,displacementMap:y&&yt,emissiveMap:Xe,normalMapObjectSpace:ht&&U.normalMapType===mM,normalMapTangentSpace:ht&&U.normalMapType===pM,metalnessMap:kt,roughnessMap:Ze,anisotropy:Le,anisotropyMap:ce,clearcoat:L,clearcoatMap:$e,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Je,dispersion:T,iridescence:$,iridescenceMap:We,iridescenceThicknessMap:Ee,sheen:xe,sheenColorMap:Te,sheenRoughnessMap:Ie,specularMap:He,specularColorMap:Pe,specularIntensityMap:at,transmission:Me,transmissionMap:V,thicknessMap:De,gradientMap:Re,opaque:U.transparent===!1&&U.blending===Gr&&U.alphaToCoverage===!1,alphaMap:Ce,alphaTest:me,alphaHash:fe,combine:U.combine,mapUv:ct&&A(U.map.channel),aoMapUv:Mt&&A(U.aoMap.channel),lightMapUv:H&&A(U.lightMap.channel),bumpMapUv:ft&&A(U.bumpMap.channel),normalMapUv:ht&&A(U.normalMap.channel),displacementMapUv:yt&&A(U.displacementMap.channel),emissiveMapUv:Xe&&A(U.emissiveMap.channel),metalnessMapUv:kt&&A(U.metalnessMap.channel),roughnessMapUv:Ze&&A(U.roughnessMap.channel),anisotropyMapUv:ce&&A(U.anisotropyMap.channel),clearcoatMapUv:$e&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&A(U.sheenRoughnessMap.channel),specularMapUv:He&&A(U.specularMap.channel),specularColorMapUv:Pe&&A(U.specularColorMap.channel),specularIntensityMapUv:at&&A(U.specularIntensityMap.channel),transmissionMapUv:V&&A(U.transmissionMap.channel),thicknessMapUv:De&&A(U.thicknessMap.channel),alphaMapUv:Ce&&A(U.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ht||Le),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ue.attributes.uv&&(ct||Ce),fog:!!pe,useFog:U.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:re.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:te,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ct&&U.map.isVideoTexture===!0&&Ht.getTransfer(U.map.colorSpace)===$t,decodeVideoTextureEmissive:Xe&&U.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(U.emissiveMap.colorSpace)===$t,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===di,flipSided:U.side===On,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Fe&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&U.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function v(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const k in U.defines)D.push(k),D.push(U.defines[k]);return U.isRawShaderMaterial===!1&&(w(D,U),N(D,U),D.push(i.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function w(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function N(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function P(U){const D=E[U.type];let k;if(D){const Q=Xi[D];k=XM.clone(Q.uniforms)}else k=U.uniforms;return k}function G(U,D){let k;for(let Q=0,re=g.length;Q<re;Q++){const pe=g[Q];if(pe.cacheKey===D){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new mA(i,D,U,c),g.push(k)),k}function O(U){if(--U.usedTimes===0){const D=g.indexOf(U);g[D]=g[g.length-1],g.pop(),U.destroy()}}function F(U){m.remove(U)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:P,acquireProgram:G,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:K}}function yA(){let i=new WeakMap;function e(f){return i.has(f)}function a(f){let h=i.get(f);return h===void 0&&(h={},i.set(f,h)),h}function r(f){i.delete(f)}function o(f,h,m){i.get(f)[h]=m}function c(){i=new WeakMap}return{has:e,get:a,remove:r,update:o,dispose:c}}function SA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hg(){const i=[];let e=0;const a=[],r=[],o=[];function c(){e=0,a.length=0,r.length=0,o.length=0}function f(_,y,b,E,A,M){let v=i[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:b,groupOrder:E,renderOrder:_.renderOrder,z:A,group:M},i[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=b,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=A,v.group=M),e++,v}function h(_,y,b,E,A,M){const v=f(_,y,b,E,A,M);b.transmission>0?r.push(v):b.transparent===!0?o.push(v):a.push(v)}function m(_,y,b,E,A,M){const v=f(_,y,b,E,A,M);b.transmission>0?r.unshift(v):b.transparent===!0?o.unshift(v):a.unshift(v)}function p(_,y){a.length>1&&a.sort(_||SA),r.length>1&&r.sort(y||dg),o.length>1&&o.sort(y||dg)}function g(){for(let _=e,y=i.length;_<y;_++){const b=i[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:a,transmissive:r,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function bA(){let i=new WeakMap;function e(r,o){const c=i.get(r);let f;return c===void 0?(f=new hg,i.set(r,[f])):o>=c.length?(f=new hg,c.push(f)):f=c[o],f}function a(){i=new WeakMap}return{get:e,dispose:a}}function MA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new de,color:new Xt};break;case"SpotLight":a={position:new de,direction:new de,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new de,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new de,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":a={color:new Xt,position:new de,halfWidth:new de,halfHeight:new de};break}return i[e.id]=a,a}}}function EA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=a,a}}}let TA=0;function AA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function RA(i){const e=new MA,a=EA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new de);const o=new de,c=new An,f=new An;function h(p){let g=0,_=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let b=0,E=0,A=0,M=0,v=0,w=0,N=0,P=0,G=0,O=0,F=0;p.sort(AA);for(let U=0,D=p.length;U<D;U++){const k=p[U],Q=k.color,re=k.intensity,pe=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=Q.r*re,_+=Q.g*re,y+=Q.b*re;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],re);F++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,X=a.get(k);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,r.directionalShadow[b]=X,r.directionalShadowMap[b]=ue,r.directionalShadowMatrix[b]=k.shadow.matrix,w++}r.directional[b]=z,b++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(Q).multiplyScalar(re),z.distance=pe,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[A]=z;const W=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,W.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[A]=W.matrix,k.castShadow){const X=a.get(k);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=ue,P++}A++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(Q).multiplyScalar(re),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=z,M++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const W=k.shadow,X=a.get(k);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=k.shadow.matrix,N++}r.point[E]=z,E++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(re),z.groundColor.copy(k.groundColor).multiplyScalar(re),r.hemi[v]=z,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const K=r.hash;(K.directionalLength!==b||K.pointLength!==E||K.spotLength!==A||K.rectAreaLength!==M||K.hemiLength!==v||K.numDirectionalShadows!==w||K.numPointShadows!==N||K.numSpotShadows!==P||K.numSpotMaps!==G||K.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,K.directionalLength=b,K.pointLength=E,K.spotLength=A,K.rectAreaLength=M,K.hemiLength=v,K.numDirectionalShadows=w,K.numPointShadows=N,K.numSpotShadows=P,K.numSpotMaps=G,K.numLightProbes=F,r.version=TA++)}function m(p,g){let _=0,y=0,b=0,E=0,A=0;const M=g.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const N=p[v];if(N.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),_++}else if(N.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),b++}else if(N.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:r}}function pg(i){const e=new RA(i),a=[],r=[];function o(g){p.camera=g,a.length=0,r.length=0}function c(g){a.push(g)}function f(g){r.push(g)}function h(){e.setup(a)}function m(g){e.setupView(a,g)}const p={lightsArray:a,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function CA(i){let e=new WeakMap;function a(o,c=0){const f=e.get(o);let h;return f===void 0?(h=new pg(i),e.set(o,[h])):c>=f.length?(h=new pg(i),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:a,dispose:r}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(i,e,a){let r=new uv;const o=new St,c=new St,f=new xn,h=new t3({depthPacking:hM}),m=new n3,p={},g=a.maxTextureSize,_={[wa]:On,[On]:wa,[di]:di},y=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:wA,fragmentShader:NA}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const E=new Ua;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Yi(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let v=this.type;this.render=function(O,F,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const U=i.getRenderTarget(),D=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Fi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const re=v!==Ma&&this.type===Ma,pe=v===Ma&&this.type!==Ma;for(let ue=0,z=O.length;ue<z;ue++){const W=O[ue],X=W.shadow;if(X===void 0){mt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const _e=X.getFrameExtents();if(o.multiply(_e),c.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/_e.x),o.x=c.x*_e.x,X.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/_e.y),o.y=c.y*_e.y,X.mapSize.y=c.y)),X.map===null||re===!0||pe===!0){const B=this.type!==Ma?{minFilter:hi,magFilter:hi}:{};X.map!==null&&X.map.dispose(),X.map=new Ii(o.x,o.y,B),X.map.texture.name=W.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ye=X.getViewportCount();for(let B=0;B<ye;B++){const te=X.getViewport(B);f.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),Q.viewport(f),X.updateMatrices(W,B),r=X.getFrustum(),P(F,K,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===Ma&&w(X,K),X.needsUpdate=!1}v=this.type,M.needsUpdate=!1,i.setRenderTarget(U,D,k)};function w(O,F){const K=e.update(A);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ii(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(F,null,K,y,A,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(F,null,K,b,A,null)}function N(O,F,K,U){let D=null;const k=K.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)D=k;else if(D=K.isPointLight===!0?m:h,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=D.uuid,re=F.uuid;let pe=p[Q];pe===void 0&&(pe={},p[Q]=pe);let ue=pe[re];ue===void 0&&(ue=D.clone(),pe[re]=ue,F.addEventListener("dispose",G)),D=ue}if(D.visible=F.visible,D.wireframe=F.wireframe,U===Ma?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:_[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Q=i.properties.get(D);Q.light=K}return D}function P(O,F,K,U,D){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===Ma)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,O.matrixWorld);const re=e.update(O),pe=O.material;if(Array.isArray(pe)){const ue=re.groups;for(let z=0,W=ue.length;z<W;z++){const X=ue[z],_e=pe[X.materialIndex];if(_e&&_e.visible){const ye=N(O,_e,U,D);O.onBeforeShadow(i,O,F,K,re,ye,X),i.renderBufferDirect(K,null,re,ye,O,X),O.onAfterShadow(i,O,F,K,re,ye,X)}}}else if(pe.visible){const ue=N(O,pe,U,D);O.onBeforeShadow(i,O,F,K,re,ue,null),i.renderBufferDirect(K,null,re,ue,O,null),O.onAfterShadow(i,O,F,K,re,ue,null)}}const Q=O.children;for(let re=0,pe=Q.length;re<pe;re++)P(Q[re],F,K,U,D)}function G(O){O.target.removeEventListener("dispose",G);for(const K in p){const U=p[K],D=O.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const UA={[_h]:au,[gh]:Sh,[vh]:bh,[kr]:yh,[au]:_h,[Sh]:gh,[bh]:vh,[yh]:kr};function LA(i,e){function a(){let V=!1;const De=new xn;let Re=null;const Ce=new xn(0,0,0,0);return{setMask:function(me){Re!==me&&!V&&(i.colorMask(me,me,me,me),Re=me)},setLocked:function(me){V=me},setClear:function(me,fe,Fe,Qe,Bt){Bt===!0&&(me*=Qe,fe*=Qe,Fe*=Qe),De.set(me,fe,Fe,Qe),Ce.equals(De)===!1&&(i.clearColor(me,fe,Fe,Qe),Ce.copy(De))},reset:function(){V=!1,Re=null,Ce.set(-1,0,0,0)}}}function r(){let V=!1,De=!1,Re=null,Ce=null,me=null;return{setReversed:function(fe){if(De!==fe){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),De=fe;const Qe=me;me=null,this.setClear(Qe)}},getReversed:function(){return De},setTest:function(fe){fe?oe(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(fe){Re!==fe&&!V&&(i.depthMask(fe),Re=fe)},setFunc:function(fe){if(De&&(fe=UA[fe]),Ce!==fe){switch(fe){case _h:i.depthFunc(i.NEVER);break;case au:i.depthFunc(i.ALWAYS);break;case gh:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case vh:i.depthFunc(i.EQUAL);break;case yh:i.depthFunc(i.GEQUAL);break;case Sh:i.depthFunc(i.GREATER);break;case bh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=fe}},setLocked:function(fe){V=fe},setClear:function(fe){me!==fe&&(De&&(fe=1-fe),i.clearDepth(fe),me=fe)},reset:function(){V=!1,Re=null,Ce=null,me=null,De=!1}}}function o(){let V=!1,De=null,Re=null,Ce=null,me=null,fe=null,Fe=null,Qe=null,Bt=null;return{setTest:function(Lt){V||(Lt?oe(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Lt){De!==Lt&&!V&&(i.stencilMask(Lt),De=Lt)},setFunc:function(Lt,Vn,ti){(Re!==Lt||Ce!==Vn||me!==ti)&&(i.stencilFunc(Lt,Vn,ti),Re=Lt,Ce=Vn,me=ti)},setOp:function(Lt,Vn,ti){(fe!==Lt||Fe!==Vn||Qe!==ti)&&(i.stencilOp(Lt,Vn,ti),fe=Lt,Fe=Vn,Qe=ti)},setLocked:function(Lt){V=Lt},setClear:function(Lt){Bt!==Lt&&(i.clearStencil(Lt),Bt=Lt)},reset:function(){V=!1,De=null,Re=null,Ce=null,me=null,fe=null,Fe=null,Qe=null,Bt=null}}}const c=new a,f=new r,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,b=[],E=null,A=!1,M=null,v=null,w=null,N=null,P=null,G=null,O=null,F=new Xt(0,0,0),K=0,U=!1,D=null,k=null,Q=null,re=null,pe=null;const ue=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=W>=2);let _e=null,ye={};const B=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),be=new xn().fromArray(B),Ae=new xn().fromArray(te);function Be(V,De,Re,Ce){const me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(V,fe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Re;Fe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(De+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return fe}const ie={};ie[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),oe(i.DEPTH_TEST),f.setFunc(kr),ft(!1),ht(S_),oe(i.CULL_FACE),Mt(Fi);function oe(V){g[V]!==!0&&(i.enable(V),g[V]=!0)}function Ne(V){g[V]!==!1&&(i.disable(V),g[V]=!1)}function Ge(V,De){return _[V]!==De?(i.bindFramebuffer(V,De),_[V]=De,V===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=De),V===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Ye(V,De){let Re=b,Ce=!1;if(V){Re=y.get(De),Re===void 0&&(Re=[],y.set(De,Re));const me=V.textures;if(Re.length!==me.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Fe=me.length;fe<Fe;fe++)Re[fe]=i.COLOR_ATTACHMENT0+fe;Re.length=me.length,Ce=!0}}else Re[0]!==i.BACK&&(Re[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(Re)}function ct(V){return E!==V?(i.useProgram(V),E=V,!0):!1}const bt={[Vs]:i.FUNC_ADD,[H1]:i.FUNC_SUBTRACT,[G1]:i.FUNC_REVERSE_SUBTRACT};bt[V1]=i.MIN,bt[k1]=i.MAX;const ut={[j1]:i.ZERO,[X1]:i.ONE,[q1]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[Q1]:i.SRC_ALPHA_SATURATE,[K1]:i.DST_COLOR,[Y1]:i.DST_ALPHA,[W1]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[$1]:i.ONE_MINUS_DST_COLOR,[Z1]:i.ONE_MINUS_DST_ALPHA,[J1]:i.CONSTANT_COLOR,[eM]:i.ONE_MINUS_CONSTANT_COLOR,[tM]:i.CONSTANT_ALPHA,[nM]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(V,De,Re,Ce,me,fe,Fe,Qe,Bt,Lt){if(V===Fi){A===!0&&(Ne(i.BLEND),A=!1);return}if(A===!1&&(oe(i.BLEND),A=!0),V!==I1){if(V!==M||Lt!==U){if((v!==Vs||P!==Vs)&&(i.blendEquation(i.FUNC_ADD),v=Vs,P=Vs),Lt)switch(V){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case b_:i.blendFunc(i.ONE,i.ONE);break;case M_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case E_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mn("WebGLState: Invalid blending: ",V);break}else switch(V){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case b_:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case M_:mn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:mn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mn("WebGLState: Invalid blending: ",V);break}w=null,N=null,G=null,O=null,F.set(0,0,0),K=0,M=V,U=Lt}return}me=me||De,fe=fe||Re,Fe=Fe||Ce,(De!==v||me!==P)&&(i.blendEquationSeparate(bt[De],bt[me]),v=De,P=me),(Re!==w||Ce!==N||fe!==G||Fe!==O)&&(i.blendFuncSeparate(ut[Re],ut[Ce],ut[fe],ut[Fe]),w=Re,N=Ce,G=fe,O=Fe),(Qe.equals(F)===!1||Bt!==K)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Bt),F.copy(Qe),K=Bt),M=V,U=!1}function H(V,De){V.side===di?Ne(i.CULL_FACE):oe(i.CULL_FACE);let Re=V.side===On;De&&(Re=!Re),ft(Re),V.blending===Gr&&V.transparent===!1?Mt(Fi):Mt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ce=V.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Xe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){D!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),D=V)}function ht(V){V!==B1?(oe(i.CULL_FACE),V!==k&&(V===S_?i.cullFace(i.BACK):V===F1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),k=V}function yt(V){V!==Q&&(z&&i.lineWidth(V),Q=V)}function Xe(V,De,Re){V?(oe(i.POLYGON_OFFSET_FILL),(re!==De||pe!==Re)&&(i.polygonOffset(De,Re),re=De,pe=Re)):Ne(i.POLYGON_OFFSET_FILL)}function kt(V){V?oe(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Ze(V){V===void 0&&(V=i.TEXTURE0+ue-1),_e!==V&&(i.activeTexture(V),_e=V)}function Le(V,De,Re){Re===void 0&&(_e===null?Re=i.TEXTURE0+ue-1:Re=_e);let Ce=ye[Re];Ce===void 0&&(Ce={type:void 0,texture:void 0},ye[Re]=Ce),(Ce.type!==V||Ce.texture!==De)&&(_e!==Re&&(i.activeTexture(Re),_e=Re),i.bindTexture(V,De||ie[V]),Ce.type=V,Ce.texture=De)}function L(){const V=ye[_e];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function xe(){try{i.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Me(){try{i.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ue(){try{i.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Je(){try{i.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function We(){try{i.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ee(){try{i.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Te(V){be.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function Ie(V){Ae.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Ae.copy(V))}function He(V,De){let Re=p.get(De);Re===void 0&&(Re=new WeakMap,p.set(De,Re));let Ce=Re.get(V);Ce===void 0&&(Ce=i.getUniformBlockIndex(De,V.name),Re.set(V,Ce))}function Pe(V,De){const Ce=p.get(De).get(V);m.get(De)!==Ce&&(i.uniformBlockBinding(De,Ce,V.__bindingPointIndex),m.set(De,Ce))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),f.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},_e=null,ye={},_={},y=new WeakMap,b=[],E=null,A=!1,M=null,v=null,w=null,N=null,P=null,G=null,O=null,F=new Xt(0,0,0),K=0,U=!1,D=null,k=null,Q=null,re=null,pe=null,be.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:oe,disable:Ne,bindFramebuffer:Ge,drawBuffers:Ye,useProgram:ct,setBlending:Mt,setMaterial:H,setFlipSided:ft,setCullFace:ht,setLineWidth:yt,setPolygonOffset:Xe,setScissorTest:kt,activeTexture:Ze,bindTexture:Le,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:We,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ue,texStorage3D:Je,texSubImage2D:xe,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:$e,scissor:Te,viewport:Ie,reset:at}}function OA(i,e,a,r,o,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new St,g=new WeakMap;let _;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return b?new OffscreenCanvas(L,T):lu("canvas")}function A(L,T,$){let xe=1;const Me=Le(L);if((Me.width>$||Me.height>$)&&(xe=$/Math.max(Me.width,Me.height)),xe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(xe*Me.width),$e=Math.floor(xe*Me.height);_===void 0&&(_=E(ce,$e));const Ue=T?E(ce,$e):_;return Ue.width=ce,Ue.height=$e,Ue.getContext("2d").drawImage(L,0,0,ce,$e),mt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ce+"x"+$e+")."),Ue}else return"data"in L&&mt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(L,T,$,xe,Me=!1){if(L!==null){if(i[L]!==void 0)return i[L];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=T;if(T===i.RED&&($===i.FLOAT&&(ce=i.R32F),$===i.HALF_FLOAT&&(ce=i.R16F),$===i.UNSIGNED_BYTE&&(ce=i.R8)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.R8UI),$===i.UNSIGNED_SHORT&&(ce=i.R16UI),$===i.UNSIGNED_INT&&(ce=i.R32UI),$===i.BYTE&&(ce=i.R8I),$===i.SHORT&&(ce=i.R16I),$===i.INT&&(ce=i.R32I)),T===i.RG&&($===i.FLOAT&&(ce=i.RG32F),$===i.HALF_FLOAT&&(ce=i.RG16F),$===i.UNSIGNED_BYTE&&(ce=i.RG8)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.RG8UI),$===i.UNSIGNED_SHORT&&(ce=i.RG16UI),$===i.UNSIGNED_INT&&(ce=i.RG32UI),$===i.BYTE&&(ce=i.RG8I),$===i.SHORT&&(ce=i.RG16I),$===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),$===i.UNSIGNED_INT&&(ce=i.RGB32UI),$===i.BYTE&&(ce=i.RGB8I),$===i.SHORT&&(ce=i.RGB16I),$===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),$===i.UNSIGNED_INT&&(ce=i.RGBA32UI),$===i.BYTE&&(ce=i.RGBA8I),$===i.SHORT&&(ce=i.RGBA16I),$===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),T===i.RGBA){const $e=Me?su:Ht.getTransfer(xe);$===i.FLOAT&&(ce=i.RGBA32F),$===i.HALF_FLOAT&&(ce=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ce=$e===$t?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(L,T){let $;return L?T===null||T===hs||T===qr?$=i.DEPTH24_STENCIL8:T===Ta?$=i.DEPTH32F_STENCIL8:T===io&&($=i.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===hs||T===qr?$=i.DEPTH_COMPONENT24:T===Ta?$=i.DEPTH_COMPONENT32F:T===io&&($=i.DEPTH_COMPONENT16),$}function G(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==hi&&L.minFilter!==Pn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function O(L){const T=L.target;T.removeEventListener("dispose",O),K(T),T.isVideoTexture&&g.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),D(T)}function K(L){const T=r.get(L);if(T.__webglInit===void 0)return;const $=L.source,xe=y.get($);if(xe){const Me=xe[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&U(L),Object.keys(xe).length===0&&y.delete($)}r.remove(L)}function U(L){const T=r.get(L);i.deleteTexture(T.__webglTexture);const $=L.source,xe=y.get($);delete xe[T.__cacheKey],f.memory.textures--}function D(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let Me=0;Me<T.__webglFramebuffer[xe].length;Me++)i.deleteFramebuffer(T.__webglFramebuffer[xe][Me]);else i.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[xe]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=L.textures;for(let xe=0,Me=$.length;xe<Me;xe++){const ce=r.get($[xe]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove($[xe])}r.remove(L)}let k=0;function Q(){k=0}function re(){const L=k;return L>=o.maxTextures&&mt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function pe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ue(L,T){const $=r.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const xe=L.image;if(xe===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie($,L,T);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);a.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function z(L,T){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ie($,L,T);return}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);a.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function W(L,T){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ie($,L,T);return}a.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function X(L,T){const $=r.get(L);if(L.version>0&&$.__version!==L.version){oe($,L,T);return}a.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const _e={[Th]:i.REPEAT,[Ea]:i.CLAMP_TO_EDGE,[Ah]:i.MIRRORED_REPEAT},ye={[hi]:i.NEAREST,[dM]:i.NEAREST_MIPMAP_NEAREST,[Cc]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Ld]:i.LINEAR_MIPMAP_NEAREST,[js]:i.LINEAR_MIPMAP_LINEAR},B={[xM]:i.NEVER,[bM]:i.ALWAYS,[_M]:i.LESS,[Jg]:i.LEQUAL,[gM]:i.EQUAL,[SM]:i.GEQUAL,[vM]:i.GREATER,[yM]:i.NOTEQUAL};function te(L,T){if(T.type===Ta&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pn||T.magFilter===Ld||T.magFilter===Cc||T.magFilter===js||T.minFilter===Pn||T.minFilter===Ld||T.minFilter===Cc||T.minFilter===js)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,_e[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,_e[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,_e[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ye[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ye[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==Cc&&T.minFilter!==js||T.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function be(L,T){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O));const xe=T.source;let Me=y.get(xe);Me===void 0&&(Me={},y.set(xe,Me));const ce=pe(T);if(ce!==L.__cacheKey){Me[ce]===void 0&&(Me[ce]={texture:i.createTexture(),usedTimes:0},f.memory.textures++,$=!0),Me[ce].usedTimes++;const $e=Me[L.__cacheKey];$e!==void 0&&(Me[L.__cacheKey].usedTimes--,$e.usedTimes===0&&U(T)),L.__cacheKey=ce,L.__webglTexture=Me[ce].texture}return $}function Ae(L,T,$){return Math.floor(Math.floor(L/$)/T)}function Be(L,T,$,xe){const ce=L.updateRanges;if(ce.length===0)a.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,$,xe,T.data);else{ce.sort((Ee,Te)=>Ee.start-Te.start);let $e=0;for(let Ee=1;Ee<ce.length;Ee++){const Te=ce[$e],Ie=ce[Ee],He=Te.start+Te.count,Pe=Ae(Ie.start,T.width,4),at=Ae(Te.start,T.width,4);Ie.start<=He+1&&Pe===at&&Ae(Ie.start+Ie.count-1,T.width,4)===Pe?Te.count=Math.max(Te.count,Ie.start+Ie.count-Te.start):(++$e,ce[$e]=Ie)}ce.length=$e+1;const Ue=i.getParameter(i.UNPACK_ROW_LENGTH),Je=i.getParameter(i.UNPACK_SKIP_PIXELS),We=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Te=ce.length;Ee<Te;Ee++){const Ie=ce[Ee],He=Math.floor(Ie.start/4),Pe=Math.ceil(Ie.count/4),at=He%T.width,V=Math.floor(He/T.width),De=Pe,Re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),a.texSubImage2D(i.TEXTURE_2D,0,at,V,De,Re,$,xe,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,We)}}function ie(L,T,$){let xe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=i.TEXTURE_3D);const Me=be(L,T),ce=T.source;a.bindTexture(xe,L.__webglTexture,i.TEXTURE0+$);const $e=r.get(ce);if(ce.version!==$e.__version||Me===!0){a.activeTexture(i.TEXTURE0+$);const Ue=Ht.getPrimaries(Ht.workingColorSpace),Je=T.colorSpace===qi?null:Ht.getPrimaries(T.colorSpace),We=T.colorSpace===qi||Ue===Je?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Ee=A(T.image,!1,o.maxTextureSize);Ee=Ze(T,Ee);const Te=c.convert(T.format,T.colorSpace),Ie=c.convert(T.type);let He=N(T.internalFormat,Te,Ie,T.colorSpace,T.isVideoTexture);te(xe,T);let Pe;const at=T.mipmaps,V=T.isVideoTexture!==!0,De=$e.__version===void 0||Me===!0,Re=ce.dataReady,Ce=G(T,Ee);if(T.isDepthTexture)He=P(T.format===Wr,T.type),De&&(V?a.texStorage2D(i.TEXTURE_2D,1,He,Ee.width,Ee.height):a.texImage2D(i.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Te,Ie,null));else if(T.isDataTexture)if(at.length>0){V&&De&&a.texStorage2D(i.TEXTURE_2D,Ce,He,at[0].width,at[0].height);for(let me=0,fe=at.length;me<fe;me++)Pe=at[me],V?Re&&a.texSubImage2D(i.TEXTURE_2D,me,0,0,Pe.width,Pe.height,Te,Ie,Pe.data):a.texImage2D(i.TEXTURE_2D,me,He,Pe.width,Pe.height,0,Te,Ie,Pe.data);T.generateMipmaps=!1}else V?(De&&a.texStorage2D(i.TEXTURE_2D,Ce,He,Ee.width,Ee.height),Re&&Be(T,Ee,Te,Ie)):a.texImage2D(i.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Te,Ie,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&De&&a.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,He,at[0].width,at[0].height,Ee.depth);for(let me=0,fe=at.length;me<fe;me++)if(Pe=at[me],T.format!==Bi)if(Te!==null)if(V){if(Re)if(T.layerUpdates.size>0){const Fe=X_(Pe.width,Pe.height,T.format,T.type);for(const Qe of T.layerUpdates){const Bt=Pe.data.subarray(Qe*Fe/Pe.data.BYTES_PER_ELEMENT,(Qe+1)*Fe/Pe.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Qe,Pe.width,Pe.height,1,Te,Bt)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Pe.width,Pe.height,Ee.depth,Te,Pe.data)}else a.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,He,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Re&&a.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Pe.width,Pe.height,Ee.depth,Te,Ie,Pe.data):a.texImage3D(i.TEXTURE_2D_ARRAY,me,He,Pe.width,Pe.height,Ee.depth,0,Te,Ie,Pe.data)}else{V&&De&&a.texStorage2D(i.TEXTURE_2D,Ce,He,at[0].width,at[0].height);for(let me=0,fe=at.length;me<fe;me++)Pe=at[me],T.format!==Bi?Te!==null?V?Re&&a.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Pe.width,Pe.height,Te,Pe.data):a.compressedTexImage2D(i.TEXTURE_2D,me,He,Pe.width,Pe.height,0,Pe.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Re&&a.texSubImage2D(i.TEXTURE_2D,me,0,0,Pe.width,Pe.height,Te,Ie,Pe.data):a.texImage2D(i.TEXTURE_2D,me,He,Pe.width,Pe.height,0,Te,Ie,Pe.data)}else if(T.isDataArrayTexture)if(V){if(De&&a.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,He,Ee.width,Ee.height,Ee.depth),Re)if(T.layerUpdates.size>0){const me=X_(Ee.width,Ee.height,T.format,T.type);for(const fe of T.layerUpdates){const Fe=Ee.data.subarray(fe*me/Ee.data.BYTES_PER_ELEMENT,(fe+1)*me/Ee.data.BYTES_PER_ELEMENT);a.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,Te,Ie,Fe)}T.clearLayerUpdates()}else a.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Ie,Ee.data)}else a.texImage3D(i.TEXTURE_2D_ARRAY,0,He,Ee.width,Ee.height,Ee.depth,0,Te,Ie,Ee.data);else if(T.isData3DTexture)V?(De&&a.texStorage3D(i.TEXTURE_3D,Ce,He,Ee.width,Ee.height,Ee.depth),Re&&a.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Ie,Ee.data)):a.texImage3D(i.TEXTURE_3D,0,He,Ee.width,Ee.height,Ee.depth,0,Te,Ie,Ee.data);else if(T.isFramebufferTexture){if(De)if(V)a.texStorage2D(i.TEXTURE_2D,Ce,He,Ee.width,Ee.height);else{let me=Ee.width,fe=Ee.height;for(let Fe=0;Fe<Ce;Fe++)a.texImage2D(i.TEXTURE_2D,Fe,He,me,fe,0,Te,Ie,null),me>>=1,fe>>=1}}else if(at.length>0){if(V&&De){const me=Le(at[0]);a.texStorage2D(i.TEXTURE_2D,Ce,He,me.width,me.height)}for(let me=0,fe=at.length;me<fe;me++)Pe=at[me],V?Re&&a.texSubImage2D(i.TEXTURE_2D,me,0,0,Te,Ie,Pe):a.texImage2D(i.TEXTURE_2D,me,He,Te,Ie,Pe);T.generateMipmaps=!1}else if(V){if(De){const me=Le(Ee);a.texStorage2D(i.TEXTURE_2D,Ce,He,me.width,me.height)}Re&&a.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ie,Ee)}else a.texImage2D(i.TEXTURE_2D,0,He,Te,Ie,Ee);M(T)&&v(xe),$e.__version=ce.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function oe(L,T,$){if(T.image.length!==6)return;const xe=be(L,T),Me=T.source;a.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+$);const ce=r.get(Me);if(Me.version!==ce.__version||xe===!0){a.activeTexture(i.TEXTURE0+$);const $e=Ht.getPrimaries(Ht.workingColorSpace),Ue=T.colorSpace===qi?null:Ht.getPrimaries(T.colorSpace),Je=T.colorSpace===qi||$e===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const We=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let fe=0;fe<6;fe++)!We&&!Ee?Te[fe]=A(T.image[fe],!0,o.maxCubemapSize):Te[fe]=Ee?T.image[fe].image:T.image[fe],Te[fe]=Ze(T,Te[fe]);const Ie=Te[0],He=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type),at=N(T.internalFormat,He,Pe,T.colorSpace),V=T.isVideoTexture!==!0,De=ce.__version===void 0||xe===!0,Re=Me.dataReady;let Ce=G(T,Ie);te(i.TEXTURE_CUBE_MAP,T);let me;if(We){V&&De&&a.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,at,Ie.width,Ie.height);for(let fe=0;fe<6;fe++){me=Te[fe].mipmaps;for(let Fe=0;Fe<me.length;Fe++){const Qe=me[Fe];T.format!==Bi?He!==null?V?Re&&a.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,Qe.width,Qe.height,He,Qe.data):a.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,at,Qe.width,Qe.height,0,Qe.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Re&&a.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,Qe.width,Qe.height,He,Pe,Qe.data):a.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,at,Qe.width,Qe.height,0,He,Pe,Qe.data)}}}else{if(me=T.mipmaps,V&&De){me.length>0&&Ce++;const fe=Le(Te[0]);a.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,at,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){V?Re&&a.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Te[fe].width,Te[fe].height,He,Pe,Te[fe].data):a.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,at,Te[fe].width,Te[fe].height,0,He,Pe,Te[fe].data);for(let Fe=0;Fe<me.length;Fe++){const Bt=me[Fe].image[fe].image;V?Re&&a.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,Bt.width,Bt.height,He,Pe,Bt.data):a.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,at,Bt.width,Bt.height,0,He,Pe,Bt.data)}}else{V?Re&&a.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,He,Pe,Te[fe]):a.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,at,He,Pe,Te[fe]);for(let Fe=0;Fe<me.length;Fe++){const Qe=me[Fe];V?Re&&a.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,He,Pe,Qe.image[fe]):a.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,at,He,Pe,Qe.image[fe])}}}M(T)&&v(i.TEXTURE_CUBE_MAP),ce.__version=Me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ne(L,T,$,xe,Me,ce){const $e=c.convert($.format,$.colorSpace),Ue=c.convert($.type),Je=N($.internalFormat,$e,Ue,$.colorSpace),We=r.get(T),Ee=r.get($);if(Ee.__renderTarget=T,!We.__hasExternalTextures){const Te=Math.max(1,T.width>>ce),Ie=Math.max(1,T.height>>ce);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?a.texImage3D(Me,ce,Je,Te,Ie,T.depth,0,$e,Ue,null):a.texImage2D(Me,ce,Je,Te,Ie,0,$e,Ue,null)}a.bindFramebuffer(i.FRAMEBUFFER,L),Xe(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,Me,Ee.__webglTexture,0,yt(T)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,Me,Ee.__webglTexture,ce),a.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(L,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const xe=T.depthTexture,Me=xe&&xe.isDepthTexture?xe.type:null,ce=P(T.stencilBuffer,Me),$e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=yt(T);Xe(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,ce,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,L)}else{const xe=T.textures;for(let Me=0;Me<xe.length;Me++){const ce=xe[Me],$e=c.convert(ce.format,ce.colorSpace),Ue=c.convert(ce.type),Je=N(ce.internalFormat,$e,Ue,ce.colorSpace),We=yt(T);$&&Xe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Je,T.width,T.height):Xe(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Je,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Je,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(T.depthTexture);xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const Me=xe.__webglTexture,ce=yt(T);if(T.depthTexture.format===ao)Xe(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0);else if(T.depthTexture.format===Wr)Xe(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ct(L){const T=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const xe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",Me)};xe.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=xe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xe=L.texture.mipmaps;xe&&xe.length>0?Ye(T.__webglFramebuffer[0],L):Ye(T.__webglFramebuffer,L)}else if($){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(a.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=i.createRenderbuffer(),Ge(T.__webglDepthbuffer[xe],L,!1);else{const Me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,ce)}}else{const xe=L.texture.mipmaps;if(xe&&xe.length>0?a.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ge(T.__webglDepthbuffer,L,!1);else{const Me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,ce)}}a.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(L,T,$){const xe=r.get(L);T!==void 0&&Ne(xe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ct(L)}function ut(L){const T=L.texture,$=r.get(L),xe=r.get(T);L.addEventListener("dispose",F);const Me=L.textures,ce=L.isWebGLCubeRenderTarget===!0,$e=Me.length>1;if($e||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=T.version,f.memory.textures++),ce){$.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ue]=[];for(let Je=0;Je<T.mipmaps.length;Je++)$.__webglFramebuffer[Ue][Je]=i.createFramebuffer()}else $.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)$.__webglFramebuffer[Ue]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if($e)for(let Ue=0,Je=Me.length;Ue<Je;Ue++){const We=r.get(Me[Ue]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),f.memory.textures++)}if(L.samples>0&&Xe(L)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],a.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Me.length;Ue++){const Je=Me[Ue];$.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Ue]);const We=c.convert(Je.format,Je.colorSpace),Ee=c.convert(Je.type),Te=N(Je.internalFormat,We,Ee,Je.colorSpace,L.isXRRenderTarget===!0),Ie=yt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Te,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,$.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge($.__webglDepthRenderbuffer,L,!0)),a.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){a.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),te(i.TEXTURE_CUBE_MAP,T);for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Je=0;Je<T.mipmaps.length;Je++)Ne($.__webglFramebuffer[Ue][Je],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Je);else Ne($.__webglFramebuffer[Ue],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(T)&&v(i.TEXTURE_CUBE_MAP),a.unbindTexture()}else if($e){for(let Ue=0,Je=Me.length;Ue<Je;Ue++){const We=Me[Ue],Ee=r.get(We);let Te=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),a.bindTexture(Te,Ee.__webglTexture),te(Te,We),Ne($.__webglFramebuffer,L,We,i.COLOR_ATTACHMENT0+Ue,Te,0),M(We)&&v(Te)}a.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),a.bindTexture(Ue,xe.__webglTexture),te(Ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Je=0;Je<T.mipmaps.length;Je++)Ne($.__webglFramebuffer[Je],L,T,i.COLOR_ATTACHMENT0,Ue,Je);else Ne($.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Ue,0);M(T)&&v(Ue),a.unbindTexture()}L.depthBuffer&&ct(L)}function Mt(L){const T=L.textures;for(let $=0,xe=T.length;$<xe;$++){const Me=T[$];if(M(Me)){const ce=w(L),$e=r.get(Me).__webglTexture;a.bindTexture(ce,$e),v(ce),a.unbindTexture()}}}const H=[],ft=[];function ht(L){if(L.samples>0){if(Xe(L)===!1){const T=L.textures,$=L.width,xe=L.height;let Me=i.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=r.get(L),Ue=T.length>1;if(Ue)for(let We=0;We<T.length;We++)a.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,null),a.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,null,0);a.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Je=L.texture.mipmaps;Je&&Je.length>0?a.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):a.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let We=0;We<T.length;We++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),Ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const Ee=r.get(T[We]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,$,xe,0,0,$,xe,Me,i.NEAREST),m===!0&&(H.length=0,ft.length=0,H.push(i.COLOR_ATTACHMENT0+We),L.depthBuffer&&L.resolveDepthBuffer===!1&&(H.push(ce),ft.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(a.bindFramebuffer(i.READ_FRAMEBUFFER,null),a.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let We=0;We<T.length;We++){a.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const Ee=r.get(T[We]).__webglTexture;a.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,Ee,0)}a.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function yt(L){return Math.min(o.maxSamples,L.samples)}function Xe(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ze(L,T){const $=L.colorSpace,xe=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==ps&&$!==qi&&(Ht.getTransfer($)===$t?(xe!==Bi||Me!==mi)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mn("WebGLTextures: Unsupported texture color space:",$)),T}function Le(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=Q,this.setTexture2D=ue,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=bt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Xe}function PA(i,e){function a(r,o=qi){let c;const f=Ht.getTransfer(o);if(r===mi)return i.UNSIGNED_BYTE;if(r===dp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===hp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Yg)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Zg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===qg)return i.BYTE;if(r===Wg)return i.SHORT;if(r===io)return i.UNSIGNED_SHORT;if(r===fp)return i.INT;if(r===hs)return i.UNSIGNED_INT;if(r===Ta)return i.FLOAT;if(r===$r)return i.HALF_FLOAT;if(r===Kg)return i.ALPHA;if(r===$g)return i.RGB;if(r===Bi)return i.RGBA;if(r===ao)return i.DEPTH_COMPONENT;if(r===Wr)return i.DEPTH_STENCIL;if(r===Qg)return i.RED;if(r===pp)return i.RED_INTEGER;if(r===mp)return i.RG;if(r===xp)return i.RG_INTEGER;if(r===_p)return i.RGBA_INTEGER;if(r===Qc||r===Jc||r===eu||r===tu)if(f===$t)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===wh||r===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dh||r===Uh||r===Lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dh||r===Uh)return f===$t?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Lh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oh||r===Ph||r===Bh||r===Fh||r===zh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===jh||r===Xh||r===qh||r===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Oh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ph)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yh||r===Zh||r===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Yh)return f===$t?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===Qh||r===Jh||r===ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qr?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:a}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const r=new fv(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,r=new xi({vertexShader:BA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Yi(new mo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends ms{constructor(e,a){super();const r=this;let o=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,y=null,b=null,E=null;const A=typeof XRWebGLBinding<"u",M=new zA,v={},w=a.getContextAttributes();let N=null,P=null;const G=[],O=[],F=new St;let K=null;const U=new Ai;U.viewport=new xn;const D=new Ai;D.viewport=new xn;const k=[U,D],Q=new i3;let re=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=G[ie];return oe===void 0&&(oe=new nh,G[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=G[ie];return oe===void 0&&(oe=new nh,G[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=G[ie];return oe===void 0&&(oe=new nh,G[ie]=oe),oe.getHandSpace()};function ue(ie){const oe=O.indexOf(ie.inputSource);if(oe===-1)return;const Ne=G[oe];Ne!==void 0&&(Ne.update(ie.inputSource,ie.frame,p||f),Ne.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",W);for(let ie=0;ie<G.length;ie++){const oe=O[ie];oe!==null&&(O[ie]=null,G[ie].disconnect(oe))}re=null,pe=null,M.reset();for(const ie in v)delete v[ie];e.setRenderTarget(N),b=null,y=null,_=null,o=null,P=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,a)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",z),o.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await a.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Ge=null,Ye=null;w.depth&&(Ye=w.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Ne=w.stencil?Wr:ao,Ge=w.stencil?qr:hs);const ct={colorFormat:a.RGBA8,depthFormat:Ye,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(ct),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new Ii(y.textureWidth,y.textureHeight,{format:Bi,type:mi,depthTexture:new yp(y.textureWidth,y.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ne={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,a,Ne),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new Ii(b.framebufferWidth,b.framebufferHeight,{format:Bi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(h),Be.setContext(o),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(ie){for(let oe=0;oe<ie.removed.length;oe++){const Ne=ie.removed[oe],Ge=O.indexOf(Ne);Ge>=0&&(O[Ge]=null,G[Ge].disconnect(Ne))}for(let oe=0;oe<ie.added.length;oe++){const Ne=ie.added[oe];let Ge=O.indexOf(Ne);if(Ge===-1){for(let ct=0;ct<G.length;ct++)if(ct>=O.length){O.push(Ne),Ge=ct;break}else if(O[ct]===null){O[ct]=Ne,Ge=ct;break}if(Ge===-1)break}const Ye=G[Ge];Ye&&Ye.connect(Ne)}}const X=new de,_e=new de;function ye(ie,oe,Ne){X.setFromMatrixPosition(oe.matrixWorld),_e.setFromMatrixPosition(Ne.matrixWorld);const Ge=X.distanceTo(_e),Ye=oe.projectionMatrix.elements,ct=Ne.projectionMatrix.elements,bt=Ye[14]/(Ye[10]-1),ut=Ye[14]/(Ye[10]+1),Mt=(Ye[9]+1)/Ye[5],H=(Ye[9]-1)/Ye[5],ft=(Ye[8]-1)/Ye[0],ht=(ct[8]+1)/ct[0],yt=bt*ft,Xe=bt*ht,kt=Ge/(-ft+ht),Ze=kt*-ft;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ze),ie.translateZ(kt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ye[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Le=bt+kt,L=ut+kt,T=yt-Ze,$=Xe+(Ge-Ze),xe=Mt*ut/L*Le,Me=H*ut/L*Le;ie.projectionMatrix.makePerspective(T,$,xe,Me,Le,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function B(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let oe=ie.near,Ne=ie.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(Ne=M.depthFar)),Q.near=D.near=U.near=oe,Q.far=D.far=U.far=Ne,(re!==Q.near||pe!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),re=Q.near,pe=Q.far),Q.layers.mask=ie.layers.mask|6,U.layers.mask=Q.layers.mask&3,D.layers.mask=Q.layers.mask&5;const Ge=ie.parent,Ye=Q.cameras;B(Q,Ge);for(let ct=0;ct<Ye.length;ct++)B(Ye[ct],Ge);Ye.length===2?ye(Q,U,D):Q.projectionMatrix.copy(U.projectionMatrix),te(ie,Q,Ge)};function te(ie,oe,Ne){Ne===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(Ne.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=np*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(ie){m=ie,y!==null&&(y.fixedFoveation=ie),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(ie){return v[ie]};let be=null;function Ae(ie,oe){if(g=oe.getViewerPose(p||f),E=oe,g!==null){const Ne=g.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let Ge=!1;Ne.length!==Q.cameras.length&&(Q.cameras.length=0,Ge=!0);for(let ut=0;ut<Ne.length;ut++){const Mt=Ne[ut];let H=null;if(b!==null)H=b.getViewport(Mt);else{const ht=_.getViewSubImage(y,Mt);H=ht.viewport,ut===0&&(e.setRenderTargetTextures(P,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(P))}let ft=k[ut];ft===void 0&&(ft=new Ai,ft.layers.enable(ut),ft.viewport=new xn,k[ut]=ft),ft.matrix.fromArray(Mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Mt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(H.x,H.y,H.width,H.height),ut===0&&(Q.matrix.copy(ft.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ge===!0&&Q.cameras.push(ft)}const Ye=o.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const ut=_.getDepthInformation(Ne[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,o.renderState)}if(Ye&&Ye.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<Ne.length;ut++){const Mt=Ne[ut].camera;if(Mt){let H=v[Mt];H||(H=new fv,v[Mt]=H);const ft=_.getCameraImage(Mt);H.sourceTexture=ft}}}}for(let Ne=0;Ne<G.length;Ne++){const Ge=O[Ne],Ye=G[Ne];Ge!==null&&Ye!==void 0&&Ye.update(Ge,oe,p||f)}be&&be(ie,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Be=new dv;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}}const Hs=new Na,HA=new An;function GA(i,e){function a(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,lv(i)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function o(M,v,w,N,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&b(M,v,P)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,w,N):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,a(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,a(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,a(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===On&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,a(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===On&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,a(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,a(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,a(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const w=e.get(v),N=w.envMap,P=w.envMapRotation;N&&(M.envMap.value=N,Hs.copy(P),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),M.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Hs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,a(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,a(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,a(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,w,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*w,M.scale.value=N*.5,v.map&&(M.map.value=v.map,a(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,a(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,a(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,a(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,a(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,a(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function b(M,v,w){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,a(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,a(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,a(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,a(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,a(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===On&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,a(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,a(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,a(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,a(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,a(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,a(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,a(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const w=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function VA(i,e,a,r){let o={},c={},f=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const P=N.program;r.uniformBlockBinding(w,P)}function p(w,N){let P=o[w.id];P===void 0&&(E(w),P=g(w),o[w.id]=P,w.addEventListener("dispose",M));const G=N.program;r.updateUBOMapping(w,G);const O=e.render.frame;c[w.id]!==O&&(y(w),c[w.id]=O)}function g(w){const N=_();w.__bindingPointIndex=N;const P=i.createBuffer(),G=w.__size,O=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,G,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,P),P}function _(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return mn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(w){const N=o[w.id],P=w.uniforms,G=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let O=0,F=P.length;O<F;O++){const K=Array.isArray(P[O])?P[O]:[P[O]];for(let U=0,D=K.length;U<D;U++){const k=K[U];if(b(k,O,U,G)===!0){const Q=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let ue=0;ue<re.length;ue++){const z=re[ue],W=A(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,Q+pe,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,pe),pe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function b(w,N,P,G){const O=w.value,F=N+"_"+P;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:G[F]=O.clone(),!0;{const K=G[F];if(typeof O=="number"||typeof O=="boolean"){if(K!==O)return G[F]=O,!0}else if(K.equals(O)===!1)return K.copy(O),!0}return!1}function E(w){const N=w.uniforms;let P=0;const G=16;for(let F=0,K=N.length;F<K;F++){const U=Array.isArray(N[F])?N[F]:[N[F]];for(let D=0,k=U.length;D<k;D++){const Q=U[D],re=Array.isArray(Q.value)?Q.value:[Q.value];for(let pe=0,ue=re.length;pe<ue;pe++){const z=re[pe],W=A(z),X=P%G,_e=X%W.boundary,ye=X+_e;P+=_e,ye!==0&&G-ye<W.storage&&(P+=G-ye),Q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=W.storage}}}const O=P%G;return O>0&&(P+=G-O),w.__size=P,w.__cache={},this}function A(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):mt("WebGLRenderer: Unsupported uniform value type.",w),N}function M(w){const N=w.target;N.removeEventListener("dispose",M);const P=f.indexOf(N.__bindingPointIndex);f.splice(P,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function v(){for(const w in o)i.deleteBuffer(o[w]);f=[],o={},c={}}return{bind:m,update:p,dispose:v}}const kA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ba=null;function jA(){return ba===null&&(ba=new $M(kA,32,32,mp,$r),ba.minFilter=Pn,ba.magFilter=Pn,ba.wrapS=Ea,ba.wrapT=Ea,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class XA{constructor(e={}){const{canvas:a=MM(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const E=new Set([_p,xp,pp]),A=new Set([mi,hs,io,qr,dp,hp]),M=new Uint32Array(4),v=new Int32Array(4);let w=null,N=null;const P=[],G=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let F=!1;this._outputColorSpace=pn;let K=0,U=0,D=null,k=-1,Q=null;const re=new xn,pe=new xn;let ue=null;const z=new Xt(0);let W=0,X=a.width,_e=a.height,ye=1,B=null,te=null;const be=new xn(0,0,X,_e),Ae=new xn(0,0,X,_e);let Be=!1;const ie=new uv;let oe=!1,Ne=!1;const Ge=new An,Ye=new de,ct=new xn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Mt(){return D===null?ye:1}let H=r;function ft(C,q){return a.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${du}`),a.addEventListener("webglcontextlost",me,!1),a.addEventListener("webglcontextrestored",fe,!1),a.addEventListener("webglcontextcreationerror",Fe,!1),H===null){const q="webgl2";if(H=ft(q,C),H===null)throw ft(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let ht,yt,Xe,kt,Ze,Le,L,T,$,xe,Me,ce,$e,Ue,Je,We,Ee,Te,Ie,He,Pe,at,V,De;function Re(){ht=new JT(H),ht.init(),at=new PA(H,ht),yt=new jT(H,ht,e,at),Xe=new LA(H,ht),yt.reversedDepthBuffer&&y&&Xe.buffers.depth.setReversed(!0),kt=new n2(H),Ze=new yA,Le=new OA(H,ht,Xe,Ze,yt,at,kt),L=new qT(O),T=new QT(O),$=new r3(H),V=new VT(H,$),xe=new e2(H,$,kt,V),Me=new a2(H,xe,$,kt),Ie=new i2(H,yt,Le),We=new XT(Ze),ce=new vA(O,L,T,ht,yt,V,We),$e=new GA(O,Ze),Ue=new bA,Je=new CA(ht),Te=new GT(O,L,T,Xe,Me,b,m),Ee=new DA(O,Me,yt),De=new VA(H,kt,yt,Xe),He=new kT(H,ht,kt),Pe=new t2(H,ht,kt),kt.programs=ce.programs,O.capabilities=yt,O.extensions=ht,O.properties=Ze,O.renderLists=Ue,O.shadowMap=Ee,O.state=Xe,O.info=kt}Re();const Ce=new IA(O,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(C){C!==void 0&&(ye=C,this.setSize(X,_e,!1))},this.getSize=function(C){return C.set(X,_e)},this.setSize=function(C,q,se=!0){if(Ce.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,_e=q,a.width=Math.floor(C*ye),a.height=Math.floor(q*ye),se===!0&&(a.style.width=C+"px",a.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(X*ye,_e*ye).floor()},this.setDrawingBufferSize=function(C,q,se){X=C,_e=q,ye=se,a.width=Math.floor(C*se),a.height=Math.floor(q*se),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(re)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,q,se,ne){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,q,se,ne),Xe.viewport(re.copy(be).multiplyScalar(ye).round())},this.getScissor=function(C){return C.copy(Ae)},this.setScissor=function(C,q,se,ne){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,q,se,ne),Xe.scissor(pe.copy(Ae).multiplyScalar(ye).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(C){Xe.setScissorTest(Be=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){te=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,se=!0){let ne=0;if(C){let Z=!1;if(D!==null){const we=D.texture.format;Z=E.has(we)}if(Z){const we=D.texture.type,Oe=A.has(we),Ve=Te.getClearColor(),je=Te.getClearAlpha(),it=Ve.r,rt=Ve.g,et=Ve.b;Oe?(M[0]=it,M[1]=rt,M[2]=et,M[3]=je,H.clearBufferuiv(H.COLOR,0,M)):(v[0]=it,v[1]=rt,v[2]=et,v[3]=je,H.clearBufferiv(H.COLOR,0,v))}else ne|=H.COLOR_BUFFER_BIT}q&&(ne|=H.DEPTH_BUFFER_BIT),se&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",me,!1),a.removeEventListener("webglcontextrestored",fe,!1),a.removeEventListener("webglcontextcreationerror",Fe,!1),Te.dispose(),Ue.dispose(),Je.dispose(),Ze.dispose(),L.dispose(),T.dispose(),Me.dispose(),V.dispose(),De.dispose(),ce.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",el),Ce.removeEventListener("sessionend",tl),Ci.stop()};function me(C){C.preventDefault(),C_("WebGLRenderer: Context Lost."),F=!0}function fe(){C_("WebGLRenderer: Context Restored."),F=!1;const C=kt.autoReset,q=Ee.enabled,se=Ee.autoUpdate,ne=Ee.needsUpdate,Z=Ee.type;Re(),kt.autoReset=C,Ee.enabled=q,Ee.autoUpdate=se,Ee.needsUpdate=ne,Ee.type=Z}function Fe(C){mn("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qe(C){const q=C.target;q.removeEventListener("dispose",Qe),Bt(q)}function Bt(C){Lt(C),Ze.remove(C)}function Lt(C){const q=Ze.get(C).programs;q!==void 0&&(q.forEach(function(se){ce.releaseProgram(se)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,se,ne,Z,we){q===null&&(q=bt);const Oe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ve=xu(C,q,se,ne,Z);Xe.setMaterial(ne,Oe);let je=se.index,it=1;if(ne.wireframe===!0){if(je=xe.getWireframeAttribute(se),je===void 0)return;it=2}const rt=se.drawRange,et=se.attributes.position;let xt=rt.start*it,Pt=(rt.start+rt.count)*it;we!==null&&(xt=Math.max(xt,we.start*it),Pt=Math.min(Pt,(we.start+we.count)*it)),je!==null?(xt=Math.max(xt,0),Pt=Math.min(Pt,je.count)):et!=null&&(xt=Math.max(xt,0),Pt=Math.min(Pt,et.count));const Ft=Pt-xt;if(Ft<0||Ft===1/0)return;V.setup(Z,ne,Ve,se,je);let Ct,jt=He;if(je!==null&&(Ct=$.get(je),jt=Pe,jt.setIndex(Ct)),Z.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*Mt()),jt.setMode(H.LINES)):jt.setMode(H.TRIANGLES);else if(Z.isLine){let nt=ne.linewidth;nt===void 0&&(nt=1),Xe.setLineWidth(nt*Mt()),Z.isLineSegments?jt.setMode(H.LINES):Z.isLineLoop?jt.setMode(H.LINE_LOOP):jt.setMode(H.LINE_STRIP)}else Z.isPoints?jt.setMode(H.POINTS):Z.isSprite&&jt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)so("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const nt=Z._multiDrawStarts,Jt=Z._multiDrawCounts,wt=Z._multiDrawCount,wn=je?$.get(je).bytesPerElement:1,Oa=Ze.get(ne).currentProgram.getUniforms();for(let tn=0;tn<wt;tn++)Oa.setValue(H,"_gl_DrawID",tn),jt.render(nt[tn]/wn,Jt[tn])}else if(Z.isInstancedMesh)jt.renderInstances(xt,Ft,Z.count);else if(se.isInstancedBufferGeometry){const nt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Jt=Math.min(se.instanceCount,nt);jt.renderInstances(xt,Ft,Jt)}else jt.render(xt,Ft)};function Vn(C,q,se){C.transparent===!0&&C.side===di&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,Mn(C,q,se),C.side=wa,C.needsUpdate=!0,Mn(C,q,se),C.side=di):Mn(C,q,se)}this.compile=function(C,q,se=null){se===null&&(se=C),N=Je.get(se),N.init(q),G.push(N),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(N.pushLight(Z),Z.castShadow&&N.pushShadow(Z))}),C!==se&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(N.pushLight(Z),Z.castShadow&&N.pushShadow(Z))}),N.setupLights();const ne=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const we=Z.material;if(we)if(Array.isArray(we))for(let Oe=0;Oe<we.length;Oe++){const Ve=we[Oe];Vn(Ve,se,Z),ne.add(Ve)}else Vn(we,se,Z),ne.add(we)}),N=G.pop(),ne},this.compileAsync=function(C,q,se=null){const ne=this.compile(C,q,se);return new Promise(Z=>{function we(){if(ne.forEach(function(Oe){Ze.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){Z(C);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ti=null;function xo(C){ti&&ti(C)}function el(){Ci.stop()}function tl(){Ci.start()}const Ci=new dv;Ci.setAnimationLoop(xo),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){ti=C,Ce.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},Ce.addEventListener("sessionstart",el),Ce.addEventListener("sessionend",tl),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){mn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,q,D),N=Je.get(C,G.length),N.init(q),G.push(N),Ge.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ie.setFromProjectionMatrix(Ge,Wi,q.reversedDepth),Ne=this.localClippingEnabled,oe=We.init(this.clippingPlanes,Ne),w=Ue.get(C,P.length),w.init(),P.push(w),Ce.enabled===!0&&Ce.isPresenting===!0){const we=O.xr.getDepthSensingMesh();we!==null&&_s(we,q,-1/0,O.sortObjects)}_s(C,q,0,O.sortObjects),w.finish(),O.sortObjects===!0&&w.sort(B,te),ut=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ut&&Te.addToRenderList(w,C),this.info.render.frame++,oe===!0&&We.beginShadows();const se=N.state.shadowsArray;Ee.render(se,C,q),oe===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=w.opaque,Z=w.transmissive;if(N.setupLights(),q.isArrayCamera){const we=q.cameras;if(Z.length>0)for(let Oe=0,Ve=we.length;Oe<Ve;Oe++){const je=we[Oe];il(ne,Z,C,je)}ut&&Te.render(C);for(let Oe=0,Ve=we.length;Oe<Ve;Oe++){const je=we[Oe];nl(w,C,je,je.viewport)}}else Z.length>0&&il(ne,Z,C,q),ut&&Te.render(C),nl(w,C,q);D!==null&&U===0&&(Le.updateMultisampleRenderTarget(D),Le.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(O,C,q),V.resetDefaultState(),k=-1,Q=null,G.pop(),G.length>0?(N=G[G.length-1],oe===!0&&We.setGlobalState(O.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?w=P[P.length-1]:w=null};function _s(C,q,se,ne){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){ne&&ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const Oe=Me.update(C),Ve=C.material;Ve.visible&&w.push(C,Oe,Ve,se,ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ie.intersectsObject(C))){const Oe=Me.update(C),Ve=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ct.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ct.copy(Oe.boundingSphere.center)),ct.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ve)){const je=Oe.groups;for(let it=0,rt=je.length;it<rt;it++){const et=je[it],xt=Ve[et.materialIndex];xt&&xt.visible&&w.push(C,Oe,xt,se,ct.z,et)}}else Ve.visible&&w.push(C,Oe,Ve,se,ct.z,null)}}const we=C.children;for(let Oe=0,Ve=we.length;Oe<Ve;Oe++)_s(we[Oe],q,se,ne)}function nl(C,q,se,ne){const{opaque:Z,transmissive:we,transparent:Oe}=C;N.setupLightsView(se),oe===!0&&We.setGlobalState(O.clippingPlanes,se),ne&&Xe.viewport(re.copy(ne)),Z.length>0&&ni(Z,q,se),we.length>0&&ni(we,q,se),Oe.length>0&&ni(Oe,q,se),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function il(C,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[ne.id]===void 0&&(N.state.transmissionRenderTarget[ne.id]=new Ii(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?$r:mi,minFilter:js,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const we=N.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||re;we.setSize(Oe.z*O.transmissionResolutionScale,Oe.w*O.transmissionResolutionScale);const Ve=O.getRenderTarget(),je=O.getActiveCubeFace(),it=O.getActiveMipmapLevel();O.setRenderTarget(we),O.getClearColor(z),W=O.getClearAlpha(),W<1&&O.setClearColor(16777215,.5),O.clear(),ut&&Te.render(se);const rt=O.toneMapping;O.toneMapping=ds;const et=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),oe===!0&&We.setGlobalState(O.clippingPlanes,ne),ni(C,se,ne),Le.updateMultisampleRenderTarget(we),Le.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Pt=0,Ft=q.length;Pt<Ft;Pt++){const Ct=q[Pt],{object:jt,geometry:nt,material:Jt,group:wt}=Ct;if(Jt.side===di&&jt.layers.test(ne.layers)){const wn=Jt.side;Jt.side=On,Jt.needsUpdate=!0,_n(jt,se,ne,nt,Jt,wt),Jt.side=wn,Jt.needsUpdate=!0,xt=!0}}xt===!0&&(Le.updateMultisampleRenderTarget(we),Le.updateRenderTargetMipmap(we))}O.setRenderTarget(Ve,je,it),O.setClearColor(z,W),et!==void 0&&(ne.viewport=et),O.toneMapping=rt}function ni(C,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,we=C.length;Z<we;Z++){const Oe=C[Z],{object:Ve,geometry:je,group:it}=Oe;let rt=Oe.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),Ve.layers.test(se.layers)&&_n(Ve,q,se,je,rt,it)}}function _n(C,q,se,ne,Z,we){C.onBeforeRender(O,q,se,ne,Z,we),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(O,q,se,ne,C,we),Z.transparent===!0&&Z.side===di&&Z.forceSinglePass===!1?(Z.side=On,Z.needsUpdate=!0,O.renderBufferDirect(se,q,ne,Z,C,we),Z.side=wa,Z.needsUpdate=!0,O.renderBufferDirect(se,q,ne,Z,C,we),Z.side=di):O.renderBufferDirect(se,q,ne,Z,C,we),C.onAfterRender(O,q,se,ne,Z,we)}function Mn(C,q,se){q.isScene!==!0&&(q=bt);const ne=Ze.get(C),Z=N.state.lights,we=N.state.shadowsArray,Oe=Z.state.version,Ve=ce.getParameters(C,Z.state,we,q,se),je=ce.getProgramCacheKey(Ve);let it=ne.programs;ne.environment=C.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(C.isMeshStandardMaterial?T:L).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",Qe),it=new Map,ne.programs=it);let rt=it.get(je);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Oe)return Zs(C,Ve),rt}else Ve.uniforms=ce.getUniforms(C),C.onBeforeCompile(Ve,O),rt=ce.acquireProgram(Ve,je),it.set(je,rt),ne.uniforms=Ve.uniforms;const et=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=We.uniform),Zs(C,Ve),ne.needsLights=_o(C),ne.lightsStateVersion=Oe,ne.needsLights&&(et.ambientLightColor.value=Z.state.ambient,et.lightProbe.value=Z.state.probe,et.directionalLights.value=Z.state.directional,et.directionalLightShadows.value=Z.state.directionalShadow,et.spotLights.value=Z.state.spot,et.spotLightShadows.value=Z.state.spotShadow,et.rectAreaLights.value=Z.state.rectArea,et.ltc_1.value=Z.state.rectAreaLTC1,et.ltc_2.value=Z.state.rectAreaLTC2,et.pointLights.value=Z.state.point,et.pointLightShadows.value=Z.state.pointShadow,et.hemisphereLights.value=Z.state.hemi,et.directionalShadowMap.value=Z.state.directionalShadowMap,et.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,et.spotShadowMap.value=Z.state.spotShadowMap,et.spotLightMatrix.value=Z.state.spotLightMatrix,et.spotLightMap.value=Z.state.spotLightMap,et.pointShadowMap.value=Z.state.pointShadowMap,et.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function $i(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=nu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Zs(C,q){const se=Ze.get(C);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function xu(C,q,se,ne,Z){q.isScene!==!0&&(q=bt),Le.resetTextureUnits();const we=q.fog,Oe=ne.isMeshStandardMaterial?q.environment:null,Ve=D===null?O.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ps,je=(ne.isMeshStandardMaterial?T:L).get(ne.envMap||Oe),it=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,Pt=!!se.morphAttributes.color;let Ft=ds;ne.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ft=O.toneMapping);const Ct=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,jt=Ct!==void 0?Ct.length:0,nt=Ze.get(ne),Jt=N.state.lights;if(oe===!0&&(Ne===!0||C!==Q)){const Dn=C===Q&&ne.id===k;We.setState(ne,C,Dn)}let wt=!1;ne.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Jt.state.version||nt.outputColorSpace!==Ve||Z.isBatchedMesh&&nt.batching===!1||!Z.isBatchedMesh&&nt.batching===!0||Z.isBatchedMesh&&nt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&nt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&nt.instancing===!1||!Z.isInstancedMesh&&nt.instancing===!0||Z.isSkinnedMesh&&nt.skinning===!1||!Z.isSkinnedMesh&&nt.skinning===!0||Z.isInstancedMesh&&nt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&nt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&nt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&nt.instancingMorph===!1&&Z.morphTexture!==null||nt.envMap!==je||ne.fog===!0&&nt.fog!==we||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==We.numPlanes||nt.numIntersection!==We.numIntersection)||nt.vertexAlphas!==it||nt.vertexTangents!==rt||nt.morphTargets!==et||nt.morphNormals!==xt||nt.morphColors!==Pt||nt.toneMapping!==Ft||nt.morphTargetsCount!==jt)&&(wt=!0):(wt=!0,nt.__version=ne.version);let wn=nt.currentProgram;wt===!0&&(wn=Mn(ne,q,Z));let Oa=!1,tn=!1,Qi=!1;const nn=wn.getUniforms(),Nn=nt.uniforms;if(Xe.useProgram(wn.program)&&(Oa=!0,tn=!0,Qi=!0),ne.id!==k&&(k=ne.id,tn=!0),Oa||Q!==C){Xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),nn.setValue(H,"projectionMatrix",C.projectionMatrix),nn.setValue(H,"viewMatrix",C.matrixWorldInverse);const Fn=nn.map.cameraPosition;Fn!==void 0&&Fn.setValue(H,Ye.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&nn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&nn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,tn=!0,Qi=!0)}if(Z.isSkinnedMesh){nn.setOptional(H,Z,"bindMatrix"),nn.setOptional(H,Z,"bindMatrixInverse");const Dn=Z.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),nn.setValue(H,"boneTexture",Dn.boneTexture,Le))}Z.isBatchedMesh&&(nn.setOptional(H,Z,"batchingTexture"),nn.setValue(H,"batchingTexture",Z._matricesTexture,Le),nn.setOptional(H,Z,"batchingIdTexture"),nn.setValue(H,"batchingIdTexture",Z._indirectTexture,Le),nn.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&nn.setValue(H,"batchingColorTexture",Z._colorsTexture,Le));const En=se.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ie.update(Z,se,wn),(tn||nt.receiveShadow!==Z.receiveShadow)&&(nt.receiveShadow=Z.receiveShadow,nn.setValue(H,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Nn.envMap.value=je,Nn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(Nn.envMapIntensity.value=q.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=jA()),tn&&(nn.setValue(H,"toneMappingExposure",O.toneMappingExposure),nt.needsLights&&_u(Nn,Qi),we&&ne.fog===!0&&$e.refreshFogUniforms(Nn,we),$e.refreshMaterialUniforms(Nn,ne,ye,_e,N.state.transmissionRenderTarget[C.id]),nu.upload(H,$i(nt),Nn,Le)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(nu.upload(H,$i(nt),Nn,Le),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&nn.setValue(H,"center",Z.center),nn.setValue(H,"modelViewMatrix",Z.modelViewMatrix),nn.setValue(H,"normalMatrix",Z.normalMatrix),nn.setValue(H,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Dn=ne.uniformsGroups;for(let Fn=0,Hi=Dn.length;Fn<Hi;Fn++){const Ji=Dn[Fn];De.update(Ji,wn),De.bind(Ji,wn)}}return wn}function _u(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function _o(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,q,se){const ne=Ze.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ze.get(C.texture).__webglTexture=q,Ze.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const se=Ze.get(C);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const gs=H.createFramebuffer();this.setRenderTarget=function(C,q=0,se=0){D=C,K=q,U=se;let ne=!0,Z=null,we=!1,Oe=!1;if(C){const je=Ze.get(C);if(je.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1;else if(je.__webglFramebuffer===void 0)Le.setupRenderTarget(C);else if(je.__hasExternalTextures)Le.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(je.__boundDepthTexture!==et){if(et!==null&&Ze.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Oe=!0);const rt=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?Z=rt[q][se]:Z=rt[q],we=!0):C.samples>0&&Le.useMultisampledRTT(C)===!1?Z=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[se]:Z=rt,re.copy(C.viewport),pe.copy(C.scissor),ue=C.scissorTest}else re.copy(be).multiplyScalar(ye).floor(),pe.copy(Ae).multiplyScalar(ye).floor(),ue=Be;if(se!==0&&(Z=gs),Xe.bindFramebuffer(H.FRAMEBUFFER,Z)&&ne&&Xe.drawBuffers(C,Z),Xe.viewport(re),Xe.scissor(pe),Xe.setScissorTest(ue),we){const je=Ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,je.__webglTexture,se)}else if(Oe){const je=q;for(let it=0;it<C.textures.length;it++){const rt=Ze.get(C.textures[it]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+it,rt.__webglTexture,se,je)}}else if(C!==null&&se!==0){const je=Ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,je.__webglTexture,se)}k=-1},this.readRenderTargetPixels=function(C,q,se,ne,Z,we,Oe,Ve=0){if(!(C&&C.isWebGLRenderTarget)){mn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je){Xe.bindFramebuffer(H.FRAMEBUFFER,je);try{const it=C.textures[Ve],rt=it.format,et=it.type;if(!yt.textureFormatReadable(rt)){mn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(et)){mn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ne&&se>=0&&se<=C.height-Z&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(q,se,ne,Z,at.convert(rt),at.convert(et),we))}finally{const it=D!==null?Ze.get(D).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,q,se,ne,Z,we,Oe,Ve=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je)if(q>=0&&q<=C.width-ne&&se>=0&&se<=C.height-Z){Xe.bindFramebuffer(H.FRAMEBUFFER,je);const it=C.textures[Ve],rt=it.format,et=it.type;if(!yt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.bufferData(H.PIXEL_PACK_BUFFER,we.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(q,se,ne,Z,at.convert(rt),at.convert(et),0);const Pt=D!==null?Ze.get(D).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,Pt);const Ft=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await EM(H,Ft,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,we),H.deleteBuffer(xt),H.deleteSync(Ft),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,se=0){const ne=Math.pow(2,-se),Z=Math.floor(C.image.width*ne),we=Math.floor(C.image.height*ne),Oe=q!==null?q.x:0,Ve=q!==null?q.y:0;Le.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Oe,Ve,Z,we),Xe.unbindTexture()};const al=H.createFramebuffer(),La=H.createFramebuffer();this.copyTextureToTexture=function(C,q,se=null,ne=null,Z=0,we=null){we===null&&(Z!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Z,Z=0):we=0);let Oe,Ve,je,it,rt,et,xt,Pt,Ft;const Ct=C.isCompressedTexture?C.mipmaps[we]:C.image;if(se!==null)Oe=se.max.x-se.min.x,Ve=se.max.y-se.min.y,je=se.isBox3?se.max.z-se.min.z:1,it=se.min.x,rt=se.min.y,et=se.isBox3?se.min.z:0;else{const En=Math.pow(2,-Z);Oe=Math.floor(Ct.width*En),Ve=Math.floor(Ct.height*En),C.isDataArrayTexture?je=Ct.depth:C.isData3DTexture?je=Math.floor(Ct.depth*En):je=1,it=0,rt=0,et=0}ne!==null?(xt=ne.x,Pt=ne.y,Ft=ne.z):(xt=0,Pt=0,Ft=0);const jt=at.convert(q.format),nt=at.convert(q.type);let Jt;q.isData3DTexture?(Le.setTexture3D(q,0),Jt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Le.setTexture2DArray(q,0),Jt=H.TEXTURE_2D_ARRAY):(Le.setTexture2D(q,0),Jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const wt=H.getParameter(H.UNPACK_ROW_LENGTH),wn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oa=H.getParameter(H.UNPACK_SKIP_PIXELS),tn=H.getParameter(H.UNPACK_SKIP_ROWS),Qi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ct.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ct.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,it),H.pixelStorei(H.UNPACK_SKIP_ROWS,rt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,et);const nn=C.isDataArrayTexture||C.isData3DTexture,Nn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const En=Ze.get(C),Dn=Ze.get(q),Fn=Ze.get(En.__renderTarget),Hi=Ze.get(Dn.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ji=0;Ji<je;Ji++)nn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(C).__webglTexture,Z,et+Ji),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(q).__webglTexture,we,Ft+Ji)),H.blitFramebuffer(it,rt,Oe,Ve,xt,Pt,Oe,Ve,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Ze.has(C)){const En=Ze.get(C),Dn=Ze.get(q);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,al),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,La);for(let Fn=0;Fn<je;Fn++)nn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,En.__webglTexture,Z,et+Fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,En.__webglTexture,Z),Nn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,we,Ft+Fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,we),Z!==0?H.blitFramebuffer(it,rt,Oe,Ve,xt,Pt,Oe,Ve,H.COLOR_BUFFER_BIT,H.NEAREST):Nn?H.copyTexSubImage3D(Jt,we,xt,Pt,Ft+Fn,it,rt,Oe,Ve):H.copyTexSubImage2D(Jt,we,xt,Pt,it,rt,Oe,Ve);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Nn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Jt,we,xt,Pt,Ft,Oe,Ve,je,jt,nt,Ct.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Jt,we,xt,Pt,Ft,Oe,Ve,je,jt,Ct.data):H.texSubImage3D(Jt,we,xt,Pt,Ft,Oe,Ve,je,jt,nt,Ct):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,we,xt,Pt,Oe,Ve,jt,nt,Ct.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,we,xt,Pt,Ct.width,Ct.height,jt,Ct.data):H.texSubImage2D(H.TEXTURE_2D,we,xt,Pt,Oe,Ve,jt,nt,Ct);H.pixelStorei(H.UNPACK_ROW_LENGTH,wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oa),H.pixelStorei(H.UNPACK_SKIP_ROWS,tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qi),we===0&&q.generateMipmaps&&H.generateMipmap(Jt),Xe.unbindTexture()},this.initRenderTarget=function(C){Ze.get(C).__webglFramebuffer===void 0&&Le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Le.setTextureCube(C,0):C.isData3DTexture?Le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Le.setTexture2DArray(C,0):Le.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){K=0,U=0,D=null,Xe.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),a.unpackColorSpace=Ht._getUnpackColorSpace()}}var ch=1/1e3,qA=1e3,WA=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*ch}get fixedDelta(){return this._fixedDelta*ch}set fixedDelta(i){this._fixedDelta=i*qA}get elapsed(){return this._elapsed*ch}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},YA=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),a=new Ua;return a.setAttribute("position",new Ri(i,3)),a.setAttribute("uv",new Ri(e,2)),a})(),xs=class sp{static get fullscreenGeometry(){return YA}constructor(e="Pass",a=new ip,r=new Sp){this.name=e,this.renderer=null,this.scene=a,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const a=this.fullscreenMaterial;a!==null&&(a.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let a=this.screen;a!==null?a.material=e:(a=new Yi(sp.fullscreenGeometry,e),a.frustumCulled=!1,this.scene===null&&(this.scene=new ip),this.scene.add(a),this.screen=a)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,a=co){}render(e,a,r,o,c){throw new Error("Render method not implemented!")}setSize(e,a){}initialize(e,a,r){}dispose(){for(const e of Object.keys(this)){const a=this[e];(a instanceof Ii||a instanceof Qr||a instanceof Bn||a instanceof sp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},ZA=class extends xs{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,a,r,o){const c=i.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},KA=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,$A="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",QA=class extends xi{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new hn(null),depthBuffer:new hn(null),channelWeights:new hn(null),opacity:new hn(1)},blending:Fi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:KA,vertexShader:$A}),this.depthFunc=au}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const e=i!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const e=i!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},JA=class extends xs{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new QA,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new Ii(1,1,{minFilter:Pn,magFilter:Pn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,a,r,o){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,a){a!==void 0&&(this.renderTarget.texture.type=a,a!==mi?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===pn&&(this.renderTarget.texture.colorSpace=pn))}},mg=new Xt,_v=class extends xs{constructor(i=!0,e=!0,a=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=a,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,a){this.color=i,this.depth=e,this.stencil=a}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,a,r,o){const c=this.overrideClearColor,f=this.overrideClearAlpha,h=i.getClearAlpha(),m=c!==null,p=f>=0;m?(i.getClearColor(mg),i.setClearColor(c,p?f:h)):p&&i.setClearAlpha(f),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),m?i.setClearColor(mg,h):p&&i.setClearAlpha(h)}},eR=class extends xs{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new _v(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,a,r,o){const c=i.getContext(),f=i.state.buffers,h=this.scene,m=this.camera,p=this.clearPass,g=this.inverted?0:1,_=1-g;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,g,4294967295),f.stencil.setClear(_),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(i,null):(p.render(i,e),p.render(i,a))),this.renderToScreen?(i.setRenderTarget(null),i.render(h,m)):(i.setRenderTarget(e),i.render(h,m),i.setRenderTarget(a),i.render(h,m)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},xg=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:a=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,a,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new JA,this.depthTexture=null,this.passes=[],this.timer=new WA,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,a=this.multisampling;a>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):a!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new St),a=i.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===mi&&i.outputColorSpace===pn&&(this.inputBuffer.texture.colorSpace=pn,this.outputBuffer.texture.colorSpace=pn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(i,a,r)}}replaceRenderer(i,e=!0){const a=this.renderer,r=a.domElement.parentNode;return this.setRenderer(i),e&&r!==null&&(r.removeChild(a.domElement),r.appendChild(i.domElement)),a}createDepthTexture(){const i=this.depthTexture=new yp;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=Wr,i.type=qr):i.type=hs,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,a,r){const o=this.renderer,c=o===null?new St:o.getDrawingBufferSize(new St),f={minFilter:Pn,magFilter:Pn,stencilBuffer:e,depthBuffer:i,type:a},h=new Ii(c.width,c.height,f);return r>0&&(h.samples=r),a===mi&&o!==null&&o.outputColorSpace===pn&&(h.texture.colorSpace=pn),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const a=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new St),c=r.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(i.setRenderer(r),i.setSize(o.width,o.height),i.initialize(r,c,f),this.autoRenderToScreen&&(a.length>0&&(a[a.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?a.splice(e,0,i):a.push(i),this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(i of a)i.setDepthTexture(h)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,a=e.indexOf(i);if(a!==-1&&e.splice(a,1).length>0){if(this.depthTexture!==null){const c=(h,m)=>h||m.needsDepthTexture;e.reduce(c,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&a===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,a=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,c=!1,f,h,m;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,r,o,i,c),p.needsSwap&&(c&&(a.renderToScreen=p.renderToScreen,f=e.getContext(),h=e.state.buffers.stencil,h.setFunc(f.NOTEQUAL,1,4294967295),a.render(e,r,o,i,c),h.setFunc(f.EQUAL,1,4294967295)),m=r,r=o,o=m),p instanceof eR?c=!0:p instanceof ZA&&(c=!1))}setSize(i,e,a){const r=this.renderer,o=r.getSize(new St);(i===void 0||e===void 0)&&(i=o.width,e=o.height),(o.width!==i||o.height!==e)&&r.setSize(i,e,a);const c=r.getDrawingBufferSize(new St);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),xs.fullscreenGeometry.dispose()}},Ws={NONE:0,DEPTH:1,CONVOLUTION:2},Gt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},tR=class{constructor(){this.shaderParts=new Map([[Gt.FRAGMENT_HEAD,null],[Gt.FRAGMENT_MAIN_UV,null],[Gt.FRAGMENT_MAIN_IMAGE,null],[Gt.VERTEX_HEAD,null],[Gt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ws.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ps}},uh=!1,_g=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let a;if(e.material.flatShading)switch(e.material.side){case di:a=this.materialsFlatShadedDoubleSide;break;case On:a=this.materialsFlatShadedBackSide;break;default:a=this.materialsFlatShaded;break}else switch(e.material.side){case di:a=this.materialsDoubleSide;break;case On:a=this.materialsBackSide;break;default:a=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=a[2]:e.isInstancedMesh?e.material=a[1]:e.material=a[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof xi))return i.clone();const e=i.uniforms,a=new Map;for(const o in e){const c=e[o].value;c.isRenderTargetTexture&&(e[o].value=null,a.set(o,c))}const r=i.clone();for(const o of a)e[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const a of e)a.uniforms=Object.assign({},i.uniforms),a.side=wa;e[2].skinning=!0,this.materialsBackSide=e.map(a=>{const r=this.cloneMaterial(a);return r.uniforms=Object.assign({},i.uniforms),r.side=On,r}),this.materialsDoubleSide=e.map(a=>{const r=this.cloneMaterial(a);return r.uniforms=Object.assign({},i.uniforms),r.side=di,r}),this.materialsFlatShaded=e.map(a=>{const r=this.cloneMaterial(a);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(a=>{const r=this.cloneMaterial(a);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r.side=On,r}),this.materialsFlatShadedDoubleSide=e.map(a=>{const r=this.cloneMaterial(a);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r.side=di,r})}}render(i,e,a){const r=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,uh){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,a);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,a),e.overrideMaterial=o}i.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return uh}static set workaroundEnabled(i){uh=i}},Ot={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},nR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",iR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",aR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",sR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",rR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",lR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",oR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",cR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",uR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",fR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",dR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",hR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",pR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",mR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",xR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",_R="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",gR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",vR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",yR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",SR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",bR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",MR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",ER="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",TR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",AR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",RR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",CR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",wR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",NR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",DR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",UR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",LR=new Map([[Ot.ADD,nR],[Ot.AVERAGE,iR],[Ot.COLOR,aR],[Ot.COLOR_BURN,sR],[Ot.COLOR_DODGE,rR],[Ot.DARKEN,lR],[Ot.DIFFERENCE,oR],[Ot.DIVIDE,cR],[Ot.DST,null],[Ot.EXCLUSION,uR],[Ot.HARD_LIGHT,fR],[Ot.HARD_MIX,dR],[Ot.HUE,hR],[Ot.INVERT,pR],[Ot.INVERT_RGB,mR],[Ot.LIGHTEN,xR],[Ot.LINEAR_BURN,_R],[Ot.LINEAR_DODGE,gR],[Ot.LINEAR_LIGHT,vR],[Ot.LUMINOSITY,yR],[Ot.MULTIPLY,SR],[Ot.NEGATION,bR],[Ot.NORMAL,MR],[Ot.OVERLAY,ER],[Ot.PIN_LIGHT,TR],[Ot.REFLECT,AR],[Ot.SATURATION,RR],[Ot.SCREEN,CR],[Ot.SOFT_LIGHT,wR],[Ot.SRC,NR],[Ot.SUBTRACT,DR],[Ot.VIVID_LIGHT,UR]]),OR=class extends ms{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new hn(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return LR.get(this.blendFunction)}},gv=class extends ms{constructor(i,e,{attributes:a=Ws.NONE,blendFunction:r=Ot.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=i,this.renderer=null,this.attributes=a,this.fragmentShader=e,this.vertexShader=h,this.defines=o,this.uniforms=c,this.extensions=f,this.blendMode=new OR(r),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=ps,this._outputColorSpace=qi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=co){}update(i,e,a){}setSize(i,e){}initialize(i,e,a){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof Ii||e instanceof Qr||e instanceof Bn||e instanceof xs)&&this[i].dispose()}}},gg=class extends xs{constructor(i,e,a=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new _v,this.overrideMaterialManager=a===null?null:new _g(a),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new _g(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,a,r,o){const c=this.scene,f=this.camera,h=this.selection,m=f.layers.mask,p=c.background,g=i.shadowMap.autoUpdate,_=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,c,f):i.render(c,f),f.layers.mask=m,c.background=p,i.shadowMap.autoUpdate=g}},PR=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,BR="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",FR=class extends xi{constructor(i,e,a,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:du.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new hn(null),depthBuffer:new hn(null),resolution:new hn(new St),texelSize:new hn(new St),cameraNear:new hn(.3),cameraFar:new hn(1e3),aspect:new hn(1),time:new hn(0)},blending:Fi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),i&&this.setShaderParts(i),e&&this.setDefines(e),a&&this.setUniforms(a),this.copyCameraSettings(r)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=co){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=PR.replace(Gt.FRAGMENT_HEAD,i.get(Gt.FRAGMENT_HEAD)||"").replace(Gt.FRAGMENT_MAIN_UV,i.get(Gt.FRAGMENT_MAIN_UV)||"").replace(Gt.FRAGMENT_MAIN_IMAGE,i.get(Gt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=BR.replace(Gt.VERTEX_HEAD,i.get(Gt.VERTEX_HEAD)||"").replace(Gt.VERTEX_MAIN_SUPPORT,i.get(Gt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof Ai?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const a=this.uniforms;a.resolution.value.set(i,e),a.texelSize.value.set(1/i,1/e),a.aspect.value=i/e}static get Section(){return Gt}};function vg(i,e,a){for(const r of e){const o="$1"+i+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const f of a.entries())f[1]!==null&&a.set(f[0],f[1].replace(c,o))}}function zR(i,e,a){let r=e.getFragmentShader(),o=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),f=r!==void 0&&/mainUv/.test(r);if(a.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(a.attributes&Ws.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=a.shaderParts;let p=m.get(Gt.FRAGMENT_HEAD)||"",g=m.get(Gt.FRAGMENT_MAIN_UV)||"",_=m.get(Gt.FRAGMENT_MAIN_IMAGE)||"",y=m.get(Gt.VERTEX_HEAD)||"",b=m.get(Gt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,A=new Set;if(f&&(g+=`	${i}MainUv(UV);
`,a.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);b+=`	${i}MainSupport(`,b+=w?`vUv);
`:`);
`;for(const N of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const P of N[1].split(/\s*,\s*/))a.varyings.add(P),E.add(P),A.add(P);for(const N of o.matchAll(h))A.add(N[1])}for(const w of r.matchAll(h))A.add(w[1]);for(const w of e.defines.keys())A.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())A.add(w);A.delete("while"),A.delete("for"),A.delete("if"),e.uniforms.forEach((w,N)=>a.uniforms.set(i+N.charAt(0).toUpperCase()+N.slice(1),w)),e.defines.forEach((w,N)=>a.defines.set(i+N.charAt(0).toUpperCase()+N.slice(1),w));const M=new Map([["fragment",r],["vertex",o]]);vg(i,A,a.defines),vg(i,A,M),r=M.get("fragment"),o=M.get("vertex");const v=e.blendMode;if(a.blendModes.set(v.blendFunction,v),c){e.inputColorSpace!==null&&e.inputColorSpace!==a.colorSpace&&(_+=e.inputColorSpace===pn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==qi?a.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(a.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${i}MainImage(color0, UV, `,(a.attributes&Ws.DEPTH)!==0&&w.test(r)&&(_+="depth, ",a.readDepth=!0),_+=`color1);
	`;const N=i+"BlendOpacity";a.uniforms.set(N,v.opacity),_+=`color0 = blend${v.blendFunction}(color0, color1, ${N});

	`,p+=`uniform float ${N};

`}if(p+=r+`
`,o!==null&&(y+=o+`
`),m.set(Gt.FRAGMENT_HEAD,p),m.set(Gt.FRAGMENT_MAIN_UV,g),m.set(Gt.FRAGMENT_MAIN_IMAGE,_),m.set(Gt.VERTEX_HEAD,y),m.set(Gt.VERTEX_MAIN_SUPPORT,b),e.extensions!==null)for(const w of e.extensions)a.extensions.add(w)}}var yg=class extends xs{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new FR(null,null,null,i),this.listener=a=>this.handleEvent(a),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,a)=>a.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new tR;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===Ot.DST)i.attributes|=f.getAttributes()&Ws.DEPTH;else{if((i.attributes&f.getAttributes()&Ws.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);zR("e"+e++,f,i)}let a=i.shaderParts.get(Gt.FRAGMENT_HEAD),r=i.shaderParts.get(Gt.FRAGMENT_MAIN_IMAGE),o=i.shaderParts.get(Gt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of i.blendModes.values())a+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(i.attributes&Ws.DEPTH)!==0?(i.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===pn&&(r+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Gt.FRAGMENT_HEAD,a),i.shaderParts.set(Gt.FRAGMENT_MAIN_IMAGE,r),i.shaderParts.set(Gt.FRAGMENT_MAIN_UV,o);for(const[f,h]of i.shaderParts)h!==null&&i.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=co){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const a of this.effects)a.setDepthTexture(i,e)}render(i,e,a,r,o){for(const c of this.effects)c.update(i,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,i.setRenderTarget(this.renderToScreen?null:a),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const a of this.effects)a.setSize(i,e)}initialize(i,e,a){this.renderer=i;for(const r of this.effects)r.initialize(i,e,a);this.updateMaterial(),a!==void 0&&a!==mi&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};const IR=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const a=e.getContext("2d");if(!a)throw new Error("2D context not available");a.fillStyle="black",a.fillRect(0,0,e.width,e.height);const r=new Bn(e);r.minFilter=Pn,r.magFilter=Pn,r.generateMipmaps=!1;const o=[];let c=null;const f=64;let h=.1*64;const m=1/f,p=()=>{a.fillStyle="black",a.fillRect(0,0,e.width,e.height)},g=b=>{const E={x:b.x*64,y:(1-b.y)*64};let A=1;const M=P=>Math.sin(P*Math.PI/2),v=P=>-P*(P-2);b.age<f*.3?A=M(b.age/(f*.3)):A=v(1-(b.age-f*.3)/(f*.7))||0,A*=b.force;const w=`${(b.vx+1)/2*255}, ${(b.vy+1)/2*255}, ${A*255}`,N=320;a.shadowOffsetX=N,a.shadowOffsetY=N,a.shadowBlur=h,a.shadowColor=`rgba(${w},${.22*A})`,a.beginPath(),a.fillStyle="rgba(255,0,0,1)",a.arc(E.x-N,E.y-N,h,0,Math.PI*2),a.fill()};return{canvas:e,texture:r,addTouch:b=>{let E=0,A=0,M=0;if(c){const v=b.x-c.x,w=b.y-c.y;if(v===0&&w===0)return;const N=v*v+w*w,P=Math.sqrt(N);A=v/(P||1),M=w/(P||1),E=Math.min(N*1e4,1)}c={x:b.x,y:b.y},o.push({x:b.x,y:b.y,age:0,force:E,vx:A,vy:M})},update:()=>{p();for(let b=o.length-1;b>=0;b--){const E=o[b],A=E.force*m*(1-E.age/f);E.x+=E.vx*A,E.y+=E.vy*A,E.age++,E.age>f&&o.splice(b,1)}for(let b=0;b<o.length;b++)g(o[b]);r.needsUpdate=!0},set radiusScale(b){h=.1*64*b},get radiusScale(){return h/(.1*64)},size:64}},HR=(i,e)=>{const a=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new gv("LiquidEffect",a,{uniforms:new Map([["uTexture",new hn(i)],["uStrength",new hn(e?.strength??.025)],["uTime",new hn(0)],["uFreq",new hn(e?.freq??4.5)]])})},Sg={square:0,circle:1,triangle:2,diamond:3},GR=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,VR=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,fh=10,kR=i=>{const e=Zi.c(26),{variant:a,pixelSize:r,color:o,className:c,style:f,antialias:h,patternScale:m,patternDensity:p,liquid:g,liquidStrength:_,liquidRadius:y,pixelSizeJitter:b,enableRipples:E,rippleIntensityScale:A,rippleThickness:M,rippleSpeed:v,liquidWobbleSpeed:w,autoPauseOffscreen:N,speed:P,transparent:G,edgeFade:O,noiseAmount:F}=i,K=a===void 0?"square":a,U=r===void 0?3:r,D=o===void 0?"#B19EEF":o,k=h===void 0?!0:h,Q=m===void 0?2:m,re=p===void 0?1:p,pe=g===void 0?!1:g,ue=_===void 0?.1:_,z=y===void 0?1:y,W=b===void 0?0:b,X=E===void 0?!0:E,_e=A===void 0?1:A,ye=M===void 0?.1:M,B=v===void 0?.3:v,te=w===void 0?4.5:w,be=N===void 0?!0:N,Ae=P===void 0?.5:P,Be=G===void 0?!0:G,ie=O===void 0?.5:O,oe=F===void 0?0:F,Ne=ve.useRef(null);let Ge;e[0]===Symbol.for("react.memo_cache_sentinel")?(Ge={visible:!0},e[0]=Ge):Ge=e[0];const Ye=ve.useRef(Ge),ct=ve.useRef(Ae),bt=ve.useRef(null),ut=ve.useRef(null);let Mt,H;e[1]!==k||e[2]!==be||e[3]!==D||e[4]!==ie||e[5]!==X||e[6]!==pe||e[7]!==z||e[8]!==ue||e[9]!==te||e[10]!==oe||e[11]!==re||e[12]!==Q||e[13]!==U||e[14]!==W||e[15]!==_e||e[16]!==B||e[17]!==ye||e[18]!==Ae||e[19]!==Be||e[20]!==K?(Mt=()=>{const yt=Ne.current;if(!yt)return;ct.current=Ae;const Xe=["antialias","liquid","noiseAmount"],kt={antialias:k,liquid:pe,noiseAmount:oe};let Ze=!1;if(!bt.current)Ze=!0;else if(ut.current){for(const Le of Xe)if(ut.current[Le]!==kt[Le]){Ze=!0;break}}if(Ze){if(bt.current){const me=bt.current;me.resizeObserver?.disconnect(),cancelAnimationFrame(me.raf),me.quad?.geometry.dispose(),me.material.dispose(),me.composer?.dispose(),me.renderer.dispose(),me.renderer.domElement.parentElement===yt&&yt.removeChild(me.renderer.domElement),bt.current=null}const Le=document.createElement("canvas"),L=new XA({canvas:Le,antialias:k,alpha:!0,powerPreference:"high-performance"});L.domElement.style.width="100%",L.domElement.style.height="100%",L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),yt.appendChild(L.domElement),Be?L.setClearAlpha(0):L.setClearColor(0,1);const T={uResolution:{value:new St(0,0)},uTime:{value:0},uColor:{value:new Xt(D)},uClickPos:{value:Array.from({length:fh},jR)},uClickTimes:{value:new Float32Array(fh)},uShapeType:{value:Sg[K]??0},uPixelSize:{value:U*L.getPixelRatio()},uScale:{value:Q},uDensity:{value:re},uPixelJitter:{value:W},uEnableRipples:{value:X?1:0},uRippleSpeed:{value:B},uRippleThickness:{value:ye},uRippleIntensity:{value:_e},uEdgeFade:{value:ie}},$=new ip,xe=new Sp(-1,1,1,-1,0,1),Me=new xi({vertexShader:GR,fragmentShader:VR,uniforms:T,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:tp}),ce=new mo(2,2),$e=new Yi(ce,Me);$.add($e);const Ue=new a3,Je=()=>{const me=yt.clientWidth||1,fe=yt.clientHeight||1;L.setSize(me,fe,!1),T.uResolution.value.set(L.domElement.width,L.domElement.height),bt.current?.composer&&bt.current.composer.setSize(L.domElement.width,L.domElement.height),T.uPixelSize.value=U*L.getPixelRatio()};Je();const We=new ResizeObserver(Je);We.observe(yt);const Te=XR()*1e3;let Ie,He,Pe;if(pe){He=IR(),He.radiusScale=z,Ie=new xg(L);const me=new gg($,xe);Pe=HR(He.texture,{strength:ue,freq:te});const fe=new yg(xe,Pe);fe.renderToScreen=!0,Ie.addPass(me),Ie.addPass(fe)}if(oe>0){Ie||(Ie=new xg(L),Ie.addPass(new gg($,xe)));const me=new gv("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new hn(0)],["uAmount",new hn(oe)]])}),fe=new yg(xe,me);fe.renderToScreen=!0,Ie&&Ie.passes.length>0&&Ie.passes.forEach(qR),Ie.addPass(fe)}Ie&&Ie.setSize(L.domElement.width,L.domElement.height);const at=me=>{const fe=L.domElement.getBoundingClientRect(),Fe=L.domElement.width/fe.width,Qe=L.domElement.height/fe.height,Bt=(me.clientX-fe.left)*Fe,Lt=(fe.height-(me.clientY-fe.top))*Qe;return{fx:Bt,fy:Lt,w:L.domElement.width,h:L.domElement.height}},V=me=>{const{fx:fe,fy:Fe}=at(me),Qe=bt.current?.clickIx??0;T.uClickPos.value[Qe].set(fe,Fe),T.uClickTimes.value[Qe]=T.uTime.value,bt.current&&(bt.current.clickIx=(Qe+1)%fh)},De=me=>{if(!He)return;const{fx:fe,fy:Fe,w:Qe,h:Bt}=at(me);He.addTouch({x:fe/Qe,y:Fe/Bt})};L.domElement.addEventListener("pointerdown",V,{passive:!0}),L.domElement.addEventListener("pointermove",De,{passive:!0});let Re=0;const Ce=()=>{if(be&&!Ye.current.visible){Re=requestAnimationFrame(Ce);return}T.uTime.value=Te+Ue.getElapsedTime()*ct.current,Pe&&(Pe.uniforms.get("uTime").value=T.uTime.value),Ie?(He&&He.update(),Ie.passes.forEach(me=>{const fe=me.effects;fe&&fe.forEach(Fe=>{const Qe=Fe.uniforms?.get("uTime");Qe&&(Qe.value=T.uTime.value)})}),Ie.render()):L.render($,xe),Re=requestAnimationFrame(Ce)};Re=requestAnimationFrame(Ce),bt.current={renderer:L,scene:$,camera:xe,material:Me,clock:Ue,clickIx:0,uniforms:T,resizeObserver:We,raf:Re,quad:$e,timeOffset:Te,composer:Ie,touch:He,liquidEffect:Pe}}else{const Le=bt.current;if(Le.uniforms.uShapeType.value=Sg[K]??0,Le.uniforms.uPixelSize.value=U*Le.renderer.getPixelRatio(),Le.uniforms.uColor.value.set(D),Le.uniforms.uScale.value=Q,Le.uniforms.uDensity.value=re,Le.uniforms.uPixelJitter.value=W,Le.uniforms.uEnableRipples.value=X?1:0,Le.uniforms.uRippleIntensity.value=_e,Le.uniforms.uRippleThickness.value=ye,Le.uniforms.uRippleSpeed.value=B,Le.uniforms.uEdgeFade.value=ie,Be?Le.renderer.setClearAlpha(0):Le.renderer.setClearColor(0,1),Le.liquidEffect){const L=Le.liquidEffect;L&&(L.value=ue);const T=Le.liquidEffect.uniforms.get("uFreq");T&&(T.value=te)}Le.touch&&(Le.touch.radiusScale=z)}return ut.current=kt,()=>{if(bt.current&&Ze||!bt.current)return;const Le=bt.current;Le.resizeObserver?.disconnect(),cancelAnimationFrame(Le.raf),Le.quad?.geometry.dispose(),Le.material.dispose(),Le.composer?.dispose(),Le.renderer.dispose(),Le.renderer.domElement.parentElement===yt&&yt.removeChild(Le.renderer.domElement),bt.current=null}},H=[k,pe,oe,U,Q,re,X,_e,ye,B,W,ie,Be,ue,z,te,be,K,D,Ae],e[1]=k,e[2]=be,e[3]=D,e[4]=ie,e[5]=X,e[6]=pe,e[7]=z,e[8]=ue,e[9]=te,e[10]=oe,e[11]=re,e[12]=Q,e[13]=U,e[14]=W,e[15]=_e,e[16]=B,e[17]=ye,e[18]=Ae,e[19]=Be,e[20]=K,e[21]=Mt,e[22]=H):(Mt=e[21],H=e[22]),ve.useEffect(Mt,H);const ft=`pixel-blast-container ${c??""}`;let ht;return e[23]!==f||e[24]!==ft?(ht=x.jsx("div",{ref:Ne,className:ft,style:f,"aria-label":"PixelBlast interactive background"}),e[23]=f,e[24]=ft,e[25]=ht):ht=e[25],ht};function jR(){return new St(-1,-1)}function XR(){if(typeof window<"u"&&window.crypto?.getRandomValues){const i=new Uint32Array(1);return window.crypto.getRandomValues(i),i[0]/4294967295}return Math.random()}function qR(i){return i.renderToScreen=!1}const WR="_button_14zfb_1",YR="_green_14zfb_85",ZR="_blue_14zfb_93",KR="_transparent_14zfb_101",$R="_small_14zfb_111",QR="_medium_14zfb_119",JR="_large_14zfb_127",Xs={button:WR,green:YR,blue:ZR,transparent:KR,small:$R,medium:QR,large:JR},bg={primary:"btn btn-primary",secondary:"btn btn-secondary",locked:"btn btn-locked",green:Xs.green,blue:Xs.blue,transparent:Xs.transparent};function bp(i){const e=Zi.c(22);let a,r,o,c,f,h,m,p,g,_;e[0]!==i?({children:a,text:g,size:h,variant:_,mainColor:o,maincolor:c,disabled:r,className:m,type:p,...f}=i,e[0]=i,e[1]=a,e[2]=r,e[3]=o,e[4]=c,e[5]=f,e[6]=h,e[7]=m,e[8]=p,e[9]=g,e[10]=_):(a=e[1],r=e[2],o=e[3],c=e[4],f=e[5],h=e[6],m=e[7],p=e[8],g=e[9],_=e[10]);const y=h===void 0?"medium":h,b=m===void 0?"":m,E=p===void 0?"button":p,A=a??g??"Button";let M=_;M||(M=(c??o)===!1?"secondary":"primary");const v=bg[M]||bg.primary,w=Xs[y]||Xs.medium,P=r||M==="locked",G=P&&Xs.disabled;let O;e[11]!==b||e[12]!==w||e[13]!==G||e[14]!==v?(O=[Xs.button,w,v,G,b].filter(Boolean),e[11]=b,e[12]=w,e[13]=G,e[14]=v,e[15]=O):O=e[15];const F=O.join(" ");let K;return e[16]!==F||e[17]!==A||e[18]!==P||e[19]!==f||e[20]!==E?(K=x.jsx("button",{type:E,className:F,disabled:P,...f,children:A}),e[16]=F,e[17]=A,e[18]=P,e[19]=f,e[20]=E,e[21]=K):K=e[21],K}const eC=[{title:"Основы Python",level:"beginner",badge:"Популярный",description:"Изучите базовые концепции программирования и синтаксис Python.",lessons:"15 уроков",hours:"3 часа",reward:"50 XP",progress:25,cta:"Продолжить",locked:!1},{title:"Структуры данных",level:"intermediate",badge:"Новый",description:"Списки, словари, кортежи и работа с данными.",lessons:"20 уроков",hours:"5 часов",reward:"100 XP",progress:0,cta:"Начать",locked:!1},{title:"ООП и модули",level:"advanced",badge:"Premium",description:"Объектно-ориентированное программирование и создание модулей.",lessons:"25 уроков",hours:"8 часов",reward:"200 XP",progress:0,cta:"Заблокировано",locked:!0}],tC=[{title:"Калькулятор",difficulty:"Легко",difficultyIcon:"fas fa-leaf",xp:"+10 XP",description:"Создайте простой калькулятор, который выполняет основные арифметические операции.",hints:["💡 Используйте input() для ввода"]}],nC=[{icon:"fas fa-fire",title:"Первые шаги",description:"Завершите первый урок",progress:100,earned:!0},{icon:"fas fa-code",title:"Программист",description:"Напишите 10 программ",progress:100,earned:!0},{icon:"fas fa-trophy",title:"Мастер Python",description:"Завершите все курсы",progress:30,earned:!1}],iC=[{icon:"fas fa-phone",label:"Позвонить сейчас"},{icon:"fas fa-comments",label:"Написать сообщение"},{icon:"fas fa-video",label:"Видеозвонок"}],aC=[{label:"уроков",value:"50+"},{label:"задач",value:"200+"},{label:"студентов",value:"10 000+"}];function Mg(){const i=Zi.c(18);let e,a;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsx("div",{className:Dt.pixelback,children:x.jsx(kR,{variant:"square",pixelSize:6,color:"rgba(27, 209, 191, 1)",patternScale:3,patternDensity:1.2,pixelSizeJitter:.5,enableRipples:!1,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquid:!1,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.6,edgeFade:.25,transparent:!0})}),a=x.jsx(Vg,{}),i[0]=e,i[1]=a):(e=i[0],a=i[1]);let r;i[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx("br",{}),i[2]=r):r=i[2];let o;i[3]===Symbol.for("react.memo_cache_sentinel")?(o=x.jsxs("h1",{children:["Обучайтесь",r,"с удовольствием ",x.jsx("br",{}),"на Linganguli"]}),i[3]=o):o=i[3];let c;i[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsxs("header",{className:Dt.heroText,children:[o,x.jsx("dl",{className:Dt.heroStats,children:aC.map(uC)}),x.jsx(bp,{variant:"primary",size:"large",text:"Начать обучение"})," "]}),i[4]=c):c=i[4];let f;i[5]===Symbol.for("react.memo_cache_sentinel")?(f=x.jsxs("section",{className:Dt.hero,id:"hero",children:[c,x.jsxs("article",{className:Dt.codeCard,children:[x.jsxs("header",{className:Dt.codeHead,children:[x.jsx("span",{className:Dt.codeDots,"aria-hidden":"true",children:"● ● ●"}),x.jsx("span",{children:"main.py"})]}),x.jsx("pre",{className:Dt.codeBody,children:`def welcome():
    print("Привет, программист!")
    return "Успех!"

result = welcome()
print(result)`})]})]}),i[5]=f):f=i[5];let h;i[6]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsxs("header",{className:"section-head",children:[x.jsx("h2",{children:"Выбери свой путь"}),x.jsx("p",{children:"Курсы для любого уровня подготовки"})]}),i[6]=h):h=i[6];let m;i[7]===Symbol.for("react.memo_cache_sentinel")?(m=x.jsxs("section",{className:Dt.courses,id:"courses",children:[h,x.jsx("div",{className:Dt.cardGrid,children:eC.map(cC)})]}),i[7]=m):m=i[7];let p;i[8]===Symbol.for("react.memo_cache_sentinel")?(p=x.jsxs("header",{className:"section-head",children:[x.jsx("h2",{children:"Практика каждый день"}),x.jsx("p",{children:"Задачи для закрепления знаний"})]}),i[8]=p):p=i[8];let g;i[9]===Symbol.for("react.memo_cache_sentinel")?(g=x.jsxs("section",{className:"section",id:"practice",children:[p,x.jsx("div",{className:Dt.cardGrid,children:tC.map(lC)})]}),i[9]=g):g=i[9];let _;i[10]===Symbol.for("react.memo_cache_sentinel")?(_=x.jsxs("header",{className:"section-head",children:[x.jsx("h2",{children:"Достижения"}),x.jsx("p",{children:"Мотивируйте себя наградами"})]}),i[10]=_):_=i[10];let y;i[11]===Symbol.for("react.memo_cache_sentinel")?(y=x.jsx("section",{className:"section",id:"achievements",children:x.jsxs("div",{className:"container",children:[_,x.jsx("div",{className:Dt.cardGrid,children:nC.map(rC)})]})}),i[11]=y):y=i[11];let b;i[12]===Symbol.for("react.memo_cache_sentinel")?(b=x.jsxs("header",{className:"section-head",children:[x.jsx("h2",{children:"Помощь психолога"}),x.jsx("p",{children:"Поддержка рядом, когда нужна мотивация"})]}),i[12]=b):b=i[12];let E;i[13]===Symbol.for("react.memo_cache_sentinel")?(E=x.jsxs("header",{className:Dt.modalHead,children:[x.jsx("h3",{children:"Анна Петрова"}),x.jsx("span",{children:"Сертифицированный психолог"})]}),i[13]=E):E=i[13];let A;i[14]===Symbol.for("react.memo_cache_sentinel")?(A=x.jsx("div",{className:Dt.avatarLarge,children:x.jsx("img",{src:"https://via.placeholder.com/80x80/2196F3/FFFFFF?text=П",alt:"Анна Петрова"})}),i[14]=A):A=i[14];let M;i[15]===Symbol.for("react.memo_cache_sentinel")?(M=x.jsxs("div",{className:`${Dt.rating} badge`,children:[x.jsx("i",{className:"fas fa-star","aria-hidden":"true"}),x.jsx("span",{children:"4.9 (127 отзывов)"})]}),i[15]=M):M=i[15];let v;i[16]===Symbol.for("react.memo_cache_sentinel")?(v=x.jsx("div",{className:Dt.contactList,children:iC.map(sC)}),i[16]=v):v=i[16];let w;return i[17]===Symbol.for("react.memo_cache_sentinel")?(w=x.jsxs("main",{className:Dt.page,children:[e,a,f,m,g,y,x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[b,x.jsxs("article",{className:`card ${Dt.modal}`,children:[E,x.jsxs("div",{className:Dt.modalBody,children:[A,x.jsxs("div",{children:[M,v,x.jsxs("p",{children:["Кризисная ситуация? Звоните ",x.jsx("a",{href:"tel:88002000122",children:"8-800-200-01-22"})]})]})]})]})]})})]}),i[17]=w):w=i[17],w}function sC(i){return x.jsxs("button",{type:"button",className:"btn btn-secondary",children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("span",{children:i.label})]},i.label)}function rC(i){return x.jsxs("article",{className:`card ${Dt.achievementCard} ${i.earned?Dt.earned:""}`,children:[x.jsxs("header",{className:Dt.achievementHead,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("h3",{children:i.title})]}),x.jsx("p",{children:i.description}),x.jsxs("div",{className:Dt.progressInfo,children:[x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})}),x.jsxs("span",{children:[i.progress,"%"]})]})]},i.title)}function lC(i){return x.jsxs("article",{className:`card ${Dt.taskCard}`,children:[x.jsxs("header",{className:Dt.taskHead,children:[x.jsxs("span",{children:[x.jsx("i",{className:i.difficultyIcon,"aria-hidden":"true"}),i.difficulty]}),x.jsx("span",{children:i.xp})]}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsx("ul",{className:`${Dt.hints} list-clean`,children:i.hints.map(oC)}),x.jsx(bp,{variant:"primary",text:"Решить"})," "]},i.title)}function oC(i){return x.jsx("li",{children:i},i)}function cC(i){return x.jsxs("article",{className:`${Dt.courseCard} ${i.locked?Dt.locked:""}`,children:[x.jsxs("header",{className:Dt.courseHead,children:[x.jsx("div",{className:Dt.courseIcon,children:x.jsx("i",{className:"fas fa-code","aria-hidden":"true"})}),x.jsx("span",{className:"badge",children:i.badge}),x.jsxs("div",{className:Dt.progressInfo,children:[x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})}),x.jsxs("span",{children:[i.progress,"%"]})]})]}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsxs("ul",{className:Dt.courseMeta,children:[x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-book","aria-hidden":"true"}),i.lessons]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),i.hours]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-trophy","aria-hidden":"true"}),i.reward]})]}),x.jsx(bp,{variant:i.locked?"locked":"primary",text:i.cta,disabled:i.locked})]},i.title)}function uC(i){return x.jsxs("div",{className:Dt.card,children:[x.jsx("dt",{className:Dt.statNumber,children:i.value}),x.jsx("dt",{className:Dt.label,children:i.label})]},i.label)}const fC="_page_ykjua_1",dC="_breadcrumb_ykjua_23",hC="_pageHead_ykjua_59",pC="_statRow_ykjua_101",mC="_statValue_ykjua_127",xC="_filterBar_ykjua_157",_C="_tabs_ykjua_179",gC="_tabBtn_ykjua_191",vC="_active_ykjua_229",yC="_filterInputs_ykjua_243",SC="_search_ykjua_255",bC="_cardGrid_ykjua_325",MC="_courseCard_ykjua_339",EC="_locked_ykjua_381",TC="_courseHeader_ykjua_395",AC="_icon_ykjua_411",RC="_progressInfo_ykjua_439",CC="_metaList_ykjua_483",wC="_tags_ykjua_533",NC="_rating_ykjua_571",DC="_courseActions_ykjua_589",UC="_lockedBtn_ykjua_609",LC="_detailGrid_ykjua_643",OC="_detailCard_ykjua_657",PC="_detailHead_ykjua_681",BC="_overview_ykjua_719",FC="_curriculum_ykjua_789",zC="_curriculumSection_ykjua_801",IC="_curriculumHead_ykjua_813",HC="_lesson_ykjua_853",GC="_reviewSummary_ykjua_917",VC="_breakdown_ykjua_947",kC="_breakdownRow_ykjua_961",jC="_reviewList_ykjua_1005",XC="_reviewItem_ykjua_1017",qC="_reviewHead_ykjua_1049",lt={page:fC,breadcrumb:dC,pageHead:hC,statRow:pC,statValue:mC,filterBar:xC,tabs:_C,tabBtn:gC,active:vC,filterInputs:yC,search:SC,cardGrid:bC,courseCard:MC,locked:EC,courseHeader:TC,icon:AC,progressInfo:RC,metaList:CC,tags:wC,rating:NC,courseActions:DC,lockedBtn:UC,detailGrid:LC,detailCard:OC,detailHead:PC,overview:BC,curriculum:FC,curriculumSection:zC,curriculumHead:IC,lesson:HC,reviewSummary:GC,breakdown:VC,breakdownRow:kC,reviewList:jC,reviewItem:XC,reviewHead:qC},WC=[{value:"5",label:"Курсов"},{value:"120+",label:"Уроков"},{value:"500+",label:"Задач"}],YC=[{id:"all",label:"Все курсы"},{id:"beginner",label:"Начинающим"},{id:"intermediate",label:"Средний уровень"},{id:"advanced",label:"Продвинутый"}],ZC=[{title:"Основы Python",description:"Изучите базовые концепции программирования и синтаксис Python. Идеально для начинающих программистов.",badge:"Популярный",progress:25,lessons:"15 уроков",hours:"3 часа",reward:"50 XP",students:"2 500 студентов",topics:["Переменные","Циклы","Функции","Условия"],rating:"4.9 (1 200 отзывов)",locked:!1},{title:"Структуры данных",description:"Списки, словари, кортежи и другие структуры данных Python для эффективной работы с информацией.",badge:"Новый",progress:0,lessons:"20 уроков",hours:"5 часов",reward:"100 XP",students:"1 800 студентов",topics:["Списки","Словари","Кортежи","Множества"],rating:"4.8 (850 отзывов)",locked:!1},{title:"ООП и модули",description:"Объектно-ориентированное программирование, создание модулей и пакетов для профессиональной разработки.",badge:"Premium",progress:0,lessons:"25 уроков",hours:"8 часов",reward:"200 XP",students:"1 200 студентов",topics:["Классы","Наследование","Модули","Пакеты"],rating:"4.9 (650 отзывов)",locked:!0},{title:"Веб-разработка с Flask",description:"Создавайте веб-приложения с помощью Flask — легкого и мощного фреймворка для Python.",badge:"Популярный",progress:0,lessons:"18 уроков",hours:"6 часов",reward:"150 XP",students:"1 500 студентов",topics:["Flask","HTML","CSS","Базы данных"],rating:"4.7 (900 отзывов)",locked:!1},{title:"Анализ данных с Pandas",description:"Изучите библиотеку Pandas для анализа данных, визуализации и машинного обучения.",badge:"Premium",progress:0,lessons:"22 урока",hours:"7 часов",reward:"180 XP",students:"980 студентов",topics:["Pandas","NumPy","Matplotlib","Seaborn"],rating:"4.8 (720 отзывов)",locked:!0}],KC=["Основы синтаксиса Python","Работа с переменными и типами данных","Условные операторы и циклы","Создание и использование функций","Обработка ошибок и исключений"],$C=["Компьютер с доступом в интернет","Установленный Python 3.7+","2–3 часа в неделю"],QC=[{title:"Модуль 1: Введение в Python",duration:"45 мин",lessons:[{title:"Установка Python и IDE",status:"done",duration:"10 мин"},{title:'Первая программа "Hello World"',status:"done",duration:"15 мин"},{title:"Переменные и типы данных",status:"pending",duration:"20 мин"}]},{title:"Модуль 2: Основы программирования",duration:"1 ч 30 мин",lessons:[{title:"Условные операторы if/else",status:"pending",duration:"25 мин"},{title:"Циклы for и while",status:"pending",duration:"30 мин"},{title:"Списки и работа с ними",status:"pending",duration:"35 мин"}]}],dh={rating:"4.9",total:"1 200 отзывов",breakdown:[{label:"5",percent:85},{label:"4",percent:12},{label:"3",percent:2},{label:"2",percent:1},{label:"1",percent:0}]},JC=[{name:"Анна Петрова",avatar:"https://via.placeholder.com/40x40/4CAF50/FFFFFF?text=A",date:"2 дня назад",text:"Отличный курс для начинающих! Все объясняется очень понятно, много практических заданий. Рекомендую!"},{name:"Михаил Иванов",avatar:"https://via.placeholder.com/40x40/2196F3/FFFFFF?text=M",date:"1 неделю назад",text:"Хорошо структурированный материал, понятные примеры. Помог мне начать программировать на Python."}];function ew(){const i=Zi.c(18);let e;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsxs("nav",{className:lt.breadcrumb,"aria-label":"Хлебные крошки",children:[x.jsx(fu,{to:"/",children:"Главная"}),x.jsx("span",{children:"/"}),x.jsx("span",{children:"Курсы Python"})]}),i[0]=e):e=i[0];let a;i[1]===Symbol.for("react.memo_cache_sentinel")?(a=x.jsxs("div",{children:[x.jsx("h1",{children:"Курсы"}),x.jsx("p",{children:"Выберите курс, который подходит вашему уровню"})]}),i[1]=a):a=i[1];let r;i[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsxs("header",{className:lt.pageHead,children:[a,x.jsx("dl",{className:lt.statRow,children:WC.map(uw)})]}),i[2]=r):r=i[2];let o;i[3]===Symbol.for("react.memo_cache_sentinel")?(o=x.jsx("nav",{className:lt.tabs,"aria-label":"Фильтр курсов",children:YC.map(cw)}),i[3]=o):o=i[3];let c;i[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsxs("label",{className:lt.search,children:[x.jsx("i",{className:"fas fa-search","aria-hidden":"true"}),x.jsx("input",{type:"search",placeholder:"Поиск курсов..."})]}),i[4]=c):c=i[4];let f;i[5]===Symbol.for("react.memo_cache_sentinel")?(f=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[e,r,x.jsxs("div",{className:`card ${lt.filterBar}`,children:[o,x.jsxs("div",{className:lt.filterInputs,children:[c,x.jsxs("select",{defaultValue:"popular","aria-label":"Сортировка",children:[x.jsx("option",{value:"popular",children:"По популярности"}),x.jsx("option",{value:"newest",children:"Сначала новые"}),x.jsx("option",{value:"difficulty",children:"По сложности"}),x.jsx("option",{value:"progress",children:"По прогрессу"})]})]})]})]})}),i[5]=f):f=i[5];let h;i[6]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsx("div",{className:lt.cardGrid,children:ZC.map(lw)})})}),i[6]=h):h=i[6];let m;i[7]===Symbol.for("react.memo_cache_sentinel")?(m=x.jsxs("header",{className:lt.detailHead,children:[x.jsx("div",{className:lt.icon,children:x.jsx("i",{className:"fas fa-code","aria-hidden":"true"})}),x.jsxs("div",{children:[x.jsx("h2",{children:"Основы Python"}),x.jsx("p",{children:"Изучите базовые концепции программирования и синтаксис Python."})]})]}),i[7]=m):m=i[7];let p;i[8]===Symbol.for("react.memo_cache_sentinel")?(p=x.jsxs("ul",{className:`${lt.metaList} list-clean`,children:[x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),"3 часа"]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-book","aria-hidden":"true"}),"15 уроков"]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-trophy","aria-hidden":"true"}),"50 XP"]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-users","aria-hidden":"true"}),"2 500 студентов"]})]}),i[8]=p):p=i[8];let g;i[9]===Symbol.for("react.memo_cache_sentinel")?(g=x.jsxs("nav",{className:lt.tabs,"aria-label":"Детали курса",children:[x.jsx("button",{type:"button",className:`${lt.tabBtn} ${lt.active}`,children:"Обзор"}),x.jsx("button",{type:"button",className:lt.tabBtn,children:"Программа"}),x.jsx("button",{type:"button",className:lt.tabBtn,children:"Отзывы"})]}),i[9]=g):g=i[9];let _;i[10]===Symbol.for("react.memo_cache_sentinel")?(_=x.jsxs("article",{className:`card ${lt.detailCard}`,children:[m,p,g,x.jsxs("div",{className:lt.overview,children:[x.jsx("h3",{children:"О курсе"}),x.jsx("p",{children:"Этот курс идеально подходит для тех, кто только начинает изучать программирование. Вы изучите основные концепции Python и научитесь писать простые программы."}),x.jsx("h4",{children:"Что вы изучите"}),x.jsx("ul",{children:KC.map(rw)}),x.jsx("h4",{children:"Требования"}),x.jsx("ul",{children:$C.map(sw)})]})]}),i[10]=_):_=i[10];let y;i[11]===Symbol.for("react.memo_cache_sentinel")?(y=x.jsx("h3",{children:"Программа курса"}),i[11]=y):y=i[11];let b;i[12]===Symbol.for("react.memo_cache_sentinel")?(b=x.jsxs("article",{className:`card ${lt.detailCard}`,children:[y,x.jsx("div",{className:lt.curriculum,children:QC.map(iw)})]}),i[12]=b):b=i[12];let E;i[13]===Symbol.for("react.memo_cache_sentinel")?(E=x.jsx("h3",{children:"Отзывы"}),i[13]=E):E=i[13];let A;i[14]===Symbol.for("react.memo_cache_sentinel")?(A=x.jsx("span",{className:lt.statValue,children:dh.rating}),i[14]=A):A=i[14];let M;i[15]===Symbol.for("react.memo_cache_sentinel")?(M=x.jsxs("div",{children:[A,x.jsxs("div",{className:lt.rating,children:[x.jsx("i",{className:"fas fa-star","aria-hidden":"true"}),x.jsx("span",{children:dh.total})]})]}),i[15]=M):M=i[15];let v;i[16]===Symbol.for("react.memo_cache_sentinel")?(v=x.jsxs("div",{className:lt.reviewSummary,children:[M,x.jsx("div",{className:lt.breakdown,children:dh.breakdown.map(nw)})]}),i[16]=v):v=i[16];let w;return i[17]===Symbol.for("react.memo_cache_sentinel")?(w=x.jsxs("main",{className:lt.page,children:[f,h,x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsxs("div",{className:lt.detailGrid,children:[_,b,x.jsxs("article",{className:`card ${lt.detailCard}`,children:[E,v,x.jsx("div",{className:lt.reviewList,children:JC.map(tw)})]})]})})})]}),i[17]=w):w=i[17],w}function tw(i){return x.jsxs("article",{className:lt.reviewItem,children:[x.jsx("img",{src:i.avatar,alt:i.name}),x.jsxs("div",{children:[x.jsxs("div",{className:lt.reviewHead,children:[x.jsx("strong",{children:i.name}),x.jsx("span",{children:i.date})]}),x.jsx("p",{children:i.text})]})]},i.name)}function nw(i){return x.jsxs("div",{className:lt.breakdownRow,children:[x.jsx("span",{children:i.label}),x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.percent}%`}})}),x.jsxs("span",{children:[i.percent,"%"]})]},i.label)}function iw(i){return x.jsxs("section",{className:lt.curriculumSection,children:[x.jsxs("header",{className:lt.curriculumHead,children:[x.jsx("h4",{children:i.title}),x.jsx("span",{children:i.duration})]}),x.jsx("div",{children:i.lessons.map(aw)})]},i.title)}function aw(i){return x.jsxs("div",{className:lt.lesson,children:[x.jsx("i",{className:"fas fa-play-circle","aria-hidden":"true"}),x.jsx("span",{children:i.title}),x.jsx("span",{children:i.duration})]},i.title)}function sw(i){return x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-circle","aria-hidden":"true"}),i]},i)}function rw(i){return x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-check","aria-hidden":"true"}),i]},i)}function lw(i){return x.jsxs("article",{className:`card ${lt.courseCard} ${i.locked?lt.locked:""}`,children:[x.jsxs("header",{className:lt.courseHeader,children:[x.jsx("div",{className:lt.icon,children:x.jsx("i",{className:"fas fa-code","aria-hidden":"true"})}),x.jsx("span",{className:"badge",children:i.badge}),x.jsxs("div",{className:lt.progressInfo,children:[x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})}),x.jsxs("span",{children:[i.progress,"%"]})]})]}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsxs("ul",{className:`${lt.metaList} list-clean`,children:[x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-book","aria-hidden":"true"}),i.lessons]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),i.hours]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-trophy","aria-hidden":"true"}),i.reward]}),x.jsxs("li",{children:[x.jsx("i",{className:"fas fa-users","aria-hidden":"true"}),i.students]})]}),x.jsx("ul",{className:`${lt.tags} list-clean`,children:i.topics.map(ow)}),x.jsxs("div",{className:lt.rating,children:[x.jsx("i",{className:"fas fa-star","aria-hidden":"true"}),x.jsx("span",{children:i.rating})]}),x.jsxs("footer",{className:lt.courseActions,children:[x.jsx("button",{type:"button",className:i.locked?lt.lockedBtn:"btn btn-primary",children:i.locked?"Заблокировано":"Продолжить"}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Подробнее"})]})]},i.title)}function ow(i){return x.jsx("li",{children:i},i)}function cw(i,e){return x.jsx("button",{type:"button",className:`${lt.tabBtn} ${e===0?lt.active:""}`,children:i.label},i.id)}function uw(i){return x.jsxs("div",{children:[x.jsx("dt",{className:lt.statValue,children:i.value}),x.jsx("dd",{children:i.label})]},i.label)}const fw="_page_1klov_1",dw="_pageHead_1klov_23",hw="_statRow_1klov_65",pw="_statValue_1klov_91",mw="_filterBar_1klov_121",xw="_tabs_1klov_145",_w="_tabBtn_1klov_157",gw="_active_1klov_195",vw="_filters_1klov_209",yw="_filterField_1klov_223",Sw="_sectionHead_1klov_263",bw="_dailyGoal_1klov_303",Mw="_goalChart_1klov_325",Ew="_goalText_1klov_349",Tw="_cardGrid_1klov_433",Aw="_taskCard_1klov_447",Rw="_taskHead_1klov_487",Cw="_hints_1klov_585",ww="_tags_1klov_641",Nw="_taskFooter_1klov_679",Dw="_taskStats_1klov_699",Uw="_taskActions_1klov_713",Lw="_challengeMeta_1klov_733",Ow="_challengeGrid_1klov_759",Pw="_challengeCard_1klov_773",Bw="_featured_1klov_803",Fw="_metaRow_1klov_881",zw="_extra_1klov_915",Iw="_projectCard_1klov_935",Hw="_projectMeta_1klov_1017",Gw="_categoryCard_1klov_1049",Vw="_editorCard_1klov_1133",kw="_editorHead_1klov_1157",jw="_editorActions_1klov_1183",Xw="_editorBody_1klov_1195",qw="_editorPane_1klov_1209",Ww="_editorToolbar_1klov_1227",Yw="_outputPane_1klov_1297",Zw="_outputHead_1klov_1313",Kw="_outputBody_1klov_1335",ot={page:fw,pageHead:dw,statRow:hw,statValue:pw,filterBar:mw,tabs:xw,tabBtn:_w,active:gw,filters:vw,filterField:yw,sectionHead:Sw,dailyGoal:bw,goalChart:Mw,goalText:Ew,cardGrid:Tw,taskCard:Aw,taskHead:Rw,hints:Cw,tags:ww,taskFooter:Nw,taskStats:Dw,taskActions:Uw,challengeMeta:Lw,challengeGrid:Ow,challengeCard:Pw,featured:Bw,metaRow:Fw,extra:zw,projectCard:Iw,projectMeta:Hw,categoryCard:Gw,editorCard:Vw,editorHead:kw,editorActions:jw,editorBody:Xw,editorPane:qw,editorToolbar:Ww,outputPane:Yw,outputHead:Zw,outputBody:Kw},$w=[{value:"15",label:"Решено сегодня"},{value:"127",label:"Всего решено"},{value:"85%",label:"Точность"}],Qw=[{label:"Сложность",options:[{value:"all",label:"Все уровни"},{value:"easy",label:"Легко"},{value:"medium",label:"Средне"},{value:"hard",label:"Сложно"}]},{label:"Тема",options:[{value:"all",label:"Все темы"},{value:"basics",label:"Основы"},{value:"data-structures",label:"Структуры данных"},{value:"algorithms",label:"Алгоритмы"},{value:"oop",label:"ООП"}]},{label:"Статус",options:[{value:"all",label:"Все"},{value:"unsolved",label:"Не решено"},{value:"solved",label:"Решено"},{value:"in-progress",label:"В процессе"}]}],Jw=[{title:"Калькулятор",difficulty:"Легко",status:"Решено",xp:"+10 XP",description:"Создайте простой калькулятор, который выполняет основные арифметические операции (сложение, вычитание, умножение, деление).",hints:["💡 Используйте input() для ввода чисел","💡 Примените условные операторы для выбора операции"],tags:["Переменные","Условия","Ввод/вывод"],stats:["1 250 решений","5 мин"],actions:["Посмотреть решение","Решить снова"]},{title:"Проверка четности",difficulty:"Легко",status:"Решено",xp:"+10 XP",description:"Напишите программу, которая проверяет, является ли введенное число четным или нечетным.",hints:["💡 Используйте оператор % для проверки остатка"],tags:["Условия","Операторы"],stats:["980 решений","3 мин"],actions:["Посмотреть решение","Решить снова"]},{title:"Поиск в списке",difficulty:"Средне",status:"Решено",xp:"+20 XP",description:"Создайте функцию, которая ищет элемент в списке и возвращает его индекс. Если элемент не найден, верните -1.",hints:["💡 Используйте цикл for с enumerate()","💡 Обработайте случай, когда элемент не найден"],tags:["Списки","Функции","Циклы"],stats:["750 решений","10 мин"],actions:["Посмотреть решение","Решить снова"]},{title:"Сумма чисел",difficulty:"Легко",status:"В процессе",xp:"+10 XP",description:"Напишите программу, которая вычисляет сумму всех чисел от 1 до n, где n вводится пользователем.",hints:["💡 Используйте цикл for или while","💡 Инициализируйте переменную для суммы"],tags:["Циклы","Переменные"],stats:["1 100 решений","5 мин"],actions:["Продолжить","Сбросить"]},{title:"Сортировка пузырьком",difficulty:"Средне",status:"Не решено",xp:"+20 XP",description:"Реализуйте алгоритм сортировки пузырьком для массива чисел.",hints:["💡 Используйте вложенные циклы","💡 Сравнивайте соседние элементы"],tags:["Алгоритмы","Сортировка","Циклы"],stats:["650 решений","15 мин"],actions:["Решить","Подсказка"]}],eN=[{title:"Алгоритм Дейкстры",description:"Реализуйте алгоритм поиска кратчайшего пути в графе с использованием алгоритма Дейкстры.",reward:"500 XP",time:"2 часа",difficulty:"Сложно",featured:!0,extra:"Приз: Премиум доступ на месяц"},{title:"Машинное обучение",description:"Создайте простую модель линейной регрессии для предсказания цен на недвижимость.",reward:"300 XP",time:"4 часа",difficulty:"Средне"},{title:"Веб-скрапинг",description:"Создайте скрипт для сбора данных с веб-сайта и сохранения их в CSV файл.",reward:"250 XP",time:"3 часа",difficulty:"Средне"}],tN=[{icon:"fas fa-calculator",title:"Калькулятор с GUI",description:"Создайте графический интерфейс для калькулятора с использованием tkinter.",difficulty:"Легко",duration:"2-3 дня",stack:"tkinter, Python",skills:["GUI","tkinter","ООП"]},{icon:"fas fa-database",title:"Система управления базой данных",description:"Создайте CRUD приложение для управления базой данных сотрудников.",difficulty:"Средне",duration:"1-2 недели",stack:"SQLite, Flask",skills:["Базы данных","Flask","SQL"]},{icon:"fas fa-chart-line",title:"Анализатор данных",description:"Создайте инструмент для анализа и визуализации данных с помощью pandas и matplotlib.",difficulty:"Сложно",duration:"2-3 недели",stack:"pandas, matplotlib",skills:["Анализ данных","Визуализация","pandas"]}],nN=[{icon:"fas fa-sort",title:"Сортировка",info:["12 задач","3-5 часов"]},{icon:"fas fa-search",title:"Поиск",info:["8 задач","2-3 часа"]},{icon:"fas fa-project-diagram",title:"Графы",info:["15 задач","5-7 часов"]},{icon:"fas fa-puzzle-piece",title:"Динамическое программирование",info:["10 задач","4-6 часов"]}];function iN(){const i=Zi.c(21);let e;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsxs("div",{children:[x.jsx("h1",{children:"Практические задания"}),x.jsx("p",{children:"Решайте задачи разной сложности и оттачивайте навыки программирования."})]}),i[0]=e):e=i[0];let a;i[1]===Symbol.for("react.memo_cache_sentinel")?(a=x.jsxs("header",{className:ot.pageHead,children:[e,x.jsx("dl",{className:ot.statRow,children:$w.map(_N)})]}),i[1]=a):a=i[1];let r;i[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx("nav",{className:ot.tabs,"aria-label":"Режимы практики",children:["Ежедневные","Вызовы","Проекты","Алгоритмы"].map(xN)}),i[2]=r):r=i[2];let o;i[3]===Symbol.for("react.memo_cache_sentinel")?(o=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[a,x.jsxs("div",{className:`card ${ot.filterBar}`,children:[r,x.jsx("div",{className:ot.filters,children:Qw.map(pN)})]})]})}),i[3]=o):o=i[3];let c;i[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx("h2",{children:"Ежедневные задания"}),i[4]=c):c=i[4];let f;i[5]===Symbol.for("react.memo_cache_sentinel")?(f=x.jsxs("svg",{viewBox:"0 0 36 36",children:[x.jsx("path",{d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"#e2e8f0",strokeWidth:"2"}),x.jsx("path",{d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"#4CAF50",strokeWidth:"2",strokeDasharray:"75, 100",strokeDashoffset:"25"})]}),i[5]=f):f=i[5];let h;i[6]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsxs("div",{className:ot.sectionHead,children:[c,x.jsxs("div",{className:ot.dailyGoal,children:[x.jsxs("div",{className:ot.goalChart,"aria-hidden":"true",children:[f,x.jsxs("div",{className:ot.goalText,children:[x.jsx("span",{children:"3"}),x.jsx("small",{children:"из 5"})]})]}),x.jsxs("div",{children:[x.jsx("h3",{children:"Ежедневная цель"}),x.jsx("p",{children:"Решите 5 задач сегодня для поддержания streak."}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-fire","aria-hidden":"true"}),"7 дней подряд"]})]})]})]}),i[6]=h):h=i[6];let m;i[7]===Symbol.for("react.memo_cache_sentinel")?(m=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[h,x.jsx("div",{className:ot.cardGrid,children:Jw.map(cN)})]})}),i[7]=m):m=i[7];let p;i[8]===Symbol.for("react.memo_cache_sentinel")?(p=x.jsx("h2",{children:"Вызовы недели"}),i[8]=p):p=i[8];let g;i[9]===Symbol.for("react.memo_cache_sentinel")?(g=x.jsxs("div",{className:ot.sectionHead,children:[p,x.jsxs("div",{className:ot.challengeMeta,children:[x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),"Осталось: 3 дня 12 часов"]}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-users","aria-hidden":"true"}),"2 450 участников"]})]})]}),i[9]=g):g=i[9];let _;i[10]===Symbol.for("react.memo_cache_sentinel")?(_=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[g,x.jsx("div",{className:ot.challengeGrid,children:eN.map(oN)})]})}),i[10]=_):_=i[10];let y;i[11]===Symbol.for("react.memo_cache_sentinel")?(y=x.jsxs("div",{className:ot.sectionHead,children:[x.jsx("h2",{children:"Практические проекты"}),x.jsx("p",{children:"Создавайте реальные проекты и добавляйте их в портфолио."})]}),i[11]=y):y=i[11];let b;i[12]===Symbol.for("react.memo_cache_sentinel")?(b=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[y,x.jsx("div",{className:ot.cardGrid,children:tN.map(rN)})]})}),i[12]=b):b=i[12];let E;i[13]===Symbol.for("react.memo_cache_sentinel")?(E=x.jsxs("div",{className:ot.sectionHead,children:[x.jsx("h2",{children:"Алгоритмы и структуры данных"}),x.jsx("p",{children:"Изучайте классические алгоритмы и улучшайте навыки решения задач."})]}),i[13]=E):E=i[13];let A;i[14]===Symbol.for("react.memo_cache_sentinel")?(A=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[E,x.jsx("div",{className:ot.cardGrid,children:nN.map(aN)})]})}),i[14]=A):A=i[14];let M;i[15]===Symbol.for("react.memo_cache_sentinel")?(M=x.jsxs("div",{className:ot.sectionHead,children:[x.jsx("h2",{children:"Редактор кода"}),x.jsx("p",{children:"Решайте задачи прямо в браузере."})]}),i[15]=M):M=i[15];let v;i[16]===Symbol.for("react.memo_cache_sentinel")?(v=x.jsx("h3",{children:"Редактор кода"}),i[16]=v):v=i[16];let w;i[17]===Symbol.for("react.memo_cache_sentinel")?(w=x.jsxs("header",{className:ot.editorHead,children:[v,x.jsxs("div",{className:ot.editorActions,children:[x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Запустить"}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Проверить"}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Отправить"})]})]}),i[17]=w):w=i[17];let N;i[18]===Symbol.for("react.memo_cache_sentinel")?(N=x.jsxs("div",{className:ot.editorPane,children:[x.jsx("div",{className:ot.editorToolbar,children:x.jsxs("select",{defaultValue:"3.10",children:[x.jsx("option",{value:"3.9",children:"Python 3.9"}),x.jsx("option",{value:"3.10",children:"Python 3.10"}),x.jsx("option",{value:"3.11",children:"Python 3.11"})]})}),x.jsx("textarea",{defaultValue:`def solve():
    # Ваш код здесь
    pass

if __name__ == "__main__":
    result = solve()
    print(result)`})]}),i[18]=N):N=i[18];let P;i[19]===Symbol.for("react.memo_cache_sentinel")?(P=x.jsxs("header",{className:ot.outputHead,children:[x.jsx("span",{children:"Вывод"}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Очистить"})]}),i[19]=P):P=i[19];let G;return i[20]===Symbol.for("react.memo_cache_sentinel")?(G=x.jsxs("main",{className:ot.page,children:[o,m,_,b,A,x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[M,x.jsxs("article",{className:`card ${ot.editorCard}`,children:[w,x.jsxs("div",{className:ot.editorBody,children:[N,x.jsxs("section",{className:ot.outputPane,children:[P,x.jsx("div",{className:ot.outputBody,children:x.jsx("div",{children:"Готов к выполнению..."})})]})]})]})]})})]}),i[20]=G):G=i[20],G}function aN(i){return x.jsxs("article",{className:`card ${ot.categoryCard}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("h3",{children:i.title}),x.jsx("div",{children:i.info.map(sN)}),x.jsx("button",{type:"button",className:"btn btn-primary",children:"Начать изучение"})]},i.title)}function sN(i){return x.jsx("span",{children:i},i)}function rN(i){return x.jsxs("article",{className:`card ${ot.projectCard}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsxs("div",{className:ot.projectMeta,children:[x.jsx("span",{className:"badge",children:i.difficulty}),x.jsx("span",{children:i.duration}),x.jsx("span",{children:i.stack})]}),x.jsx("ul",{className:`${ot.tags} list-clean`,children:i.skills.map(lN)}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Начать проект"})]},i.title)}function lN(i){return x.jsx("li",{children:i},i)}function oN(i){return x.jsxs("article",{className:`card ${ot.challengeCard} ${i.featured?ot.featured:""}`,children:[i.featured&&x.jsx("span",{className:"badge",children:"Текущий вызов"}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsxs("div",{className:ot.metaRow,children:[x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-trophy","aria-hidden":"true"}),i.reward]}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),i.time]}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-signal","aria-hidden":"true"}),i.difficulty]})]}),i.extra&&x.jsx("p",{className:ot.extra,children:i.extra}),x.jsx("button",{type:"button",className:"btn btn-primary",children:"Принять вызов"})]},i.title)}function cN(i){return x.jsxs("article",{className:`card ${ot.taskCard}`,children:[x.jsxs("header",{className:ot.taskHead,children:[x.jsx("span",{children:i.difficulty}),x.jsx("span",{children:i.status}),x.jsx("span",{children:i.xp})]}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsx("ul",{className:`${ot.hints} list-clean`,children:i.hints.map(hN)}),x.jsx("ul",{className:`${ot.tags} list-clean`,children:i.tags.map(dN)}),x.jsxs("div",{className:ot.taskFooter,children:[x.jsx("div",{className:ot.taskStats,children:i.stats.map(fN)}),x.jsx("div",{className:ot.taskActions,children:i.actions.map(uN)})]})]},i.title)}function uN(i){return x.jsx("button",{type:"button",className:"btn btn-secondary",children:i},i)}function fN(i){return x.jsx("span",{children:i},i)}function dN(i){return x.jsx("li",{children:i},i)}function hN(i){return x.jsx("li",{children:i},i)}function pN(i){return x.jsxs("label",{className:ot.filterField,children:[x.jsx("span",{children:i.label}),x.jsx("select",{defaultValue:i.options[0].value,children:i.options.map(mN)})]},i.label)}function mN(i){return x.jsx("option",{value:i.value,children:i.label},i.value)}function xN(i,e){return x.jsx("button",{type:"button",className:`${ot.tabBtn} ${e===0?ot.active:""}`,children:i},i)}function _N(i){return x.jsxs("div",{children:[x.jsx("dt",{className:ot.statValue,children:i.value}),x.jsx("dd",{children:i.label})]},i.label)}const gN="_page_oxq6u_1",vN="_breadcrumb_oxq6u_23",yN="_pageHead_oxq6u_59",SN="_statRow_oxq6u_103",bN="_statValue_oxq6u_129",MN="_tabRow_oxq6u_159",EN="_tabBtn_oxq6u_183",TN="_active_oxq6u_221",AN="_categoryBlock_oxq6u_235",RN="_cardGrid_oxq6u_259",CN="_achievementCard_oxq6u_273",wN="_earned_oxq6u_317",NN="_cardHead_oxq6u_347",DN="_cardBody_oxq6u_413",UN="_reward_oxq6u_441",LN="_date_oxq6u_473",ON="_progressInfo_oxq6u_489",PN="_highlightGrid_oxq6u_517",BN="_highlightCard_oxq6u_531",FN="_recentList_oxq6u_633",zN="_recentItem_oxq6u_647",rn={page:gN,breadcrumb:vN,pageHead:yN,statRow:SN,statValue:bN,tabRow:MN,tabBtn:EN,active:TN,categoryBlock:AN,cardGrid:RN,achievementCard:CN,earned:wN,cardHead:NN,cardBody:DN,reward:UN,date:LN,progressInfo:ON,highlightGrid:PN,highlightCard:BN,recentList:FN,recentItem:zN},IN=[{value:"8",label:"Получено"},{value:"25",label:"Всего"},{value:"32%",label:"Прогресс"}],Eg=[{id:"learning",title:"Обучение",achievements:[{icon:"fas fa-fire",title:"Первые шаги",text:"Завершите первый урок",reward:"+50 XP",date:"15 января 2024",earned:!0},{icon:"fas fa-book",title:"Ученик",text:"Завершите 5 уроков",reward:"+100 XP",date:"18 января 2024",earned:!0},{icon:"fas fa-graduation-cap",title:"Студент",text:"Завершите 20 уроков",reward:"+200 XP",date:"25 января 2024",earned:!0},{icon:"fas fa-crown",title:"Мастер курса",text:"Завершите полный курс",reward:"+500 XP",progress:75,earned:!1}]},{id:"practice",title:"Практика",achievements:[{icon:"fas fa-code",title:"Программист",text:"Напишите 10 программ",reward:"+100 XP",date:"20 января 2024",earned:!0},{icon:"fas fa-bug",title:"Отладчик",text:"Исправьте 25 ошибок",reward:"+150 XP",date:"22 января 2024",earned:!0},{icon:"fas fa-trophy",title:"Решатель задач",text:"Решите 100 задач",reward:"+300 XP",progress:127,earned:!1},{icon:"fas fa-brain",title:"Алгоритмист",text:"Решите 50 алгоритмических задач",reward:"+400 XP",progress:20,earned:!1}]},{id:"streak",title:"Streak",achievements:[{icon:"fas fa-fire",title:"Начало пути",text:"Поддерживайте streak 3 дня",reward:"+50 XP",date:"17 января 2024",earned:!0},{icon:"fas fa-fire",title:"Streak Master",text:"Поддерживайте streak 7 дней",reward:"+100 XP",date:"22 января 2024",earned:!0},{icon:"fas fa-fire",title:"Непрерывность",text:"Поддерживайте streak 30 дней",reward:"+500 XP",progress:23,earned:!1},{icon:"fas fa-fire",title:"Легенда",text:"Поддерживайте streak 100 дней",reward:"+1000 XP",progress:7,earned:!1}]},{id:"special",title:"Особые",achievements:[{icon:"fas fa-heart",title:"Первый день",text:"Начните путешествие в мир Python",reward:"+25 XP",date:"15 января 2024",earned:!0},{icon:"fas fa-star",title:"Звезда",text:"Заработайте 1000 XP",reward:"+200 XP",date:"28 января 2024",earned:!0},{icon:"fas fa-gem",title:"Драгоценность",text:"Заработайте 5000 XP",reward:"+1000 XP",progress:25,earned:!1},{icon:"fas fa-crown",title:"Король Python",text:"Достигните максимального уровня",reward:"+2000 XP",progress:12,earned:!1}]}],HN=[{icon:"fas fa-trophy",value:"8",label:"Достижений получено"},{icon:"fas fa-star",value:"1 250",label:"XP заработано"},{icon:"fas fa-fire",value:"7",label:"Дней streak"},{icon:"fas fa-target",value:"32%",label:"Общий прогресс"}],GN=[{icon:"fas fa-star",title:"Звезда",text:"Заработайте 1000 XP",date:"28 января 2024",reward:"+200 XP"},{icon:"fas fa-graduation-cap",title:"Студент",text:"Завершите 20 уроков",date:"25 января 2024",reward:"+200 XP"},{icon:"fas fa-bug",title:"Отладчик",text:"Исправьте 25 ошибок",date:"22 января 2024",reward:"+150 XP"}];function VN(){const i=Zi.c(7);let e;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsxs("nav",{className:rn.breadcrumb,"aria-label":"Хлебные крошки",children:[x.jsx(fu,{to:"/",children:"Главная"}),x.jsx("span",{children:"/"}),x.jsx("span",{children:"Достижения"})]}),i[0]=e):e=i[0];let a;i[1]===Symbol.for("react.memo_cache_sentinel")?(a=x.jsxs("div",{children:[x.jsx("h1",{children:"Достижения"}),x.jsx("p",{children:"Отмечайте свои успехи и мотивируйте себя на дальнейшее изучение Python."})]}),i[1]=a):a=i[1];let r;i[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsxs("header",{className:rn.pageHead,children:[a,x.jsx("dl",{className:rn.statRow,children:IN.map(YN)})]}),i[2]=r):r=i[2];let o;i[3]===Symbol.for("react.memo_cache_sentinel")?(o=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[e,r,x.jsx("nav",{className:rn.tabRow,"aria-label":"Категории достижений",children:Eg.map(WN)}),Eg.map(XN)]})}),i[3]=o):o=i[3];let c;i[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsx("div",{className:rn.highlightGrid,children:HN.map(jN)})})}),i[4]=c):c=i[4];let f;i[5]===Symbol.for("react.memo_cache_sentinel")?(f=x.jsx("header",{className:rn.sectionHead,children:x.jsx("h2",{children:"Последние достижения"})}),i[5]=f):f=i[5];let h;return i[6]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsxs("main",{className:rn.page,children:[o,c,x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[f,x.jsx("div",{className:rn.recentList,children:GN.map(kN)})]})})]}),i[6]=h):h=i[6],h}function kN(i){return x.jsxs("article",{className:`card ${rn.recentItem}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.text}),x.jsx("span",{className:rn.date,children:i.date})]}),x.jsx("span",{className:rn.reward,children:i.reward})]},i.title)}function jN(i){return x.jsxs("article",{className:`card ${rn.highlightCard}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("span",{className:rn.statValue,children:i.value}),x.jsx("p",{children:i.label})]})]},i.label)}function XN(i){return x.jsxs("section",{className:rn.categoryBlock,children:[x.jsx("header",{children:x.jsx("h2",{children:i.title})}),x.jsx("div",{className:rn.cardGrid,children:i.achievements.map(qN)})]},i.id)}function qN(i){return x.jsxs("article",{className:`card ${rn.achievementCard} ${i.earned?rn.earned:""}`,children:[x.jsxs("header",{className:rn.cardHead,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.text})]})]}),x.jsxs("div",{className:rn.cardBody,children:[x.jsx("span",{className:rn.reward,children:i.reward}),i.date&&x.jsx("span",{className:rn.date,children:i.date}),typeof i.progress=="number"&&x.jsxs("div",{className:rn.progressInfo,children:[x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})}),x.jsxs("span",{children:[i.progress,"%"]})]})]})]},i.title)}function WN(i,e){return x.jsx("button",{type:"button",className:`${rn.tabBtn} ${e===0?rn.active:""}`,children:i.title},i.id)}function YN(i){return x.jsxs("div",{children:[x.jsx("dt",{className:rn.statValue,children:i.value}),x.jsx("dd",{children:i.label})]},i.label)}const ZN="_page_1h86t_1",KN="_profileHero_1h86t_23",$N="_profileRow_1h86t_45",QN="_avatarBlock_1h86t_59",JN="_iconBtn_1h86t_91",eD="_profileInfo_1h86t_131",tD="_statRow_1h86t_173",nD="_statValue_1h86t_199",iD="_levelBar_1h86t_229",aD="_heroActions_1h86t_263",sD="_tabRow_1h86t_275",rD="_tabBtn_1h86t_299",lD="_active_1h86t_337",oD="_grid_1h86t_351",cD="_card_1h86t_367",uD="_cardHead_1h86t_391",fD="_linkBtn_1h86t_417",dD="_cardBody_1h86t_449",hD="_progressItem_1h86t_461",pD="_activityItem_1h86t_519",mD="_statGrid_1h86t_565",xD="_statCard_1h86t_579",_D="_goalItem_1h86t_615",gD="_goalProgress_1h86t_637",vD="_achievementGrid_1h86t_667",yD="_achievementCard_1h86t_679",SD="_earned_1h86t_713",bD="_courseGrid_1h86t_759",MD="_courseCard_1h86t_771",ED="_courseHead_1h86t_797",TD="_courseMeta_1h86t_837",AD="_courseActions_1h86t_853",RD="_filters_1h86t_865",CD="_timelineBlock_1h86t_885",wD="_timelineItem_1h86t_897",ND="_formGrid_1h86t_953",DD="_formField_1h86t_967",UD="_checkbox_1h86t_1033",LD="_formActions_1h86t_1063",ke={page:ZN,profileHero:KN,profileRow:$N,avatarBlock:QN,iconBtn:JN,profileInfo:eD,statRow:tD,statValue:nD,levelBar:iD,heroActions:aD,tabRow:sD,tabBtn:rD,active:lD,grid:oD,card:cD,cardHead:uD,linkBtn:fD,cardBody:dD,progressItem:hD,activityItem:pD,statGrid:mD,statCard:xD,goalItem:_D,goalProgress:gD,achievementGrid:vD,achievementCard:yD,earned:SD,courseGrid:bD,courseCard:MD,courseHead:ED,courseMeta:TD,courseActions:AD,filters:RD,timelineBlock:CD,timelineItem:wD,formGrid:ND,formField:DD,checkbox:UD,formActions:LD},OD=[{value:"7",label:"Дней streak"},{value:"1 250",label:"XP"},{value:"127",label:"Решено задач"},{value:"5",label:"Курсов"}],PD=[{title:"Основы Python",progress:75},{title:"Структуры данных",progress:45},{title:"ООП и модули",progress:20}],BD=[{icon:"fas fa-check-circle",title:'Решена задача "Калькулятор"',meta:"2 часа назад • +10 XP"},{icon:"fas fa-book",title:'Завершен урок "Функции"',meta:"5 часов назад • +15 XP"},{icon:"fas fa-trophy",title:'Получено достижение "Первые шаги"',meta:"1 день назад • +50 XP"},{icon:"fas fa-fire",title:"Поддержан streak 7 дней",meta:"2 дня назад • +25 XP"}],FD=[{icon:"fas fa-tasks",value:"23",label:"Задач решено"},{icon:"fas fa-clock",value:"8.5",label:"Часов изучения"},{icon:"fas fa-star",value:"340",label:"XP заработано"},{icon:"fas fa-fire",value:"7",label:"Дней streak"}],zD=[{title:"Изучить основы Python",text:"Завершить курс до конца месяца",progress:75},{title:"Решить 100 задач",text:"Достичь отметки в 100 решенных задач",progress:127}],ID=[{icon:"fas fa-fire",title:"Первые шаги",text:"Завершите первый урок",date:"15 января 2024",earned:!0},{icon:"fas fa-code",title:"Программист",text:"Напишите 10 программ",date:"20 января 2024",earned:!0},{icon:"fas fa-fire",title:"Streak Master",text:"Поддерживайте streak 7 дней",date:"22 января 2024",earned:!0},{icon:"fas fa-trophy",title:"Мастер Python",text:"Завершите все курсы",progress:30,earned:!1}],HD=[{title:"Основы Python",description:"Изучите базовые концепции программирования и синтаксис Python",progress:75,lessons:"12/15 уроков",hours:"2.5/3 часа",reward:"375/500 XP"},{title:"Структуры данных",description:"Списки, словари, кортежи и работа с данными",progress:45,lessons:"9/20 уроков",hours:"2.5/5 часов",reward:"225/500 XP"}],GD=[{date:"Сегодня",items:[{icon:"fas fa-check-circle",title:'Решена задача "Калькулятор"',meta:"2 часа назад • +10 XP"},{icon:"fas fa-book",title:'Завершен урок "Функции"',meta:"5 часов назад • +15 XP"}]},{date:"Вчера",items:[{icon:"fas fa-trophy",title:'Получено достижение "Первые шаги"',meta:"1 день назад • +50 XP"}]}];function VD(){const i=Zi.c(38);let e;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsx("img",{src:"https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=U",alt:"Аватар пользователя"}),i[0]=e):e=i[0];let a;i[1]===Symbol.for("react.memo_cache_sentinel")?(a=x.jsxs("div",{className:ke.avatarBlock,children:[e,x.jsx("button",{type:"button",className:`btn btn-secondary ${ke.iconBtn}`,"aria-label":"Изменить фото",children:x.jsx("i",{className:"fas fa-camera","aria-hidden":"true"})})]}),i[1]=a):a=i[1];let r,o;i[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx("h1",{children:"Алексей Программистов"}),o=x.jsx("p",{children:"Python Developer"}),i[2]=r,i[3]=o):(r=i[2],o=i[3]);let c;i[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx("dl",{className:ke.statRow,children:OD.map(QD)}),i[4]=c):c=i[4];let f;i[5]===Symbol.for("react.memo_cache_sentinel")?(f=x.jsxs("div",{children:[x.jsx("span",{children:"Уровень 12"}),x.jsx("small",{children:"650 / 1000 XP"})]}),i[5]=f):f=i[5];let h;i[6]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsxs("div",{className:ke.profileInfo,children:[r,o,c,x.jsxs("div",{className:ke.levelBar,children:[f,x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:"65%"}})})]})]}),i[6]=h):h=i[6];let m;i[7]===Symbol.for("react.memo_cache_sentinel")?(m=x.jsxs("button",{type:"button",className:"btn btn-primary",children:[x.jsx("i",{className:"fas fa-edit","aria-hidden":"true"}),"Редактировать"]}),i[7]=m):m=i[7];let p;i[8]===Symbol.for("react.memo_cache_sentinel")?(p=x.jsx("section",{className:ke.profileHero,children:x.jsx("div",{className:"container",children:x.jsxs("div",{className:ke.profileRow,children:[a,h,x.jsxs("div",{className:ke.heroActions,children:[m,x.jsxs("button",{type:"button",className:"btn btn-secondary",children:[x.jsx("i",{className:"fas fa-share","aria-hidden":"true"}),"Поделиться"]})]})]})})}),i[8]=p):p=i[8];let g;i[9]===Symbol.for("react.memo_cache_sentinel")?(g=x.jsx("nav",{className:ke.tabRow,"aria-label":"Разделы профиля",children:["Обзор","Достижения","Курсы","Активность","Настройки"].map($D)}),i[9]=g):g=i[9];let _;i[10]===Symbol.for("react.memo_cache_sentinel")?(_=x.jsxs("header",{className:ke.cardHead,children:[x.jsx("h3",{children:"Прогресс обучения"}),x.jsx("button",{type:"button",className:ke.linkBtn,children:"Подробнее"})]}),i[10]=_):_=i[10];let y;i[11]===Symbol.for("react.memo_cache_sentinel")?(y=x.jsxs("article",{className:`card ${ke.card}`,children:[_,x.jsx("div",{className:ke.cardBody,children:PD.map(KD)})]}),i[11]=y):y=i[11];let b;i[12]===Symbol.for("react.memo_cache_sentinel")?(b=x.jsx("header",{className:ke.cardHead,children:x.jsx("h3",{children:"Последняя активность"})}),i[12]=b):b=i[12];let E;i[13]===Symbol.for("react.memo_cache_sentinel")?(E=x.jsxs("article",{className:`card ${ke.card}`,children:[b,x.jsx("div",{className:ke.cardBody,children:BD.map(ZD)})]}),i[13]=E):E=i[13];let A;i[14]===Symbol.for("react.memo_cache_sentinel")?(A=x.jsx("header",{className:ke.cardHead,children:x.jsx("h3",{children:"Статистика за неделю"})}),i[14]=A):A=i[14];let M;i[15]===Symbol.for("react.memo_cache_sentinel")?(M=x.jsxs("article",{className:`card ${ke.card}`,children:[A,x.jsx("div",{className:ke.cardBody,children:x.jsx("div",{className:ke.statGrid,children:FD.map(YD)})})]}),i[15]=M):M=i[15];let v;i[16]===Symbol.for("react.memo_cache_sentinel")?(v=x.jsxs("header",{className:ke.cardHead,children:[x.jsx("h3",{children:"Цели обучения"}),x.jsx("button",{type:"button",className:ke.linkBtn,children:"Изменить"})]}),i[16]=v):v=i[16];let w;i[17]===Symbol.for("react.memo_cache_sentinel")?(w=x.jsxs("div",{className:ke.grid,children:[y,E,M,x.jsxs("article",{className:`card ${ke.card}`,children:[v,x.jsx("div",{className:ke.cardBody,children:zD.map(WD)})]})]}),i[17]=w):w=i[17];let N;i[18]===Symbol.for("react.memo_cache_sentinel")?(N=x.jsxs("header",{className:ke.cardHead,children:[x.jsx("h3",{children:"Достижения"}),x.jsx("span",{children:"Получено: 8 из 25"})]}),i[18]=N):N=i[18];let P;i[19]===Symbol.for("react.memo_cache_sentinel")?(P=x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:"32%"}})}),i[19]=P):P=i[19];let G;i[20]===Symbol.for("react.memo_cache_sentinel")?(G=x.jsxs("article",{className:`card ${ke.card}`,children:[N,x.jsxs("div",{className:ke.cardBody,children:[P,x.jsx("div",{className:ke.achievementGrid,children:ID.map(qD)})]})]}),i[20]=G):G=i[20];let O;i[21]===Symbol.for("react.memo_cache_sentinel")?(O=x.jsx("header",{className:ke.cardHead,children:x.jsx("h3",{children:"Мои курсы"})}),i[21]=O):O=i[21];let F;i[22]===Symbol.for("react.memo_cache_sentinel")?(F=x.jsxs("article",{className:`card ${ke.card}`,children:[O,x.jsx("div",{className:ke.cardBody,children:x.jsx("div",{className:ke.courseGrid,children:HD.map(XD)})})]}),i[22]=F):F=i[22];let K;i[23]===Symbol.for("react.memo_cache_sentinel")?(K=x.jsx("h3",{children:"История активности"}),i[23]=K):K=i[23];let U;i[24]===Symbol.for("react.memo_cache_sentinel")?(U=x.jsxs("select",{defaultValue:"week",children:[x.jsx("option",{value:"week",children:"За неделю"}),x.jsx("option",{value:"month",children:"За месяц"}),x.jsx("option",{value:"year",children:"За год"})]}),i[24]=U):U=i[24];let D;i[25]===Symbol.for("react.memo_cache_sentinel")?(D=x.jsxs("header",{className:ke.cardHead,children:[K,x.jsxs("div",{className:ke.filters,children:[U,x.jsxs("select",{defaultValue:"all",children:[x.jsx("option",{value:"all",children:"Все действия"}),x.jsx("option",{value:"lessons",children:"Уроки"}),x.jsx("option",{value:"tasks",children:"Задачи"}),x.jsx("option",{value:"achievements",children:"Достижения"})]})]})]}),i[25]=D):D=i[25];let k;i[26]===Symbol.for("react.memo_cache_sentinel")?(k=x.jsxs("article",{className:`card ${ke.card}`,children:[D,x.jsx("div",{className:ke.cardBody,children:GD.map(kD)})]}),i[26]=k):k=i[26];let Q;i[27]===Symbol.for("react.memo_cache_sentinel")?(Q=x.jsx("header",{className:ke.cardHead,children:x.jsx("h3",{children:"Настройки профиля"})}),i[27]=Q):Q=i[27];let re;i[28]===Symbol.for("react.memo_cache_sentinel")?(re=x.jsxs("label",{className:ke.formField,children:[x.jsx("span",{children:"Полное имя"}),x.jsx("input",{type:"text",defaultValue:"Алексей Программистов"})]}),i[28]=re):re=i[28];let pe;i[29]===Symbol.for("react.memo_cache_sentinel")?(pe=x.jsxs("label",{className:ke.formField,children:[x.jsx("span",{children:"Email"}),x.jsx("input",{type:"email",defaultValue:"alexey@example.com"})]}),i[29]=pe):pe=i[29];let ue;i[30]===Symbol.for("react.memo_cache_sentinel")?(ue=x.jsxs("label",{className:ke.formField,children:[x.jsx("span",{children:"О себе"}),x.jsx("textarea",{rows:3,defaultValue:"Изучаю Python и мечтаю стать разработчиком"})]}),i[30]=ue):ue=i[30];let z;i[31]===Symbol.for("react.memo_cache_sentinel")?(z=x.jsxs("label",{className:ke.formField,children:[x.jsx("span",{children:"Ежедневная цель (задач)"}),x.jsx("input",{type:"number",min:"1",max:"20",defaultValue:"5"})]}),i[31]=z):z=i[31];let W;i[32]===Symbol.for("react.memo_cache_sentinel")?(W=x.jsx("span",{children:"Предпочитаемая сложность"}),i[32]=W):W=i[32];let X;i[33]===Symbol.for("react.memo_cache_sentinel")?(X=x.jsxs("label",{className:ke.formField,children:[W,x.jsxs("select",{defaultValue:"medium",children:[x.jsx("option",{value:"easy",children:"Легко"}),x.jsx("option",{value:"medium",children:"Средне"}),x.jsx("option",{value:"hard",children:"Сложно"})]})]}),i[33]=X):X=i[33];let _e;i[34]===Symbol.for("react.memo_cache_sentinel")?(_e=x.jsxs("label",{className:ke.checkbox,children:[x.jsx("input",{type:"checkbox",defaultChecked:!0}),x.jsx("span",{children:"Уведомления о новых задачах"})]}),i[34]=_e):_e=i[34];let ye;i[35]===Symbol.for("react.memo_cache_sentinel")?(ye=x.jsxs("label",{className:ke.checkbox,children:[x.jsx("input",{type:"checkbox",defaultChecked:!0}),x.jsx("span",{children:"Публичный профиль"})]}),i[35]=ye):ye=i[35];let B;i[36]===Symbol.for("react.memo_cache_sentinel")?(B=x.jsxs("label",{className:ke.checkbox,children:[x.jsx("input",{type:"checkbox"}),x.jsx("span",{children:"Показывать прогресс друзьям"})]}),i[36]=B):B=i[36];let te;return i[37]===Symbol.for("react.memo_cache_sentinel")?(te=x.jsxs("main",{className:ke.page,children:[p,x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[g,w,G,F,k,x.jsxs("article",{className:`card ${ke.card}`,children:[Q,x.jsx("div",{className:ke.cardBody,children:x.jsxs("form",{className:ke.formGrid,children:[re,pe,ue,z,X,_e,ye,B,x.jsxs("div",{className:ke.formActions,children:[x.jsx("button",{type:"button",className:"btn btn-primary",children:"Сохранить изменения"}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Сбросить"})]})]})})]})]})})]}),i[37]=te):te=i[37],te}function kD(i){return x.jsxs("div",{className:ke.timelineBlock,children:[x.jsx("strong",{children:i.date}),i.items.map(jD)]},i.date)}function jD(i){return x.jsxs("div",{className:ke.timelineItem,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("h4",{children:i.title}),x.jsx("p",{children:i.meta})]})]},i.title)}function XD(i){return x.jsxs("div",{className:ke.courseCard,children:[x.jsxs("div",{className:ke.courseHead,children:[x.jsx("h4",{children:i.title}),x.jsxs("span",{children:[i.progress,"%"]})]}),x.jsx("p",{children:i.description}),x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})}),x.jsxs("div",{className:ke.courseMeta,children:[x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-book","aria-hidden":"true"}),i.lessons]}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),i.hours]}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-trophy","aria-hidden":"true"}),i.reward]})]}),x.jsxs("div",{className:ke.courseActions,children:[x.jsx("button",{type:"button",className:"btn btn-primary",children:"Продолжить"}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Подробнее"})]})]},i.title)}function qD(i){return x.jsxs("div",{className:`${ke.achievementCard} ${i.earned?ke.earned:""}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("h4",{children:i.title}),x.jsx("p",{children:i.text}),i.date&&x.jsx("span",{children:i.date}),typeof i.progress=="number"&&x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})})]},i.title)}function WD(i){return x.jsxs("div",{className:ke.goalItem,children:[x.jsxs("div",{children:[x.jsx("h4",{children:i.title}),x.jsx("p",{children:i.text})]}),x.jsxs("div",{className:ke.goalProgress,children:[x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress%100}%`}})}),x.jsxs("span",{children:[i.progress,"%"]})]})]},i.title)}function YD(i){return x.jsxs("div",{className:ke.statCard,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("span",{className:ke.statValue,children:i.value}),x.jsx("span",{children:i.label})]})]},i.label)}function ZD(i){return x.jsxs("div",{className:ke.activityItem,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("h4",{children:i.title}),x.jsx("p",{children:i.meta})]})]},i.title)}function KD(i){return x.jsxs("div",{className:ke.progressItem,children:[x.jsxs("div",{children:[x.jsx("span",{children:i.title}),x.jsxs("span",{children:[i.progress,"%"]})]}),x.jsx("div",{className:"progress-track",children:x.jsx("span",{style:{width:`${i.progress}%`}})})]},i.title)}function $D(i,e){return x.jsx("button",{type:"button",className:`${ke.tabBtn} ${e===0?ke.active:""}`,children:i},i)}function QD(i){return x.jsxs("div",{children:[x.jsx("dt",{className:ke.statValue,children:i.value}),x.jsx("dd",{children:i.label})]},i.label)}const JD="_page_1h5xm_1",eU="_pageHead_1h5xm_23",tU="_statRow_1h5xm_65",nU="_statValue_1h5xm_91",iU="_alertBanner_1h5xm_121",aU="_tabRow_1h5xm_171",sU="_tabBtn_1h5xm_191",rU="_active_1h5xm_229",lU="_cardGrid_1h5xm_243",oU="_contactCard_1h5xm_257",cU="_phoneLink_1h5xm_339",uU="_availability_1h5xm_363",fU="_psychologistCard_1h5xm_379",dU="_psychologistInfo_1h5xm_427",hU="_specialty_1h5xm_453",pU="_rating_1h5xm_467",mU="_details_1h5xm_483",xU="_price_1h5xm_509",_U="_resourceCard_1h5xm_523",gU="_emergencyGrid_1h5xm_599",vU="_emergencyCard_1h5xm_613",yU="_emergencyNumber_1h5xm_673",SU="_safetyPlan_1h5xm_709",bU="_supportMessage_1h5xm_797",Qt={page:JD,pageHead:eU,statRow:tU,statValue:nU,alertBanner:iU,tabRow:aU,tabBtn:sU,active:rU,cardGrid:lU,contactCard:oU,phoneLink:cU,availability:uU,psychologistCard:fU,psychologistInfo:dU,specialty:hU,rating:pU,details:mU,price:xU,resourceCard:_U,emergencyGrid:gU,emergencyCard:vU,emergencyNumber:yU,safetyPlan:SU,supportMessage:bU},MU=[{icon:"fas fa-phone",title:"Телефон доверия",number:"8-800-2000-122",description:"Бесплатная круглосуточная психологическая помощь",available:"24/7",type:"phone"},{icon:"fas fa-comments",title:"Онлайн-чат",description:"Анонимная психологическая поддержка в чате",available:"Круглосуточно",type:"chat"},{icon:"fas fa-video",title:"Видеоконсультация",description:"Персональная консультация с психологом",available:"По записи",type:"video"}],EU=[{name:"Скорая помощь",number:"103",description:"Медицинская помощь в экстренных ситуациях"},{name:"Единая служба спасения",number:"112",description:"Единый номер для всех экстренных служб"}],TU=[{name:"Анна Петрова",specialty:"Кризисный психолог",experience:"8 лет",rating:"4.9",reviews:"127 отзывов",avatar:"https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=AP",languages:["Русский","Английский"],price:"Бесплатно"},{name:"Михаил Иванов",specialty:"Когнитивно-поведенческая терапия",experience:"6 лет",rating:"4.8",reviews:"89 отзывов",avatar:"https://via.placeholder.com/80x80/2196F3/FFFFFF?text=MI",languages:["Русский"],price:"Бесплатно"},{name:"Елена Сидорова",specialty:"Семейный психолог",experience:"10 лет",rating:"4.9",reviews:"156 отзывов",avatar:"https://via.placeholder.com/80x80/9C27B0/FFFFFF?text=ES",languages:["Русский","Французский"],price:"Бесплатно"}],AU=[{icon:"fas fa-book",title:"Статьи и материалы",description:"Полезные статьи о ментальном здоровье и стрессе"},{icon:"fas fa-head-side-virus",title:"Техники релаксации",description:"Упражнения для снижения тревожности и стресса"},{icon:"fas fa-users",title:"Группы поддержки",description:"Онлайн-встречи с людьми, переживающими похожие трудности"}];function RU(){const i=Zi.c(20),[e,a]=ve.useState("contacts");let r;i[0]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsxs("div",{children:[x.jsx("h1",{children:"Психологическая поддержка"}),x.jsx("p",{children:"Мы здесь, чтобы помочь вам в трудную минуту. Вы не одни."})]}),i[0]=r):r=i[0];let o;i[1]===Symbol.for("react.memo_cache_sentinel")?(o=x.jsxs("header",{className:Qt.pageHead,children:[r,x.jsxs("dl",{className:Qt.statRow,children:[x.jsxs("div",{children:[x.jsx("dt",{className:Qt.statValue,children:"24/7"}),x.jsx("dd",{children:"Поддержка"})]}),x.jsxs("div",{children:[x.jsx("dt",{className:Qt.statValue,children:"100%"}),x.jsx("dd",{children:"Анонимно"})]}),x.jsxs("div",{children:[x.jsx("dt",{className:Qt.statValue,children:"0₽"}),x.jsx("dd",{children:"Бесплатно"})]})]})]}),i[1]=o):o=i[1];let c;i[2]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsxs("div",{className:`card ${Qt.alertBanner}`,children:[x.jsx("i",{className:"fas fa-exclamation-triangle","aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("h3",{children:"Важно!"}),x.jsx("p",{children:"Если вы испытываете острые суицидальные мысли или находитесь в опасности, немедленно обратитесь в экстренные службы."})]})]}),i[2]=c):c=i[2];let f;i[3]===Symbol.for("react.memo_cache_sentinel")?(f=[{id:"contacts",label:"Контакты"},{id:"psychologists",label:"Психологи"},{id:"resources",label:"Ресурсы"},{id:"emergency",label:"Экстренная помощь"}],i[3]=f):f=i[3];let h,m;i[4]!==e?(h=x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[o,c,x.jsx("div",{className:`card ${Qt.tabRow}`,children:f.map(E=>x.jsx("button",{type:"button",className:`${Qt.tabBtn} ${e===E.id?Qt.active:""}`,onClick:()=>a(E.id),children:E.label},E.id))})]})}),m=e==="contacts"&&x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsx("div",{className:Qt.cardGrid,children:MU.map(DU)})})}),i[4]=e,i[5]=h,i[6]=m):(h=i[5],m=i[6]);let p;i[7]!==e?(p=e==="psychologists"&&x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsx("div",{className:Qt.cardGrid,children:TU.map(NU)})})}),i[7]=e,i[8]=p):p=i[8];let g;i[9]!==e?(g=e==="resources"&&x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsx("div",{className:Qt.cardGrid,children:AU.map(wU)})})}),i[9]=e,i[10]=g):g=i[10];let _;i[11]!==e?(_=e==="emergency"&&x.jsx("section",{className:"section",children:x.jsxs("div",{className:"container",children:[x.jsx("div",{className:Qt.emergencyGrid,children:EU.map(CU)}),x.jsxs("div",{className:`card ${Qt.safetyPlan}`,children:[x.jsx("h3",{children:"План безопасности"}),x.jsxs("ul",{children:[x.jsx("li",{children:"Сохраните номера экстренных служб в быстром наборе"}),x.jsx("li",{children:"Расскажите близкому человеку о своем состоянии"}),x.jsx("li",{children:"Обратитесь к психологу при первых признаках стресса"}),x.jsx("li",{children:"Помните: обращаться за помощью - это нормально"})]})]})]})}),i[11]=e,i[12]=_):_=i[12];let y;i[13]===Symbol.for("react.memo_cache_sentinel")?(y=x.jsx("section",{className:"section",children:x.jsx("div",{className:"container",children:x.jsxs("div",{className:`card ${Qt.supportMessage}`,children:[x.jsx("i",{className:"fas fa-hands-helping","aria-hidden":"true"}),x.jsxs("div",{children:[x.jsx("h2",{children:"Вы не одни"}),x.jsx("p",{children:"Каждый человек иногда сталкивается с трудностями. Обращение за помощью - это проявление силы и заботы о себе. Наши психологи готовы выслушать и поддержать вас в любой ситуации."})]})]})})}),i[13]=y):y=i[13];let b;return i[14]!==h||i[15]!==m||i[16]!==p||i[17]!==g||i[18]!==_?(b=x.jsxs("main",{className:Qt.page,children:[h,m,p,g,_,y]}),i[14]=h,i[15]=m,i[16]=p,i[17]=g,i[18]=_,i[19]=b):b=i[19],b}function CU(i){return x.jsxs("article",{className:`card ${Qt.emergencyCard}`,children:[x.jsx("i",{className:"fas fa-exclamation-circle","aria-hidden":"true"}),x.jsx("h3",{children:i.name}),x.jsx("a",{href:`tel:${i.number}`,className:Qt.emergencyNumber,children:i.number}),x.jsx("p",{children:i.description}),x.jsx("button",{type:"button",className:"btn btn-primary",children:"Позвонить сейчас"})]},i.name)}function wU(i){return x.jsxs("article",{className:`card ${Qt.resourceCard}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),x.jsx("button",{type:"button",className:"btn btn-secondary",children:"Изучить"})]},i.title)}function NU(i){return x.jsxs("article",{className:`card ${Qt.psychologistCard}`,children:[x.jsx("img",{src:i.avatar,alt:i.name}),x.jsxs("div",{className:Qt.psychologistInfo,children:[x.jsx("h3",{children:i.name}),x.jsx("p",{className:Qt.specialty,children:i.specialty}),x.jsxs("div",{className:Qt.rating,children:[x.jsx("i",{className:"fas fa-star","aria-hidden":"true"}),x.jsxs("span",{children:[i.rating," (",i.reviews,")"]})]}),x.jsxs("div",{className:Qt.details,children:[x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-briefcase","aria-hidden":"true"}),i.experience]}),x.jsxs("span",{children:[x.jsx("i",{className:"fas fa-language","aria-hidden":"true"}),i.languages.join(", ")]})]}),x.jsx("div",{className:Qt.price,children:i.price}),x.jsx("button",{type:"button",className:"btn btn-primary",children:"Записаться на консультацию"})]})]},i.name)}function DU(i){return x.jsxs("article",{className:`card ${Qt.contactCard}`,children:[x.jsx("i",{className:i.icon,"aria-hidden":"true"}),x.jsx("h3",{children:i.title}),x.jsx("p",{children:i.description}),i.number&&x.jsx("a",{href:`tel:${i.number}`,className:Qt.phoneLink,children:i.number}),x.jsxs("div",{className:Qt.availability,children:[x.jsx("i",{className:"fas fa-clock","aria-hidden":"true"}),i.available]}),x.jsx("button",{type:"button",className:`btn ${i.type==="phone"?"btn-primary":"btn-secondary"}`,children:i.type==="phone"?"Позвонить":i.type==="chat"?"Начать чат":"Записаться"})]},i.title)}function UU(){const i=Zi.c(8);let e;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=x.jsx(Vg,{}),i[0]=e):e=i[0];let a;i[1]===Symbol.for("react.memo_cache_sentinel")?(a=x.jsx(us,{path:"/",element:x.jsx(Mg,{})}),i[1]=a):a=i[1];let r;i[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx(us,{path:"/courses",element:x.jsx(ew,{})}),i[2]=r):r=i[2];let o;i[3]===Symbol.for("react.memo_cache_sentinel")?(o=x.jsx(us,{path:"/practice",element:x.jsx(iN,{})}),i[3]=o):o=i[3];let c;i[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx(us,{path:"/achievements",element:x.jsx(VN,{})}),i[4]=c):c=i[4];let f;i[5]===Symbol.for("react.memo_cache_sentinel")?(f=x.jsx(us,{path:"/profile",element:x.jsx(VD,{})}),i[5]=f):f=i[5];let h;i[6]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsx(us,{path:"*",element:x.jsx(Mg,{})}),i[6]=h):h=i[6];let m;return i[7]===Symbol.for("react.memo_cache_sentinel")?(m=x.jsx(Zb,{children:x.jsxs("div",{className:"app-shell",children:[e,x.jsx("main",{children:x.jsxs(Ab,{children:[a,r,o,c,f,h,x.jsx(us,{path:"/support",element:x.jsx(RU,{})})]})})]})}),i[7]=m):m=i[7],m}US.createRoot(document.getElementById("root")).render(x.jsx(ve.StrictMode,{children:x.jsx(UU,{})}));
