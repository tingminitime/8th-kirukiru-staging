<<<<<<< HEAD:assets/SearchCommon-7aec0046.js
/* empty css             *//* empty css                  */import{_ as a}from"./CommonSearchItem-48aae2f4.js";import{_ as t,I as e}from"./index-915c545f.js";import{aL as n,o,c as i,d as s,e as r,aM as l,w as c,aJ as m,F as d,f as u,h as g,D as p}from"./vendor-c1c40a3c.js";import"./index-a996c9dd.js";const h={class:"flex justify-center py-4"};var f=t({name:"SearchCommon",components:{ElPagination:n,CommonSearchItem:a},props:{keywords:{type:String,default:""},paginationCount:{type:Number,default:10}},emits:["is-loading","result-count"],data:()=>({commonSearchResult:[],paginationVm:{currentPage:1,pageSize:10,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{"paginationVm.currentPage":{handler(a){this.searchCommonHandler(a)}},paginationCount:{handler(){this.searchKiruHandler(this.paginationVm.currentPage)}}},mounted(){this.searchCommonHandler(this.paginationVm.currentPage)},methods:{searchCommonHandler(a){this.$emit("is-loading",!0),this.isLoading=!0,e({keywords:this.keywords,nowpage:a,showcount:this.paginationCount}).then((a=>{this.$emit("is-loading",!1),a.data.success?(this.paginationVm.total=a.data.total,this.commonSearchResult=a.data.data,this.$emit("result-count",this.paginationVm.total)):this.$notify({group:"error",title:"(搜尋頁面)搜尋一般文章失敗"}),this.isLoading=!1})).catch((a=>{}))}}},[["render",function(t,e,f,y,v,C){const P=a,S=n;return o(),i(d,null,[s("ul",null,[r(l,{mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:c((()=>[(o(!0),i(d,null,u(v.commonSearchResult,(a=>(o(),g(P,p(a,{key:a.artId,"is-show-author":!0}),null,16)))),128))])),_:1})]),s("div",h,[r(S,{currentPage:v.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=a=>v.paginationVm.currentPage=a),style:m([v.paginationStyle]),layout:"prev, pager, next","page-size":f.paginationCount,"pager-count":7,total:v.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])],64)}]]);export{f as default};
=======
/* empty css             *//* empty css                  */import{_ as a}from"./CommonSearchItem-400d5710.js";import{_ as t,I as e}from"./index-8468366b.js";import{aL as n,o,c as i,d as s,e as r,aM as l,w as c,aJ as m,F as d,f as u,h as g,D as p}from"./vendor-358810ac.js";import"./index-a49fd75c.js";const h={class:"flex justify-center py-4"};var f=t({name:"SearchCommon",components:{ElPagination:n,CommonSearchItem:a},props:{keywords:{type:String,default:""},paginationCount:{type:Number,default:10}},emits:["is-loading","result-count"],data:()=>({commonSearchResult:[],paginationVm:{currentPage:1,pageSize:10,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{"paginationVm.currentPage":{handler(a){this.searchCommonHandler(a)}},paginationCount:{handler(){this.searchKiruHandler(this.paginationVm.currentPage)}}},mounted(){this.searchCommonHandler(this.paginationVm.currentPage)},methods:{searchCommonHandler(a){this.$emit("is-loading",!0),this.isLoading=!0,e({keywords:this.keywords,nowpage:a,showcount:this.paginationCount}).then((a=>{this.$emit("is-loading",!1),a.data.success?(this.paginationVm.total=a.data.total,this.commonSearchResult=a.data.data,this.$emit("result-count",this.paginationVm.total)):this.$notify({group:"error",title:"(搜尋頁面)搜尋一般文章失敗"}),this.isLoading=!1})).catch((a=>{}))}}},[["render",function(t,e,f,y,b,v){const C=a,P=n;return o(),i(d,null,[s("ul",null,[r(l,{mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:c((()=>[(o(!0),i(d,null,u(b.commonSearchResult,(a=>(o(),g(C,p(a,{key:a.artId,"is-show-author":!0}),null,16)))),128))])),_:1})]),s("div",h,[r(P,{currentPage:b.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=a=>b.paginationVm.currentPage=a),style:m([b.paginationStyle]),layout:"prev, pager, next","page-size":f.paginationCount,"pager-count":7,total:b.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])],64)}]]);export{f as default};
>>>>>>> 390e0df42db3e68b93a9905f5d8d2655627f9608:assets/SearchCommon-c786cd8a.js
