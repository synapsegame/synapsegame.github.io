"use strict";(self.webpackChunksynapse_docs=self.webpackChunksynapse_docs||[]).push([[1060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={slug:"v0.0.6",title:"v0.0.6",tags:["Release Notes"]},i="Features",o={permalink:"/release/v0.0.6",source:"@site/release/v006.md",title:"v0.0.6",description:"- Items now appear in the item store",date:"2023-03-28T17:34:33.000Z",formattedDate:"March 28, 2023",tags:[{label:"Release Notes",permalink:"/release/tags/release-notes"}],readingTime:1.23,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"v0.0.6",title:"v0.0.6",tags:["Release Notes"]},prevItem:{title:"v0.0.8",permalink:"/release/v0.0.8"},nextItem:{title:"v0.0.5",permalink:"/release/v0.0.5"}},s={authorsImageUrls:[]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Items now appear in the item store",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Some placeholder images being used"),(0,n.kt)("li",{parentName:"ul"},"Stats will be adjusted and balanced in time. Initial values in place to confirm proper integration with game logic"))),(0,n.kt)("li",{parentName:"ul"},"Item modifiers apply to player stats and the enemy spawner"),(0,n.kt)("li",{parentName:"ul"},"Text popups for damage (units, players) and pickups (cells)"),(0,n.kt)("li",{parentName:"ul"},"Audio for combat, pickups, and some initial background music"),(0,n.kt)("li",{parentName:"ul"},"Particle effects for damage and movement"),(0,n.kt)("li",{parentName:"ul"},"Animations for biological mite units"),(0,n.kt)("li",{parentName:"ul"},"New hero sprite"),(0,n.kt)("li",{parentName:"ul"},"Weapons have kickback on fire"),(0,n.kt)("li",{parentName:"ul"},"Mechanical arms appear to hold more weapons"),(0,n.kt)("li",{parentName:"ul"},"Volume controls in pause menu")),(0,n.kt)("h1",{id:"changes"},"Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Three new enemy types",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Armored mite (wave 3)"),(0,n.kt)("li",{parentName:"ul"},"Cyber mite (wave 5)"),(0,n.kt)("li",{parentName:"ul"},"Cyber mite with explosive projectiles (wave 8)"))),(0,n.kt)("li",{parentName:"ul"},"Enraged units now spawn adjusted color and slight scale increase"),(0,n.kt)("li",{parentName:"ul"},"Enemies move slightly away from player on death (to create knockback visual)"),(0,n.kt)("li",{parentName:"ul"},"Unit stats now scale with level after the unit has appeared for one level previously"),(0,n.kt)("li",{parentName:"ul"},"Character flashes blue if damage done to armor, red if damage done to health"),(0,n.kt)("li",{parentName:"ul"},"Moved the joystick a bit further down the screen and disabled enemy spawn at bottom 20% of screen")),(0,n.kt)("h1",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed bug where the player could reroll if all four items are locked in the item shop"),(0,n.kt)("li",{parentName:"ul"},"Fixed bug where player could buy additional weapons, even if all slots were full. Have not yet implemented logic for upgrading if same rarity.")))}m.isMDXComponent=!0}}]);