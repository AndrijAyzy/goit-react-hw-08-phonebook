"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[985],{7985:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,o,a,i,c,s,l,u,d,f,p,x,b=r(168),m=r(6444),h=m.ZP.h1(t||(t=(0,b.Z)(["\n    text-align: center;\n    font-family: Segoe UI;\n    font-weight: 700;\n    font-size: 48px;\n"]))),g=m.ZP.div(o||(o=(0,b.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),y=m.ZP.p(a||(a=(0,b.Z)(["\n    text-align: center;\n    font-family: Segoe UI;\n    font-weight: 500;\n    font-size: 36px;\n    color: orangered;\n"]))),Z=r(9439),v=r(2791),j=r(6429),w=r.n(j),C=m.ZP.form(i||(i=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    border: 2px solid gray;\n    border-radius: 5px;\n    padding: 10px;\n"]))),z=m.ZP.button(c||(c=(0,b.Z)(["\n    font-size: 24px;\n    font-weight: 700;\n    font-family: Cambria;\n    padding: 16px;\n    margin-bottom: 16px;\n    color: orangered;\n    background-color: white; \n    border: 1px solid;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: white;\n        background-color: orangered;\n        border-color: none;\n    }\n"]))),P=m.ZP.label(s||(s=(0,b.Z)(["\n    font-family: Cambria;\n    font-weight: 700;\n    font-size: 24px;\n    color: #5e5e5e;\n"]))),k=m.ZP.input(l||(l=(0,b.Z)(["\n    font-family: Cambria;\n    font-weight: 400;\n    font-size: 24px;\n    outline: none;\n    border: 2px solid gray;\n    border-radius: 5px;\n    &:focus{\n    border: 3px solid gray;\n}\n"]))),_=r(897),I=r(6916),A=function(n){return n.filter},L=function(n){return n.contacts.items},S=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},N=(0,I.P1)([L,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),T=r(9434),q=r(3329),D=function(){var n=(0,v.useState)(""),e=(0,Z.Z)(n,2),r=e[0],t=e[1],o=(0,v.useState)(""),a=(0,Z.Z)(o,2),i=a[0],c=a[1],s=(0,T.v9)(L),l=(0,T.I0)(),u=w().generate(),d=function(n){var e=n.currentTarget,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":c(o);break;default:return}},f=function(){t(""),c("")};return(0,q.jsxs)(C,{onSubmit:function(n){var e;n.preventDefault(),s.find((function(n){return n.name.toLocaleLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacs")):(e=function(n){var e=n.name,r=n.number;return{id:u,name:e,number:r}}({name:r,number:i}),l((0,_.uK)(e)),f())},children:[(0,q.jsx)(P,{children:" Name "}),(0,q.jsx)(k,{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d}),(0,q.jsx)(P,{children:" Number "}),(0,q.jsx)(k,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d}),(0,q.jsx)(z,{type:"submit",children:" Add contact "})]})},K=m.ZP.label(u||(u=(0,b.Z)(["\n    font-family: Cambria;\n    font-weight: 700;\n    font-size: 24px;\n\n    margin-right: 10px;\n"]))),U=m.ZP.input(d||(d=(0,b.Z)(["\n    font-family: Cambria;\n    font-weight: 400;\n    font-size: 24px;\n    outline: none;\n    border: 2px solid gray;\n    border-radius: 5px;\n    &:focus {\n    border: 3px solid gray;\n}\n"]))),B=r(5030),E=function(){var n=(0,T.v9)(A),e=(0,T.I0)();return(0,q.jsxs)("div",{children:[(0,q.jsx)(K,{children:"Find contacts by name"}),(0,q.jsx)(U,{type:"text",value:n,name:"filter",onChange:function(n){return e((0,B.T)(n.target.value))}})]})},G=m.ZP.ul(f||(f=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),J=m.ZP.li(p||(p=(0,b.Z)(["\n    font-family: Cambria;\n    font-weight: 500;\n    font-size: 24px;\n\n    display: flex;\n    justify-content:space-between;\n"]))),M=m.ZP.button(x||(x=(0,b.Z)(["\n    cursor: pointer;\n    border-radius: 5px;\n    border: 2px solid gray;\n\n    padding: 5px;\n\n    text-align: center;\n    font-family: Cambria;\n    font-weight: 700;\n    font-size: 24px;\n    &:active, \n    &:hover,\n    &:focus {\n        background-color: orangered;\n        color: white;\n        border-color: none;\n}"]))),$=function(){var n=(0,T.v9)(N),e=(0,T.I0)();return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(G,{children:n.map((function(n){var r=n.name,t=n.id,o=n.number;return(0,q.jsxs)(J,{children:[r," : ",o,(0,q.jsx)(M,{type:"button",onClick:function(){return e((0,_.GK)(t))},children:"Delete"})]},t)}))})})},H=r(5243);function O(){var n=(0,T.v9)(N),e=(0,T.v9)(F),r=(0,T.v9)(S),t=(0,T.I0)();return(0,v.useEffect)((function(){t((0,_.yF)())}),[t]),(0,q.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101"},children:(0,q.jsxs)("div",{children:[(0,q.jsx)(h,{children:"Phonebook"}),(0,q.jsx)(D,{}),(0,q.jsx)(h,{children:"Contacts"}),(0,q.jsx)(E,{}),r&&!e?(0,q.jsx)(g,{children:(0,q.jsx)(H.g4,{})}):(0,q.jsx)($,{}),!n.length&&(0,q.jsx)(y,{children:"There are no contacts in the Phonebook"})]})})}}}]);
//# sourceMappingURL=985.eee94b0c.chunk.js.map