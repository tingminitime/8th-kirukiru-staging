/* empty css             *//* empty css                  */import{_ as a}from"./KiruSearchItem-7b4a0d02.js";import{_ as t,G as e}from"./index-abe9143d.js";import{aL as n,o as i,c as s,a as r,e as o,aM as l,w as c,d as u,aJ as d,F as g,f as p,h,D as m}from"./vendor-385d4c3c.js";import"./index-7207623a.js";const y={name:"SearchKiru",components:{ElPagination:n,KiruSearchItem:a},props:{keywords:{type:String,default:""},paginationCount:{type:Number,default:10}},emits:["is-loading","result-count"],data:()=>({kiruSearchResult:[],paginationVm:{currentPage:1,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{"paginationVm.currentPage":{handler(a){this.searchKiruHandler(a)}},paginationCount:{handler(){this.searchKiruHandler(this.paginationVm.currentPage)}}},mounted(){this.searchKiruHandler(this.paginationVm.currentPage)},methods:{searchKiruHandler(a){this.$emit("is-loading",!0),this.isLoading=!0,e({keywords:this.keywords,nowpage:a,showcount:this.paginationCount}).then((a=>{this.$emit("is-loading",!1),a.data.success?(this.paginationVm.total=a.data.total,this.kiruSearchResult=a.data.data,this.$emit("result-count",this.paginationVm.total)):this.$notify({group:"error",title:"(搜尋頁面)搜尋切切失敗"}),this.isLoading=!1})).catch((a=>{}))}}},f={key:0},b={key:1},k=[u("span",{class:"block text-center text-myBrown/20"},"找不到搜尋的相關文章",-1)],v={class:"flex justify-center py-4"};var x=t(y,[["render",function(t,e,y,x,P,S){const w=a,V=n;return i(),s(g,null,[r(" 搜尋的切切列表 "),0!==P.kiruSearchResult.length?(i(),s("ul",f,[o(l,{mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:c((()=>[(i(!0),s(g,null,p(P.kiruSearchResult,(a=>(i(),h(w,m(a,{key:a.artId,"is-show-author":!0}),null,16)))),128))])),_:1})])):(i(),s("div",b,k)),r(" Pagination "),u("div",v,[o(V,{currentPage:P.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=a=>P.paginationVm.currentPage=a),style:d([P.paginationStyle]),layout:"prev, pager, next","page-size":y.paginationCount,"pager-count":7,total:P.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])],64)}]]);export{x as default};
