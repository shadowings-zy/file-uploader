(this["webpackJsonpeasy-file-uploader-demo-client"]=this["webpackJsonpeasy-file-uploader-demo-client"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(15),o=n.n(r),i=n(2),s=n.n(i),p=n(4),u=n(17),l=(n(24),n(18)),d=n(5),f=n.n(d),h=n(1),j="http://localhost:10001/";var m=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],o="",i=new l.a({chunkSize:2097152,requestOptions:{retryTimes:2,initFilePartUploadFunc:function(){var t=Object(p.a)(s.a.mark((function t(){var n,a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.current.files[0].name,t.next=3,f.a.post("".concat(j,"api/initUpload"),{name:n});case 3:a=t.sent,c=a.data,o=c.uploadId,console.log("\u521d\u59cb\u5316\u4e0a\u4f20\u5b8c\u6210"),r("");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),uploadPartFileFunc:function(){var e=Object(p.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("uploadId",o),a.append("partIndex",n.toString()),a.append("partFile",t),e.next=6,f.a.post("".concat(j,"api/uploadPart"),a,{headers:{"Content-Type":"multipart/form-data"}});case 6:console.log("\u4e0a\u4f20\u5206\u7247".concat(n,"\u5b8c\u6210"));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),finishFilePartUploadFunc:function(){var t=Object(p.a)(s.a.mark((function t(n){var a,c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.current.files[0].name,t.next=3,f.a.post("".concat(j,"api/finishUpload"),{name:a,uploadId:o,md5:n});case 3:c=t.sent,i=c.data,console.log("\u4e0a\u4f20\u5b8c\u6210\uff0c\u5b58\u50a8\u5730\u5740\u4e3a\uff1a".concat(j).concat(i.path)),r("".concat(j).concat(i.path));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}});return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"easy-file-uploader-demo"}),Object(h.jsx)("h3",{children:"\u9009\u62e9\u6587\u4ef6\u540e\u70b9\u51fb\u201c\u4e0a\u4f20\u6587\u4ef6\u201d\u6309\u94ae\u5373\u53ef"}),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("input",{type:"file",name:"file",ref:e}),Object(h.jsx)("input",{type:"button",value:"\u4e0a\u4f20\u6587\u4ef6",onClick:function(){e.current&&i.uploadFile(e.current.files[0])}})]}),c&&Object(h.jsx)("h3",{children:"\u6587\u4ef6\u5730\u5740\uff1a".concat(c)})]})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.757cec5a.chunk.js.map