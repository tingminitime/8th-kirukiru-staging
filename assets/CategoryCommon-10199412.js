/* empty css             *//* empty css                  */import{_ as a}from"./CommonSearchItem-19396afa.js";import{_ as t,F as e}from"./index-abe9143d.js";import{aL as n,o,c as i,a as s,e as r,aM as l,w as c,d as m,aJ as g,F as d,f as u,h as p,D as h}from"./vendor-385d4c3c.js";import"./index-7207623a.js";const y={name:"CategoryCommon",components:{ElPagination:n,CommonSearchItem:a},props:{categoryId:{type:Number,default:1},paginationCount:{type:Number,default:10}},emits:["is-loading","result-count"],data:()=>({commonSearchResult:[],paginationVm:{currentPage:1,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{categoryId:{handler(){this.searchCommonHandler(this.paginationVm.currentPage)}},"paginationVm.currentPage":{handler(a){this.searchCommonHandler(a)}},paginationCount:{handler(){this.searchCommonHandler(this.paginationVm.currentPage)}}},mounted(){this.searchCommonHandler(this.paginationVm.currentPage)},methods:{searchCommonHandler(a){this.$emit("is-loading",!0),this.isLoading=!0,e({articlecategoryId:this.categoryId,nowpage:a,showcount:this.paginationCount}).then((a=>{this.$emit("is-loading",!1),a.data.success?(this.paginationVm.total=a.data.total,this.commonSearchResult=a.data.data,this.$emit("result-count",this.paginationVm.total)):this.$notify({group:"error",title:"(分類頁面)取得一般文章失敗"}),this.isLoading=!1})).catch((a=>{}))}}},f={key:0},C={key:1},b=[m("span",{class:"block text-center text-myBrown/20"},"目前分類無文章",-1)],P={class:"flex justify-center py-4"};var v=t(y,[["render",function(t,e,y,v,x,V){const S=a,j=n;return o(),i(d,null,[s(" 分類的切切列表 "),0!==x.commonSearchResult.length?(o(),i("ul",f,[r(l,{mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:c((()=>[(o(!0),i(d,null,u(x.commonSearchResult,(a=>(o(),p(S,h(a,{key:a.artId,"is-show-author":!0}),null,16)))),128))])),_:1})])):(o(),i("div",C,b)),s(" Pagination "),m("div",P,[r(j,{currentPage:x.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=a=>x.paginationVm.currentPage=a),style:g([x.paginationStyle]),layout:"prev, pager, next","page-size":y.paginationCount,"pager-count":7,total:x.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])],64)}]]);export{v as default};
