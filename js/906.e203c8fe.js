"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[906],{7531:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},r=[],i=a(1001),n={},o=(0,i.Z)(n,s,r,!1,null,null,null),c=o.exports},9906:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("form",{staticClass:"my-4"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[t._v(" 新增 ")])])])]),t.isLoading?e("Spinner"):e("table",{staticClass:"table"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Category Name")]),e("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])]),e("tbody",t._l(t.categories,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.id)+" ")]),e("td",{staticClass:"position-relative"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(a.name)+" ")]),e("input",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:a.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleCancel(a.id)}}},[t._v(" ✕ ")])]),e("td",{staticClass:"d-flex justify-content-between"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsEditing(a.id)}}},[t._v(" Edit ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateCategory({categoryId:a.id,name:a.name})}}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCategory(a.id)}}},[t._v(" Delete ")])])])})),0)])],1)},r=[],i=(a(1703),a(7531)),n=a(4711),o=a(72),c=a(6163),l={components:{AdminNav:i.Z,Spinner:o.Z},data(){return{categories:[],newCategoryName:"",isProcessing:!1,isLoading:!0}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const{data:t,statusText:e}=await n.Z.categories.get();if("OK"!==e)throw new Error(e);this.categories=t.categories.map((t=>({...t,isEditing:!1,nameCached:""}))),this.isLoading=!1}catch(t){this.isLoading=!1,c.F.fire({icon:"error",title:"無法取得餐廳類別資料，請稍後再試"}),console.log("error",t)}},async createCategory(){try{this.isProcessing=!0;const{data:t,statusText:e}=await n.Z.categories.create({name:this.newCategoryName});if("OK"!==e||"success"!==t.status)throw new Error(e);this.categories.push({id:t.categoryId,name:this.newCategoryName}),this.newCategoryName="",this.isProcessing=!1}catch(t){this.isProcessing=!1,c.F.fire({icon:"error",title:"無法新增餐廳類別，請稍後再試"}),console.log("error",t)}},async deleteCategory(t){try{const{data:e,statusText:a}=await n.Z.categories["delete"]({categoryId:t});if("OK"!==a||"success"!==e.status)throw new Error(a);this.categories=this.categories.filter((e=>e.id!==t))}catch(e){c.F.fire({icon:"error",title:"無法刪除餐廳類別，請稍後再試"}),console.log("error",e)}},toggleIsEditing(t){this.categories=this.categories.map((e=>e.id===t?{...e,isEditing:!e.isEditing,nameCached:e.name}:e))},async updateCategory({categoryId:t,name:e}){try{const{data:a,statusText:s}=await n.Z.categories.update({categoryId:t,name:e});if("OK"!==s||"success"!==a.status)throw new Error(s);this.toggleIsEditing(t)}catch(a){c.F.fire({icon:"error",title:"無法修改餐廳類別，請稍後再試"}),console.log("error",a)}},handleCancel(t){this.categories=this.categories.map((e=>e.id===t?{...e,name:e.nameCached}:e)),this.toggleIsEditing(t)}}},u=l,d=a(1001),g=(0,d.Z)(u,s,r,!1,null,"a701b0ba",null),m=g.exports},4711:function(t,e,a){var s=a(6163);e["Z"]={restaurants:{create({formData:t}){return s.l.post("/admin/restaurants",t)},get(){return s.l.get("/admin/restaurants")},getDetails({restaurantId:t}){return s.l.get(`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return s.l.put(`/admin/restaurants/${t}`,e)},delete({restaurantId:t}){return s.l["delete"](`/admin/restaurants/${t}`)}},categories:{create({name:t}){return s.l.post("/admin/categories",{name:t})},get(){return s.l.get("/admin/categories")},update({categoryId:t,name:e}){return s.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return s.l["delete"](`/admin/categories/${t}`)}},users:{get(){return s.l.get("/admin/users")},update({userId:t,isAdmin:e}){return s.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}}]);
//# sourceMappingURL=906.e203c8fe.js.map