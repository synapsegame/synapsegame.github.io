"use strict";(self.webpackChunksynapse_docs=self.webpackChunksynapse_docs||[]).push([[285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={slug:"v0.0.4",title:"v0.0.4",tags:["Release Notes"]},i="Features",o={permalink:"/release/v0.0.4",source:"@site/release/v004.md",title:"v0.0.4",description:"- The game now has a name- Synapse!",date:"2023-03-24T01:53:42.386Z",formattedDate:"March 24, 2023",tags:[{label:"Release Notes",permalink:"/release/tags/release-notes"}],readingTime:1,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"v0.0.4",title:"v0.0.4",tags:["Release Notes"]},prevItem:{title:"v0.0.3",permalink:"/release/v0.0.3"}},s={authorsImageUrls:[]},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The game now has a name- Synapse!"),(0,n.kt)("li",{parentName:"ul"},"Created an instagram and registered playsynapse.com"),(0,n.kt)("li",{parentName:"ul"},"Randomly spawn health and armor pickups on the level",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pickups give cells if health pickup and player has max health"),(0,n.kt)("li",{parentName:"ul"},"Armor pickup always adds armor"),(0,n.kt)("li",{parentName:"ul"},"Pickups can spawn closer to player if less than 5 health")))),(0,n.kt)("h1",{id:"changes"},"Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Limited number of corpses on screen to 30"),(0,n.kt)("li",{parentName:"ul"},"Made everything smaller on screen"),(0,n.kt)("li",{parentName:"ul"},"Adjusted hitboxes to be a bit more forgiving for the player"),(0,n.kt)("li",{parentName:"ul"},"Add a pickup spawn boost perk to reduce time between pickup spawns"),(0,n.kt)("li",{parentName:"ul"},"Adjusted fire rate of weapons to make the game a bit more challenging"),(0,n.kt)("li",{parentName:"ul"},"Significantly adjusted the number of enemies that spawn in later waves. You should be able to make it past level 15 now."),(0,n.kt)("li",{parentName:"ul"},"Updated the application icon and loading screen"),(0,n.kt)("li",{parentName:"ul"},"Units become disinterested if far enough away from player"),(0,n.kt)("li",{parentName:"ul"},"Units will flee if a threshold of units are killed in their proximity"),(0,n.kt)("li",{parentName:"ul"},"15% chance to spawn enraged units with increased stats and no chance of threat"),(0,n.kt)("li",{parentName:"ul"},"50% chance of receiving cell pickup at end of level (make a stat that adjusts this)")),(0,n.kt)("h1",{id:"bugfix"},"Bugfix"))}m.isMDXComponent=!0}}]);