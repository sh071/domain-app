(this["webpackJsonpdomain-app"]=this["webpackJsonpdomain-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/contact.f7fa8fd0.png"},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(12),a(1)),m=a(5),s=(a(13),a(6)),i=(a(14),function(e){var t=e.label,a=Object(s.a)(e,["label"]);return l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,t),l.a.createElement("input",a))}),u=(a(15),function(e){return l.a.createElement("div",{className:"section-header"},l.a.createElement("h6",null,e.label),l.a.createElement("hr",null))}),d=(a(16),a(4)),p=a.n(d),E=function(e){var t=e.contact;return l.a.createElement("div",{className:"contact-card vcard"},l.a.createElement("div",{className:"card-title"},"hcard preview"),l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"contact-name fn"},t.name),l.a.createElement("img",{src:t.photo&&t.photo.length?t.photo:p.a,className:"contact-image photo",alt:"contact"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content-row"},l.a.createElement("label",null,"email"),l.a.createElement("div",{className:"content-value email"},t.email)),l.a.createElement("div",{className:"content-row"},l.a.createElement("label",null,"phone"),l.a.createElement("div",{className:"content-value tel"},t.phone)),l.a.createElement("div",{className:"adr"},l.a.createElement("div",{className:"content-row"},l.a.createElement("label",null,"address"),l.a.createElement("div",{className:"content-value street-address"},t.address1)),l.a.createElement("div",{className:"content-row"},l.a.createElement("label",null," "),l.a.createElement("div",{className:"content-value"},t.suburb&&l.a.createElement("span",{className:"locality"},"".concat(t.suburb,", ")),l.a.createElement("span",{className:"region"},t.state))),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"split-row"},l.a.createElement("label",null,"Postcode"),l.a.createElement("div",{className:"content-value postal-code"},t.postcode)),l.a.createElement("div",{className:"split-row"},l.a.createElement("label",null,"Country"),l.a.createElement("div",{className:"content-value country-name"},t.country))))))},b=(a(17),function(e){return l.a.createElement("div",{className:"file-upload-container"},l.a.createElement("button",{className:"file-upload-button"},l.a.createElement("input",{name:"photo",type:"file",onChange:function(t){e.onFileSelected(window.URL.createObjectURL(t.target.files[0]))}}),e.label))});function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(){var e=Object(n.useState)({givenName:"",lastName:"",house:"",street:"",photo:""}),t=Object(m.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"hcard-builder"},l.a.createElement("div",{className:"hcard-builder-container"},l.a.createElement("div",{className:"form-container"},l.a.createElement("h1",null,"hCard Builder"),l.a.createElement("form",{onChange:function(e){"file"!==e.target.type&&c(f({},a,Object(o.a)({},e.target.name,e.target.value)))}},l.a.createElement(u,{label:"Personal details"}),l.a.createElement("div",{className:"form-row"},l.a.createElement(i,{label:"Given name",name:"givenName",type:"text"}),l.a.createElement(i,{label:"Surname",name:"lastName",type:"text"})),l.a.createElement("div",{className:"form-row"},l.a.createElement(i,{label:"Email",name:"email",type:"email"}),l.a.createElement(i,{label:"Phone",name:"phone",type:"tel"})),l.a.createElement(u,{label:"Address"}),l.a.createElement("div",{className:"form-row"},l.a.createElement(i,{label:"House name or #",name:"house",type:"text"}),l.a.createElement(i,{label:"Street",name:"street",type:"text"})),l.a.createElement("div",{className:"form-row"},l.a.createElement(i,{label:"Suburb",name:"suburb",type:"text"}),l.a.createElement(i,{label:"State",name:"state",type:"text"})),l.a.createElement("div",{className:"form-row"},l.a.createElement(i,{label:"Postcode",name:"postcode",type:"text"}),l.a.createElement(i,{label:"Country",name:"country",type:"text"})),l.a.createElement("div",{className:"form-row"},l.a.createElement(b,{onFileSelected:function(e){c(f({},a,{photo:e}))},label:"Upload Avatar"}),l.a.createElement("button",{type:"submit"},"Create hCard")))),l.a.createElement("div",{className:"preview-container"},l.a.createElement(E,{contact:function(e){return{name:"".concat(e.givenName," ").concat(e.lastName),email:e.email,phone:e.phone,address1:"".concat(e.house," ").concat(e.street),suburb:e.suburb,state:e.state,postcode:e.postcode,country:e.country,photo:e.photo}}(a)}))))},h=function(){return l.a.createElement(N,null)};r.a.render(l.a.createElement(h,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.cbdbd108.chunk.js.map