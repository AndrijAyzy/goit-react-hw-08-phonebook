"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[275],{6275:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,a,o,s=t(2791),l=t(9434),c=t(2286),d=t(8200),u=t(5218),x=t(5705),m=t(7298),p=t(9055),h=t(168),f=t(8126),b=(0,f.ZP)(x.l0)(r||(r=(0,h.Z)(["\n  margin-left: 20px;\n  margin-bottom: 1px;\n  label {\n    display: block;\n    margin-bottom: 2px;\n    font-size: 24px;\n    margin-left: 4px;\n  }\n  input {\n    display: block;\n    font-size: 20px;\n    width: 300px;\n    height: 40px;\n    margin-bottom: 8px;\n    border: 1px solid black;\n    border-radius: 4px;\n  }\n\n"]))),g=t(184),j=function(){var n=(0,l.I0)(),e=(0,l.v9)(c.K2).items,t=(0,s.useCallback)((function(){u.ZP.success("Contact was successfully added to your phonebook list.")}),[]),r=(0,s.useCallback)((function(r,i){var a=r.name,o=r.number,s=i.resetForm,l=a.charAt(0).toUpperCase()+a.slice(1);e.some((function(n){return n.name===l}))?alert("".concat(l," is already in contacts")):n((0,d.je)({name:l,number:o})).unwrap().then((function(){t(),s()})).catch((function(n){console.error("Error adding contact:",n)}))}),[n,e,t]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.x7,{}),(0,g.jsx)(x.J9,{initialValues:{name:"",number:""},onSubmit:r,children:function(n){return(0,g.jsxs)(b,{as:x.l0,children:[(0,g.jsx)(m.l,{htmlFor:"name",children:"Name"}),(0,g.jsx)(x.gN,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,g.jsx)(m.l,{htmlFor:"number",children:"Number"}),(0,g.jsx)(x.gN,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,g.jsx)(p.z,{colorScheme:"green",size:"sm",type:"submit",ml:5,width:400,mt:10,mb:10,children:"Add contact"})]})}})]})},y=function(){return(0,g.jsx)("div",{style:{marginLeft:"30px"},children:"You don't have any contact"})},v=t(1429),k=f.ZP.div(i||(i=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n  label {\n    font-size: 20px;\n    display: block;\n    margin-bottom: 12px;\n    margin-left: 20px;\n  }\n  input {\n    width: 350px;\n    height: 25px;\n    margin-bottom: 12px;\n    font-size: 16px;\n    border: 1px solid black;\n    border-radius: 4px;\n  }\n"]))),z=function(){var n=(0,l.v9)(c.K2).items,e=(0,l.I0)();return 0!==n.length?(0,g.jsx)(k,{children:(0,g.jsxs)("label",{children:["Filter",(0,g.jsx)("input",{type:"text",name:"filter",onChange:function(n){e((0,v.x)(n.target.value.toLowerCase().trim()))}})]})}):(0,g.jsx)(y,{})},w=t(2715),C=f.ZP.ul(a||(a=(0,h.Z)(["\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 10px;  \n\n  li {\n    max-width: 465px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n\n  }\n\n\n"]))),Z=(f.ZP.ul(o||(o=(0,h.Z)(["\nbackground: #000000;\n"]))),function(){var n=(0,l.I0)(),e=(0,l.v9)(c.F4);(0,s.useEffect)((function(){n((0,d.XQ)())}),[n]);var t=function(e){n((0,d.ml)(e)).unwrap().then((function(){u.Am.error("Contact was successfully deleted from your contacts list.")}))};return(0,g.jsx)(C,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.name,i=n.number;return(0,g.jsxs)("li",{children:[(0,g.jsxs)(w.x,{as:"samp",fontSize:"xl",ml:5,fontWeight:"500",textTransform:"capitalize",children:[r,": ",i]}),(0,g.jsx)(p.z,{size:"sm",colorScheme:"red",type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})}),A=t(8410),_=t(824),F=function(){var n=(0,l.v9)(c.K2),e=n.isLoading,t=n.error;return(0,g.jsxs)(A.W,{children:[(0,g.jsxs)(_.xu,{bgColor:"#0fd3ff",borderRadius:4,children:[(0,g.jsx)(w.x,{as:"n",fontSize:"4xl",ml:150,fontWeight:"700",children:"Phonebook"}),(0,g.jsx)(j,{})]}),(0,g.jsxs)(_.xu,{bgColor:"#ffffff",borderRadius:4,children:[(0,g.jsx)(w.x,{as:"n",fontSize:"4xl",ml:170,fontWeight:"600",children:"Contacts"}),e&&(0,g.jsx)("div",{style:{marginLeft:"30px"},children:"Loading..."}),t&&(0,g.jsx)("div",{children:t.message}),(0,g.jsx)(z,{}),(0,g.jsx)(Z,{})]})]})}}}]);
//# sourceMappingURL=275.5a2e9a37.chunk.js.map