(function(e){function l(l){for(var t,u,o=l[0],i=l[1],s=l[2],h=0,b=[];h<o.length;h++)u=o[h],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&b.push(n[u][0]),n[u]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);c&&c(l);while(b.length)b.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,l=0;l<r.length;l++){for(var a=r[l],t=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(t=!1)}t&&(r.splice(l--,1),e=u(u.s=a[0]))}return e}var t={},n={app:0},r=[];function u(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=t,u.d=function(e,l,a){u.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,l){if(1&l&&(e=u(e)),8&l)return e;if(4&l&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var t in e)u.d(a,t,function(l){return e[l]}.bind(null,t));return a},u.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(l,"a",l),l},u.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},u.p="/vue-color-picker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=l,o=o.slice();for(var s=0;s<o.length;s++)l(o[s]);var c=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,l,a){e.exports=a("56d7")},"40bc":function(e,l,a){},4766:function(e,l,a){e.exports=a.p+"img/github-logo.720aa9f1.svg"},"4eca":function(e,l,a){},"56d7":function(e,l,a){"use strict";a.r(l);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("7a23"),n=(a("b0c0"),{class:"main"}),r={class:"container"};function u(e,l,a,u,o,i){var s=Object(t["o"])("TheHeader"),c=Object(t["o"])("color-picker");return Object(t["k"])(),Object(t["e"])(t["a"],null,[Object(t["h"])(s,{onGoHome:i.switchToHomepage,onSetValue:i.setColorValue,onShowOverlay:i.addOverlay,onHideOverlay:i.removeOverlay,"close-menu":o.activeStatus,"stripe-color":o.stripeColor},null,8,["onGoHome","onSetValue","onShowOverlay","onHideOverlay","close-menu","stripe-color"]),Object(t["f"])("div",n,[Object(t["f"])("div",r,[(Object(t["k"])(!0),Object(t["e"])(t["a"],null,Object(t["n"])(o.colorSet,(function(e){return Object(t["k"])(),Object(t["d"])(c,{key:e.id,colorName:e.name,colorValue:"hex"===o.val?e.hexValue:"rgb"===o.val?e.rgbValue:"hsl"===o.val?e.hslValue:e.hexValue,onColorCopied:i.changeStripeColor},null,8,["colorName","colorValue","onColorCopied"])})),128))])])],64)}a("fb6a"),a("99af"),a("d3b7"),a("159b");var o=[{id:1,name:"Go green",hexValue:"#00bd61",hslValue:"hsl(151, 100%, 37%)",rgbValue:"rgb(0, 189, 97)"},{id:2,name:"Rich black",hexValue:"#041213",hslValue:"hsl(184, 65%, 5%)",rgbValue:"rgb(4, 18, 19)"},{id:3,name:"Medium aquamarine",hexValue:"#61c0ac",hslValue:"hsl(167, 43%, 57%)",rgbValue:"rgb(97, 192, 172)"},{id:4,name:"Oxford blue",hexValue:"#00214c",hslValue:"hsl(214, 100%, 15%)",rgbValue:"rgb(0, 33, 76)"},{id:5,name:"Morning blue",hexValue:"#7fa8a2",hslValue:"hsl(171, 19%, 58%)",rgbValue:"rgb(127, 168, 162)"},{id:6,name:"Melon",hexValue:"#faaaad",hslValue:"hsl(358, 89%, 82%)",rgbValue:"rgb(250, 170, 173)"},{id:7,name:"Charleston green",hexValue:"#272727",hslValue:"hsl(0, 0%, 15%)",rgbValue:"rgb(39, 39, 39)"},{id:8,name:"Mellow apricot",hexValue:"#fbb76c",hslValue:"hsl(31, 95%, 70%)",rgbValue:"rgb(251, 183, 108)"},{id:9,name:"Rosy brown",hexValue:"#c88a8b",hslValue:"hsl(359, 36%, 66%)",rgbValue:"rgb(200, 138, 139)"},{id:10,name:"Cultured",hexValue:"#f6f4f5",hslValue:"hsl(330, 10%, 96%)",rgbValue:"rgb(246, 244, 245)"},{id:11,name:"Princeton orange",hexValue:"#f28123",hslValue:"hsl(27, 89%, 54%)",rgbValue:"rgb(242, 129, 35)"},{id:12,name:"White",hexValue:"#ffffff",hslValue:"hsl(0, 0%, 100%)",rgbValue:"rgb(255, 255, 255)"},{id:13,name:"Red munsell",hexValue:"#fa003e",hslValue:"hsl(345, 100%, 49%)",rgbValue:"rgb(250, 0, 62)"},{id:14,name:"Cobalt blue",hexValue:"#242d52",hslValue:"hsl(228, 39%, 23%)",rgbValue:"rgb(36, 45, 82)"},{id:15,name:"Orange soda",hexValue:"#f3613c",hslValue:"hsl(12, 88%, 59%)",rgbValue:"rgb(243, 97, 60)"},{id:16,name:"Snow",hexValue:"#fafafa",hslValue:"hsl(0, 0%, 98%)",rgbValue:"rgb(250, 250, 250)"},{id:17,name:"Black blue",hexValue:"#1e1e26",hslValue:"hsl(240, 12%, 13%)",rgbValue:"rgb(30, 30, 38)"},{id:18,name:"Ash gray",hexValue:"#b5b6bb",hslValue:"hsl(230, 4%, 72%)",rgbValue:"rgb(181, 182, 187)"},{id:19,name:"Signal black",hexValue:"#303030",hslValue:"hsl(0, 0%, 19%)",rgbValue:"rgb(48, 48, 48)"},{id:20,name:"Pale silver",hexValue:"#dcb8ba",hslValue:"hsl(357, 34%, 79%)",rgbValue:"rgb(220, 184, 186)"},{id:21,name:"Coffee with milk",hexValue:"#ac8363",hslValue:"hsl(26, 31%, 53%)",rgbValue:"rgb(172, 131, 99)"},{id:22,name:"Granite gray",hexValue:"#636862",hslValue:"hsl(110, 3%, 40%)",rgbValue:"rgb(99, 104, 98)"},{id:23,name:"Cerulean crayola",hexValue:"#2ebdf9",hslValue:"hsl(198, 94%, 58%)",rgbValue:"rgb(46, 189, 249)"},{id:24,name:"Fire opal",hexValue:"#ef5455",hslValue:"hsl(360, 83%, 63%)",rgbValue:"rgb(239, 84, 85)"},{id:25,name:"Ming",hexValue:"#3b6b7f",hslValue:"hsl(198, 37%, 36%)",rgbValue:"rgb(59, 107, 127)"},{id:26,name:"Laurel green",hexValue:"#aec99e",hslValue:"hsl(98, 28%, 70%)",rgbValue:"rgb(174, 201, 158)"},{id:27,name:"Black olive",hexValue:"#373c36",hslValue:"hsl(110, 5%, 22%)",rgbValue:"rgb(55, 60, 54)"},{id:28,name:"Pale green",hexValue:"#8ba977",hslValue:"hsl(96, 23%, 56%)",rgbValue:"rgb(139, 169, 119)"},{id:29,name:"Pale violet red",hexValue:"#df678c",hslValue:"hsl(341, 65%, 64%)",rgbValue:"rgb(223, 103, 140)"},{id:30,name:"Copper penny",hexValue:"#bf646b",hslValue:"hsl(355, 42%, 57%)",rgbValue:"rgb(191, 100, 107)"},{id:31,name:"Clouds",hexValue:"#efefef",hslValue:"hsl(0, 0%, 94%)",rgbValue:"rgb(239, 239, 239)"},{id:32,name:"Esmerald",hexValue:"#23c975",hslValue:"hsl(150, 70%, 46%)",rgbValue:"rgb(35, 201, 117)"},{id:33,name:"Traffic black",hexValue:"#2b2c2e",hslValue:"hsl(220, 3%, 17%)",rgbValue:"rgb(43, 44, 46)"},{id:34,name:"Congo pink",hexValue:"#fd7b83",hslValue:"hsl(356, 97%, 74%)",rgbValue:"rgb(253, 123, 131)"},{id:35,name:"Lavender blush",hexValue:"#ffecee",hslValue:"hsl(354, 100%, 96%)",rgbValue:"rgb(255, 236, 238)"},{id:36,name:"Midnight blue",hexValue:"#2d4358",hslValue:"hsl(209, 32%, 26%)",rgbValue:"rgb(45, 67, 88)"},{id:37,name:"Jet",hexValue:"#333333",hslValue:"hsl(0, 0%, 20%)",rgbValue:"rgb(51, 51, 51)"},{id:38,name:"Russian velvet",hexValue:"#3d155f",hslValue:"hsl(272, 64%, 23%)",rgbValue:"rgb(61, 21, 95)"},{id:39,name:"Mikado yellow",hexValue:"#febe10",hslValue:"hsl(44, 99%, 53%)",rgbValue:"rgb(254, 190, 16)"},{id:40,name:"Black bean",hexValue:"#371400",hslValue:"hsl(22, 100%, 11%)",rgbValue:"rgb(55, 20, 0)"},{id:41,name:"Yellow pantone",hexValue:"#fcde00",hslValue:"hsl(53, 100%, 49%)",rgbValue:"rgb(252, 222, 0)"},{id:42,name:"Piggy pink",hexValue:"#efdded",hslValue:"hsl(307, 36%, 90%)",rgbValue:"rgb(239, 221, 237)"},{id:43,name:"Pearly purple",hexValue:"#a26aa7",hslValue:"hsl(295, 26%, 54%)",rgbValue:"rgb(162, 106, 167)"},{id:44,name:"Mint",hexValue:"#41b783",hslValue:"hsl(154, 48%, 49%)",rgbValue:"rgb(65, 183, 131)"},{id:45,name:"Wet asphalt",hexValue:"#34495e",hslValue:"hsl(210, 29%, 29%)",rgbValue:"rgb(52, 73, 94)"},{id:46,name:"Tuscany",hexValue:"#ce9797",hslValue:"hsl(360, 36%, 70%)",rgbValue:"rgb(206, 151, 151)"},{id:47,name:"Elgengrau",hexValue:"#0d161d",hslValue:"hsl(206, 38%, 8%)",rgbValue:"rgb(13, 22, 29)"},{id:48,name:"Old lace",hexValue:"#fdf4e3",hslValue:"hsl(39, 87%, 94%)",rgbValue:"rgb(253, 244, 227)"},{id:49,name:"Mountbatten pink",hexValue:"#937b92",hslValue:"hsl(302, 10%, 53%)",rgbValue:"rgb(147, 123, 146)"},{id:50,name:"Antique white",hexValue:"#fbf0da",hslValue:"hsl(40, 80%, 92%)",rgbValue:"rgb(251, 240, 218)"},{id:51,name:"Cyclamen",hexValue:"#ee68a4",hslValue:"hsl(333, 80%, 67%)",rgbValue:"rgb(238, 104, 164)"},{id:52,name:"Ochre brown",hexValue:"#9f703a",hslValue:"hsl(32, 47%, 43%)",rgbValue:"rgb(159, 112, 58)"},{id:53,name:"Baby powder",hexValue:"#fcfcfc",hslValue:"hsl(0, 0%, 99%)",rgbValue:"rgb(252, 252, 252)"},{id:54,name:"Cadmium red",hexValue:"#eb001a",hslValue:"hsl(353, 100%, 46%)",rgbValue:"rgb(253, 0, 26)"},{id:55,name:"Dahlia yellow",hexValue:"#f79e1b",hslValue:"hsl(36, 93%, 54%)",rgbValue:"rgb(247, 158, 27)"},{id:56,name:"Winter sky",hexValue:"#ff006b",hslValue:"hsl(335, 100%, 50%)",rgbValue:"rgb(255, 0, 107)"},{id:57,name:"Grey blue",hexValue:"#303a42",hslValue:"hsl(207, 16%, 22%)",rgbValue:"rgb(48, 58, 66)"},{id:58,name:"Satin sheen gold",hexValue:"#cd9a32",hslValue:"hsl(40, 61%, 50%)",rgbValue:"rgb(205, 154, 50)"},{id:59,name:"Blue green",hexValue:"#0f3344",hslValue:"hsl(199, 64%, 16%)",rgbValue:"rgb(15, 51, 68)"},{id:60,name:"Orange crayola",hexValue:"#ffb731",hslValue:"hsl(22, 100%, 60%)",rgbValue:"rgb(255, 123, 49)"},{id:61,name:"Black bean",hexValue:"#411e00",hslValue:"hsl(28, 100%, 13%)",rgbValue:"rgb(65, 30, 0)"},{id:62,name:"Carrot orange",hexValue:"#f39728",hslValue:"hsl(33, 89%, 55%)",rgbValue:"rgb(243, 151, 40)"},{id:63,name:"Steel blue",hexValue:"#2b2a3c",hslValue:"hsl(243, 18%, 20%)",rgbValue:"rgb(43, 42, 60)"},{id:64,name:"Blond",hexValue:"#fff7c0",hslValue:"hsl(52, 100%, 88%)",rgbValue:"rgb(255, 247, 192)"},{id:65,name:"Camel",hexValue:"#b88665",hslValue:"hsl(24, 37%, 56%)",rgbValue:"rgb(184, 134, 101)"},{id:66,name:"Tickle me pink",hexValue:"#fc89b2",hslValue:"hsl(339, 95%, 76%)",rgbValue:"rgb(252, 137, 178)"},{id:67,name:"Gunmetal",hexValue:"#2f2e41",hslValue:"hsl(243, 17%, 22%)",rgbValue:"rgb(47, 46, 65)"},{id:68,name:"Pink lace",hexValue:"#f6dff2",hslValue:"hsl(310, 56%, 92%)",rgbValue:"rgb(246, 223, 242)"},{id:69,name:"Amber",hexValue:"#ffbe00",hslValue:"hsl(45, 100%, 50%)",rgbValue:"rgb(255, 190, 0)"},{id:70,name:"Banana mania",hexValue:"#ffecb9",hslValue:"hsl(44, 100%, 86%)",rgbValue:"rgb(255, 236, 185)"},{id:71,name:"Tart orange",hexValue:"#f35047",hslValue:"hsl(3, 88%, 62%)",rgbValue:"rgb(243, 80, 71)"},{id:72,name:"Rose red",hexValue:"#b11a5d",hslValue:"hsl(333, 74%, 40%)",rgbValue:"rgb(177, 26, 93)"},{id:73,name:"Ruby",hexValue:"#d90e5d",hslValue:"hsl(337, 88%, 45%)",rgbValue:"rgb(217, 14, 93)"},{id:74,name:"Cosmic latte",hexValue:"#fff9e3",hslValue:"hsl(47, 100%, 95%)",rgbValue:"rgb(255, 249, 227)"},{id:75,name:"Russian violet",hexValue:"#00a82e",hslValue:"hsl(136, 100%, 33%)",rgbValue:"rgb(0, 168, 46)"},{id:76,name:"Slate grey",hexValue:"#4d4a5d",hslValue:"hsl(249, 11%, 33%)",rgbValue:"rgb(77, 74, 93)"},{id:77,name:"Chinese yellow",hexValue:"#fdb604",hslValue:"hsl(43, 98%, 50%)",rgbValue:"rgb(253, 182, 4)"}],i=a("9b19"),s=a.n(i),c=function(e){return Object(t["m"])("data-v-6cfb3c2c"),e=e(),Object(t["l"])(),e},h={class:"logo"},b=c((function(){return Object(t["f"])("img",{src:s.a,alt:"color picker site logo"},null,-1)})),g=[b],d=["title"],V=c((function(){return Object(t["f"])("span",null,null,-1)})),f=c((function(){return Object(t["f"])("span",null,null,-1)})),m=c((function(){return Object(t["f"])("span",null,null,-1)})),p=[V,f,m];function v(e,l,a,n,r,u){var o=Object(t["o"])("options-menu");return Object(t["k"])(),Object(t["e"])(t["a"],null,[Object(t["f"])("nav",null,[Object(t["f"])("div",h,[Object(t["f"])("a",{href:"#",title:"Go Home",onClick:l[0]||(l[0]=function(l){return e.$emit("go-home")})},g)]),Object(t["f"])("button",{class:Object(t["i"])(["burger",r.isActive?"open":""]),onClick:l[1]||(l[1]=function(){return u.openMenu&&u.openMenu.apply(u,arguments)}),title:r.isActive?"Hide Menu":"Show Menu"},p,10,d),Object(t["f"])("div",{class:"stripe",style:Object(t["j"])({backgroundColor:a.stripeColor})},null,4),Object(t["h"])(o,{onChooseValue:u.setColorValue,"show-menu":a.closeMenu},null,8,["onChooseValue","show-menu"])]),(Object(t["k"])(),Object(t["d"])(t["b"],{to:"body"},[Object(t["f"])("div",{class:Object(t["i"])(["overlay",r.isActive?"active":""]),onClick:l[2]||(l[2]=function(){return u.removeOverlay&&u.removeOverlay.apply(u,arguments)})},null,2)]))],64)}var O=a("4766"),x=a.n(O),j=function(e){return Object(t["m"])("data-v-87a9a7ca"),e=e(),Object(t["l"])(),e},y={class:"options-color"},k=j((function(){return Object(t["f"])("p",null,"SET COLOR VALUE",-1)})),C={class:"options-color-btns"},w={"data-cooltipz-dir":"bottom","data-cooltipz-size":"medium","aria-label":"Set the color value to HEX e.g #ffffff"},S={"data-cooltipz-dir":"bottom","data-cooltipz-size":"medium","aria-label":"Set the color value to RGB e.g rgb(255, 255, 255)"},M={"data-cooltipz-dir":"bottom","data-cooltipz-size":"medium","aria-label":"Set the color value to HSL e.g hsl(0, 0%, 100%)"},P={class:"options-pages"},H=Object(t["g"])(" CHOOSE PAGE"),B=j((function(){return Object(t["f"])("br",null,null,-1)})),A=j((function(){return Object(t["f"])("div",{id:"options-page-btns"},null,-1)})),T=j((function(){return Object(t["f"])("div",{class:"options-link"},[Object(t["f"])("div",{class:"link"},[Object(t["f"])("a",{href:"",title:"GitHub"},[Object(t["f"])("img",{src:x.a,alt:"GitHub logo"}),Object(t["g"])(" GITHUB")])]),Object(t["f"])("div",{class:"link-text"},"Powered by Vue")],-1)}));function L(e,l,a,n,r,u){return Object(t["k"])(),Object(t["e"])("div",{class:Object(t["i"])(["options",e.showMenu?"open":""])},[Object(t["f"])("div",y,[k,Object(t["f"])("div",C,[Object(t["f"])("div",w,[Object(t["f"])("button",{class:Object(t["i"])(["btn","hex"===r.activeBtn?"active":""]),onClick:l[0]||(l[0]=function(l){return e.$emit("choose-value","hex"),u.setActiveBtn("hex")})}," HEX ",2)]),Object(t["f"])("div",S,[Object(t["f"])("button",{class:Object(t["i"])(["btn","rgb"===r.activeBtn?"active":""]),onClick:l[1]||(l[1]=function(l){return e.$emit("choose-value","rgb"),u.setActiveBtn("rgb")})}," RGB ",2)]),Object(t["f"])("div",M,[Object(t["f"])("button",{class:Object(t["i"])(["btn","hsl"===r.activeBtn?"active":""]),onClick:l[2]||(l[2]=function(l){return e.$emit("choose-value","hsl"),u.setActiveBtn("hsl")})}," HSL ",2)])])]),Object(t["f"])("div",P,[Object(t["f"])("p",null,[H,B,Object(t["g"])("(showing "+Object(t["p"])(u.currentPage[0])+" of "+Object(t["p"])(u.numOfPages[0])+") ",1)]),A]),T],2)}var G={props:["show-menu"],inject:["numOfPages","currentPage"],data:function(){return{activeBtn:"hex"}},methods:{setActiveBtn:function(e){this.activeBtn=e}}},E=(a("769f"),a("6b0d")),z=a.n(E);const R=z()(G,[["render",L],["__scopeId","data-v-87a9a7ca"]]);var _=R,q={components:{OptionsMenu:_},props:["closeMenu","stripeColor"],emits:["go-home","set-value","show-overlay","hide-overlay"],data:function(){return{isActive:this.closeMenu}},methods:{setColorValue:function(e){this.$emit("set-value",e)},openMenu:function(){this.isActive=!this.isActive,this.$emit("show-overlay",this.isActive),this.toggleNoScroll()},removeOverlay:function(){this.isActive=!this.isActive,this.$emit("hide-overlay",this.isActive),this.toggleNoScroll()},toggleNoScroll:function(){document.querySelector("body").classList.toggle("no-scroll")}}};a("8fd7");const $=z()(q,[["render",v],["__scopeId","data-v-6cfb3c2c"]]);var N=$,I={class:"hexagon"},J={class:"color-text"},W={class:"color-name"},F=["aria-label"];function U(e,l,a,n,r,u){return Object(t["k"])(),Object(t["e"])("div",I,[Object(t["f"])("div",J,[Object(t["f"])("p",W,Object(t["p"])(a.colorName),1),Object(t["f"])("p",{class:"color-value","data-cooltipz-dir":"top","aria-label":r.isClicked?"copied! 😉":"click to copy",onClick:l[0]||(l[0]=function(){return u.copyClickedValue&&u.copyClickedValue.apply(u,arguments)})},Object(t["p"])(a.colorValue),9,F)]),Object(t["f"])("div",{class:"color",style:Object(t["j"])({backgroundColor:a.colorValue})},null,4)])}var X={props:["colorName","colorValue"],emits:["color-copied"],data:function(){return{isClicked:!1}},methods:{copyClickedValue:function(){var e=this;navigator.clipboard.writeText(this.colorValue),this.isClicked=!this.isClicked,setTimeout((function(){e.isClicked=!e.isClicked}),1e3),this.$emit("color-copied",this.colorValue)}}};const D=z()(X,[["render",U]]);var Y=D,K={components:{TheHeader:N,ColorPicker:Y},data:function(){return{val:"hex",colorSet:[],state:{querySet:o,page:1,numOfHexagons:36,window:5},buttonClicked:1,activePage:[1],totalPages:[0],activeStatus:!1,stripeColor:""}},methods:{switchToHomepage:function(){this.buttonClicked=1,this.activePage[0]=1,this.state.page=1,this.displayColors(this.buttonClicked)},setColorValue:function(e){switch(e){case"hex":this.val="hex";break;case"rgb":this.val="rgb";break;case"hsl":this.val="hsl";break;default:this.val="hex";break}},displayColors:function(e){var l=this.pagination(this.state.querySet,this.state.page,this.state.numOfHexagons);this.colorSet=l.querySet,this.displayPageButtons(l.pages,e),this.totalPages[0]=l.pages},pagination:function(e,l,a){var t=(l-1)*a,n=t+a,r=e.slice(t,n),u=Math.ceil(e.length/a);return{querySet:r,pages:u}},displayPageButtons:function(e,l){var a=this,t=document.getElementById("options-page-btns");t.innerHTML="";var n=this.state.page-Math.floor(this.state.window/2),r=this.state.page+Math.floor(this.state.window/2);n<1&&(n=1,r=this.state.window),r>e&&(n=e-(this.state.window-1),n<1&&(n=1),r=e);for(var u=n;u<=r;u++)u===l||u===a.buttonClicked?t.innerHTML+="<button value=".concat(u,' class="page page-btn active">').concat(u,"</button>"):t.innerHTML+="<button value=".concat(u,' class="page page-btn">').concat(u,"</button>");this.state.page>=4&&(t.innerHTML="<button value=".concat(1,' class="page page-btn">&#171; First</button>')+t.innerHTML),this.state.page<=e-3&&(t.innerHTML+="<button value=".concat(e,' class="page page-btn">Last &#187;</button>'));var o=document.querySelectorAll(".page");o.forEach((function(e){e.addEventListener("click",(function(){var e=parseInt(this.value);a.buttonClicked=e,a.activePage[0]=e,a.state.page=e,a.displayColors(a.buttonClicked)}))}))},addOverlay:function(e){this.activeStatus=e},removeOverlay:function(e){this.activeStatus=e},changeStripeColor:function(e){this.stripeColor=e}},provide:function(){return{numOfPages:this.totalPages,currentPage:this.activePage}},mounted:function(){this.displayColors()}};a("7f71");const Q=z()(K,[["render",u]]);var Z=Q,ee=Object(t["c"])(Z);ee.mount("#app")},"769f":function(e,l,a){"use strict";a("40bc")},"777a":function(e,l,a){},"7f71":function(e,l,a){"use strict";a("4eca")},"8fd7":function(e,l,a){"use strict";a("777a")},"9b19":function(e,l,a){e.exports=a.p+"img/logo.ffe086c1.svg"}});
//# sourceMappingURL=app.880aa83b.js.map