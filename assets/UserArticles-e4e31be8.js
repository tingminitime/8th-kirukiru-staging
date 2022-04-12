var t=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,i,a)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,n=(t,n)=>{for(var l in n||(n={}))i.call(n,l)&&s(t,l,n[l]);if(e)for(var l of e(n))a.call(n,l)&&s(t,l,n[l]);return t};import{_ as l}from"./AlertModal-170392a2.js";import{_ as r,Y as o,Z as c,$ as d,a0 as g,E as u}from"./index-4a5ba290.js";import{o as h,c as m,d as p,aL as y,e as f,F as b,f as A,h as L,D as P,aJ as w,a as x,L as v,r as M,l as B,T as $,w as C,an as V,aN as k}from"./vendor-358810ac.js";/* empty css             *//* empty css                  */import{_ as D}from"./MyArticleItem-03aa3f70.js";const I={class:"flex relative gap-3 items-center mb-6"},S={ref:"isPushBar",class:"absolute -bottom-1 h-1 bg-myYellow transition-all scale-x-75"};var H=r({name:"PushSelect",emits:["is-push"],mounted(){this.isPushBarInit()},methods:{isPushBarInit(){this.$refs.isPushBar.style.width=this.$refs.isPushBtn.getBoundingClientRect().width+"px",this.$refs.isPushBar.style.left=this.$refs.isPushBtn.offsetLeft+"px"},isPushBarHandler(t,e){this.$emit("is-push",t),this.$refs.isPushBar.style.width=e.target.getBoundingClientRect().width+"px",this.$refs.isPushBar.style.left=e.target.offsetLeft+"px"}}},[["render",function(t,e,i,a,s,n){return h(),m("div",I,[p("button",{ref:"isPushBtn",type:"button",class:"py-1 px-2 min-w-[96px] font-bold text-myBrown rounded-lg md:hover:bg-white/40",onClick:e[0]||(e[0]=t=>n.isPushBarHandler(!0,t))}," 已發布 ",512),p("button",{ref:"noPushBtn",type:"button",class:"py-1 px-2 min-w-[96px] font-bold text-myBrown rounded-lg md:hover:bg-white/40",onClick:e[1]||(e[1]=t=>n.isPushBarHandler(!1,t))}," 草稿匣 ",512),p("div",S,null,512)])}]]);const j={class:"flex justify-center py-4"},K={key:0,class:"text-lg text-center text-myBrown/40"};const T={class:"flex justify-center py-4"},z={key:0,class:"text-lg text-center text-myBrown/40"};const E={name:"UserArticles",components:{Loading:v,AlertModal:l,MyKiruArticleList:r({name:"MyKiruArticleList",components:{PushSelect:H,MyArticleItem:D,ElPagination:y},props:{},emits:["is-loading"],data:()=>({isPush:!0,kiruArticleList:[],paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{isPush:{handler(t){this.getMyKiruArticleHandler(this.paginationVm.currentPage)},immediate:!0},"paginationVm.currentPage":{handler(t){this.getMyKiruArticleHandler(this.paginationVm.currentPage)}}},methods:{getMyKiruArticleHandler(t){this.isLoading=!0,this.$emit("is-loading",!0),o(this.isPush,{nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{t.data.success?(this.paginationVm.total=t.data.total,this.kiruArticleList=t.data.data):(this.$notify({group:"error",title:"切切文章取得失敗"}),this.kiruArticleList=[]),this.isLoading=!1,this.$emit("is-loading",!1)})).catch((t=>{}))}}},[["render",function(t,e,i,a,s,l){const r=H,o=D,c=y;return h(),m("div",null,[f(r,{onIsPush:e[0]||(e[0]=t=>s.isPush=t)}),p("ul",null,[(h(!0),m(b,null,A(s.kiruArticleList,(e=>(h(),L(o,P({key:e.artId},n(n({},e),t.$attrs),{"show-feature":!0,"show-edit":!0,"show-delete":!0,"edit-link":"EditKiru","title-link":"ArticleKiru"}),null,16)))),128))]),p("div",j,[f(c,{currentPage:s.paginationVm.currentPage,"onUpdate:currentPage":e[1]||(e[1]=t=>s.paginationVm.currentPage=t),style:w([s.paginationStyle]),layout:"prev, pager, next","page-size":s.paginationVm.pageSize,"pager-count":7,total:s.paginationVm.total,"hide-on-single-page":!0},null,8,["currentPage","style","page-size","total"])]),0!==s.kiruArticleList.length||s.isLoading?x("",!0):(h(),m("div",K," 沒有任何文章 "))])}]]),MyCommonArticleList:r({name:"MyCommonArticleList",components:{PushSelect:H,MyArticleItem:D,ElPagination:y},props:{},emits:["is-loading"],data:()=>({isPush:!0,commonArticleList:[],paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{isPush:{handler(t){this.getMyCommonArticleHandler(this.paginationVm.currentPage)},immediate:!0},"paginationVm.currentPage":{handler(t){this.getMyCommonArticleHandler(this.paginationVm.currentPage)}}},methods:{getMyCommonArticleHandler(t){this.isLoading=!0,this.$emit("is-loading",!0),c(this.isPush,{nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{t.data.success?(this.paginationVm.total=t.data.total,this.commonArticleList=t.data.data):(this.$notify({group:"error",title:"一般文章取得失敗"}),this.commonArticleList=[]),this.isLoading=!1,this.$emit("is-loading",!1)})).catch((t=>{}))}}},[["render",function(t,e,i,a,s,l){const r=H,o=D,c=y;return h(),m("div",null,[f(r,{onIsPush:e[0]||(e[0]=t=>s.isPush=t)}),p("ul",null,[(h(!0),m(b,null,A(s.commonArticleList,(e=>(h(),L(o,P({key:e.artId},n(n({},e),t.$attrs),{"show-feature":!0,"show-edit":!0,"show-delete":!0,"edit-link":"EditNormal","title-link":"ArticleCommon"}),null,16)))),128))]),p("div",T,[f(c,{currentPage:s.paginationVm.currentPage,"onUpdate:currentPage":e[1]||(e[1]=t=>s.paginationVm.currentPage=t),style:w([s.paginationStyle]),layout:"prev, pager, next","page-size":s.paginationVm.pageSize,"pager-count":7,total:s.paginationVm.total,"hide-on-single-page":!0},null,8,["currentPage","style","page-size","total"])]),0!==s.commonArticleList.length||s.isLoading?x("",!0):(h(),m("div",z," 沒有任何文章 "))])}]])},data:()=>({articleType:"MyKiruArticleList",alertInfo:null,deleteData:null,isLoading:!1}),mounted(){},methods:{onDeleteMyArticle(t){this.deleteData=t,this.alertInfo={titleText:"確定刪除此文章 ?",message:this.deleteData.articleTitle,showTitle:!0,showClose:!0,confirmMode:"nothing",messageClass:"text-lg font-bold text-myBrown md:text-xl line-clamp-2"},this.$store.commit("SHOW_ALERT")},deleteMyArticleHandler(){switch(this.isLoading=!0,this.articleType){case"MyKiruArticleList":g(this.deleteData.articleId).then((t=>{t.data.success?(this.$notify({group:"success",title:"已刪除文章"}),this.$refs.myArticleList.getMyKiruArticleHandler(this.$refs.myArticleList.paginationVm.currentPage)):(this.$notify({group:"error",title:"刪除失敗"}),this.isLoading=!1),this.deleteData=null})).catch((t=>{}));break;case"MyCommonArticleList":d(this.deleteData.articleId).then((t=>{t.data.success?(this.$notify({group:"success",title:"已刪除文章"}),this.$refs.myArticleList.getMyCommonArticleHandler(this.$refs.myArticleList.paginationVm.currentPage)):(this.$notify({group:"error",title:"刪除失敗"}),this.isLoading=!1),this.deleteData=null})).catch((t=>{}))}},cancelDelete(){this.deleteData=null}}},F={class:"w-full"},O=p("h2",{class:"mb-8 text-2xl font-bold text-myBrown"}," 文章總覽 ",-1),Y={class:"flex gap-3 items-center mb-6"},_={class:"relative min-h-[606px]"};var U=r(E,[["render",function(t,e,i,a,s,n){const r=u,o=M("Loading"),c=l;return h(),m("div",F,[O,p("div",Y,[p("button",{type:"button",class:B(["py-1 px-2 min-w-[144px] font-bold text-myBrown rounded-lg",["MyKiruArticleList"===s.articleType?"bg-myYellow":"bg-white md:hover:bg-myLightenYellow/60"]]),onClick:e[0]||(e[0]=t=>s.articleType="MyKiruArticleList")}," 切切文章 ",2),p("button",{type:"button",class:B(["py-1 px-2 min-w-[144px] font-bold text-myBrown rounded-lg",["MyCommonArticleList"===s.articleType?"bg-myYellow":"bg-white md:hover:bg-myLightenYellow/60"]]),onClick:e[1]||(e[1]=t=>s.articleType="MyCommonArticleList")}," 一般文章 ",2)]),p("div",_,[f($,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0"},{default:C((()=>[(h(),L(k,null,[(h(),L(V(s.articleType),{ref:"myArticleList",onIsLoading:e[2]||(e[2]=t=>s.isLoading=t),onDeleteArticle:n.onDeleteMyArticle},null,8,["onDeleteArticle"]))],1024))])),_:1}),f(o,{active:s.isLoading,"onUpdate:active":e[3]||(e[3]=t=>s.isLoading=t),"is-full-page":!1,"background-color":"#EDEDEB"},{default:C((()=>[f(r,{class:"la-2x",show:s.isLoading},null,8,["show"])])),_:1},8,["active"])]),(h(),L(c,P(s.alertInfo,{key:"kiru",onAlertConfirm:n.deleteMyArticleHandler,onAlertCancel:n.cancelDelete}),null,16,["onAlertConfirm","onAlertCancel"]))])}]]);export{U as default};
