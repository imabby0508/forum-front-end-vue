"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[955],{1981:function(t,e,r){r.d(e,{Z:function(){return m}});var a=function(){var t=this,e=t._self._c;return t.isLoading?e("Spinner"):e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"categoryId"}},[t._v("Category")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--請選擇--")]),t._l(t.categories,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v(" "+t._s(r.name)+" ")])}))],2)]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tel"}},[t._v("Tel")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("Address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("Description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?e("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),e("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(t._s(t.isProcessing?"處理中...":"送出"))])])},s=[],n=r(4711),i=r(72),o=r(6163),u={components:{Spinner:i.Z},props:{initialRestaurant:{type:Object,default:()=>({name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""})},isProcessing:{type:Boolean,default:!1}},data(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[],isLoading:!0}},watch:{initialRestaurant(t){this.restaurant={...this.restaurant,...t}}},created(){this.fetchCategories(),this.restaurant={...this.restaurant,...this.initialRestaurant}},methods:{async fetchCategories(){try{const{data:t}=await n.Z.categories.get();this.categories=t.categories,this.isLoading=!1}catch(t){this.isLoading=!1,o.F.fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"}),console.log("error",t)}},handleFileChange(t){const{files:e}=t.target;if(0===e.length)this.restaurant.image="";else{const t=window.URL.createObjectURL(e[0]);this.restaurant.image=t}},handleSubmit(t){if(!this.restaurant.name)return void o.F.fire({icon:"warning",title:"請填寫餐廳名稱"});if(!this.restaurant.categoryId)return void o.F.fire({icon:"warning",title:"請選擇餐廳類別"});const e=t.target,r=new FormData(e);this.$emit("after-submit",r)}}},l=u,d=r(1001),c=(0,d.Z)(l,a,s,!1,null,null,null),m=c.exports},955:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminRestaurantForm",{attrs:{"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},s=[],n=(r(1703),r(1981)),i=r(4711),o=r(6163),u={components:{AdminRestaurantForm:n.Z},data(){return{isProcessing:!1}},methods:{async handleAfterSubmit(t){try{this.isProcessing=!0;const{data:e}=await i.Z.restaurants.create({formData:t});if("error"===e.status)throw new Error(e.message);this.$router.push({name:"admin-restaurants"})}catch(e){this.isProcessing=!1,o.F.fire({icon:"error",title:"無法建立餐廳，請稍後再試"}),console.log("error",e)}}}},l=u,d=r(1001),c=(0,d.Z)(l,a,s,!1,null,null,null),m=c.exports},4711:function(t,e,r){var a=r(6163);e["Z"]={restaurants:{create({formData:t}){return a.l.post("/admin/restaurants",t)},get(){return a.l.get("/admin/restaurants")},getDetails({restaurantId:t}){return a.l.get(`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return a.l.put(`/admin/restaurants/${t}`,e)},delete({restaurantId:t}){return a.l["delete"](`/admin/restaurants/${t}`)}},categories:{create({name:t}){return a.l.post("/admin/categories",{name:t})},get(){return a.l.get("/admin/categories")},update({categoryId:t,name:e}){return a.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return a.l["delete"](`/admin/categories/${t}`)}},users:{get(){return a.l.get("/admin/users")},update({userId:t,isAdmin:e}){return a.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}}]);
//# sourceMappingURL=955.ca60c922.js.map