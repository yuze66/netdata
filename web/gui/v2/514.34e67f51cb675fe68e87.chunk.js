!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="616dc5f4-8bcc-4492-ac35-65084d037786",e._sentryDebugIdIdentifier="sentry-dbid-616dc5f4-8bcc-4492-ac35-65084d037786")}catch(e){}}(),(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[514],{70516:(e,t,n)=>{n.d(t,{vV:()=>a});var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=function(e){return!!e&&r.test(e)}},36569:(e,t,n)=>{n.d(t,{m:()=>d});var r=n(93433),a=n(29439),o=n(67294),i=n(54851),l=n(70516),c=(0,n(60677).default)(i.Select).withConfig({displayName:"styled__StyledSelect",componentId:"sc-bkkrx-0"})(["width:100%;"]),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name";return e.length?"string"===typeof e[0]?(0,r.Z)(new Set(e)):(0,r.Z)(new Map(e.map((function(e){return[e[t],e]}))).values()):[]},u=[],d=function(e){var t=e.invitations,n=e.setInvitations,d=(0,o.useState)(u),m=(0,a.Z)(d,2),f=m[0],p=m[1],v=(0,o.useState)(""),b=(0,a.Z)(v,2),g=b[0],h=b[1],y=(0,o.useState)(""),w=(0,a.Z)(y,2),E=w[0],x=w[1],O=function(){return x("")},k=(0,o.useCallback)((function(e){h(e.toLowerCase())}),[h]),C=o.useCallback((function(e){var t=e.emails,r=void 0===t?u:t,a=e.invitations,o=void 0===a?u:a;if(e.isEmailValid){var i=s(r),l=s(o);return p(i),n(l),h(""),void O()}x("Invalid Email")}),[n]),Z=(0,o.useCallback)((function(e){return(0,l.vV)(e)&&!f.includes(e)}),[f]),j=(0,o.useCallback)((function(e){C({isEmailValid:!0,emails:e.map((function(e){return e.value})),invitations:e.map((function(e){return{email:e.value,name:e.value.split("@")[0]}}))})}),[p]),S=(0,o.useCallback)((function(e){var n=e.clipboardData.getData("Text").toLowerCase().replace(/ /g,",").replace(/,,/g,",").split(",").filter((function(e){return Z(e)}))||u;C({emails:[].concat((0,r.Z)(f),(0,r.Z)(n)),invitations:[].concat((0,r.Z)(t),(0,r.Z)(n.map((function(e){return{email:e,name:e.split("@")[0]}})))),isEmailValid:n.length>0}),e.preventDefault()}),[f,t,Z,C]),I=(0,o.useCallback)((function(e){if(g)switch(O(),e.key){case"Enter":case"Tab":case",":case" ":C({emails:[].concat((0,r.Z)(f),[g]),invitations:[].concat((0,r.Z)(t),[{email:g,name:g.split("@")[0]}]),isEmailValid:Z(g)}),e.preventDefault()}}),[f,g,t,Z,C]);return o.createElement(i.Flex,{justifyContent:"space-between",column:!0,onPaste:S},o.createElement(c,{components:{DropdownIndicator:null},inputValue:g,isClearable:!0,isMulti:!0,menuIsOpen:!1,onBlur:function(){g&&C({emails:[].concat((0,r.Z)(f),[g]),invitations:[].concat((0,r.Z)(t),[{email:g,name:g.split("@")[0]}]),isEmailValid:Z(g)})},onChange:j,onInputChange:k,onKeyDown:I,onClear:function(){p(u),n(u)},placeholder:"Enter an email and hit enter",value:f.map((function(e){return{label:t=e,value:t};var t}))}),E&&o.createElement(i.Text,{color:"error"},E))}},64514:(e,t,n)=>{n.d(t,{l:()=>R});var r=n(4942),a=n(15861),o=n(29439),i=n(64687),l=n.n(i),c=n(67294),s=n(54851),u=n(28317),d=n(12070),m=n(20383),f=n(33932),p=n(87053),v=n(36569),b=n(38700),g=n(97510),h=n(39246),y=n(92074),w=n(40924),E=n(53843),x=n(16702),O=n(4661);const k=function(e){var t=e.id,n=e.handleDelete,r=(0,h.D)(t,"email");return c.createElement(s.Flex,{justifyContent:"between",alignItems:"center"},c.createElement(s.Flex,{gap:4},c.createElement(s.Icon,{color:"text",name:"check"}),c.createElement(s.Text,null,r)),c.createElement(s.Button,{flavour:"borderless",icon:"trashcan",onClick:function(){return n({email:r})}}))};var C=n(88715),Z=n(70516),j=n(28969),S=n(19389),I=n(16503);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var D=function(e){var t=e.email;return(0,Z.vV)(t)},T={header:"Invitations",text:"Invitations successfully sent!"},R=function(e){var t=e.onClose,n=e.isSubmodal,i=void 0!==n&&n,Z=(0,b.OS)(),R=Z.id,_=Z.name,B=Z.slug,U=(0,g.yE)(),V=(0,c.useState)(U),F=(0,o.Z)(V,2),N=F[0],W=F[1],M=(0,c.useState)([]),q=(0,o.Z)(M,2),A=q[0],L=q[1],Q=(0,c.useState)([]),G=(0,o.Z)(Q,2),J=G[0],Y=G[1],z=(0,c.useState)(),H=(0,o.Z)(z,2),K=H[0],$=H[1],X=(0,h.E)(R),ee=(0,o.Z)(X,4),te=ee[0],ne=ee[1],re=ee[2],ae=ee[3],oe=(0,C.Z)(),ie=(0,o.Z)(oe,2)[1],le=function(e){var n=e||T,r=n.header,a=n.text,o=(0,d.sc)({header:r,text:a,success:!0}),i=J.filter(D).map((function(e){return e.email})).join(",");(0,u.L)("invite","invite-sent","".concat(K,"::").concat(i,"::").concat(N.join(",")),"","","invite-sent"),m.Z.success(o,{context:"manageInvitations"}),t()},ce=function(){var e=(0,a.Z)(l().mark((function e(){var t,n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=J.filter(D),n=t.map((function(e){return{email:e.email,name:e.name,role:K,roomIDs:N}})),r="".concat(window.location.origin,"/spaces/").concat(B,"/join-space"),re(n,r,{onSuccess:le,onError:ie});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=(0,j.QB)(),ue=function(e){return function(t){var n=t.email;e&&ne(e),Y(J.filter((function(e){return e.email!==n}))),L(A.filter((function(e){return e.email!==n})))}},de=(0,c.useCallback)((function(){W([])}),[W]),me="member"===K;return c.createElement(w.u6,{right:!0,closeOnEsc:!0,closeOnOverlayClick:!0,onClose:t},c.createElement(E.x,{onClose:t,isSubmodal:i,title:"Invite Users"}),c.createElement(x.B,null,"Invite users to\xa0",_),c.createElement(w.TZ,null,c.createElement(O.qQ,null,"Send invitations to your team"),c.createElement(O.ne,null,"TIP: You can send more invitations at once, separate each with a comma."),c.createElement(v.m,{invitations:J,setInvitations:Y}),c.createElement("br",null),c.createElement(O.qQ,null,"War Rooms"),c.createElement(s.Flex,{alignItems:"center",justifyContent:"between",margin:[1,0,2]},c.createElement(s.TextSmall,null,"Choose one or more War rooms you'd like to invite users to."),!!N.length&&c.createElement(s.Button,{onClick:de,padding:[0],flavour:"borderless","data-ga":"rooms-clear",label:"Clear",small:!0},"Clear")),c.createElement(s.Box,{"data-testid":"invite-selectRoom"},c.createElement(f.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selectedValue:N,onChange:W},me?{formatOptions:function(e){return{isDisabled:e.name===y.TY}},filterValues:function(e){return e.label===y.TY}}:{}))),c.createElement("br",null),c.createElement(O.qQ,null,"Role"),c.createElement(O.ne,null,"Choose a role for invited user."," ",c.createElement(p.Z,{href:I.R,target:"_blank",rel:"noopener noreferrer",Component:s.TextSmall},"Learn more")),c.createElement(s.Box,{"data-testid":"invite-selectRole"},c.createElement(S.Z,{availableRoles:se,dataGA:"invite-to-space",dataTestId:"invite-selectRole",onChange:function(e){$(e.target.value)},value:K})),c.createElement(O.p7,null,c.createElement(s.Button,{label:"Send",onClick:ce,disabled:0===J.length||!K,flavour:"hollow",isLoading:ae})),c.createElement(s.H5,{margin:[2,0,0]},"Invitations awaiting response"),c.createElement(s.Flex,{column:!0},te.length>0?te.map((function(e){return c.createElement(k,{key:e,handleDelete:ue(e),id:e})})):c.createElement(O.xB,null,c.createElement("br",null),c.createElement(O.qQ,null,"You haven't invited any users yet.")))))}},4661:(e,t,n)=>{n.d(t,{ne:()=>c,p7:()=>i,qQ:()=>o,xB:()=>l});var r=n(60677),a=n(54851),o=(0,r.default)(a.H5).withConfig({displayName:"styled__StyledH5",componentId:"sc-1kusjmi-0"})(["display:flex;align-items:center;"]),i=r.default.div.withConfig({displayName:"styled__FormRow",componentId:"sc-1kusjmi-1"})(["width:100%;display:flex;flex-flow:row no-wrap;justify-content:flex-end;margin-top:",";"],(0,a.getSizeBy)(2)),l=r.default.div.withConfig({displayName:"styled__StyledUserInvitationEmptyListItem",componentId:"sc-1kusjmi-2"})(["display:flex;flex-flow:column nowrap;align-items:center;"]),c=(0,r.default)(a.TextSmall).withConfig({displayName:"styled__StyledSecondaryText",componentId:"sc-1kusjmi-3"})(["margin:2px 0 8px;"])},16503:(e,t,n)=>{n.d(t,{R:()=>r});var r="https://learn.netdata.cloud/docs/nightly/concepts/role-based-access-model"},57241:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(97431),o=n(38700);const i=function(e){var t=(0,a.RP)(),n=t.loaded,i=t.value,l=t.hasError,c=(0,o.uk)(),s=n&&i?i.billingEmail?"update":"checkout":"",u=(0,r.useCallback)((function(e){return n&&i?"/spaces/".concat(c,"/settings/billing/all-plans#billingModalType=").concat(s,"&billingModalSlug=").concat(e):null}),[e,c,s]),d=e?u(e):null;return{loaded:n,getUrl:u,url:d,hasError:l}}},19389:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(54851),o=n(60677),i=n(51801),l=n(9508),c=n(38700),s=n(87053),u=n(79655),d=n(28969),m=n(26503),f=n(57241),p={admin:"Users with this role can control Spaces, War Rooms, Nodes, Users and Billing. They can also access any War Room in the Space.",member:"Users with this role can create War Rooms and invite other Members. They can only see the War Rooms they belong to and all Nodes in the All Nodes room",manager:"Users with this role can manage War Rooms and Users. They can access any War Room in the Space.",troubleshooter:"Users with this role can use Netdata to troubleshoot, not manage entities. They can access any War Room in the Space.",observer:"Users with this role can only view data in specific War Rooms.",billing:"Users with this role can handle billing options and invoices."},v=(0,o.default)(a.Flex).withConfig({displayName:"rolePicker__PlanBadge",componentId:"sc-ypuqww-0"})(["pointer-events:auto;"]);const b=function(e){var t=e.availableRoles,n=e.dataGA,o=e.dataTestId,b=e.onChange,g=e.value,h=(0,c.OS)("plan"),y=(0,r.useMemo)((function(){return(0,l.xJ)(h).map((function(e){return{isChecked:e===g,isEnabled:t.includes(e),role:e}})).sort((function(e,t){return Number(t.isEnabled)-Number(e.isEnabled)}))}),[t,l.xJ,h,g]),w=(0,d.gI)(m.mk.billingReadAll),E=(0,f.Z)().getUrl;return r.createElement(a.Flex,{column:!0,gap:2,"data-testid":"".concat(o,"-roleOptions")},y.map((function(e){var t=e.isChecked,l=e.isEnabled,c=e.role,d=l?void 0:"medium",m="troubleshooter"===c?"pro":"business";return r.createElement(a.RadioButton,{key:c,checked:t,"data-ga":"".concat(n,"::select-role-").concat(c,"::global-view"),"data-testid":"".concat(o,"-").concat(c,"Option"),disabled:!l,onChange:b,value:c,alignItems:"start"},r.createElement(a.Flex,{column:!0},r.createElement(a.Flex,{gap:2,alignItems:"center"},r.createElement(a.Text,{opacity:d},(0,i.fm)(c)),!l&&r.createElement(v,{background:"sideBarMini",border:{side:"all",color:"tabsBorder"},cursor:"initial",padding:[1],round:!0},r.createElement(s.Z,{align:"bottom",as:u.rU,boxProps:{as:a.Flex},color:"text",Component:a.TextMicro,content:"Available on ".concat((0,i.fm)(m)," plan"),"data-ga":"".concat(n,"::click-plan-badge-").concat(m,"::global-view"),disabled:!w,hoverColor:"textFocus",showToolTip:!0,strong:!0,to:E(m)},(0,i.fm)(m)))),r.createElement(a.TextSmall,{color:"textLite",opacity:d},p[c])))})))}},39246:(e,t,n)=>{n.d(t,{D:()=>D,E:()=>P});var r=n(15861),a=n(29439),o=n(4942),i=n(93433),l=n(64687),c=n.n(l),s=n(67294),u=n(4480);const d=(0,u.xu)({key:"invitation",default:{id:"",email:""}});var m=(0,u.xu)({key:"invitationIds",default:[]}),f=n(45987),p=n(35835),v=["role"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){return e.map((function(e){return{id:e.id,email:e.email}}))},h=function(e){return p.Z.get("/api/v2/spaces/".concat(e,"/invitations"),{transform:g})},y={member:1,admin:2,manager:3,troubleshooter:4,observer:5,billing:6},w=function(e){return e.map((function(e){var t=e.role,n=(0,f.Z)(e,v);if(void 0===y[t])throw new Error("role not found");return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({role:y[t]},n)}))},E=function(e,t,n){return p.Z.post("/api/v1/spaces/".concat(e,"/invitations"),{redirectURI:n,requests:w(t)})},x=function(e,t){return p.Z.delete("/api/v1/spaces/".concat(e,"/invitations"),{params:{invitation_ids:t.join(",")}})},O=n(6792),k=function(e){var t=e.data,n=e.invitations;return t.reduce((function(e,t,r){var a,o;return(o=t.errorMsgKey)&&o===O.Sq&&(null===(a=n[r])||void 0===a?void 0:a.email)&&e.push(n[r].email),e}),[])},C=function(e){return e.length>1};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=(0,u.CG)({key:"spaceInvitationValue",get:function(e){var t=e.id,n=e.key;return function(e){var r=(0,e.get)(d(t));return n?r[n]:r}}}),I=(0,u.CG)({key:"spaceInvitationsIdsValue",get:function(e){return function(t){return(0,t.get)(m(e))}},set:function(e){return function(t,n){var r=t.set,a=n.invitations,o=n.merge;r(m(e),(function(e){return(0,i.Z)(new Set([].concat((0,i.Z)(e),(0,i.Z)(a.map((function(e){return e.id}))))))})),a.forEach((function(e){r(d(e.id),(function(t){return j(j({},o&&t),e)}))}))}}}),P=function(e){var t=(0,u.sJ)(I(e)),n=(0,s.useState)(!1),o=(0,a.Z)(n,2),l=o[0],f=o[1],p=(0,u._8)((function(t){var n=t.snapshot,a=t.set;return(0,r.Z)(c().mark((function t(){var r,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getLoadable(I(e));case 2:if(t.sent.length){t.next=9;break}return t.next=6,h(e);case 6:r=t.sent,o=r.data,a(I(e),{invitations:o,merge:!0});case 9:case"end":return t.stop()}}),t)})))}),[e]),v=(0,s.useCallback)(function(){var t=(0,r.Z)(c().mark((function t(n,r,a){var o,i,l,s,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.onSuccess,i=a.onError,t.prev=1,f(!0),t.next=5,E(e,n,r);case 5:if(l=t.sent,s=l.data,!(u=k({data:s,invitations:n})).length||C(n)){t.next=11;break}return i&&i({message:"User has already joined that space!"}),t.abrupt("return");case 11:if(!u.length||!C(n)){t.next=18;break}if(u.length!==n.length){t.next=15;break}return i&&i({message:"All of the selected users are already meembers of this space"}),t.abrupt("return");case 15:if(!o){t.next=18;break}return o({header:"Invitations partially send",text:"Some of the selected users are already members of this space"}),t.abrupt("return");case 18:o&&o(),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),i&&i(t.t0);case 24:return t.prev=24,f(!1),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[1,21,24,27]])})));return function(e,n,r){return t.apply(this,arguments)}}(),[e]),b=(0,u._8)((function(t){var n=t.snapshot,a=t.set,o=t.reset;return function(){var t=(0,r.Z)(c().mark((function t(r){var l,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getPromise(I(e));case 2:return l=t.sent,s=l.filter((function(e){return e===r})),a(m(e),(function(e){var t=new Set(e);return s.forEach((function(e){return t.delete(e)})),(0,i.Z)(t)})),t.prev=5,t.next=8,x(e,[r]);case 8:s.forEach((function(e){o(d(e))})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),a(I(e),{invitations:l,merge:!1});case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}()}),[e]);return(0,s.useEffect)((function(){p()}),[e]),[t,b,v,l]},D=function(e,t){return(0,u.sJ)(S({id:e,key:t}))}}}]);