(function(e){function t(t){for(var u,i,a=t[0],o=t[1],r=t[2],s=0,b=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(u in o)Object.prototype.hasOwnProperty.call(o,u)&&(e[u]=o[u]);f&&f(t);while(b.length)b.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],u=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(u=!1)}u&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var u={},c={app:0},l=[];function i(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=u,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)i.d(n,u,function(t){return e[t]}.bind(null,u));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var r=0;r<a.length;r++)t(a[r]);var f=o;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"163c":function(e,t,n){},"19f0":function(e,t,n){"use strict";n("163c")},"4db5":function(e,t,n){},"4dcb":function(e,t,n){},5233:function(e,t,n){},"622c":function(e,t,n){},b2de:function(e,t,n){"use strict";n("4db5")},b6b3:function(e,t,n){"use strict";n("622c")},bbb7:function(e,t,n){"use strict";n("5233")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("7a23"),c=(n("4dcb"),Object(u["u"])("data-v-1e757388"));Object(u["k"])("data-v-1e757388");var l={class:"app"};Object(u["j"])();var i=c((function(e,t,n,c,i,a){var o=Object(u["n"])("SelectDifficulty"),r=Object(u["n"])("MineSweeper");return Object(u["i"])(),Object(u["d"])("div",l,[Object(u["f"])("div",{class:["app-main",{"show-game":e.isShowGame}]},[Object(u["f"])(o,{class:"app-section","onShow-game":e.showGame},null,8,["onShow-game"]),Object(u["f"])(r,{class:"app-section",play:e.isShowGame,width:e.width,height:e.height,"mine-count":e.mineCount,"onShow-select-difficulty":e.showSelectDifficulty},null,8,["play","width","height","mine-count","onShow-select-difficulty"])],2)])})),a=Object(u["u"])("data-v-842af1f8");Object(u["k"])("data-v-842af1f8");var o={class:"select-difficulty"},r={class:"select-difficulty-section"},f={class:"select-difficulty-row"},s=Object(u["f"])("div",null,"8 x 8",-1),b=Object(u["f"])("div",null,"10 个雷",-1),d=Object(u["f"])("div",null,"16 x 16",-1),v=Object(u["f"])("div",null,"40 个雷",-1),p={class:"select-difficulty-row"},j=Object(u["f"])("div",null,"30 x 16",-1),O=Object(u["f"])("div",null,"99 个雷",-1),m=Object(u["f"])("div",null,"?",-1),h=Object(u["f"])("div",null,"自定义",-1),w={class:"select-difficulty-section"},y={class:"form-group"},g=Object(u["f"])("label",{class:"form-label"}," 宽度 ",-1),C={class:"form-group"},S=Object(u["f"])("label",{class:"form-label"}," 高度 ",-1),k={class:"form-group"},x=Object(u["f"])("label",{class:"form-label"}," 雷数 ",-1),M={class:"form-group"},N={class:"form-group"};Object(u["j"])();var V=a((function(e,t,n,c,l,i){var a=Object(u["n"])("MineSweeperInputNumber");return Object(u["i"])(),Object(u["d"])("div",o,[Object(u["f"])("div",{class:["select-difficulty-container",{"show-customize":e.isShowCustomize}]},[Object(u["f"])("div",r,[Object(u["f"])("div",f,[Object(u["f"])("div",{class:"select-difficulty-item",onClick:t[1]||(t[1]=function(t){return e.$emit("show-game",8,8,10)})},[s,b]),Object(u["f"])("div",{class:"select-difficulty-item",onClick:t[2]||(t[2]=function(t){return e.$emit("show-game",16,16,40)})},[d,v])]),Object(u["f"])("div",p,[Object(u["f"])("div",{class:"select-difficulty-item",onClick:t[3]||(t[3]=function(t){return e.$emit("show-game",30,16,99)})},[j,O]),Object(u["f"])("div",{class:"select-difficulty-item",onClick:t[4]||(t[4]=function(t){return e.isShowCustomize=!0})},[m,h])])]),Object(u["f"])("div",w,[Object(u["f"])("div",null,[Object(u["f"])("div",y,[g,Object(u["f"])(a,{modelValue:e.width,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.width=t}),class:"form-content",max:50,min:1},null,8,["modelValue"])]),Object(u["f"])("div",C,[S,Object(u["f"])(a,{modelValue:e.height,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.height=t}),class:"form-content",max:50,min:1},null,8,["modelValue"])]),Object(u["f"])("div",k,[x,Object(u["f"])(a,{modelValue:e.mineCount,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.mineCount=t}),class:"form-content",max:e.width*e.height,min:1},null,8,["modelValue","max"])]),Object(u["f"])("div",M,[Object(u["f"])("button",{class:"mine-sweeper-button",onClick:t[8]||(t[8]=function(t){return e.$emit("show-game",e.width,e.height,e.mineCount)})}," 玩游戏 ")]),Object(u["f"])("div",N,[Object(u["f"])("button",{class:"mine-sweeper-button",onClick:t[9]||(t[9]=function(t){return e.isShowCustomize=!1})}," 取消 ")])])])],2)])})),_=Object(u["u"])("data-v-0593e560");Object(u["k"])("data-v-0593e560");var P={class:"input-group"};Object(u["j"])();var I=_((function(e,t,n,c,l,i){return Object(u["i"])(),Object(u["d"])("div",P,[Object(u["f"])("div",{class:"input-group-addon",onClick:t[1]||(t[1]=function(){return e.doMinus.apply(e,arguments)})}," - "),Object(u["s"])(Object(u["f"])("input",{ref:"inputRef","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model=t}),class:"form-control"},null,512),[[u["q"],e.model]]),Object(u["f"])("div",{class:"input-group-addon",onClick:t[3]||(t[3]=function(){return e.doPlus.apply(e,arguments)})}," + ")])})),q=(n("a9e3"),n("8ba4"),n("9129"),Object(u["g"])({name:"MineSweeperInputNumber",props:{modelValue:{type:Number,required:!0},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1}},emits:{"update:modelValue":null},setup:function(e,t){var n=t.emit,c=Object(u["p"])(e),l=c.modelValue,i=c.min,a=c.max,o=c.step,r=Object(u["l"])(null),f=Object(u["b"])({get:function(){return l.value},set:function(e){var t=Number(e);Number.isNaN(t)||!Number.isInteger(t)||t>a.value||t<i.value?null!==r.value&&(r.value.value=l.value):n("update:modelValue",t)}});function s(){f.value-=o.value}function b(){f.value+=o.value}function d(){f.value>a.value&&(f.value=a.value),f.value<i.value&&(f.value=i.value)}return Object(u["r"])([i,a],d,{flush:"post"}),{model:f,doMinus:s,doPlus:b,inputRef:r}}}));n("b6b3");q.render=I,q.__scopeId="data-v-0593e560";var z=q,A=Object(u["g"])({name:"SelectDifficulty",emits:{"show-game":null},components:{MineSweeperInputNumber:z},setup:function(){var e=Object(u["l"])(!1),t=Object(u["l"])(30),n=Object(u["l"])(16),c=Object(u["l"])(99);return{isShowCustomize:e,width:t,height:n,mineCount:c}}});n("19f0");A.render=V,A.__scopeId="data-v-842af1f8";var D=A,G=Object(u["u"])("data-v-361bdf97");Object(u["k"])("data-v-361bdf97");var $={class:"game-container"},R={key:0,class:"iconfont"},U={key:1,class:"iconfont"},J={key:0,class:"iconfont"},L={key:1},T={class:"panel-container"},B={class:"panel-data-container"},E=Object(u["f"])("span",{class:"iconfont",style:{"font-size":"60px"}},"",-1);Object(u["j"])();var F=G((function(e,t,n,c,l,i){return Object(u["i"])(),Object(u["d"])("div",$,[Object(u["f"])("div",{class:"mine-sweeper-container",onContextmenu:t[1]||(t[1]=Object(u["t"])((function(){}),["prevent"]))},[(Object(u["i"])(!0),Object(u["d"])(u["a"],null,Object(u["m"])(e.height,(function(t){return Object(u["i"])(),Object(u["d"])("div",{key:t,class:"mine-sweeper-row"},[(Object(u["i"])(!0),Object(u["d"])(u["a"],null,Object(u["m"])(e.width,(function(n){return Object(u["i"])(),Object(u["d"])("div",{key:n,class:["mine-sweeper-item",{"is-open":e.openStatus[(t-1)*e.width+n-1]}],onClick:Object(u["t"])((function(u){return e.handleLeftClick(t-1,n-1)}),["left"]),onContextmenu:Object(u["t"])((function(u){return e.handleRightClick(t-1,n-1)}),["right"])},[1===e.markStatus[(t-1)*e.width+(n-1)]?(Object(u["i"])(),Object(u["d"])("span",R,"")):2===e.markStatus[(t-1)*e.width+(n-1)]?(Object(u["i"])(),Object(u["d"])("span",U,"")):e.openStatus[(t-1)*e.width+(n-1)]?(Object(u["i"])(),Object(u["d"])(u["a"],{key:2},[e.mines[(t-1)*e.width+(n-1)]?(Object(u["i"])(),Object(u["d"])("span",J,"")):e.neighbourMineCount[(t-1)*e.width+(n-1)]>0?(Object(u["i"])(),Object(u["d"])("span",L,Object(u["o"])(e.neighbourMineCount[(t-1)*e.width+(n-1)]),1)):Object(u["e"])("",!0)],64)):Object(u["e"])("",!0)],42,["onClick","onContextmenu"])})),128))])})),128))],32),Object(u["f"])("div",T,[Object(u["f"])("div",B,[E,Object(u["f"])("div",null,Object(u["o"])(e.selectedMineCount)+" / "+Object(u["o"])(e.mineCount),1)]),Object(u["f"])("div",null,[Object(u["f"])("button",{class:"mine-sweeper-button",onClick:t[2]||(t[2]=function(){return e.reStart.apply(e,arguments)})}," 重开一局 "),Object(u["f"])("button",{class:"mine-sweeper-button",style:{"margin-top":"15px"},onClick:t[3]||(t[3]=function(t){return e.$emit("show-select-difficulty")})}," 改变难度 ")])])])}));n("a623"),n("cb29"),n("a434");function H(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t;n<e.length;n++){var u=Math.floor(Math.random()*(n+1)),c=e[u];e[u]=e[n],e[n]=c}}var K=Object(u["g"])({name:"MineSweeper",emits:{"show-select-difficulty":null},props:{play:{type:Boolean,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0},mineCount:{type:Number,required:!0}},setup:function(e){var t=Object(u["p"])(e),n=t.play,c=t.width,l=t.height,i=t.mineCount,a=Object(u["l"])(!1),o=Object(u["l"])([]),r=Object(u["l"])([]),f=Object(u["l"])([]),s=Object(u["l"])(0);function b(e,t,n){a.value=!1;for(var u=e*t,c=new Array(u).fill(0),l=0;l<n;l++)c[l]=1;H(c,n),o.value=c,r.value=new Array(u).fill(0),f.value=new Array(u).fill(0),s.value=0}function d(){b(c.value,l.value,i.value)}var v=Object(u["b"])((function(){for(var e=new Array(c.value*l.value).fill(0),t=0;t<e.length;t++)if(o.value[t])for(var n=t%c.value,u=(t-n)/c.value,i=-1;i<2;i++){var a=u+i;if(!(a<0||a===l.value))for(var r=-1;r<2;r++){var f=n+r;f<0||f===c.value||e[a*c.value+f]++}}return e}));function p(e,t){if(!(e<0||t<0||e===l.value||t===c.value)){var n=e*c.value+t;if(1!==r.value[n]&&(r.value.splice(n,1,1),!(v.value[n]>0)))for(var u=-1;u<2;u++)for(var i=-1;i<2;i++)p(e+u,t+i)}}function j(e,t){if(!a.value){var n=e*c.value+t;if(1!==r.value[n]&&1!==f.value[n])return o.value[n]?(r.value.splice(n,1,1),a.value=!0,void Object(u["h"])((function(){alert("mine")}))):void(v.value[n]>0?r.value.splice(n,1,1):p(e,t))}}function O(e,t){if(!a.value){var n=e*c.value+t;1!==r.value[n]&&(f.value.splice(n,1,(f.value[n]+1)%3),1===f.value[n]?s.value++:2===f.value[n]&&s.value--)}}return Object(u["r"])((function(){return n.value}),(function(e){e&&b(c.value,l.value,i.value)})),Object(u["r"])((function(){return s.value}),(function(e){if(e===i.value){var t=o.value.every((function(e,t){return!!(e&&1===f.value[t]||!e&&1!==f.value[t])}));t&&(Object(u["h"])((function(){alert("win")})),a.value=!0)}})),{isEnd:a,mines:o,openStatus:r,markStatus:f,selectedMineCount:s,neighbourMineCount:v,reStart:d,handleLeftClick:j,handleRightClick:O}}});n("bbb7");K.render=F,K.__scopeId="data-v-361bdf97";var Q=K,W=Object(u["g"])({name:"App",setup:function(){var e=Object(u["l"])(!1),t=Object(u["l"])(0),n=Object(u["l"])(0),c=Object(u["l"])(0);function l(u,l,i){e.value=!0,t.value=u,n.value=l,c.value=i}function i(){e.value=!1}return{isShowGame:e,width:t,height:n,mineCount:c,showGame:l,showSelectDifficulty:i}},components:{SelectDifficulty:D,MineSweeper:Q}});n("b2de");W.render=i,W.__scopeId="data-v-1e757388";var X=W;Object(u["c"])(X).mount("#app")}});