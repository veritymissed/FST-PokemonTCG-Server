(this.webpackJsonpponkemonctg_frontend=this.webpackJsonpponkemonctg_frontend||[]).push([[0],{274:function(e){e.exports=JSON.parse('{"data":["Amazing Rare","Classic Collection","Common","LEGEND","Promo","Rare","Rare ACE","Rare BREAK","Rare Holo","Rare Holo EX","Rare Holo GX","Rare Holo LV.X","Rare Holo Star","Rare Holo V","Rare Holo VMAX","Rare Prime","Rare Prism Star","Rare Rainbow","Rare Secret","Rare Shining","Rare Shiny","Rare Shiny GX","Rare Ultra","Uncommon","V","VM"]}')},275:function(e){e.exports=JSON.parse('{"data":["Colorless","Darkness","Dragon","Fairy","Fighting","Fire","Grass","Lightning","Metal","Psychic","Water"]}')},293:function(e,t,a){},294:function(e,t,a){},316:function(e,t){},318:function(e,t){},327:function(e,t){},329:function(e,t){},354:function(e,t){},355:function(e,t){},360:function(e,t){},362:function(e,t){},369:function(e,t){},388:function(e,t){},427:function(e,t){},522:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(67),o=a.n(c),i=(a(293),a(5)),s=a(91),u=a(184),l=(a(294),a(71)),d=a(16),p=a(581),b=a(592),j=a(593),f=a(132),x=a.n(f),h=a.p+"static/media/gengar.a8db7754.png",O=a(2);function g(e){var t=Object(r.useContext)(ie),a=t.userState;t.dispatch;console.log("userState in NavBar",a);var n=Object(d.f)(),c=Object(d.e)().pathname,o="17px",i=Object(p.a)({navbar_box:{display:"flex",justifyContent:"space-between",padding:"8px 16px 8px 16px",backgroundColor:"rgb(36, 37, 38)",color:"#f5f6f7",fontSize:"16px"},center_title:{padding:"8px 16px 8px 16px",color:ee,fontSize:o,fontWeight:te},active_button:{color:$,fontSize:o,fontWeight:te},non_active_button:{color:ee,fontSize:"14px"}})();return Object(O.jsxs)(b.a,{className:i.navbar_box,children:[Object(O.jsx)(b.a,{children:Object(O.jsxs)(j.a,{onClick:function(e){n("/")},children:[Object(O.jsx)("img",{height:"30",src:h}),Object(O.jsx)(b.a,{className:"/"===c?i.active_button:i.non_active_button,children:"FST Pok\xe9mon Tcg"})]})}),!a.isLogin&&Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a,{onClick:function(e){n("/register")},children:Object(O.jsx)(b.a,{className:"/register"===c?i.active_button:i.non_active_button,children:"Register"})}),Object(O.jsx)(j.a,{onClick:function(e){n("/login")},children:Object(O.jsx)(b.a,{className:"/login"===c?i.active_button:i.non_active_button,children:"Login"})})]}),a.isLogin&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{className:i.center_title,children:a.currentUserEmail}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a,{onClick:function(e){n("/favorite_list")},children:Object(O.jsx)(b.a,{display:"flex",className:"/favorite_list"===c?i.active_button:i.non_active_button,children:Object(O.jsx)(b.a,{style:{lineHeight:"10px",margin:"0px 3px"},children:Object(O.jsx)(x.a,{})})})}),Object(O.jsx)(j.a,{onClick:function(e){n("/logout")},children:Object(O.jsx)(b.a,{className:i.non_active_button,children:"Logout"})})]})]})]})}var m=a(26),v=a.n(m),y=a(41),_=a(587),w=a(74),S=a(66),k=a.n(S);function C(e){var t=Object(r.useContext)(ie).dispatch,a=Object(d.f)(),n=Object(r.useState)(!1),c=Object(i.a)(n,2),o=c[0],s=c[1],u=Object(r.useState)(""),l=Object(i.a)(u,2),f=l[0],x=l[1],h=Object(r.useState)(""),g=Object(i.a)(h,2),m=g[0],S=g[1],C=Object(r.useState)(""),N=Object(i.a)(C,2),R=N[0],E=N[1],T=Object(r.useState)(!1),L=Object(i.a)(T,2),P=L[0],W=L[1],F=Object(r.useState)(""),B=Object(i.a)(F,2),U=B[0],H=B[1],q=Object(r.useState)(!1),J=Object(i.a)(q,2),I=J[0],z=J[1],A=Object(r.useState)(""),V=Object(i.a)(A,2),D=V[0],G=V[1],X=Object(r.useState)(!1),M=Object(i.a)(X,2),K=M[0],Q=M[1],Y=Object(r.useState)(""),Z=Object(i.a)(Y,2),$=Z[0],te=Z[1];Object(r.useEffect)((function(){le().currentUser&&a("/")}),[a]);var ne=function(){var e=Object(y.a)(v.a.mark((function e(){var r,n,c,i,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=w.single(f,{presence:{allowEmpty:!1},email:!0}))){e.next=5;break}return W(!0),H(r[0]),e.abrupt("return");case 5:if(!(n=w.single(m,{presence:{allowEmpty:!1},length:{minimum:ae,maximum:re}}))){e.next=10;break}return z(!0),G(n[0]),e.abrupt("return");case 10:if(c=w({formPassword:m,formRepeatPassword:R},{formRepeatPassword:{equality:"formPassword"}}),console.log("validatePasswordRepeatError",c),!c){e.next=16;break}return Q(!0),te(c.formRepeatPassword[0]),e.abrupt("return");case 16:if(i=new Promise((function(e,t){var a={method:"POST",url:"http://localhost:3000/users/",headers:{"Content-Type":"application/x-www-form-urlencoded"},form:{email:f,password:m}};k()(a,(function(t,a){try{if(t)throw t;e({statusCode:a.statusCode,message:JSON.parse(a.body)})}catch(r){throw t}}))})),e.prev=17,!o){e.next=20;break}return e.abrupt("return");case 20:return s(!0),e.next=23,i;case 23:if(u=e.sent,console.log(u),201===u.statusCode){e.next=29;break}throw new Error(u.message);case 29:se({currentUser:{email:f,favorite_cards:[]}}),t({type:"login",payload:{currentUserEmail:f,favorite_cards:[]}}),a("/");case 32:e.next=39;break;case 34:e.prev=34,e.t0=e.catch(17),console.log(e.t0),W(!0),H(e.t0.message);case 39:return e.prev=39,s(!1),e.finish(39);case 42:case"end":return e.stop()}}),e,null,[[17,34,39,42]])})));return function(){return e.apply(this,arguments)}}(),ce=Object(p.a)((function(e){return{register_block_container:{borderRadius:"5px",width:"400px",margin:"40px auto 10px auto",padding:"15px 30px 15px 30px",backgroundColor:ee},register_block_control:{marginTop:"10px",marginBottom:"10px"}}}))();return Object(O.jsxs)(b.a,{className:ce.register_block_container,children:[Object(O.jsx)(b.a,{className:ce.register_block_control,children:Object(O.jsx)(_.a,{fullWidth:!0,required:!0,error:P,helperText:U,id:"outlined-required",label:"Email",onChange:function(e){W(!1),H(""),x(e.target.value)}})}),Object(O.jsx)(b.a,{className:ce.register_block_control,children:Object(O.jsx)(_.a,{fullWidth:!0,id:"outlined-password-input",error:I,helperText:D,label:"Password(".concat(ae,"-").concat(re," char)"),type:"password",autoComplete:"current-password",onChange:function(e){z(!1),G(""),S(e.target.value)}})}),Object(O.jsx)(b.a,{className:ce.register_block_control,children:Object(O.jsx)(_.a,{fullWidth:!0,id:"outlined-password-input",error:K,helperText:$,label:"Repeat password",type:"password",autoComplete:"current-password",onChange:function(e){Q(!1),te(""),E(e.target.value)}})}),Object(O.jsxs)(j.a,{onClick:function(e){ne()},children:["Register",o&&Object(O.jsx)(je,{width:15,height:15,borderWidth:6})]})]})}function N(){var e=Object(r.useContext)(ie),t=e.userState,a=e.dispatch;console.log("userState in LoginForm",t);var n=Object(d.f)(),c=Object(r.useState)(!1),o=Object(i.a)(c,2),s=o[0],u=o[1],l=Object(r.useState)(""),f=Object(i.a)(l,2),x=f[0],h=f[1],g=Object(r.useState)(""),m=Object(i.a)(g,2),S=m[0],C=m[1],N=Object(r.useState)(!1),R=Object(i.a)(N,2),E=R[0],T=R[1],L=Object(r.useState)(""),P=Object(i.a)(L,2),W=P[0],F=P[1],B=Object(r.useState)(!1),U=Object(i.a)(B,2),H=U[0],q=U[1],J=Object(r.useState)(""),I=Object(i.a)(J,2),z=I[0],A=I[1];Object(r.useEffect)((function(){console.log("userState.isLogin",t.isLogin),t.isLogin&&n("/")}),[n]);var V=function(){var e=Object(y.a)(v.a.mark((function e(){var t,r,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=w.single(x,{presence:{allowEmpty:!1},email:!0}))){e.next=5;break}return T(!0),F(t[0]),e.abrupt("return");case 5:if(!(r=w.single(S,{presence:{allowEmpty:!1},length:{minimum:ae,maximum:re}}))){e.next=10;break}return q(!0),A(r[0]),e.abrupt("return");case 10:if(c=new Promise((function(e,t){var a={method:"POST",url:"http://localhost:3000/auth/login",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:x,password:S})};k()(a,(function(t,a){if(t)throw t;e(JSON.parse(a.body))}))})),e.prev=11,!s){e.next=14;break}return e.abrupt("return");case 14:return u(!0),e.next=17,c;case 17:if(o=e.sent,console.log("login res",o),401!==o.statusCode){e.next=24;break}throw q(!0),T(!0),F("Email or password not correct."),new Error("Login user authentication error!");case 24:se({currentUser:o.user}),a({type:"login",payload:{currentUserEmail:o.user.email,favorite_cards:o.user.favorite_cards}}),n("/"),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(11),console.log(e.t0);case 32:return e.prev=32,u(!1),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[11,29,32,35]])})));return function(){return e.apply(this,arguments)}}(),D=Object(p.a)((function(e){return{login_block_container:{borderRadius:"5px",width:"400px",margin:"40px auto 10px auto",padding:"15px 30px 15px 30px",backgroundColor:ee},login_block_control:{marginTop:"10px",marginBottom:"10px"}}}))();return Object(O.jsxs)(b.a,{className:D.login_block_container,children:[Object(O.jsx)(b.a,{className:D.login_block_control,children:Object(O.jsx)(_.a,{fullWidth:!0,required:!0,error:E,helperText:W,id:"outlined-required",label:"Email",onChange:function(e){T(!1),F(""),h(e.target.value)}})}),Object(O.jsx)(b.a,{className:D.login_block_control,children:Object(O.jsx)(_.a,{fullWidth:!0,id:"outlined-password-input",error:H,helperText:z,label:"Password(".concat(ae,"-").concat(re," char)"),type:"password",autoComplete:"current-password",onChange:function(e){q(!1),A(""),C(e.target.value)}})}),Object(O.jsxs)(j.a,{onClick:function(e){V()},children:["Login",s&&Object(O.jsx)(je,{width:15,height:15,borderWidth:6})]})]})}var R=a(601),E=a(598),T=a(599),L=a(600),P=a(580),W=a(272),F=a.n(W),B=a(273),U=a.n(B);function H(e){var t=e.card,a=e.addTo,n=e.removeFrom,c=Object(r.useContext)(ie),o=c.userState,s=(c.dispatch,Object(r.useState)("/favorite_list"===Object(d.e)().pathname)),u=Object(i.a)(s,2),l=u[0],f=(u[1],Object(r.useState)(!1)),h=Object(i.a)(f,2),g=h[0],m=h[1];Object(r.useEffect)((function(){var e=o.favorite_cards.findIndex((function(e){return e.id===t.id}));m(e>=0)}),[o,t.id]);var v=Object(p.a)((function(e){return{card_style:{marginTop:"10px",marginBottom:"10px",marginLeft:"7.5px",marginRight:"7.5px",paddingLeft:"5px",paddingRight:"5px"}}}))();return Object(O.jsxs)(E.a,{sx:{width:200},className:v.card_style,children:[Object(O.jsx)(T.a,{component:"img",image:t.images.large}),Object(O.jsxs)(L.a,{children:[Object(O.jsx)(R.a,{variant:"h5",gutterBottom:!0,component:"div",children:t.name||"Name not exist"}),Object(O.jsxs)(R.a,{variant:"subtitle2",gutterBottom:!0,component:"div",children:["Supertype: ",t.supertype||"No data"]}),t.types&&t.types.length>0&&Object(O.jsxs)(R.a,{variant:"subtitle2",gutterBottom:!0,component:"div",children:["Type: ",t.types||"No data"]}),Object(O.jsxs)(R.a,{variant:"subtitle2",gutterBottom:!0,component:"div",children:["HP: ",t.hp||"No data"]}),Object(O.jsxs)(R.a,{variant:"subtitle2",gutterBottom:!0,component:"div",children:["Rarity: ",t.rarity||"No data"]}),o.isLogin&&!l&&Object(O.jsxs)(b.a,{display:"flex",justifyContent:"flex-end",children:[g&&Object(O.jsx)(P.a,{color:"primary",onClick:function(e){n(t.id)},children:Object(O.jsx)(x.a,{})}),!g&&Object(O.jsx)(P.a,{color:"primary",onClick:function(e){a(t)},children:Object(O.jsx)(F.a,{})})]}),o.isLogin&&l&&Object(O.jsx)(b.a,{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",children:Object(O.jsx)(j.a,{onClick:function(e){n(t.id)},color:"info",children:Object(O.jsx)(U.a,{})})})]})]})}function q(e){var t=e.cards,a=e.addTo,r=e.removeFrom;return Object(O.jsx)(b.a,{sx:{display:"fex",justifyContent:"flex-start"},flexWrap:"wrap",maxWidth:"900px",mx:"auto",children:t.map((function(e){return Object(O.jsx)(H,{card:e,addTo:a,removeFrom:r})}))})}var J=a(113);function I(e){var t=Object(r.useContext)(ie),a=t.userState,n=t.dispatch;console.log("userState in FavoriteCardList",a);var c=Object(r.useState)(a.favorite_cards),o=Object(i.a)(c,2),s=o[0],u=o[1],l=Object(d.f)();Object(r.useEffect)((function(){a.isLogin||l("/login"),u(a.favorite_cards)}),[a]);var p=Object(r.useState)(!1),b=Object(i.a)(p,2),j=b[0],f=b[1],x=function(){var e=Object(y.a)(v.a.mark((function e(t){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("card id = ".concat(t)),!j){e.next=3;break}return e.abrupt("return");case 3:if(a=de(),!J.isEmpty(a)){e.next=6;break}return e.abrupt("return");case 6:if(!((r=a.favorite_cards.findIndex((function(e){return e.id===t})))<0)){e.next=9;break}return e.abrupt("return");case 9:return a.favorite_cards.splice(r,1),se({currentUser:a}),e.prev=11,f(!0),e.next=15,pe(a,{favorite_cards:a.favorite_cards||[]});case 15:n({type:"update_favorite_cards",payload:{favorite_cards:a.favorite_cards}}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.log(e.t0);case 21:return e.prev=21,f(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[11,18,21,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(q,{cards:s,removeFrom:x})}var z=a(17),A=a(596),V=a(586),D=a(583),G=a(582),X=a(584);function M(e){var t=Object(r.useContext)(ie),a=(t.userState,t.dispatch),n=Object(r.useState)(!1),c=Object(i.a)(n,2),o=c[0],s=c[1],u=Object(r.useState)(!1),l=Object(i.a)(u,2),d=l[0],f=l[1],x=Object(r.useState)(""),h=Object(i.a)(x,2),g=h[0],m=h[1],w=Object(r.useState)(""),S=Object(i.a)(w,2),C=S[0],N=S[1],R=Object(r.useState)([0,500]),E=Object(i.a)(R,2),T=E[0],L=E[1],P=Object(r.useState)(""),W=Object(i.a)(P,2),F=W[0],B=W[1],U=Object(r.useState)({}),H=Object(i.a)(U,2),I=H[0],M=H[1],K=Object(r.useState)(null),Q=Object(i.a)(K,2),$=Q[0],te=Q[1],ae=Object(r.useState)([]),re=Object(i.a)(ae,2),ce=re[0],oe=re[1],ue=Object(r.useState)(!1),le=Object(i.a)(ue,2),be=le[0],fe=le[1],xe=Object(r.useState)(!1),he=Object(i.a)(xe,2),Oe=he[0],ge=he[1],me=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=5;break}return e.abrupt("return");case 5:s(!0);case 6:return ge(!0),e.next=9,ye(I,$.page+1);case 9:t=e.sent,oe([].concat(Object(z.a)(ce),Object(z.a)(t.data))),te(t),t.data.length&&t.count===t.pageSize?(fe(!0),M(I)):fe(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:return e.prev=18,s(!1),ge(!1),e.finish(18);case 22:case"end":return e.stop()}}),e,null,[[0,15,18,22]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=5;break}return e.abrupt("return");case 5:s(!0);case 6:return oe([]),fe(!1),t={name:g,type:C,hp:T,rarity:F},e.next=11,ye(t);case 11:a=e.sent,oe(a.data),te(a),a.data.length&&a.count===a.pageSize?(fe(!0),M(t)):fe(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),oe([]),console.log(e.t0);case 21:return e.prev=21,s(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,17,21,24]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(y.a)(v.a.mark((function e(){var t,a,r,n=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{name:"",type:"",formHp:[0,500],rarity:""},a=n.length>1&&void 0!==n[1]?n[1]:1,console.log("form.name",t.name),console.log("form.type",t.type),console.log("form.hp",t.hp),console.log("form.rarity",t.rarity),console.log("page",a),r="",t.name.length&&(r+='name:"*'.concat(t.name,'*" ')),t.type.length&&(r+="types:".concat(t.type," ")),t.rarity.length&&(r+='rarity:"'.concat(t.rarity,'" ')),r+="hp:[".concat(t.hp[0]," TO ").concat(t.hp[1],"] "),console.log("queryString",r),e.abrupt("return",new Promise((function(e){try{k()({method:"GET",uri:"https://api.pokemontcg.io/v2/cards/?q=".concat(r,"&pageSize=").concat(ne,"&page=").concat(a),q:r},(function(t,a,r){if(t)throw t;e(JSON.parse(r))}))}catch(t){throw t}})));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(y.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return");case 2:if(r=de(),!J.isEmpty(r)){e.next=5;break}return e.abrupt("return");case 5:if(!(r.favorite_cards.findIndex((function(e){return e.id===t.id}))>=0)){e.next=8;break}return e.abrupt("return");case 8:return r.favorite_cards.push(t),se({currentUser:r}),e.prev=10,e.next=13,pe(r,{favorite_cards:r.favorite_cards||[]});case 13:a({type:"update_favorite_cards",payload:{favorite_cards:r.favorite_cards}}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.log(e.t0);case 19:return e.prev=19,f(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[10,16,19,22]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(y.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("card id = ".concat(t)),!d){e.next=3;break}return e.abrupt("return");case 3:if(r=de(),!J.isEmpty(r)){e.next=6;break}return e.abrupt("return");case 6:if(!((n=r.favorite_cards.findIndex((function(e){return e.id===t})))<0)){e.next=9;break}return e.abrupt("return");case 9:return r.favorite_cards.splice(n,1),se({currentUser:r}),e.prev=11,f(!0),e.next=15,pe(r,{favorite_cards:r.favorite_cards||[]});case 15:a({type:"update_favorite_cards",payload:{favorite_cards:r.favorite_cards}}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.log(e.t0);case 21:return e.prev=21,f(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[11,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),Se=Object(p.a)((function(e){return{query_block_container:{borderRadius:"5px",width:"80%",margin:"40px auto 10px auto",padding:"15px 30px 15px 30px",backgroundColor:ee,display:"flex"},slider_container:{color:"#626263",width:"400px",padding:"5px 5px 5px 5px",marginLeft:"20px",marginRight:"20px"},queryButtonText:{fontWeight:"500",fontSize:"16px",paddingTop:"10px",paddingBottom:"10px"}}}))(),ke={minWidth:120,marginLeft:"5px",marginRight:"5px"};return Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a,{className:Se.query_block_container,children:[Object(O.jsx)(b.a,{sx:ke,children:Object(O.jsx)(_.a,{id:"outlined-basic",label:"Name",variant:"outlined",onChange:function(e){m(e.target.value)}})}),Object(O.jsx)(b.a,{sx:ke,children:Object(O.jsxs)(A.a,{fullWidth:!0,children:[Object(O.jsx)(V.a,{id:"demo-simple-select-label",children:"Type"}),Object(O.jsxs)(G.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:C,label:"Type",onChange:function(e){N(e.target.value)},children:[Object(O.jsx)(D.a,{value:"",children:"None"}),Z.map((function(e){return Object(O.jsx)(D.a,{value:e,children:e})}))]})]})}),Object(O.jsx)(b.a,{sx:ke,children:Object(O.jsxs)(A.a,{fullWidth:!0,children:[Object(O.jsx)(V.a,{id:"demo-simple-select-label",children:"Rarity"}),Object(O.jsxs)(G.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:F,label:"Rarity",onChange:function(e){B(e.target.value)},children:[Object(O.jsx)(D.a,{value:"",children:"None"}),Y.map((function(e){return Object(O.jsx)(D.a,{value:e,children:e})}))]})]})}),Object(O.jsxs)(b.a,{className:Se.slider_container,children:[Object(O.jsx)(b.a,{children:"HP range"}),Object(O.jsx)(X.a,{min:0,max:500,valueLabelDisplay:"auto",getAriaLabel:function(){return"HP range"},value:T,onChange:function(e,t){L(t)},getAriaValueText:function(e){return"".concat(T)}})]}),Object(O.jsx)(b.a,{children:Object(O.jsx)(j.a,{onClick:function(e){ve()},children:Object(O.jsx)(b.a,{className:Se.queryButtonText,children:"Query"})})})]}),ce.length>0&&Object(O.jsx)(q,{cards:ce,addTo:_e,removeFrom:we}),Object(O.jsxs)(b.a,{display:"flex",justifyContent:"center",children:[o&&Object(O.jsx)(je,{width:60,height:60,borderWidth:15}),be&&!Oe&&Object(O.jsx)(j.a,{onClick:function(e){me()},children:"Load more"})]})]})}var K=a(274),Q=a(275),Y=K.data,Z=Q.data,$="#5052c9",ee="#f5f6f7",te="700",ae=4,re=20,ne=8,ce={isLogin:!1,currentUserEmail:null,favorite_cards:[]};function oe(e,t){switch(console.log("state",e),console.log("action",t),t.type){case"login":var a=t.payload,r=(a.isLogin,Object(u.a)(a,["isLogin"]));return console.log("updatePayload",r),Object(s.a)({isLogin:!0},r);case"update_favorite_cards":e.favorite_cards;var n=Object(u.a)(e,["favorite_cards"]);return console.log("update_favorite_cards",Object(s.a)(Object(s.a)({},n),{},{favorite_cards:t.payload.favorite_cards})),Object(s.a)(Object(s.a)({},n),{},{favorite_cards:t.payload.favorite_cards});case"logout":return ce;default:throw new Error}}var ie=n.a.createContext(null);function se(e){ue();var t=JSON.stringify(e);localStorage.setItem("session",t)}function ue(){localStorage.removeItem("session")}function le(){var e=localStorage.getItem("session");return"undefined"!==e&&e?JSON.parse(e):{}}function de(){return le().currentUser}var pe=function(e,t){return new Promise((function(a){var r={method:"PATCH",url:"http://localhost:3000/users/".concat(e.id),headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};k()(r,(function(e,t){if(e)throw e;var r=JSON.parse(t.body);console.log(r),a(r)}))}))};function be(){var e=Object(r.useContext)(ie),t=(e.userState,e.dispatch),a=Object(d.f)();return Object(r.useEffect)((function(){ue(),t({type:"logout"}),a("/")}),[a,t]),Object(O.jsx)(O.Fragment,{})}function je(e){var t=e.width,a=e.height,r=e.borderWidth,n=Object(p.a)({loader:{border:"".concat(r||15,"px solid #f3f3f3"),borderTop:"".concat(r||15,"px solid #555555"),borderRadius:"50%",width:"".concat(t||60,"px"),height:"".concat(a||60,"px"),animation:"App-logo-spin 2s linear infinite"}})();return Object(O.jsx)("div",{className:n.loader})}var fe=function(e){var t,a=de();t=a?{isLogin:!0,currentUserEmail:a.email,favorite_cards:a.favorite_cards}:ce;var n=Object(r.useReducer)(oe,ce,(function(){return t})),c=Object(i.a)(n,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){var e=de();e&&s({type:"login",payload:{currentUserEmail:e.email,favorite_cards:e.favorite_cards}})}),[]),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(ie.Provider,{value:{userState:o,dispatch:s},children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/",element:Object(O.jsx)(M,{})}),Object(O.jsx)(d.a,{path:"/favorite_list",element:Object(O.jsx)(I,{})}),Object(O.jsx)(d.a,{path:"/login",element:Object(O.jsx)(N,{})}),Object(O.jsx)(d.a,{path:"/register",element:Object(O.jsx)(C,{})}),Object(O.jsx)(d.a,{path:"/logout",element:Object(O.jsx)(be,{})})]})]})})})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,602)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(fe,{})}),document.getElementById("root")),xe()}},[[522,1,2]]]);
//# sourceMappingURL=main.1022c772.chunk.js.map