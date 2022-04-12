import{Y as e,Q as t,G as o,a7 as a,r as s,o as l,h as i,w as n,e as d,d as r,N as c,c as m}from"./vendor-358810ac.js";import{_ as u}from"./index-4a5ba290.js";const p={name:"EditModeModal",components:{TransitionRoot:e,TransitionChild:t,Dialog:o,DialogTitle:a},data:()=>({}),methods:{closeModal(){this.$store.commit("CLOSE_MASK"),this.$store.commit("CLOSE_EDIT_MODAL")},goEdit(e){this.closeModal(),this.$router.push({name:e})}}},x={class:"overflow-y-auto fixed inset-0 z-50"},g={class:"px-4 min-h-screen text-center"},v=r("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," ​ ",-1),f={class:"inline-block overflow-hidden z-50 my-8 w-full text-left align-middle bg-white rounded-2xl shadow-xl transition-all md:max-w-3xl"},h=r("span",null,"選擇編輯模式",-1),y=[r("span",{class:"transition-all md:group-hover:scale-125 material-icons"},"close",-1)],w={class:"grid grid-rows-2 gap-8 py-6 px-4 bg-myGray md:grid-cols-2 md:grid-rows-none md:py-12 md:px-20"},b={class:"flex flex-col justify-between items-center"},M=r("div",{class:"w-36 h-36 md:w-[160px] md:h-[160px]"},[r("img",{src:"./assets/edit-kiruMode-a1cb735c.svg",alt:"kiru mode"})],-1),E=r("p",{class:"my-6 font-medium text-myBrown"}," 切切獨創的編輯模式，讓你不用再為了編排而煩惱，專注在內容撰寫的好幫手。 ",-1),B=[r("span",null,"切切模式",-1)],C={class:"flex flex-col justify-between items-center"},k=r("div",{class:"w-36 h-36 md:w-[160px] md:h-[160px]"},[r("img",{src:"./assets/edit-normalMode-6cf0a139.svg",alt:"kiru mode"})],-1),_=r("p",{class:"my-6 font-medium text-myBrown"}," 具備常見文字編輯器功能的寫作模式。 ",-1),T=[r("span",null,"一般模式",-1)];var D=u(p,[["render",function(e,t,o,a,c,m){const u=s("DialogTitle"),p=s("TransitionChild"),D=s("Dialog"),j=s("TransitionRoot");return l(),i(j,{appear:"",show:e.$store.state.openEditModal,as:"template"},{default:n((()=>[d(D,{as:"div",onClose:m.closeModal},{default:n((()=>[r("div",x,[r("div",g,[v,d(p,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n((()=>[r("div",f,[d(u,{as:"h2",class:"relative py-4 text-2xl font-medium leading-6 text-center text-myYellow bg-myBrown md:text-3xl"},{default:n((()=>[h,r("button",{type:"button",class:"group absolute top-1/2 right-4 p-4 -translate-y-1/2",onClick:t[0]||(t[0]=(...e)=>m.closeModal&&m.closeModal(...e))},y)])),_:1}),r("div",w,[r("div",b,[M,E,r("button",{type:"button",class:"group button-xl myButtonValid myButtonValidHover",onClick:t[1]||(t[1]=e=>m.goEdit("EditKiru"))},B)]),r("div",C,[k,_,r("button",{type:"button",class:"button-xl myButtonValid myButtonValidHover",onClick:t[2]||(t[2]=e=>m.goEdit("EditNormal"))},T)])])])])),_:1})])])])),_:1},8,["onClose"])])),_:1},8,["show"])}]]);const j={name:"HomePage",components:{EditModeModal:D},mounted(){c.configure({parent:"#progressBar"})}},V={class:"overflow-x-hidden mx-auto md:overflow-visible"},$=r("div",{id:"progressBar",class:"fixed inset-x-0 h-1"},null,-1),H={class:"min-h-[calc(100vh-64px-56px)]"};var L=u(j,[["render",function(e,t,o,a,i,n){const c=s("router-view"),u=D;return l(),m("div",V,[$,r("div",H,[d(c),d(c,{name:"landing"})]),d(u)])}]]);export{L as default};
