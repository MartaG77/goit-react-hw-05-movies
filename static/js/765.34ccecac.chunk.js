"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{488:function(n,e,t){t.d(e,{Df:function(){return i},TP:function(){return o},XT:function(){return s},tx:function(){return p},zv:function(){return f}});var r=t(861),u=t(757),a=t.n(u),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjBlZDdlNTI2NzRlZGI0NDFiZmQ1ZGNlZmRkOGEyMSIsInN1YiI6IjY1NzBhZDQ5ZGNiNmEzMDBlNDM5MTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1hnyZJ0MflZFHZy5PeT8M3MwymRTggn_ollHZIX_XQ",c.Z.defaults.headers.common.Accept="application/json",c.Z.defaults.params={include_adult:!1,language:"en-US",page:1};var i=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,c.Z.get("trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="search/movie?query=".concat(e),n.next=3,c.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e),n.next=3,c.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits"),n.next=3,c.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews"),n.next=3,c.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},765:function(n,e,t){t.r(e);var r=t(861),u=t(439),a=t(757),c=t.n(a),i=t(689),s=t(87),o=t(791),f=t(488),p=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],a=e[1],l=(0,i.TH)(),v=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Df)();case 3:e=n.sent,a(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){v()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"movies/".concat(n.id),state:{from:l},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=765.34ccecac.chunk.js.map