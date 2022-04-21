var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{_ as r}from"./DynamicTextarea-d9a8df85.js";import{m as n,_ as o,a8 as i,o as c,h as m,w as d,d as p,s as u,t as f,c as y,a as g,e as x,T as b,F as h,f as v,r as w,x as k,u as I,D as j}from"./vendor-c1c40a3c.js";import{_ as D}from"./index-915c545f.js";import{_ as M,a as Y}from"./AddLove-9c0966bd.js";import{t as S}from"./tippy.esm-b6ce9822.js";const B={name:"KiryReply",components:{DynamicTextarea:r},props:{messageId:{type:Number,default:null},messageInitDate:{type:String,default:""},messageMain:{type:String,default:""},messageMember:{type:String,default:""},messageMemberPic:{type:String,default:""},reMessageData:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!0},messageUserName:{type:String,default:""},articleUsername:{type:String,default:""}},emits:["update-reply","reply-inner"],data:()=>({replyInner:null,replyInnerVm:"",inputHeight:"0"}),computed:((e,r)=>{for(var n in r||(r={}))a.call(r,n)&&s(e,n,r[n]);if(t)for(var n of t(r))l.call(r,n)&&s(e,n,r[n]);return e})({},n(["userInfo"])),methods:{toggleInnerReply(e){if(this.replyInner===e)return this.replyInner=null,void(this.replyInnerVm="");this.replyInner=e},replyInnerHandler(e){const t={messageId:e,main:this.replyInnerVm};this.$emit("reply-inner",t),this.toggleInnerReply(e)},resize:o.throttle((function(){this.inputHeight=`${this.$refs.shadow.scrollHeight}px`}),100)}},_={class:"flex before:absolute relative before:top-0 before:left-0 justify-between p-6 mb-6 before:w-2 before:h-full before:bg-myYellow/40 before:opacity-0 hover:before:opacity-100 before:transition-all"},C={class:"flex flex-col grow shrink"},H={class:"flex flex-col mb-4 md:grid md:grid-cols-4 md:gap-4"},U={class:"flex col-span-3 gap-3 items-start"},A={href:"javascript:;",class:"block overflow-hidden shrink-0 w-16 h-16 rounded-full select-none"},P={class:"object-cover w-full h-full scale-[102%] load",alt:""},T={class:"flex flex-col"},O={class:"font-medium"},$={class:"text-justify text-gray-900 whitespace-pre-wrap"},N={class:"flex gap-3 justify-end items-center md:flex-col md:gap-1 md:justify-start md:items-end"},V={class:"order-2 px-1 text-sm text-black/60 md:order-1"},L={class:"flex order-1 md:order-2"},K={key:0,type:"button",class:"group block px-1 text-sm font-medium text-black/60 hover:text-black/80"},R=[p("span",{class:"inline-block px-0.5 text-lg align-middle opacity-0 group-hover:opacity-100 transition-all material-icons"},"edit",-1),p("span",{class:"inline-block align-middle"},"編輯",-1)],z=[p("span",{class:"inline-block text-xl font-bold align-middle opacity-0 group-hover:opacity-100 transition-all material-icons"},"turn_left",-1),p("span",{class:"inline-block align-middle"},"回覆",-1)],E={key:0,class:"grid grid-cols-4 gap-4 mb-4 md:pl-16"},G={class:"relative col-span-3"},F=[p("span",{class:"material-icons"},"close",-1)],q={class:"flex justify-center items-center md:justify-start"},J=[p("span",null,"送出",-1)],Q={key:0,class:"mb-4 md:pl-16"},W={class:"flex flex-col w-full md:grid md:grow md:shrink md:grid-cols-4 md:gap-4 md:p-4 md:w-auto md:bg-myYellow/20"},X={class:"flex gap-3 items-start p-4 bg-myYellow/20 md:col-span-3 md:p-0 md:bg-myYellow/0 md:border-none"},Z={class:"flex flex-col gap-1"},ee={class:""},te=p("span",{class:"mr-1 text-sm font-bold text-black/60"},"作者 ",-1),ae={class:"text-myOrange"},le=p("span",{class:"text-sm font-bold text-black/60"}," 的回覆 :",-1),se={class:"text-justify text-gray-900 whitespace-pre-wrap"},re={class:"flex gap-1 justify-end items-center md:flex-col md:justify-start md:items-end"},ne={class:"order-2 px-1 text-sm text-black/60 md:order-1"},oe={class:"flex order-1 md:order-2"},ie={key:0,type:"button",class:"group block px-1 text-sm font-medium text-black/60 hover:text-black/80"},ce=[p("span",{class:"inline-block px-0.5 text-lg align-middle opacity-0 group-hover:opacity-100 transition-all material-icons"},"edit",-1),p("span",{class:"inline-block align-middle"},"編輯",-1)];var me=D(B,[["render",function(e,t,a,l,s,n){const o=r,w=i("my-src"),k=i("timeformat");return c(),m(b,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-y-48","enter-to-class":"transform opacity-100 translate-y-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-y-0","leave-to-class":"transform opacity-0 translate-y-48"},{default:d((()=>{var l;return[p("li",_,[p("div",C,[p("div",H,[p("div",U,[p("a",A,[u(p("img",P,null,512),[[w,{name:a.messageMemberPic,folder:"Pic"}]])]),p("div",T,[p("p",O,f(a.messageMember)+" 的留言 : ",1),p("p",$,f(a.messageMain),1)])]),p("div",N,[u(p("p",V,null,512),[[k,{time:a.messageInitDate,format:"YYYY/MM/DD HH:mm"}]]),p("div",L,[a.messageUserName===e.userInfo.Username?(c(),y("button",K,R)):g("",!0),a.articleUsername===e.userInfo.Username?(c(),y("button",{key:1,type:"button",class:"group flex justify-center items-center px-1 text-sm font-medium text-black/60 hover:text-black/80",onClick:t[0]||(t[0]=e=>n.toggleInnerReply(a.messageId))},z)):g("",!0)])])]),x(b,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0"},{default:d((()=>[s.replyInner===a.messageId?(c(),y("div",E,[p("div",G,[x(o,{modelValue:s.replyInnerVm,"onUpdate:modelValue":t[1]||(t[1]=e=>s.replyInnerVm=e),modelModifiers:{trim:!0},"set-focus":!0,class:"h-full",onEnterExact:t[2]||(t[2]=e=>n.replyInnerHandler(a.messageId))},null,8,["modelValue"]),p("button",{type:"button",class:"absolute top-0 right-0 opacity-0 hover:opacity-100 translate-x-full -translate-y-1/2",onClick:t[3]||(t[3]=e=>n.toggleInnerReply(a.messageId))},F)]),p("div",q,[p("button",{type:"button",class:"py-1 px-4 text-sm text-black/60 hover:text-black hover:bg-myYellow/20 transition-all",onClick:t[4]||(t[4]=e=>n.replyInnerHandler(a.messageId))},J)])])):g("",!0)])),_:1}),0!==(null==(l=a.reMessageData)?void 0:l.length)?(c(),y("ul",Q,[(c(!0),y(h,null,v(a.reMessageData,(t=>(c(),y("li",{key:t.reMessageId,class:"flex mb-4"},[p("div",W,[p("div",X,[p("div",Z,[p("p",ee,[te,p("span",ae,f(t.author),1),le]),p("p",se,f(t.reMessageMain),1)])]),p("div",re,[u(p("p",ne,null,512),[[k,{time:t.reMessageInitDate,format:"YYYY/MM/DD HH:mm"}]]),p("div",oe,[a.articleUsername===e.userInfo.Username?(c(),y("button",ie,ce)):g("",!0)])])])])))),128))])):g("",!0)])])]})),_:1})}]]);const de={name:"SubscribeView",props:{Name:{type:String,default:""},Username:{type:String,default:""},Userpic:{type:String,default:""},Introduction:{type:String,default:""}}},pe={class:"p-4 w-full text-center bg-myBrown rounded-lg shadow-md sm:p-8"},ue=p("h3",{class:"hidden mb-2 text-3xl font-bold text-white md:block"}," 以下內容僅限訂閱者閱覽 ",-1),fe=p("h3",{class:"block mb-2 text-3xl font-bold text-white md:hidden"}," 限訂閱者閱覽 ",-1),ye={class:"flex gap-3 justify-center items-start py-4 mb-4"},ge={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},xe={class:"max-w-[80%] text-left text-white"},be={class:"text-myYellow"},he={key:0,class:"text-sm leading-6 text-left text-white"},ve={key:1,class:"text-sm leading-6 text-left text-white/60"},we={class:"flex justify-center items-center"},ke=k(" 訂閱作者，觀看此文章 ");var Ie=D(de,[["render",function(e,t,a,l,s,r){const n=w("router-link"),o=i("my-src");return c(),y("div",pe,[ue,fe,p("div",ye,[x(n,{class:"block overflow-hidden shrink-0 mt-2 w-12 h-12 rounded-full",to:{name:"AuthorDetail",params:{authorId:a.Username}}},{default:d((()=>[u(p("img",ge,null,512),[[o,{name:a.Userpic,folder:"Pic"}]])])),_:1},8,["to"]),p("div",xe,[p("p",be,f(a.Name),1),a.Introduction?(c(),y("p",he,f(a.Introduction),1)):(c(),y("p",ve," 此作者沒有自我簡介 "))])]),p("div",we,[x(n,{class:"py-2 px-4 text-lg text-white bg-myYellow/60 hover:bg-myYellow/80 rounded-lg transition-all",to:{name:"AuthorDetail",params:{authorId:a.Username}}},{default:d((()=>[ke])),_:1},8,["to"])])])}]]);const je={name:"KiruInfo",props:{showCover:{type:Boolean,default:!0},title:{type:String,default:""},firstPhoto:{type:String,default:""},introduction:{type:String,default:""},articlecategoryId:{type:Number,default:null},artArtlog:{type:String,default:""},artInitDate:{type:String,default:""},showKiruCount:{type:Boolean,default:!1},kiruCount:{type:Number,default:0}}},De={class:"w-full"},Me={key:0,class:"w-full max-h-[440px]"},Ye={class:"aspect-w-16 aspect-h-9"},Se={class:"object-cover object-center w-full h-full bg-center transition-opacity duration-300 cover load",alt:""},Be={class:"py-3 mb-6"},_e={class:"flex gap-1"},Ce={class:"text-myBrown"},He=p("span",{class:"text-myBrown/60 material-icons"},"chevron_right",-1),Ue={href:"javascript:;",class:"text-myBrown hover:text-myYellow"},Ae={class:"grid grid-cols-3 mb-6"},Pe={class:"flex col-span-2 items-start text-3xl font-bold text-myBrown"},Te={class:"flex flex-col items-end pt-1"},Oe={class:"text-right text-black/60"},$e={key:0,class:"text-right text-black/60"},Ne=k(" 此切切共有 "),Ve={class:"text-black/80"},Le=k(" 個步驟 "),Ke={key:1,class:"mb-6"},Re=["innerHTML"];var ze=D(je,[["render",function(e,t,a,l,s,r){const n=i("my-src"),o=i("timeformat");return c(),y("div",De,[a.showCover?(c(),y("div",Me,[p("div",Ye,[u(p("img",Se,null,512),[[n,{name:a.firstPhoto,folder:"Pic"}]])])])):g("",!0),p("div",Be,[p("p",_e,[p("span",Ce,f("kiru"===e.$route.meta.articleType?"切切分類":"文章分類"),1),He,p("a",Ue,f(a.artArtlog),1)])]),p("div",Ae,[p("h1",Pe,f(a.title),1),p("div",Te,[u(p("p",Oe,null,512),[[I,a.artInitDate],[o,{time:a.artInitDate,format:"YYYY/MM/DD HH:mm"}]]),a.showKiruCount?(c(),y("p",$e,[Ne,p("span",Ve,f(a.kiruCount),1),Le])):g("",!0)])]),""!==a.introduction?(c(),y("div",Ke,[p("p",{class:"text-myBrown",innerHTML:a.introduction},null,8,Re)])):g("",!0)])}]]);const Ee={name:"KiruAuthor",components:{AddLove:M,AddCollection:Y},props:{author:{type:String,default:""},username:{type:String,default:""},authorPic:{type:String,default:""},loveCount:{type:Number,default:0},isAddLove:{type:Boolean,default:!1},repliesCount:{type:Number,default:0},articleType:{type:String,default:""}},data:()=>({isLoading:!1}),mounted(){S(this.$refs.copylink,{content:"點我複製連結",inertia:!0,animation:"scale-subtle"}),S(this.$refs.copylink,{async onTrigger(e,t){await navigator.clipboard.writeText(location.href),setTimeout((()=>{e.hide()}),2e3)},content:"已複製連結",inertia:!0,animation:"scale-subtle",trigger:"click"})}},Ge={class:"px-4 w-full"},Fe={class:"flex fixed bottom-0 left-0 z-20 justify-between items-center py-2 px-6 w-full bg-myGray/80 border-y border-myBrown/20 backdrop-blur md:relative md:z-0 md:bg-myYellow md:border md:border-myBrown md:backdrop-blur-none"},qe={class:"flex gap-2 items-center md:gap-8"},Je={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},Qe={class:"font-medium line-clamp-1 md:line-clamp-2 author-name"},We=k(" 關注 "),Xe={class:"flex gap-5 justify-end items-center"},Ze=p("span",{class:"inline-block px-1 text-sm align-middle md:text-lg material-icons-outlined"},"mode_comment",-1),et={class:"inline-block px-1 text-sm align-middle md:text-lg"},tt={ref:"copylink",type:"button",class:"block text-myBrown hover:text-myOrange"},at=[p("span",{class:"inline-block px-1 text-xl align-middle md:text-2xl material-icons-outlined"},"file_upload",-1)];var lt=D(Ee,[["render",function(e,t,a,l,s,r){const n=w("router-link"),o=M,m=Y,g=i("my-src");return c(),y("div",Ge,[p("div",Fe,[p("div",qe,[x(n,{class:"block overflow-hidden w-12 h-12 rounded-full md:w-14 md:h-14",to:{name:"AuthorDetail",params:{authorId:a.username}}},{default:d((()=>[u(p("img",Je,null,512),[[g,{name:a.authorPic,folder:"Pic"}]])])),_:1},8,["to"]),p("h2",Qe,f(a.author),1),x(n,{to:{name:"AuthorDetail",params:{authorId:a.username}},class:"hidden font-bold text-myBrown hover:text-myOrange bg-myGray transition-all md:block button-sm"},{default:d((()=>[We])),_:1},8,["to"])]),p("div",Xe,[x(o,j(e.$attrs,{"show-love-count":!0,"love-count":a.loveCount,"icon-class":"inline-block px-1 text-sm md:text-lg align-middle material-icons","count-class":"text-sm md:text-base","is-add-love":a.isAddLove,"article-type":a.articleType}),null,16,["love-count","is-add-love","article-type"]),x(n,{to:{name:e.$route.name,params:e.$route.params.articleId,hash:"#article-replies"},class:"block text-myBrown hover:text-myOrange"},{default:d((()=>[Ze,p("span",et,f(a.repliesCount),1)])),_:1},8,["to"]),x(m,j(e.$attrs,{"icon-class":"inline-block px-1 text-base md:text-lg align-middle scale-110"}),null,16),p("button",tt,at,512)])])])}]]),st="./assets/user-origin-c53f5826.jpg";export{lt as _,ze as a,me as b,Ie as c,st as u};
