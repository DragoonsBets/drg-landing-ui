module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}},a=!0;try{e[r].call(i.exports,i,i.exports,n),a=!1}finally{a&&delete t[r]}return i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/aIJ":function(e,t){},"/iDT":function(e,t,n){"use strict";var r=n("0iUn"),i=n("sLSF"),a=n("MI3g"),o=n("a7VT"),c=n("Tit0"),l=n("cDcd"),u=n.n(l),s=n("AzSJ"),f=n.n(s),p=(n("Z44L"),n("/aIJ"),function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.player=f()(this.videoNode,this.props,function(){console.log("onPlayerReady",this)})}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",{"data-vjs-player":!0},u.a.createElement("video",{ref:function(t){return e.videoNode=t},className:"video-js"})))}}]),t}(l.Component));t.a=p},"0iUn":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},2:function(e,t,n){e.exports=n("pTTa")},"2Eek":function(e,t,n){e.exports=n("ltjX")},"5Yp1":function(e,t,n){"use strict";var r=n("rt45"),i=n("cDcd"),a=n.n(i),o=n("U7sd"),c=n.n(o),l=n("Dtiu"),u=n.n(l),s=n("0iUn"),f=n("sLSF"),p=n("MI3g"),d=n("a7VT"),m=n("AT/M"),h=n("Tit0"),b=n("vYYK"),g=n("8R6+"),v=n("FfxO"),x=n("9M7Z");function y(){var e=Object(r.a)(["\n\talign-items: center;\n\tbackground-color: #141928;\n\tcolor: white;\n\tdisplay: flex;\n\theight: 100px;\n\tjustify-content: space-between;\n\tpadding: 20px;\n\t> div {\n\t\tflex: 1;\n\t}\n"]);return y=function(){return e},e}var E=u.a.footer(y());var j=function(e){return a.a.createElement(E,null,a.a.createElement(x.a,{h:3,weight:"bold",size:"jumbo"},"Suscribite a Dragoons"),a.a.createElement(x.a,{h:4,weight:"bold",size:"jumbo"},"Grandes premios y sorpresas te esperan si sos un Rookie"),a.a.createElement(v.Form,{success:!0},a.a.createElement(v.Form.Input,{icon:"email",action:"Suscribirme",placeholder:"Ingresa tu email..."}),a.a.createElement(v.Form.Input,{icon:"name",placeholder:"Ingresa tu email..."}),a.a.createElement(v.Form.Input,{icon:"surname",placeholder:"Ingresa tu email..."}),a.a.createElement(v.Form.Input,{icon:"email",action:"Suscribirme",placeholder:"Ingresa tu email..."}),a.a.createElement(v.Message,{success:!0,header:"Registro exitoso",content:"Gracias por registrarte en Dragoons!"}),a.a.createElement(v.Message,{error:!0,header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),a.a.createElement(v.Form.Checkbox,{label:"Acepto acuerdo de confidencialidad, terminos y condiciones.",error:!0}),a.a.createElement(v.Button,{type:"submit"},"Submit")))};function w(){var e=Object(r.a)(["\n  display: flex;\n  flex: 1;\n\n  align-items: 'center';\n  justify-content: 'center';\n  color: #0d2f80;\n"]);return w=function(){return e},e}var O=u.a.div(w());var T=function(e){return a.a.createElement(O,null,a.a.createElement(j,null))},z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i))),Object(b.a)(Object(m.a)(n),"state",{modalOpen:!1}),Object(b.a)(Object(m.a)(n),"handleOpen",function(){return n.setState({modalOpen:!0})}),Object(b.a)(Object(m.a)(n),"handleClose",function(){return n.setState({modalOpen:!1})}),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement(v.Modal,{trigger:a.a.createElement(g.a,{onClick:this.handleOpen,large:"true",arrow:"true",on:!0},"Suscribe for FREE"),open:this.state.modalOpen,onClose:this.handleClose,basic:!0,size:"small"},a.a.createElement(v.Modal.Content,null,a.a.createElement(T,null)),a.a.createElement(v.Modal.Actions,null,a.a.createElement(v.Button,{color:"white",onClick:this.handleClose,inverted:!0},a.a.createElement(v.Icon,{name:"close"})," Cerrar")))}}]),t}(i.Component);function k(){var e=Object(r.a)(["\n\tfont-size: 30px;\n\tfont-weight: 500;\n\tmargin: 0 0 0 5px;\n\tcolor: white;\n"]);return k=function(){return e},e}function q(){var e=Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #141928;\n\tpadding: 20px;\n\t> div {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"]);return q=function(){return e},e}var S=u.a.header(q()),I=u.a.h1(k());var D=function(e){return a.a.createElement(S,null,a.a.createElement("div",null,a.a.createElement("img",{src:"/static/dragoons-logo.png",alt:"Dragoons logo",width:50,height:50}),a.a.createElement(I,null,"Dragoons")),a.a.createElement("div",null,a.a.createElement(z,null)))};n("/aIJ");function M(){var e=Object(r.a)(["\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tbackground-color: #171b27;\n"]);return M=function(){return e},e}var F=u.a.div(M());var _=function(e){return a.a.createElement(F,null,a.a.createElement("a",{href:"//instagram.com/dragoons",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(v.Icon,{size:"big",inverted:!0,link:!0,name:"instagram"})),a.a.createElement("a",{href:"//twitter.com/dragoons",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(v.Icon,{size:"big",inverted:!0,link:!0,name:"twitter"})),a.a.createElement("a",{href:"//discord.com/dragoons",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(v.Icon,{size:"big",inverted:!0,link:!0,name:"btc"})))};function C(){var e=Object(r.a)(["\n\tdisplay: inline-flex;\n\theight: 30px;\n\tflex: 2;\n\t> h5 {\n\t\tmargin: 0 0 0 5px;\n\t}\n"]);return C=function(){return e},e}function A(){var e=Object(r.a)(["\n\talign-items: center;\n\tbackground-color: #141928;\n\tcolor: white;\n\tdisplay: flex;\n\theight: 100px;\n\tjustify-content: space-between;\n\tpadding: 20px;\n\t> div {\n\t\tflex: 1;\n\t}\n"]);return A=function(){return e},e}var R=u.a.footer(A()),Z=u.a.div(C());var U=function(e){return a.a.createElement(R,null,a.a.createElement("div",null,a.a.createElement("img",{src:"/static/dragoons-logo.png",alt:"Dragoons logo",width:30,height:30})),a.a.createElement(Z,null,a.a.createElement("span",null,a.a.createElement(v.Icon,{size:"small",inverted:!0,name:"copyright"})),a.a.createElement(x.a,{h:5,weight:"thin",size:"subheader"},"2019 - Dragoons - Todos los derechos reservados")),a.a.createElement("div",null,a.a.createElement(_,null)))};function L(){var e=Object(r.a)(["\n\tmin-height: 100vh;\n\tfont-family: Raleway;\n\tcolor: white;\n\tpadding: 3vw;\n\tbackground-color: #141928;\n\tfont-weight: 200;\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tfont-family: Raleway;\n\t}\n\tcaption {\n\t\tfont-size: 12px;\n\t\tline-height: 16px;\n\t}\n"]);return L=function(){return e},e}var P=u.a.div(L());t.a=function(e){var t=e.children,n=e.title,r=void 0===n?"This is the default title":n,i=e.description,o=void 0===i?"This is the default description":i;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("title",null,r),a.a.createElement("meta",{name:"description",content:o}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),a.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,400,500",rel:"stylesheet"})),a.a.createElement(D,null),a.a.createElement(P,null,t),a.a.createElement(U,null))}},"8R6+":function(e,t,n){"use strict";var r=n("UXZV"),i=n.n(r);function a(){return(a=i.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=n("rt45"),c=n("cDcd"),l=n.n(c),u=n("Dtiu"),s=n.n(u),f=n("FfxO");function p(){var e=Object(o.a)(["\n\tdisplay: flex;\n\tfont-weight: bold;\n\tcolor: ",";\n\tfont-size: ",";\n\tpadding: ",";\n\tborder-radius: 4px;\n\tmin-width: ",";\n\tbackground-image: ",";\n\t:hover {\n\t\tbackground-image: linear-gradient(to right, #982d4e, #512b65);\n\t\tcolor: white;\n\t}\n\t:focus {\n\t\tcolor: white;\n\t\tbox-shadow: 0 0 1pt 1pt #13317b;\n\t}\n\tspan:nth-child(1) {\n\t\tfont-size: ",";\n\t\tmargin: ",";\n\t\tdisplay: ",";\n\t}\n\tspan:nth-child(2) {\n\t\tfont-size: ",";\n\t\tmargin: ",";\n\t\tdisplay: ",";\n\t}\n"]);return p=function(){return e},e}var d=s()(f.Button)(p(),function(e){return e.disabled?"rgba(255, 255, 255, 0.6)":"white"},function(e){return e.large?"18px":e.small?"16px":"inherit"},function(e){return e.large?"12px 16px":e.small?"7px 14px":"8px"},function(e){return e.large?"88px":e.small?"80px":"0"},function(e){return e.disabled?"linear-gradient(to right, red, #512b65)":"linear-gradient(to right, #982d4e, #512b65)"},function(e){return e.large?"12px":e.small?"10px":"inherit"},function(e){return e.large?"0 6px 0 0":e.small?"0 5px 0 0":"0"},function(e){return e.star?"inline":"none"},function(e){return e.large?"30px":e.small?"25px":"inherit"},function(e){return e.large?"0 0 0 6px":e.small?"0 0 0 5px":"0"},function(e){return e.arrow?"inline":"none"});t.a=function(e){return l.a.createElement(d,a({large:e.large,small:e.small,star:e.star,arrow:e.arrow,disabled:e.disabled},e),l.a.createElement("span",null,l.a.createElement(f.Icon,{size:"tiny",inverted:!0,name:"star"})),e.children,l.a.createElement("span",null,l.a.createElement(f.Icon,{size:"tiny",inverted:!0,name:"arrow right"})))}},"9M7Z":function(e,t,n){"use strict";var r=n("0iUn"),i=n("sLSF"),a=n("MI3g"),o=n("a7VT"),c=n("Tit0"),l=n("cDcd"),u=n.n(l),s=function(e){function t(e){return Object(r.a)(this,t),Object(a.a)(this,Object(o.a)(t).call(this,e))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="h"+this.props.h;return u.a.createElement(e,{style:{lineHeight:"mega"===this.props.size?"80px":"jumbo"===this.props.size?"64px":"display"===this.props.size?"48px":"headline"===this.props.size?"32px":"title"===this.props.size?"28px":"subheader"===this.props.size?"24px":"inherit",fontSize:"mega"===this.props.size?"72px":"jumbo"===this.props.size?"48px":"display"===this.props.size?"36px":"headline"===this.props.size?"24px":"title"===this.props.size?"20px":"subheader"===this.props.size?"16px":"1px",fontWeight:"bold"===this.props.weight?"500":"thin"===this.props.weight?"200":"0"},weight:this.props.weight},this.props.children)}}]),t}(u.a.Component);t.a=s},"AT/M":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},AzSJ:function(e,t){e.exports=require("video.js")},Bhuq:function(e,t,n){e.exports=n("/+oN")},Dtiu:function(e,t){e.exports=require("styled-components")},FbiP:function(e,t,n){e.exports=n("Gf4D")},FfxO:function(e,t){e.exports=require("semantic-ui-react")},Gf4D:function(e,t){e.exports=require("core-js/library/fn/object/freeze")},MI3g:function(e,t,n){"use strict";var r=n("XVgq"),i=n.n(r),a=n("Z7t5"),o=n.n(a);function c(e){return(c="function"==typeof o.a&&"symbol"==typeof i.a?function(e){return typeof e}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof o.a&&"symbol"===c(i.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":c(e)})(e)}var u=n("AT/M");function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?Object(u.a)(e):t}n.d(t,"a",function(){return s})},SqZg:function(e,t,n){e.exports=n("o5io")},TRZx:function(e,t,n){e.exports=n("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Tit0:function(e,t,n){"use strict";var r=n("SqZg"),i=n.n(r),a=n("TRZx"),o=n.n(a);function c(e,t){return(c=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=i()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return l})},U7sd:function(e,t){e.exports=require("next-server/head")},UXZV:function(e,t,n){e.exports=n("dGr4")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,n){e.exports=n("gHn/")},Z44L:function(e,t){e.exports=require("videojs-youtube")},Z7t5:function(e,t,n){e.exports=n("vqFK")},a7VT:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("Bhuq"),i=n.n(r),a=n("TRZx"),o=n.n(a);function c(e){return(c=o.a?i.a:function(e){return e.__proto__||i()(e)})(e)}},cDcd:function(e,t){e.exports=require("react")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,n){e.exports=n("TUA0")},ltjX:function(e,t){e.exports=require("core-js/library/fn/object/define-properties")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},pTTa:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return T});var r=n("0iUn"),i=n("sLSF"),a=n("MI3g"),o=n("a7VT"),c=n("Tit0"),l=n("rt45"),u=n("cDcd"),s=n.n(u),f=n("Dtiu"),p=n.n(f),d=n("5Yp1"),m=n("9M7Z"),h=n("8R6+"),b=n("/iDT");function g(){var e=Object(l.a)(["\n\ttext-align: center;\n"]);return g=function(){return e},e}function v(){var e=Object(l.a)(["\n\tmargin: 30px 0;\n"]);return v=function(){return e},e}function x(){var e=Object(l.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\t> div {\n\t\tflex: 1;\n\t}\n\t> div:nth-child(1) {\n\t\tmargin: 0 30px 0 0;\n\t}\n\t> div div {\n\t\twidth: 100%;\n\t\theight: 400px;\n\t\tbackground-color: lightgrey;\n\t}\n"]);return x=function(){return e},e}function y(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]);return y=function(){return e},e}var E=p.a.div(y()),j=p.a.div(x()),w=p.a.div(v()),O=p.a.div(g()),T=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{title:"Landing title",description:"A description about the landing page"},s.a.createElement(E,null,s.a.createElement(j,null,s.a.createElement("div",null,s.a.createElement("div",null)),s.a.createElement("div",null,s.a.createElement(m.a,{h:2,weight:"bold",size:"jumbo"},"LET THE GAMES BEGIN!"),s.a.createElement(m.a,{h:3,weight:"thin",size:"title"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis exercitationem sed."),s.a.createElement(h.a,{large:"true"},"Action Button!"))),s.a.createElement(w,null,s.a.createElement(b.a,{techOrder:["youtube"],autoplay:!1,controls:!0,width:"1300",height:"500",sources:[{src:"https://www.youtube.com/watch?v=jSJr3dXZfcg",type:"video/youtube"}]})),s.a.createElement(O,null,s.a.createElement(m.a,{h:2,weight:"bold",size:"jumbo"},"CATCHY TEXT HERE"),s.a.createElement(m.a,{h:3,weight:"thin",size:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}}]),t}(s.a.Component)},rt45:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("2Eek"),i=n.n(r),a=n("FbiP"),o=n.n(a);function c(e,t){return t||(t=e.slice(0)),o()(i()(e,{raw:{value:o()(t)}}))}},sLSF:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("hfKm"),i=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},vYYK:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("hfKm"),i=n.n(r);function a(e,t,n){return t in e?i()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});