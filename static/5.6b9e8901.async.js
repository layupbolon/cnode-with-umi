webpackJsonp([5],{"Ax/0":function(e,a,t){"use strict";function l(e){var a=e.dataSource,t=e.replies,l=e.dispatch;if(!a||!a.id)return null;var o=localStorage.getItem("User");return r.a.createElement("div",null,y,r.a.createElement("div",{className:u.a.topicDetail},r.a.createElement("div",{className:u.a.topicTopInfo},r.a.createElement("div",{className:u.a.topicTopInfoDetail},r.a.createElement("div",{className:u.a.userImage},r.a.createElement(s.g,{imageUrl:a.author.avatar_url})),r.a.createElement("div",{className:u.a.authorInfo},r.a.createElement("p",{className:u.a.authorInfo_p,style:{paddingTop:"15px"}},r.a.createElement(p.a,{to:"/user/".concat(a.author.loginname),style:{color:"#80BD01"}},a.author.loginname),"\xa0\xa0",r.a.createElement("span",null,Object(m.a)(a.create_at))),r.a.createElement("p",{className:u.a.authorInfo_p,style:{paddingBottom:"8px"}},"\u9605\u8bfb\uff1a",a.visit_count," \u56de\u590d\uff1a",a.reply_count))),r.a.createElement("div",{className:u.a.logo},r.a.createElement(s.c,{iconType:a.top?"top":a.good?"good":a.tab,iconClassName:"logo",fontSize:35}))),r.a.createElement("div",{className:u.a.topicTitle}," ",a.title),r.a.createElement("div",{className:"content markdown-body",dangerouslySetInnerHTML:{__html:a.content}}),r.a.createElement("div",{className:u.a.topicReply},"\u5171",r.a.createElement("span",null,a.reply_count),"\u6761\u56de\u590d"),r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:u.a.replyTop},r.a.createElement("div",{className:u.a.replyAuthorImage},r.a.createElement(s.g,{style:{margin:"10px"},imageUrl:e.author.avatar_url})),r.a.createElement("div",{className:u.a.replyInfo},r.a.createElement("div",null,r.a.createElement("div",{className:u.a.replyInfo_left},r.a.createElement(p.a,{className:u.a.replyInfo_left_name,to:"/user/".concat(e.author.loginname)},e.author.loginname)," ",Object(m.a)(e.create_at)),r.a.createElement("div",{className:u.a.replyInfo_floor},"#",t+1)),r.a.createElement("div",{className:"replyContent content markdown-body",dangerouslySetInnerHTML:{__html:e.content}}))),r.a.createElement("div",{className:u.a.replyDown},r.a.createElement("div",{className:u.a.replyDownDetail},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},r.a.createElement("i",{className:"iconfont icon-dianzan",onClick:function(){var a=Object(m.b)();a&&l({type:"topicDetail/replyUp",payload:{reply_id:e.id,accesstoken:a.accesstoken}})},style:e.is_uped?{color:"green"}:{color:"black"}}),r.a.createElement("em",{className:u.a.replyUps,style:e.is_uped?{color:"green"}:{color:"black"}},e.ups.length?e.ups.length:"")),r.a.createElement("i",{className:"iconfont icon-huifu",style:{color:"black"},onClick:function(){Object(m.b)()&&l({type:"topicDetail/showReplyBox",payload:{index:t}})}}))),e.showReplyBox&&o&&r.a.createElement(s.a,{topic_id:a.id,reply_id:e.id,commetTo:e.author.loginname}))})),o&&r.a.createElement(s.a,{topic_id:a.id})))}function o(e){var a=e.topicDetail;return{dataSource:a.dataSource,replies:a.replyItems}}Object.defineProperty(a,"__esModule",{value:!0});var n=t("GiK3"),r=t.n(n),c=t("S6G3"),i=(t.n(c),t("TTni")),p=t.n(i),s=t("bGai"),m=t("0xDb"),_=t("chrU"),u=t.n(_),y=r.a.createElement(s.f,{title:"\u8be6 \u60c5"});a.default=Object(c.connect)(o)(l)},chrU:function(e,a){e.exports={topicDetail:"topicDetail___2bvtw",topicTopInfo:"topicTopInfo___1BEF8",topicTopInfoDetail:"topicTopInfoDetail___3Jonc",userImage:"userImage___B75nl",authorInfo:"authorInfo___3Ia5L",authorInfo_p:"authorInfo_p___1qaFb",logo:"logo___9Dza9",topicTitle:"topicTitle___14OwC",topicReply:"topicReply___1lUo5",replyTop:"replyTop___3iFnj",replyAuthorImage:"replyAuthorImage___1TZix",replyInfo:"replyInfo___904PJ",replyInfo_left:"replyInfo_left___2n0oW",replyInfo_left_name:"replyInfo_left_name___3uSAT",replyInfo_floor:"replyInfo_floor___11vHp",replyDown:"replyDown___2mLS1",replyDownDetail:"replyDownDetail___2Ljqe",replyUps:"replyUps___1sSa-"}}});