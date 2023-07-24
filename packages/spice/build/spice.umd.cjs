(function(E,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(E=typeof globalThis<"u"?globalThis:E||self,u(E.spice={},E.React))})(this,function(E,u){"use strict";const vn="";var Q={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function qe(){if(le)return N;le=1;var o=u,t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(l,_,v){var w,b={},S=null,D=null;v!==void 0&&(S=""+v),_.key!==void 0&&(S=""+_.key),_.ref!==void 0&&(D=_.ref);for(w in _)n.call(_,w)&&!a.hasOwnProperty(w)&&(b[w]=_[w]);if(l&&l.defaultProps)for(w in _=l.defaultProps,_)b[w]===void 0&&(b[w]=_[w]);return{$$typeof:t,type:l,key:S,ref:D,props:b,_owner:i.current}}return N.Fragment=s,N.jsx=d,N.jsxs=d,N}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function $e(){return de||(de=1,process.env.NODE_ENV!=="production"&&function(){var o=u,t=Symbol.for("react.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),B=Symbol.iterator,C="@@iterator";function At(e){if(e===null||typeof e!="object")return null;var r=B&&e[B]||e[C];return typeof r=="function"?r:null}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(e){{for(var r=arguments.length,c=new Array(r>1?r-1:0),p=1;p<r;p++)c[p-1]=arguments[p];Lt("error",e,c)}}function Lt(e,r,c){{var p=A.ReactDebugCurrentFrame,h=p.getStackAddendum();h!==""&&(r+="%s",c=c.concat([h]));var y=c.map(function(m){return String(m)});y.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,y)}}var Mt=!1,Nt=!1,Wt=!1,kt=!1,Vt=!1,Ce;Ce=Symbol.for("react.module.reference");function Yt(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===a||Vt||e===i||e===v||e===w||kt||e===D||Mt||Nt||Wt||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===b||e.$$typeof===d||e.$$typeof===l||e.$$typeof===_||e.$$typeof===Ce||e.getModuleId!==void 0))}function zt(e,r,c){var p=e.displayName;if(p)return p;var h=r.displayName||r.name||"";return h!==""?c+"("+h+")":c}function Pe(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case s:return"Portal";case a:return"Profiler";case i:return"StrictMode";case v:return"Suspense";case w:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var r=e;return Pe(r)+".Consumer";case d:var c=e;return Pe(c._context)+".Provider";case _:return zt(e,e.render,"ForwardRef");case b:var p=e.displayName||null;return p!==null?p:O(e.type)||"Memo";case S:{var h=e,y=h._payload,m=h._init;try{return O(m(y))}catch{return null}}}return null}var F=Object.assign,V=0,Oe,Ie,Fe,De,Ae,Le,Me;function Ne(){}Ne.__reactDisabledLog=!0;function Bt(){{if(V===0){Oe=console.log,Ie=console.info,Fe=console.warn,De=console.error,Ae=console.group,Le=console.groupCollapsed,Me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ne,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function Ut(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:Oe}),info:F({},e,{value:Ie}),warn:F({},e,{value:Fe}),error:F({},e,{value:De}),group:F({},e,{value:Ae}),groupCollapsed:F({},e,{value:Le}),groupEnd:F({},e,{value:Me})})}V<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ne=A.ReactCurrentDispatcher,re;function U(e,r,c){{if(re===void 0)try{throw Error()}catch(h){var p=h.stack.trim().match(/\n( *(at )?)/);re=p&&p[1]||""}return`
`+re+e}}var oe=!1,H;{var Ht=typeof WeakMap=="function"?WeakMap:Map;H=new Ht}function We(e,r){if(!e||oe)return"";{var c=H.get(e);if(c!==void 0)return c}var p;oe=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=ne.current,ne.current=null,Bt();try{if(r){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(I){p=I}Reflect.construct(e,[],m)}else{try{m.call()}catch(I){p=I}e.call(m.prototype)}}else{try{throw Error()}catch(I){p=I}e()}}catch(I){if(I&&p&&typeof I.stack=="string"){for(var g=I.stack.split(`
`),j=p.stack.split(`
`),x=g.length-1,R=j.length-1;x>=1&&R>=0&&g[x]!==j[R];)R--;for(;x>=1&&R>=0;x--,R--)if(g[x]!==j[R]){if(x!==1||R!==1)do if(x--,R--,R<0||g[x]!==j[R]){var P=`
`+g[x].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,P),P}while(x>=1&&R>=0);break}}}finally{oe=!1,ne.current=y,Ut(),Error.prepareStackTrace=h}var M=e?e.displayName||e.name:"",Ze=M?U(M):"";return typeof e=="function"&&H.set(e,Ze),Ze}function Gt(e,r,c){return We(e,!1)}function Jt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,c){if(e==null)return"";if(typeof e=="function")return We(e,Jt(e));if(typeof e=="string")return U(e);switch(e){case v:return U("Suspense");case w:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return Gt(e.render);case b:return G(e.type,r,c);case S:{var p=e,h=p._payload,y=p._init;try{return G(y(h),r,c)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,ke={},Ve=A.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,c=G(e.type,e._source,r?r.type:null);Ve.setExtraStackFrame(c)}else Ve.setExtraStackFrame(null)}function Kt(e,r,c,p,h){{var y=Function.call.bind(J);for(var m in e)if(y(e,m)){var g=void 0;try{if(typeof e[m]!="function"){var j=Error((p||"React class")+": "+c+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}g=e[m](r,m,p,c,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(x){g=x}g&&!(g instanceof Error)&&(K(h),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",c,m,typeof g),K(null)),g instanceof Error&&!(g.message in ke)&&(ke[g.message]=!0,K(h),T("Failed %s type: %s",c,g.message),K(null))}}}var Qt=Array.isArray;function se(e){return Qt(e)}function Xt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,c=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return c}}function Zt(e){try{return Ye(e),!1}catch{return!0}}function Ye(e){return""+e}function ze(e){if(Zt(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xt(e)),Ye(e)}var Y=A.ReactCurrentOwner,qt={key:!0,ref:!0,__self:!0,__source:!0},Be,Ue,ie;ie={};function $t(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function en(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function tn(e,r){if(typeof e.ref=="string"&&Y.current&&r&&Y.current.stateNode!==r){var c=O(Y.current.type);ie[c]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O(Y.current.type),e.ref),ie[c]=!0)}}function nn(e,r){{var c=function(){Be||(Be=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};c.isReactWarning=!0,Object.defineProperty(e,"key",{get:c,configurable:!0})}}function rn(e,r){{var c=function(){Ue||(Ue=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};c.isReactWarning=!0,Object.defineProperty(e,"ref",{get:c,configurable:!0})}}var on=function(e,r,c,p,h,y,m){var g={$$typeof:t,type:e,key:r,ref:c,props:m,_owner:y};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function sn(e,r,c,p,h){{var y,m={},g=null,j=null;c!==void 0&&(ze(c),g=""+c),en(r)&&(ze(r.key),g=""+r.key),$t(r)&&(j=r.ref,tn(r,h));for(y in r)J.call(r,y)&&!qt.hasOwnProperty(y)&&(m[y]=r[y]);if(e&&e.defaultProps){var x=e.defaultProps;for(y in x)m[y]===void 0&&(m[y]=x[y])}if(g||j){var R=typeof e=="function"?e.displayName||e.name||"Unknown":e;g&&nn(m,R),j&&rn(m,R)}return on(e,g,j,h,p,Y.current,m)}}var ae=A.ReactCurrentOwner,He=A.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,c=G(e.type,e._source,r?r.type:null);He.setExtraStackFrame(c)}else He.setExtraStackFrame(null)}var ce;ce=!1;function ue(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function Ge(){{if(ae.current){var e=O(ae.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function an(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),c=e.lineNumber;return`

Check your code at `+r+":"+c+"."}return""}}var Je={};function cn(e){{var r=Ge();if(!r){var c=typeof e=="string"?e:e.displayName||e.name;c&&(r=`

Check the top-level render call using <`+c+">.")}return r}}function Ke(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var c=cn(r);if(Je[c])return;Je[c]=!0;var p="";e&&e._owner&&e._owner!==ae.current&&(p=" It was passed a child from "+O(e._owner.type)+"."),L(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',c,p),L(null)}}function Qe(e,r){{if(typeof e!="object")return;if(se(e))for(var c=0;c<e.length;c++){var p=e[c];ue(p)&&Ke(p,r)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var h=At(e);if(typeof h=="function"&&h!==e.entries)for(var y=h.call(e),m;!(m=y.next()).done;)ue(m.value)&&Ke(m.value,r)}}}function un(e){{var r=e.type;if(r==null||typeof r=="string")return;var c;if(typeof r=="function")c=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===_||r.$$typeof===b))c=r.propTypes;else return;if(c){var p=O(r);Kt(c,e.props,"prop",p,e)}else if(r.PropTypes!==void 0&&!ce){ce=!0;var h=O(r);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",h||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ln(e){{for(var r=Object.keys(e.props),c=0;c<r.length;c++){var p=r[c];if(p!=="children"&&p!=="key"){L(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),L(null);break}}e.ref!==null&&(L(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}function Xe(e,r,c,p,h,y){{var m=Yt(e);if(!m){var g="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=an(h);j?g+=j:g+=Ge();var x;e===null?x="null":se(e)?x="array":e!==void 0&&e.$$typeof===t?(x="<"+(O(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,g)}var R=sn(e,r,c,h,y);if(R==null)return R;if(m){var P=r.children;if(P!==void 0)if(p)if(se(P)){for(var M=0;M<P.length;M++)Qe(P[M],e);Object.freeze&&Object.freeze(P)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Qe(P,e)}return e===n?ln(R):un(R),R}}function dn(e,r,c){return Xe(e,r,c,!0)}function fn(e,r,c){return Xe(e,r,c,!1)}var _n=fn,pn=dn;W.Fragment=n,W.jsx=_n,W.jsxs=pn}()),W}process.env.NODE_ENV==="production"?Q.exports=qe():Q.exports=$e();var f=Q.exports;const fe={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},_e=u.createContext(!0),pe=u.createContext(o=>!o),et=({children:o})=>{const[t,s]=u.useState(!0);return f.jsx(_e.Provider,{value:t,children:f.jsx(pe.Provider,{value:s,children:o})})},tt=({children:o})=>{const t=u.useContext(_e);return f.jsx("div",{className:`${fe.spice_wrapper} ${t?fe.spice_wrapper_hidden:""}`,children:o})},nt=({children:o})=>f.jsx(et,{children:f.jsx(tt,{children:o})}),rt=()=>u.useContext(pe),X={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},ot=({className:o,children:t,aside:s,isSticky:n=!1})=>{const i=rt();return u.useEffect(()=>(n&&i(()=>!1),()=>{i(()=>!0)}),[]),f.jsxs("div",{className:o||"",children:[s.index===1&&f.jsx("div",{className:X.spice_aside_main,children:t}),f.jsx("aside",{className:`${X.spice_aside_aside} ${s.className?s.className:""}`,children:s.chidren}),s.index===0&&f.jsx("div",{className:X.spice_aside_main,children:t})]})},Z={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},ve=({formProps:o,className:t})=>f.jsx("input",{...o,className:`${Z.spice_form_input} ${t||""}`}),st=({formProps:o})=>{const t=o.isSelect;if(!t)return;const s=t.options.map(a=>f.jsx("option",{value:a,children:a},a)),n=()=>{const a=t.defaultValue;return a?f.jsx("option",{hidden:!0,children:a}):null},i=()=>{const a=t.defaultSelectedIndex;if(a)return t.options[a]};return f.jsxs("select",{name:o.name,id:o.id,className:Z.spice_form_select,defaultValue:i(),children:[f.jsx(n,{}),s]})},ge=({layoutType:o,formPropsArr:t,label:s,FormItem:n,errors:i})=>{const a=d=>!i||!i[d]?null:i[d];if(o==="block")return f.jsxs(f.Fragment,{children:[s&&f.jsx("label",{htmlFor:t[0].id,children:s}),f.jsx(n,{formProps:t[0]}),a(0)]});if(o==="flex")return f.jsxs(f.Fragment,{children:[s&&f.jsx("label",{htmlFor:t[0].id,children:s}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(n,{formProps:t[0]}),a(0)]}),f.jsxs("li",{children:[f.jsx(n,{formProps:t[1]}),a(1)]})]})]});if(o==="radio-check"){const d=t.map(l=>f.jsxs("li",{children:[f.jsx(n,{formProps:l,className:Z.spice_form_radioCheckInput}),f.jsx("label",{htmlFor:l.id,children:l.value})]},l.id));return f.jsxs(f.Fragment,{children:[s&&f.jsx("label",{children:s}),f.jsx("ul",{children:d}),a(0)]})}},it=({formProps:o})=>{const t=o.isTextarea;if(t)return f.jsx("textarea",{name:o.name,id:o.id,cols:t.cols,rows:t.rows,placeholder:o.placeholder,defaultValue:t.defaultValue})},at=({className:o,label:t,formProps:s,errors:n})=>{const i=s,a=i[0].type,d=i.length,l=!!i[0].isSelect,_=!!i[0].isTextarea;if(!(a==="radio"||a==="checkbox")&&d>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const v=b=>ge({layoutType:d===1?"block":"flex",formPropsArr:i,label:t,FormItem:b,errors:n}),w=()=>l?v(st):_?v(it):a==="radio"||a==="checkbox"?ge({layoutType:"radio-check",formPropsArr:i,label:t,FormItem:ve,errors:n}):v(ve);return f.jsx("fieldset",{className:`${o}`,children:f.jsx(w,{})})},q=o=>new Promise(t=>{o instanceof Promise?o.then(()=>{t(null)}):t(null)}),k={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},ct=({position:o,parent:t,content:s,callback:n,className:i})=>{const a=u.useRef(null),d=u.useRef(!1),[l,_]=u.useState(!1),[v,w]=u.useState(!0);return f.jsxs("div",{onMouseEnter:()=>{d.current=!0,w(!1),_(!0),n!=null&&n.enter&&n.enter(a.current)},onMouseLeave:async()=>{d.current=!1,w(!0),n!=null&&n.leave&&await q(n.leave(a.current)),d.current||_(!1)},className:`${k.spice_dropdown_wrapper} ${i||""}`,children:[t.children,f.jsx("div",{ref:a,className:`${k.spice_dropdown_content} ${l?"":k.spice_dropdown_content_hidden} ${v?k.spice_dropdown_content_pointerPrevent:""} ${k["spice_dropdown_"+o]}`,children:s.children})]})},me=o=>{o>60&&(o=60);const t=Math.floor(1e3/o);let s=performance.now();const n=d=>{const l=d-s,_=l<=t;return _||(s=d-l%t),_},i={callback:null,isPlay:!1,id:0},a=d=>{i.id=requestAnimationFrame(a),!n(d)&&i.callback&&i.isPlay&&i.callback()};return u.useEffect(()=>(i.id=requestAnimationFrame(a),()=>{cancelAnimationFrame(i.id)}),[]),(d,l)=>{if(d==="play"){if(!l){console.warn("Callback function is required when 'play'");return}i.callback=l,i.isPlay=!0}else d==="pause"&&(i.isPlay=!1)}},ut={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},lt=({className:o,children:t,callback:s,fps:n=60,stopPropagation:i=!1})=>{const a=u.useRef(null),d=u.useRef(null),l=u.useRef(),_=me(n),v={target:a.current,children:d.current,x:0,y:0},w=C=>{v.target=a.current,v.children=d.current},b=C=>{l.current=C.currentTarget.getBoundingClientRect(),v.x=C.clientX-l.current.left-l.current.width/2,v.y=C.clientY-l.current.top-l.current.height/2},S=C=>{C.stopPropagation(),w(),b(C),_("play",()=>{s.move(v)})},D=C=>{C.stopPropagation(),b(C)},B=C=>{C.stopPropagation(),_("pause"),s.leave&&s.leave(v)};return f.jsx("div",{onMouseEnter:S,onMouseMove:D,onMouseLeave:B,className:o||"",ref:a,children:f.jsx("div",{ref:d,className:i?ut.spice_magnet_stopPropagation:"",children:t})})},$={spice_bgImg_wrapper:"_spice_bgImg_wrapper_12iq7_1",spice_bgImg_view:"_spice_bgImg_view_12iq7_6",spice_bgImg_golden:"_spice_bgImg_golden_12iq7_20",spice_bgImg_silver:"_spice_bgImg_silver_12iq7_24",spice_bgImg_platinum:"_spice_bgImg_platinum_12iq7_28","spice_bgImg_16-9":"_spice_bgImg_16-9_12iq7_32",spice_bgImg_square:"_spice_bgImg_square_12iq7_36","spice_bgImg_3-2":"_spice_bgImg_3-2_12iq7_40","spice_bgImg_4-3":"_spice_bgImg_4-3_12iq7_44"},dt=({ratio:o,children:t,className:s})=>{const n=["golden","silver","platinum","16-9","square","3-2","4-3"];let i=n.includes(o),a=typeof o=="number"&&o>0;if(!i&&!a)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${n.join(" | ")} or a number greater than 0.`);return f.jsx("div",{className:`${$.spice_bgImg_wrapper} ${s||""}`,children:f.jsx("div",{className:`${$.spice_bgImg_view} ${i?$["spice_bgImg_"+o]:""}`,style:a?{paddingTop:`${o}%`}:{},children:t})})},he=o=>{const t=document.documentElement.style,s=document.body.style;o==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",s.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",s.overflow="")},ft={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},_t=({children:o,className:t,dialog:s,callback:n})=>{const i=u.useRef(null),a=()=>{he("add"),i.current.showModal(),n!=null&&n.open&&n.open(i.current)},d=async()=>{n!=null&&n.close&&await q(n.close(i.current)),he("remove"),i.current.close()};return u.useEffect(()=>{const l=i.current.querySelectorAll(".spice__modal_close");l&&l.forEach(_=>{_.addEventListener("click",()=>{d()})})},[]),f.jsxs(f.Fragment,{children:[f.jsx("button",{className:t||"",onClick:()=>{a()},children:o}),f.jsx("dialog",{ref:i,onClick:l=>{l.target===i.current&&d()},className:`${ft.spice_modal_dialog} ${s.className?s.className:""}`,children:s.children})]})},pt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},we=u.createContext(pt),be=u.createContext(()=>{}),vt=({children:o,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[s,n]=u.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return f.jsx(we.Provider,{value:s,children:f.jsx(be.Provider,{value:n,children:o})})},ye=()=>u.useContext(we),ee=()=>u.useContext(be),gt=({children:o,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=ee(),i=ye(),a=()=>{i.current===t||i.isLeaving||n(d=>({...d,isLeaving:!0,isAnimation:!0,prev:d.current,next:t}))};return f.jsx("button",{onClick:a,className:s||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":i.current===t,children:o})},mt={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},Ee=({content:o,isOpen:t})=>{const s=o.querySelectorAll("a,button");if(!s)return;const n=t?"0":"-1";s.forEach(i=>{i.setAttribute("tabindex",n)})},ht=Object.freeze(Object.defineProperty({__proto__:null,Button:gt,Content:({children:o,value:t,className:s,callback:n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const i=u.useRef(!0),a=u.useRef(null),d=ee(),l=ye(),_=l.current===t&&!l.isLeaving;return u.useEffect(()=>{if(i.current){i.current=!1;return}if(!l.isAnimation){_&&n!=null&&n.reset&&n.reset(a.current);return}l.prev===t&&(async()=>(n!=null&&n.close&&await q(n.close(a.current)),d(v=>({...v,isLeaving:!1,prev:"",current:v.next,next:""}))))(),_&&n!=null&&n.open&&n.open(a.current)},[l,d,n,t,_]),u.useEffect(()=>{Ee({content:a.current,isOpen:l.current===t})},[l,t]),f.jsx("div",{ref:a,className:`${l.current!==t?mt.spice_tab_hidden:""} ${s||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":l.current!==t,children:o})},Context:vt,useTabSwitch:()=>{const o=ee();return(t,s)=>{o(n=>({isAnimation:s,isLeaving:s,prev:s?n.current:"",current:s?n.current:t,next:s?t:""}))}}},Symbol.toStringTag,{value:"Module"})),wt={target:"",toggle:!1,defaultValue:[]},xe=u.createContext(wt),Re=u.createContext(()=>{}),bt=({children:o,defaultValue:t})=>{const[s,n]=u.useState({target:"",toggle:!1,defaultValue:t});return f.jsx(xe.Provider,{value:s,children:f.jsx(Re.Provider,{value:n,children:o})})},Se=()=>u.useContext(xe),yt=()=>u.useContext(Re),Et=({children:o,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=Se(),i=yt(),a=!!n.defaultValue.find(_=>_===t),[d,l]=u.useState(a);return f.jsx("button",{className:s||"",onClick:()=>{i(_=>({..._,toggle:d,target:t})),l(!d)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":d,children:o})},Te={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},je=({targetRef:o,callback:t,debounce:s,dependencies:n=[]})=>{const i=u.useRef(0),a=u.useRef(!0);u.useEffect(()=>{const d=new ResizeObserver(_=>{clearTimeout(i.current),i.current=setTimeout(()=>{if(a.current){a.current=!1;return}t(_[0].target)},s)}),l=o.current;if(l)return d.observe(l),()=>{d.unobserve(l),clearTimeout(i.current)}},n)},xt=Object.freeze(Object.defineProperty({__proto__:null,Button:Et,Content:({value:o,callback:t,children:s,className:n})=>{if(o==="")throw new Error("Please set the value to something other than an empty string.");const i=u.useRef(!0),a=u.useRef(null),d=u.useRef(null),l=Se(),_=!!l.defaultValue.find(b=>b===o),[v,w]=u.useState(_);return u.useEffect(()=>{l.target===o&&w(!v)},[l.target,l.toggle]),u.useEffect(()=>{if(i.current){i.current=!1;return}const b={height:d.current.getBoundingClientRect().height,target:a.current};v?t.open(b):t.close(b)},[v]),u.useEffect(()=>{Ee({content:a.current,isOpen:v})},[v]),je({targetRef:d,callback:b=>{const S=b.getBoundingClientRect().height;v&&(a.current.style.height=`${S}px`)},dependencies:[v],debounce:100}),f.jsx("div",{ref:a,className:`${Te.spice_accordion_content} ${_?"":Te.spice_accordion_hidden}`,id:`content-${o}`,"aria-labelledby":`button-${o}`,"aria-hidden":!v,children:f.jsx("div",{ref:d,className:n||"",children:s})})},Context:bt},Symbol.toStringTag,{value:"Module"})),Rt=typeof document<"u"?u.useLayoutEffect:u.useEffect,St=({targetRef:o,rootMargin:t="0px",threshold:s=0,once:n,callback:i,dependencies:a=[]})=>{const d={rootMargin:t,threshold:s};u.useEffect(()=>{const l=o==null?void 0:o.current;if(!l)return;const _=(w,b)=>{w.forEach(S=>{S.isIntersecting&&i.enter?(i.enter(S.target),n&&b.unobserve(S.target)):!S.isIntersecting&&i.leave&&i.leave(S.target)})},v=new IntersectionObserver(_,d);return v.observe(l),()=>{v.unobserve(l)}},a)},z=({callback:o,debounce:t,dependencies:s=[]})=>{const n=u.useRef(0),i=u.useRef(0),a=()=>{clearTimeout(i.current),i.current=setTimeout(()=>{o({winW:window.innerWidth,winH:window.innerHeight,initWinW:n.current})},t)};u.useEffect(()=>(n.current=window.innerWidth,window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),clearTimeout(i.current)}),s)},Tt=({initWinW:o,winW:t,threshold:s})=>{let n=!(o<=s);t<=s?n&&window.location.reload():!n&&window.location.reload()},jt=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`,Ct=()=>{console.log(jt)},Pt=o=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const s=o>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==s&&t.setAttribute("content",s)},Ot=({reloadThresholds:o,isFixViewportForSmall:t=!0,areYouFun:s=!1})=>{const n=i=>{t&&Pt(i)};z({callback({initWinW:i,winW:a}){o&&o.forEach(d=>{Tt({initWinW:i,winW:a,threshold:d})}),n(a)},debounce:100,dependencies:[]}),u.useEffect(()=>{document.body.dataset.spiceRendered="true",n(window.innerWidth),s&&process.env.NODE_ENV!=="development"&&Ct()},[])},It=()=>{const[o,t]=u.useState(null),s=()=>{const n=window.ontouchstart,i=navigator.maxTouchPoints;n!==void 0&&0<i?t(!0):t(!1)};return z({callback(){s()},debounce:100,dependencies:[]}),u.useEffect(()=>{s()},[]),o},te="scroll",Ft=({threshold:o=0,debounce:t,dependencies:s=[]})=>{const n=u.useRef(null),[i,a]=u.useReducer((w,b)=>{switch(b.type){case te:return n.current=b.payload,b.payload;default:return w}},n.current),d=u.useRef(0),l=u.useRef(0),_=()=>window.scrollY||document.documentElement.scrollTop,v=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const w=_();w>d.current+o&&n.current!=="down"?a({type:te,payload:"down"}):w<d.current-o&&n.current!=="up"&&a({type:te,payload:"up"}),d.current=w},t)};return u.useEffect(()=>(d.current=_(),window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),clearTimeout(l.current)}),s),i},Dt=({type:o,width:t})=>{const[s,n]=u.useState(null),i=a=>{switch(o){case"max":n(t<=a);break;case"min":n(t>=a);break}};return z({callback:({winW:a})=>{i(a)},debounce:100,dependencies:[]}),u.useEffect(()=>{i(window.innerWidth)},[]),s};E.Accordion=xt,E.AsideLayout=ot,E.BackgroundImage=dt,E.Dropdown=ct,E.FormField=at,E.Magnet=lt,E.Modal=_t,E.Tab=ht,E.WrapperLayout=nt,E.useAnimationFrame=me,E.useIntersectionObserver=St,E.useIsTouchDevice=It,E.useIsomorphicLayoutEffect=Rt,E.useMediaQuery=Dt,E.useResizeObserver=je,E.useScrollDirection=Ft,E.useStarter=Ot,E.useWindowResizeObserver=z,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
