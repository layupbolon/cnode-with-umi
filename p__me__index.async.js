(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{jYCa:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a("lwsE")),r=n(a("W8MJ")),o=n(a("a1gu")),l=n(a("Nsbk")),s=n(a("7W2i"));a("puyI");var c=n(a("xZH1")),i=n(a("q1tI")),d=a("MuoO"),f=n(a("usdK")),p=a("Kvkj"),v=c.default.alert,g=function(e){function t(){return(0,u.default)(this,t),(0,o.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("User");if(e){var t=JSON.parse(e);if(t){var a=this.props.dispatch;a({type:"user/getUserData",payload:{userName:t.loginname}})}}else f.default.replace("/login")}},{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.userData;return a?i.default.createElement("div",null,i.default.createElement(p.Nav,{title:"\u4e2a\u4eba\u4e2d\u5fc3",showBackIcon:!1,showSignOutIcon:!0,rightIconFunc:function(){v("\u9000\u51fa","\u786e\u5b9a\u9000\u51fa\u767b\u5f55\uff1f",[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")}},{text:"\u786e\u5b9a",onPress:function(){return t({type:"login/logout",payload:{cb:function(){f.default.replace("/topicList")}}})}}])}}),i.default.createElement(p.UserInfo,{userData:a}),i.default.createElement(p.Footer,{selectedIndex:3})):null}}]),t}(i.default.PureComponent);function h(e){var t=e.user;return{userData:t.userData}}var m=(0,d.connect)(h)(g);t.default=m}}]);