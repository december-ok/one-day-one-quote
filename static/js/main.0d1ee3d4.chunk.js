(this["webpackJsonpone-day-one-quote"]=this["webpackJsonpone-day-one-quote"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),s=c.n(a),o=c(13),i=c.n(o),r=c(4),d=c(14),j=c.n(d);c(37);var l=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)({index:0,author:"",text:"",videoUrl:""}),i=Object(r.a)(o,2),d=i[0],l=i[1];return Object(a.useEffect)((function(){setTimeout((function(){s(!0)}),1200),j.a.get("https://kqfptz21zb.execute-api.ap-northeast-2.amazonaws.com/test").then((function(e){l(e.data)}))}),[]),c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("video",{src:d.videoUrl,autoPlay:!0,muted:!0,loop:!0}),Object(n.jsx)("div",{className:"App",onClick:window.location.reload,children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{className:"text",children:d.text}),Object(n.jsxs)("h3",{className:"author",children:["- ",d.author]})]})})]}):Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("h1",{className:"loading",children:"Loading..."})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0d1ee3d4.chunk.js.map