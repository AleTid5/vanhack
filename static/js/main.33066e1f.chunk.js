(this.webpackJsonpvanhack=this.webpackJsonpvanhack||[]).push([[0],{152:function(e){e.exports=JSON.parse('{"baseURL":"https://cors-anywhere.herokuapp.com/https://api-vanhack-prod.azurewebsites.net"}')},153:function(e){e.exports=JSON.parse('{"baseURL":"https://api-vanhack-prod.azurewebsites.net"}')},184:function(e,t,a){"use strict";a.r(t);var n,r=a(2),c=a(0),o=a.n(c),s=a(12),i=a.n(s),l=a(15),j=a(86),u=a.n(j),b=a(17),d=a(76),O=a(112),x=a(113),h=a.n(x),p=a(87),m=Object(c.createContext)({configuration:{}}),f=m.Provider,g=function(e){var t=e.children;return Object(r.jsx)(f,{value:{configuration:Object(b.a)(Object(b.a)({},p),a(152))},children:t})},v=Object(c.createContext)({jobs:[],setJobs:function(){}}),y=v.Provider,w=function(e){var t=e.children,a=Object(c.useState)([]),n=Object(l.a)(a,2),o=n[0],s=n[1];return Object(r.jsx)(y,{value:{jobs:o,setJobs:s},children:t})},C=function(e){return e.sort((function(e,t){return e.city<t.city?-1:1})),e.sort((function(e,t){return e.salary>t.salary?-1:1})),e.sort((function(e,t){return e.country<t.country?-1:1}))},k=a(210),S=a(211),N=a(212),R=a(208),B=Object(R.a)({spaceTop:{marginTop:"50px"},center:{textAlign:"center"}}),T=function(e){var t=e.children,a=e.fetchingData,n=B();return Object(r.jsx)(k.a,{className:n.center,children:a?Object(r.jsx)(S.a,{size:150,style:{marginTop:"25%"}}):Object(r.jsx)(N.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"center",className:n.spaceTop,children:t})})},E=function(e){var t=e.children,a=e.onClick;return Object(r.jsx)(N.a,{item:!0,xs:12,sm:3,onClick:a,children:t})},z=a(213),L=a(214),J=a(111),U=a(77),A=a(215),F=a(216),H=a(217),P=a(235),D=a(72),I=a(119),M={avatarPulse:{boxShadow:"0 0 0 rgba(28, 189, 107, 0.4)",animation:"$pulse 2s infinite","&:hover":{animation:"none"}},"@keyframes pulse":{"0%":{"-moz-box-shadow":"0 0 0 0 rgba(28, 189, 107, 0.4)","-webkit-box-shadow":"0 0 0 0 rgba(28, 189, 107, 0.4)","box-shadow":"0 0 0 0 rgba(28, 189, 107, 0.4)"},"70%":{"-moz-box-shadow":"0 0 0 10px rgba(28, 189, 107, 0)","-webkit-box-shadow":"0 0 0 10px rgba(28, 189, 107, 0)","box-shadow":"0 0 0 10px rgba(28, 189, 107, 0)"},"100%":{"-moz-box-shadow":"0 0 0 0 rgba(28, 189, 107, 0)","-webkit-box-shadow":"0 0 0 0 rgba(28, 189, 107, 0)","box-shadow":"0 0 0 0 rgba(28, 189, 107, 0)"}}},W=Object(R.a)(Object(b.a)(Object(b.a)({},M),{},{spaceTop:{marginTop:"25px"},spaceBottom:{marginBottom:"16px"},spacedBetween:{margin:"2px"}})),G=function(e){var t=e.country,a=e.city,n=e.currency,o=e.salary,s=e.link,i=e.newJob,l=e.positionName,j=e.mustHaveSkills,u=e.niceToHaveSkills,b=e.postDate,d=e.showMainCountry,O=Object(c.useContext)(m).configuration,x=W(),h=function(){return Object(r.jsx)(N.a,{item:!0,xs:12,children:Object(r.jsxs)(z.a,{children:[Object(r.jsx)(L.a,{component:"li"}),Object(r.jsx)("li",{style:{position:"relative",top:"-15px",backgroundColor:"white",margin:"2px 40% 0 40%"},children:Object(r.jsx)(J.a,{label:"New",className:x.avatarPulse,style:{color:"#fff",backgroundColor:"#27b069"},size:"small"})})]})})};return Object(r.jsxs)(r.Fragment,{children:[d&&Object(r.jsxs)(N.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:x.spaceTop,style:{textAlign:"left"},children:[Object(r.jsx)(N.a,{item:!0,xs:2,sm:1,children:Object(r.jsx)(D.a,{code:function(e){return O.countries[e]}(t),size:32,style:{marginBottom:"10px"}},t)}),Object(r.jsx)(N.a,{item:!0,xs:2,children:Object(r.jsx)(U.a,{variant:"h4",gutterBottom:!0,children:t})})]}),Object(r.jsx)(E,{onClick:function(){return window.open(s)},children:Object(r.jsx)(A.a,{children:Object(r.jsx)(F.a,{children:Object(r.jsx)(H.a,{children:Object(r.jsxs)(N.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",children:[Object(r.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(r.jsx)("div",{children:t}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:a})})]}),Object(r.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(r.jsx)("div",{children:o?Object(r.jsxs)("b",{children:[o,"K ",n]}):"Not informed"}),Object(r.jsx)("div",{children:Object(r.jsx)("em",{children:Object(r.jsx)(I.a,{datetime:b})})})]}),Object(r.jsxs)(N.a,{item:!0,xs:12,children:[i?Object(r.jsx)(h,{}):Object(r.jsx)(L.a,{variant:"middle",className:x.spaceBottom}),l]}),Object(r.jsxs)(N.a,{item:!0,xs:12,children:[null===j||void 0===j?void 0:j.map((function(e,t){var a=e.name;return Object(r.jsx)(J.a,{className:x.spacedBetween,size:"small",avatar:Object(r.jsx)(P.a,{children:a[0].toUpperCase()}),label:a,color:"secondary"},t)})),null===u||void 0===u?void 0:u.map((function(e,t){var a=e.name;return Object(r.jsx)(J.a,{className:x.spacedBetween,size:"small",avatar:Object(r.jsx)(P.a,{children:a[0].toUpperCase()}),label:a,color:"secondary",variant:"outlined"},t)}))]})]})})})})})]})},q=a(234),K=a(231),V=Object(c.createContext)({jobs:[],countries:[],setCountries:function(){},technologies:[],setTechnologies:function(){},salaryRange:[],setSalaryRange:function(){}}),$=V.Provider,Q=function(e){var t=e.children,a=e.jobs,n=Object(c.useState)([]),o=Object(l.a)(n,2),s=o[0],i=o[1],j=Object(c.useState)([]),u=Object(l.a)(j,2),b=u[0],d=u[1],O=Object(c.useState)([]),x=Object(l.a)(O,2),h=x[0],p=x[1];return Object(r.jsx)($,{value:{jobs:a,countries:s,setCountries:i,technologies:b,setTechnologies:d,salaryRange:h,setSalaryRange:p},children:t})},X=a(219),Y=a(220),Z=a(218),_=Object(R.a)((function(e){return Object(Z.a)({root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},itemList:{position:"fixed",width:"100%",maxWidth:360,bottom:e.spacing(10),backgroundColor:"#fbfbfb",borderRadius:"10px",border:"1px solid #d9d9d9"},rotate:{transform:"rotate(45deg)"}})})),ee=-1e3,te=function(e){var t=e.children,a=e.onClose,n=Object(c.useState)(ee),o=Object(l.a)(n,2),s=o[0],i=o[1],j=_();return Object(r.jsxs)("div",{className:j.root,children:[Object(r.jsx)(z.a,{className:j.itemList,style:{right:"".concat(s,"px")},children:t}),Object(r.jsx)(X.a,{color:"primary","aria-label":"add",onClick:function(){s===ee?i(16):(i(ee),"undefined"!==typeof a&&a())},children:Object(r.jsx)(Y.a,{className:16===s?j.rotate:void 0})})]})},ae=a(189),ne=a(224),re=a(222),ce=a(225),oe=a(226),se=a(227),ie=a(102),le=a(110),je=a(230),ue=a(221),be=a(232),de=Object(R.a)((function(e){return Object(Z.a)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},selectEmpty:{marginTop:e.spacing(2)},marginFlag:{marginTop:"5px",marginRight:"5px"},form:{width:"100%"}})})),Oe=function(){var e=Object(c.useContext)(m).configuration,t=Object(c.useContext)(V),a=t.jobs,n=t.setCountries,o=Object(c.useState)([]),s=Object(l.a)(o,2),i=s[0],j=s[1],u=de(),b=Object(d.a)(new Set(a.map((function(e){return e.country})))),O=function(t){return e.countries[t]};return Object(r.jsxs)(ie.a,{className:u.form,children:[Object(r.jsx)(le.a,{htmlFor:"select-country",children:"Countries"}),Object(r.jsx)(je.a,{autoWidth:!1,multiple:!0,value:i,onChange:function(e){var t=e.target.value;j(t),n(t)},inputProps:{id:"select-country"},renderValue:function(e){return e.map((function(e){return Object(r.jsx)(D.a,{code:O(e),size:16},e)}))},children:b.map((function(e){return Object(r.jsxs)(ue.a,{value:e,children:[Object(r.jsx)(re.a,{primary:e}),Object(r.jsx)(be.a,{checked:i.indexOf(e)>-1})]},e)}))})]})},xe=a(117),he=a.n(xe),pe=function(){var e=Object(c.useContext)(V).setTechnologies;return Object(r.jsx)(he.a,{fullWidth:!0,onChange:function(t){e(t.map((function(e){return e.toLowerCase()})))},label:"Enter technologies"})},me=a(236),fe=Object(R.a)({root:{width:"100%"}}),ge=function(){var e=Object(c.useContext)(V),t=e.jobs,a=e.salaryRange,n=e.setSalaryRange,o=Object(c.useState)(0),s=Object(l.a)(o,2),i=s[0],j=s[1],u=fe();Object(c.useEffect)((function(){var e=t.filter((function(e){return e.salary})).map((function(e){return e.salary})),a=Math.max.apply(Math,e);j(a),n([0,a])}),[t,n]);return Object(r.jsxs)("div",{className:u.root,children:[Object(r.jsx)(U.a,{id:"range-slider",gutterBottom:!0,children:0===a[0]&&0===a[1]?"Not informed":"Salary range (".concat(a[0]," - ").concat(a[1],")")}),Object(r.jsx)(me.a,{value:a,onChange:function(e,t){n(t)},"aria-labelledby":"range-slider",step:10,valueLabelDisplay:"auto",max:i,style:{color:"#34dc87"}})]})},ve=Object(R.a)(Object(b.a)(Object(b.a)({},M),{},{salaryAvatar:{cursor:"pointer"}})),ye=function(e){var t=e.onFilter,a=Object(c.useContext)(V),n=a.countries,o=a.salaryRange,s=a.technologies,i=a.setSalaryRange,j=Object(c.useState)("#34dc87"),u=Object(l.a)(j,2),b=u[0],d=u[1],O=function(e){var t=Object(c.useState)(localStorage.getItem(e)||""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){localStorage.setItem(e,n)}),[e,n]),[n?JSON.parse(n):n,r]}("show-salary-pulse"),x=Object(l.a)(O,2),h=x[0],p=x[1],m=ve();return Object(c.useEffect)((function(){var e=Object(l.a)(o,2),t=e[0],a=e[1];d(0===t&&0===a?"#acacac":"#34dc87")}),[o]),Object(r.jsxs)(te,{onClose:function(){t(n,o,s)},children:[Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(ne.a,{children:Object(r.jsx)(P.a,{style:{backgroundColor:"tomato"},children:Object(r.jsx)(ce.a,{})})}),Object(r.jsx)(re.a,{primary:Object(r.jsx)(Oe,{})})]}),Object(r.jsx)(L.a,{variant:"inset",component:"li"}),Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(ne.a,{children:Object(r.jsx)(P.a,{style:{backgroundColor:"cornflowerblue"},children:Object(r.jsx)(oe.a,{})})}),Object(r.jsx)(re.a,{primary:Object(r.jsx)(pe,{})})]}),Object(r.jsx)(L.a,{variant:"inset",component:"li"}),Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(ne.a,{children:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(P.a,{className:"".concat(m.salaryAvatar," ").concat(h?null:m.avatarPulse),style:{backgroundColor:b},onClick:function(){p("true"),i([0,0])},children:Object(r.jsx)(se.a,{})})})}),Object(r.jsx)(re.a,{primary:Object(r.jsx)(ge,{})})]})]})},we=function(e){return Object(r.jsx)(K.a,Object(b.a)({elevation:6,variant:"filled"},e))},Ce=(n=function(e){var t=e.jobs;return Object(r.jsx)(T,{fetchingData:0===t.length,children:t.map((function(e,a){return Object(r.jsx)(G,Object(b.a)({showMainCountry:0===a||a>0&&e.country!==t[a-1].country},e),a)}))})},function(e){var t=e.items,a=Object(c.useState)([]),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(c.useState)(!1),u=Object(l.a)(j,2),b=u[0],d=u[1];Object(c.useEffect)((function(){return i(t)}),[t]);var O=function(e,t){"clickaway"!==t&&d(!1)};return Object(r.jsxs)(Q,{jobs:t,children:[Object(r.jsx)(n,{jobs:s}),Object(r.jsx)(ye,{onFilter:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=a[0],c=Object(l.a)(a[1],2),o=c[0],s=c[1],j=a[2],u=t;r.length>0&&(u=u.filter((function(e){return r.includes(e.country)}))),u=u.filter((function(e){return e.salary>=o&&e.salary<=s})),j.length>0&&(u=u.filter((function(e){return j.some((function(t){var a,n;return(null===(a=e.mustHaveSkills)||void 0===a?void 0:a.some((function(e){return e.name.toLowerCase().includes(t)})))||(null===(n=e.niceToHaveSkills)||void 0===n?void 0:n.some((function(e){return e.name.toLowerCase().includes(t)})))}))}))),u.length>0?i(u):d(!0)}}),Object(r.jsx)(q.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:b,onClose:O,autoHideDuration:6e3,children:Object(r.jsx)(we,{onClose:O,severity:"error",children:"There are no jobs that fulfill the applied filters"})})]})}),ke=a(228),Se=a(229),Ne=a(223),Re=a(118),Be=a.n(Re),Te={primary:"#0675ce"},Ee=Object(R.a)({appBar:{backgroundColor:Te.primary},features:{position:"absolute",right:"50px"}}),ze=function(){var e=Ee();return Object(r.jsx)(ke.a,{position:"fixed",color:"primary",className:e.appBar,children:Object(r.jsxs)(Se.a,{children:[Object(r.jsx)(Ne.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(r.jsx)(Be.a,{})}),Object(r.jsx)(U.a,{variant:"h6",children:"Van Hack"})]})})},Le=function(){var e=function(){var e=Object(c.useContext)(m).configuration,t=Object(c.useContext)(v),a=t.jobs,n=t.setJobs,r=[],o=function(){var e=Object(O.a)(u.a.mark((function e(t){var a,n,c,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:0,e.next=3,h.a.get("".concat(t.baseURL,"/v1/job/search/full/?MaxResultCount=").concat(t.api.maxResults,"&SkipCount=").concat(a),{headers:t.api.headers});case 3:if(n=e.sent,c=n.data.result.items,r.push.apply(r,Object(d.a)(c.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{link:"".concat(t.api.jobsURL).concat(e.id),salary:e.salaryRangeEnd||e.salaryRangeStart||null})})))),c.length!==t.api.maxResults){e.next=9;break}return e.next=9,o(t,a+t.api.maxResults);case 9:return e.abrupt("return",C(r));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o(e).then(n)}),[]),[a]}(),t=Object(l.a)(e,1)[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ze,{}),Object(r.jsx)(Ce,{items:t})]})};var Je=function(){return Object(r.jsx)(g,{children:Object(r.jsx)(w,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(Le,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e){e.exports=JSON.parse('{"api":{"maxResults":100,"jobsURL":"https://vanhack.com/platform/#/jobs/","headers":{"Access-Control-Allow-Origin":"*","requireHeader":["origin","x-requested-with"]}},"countries":{"Brazil":"BR","Canada":"CA","Colombia":"CO","Estonia":"EE","Germany":"DE","United Kingdom":"GB-ENG","United States":"US"}}')}},[[184,1,2]]]);
//# sourceMappingURL=main.33066e1f.chunk.js.map