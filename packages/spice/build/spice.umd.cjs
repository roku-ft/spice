(function(E,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],o):(E=typeof globalThis<"u"?globalThis:E||self,o(E.spice={},E.React))})(this,function(E,o){"use strict";const En="";var q={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function rt(){if(_e)return V;_e=1;var r=o,t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(u,f,h){var m,p={},y=null,C=null;h!==void 0&&(y=""+h),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(C=f.ref);for(m in f)n.call(f,m)&&!c.hasOwnProperty(m)&&(p[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)p[m]===void 0&&(p[m]=f[m]);return{$$typeof:t,type:u,key:y,ref:C,props:p,_owner:i.current}}return V.Fragment=s,V.jsx=d,V.jsxs=d,V}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function ot(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&function(){var r=o,t=Symbol.for("react.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),R=Symbol.iterator,F="@@iterator";function I(e){if(e===null||typeof e!="object")return null;var a=R&&e[R]||e[F];return typeof a=="function"?a:null}var k=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var a=arguments.length,l=new Array(a>1?a-1:0),v=1;v<a;v++)l[v-1]=arguments[v];j("error",e,l)}}function j(e,a,l){{var v=k.ReactDebugCurrentFrame,b=v.getStackAddendum();b!==""&&(a+="%s",l=l.concat([b]));var x=l.map(function(w){return String(w)});x.unshift("Warning: "+a),Function.prototype.apply.call(console[e],console,x)}}var oe=!1,Bt=!1,Ht=!1,Gt=!1,Jt=!1,De;De=Symbol.for("react.module.reference");function Xt(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===c||Jt||e===i||e===h||e===m||Gt||e===C||oe||Bt||Ht||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===p||e.$$typeof===d||e.$$typeof===u||e.$$typeof===f||e.$$typeof===De||e.getModuleId!==void 0))}function Kt(e,a,l){var v=e.displayName;if(v)return v;var b=a.displayName||a.name||"";return b!==""?l+"("+b+")":l}function Fe(e){return e.displayName||"Context"}function A(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case s:return"Portal";case c:return"Profiler";case i:return"StrictMode";case h:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u:var a=e;return Fe(a)+".Consumer";case d:var l=e;return Fe(l._context)+".Provider";case f:return Kt(e,e.render,"ForwardRef");case p:var v=e.displayName||null;return v!==null?v:A(e.type)||"Memo";case y:{var b=e,x=b._payload,w=b._init;try{return A(w(x))}catch{return null}}}return null}var M=Object.assign,U=0,Ae,Le,Me,Ne,We,Ve,Ye;function ze(){}ze.__reactDisabledLog=!0;function Qt(){{if(U===0){Ae=console.log,Le=console.info,Me=console.warn,Ne=console.error,We=console.group,Ve=console.groupCollapsed,Ye=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ze,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function Zt(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Ae}),info:M({},e,{value:Le}),warn:M({},e,{value:Me}),error:M({},e,{value:Ne}),group:M({},e,{value:We}),groupCollapsed:M({},e,{value:Ve}),groupEnd:M({},e,{value:Ye})})}U<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var se=k.ReactCurrentDispatcher,ie;function J(e,a,l){{if(ie===void 0)try{throw Error()}catch(b){var v=b.stack.trim().match(/\n( *(at )?)/);ie=v&&v[1]||""}return`
`+ie+e}}var ae=!1,X;{var qt=typeof WeakMap=="function"?WeakMap:Map;X=new qt}function Ue(e,a){if(!e||ae)return"";{var l=X.get(e);if(l!==void 0)return l}var v;ae=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=se.current,se.current=null,Qt();try{if(a){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(L){v=L}Reflect.construct(e,[],w)}else{try{w.call()}catch(L){v=L}e.call(w.prototype)}}else{try{throw Error()}catch(L){v=L}e()}}catch(L){if(L&&v&&typeof L.stack=="string"){for(var g=L.stack.split(`
`),P=v.stack.split(`
`),T=g.length-1,O=P.length-1;T>=1&&O>=0&&g[T]!==P[O];)O--;for(;T>=1&&O>=0;T--,O--)if(g[T]!==P[O]){if(T!==1||O!==1)do if(T--,O--,O<0||g[T]!==P[O]){var D=`
`+g[T].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&X.set(e,D),D}while(T>=1&&O>=0);break}}}finally{ae=!1,se.current=x,Zt(),Error.prepareStackTrace=b}var W=e?e.displayName||e.name:"",nt=W?J(W):"";return typeof e=="function"&&X.set(e,nt),nt}function $t(e,a,l){return Ue(e,!1)}function en(e){var a=e.prototype;return!!(a&&a.isReactComponent)}function K(e,a,l){if(e==null)return"";if(typeof e=="function")return Ue(e,en(e));if(typeof e=="string")return J(e);switch(e){case h:return J("Suspense");case m:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return $t(e.render);case p:return K(e.type,a,l);case y:{var v=e,b=v._payload,x=v._init;try{return K(x(b),a,l)}catch{}}}return""}var Q=Object.prototype.hasOwnProperty,Be={},He=k.ReactDebugCurrentFrame;function Z(e){if(e){var a=e._owner,l=K(e.type,e._source,a?a.type:null);He.setExtraStackFrame(l)}else He.setExtraStackFrame(null)}function tn(e,a,l,v,b){{var x=Function.call.bind(Q);for(var w in e)if(x(e,w)){var g=void 0;try{if(typeof e[w]!="function"){var P=Error((v||"React class")+": "+l+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}g=e[w](a,w,v,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){g=T}g&&!(g instanceof Error)&&(Z(b),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",v||"React class",l,w,typeof g),Z(null)),g instanceof Error&&!(g.message in Be)&&(Be[g.message]=!0,Z(b),S("Failed %s type: %s",l,g.message),Z(null))}}}var nn=Array.isArray;function ce(e){return nn(e)}function rn(e){{var a=typeof Symbol=="function"&&Symbol.toStringTag,l=a&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function on(e){try{return Ge(e),!1}catch{return!0}}function Ge(e){return""+e}function Je(e){if(on(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rn(e)),Ge(e)}var B=k.ReactCurrentOwner,sn={key:!0,ref:!0,__self:!0,__source:!0},Xe,Ke,ue;ue={};function an(e){if(Q.call(e,"ref")){var a=Object.getOwnPropertyDescriptor(e,"ref").get;if(a&&a.isReactWarning)return!1}return e.ref!==void 0}function cn(e){if(Q.call(e,"key")){var a=Object.getOwnPropertyDescriptor(e,"key").get;if(a&&a.isReactWarning)return!1}return e.key!==void 0}function un(e,a){if(typeof e.ref=="string"&&B.current&&a&&B.current.stateNode!==a){var l=A(B.current.type);ue[l]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',A(B.current.type),e.ref),ue[l]=!0)}}function ln(e,a){{var l=function(){Xe||(Xe=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function dn(e,a){{var l=function(){Ke||(Ke=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var fn=function(e,a,l,v,b,x,w){var g={$$typeof:t,type:e,key:a,ref:l,props:w,_owner:x};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function _n(e,a,l,v,b){{var x,w={},g=null,P=null;l!==void 0&&(Je(l),g=""+l),cn(a)&&(Je(a.key),g=""+a.key),an(a)&&(P=a.ref,un(a,b));for(x in a)Q.call(a,x)&&!sn.hasOwnProperty(x)&&(w[x]=a[x]);if(e&&e.defaultProps){var T=e.defaultProps;for(x in T)w[x]===void 0&&(w[x]=T[x])}if(g||P){var O=typeof e=="function"?e.displayName||e.name||"Unknown":e;g&&ln(w,O),P&&dn(w,O)}return fn(e,g,P,b,v,B.current,w)}}var le=k.ReactCurrentOwner,Qe=k.ReactDebugCurrentFrame;function N(e){if(e){var a=e._owner,l=K(e.type,e._source,a?a.type:null);Qe.setExtraStackFrame(l)}else Qe.setExtraStackFrame(null)}var de;de=!1;function fe(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function Ze(){{if(le.current){var e=A(le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function pn(e){{if(e!==void 0){var a=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+a+":"+l+"."}return""}}var qe={};function vn(e){{var a=Ze();if(!a){var l=typeof e=="string"?e:e.displayName||e.name;l&&(a=`

Check the top-level render call using <`+l+">.")}return a}}function $e(e,a){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=vn(a);if(qe[l])return;qe[l]=!0;var v="";e&&e._owner&&e._owner!==le.current&&(v=" It was passed a child from "+A(e._owner.type)+"."),N(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,v),N(null)}}function et(e,a){{if(typeof e!="object")return;if(ce(e))for(var l=0;l<e.length;l++){var v=e[l];fe(v)&&$e(v,a)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var b=I(e);if(typeof b=="function"&&b!==e.entries)for(var x=b.call(e),w;!(w=x.next()).done;)fe(w.value)&&$e(w.value,a)}}}function hn(e){{var a=e.type;if(a==null||typeof a=="string")return;var l;if(typeof a=="function")l=a.propTypes;else if(typeof a=="object"&&(a.$$typeof===f||a.$$typeof===p))l=a.propTypes;else return;if(l){var v=A(a);tn(l,e.props,"prop",v,e)}else if(a.PropTypes!==void 0&&!de){de=!0;var b=A(a);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof a.getDefaultProps=="function"&&!a.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function mn(e){{for(var a=Object.keys(e.props),l=0;l<a.length;l++){var v=a[l];if(v!=="children"&&v!=="key"){N(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",v),N(null);break}}e.ref!==null&&(N(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),N(null))}}function tt(e,a,l,v,b,x){{var w=Xt(e);if(!w){var g="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P=pn(b);P?g+=P:g+=Ze();var T;e===null?T="null":ce(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(A(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,g)}var O=_n(e,a,l,b,x);if(O==null)return O;if(w){var D=a.children;if(D!==void 0)if(v)if(ce(D)){for(var W=0;W<D.length;W++)et(D[W],e);Object.freeze&&Object.freeze(D)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else et(D,e)}return e===n?mn(O):hn(O),O}}function gn(e,a,l){return tt(e,a,l,!0)}function wn(e,a,l){return tt(e,a,l,!1)}var bn=wn,yn=gn;Y.Fragment=n,Y.jsx=bn,Y.jsxs=yn}()),Y}process.env.NODE_ENV==="production"?q.exports=rt():q.exports=ot();var _=q.exports;const ve={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},he=o.createContext(!0),me=o.createContext(r=>!r),st=({children:r})=>{const[t,s]=o.useState(!0);return _.jsx(he.Provider,{value:t,children:_.jsx(me.Provider,{value:s,children:r})})},it=({children:r})=>{const t=o.useContext(he);return _.jsx("div",{className:`${ve.spice_wrapper} ${t?ve.spice_wrapper_hidden:""}`,children:r})},at=({children:r})=>_.jsx(st,{children:_.jsx(it,{children:r})}),ge=()=>o.useContext(me),$={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},ct=({className:r,children:t,aside:s,isSticky:n=!1})=>{const i=ge();return o.useEffect(()=>(n&&i(()=>!1),()=>{i(()=>!0)}),[n,i]),_.jsxs("div",{className:r||"",children:[s.index===1&&_.jsx("div",{className:$.spice_aside_main,children:t}),_.jsx("aside",{className:`${$.spice_aside_aside} ${s.className?s.className:""}`,children:s.chidren}),s.index===0&&_.jsx("div",{className:$.spice_aside_main,children:t})]})},ee={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},we=({formProps:r,className:t})=>_.jsx("input",{...r,className:`${ee.spice_form_input} ${t||""}`}),ut=({formProps:r})=>{const{isSelect:t,...s}=r;if(!t)return;const n=()=>{const c=t.defaultValue;return c?_.jsx("option",{hidden:!0,children:c}):null},i=()=>{const c=t.defaultSelectedIndex;if(c)return t.options[c]};return _.jsxs("select",{...s,className:ee.spice_form_select,defaultValue:i(),children:[_.jsx(n,{}),t.options.map(c=>_.jsx("option",{value:c,children:c},c))]})},be=({layoutType:r,formPropsArr:t,label:s,FormItem:n,errors:i})=>{const c=o.useCallback(d=>!i||!i[d]?null:i[d],[i]);if(r==="block")return _.jsxs(_.Fragment,{children:[s&&_.jsx("label",{htmlFor:t[0].id,children:s}),_.jsx(n,{formProps:t[0]}),c(0)]});if(r==="flex")return _.jsxs(_.Fragment,{children:[s&&_.jsx("label",{htmlFor:t[0].id,children:s}),_.jsxs("ul",{children:[_.jsxs("li",{children:[_.jsx(n,{formProps:t[0]}),c(0)]}),_.jsxs("li",{children:[_.jsx(n,{formProps:t[1]}),c(1)]})]})]});if(r==="radio-check"){const d=t.map(u=>_.jsxs("li",{children:[_.jsx(n,{formProps:u,className:ee.spice_form_radioCheckInput}),_.jsx("label",{htmlFor:u.id,children:u.value})]},u.id));return _.jsxs(_.Fragment,{children:[s&&_.jsx("label",{children:s}),_.jsx("ul",{children:d}),c(0)]})}},lt=({formProps:r})=>{const{isTextarea:t,...s}=r;if(t)return _.jsx("textarea",{...s,...t})},dt=({className:r,label:t,formProps:s,errors:n})=>{const i=s,c=i[0].type,d=i.length,u=!!i[0].isSelect,f=!!i[0].isTextarea;if(!(c==="radio"||c==="checkbox")&&d>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const h=o.useCallback(p=>be({layoutType:d===1?"block":"flex",formPropsArr:i,label:t,FormItem:p,errors:n}),[n,i,t,d]),m=o.useCallback(()=>u?h(ut):f?h(lt):c==="radio"||c==="checkbox"?be({layoutType:"radio-check",formPropsArr:i,label:t,FormItem:we,errors:n}):h(we),[n,i,t,u,f,h,c]);return _.jsx("fieldset",{className:`${r}`,children:_.jsx(m,{})})},H=r=>new Promise(t=>{r instanceof Promise?r.then(()=>{t(null)}):t(null)}),z={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},ft=({position:r,parent:t,content:s,callback:n,className:i})=>{const c=o.useRef(null),d=o.useRef(!1),[u,f]=o.useState(!1),[h,m]=o.useState(!0),p=o.useCallback(()=>{d.current=!0,m(!1),f(!0),n!=null&&n.onEnter&&n.onEnter(c.current)},[n]),y=o.useCallback(async()=>{d.current=!1,m(!0),n!=null&&n.onLeave&&await H(n.onLeave(c.current)),d.current||f(!1)},[n]);return _.jsxs("div",{onMouseEnter:p,onMouseLeave:y,onClick:y,className:`${z.spice_dropdown_wrapper} ${i||""}`,children:[t.children,_.jsx("div",{ref:c,className:`${z.spice_dropdown_content} ${u?"":z.spice_dropdown_content_hidden} ${h?z.spice_dropdown_content_pointerPrevent:""} ${z["spice_dropdown_"+r]}`,children:s.children})]})},ye=(r=60,t=[])=>{r>60&&(r=60);const s=Math.floor(1e3/r),n=o.useRef(performance.now()),i=o.useCallback(u=>{const f=u-n.current,h=f<=s;return h||(n.current=u-f%s),h},[s]),c=o.useRef({callback:null,isPlay:!1,id:0}).current,d=o.useCallback(u=>{c.id=requestAnimationFrame(d),!i(u)&&c.callback&&c.isPlay&&c.callback(u)},[i,c]);return o.useEffect(()=>(c.id=requestAnimationFrame(d),()=>{cancelAnimationFrame(c.id)}),t),(u,f)=>{if(u==="play"){if(!f){console.warn("Callback function is required when 'play'");return}c.callback=f,c.isPlay=!0}else u==="pause"&&(c.isPlay=!1)}},_t={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},pt=({className:r,children:t,callback:s,fps:n=60,stopPropagation:i=!1,isOnClickReset:c=!1,dependencies:d=[]})=>{const u=o.useRef(null),f=o.useRef(null),h=o.useRef();n>60&&(n=60);const m=ye(n,d),p=o.useMemo(()=>({target:u.current,children:f.current,x:0,y:0}),[]),y=o.useCallback(j=>{p.target=u.current,p.children=f.current},[p]),C=o.useCallback(j=>{h.current=j.currentTarget.getBoundingClientRect(),p.x=j.clientX-h.current.left-h.current.width/2,p.y=j.clientY-h.current.top-h.current.height/2},[p]),R=o.useCallback(j=>{j.stopPropagation(),y(j),C(j),m("play",()=>{s.onMove(p)})},[y,C,m,s,p]),F=o.useCallback(j=>{j.stopPropagation(),C(j)},[C]),I=o.useCallback(j=>{j.stopPropagation(),m("pause"),s.onLeave&&s.onLeave(p)},[m,s,p]),k=o.useCallback(j=>{I(j)},[I]),S=o.useCallback(j=>{c&&I(j)},[I,c]);return _.jsx("div",{onMouseEnter:R,onMouseMove:F,onMouseLeave:k,onClick:S,className:r||"",ref:u,children:_.jsx("div",{ref:f,className:i?_t.spice_magnet_stopPropagation:"",children:t})})},te={spice_thumbnail_wrapper:"_spice_thumbnail_wrapper_1qqot_1",spice_thumbnail_view:"_spice_thumbnail_view_1qqot_5",spice_thumbnail_golden:"_spice_thumbnail_golden_1qqot_26",spice_thumbnail_silver:"_spice_thumbnail_silver_1qqot_30",spice_thumbnail_platinum:"_spice_thumbnail_platinum_1qqot_34","spice_thumbnail_16-9":"_spice_thumbnail_16-9_1qqot_38",spice_thumbnail_square:"_spice_thumbnail_square_1qqot_42","spice_thumbnail_3-2":"_spice_thumbnail_3-2_1qqot_46","spice_thumbnail_4-3":"_spice_thumbnail_4-3_1qqot_50"},vt=({ratio:r,children:t,className:s})=>{const n=["golden","silver","platinum","16-9","square","3-2","4-3"];let i=n.includes(r),c=typeof r=="number"&&r>0;if(!i&&!c)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${n.join(" | ")} or a number greater than 0.`);return _.jsx("div",{className:`${te.spice_thumbnail_wrapper} ${s||""}`,children:_.jsx("div",{className:`${te.spice_thumbnail_view} ${i?te["spice_thumbnail_"+r]:""}`,style:c?{paddingTop:`${r}%`}:{},children:t})})},Ee=r=>{const t=document.documentElement.style,s=document.body.style;r==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",s.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",s.overflow="")},ht={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},mt=".spice__modal_close",gt=({children:r,className:t,dialog:s,callback:n})=>{const i=o.useRef(null),c=o.useCallback(()=>{Ee("add"),i.current.showModal(),n!=null&&n.onOpen&&n.onOpen(i.current)},[n]),d=o.useCallback(async()=>{n!=null&&n.onClose&&await H(n.onClose(i.current)),Ee("remove"),i.current.close()},[n]);return o.useEffect(()=>{const u=i.current.querySelectorAll(mt);if(u)return u.forEach(f=>f.addEventListener("click",d)),()=>{u.forEach(f=>f.removeEventListener("click",d))}},[d]),o.useEffect(()=>{const u=f=>{var m;((m=i.current)==null?void 0:m.hasAttribute("open"))&&f.key==="Escape"&&d()};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[d]),_.jsxs(_.Fragment,{children:[_.jsx("button",{className:t||"",onClick:()=>{c()},children:r}),_.jsx("dialog",{ref:i,onClick:u=>{u.target===i.current&&d()},className:`${ht.spice_modal_dialog} ${s.className?s.className:""}`,children:s.children})]})},wt=({children:r,className:t})=>{const s=ge();return o.useEffect(()=>(s(()=>!1),()=>{s(()=>!0)}),[s]),_.jsx("div",{className:t||"",children:r})},bt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},xe=o.createContext(bt),Ce=o.createContext(()=>{}),yt=({children:r,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[s,n]=o.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return _.jsx(xe.Provider,{value:s,children:_.jsx(Ce.Provider,{value:n,children:r})})},Re=()=>o.useContext(xe),ne=()=>o.useContext(Ce),Et=({children:r,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=ne(),i=Re(),c=o.useCallback(()=>{i.current===t||i.isLeaving||n(d=>({...d,isLeaving:!0,isAnimation:!0,prev:d.current,next:t}))},[n,i,t]);return _.jsx("button",{onClick:c,className:s||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":i.current===t,children:r})},xt={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},Se=({content:r,isOpen:t})=>{const s=r.querySelectorAll("a,button");if(!s)return;const n=t?"0":"-1";s.forEach(i=>{i.setAttribute("tabindex",n)})},Ct=Object.freeze(Object.defineProperty({__proto__:null,Button:Et,Content:({children:r,value:t,className:s,callback:n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const i=o.useRef(!0),c=o.useRef(null),d=ne(),u=Re(),f=u.current===t&&!u.isLeaving;return o.useEffect(()=>{if(i.current){i.current=!1;return}if(!u.isAnimation){f&&n!=null&&n.onReset&&n.onReset(c.current);return}u.prev===t&&(async()=>(n!=null&&n.onClose&&await H(n.onClose(c.current)),d(h=>({...h,isLeaving:!1,prev:"",current:h.next,next:""}))))(),f&&n!=null&&n.onOpen&&n.onOpen(c.current)},[u,d,n,t,f]),o.useEffect(()=>{Se({content:c.current,isOpen:u.current===t})},[u,t]),_.jsx("div",{ref:c,className:`${u.current!==t?xt.spice_tab_hidden:""} ${s||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":u.current!==t,children:r})},Context:yt,useTabSwitch:()=>{const r=ne();return(t,s)=>{r(n=>({isAnimation:s,isLeaving:s,prev:s?n.current:"",current:s?n.current:t,next:s?t:""}))}}},Symbol.toStringTag,{value:"Module"})),Rt={target:"",toggle:!1,defaultValue:[]},je=o.createContext(Rt),Te=o.createContext(()=>{}),St=({children:r,defaultValue:t})=>{const[s,n]=o.useState({target:"",toggle:!1,defaultValue:t});return _.jsx(je.Provider,{value:s,children:_.jsx(Te.Provider,{value:n,children:r})})},Oe=()=>o.useContext(je),jt=()=>o.useContext(Te),Tt=({children:r,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=Oe(),i=jt(),c=o.useMemo(()=>!!n.defaultValue.find(f=>f===t),[n,t]),[d,u]=o.useState(c);return _.jsx("button",{className:s||"",onClick:()=>{i(f=>({...f,toggle:d,target:t})),u(!d)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":d,children:r})},Pe=({targetRef:r,callback:t,debounce:s=100,dependencies:n=[]})=>{const i=o.useRef(0),c=o.useRef(!0);o.useEffect(()=>{const d=new ResizeObserver(f=>{clearTimeout(i.current),i.current=setTimeout(()=>{if(c.current){c.current=!1;return}t(f[0].target)},s)}),u=r.current;if(u)return d.observe(u),()=>{d.unobserve(u),clearTimeout(i.current)}},n)},Ie={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},Ot=Object.freeze(Object.defineProperty({__proto__:null,Button:Tt,Content:({value:r,callback:t,children:s,className:n})=>{if(r==="")throw new Error("Please set the value to something other than an empty string.");const i=Oe(),c=o.useMemo(()=>!!i.defaultValue.find(p=>p===r),[i,r]),[d,u]=o.useState(c);o.useEffect(()=>{i.target===r&&u(!d)},[i.target,i.toggle]);const f=o.useRef(!0),h=o.useRef(null),m=o.useRef(null);return o.useEffect(()=>{if(f.current){f.current=!1;return}const p={height:m.current.getBoundingClientRect().height,target:h.current};d?t.onOpen(p):t.onClose(p)},[d,t]),o.useEffect(()=>{Se({content:h.current,isOpen:d})},[d]),Pe({targetRef:m,callback:p=>{const y=p.getBoundingClientRect().height;d&&(h.current.style.height=`${y}px`)},dependencies:[d],debounce:100}),_.jsx("div",{ref:h,className:`${Ie.spice_accordion_content} ${c?"":Ie.spice_accordion_hidden}`,id:`content-${r}`,"aria-labelledby":`button-${r}`,"aria-hidden":!d,children:_.jsx("div",{ref:m,className:n||"",children:s})})},Context:St},Symbol.toStringTag,{value:"Module"})),Pt=({tempo:r=3,onesRef:t,tensRef:s,hundredsRef:n,onProgress:i,onStart:c,onComplete:d})=>{const u=o.useMemo(()=>({to:0,1:-1,10:-1,100:0}),[]),f=o.useRef(null),h=o.useCallback(({digitContainer:p,numbersTarget:y,digit:C,digitNumber:R,currentPercent:F,limit:I,destination:k})=>{if(u[C]!==R&&F<=I){const S=R.toString(),j=(Math.min(8,R)+1).toString(),oe=F>=I;y[0].innerText=S,y[1].innerText=oe?"0":j,i&&i({digitContainer:p,percent:F,digit:C,destination:k,duration:r/(k/C)}),u[C]=R}},[u,i,r]),m=o.useCallback(p=>(p>100&&(p=100),new Promise(y=>{const C={ones:t.current.querySelectorAll("div"),tens:s.current.querySelectorAll("div"),hundreds:n.current.querySelectorAll("div"),getAll:function(){return[this.ones,this.tens,this.hundreds]}};clearInterval(f.current),f.current=setInterval(async()=>{const R=u.to+=1,F=async()=>{clearInterval(f.current),R>100&&d&&await H(d(C.getAll())),y(R-1)};R===1&&c&&c(C.getAll()),R>p&&await F();const I=Math.floor(R/100)%100,k=Math.floor(R/10)%10,S=R%10;h({digitContainer:t.current,digit:1,digitNumber:S,currentPercent:R,numbersTarget:C.ones,limit:90,destination:p}),h({digitContainer:s.current,digit:10,digitNumber:k,currentPercent:R,numbersTarget:C.tens,limit:90,destination:p}),u[100]!==I&&(C.hundreds[1].innerText=I.toString(),i&&i({digitContainer:n.current,percent:R,digit:100,destination:p,duration:r/(p/10)}),u[100]=I)},Math.max(1e3/60,r/p*1e3))})),[u,h,s,n,t,d,i,c,r]);return o.useEffect(()=>()=>{clearInterval(f.current)},[]),m},It={spice_loadingProgress_digit:"_spice_loadingProgress_digit_avxoy_1"},ke=o.forwardRef(({className:r},t)=>_.jsxs("div",{className:It.spice_loadingProgress_digit,ref:t,children:[_.jsx("div",{className:r||"",children:"0"}),_.jsx("div",{className:r||"",children:"0"})]}));ke.displayName="Digit";const kt=Object.freeze(Object.defineProperty({__proto__:null,Digit:ke,useLoadingProgress:Pt},Symbol.toStringTag,{value:"Module"})),Dt=typeof document<"u"?o.useLayoutEffect:o.useEffect,Ft=({targetRef:r,rootMargin:t="0px",threshold:s=0,once:n=!1,callback:i,dependencies:c=[]})=>{const d={rootMargin:t,threshold:s};o.useEffect(()=>{const u=r==null?void 0:r.current;if(!u)return;const f=(m,p)=>{m.forEach(y=>{y.isIntersecting&&i.onEnter?(i.onEnter(y),n&&p.unobserve(y.target)):!y.isIntersecting&&i.onLeave&&i.onLeave(y)})},h=new IntersectionObserver(f,d);return h.observe(u),()=>{h.unobserve(u)}},c)},G=({callback:r,debounce:t=100,dependencies:s=[]})=>{const n=o.useRef(0),i=o.useRef(0),c=o.useCallback(()=>{clearTimeout(i.current),i.current=setTimeout(()=>{r({winW:window.innerWidth,winH:window.innerHeight,initWinW:n.current})},t)},[r,t]);o.useEffect(()=>(n.current=window.innerWidth,window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),clearTimeout(i.current)}),s)},At=({initWinW:r,winW:t,threshold:s})=>{let n=!(r<=s);t<=s?n&&window.location.reload():!n&&window.location.reload()},Lt=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`,Mt=()=>{console.log(Lt)},Nt=r=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const s=r>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==s&&t.setAttribute("content",s)},Wt=({reloadThresholds:r,isFixViewportForSmall:t=!0,areYouFun:s=!1})=>{const n=o.useCallback(i=>{t&&Nt(i)},[t]);G({callback:({initWinW:i,winW:c})=>{r&&r.forEach(d=>At({initWinW:i,winW:c,threshold:d})),n(c)},debounce:100,dependencies:[]}),o.useEffect(()=>{document.body.dataset.spiceRendered="true",n(window.innerWidth),s&&process.env.NODE_ENV!=="development"&&Mt()},[s,n])},Vt=()=>{const[r,t]=o.useState(null),s=o.useCallback(()=>{const n=window.ontouchstart,i=navigator.maxTouchPoints;n!==void 0&&0<i?t(!0):t(!1)},[]);return G({callback:()=>s(),debounce:100,dependencies:[]}),o.useEffect(()=>s(),[s]),r},re="scroll",Yt=({threshold:r=0,debounce:t=10,dependencies:s=[]})=>{const n=o.useRef(null),[i,c]=o.useReducer((m,p)=>{switch(p.type){case re:return n.current=p.payload,p.payload;default:return m}},n.current),d=o.useRef(0),u=o.useRef(0),f=()=>window.scrollY||document.documentElement.scrollTop,h=o.useCallback(()=>{clearTimeout(u.current),u.current=setTimeout(()=>{const m=f();m>d.current+r&&n.current!=="down"?c({type:re,payload:"down"}):m<d.current-r&&n.current!=="up"&&c({type:re,payload:"up"}),d.current=m},t)},[t,r]);return o.useEffect(()=>(d.current=f(),window.addEventListener("scroll",h,{passive:!0}),()=>{window.removeEventListener("scroll",h),clearTimeout(u.current)}),s),i},zt=({type:r,width:t})=>{const[s,n]=o.useState(null),i=o.useCallback(c=>{switch(r){case"max":n(t>=c);break;case"min":n(t<=c);break}},[r,t]);return G({callback:({winW:c})=>i(c),debounce:100,dependencies:[]}),o.useEffect(()=>i(window.innerWidth),[i]),s},Ut=({shareUrl:r,shareTitle:t="",width:s=600,height:n=800})=>{const i=o.useMemo(()=>encodeURIComponent(r),[r]),c=o.useMemo(()=>`height=${n},width=${s}`,[n,s]),d=o.useMemo(()=>({onClick:()=>{window.open(`https://www.facebook.com/sharer.php?u=${i}&t=${t}`,"newwindow",c)}}),[i,t,c]),u=o.useMemo(()=>({onClick:()=>{window.open(`https:////twitter.com/share?url=${i}&text=${t}`,"newwindow",c)}}),[i,c,t]),f=o.useMemo(()=>({onClick:()=>{window.open(`https://social-plugins.line.me/lineit/share?url=${i}&text=${t}`,"newwindow",c)}}),[i,c,t]),h=o.useMemo(()=>({onClick:async()=>{if(!navigator.share){alert("このブラウザは共有機能に対応していません。");return}try{await window.navigator.share({title:t,url:i})}catch{return}}}),[t,i]),[m,p]=o.useState(!1),y=o.useMemo(()=>({onClick:()=>{navigator.clipboard.writeText(r).then(()=>{p(!0)})}}),[r]);return{Facebook:d,X:u,LINE:f,share:h,copy:y,isCopied:m}};E.Accordion=Ot,E.AsideLayout=ct,E.Dropdown=ft,E.FormField=dt,E.LoadingProgress=kt,E.Magnet=pt,E.Modal=gt,E.StickyItem=wt,E.Tab=Ct,E.Thumbnail=vt,E.WrapperLayout=at,E.useAnimationFrame=ye,E.useIntersectionObserver=Ft,E.useIsTouchDevice=Vt,E.useIsomorphicLayoutEffect=Dt,E.useMediaQuery=zt,E.useResizeObserver=Pe,E.useScrollDirection=Yt,E.useShare=Ut,E.useStarter=Wt,E.useWindowResizeObserver=G,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
