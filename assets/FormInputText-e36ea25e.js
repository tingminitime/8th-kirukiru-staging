<<<<<<< HEAD:assets/FormInputText-e36ea25e.js
import{ao as e,af as t,a8 as a,o as l,c as r,s as o,d as s,l as n,t as u,u as p,ag as d}from"./vendor-c1c40a3c.js";import"./object-8d30a8af.js";import{_ as i}from"./index-915c545f.js";const c={name:"FormInputText",props:{focus:{type:Boolean,default:!1},type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,required:!0},label:{type:String,required:!0},successMessage:{type:String,default:""},placeholder:{type:String,default:""},defaultValue:{type:String,default:""},initValue:{type:Boolean,default:!1},inputBorder:{type:String,default:"border-2 border-myBrown focus:border-myYellow"}},emits:["update:model-value"],setup(a){const{value:l,errorMessage:r,handleBlur:o,handleChange:s,meta:n}=e(a.name,void 0,{initialValue:a.value});return t(l,(e=>{a.initValue&&d((()=>{l.value=a.defaultValue}))}),{immediate:!0}),{handleChange:s,handleBlur:o,errorMessage:r,inputValue:l,meta:n}},methods:{handleInput(e){this.handleChange(e),this.$emit("update:model-value",e.target.value.trim())}}},m=["id","name","type","placeholder","value"],f=["for"];var h=i(c,[["render",function(e,t,d,i,c,h){const g=a("focus");return l(),r("div",{class:n(["relative",{"text-red-500":!!i.errorMessage}])},[o(s("input",{id:d.name,name:d.name,type:d.type,placeholder:d.placeholder,value:i.inputValue,class:n([[{"text-red-500":!!i.errorMessage},d.inputBorder],"peer placeholder-shown:py-2 px-2 pt-8 focus:pt-8 pb-4 focus:pb-4 w-full h-10 text-base tracking-wide placeholder:text-transparent rounded-lg focus:outline-none transition-all placeholder:select-none"]),onInput:t[0]||(t[0]=(...e)=>h.handleInput&&h.handleInput(...e)),onBlur:t[1]||(t[1]=(...e)=>i.handleBlur&&i.handleBlur(...e))},null,42,m),[[g,d.focus]]),s("label",{for:d.name,class:"absolute top-1 peer-placeholder-shown:top-2.5 peer-focus:top-1 left-2.5 text-xs peer-placeholder-shown:text-sm peer-focus:text-xs font-medium text-myBrown peer-placeholder-shown:text-myBrown/50 peer-focus:text-myBrown transition-all"},u(d.placeholder),9,f),o(s("p",{class:"absolute -bottom-6 left-0 m-0 text-sm"},u(i.errorMessage||d.successMessage),513),[[p,i.errorMessage||i.meta.valid]])],2)}]]);export{h as _};
=======
import{ao as e,ac as t,ai as a,o as l,c as r,s as o,d as s,l as n,t as u,u as p,ad as d}from"./vendor-358810ac.js";import"./object-fe354ed4.js";import{_ as i}from"./index-8468366b.js";const c={name:"FormInputText",props:{focus:{type:Boolean,default:!1},type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,required:!0},label:{type:String,required:!0},successMessage:{type:String,default:""},placeholder:{type:String,default:""},defaultValue:{type:String,default:""},initValue:{type:Boolean,default:!1},inputBorder:{type:String,default:"border-2 border-myBrown focus:border-myYellow"}},emits:["update:model-value"],setup(a){const{value:l,errorMessage:r,handleBlur:o,handleChange:s,meta:n}=e(a.name,void 0,{initialValue:a.value});return t(l,(e=>{a.initValue&&d((()=>{l.value=a.defaultValue}))}),{immediate:!0}),{handleChange:s,handleBlur:o,errorMessage:r,inputValue:l,meta:n}},methods:{handleInput(e){this.handleChange(e),this.$emit("update:model-value",e.target.value.trim())}}},m=["id","name","type","placeholder","value"],h=["for"];var f=i(c,[["render",function(e,t,d,i,c,f){const g=a("focus");return l(),r("div",{class:n(["relative",{"text-red-500":!!i.errorMessage}])},[o(s("input",{id:d.name,name:d.name,type:d.type,placeholder:d.placeholder,value:i.inputValue,class:n([[{"text-red-500":!!i.errorMessage},d.inputBorder],"peer placeholder-shown:py-2 px-2 pt-8 focus:pt-8 pb-4 focus:pb-4 w-full h-10 text-base tracking-wide placeholder:text-transparent rounded-lg focus:outline-none transition-all placeholder:select-none"]),onInput:t[0]||(t[0]=(...e)=>f.handleInput&&f.handleInput(...e)),onBlur:t[1]||(t[1]=(...e)=>i.handleBlur&&i.handleBlur(...e))},null,42,m),[[g,d.focus]]),s("label",{for:d.name,class:"absolute top-1 peer-placeholder-shown:top-2.5 peer-focus:top-1 left-2.5 text-xs peer-placeholder-shown:text-sm peer-focus:text-xs font-medium text-myBrown peer-placeholder-shown:text-myBrown/50 peer-focus:text-myBrown transition-all"},u(d.placeholder),9,h),o(s("p",{class:"absolute -bottom-6 left-0 m-0 text-sm"},u(i.errorMessage||d.successMessage),513),[[p,i.errorMessage||i.meta.valid]])],2)}]]);export{f as _};
>>>>>>> 390e0df42db3e68b93a9905f5d8d2655627f9608:assets/FormInputText-27802ca3.js
