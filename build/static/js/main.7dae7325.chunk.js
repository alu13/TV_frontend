(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{66:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(10),s=n.n(i),o=(n(66),n(106)),r=n(108),l=n(114),h=n(104),j=n(26),d=n(3),u=Object(h.a)({titleItemRight:{"margin-left":"auto"},toolBar:{"background-color":"#C4C4C4"}});function p(){var t=u();return Object(d.jsx)(o.a,{className:"flex",position:"sticky",children:Object(d.jsxs)(r.a,{className:"flex",classname:t.toolBar,children:["CONNECTECH",Object(d.jsx)("div",{className:t.titleItemRight,children:[{name:"Home",route:"/home"},{name:"Contact Us",route:"/contact"}].map((function(t){return Object(d.jsx)(l.a,{component:j.b,to:t.route,children:t.name})}))})]})})}var m=n(113),b=n(109);function x(t){return Object(d.jsxs)(m.a,{sx:{width:400,height:400,backgroundColor:"#C4C4C4"},ml:4,mr:4,p:2,pl:2,pr:2,children:[Object(d.jsx)(b.a,{variant:"h5",children:t.title}),Object(d.jsx)(b.a,{align:"justify",children:t.text})]})}var g=n(112),f=n(110),O=n(9),v=Object(h.a)({searchBar:{width:"75vw","margin-top":"10px"},searchIcon:{"margin-top":"10px"}});function y(){var t=Object(O.f)();function e(e){t.push("/opportunities/".concat(e))}var n=v();return Object(d.jsxs)("div",{children:[Object(d.jsx)(f.a,{fontSize:"large",className:n.searchIcon,onClick:e}),Object(d.jsx)(g.a,{className:n.searchBar,size:"small",label:"Search",variant:"outlined",onKeyPress:function(t){"Enter"==t.key&&e(t.target.value)}})]})}var C=Object(h.a)({homeInfoCard:{margin:"50px"},homeInfoCardSection:{display:"flex","justify-content":"center","margin-top":"10px"},highlightButton:{"background-color":"#F1F500","margin-top":"10px"},searchBar:{width:"75vw","margin-top":"10px"}});function w(){var t=C();return Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{className:t.searchBar}),Object(d.jsxs)("div",{className:t.homeInfoCardSection,children:[Object(d.jsx)(x,{className:t.homeInfoCard,title:"For students",text:"Our platform connects students and student-led clubs on campus with organizations especially NGOs and small businesses that need assistance with various tasks related to volunteering, consulting, development and implementation of various technology etc. This allows students the chance to work with local businesses to gain experience in all spheres depending on what they want to do."}),Object(d.jsx)(x,{className:t.homeInfoCard,title:"For non-profits",text:"Our platform connects students and student-led clubs on campus with local organizations that need assistance with various tasks to help grow their businesses and allow our students to gain industry experience."})]}),Object(d.jsx)(l.a,{className:t.highlightButton,mt:4,children:Object(d.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfhJIZh5faEZM86uliWdQiNM5xN-BXlnDPaV36sx_ByilKCbg/viewform?usp=pp_url",children:"Are you a potential employer? Click here!"})})]})}var N=n(115),I=Object(h.a)({contactAvatar:{height:"10vw",width:"10vw"}});function k(t){var e=I();return Object(d.jsxs)(m.a,{sx:{width:"10vw","margin-left":"11vw","margin-right":"11vw","margin-top":"2vh",display:"inline"},children:[t.image?Object(d.jsx)(N.a,{alt:t.name,src:t.image,variant:"square",className:e.contactAvatar}):Object(d.jsxs)(N.a,{variant:"square",className:e.contactAvatar,children:[" ",t.name[0]," "]}),Object(d.jsx)(b.a,{align:t.email?"left":"center",variant:"h5",children:t.name}),Object(d.jsx)(b.a,{align:"left",variant:"body2",children:t.email})]})}function S(){return Object(d.jsx)(m.a,{sx:{display:"flex","flex-flow":"wrap"},children:[{name:"Aashna",email:"adoshi45@gatech.edu"},{name:"Rhea",email:"rganguli7@gatech.edu"},{name:"Eleanor",email:"esim6@gatech.edu"},{name:"Dr. Harris"},{name:"Youngtak"},{name:"Ashwin"},{name:"Subha"},{name:"Albert"}].map((function(t){return Object(d.jsx)(k,{name:t.name,email:t.email})}))})}n(77);var B=n(39),F=n(111),T=["Skills","Duration","Team Size"];function A(){return Object(d.jsxs)(m.a,{sx:{width:"15vw",height:"100vh","background-color":"#C4C4C4","padding-top":"10px"},children:[Object(d.jsxs)(m.a,{sx:{display:"inline-flex"},children:[Object(d.jsx)(F.a,{}),Object(d.jsx)(b.a,{variant:"h6",children:"FILTER"})]}),T.map((function(t){return Object(d.jsx)(b.a,{children:t})}))]})}function E(t){var e=Object(O.f)();return Object(d.jsxs)(m.a,{sx:{margin:"10px",width:"80vw","background-color":"#C4C4C4",padding:"10px"},onClick:function(){return n=t.opportunity,void e.push("/opportunity/".concat(n._id));var n},children:[Object(d.jsxs)(b.a,{align:"left",children:["Job Title: ",t.opportunity.title]}),Object(d.jsxs)(b.a,{align:"left",children:["Company: ",t.opportunity.company]}),Object(d.jsxs)(b.a,{align:"right",children:["Date: ",t.opportunity.date]})]})}function J(){var t=Object(O.g)().query,e=Object(a.useState)([]),n=Object(B.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){fetch("http://localhost:3001/search",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(t){return t.json()})).then((function(t){i(t)}))}),[]),Object(d.jsxs)(m.a,{sx:{display:"flex"},children:[Object(d.jsx)(A,{}),Object(d.jsx)(m.a,{children:c.map((function(t){return Object(d.jsx)(E,{opportunity:t})}))})]})}var P=Object(h.a)({highlightButton:{"background-color":"#F1F500","margin-left":"auto"},alignRight:{"margin-left":"auto"}});function z(){var t=P(),e=Object(O.g)().id,n=Object(a.useState)({}),c=Object(B.a)(n,2),i=c[0],s=c[1];return console.log(e),Object(a.useEffect)((function(){fetch("http://localhost:3001/searchById",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:e})}).then((function(t){return t.json()})).then((function(t){s(t[0])}))}),[]),Object(d.jsxs)(m.a,{sx:{"background-color":"#C4C4C4"},children:[Object(d.jsxs)(m.a,{sx:{display:"flex"},children:[Object(d.jsxs)(b.a,{align:"left",children:["Job Title: ",i.title]}),Object(d.jsx)(b.a,{className:t.alignRight,align:"right",children:i.date})]}),Object(d.jsxs)(b.a,{align:"left",children:["Job Description: ",i.description]}),Object(d.jsxs)(m.a,{sx:{display:"flex","margin-top":"auto"},children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(b.a,{align:"left",children:["Organization Contact Information: ",i.company]})}),Object(d.jsx)(l.a,{size:"large",className:t.highlightButton,children:Object(d.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSdV_Np1hy2L7Wf5KPh5u-ITt4NQ_R8K2INYs0EIvDF48Ud-JQ/viewform",children:"SIGN UP"})})]})]})}var D=function(){return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/contact",component:S}),Object(d.jsx)(O.a,{exact:!0,path:"/home",component:w}),Object(d.jsx)(O.a,{exact:!0,path:"/opportunities/:query",component:J}),Object(d.jsx)(O.a,{exact:!0,path:"/opportunity/:id",component:z}),Object(d.jsx)(O.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{})})]})]})})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),R()}},[[78,1,2]]]);
//# sourceMappingURL=main.7dae7325.chunk.js.map