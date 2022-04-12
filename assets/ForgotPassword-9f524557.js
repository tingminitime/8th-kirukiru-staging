import{_ as e}from"./LoadingSpin-bd8cc312.js";import{_ as a}from"./FormInputText-e1003230.js";import{c as s,a as t}from"./object-fe354ed4.js";import{s as o}from"./setLocale-f7bd91f3.js";import{_ as n,h as i}from"./index-4a5ba290.js";import{r,ai as l,s as d,o as m,c,d as u,e as p,w as f,t as g,a as h,l as x,am as v,x as b,T as y,h as w,an as I}from"./vendor-358810ac.js";o({mixed:{default:"無效的輸入",required:"必填欄位"},string:{min:"長度不可小於 ${min}",email:"須符合 Email 格式 !"}});const S={name:"ForgotPasswordModal",components:{FormInputText:a,LoadingSpin:e},props:{isOpen:{type:Boolean,default:!1}},data:()=>({schema:s().shape({"forgot-username":t().required(),"forgot-email":t().email().required()}),username:"",email:"",isLoading:!1,isInvalidAniProcess:null,signInErrorMsg:"",isComplete:!1}),created(){const e=localStorage.getItem("userAccount");e&&(this.username=e)},methods:{onSubmit(e){this.isLoading=!0;const a={username:e["forgot-username"],eMail:e["forgot-email"]};i(a).then((e=>{e.data.success?(this.$notify({group:"success",title:"已將新密碼寄至您的信箱"},3e3),this.isComplete=!0):(this.signInErrorMsg=e.data.message,this.$notify({group:"error",title:"取得失敗 !",text:`${e.data.message}`},2500)),this.$refs.emailInput.inputValue="",this.isLoading=!1})).catch((e=>{this.isLoading=!1,this.$notify({group:"error",title:"Error",text:`${e}`},2500)}))},onInvalidSubmit(e){this.isInvalidAniProcess=!0},usernameChange(e){this.username=e},animationEndHandler(){this.isInvalidAniProcess=!1}}},E=u("div",{class:"py-8 border-b-myBrown md:py-4 md:bg-myYellow md:border-b-2"},[u("h1",{class:"text-2xl font-bold text-center text-myBrown select-none md:text-3xl"},[b(" 忘記密碼 ? "),u("s",{class:"text-base"},"笑死")])],-1),j={class:"px-10 pb-6 bg-myGray md:pt-10"},B={class:"flex justify-center py-6"},L={key:0,class:"text-red-500"},M={key:1,class:"text-red-500"},P={class:"flex flex-col justify-center items-center"},C=["disabled"],$=b(" 點我登入 ");const k={name:"ForgotPassword",components:{ForgotPasswordModal:n(S,[["render",function(s,t,o,n,i,b){const y=a,w=e,I=r("router-link"),S=r("v-form"),k=l("invalid");return d((m(),c("div",{class:"overflow-hidden h-screen ring-myBrown md:w-96 md:h-fit md:rounded-xl md:ring-2 md:shadow-xl md:drop-shadow-2xl",onAnimationend:t[0]||(t[0]=v(((...e)=>b.animationEndHandler&&b.animationEndHandler(...e)),["stop"]))},[E,u("div",j,[p(S,{"validation-schema":i.schema,onSubmit:b.onSubmit,onInvalidSubmit:b.onInvalidSubmit},{default:f((()=>[p(y,{focus:!0,name:"forgot-username",type:"text",label:"帳號",placeholder:"帳號",class:"mb-8","default-value":i.username,"init-value":!0,"success-message":"","onUpdate:modelValue":b.usernameChange},null,8,["default-value","onUpdate:modelValue"]),p(y,{ref:"emailInput",focus:!0,name:"forgot-email",type:"email",label:"Email",placeholder:"Email",class:"mb-4","success-message":""},null,512),u("div",B,[i.signInErrorMsg?(m(),c("span",L,g(i.signInErrorMsg),1)):i.isComplete?(m(),c("span",M,"已將新密碼寄出，請確認您的信箱 !")):h("",!0)]),u("div",P,[u("button",{type:"submit",class:x(["relative button-lg",[i.isComplete?"myButtonInvalid":"myButtonValid myButtonValidHover"]]),disabled:i.isComplete},[p(w,{class:"absolute top-3 left-5 w-5 h-5 text-white align-middle",show:i.isLoading},null,8,["show"]),u("span",null,g(i.isLoading?"請稍後...":"取得新密碼"),1)],10,C),p(I,{class:"py-1 px-4 mt-4 text-lg font-bold text-center text-myBrown underline underline-offset-4 md:hover:underline",to:{name:"SignIn"}},{default:f((()=>[$])),_:1})])])),_:1},8,["validation-schema","onSubmit","onInvalidSubmit"])])],32)),[[k,i.isInvalidAniProcess]])}]])}},A={class:"overflow-hidden h-[calc(100vh-56px-64px)] max-h-[calc(100vh-56px-64px)] md:grid md:grid-cols-2 md:gap-11"},F={class:"my-auto ml-auto"},_=u("div",{class:"-z-10 py-4 my-auto"},[u("div",{class:"hidden overflow-hidden min-w-[464px] max-w-[500px] rounded-xl border-2 border-myBrown -translate-x-1/3 md:block"},[u("img",{class:"block object-cover w-full h-full scale-105",src:"./assets/forgot-bg-767fa56d.svg",alt:"signin background image"})])],-1);var V=n(k,[["render",function(e,a,s,t,o,n){return m(),c("div",A,[u("div",F,[p(y,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:f((()=>[(m(),w(I("ForgotPasswordModal")))])),_:1})]),_])}]]);export{V as default};
