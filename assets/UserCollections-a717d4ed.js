var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(e,a,i)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,s=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&l(t,a,e[a]);if(i)for(var a of i(e))n.call(e,a)&&l(t,a,e[a]);return t};import{L as r,aL as c,r as g,o as p,c as d,d as u,F as m,f as h,h as y,D as f,e as C,aJ as b,a as w,w as L,ap as v,aq as x,ar as P,m as A,g as M,l as S,T as V,an as O,aN as k}from"./vendor-c1c40a3c.js";import{a1 as E,a2 as j,_ as I,E as D,a3 as H,a4 as T,a5 as _}from"./index-915c545f.js";/* empty css             *//* empty css                  */import{_ as z}from"./MyArticleItem-a3ca0e21.js";const B={class:"relative min-h-[606px]"},K={class:"flex justify-center py-4"},$={key:0,class:"text-lg text-center text-myBrown/40"};const F={class:"relative min-h-[606px]"},U={class:"flex justify-center py-4"},N={key:0,class:"text-lg text-center text-myBrown/40"};const Y={name:"UserCollections",components:{Switch:v,SwitchGroup:x,SwitchLabel:P,MyCollectKiruArticles:I({name:"MyCollectKiruArticles",components:{Loading:r,MyArticleItem:z,ElPagination:c},props:{},emits:["is-loading"],data:()=>({kiruArticleList:[],paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{"paginationVm.currentPage":{handler(t){this.getKiruCollectionsHandler(this.paginationVm.currentPage)},immediate:!0}},methods:{getKiruCollectionsHandler(t){this.isLoading=!0,E({nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{t.data.success?(this.paginationVm.total=t.data.total,this.kiruArticleList=t.data.data):this.$notify({group:"error",title:"切切文章取得失敗"}),this.isLoading=!1})).catch((t=>{}))},deleteMyCollectionHandler(t){this.isLoading=!0,j(t.articleId).then((t=>{t.data.success?(this.$notify({group:"normal",title:"已取消收藏"}),this.getKiruCollectionsHandler(this.paginationVm.currentPage)):(this.$notify({group:"error",title:"取消收藏失敗"}),this.isLoading=!1)})).catch((t=>{}))}}},[["render",function(t,e,a,i,o,n){const l=z,r=c,v=D,x=g("Loading");return p(),d("div",B,[u("ul",null,[(p(!0),d(m,null,h(o.kiruArticleList,(e=>(p(),y(l,f({key:e.artId},s(s({},e),t.$attrs),{"show-feature":!0,"show-edit":!1,"show-delete":!0,"show-author":!0,"title-link":"ArticleKiru",onDeleteArticle:n.deleteMyCollectionHandler}),null,16,["onDeleteArticle"])))),128))]),u("div",K,[C(r,{currentPage:o.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=t=>o.paginationVm.currentPage=t),style:b([o.paginationStyle]),layout:"prev, pager, next","page-size":o.paginationVm.pageSize,"pager-count":7,total:o.paginationVm.total,"hide-on-single-page":!0},null,8,["currentPage","style","page-size","total"])]),0!==o.kiruArticleList.length||o.isLoading?w("",!0):(p(),d("div",$," 沒有任何文章 ")),C(x,{active:o.isLoading,"onUpdate:active":e[1]||(e[1]=t=>o.isLoading=t),"is-full-page":!1,"background-color":"#EDEDEB"},{default:L((()=>[C(v,{class:"la-2x",show:o.isLoading},null,8,["show"])])),_:1},8,["active"])])}]]),MyCollectCommonArticles:I({name:"MyCollectKiruArticles",components:{Loading:r,MyArticleItem:z,ElPagination:c},props:{},emits:["is-loading"],data:()=>({commonArticleList:[],paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{"paginationVm.currentPage":{handler(t){this.getCommonCollectionsHandler(this.paginationVm.currentPage)},immediate:!0}},methods:{getCommonCollectionsHandler(t){this.isLoading=!0,H({nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{t.data.success?(this.paginationVm.total=t.data.total,this.commonArticleList=t.data.data):this.$notify({group:"error",title:"一般文章取得失敗"}),this.isLoading=!1})).catch((t=>{}))},deleteMyCollectionHandler(t){this.isLoading=!0,T(t.articleId).then((t=>{t.data.success?(this.$notify({group:"normal",title:"已取消收藏"}),this.getCommonCollectionsHandler(this.paginationVm.currentPage)):(this.$notify({group:"error",title:"取消收藏失敗"}),this.isLoading=!1)})).catch((t=>{}))}}},[["render",function(t,e,a,i,o,n){const l=z,r=c,v=D,x=g("Loading");return p(),d("div",F,[u("ul",null,[(p(!0),d(m,null,h(o.commonArticleList,(e=>(p(),y(l,f({key:e.artId},s(s({},e),t.$attrs),{"show-feature":!0,"show-edit":!1,"show-delete":!0,"show-author":!0,"title-link":"ArticleCommon",onDeleteArticle:n.deleteMyCollectionHandler}),null,16,["onDeleteArticle"])))),128))]),u("div",U,[C(r,{currentPage:o.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=t=>o.paginationVm.currentPage=t),style:b([o.paginationStyle]),layout:"prev, pager, next","page-size":o.paginationVm.pageSize,"pager-count":7,total:o.paginationVm.total,"hide-on-single-page":!0},null,8,["currentPage","style","page-size","total"])]),0!==o.commonArticleList.length||o.isLoading?w("",!0):(p(),d("div",N," 沒有任何文章 ")),C(x,{active:o.isLoading,"onUpdate:active":e[1]||(e[1]=t=>o.isLoading=t),"is-full-page":!1,"background-color":"#EDEDEB"},{default:L((()=>[C(v,{class:"la-2x",show:o.isLoading},null,8,["show"])])),_:1},8,["active"])])}]])},data:()=>({articleType:"MyCollectKiruArticles",isInit:!1,openMyCollections:!1}),computed:s({},A(["userInfo"])),mounted(){this.openMyCollections=this.userInfo.isCollect},methods:(G=s({},M(["UPDATE_OPEN_COLLECTIONS"])),q={onChangeOpenMyCollections(){this.openMyCollections=!this.openMyCollections,this.changeMyCollectionsOpenHandler(this.openMyCollections)},changeMyCollectionsOpenHandler(t){_(t).then((e=>{e.data.success?(this.$notify({group:"normal",title:"修改成功"}),this.UPDATE_OPEN_COLLECTIONS(t)):this.$notify({group:"error",title:"修改失敗"})})).catch((t=>{}))}},e(G,a(q)))};var G,q;const J={class:"w-full"},Q=u("h2",{class:"mb-8 text-2xl font-bold text-myBrown"}," 收藏總覽 ",-1),R={class:"flex gap-3 mb-8"},W=u("span",{class:"font-bold text-myBrown"}," 是否公開你的文章收藏 ? ",-1),X={class:"flex items-center"},Z=u("span",{class:"sr-only"},"您是否同意切切規範",-1),tt={class:"flex gap-3 items-center mb-6"};var et=I(Y,[["render",function(t,e,a,i,o,n){const l=g("Switch"),s=g("SwitchGroup");return p(),d("div",J,[Q,u("div",R,[W,C(s,null,{default:L((()=>[u("div",X,[C(l,{value:o.openMyCollections,class:S([o.openMyCollections?"bg-myYellow":"bg-white","mySwitchBar"]),onClick:n.onChangeOpenMyCollections},{default:L((()=>[Z,u("span",{class:S([o.openMyCollections?"translate-x-8":"translate-x-0","mySwitchButton"])},null,2)])),_:1},8,["value","class","onClick"])])])),_:1})]),u("div",tt,[u("button",{type:"button",class:S(["py-1 px-2 min-w-[144px] font-bold text-myBrown rounded-lg",["MyCollectKiruArticles"===o.articleType?"bg-myYellow":"bg-white md:hover:bg-myLightenYellow/60"]]),onClick:e[0]||(e[0]=t=>o.articleType="MyCollectKiruArticles")}," 切切文章 ",2),u("button",{type:"button",class:S(["py-1 px-2 min-w-[144px] font-bold text-myBrown rounded-lg",["MyCollectCommonArticles"===o.articleType?"bg-myYellow":"bg-white md:hover:bg-myLightenYellow/60"]]),onClick:e[1]||(e[1]=t=>o.articleType="MyCollectCommonArticles")}," 一般文章 ",2)]),u("div",null,[C(V,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0"},{default:L((()=>[(p(),y(k,null,[(p(),y(O(o.articleType)))],1024))])),_:1})])])}]]);export{et as default};
