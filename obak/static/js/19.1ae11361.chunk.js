(this.webpackJsonpdestiny=this.webpackJsonpdestiny||[]).push([[19],{1220:function(e,t,n){"use strict";n.r(t);var a,r=n(22),o=n(23),i=n(25),c=n(24),s=n(26),l=n(1202),u=n(71),p=n(0),d=n.n(p),m=(n(745),n(115)),h=n(27),y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).renderMenuItem=function(e){var t=e.key,n=e.icon,a=e.title;return d.a.createElement(m.a.Item,{key:t},d.a.createElement(h.b,{to:t},n&&d.a.createElement(u.a,{type:n}),d.a.createElement("span",null,a)))},n.renderSubMenu=function(e){var t=e.key,a=e.icon,r=e.title,o=e.subs;return d.a.createElement(m.a.SubMenu,{key:t,title:d.a.createElement("span",null,a&&d.a.createElement(u.a,{type:a}),d.a.createElement("span",null,r))},o&&o.map((function(e){return e.subs&&e.subs.length>0?n.renderSubMenu(e):n.renderMenuItem(e)})))},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(m.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},this.props.menus&&this.props.menus.map((function(t){return t.subs&&t.subs.length>0?e.renderSubMenu(t):e.renderMenuItem(t)})))}}]),t}(p.Component),f={menus:[{key:"/destiny/home",title:"\u9996\u9875",icon:"home",component:"Home"},{key:"/destiny/worksheet",title:"\u5de5\u4f5c\u5355",icon:"edit",subs:[{key:"/destiny/worksheet/rawoutorder",title:"\u539f\u6599\u51fa\u5e93\u5355",component:"RawOutputOrder"},{key:"/destiny/worksheet/rawwareorder",title:"\u539f\u6599\u5165\u5e93\u5355",component:"RawWarehouseOrder"},{key:"/destiny/worksheet/rawout",title:"\u539f\u6599\u51fa\u5e93",component:"RawOutput"},{key:"/destiny/worksheet/rawware",title:"\u539f\u6599\u5165\u5e93",component:"RawWarehouse"},{key:"/destiny/worksheet/ripeoutorder",title:"\u6210\u54c1\u51fa\u5e93\u5355",component:"RipeOutputOrder"},{key:"/destiny/worksheet/ripewareorder",title:"\u6210\u54c1\u5165\u5e93\u5355",component:"RipeWarehouseOrder"},{key:"/destiny/worksheet/ripeout",title:"\u6210\u54c1\u51fa\u5e93",component:"RipeOutput"},{key:"/destiny/worksheet/ripeware",title:"\u6210\u54c1\u5165\u5e93",component:"RipeWarehouse"},{key:"/destiny/worksheet/offer",title:"\u62a5\u4ef7\u5355",component:"Offer"},{key:"/destiny/worksheet/task",title:"\u4efb\u52a1\u5355",component:"Task"}]},{key:"/destiny/repertory",title:"\u5e93\u5b58",icon:"wallet",subs:[{key:"/destiny/repertory/raw",title:"\u539f\u6599\u5e93\u5b58\u8bb0\u5f55",component:"Raw"},{key:"/destiny/repertory/ripe",title:"\u6210\u54c1\u5e93\u5b58\u8bb0\u5f55",component:"Ripe"}]},{key:"/destiny/report",title:"\u62a5\u8868",icon:"copy",subs:[{key:"/destiny/report/daily",title:"\u65e5\u62a5\u8868",component:"Daily"},{key:"/destiny/report/weekly",title:"\u5468\u62a5\u8868",component:"Weekly"},{key:"/destiny/report/summary",title:"\u603b\u62a5\u8868",component:"Summary"}]},{key:"/destiny/linkman",title:"\u8054\u7cfb\u4eba",icon:"user",component:"LinkMan"}],others:[]},b=n(9),g=n(17),k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement(b.d,null,d.a.createElement(b.b,{path:"/destiny",exact:!0,render:function(){return d.a.createElement(b.a,{to:"/destiny/home"})}}),d.a.createElement(b.b,{path:"/destiny/home",component:Object(g.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(17),n.e(20)]).then(n.bind(null,1203))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/rawoutorder",component:Object(g.a)((function(){return n.e(22).then(n.bind(null,1204))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/rawwareorder",component:Object(g.a)((function(){return n.e(24).then(n.bind(null,1205))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/rawout",component:Object(g.a)((function(){return n.e(23).then(n.bind(null,1206))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/rawware",component:Object(g.a)((function(){return n.e(25).then(n.bind(null,1207))}))}),d.a.createElement(b.b,Object.assign({path:"/destiny/worksheet/ripeoutorder",component:Object(g.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,1219))}))},this.props)),d.a.createElement(b.b,{path:"/destiny/worksheet/ripewareorder",component:Object(g.a)((function(){return n.e(27).then(n.bind(null,1208))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/ripeout",component:Object(g.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(13)]).then(n.bind(null,1209))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/ripeware",component:Object(g.a)((function(){return n.e(28).then(n.bind(null,1210))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/offer",component:Object(g.a)((function(){return n.e(21).then(n.bind(null,1211))}))}),d.a.createElement(b.b,{path:"/destiny/worksheet/task",component:Object(g.a)((function(){return n.e(30).then(n.bind(null,1212))}))}),d.a.createElement(b.b,{path:"/destiny/repertory/raw",component:Object(g.a)((function(){return n.e(26).then(n.bind(null,1213))}))}),d.a.createElement(b.b,{path:"/destiny/repertory/ripe",component:Object(g.a)((function(){return n.e(29).then(n.bind(null,1214))}))}),d.a.createElement(b.b,{path:"/destiny/report/daily",component:Object(g.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,1217))}))}),d.a.createElement(b.b,{path:"/destiny/report/weekly",component:Object(g.a)((function(){return n.e(31).then(n.bind(null,1215))}))}),d.a.createElement(b.b,{path:"/destiny/report/summary",component:Object(g.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(9),n.e(33)]).then(n.bind(null,1223))}))}),d.a.createElement(b.b,Object.assign({path:"/destiny/linkman"},this.props,{component:Object(g.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(32)]).then(n.bind(null,1216))}))})),d.a.createElement(b.b,{render:function(){return d.a.createElement(b.a,{to:"/destiny/home"})}}))}}]),t}(p.Component),w=n(1224),O=n(1201),v=n(28),E=n(144),j=n(173),S=n(271),C=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){sessionStorage.token="",sessionStorage.mobile="",n.props.history.push("/login")},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=d.a.createElement(m.a,null,d.a.createElement(m.a.Item,{key:"1"},d.a.createElement("span",null,"\u4e2a\u4eba\u4fe1\u606f")),d.a.createElement(m.a.Item,{key:"2",onClick:this.handleClick},d.a.createElement("span",null,"\u9000\u51fa")),d.a.createElement(m.a.Item,{key:"3"},d.a.createElement("span",null,"\u8054\u7cfb\u7ba1\u7406\u5458"))),t=this.props.text;return console.log(this.props),d.a.createElement(S.a,{overlay:e,placement:"bottomCenter"},d.a.createElement("div",{style:{color:"#fff",marinLeft:10,height:64}},t))}}]),t}(p.Component),x=Object(v.b)((function(e){return{avatar:e.get("avatar"),pic:e.getIn(["avatar","pic"])}}))(a=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handlePushAva=function(){n.inp.click()},n.handleChangeAva=function(){var e=n.inp.files[0];if(e){var t=new FormData;t.append("avatar",e);var a={};a.mobile=sessionStorage.mobile,n.props.dispatch(Object(j.n)({url:"/react/uploadImg",data:t,params:a,cb:function(e){e=e.replace(/public/,E.b);var t={mobile:sessionStorage.mobile,pic:e};localStorage.setItem("avatar",JSON.stringify(t))}}))}},n.getSeverPic=function(){var e={};sessionStorage.mobile&&(e.mobile=sessionStorage.mobile,n.props.dispatch(Object(j.n)({url:"/react/getAvatar",data:e,cb:function(){}})))},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.avatar){var e=JSON.parse(localStorage.getItem("avatar")).mobile,t=JSON.parse(localStorage.getItem("avatar")).pic;e===sessionStorage.mobile?this.props.dispatch(Object(j.h)(t)):this.getSeverPic()}else this.getSeverPic()}},{key:"render",value:function(){var e=this,t=this.props.pic;return d.a.createElement("div",{className:"head-user"},d.a.createElement("span",null,d.a.createElement(w.a,{status:"success",offset:[-10,53]},d.a.createElement(O.a,{src:t,icon:"user",onClick:this.handlePushAva,size:48}),d.a.createElement("input",{type:"file",ref:function(t){return e.inp=t},onChange:this.handleChangeAva,style:{display:"none"}}))),d.a.createElement("div",{style:{marginLeft:10,color:"#fff",height:64}},d.a.createElement(C,Object.assign({text:sessionStorage.mobile?sessionStorage.mobile:"\u6e38\u5ba2"},this.props))))}}]),t}(p.Component))||a,I=l.a.Header,P=l.a.Content,R=l.a.Footer,A=l.a.Sider,W=f.menus,L=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1,logoWidth:"20%"},n.onCollapse=function(e){n.setState({collapsed:e}),e?n.setState({logoWidth:"100%"}):n.setState({logoWidth:"20%"})},n.toggle=function(){n.setState({collapsed:!n.state.collapsed}),n.state.collapsed?n.setState({logoWidth:"20%"}):n.setState({logoWidth:"100%"})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.collapsed;return d.a.createElement(l.a,{style:{minHeight:"100vh"}},d.a.createElement(A,{className:"sider-main",style:{height:"100vh",position:"fixed",left:0,zIndex:100},breakpoint:"lg",collapsedWidth:"80",collapsible:!0,collapsed:this.state.collapsed,trigger:null,onCollapse:this.onCollapse},d.a.createElement("div",{className:"logo",style:{backgroundColor:"#fff",lineHeight:"36px"}},d.a.createElement("a",{id:"logo",href:"/"},d.a.createElement("img",{style:{width:this.state.logoWidth,marginLeft:"5%"},alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),!this.state.collapsed&&d.a.createElement("img",{style:{width:"60%",marginLeft:"5%"},alt:"Ant Design",src:"https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"}))),d.a.createElement(y,Object.assign({},this.props,{menus:W}))),d.a.createElement(l.a,null,d.a.createElement(I,{style:{background:"#001529",padding:0,position:"fixed",top:0,zIndex:99,width:"100%"},id:"header"},d.a.createElement(u.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle,style:{left:e?"90px":"210px"}}),d.a.createElement(x,this.props)),d.a.createElement(P,{style:{width:"80%",margin:"64px 16px 0px 0px",marginLeft:e?"90px":"210px",overflowX:"hidden"}},d.a.createElement(k,null)),d.a.createElement(R,{style:{textAlign:"center"}},"Ou Destiny \xa92017 Created by ODestiny")))}}]),t}(p.Component);t.default=L},144:function(e,t,n){"use strict";var a=n(367),r=n.n(a),o=n(1222),i="http://47.105.83.238:1993/";function c(e){o.a.warning(e,1,(function(){o.a.destroy(),console.log(e)}))}function s(e){o.a.destroy(),o.a.success(e,1,(function(){}))}r.a.defaults.baseURL=i,r.a.defaults.headers.common.token="",r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.a.interceptors.request.use((function(e){var t,n;return t=t||"\u8bf7\u6c42\u4e2d...",n=n||1,o.a.loading(t,n,(function(){o.a.destroy(),console.log(t)})),e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25-\u7f51\u7edc\u5f02\u5e38",o.a.error(t,1,(function(){o.a.destroy()})),Promise.reject(e)})),r.a.interceptors.response.use((function(e){return console.log(e),e.data.type?s(e.data.msg):0===e.data.type?c(e.data.msg):s(e.data.msg),e}),(function(e){return c("\u54cd\u5e94\u5931\u8d25-\u670d\u52a1\u5668\u5f02\u5e38"),Promise.reject(e)})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return i}))},173:function(e,t,n){"use strict";n.d(t,"n",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"m",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return y})),n.d(t,"i",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"l",(function(){return k})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return O}));var a=n(253),r=n.n(a),o=n(144);function i(e){var t,n,a,i,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.url,n=e.data,a=e.params,i=e.cb,s.next=3,r.a.awrap(o.a.post(t,n,{params:a}));case 3:return c=s.sent,i(c.data.pic),s.abrupt("return",{type:"pushAvatar",payload:c.data.pic});case 6:case"end":return s.stop()}}))}var c=function(e){return{type:"changePic",payload:e}},s=function(e){return{type:"changeClientName",payload:e}},l=function(e){return{type:"changePhone",payload:e}},u=function(e){return{type:"changeCompany",payload:e}},p=function(e){return{type:"changeValue",payload:e}};function d(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getList",payload:n.data.result});case 5:case"end":return a.stop()}}))}var m=function(e){return{type:"changeVisible",payload:e}},h=function(e){return{type:"changeOrderDetails",payload:e}},y=function(e){return{type:"changeOrderList",payload:e}},f=function(e){return{type:"changePrice",payload:e}},b=function(e){return{type:"changeFreight",payload:e}},g=function(e){return{type:"changeIncidentals",payload:e}},k=function(e){return{type:"deleteOrderList",payload:e}},w=function(){return{type:"resetOrderInfo"}},O=function(e){return{type:"updateOrderInfo",payload:e}}},745:function(e,t,n){}}]);
//# sourceMappingURL=19.1ae11361.chunk.js.map