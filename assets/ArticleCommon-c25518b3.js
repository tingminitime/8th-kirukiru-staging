var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e},n=(e,s)=>t(e,a(s));/* empty css             */import{_ as c,a as d,b as u,c as m,u as g}from"./user-origin-8ef5eae5.js";import{_ as h}from"./DynamicTextarea-61e66e76.js";import{_ as f}from"./CommonCard-9f6f55f9.js";import{m as p,C as y,K as b,r as v,ai as I,aI as w,o as x,c as M,a as S,e as A,D as k,E as V,aw as L,d as D,F as j,f as C,s as O,w as P,t as R,h as H,x as B}from"./vendor-385d4c3c.js";import{_ as N,x as $,q as E,y as T,z as _,A as F,B as U,C as K,D as z}from"./index-e1de3ee5.js";import"./AddLove-d9f4dc9e.js";import"./tippy.esm-7d0a23a6.js";import"./index-fa9315e1.js";const q={name:"ArticleCommon",components:{KiruAuthor:c,KiruInfo:d,CommonCard:f,KiruReply:u,SubscribeView:m,DynamicTextarea:h},beforeRouteUpdate(e,t){e.params.articleId!==t.params.articleId&&this.$store.commit("SHOW_OVERLAY_LOADING"),this.getArticleInfo(this.articleId)},props:{articleId:{type:[String,Number],default:""},loveCount:{type:[String,Number],default:0},isAddLove:{type:Boolean,default:!1},isCollect:{type:Boolean,default:!1}},emits:["author-info","add-love","add-collection","is-add-love"],data:()=>({articleVm:{},authorInfo:{},artArtlog:"",relatedArticleVm:{nowpage:1,showcount:3},relatedArticle:[],userMessageVm:"",messagePagination:{nowpage:1,showcount:9999},messageSettings:{pageSize:5,currentPage:1,loadCount:5,total:0,topNewDate:!0},articleMessage:[],sortMessage:[],messageTotal:0,userDefaultAvatar:g,isArticleVmLoading:!1,checkSubResult:!1,isSendingMessage:!1}),computed:n(o(o({},p(["userInfo","userAddLoveList","userKiruCollections","userSubscribeList","checkUserSubscribeStatus"])),y(["userSignInStatus"])),{loadMessage(){const e=this.messageSettings;let t=[];t=e.topNewDate?[...this.articleMessage].sort(((e,t)=>b(t.messageInitDate).format("x")-b(e.messageInitDate).format("x"))):[...this.articleMessage].sort(((e,t)=>b(e.messageInitDate).format("x")-b(t.messageInitDate).format("x")));const a=(e.currentPage-1)*e.loadCount;return t.slice(0,e.pageSize+a)},showLoadMessageBtn(){return this.articleMessage.length>this.messageSettings.pageSize&&this.loadMessage.length<this.articleMessage.length},articleAuthor(){const{author:e,authorPic:t,username:a}=this.articleVm;return{author:e,authorPic:t,username:a}},articleInfo(){const{title:e,introduction:t,articlecategoryId:a,artInitDate:s}=this.articleVm;return{title:e,introduction:t,articlecategoryId:a,artInitDate:s}}}),watch:{"articleVm.articlecategoryId":{handler(e){e&&this.getRelatedArticle(e)}},userSubscribeList:{handler(){this.checkSubResult=this.checkSub(this.articleVm.username)},deep:!0}},mounted(){this.getArticleInfo(this.articleId)},methods:{checkSub(e){const t=this.userSubscribeList.some((t=>t.Author===e)),a=this.userInfo.Username===e;return t||a},async getArticleInfo(e){let t=!0;if(await $(e).then((e=>{var a;if(e.data.success){if(this.checkSub(e.data.data.username)&&(this.checkSubResult=!0),!e.data.data.isPush&&e.data.data.username!==(null==(a=this.userInfo)?void 0:a.Username))return this.$router.replace({name:"NotFound",query:{message:"此文章尚未發布"}}),void(t=!1);this.articleVm=e.data.data,this.isArticleVmLoading=!0}else this.$router.replace({name:"NotFound",query:{message:e.data.message||"查無此文章"}})})).catch((e=>{})),!t)return!1;await E(this.articleVm.username).then((e=>{e.data.success?(this.authorInfo=e.data.data,this.$emit("author-info",n(o({},this.authorInfo),{loveCount:this.articleVm.lovecount,isAddLove:this.isAddLove})),this.checkAddLoveStatus()):this.$notify({group:"error",title:"作者資訊取得失敗"})})),await T(this.articleVm.articlecategoryId).then((e=>{this.artArtlog=e.data.Name})).catch((e=>{}));const a=o({artId:this.articleId},this.messagePagination);await _(a).then((e=>{e.data.success?(this.articleMessage=e.data.data,this.messageTotal=e.data.total||this.articleMessage.length):this.articleMessage=[]})).catch((e=>{})),this.$store.commit("HIDE_OVERLAY_LOADING")},getRelatedArticle(e){F(o({articlecategoryId:e},this.relatedArticleVm)).then((e=>{if(e.data.success){const t=e.data.data.filter((e=>Number(this.articleId)!==e.artId));this.relatedArticle=t}else this.$notify({group:"error",title:"相關文章資料取得失敗"})})).catch((e=>{}))},checkAddLoveStatus(){-1!==this.userAddLoveList.findIndex((e=>e.articleId===this.articleId))&&this.$emit("is-add-love",!0)},addLoveHandler(e){this.$emit("add-love",e)},addCollectionHandler(){this.$emit("add-collection")},async sendMessageHandler(){if(""===this.userMessageVm||this.isSendingMessage)return;this.isSendingMessage=!0;const e={artId:this.articleId,Main:this.userMessageVm};await U(e).then((e=>{this.userMessageVm="",this.isSendingMessage=!1})).catch((e=>{this.isSendingMessage=!1}));const t=o({artId:this.articleId},this.messagePagination);await _(t).then((e=>{if(e.data.success){const t=e.data.data;this.updateMessage(t),this.messageTotal=e.data.total||this.articleMessage.length}else this.$notify({group:"error",title:"留言內容取得失敗"})})).catch((e=>{}))},updateMessage(e){this.articleMessage=e},async replyHandler(e){try{await K(e).then((e=>{})).catch((e=>{}));const t=o({artId:this.articleId},this.messagePagination),a=await z(e.messageId),s=await _(t);if(a.data.success)if(s.data.success){this.updateMessage(s.data.data);const t=this.articleMessage.findIndex((t=>t.messageId===e.messageId)),i=this.articleMessage[t].reMessageData.map((e=>e.reMessageId)),r=a.data.data;r.filter((e=>-1===i.indexOf(e.reMessageId))).forEach((e=>{this.articleMessage[t].reMessageData.push(e)}))}else this.$notify({group:"error",title:"留言內容取得失敗"});else this.$notify({group:"error",title:"回覆內容取得失敗"})}catch(t){}}}},Y=D("div",{class:"px-4 mb-8"},[D("div",{class:"border-b border-black/10"})],-1),G={key:0,class:"mx-auto mb-8 max-w-[80%]"},W={key:1,class:"px-4 mb-32 w-full"},J=["innerHTML"],Q=D("div",{class:"flex gap-12 justify-between mb-4"},[D("div",{class:"py-2"},[D("h2",{class:"text-2xl font-bold text-myBrown"}," 相關文章 ")])],-1),X={class:"px-4 mb-32 md:px-0"},Z={key:0,class:"grid grid-cols-2 grid-flow-row gap-6 md:grid-cols-3"},ee={key:1,class:"py-2"},te=[D("p",{class:"text-center text-myBrown/60"}," 沒有相關的文章 ",-1)],ae={key:2,"element-loading-background":"rgba(0, 0, 0, 0.5)","element-loading-text":"正在送出留言...",class:"flex overflow-hidden gap-8 justify-between py-4 px-6 mb-12 rounded-lg"},se={class:"overflow-hidden w-16 h-16 rounded-full"},ie={alt:"",class:"object-cover w-full h-full scale-[102%] load"},re={class:"flex flex-col grow gap-3 justify-between items-end md:flex-row"},le=[D("span",{class:"inline-block text-lg md:-translate-y-1 material-icons"},"reply",-1),D("span",{class:"text-sm whitespace-nowrap md:-translate-y-1"},"送出",-1)],oe={key:3,class:"mb-12"},ne={class:"flex justify-center items-center py-6 bg-myYellow/20"},ce=B(" 登入後留言 "),de={key:4,id:"article-replies",class:"mb-16"},ue={class:"flex justify-between px-6"},me={class:"text-black/60"},ge={key:0},he={key:1,class:"px-6"};var fe=N(q,[["render",function(e,t,a,s,i,r){var l;const o=c,n=d,g=m,p=f,y=h,b=v("router-link"),B=u,N=I("src"),$=w;return x(),M(j,null,[S(" 文章頂部作者資訊 "),A(o,k(r.articleAuthor,{"love-count":a.loveCount,"is-add-love":a.isAddLove,"replies-count":i.messageTotal,"is-collect":a.isCollect,"article-type":"common",onAddLove:r.addLoveHandler,onAddCollection:r.addCollectionHandler}),null,16,["love-count","is-add-love","replies-count","is-collect","onAddLove","onAddCollection"]),S(" 文章頂部資訊 "),A(n,k({class:"p-4 w-full"},r.articleInfo,{"art-artlog":i.artArtlog,"kiru-count":null==(l=i.articleVm.mArrayList)?void 0:l.length,"show-cover":!1}),null,16,["art-artlog","kiru-count"]),Y,S(" 未訂閱顯示 "),i.articleVm.isFree||i.checkSubResult||!i.isArticleVmLoading?S("v-if",!0):(x(),M("div",G,[A(g,V(L(i.authorInfo)),null,16)])),S(" 文章內容 "),i.articleVm.isFree||i.checkSubResult?(x(),M("div",W,[D("p",{innerHTML:i.articleVm.main},null,8,J)])):S("v-if",!0),S(" 相關文章 "),Q,D("div",X,[0!==i.relatedArticle.length?(x(),M("div",Z,[(x(!0),M(j,null,C(i.relatedArticle,(e=>(x(),H(p,k(e,{key:e.artId}),null,16)))),128))])):(x(),M("div",ee,te))]),S(" 留言功能 "),e.userSignInStatus&&(i.articleVm.isFree||i.checkSubResult)?O((x(),M("div",ae,[D("div",se,[O(D("img",ie,null,512),[[N,e.userInfo.Userpic?"https://kirukiru.rocket-coding.com/Pic/"+e.userInfo.Userpic:i.userDefaultAvatar]])]),D("div",re,[A(y,{modelValue:i.userMessageVm,"onUpdate:modelValue":t[0]||(t[0]=e=>i.userMessageVm=e),modelModifiers:{trim:!0},class:"w-full h-full",placeholder:"我要留言",onEnterExact:r.sendMessageHandler},null,8,["modelValue","onEnterExact"]),D("button",{type:"button",class:"flex gap-1 justify-center items-center py-1 px-4 text-white bg-myBrown md:flex-col md:py-0 md:px-2 md:h-full md:transition-all",onClick:t[1]||(t[1]=(...e)=>r.sendMessageHandler&&r.sendMessageHandler(...e))},le)])])),[[$,i.isSendingMessage]]):S("v-if",!0),S(" 登入後留言 "),e.userSignInStatus||!i.articleVm.isFree&&!i.checkSubResult?S("v-if",!0):(x(),M("div",oe,[D("div",ne,[A(b,{class:"block text-myBrown underline decoration-myBrown/60 underline-offset-4 transition-all",to:{name:"SignIn"}},{default:P((()=>[ce])),_:1})])])),S(" 留言內容 "),i.articleVm.isFree||i.checkSubResult?(x(),M("div",de,[S(" 留言排序變更 "),D("div",ue,[D("span",me,"此文共有 "+R(i.messageTotal)+" 筆留言",1),D("button",{type:"button",class:"text-sm text-myBrown/40 hover:text-myBrown/60",onClick:t[2]||(t[2]=e=>i.messageSettings.topNewDate=!i.messageSettings.topNewDate)},R(i.messageSettings.topNewDate?"留言時間 新 → 舊":"留言時間 舊 → 新"),1)]),0!==i.articleMessage.length?(x(),M("ul",ge,[(x(!0),M(j,null,C(r.loadMessage,(e=>(x(),H(B,k(e,{key:e.messageId,"article-username":i.articleVm.username,onReplyInner:r.replyHandler}),null,16,["article-username","onReplyInner"])))),128))])):S("v-if",!0),r.showLoadMessageBtn?(x(),M("div",he,[D("button",{type:"button",class:"block py-4 mx-auto w-1/2 text-sm text-myBrown bg-myOrange/20 hover:bg-myOrange/40 rounded-xl transition-all",onClick:t[3]||(t[3]=e=>i.messageSettings.currentPage+=1)}," 查看更多留言 ("+R(i.articleMessage.length-r.loadMessage.length)+") ",1)])):S("v-if",!0)])):S("v-if",!0)],64)}]]);export{fe as default};
