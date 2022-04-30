"use strict";(self.webpackChunkzhixuedoc=self.webpackChunkzhixuedoc||[]).push([[6995],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:6,title:"\u83b7\u53d6\u8003\u8bd5\u989d\u5916\u6570\u636e"},p=void 0,l={unversionedId:"teacher/get_examExtraData",id:"teacher/get_examExtraData",title:"\u83b7\u53d6\u8003\u8bd5\u989d\u5916\u6570\u636e",description:"\u672c\u51fd\u6570\u53ef\u4ee5\u83b7\u53d6\u67d0\u573a\u8003\u8bd5\u7684\u989d\u5916\u6570\u636e",source:"@site/docs/teacher/get_examExtraData.md",sourceDirName:"teacher",slug:"/teacher/get_examExtraData",permalink:"/docs/teacher/get_examExtraData",editUrl:"https://github.com/MasterYuan418/doc.zhixue.github.io/docs/teacher/get_examExtraData.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u83b7\u53d6\u8003\u8bd5\u989d\u5916\u6570\u636e"},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u6388\u6743\u4fe1\u606f",permalink:"/docs/teacher/get_auths"},next:{title:"\u83b7\u53d6\u539f\u5377",permalink:"/docs/teacher/get_originalPaper"}},u={},s=[],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u51fd\u6570\u53ef\u4ee5\u83b7\u53d6\u67d0\u573a\u8003\u8bd5\u7684\u989d\u5916\u6570\u636e"),(0,o.kt)("p",null,"\u65b9\u6cd5\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_exam_extra_data(scores: Scores) -> ExamExtraData\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scores"),"\u662f\u5206\u6570\uff08\u53ef\u4ee5\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"get_scores"),"\u83b7\u53d6\uff09"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\uff1a"),"\u5c06\u4f1a\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"ExamExtraData")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'teacher = login("123","123")\nprint(teacher.get_exam_extra_data(a.get_scores("123")))\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pyt"},"[ExamExtraData(ClassExtraData(avg_score=114.514, medium_score=191.81, pass_rate=0.50, excellent_rate=0.6, perfect_rate=0.1, var=114514, class_id='1', class_name='1\u73ed'))]\n")),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"avg_score"),"\u662f\u5e73\u5747\u5206\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"medium_score"),"\u662f\u4e2d\u4f4d\u5206\u6570\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"pass_rate"),"\u662f\u53ca\u683c\u7387\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"excellent_rate"),"\u662f\u4f18\u79c0\u7387\uff08>=85%\uff09\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"perfect_rate"),"\u662f\u6ee1\u5206\u7387\uff08=100%\uff09\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"var"),"\u662f\u65b9\u5dee\u3002"))}d.isMDXComponent=!0}}]);