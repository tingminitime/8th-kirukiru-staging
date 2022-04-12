var t=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(e,i,a)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,s=(t,s)=>{for(var l in s||(s={}))i.call(s,l)&&n(t,l,s[l]);if(e)for(var l of e(s))a.call(s,l)&&n(t,l,s[l]);return t};import{_ as l}from"./AlertModal-75d0f1af.js";import{_ as o,Y as r,Z as c,$ as d,a0 as g,E as u}from"./index-ac332303.js";import{o as h,c as m,a as p,d as y,F as f,aL as b,e as P,f as A,h as L,D as w,aJ as x,L as v,r as M,l as B,T as $,w as C,an as V,aN as k}from"./vendor-385d4c3c.js";/* empty css             *//* empty css                  */import{_ as D}from"./MyArticleItem-9b74e421.js";const I={class:"flex relative gap-3 items-center mb-6"},S={ref:"isPushBar",class:"absolute -bottom-1 h-1 bg-myYellow transition-all scale-x-75"};var H=o({name:"PushSelect",emits:["is-push"],mounted(){this.isPushBarInit()},methods:{isPushBarInit(){this.$refs.isPushBar.style.width=this.$refs.isPushBtn.getBoundingClientRect().width+"px",this.$refs.isPushBar.style.left=this.$refs.isPushBtn.offsetLeft+"px"},isPushBarHandler(t,e){this.$emit("is-push",t),this.$refs.isPushBar.style.width=e.target.getBoundingClientRect().width+"px",this.$refs.isPushBar.style.left=e.target.offsetLeft+"px"}}},[["render",function(t,e,i,a,n,s){return h(),m(f,null,[p(" 是否已發布 "),y("div",I,[y("button",{ref:"isPushBtn",type:"button",class:"py-1 px-2 min-w-[96px] font-bold text-myBrown rounded-lg md:hover:bg-white/40",onClick:e[0]||(e[0]=t=>s.isPushBarHandler(!0,t))}," 已發布 ",512),y("button",{ref:"noPushBtn",type:"button",class:"py-1 px-2 min-w-[96px] font-bold text-myBrown rounded-lg md:hover:bg-white/40",onClick:e[1]||(e[1]=t=>s.isPushBarHandler(!1,t))}," 草稿匣 ",512),y("div",S,null,512)])],2112)}]]);const j={class:"flex justify-center py-4"},K={key:0,class:"text-lg text-center text-myBrown/40"};const T={class:"flex justify-center py-4"},z={key:0,class:"text-lg text-center text-myBrown/40"};const E={name:"UserArticles",components:{Loading:v,AlertModal:l,MyKiruArticleList:o({name:"MyKiruArticleList",components:{PushSelect:H,MyArticleItem:D,ElPagination:b},props:{},emits:["is-loading"],data:()=>({isPush:!0,kiruArticleList:[],paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{isPush:{handler(t){this.getMyKiruArticleHandler(this.paginationVm.currentPage)},immediate:!0},"paginationVm.currentPage":{handler(t){this.getMyKiruArticleHandler(this.paginationVm.currentPage)}}},methods:{getMyKiruArticleHandler(t){this.isLoading=!0,this.$emit("is-loading",!0),r(this.isPush,{nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{t.data.success?(this.paginationVm.total=t.data.total,this.kiruArticleList=t.data.data):(this.$notify({group:"error",title:"切切文章取得失敗"}),this.kiruArticleList=[]),this.isLoading=!1,this.$emit("is-loading",!1)})).catch((t=>{}))}}},[["render",function(t,e,i,a,n,l){const o=H,r=D,c=b;return h(),m("div",null,[P(o,{onIsPush:e[0]||(e[0]=t=>n.isPush=t)}),y("ul",null,[(h(!0),m(f,null,A(n.kiruArticleList,(e=>(h(),L(r,w({key:e.artId},s(s({},e),t.$attrs),{"show-feature":!0,"show-edit":!0,"show-delete":!0,"edit-link":"EditKiru","title-link":"ArticleKiru"}),null,16)))),128))]),p(" Pagination "),y("div",j,[P(c,{currentPage:n.paginationVm.currentPage,"onUpdate:currentPage":e[1]||(e[1]=t=>n.paginationVm.currentPage=t),style:x([n.paginationStyle]),layout:"prev, pager, next","page-size":n.paginationVm.pageSize,"pager-count":7,total:n.paginationVm.total,"hide-on-single-page":!0},null,8,["currentPage","style","page-size","total"])]),p(" 若沒有文章 "),0!==n.kiruArticleList.length||n.isLoading?p("v-if",!0):(h(),m("div",K," 沒有任何文章 "))])}]]),MyCommonArticleList:o({name:"MyCommonArticleList",components:{PushSelect:H,MyArticleItem:D,ElPagination:b},props:{},emits:["is-loading"],data:()=>({isPush:!0,commonArticleList:[],paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{isPush:{handler(t){this.getMyCommonArticleHandler(this.paginationVm.currentPage)},immediate:!0},"paginationVm.currentPage":{handler(t){this.getMyCommonArticleHandler(this.paginationVm.currentPage)}}},methods:{getMyCommonArticleHandler(t){this.isLoading=!0,this.$emit("is-loading",!0),c(this.isPush,{nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{t.data.success?(this.paginationVm.total=t.data.total,this.commonArticleList=t.data.data):(this.$notify({group:"error",title:"一般文章取得失敗"}),this.commonArticleList=[]),this.isLoading=!1,this.$emit("is-loading",!1)})).catch((t=>{}))}}},[["render",function(t,e,i,a,n,l){const o=H,r=D,c=b;return h(),m("div",null,[P(o,{onIsPush:e[0]||(e[0]=t=>n.isPush=t)}),y("ul",null,[(h(!0),m(f,null,A(n.commonArticleList,(e=>(h(),L(r,w({key:e.artId},s(s({},e),t.$attrs),{"show-feature":!0,"show-edit":!0,"show-delete":!0,"edit-link":"EditNormal","title-link":"ArticleCommon"}),null,16)))),128))]),p(" Pagination "),y("div",T,[P(c,{currentPage:n.paginationVm.currentPage,"onUpdate:currentPage":e[1]||(e[1]=t=>n.paginationVm.currentPage=t),style:x([n.paginationStyle]),layout:"prev, pager, next","page-size":n.paginationVm.pageSize,"pager-count":7,total:n.paginationVm.total,"hide-on-single-page":!0},null,8,["currentPage","style","page-size","total"])]),p(" 若沒有文章 "),0!==n.commonArticleList.length||n.isLoading?p("v-if",!0):(h(),m("div",z," 沒有任何文章 "))])}]])},data:()=>({articleType:"MyKiruArticleList",alertInfo:null,deleteData:null,isLoading:!1}),mounted(){},methods:{onDeleteMyArticle(t){this.deleteData=t,this.alertInfo={titleText:"確定刪除此文章 ?",message:this.deleteData.articleTitle,showTitle:!0,showClose:!0,confirmMode:"nothing",messageClass:"text-lg font-bold text-myBrown md:text-xl line-clamp-2"},this.$store.commit("SHOW_ALERT")},deleteMyArticleHandler(){switch(this.isLoading=!0,this.articleType){case"MyKiruArticleList":g(this.deleteData.articleId).then((t=>{t.data.success?(this.$notify({group:"success",title:"已刪除文章"}),this.$refs.myArticleList.getMyKiruArticleHandler(this.$refs.myArticleList.paginationVm.currentPage)):(this.$notify({group:"error",title:"刪除失敗"}),this.isLoading=!1),this.deleteData=null})).catch((t=>{}));break;case"MyCommonArticleList":d(this.deleteData.articleId).then((t=>{t.data.success?(this.$notify({group:"success",title:"已刪除文章"}),this.$refs.myArticleList.getMyCommonArticleHandler(this.$refs.myArticleList.paginationVm.currentPage)):(this.$notify({group:"error",title:"刪除失敗"}),this.isLoading=!1),this.deleteData=null})).catch((t=>{}))}},cancelDelete(){this.deleteData=null}}},F={class:"w-full"},O=y("h2",{class:"mb-8 text-2xl font-bold text-myBrown"}," 文章總覽 ",-1),Y={class:"flex gap-3 items-center mb-6"},_={class:"relative min-h-[606px]"};var U=o(E,[["render",function(t,e,i,a,n,s){const o=u,r=M("Loading"),c=l;return h(),m("div",F,[O,p(" 文章分類 "),y("div",Y,[y("button",{type:"button",class:B(["py-1 px-2 min-w-[144px] font-bold text-myBrown rounded-lg",["MyKiruArticleList"===n.articleType?"bg-myYellow":"bg-white md:hover:bg-myLightenYellow/60"]]),onClick:e[0]||(e[0]=t=>n.articleType="MyKiruArticleList")}," 切切文章 ",2),y("button",{type:"button",class:B(["py-1 px-2 min-w-[144px] font-bold text-myBrown rounded-lg",["MyCommonArticleList"===n.articleType?"bg-myYellow":"bg-white md:hover:bg-myLightenYellow/60"]]),onClick:e[1]||(e[1]=t=>n.articleType="MyCommonArticleList")}," 一般文章 ",2)]),p(" 是否已發布 + 文章列表 "),y("div",_,[P($,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0"},{default:C((()=>[(h(),L(k,null,[(h(),L(V(n.articleType),{ref:"myArticleList",onIsLoading:e[2]||(e[2]=t=>n.isLoading=t),onDeleteArticle:s.onDeleteMyArticle},null,8,["onDeleteArticle"]))],1024))])),_:1}),p(" 局部 Loading "),P(r,{active:n.isLoading,"onUpdate:active":e[3]||(e[3]=t=>n.isLoading=t),"is-full-page":!1,"background-color":"#EDEDEB"},{default:C((()=>[P(o,{class:"la-2x",show:n.isLoading},null,8,["show"])])),_:1},8,["active"])]),p(" 提示Modal "),(h(),L(c,w(n.alertInfo,{key:"kiru",onAlertConfirm:s.deleteMyArticleHandler,onAlertCancel:s.cancelDelete}),null,16,["onAlertConfirm","onAlertCancel"]))])}]]);export{U as default};
