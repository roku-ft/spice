(function(R,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],f):(R=typeof globalThis<"u"?globalThis:R||self,f(R.spice={},R.React))})(this,function(R,f){"use strict";const tr="";var Q={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function Ge(){if(de)return L;de=1;var n=f,r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(l,p,w){var m,y={},E=null,T=null;w!==void 0&&(E=""+w),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(T=p.ref);for(m in p)o.call(p,m)&&!a.hasOwnProperty(m)&&(y[m]=p[m]);if(l&&l.defaultProps)for(m in p=l.defaultProps,p)y[m]===void 0&&(y[m]=p[m]);return{$$typeof:r,type:l,key:E,ref:T,props:y,_owner:s.current}}return L.Fragment=i,L.jsx=d,L.jsxs=d,L}var M={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function Je(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){var n=f,r=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),D=Symbol.iterator,C="@@iterator";function yt(e){if(e===null||typeof e!="object")return null;var t=D&&e[D]||e[C];return typeof t=="function"?t:null}var N=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var t=arguments.length,c=new Array(t>1?t-1:0),_=1;_<t;_++)c[_-1]=arguments[_];Et("error",e,c)}}function Et(e,t,c){{var _=N.ReactDebugCurrentFrame,h=_.getStackAddendum();h!==""&&(t+="%s",c=c.concat([h]));var b=c.map(function(g){return String(g)});b.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,b)}}var Rt=!1,xt=!1,jt=!1,Tt=!1,St=!1,Ee;Ee=Symbol.for("react.module.reference");function Pt(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===a||St||e===s||e===w||e===m||Tt||e===T||Rt||xt||jt||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===y||e.$$typeof===d||e.$$typeof===l||e.$$typeof===p||e.$$typeof===Ee||e.getModuleId!==void 0))}function Ct(e,t,c){var _=e.displayName;if(_)return _;var h=t.displayName||t.name||"";return h!==""?c+"("+h+")":c}function Re(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case i:return"Portal";case a:return"Profiler";case s:return"StrictMode";case w:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var t=e;return Re(t)+".Consumer";case d:var c=e;return Re(c._context)+".Provider";case p:return Ct(e,e.render,"ForwardRef");case y:var _=e.displayName||null;return _!==null?_:I(e.type)||"Memo";case E:{var h=e,b=h._payload,g=h._init;try{return I(g(b))}catch{return null}}}return null}var k=Object.assign,U=0,xe,je,Te,Se,Pe,Ce,Oe;function Ie(){}Ie.__reactDisabledLog=!0;function Ot(){{if(U===0){xe=console.log,je=console.info,Te=console.warn,Se=console.error,Pe=console.group,Ce=console.groupCollapsed,Oe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function It(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:xe}),info:k({},e,{value:je}),warn:k({},e,{value:Te}),error:k({},e,{value:Se}),group:k({},e,{value:Pe}),groupCollapsed:k({},e,{value:Ce}),groupEnd:k({},e,{value:Oe})})}U<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ne=N.ReactCurrentDispatcher,oe;function H(e,t,c){{if(oe===void 0)try{throw Error()}catch(h){var _=h.stack.trim().match(/\n( *(at )?)/);oe=_&&_[1]||""}return`
`+oe+e}}var se=!1,G;{var Ft=typeof WeakMap=="function"?WeakMap:Map;G=new Ft}function Fe(e,t){if(!e||se)return"";{var c=G.get(e);if(c!==void 0)return c}var _;se=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var b;b=ne.current,ne.current=null,Ot();try{if(t){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(F){_=F}Reflect.construct(e,[],g)}else{try{g.call()}catch(F){_=F}e.call(g.prototype)}}else{try{throw Error()}catch(F){_=F}e()}}catch(F){if(F&&_&&typeof F.stack=="string"){for(var v=F.stack.split(`
`),P=_.stack.split(`
`),x=v.length-1,j=P.length-1;x>=1&&j>=0&&v[x]!==P[j];)j--;for(;x>=1&&j>=0;x--,j--)if(v[x]!==P[j]){if(x!==1||j!==1)do if(x--,j--,j<0||v[x]!==P[j]){var O=`
`+v[x].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,O),O}while(x>=1&&j>=0);break}}}finally{se=!1,ne.current=b,It(),Error.prepareStackTrace=h}var W=e?e.displayName||e.name:"",He=W?H(W):"";return typeof e=="function"&&G.set(e,He),He}function Dt(e,t,c){return Fe(e,!1)}function kt(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function J(e,t,c){if(e==null)return"";if(typeof e=="function")return Fe(e,kt(e));if(typeof e=="string")return H(e);switch(e){case w:return H("Suspense");case m:return H("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return Dt(e.render);case y:return J(e.type,t,c);case E:{var _=e,h=_._payload,b=_._init;try{return J(b(h),t,c)}catch{}}}return""}var q=Object.prototype.hasOwnProperty,De={},ke=N.ReactDebugCurrentFrame;function K(e){if(e){var t=e._owner,c=J(e.type,e._source,t?t.type:null);ke.setExtraStackFrame(c)}else ke.setExtraStackFrame(null)}function Nt(e,t,c,_,h){{var b=Function.call.bind(q);for(var g in e)if(b(e,g)){var v=void 0;try{if(typeof e[g]!="function"){var P=Error((_||"React class")+": "+c+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[g]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}v=e[g](t,g,_,c,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(x){v=x}v&&!(v instanceof Error)&&(K(h),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",_||"React class",c,g,typeof v),K(null)),v instanceof Error&&!(v.message in De)&&(De[v.message]=!0,K(h),S("Failed %s type: %s",c,v.message),K(null))}}}var At=Array.isArray;function ie(e){return At(e)}function Wt(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,c=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return c}}function Lt(e){try{return Ne(e),!1}catch{return!0}}function Ne(e){return""+e}function Ae(e){if(Lt(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Wt(e)),Ne(e)}var z=N.ReactCurrentOwner,Mt={key:!0,ref:!0,__self:!0,__source:!0},We,Le,ae;ae={};function Vt(e){if(q.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function Yt(e){if(q.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function Ut(e,t){if(typeof e.ref=="string"&&z.current&&t&&z.current.stateNode!==t){var c=I(z.current.type);ae[c]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(z.current.type),e.ref),ae[c]=!0)}}function zt(e,t){{var c=function(){We||(We=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};c.isReactWarning=!0,Object.defineProperty(e,"key",{get:c,configurable:!0})}}function Bt(e,t){{var c=function(){Le||(Le=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};c.isReactWarning=!0,Object.defineProperty(e,"ref",{get:c,configurable:!0})}}var Ht=function(e,t,c,_,h,b,g){var v={$$typeof:r,type:e,key:t,ref:c,props:g,_owner:b};return v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(v,"_self",{configurable:!1,enumerable:!1,writable:!1,value:_}),Object.defineProperty(v,"_source",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),v};function Gt(e,t,c,_,h){{var b,g={},v=null,P=null;c!==void 0&&(Ae(c),v=""+c),Yt(t)&&(Ae(t.key),v=""+t.key),Vt(t)&&(P=t.ref,Ut(t,h));for(b in t)q.call(t,b)&&!Mt.hasOwnProperty(b)&&(g[b]=t[b]);if(e&&e.defaultProps){var x=e.defaultProps;for(b in x)g[b]===void 0&&(g[b]=x[b])}if(v||P){var j=typeof e=="function"?e.displayName||e.name||"Unknown":e;v&&zt(g,j),P&&Bt(g,j)}return Ht(e,v,P,h,_,z.current,g)}}var ce=N.ReactCurrentOwner,Me=N.ReactDebugCurrentFrame;function A(e){if(e){var t=e._owner,c=J(e.type,e._source,t?t.type:null);Me.setExtraStackFrame(c)}else Me.setExtraStackFrame(null)}var ue;ue=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===r}function Ve(){{if(ce.current){var e=I(ce.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Jt(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),c=e.lineNumber;return`

Check your code at `+t+":"+c+"."}return""}}var Ye={};function qt(e){{var t=Ve();if(!t){var c=typeof e=="string"?e:e.displayName||e.name;c&&(t=`

Check the top-level render call using <`+c+">.")}return t}}function Ue(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var c=qt(t);if(Ye[c])return;Ye[c]=!0;var _="";e&&e._owner&&e._owner!==ce.current&&(_=" It was passed a child from "+I(e._owner.type)+"."),A(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',c,_),A(null)}}function ze(e,t){{if(typeof e!="object")return;if(ie(e))for(var c=0;c<e.length;c++){var _=e[c];le(_)&&Ue(_,t)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var h=yt(e);if(typeof h=="function"&&h!==e.entries)for(var b=h.call(e),g;!(g=b.next()).done;)le(g.value)&&Ue(g.value,t)}}}function Kt(e){{var t=e.type;if(t==null||typeof t=="string")return;var c;if(typeof t=="function")c=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===p||t.$$typeof===y))c=t.propTypes;else return;if(c){var _=I(t);Nt(c,e.props,"prop",_,e)}else if(t.PropTypes!==void 0&&!ue){ue=!0;var h=I(t);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",h||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Qt(e){{for(var t=Object.keys(e.props),c=0;c<t.length;c++){var _=t[c];if(_!=="children"&&_!=="key"){A(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",_),A(null);break}}e.ref!==null&&(A(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Be(e,t,c,_,h,b){{var g=Pt(e);if(!g){var v="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(v+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P=Jt(h);P?v+=P:v+=Ve();var x;e===null?x="null":ie(e)?x="array":e!==void 0&&e.$$typeof===r?(x="<"+(I(e.type)||"Unknown")+" />",v=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,v)}var j=Gt(e,t,c,h,b);if(j==null)return j;if(g){var O=t.children;if(O!==void 0)if(_)if(ie(O)){for(var W=0;W<O.length;W++)ze(O[W],e);Object.freeze&&Object.freeze(O)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ze(O,e)}return e===o?Qt(j):Kt(j),j}}function Xt(e,t,c){return Be(e,t,c,!0)}function Zt(e,t,c){return Be(e,t,c,!1)}var $t=Zt,er=Xt;M.Fragment=o,M.jsx=$t,M.jsxs=er}()),M}process.env.NODE_ENV==="production"?Q.exports=Ge():Q.exports=Je();var u=Q.exports;const V=typeof document<"u"?f.useLayoutEffect:f.useEffect,_e={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},pe=f.createContext(!0),ve=f.createContext(n=>!n),qe=({children:n})=>{const[r,i]=f.useState(!0);return u.jsx(pe.Provider,{value:r,children:u.jsx(ve.Provider,{value:i,children:n})})},Ke=({children:n})=>{const r=f.useContext(pe);return u.jsx("div",{className:`${_e.spice_wrapper} ${r?_e.spice_wrapper_hidden:""}`,children:n})},Qe=({children:n})=>u.jsx(qe,{children:u.jsx(Ke,{children:n})}),Xe=()=>f.useContext(ve),X={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},Ze=({className:n,children:r,aside:i,isSticky:o=!1})=>{const s=Xe();return V(()=>(o&&s(()=>!1),()=>{s(()=>!0)}),[]),u.jsxs("div",{className:n||"",children:[i.index===1&&u.jsx("div",{className:X.spice_aside_main,children:r}),u.jsx("aside",{className:`${X.spice_aside_aside} ${i.className?i.className:""}`,children:i.chidren}),i.index===0&&u.jsx("div",{className:X.spice_aside_main,children:r})]})},me=({targetRef:n,callback:r,debounce:i,dependencies:o=[]})=>{const s=f.useRef(0),a=f.useRef(!0);f.useEffect(()=>{const d=new ResizeObserver(p=>{clearTimeout(s.current),s.current=setTimeout(()=>{if(a.current){a.current=!1;return}r(p[0].target)},i)}),l=n.current;if(l)return d.observe(l),()=>{d.unobserve(l),clearTimeout(s.current)}},o)},$e=({content:n,isOpen:r})=>{const i=n.querySelectorAll("a,button");if(!i)return;const o=r?"0":"-1";i.forEach(s=>{s.setAttribute("tabindex",o)})},et=({wrapper:n,inner:r,isOpen:i,callback:o})=>{const a={height:r.getBoundingClientRect().height,target:n};i?o.close(a):o.open(a)},ge={spice_accordion_contentWrapper:"_spice_accordion_contentWrapper_twt7j_1",spice_accordion_hidden:"_spice_accordion_hidden_twt7j_5"},tt=({isView:n=!1,value:r,className:i,button:o,callback:s,content:a})=>{const d=f.useRef(null),l=f.useRef(null),[p,w]=f.useState(n);return f.useEffect(()=>{$e({content:d.current,isOpen:p})},[p]),me({targetRef:l,callback:m=>{const y=m.getBoundingClientRect().height;p&&(d.current.style.height=`${y}px`)},dependencies:[p],debounce:100}),u.jsxs("div",{className:i||"",children:[u.jsx("button",{className:o.className?o.className:"",onClick:()=>{et({wrapper:d.current,inner:l.current,isOpen:p,callback:s}),w(m=>!m)},"aria-controls":`content-${r}`,id:`button-${r}`,"aria-expanded":p,children:o.children}),u.jsx("div",{ref:d,className:`${ge.spice_accordion_contentWrapper} ${n?"":ge.spice_accordion_hidden}`,id:`content-${r}`,"aria-labelledby":`button-${r}`,"aria-hidden":!p,children:u.jsx("div",{ref:l,className:a.className?a.className:"",children:a.children})})]})},Z={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},he=({formProps:n,className:r})=>u.jsx("input",{...n,className:`${Z.spice_form_input} ${r||""}`}),rt=({formProps:n})=>{const r=n.isSelect;if(!r)return;const i=r.options.map(a=>u.jsx("option",{value:a,children:a},a)),o=()=>{const a=r.defaultValue;return a?u.jsx("option",{hidden:!0,children:a}):null},s=()=>{const a=r.defaultSelectedIndex;if(a)return r.options[a]};return u.jsxs("select",{name:n.name,id:n.id,className:Z.spice_form_select,defaultValue:s(),children:[u.jsx(o,{}),i]})},we=({layoutType:n,formPropsArr:r,label:i,FormItem:o,errors:s})=>{const a=d=>!s||!s[d]?null:s[d];if(n==="block")return u.jsxs(u.Fragment,{children:[i&&u.jsx("label",{htmlFor:r[0].id,children:i}),u.jsx(o,{formProps:r[0]}),a(0)]});if(n==="flex")return u.jsxs(u.Fragment,{children:[i&&u.jsx("label",{htmlFor:r[0].id,children:i}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx(o,{formProps:r[0]}),a(0)]}),u.jsxs("li",{children:[u.jsx(o,{formProps:r[1]}),a(1)]})]})]});if(n==="radio-check"){const d=r.map(l=>u.jsxs("li",{children:[u.jsx(o,{formProps:l,className:Z.spice_form_radioCheckInput}),u.jsx("label",{htmlFor:l.id,children:l.value})]},l.id));return u.jsxs(u.Fragment,{children:[i&&u.jsx("label",{children:i}),u.jsx("ul",{children:d}),a(0)]})}},nt=({formProps:n})=>{const r=n.isTextarea;if(r)return u.jsx("textarea",{name:n.name,id:n.id,cols:r.cols,rows:r.rows,placeholder:n.placeholder,defaultValue:r.defaultValue})},ot=({className:n,label:r,formProps:i,errors:o})=>{const s=i,a=s[0].type,d=s.length,l=!!s[0].isSelect,p=!!s[0].isTextarea;if(!(a==="radio"||a==="checkbox")&&d>2)throw new Error("The length of formProps is up to 2.");if(o&&o.length>2)throw new Error("The length of error is up to 2.");const w=y=>we({layoutType:d===1?"block":"flex",formPropsArr:s,label:r,FormItem:y,errors:o}),m=()=>l?w(rt):p?w(nt):a==="radio"||a==="checkbox"?we({layoutType:"radio-check",formPropsArr:s,label:r,FormItem:he,errors:o}):w(he);return u.jsx("fieldset",{className:`${n}`,children:u.jsx(m,{})})},$=n=>new Promise(r=>{n instanceof Promise?n.then(()=>{r(null)}):r(null)}),ee={spice_tab_button:"_spice_tab_button_12kqm_1",spice_tab_contentWrapper:"_spice_tab_contentWrapper_12kqm_5",spice_tab_hidden:"_spice_tab_hidden_12kqm_9"},st=({lists:n,contents:r,callback:i})=>{const o=f.useRef(!1),s=f.useRef(!1),[a,d]=f.useState(0),l=[],p=async E=>{a===E||s.current||(s.current=!0,await $(i.leave(l[a].current)),d(E))};f.useEffect(()=>{if(!o.current){o.current=!0;return}s.current=!1,i.enter(l[a].current)},[a]);const w=n.children.map((E,T)=>u.jsx("button",{onClick:()=>{p(T)},className:`${n.buttonClassName} ${ee.spice_tab_button} ${a===T?n.isViewClassName:""}`,children:E},T)),m=({children:E,index:T})=>{const D=f.useRef(null);return l.push(D),u.jsx("li",{ref:D,className:a===T?"":ee.spice_tab_hidden,children:E})},y=r.children.map((E,T)=>u.jsx(m,{index:T,children:E},T));return u.jsxs("div",{children:[u.jsx("div",{className:n.wrapperClassName,children:w}),u.jsx("ul",{className:ee.spice_tab_contentWrapper,children:y})]})},Y={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},it=({position:n,parent:r,content:i,callback:o,className:s})=>{const a=f.useRef(null),d=f.useRef(!1),[l,p]=f.useState(!1),[w,m]=f.useState(!0);return u.jsxs("div",{onMouseEnter:()=>{d.current=!0,m(!1),p(!0),o!=null&&o.enter&&o.enter(a.current)},onMouseLeave:async()=>{d.current=!1,m(!0),o!=null&&o.leave&&await $(o.leave(a.current)),d.current||p(!1)},className:`${Y.spice_dropdown_wrapper} ${s||""}`,children:[r.children,u.jsx("div",{ref:a,className:`${Y.spice_dropdown_content} ${l?"":Y.spice_dropdown_content_hidden} ${w?Y.spice_dropdown_content_pointerPrevent:""} ${Y["spice_dropdown_"+n]}`,children:i.children})]})},be=n=>{n>60&&(n=60);const r=Math.floor(1e3/n);let i=performance.now();const o=d=>{const l=d-i,p=l<=r;return p||(i=d-l%r),p},s={callback:null,isPlay:!1,id:0},a=d=>{s.id=requestAnimationFrame(a),!o(d)&&s.callback&&s.isPlay&&s.callback()};return V(()=>(s.id=requestAnimationFrame(a),()=>{cancelAnimationFrame(s.id)}),[]),(d,l)=>{if(d==="play"){if(!l){console.warn("Callback function is required when 'play'");return}s.callback=l,s.isPlay=!0}else d==="pause"&&(s.isPlay=!1)}},at={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},ct=({className:n,children:r,callback:i,fps:o=60,stopPropagation:s=!1})=>{const a=f.useRef(null),d=f.useRef(null),l=f.useRef(),p=be(o),w={target:a.current,children:d.current,x:0,y:0},m=C=>{w.target=a.current,w.children=d.current},y=C=>{l.current=C.currentTarget.getBoundingClientRect(),w.x=C.clientX-l.current.left-l.current.width/2,w.y=C.clientY-l.current.top-l.current.height/2},E=C=>{C.stopPropagation(),m(),y(C),p("play",()=>{i.move(w)})},T=C=>{C.stopPropagation(),y(C)},D=C=>{C.stopPropagation(),p("pause"),i.leave&&i.leave(w)};return u.jsx("div",{onMouseEnter:E,onMouseMove:T,onMouseLeave:D,className:n||"",ref:a,children:u.jsx("div",{ref:d,className:s?at.spice_magnet_stopPropagation:"",children:r})})},te={spice_bgImg_wrapper:"_spice_bgImg_wrapper_12iq7_1",spice_bgImg_view:"_spice_bgImg_view_12iq7_6",spice_bgImg_golden:"_spice_bgImg_golden_12iq7_20",spice_bgImg_silver:"_spice_bgImg_silver_12iq7_24",spice_bgImg_platinum:"_spice_bgImg_platinum_12iq7_28","spice_bgImg_16-9":"_spice_bgImg_16-9_12iq7_32",spice_bgImg_square:"_spice_bgImg_square_12iq7_36","spice_bgImg_3-2":"_spice_bgImg_3-2_12iq7_40","spice_bgImg_4-3":"_spice_bgImg_4-3_12iq7_44"},ut=({ratio:n,children:r,className:i})=>{const o=["golden","silver","platinum","16-9","square","3-2","4-3"];let s=o.includes(n),a=typeof n=="number"&&n>0;if(!s&&!a)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${o.join(" | ")} or a number greater than 0.`);return u.jsx("div",{className:`${te.spice_bgImg_wrapper} ${i||""}`,children:u.jsx("div",{className:`${te.spice_bgImg_view} ${s?te["spice_bgImg_"+n]:""}`,style:a?{paddingTop:`${n}%`}:{},children:r})})},ye=n=>{const r=document.documentElement.style,i=document.body.style;n==="add"?(r.scrollbarGutter="stable",r.overflow="hidden",i.overflow="hidden"):(r.scrollbarGutter="",r.overflow="",i.overflow="")},lt={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},dt=({children:n,className:r,dialog:i,callback:o})=>{const s=f.useRef(null),a=()=>{ye("add"),s.current.showModal(),o!=null&&o.open&&o.open(s.current)},d=async()=>{o!=null&&o.close&&await $(o.close(s.current)),ye("remove"),s.current.close()};return f.useEffect(()=>{const l=s.current.querySelectorAll(".spice__modal_close");l&&l.forEach(p=>{p.addEventListener("click",()=>{d()})})},[]),u.jsxs(u.Fragment,{children:[u.jsx("button",{className:r||"",onClick:()=>{a()},children:n}),u.jsx("dialog",{ref:s,onClick:l=>{l.target===s.current&&d()},className:`${lt.spice_modal_dialog} ${i.className?i.className:""}`,children:i.children})]})},ft=({targetRef:n,rootMargin:r="0px",threshold:i=0,once:o,callback:s,dependencies:a=[]})=>{const d={rootMargin:r,threshold:i};V(()=>{const l=n.current;if(!l)return;const p=(m,y)=>{m.forEach(E=>{E.isIntersecting&&s.enter?(s.enter(E.target),o&&y.unobserve(E.target)):!E.isIntersecting&&s.leave&&s.leave(E.target)})},w=new IntersectionObserver(p,d);return w.observe(l),()=>{w.unobserve(l)}},a)},B=({callback:n,debounce:r,dependencies:i=[]})=>{const o=f.useRef(0),s=f.useRef(0),a=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{n({winW:window.innerWidth,winH:window.innerHeight,initWinW:o.current})},r)};f.useEffect(()=>(o.current=window.innerWidth,window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),clearTimeout(s.current)}),i)},_t=({initWinW:n,winW:r,threshold:i})=>{let o=!(n<=i);r<=i?o&&window.location.reload():!o&&window.location.reload()},pt=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`,vt=()=>{console.log(pt)},mt=n=>{const r=document.querySelector('meta[name="viewport"]');if(!r)return;const i=n>360?"width=device-width,initial-scale=1":"width=360";r.getAttribute("content")!==i&&r.setAttribute("content",i)},gt=({reloadThresholds:n,isFixViewportForSmall:r=!0,areYouFun:i=!1})=>{const o=s=>{r&&mt(s)};B({callback({initWinW:s,winW:a}){n&&n.forEach(d=>{_t({initWinW:s,winW:a,threshold:d})}),o(a)},debounce:100,dependencies:[]}),V(()=>{document.body.dataset.spiceRendered="true",o(window.innerWidth),i&&process.env.NODE_ENV!=="development"&&vt()},[])},ht=()=>{const[n,r]=f.useState(null),i=()=>{const o=window.ontouchstart,s=navigator.maxTouchPoints;o!==void 0&&0<s?r(!0):r(!1)};return B({callback(){i()},debounce:100,dependencies:[]}),f.useEffect(()=>{i()},[]),n},re="scroll",wt=({threshold:n=0,debounce:r,dependencies:i=[]})=>{const o=f.useRef(null),[s,a]=f.useReducer((m,y)=>{switch(y.type){case re:return o.current=y.payload,y.payload;default:return m}},o.current),d=f.useRef(0),l=f.useRef(0),p=()=>window.scrollY||document.documentElement.scrollTop,w=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const m=p();m>d.current+n&&o.current!=="down"?a({type:re,payload:"down"}):m<d.current-n&&o.current!=="up"&&a({type:re,payload:"up"}),d.current=m},r)};return f.useEffect(()=>(d.current=p(),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),clearTimeout(l.current)}),i),s},bt=({type:n,width:r})=>{const[i,o]=f.useState(null),s=a=>{switch(n){case"max":o(r<=a);break;case"min":o(r>=a);break}};return B({callback:({winW:a})=>{s(a)},debounce:100,dependencies:[]}),f.useEffect(()=>{s(window.innerWidth)},[]),i};R.Accordion=tt,R.AsideLayout=Ze,R.BackgroundImage=ut,R.Dropdown=it,R.FormField=ot,R.Magnet=ct,R.Modal=dt,R.Tab=st,R.WrapperLayout=Qe,R.useAnimationFrame=be,R.useIntersectionObserver=ft,R.useIsTouchDevice=ht,R.useIsomorphicLayoutEffect=V,R.useMediaQuery=bt,R.useResizeObserver=me,R.useScrollDirection=wt,R.useStarter=gt,R.useWindowResizeObserver=B,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
