(this.webpackJsonpdestiny=this.webpackJsonpdestiny||[]).push([[36],{1097:function(t,e,a){"use strict";a.r(e);var r,n=a(22),i=a(23),c=a(25),o=a(24),l=a(26),s=a(0),u=a.n(s),h=a(757),p=a(758),b=a(1218),g=a(672),f=a(155),m=a(1098),d=a.n(m),v=a(156),y=a(362),j=a(28),O=Object(j.b)((function(t){return{pic:t.getIn(["avatar","pic"])}}))(r=Object(v.a)(r=function(t){function e(){var t,a;Object(n.a)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(i)))).state={editorState:d.a.createEditorState(null)},a.goBack=function(){a.props.history.push("/destiny/linkman"),y.a.resetArticleList(),a.setState({editorState:null})},a.handleChangeText=function(t){console.log(t.toHTML());var e=t.toHTML();a.setState({editorState:e}),y.a.changeContent(e)},a.handleChangeTitle=function(t){console.log(t.target.value);var e=t.target.value;y.a.changeTitle(e)},a.handleSubmit=function(){console.log(y.a.articleList),y.a.submitArticle({url:"/react/upArticle",data:y.a.articleList}),a.goBack()},a}return Object(l.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=sessionStorage.mobile;y.a.changeAdmin(t);var e=this.props.pic;y.a.changeAvatar(e)}},{key:"render",value:function(){var t=this.state.editorState,e=y.a.articleList;return u.a.createElement("div",null,u.a.createElement(h.a,{gutter:24},u.a.createElement(p.a,{span:24},u.a.createElement(b.a,{title:"\u53d1\u8868\u5e16\u5b50",extra:u.a.createElement("span",{onClick:this.goBack,style:{color:"#0099cc"}},"\u8fd4\u56de")},u.a.createElement(h.a,{gutter:12},u.a.createElement(p.a,{span:12},u.a.createElement(g.a,{value:e.title,addonBefore:"\u6807\u9898\uff1a",placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",onChange:this.handleChangeTitle}))),u.a.createElement(h.a,{gutter:24,style:{marginTop:10}},u.a.createElement(p.a,{span:24},u.a.createElement(d.a,{value:t,controls:["undo","redo","separator","font-size","line-height","letter-spacing","separator","text-color","bold","italic","underline","strike-through","separator","superscript","subscript","remove-styles","emoji","separator","text-indent","text-align","separator","headings","list-ul","list-ol","blockquote","code","separator","link","separator","hr","separator","media","separator","clear"],onChange:this.handleChangeText}))),u.a.createElement(h.a,{gutter:24,style:{marginTop:10}},u.a.createElement(p.a,{span:24},u.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},u.a.createElement(f.a,{type:"danger",onClick:this.goBack},"\u53d6\u6d88"),u.a.createElement(f.a,{type:"primary",onClick:this.handleSubmit,style:{marginRight:10}},"\u786e\u5b9a"))))))))}}]),e}(s.Component))||r)||r;e.default=O},362:function(t,e,a){"use strict";var r,n,i,c,o,l,s,u,h,p,b,g,f=a(253),m=a.n(f),d=a(289),v=a(22),y=a(290),j=(a(291),a(235)),O=a(144);function w(t){var e=new Date(t),a=e.getFullYear(),r=e.getMonth()+1;r=r<10?"0"+r:r;var n=e.getDate();return n=n<10?"0"+n:n,"".concat(a,"-").concat(r,"-").concat(n)}var A=(r=function t(){Object(v.a)(this,t),Object(d.a)(this,"articleList",n,this),Object(d.a)(this,"mineArt",i,this),Object(d.a)(this,"artList",c,this),Object(d.a)(this,"getArtList",o,this),Object(d.a)(this,"getMineArt",l,this),Object(d.a)(this,"changeAdmin",s,this),Object(d.a)(this,"changeAvatar",u,this),Object(d.a)(this,"changeTitle",h,this),Object(d.a)(this,"changeContent",p,this),Object(d.a)(this,"submitArticle",b,this),Object(d.a)(this,"resetArticleList",g,this)},n=Object(y.a)(r.prototype,"articleList",[j.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),i=Object(y.a)(r.prototype,"mineArt",[j.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=Object(y.a)(r.prototype,"artList",[j.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(y.a)(r.prototype,"getArtList",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){var a,r;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.url,n.next=3,m.a.awrap(O.a.post(a));case 3:(r=n.sent).data.result.map((function(t,e){return t.time=w(t.time),t})),t.artList=r.data.result;case 6:case"end":return n.stop()}}))}}}),l=Object(y.a)(r.prototype,"getMineArt",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){var a,r,n;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.url,r=e.data,i.next=3,m.a.awrap(O.a.post(a,r));case 3:(n=i.sent).data.result.map((function(t,e){return t.time=w(t.time),t})),t.mineArt=n.data.result;case 6:case"end":return i.stop()}}))}}}),s=Object(y.a)(r.prototype,"changeAdmin",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.articleList.admin=e}}}),u=Object(y.a)(r.prototype,"changeAvatar",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.articleList.avatar=e}}}),h=Object(y.a)(r.prototype,"changeTitle",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.articleList.title=e}}}),p=Object(y.a)(r.prototype,"changeContent",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.articleList.content=e}}}),b=Object(y.a)(r.prototype,"submitArticle",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(t){var e,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.url,a=t.data,r.next=3,m.a.awrap(O.a.post(e,a));case 3:r.sent;case 4:case"end":return r.stop()}}))}}}),g=Object(y.a)(r.prototype,"resetArticleList",[j.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){t.articleList={}}}}),r);e.a=new A}}]);
//# sourceMappingURL=36.75035a3e.chunk.js.map