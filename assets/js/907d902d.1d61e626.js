"use strict";(self.webpackChunkzhixuedoc=self.webpackChunkzhixuedoc||[]).push([[9744],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6838:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={sidebar_position:999,title:"\u6709\u5173\u670b\u53cb\u7684\u51fd\u6570"},p=void 0,l={unversionedId:"student/friends",id:"student/friends",title:"\u6709\u5173\u670b\u53cb\u7684\u51fd\u6570",description:"\u672c\u9875\u9762\u5c06\u4ecb\u7ecd\u4e09\u4e2a\u51fd\u6570\uff0cgetfriends\uff0cinvitefriend\u548cremove_friend\u3002",source:"@site/docs/student/friends.md",sourceDirName:"student",slug:"/student/friends",permalink:"/docs/student/friends",editUrl:"https://github.com/MasterYuan418/doc.zhixue.github.io/docs/student/friends.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999,title:"\u6709\u5173\u670b\u53cb\u7684\u51fd\u6570"},sidebar:"tutorialSidebar",previous:{title:"\u6709\u5173\u4f5c\u4e1a\u7684\u51fd\u6570",permalink:"/docs/student/homeworks"},next:{title:"\u83b7\u53d6\u8003\u8bd5\u7684\u4fe1\u606f",permalink:"/docs/teacher/get_examDetail"}},s={},c=[],d={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u9875\u9762\u5c06\u4ecb\u7ecd\u4e09\u4e2a\u51fd\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"get_friends"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"invite_friend"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"remove_friend"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"friend"),"\u63a5\u53d7\u7528\u6237ID\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"StuPerson"),"\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,"\u65b9\u6cd5\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_friends() -> ExtendedList[StuPerson]\ndef invite_friend(friend: Union[StuPerson, str]) -> FriendMsg\ndef remove_friend(friend: Union[StuPerson, str]) -> bool\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\uff1a")),(0,i.kt)("p",null,"\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedList[StuPerson]"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"FriendMsg"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"bool")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'student = login("123","123")\nprint(student.get_friends())\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"[Person(id=123, clazz=StuClass(id=, name=, school=School(id='', name='')), name=\u5f20\u4e09, gender=\u5973)]\n")))}f.isMDXComponent=!0}}]);