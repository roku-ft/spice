(function(x,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(x=typeof globalThis<"u"?globalThis:x||self,u(x.spice={},x.React))})(this,function(x,u){"use strict";const vn="";var Q={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function $e(){if(de)return M;de=1;var o=u,t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(l,_,h){var v,y={},R=null,I=null;h!==void 0&&(R=""+h),_.key!==void 0&&(R=""+_.key),_.ref!==void 0&&(I=_.ref);for(v in _)n.call(_,v)&&!c.hasOwnProperty(v)&&(y[v]=_[v]);if(l&&l.defaultProps)for(v in _=l.defaultProps,_)y[v]===void 0&&(y[v]=_[v]);return{$$typeof:t,type:l,key:R,ref:I,props:y,_owner:i.current}}return M.Fragment=s,M.jsx=d,M.jsxs=d,M}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function et(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){var o=u,t=Symbol.for("react.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),z=Symbol.iterator,U="@@iterator";function ne(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[U];return typeof r=="function"?r:null}var F=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(e){{for(var r=arguments.length,a=new Array(r>1?r-1:0),p=1;p<r;p++)a[p-1]=arguments[p];At("error",e,a)}}function At(e,r,a){{var p=F.ReactDebugCurrentFrame,b=p.getStackAddendum();b!==""&&(r+="%s",a=a.concat([b]));var E=a.map(function(g){return String(g)});E.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,E)}}var Mt=!1,kt=!1,Nt=!1,Wt=!1,Vt=!1,Oe;Oe=Symbol.for("react.module.reference");function Yt(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===c||Vt||e===i||e===h||e===v||Wt||e===I||Mt||kt||Nt||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===y||e.$$typeof===d||e.$$typeof===l||e.$$typeof===_||e.$$typeof===Oe||e.getModuleId!==void 0))}function zt(e,r,a){var p=e.displayName;if(p)return p;var b=r.displayName||r.name||"";return b!==""?a+"("+b+")":a}function Pe(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case s:return"Portal";case c:return"Profiler";case i:return"StrictMode";case h:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var r=e;return Pe(r)+".Consumer";case d:var a=e;return Pe(a._context)+".Provider";case _:return zt(e,e.render,"ForwardRef");case y:var p=e.displayName||null;return p!==null?p:O(e.type)||"Memo";case R:{var b=e,E=b._payload,g=b._init;try{return O(g(E))}catch{return null}}}return null}var D=Object.assign,W=0,Fe,De,Ie,Le,Ae,Me,ke;function Ne(){}Ne.__reactDisabledLog=!0;function Ut(){{if(W===0){Fe=console.log,De=console.info,Ie=console.warn,Le=console.error,Ae=console.group,Me=console.groupCollapsed,ke=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ne,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Bt(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:Fe}),info:D({},e,{value:De}),warn:D({},e,{value:Ie}),error:D({},e,{value:Le}),group:D({},e,{value:Ae}),groupCollapsed:D({},e,{value:Me}),groupEnd:D({},e,{value:ke})})}W<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var re=F.ReactCurrentDispatcher,oe;function B(e,r,a){{if(oe===void 0)try{throw Error()}catch(b){var p=b.stack.trim().match(/\n( *(at )?)/);oe=p&&p[1]||""}return`
`+oe+e}}var se=!1,H;{var Ht=typeof WeakMap=="function"?WeakMap:Map;H=new Ht}function We(e,r){if(!e||se)return"";{var a=H.get(e);if(a!==void 0)return a}var p;se=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=re.current,re.current=null,Ut();try{if(r){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(P){p=P}Reflect.construct(e,[],g)}else{try{g.call()}catch(P){p=P}e.call(g.prototype)}}else{try{throw Error()}catch(P){p=P}e()}}catch(P){if(P&&p&&typeof P.stack=="string"){for(var m=P.stack.split(`
`),C=p.stack.split(`
`),S=m.length-1,T=C.length-1;S>=1&&T>=0&&m[S]!==C[T];)T--;for(;S>=1&&T>=0;S--,T--)if(m[S]!==C[T]){if(S!==1||T!==1)do if(S--,T--,T<0||m[S]!==C[T]){var j=`
`+m[S].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,j),j}while(S>=1&&T>=0);break}}}finally{se=!1,re.current=E,Bt(),Error.prepareStackTrace=b}var A=e?e.displayName||e.name:"",qe=A?B(A):"";return typeof e=="function"&&H.set(e,qe),qe}function Gt(e,r,a){return We(e,!1)}function Jt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,a){if(e==null)return"";if(typeof e=="function")return We(e,Jt(e));if(typeof e=="string")return B(e);switch(e){case h:return B("Suspense");case v:return B("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return Gt(e.render);case y:return G(e.type,r,a);case R:{var p=e,b=p._payload,E=p._init;try{return G(E(b),r,a)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Ve={},Ye=F.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,a=G(e.type,e._source,r?r.type:null);Ye.setExtraStackFrame(a)}else Ye.setExtraStackFrame(null)}function Kt(e,r,a,p,b){{var E=Function.call.bind(J);for(var g in e)if(E(e,g)){var m=void 0;try{if(typeof e[g]!="function"){var C=Error((p||"React class")+": "+a+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[g]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}m=e[g](r,g,p,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(S){m=S}m&&!(m instanceof Error)&&(K(b),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",a,g,typeof m),K(null)),m instanceof Error&&!(m.message in Ve)&&(Ve[m.message]=!0,K(b),w("Failed %s type: %s",a,m.message),K(null))}}}var Qt=Array.isArray;function ie(e){return Qt(e)}function Xt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,a=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return a}}function Zt(e){try{return ze(e),!1}catch{return!0}}function ze(e){return""+e}function Ue(e){if(Zt(e))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xt(e)),ze(e)}var V=F.ReactCurrentOwner,qt={key:!0,ref:!0,__self:!0,__source:!0},Be,He,ae;ae={};function $t(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function en(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function tn(e,r){if(typeof e.ref=="string"&&V.current&&r&&V.current.stateNode!==r){var a=O(V.current.type);ae[a]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O(V.current.type),e.ref),ae[a]=!0)}}function nn(e,r){{var a=function(){Be||(Be=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"key",{get:a,configurable:!0})}}function rn(e,r){{var a=function(){He||(He=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"ref",{get:a,configurable:!0})}}var on=function(e,r,a,p,b,E,g){var m={$$typeof:t,type:e,key:r,ref:a,props:g,_owner:E};return m._store={},Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m};function sn(e,r,a,p,b){{var E,g={},m=null,C=null;a!==void 0&&(Ue(a),m=""+a),en(r)&&(Ue(r.key),m=""+r.key),$t(r)&&(C=r.ref,tn(r,b));for(E in r)J.call(r,E)&&!qt.hasOwnProperty(E)&&(g[E]=r[E]);if(e&&e.defaultProps){var S=e.defaultProps;for(E in S)g[E]===void 0&&(g[E]=S[E])}if(m||C){var T=typeof e=="function"?e.displayName||e.name||"Unknown":e;m&&nn(g,T),C&&rn(g,T)}return on(e,m,C,b,p,V.current,g)}}var ce=F.ReactCurrentOwner,Ge=F.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,a=G(e.type,e._source,r?r.type:null);Ge.setExtraStackFrame(a)}else Ge.setExtraStackFrame(null)}var ue;ue=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function Je(){{if(ce.current){var e=O(ce.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function an(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),a=e.lineNumber;return`

Check your code at `+r+":"+a+"."}return""}}var Ke={};function cn(e){{var r=Je();if(!r){var a=typeof e=="string"?e:e.displayName||e.name;a&&(r=`

Check the top-level render call using <`+a+">.")}return r}}function Qe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var a=cn(r);if(Ke[a])return;Ke[a]=!0;var p="";e&&e._owner&&e._owner!==ce.current&&(p=" It was passed a child from "+O(e._owner.type)+"."),L(e),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,p),L(null)}}function Xe(e,r){{if(typeof e!="object")return;if(ie(e))for(var a=0;a<e.length;a++){var p=e[a];le(p)&&Qe(p,r)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var b=ne(e);if(typeof b=="function"&&b!==e.entries)for(var E=b.call(e),g;!(g=E.next()).done;)le(g.value)&&Qe(g.value,r)}}}function un(e){{var r=e.type;if(r==null||typeof r=="string")return;var a;if(typeof r=="function")a=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===_||r.$$typeof===y))a=r.propTypes;else return;if(a){var p=O(r);Kt(a,e.props,"prop",p,e)}else if(r.PropTypes!==void 0&&!ue){ue=!0;var b=O(r);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ln(e){{for(var r=Object.keys(e.props),a=0;a<r.length;a++){var p=r[a];if(p!=="children"&&p!=="key"){L(e),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),L(null);break}}e.ref!==null&&(L(e),w("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}function Ze(e,r,a,p,b,E){{var g=Yt(e);if(!g){var m="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(m+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var C=an(b);C?m+=C:m+=Je();var S;e===null?S="null":ie(e)?S="array":e!==void 0&&e.$$typeof===t?(S="<"+(O(e.type)||"Unknown")+" />",m=" Did you accidentally export a JSX literal instead of a component?"):S=typeof e,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",S,m)}var T=sn(e,r,a,b,E);if(T==null)return T;if(g){var j=r.children;if(j!==void 0)if(p)if(ie(j)){for(var A=0;A<j.length;A++)Xe(j[A],e);Object.freeze&&Object.freeze(j)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xe(j,e)}return e===n?ln(T):un(T),T}}function dn(e,r,a){return Ze(e,r,a,!0)}function fn(e,r,a){return Ze(e,r,a,!1)}var _n=fn,pn=dn;k.Fragment=n,k.jsx=_n,k.jsxs=pn}()),k}process.env.NODE_ENV==="production"?Q.exports=$e():Q.exports=et();var f=Q.exports;const _e={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},pe=u.createContext(!0),ve=u.createContext(o=>!o),tt=({children:o})=>{const[t,s]=u.useState(!0);return f.jsx(pe.Provider,{value:t,children:f.jsx(ve.Provider,{value:s,children:o})})},nt=({children:o})=>{const t=u.useContext(pe);return f.jsx("div",{className:`${_e.spice_wrapper} ${t?_e.spice_wrapper_hidden:""}`,children:o})},rt=({children:o})=>f.jsx(tt,{children:f.jsx(nt,{children:o})}),ot=()=>u.useContext(ve),X={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},st=({className:o,children:t,aside:s,isSticky:n=!1})=>{const i=ot();return u.useEffect(()=>(n&&i(()=>!1),()=>{i(()=>!0)}),[]),f.jsxs("div",{className:o||"",children:[s.index===1&&f.jsx("div",{className:X.spice_aside_main,children:t}),f.jsx("aside",{className:`${X.spice_aside_aside} ${s.className?s.className:""}`,children:s.chidren}),s.index===0&&f.jsx("div",{className:X.spice_aside_main,children:t})]})},Z={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},he=({formProps:o,className:t})=>f.jsx("input",{...o,className:`${Z.spice_form_input} ${t||""}`}),it=({formProps:o})=>{const{isSelect:t,...s}=o;if(!t)return;const n=t.options.map(d=>f.jsx("option",{value:d,children:d},d)),i=()=>{const d=t.defaultValue;return d?f.jsx("option",{hidden:!0,children:d}):null},c=()=>{const d=t.defaultSelectedIndex;if(d)return t.options[d]};return f.jsxs("select",{...s,className:Z.spice_form_select,defaultValue:c(),children:[f.jsx(i,{}),n]})},me=({layoutType:o,formPropsArr:t,label:s,FormItem:n,errors:i})=>{const c=d=>!i||!i[d]?null:i[d];if(o==="block")return f.jsxs(f.Fragment,{children:[s&&f.jsx("label",{htmlFor:t[0].id,children:s}),f.jsx(n,{formProps:t[0]}),c(0)]});if(o==="flex")return f.jsxs(f.Fragment,{children:[s&&f.jsx("label",{htmlFor:t[0].id,children:s}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(n,{formProps:t[0]}),c(0)]}),f.jsxs("li",{children:[f.jsx(n,{formProps:t[1]}),c(1)]})]})]});if(o==="radio-check"){const d=t.map(l=>f.jsxs("li",{children:[f.jsx(n,{formProps:l,className:Z.spice_form_radioCheckInput}),f.jsx("label",{htmlFor:l.id,children:l.value})]},l.id));return f.jsxs(f.Fragment,{children:[s&&f.jsx("label",{children:s}),f.jsx("ul",{children:d}),c(0)]})}},at=({formProps:o})=>{const{isTextarea:t,...s}=o;if(t)return f.jsx("textarea",{...s,...t})},ct=({className:o,label:t,formProps:s,errors:n})=>{const i=s,c=i[0].type,d=i.length,l=!!i[0].isSelect,_=!!i[0].isTextarea;if(!(c==="radio"||c==="checkbox")&&d>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const h=y=>me({layoutType:d===1?"block":"flex",formPropsArr:i,label:t,FormItem:y,errors:n}),v=()=>l?h(it):_?h(at):c==="radio"||c==="checkbox"?me({layoutType:"radio-check",formPropsArr:i,label:t,FormItem:he,errors:n}):h(he);return f.jsx("fieldset",{className:`${o}`,children:f.jsx(v,{})})},q=o=>new Promise(t=>{o instanceof Promise?o.then(()=>{t(null)}):t(null)}),N={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},ut=({position:o,parent:t,content:s,callback:n,className:i})=>{const c=u.useRef(null),d=u.useRef(!1),[l,_]=u.useState(!1),[h,v]=u.useState(!0),y=()=>{d.current=!0,v(!1),_(!0),n!=null&&n.onEnter&&n.onEnter(c.current)},R=async()=>{d.current=!1,v(!0),n!=null&&n.onLeave&&await q(n.onLeave(c.current)),d.current||_(!1)};return f.jsxs("div",{onMouseEnter:y,onMouseLeave:R,onClick:R,className:`${N.spice_dropdown_wrapper} ${i||""}`,children:[t.children,f.jsx("div",{ref:c,className:`${N.spice_dropdown_content} ${l?"":N.spice_dropdown_content_hidden} ${h?N.spice_dropdown_content_pointerPrevent:""} ${N["spice_dropdown_"+o]}`,children:s.children})]})},ge=(o,t=[])=>{o>60&&(o=60);const s=Math.floor(1e3/o);let n=performance.now();const i=l=>{const _=l-n,h=_<=s;return h||(n=l-_%s),h},c={callback:null,isPlay:!1,id:0},d=l=>{c.id=requestAnimationFrame(d),!i(l)&&c.callback&&c.isPlay&&c.callback()};return u.useEffect(()=>(c.id=requestAnimationFrame(d),()=>{cancelAnimationFrame(c.id)}),t),(l,_)=>{if(l==="play"){if(!_){console.warn("Callback function is required when 'play'");return}c.callback=_,c.isPlay=!0}else l==="pause"&&(c.isPlay=!1)}},lt={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},dt=({className:o,children:t,callback:s,fps:n=60,stopPropagation:i=!1,isOnClickReset:c=!1})=>{const d=u.useRef(null),l=u.useRef(null),_=u.useRef(),h=ge(n),v={target:d.current,children:l.current,x:0,y:0},y=w=>{v.target=d.current,v.children=l.current},R=w=>{_.current=w.currentTarget.getBoundingClientRect(),v.x=w.clientX-_.current.left-_.current.width/2,v.y=w.clientY-_.current.top-_.current.height/2},I=w=>{w.stopPropagation(),y(),R(w),h("play",()=>{s.onMove(v)})},z=w=>{w.stopPropagation(),R(w)},U=w=>{w.stopPropagation(),h("pause"),s.onLeave&&s.onLeave(v)},ne=w=>{U(w)},F=w=>{c&&U(w)};return f.jsx("div",{onMouseEnter:I,onMouseMove:z,onMouseLeave:ne,onClick:F,className:o||"",ref:d,children:f.jsx("div",{ref:l,className:i?lt.spice_magnet_stopPropagation:"",children:t})})},$={spice_thumbnail_wrapper:"_spice_thumbnail_wrapper_1qqot_1",spice_thumbnail_view:"_spice_thumbnail_view_1qqot_5",spice_thumbnail_golden:"_spice_thumbnail_golden_1qqot_26",spice_thumbnail_silver:"_spice_thumbnail_silver_1qqot_30",spice_thumbnail_platinum:"_spice_thumbnail_platinum_1qqot_34","spice_thumbnail_16-9":"_spice_thumbnail_16-9_1qqot_38",spice_thumbnail_square:"_spice_thumbnail_square_1qqot_42","spice_thumbnail_3-2":"_spice_thumbnail_3-2_1qqot_46","spice_thumbnail_4-3":"_spice_thumbnail_4-3_1qqot_50"},ft=({ratio:o,children:t,className:s})=>{const n=["golden","silver","platinum","16-9","square","3-2","4-3"];let i=n.includes(o),c=typeof o=="number"&&o>0;if(!i&&!c)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${n.join(" | ")} or a number greater than 0.`);return f.jsx("div",{className:`${$.spice_thumbnail_wrapper} ${s||""}`,children:f.jsx("div",{className:`${$.spice_thumbnail_view} ${i?$["spice_thumbnail_"+o]:""}`,style:c?{paddingTop:`${o}%`}:{},children:t})})},we=o=>{const t=document.documentElement.style,s=document.body.style;o==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",s.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",s.overflow="")},_t={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},pt=({children:o,className:t,dialog:s,callback:n})=>{const i=u.useRef(null),c=()=>{we("add"),i.current.showModal(),n!=null&&n.onOpen&&n.onOpen(i.current)},d=async()=>{n!=null&&n.onClose&&await q(n.onClose(i.current)),we("remove"),i.current.close()};return u.useEffect(()=>{const l=i.current.querySelectorAll(".spice__modal_close");l&&l.forEach(_=>{_.addEventListener("click",()=>{d()})})},[]),u.useEffect(()=>{const l=_=>{var v;((v=i.current)==null?void 0:v.hasAttribute("open"))&&_.key==="Escape"&&d()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[]),f.jsxs(f.Fragment,{children:[f.jsx("button",{className:t||"",onClick:()=>{c()},children:o}),f.jsx("dialog",{ref:i,onClick:l=>{l.target===i.current&&d()},className:`${_t.spice_modal_dialog} ${s.className?s.className:""}`,children:s.children})]})},vt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},be=u.createContext(vt),ye=u.createContext(()=>{}),ht=({children:o,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[s,n]=u.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return f.jsx(be.Provider,{value:s,children:f.jsx(ye.Provider,{value:n,children:o})})},Ee=()=>u.useContext(be),ee=()=>u.useContext(ye),mt=({children:o,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=ee(),i=Ee(),c=()=>{i.current===t||i.isLeaving||n(d=>({...d,isLeaving:!0,isAnimation:!0,prev:d.current,next:t}))};return f.jsx("button",{onClick:c,className:s||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":i.current===t,children:o})},gt={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},xe=({content:o,isOpen:t})=>{const s=o.querySelectorAll("a,button");if(!s)return;const n=t?"0":"-1";s.forEach(i=>{i.setAttribute("tabindex",n)})},wt=Object.freeze(Object.defineProperty({__proto__:null,Button:mt,Content:({children:o,value:t,className:s,callback:n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const i=u.useRef(!0),c=u.useRef(null),d=ee(),l=Ee(),_=l.current===t&&!l.isLeaving;return u.useEffect(()=>{if(i.current){i.current=!1;return}if(!l.isAnimation){_&&n!=null&&n.onReset&&n.onReset(c.current);return}l.prev===t&&(async()=>(n!=null&&n.onClose&&await q(n.onClose(c.current)),d(h=>({...h,isLeaving:!1,prev:"",current:h.next,next:""}))))(),_&&n!=null&&n.onOpen&&n.onOpen(c.current)},[l,d,n,t,_]),u.useEffect(()=>{xe({content:c.current,isOpen:l.current===t})},[l,t]),f.jsx("div",{ref:c,className:`${l.current!==t?gt.spice_tab_hidden:""} ${s||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":l.current!==t,children:o})},Context:ht,useTabSwitch:()=>{const o=ee();return(t,s)=>{o(n=>({isAnimation:s,isLeaving:s,prev:s?n.current:"",current:s?n.current:t,next:s?t:""}))}}},Symbol.toStringTag,{value:"Module"})),bt={target:"",toggle:!1,defaultValue:[]},Re=u.createContext(bt),Se=u.createContext(()=>{}),yt=({children:o,defaultValue:t})=>{const[s,n]=u.useState({target:"",toggle:!1,defaultValue:t});return f.jsx(Re.Provider,{value:s,children:f.jsx(Se.Provider,{value:n,children:o})})},Te=()=>u.useContext(Re),Et=()=>u.useContext(Se),xt=({children:o,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=Te(),i=Et(),c=!!n.defaultValue.find(_=>_===t),[d,l]=u.useState(c);return f.jsx("button",{className:s||"",onClick:()=>{i(_=>({..._,toggle:d,target:t})),l(!d)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":d,children:o})},Ce={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},je=({targetRef:o,callback:t,debounce:s,dependencies:n=[]})=>{const i=u.useRef(0),c=u.useRef(!0);u.useEffect(()=>{const d=new ResizeObserver(_=>{clearTimeout(i.current),i.current=setTimeout(()=>{if(c.current){c.current=!1;return}t(_[0].target)},s)}),l=o.current;if(l)return d.observe(l),()=>{d.unobserve(l),clearTimeout(i.current)}},n)},Rt=Object.freeze(Object.defineProperty({__proto__:null,Button:xt,Content:({value:o,callback:t,children:s,className:n})=>{if(o==="")throw new Error("Please set the value to something other than an empty string.");const i=u.useRef(!0),c=u.useRef(null),d=u.useRef(null),l=Te(),_=!!l.defaultValue.find(y=>y===o),[h,v]=u.useState(_);return u.useEffect(()=>{l.target===o&&v(!h)},[l.target,l.toggle]),u.useEffect(()=>{if(i.current){i.current=!1;return}const y={height:d.current.getBoundingClientRect().height,target:c.current};h?t.onOpen(y):t.onClose(y)},[h]),u.useEffect(()=>{xe({content:c.current,isOpen:h})},[h]),je({targetRef:d,callback:y=>{const R=y.getBoundingClientRect().height;h&&(c.current.style.height=`${R}px`)},dependencies:[h],debounce:100}),f.jsx("div",{ref:c,className:`${Ce.spice_accordion_content} ${_?"":Ce.spice_accordion_hidden}`,id:`content-${o}`,"aria-labelledby":`button-${o}`,"aria-hidden":!h,children:f.jsx("div",{ref:d,className:n||"",children:s})})},Context:yt},Symbol.toStringTag,{value:"Module"})),St=typeof document<"u"?u.useLayoutEffect:u.useEffect,Tt=({targetRef:o,rootMargin:t="0px",threshold:s=0,once:n,callback:i,dependencies:c=[]})=>{const d={rootMargin:t,threshold:s};u.useEffect(()=>{const l=o==null?void 0:o.current;if(!l)return;const _=(v,y)=>{v.forEach(R=>{R.isIntersecting&&i.onEnter?(i.onEnter(R.target),n&&y.unobserve(R.target)):!R.isIntersecting&&i.onLeave&&i.onLeave(R.target)})},h=new IntersectionObserver(_,d);return h.observe(l),()=>{h.unobserve(l)}},c)},Y=({callback:o,debounce:t,dependencies:s=[]})=>{const n=u.useRef(0),i=u.useRef(0),c=()=>{clearTimeout(i.current),i.current=setTimeout(()=>{o({winW:window.innerWidth,winH:window.innerHeight,initWinW:n.current})},t)};u.useEffect(()=>(n.current=window.innerWidth,window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),clearTimeout(i.current)}),s)},Ct=({initWinW:o,winW:t,threshold:s})=>{let n=!(o<=s);t<=s?n&&window.location.reload():!n&&window.location.reload()},jt=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`,Ot=()=>{console.log(jt)},Pt=o=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const s=o>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==s&&t.setAttribute("content",s)},Ft=({reloadThresholds:o,isFixViewportForSmall:t=!0,areYouFun:s=!1})=>{const n=u.useCallback(i=>{t&&Pt(i)},[t]);Y({callback({initWinW:i,winW:c}){o&&o.forEach(d=>{Ct({initWinW:i,winW:c,threshold:d})}),n(c)},debounce:100,dependencies:[]}),u.useEffect(()=>{document.body.dataset.spiceRendered="true",n(window.innerWidth),s&&process.env.NODE_ENV!=="development"&&Ot()},[s,n])},Dt=()=>{const[o,t]=u.useState(null),s=()=>{const n=window.ontouchstart,i=navigator.maxTouchPoints;n!==void 0&&0<i?t(!0):t(!1)};return Y({callback(){s()},debounce:100,dependencies:[]}),u.useEffect(()=>{s()},[]),o},te="scroll",It=({threshold:o=0,debounce:t,dependencies:s=[]})=>{const n=u.useRef(null),[i,c]=u.useReducer((v,y)=>{switch(y.type){case te:return n.current=y.payload,y.payload;default:return v}},n.current),d=u.useRef(0),l=u.useRef(0),_=()=>window.scrollY||document.documentElement.scrollTop,h=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const v=_();v>d.current+o&&n.current!=="down"?c({type:te,payload:"down"}):v<d.current-o&&n.current!=="up"&&c({type:te,payload:"up"}),d.current=v},t)};return u.useEffect(()=>(d.current=_(),window.addEventListener("scroll",h,{passive:!0}),()=>{window.removeEventListener("scroll",h),clearTimeout(l.current)}),s),i},Lt=({type:o,width:t})=>{const[s,n]=u.useState(null),i=c=>{switch(o){case"max":n(t>=c);break;case"min":n(t<=c);break}};return Y({callback:({winW:c})=>{i(c)},debounce:100,dependencies:[]}),u.useEffect(()=>{i(window.innerWidth)},[]),s};x.Accordion=Rt,x.AsideLayout=st,x.Dropdown=ut,x.FormField=ct,x.Magnet=dt,x.Modal=pt,x.Tab=wt,x.Thumbnail=ft,x.WrapperLayout=rt,x.useAnimationFrame=ge,x.useIntersectionObserver=Tt,x.useIsTouchDevice=Dt,x.useIsomorphicLayoutEffect=St,x.useMediaQuery=Lt,x.useResizeObserver=je,x.useScrollDirection=It,x.useStarter=Ft,x.useWindowResizeObserver=Y,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
