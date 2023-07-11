"use strict";(self.webpackChunksynapse_docs=self.webpackChunksynapse_docs||[]).push([[247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={slug:"v0.0.7",title:"v0.0.7",tags:["Release Notes"]},l="Features",o={permalink:"/release/v0.0.7",source:"@site/release/v007.md",title:"v0.0.7",description:"- Available on Android!",date:"2023-05-24T18:57:22.000Z",formattedDate:"May 24, 2023",tags:[{label:"Release Notes",permalink:"/release/tags/release-notes"}],readingTime:2.98,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"v0.0.7",title:"v0.0.7",tags:["Release Notes"]},nextItem:{title:"v0.0.8",permalink:"/release/v0.0.8"}},s={authorsImageUrls:[]},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Available on Android!"),(0,r.kt)("li",{parentName:"ul"},"Added first cosmic blessing encounter (Divine Knowledge)"),(0,r.kt)("li",{parentName:"ul"},"Can now tap anywhere to control movement. Removed joystick"),(0,r.kt)("li",{parentName:"ul"},"Added first-time tutorial popup"),(0,r.kt)("li",{parentName:"ul"},"Added Tendril enemy with new attack type"),(0,r.kt)("li",{parentName:"ul"},"Added Beam Ray weapon with new projectile type (piercing)")),(0,r.kt)("h1",{id:"changes"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Item rarities rendered in item panels"),(0,r.kt)("li",{parentName:"ul"},"Adjusted modifiers of legendary items"),(0,r.kt)("li",{parentName:"ul"},"Factored in item rarity when populating item shop"),(0,r.kt)("li",{parentName:"ul"},"Modifiers now display with styling to indicate if the effect is helpful or harmful for the player"),(0,r.kt)("li",{parentName:"ul"},"Able to view equipped weapons in item screen"),(0,r.kt)("li",{parentName:"ul"},"Added ability to upgrade weapons"),(0,r.kt)("li",{parentName:"ul"},"If background music is enabled, subtle fade out during round end / store display, then fade back in when next round starts"),(0,r.kt)("li",{parentName:"ul"},"Units are now classified by factions, which will allow for future adjustments in gameplay (mechanial damages bio, mechanical partners with AI, cosmic fights all, etc"),(0,r.kt)("li",{parentName:"ul"},"Added subtle shadows to UI elements"),(0,r.kt)("li",{parentName:"ul"},"Added remaining rarities for initial weapons. Balanced values a bit more"),(0,r.kt)("li",{parentName:"ul"},"Adjusted rarity scaling through levels to increase chance of rarer items in latest levels"),(0,r.kt)("li",{parentName:"ul"},"Corrected a sneaky bug in the perk rarity selection logic. Unfortunately for players, rarer perks are now... rarer. Will tune this pending feedback."),(0,r.kt)("li",{parentName:"ul"},"Player projectiles adjust in scale and color as damage increases"),(0,r.kt)("li",{parentName:"ul"},"Removed caps on enemy damage, health, projectile speed, and movement speed because apparently getting past wave 20 isn't difficult."),(0,r.kt)("li",{parentName:"ul"},"Added movement effect to units, pickups, and background"),(0,r.kt)("li",{parentName:"ul"},"Attempting to make the movement control panel a bit more obvious"),(0,r.kt)("li",{parentName:"ul"},"Main menu spaceship"),(0,r.kt)("li",{parentName:"ul"},"Haptics on joystick press"),(0,r.kt)("li",{parentName:"ul"},"Removed the text that indicates which slot each item is held in."),(0,r.kt)("li",{parentName:"ul"},"[","[Balance]","] The SMG is rather useless when compared to the assault rifle. The fire rate could probably be reduced significantly on the SMG"),(0,r.kt)("li",{parentName:"ul"},"[","[Bug]","] enemy projectiles are not despawned at the end of the level. add an event listener to the projectiles to check for the level end event, OR, parent them to a collection and then destroy the contents of that collection"),(0,r.kt)("li",{parentName:"ul"},"[","[GameFeel]","] also, add an attack cooldown randomized interval to spiders so that they're not casting the wave of projectiles like they are in this version"),(0,r.kt)("li",{parentName:"ul"},"[","[Balance]","] For each level / wave, it would be good to scale the spawn sizes throughout each wave. So when the wave starts, get the maximum spawn size/ from the previous round and the current round, and then using the wave duration, scale the number of units to spawn so that the last 30 seconds are spawning with the full wave capacity."),(0,r.kt)("li",{parentName:"ul"},"[","[Bug]","] Synthlegs movement reduced from 2000% to 400%"),(0,r.kt)("li",{parentName:"ul"},"[","[GameFeel]","] Reduced spider movement speed"),(0,r.kt)("li",{parentName:"ul"},"[","[Balance]","] Maybe add a stat ceiling for stats that get initialized in the ",(0,r.kt)("inlineCode",{parentName:"li"},"UnitStats")," method so that units are not scaling uncontrollably in the later levels"),(0,r.kt)("li",{parentName:"ul"},"Armored space mites now have a chance to consume cells, incentivizing player to pick them up"),(0,r.kt)("li",{parentName:"ul"},"Added confirmation double tap to reroll buttons and sell item button"),(0,r.kt)("li",{parentName:"ul"},"[","[Interface]","] Item modifiers displayed on the death/final screen")),(0,r.kt)("h1",{id:"new-items"},"New Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"armor piercing rounds: +10% damage, -2.5% fire rate"),(0,r.kt)("li",{parentName:"ul"},"Added rare item which provides +5 health"),(0,r.kt)("li",{parentName:"ul"},"Bipod: +10% Attack Range, -5% movement speed"),(0,r.kt)("li",{parentName:"ul"},"Ocular implants: +75 range"),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h1",{id:"bugfix"},"Bugfix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to figure out why loading between scenes is causing some fonts to be discarded"),(0,r.kt)("li",{parentName:"ul"},"The confirm button is not resetting after time. Also need to reset it between rounds"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug where enemy armor was not taken into consideration")))}d.isMDXComponent=!0}}]);