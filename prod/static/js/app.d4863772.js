(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-530d30b8":"4f41f915","chunk-2d2086b7":"69ce5552","chunk-be68f806":"863e7000"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-530d30b8":1,"chunk-be68f806":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-530d30b8":"9a88edfd","chunk-2d2086b7":"31d6cfe0","chunk-be68f806":"215f8358"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],f=i.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e);var p=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-img",{staticClass:"shrink mr-2 h-100",attrs:{alt:"лого",contain:"",src:n("cf05"),transition:"scale-transition"}}),r("v-spacer"),e.auth?r("v-btn",{staticClass:"black--text",attrs:{color:"success"},on:{click:e.logout}},[e._v("Logout")]):e._e()],1),r("v-main",{attrs:{app:""}},[r("router-view",{staticClass:"h-100"})],1)],1)},o=[],c=n("5530"),u=n("2f62"),s={name:"App",computed:Object(c["a"])({},Object(u["c"])(["auth"])),methods:Object(c["a"])({},Object(u["b"])(["logout","whoami"])),created:function(){this.whoami()}},i=s,f=(n("cf25"),n("2877")),p=n("6544"),l=n.n(p),d=n("7496"),h=n("40dc"),m=n("8336"),g=n("adda"),b=n("f6c4"),v=n("2fa4"),w=Object(f["a"])(i,a,o,!1,null,null,null),x=w.exports;l()(w,{VApp:d["a"],VAppBar:h["a"],VBtn:m["a"],VImg:g["a"],VMain:b["a"],VSpacer:v["a"]});n("d3b7"),n("3ca3"),n("ddb0");var y=n("8c4f"),O=n("1da1"),k=(n("96cf"),n("b59a")),j={state:{userLogin:"",auth:!1,isAdmin:!1,csrf:""},getters:{userLogin:function(e){return e.userLogin},auth:function(e){return e.auth},isAdmin:function(e){return e.isAdmin},csrf:function(e){return e.csrf}},mutations:{updateUserLogin:function(e,t){var n=t.login,r=t.auth,a=t.isAdmin;e.userLogin=n,e.auth=r,e.isAdmin=a},updateCsrf:function(e,t){e.csrf=t}},actions:{getCsrfToken:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.state,""!==r.csrf){t.next=9;break}return t.next=4,Object(k["a"])("GET","/api/csrf");case 4:return a=t.sent,t.next=7,a.text();case 7:o=t.sent,n("updateCsrf",o);case 9:case"end":return t.stop()}}),t)})))()},whoami:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(k["a"])("GET","/api/whoami");case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,"auth"===a.status&&n("updateUserLogin",Object(c["a"])(Object(c["a"])({},a),{},{auth:!0})),"not auth"===a.status&&n("updateUserLogin",Object(c["a"])(Object(c["a"])({},a),{},{auth:!1})),t.abrupt("return",a.status);case 10:case"end":return t.stop()}}),t)})))()},loginUser:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,u,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=e.dispatch,o=t.login,c=t.password,n.next=4,a("getCsrfToken");case 4:return u=r.csrf,n.next=7,Object(k["a"])("POST","/api/login",{login:o,password:c,csrf:u});case 7:return s=n.sent,n.next=10,s.text();case 10:return i=n.sent,a("whoami"),n.abrupt("return",i);case 13:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.dispatch,t.next=3,r("getCsrfToken");case 3:return a=n.csrf,t.next=6,Object(k["a"])("POST","/api/logout",{csrf:a});case 6:return o=t.sent,t.next=9,o.text();case 9:return c=t.sent,r("whoami"),console.log(c),t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})))()},logoutAll:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.dispatch,t.next=3,r("getCsrfToken");case 3:return a=n.csrf,t.next=6,Object(k["a"])("POST","/api/logoutall",{csrf:a});case 6:return o=t.sent,t.next=9,o.text();case 9:return c=t.sent,r("whoami"),console.log(c),t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})))()},registrate:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,u,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=e.dispatch,o=t.login,c=t.password,n.next=4,a("getCsrfToken");case 4:return u=r.csrf,n.next=7,Object(k["a"])("POST","/api/registrate",{login:o,password:c,csrf:u});case 7:return s=n.sent,n.next=10,s.text();case 10:return i=n.sent,n.next=13,a("whoami");case 13:return n.abrupt("return",i);case 14:case"end":return n.stop()}}),n)})))()}}};r["a"].use(u["a"]);var C=new u["a"].Store({state:{},mutations:{},actions:{},modules:{login:j}});r["a"].use(y["a"]);var T=[{path:"/",name:"Gen Docx",component:function(){return Promise.all([n.e("chunk-530d30b8"),n.e("chunk-be68f806")]).then(n.bind(null,"aa2d"))},meta:{auth:!0}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-530d30b8"),n.e("chunk-2d2086b7")]).then(n.bind(null,"a55b"))}}],A=new y["a"]({mode:"history",base:"/static/",routes:T});A.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.onlyAdmin}))&&C.dispatch("whoami").then((function(){C.getters.isAdmin?n():n("/")})),e.matched.some((function(e){return e.meta.auth}))&&C.dispatch("whoami").then((function(){C.getters.auth?n():n("/login")})),n()}));var P=A,S=n("f309"),L=n("e1bf");r["a"].use(S["a"]);var R=new S["a"]({lang:{locales:{ru:L["a"]},current:"ru"},theme:{themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",anchor:"#8c9eff",error:"#a00"}}}});r["a"].config.productionTip=!1,new r["a"]({router:P,store:C,vuetify:R,render:function(e){return e(x)}}).$mount("#app")},b59a:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("d3b7"),""),o="same-origin";function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=r){e.next=6;break}return e.next=3,fetch(a+n,{method:t.toUpperCase(),credentials:"include",mode:o,headers:{"Content-Type":"application/json"}});case 3:c=e.sent,e.next=9;break;case 6:return e.next=8,fetch(a+n,{method:t.toUpperCase(),credentials:"include",mode:o,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 8:c=e.sent;case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}t["a"]=function(e,t,n){return c.apply(this,arguments)}},cf05:function(e,t,n){e.exports=n.p+"img/logo.9af6cccd.png"},cf25:function(e,t,n){"use strict";n("fea6")},fea6:function(e,t,n){}});