(this["webpackJsonpdashboard-client"]=this["webpackJsonpdashboard-client"]||[]).push([[0],{163:function(e,n,t){},200:function(e,n,t){},201:function(e,n,t){},202:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(66),i=t.n(r),s=(t(163),t(18)),l=t(62),d=t.n(l),o=t(101),u=t(7),b=t(210),j=t(71);t(63);var h=t(215),m=t(211),g=t(4);function p(e){var n=e.guilds;return Object(g.jsxs)("section",{children:[Object(g.jsx)("section",{className:"title-container mt-3 hvr-buzz",children:Object(g.jsx)("img",{src:"logo.png",className:"w-75  App-logo py-2 rounded-circle",alt:"logo"})}),Object(g.jsx)("section",{className:"mt-3 mb-3 border rounded btn btn-block hvr-fade",children:Object(g.jsx)("h1",{className:"GuildsWord",children:"Guilds"})}),Object(g.jsx)("section",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[n.included.map((function(e){return Object(g.jsx)("div",{className:"col-md-3",children:Object(g.jsx)("div",{className:"guild-Animation mt-3",children:Object(g.jsxs)("div",{className:" guild-container",children:[Object(g.jsx)(b.a,{src:"https://cdn.discordapp.com/icons/".concat(e.id,"/").concat(e.icon,".png?size=1024"),className:"App-logo w-100 rounded-circle hvr-box-shadow-inset guild-img",thumbnail:!0}),Object(g.jsx)("h2",{children:e.name}),Object(g.jsx)("div",{children:Object(g.jsxs)(j.b,{to:"/dashboard/".concat(e.id),className:"btn primary-color guild-bottom",children:["  ",Object(g.jsx)("h2",{className:"guild-link",children:"Dashboard"})]})})]})})})})),n.excluded.map((function(e){return Object(g.jsx)("div",{className:"col-md-3",children:Object(g.jsx)("div",{className:"guild-Animation mt-3",children:Object(g.jsxs)("div",{className:" guild-container",children:[Object(g.jsx)(b.a,{src:"https://cdn.discordapp.com/icons/".concat(e.id,"/").concat(e.icon,".png?size=1024"),className:"App-logo w-100 rounded-circle hvr-box-shadow-inset guild-img",thumbnail:!0}),Object(g.jsx)("div",{children:Object(g.jsx)("a",{href:"https://discord.com/api/oauth2/authorize?client_id=825035795650969600&permissions=8&scope=bot",className:"btn primary-color guild-bottom",children:Object(g.jsx)("h2",{className:"guild-link",children:"Setup Bot"})})})]})})})}))]})})]})}function x(e){e.guilds;return Object(g.jsx)("section",{className:"mb-5 text-light",children:Object(g.jsx)(h.a,{className:" text-center",expand:"lg",bg:"dark",variant:"dark",children:Object(g.jsxs)(h.a.Brand,{href:"/",children:["  ",Object(g.jsx)("img",{src:"logo.png",width:"30px",height:"30px",className:" App-logo rounded-circle",alt:"logo"}),"  Grondle "]})})})}function O(e){e.guilds;return Object(g.jsx)("footer",{className:"py-5 bg-blue",children:Object(g.jsx)(m.a,{children:Object(g.jsx)("h1",{children:"Menu Footer "})})})}var f=t(17),v=t(102),N=t(212),y=t(213),C=t(216),S=t(214);function I(e){e.history,e.guildId,e.user;var n=e.config,t=e.roles,a=e.channels,c=e.updatePrefix,r=e.updateRole,i=e.updateMemberLog,s=n.defaultRole?n.defaultRole:"",l=n.memberLogChannel?n.memberLogChannel:"";return Object(g.jsxs)("section",{className:"py-5",children:[Object(g.jsxs)("section",{id:"main-dashboard-content",children:[Object(g.jsxs)("section",{id:"grid-container",children:[Object(g.jsxs)("section",{className:"grid-item one py-5 bg-light",children:[Object(g.jsx)("div",{className:"prefix-div rounded text-center",children:Object(g.jsx)(v.a,{initialValues:{prefix:n.prefix},className:"align-items-center justify-content-sm-center",onSubmit:function(e){var n=e.prefix;c(n)},children:function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)(N.a,{children:"Prefix"}),Object(g.jsx)(y.a,{placeholder:"input your prefix",className:"mr-1 btn btn-outline-success btn-block mb-2 text-left rounded-right",name:"prefix",onChange:e.handleChange,defaultValue:n.prefix}),Object(g.jsx)(C.a,Object(f.a)({type:"submit",className:"main-btn w-25 rounded hvr-round-corners hvr-bob",colorScheme:"cyan",children:"update Prefix"},"children"," Save "))]})}})}),Object(g.jsx)("div",{className:"prefix-div rounded text-center",children:Object(g.jsx)(v.a,{initialValues:{defaultRole:s},className:"align-items-center justify-content-sm-center",onSubmit:function(e){var n=e.defaultRole;r(n)},children:function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)("label",{htmlFor:"AutoRole",calssName:"text-center",children:" Auto Role "}),Object(g.jsx)(S.a,{name:"defaultRole",id:"AutoRole",className:"btn-block selectRole mb-2",onChange:e.handleChange,children:t.map((function(e){return Object(g.jsx)("option",{selected:e.id===s,value:e.id,children:e.name})}))}),Object(g.jsx)(C.a,Object(f.a)({type:"submit",className:"main-btn w-25 rounded hvr-round-corners hvr-bob",colorScheme:"cyan",children:"update Role"},"children"," Save "))]})}})})]})," ",Object(g.jsx)("section",{className:"grid-item two py-5 bg-dark",children:Object(g.jsx)("div",{className:"prefix-div rounded text-center",children:Object(g.jsx)(v.a,{initialValues:{memberLogChannel:l},className:"align-items-center justify-content-sm-center",onSubmit:function(e){var n=e.memberLogChannel;i(n),console.log(n)},children:function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)("label",{htmlFor:"MemberLogChannel",calssName:"text-center",children:" MemberLog Channel "}),Object(g.jsx)(S.a,{name:"MemberLogChannel",id:"MemberLogChannel",className:"btn-block selectRole mb-2",onChange:e.handleChange,children:a.map((function(e){return Object(g.jsx)("option",{selected:e.id===l,value:e.id,children:e.name})}))}),Object(g.jsx)(C.a,Object(f.a)({type:"submit",className:"main-btn w-25 rounded hvr-round-corners hvr-bob",colorScheme:"cyan",children:"update Role"},"children"," Save "))]})}})})})," "]})," "]})," "]})}function w(e){e.guilds;return Object(g.jsx)("section",{children:Object(g.jsx)("h1",{children:"hello from Welcome"})})}var k,L,R,M,$,A=t(20),G=t(61),P=Object(A.gql)(k||(k=Object(G.a)(["\nquery getMenuPageQuery {\n    getUser {\n        discordId\n        discordTag\n        avatar\n      }\n      getMutualGuilds {\n        included {\n          name\n          id\n          icon\n        }\n        excluded {\n          name\n          id\n          icon\n        }\n      }\n}\n"]))),q=Object(A.gql)(L||(L=Object(G.a)(["\nquery getDashboardPageQuery($guildId: String!) {\n    getUser {\n        discordId\n        discordTag\n        avatar\n      }\n      getMutualGuilds {\n        included {\n          name\n          id\n          icon\n        }\n        excluded {\n          name\n          id\n          icon\n        }\n      }\n      getGuildConfig(guildId: $guildId) {\n        guildId\n        prefix\n        defaultRole\n        memberLogChannel\n        logChannel\n        bumpChannelServers\n        bumpChannelBots\n        bumpServerDescription\n        bumpServerInviteurl\n      }\n      getGuildRoles (guildId: $guildId){\n        id\n        name\n      }\n      getGuildChannel (guildId: $guildId){\n        id\n        name\n      }\n}\n"]))),D=Object(A.gql)(R||(R=Object(G.a)(["\nmutation UpdateGuildPrefix($guildId: String!, $prefix: String){\nupdateGuildPrefix(guildId: $guildId , prefix: $prefix){\n    prefix\n    guildId\n    }\n}\n"]))),F=Object(A.gql)(M||(M=Object(G.a)(["\nmutation updateDefaultRole($guildId: String!, $defaultRole: String){\n    updateDefaultRole(guildId: $guildId , defaultRole: $defaultRole){\n    defaultRole\n    guildId\n    }\n}\n"]))),z=Object(A.gql)($||($=Object(G.a)(["\nmutation updateMemberLogChannel($guildId: String!, $memberLogChannel: String){\n    UpdateMemberLogChannel(guildId: $guildId , memberLogChannel: $memberLogChannel){\n        memberLogChannel\n        guildId\n    }\n}\n"])));function B(e){e.history;var n=e.match,t=Object(A.useQuery)(q,{variables:{guildId:n.params.id}}),a=t.loading,c=t.error,r=t.data,i=Object(A.useMutation)(D),s=Object(u.a)(i,1)[0],l=Object(A.useMutation)(F),j=Object(u.a)(l,1)[0],h=Object(A.useMutation)(z),m=Object(u.a)(h,1)[0],p=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s({variables:{guildId:n.params.id,prefix:t}});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j({variables:{guildId:n.params.id,defaultRole:t}});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m({variables:{guildId:n.params.id,memberLogChannel:t}});case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();if(!a&&!c){var f=r.getUser,v=r.getGuildConfig,N=r.getGuildRoles,y=r.getGuildChannel;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-center",children:"DashboardPage "}),Object(g.jsx)(I,{user:f,config:v,roles:N,channels:y,updateMemberLog:O,updatePrefix:p,updateRole:x}),Object(g.jsx)(w,{})]})}return Object(g.jsxs)("div",{className:"text-center align-content-center justify-content-center",children:[" ",Object(g.jsx)(b.a,{src:"https://cdn.discordapp.com/icons/801586699108745227/9d7b1008a291fff12aba70d3a5b14ed4.png",className:"App-logo w-50  rounded-circle hvr-box-shadow-inset guild-img",thumbnail:!0})]})}function T(e){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(g.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(g.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(g.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link",href:"#",children:"Link"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link",href:"#",children:"Anoher Link"})})]}),Object(g.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(g.jsx)(C.a,{className:"btn btn-success btn-outline-success my-2 my-sm-0 hvr-hang hvr-round-corners hvr-radial-in",onClick:function(){return window.location.href="http://dashboaerdapi.virgelroot.repl.co/api/auth/discord"},colorScheme:"cyan",children:"Login"})})]})]})})}function U(e){e.history;var n=Object(A.useQuery)(P),t=n.loading,a=n.error,c=n.data;if(!t&&!a){console.log(c),console.log(a);var r=c.getMutualGuilds;return Object(g.jsxs)("div",{children:[Object(g.jsx)(x,{}),Object(g.jsx)(p,{guilds:r}),Object(g.jsx)("h1",{children:"menue"}),Object(g.jsx)(O,{})]})}return Object(g.jsxs)("div",{className:"text-center align-content-center justify-content-center",children:[" ",Object(g.jsx)(b.a,{src:"https://cdn.discordapp.com/icons/801586699108745227/9d7b1008a291fff12aba70d3a5b14ed4.png",className:"App-logo w-50  rounded-circle hvr-box-shadow-inset guild-img",thumbnail:!0})]})}var Q=function(){return Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{path:"/",exact:!0,component:T}),Object(g.jsx)(s.a,{path:"/menu",exact:!0,component:U}),Object(g.jsx)(s.a,{path:"/dashboard/:id",exact:!0,component:B})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,218)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},H=t(217),J=(t(194),t(195),t(197),t(198),t(199),t(200),t(201),Object(A.createHttpLink)({uri:"https://dashboaerdapi.virgelroot.repl.co/graphql"})),W=new A.ApolloClient({link:J,cache:new A.InMemoryCache});i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(H.a,{resetCSS:!0,children:Object(g.jsx)(j.a,{children:Object(g.jsx)(A.ApolloProvider,{client:W,children:Object(g.jsx)(Q,{})})})})}),document.getElementById("root")),V()}},[[202,1,2]]]);
//# sourceMappingURL=main.194ff334.chunk.js.map