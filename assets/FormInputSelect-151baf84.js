<<<<<<< HEAD:assets/FormInputSelect-151baf84.js
import{as as e,at as t,au as a,av as s,r as l,o,h as n,w as i,d as r,e as u,t as p,l as d,c as m,f as c,a as x,F as f,T as y}from"./vendor-c1c40a3c.js";import{_ as b}from"./index-915c545f.js";const v={components:{Listbox:e,ListboxButton:t,ListboxOptions:a,ListboxOption:s},props:{options:{type:Array,required:!0},modelValue:{type:null,default:""},value:{type:null,default:""},keyProp:{type:String,required:!0},labelProp:{type:String,required:!0},defaultText:{type:String,default:"請選擇"},optionsPosition:{type:String,default:"sticky"}},emits:["update:modelValue"]},g={class:"relative mt-1"},w={class:"block text-sm truncate md:text-base"},k=r("span",{class:"flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none"},[r("span",{class:"text-myBrown material-icons"},"expand_more")],-1),_={key:0,class:"flex absolute inset-y-0 left-0 items-center pl-3 text-amber-600"},h=r("li",{class:"relative py-2 pr-4 pl-6 text-gray-900 cursor-default select-none"},[r("span",{class:"block text-sm truncate md:text-base"},"資料載入中...")],-1);var L=b(v,[["render",function(e,t,a,s,b,v){const L=l("ListboxButton"),P=l("ListboxOption"),V=l("ListboxOptions"),B=l("Listbox");return o(),n(B,{"model-value":a.value||a.modelValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$emit("update:modelValue",t))},{default:i((()=>[r("div",g,[u(L,{class:"myListboxButton"},{default:i((()=>{var e;return[r("span",w,p((null==(e=a.value||a.modelValue)?void 0:e[a.labelProp])||a.defaultText),1),k]})),_:1}),u(y,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i((()=>[0!==a.options.length?(o(),n(V,{key:0,class:d(["overflow-auto z-50 py-1 mt-2 w-full max-h-60 text-base bg-white rounded-md focus:outline-none ring-2 ring-myYellow shadow-lg sm:text-sm",a.optionsPosition])},{default:i((()=>[(o(!0),m(f,null,c(a.options,(e=>(o(),n(P,{key:e[a.keyProp],value:e,as:"template"},{default:i((({active:t,selected:s})=>[r("li",{class:d(["text-sm md:text-base",[t?"text-amber-900 bg-amber-100":"text-gray-900","cursor-default select-none relative py-2 pl-6 pr-4"]])},[r("span",{class:d([s?"font-medium":"font-normal","block truncate"])},p(e[a.labelProp]),3),s?(o(),m("span",_)):x("",!0)],2)])),_:2},1032,["value"])))),128))])),_:1},8,["class"])):(o(),n(V,{key:1,class:d(["overflow-auto z-50 py-1 mt-2 w-full max-h-60 text-base bg-white rounded-md focus:outline-none ring-2 ring-myYellow shadow-lg sm:text-sm",a.optionsPosition])},{default:i((()=>[u(P,{key:"unknow",as:"template"},{default:i((()=>[h])),_:1})])),_:1},8,["class"]))])),_:1})])])),_:1},8,["model-value"])}]]);export{L as _};
=======
import{as as e,at as t,au as a,av as s,r as l,o,h as n,w as i,d as r,e as u,t as p,l as d,c as m,f as c,a as x,F as f,T as y}from"./vendor-358810ac.js";import{_ as b}from"./index-8468366b.js";const v={components:{Listbox:e,ListboxButton:t,ListboxOptions:a,ListboxOption:s},props:{options:{type:Array,required:!0},modelValue:{type:null,default:""},value:{type:null,default:""},keyProp:{type:String,required:!0},labelProp:{type:String,required:!0},defaultText:{type:String,default:"請選擇"},optionsPosition:{type:String,default:"sticky"}},emits:["update:modelValue"]},g={class:"relative mt-1"},w={class:"block text-sm truncate md:text-base"},k=r("span",{class:"flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none"},[r("span",{class:"text-myBrown material-icons"},"expand_more")],-1),_={key:0,class:"flex absolute inset-y-0 left-0 items-center pl-3 text-amber-600"},h=r("li",{class:"relative py-2 pr-4 pl-6 text-gray-900 cursor-default select-none"},[r("span",{class:"block text-sm truncate md:text-base"},"資料載入中...")],-1);var L=b(v,[["render",function(e,t,a,s,b,v){const L=l("ListboxButton"),P=l("ListboxOption"),V=l("ListboxOptions"),B=l("Listbox");return o(),n(B,{"model-value":a.value||a.modelValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$emit("update:modelValue",t))},{default:i((()=>[r("div",g,[u(L,{class:"myListboxButton"},{default:i((()=>{var e;return[r("span",w,p((null==(e=a.value||a.modelValue)?void 0:e[a.labelProp])||a.defaultText),1),k]})),_:1}),u(y,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i((()=>[0!==a.options.length?(o(),n(V,{key:0,class:d(["overflow-auto z-50 py-1 mt-2 w-full max-h-60 text-base bg-white rounded-md focus:outline-none ring-2 ring-myYellow shadow-lg sm:text-sm",a.optionsPosition])},{default:i((()=>[(o(!0),m(f,null,c(a.options,(e=>(o(),n(P,{key:e[a.keyProp],value:e,as:"template"},{default:i((({active:t,selected:s})=>[r("li",{class:d(["text-sm md:text-base",[t?"text-amber-900 bg-amber-100":"text-gray-900","cursor-default select-none relative py-2 pl-6 pr-4"]])},[r("span",{class:d([s?"font-medium":"font-normal","block truncate"])},p(e[a.labelProp]),3),s?(o(),m("span",_)):x("",!0)],2)])),_:2},1032,["value"])))),128))])),_:1},8,["class"])):(o(),n(V,{key:1,class:d(["overflow-auto z-50 py-1 mt-2 w-full max-h-60 text-base bg-white rounded-md focus:outline-none ring-2 ring-myYellow shadow-lg sm:text-sm",a.optionsPosition])},{default:i((()=>[u(P,{key:"unknow",as:"template"},{default:i((()=>[h])),_:1})])),_:1},8,["class"]))])),_:1})])])),_:1},8,["model-value"])}]]);export{L as _};
>>>>>>> 390e0df42db3e68b93a9905f5d8d2655627f9608:assets/FormInputSelect-54f9c2aa.js
