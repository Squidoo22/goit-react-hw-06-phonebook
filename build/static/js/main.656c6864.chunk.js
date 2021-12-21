(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__3rwzR",filterInput:"Filter_filterInput__2Zbgy"}},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=n(17),b=n(6),i=n.n(b),l=n(3),u=n(33),j=n(4),m=Object(j.b)("phonebook/add",(function(t){return{payload:{id:Object(u.a)(),name:t.name,number:t.number}}})),d=Object(j.b)("phonebook/get"),O={addContact:m,deleteContact:Object(j.b)("phonebook/delete"),changeFilter:Object(j.b)("phonebook/changeFilter"),getContacts:d},f=function(t){return t.phonebook.contacts},h=function(t){return t.phonebook.filter},p=n(1);function x(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),b=o[0],u=o[1],j=Object(l.c)(f),m=Object(l.b)(),d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}};return Object(p.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),e={name:n,number:b},j.some((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()||j.some((function(t){return t.number===e.number}))}))?alert("Friend ".concat(e.name," or number ").concat(e.number," is alredy exist")):m(O.addContact(e)),c(""),u("")},className:i.a.form,children:[Object(p.jsxs)("label",{className:i.a.formLabel,children:["Name",Object(p.jsx)("input",{className:i.a.formInput,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d})]}),Object(p.jsxs)("label",{className:i.a.formLabel,children:["Number",Object(p.jsx)("input",{className:i.a.formInput,value:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d})]}),Object(p.jsx)("button",{type:"submit",className:i.a.formBtn,children:"Add contact"})]})}var _=n(16),C=n.n(_);function L(){var t=Object(l.c)(h),e=Object(l.b)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:C.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("input",{className:C.a.filterInput,type:"text",value:t,onChange:function(t){return e(O.changeFilter(t.target.value))}})]})})}var g=n(9),k=n.n(g);function v(){var t=Object(l.c)(f),e=Object(l.c)(h),n=Object(l.b)(),a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return Object(p.jsx)("ul",{className:k.a.contactList,children:a.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:k.a.contactListItem,children:[Object(p.jsxs)("p",{className:k.a.contactsName,children:[a,": ",c]}),Object(p.jsx)("button",{className:k.a.contactsBtn,type:"button",onClick:function(){return n(O.deleteContact(e))},children:"Delete"})]},e)}))})}function N(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(x,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(L,{}),Object(p.jsx)(v,{})]})}var y,F=n(8),w=n(12),I=n(2),z=Object(j.c)([],(y={},Object(w.a)(y,O.addContact,(function(t,e){var n=e.payload;return[].concat(Object(F.a)(t),[n])})),Object(w.a)(y,O.deleteContact,(function(t,e){var n=e.payload,a=t.filter((function(t){return t.id!==n}));return Object(F.a)(a)})),y)),A=Object(j.c)("",Object(w.a)({},O.changeFilter,(function(t,e){return e.payload}))),B=Object(I.b)({contacts:z,filter:A}),S=n(5),Z=n(18),J=n.n(Z),q=Object(F.a)(Object(j.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),D={key:"phonebook",storage:J.a,blacklist:["filter"]},M=Object(j.a)({reducer:{phonebook:Object(S.g)(D,B)},middleware:q}),E=Object(S.h)(M),P=n(19);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l.a,{store:M,children:Object(p.jsx)(P.a,{loading:null,persistor:E,children:Object(p.jsx)(N,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__3zqk5",formLabel:"ContactForm_formLabel__14UiS",formInput:"ContactForm_formInput__39xFQ",formBtn:"ContactForm_formBtn__CMAye"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__8ujaj",contactListItem:"ContactList_contactListItem__3EP1J",contactsName:"ContactList_contactsName__1ODGz",contactsBtn:"ContactList_contactsBtn__aNy9Z"}}},[[31,1,2]]]);
//# sourceMappingURL=main.656c6864.chunk.js.map