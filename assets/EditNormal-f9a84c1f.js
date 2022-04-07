import{_ as t}from"./AlertModal-bdd9fe02.js";import{a as e,b as a,_ as s}from"./EditNavbar-2bf14689.js";import{_ as r}from"./FormInputSelect-fc23c06c.js";import{ap as o,aq as i,ar as l,_ as n,v as c,r as m,o as d,c as h,a as u,e as p,d as f,w as y,t as g,E as b,aw as V,F as I,l as x}from"./vendor-385d4c3c.js";import{_ as w,l as v,e as A,m as E,n as H,h as $}from"./index-abe9143d.js";import"./tippy.esm-7d0a23a6.js";const _={name:"EditNormal",components:{EditNavbar:e,Switch:o,SwitchGroup:i,SwitchLabel:l,FormInputSelect:r,Input:a,TipTap:s,AlertModal:t},props:{articleId:{type:[String,Number],default:""}},data:()=>({category:[],articleVm:{userName:"",title:"",isFree:!0,isPush:!0,articlecategoryId:null,introduction:"",main:""},coverImage:null,categoryVm:null,artInfoCount:0,mainCount:0,isMainEmpty:!0,errors:[],editMode:!1,alertInfo:null}),computed:{categoryHandler:{get(){return this.categoryVm},set(t){this.categoryVm=t,this.articleVm.articlecategoryId=t.Id}}},async mounted(){this.articleId?(this.editMode=!0,await v(this.articleId).then((t=>{t.data.success?Object.assign(this.articleVm,t.data.data):this.$notify({group:"error",title:"文章資料取得失敗"})})).catch((t=>{}))):this.editMode=!1,await A().then((t=>{if(this.category=[...t.data],this.editMode){const t=this.articleVm.articlecategoryId,e=this.category.find((e=>e.Id===t));this.categoryHandler=e}})),this.articleVm.userName=this.$store.state.userInfo.Username},methods:{postArticle(){this.$store.commit("SHOW_OVERLAY_LOADING"),E(this.articleVm).then((t=>{if(t.data.success){const e={message:this.articleVm.isPush?"文章已發布 !":"文章已儲存",confirmText:this.articleVm.isPush?"去看內文":"回個人頁面",confirmMode:"replace",confirmTodo:{name:this.articleVm.isPush?"ArticleCommon":"UserDetail",params:this.articleVm.isPush?{articleId:t.data.artId}:{userId:this.$store.state.userInfo.Username}}};this.alertInfo=e,this.$store.commit("HIDE_OVERLAY_LOADING"),this.$store.commit("SHOW_ALERT")}else this.$store.commit("HIDE_OVERLAY_LOADING"),this.$notify({group:"error",title:"發布失敗",message:t.data.message})})).catch((t=>{this.$store.commit("HIDE_OVERLAY_LOADING")}))},editArticle(){this.$store.commit("SHOW_OVERLAY_LOADING"),H(this.articleId,this.articleVm).then((t=>{if(t.data.success){const t={message:"文章已儲存 !",confirmText:"回到個人主頁",confirmMode:"replace",confirmTodo:{name:"User",params:{userId:this.$store.state.userInfo.Username}}};this.alertInfo=t,this.$store.commit("SHOW_ALERT")}else this.$notify({group:"error",title:"發布失敗",message:t.data.message});this.$store.commit("HIDE_OVERLAY_LOADING")})).catch((t=>{}))},saveHandler(){this.alertInfo={},this.articleVm.isPush=!1;const t=this.checkHandler(this.articleVm);t.success?this.editMode?this.editArticle():this.postArticle():(this.alertInfo={message:`${t.errors[0].message}`,showConfirm:!1,showCancel:!0,cancelText:"返回",cancelMode:"anchor",cancelTodo:{name:this.$route.name,hash:`#${t.errors[0].anchor}`}},this.$store.commit("SHOW_ALERT"))},publishHandler(){this.alertInfo={},this.articleVm.isPush=!0;const t=this.checkHandler(this.articleVm);t.success?this.editMode?this.editArticle():this.postArticle():(this.alertInfo={message:`${t.errors[0].message}`,showConfirm:!1,showCancel:!0,cancelText:"返回",cancelMode:"anchor",cancelTodo:{name:this.$route.name,hash:`#${t.errors[0].anchor}`}},this.$store.commit("SHOW_ALERT"))},cancelEdit(){this.alertInfo={message:"確定返回上一頁 ?",confirmMode:"push",confirmTodo:{path:this.$store.state.recordPath}},this.$store.commit("SHOW_ALERT")},sendCover(t){const e=new FormData;e.append("photo",this.coverImage.file),$(e).then((e=>{e.data.success?this.articleVm.firstPhoto=e.data.picname:(this.$notify({group:"error",title:"上傳圖片失敗 !"}),this.articleVm.firstPhoto=t)})).catch((t=>{}))},titleHandler(t){this.articleVm.title=this.titleError(t)},titleError(t){const e=this.errors.findIndex((e=>e===t.name));return t.error?(-1===e&&this.errors.push(t.name),""):(-1!==e&&this.errors.splice(e,1),t.value)},artInfoCountHandler:n.throttle((function(t){this.artInfoCount=t}),500),mainCountHandler:n.throttle((function(t){this.mainCount=t}),500),addTool(){this.articleVm.fArrayList.push({uuid:c(),secPhoto:"",mission:""})},checkHandler(t){const e=[];return t.title||e.push({key:"title",anchor:"editor-normal-title",message:"文章標題為必填 !"}),t.articlecategoryId||e.push({key:"articlecategoryId",anchor:"editor-normal-category",message:"全站分類為必填 !"}),this.isMainEmpty&&e.push({key:"main",anchor:"editor-normal-main",message:"文章內容不可為空 !"}),e.length?{success:!1,errors:e,message:"必填欄位未填"}:{success:!0,message:"文章編輯檢查成功"}},initData(t){this.$data[t]=this.$options.data()[t]}}},C={class:"py-11 px-4 mx-auto max-w-[816px] md:px-8"},L={class:"kiruPartEffect"},O={id:"editor-normal-title",class:"mb-12"},S=f("div",{class:"mb-2"},[f("h2",{class:"inline-block pr-4 text-xl font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-2xl"}," 文章標題 ")],-1),T=f("div",{class:"mb-4 md:mb-6"},[f("h2",{class:"inline-block pr-4 mb-1 text-lg font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-2xl"}," 編輯資訊 ")],-1),M={class:"kiruPartEffect"},P={id:"editor-normal-pay",class:"mb-6 md:mb-8"},k={class:"flex gap-8 items-center"},B=f("span",{class:"font-bold text-myBrown"}," 是否要把這篇設為付費閱讀 ? ",-1),N=f("span",{class:"text-myBrown material-icons"},"info",-1),D=f("span",{class:"sr-only"},"是否要把這篇設為付費閱讀",-1),R={id:"editor-normal-category",class:"mb-8 w-full sm:w-1/3"},U=f("h3",{class:"font-bold text-myBrown"}," 全站分類 ",-1),W={id:"editor-normal-introduction",class:"py-4 mb-6"},j={class:"flex gap-2 items-center mb-2"},F=f("h3",{class:"font-bold text-myBrown"}," 文章敘述 ",-1),G={class:"py-0.5 px-2 text-sm text-white bg-myBrown rounded"},Y={id:"editor-normal-main",class:"py-4 mb-12"},q={class:"mb-2"},z=f("h2",{class:"inline-block pr-4 text-2xl font-bold text-myBrown md:mb-2 md:text-3xl"}," 開始寫作 ",-1),J={class:"text-sm text-black/60"},K={class:"flex justify-center md:justify-start"};var Q=w(_,[["render",function(o,i,l,n,c,w){const v=e,A=a,E=m("SwitchLabel"),H=m("Switch"),$=m("SwitchGroup"),_=r,Q=s,X=t;return d(),h(I,null,[u(" 編輯文章頂部 Navbar "),p(v,{onSaveArticle:w.saveHandler,onPublishArticle:w.publishHandler},null,8,["onSaveArticle","onPublishArticle"]),f("div",C,[f("div",L,[u(" 文章標題 "),f("div",O,[S,p(A,{class:"w-full sm:w-2/3","error-class":"md:-right-2 md:translate-x-full md:top-1/2 md:-translate-y-1/2 md:absolute",placeholder:"按這裡輸入標題",name:"title","error-text":"標題為必填","default-value":c.articleVm.title,onUpdate:w.titleHandler},null,8,["default-value","onUpdate"])])]),T,f("div",M,[u(" 付費閱讀設定 "),f("div",P,[p($,null,{default:y((()=>[f("div",k,[p(E,{class:"flex gap-2 items-center"},{default:y((()=>[B,N])),_:1}),p(H,{modelValue:c.articleVm.isFree,"onUpdate:modelValue":i[0]||(i[0]=t=>c.articleVm.isFree=t),class:x([c.articleVm.isFree?"bg-white":"bg-myBrown","mySwitchBar"])},{default:y((()=>[D,f("span",{class:x([c.articleVm.isFree?"translate-x-0":"translate-x-8","ring-myBrown mySwitchButton"])},null,2)])),_:1},8,["modelValue","class"])])])),_:1})]),u(" 全站分類 "),f("div",R,[U,f("div",null,[p(_,{modelValue:w.categoryHandler,"onUpdate:modelValue":i[1]||(i[1]=t=>w.categoryHandler=t),options:c.category,"key-prop":"Name","label-prop":"Name","default-text":"打開選單","options-position":"absolute"},null,8,["modelValue","options"])])]),u(" 文章敘述 "),f("div",W,[f("div",j,[F,f("span",G,"字數 : "+g(c.artInfoCount),1)]),p(Q,{modelValue:c.articleVm.introduction,"onUpdate:modelValue":i[2]||(i[2]=t=>c.articleVm.introduction=t),placeholder:"簡述一下這篇文章的內容吧 _","custom-class":"min-h-[6rem]","word-limit":"100",onWordCount:w.artInfoCountHandler},null,8,["modelValue","onWordCount"])])]),u(" 文章內容 "),f("div",Y,[f("div",q,[z,f("span",J,"字數 : "+g(c.mainCount),1)]),p(Q,{modelValue:c.articleVm.main,"onUpdate:modelValue":i[3]||(i[3]=t=>c.articleVm.main=t),placeholder:"開始寫作吧 _","custom-class":"min-h-[18rem] md:min-h-[24rem] border-none py-2 px-0","allow-image":!0,onWordCount:w.mainCountHandler,onCheckEmpty:i[4]||(i[4]=t=>c.isMainEmpty=t)},null,8,["modelValue","onWordCount"])]),u(" 操作 "),f("div",K,[f("button",{type:"button",class:"userPageCancelButton",onClick:i[5]||(i[5]=(...t)=>w.cancelEdit&&w.cancelEdit(...t))}," 取消編輯 ")])]),p(X,b(V(c.alertInfo)),null,16)],64)}]]);export{Q as default};
