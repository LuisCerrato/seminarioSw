(this.webpackJsonpfrontnails=this.webpackJsonpfrontnails||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),r=c.n(a),i=c(22),o=c.n(i),s=(c(58),c(3)),l=(c(59),c(60),c(6)),j=c(4),b=!1,d=Object(a.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,r=e.children,i=Object(a.useReducer)(t,c);return b||(b=!0),Object(n.jsx)(d.Provider,{value:i,children:r})},h=function(){return Object(a.useContext)(d)},O={initialized:!1,minTimeElapsed:!1},p="APP_INIT",g="APP_MIN",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object(s.a)(Object(s.a)({},e),{},{initialized:!0});case g:return Object(s.a)(Object(s.a)({},e),{},{minTimeElapsed:!0});default:return e}},x={logged:!1,jwt:"",user:{},isFetching:!1,error:"",signing:!1,redirect:!1},m=Object(s.a)(Object(s.a)({},x),JSON.parse(localStorage.getItem("store_auth"))),v="LOGIN_FETCHING",y="LOGIN_FETCHING_FAILED",C="LOGIN_SUCCESS",P="LOGOUT",S="JWT_INVALID",N="SIGNIN_FETCHING",I="SIGNIN_FETCHING_FAILED",w="SIGNIN_SUCCESS",F="SIGNIN_END",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!0});case y:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1});case C:var c=Object(s.a)(Object(s.a)(Object(s.a)({},e),t.payload),{},{isFetching:!1,logged:!0});return localStorage.setItem("store_auth",JSON.stringify(c)),Object(s.a)({},c);case P:return Object(s.a)({},e);case S:return Object(s.a)(Object(s.a)({},x),{},{redirect:t.payload.to});case N:case I:case w:case F:return Object(s.a)({},e);default:return e}},L=c(27),T={hasMore:!0,products:[],total:0,currentPage:1,pageLimit:15,fetching:!1,error:"",currentId:null,searchFilter:""},M="PRODUCT_LOADING",A="PRODUCT_LOADED",_="PRODUCT_RESET",E="PRODUCT_ERROR",R="PRODUCT_SET_CURRENT",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case M:return Object(s.a)(Object(s.a)({},e),{},{fetching:!0});case A:var c=[],n=e.currentPage;e.currentPage>=t.payload.currentPage?c=Object(L.a)(e.products):(c=[].concat(Object(L.a)(e.products),Object(L.a)(t.payload.products)),n=t.payload.currentPage);var a=c.length<t.payload.total;return Object(s.a)(Object(s.a)({},e),{},{products:c,total:c.length,hasMore:a,currentPage:n,fetching:!1});case _:if(t.payload)return Object(s.a)(Object(s.a)({},T),{},{searchFilter:t.payload.searchFilter});var r=e.searchFilter;return Object(s.a)(Object(s.a)({},T),{},{searchFilter:r});case E:return Object(s.a)(Object(s.a)({},e),{},{fetching:!1});case R:return console.log(t),Object(s.a)(Object(s.a)({},e),{},{currentId:t.payload._id});default:return e}};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=e.app,n=e.auth,a=e.prods;return{app:f(c,t),auth:k(n,t),prods:D(a,t)}},U=c(5),G=c(9),H=function(e){var t=e.component,c=Object(G.a)(e,["component"]),a=h(),r=Object(U.a)(a,1)[0].auth;return Object(n.jsx)(j.b,Object(s.a)(Object(s.a)({},c),{},{render:function(e){var c=e.location;return r.logged?Object(n.jsx)(t,Object(s.a)({},e)):Object(n.jsx)(j.a,{to:{pathname:"/login",state:{from:c}}})}}))},B=c(20);function J(e){return Object(B.b)(e,{stiffness:330,damping:22})}J(0),J(.8),J(1),J(1);var V=function(e){return{opacity:e.opacity,transform:"translateX(".concat(e.offset,"px)")}};function W(e){return Object(B.b)(e,{stiffness:174,damping:19})}var $={atEnter:{offset:200,opacity:0},atLeave:{offset:W(-100),opacity:W(0)},atActive:{offset:W(0),opacity:W(1)}},X=(c(74),c(75),function(e){var t=e.children;return Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("h1",{children:[" ",t," "]})})}),Z=c(21),q=c(24),K=c(50),Q=(c(76),function(){var e=h(),t=Object(U.a)(e,1)[0].auth,c=Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(l.c,{to:"/",children:[Object(n.jsx)(Z.b,{size:"1.5em"})," "]})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/login",children:Object(n.jsx)(K.a,{size:"1.5em"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/signin",children:Object(n.jsx)(q.b,{size:"1.5em"})})})]});return t.logged&&(c=Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(l.c,{to:"/",children:[Object(n.jsx)(Z.b,{size:"1.5em"})," "]})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/servicios",children:Object(n.jsx)(q.a,{size:"1.5em"})})})]})),Object(n.jsx)("footer",{children:Object(n.jsx)("nav",{children:c})})}),Y=function(e){var t=e.children,c=e.headding,a=e.footer,r=41*(c?1:0)+59*(a?1:0),i={height:r>0?"calc(100vh - ".concat(r,"px)"):"100%",marginTop:r>0?"41px":"0px"},o={height:r>0?"calc(100vh - ".concat(r+32,"px)"):"100%"};return Object(n.jsxs)("section",{className:"page",style:i,children:[c?Object(n.jsx)(X,{children:c}):null,Object(n.jsx)("section",{className:"content",style:o,children:t}),!0&a?Object(n.jsx)(Q,{}):null]})},ee=(c(77),c(78),c(104)),te=c(107),ce=c(105),ne=c(106),ae=[14.062779332466054,-87.22045965271603],re=function(){var e=Object(a.useState)(""),t=Object(U.a)(e,2),c=t[0],r=t[1];return""!==c?Object(n.jsx)(j.a,{to:c}):Object(n.jsx)(Y,{headding:"Principal",footer:!0,children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h1",{children:"Ubicaci\xf3n"}),Object(n.jsxs)(ee.a,{center:ae,zoom:20,scrollWheelZoom:!1,children:[Object(n.jsx)(te.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(n.jsx)(ce.a,{position:ae,children:Object(n.jsx)(ne.a,{children:"Segundo nivel, al par de tiendas MALIBU"})})]}),",",Object(n.jsxs)("table",{class:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("th",{children:"Horarios"})}),Object(n.jsxs)("tbody",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("td",{"data-label":"Lunes :",children:"8:00 AM - 7:00 PM"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{"data-label":"Martes :",children:"8:00 AM - 7:00 PM"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{"data-label":"Miercoles :",children:"8:00 AM - 7:00 PM"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{"data-label":"Jueves :",children:"8:00 AM - 7:00 PM"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{"data-label":"Viernes :",children:"8:00 AM - 7:00 PM"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{"data-label":"Sabado :",children:"9:00 AM - 5:00 PM"})})]})]}),Object(n.jsx)("section",{children:Object(n.jsx)("button",{onClick:function(e){r("/citas/new")},children:"Agendar"})})]})})},ie=c(15),oe=(c(79),function(e){var t=e.id,c=e.type,a=e.caption,r=e.value,i=e.onChange,o=Object(G.a)(e,["id","type","caption","value","onChange"]);return Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:a}),Object(n.jsx)("input",Object(s.a)({type:c,name:t,value:r,onChange:i,autoCapitalize:"off"},o))]})}),se=c(35),le=c.n(se),je=le.a.create();je.defaults.headers.common["cache-control"]="no-cache",je.defaults.headers.post["Content-Type"]="no-cache",je.defaults.headers.put["Content-Type"]="no-cache";var be=le.a.create();be.defaults.headers.common["cache-control"]="no-cache",be.defaults.headers.post["Content-Type"]="no-cache",be.defaults.headers.put["Content-Type"]="no-cache";var de=function(e){be.defaults.headers.common.Authorization="Bearer ".concat(e)},ue=function(e){be.interceptors.response.use((function(e){return e}),(function(t){if(console.log(t),t.response)switch(t.response.status){case 401:e();break;default:console.log(t)}else console.log(t);return Promise.reject(t)}))},he=je,Oe=be,pe=(c(96),function(){var e=Object(a.useState)({email:"",password:""}),t=Object(U.a)(e,2),c=t[0],r=t[1],i=h(),o=Object(U.a)(i,2)[1],b=Object(j.g)(),d=function(e){var t=e.target,n=t.name,a=t.value;r(Object(s.a)(Object(s.a)({},c),{},Object(ie.a)({},n,a)))},u=(Object(j.h)().state||{from:{pathname:"/"}}).from;return Object(n.jsx)(Y,{headding:"Iniciar Sesion",children:Object(n.jsxs)("section",{className:"Loginsection",children:[Object(n.jsx)(oe,{id:"email",caption:"Correo",type:"text",value:c.email,onChange:d}),Object(n.jsx)(oe,{id:"password",caption:"Contrase\xf1a",type:"password",value:c.password,onChange:d}),Object(n.jsx)("button",{onClick:function(e){var t=c.email,n=c.password;o({type:v}),he.post("/api/seguridad/login",{email:t,password:n}).then((function(e){var t=e.data;o({type:C,payload:t}),de(t.jwt),b.replace(u)})).catch((function(e){o({type:y}),alert("Credenciales Incorrectas"),console.log(e)}))},children:"Ingresar"}),Object(n.jsx)("br",{}),Object(n.jsx)(l.b,{to:"/",children:"Regresar"})]})})}),ge=(c(47),function(e){var t=e.children,c=e.onClick,a=Object(G.a)(e,["children","onClick"]),r=c||function(e){e.preventDefault(),e.stopPropagation()};return Object(n.jsx)("button",Object(s.a)(Object(s.a)({},a),{},{onClick:r,children:t}))}),fe=function(e){var t=e.onClick,c=e.children,a=Object(G.a)(e,["onClick","children"]);return Object(n.jsx)(ge,Object(s.a)(Object(s.a)({},a),{},{className:"btnprimary",onClick:t,children:c}))},xe=function(e){var t=e.onClick,c=e.children,a=Object(G.a)(e,["onClick","children"]);return Object(n.jsx)(ge,Object(s.a)(Object(s.a)({},a),{},{className:"btnsecondary",onClick:t,children:c}))},me=function(e){var t=e.onClick,c=Object(G.a)(e,["onClick"]);return Object(n.jsx)(ge,Object(s.a)(Object(s.a)({},c),{},{className:"btnround btnaccent",onClick:t,children:Object(n.jsx)(Z.a,{size:"2em"})}))},ve=(c(97),c(25)),ye=c.n(ve),Ce=c(26),Pe=c.p+"static/media/logo2.e9848dbe.jpeg",Se=function(){var e=h(),t=Object(U.a)(e,2),c=t[0].prods,r=t[1],i=Object(j.g)(),o=c.products.map((function(e){return Object(n.jsxs)("div",{children:[e.nombre," ",Object(n.jsx)("img",{src:Pe})," ",Object(n.jsx)("span",{children:e.precio}),"  "]},e._id)})),s=Object(a.useRef)();return Object(n.jsxs)(Y,{headding:"Servicios",footer:!0,children:[Object(n.jsxs)("section",{className:"ServiciosList",ref:s,children:[Object(n.jsx)("div",{className:"SearchField",children:Object(n.jsx)(oe,{id:"seachString",type:"text",caption:"Buscar:",value:c.searchFilter,onChange:function(e){r({type:_,payload:{searchFilter:e.target.value}})}})}),Object(n.jsx)(ye.a,{pageStart:c.currentPage,hasMore:c.hasMore,getScrollParent:function(){return s.current},loader:Object(n.jsx)("div",{style:{flex:"2"},children:Object(n.jsx)(Ce.a,{})},"loadingli"),loadMore:function(e){c.fetching||(r({type:M}),Oe.get(/^\s*$/.test(c.searchFilter)?"/api/servicios/facet/".concat(c.currentPage,"/").concat(c.pageLimit):"/api/servicios/facet/".concat(c.currentPage,"/").concat(c.pageLimit,"/").concat(encodeURI(c.searchFilter))).then((function(e){var t=e.data;r({type:A,payload:{products:t.rslt,total:t.total,currentPage:c.currentPage+1}})})).catch((function(e){r({type:E}),console.log(e)})))},element:"section",children:o})]}),Object(n.jsx)(me,{style:{position:"fixed",right:"1em",bottom:"6em"},onClick:function(e){i.push("/servicios/new")}})]})},Ne=function(){var e=h(),t=Object(U.a)(e,2)[1],c=Object(a.useState)({nombre:"",precio:"",duracion:""}),r=Object(U.a)(c,2),i=r[0],o=r[1],l=Object(j.g)(),b=function(e){e.preventDefault(),e.stopPropagation();var t=e.target,c=t.name,n=t.value,a=Object(s.a)(Object(s.a)({},i),{},Object(ie.a)({},c,n));o(a)};return Object(n.jsxs)(Y,{headding:"Nuevo Servicio",children:[Object(n.jsx)(oe,{type:"text",id:"nombre",placeholder:"Servicio",onChange:b,caption:"Nombre",value:i.nombre}),Object(n.jsx)(oe,{type:"text",id:"duracion",placeholder:"Tiempo",onChange:b,caption:"Duracion",value:i.duracion}),Object(n.jsx)(oe,{type:"text",id:"precio",placeholder:"Lps.",onChange:b,caption:"Precio Servicio",value:i.precio}),Object(n.jsxs)("section",{children:[Object(n.jsx)(fe,{onClick:function(e){e.preventDefault(),e.stopPropagation(),Oe.post("/api/servicios/nuevo",i).then((function(e){console.log(e),t({type:_}),l.push("/servicios")})).catch((function(e){console.log(e),alert("Algo salio m\xe1l al ingresar")}))},children:"Agregar"}),Object(n.jsx)(xe,{onClick:function(){l.push("/servicios")},children:"Cancelar"})]})]})},Ie=function(){var e=h(),t=Object(U.a)(e,2)[1],c=Object(a.useState)({nombre:"",telefono:"",email:"",fecha:"",hora:""}),r=Object(U.a)(c,2),i=r[0],o=r[1],l=Object(j.g)(),b=function(e){e.preventDefault(),e.stopPropagation();var t=e.target,c=t.name,n=t.value,a=Object(s.a)(Object(s.a)({},i),{},Object(ie.a)({},c,n));o(a)};return Object(n.jsxs)(Y,{headding:"Agendar Cita",children:[Object(n.jsx)(oe,{type:"text",id:"nombre",placeholder:"Nombre Completo",onChange:b,caption:"nombre",value:i.nombre}),Object(n.jsx)(oe,{type:"text",id:"telefono",placeholder:"00-00-00-00",onChange:b,caption:"telefono",value:i.telefono}),Object(n.jsx)(oe,{type:"email",id:"email",placeholder:"Correo@gmail.com",onChange:b,caption:"email",value:i.email}),Object(n.jsx)(oe,{type:"date",id:"fecha",placeholder:"dd/mm/aaaa",onChange:b,caption:"fecha",value:i.fecha}),Object(n.jsx)(oe,{type:"time",id:"hora",placeholder:"",onChange:b,caption:"hora",value:i.hora}),Object(n.jsxs)("section",{children:[Object(n.jsx)(fe,{onClick:function(e){e.preventDefault(),e.stopPropagation(),Oe.post("/api/citas/nuevacita",i).then((function(e){console.log(e),t({type:_}),l.push("/citas")})).catch((function(e){console.log(e),alert("Algo salio m\xe1l al ingresar")}))},children:"Agregar"}),Object(n.jsx)(xe,{onClick:function(){l.push("/servicios")},children:"Cancelar"})]})]})},we=(c(99),function(){var e=h(),t=Object(U.a)(e,2),c=t[0].prods,r=t[1],i=(Object(j.g)(),c.products.map((function(e){return Object(n.jsxs)("div",{children:[e.nombre,Object(n.jsx)("br",{}),e.telefono,Object(n.jsx)("br",{}),e.email,Object(n.jsx)("br",{}),e.fecha,Object(n.jsx)("br",{}),e.hora,"  "]},e._id)}))),o=Object(a.useRef)();return Object(n.jsx)(Y,{headding:"Citas",footer:!0,children:Object(n.jsxs)("section",{className:"CitasList",ref:o,children:[Object(n.jsx)("div",{className:"SearchField",children:Object(n.jsx)(oe,{id:"seachString",type:"text",caption:"Buscar:",value:c.searchFilter,onChange:function(e){r({type:_,payload:{searchFilter:e.target.value}})}})}),Object(n.jsx)(ye.a,{pageStart:c.currentPage,hasMore:c.hasMore,getScrollParent:function(){return o.current},loader:Object(n.jsx)("div",{style:{flex:"2"},children:Object(n.jsx)(Ce.a,{})},"loadingli"),loadMore:function(e){c.fetching||(r({type:M}),Oe.get(/^\s*$/.test(c.searchFilter)?"/api/citas/facetc/".concat(c.currentPage,"/").concat(c.pageLimit):"/api/citas/facetc/".concat(c.currentPage,"/").concat(c.pageLimit,"/").concat(encodeURI(c.searchFilter))).then((function(e){var t=e.data;r({type:A,payload:{products:t.rslt,total:t.total,currentPage:c.currentPage+1}})})).catch((function(e){r({type:E}),console.log(e)})))},element:"section",children:i})]})})}),Fe=c(36),ke=c.n(Fe),Le=c(51),Te=function(e,t){var c=t.routeLocation;return function(){e({type:S,payload:{to:c.pathname}})}},Me=function(){var e=Object(Le.a)(ke.a.mark((function e(t,c,n){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue(Te(c,n)),""!==t.jwt&&!1!==t.logged){e.next=5;break}c({type:p}),e.next=15;break;case 5:return e.prev=5,de(t.jwt),e.next=9,Oe.get("/api/heartbeat");case 9:c({type:p}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,c,n){return e.apply(this,arguments)}}(),Ae=function(e){var t=e.children,c=h(),r=Object(U.a)(c,2),i=r[0],o=i.app,s=i.auth,l=r[1],b=Object(j.g)(),d=Object(j.h)();return Object(a.useEffect)((function(){o.initialized||(setTimeout((function(){l({type:g})}),1e3),Me(s,l,{routeHistory:b,routeLocation:d}))}),[]),o.initialized&&o.minTimeElapsed?Object(n.jsx)("section",{children:t}):Object(n.jsx)(Y,{children:Object(n.jsx)("h1",{children:"Loading ..."})})},_e=function(){return Object(n.jsx)(Y,{children:Object(n.jsx)("h1",{children:"Error 404, P\xe1gina no encontrada."})})},Ee=(c(101),function(){var e=Object(a.useState)({email:"",password:""}),t=Object(U.a)(e,2),c=t[0],r=t[1],i=Object(j.g)(),o=function(e){var t=e.target,n=t.name,a=t.value;r(Object(s.a)(Object(s.a)({},c),{},Object(ie.a)({},n,a)))};return Object(n.jsx)(Y,{headding:"Registrar",children:Object(n.jsxs)("section",{className:"Signsection",children:[Object(n.jsx)(oe,{id:"email",caption:"Correo",type:"text",value:c.email,onChange:o}),Object(n.jsx)(oe,{id:"password",caption:"Contrase\xf1a",type:"password",value:c.password,onChange:o}),Object(n.jsx)("button",{onClick:function(e){var t=c.email,n=c.password;he.post("/api/seguridad/signin",{email:t,password:n}).then((function(){i.replace("/")})).catch((function(e){alert("Ups! Hubo un problema"),console.log(e)}))},children:"Registrar"}),Object(n.jsx)("br",{}),Object(n.jsx)(l.b,{to:"/",children:"Regresar"})]})})});var Re=function(){var e=z();return Object(n.jsx)(u,{initialState:e,reducer:z,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{children:Object(n.jsx)(Ae,{children:Object(n.jsxs)(B.a,Object(s.a)(Object(s.a)({},$),{},{mapStyles:V,className:"switch-wrapper",children:[Object(n.jsx)(j.b,{path:"/",exact:!0,component:re}),Object(n.jsx)(j.b,{path:"/Login",exact:!0,component:pe}),Object(n.jsx)(j.b,{path:"/signin",exact:!0,component:Ee}),Object(n.jsx)(H,{path:"/servicios",exact:!0,component:Se}),Object(n.jsx)(H,{path:"/servicios/new",exact:!0,component:Ne}),Object(n.jsx)(H,{path:"/citas/new",exact:!0,component:Ie}),Object(n.jsx)(H,{path:"/citas",exact:!0,component:we}),Object(n.jsx)(j.b,{path:"*",component:_e})]}))})})})})},De=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Re,{})}),document.getElementById("root")),De()},47:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.a3f3d8a9.chunk.js.map