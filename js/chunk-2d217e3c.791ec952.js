(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217e3c"],{c93c:function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"content"},[t._m(0),c("div",{staticClass:"content-body"},[c("div",{staticClass:"contacts"},[c("table",{staticClass:"contacts-table"},[c("thead",[c("tr",t._l(t.getTableHeaders,(function(e){return c("th",{key:e},[c("p",[t._v(t._s(t._f("headers")(e)))])])})),0)]),c("tbody",t._l(t.allContacts,(function(e,n){return c("tr",{key:e.id},[t._l(t.filterHeaders,(function(a,s){return c("td",{key:e.id+s},[c("router-link",{attrs:{to:"contacts/"+e.id}},[t._v(t._s("#"===a?n+1:e[a.toLowerCase()]))])],1)})),c("td",[e.removed?c("button",{staticClass:"btn btn-success",on:{click:function(c){return t.onAddClick(e.id)}}},[c("fa-icon",{attrs:{icon:["fa","plus-circle"]}}),t._v("Добавить ")],1):c("p",{staticClass:"contact-added"},[c("fa-icon",{attrs:{icon:["fa","check"]}}),t._v("Добавлен ")],1)]),c("td",[e.added?c("button",{staticClass:"btn btn-danger",on:{click:function(c){return t.onRemoveClick(e.id)}}},[c("fa-icon",{attrs:{icon:["fa","trash"]}}),t._v("Удалить ")],1):c("p",{staticClass:"contact-removed"},[c("fa-icon",{attrs:{icon:["fa","check"]}}),t._v("Удалён ")],1)])],2)})),0)])])]),c("ContentFooter")],1)},a=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"header"},[c("div",{staticClass:"header-head"},[c("div",{staticClass:"breadcrumbs"},[t._v("home / contacts")]),c("h1",{staticClass:"header-head__title"},[t._v("Книга контактов")])])])}],s=(c("4de4"),c("5530")),o=c("c1bb"),i=c("2f62"),r={name:"contacts",computed:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["getTableHeaders"])),{},{allContacts:function(){return this.$store.getters.allContacts},filterHeaders:function(){return this.getTableHeaders.filter((function(t){return"Added"!==t&&"Removed"!==t}))}}),methods:{routeTo:function(t){return"contacts/".concat(t)},onAddClick:function(t){this.$store.dispatch("addContact",t)},onRemoveClick:function(t){this.$store.dispatch("removeContact",t)}},mounted:function(){this.$store.dispatch("setNotification",{page:"contacts",bool:!1})},components:{ContentFooter:o["a"]}},d=r,l=c("2877"),u=Object(l["a"])(d,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d217e3c.791ec952.js.map