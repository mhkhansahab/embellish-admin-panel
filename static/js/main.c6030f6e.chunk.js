(this["webpackJsonpembellish-admin-panel"]=this["webpackJsonpembellish-admin-panel"]||[]).push([[0],{36:function(e,t,n){},42:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),s=(n(51),n(52),n(53),n(36),n(42),n(54),n.p+"static/media/logo-black.20a5b03a.png"),l=n(1);var o=function(){return Object(l.jsx)("div",{className:"whole-logo flex center-1 center-2",children:Object(l.jsx)("img",{src:s,alt:"Logo"})})};n(56);var d=function(e){return Object(l.jsxs)("div",{className:"whole-navigator flex center-2",children:[Object(l.jsx)("div",{className:"navigator-icon flex center-1 center-2",children:e.children}),Object(l.jsx)("div",{className:"navigator-text",children:e.text})]})},u=(n(57),n(10)),j=n(30),b=n.n(j),m=n(31),p=n.n(m),h=n(32),x=n.n(h);var O=function(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(u.b,{to:"/embellish-admin-panel/",className:"navlinks",children:Object(l.jsx)(d,{text:"Home",children:Object(l.jsx)(b.a,{style:{fill:"#000"}})})}),Object(l.jsx)(u.b,{to:"#",className:"navlinks",children:Object(l.jsx)(d,{text:"Analytics",children:Object(l.jsx)(p.a,{style:{fill:"#000"}})})}),Object(l.jsx)(u.b,{to:"/embellish-admin-panel/management/banner",className:"navlinks",children:Object(l.jsx)(d,{text:"Management",children:Object(l.jsx)(x.a,{style:{fill:"#000"}})})})]})};var f=function(){return Object(l.jsxs)("div",{className:"left-layout",children:[Object(l.jsx)("div",{className:"left-layout-logo",children:Object(l.jsx)(o,{})}),Object(l.jsx)(O,{})]})},v=n(6);n(64),n(65);var g=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"header flex center-2",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"awesome-text",children:e.upperText}),Object(l.jsx)("div",{className:"welcome-text",children:e.lowerText})]})})})},y=n(41),N=(n(66),function(e){return Object(l.jsx)("div",{className:"carousel-container-2",children:Object(l.jsx)(y.a,{fade:!0,children:e.banners.map((function(e){return Object(l.jsx)(y.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:e.link,alt:"Slide"})})}))})})}),C=n(9);var k=function(){var e=Object(C.c)((function(e){return e.banners}));return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(g,{upperText:"Hey Awesome,",lowerText:"Welcome Back..."}),Object(l.jsx)(N,{banners:e}),Object(l.jsxs)("div",{className:"date-container flex center-2",children:[Object(l.jsx)("div",{className:"day-block",children:"It's "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}),Object(l.jsx)("div",{className:"date-block",children:function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];return e.getDate()+" - "+t+" - "+e.getFullYear()}()})]})]})},w=n(25),E=(n(67),n(68),n(69),n(70),n.p+"static/media/attachment.948f6a96.svg"),_=(n(71),n.p+"static/media/delete.d54a3424.svg"),T=n.p+"static/media/edit.e1b8ce69.svg";var S=function(e){return Object(l.jsxs)("div",{className:"tile-btns-container",children:[Object(l.jsx)("span",{className:"tile-btn",onClick:e.editFunc,children:Object(l.jsx)("img",{src:T,alt:""})}),Object(l.jsx)("span",{className:"tile-btn",onClick:e.deleteFunc,children:Object(l.jsx)("img",{src:_,alt:""})})]})};var A=function(e){return Object(l.jsxs)("div",{className:"banner-tile flex center-2",children:[Object(l.jsx)("span",{className:"banner-image",children:Object(l.jsx)("img",{src:e.image,alt:""})}),Object(l.jsxs)("span",{className:"attachment-container flex center-2",children:[Object(l.jsx)("span",{className:"attachment-btn",children:Object(l.jsx)("img",{src:E,alt:""})}),Object(l.jsx)("span",{className:"attachment-text",children:e.link})]}),Object(l.jsx)("span",{children:Object(l.jsx)(S,{deleteFunc:e.deleteFunc,editFunc:function(){return e.modalController("edit",e.id,"banner")}})})]})},I=n(3),P=n(8),D=n.n(P),R=n(17),z="GET_ALL_BANNERS",B="ADD_BANNER",F="DELETE_BANNER",L="UPDATE_BANNER",M="GET_ALL_CATEGORIES",q="GET_ALL_PRODUCTS",U="ADD_PRODUCT",J="DELETE_PRODUCT",W="UPDATE_PRODUCT",G="MODAL_DATA_EDITOR",H="MODAL_DATA_CLEANER",K="EDIT_STATUS_CHANGER",Q=function(){return function(e){e({type:H,payload:[]})}},Y=function(e){return function(t){t({type:K,payload:e})}};var X={deleteBanner:function(e){return function(){var t=Object(R.a)(D.a.mark((function t(n,a){var c,r,i,s;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={headers:{"Content-Type":"application/json"},method:"DELETE"},t.next=4,fetch("https://internship-slick-api.herokuapp.com/api/banners?id="+e,c);case 4:return r=t.sent,t.next=7,r.json();case 7:t.sent,i=a().banners,s=i.filter((function(t){return t._id!==e})),n({type:F,payload:s}),t.next=16;break;case 13:throw t.prev=13,t.t0=t.catch(0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}},Z=Object(C.b)(null,X)((function(e){var t=Object(C.c)((function(e){return e.banners}));return Object(l.jsx)("div",{className:"banner-tiles",children:t?t.map((function(t){return Object(l.jsx)(A,{image:t.link,link:t.link,id:t._id,deleteFunc:function(){return n=t._id,void e.deleteBanner(n);var n},modalController:e.modalController},t._id)})):null})}));n(73),n(74);var V=function(e){return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{className:"product-card-img",children:Object(l.jsx)("img",{src:e.img})}),Object(l.jsxs)("div",{className:"product-card-detail",children:[Object(l.jsxs)("div",{className:"product-card-text",children:[Object(l.jsx)("b",{children:"Name"}),": ",e.name]}),Object(l.jsxs)("div",{className:"product-card-text",children:[Object(l.jsx)("b",{children:"Description"}),": ",e.description]}),Object(l.jsxs)("div",{className:"product-card-text",children:[Object(l.jsx)("b",{children:"Quantity"}),": ",e.quantity]}),Object(l.jsxs)("div",{className:"product-card-text",children:[Object(l.jsx)("b",{children:"Price"}),": ",e.price]}),Object(l.jsxs)("div",{className:"product-card-text",children:[Object(l.jsx)("b",{children:"Size"}),": ",e.sizes]}),Object(l.jsxs)("div",{className:"product-card-text",children:[Object(l.jsx)("b",{children:"Colors"}),": ",e.colors]}),Object(l.jsx)(S,{editFunc:e.productEditor,deleteFunc:e.productRemover})]})]})};var $={deleteProduct:function(e){return function(){var t=Object(R.a)(D.a.mark((function t(n,a){var c,r,i,s,l;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={id:e,username:"admin_user135",password:"admin_password_embellish"},t.prev=1,r={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(c)},t.next=5,fetch("https://embellish.herokuapp.com/admin/delete_product",r);case 5:return i=t.sent,t.next=8,i.json();case 8:"Product Removed Successfully"===t.sent.message&&(s=a().products,l=s.filter((function(t){return t._id!==e})),n({type:J,payload:l})),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(1),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},ee=Object(C.b)(null,$)((function(e){var t=Object(C.c)((function(e){return e.products}));return Object(l.jsx)("div",{className:"product-tiles",children:t.map((function(t){return Object(l.jsx)(V,{img:t.image,name:t.name,description:t.description,quantity:t.quantity,price:t.price,sizes:t.sizes.join(", "),colors:t.colors.join(", "),productRemover:function(){return n=t._id,void e.deleteProduct(n);var n},productEditor:function(){return n=t._id,void e.modalController("edit",n,"product");var n}},t._id)}))})}));var te=function(e){return Object(l.jsxs)("div",{className:"banner-container",children:[Object(l.jsxs)("div",{className:"management-nav flex center-2",children:[Object(l.jsxs)("div",{className:"flex center-2",children:[Object(l.jsx)(u.b,{to:"/embellish-admin-panel/management/banner",style:{textDecoration:"none"},children:Object(l.jsxs)("div",{className:"management-links",children:[Object(l.jsx)("div",{className:"management-links-text",style:e.isBanner?{color:"#6F8AE8"}:null,children:"Manage Banner"}),Object(l.jsx)("div",{className:"management-links-border",style:e.isBanner?{display:"flex"}:null})]})}),Object(l.jsx)(u.b,{to:"/embellish-admin-panel/management/product",style:{textDecoration:"none"},children:Object(l.jsxs)("div",{className:"management-links product",children:[Object(l.jsx)("div",{className:"management-links-text",style:e.isBanner?null:{color:"#6F8AE8"},children:"Manage Products"}),Object(l.jsx)("div",{className:"management-links-border",style:e.isBanner?null:{display:"flex"}})]})})]}),Object(l.jsx)("div",{className:"add-new-btn",onClick:function(){return e.modalController("add","","")},children:"+ Add New"})]}),Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{path:"/embellish-admin-panel/management/banner",children:Object(l.jsx)(Z,{modalController:e.modalController})}),Object(l.jsx)(v.a,{path:"/embellish-admin-panel/management/product",children:Object(l.jsx)(ee,{modalController:e.modalController})})]})]})},ne=n(14),ae=(n(75),n.p+"static/media/close.783cdb6e.svg"),ce=n.p+"static/media/coin.9ae88ecb.svg",re=n(19),ie=n.n(re),se=n(34),le=n.n(se);var oe={createBanner:function(e){return function(){var t=Object(R.a)(D.a.mark((function t(n){var a,c,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)},t.next=4,fetch("https://internship-slick-api.herokuapp.com/api/banners",a);case 4:return c=t.sent,t.next=7,c.json();case 7:r=t.sent,n({type:B,payload:r.data}),t.next=14;break;case 11:throw t.prev=11,t.t0=t.catch(0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},createProduct:function(e){return function(){var t=Object(R.a)(D.a.mark((function t(n){var a,c,r,i;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=Object(I.a)({},e)).username="admin_user135",a.password="admin_password_embellish",t.prev=3,c={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)},t.next=7,fetch("https://embellish.herokuapp.com/admin/add_product",c);case 7:return r=t.sent,t.next=10,r.json();case 10:"Product Added Successfully"===(i=t.sent).message&&n({type:U,payload:i.product}),t.next=17;break;case 14:throw t.prev=14,t.t0=t.catch(3),t.t0;case 17:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}()},modalCleaner:Q,updateBanner:function(e,t){return function(){var n=Object(R.a)(D.a.mark((function n(a,c){var r,i,s,l,o;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r={headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(e)},n.next=4,fetch("https://internship-slick-api.herokuapp.com/api/banners/"+t,r);case 4:return i=n.sent,n.next=7,i.json();case 7:s=n.sent,l=c().banners,o=l.map((function(e){return s.data._id===e._id?s.data:e})),a({type:L,payload:o}),n.next=16;break;case 13:throw n.prev=13,n.t0=n.catch(0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e,t){return n.apply(this,arguments)}}()},updateProduct:function(e,t){return function(){var n=Object(R.a)(D.a.mark((function n(a,c){var r,i,s,l;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=Object(I.a)({},e)).id=t,r.username="admin_user135",r.password="admin_password_embellish",n.prev=4,i={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)},n.next=8,fetch("https://embellish.herokuapp.com/admin/update_product",i);case 8:return s=n.sent,n.next=11,s.json();case 11:l=n.sent,console.log(l),n.next=18;break;case 15:throw n.prev=15,n.t0=n.catch(4),n.t0;case 18:case"end":return n.stop()}}),n,null,[[4,15]])})));return function(e,t){return n.apply(this,arguments)}}()},editStatusChanger:Y},de=Object(C.b)(null,oe)((function(e){var t=Object(a.useState)({link:""}),n=Object(w.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)({name:"",description:"",image:"",category:"abc",quantity:"",price:"",color:"",size:"",extraImage:"",sizes:[],colors:[],extraImages:[]}),s=Object(w.a)(i,2),o=s[0],d=s[1],u=Object(C.c)((function(e){return e.categories})),j=Object(C.c)((function(e){return e.modal})),b=j.isEdit,m=j.data;Object(a.useEffect)((function(){if(0!==m.length){var t=m[0];e.isBanner?r({link:t.link}):d({name:t.name,description:t.description,image:t.image,category:t.category,quantity:t.quantity,price:t.price,color:"",size:"",extraImage:"",sizes:t.sizes,colors:t.colors,extraImages:t.more_images})}}),[]);var p=function(e,t){d("name"===t?Object(I.a)(Object(I.a)({},o),{},{name:e.target.value}):"price"===t?Object(I.a)(Object(I.a)({},o),{},{price:e.target.value}):"link"===t?Object(I.a)(Object(I.a)({},o),{},{image:e.target.value}):"description"===t?Object(I.a)(Object(I.a)({},o),{},{description:e.target.value}):"quantity"===t?Object(I.a)(Object(I.a)({},o),{},{quantity:e.target.value}):"size"===t?Object(I.a)(Object(I.a)({},o),{},{size:e.target.value}):"color"===t?Object(I.a)(Object(I.a)({},o),{},{color:e.target.value}):"extraImage"===t?Object(I.a)(Object(I.a)({},o),{},{extraImage:e.target.value}):Object(I.a)(Object(I.a)({},o),{},{category:e.target.value}))},h=function(e,t){"Enter"===e.key&&("size"===t?""!==o.size&&d(Object(I.a)(Object(I.a)({},o),{},{sizes:Object(ne.a)(o.sizes).concat(o.size),size:""})):"color"===t?""!==o.color&&d(Object(I.a)(Object(I.a)({},o),{},{colors:Object(ne.a)(o.colors).concat(o.color),color:""})):"extraImage"===t&&""!==o.extraImage&&d(Object(I.a)(Object(I.a)({},o),{},{extraImages:Object(ne.a)(o.extraImages).concat(o.extraImage),extraImage:""})))};return Object(l.jsx)("div",{className:"modal flex center-1 center-2",children:Object(l.jsxs)("div",{className:"fields-container",children:[e.isBanner?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"modal-header flex",children:[Object(l.jsx)("div",{className:"modal-text",children:"Add New Banner"}),Object(l.jsx)("div",{className:"close-btn flex center-1 center-2",onClick:function(){e.modalController("add",""),e.editStatusChanger(!1)},children:Object(l.jsx)("img",{src:ae})})]}),Object(l.jsxs)("div",{className:"modal-fields",children:[Object(l.jsx)("div",{className:"input-label",children:"ENTER IMAGE URL"}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:c.link,onChange:function(e){return function(e){var t=Object(I.a)({},c);t.link=e.target.value,r(t)}(e)}})})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"modal-header flex",children:[Object(l.jsx)("div",{className:"modal-text",children:"Add New Product"}),Object(l.jsx)("div",{className:"close-btn flex center-1 center-2",onClick:function(){e.modalController("add",""),e.editStatusChanger(!1)},children:Object(l.jsx)("img",{src:ae})})]}),Object(l.jsxs)("div",{className:"modal-fields",children:[Object(l.jsx)("div",{className:"input-label",children:"PRODUCT NAME"}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:o.name,onChange:function(e){return p(e,"name")}})}),Object(l.jsx)("div",{className:"input-label",children:"DESCRIPTION"}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:o.description,onChange:function(e){return p(e,"description")}})}),Object(l.jsx)("div",{className:"input-label",children:"ENTER IMAGE URL"}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:o.image,onChange:function(e){return p(e,"link")}})}),Object(l.jsx)("div",{className:"input-label",children:"SELECT CATEGORY"}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsxs)("select",{type:"text",onChange:function(e){return p(e,"categories")},children:[Object(l.jsx)("option",{disabled:!0,value:"none",children:"Select a Category"}),u.map((function(e){return Object(l.jsx)("option",{value:e._id,children:e.name},e._id)}))]})}),Object(l.jsx)("div",{className:"input-label",children:"PRICE (Single Unit)"}),Object(l.jsxs)("div",{className:"input-field price-input",children:[Object(l.jsx)("img",{src:ce,alt:"Coin"}),Object(l.jsx)("input",{type:"number",placeholder:"Eg. 4500",value:o.price,onChange:function(e){return p(e,"price")}})]}),Object(l.jsx)("div",{className:"input-label",children:"Quantity"}),Object(l.jsxs)("div",{className:"input-field price-input",children:[Object(l.jsx)("img",{src:ce,alt:"Coin"}),Object(l.jsx)("input",{type:"number",placeholder:"Write Here..",value:o.quantity,onChange:function(e){return p(e,"quantity")}})]}),Object(l.jsx)("div",{className:"input-label",children:"ENTER COLORS"}),Object(l.jsx)("div",{className:"input-tile-container",children:o.colors.map((function(e,t){return Object(l.jsxs)("div",{className:"input-tile flex",children:[e,Object(l.jsx)("div",{className:"input-tile-icon",onClick:function(){return function(e){var t=Object(I.a)({},o),n=Object(ne.a)(t.colors);n.splice(e,1),t.colors=n,d(t)}(t)},children:Object(l.jsx)(le.a,{})})]},t)}))}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:o.color,onChange:function(e){return p(e,"color")},onKeyPress:function(e){return h(e,"color")}})}),Object(l.jsx)("div",{className:"input-label",children:"ENTER SIZES"}),Object(l.jsx)("div",{className:"input-tile-container",children:o.sizes.map((function(e,t){return Object(l.jsxs)("div",{className:"input-tile flex",children:[e,Object(l.jsx)("div",{className:"input-tile-icon",onClick:function(){return function(e){var t=Object(I.a)({},o),n=Object(ne.a)(t.sizes);n.splice(e,1),t.sizes=n,d(t)}(t)},children:Object(l.jsx)(le.a,{})})]},t)}))}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:o.size,onChange:function(e){return p(e,"size")},onKeyPress:function(e){return h(e,"size")}})}),Object(l.jsx)("div",{className:"input-label",children:"ENTER EXTRA IMAGES"}),Object(l.jsx)("div",{className:"input-tile-container",children:o.extraImages.map((function(e,t){return Object(l.jsxs)("div",{className:"input-tile flex",children:[Object(l.jsx)("div",{className:"image-input-tile",children:e}),Object(l.jsx)("div",{className:"input-tile-icon",onClick:function(){return function(e){var t=Object(I.a)({},o),n=Object(ne.a)(t.extraImages);n.splice(e,1),t.extraImages=n,d(t)}(t)},children:Object(l.jsx)(le.a,{})})]},t)}))}),Object(l.jsx)("div",{className:"input-field",children:Object(l.jsx)("input",{type:"text",placeholder:"Write here...",value:o.extraImage,onChange:function(e){return p(e,"extraImage")},onKeyPress:function(e){return h(e,"extraImage")}})})]})]}),e.isBanner?Object(l.jsx)("div",{className:"save-btn",onClick:b?function(){var t=Object(I.a)({},c);if(""!==t.link)try{e.updateBanner(t,m[0]._id),r({link:""}),e.modalController("add"),e.modalCleaner(),e.editStatusChanger(!1)}catch(n){ie.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}else ie.a.fire("No URL Added")}:function(){var t=Object(I.a)({},c);if(""!==t.link)try{e.createBanner(t),r({link:""}),e.modalController("add"),e.modalCleaner()}catch(n){ie.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}else ie.a.fire("No URL Added")},children:"Save"}):Object(l.jsx)("div",{className:"save-btn",onClick:b?function(){var t=Object(I.a)({},o);if(""!==t.name&&""!==t.image&&""!==t.price&&""!==t.description&&""!==t.quantity&&t.sizes.length>=0&&t.colors.length>=0)try{e.updateProduct(t,m[0]._id),d({name:"",description:"",image:"",category:"",quantity:"",price:"",color:"",size:"",extraImage:"",sizes:[],colors:[],extraImages:[]}),e.modalController("add"),e.modalCleaner(),e.editStatusChanger(!1)}catch(n){ie.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}else ie.a.fire("Enter All Fields")}:function(){var t=Object(I.a)({},o);if(""!==t.name&&""!==t.image&&""!==t.price&&""!==t.description&&""!==t.quantity&&t.sizes.length>=0&&t.colors.length>=0)try{e.createProduct(t),d({name:"",description:"",image:"",category:"",quantity:"",price:"",color:"",size:"",extraImage:"",sizes:[],colors:[],extraImages:[]}),e.modalController("add"),e.modalCleaner()}catch(n){ie.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}else ie.a.fire("Enter All Fields")},children:"Save"})]})})}));var ue={setProductModal:function(e){return function(t,n){var a=n().products.filter((function(t){return t._id===e}));t({type:G,payload:a})}},setBannerModal:function(e){return function(t,n){var a=n().banners.filter((function(t){return t._id===e}));t({type:G,payload:a})}},modalCleaner:Q,editStatusChanger:Y,getProducts:function(){return function(){var e=Object(R.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://embellish.herokuapp.com/product/all_products");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:q,payload:a.products}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}},je=Object(C.b)(null,ue)(Object(v.f)((function(e){var t=e.location.pathname.includes("banner"),n=Object(a.useState)(!1),c=Object(w.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){e.getProducts()}),[]);var s=function(t,n,a){"add"===t?(i(!r),e.modalCleaner()):"product"===a?(e.setProductModal(n),e.editStatusChanger(!0),i(!r)):(e.setBannerModal(n),e.editStatusChanger(!0),i(!r))};return Object(l.jsxs)("div",{className:"management",children:[Object(l.jsx)(g,{upperText:"",lowerText:"Management"}),Object(l.jsx)(te,{modalController:s,isBanner:t}),r?Object(l.jsx)(de,{modalController:s,isBanner:t}):null]})})));var be=function(){return Object(l.jsxs)("div",{className:"right-layout",children:[Object(l.jsx)("div",{className:"right-layout-logo",children:Object(l.jsx)(o,{})}),Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{path:"/embellish-admin-panel/management",children:Object(l.jsx)(je,{})}),Object(l.jsx)(v.a,{path:"/embellish-admin-panel/",children:Object(l.jsx)(k,{})})]})]})};n(86);var me=function(){return Object(l.jsxs)("div",{className:"mobile-nav",children:[Object(l.jsx)(u.b,{to:"/embellish-admin-panel/",children:Object(l.jsx)(b.a,{style:{fill:"#000"}})}),Object(l.jsx)(u.b,{to:"#",children:Object(l.jsx)(p.a,{style:{fill:"#000"}})}),Object(l.jsx)(u.b,{to:"/embellish-admin-panel/management/banner",children:Object(l.jsx)(x.a,{style:{fill:"#000"}})})]})};var pe=function(){return Object(l.jsxs)("div",{className:"layout-container",children:[Object(l.jsx)(f,{}),Object(l.jsx)(be,{}),Object(l.jsx)(me,{})]})};var he=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u.a,{children:Object(l.jsx)(pe,{})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Oe=n(45),fe=n(12),ve=[],ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case q:return a;case U:var c=[].concat(Object(ne.a)(e),[a]);return c;case J:case W:return a}return e},ye=[{link:"https://embellish-lukhnow.web.app/static/media/banner4.afd7f69b.jpg",_id:"1"},{link:"https://embellish-lukhnow.web.app/static/media/banner4.afd7f69b.jpg",_id:"2"},{link:"https://embellish-lukhnow.web.app/static/media/banner4.afd7f69b.jpg",_id:"3"}],Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case z:return a;case B:var c=[].concat(Object(ne.a)(e),[a]);return c;case F:case L:return a}return e},Ce=[],ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case M:return a}return e},we={isEdit:!1,data:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case G:case H:return Object(I.a)(Object(I.a)({},e),{},{data:a});case K:return Object(I.a)(Object(I.a)({},e),{},{isEdit:a})}return e},_e=n(24),Te=Object(fe.b)({products:ge,banners:Ne,categories:ke,modal:Ee}),Se=Object(Oe.a)({reducer:Te,middleware:function(e){return e().concat(_e.a)}});i.a.render(Object(l.jsx)(C.a,{store:Se,children:Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(he,{})})}),document.getElementById("root")),xe()}},[[88,1,2]]]);
//# sourceMappingURL=main.c6030f6e.chunk.js.map