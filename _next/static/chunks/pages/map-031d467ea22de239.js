(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{4284:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return t(5882)}])},188:function(e,n,t){"use strict";t.d(n,{T:function(){return Logo}});var r=t(5893),o=t(2734);let Logo=()=>{let e=(0,o.Z)(),n=e.palette.primary.main;return(0,r.jsxs)("svg",{fill:"none",height:"100%",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:.16,d:"M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z",fill:n}),(0,r.jsx)("path",{d:"M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z",fill:n})]})}},580:function(e,n,t){"use strict";t.d(n,{L:function(){return a}});var r=t(2729),o=t(4096),l=t(948);function _templateObject(){let e=(0,r._)([""]);return _templateObject=function(){return e},e}let a=(0,l.ZP)(o.Z)(_templateObject())},2042:function(e,n,t){"use strict";t.d(n,{a:function(){return useAuth}});var r=t(7294),o=t(9690);let useAuth=()=>(0,r.useContext)(o.Vo)},8115:function(e,n,t){"use strict";t.d(n,{A:function(){return z}});var r,o=t(5893),l=t(7294),a=t(9332),i=t(948),s=t(1163),c=t(5697),p=t.n(c),u=t(9690);let AuthGuard=e=>{let{children:n}=e,t=(0,s.useRouter)(),{isAuthenticated:r}=(0,u.Eu)(),o=(0,l.useRef)(!1),[a,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{t.isReady&&!o.current&&(o.current=!0,r?i(!0):(console.log("Not authenticated, redirecting"),t.replace({pathname:"/auth/login",query:"/"!==t.asPath?{continueUrl:t.asPath}:void 0}).catch(console.error)))},[t.isReady]),a)?n:null};AuthGuard.propTypes={children:p().node};var d=t(1664),h=t.n(d),x=t(8396),f=t(7357),m=t(7720),j=t(6447),g=t(7533),b=t(188),v=t(580),Z=t(9773),y=t(1402),w=t(3219);let C=[{title:"Overview",path:"/",icon:(0,o.jsx)(w.Z,{fontSize:"small",children:(0,o.jsx)(Z.Z,{})})},{title:"Map",path:"/map",icon:(0,o.jsx)(w.Z,{fontSize:"small",children:(0,o.jsx)(y.Z,{})})}];var k=t(8879);let SideNavItem=e=>{let{active:n=!1,disabled:t,external:r,icon:l,path:a,title:i}=e,s=a?r?{component:"a",href:a,target:"_blank"}:{component:h(),href:a}:{};return(0,o.jsx)("li",{children:(0,o.jsxs)(k.Z,{sx:{alignItems:"center",borderRadius:1,display:"flex",justifyContent:"flex-start",pl:"16px",pr:"16px",py:"6px",textAlign:"left",width:"100%",...n&&{backgroundColor:"rgba(255, 255, 255, 0.04)"},"&:hover":{backgroundColor:"rgba(255, 255, 255, 0.04)"}},...s,children:[l&&(0,o.jsx)(f.Z,{component:"span",sx:{alignItems:"center",color:"neutral.400",display:"inline-flex",justifyContent:"center",mr:2,...n&&{color:"primary.main"}},children:l}),(0,o.jsx)(f.Z,{component:"span",sx:{color:"neutral.400",flexGrow:1,fontFamily:e=>e.typography.fontFamily,fontSize:14,fontWeight:600,lineHeight:"24px",whiteSpace:"nowrap",...n&&{color:"common.white"},...t&&{color:"neutral.500"}},children:i})]})})};SideNavItem.propTypes={active:p().bool,disabled:p().bool,external:p().bool,icon:p().node,path:p().string,title:p().string.isRequired};let SideNav=e=>{let{open:n,onClose:t}=e,r=(0,a.usePathname)(),l=(0,x.Z)(e=>e.breakpoints.up("lg")),i=(0,o.jsx)(v.L,{sx:{height:"100%","& .simplebar-content":{height:"100%"},"& .simplebar-scrollbar:before":{background:"neutral.400"}},children:(0,o.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,o.jsx)(f.Z,{sx:{p:3},children:(0,o.jsx)(f.Z,{component:h(),href:"/",sx:{display:"inline-flex",height:32,width:32},children:(0,o.jsx)(b.T,{})})}),(0,o.jsx)(m.Z,{sx:{borderColor:"neutral.700"}}),(0,o.jsx)(f.Z,{component:"nav",sx:{flexGrow:1,px:2,py:3},children:(0,o.jsx)(j.Z,{component:"ul",spacing:.5,sx:{listStyle:"none",p:0,m:0},children:C.map(e=>{let n=!!e.path&&r===e.path;return(0,o.jsx)(SideNavItem,{active:n,disabled:e.disabled,external:e.external,icon:e.icon,path:e.path,title:e.title},e.title)})})}),(0,o.jsx)(m.Z,{sx:{borderColor:"neutral.700"}})]})});return l?(0,o.jsx)(g.ZP,{anchor:"left",open:!0,PaperProps:{sx:{backgroundColor:"neutral.800",color:"common.white",width:280}},variant:"permanent",children:i}):(0,o.jsx)(g.ZP,{anchor:"left",onClose:t,open:n,PaperProps:{sx:{backgroundColor:"neutral.800",color:"common.white",width:280}},sx:{zIndex:e=>e.zIndex.appBar+100},variant:"temporary",children:i})};SideNav.propTypes={onClose:p().func,open:p().bool};var P=t(4149),_=t(4674),N=t(9661),S=t(1796),A=t(5724),E=t(5861),I=t(2096),T=t(3599),R=t(2042);let AccountPopover=e=>{let{anchorEl:n,onClose:t,open:r}=e,i=(0,a.useRouter)(),s=(0,R.a)(),c=(0,l.useCallback)(()=>{null==t||t(),s.signOut(),i.push("/auth/login")},[t,s,i]);return(0,o.jsxs)(A.ZP,{anchorEl:n,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:t,open:r,PaperProps:{sx:{width:200}},children:[(0,o.jsxs)(f.Z,{sx:{py:1.5,px:2},children:[(0,o.jsx)(E.Z,{variant:"overline",children:"Account"}),(0,o.jsx)(E.Z,{color:"text.secondary",variant:"body2",children:"Anika Visser"})]}),(0,o.jsx)(m.Z,{}),(0,o.jsx)(I.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,o.jsx)(T.Z,{onClick:c,children:"Sign out"})})]})};AccountPopover.propTypes={anchorEl:p().any,onClose:p().func,open:p().bool.isRequired};let TopNav=e=>{let{onNavOpen:n}=e,t=(0,x.Z)(e=>e.breakpoints.up("lg")),r=function(){let e=(0,l.useRef)(null),[n,t]=(0,l.useState)(!1),r=(0,l.useCallback)(()=>{t(!0)},[]),o=(0,l.useCallback)(()=>{t(!1)},[]),a=(0,l.useCallback)(()=>{t(e=>!e)},[]);return{anchorRef:e,handleClose:o,handleOpen:r,handleToggle:a,open:n}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Z,{component:"header",sx:{backdropFilter:"blur(6px)",backgroundColor:e=>(0,S.Fq)(e.palette.background.default,.8),position:"sticky",left:{lg:"".concat(280,"px")},top:0,width:{lg:"calc(100% - ".concat(280,"px)")},zIndex:e=>e.zIndex.appBar},children:(0,o.jsxs)(j.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{minHeight:64,px:2},children:[(0,o.jsx)(j.Z,{alignItems:"center",direction:"row",spacing:2,children:!t&&(0,o.jsx)(_.Z,{onClick:n,children:(0,o.jsx)(w.Z,{fontSize:"small",children:(0,o.jsx)(P.Z,{})})})}),(0,o.jsx)(j.Z,{alignItems:"center",direction:"row",spacing:2,children:(0,o.jsx)(N.Z,{onClick:r.handleOpen,ref:r.anchorRef,sx:{cursor:"pointer",height:40,width:40},src:"/assets/avatars/sun.jpg"})})]})}),(0,o.jsx)(AccountPopover,{anchorEl:r.anchorRef.current,open:r.open,onClose:r.handleClose})]})};TopNav.propTypes={onNavOpen:p().func};let L=(0,i.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",flex:"1 1 auto",maxWidth:"100%",[n.breakpoints.up("lg")]:{paddingLeft:280}}}),O=(0,i.ZP)("div")({display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%"}),z=(r=e=>{let{children:n}=e,t=(0,a.usePathname)(),[r,i]=(0,l.useState)(!1),s=(0,l.useCallback)(()=>{r&&i(!1)},[r]);return(0,l.useEffect)(()=>{s()},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(TopNav,{onNavOpen:()=>i(!0)}),(0,o.jsx)(SideNav,{onClose:()=>i(!1),open:r}),(0,o.jsx)(L,{children:(0,o.jsx)(O,{children:n})})]})},e=>(0,o.jsx)(AuthGuard,{children:(0,o.jsx)(r,{...e})}))},5882:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7294),l=t(1120),a=t(9393),i=t(6158),s=t.n(i),c=t(8115),p=t(3454);s().accessToken=p.env.NEXT_PUBLIC_MAPBOX_API_KEY;let u=(0,l.Z)(e=>({mapContainer:{height:"100vh",width:"100%"}})),Map=()=>{let e=u(),[n,t]=(0,o.useState)(null);(0,o.useEffect)(()=>{n||(e=>{let{setMap:n,mapContainer:t}=e,r=new(s()).Map({container:t.current,style:"mapbox://styles/mapbox/streets-v11",center:[-71.0589,42.3601],zoom:12});r.on("load",()=>{n(r),r.resize()})})({setMap:t,mapContainer:l})},[n]);let l=o.useRef(null);return(0,r.jsx)(a.Z,{className:e.mapContainer,children:(0,r.jsx)("div",{ref:l,className:e.mapContainer})})};Map.getLayout=e=>(0,r.jsx)(c.A,{children:e}),n.default=Map}},function(e){e.O(0,[634,540,199,39,361,774,888,179],function(){return e(e.s=4284)}),_N_E=e.O()}]);