var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&l(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&l(e,s,t[s]);return e},n=(e,a)=>t(e,s(a));/* empty css             */import{_ as c,a as d,b as u,c as m,u as h}from"./user-origin-12532f67.js";import{_ as g}from"./DynamicTextarea-a7eb4b35.js";import{_ as f}from"./KiruCard-b6bb784c.js";import{o as p,c as b,a as y,d as v,F as w,f as x,t as I,ai as k,l as M,s as A,aj as S,m as V,C as L,K as P,r as j,aI as B,e as D,D as C,E as R,aw as T,h as O,w as H,x as $}from"./vendor-385d4c3c.js";import{_ as K,p as N,q as F,r as E,s as _,t as U,v as q,w as z}from"./index-ac332303.js";import"./AddLove-c1434d40.js";import"./tippy.esm-7d0a23a6.js";import"./index-1e672b5c.js";const Y={name:"KiruMission",props:{missions:{type:Array,default:()=>[]}},methods:{missionUrlParser(e){let t;return t=/https?:\/\//.test(e)?e:`http://${e}`,t}}},G={class:"p-4 mb-12"},W=v("div",{class:"flex gap-12 justify-between mb-2"},[v("div",{class:"myArticlePartTitle myArticlePartTitleBg"},[v("h2",null,"附屬切切")]),v("div",{class:"hidden before:absolute relative before:top-1/2 grow w-1/5 before:w-full before:h-px before:bg-myBrown md:block"})],-1),J={class:"py-8 px-12"},Q={class:"grid grid-cols-2 grid-flow-row gap-4"},X=["href"],Z={class:"text-myBrown line-clamp-1"},ee={class:"text-sm text-gray-900 line-clamp-1"};var te=K(Y,[["render",function(e,t,s,a,r,i){return p(),b(w,null,[y(" 附屬切切 "),v("div",G,[W,v("div",J,[v("ul",Q,[(p(!0),b(w,null,x(s.missions,(e=>(p(),b("li",{key:e.fId},[v("a",{href:i.missionUrlParser(e.auxiliarymain),target:"_blank",class:"flex flex-col gap-1 justify-center p-4 border border-myBrown"},[v("span",Z,I(e.auxiliary),1),v("span",ee,I(e.auxiliarymain),1)],8,X)])))),128))])])])],2112)}]]);const se={class:"p-4 mb-20"},ae={class:"flex border border-myBrown/20"},re={class:"flex shrink-0 justify-center items-center w-20"},ie={class:"text-4xl font-bold text-myBrown md:text-5xl"},le=["innerHTML"],oe={key:0,class:"shrink-0 w-64 h-64 border-l border-myBrown/20"},ne={class:"object-cover w-full h-full load",alt:""};var ce=K({name:"KiruContent",props:{content:{type:Array,default:()=>[]}},computed:{}},[["render",function(e,t,s,a,r,i){const l=k("my-src");return p(),b(w,null,[y(" 切切內容 "),v("ul",se,[(p(!0),b(w,null,x(s.content,((e,t)=>(p(),b("li",{key:e.mId,class:"mb-4"},[v("div",ae,[y(" 序號 "),v("div",re,[v("span",ie,I(t+1<10?`0${t+1}`:t+1),1)]),y(" 內容 "),v("div",{class:M(["flex grow items-center px-6 border-l border-myBrown/20",{"py-8":"."===e.thirdPhoto}])},[v("p",{innerHTML:e.main},null,8,le)],2),y(" 圖片 "),"."!==e.thirdPhoto?(p(),b("div",oe,[A(v("img",ne,null,512),[[l,{name:e.thirdPhoto,folder:"Pic"}]])])):y("v-if",!0)])])))),128))])],2112)}]]);const de={name:"KiruTools",props:{tools:{type:Array,default:()=>[]}}},ue={class:"p-4 mb-24"},me=S('<div class="mb-7"><div class="flex gap-12 justify-between mb-2"><div class="myArticlePartTitle myArticlePartTitleBg"><h2 class="whitespace-nowrap"> 預備工具 </h2></div><div class="hidden before:absolute relative before:top-1/2 grow w-2/3 before:w-full before:h-px before:bg-myBrown md:block"></div></div><p class="text-sm text-myBrown"> 此篇切切會用到的物品、工具、材料、環境...等 </p></div>',1),he={class:"grid grid-cols-2 grid-flow-row gap-x-2 gap-y-6"},ge={key:0,class:"shrink-0 w-full border-b border-myBrown/60 aspect-w-16 aspect-h-9 md:w-1/2 md:border-r md:border-b-0 md:aspect-w-12 md:aspect-h-4"},fe={class:"object-cover absolute tools load",alt:""};var pe=K(de,[["render",function(e,t,s,a,r,i){const l=k("my-src");return p(),b("div",ue,[y(" 預備工具 "),me,y(" 預備工具內容 "),v("ul",he,[(p(!0),b(w,null,x(s.tools,(e=>(p(),b("li",{key:e.fId,class:"flex flex-col justify-between border border-myBrown/20 md:flex-row md:justify-start md:items-center"},["."!==e.secPhoto?(p(),b("div",ge,[A(v("img",fe,null,512),[[l,{name:e.secPhoto,folder:"Pic"}]])])):y("v-if",!0),v("p",{class:M(["px-2 font-bold text-myBrown line-clamp-3",{"py-2":"."===e.secPhoto}])},I(e.mission),3)])))),128))])])}]]);const be={name:"ArticleKiru",components:{KiruAuthor:c,KiruInfo:d,KiruTools:pe,KiruContent:ce,KiruMission:te,KiruCard:f,KiruReply:u,SubscribeView:m,DynamicTextarea:g},beforeRouteUpdate(e,t){e.params.articleId!==t.params.articleId&&this.$store.commit("SHOW_OVERLAY_LOADING"),this.getArticleInfo(this.articleId)},props:{articleId:{type:[String,Number],default:""},loveCount:{type:[String,Number],default:0},isAddLove:{type:Boolean,default:!1},isCollect:{type:Boolean,default:!1}},emits:["author-info","add-love","add-collection","is-add-love"],data:()=>({articleVm:{},authorInfo:{},relatedArticleVm:{nowpage:1,showcount:2},relatedArticle:[],userMessageVm:"",messagePagination:{nowpage:1,showcount:9999},messageSettings:{pageSize:5,currentPage:1,loadCount:5,total:0,topNewDate:!0},articleMessage:[],sortMessage:[],messageTotal:0,userDefaultAvatar:h,isArticleVmLoading:!1,checkSubResult:!1,isSendingMessage:!1}),computed:n(o(o({},V(["userInfo","userAddLoveList","userKiruCollections","userSubscribeList","checkUserSubscribeStatus"])),L(["userSignInStatus"])),{loadMessage(){const e=this.messageSettings;let t=[];t=e.topNewDate?[...this.articleMessage].sort(((e,t)=>P(t.messageInitDate).format("x")-P(e.messageInitDate).format("x"))):[...this.articleMessage].sort(((e,t)=>P(e.messageInitDate).format("x")-P(t.messageInitDate).format("x")));const s=(e.currentPage-1)*e.loadCount;return t.slice(0,e.pageSize+s)},showLoadMessageBtn(){return this.articleMessage.length>this.messageSettings.pageSize&&this.loadMessage.length<this.articleMessage.length},articleAuthor(){const{author:e,authorPic:t,username:s}=this.articleVm;return{author:e,authorPic:t,username:s}},articleInfo(){const{title:e,firstPhoto:t,introduction:s,articlecategoryId:a,artArtlog:r,ArtInitDate:i}=this.articleVm;return{title:e,firstPhoto:t,introduction:s,articlecategoryId:a,artArtlog:r,artInitDate:i}}}),watch:{"articleVm.articlecategoryId":{handler(e){e&&this.getRelatedArticle(e)}},userSubscribeList:{handler(){this.checkSubResult=this.checkSub(this.articleVm.username)},deep:!0}},mounted(){this.getArticleInfo(this.articleId)},methods:{checkSub(e){const t=this.userSubscribeList.some((t=>t.username===e)),s=this.$store.state.userInfo.Username===e;return t||s},async getArticleInfo(e){await N(e).then((e=>{var t;if(e.data.success){if(this.checkSub(e.data.data.username)&&(this.checkSubResult=!0),!e.data.data.isPush&&e.data.data.username!==(null==(t=this.userInfo)?void 0:t.Username))return void this.$router.replace({name:"NotFound",query:{message:"此文章尚未發布"}});this.articleVm=e.data.data,this.isArticleVmLoading=!0}else this.$router.replace({name:"NotFound",query:{message:e.data.message||"查無此文章"}})})).catch((e=>{})),await F(this.articleVm.username).then((e=>{e.data.success?(this.authorInfo=e.data.data,this.$emit("author-info",n(o({},this.authorInfo),{loveCount:this.articleVm.lovecount,isAddLove:this.isAddLove})),this.checkAddLoveStatus()):this.$notify({group:"error",title:"作者資訊取得失敗"})}));const t=o({artId:this.articleId},this.messagePagination);await E(t).then((e=>{e.data.success?(this.articleMessage=e.data.data,this.messageTotal=e.data.total||this.articleMessage.length):this.articleMessage=[]})).catch((e=>{})),this.$store.commit("HIDE_OVERLAY_LOADING")},getRelatedArticle(e){_(o({articlecategoryId:e},this.relatedArticleVm)).then((e=>{if(e.data.success){const t=e.data.data.filter((e=>Number(this.articleId)!==e.artId));this.relatedArticle=t}else this.$notify({group:"error",title:"相關文章資料取得失敗"})})).catch((e=>{}))},checkAddLoveStatus(){-1!==this.userAddLoveList.findIndex((e=>e.articleId===this.articleId))&&this.$emit("is-add-love",!0)},addLoveHandler(e){this.$emit("add-love",e)},addCollectionHandler(){this.$emit("add-collection")},async sendMessageHandler(){if(""===this.userMessageVm||this.isSendingMessage)return;this.isSendingMessage=!0;const e={artId:this.articleId,Main:this.userMessageVm};await U(e).then((e=>{this.userMessageVm="",this.isSendingMessage=!1})).catch((e=>{this.isSendingMessage=!1}));const t=o({artId:this.articleId},this.messagePagination);await E(t).then((e=>{if(e.data.success){const t=e.data.data;this.updateMessage(t),this.messageTotal=e.data.total||this.articleMessage.length}else this.$notify({group:"error",title:"留言內容取得失敗"})})).catch((e=>{}))},updateMessage(e){this.articleMessage=e},async replyHandler(e){try{await q(e).then((e=>{})).catch((e=>{}));const t=o({artId:this.articleId},this.messagePagination),s=await z(e.messageId),a=await E(t);if(s.data.success)if(a.data.success){this.updateMessage(a.data.data);const t=this.articleMessage.findIndex((t=>t.messageId===e.messageId)),r=this.articleMessage[t].reMessageData.map((e=>e.reMessageId)),i=s.data.data;i.filter((e=>-1===r.indexOf(e.reMessageId))).forEach((e=>{this.articleMessage[t].reMessageData.push(e)}))}else this.$notify({group:"error",title:"留言內容取得失敗"});else this.$notify({group:"error",title:"回覆內容取得失敗"})}catch(t){}}}},ye={key:0,class:"mx-auto mb-12 max-w-[80%]"},ve={key:3},we=S('<div class="mb-7"><div class="flex gap-12 justify-between px-4 mb-2 md:px-0"><div class="myArticlePartTitle myArticlePartTitleBg"><h2>附註<span class="hidden md:inline-block">補充</span></h2></div><div class="hidden before:absolute relative before:top-1/2 grow w-1/5 before:w-full before:h-px before:bg-myBrown md:block"></div></div></div>',1),xe={class:"px-16 mb-16 text-myBrown"},Ie=["innerHTML"],ke=v("div",{class:"flex gap-12 justify-between mb-4"},[v("div",{class:"py-2"},[v("h2",{class:"text-2xl font-bold text-myBrown"}," 相關切切 ")])],-1),Me={class:"px-4 mb-32 md:px-0"},Ae={key:0,class:"grid grid-cols-1 grid-flow-row gap-6 md:grid-cols-2"},Se={key:1,class:"py-2"},Ve=[v("p",{class:"text-center text-myBrown/60"}," 沒有相關的切切 ",-1)],Le={key:5,"element-loading-background":"rgba(0, 0, 0, 0.5)","element-loading-text":"正在送出留言...",class:"flex overflow-hidden gap-8 justify-between py-4 px-6 mb-12 rounded-lg"},Pe={class:"overflow-hidden w-16 h-16 rounded-full"},je={alt:"",class:"object-cover w-full h-full scale-[102%] load"},Be={class:"flex flex-col grow gap-3 justify-between items-end md:flex-row"},De=[v("span",{class:"inline-block text-lg md:-translate-y-1 material-icons"},"reply",-1),v("span",{class:"text-sm whitespace-nowrap md:-translate-y-1"},"送出",-1)],Ce={key:6,class:"mb-12"},Re={class:"flex justify-center items-center py-6 bg-myYellow/20"},Te=$(" 登入後留言 "),Oe={key:7,id:"article-replies",class:"mb-16"},He={class:"flex justify-between px-6"},$e={class:"text-black/60"},Ke={key:0},Ne={key:1,class:"px-6"};var Fe=K(be,[["render",function(e,t,s,a,r,i){var l,o,n;const h=c,M=d,S=m,V=pe,L=ce,P=te,$=f,K=g,N=j("router-link"),F=u,E=k("src"),_=B;return p(),b(w,null,[y(" 文章頂部作者資訊 "),D(h,C(i.articleAuthor,{"love-count":s.loveCount,"is-add-love":s.isAddLove,"replies-count":r.messageTotal,"is-collect":s.isCollect,"article-type":"kiru",onAddLove:i.addLoveHandler,onAddCollection:i.addCollectionHandler}),null,16,["love-count","is-add-love","replies-count","is-collect","onAddLove","onAddCollection"]),y(" 文章頂部資訊 "),D(M,C({class:"p-4 mb-16 w-full"},i.articleInfo,{"show-kiru-count":!0,"kiru-count":null==(l=r.articleVm.mArrayList)?void 0:l.length}),null,16,["kiru-count"]),y(" 未訂閱顯示 "),r.articleVm.isFree||r.checkSubResult||!r.isArticleVmLoading?y("v-if",!0):(p(),b("div",ye,[D(S,R(T(r.authorInfo)),null,16)])),y(" 預備工具 "),0!==(null==(o=r.articleVm.fArrayList)?void 0:o.length)&&(r.articleVm.isFree||r.checkSubResult)?(p(),O(V,{key:1,tools:r.articleVm.fArrayList},null,8,["tools"])):y("v-if",!0),y(" 切切內容 "),r.articleVm.isFree||r.checkSubResult?(p(),O(L,{key:2,content:r.articleVm.mArrayList},null,8,["content"])):y("v-if",!0),y(" 附註與補充 "),""!==r.articleVm.final&&(r.articleVm.isFree||r.checkSubResult)?(p(),b("div",ve,[we,v("div",xe,[v("p",{innerHTML:r.articleVm.final},null,8,Ie)])])):y("v-if",!0),y(" 附屬切切 "),0!==(null==(n=r.articleVm.fMissionList)?void 0:n.length)&&(r.articleVm.isFree||r.checkSubResult)?(p(),O(P,{key:4,missions:r.articleVm.fMissionList},null,8,["missions"])):y("v-if",!0),y(" 相關切切 "),ke,v("div",Me,[0!==r.relatedArticle.length?(p(),b("div",Ae,[(p(!0),b(w,null,x(r.relatedArticle,(e=>(p(),O($,C(e,{key:e.artId}),null,16)))),128))])):(p(),b("div",Se,Ve))]),y(" 留言功能 "),e.userSignInStatus&&(r.articleVm.isFree||r.checkSubResult)?A((p(),b("div",Le,[v("div",Pe,[A(v("img",je,null,512),[[E,e.userInfo.Userpic?"https://kirukiru.rocket-coding.com/Pic/"+e.userInfo.Userpic:r.userDefaultAvatar]])]),v("div",Be,[D(K,{modelValue:r.userMessageVm,"onUpdate:modelValue":t[0]||(t[0]=e=>r.userMessageVm=e),modelModifiers:{trim:!0},class:"w-full h-full",placeholder:"我要留言",onEnterExact:i.sendMessageHandler},null,8,["modelValue","onEnterExact"]),v("button",{type:"button",class:"flex gap-1 justify-center items-center py-1 px-4 text-white bg-myBrown md:flex-col md:py-0 md:px-2 md:h-full md:transition-all",onClick:t[1]||(t[1]=(...e)=>i.sendMessageHandler&&i.sendMessageHandler(...e))},De)])])),[[_,r.isSendingMessage]]):y("v-if",!0),y(" 登入後留言 "),e.userSignInStatus||!r.articleVm.isFree&&!r.checkSubResult?y("v-if",!0):(p(),b("div",Ce,[v("div",Re,[D(N,{class:"block text-myBrown underline decoration-myBrown/60 underline-offset-4 transition-all",to:{name:"SignIn"}},{default:H((()=>[Te])),_:1})])])),y(" 留言內容 "),r.articleVm.isFree||r.checkSubResult?(p(),b("div",Oe,[y(" 留言排序變更 "),v("div",He,[v("span",$e,"此文共有 "+I(r.messageTotal)+" 筆留言",1),v("button",{type:"button",class:"text-sm text-myBrown/40 hover:text-myBrown/60",onClick:t[2]||(t[2]=e=>r.messageSettings.topNewDate=!r.messageSettings.topNewDate)},I(r.messageSettings.topNewDate?"留言時間 新 → 舊":"留言時間 舊 → 新"),1)]),0!==r.articleMessage.length?(p(),b("ul",Ke,[(p(!0),b(w,null,x(i.loadMessage,(e=>(p(),O(F,C(e,{key:e.messageId,"article-username":r.articleVm.username,onReplyInner:i.replyHandler}),null,16,["article-username","onReplyInner"])))),128))])):y("v-if",!0),i.showLoadMessageBtn?(p(),b("div",Ne,[v("button",{type:"button",class:"block py-4 mx-auto w-1/2 text-sm text-myBrown bg-myOrange/20 hover:bg-myOrange/40 rounded-xl transition-all",onClick:t[3]||(t[3]=e=>r.messageSettings.currentPage+=1)}," 查看更多留言 ("+I(r.articleMessage.length-i.loadMessage.length)+") ",1)])):y("v-if",!0)])):y("v-if",!0)],64)}]]);export{Fe as default};
