(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{133:function(e,a,t){e.exports=t(217)},138:function(e,a,t){},139:function(e,a,t){},216:function(e,a,t){},217:function(e,a,t){"use strict";t.r(a);var n,l=t(0),c=t.n(l),r=t(7),i=t.n(r),s=(t(138),t(139),t(19)),m=t(20),o=t(22),p=t(21),d=t(99),u=t(64),h=t(4),b=t(219),g=t(42),E=t(221),k=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,y=function(e,a){var t=0===e.name.indexOf("title")?"h1":"div";t=e.href?"a":t;var n="string"===typeof e.children&&e.children.match(k)?c.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(n=c.a.createElement(E.a,Object(g.a)({},e.children))),c.a.createElement(t,Object(g.a)({key:a.toString()},e),n)},N=b.a.Item,v=b.a.SubMenu,w=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).phoneClick=function(){var e=!n.state.phoneOpen;n.setState({phoneOpen:e})},n.state={phoneOpen:void 0},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.dataSource,n=a.isMobile,l=Object(u.a)(a,["dataSource","isMobile"]),r=this.state.phoneOpen,i=t.Menu.children.map((function(e){var a=e.children,t=e.subItem,n=Object(u.a)(e,["children","subItem"]);return t?c.a.createElement(v,Object.assign({key:e.name},n,{title:c.a.createElement("div",Object.assign({},a,{className:"header0-item-block ".concat(a.className).trim()}),a.children.map(y)),popupClassName:"header0-item-child"}),t.map((function(e,a){var t=e.children,n=t.href?c.a.createElement("a",t,t.children.map(y)):c.a.createElement("div",t,t.children.map(y));return c.a.createElement(N,Object.assign({key:e.name||a.toString()},e),n)}))):c.a.createElement(N,Object.assign({key:e.name},n),c.a.createElement("a",Object.assign({},a,{className:"header0-item-block ".concat(a.className).trim()}),a.children.map(y)))})),s=void 0===r?300:null;return c.a.createElement(h.c,Object.assign({component:"header",animation:{opacity:0,type:"from"}},t.wrapper,l),c.a.createElement("div",Object.assign({},t.page,{className:"".concat(t.page.className).concat(r?" open":"")}),c.a.createElement(h.c,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},t.logo),c.a.createElement("img",{width:"100%",src:t.logo.children,alt:"img"})),n&&c.a.createElement("div",Object.assign({},t.mobileMenu,{onClick:function(){e.phoneClick()}}),c.a.createElement("em",null),c.a.createElement("em",null),c.a.createElement("em",null)),c.a.createElement(h.c,Object.assign({},t.Menu,{animation:n?{height:0,duration:300,onComplete:function(a){e.state.phoneOpen&&(a.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!r}),c.a.createElement(b.a,{mode:n?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},i))))}}]),t}(c.a.Component),f=t(222),O=t(29),j=t(79),x=(t(214),j.a.BgElement),S=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=Object.assign({},this.props),a=e.dataSource,t=e.isMobile;delete e.dataSource,delete e.isMobile;var n=a.BannerAnim.children.map((function(e,a){var n=e.BannerElement,l=n.className;delete n.className;var r=e.bg,i=e.textWrapper,s=e.title,m=e.content,o=e.button,p=e.page,d=t?null:{delay:1e3,minMove:.1,data:[{id:"bg".concat(a),value:15,type:"x"},{id:"wrapperBlock".concat(a),value:-15,type:"x"}]};return c.a.createElement(j.a,Object.assign({key:a.toString(),followParallax:d},n,{prefixCls:l}),c.a.createElement(x,Object.assign({key:"bg"},r,{id:"bg".concat(a)})),c.a.createElement("div",p,c.a.createElement(O.a,Object.assign({type:["bottom","top"],delay:200,key:"text"},i,{id:"wrapperBlock".concat(a)}),c.a.createElement("div",Object.assign({key:"logo"},s),"string"===typeof s.children&&s.children.match(k)?c.a.createElement("img",{src:s.children,width:"100%",alt:"img"}):s.children),c.a.createElement("div",Object.assign({key:"content"},m),m.children),c.a.createElement(E.a,Object.assign({type:"ghost",key:"button"},o),o.children))))}));return c.a.createElement("div",Object.assign({},e,a.wrapper),c.a.createElement(h.b,{key:"bannerGroup",enter:{opacity:0,type:"from"},leave:{opacity:0},component:""},c.a.createElement(j.b,Object.assign({key:"BannerAnim"},a.BannerAnim),n)),c.a.createElement(h.c,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner2-icon",style:{bottom:40},key:"icon"},c.a.createElement(f.a,null)))}}]),t}(c.a.PureComponent),M=t(224),W=t(223),C=t(40),_=t.n(C),P=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).getDelay=function(e,a){return e%a*100+100*Math.floor(e/a)+100*a},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=Object.assign({},this.props),t=a.dataSource,n=a.isMobile;delete a.dataSource,delete a.isMobile;var l=0,r=t.block.children.map((function(a,t){var r=a.children,i=n?50*t:e.getDelay(t,24/a.md),s={opacity:0,type:"from",ease:"easeOutQuad",delay:i},m=Object(g.a)(Object(g.a)({},s),{},{x:"+=10",delay:i+100});return l=(l+=a.md)>24?0:l,c.a.createElement(h.c,Object.assign({component:M.a,animation:s,key:a.name},a,{componentProps:{md:a.md,xs:a.xs},className:l?a.className:"".concat(a.className||""," clear-both").trim()}),c.a.createElement(h.c,Object.assign({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"},key:"img"},r.icon),c.a.createElement("img",{src:r.icon.children,width:"100%",alt:"img"})),c.a.createElement("div",r.textWrapper,c.a.createElement(h.c,Object.assign({key:"h2",animation:m,component:"h2"},r.title),r.title.children),c.a.createElement(h.c,Object.assign({key:"p",animation:Object(g.a)(Object(g.a)({},m),{},{delay:i+200}),component:"div"},r.content),r.content.children)))}));return c.a.createElement("div",Object.assign({},a,t.wrapper),c.a.createElement("div",t.page,c.a.createElement("div",t.titleWrapper,t.titleWrapper.children.map(y)),c.a.createElement(_.a,t.OverPack,c.a.createElement(O.a,{key:"u",type:"bottom"},c.a.createElement(W.a,Object.assign({key:"row"},t.block),r)))))}}]),t}(c.a.PureComponent),T=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).getBlockChildren=function(a,t){var n=e.props.isMobile,l=a.children,r=c.a.createElement(O.a,Object.assign({key:"text",leaveReverse:!0,delay:n?[0,100]:0},l.textWrapper),c.a.createElement("div",Object.assign({key:"time"},l.time),l.time.children),c.a.createElement("h2",Object.assign({key:"title"},l.title),c.a.createElement("i",l.icon,c.a.createElement("img",{src:l.icon.children,alt:"img"})),l.title.children),c.a.createElement("div",Object.assign({key:"p"},l.content),l.content.children));return c.a.createElement(_.a,Object.assign({key:t.toString()},a),n&&r,c.a.createElement(O.a,Object.assign({className:"image-wrapper",key:"image",type:n?"right":"bottom",leaveReverse:!0,delay:n?[100,0]:0},l.imgWrapper),c.a.createElement("div",Object.assign({key:"image"},l.img),c.a.createElement("img",{src:l.img.children,alt:"img"})),c.a.createElement("div",{key:"name",className:"name-wrapper"},c.a.createElement("div",Object.assign({key:"name"},l.name),l.name.children),c.a.createElement("div",Object.assign({key:"post"},l.post),l.post.children))),!n&&r)},e}return Object(m.a)(t,[{key:"render",value:function(){var e=Object.assign({},this.props),a=e.dataSource;delete e.dataSource,delete e.isMobile;var t=a.block.children.map(this.getBlockChildren);return c.a.createElement("div",Object.assign({},e,a.wrapper),c.a.createElement("div",a.page,c.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(y)),c.a.createElement("div",a.block,t)))}}]),t}(c.a.PureComponent),B=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).getBlockChildren=function(e){return e.map((function(e,a){var t=e.titleWrapper,n=e.image,l=Object(u.a)(e,["titleWrapper","image"]);return c.a.createElement(M.a,Object.assign({key:a.toString()},l),c.a.createElement(W.a,null,c.a.createElement(M.a,{span:7},c.a.createElement("div",n,c.a.createElement("img",{src:n.children,alt:"img"}))),c.a.createElement(M.a,{span:17},c.a.createElement(O.a,Object.assign({},t,{type:"bottom"}),t.children.map(y)))))}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=Object.assign({},this.props),a=e.dataSource;delete e.dataSource,delete e.isMobile;var t=this.getBlockChildren(a.block.children);return c.a.createElement("div",Object.assign({},e,a.wrapper),c.a.createElement("div",a.page,c.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(y)),c.a.createElement(_.a,a.OverPack,c.a.createElement(O.a,{type:"bottom",key:"tween",leaveReverse:!0},c.a.createElement(O.a,Object.assign({type:"bottom",key:"block"},a.block,{component:W.a}),t)))))}}]),t}(c.a.PureComponent),A=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=Object.assign({},this.props),a=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,a.wrapper),c.a.createElement(_.a,a.OverPack,c.a.createElement(h.c,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"footer"},a.copyright),a.copyright.children)))}}]),t}(c.a.PureComponent),D={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://7wcmig.db.files.1drv.com/y4m8zQcGqeZxqxBgi8ipwoP_xW-ZGtFdpaSDj4rmDy_e-nkfpWhwliupj8xVpqEOofnrmPSEL-IWOj_4qbfOFbs13rcVSFLbkNwZ2dQyJzX3tHaEY8n5fH2RpPXMaKdxFdw4jWo8yiSHOyRnVKl3_365-KbE6QeGqVvO9y7hy85tZiKR2DcejchftZLvZuX0-mb?width=234&height=51&cropmode=none"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:"Home",name:"text"}]}},{name:"item1",className:"header0-item",children:{href:"#",children:[{children:"Blog",name:"text"}]},subItem:[{name:"sub0",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Recipes"},{name:"content",className:"item-content",children:"View the latest recipes that I've tried"}]}},{name:"sub1",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Travel"},{name:"content",className:"item-content",children:"View my latest travels!"}]}}]}]},mobileMenu:{className:"header0-mobile-menu"}},I={wrapper:{className:"banner2"},BannerAnim:{children:[{name:"elem0",BannerElement:{className:"banner-user-elem"},page:{className:"home-page banner2-page"},textWrapper:{className:"banner2-text-wrapper"},bg:{className:"bg bg0"},title:{className:"banner2-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"Hi! I'm Yuchen",c.a.createElement("br",null)))},content:{className:"banner2-content",children:c.a.createElement("span",null,c.a.createElement("p",null,"I am a professional full stack developer, hobbyist photographer and general technology enthusiast"))},button:{className:"banner2-button",children:"Learn More"}}]}},L={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"Languages and Technologies",c.a.createElement("br",null))))),className:"title-h1"},{name:"content",className:"title-content",children:c.a.createElement("span",null,c.a.createElement("p",null,"I like to work with the following technologies and languages",c.a.createElement("br",null)))}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"C#"))))},content:{className:"content3-content",children:"I'm proficient in writing backend services using C#"}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"TypeScript/JavaScript")))},content:{className:"content3-content",children:"I enjoy writing web front ends using TS"}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"ASP.NET Core",c.a.createElement("br",null)))},content:{className:"content3-content",children:""}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement("span",null,"React",c.a.createElement("br",null))},content:{className:"content3-content",children:"My preferred front end framework for building web apps. Currently I'm using version 16.x with hooks."}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"Redux"))},content:{className:"content3-content",children:"My preferred state management framework to use with React."}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"http://reactivex.io/assets/Rx_Logo_S.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"RX (JS/.NET)",c.a.createElement("br",null)))},content:{className:"content3-content",children:"I'm using Redux-Observables and RX.Net"}}}]}},Q={wrapper:{className:"home-page-wrapper content9-wrapper"},page:{className:"home-page content9"},titleWrapper:{className:"title-wrapper",children:[{name:"image",children:"https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",className:"title-image"},{name:"title",children:c.a.createElement("span",null,c.a.createElement("p",null,"My experience and education",c.a.createElement("br",null))),className:"title-h1"}]},block:{className:"timeline",children:[{name:"block0",className:"block-wrapper",playScale:.3,children:{imgWrapper:{className:"image-wrapper"},textWrapper:{className:"text-wrapper"},img:{className:"block-img",children:"https://media-exp1.licdn.com/dms/image/C510BAQEO2Mj5u5Sx7Q/company-logo_100_100/0?e=1599696000&v=beta&t=CJnSwBaFU3DOxsq1B6e_uer9e46aQM1xMpbZRFLf5LQ"},icon:{className:"block-icon",children:"https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg"},name:{className:"block-name",children:c.a.createElement("span",null,c.a.createElement("p",null,"Vitol"))},post:{className:"block-post",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"Full Stack Engineer",c.a.createElement("br",null))))},time:{className:"block-time",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"2018 - Present",c.a.createElement("br",null))))},title:{className:"block-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"London Team"))},content:{className:"block-content",children:c.a.createElement("span",null,c.a.createElement("p",null,"I sit on the trading floor, and build analytical tools for Traders. But I also wear many hats and remain very involved in all aspects of the SDLC for all of the apps we develop in London. ",c.a.createElement("br",null)))}}},{name:"block1",className:"block-wrapper",playScale:.3,children:{imgWrapper:{className:"image-wrapper"},textWrapper:{className:"text-wrapper"},img:{className:"block-img",children:"https://media-exp1.licdn.com/dms/image/C4D0BAQGjlgfogMd0_Q/company-logo_100_100/0?e=1599696000&v=beta&t=2Go6kWxsSB_U1mEKSAbKOohTh6mtIOOsDwYFX0Ho5kI"},icon:{className:"block-icon",children:"https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg"},name:{className:"block-name",children:c.a.createElement("span",null,c.a.createElement("p",null,"Actruris"))},post:{className:"block-post",children:c.a.createElement("span",null,c.a.createElement("div",null,"Full Stack Developer"))},time:{className:"block-time",children:c.a.createElement("span",null,c.a.createElement("p",null,"2017-2018"))},title:{className:"block-title",children:"Web Team"},content:{className:"block-content",children:"Was responsible for maintaining and building new features in C#, ASP.NET MVC5 and ASP.NET Web Forms. Also built and maintained client-facing front end web applications using JavaScript, React and TypeScript."}}},{name:"block2",className:"block-wrapper",playScale:.3,children:{imgWrapper:{className:"image-wrapper"},textWrapper:{className:"text-wrapper"},img:{className:"block-img",children:"https://media-exp1.licdn.com/dms/image/C510BAQFLP4jd05WZRQ/company-logo_100_100/0?e=1599696000&v=beta&t=79LBrXg6fvUT53zaI71UEyYKN0srWa_Cc0eDyRulKcM"},icon:{className:"block-icon",children:"https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg"},name:{className:"block-name",children:c.a.createElement("span",null,"Western Power Distribution",c.a.createElement("br",null))},post:{className:"block-post",children:"Graduate Trainee Engineer & Power Academy Scholar"},time:{className:"block-time",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"2015 - 2016",c.a.createElement("br",null))))},title:{className:"block-title",children:"Primary System Design Team (Tipton)"},content:{className:"block-content",children:c.a.createElement("span",null,c.a.createElement("span",null,"Designed and implemented a bespoke conversion program to import network data into ASPEN OneLiner using Python. ",c.a.createElement("br",null)),c.a.createElement("span",null,"Maintained and improved upon the internal VBA Network Protection Settings calculator tool. ",c.a.createElement("br",null)),c.a.createElement("span",null,"Also designed and built a bespoke internal python tool for automating manual data updates from the network. ",c.a.createElement("br",null)))}}},{name:"block3",className:"block-wrapper",playScale:.3,children:{imgWrapper:{className:"image-wrapper"},textWrapper:{className:"text-wrapper"},img:{className:"block-img",children:"https://media-exp1.licdn.com/dms/image/C4D0BAQEGh_DklOKK1Q/company-logo_100_100/0?e=1599696000&v=beta&t=qMfTYTIc9bi7ZMGFZi07hTGiePFBxQsWPZhuU-JhJFk"},icon:{className:"block-icon",children:"https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg"},name:{className:"block-name",children:c.a.createElement("span",null,c.a.createElement("p",null,"Imperial College London",c.a.createElement("br",null)))},post:{className:"block-post",children:c.a.createElement("span",null,c.a.createElement("p",null,"Student"))},time:{className:"block-time",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"2011-2015")))},title:{className:"block-title",children:c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("p",null,"Electrical and Electronic Engineering with Management (MEng)",c.a.createElement("br",null))))))},content:{className:"block-content",children:c.a.createElement("span",null,c.a.createElement("span",null,"Graduated with Upper Second Class (2:1) Honours, average of 72.8% in final year",c.a.createElement("br",null)))}}}]}},F={wrapper:{className:"home-page-wrapper teams2-wrapper"},page:{className:"home-page teams2"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:c.a.createElement("span",null,c.a.createElement("p",null,"Cool stuff that I've been involved in",c.a.createElement("br",null)))}]},block:{className:"block-wrapper",gutter:72,children:[{name:"block0",className:"block",md:8,xs:24,image:{name:"image",className:"teams2-image",children:"https://media-exp1.licdn.com/dms/image/C560BAQFe0_92dc0jZA/company-logo_200_200/0?e=1599696000&v=beta&t=6gxK6y4nHto78-eLDMP_yryDj9PX1EYYQawltlm7J0c"},titleWrapper:{className:"teams2-textWrapper",children:[{name:"title",className:"teams2-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"GLH 2019 (Team LawSum)",c.a.createElement("br",null)))},{name:"content",className:"teams2-job",children:c.a.createElement("span",null,c.a.createElement("p",null,"Front End Engineer",c.a.createElement("br",null)))},{name:"content1",className:"teams2-content",children:c.a.createElement("span",null,c.a.createElement("p",null,"Team LawSum placed second in London hackathon. LawSum was a Law text summarising engine with a chrome plugin",c.a.createElement("br",null)))}]}},{name:"block1",className:"block",md:8,xs:24,image:{name:"image",className:"teams2-image",children:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"},titleWrapper:{className:"teams2-textWrapper",children:[{name:"title",className:"teams2-title",children:c.a.createElement("span",null,c.a.createElement("p",null,"Commit by Default",c.a.createElement("br",null)))},{name:"content",className:"teams2-job",children:c.a.createElement("span",null,c.a.createElement("p",null,"Front End Engineer",c.a.createElement("br",null)))},{name:"content1",className:"teams2-content",children:c.a.createElement("span",null,c.a.createElement("p",null,"This blog was built in TypeScript and hosted on GitHub",c.a.createElement("br",null)))}]}}]}},R={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:c.a.createElement("span",null,"\xa92020 ",c.a.createElement("a",{href:"http://www.commitbydefault.com"},"Commit by Default")," All Rights Reserved")}};t(216);Object(d.enquireScreen)((function(e){n=e}));var K=("undefined"!==typeof window?window:{}).location,z=void 0===K?{}:K,G=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={isMobile:n,show:!z.port},l}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(d.enquireScreen)((function(a){e.setState({isMobile:!!a})})),z.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,a=[c.a.createElement(w,{id:"Nav0_0",key:"Nav0_0",dataSource:D,isMobile:this.state.isMobile}),c.a.createElement(S,{id:"Banner2_0",key:"Banner2_0",dataSource:I,isMobile:this.state.isMobile}),c.a.createElement(P,{id:"Content3_0",key:"Content3_0",dataSource:L,isMobile:this.state.isMobile}),c.a.createElement(T,{id:"Content9_0",key:"Content9_0",dataSource:Q,isMobile:this.state.isMobile}),c.a.createElement(B,{id:"Teams2_0",key:"Teams2_0",dataSource:F,isMobile:this.state.isMobile}),c.a.createElement(A,{id:"Footer0_0",key:"Footer0_0",dataSource:R,isMobile:this.state.isMobile})];return c.a.createElement("div",{className:"templates-wrapper",ref:function(a){e.dom=a}},this.state.show&&a)}}]),t}(c.a.Component),H=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.3429e4ab.chunk.js.map