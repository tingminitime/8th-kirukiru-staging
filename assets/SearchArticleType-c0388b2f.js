import{o as e,c as t,a as o,d as r,l,F as a}from"./vendor-385d4c3c.js";import{_ as n}from"./index-ac332303.js";var m=n({name:"SearchArticleType",props:{searchType:{type:String,default:"kiru"}},emits:["article-type"],data:()=>({}),methods:{articleTypeChange(e){this.$emit("article-type",e)}}},[["render",function(n,m,d,s,b,i){return e(),t(a,null,[o(" 選擇切切 / 一般 "),r("div",{class:l(["before:hidden flex relative before:absolute before:top-0 before:left-0 gap-4 justify-center items-center px-8 before:w-1/2 before:h-full before:bg-myYellow before:transition-all md:before:block md:gap-0 md:px-0",{"before:translate-x-full":"common"===d.searchType}])},[r("button",{type:"button",class:l(["block z-10 py-1 w-full text-sm font-semibold text-center text-myBrown rounded-xl border border-myYellow transition-all md:py-2 md:text-base md:hover:bg-myYellow/10 md:rounded-none",{"bg-myYellow":"kiru"===d.searchType}]),onClick:m[0]||(m[0]=e=>i.articleTypeChange("kiru"))}," 切切文章 ",2),r("button",{type:"button",class:l(["block z-10 py-1 w-full text-sm font-semibold text-center text-myBrown rounded-xl border border-myYellow transition-all md:py-2 md:text-base md:hover:bg-myYellow/10 md:rounded-none md:border-l-0",{"bg-myYellow":"common"===d.searchType}]),onClick:m[1]||(m[1]=e=>i.articleTypeChange("common"))}," 一般文章 ",2)],2)],2112)}]]);export{m as _};
