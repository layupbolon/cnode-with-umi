(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{XOlF:function(e,a,s){"use strict";var t=s("284h"),n=s("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(s("o0o1")),d=t(s("3eXy")),c={namespace:"msg",state:{has_read_messages:[],hasnot_read_messages:[]},reducers:{changeState:function(e,a){var s=a.payload;e[s.key]=s.value}},effects:{GetMsg:r.default.mark(function e(a,s){var t,n,c,o,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,n=s.call,c=s.put,o=s.all,e.next=4,n(d.GetMsg,t.accesstoken);case 4:return u=e.sent,e.next=7,o([c({type:"changeState",payload:{key:"has_read_messages",value:u.data.data.has_read_messages}}),c({type:"changeState",payload:{key:"hasnot_read_messages",value:u.data.data.hasnot_read_messages}})]);case 7:case"end":return e.stop()}},e,this)})}};a.default=c}}]);