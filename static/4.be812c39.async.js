webpackJsonp([4],{299:function(e,t,n){"use strict";function r(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector,r=e;r;){if(n.call(r,t))return r;r=r.parentElement}return null}function o(){}function i(){}function a(e,t){function n(){N.a.unmountComponentAtNode(l),l&&l.parentNode&&l.parentNode.removeChild(l)}function o(e){if(/iPhone|iPod|iPad/i.test(navigator.userAgent)){r(e.currentTarget,"."+u+"-footer")||e.preventDefault()}}var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{text:"\u786e\u5b9a"}],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ios",s=!1;if(!e&&!t)return{close:function(){}};var l=document.createElement("div");document.body.appendChild(l);var c=i.map(function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!s){var e=t();e&&e.then?e.then(function(){s=!0,n()}).catch(function(){}):(s=!0,n())}},e}),u="am-modal";return N.a.render(b.a.createElement(H,{visible:!0,transparent:!0,title:e,transitionName:"am-zoom",closable:!1,maskClosable:!1,footer:c,maskTransitionName:"am-fade",platform:a,wrapProps:{onTouchStart:o}},b.a.createElement("div",{className:u+"-alert-content"},t)),l),{close:n}}function s(){function e(){N.a.unmountComponentAtNode(a),a&&a.parentNode&&a.parentNode.removeChild(a)}function t(e){if(/iPhone|iPod|iPad/i.test(navigator.userAgent)){r(e.currentTarget,".am-modal-footer")||e.preventDefault()}}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"\u786e\u5b9a"}],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ios",i=!1,a=document.createElement("div");document.body.appendChild(a);var s=n.map(function(t){var n=t.onPress||function(){};return t.onPress=function(){if(!i){var t=n();t&&t.then?t.then(function(){i=!0,e()}).catch(function(){}):(i=!0,e())}},t});return N.a.render(b.a.createElement(H,{visible:!0,operation:!0,transparent:!0,prefixCls:"am-modal",transitionName:"am-zoom",closable:!1,maskClosable:!0,onClose:e,footer:s,maskTransitionName:"am-fade",className:"am-modal-operation",platform:o,wrapProps:{onTouchStart:t}}),a),{close:e}}function l(e,t,n){function o(e){var t=e.target,n=t.getAttribute("type");null!==n&&(d[n]=t.value)}function i(){N.a.unmountComponentAtNode(E),E&&E.parentNode&&E.parentNode.removeChild(E)}function a(e){if("function"==typeof e){var t=d.text,n=void 0===t?"":t,r=d.password,o=void 0===r?"":r,i="login-password"===l?[n,o]:"secure-text"===l?[o]:[n];return e.apply(void 0,i)}}function s(e){if(/iPhone|iPod|iPad/i.test(navigator.userAgent)){r(e.currentTarget,"."+f+"-content")||e.preventDefault()}}var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["",""],p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"ios",m=!1;if(c="string"==typeof c?c:"number"==typeof c?""+c:"",!n)return{close:function(){}};var f="am-modal",d={text:c},v=void 0,h=function(e){setTimeout(function(){e&&e.focus()},500)};switch(l){case"login-password":v=b.a.createElement("div",{className:f+"-input-container"},b.a.createElement("div",{className:f+"-input"},b.a.createElement("label",null,b.a.createElement("input",{type:"text",defaultValue:d.text,ref:function(e){return h(e)},onChange:o,placeholder:u[0]}))),b.a.createElement("div",{className:f+"-input"},b.a.createElement("label",null,b.a.createElement("input",{type:"password",defaultValue:d.password,onChange:o,placeholder:u[1]}))));break;case"secure-text":v=b.a.createElement("div",{className:f+"-input-container"},b.a.createElement("div",{className:f+"-input"},b.a.createElement("label",null,b.a.createElement("input",{type:"password",defaultValue:d.password,ref:function(e){return h(e)},onChange:o,placeholder:u[0]}))));break;case"default":default:v=b.a.createElement("div",{className:f+"-input-container"},b.a.createElement("div",{className:f+"-input"},b.a.createElement("label",null,b.a.createElement("input",{type:"text",defaultValue:d.text,ref:function(e){return h(e)},onChange:o,placeholder:u[0]}))))}var y=b.a.createElement("div",null,t,v),E=document.createElement("div");document.body.appendChild(E);var g=void 0;g="function"==typeof n?[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u5b9a",onPress:function(){a(n)}}]:n.map(function(e){return{text:e.text,onPress:function(){return a(e.onPress)}}});var k=g.map(function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!m){var e=t();e&&e.then?e.then(function(){m=!0,i()}).catch(function(){}):(m=!0,i())}},e});return N.a.render(b.a.createElement(H,{visible:!0,transparent:!0,prefixCls:f,title:e,closable:!1,maskClosable:!1,transitionName:"am-zoom",footer:k,maskTransitionName:"am-fade",platform:p,wrapProps:{onTouchStart:s}},b.a.createElement("div",{className:f+"-propmt-content"},y)),E),{close:i}}function c(e){return{userData:e.user.userData}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(85),p=n.n(u),m=n(86),f=n.n(m),d=n(87),v=n.n(d),h=n(88),y=n.n(h),E=n(89),g=n.n(E),k=(n(58),n(316),n(0)),b=n.n(k),C=n(84),N=n.n(C),A=n(4),w=n.n(A),T=n(56),P=n.n(T),L=n(8),x=n.n(L),O=n(9),_=n.n(O),S=n(11),D=n.n(S),j=n(12),M=n.n(j),R=n(41),W=n.n(R),z=n(307),I=function(e){function t(){return x()(this,t),D()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return M()(t,e),_()(t,[{key:"shouldComponentUpdate",value:function(e){return!!e.hiddenClassName||!!e.visible}},{key:"render",value:function(){var e=this.props.className;this.props.hiddenClassName&&!this.props.visible&&(e+=" "+this.props.hiddenClassName);var t=w()({},this.props);return delete t.hiddenClassName,delete t.visible,t.className=e,b.a.createElement("div",w()({},t))}}]),t}(b.a.Component),K=I,U=function(e){function t(){x()(this,t);var e=D()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.getDialogElement=function(){var t=e.props,n=t.closable,r=t.prefixCls,o=void 0;t.footer&&(o=b.a.createElement("div",{className:r+"-footer",ref:function(t){return e.footerRef=t}},t.footer));var i=void 0;t.title&&(i=b.a.createElement("div",{className:r+"-header",ref:function(t){return e.headerRef=t}},b.a.createElement("div",{className:r+"-title"},t.title)));var a=void 0;n&&(a=b.a.createElement("button",{onClick:e.close,"aria-label":"Close",className:r+"-close"},b.a.createElement("span",{className:r+"-close-x"})));var s=e.getTransitionName(),l=b.a.createElement(K,{key:"dialog-element",role:"document",ref:function(t){return e.dialogRef=t},style:t.style||{},className:r+" "+(t.className||""),visible:t.visible},b.a.createElement("div",{className:r+"-content"},a,i,b.a.createElement("div",{className:r+"-body",style:t.bodyStyle,ref:function(t){return e.bodyRef=t}},t.children),o));return b.a.createElement(z.a,{key:"dialog",showProp:"visible",onAppear:e.onAnimateAppear,onLeave:e.onAnimateLeave,transitionName:s,component:"",transitionAppear:!0},l)},e.onAnimateAppear=function(){document.body.style.overflow="hidden"},e.onAnimateLeave=function(){document.body.style.overflow="",e.wrapRef&&(e.wrapRef.style.display="none"),e.props.onAnimateLeave&&e.props.onAnimateLeave(),e.props.afterClose&&e.props.afterClose()},e.close=function(t){e.props.onClose&&e.props.onClose(t)},e.onMaskClick=function(t){t.target===t.currentTarget&&e.close(t)},e}return M()(t,e),_()(t,[{key:"componentWillUnmount",value:function(){document.body.style.overflow="",this.wrapRef&&(this.wrapRef.style.display="none")}},{key:"getZIndexStyle",value:function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e}},{key:"getWrapStyle",value:function(){var e=this.props.wrapStyle||{};return w()({},this.getZIndexStyle(),e)}},{key:"getMaskStyle",value:function(){var e=this.props.maskStyle||{};return w()({},this.getZIndexStyle(),e)}},{key:"getMaskTransitionName",value:function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName,n=e.animation;return!t&&n&&(t=e.prefixCls+"-"+n),t}},{key:"getMaskElement",value:function(){var e=this.props,t=void 0;if(e.mask){var n=this.getMaskTransitionName();t=b.a.createElement(K,{style:this.getMaskStyle(),key:"mask-element",className:e.prefixCls+"-mask",hiddenClassName:e.prefixCls+"-mask-hidden",visible:e.visible}),n&&(t=b.a.createElement(z.a,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:n},t))}return t}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.maskClosable,o=this.getWrapStyle();return t.visible&&(o.display=null),b.a.createElement("div",null,this.getMaskElement(),b.a.createElement("div",w()({className:n+"-wrap "+(t.wrapClassName||""),ref:function(t){return e.wrapRef=t},onClick:r?this.onMaskClick:void 0,role:"dialog","aria-labelledby":t.title,style:o},t.wrapProps),this.getDialogElement()))}}]),t}(b.a.Component),V=U;U.defaultProps={afterClose:o,className:"",mask:!0,visible:!1,closable:!0,maskClosable:!0,prefixCls:"rmc-dialog",onClose:o};var B=!!N.a.createPortal,F=function(e){function t(){x()(this,t);var e=D()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveRef=function(t){B&&(e._component=t)},e.getComponent=function(t){var n=w()({},e.props);return["visible","onAnimateLeave"].forEach(function(e){n.hasOwnProperty(e)&&delete n[e]}),b.a.createElement(V,w()({},n,{visible:t,onAnimateLeave:e.removeContainer,ref:e.saveRef}))},e.removeContainer=function(){e.container&&(B||N.a.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null)},e.getContainer=function(){if(!e.container){var t=document.createElement("div"),n=e.props.prefixCls+"-container-"+(new Date).getTime();t.setAttribute("id",n),document.body.appendChild(t),e.container=t}return e.container},e}return M()(t,e),_()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.componentDidUpdate()}},{key:"shouldComponentUpdate",value:function(e){var t=e.visible;return!(!this.props.visible&&!t)}},{key:"componentWillUnmount",value:function(){this.props.visible?B?this.removeContainer():this.renderDialog(!1):this.removeContainer()}},{key:"componentDidUpdate",value:function(){B||this.renderDialog(this.props.visible)}},{key:"renderDialog",value:function(e){N.a.unstable_renderSubtreeIntoContainer(this,this.getComponent(e),this.getContainer())}},{key:"render",value:function(){var e=this.props.visible;return B&&(e||this._component)?N.a.createPortal(this.getComponent(e),this.getContainer()):null}}]),t}(b.a.Component),Z=F;F.defaultProps={visible:!1,prefixCls:"rmc-dialog",onClose:i};var J=n(149),q=function(e){function t(){return x()(this,t),D()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return M()(t,e),t}(b.a.Component),$=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},G=function(e){function t(){return x()(this,t),D()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return M()(t,e),_()(t,[{key:"renderFooterButton",value:function(e,t,n){var r={};if(e.style&&"string"==typeof(r=e.style)){r={cancel:{},default:{},destructive:{color:"red"}}[r]||{}}var o=function(t){t.preventDefault(),e.onPress&&e.onPress()};return b.a.createElement(J.a,{activeClassName:t+"-button-active",key:n},b.a.createElement("a",{className:t+"-button",role:"button",style:r,onClick:o},e.text||"Button"))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,o=n.className,i=n.wrapClassName,a=n.transitionName,s=n.maskTransitionName,l=n.style,c=n.platform,u=n.footer,p=void 0===u?[]:u,m=n.operation,f=n.animated,d=n.transparent,v=n.popup,h=n.animationType,y=$(n,["prefixCls","className","wrapClassName","transitionName","maskTransitionName","style","platform","footer","operation","animated","transparent","popup","animationType"]),E=W()(r+"-button-group-"+(2!==p.length||m?"v":"h"),r+"-button-group-"+(m?"operation":"normal")),g=p.length?b.a.createElement("div",{className:E,role:"group"},p.map(function(e,n){return t.renderFooterButton(e,r,n)})):null,k=void 0,C=void 0;f&&(k=C=d?"am-fade":"am-slide-up",v&&(k="slide-up"===h?"am-slide-up":"am-slide-down",C="am-fade"));var N=W()(i,P()({},r+"-wrap-popup",v)),A=W()(o,(e={},P()(e,r+"-transparent",d),P()(e,r+"-popup",v),P()(e,r+"-popup-"+h,v&&h),P()(e,r+"-android","android"===c),e));return b.a.createElement(Z,w()({},y,{prefixCls:r,className:A,wrapClassName:N,transitionName:a||k,maskTransitionName:s||C,style:l,footer:g}))}}]),t}(q),H=G;G.defaultProps={prefixCls:"am-modal",transparent:!1,popup:!1,animationType:"slide-down",animated:!0,style:{},onShow:function(){},footer:[],closable:!1,operation:!1,platform:"ios"},H.alert=a,H.prompt=l,H.operation=s;var Q=H,X=n(57),Y=n(42),ee=n.n(Y),te=n(146),ne=Q.alert,re=b.a.createElement(te.b,{selectedIndex:3}),oe=function(e){function t(){return f()(this,t),y()(this,(t.__proto__||p()(t)).apply(this,arguments))}return g()(t,e),v()(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("User");if(!e)return void ee.a.replace("/login");var t=JSON.parse(e);if(t){(0,this.props.dispatch)({type:"user/getUserData",payload:{userName:t.loginname}})}}},{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.userData;return n?b.a.createElement("div",null,b.a.createElement(te.f,{title:"\u4e2a\u4eba\u4e2d\u5fc3",showBackIcon:!1,showSignOutIcon:!0,rightIconFunc:function(){ne("\u9000\u51fa","\u786e\u5b9a\u9000\u51fa\u767b\u5f55\uff1f",[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")}},{text:"\u786e\u5b9a",onPress:function(){return t({type:"login/logout",payload:{cb:function(){ee.a.replace("/topicList")}}})}}])}}),b.a.createElement(te.h,{userData:n}),re):null}}]),t}(b.a.PureComponent);t.default=Object(X.connect)(c)(oe)},305:function(e,t){e.exports=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},307:function(e,t,n){"use strict";function r(e){var t=[];return L.a.Children.forEach(e,function(e){t.push(e)}),t}function o(e,t){var n=null;return e&&e.forEach(function(e){n||e&&e.key===t&&(n=e)}),n}function i(e,t,n){var r=null;return e&&e.forEach(function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}}),r}function a(e,t,n){var r=e.length===t.length;return r&&e.forEach(function(e,o){var i=t[o];e&&i&&(e&&!i||!e&&i?r=!1:e.key!==i.key?r=!1:n&&e.props[n]!==i.props[n]&&(r=!1))}),r}function s(e,t){var n=[],r={},i=[];return e.forEach(function(e){e&&o(t,e.key)?i.length&&(r[e.key]=i,i=[]):i.push(e)}),t.forEach(function(e){e&&r.hasOwnProperty(e.key)&&(n=n.concat(r[e.key])),n.push(e)}),n=n.concat(i)}function l(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}function u(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<B.length&&!(r=n.getPropertyValue(B[o]+t));o++);return r}function p(e){if(U){var t=parseFloat(u(e,"transition-delay"))||0,n=parseFloat(u(e,"transition-duration"))||0,r=parseFloat(u(e,"animation-delay"))||0,o=parseFloat(u(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},1e3*i+200)}}function m(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}function f(e){var t=e.children;return L.a.isValidElement(t)&&!t.key?L.a.cloneElement(t,{key:Q}):t}function d(){}var v=n(4),h=n.n(v),y=n(56),E=n.n(y),g=n(8),k=n.n(g),b=n(9),C=n.n(b),N=n(11),A=n.n(N),w=n(12),T=n.n(w),P=n(0),L=n.n(P),x=n(5),O=n.n(x),_=n(26),S=n.n(_),D=n(84),j=n.n(D),M={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},R=[];"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete M.animationend.animation,"TransitionEvent"in window||delete M.transitionend.transition;for(var n in M)if(M.hasOwnProperty(n)){var r=M[n];for(var o in r)if(o in t){R.push(r[o]);break}}}();var W={addEndEventListener:function(e,t){if(0===R.length)return void window.setTimeout(t,0);R.forEach(function(n){l(e,n,t)})},endEvents:R,removeEndEventListener:function(e,t){0!==R.length&&R.forEach(function(n){c(e,n,t)})}},z=W,I=n(308),K=n.n(I),U=0!==z.endEvents.length,V=["Webkit","Moz","O","ms"],B=["-webkit-","-moz-","-o-","ms-",""],F=function(e,t,n){var r="object"===(void 0===t?"undefined":S()(t)),o=r?t.name:t,i=r?t.active:t+"-active",a=n,s=void 0,l=void 0,c=K()(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(a=n.end,s=n.start,l=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),m(e),c.remove(o),c.remove(i),z.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,a&&a())},z.addEndEventListener(e,e.rcEndListener),s&&s(),c.add(o),e.rcAnimTimeout=setTimeout(function(){e.rcAnimTimeout=null,c.add(i),l&&setTimeout(l,0),p(e)},30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};F.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),m(e),z.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},z.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,p(e)},0)},F.setTransition=function(e,t,n){var r=t,o=n;void 0===n&&(o=r,r=""),r=r||"",V.forEach(function(t){e.style[t+"Transition"+r]=o})},F.isCssAnimationSupported=U;var Z=F,J={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},q=J,$={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},G=function(e){function t(){return k()(this,t),A()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return T()(t,e),C()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){q.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){q.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){q.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=j.a.findDOMNode(this),o=this.props,i=o.transitionName,a="object"===(void 0===i?"undefined":S()(i));this.stop();var s=function(){n.stopper=null,t()};if((U||!o.animation[e])&&i&&o[$[e]]){var l=a?i[e]:i+"-"+e,c=l+"-active";a&&i[e+"Active"]&&(c=i[e+"Active"]),this.stopper=Z(r,{name:l,active:c},s)}else this.stopper=o.animation[e](r,s)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(L.a.Component);G.propTypes={children:O.a.any};var H=G,Q="rc_animate_"+Date.now(),X=function(e){function t(e){k()(this,t);var n=A()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Y.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:r(f(e))},n.childrenRefs={},n}return T()(t,e),C()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter(function(e){return!!e.props[t]})),n.forEach(function(t){t&&e.performAppear(t.key)})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=r(f(e)),a=this.props;a.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(e){t.stop(e)});var l=a.showProp,c=this.currentlyAnimatingKeys,u=a.exclusive?r(f(a)):this.state.children,p=[];l?(u.forEach(function(e){var t=e&&o(n,e.key),r=void 0;(r=t&&t.props[l]||!e.props[l]?t:L.a.cloneElement(t||e,E()({},l,!0)))&&p.push(r)}),n.forEach(function(e){e&&o(u,e.key)||p.push(e)})):p=s(u,n),this.setState({children:p}),n.forEach(function(e){var n=e&&e.key;if(!e||!c[n]){var r=e&&o(u,n);if(l){var a=e.props[l];if(r){!i(u,n,l)&&a&&t.keysToEnter.push(n)}else a&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}}),u.forEach(function(e){var r=e&&e.key;if(!e||!c[r]){var a=e&&o(n,r);if(l){var s=e.props[l];if(a){!i(n,r,l)&&s&&t.keysToLeave.push(r)}else s&&t.keysToLeave.push(r)}else a||t.keysToLeave.push(r)}})}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?i(e,t,n):o(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map(function(n){if(null===n||void 0===n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return L.a.createElement(H,{key:n.key,ref:function(t){return e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)}));var o=t.component;if(o){var i=t;return"string"==typeof o&&(i=h()({className:t.className,style:t.style},t.componentProps)),L.a.createElement(o,i,r)}return r[0]||null}}]),t}(L.a.Component);X.isAnimate=!0,X.propTypes={component:O.a.any,componentProps:O.a.object,animation:O.a.object,transitionName:O.a.oneOfType([O.a.string,O.a.object]),transitionEnter:O.a.bool,transitionAppear:O.a.bool,exclusive:O.a.bool,transitionLeave:O.a.bool,onEnd:O.a.func,onEnter:O.a.func,onLeave:O.a.func,onAppear:O.a.func,showProp:O.a.string},X.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:d,onEnter:d,onLeave:d,onAppear:d};var Y=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var o=e.props;if(delete e.currentlyAnimatingKeys[t],!o.exclusive||o===e.nextProps){var i=r(f(o));e.isValidChildByKey(i,t)?"appear"===n?q.allowAppearCallback(o)&&(o.onAppear(t),o.onEnd(t,!0)):q.allowEnterCallback(o)&&(o.onEnter(t),o.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var o=r(f(n));if(e.isValidChildByKey(o,t))e.performEnter(t);else{var i=function(){q.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};a(e.state.children,o,n.showProp)?i():e.setState({children:o},i)}}}};t.a=X},308:function(e,t,n){function r(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}try{var o=n(305)}catch(e){var o=n(305)}var i=/\s+/,a=Object.prototype.toString;e.exports=function(e){return new r(e)},r.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~o(t,e)||t.push(e),this.el.className=t.join(" "),this},r.prototype.remove=function(e){if("[object RegExp]"==a.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=o(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},r.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},r.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},r.prototype.array=function(){var e=this.el.getAttribute("class")||"",t=e.replace(/^\s+|\s+$/g,""),n=t.split(i);return""===n[0]&&n.shift(),n},r.prototype.has=r.prototype.contains=function(e){return this.list?this.list.contains(e):!!~o(this.array(),e)}},316:function(e,t){}});