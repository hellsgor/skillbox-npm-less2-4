var t,e={};function n(t,e,n){let r=e.__redom_lifecycle;if(o(r)){e.__redom_lifecycle={};return}let i=n;for(e.__redom_mounted&&c(e,"onunmount");i;){let t=i.__redom_lifecycle||{};for(let e in r)t[e]&&(t[e]-=r[e]);o(t)&&(i.__redom_lifecycle=null),i=i.parentNode}}function o(t){if(null==t)return!0;for(let e in t)if(t[e])return!1;return!0}"undefined"!=typeof self&&self,e=function(){var t={407:function(t,e,n){n.d(e,{default:function(){return j}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function c(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function s(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function l(t){var e=c(t).split(/\?(.*)?$/);return[c(e[0]),e.slice(1).join("")]}function f(t){for(var e={},n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);e[i]?(Array.isArray(e[i])||(e[i]=[e[i]]),e[i].push(decodeURIComponent(r[1]||""))):e[i]=decodeURIComponent(r[1]||"")}}return e}function h(t,e){var n,a=l(c(t.currentLocationPath)),h=a[0],d=a[1],p=""===d?null:f(d),v=[];if(s(e.path)){if(n="(?:/^|^)"+c(e.path).replace(o,function(t,e,n){return v.push(n),"([^/]+)"}).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===c(e.path)&&""===c(h))return{url:h,queryString:d,hashString:u(t.to),route:e,data:null,params:p}}else n=e.path;var m=RegExp(n,""),_=h.match(m);if(_){var g=s(e.path)?0===v.length?null:_?_.slice(1,_.length).reduce(function(t,e,n){return null===t&&(t={}),t[v[n]]=decodeURIComponent(e),t},null):null:_.groups?_.groups:_.slice(1);return{url:c(h.replace(RegExp("^"+t.instance.root),"")),queryString:d,hashString:u(t.to),route:e,data:g,params:p}}return!1}function d(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function p(t,e){return void 0===t[e]||!0===t[e]}function v(){return"undefined"!=typeof window}function m(t,e,n){var o=e||{},r=0;!function e(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),e()):t[r](o,function(t){void 0===t||!0===t?(r+=1,e()):n&&n(o)}):n&&n(o)}()}function _(t,e){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function g(t,e){for(var n=0;n<t.instance.routes.length;n++){var o=h(t,t.instance.routes[n]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void e()}e()}function y(t,e){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function k(t,e){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}m.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};var w=v(),b=d();function O(t,e){if(p(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;b?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!o){var e=location.hash;location.hash="",location.hash=e}t.instance.__freezeListening=!1},1))):w&&(window.location.href=t.to)}e()}function L(t,e){var n=t.instance;n.lastResolved()?m(n.lastResolved().map(function(e){return function(n,o){if(e.route.hooks&&e.route.hooks.leave){var r=!1,i=t.instance.matchLocation(e.route.path,t.currentLocationPath,!1);r="*"!==e.route.path?!i:!(t.matches&&t.matches.find(function(t){return e.route.path===t.route.path})),p(t.navigateOptions,"callHooks")&&r?m(e.route.hooks.leave.map(function(e){return function(n,o){return e(function(e){!1===e?t.instance.__markAsClean(t):o()},t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}}).concat([function(){return o()}])):o()}else o()}}),{},function(){return e()}):e()}function A(t,e){p(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var S=[function(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString)return n.forEach(function(e){e.route.hooks&&e.route.hooks.already&&p(t.navigateOptions,"callHooks")&&e.route.hooks.already.forEach(function(e){return e(t.match)})}),void e(!1);e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.before&&p(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map(function(e){return function(n,o){return e(function(e){!1===e?t.instance.__markAsClean(t):o()},t.match)}}).concat([function(){return e()}])):e()},function(t,e){p(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.after&&p(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),e()}],P=[L,function(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var o=l(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);n.path=c(r);var s={url:n.path,queryString:i,hashString:a,data:null,route:n,params:""!==i?f(i):null};t.matches=[s],t.match=s}e()},m.if(function(t){return t.notFoundHandled},S.concat([A]),[function(t,e){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),e()},function(t,e){t.instance._setCurrent(null),e()}])];function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function E(t,e){var n=0;L(t,function o(){n!==t.matches.length?m(S,R({},t,{match:t.matches[n]}),function(){n+=1,o()}):A(t,e)})}function x(t){t.instance.__markAsClean(t)}function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function j(t,e){var n,o=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",p=null,w=[],b=!1,L=d(),A=v();function S(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function R(t){return c(i+"/"+c(t))}function j(t,e,n,o){var r,i;return t=s(t)?R(t):t,{name:o||c(String(t)),path:t,handler:e,hooks:(void 0===(r=n)&&(r=[]),void 0===i&&(i={}),r.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(e){t[e]&&(i[e]||(i[e]=[]),i[e].push(t[e]))})}),i)}}function H(t,e){if(!r.__dirty){r.__dirty=!0;var n={instance:r,to:t=t?c(i)+"/"+c(t):void 0,currentLocationPath:t,navigateOptions:{},resolveOptions:N({},o,e)};return m([_,g,m.if(function(t){var e=t.matches;return e&&e.length>0},E,P)],n,x),!!n.matches&&n.matches}r.__waiting.push(function(){return r.resolve(t,e)})}function $(t,e){if(r.__dirty)r.__waiting.push(function(){return r.navigate(t,e)});else{r.__dirty=!0;var n={instance:r,to:t=c(i)+"/"+c(t),navigateOptions:e||{},resolveOptions:e&&e.resolveOptions?e.resolveOptions:o,currentLocationPath:S(t)};m([y,k,g,m.if(function(t){var e=t.matches;return e&&e.length>0},E,P),O,x],n,x)}}function M(){if(A)return(A?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach(function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(e){if((e.ctrlKey||e.metaKey)&&"a"===e.target.tagName.toLowerCase())return!1;var n=t.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(n);n=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var e,n=t.split(","),o={};return n.forEach(function(t){var n=t.split(":").map(function(t){return t.replace(/(^ +| +$)/g,"")});switch(n[0]){case"historyAPIMethod":o.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":e||(e={}),e.strategy=n[1];break;case"resolveOptionsHash":e||(e={}),e.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[n[0]]="true"===n[1]}}),e&&(o.resolveOptions=e),o}(t.getAttribute("data-navigo-options"));b||(e.preventDefault(),e.stopPropagation(),r.navigate(c(n),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)}),r}function T(t,e,n){var o=w.find(function(e){return e.name===t}),r=null;if(o){if(r=o.path,e)for(var a in e)r=r.replace(":"+a,e[a]);r=r.match(/^\//)?r:"/"+r}return r&&n&&!n.includeRoot&&(r=r.replace(RegExp("^/"+i),"")),r}function U(t){var e=l(c(t)),o=e[0],r=e[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:j(o,function(){},[n],o),data:null,params:i}}function q(t,e,n){return"string"==typeof e&&(e=F(e)),e?(e.hooks[t]||(e.hooks[t]=[]),e.hooks[t].push(n),function(){e.hooks[t]=e.hooks[t].filter(function(t){return t!==n})}):(console.warn("Route doesn't exists: "+e),function(){})}function F(t){return"string"==typeof t?w.find(function(e){return e.name===R(t)}):w.find(function(e){return e.handler===t})}t?i=c(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=b,this.current=p,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,e,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=e,e=t,t=i),w.push(j(t,e,[n,o]))):Object.keys(t).forEach(function(e){if("function"==typeof t[e])r.on(e,t[e]);else{var o=t[e],i=o.uses,a=o.as,c=o.hooks;w.push(j(e,i,[n,c],a))}}),this},this.off=function(t){return this.routes=w=w.filter(function(e){return s(t)?c(e.path)!==c(t):"function"==typeof t?t!==e.handler:String(e.path)!==String(t)}),this},this.resolve=H,this.navigate=$,this.navigateByName=function(t,e,n){var o=T(t,e);return null!==o&&($(o.replace(RegExp("^/?"+i),""),n),!0)},this.destroy=function(){this.routes=w=[],L&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=b=!0},this.notFound=function(t,e){return r._notFoundRoute=j("*",t,[n,e],"__NOT_FOUND__"),this},this.updatePageLinks=M,this.link=function(t){return"/"+i+"/"+c(t)},this.hooks=function(t){return n=t,this},this.extractGETParameters=function(t){return l(S(t))},this.lastResolved=function(){return p},this.generate=T,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var e={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return g(e,function(){}),!!e.matches&&e.matches},this.matchLocation=function(t,e,n){void 0!==e&&(void 0===n||n)&&(e=R(e));var o={instance:r,to:e,currentLocationPath:e};return _(o,function(){}),"string"==typeof t&&(t=void 0===n||n?R(t):t),h(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return U(c(a(i)).replace(RegExp("^"+i),""))},this.addBeforeHook=q.bind(this,"before"),this.addAfterHook=q.bind(this,"after"),this.addAlreadyHook=q.bind(this,"already"),this.addLeaveHook=q.bind(this,"leave"),this.getRoute=F,this._pathToMatchObject=U,this._clean=c,this._checkForAHash=S,this._setCurrent=function(t){return p=r.current=t},(function(){L&&(this.__popstateListener=function(){r.__freezeListening||H()},window.addEventListener("popstate",this.__popstateListener))}).call(this),M.call(this)}}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(407)}().default;const r=["onmount","onremount","onunmount"],i="undefined"!=typeof window&&"ShadowRoot"in window;function a(t,e,o,a){let s=l(t),u=l(e);e===u&&u.__redom_view&&(e=u.__redom_view),e!==u&&(u.__redom_view=e);let f=u.__redom_mounted,h=u.parentNode;if(f&&h!==s&&n(e,u,h),null!=o){if(a){let t=l(o);t.__redom_mounted&&c(t,"onunmount"),s.replaceChild(u,t)}else s.insertBefore(u,l(o))}else s.appendChild(u);return function(t,e,n,o){let a=e.__redom_lifecycle||(e.__redom_lifecycle={}),s=n===o,u=!1;for(let n of r)!s&&t!==e&&n in t&&(a[n]=(a[n]||0)+1),a[n]&&(u=!0);if(!u){e.__redom_lifecycle={};return}let l=n,f=!1;for((s||l&&l.__redom_mounted)&&(c(e,s?"onremount":"onmount"),f=!0);l;){let t=l.parentNode,e=l.__redom_lifecycle||(l.__redom_lifecycle={});for(let t in a)e[t]=(e[t]||0)+a[t];if(f)break;(l.nodeType===Node.DOCUMENT_NODE||i&&l instanceof ShadowRoot||t&&t.__redom_mounted)&&(c(l,s?"onremount":"onmount"),f=!0),l=t}}(e,u,s,h),e}function c(t,e){"onmount"===e||"onremount"===e?t.__redom_mounted=!0:"onunmount"===e&&(t.__redom_mounted=!1);let n=t.__redom_lifecycle;if(!n)return;let o=t.__redom_view,r=0;for(let t in o&&o[e]&&o[e](),n)t&&r++;if(r){let n=t.firstChild;for(;n;){let t=n.nextSibling;c(n,e),n=t}}}function s(t,e,n){t.style[e]=null==n?"":n}const u="http://www.w3.org/1999/xlink";function l(t){return t.nodeType&&t||!t.el&&t||l(t.el)}function f(t){return t&&t.nodeType}function h(t,...e){let n;let o=typeof t;if("string"===o)n=function(t,e){let{tag:n,id:o,className:r}=function(t){let e=t.split(/([.#])/),n="",o="";for(let t=1;t<e.length;t+=2)switch(e[t]){case".":n+=` ${e[t+1]}`;break;case"#":o=e[t+1]}return{className:n.trim(),tag:e[0]||"div",id:o}}(t),i=document.createElement(n);return o&&(i.id=o),r&&(i.className=r),i}(t);else if("function"===o)n=new t(...e);else throw Error("At least one argument required");return!function t(e,n,o){for(let r of n){if(0!==r&&!r)continue;let n=typeof r;"function"===n?r(e):"string"===n||"number"===n?e.appendChild(document.createTextNode(null!=r?r:"")):f(l(r))?a(e,r):r.length?t(e,r,o):"object"===n&&function t(e,n,o,r){let i=l(e);if("object"==typeof n)for(let e in n)t(i,e,n[e],r);else{let t=i instanceof SVGElement,e="function"==typeof o;if("style"===n&&"object"==typeof o)!function(t,e,n){let o=l(t);if("object"==typeof e)for(let t in e)s(o,t,e[t]);else s(o,e,void 0)}(i,o);else if(t&&e)i[n]=o;else if("dataset"===n)(function t(e,n,o){if("object"==typeof n)for(let o in n)t(e,o,n[o]);else null!=o?e.dataset[n]=o:delete e.dataset[n]})(i,o);else if(!t&&(n in i||e)&&"list"!==n)i[n]=o;else{if(t&&"xlink"===n){(function t(e,n,o){if("object"==typeof n)for(let o in n)t(e,o,n[o]);else null!=o?e.setAttributeNS(u,n,o):e.removeAttributeNS(u,n,o)})(i,o);return}r&&"class"===n&&(o=i.className+" "+o),null==o?i.removeAttribute(n):i.setAttribute(n,o)}}}(e,r,null,o)}}(l(n),e,!0),n}function d(t,...e){let o=l(t),r=function t(e,n,o){let r=o,i=Array(n.length);for(let t=0;t<n.length;t++)i[t]=n[t]&&l(n[t]);for(let o=0;o<n.length;o++){let c=n[o];if(!c)continue;let s=i[o];if(s===r){r=r.nextSibling;continue}if(f(s)){let t=r&&r.nextSibling,n=null!=c.__redom_index&&t===i[o+1];a(e,c,r,n),n&&(r=t);continue}null!=c.length&&(r=t(e,c,r))}return r}(t,e,o.firstChild);for(;r;){let e=r.nextSibling;!function(t,e){let o=l(t),r=l(e);e===r&&r.__redom_view&&(e=r.__redom_view),r.parentNode&&(n(e,r,o),o.removeChild(r))}(t,r),r=e}}h.extend=function(...t){return h.bind(this,...t)};const p="/skillbox-npm-less2-4/",v=new((t=e)&&t.__esModule?t.default:t)("/");function m({target:t}){event.preventDefault(),v.navigate(t.getAttribute("href"))}v.on(`${p}`,()=>{d(document.body,function(){let t=h("ul",h("li","Loading..."));return fetch("https://gorest.co.in/public/v2/posts/").then(async e=>{d(t,(await e.json()).map(t=>h("li",h("a",{href:`${p}post/${t.id}`,onclick:m},t.title))))}),h("div",{className:"container"},[h("h1","Post list"),t])}())}),v.on(`${p}post/:id`,({data:{id:t}})=>{d(document.body,function(t){let e=h("p","Loading...");return fetch(`https://gorest.co.in/public/v2/posts/${t}`).then(async t=>{let n=await t.json();d(e,[h("h2",n.title),h("p",n.body),h("a",{href:`${p}`,onclick:m},"Вернуться к списку")])}),h("div",{className:"container"},[h("h1","Post"),e])}(t))}),v.resolve();
//# sourceMappingURL=index.f5a92704.js.map
