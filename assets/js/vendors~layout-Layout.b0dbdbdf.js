(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{246:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(221),r=n(244),o=n(220);const s=r.a.extend({data:()=>({encryptPasswordConfig:{}}),computed:{pathEncryptMatchKeys(){return Object(o.a)(this.encryptOptions,this.$route.path)},isPathEncrypted(){if(0===this.pathEncryptMatchKeys.length)return!1;const{config:t}=this.encryptOptions;return this.pathEncryptMatchKeys.every(e=>{const n=t[e],r="string"==typeof n?[n]:n;return!this.encryptPasswordConfig[e]||r.every(t=>!Object(a.compareSync)(this.encryptPasswordConfig[e],t))})}},mounted(){const t=localStorage.getItem("encryptConfig");t&&(this.encryptPasswordConfig=JSON.parse(t))},methods:{checkPathPassword(t){const{config:e}=this.$themeConfig.encrypt;for(const n of this.pathEncryptMatchKeys){const r=e[n];if(("string"==typeof r?[r]:r).filter(e=>Object(a.compareSync)(t,e))){this.$set(this.encryptPasswordConfig,n,t),localStorage.setItem("encryptConfig",JSON.stringify(this.encryptPasswordConfig));break}}}}})},333:function(t,e,n){},334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){},339:function(t,e,n){},340:function(t,e,n){},341:function(t,e,n){},479:function(t,e,n){t.exports=n.p+"assets/img/hero.b62ddd9c.jpg"},480:function(t,e,n){"use strict";n(333)},481:function(t,e,n){"use strict";n(334)},482:function(t,e,n){"use strict";n(335)},483:function(t,e,n){"use strict";n(336)},484:function(t,e,n){"use strict";n(337)},485:function(t,e,n){"use strict";n(338)},486:function(t,e,n){"use strict";n(339)},487:function(t,e,n){"use strict";n(340)},488:function(t,e,n){"use strict";n(341)},520:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(214),o=n(249),s=n(194),i=n(479),l=n.n(i),c=a.a.extend({name:"BlogHero",components:{MyTransition:s.a},data:()=>({defaultHeroImage:l.a}),computed:{heroImageStyle(){const t={maxHeight:"180px",margin:!1===this.$frontmatter.showTitle?"6rem auto 1.5rem":"1rem auto"};return Object.assign(Object.assign({},t),this.$frontmatter.heroImageStyle)},bgImageStyle(){const{bgImageStyle:t={}}=this.$frontmatter;return Object.assign(Object.assign({},{height:"350px",textAlign:"center",overflow:"hidden"}),t)}}}),u=(n(480),n(1)),p=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return!1!==t.$frontmatter.hero?n("div",{staticClass:"blog-hero",class:{full:t.$frontmatter.heroFullScreen},style:Object.assign({},t.bgImageStyle)},[n("div",{staticClass:"mask",style:{background:"url("+(t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):t.defaultHeroImage)+") center/cover no-repeat"}}),t._v(" "),n("MyTransition",{attrs:{delay:.04}},[t.$frontmatter.heroImage?n("img",{staticClass:"hero-logo",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.08}},[!1!==t.$frontmatter.showTitle?n("h1",[t._v("\n      "+t._s(t.$frontmatter.heroText||t.$title||"Hope")+"\n    ")]):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[t.$description?n("p",{staticClass:"description",domProps:{textContent:t._s(t.$description)}}):t._e()])],1):t._e()}),[],!1,null,null,null).exports,h=n(360),m=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon book-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,d=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon link-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,f=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,g=n(205),v=a.a.extend({name:"ProjectList",components:{ArticleIcon:h.a,BookIcon:m,LinkIcon:d,ProjectIcon:f},methods:{navigate(t){Object(g.a)(t,this.$router,this.$route)}}}),_=(n(481),Object(u.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-list"},t._l(t.$frontmatter.project||[],(function(e,a){return n("div",{key:e.name,staticClass:"project",class:"project"+a%9,on:{click:function(n){return t.navigate(e.link)}}},[e.cover?n("div",{staticClass:"cover",style:"background: url("+t.$withBase(e.cover)+") center/cover no-repeat;"}):t._e(),t._v(" "),n(e.type+"-icon",{tag:"component"}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(e.desc))])],1)})),0)}),[],!1,null,null,null).exports),y=a.a.extend({name:"BlogHome",components:{ArticleList:o.a,BlogHero:p,BlogInfo:r.a,MyTransition:s.a,ProjectList:_}}),b=(n(482),Object(u.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page blog"},[e("BlogHero"),this._v(" "),e("div",{staticClass:"blog-page-wrapper"},[e("main",{staticClass:"blog-home"},[e("MyTransition",{attrs:{delay:.16}},[e("ProjectList")],1),this._v(" "),e("MyTransition",{attrs:{delay:.24}},[e("ArticleList",{key:this.$route.path})],1)],1),this._v(" "),e("MyTransition",{attrs:{delay:.16}},[e("BlogInfo")],1)],1),this._v(" "),e("MyTransition",{attrs:{delay:.28}},[e("Content",{key:this.$route.path,staticClass:"theme-default-content",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),$=n(193),C=n(248),w=n(206),x=a.a.extend({name:"Home",components:{MyTransition:s.a,NavLink:w.a},computed:{actionLinks(){const{action:t}=this.$frontmatter;return Array.isArray(t)?t:[t]}},methods:{navigate(t){Object(g.a)(t,this.$router,this.$route)}}}),k=(n(483),Object(u.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[n("MyTransition",[t.$frontmatter.heroImage?n("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("MyTransition",[t.$frontmatter.darkHeroImage?n("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("div",{staticClass:"hero-info"},[n("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?n("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.08}},[n("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?n("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return n("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?n("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(e,a){return[e.link?n("div",{key:a,staticClass:"feature link",class:"feature"+a%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(n){return t.navigate(e.link)}}},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])]):n("div",{key:a,staticClass:"feature",class:"feature"+a%9},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])]}))],2):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.24}},[n("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports),T=n(359),I=n(197);let P=null;var j=a.a.extend({name:"Waline",props:{walineConfig:{type:Object,required:!0}},data:()=>({waline:null}),computed:{walineEnable(){const{walineConfig:t}=this;return Boolean(null==t?void 0:t.serverURL)},commentDisplay(){if(!this.walineEnable)return!1;const t=!1!==this.walineConfig.comment,e=this.$page.frontmatter.comment;return t&&!1!==e||!0===e},visitorDisplay(){if(!this.walineEnable)return!1;const t=!1!==this.walineConfig.visitor,e=this.$page.frontmatter.visitor;return t&&!1!==e||!0===e}},watch:{$route(t,e){t.path!==e.path&&a.a.nextTick(()=>{P&&clearTimeout(P),P=setTimeout(()=>{var t;null===(t=this.waline)||void 0===t||t.update({})},1e3)})}},mounted(){this.walineEnable&&(P=setTimeout(()=>{const{walineConfig:t}=this;n.e(32).then(n.t.bind(null,519,7)).then(({default:e})=>{this.waline=e(Object.assign(Object.assign({el:"#waline-comment",lang:"zh-CN"===this.$lang?"zh-CN":"en-US",locale:{placeholder:I.d[this.$localePath||"/"]},meta:t.meta||["nick","mail"],requiredMeta:t.requiredMeta||["nick"],emoji:["https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili","https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo"]},t),{dark:"body.theme-dark",visitor:this.visitorDisplay,path:"undefined"==typeof window?"":window.location.pathname}))})},1e3))},beforeDestroy(){var t;P&&clearTimeout(P),null===(t=this.waline)||void 0===t||t.destroy()}}),M=(n(484),Object(u.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.commentDisplay,expression:"commentDisplay"}],staticClass:"waline-wrapper"},[e("div",{attrs:{id:"waline-comment"}})])}),[],!1,null,null,null).exports),O=a.a.extend({name:"Comment",components:{Valine:$.a,Waline:M},data:()=>({options:I.a}),computed:{pluginEnable(){return"disable"!==this.options.type&&(this.$frontmatter.comment||!1!==this.options.comment&&("valine"===this.options.type||!1!==this.$frontmatter.comment))}}}),E=Object(u.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.pluginEnable,expression:"pluginEnable"}],staticClass:"comments-wrapper"},["valine"===t.options.type?n("Valine",{attrs:{"valine-config":t.options}}):"waline"===t.options.type?n("Waline",{attrs:{"waline-config":t.options}}):"vssue"===t.options.type?n("Vssue",{attrs:{title:t.$title}}):t._e()],1)}),[],!1,null,null,null).exports,L=n(364),B=a.a.extend({name:"AuthorInfo",components:{AuthorIcon:L.a},data:()=>({commentOption:I.a}),computed:{author(){const{author:t}=this.$frontmatter;return t||(!1===t?"":this.commentOption.author||"")},hint(){return I.b[this.$localePath||"/"].author}}}),A=Object(u.a)(B,(function(){var t=this.$createElement,e=this._self._c||t;return this.author?e("span",{attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("AuthorIcon"),this._v(" "),e("span",{attrs:{property:"author"},domProps:{textContent:this._s(this.author)}})],1):this._e()}),[],!1,null,null,null).exports,S=n(356),H=n(366),N=a.a.extend({name:"ReadingTimeInfo",components:{TimerIcon:H.a},computed:{readingTime(){return`PT${Math.max(Math.round(this.$page.readingTime.minutes),1)}M`},text(){const t=I.c[this.$localePath||"/"].minute,e=I.c[this.$localePath||"/"].time;return this.$page.readingTime.minutes<1?t:e.replace("$time",Math.round(this.$page.readingTime.minutes).toString())},hint(){return I.b[this.$localePath||"/"].readingTime}}}),z=Object(u.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("span",{staticClass:"reading-time-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("TimerIcon"),t._v(" "),n("span",{domProps:{textContent:t._s(t.text)}}),t._v(" "),n("meta",{attrs:{property:"timeRequired",content:t.readingTime}})],1):t._e()}),[],!1,null,null,null).exports,D=n(357),V=n(365),R=a.a.extend({name:"TimeInfo",components:{CalendarIcon:V.a},computed:{time(){const{date:t,time:e=t}=this.$frontmatter;if("string"==typeof e){if(-1!==e.indexOf("T")){const[t,n]=e.split("T"),[a]=n.split(".");return`${t} ${"00:00:00"===a?"":a}`}return e}const{createTimeStamp:n}=this.$page;if(n){const t=new Date(n);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}return""},hint(){return I.b[this.$localePath||"/"].time}}}),W=Object(u.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return this.time?e("span",{staticClass:"time-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("CalendarIcon"),this._v(" "),e("span",{attrs:{property:"datePublished"},domProps:{textContent:this._s(this.time)}})],1):this._e()}),[],!1,null,null,null).exports,q=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 0 0-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,K=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,U=a.a.extend({name:"VisitorInfo",components:{EyeIcon:q,FireIcon:K},data:()=>({count:0}),computed:{enableVisitor(){if(!Boolean("valine"===I.a.type&&I.a.appId&&I.a.appKey||"waline"===I.a.type&&I.a.serverURL))return!1;const t=!1!==I.a.visitor,e=this.$frontmatter.visitor;return t&&!1!==e||Boolean(e)},visitorID(){const{base:t}=this.$site;return t?`${t.slice(0,t.length-1)}${this.$page.path}`:this.$page.path},hint(){return I.b[this.$localePath||"/"].views}},watch:{$route(t,e){t.path!==e.path&&setTimeout(()=>{this.getCount()},500)}},mounted(){setTimeout(()=>{this.getCount()},1500)},methods:{getCount(){const t=document.querySelector(".leancloud_visitors .leancloud-visitors-count");if(t){const e=t.textContent;e&&!isNaN(Number(e))?this.count=Number(e):setTimeout(()=>{this.getCount()},500)}}}}),F=Object(u.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.enableVisitor?n("span",{staticClass:"visitor-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[t.count<1e3?n("EyeIcon"):n("FireIcon"),t._v(" "),n("span",{staticClass:"leancloud_visitors",attrs:{id:t.visitorID,"data-flag-title":t.$page.title}},[n("span",{staticClass:"leancloud-visitors-count"},[t._v("...")])])],1):t._e()}),[],!1,null,null,null).exports,J=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon word-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M518.217 432.64V73.143A73.143 73.143 0 0 1 603.43 1.097a512 512 0 0 1 419.474 419.474 73.143 73.143 0 0 1-72.046 85.212H591.36a73.143 73.143 0 0 1-73.143-73.143z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M493.714 566.857h340.297a73.143 73.143 0 0 1 73.143 85.577A457.143 457.143 0 1 1 371.566 117.76a73.143 73.143 0 0 1 85.577 73.143v339.383a36.571 36.571 0 0 0 36.571 36.571z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,Y=a.a.extend({name:"ReadTimeInfo",components:{WordIcon:J},computed:{words(){return I.c[this.$localePath||"/"].word.replace("$word",this.$page.readingTime.words.toString())},hint(){return I.b[this.$localePath||"/"].words}}}),G=Object(u.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.words?n("span",{staticClass:"words-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("WordIcon"),t._v(" "),n("span",{domProps:{textContent:t._s(t.words)}}),t._v(" "),n("meta",{attrs:{property:"wordCount",content:t.$page.readingTime.words}})],1):t._e()}),[],!1,null,null,null).exports,Q=(n(65),a.a.extend({name:"PageInfo",components:{AuthorInfo:A,CategoryInfo:S.a,ReadingTimeInfo:z,TagInfo:D.a,TimeInfo:W,VisitorInfo:F,WordInfo:G},data:()=>({commentConfig:I.a}),computed:{config(){const t=this.$themeConfig.pageInfo,e=this.commentConfig.pageInfo,n=this.$page.frontmatter.pageInfo;return!1!==n&&(Array.isArray(n)?n:!1!==e&&(Array.isArray(e)?e:!1!==t&&(Array.isArray(t)?t:["author","visitor","time","category","tag","reading-time"])))},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"},isOriginal(){return!0===this.$frontmatter.original},originText(){return I.b[this.$localePath||"/"].origin}}})),X=(n(485),Object(u.a)(Q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title",attrs:{vocab:"https://schema.org/",typeof:"Article"}},[n("h1",[t.$frontmatter.icon?n("i",{class:"iconfont "+t.iconPrefix+t.$frontmatter.icon}):t._e(),t._v(" "),n("span",{attrs:{property:"headline"}},[t._v(t._s(t.$page.title))])]),t._v(" "),t.config?n("div",{staticClass:"page-info"},[t.isOriginal?n("span",{staticClass:"origin",domProps:{textContent:t._s(t.originText)}}):t._e(),t._v(" "),t._l(t.config,(function(e){return n(e+"-info",{key:t.$route.path+e,tag:"component"})}))],2):t._e(),t._v(" "),t.$frontmatter.image?n("meta",{attrs:{property:"image",content:t.$withBase(t.$frontmatter.image)}}):t._e(),t._v(" "),n("hr")])}),[],!1,null,null,null).exports),Z=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,tt=n(198),et=a.a.extend({name:"PageMeta",components:{EditIcon:Z},computed:{i18n(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.contributor&&!this.$page.frontmatter.contributor?[]:this.$page.contributors||[]},contributorsText(){return this.i18n.contributor},updateTime(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.updateTime&&!this.$page.frontmatter.updateTime?"":this.$page.updateTime||""},updateTimeText(){return this.i18n.updateTime},editLink(){const t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,{repo:e,docsRepo:n}=this.$site.themeConfig;return!(!t||!e&&!n||!this.$page.relativePath)&&this.createEditLink()},editLinkText(){return this.i18n.editLink}},methods:{createEditLink(){const{repo:t="",docsRepo:e=t,docsDir:n="",docsBranch:a="main"}=this.$themeConfig;if(/bitbucket.org/u.test(e))return`${e.replace(tt.a,"")}/src/${a}/${n?n.replace(tt.a,"")+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`;if(/gitlab.com/u.test(e))return`${e.replace(tt.a,"")}/-/edit/${a}/${n?n.replace(tt.a,"")+"/":""}${this.$page.relativePath}`;return`${(tt.j.test(e)?e:"https://github.com/"+e).replace(tt.a,"")}/edit/${a}/${n?n.replace(tt.a,"")+"/":""}${this.$page.relativePath}`}}}),nt=(n(486),Object(u.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-meta"},[t.editLink?n("div",{staticClass:"edit-link"},[n("EditIcon"),t._v(" "),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.updateTime?n("div",{staticClass:"meta-item update-time"},[n("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),n("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?n("div",{staticClass:"meta-item contributors"},[n("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),n("span",{staticClass:"info"},[t._l(t.contributors,(function(e,a){return[n("span",{key:a,staticClass:"contributor",attrs:{title:"email: "+e.email}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),a!==t.contributors.length-1?[t._v(", ")]:t._e()]}))],2)]):t._e()])}),[],!1,null,null,null).exports),at=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon next-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,rt=Object(u.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon prev-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,ot=n(251);const st=(t,e)=>{for(const n of t)"group"===n.type?st(n.children||[],e):e.push(n)},it=(t,{themeConfig:e,page:n,route:a,site:r,sidebarItems:o})=>{const s=e[t+"Links"],i=n.frontmatter[t];return!1!==s&&!1!==i&&("string"==typeof i?Object(ot.c)(r.pages,Object(tt.k)(i,a.path)):((t,e,n)=>{const a=[];st(e,a);for(let e=0;e<a.length;e++){const r=a[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return a[e+n]}return!1})(n,o,"prev"===t?-1:1))};var lt=a.a.extend({name:"PageNav",components:{NextIcon:at,PrevIcon:rt},props:{sidebarItems:{type:Array,default:()=>[]}},computed:{prev(){return it("prev",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})},next(){return it("next",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})}}}),ct=(n(487),Object(u.a)(lt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},["external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[n("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[n("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("OutboundLink"),t._v(" "),n("NextIcon")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("NextIcon")],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),ut=n(250),pt=n(246).a.extend({name:"Page",components:{Anchor:T.a,Comment:E,MyTransition:s.a,PageInfo:X,PageMeta:nt,PageNav:ct,Password:ut.a},props:{sidebarItems:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]}},data:()=>({password:""}),computed:{pagePassword(){const{password:t}=this.$frontmatter;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted(){return this.password===this.pagePassword}}}),ht=(n(488),Object(u.a)(pt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[n("MyTransition",[n("BreadCrumb",{key:t.$route.path})],1),t._v(" "),t._t("top"),t._v(" "),n("MyTransition",{attrs:{delay:.04}},[n("PageInfo",{key:t.$route.path})],1),t._v(" "),t.pagePassword&&!t.pageDescrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}})],1):t.isPathEncrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":t.checkPathPassword}})],1):[n("MyTransition",{attrs:{delay:.12}},[n("Anchor",{key:t.$route.path})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-top"):t._e(),t._v(" "),n("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[n("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-bottom"):t._e(),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[n("PageMeta",{key:t.$route.path})],1),t._v(" "),n("MyTransition",{attrs:{delay:.14}},[n("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[n("Comment",{key:t.$route.path})],1)],t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),mt=a.a.extend({name:"Layout",components:{BlogInfo:r.a,BlogHome:b,Common:C.a,ContentBottom:$.a,ContentTop:$.a,Home:k,NavbarCenter:$.a,NavbarEnd:$.a,NavbarStart:$.a,Page:ht,PageBottom:$.a,PageTop:$.a,SidebarBottom:$.a,SidebarCenter:$.a,SidebarTop:$.a}}),dt=Object(u.a)(mt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([{key:"navbar-start",fn:function(){return[t._t("navbar-start",(function(){return[n("NavbarStart"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-start"}})]}))]},proxy:!0},{key:"navbar-center",fn:function(){return[t._t("navbar-center",(function(){return[n("NavbarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-center"}})]}))]},proxy:!0},{key:"navbar-end",fn:function(){return[t._t("navbar-end",(function(){return[n("NavbarEnd"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-end"}})]}))]},proxy:!0},{key:"sidebar-top",fn:function(){return[t._t("sidebar-top",(function(){return[n("SidebarTop"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-top"}})]}))]},proxy:!0},{key:"sidebar-center",fn:function(){return[t._t("sidebar-center",(function(){return[n("SidebarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-center"}})]}))]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[t._t("sidebar-bottom",(function(){return[n("SidebarBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-bottom"}})]}))]},proxy:!0},{key:"default",fn:function(e){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?n("BlogHome"):t.$frontmatter.home?n("Home"):n("Page",{attrs:{headers:e.headers,"sidebar-items":e.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top",(function(){return[n("PageTop"),t._v(" "),n("Content",{attrs:{"slot-key":"page-top"}})]}))]},proxy:!0},{key:"content-top",fn:function(){return[t._t("content-top",(function(){return[n("ContentTop"),t._v(" "),n("Content",{attrs:{"slot-key":"content-top"}})]}))]},proxy:!0},{key:"content-bottom",fn:function(){return[t._t("content-bottom",(function(){return[n("ContentBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"content-bottom"}})]}))]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom",(function(){return[n("PageBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"page-bottom"}})]}))]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=dt.exports}}]);