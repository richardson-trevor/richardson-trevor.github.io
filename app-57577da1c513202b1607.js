webpackJsonp([0xd2a57dc1d883],{273:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(395),options:{plugins:[],trackingId:""}},{plugin:t(397),options:{plugins:[]}}]},274:function(e,n,t){"use strict";var o;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(381),"component---src-templates-blog-post-js":t(385),"component---src-pages-index-js":t(383),"component---src-pages-profile-index-jsx":t(384)},n.json=(o={"layout-index.json":t(21),"offline-plugin-app-shell-fallback.json":t(393)},o["layout-index.json"]=t(21),o["articles-hello-world.json"]=t(388),o["layout-index.json"]=t(21),o["articles-why-start.json"]=t(391),o["layout-index.json"]=t(21),o["articles-task-managers.json"]=t(389),o["layout-index.json"]=t(21),o["articles-good-to-great.json"]=t(387),o["layout-index.json"]=t(21),o["articles-all-the-wealth.json"]=t(386),o["layout-index.json"]=t(21),o["articles-using-vim.json"]=t(390),o["layout-index.json"]=t(21),o["index.json"]=t(392),o["layout-index.json"]=t(21),o["profile.json"]=t(394),o),n.layouts={"component---src-layouts-index-js":t(382)}},275:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),c=o(s),l=t(7),f=o(l),p=t(197),d=o(p),h=t(71),m=o(h),g=function(e){var n=e.children;return c.default.createElement("div",null,n())},y=function(e){function n(t){r(this,n);var o=a(this,e.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):d.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=y,e.exports=n.default},71:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(474),a=o(r),u=(0,a.default)();e.exports=u},276:function(e,n,t){"use strict";var o=t(99),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},386:function(e,n,t){t(10),e.exports=function(e){return t.e(0xc8c8581d8b2b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(404)})})}},387:function(e,n,t){t(10),e.exports=function(e){return t.e(0x6391449d1cf5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(405)})})}},388:function(e,n,t){t(10),e.exports=function(e){return t.e(0xf6a508f3222,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(406)})})}},389:function(e,n,t){t(10),e.exports=function(e){return t.e(62714314466750,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(407)})})}},390:function(e,n,t){t(10),e.exports=function(e){return t.e(0xc086ef2997f1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(408)})})}},391:function(e,n,t){t(10),e.exports=function(e){return t.e(0xed64f01f63bf,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(409)})})}},392:function(e,n,t){t(10),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(410)})})}},21:function(e,n,t){t(10),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(126)})})}},393:function(e,n,t){t(10),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(411)})})}},394:function(e,n,t){t(10),e.exports=function(e){return t.e(62474309173725,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(412)})})}},382:function(e,n,t){t(10),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(277)})})}},197:function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(1),a=(o(r),t(276)),u=o(a),i=t(71),s=o(i),c=void 0,l={},f={},p={},d={},h={},m=[],g=[],y={},v=[],R={},x=function(e){return e&&e.default||e},j=void 0,w=!0;j=t(278)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){_(e,function(){v=v.filter(function(n){return n!==e}),j.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){j.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){j.onPostLoadPageResources(e)});var b=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},P=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(n,o){d[e]=o,t(n,o)})}},k=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):_(e,function(n,o){if(n)t(n);else{var r=x(o());h[e]=r,t(n,r)}})},C=1,N={empty:function(){g=[],y={},R={},v=[],m=[]},addPagesArray:function(e){m=e;var n="";n="",c=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!m.some(function(n){return n.path===e}))return!1;var n=1/C;C+=1,y[e]?y[e]+=1:y[e]=1,N.has(e)||g.unshift(e),g.sort(P);var t=c(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(b),j.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),w=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[e]={component:r,json:a,layout:u};var n={component:r,json:a,layout:u};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return k(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),k(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&k(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=N}).call(n,t(50))},413:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-hello-world.json",path:"/articles/hello-world"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-why-start.json",path:"/articles/why-start"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-task-managers.json",path:"/articles/task-managers"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-good-to-great.json",path:"/articles/good-to-great"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-all-the-wealth.json",path:"/articles/all-the-wealth"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-using-vim.json",path:"/articles/using-vim"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-profile-index-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"profile.json",path:"/profile/"}]},278:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(273),u=t(1),i=o(u),s=t(93),c=o(s),l=t(99),f=t(401),p=t(224),d=o(p),h=t(363),m=o(h),g=t(71),y=o(g),v=t(413),R=o(v),x=t(414),j=o(x),w=t(275),b=o(w),P=t(274),_=o(P),k=t(197),C=o(k);t(356),window.___emitter=y.default,C.default.addPagesArray(R.default),C.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=C.default,window.matchPath=l.matchPath;var N=(0,d.default)(),E=j.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(N.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){O(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(279);var o=function(e){function n(t){t.page.path===C.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=E[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:N.location,action:N.action});var s=(0,a.apiRunner)("replaceRouterComponent",{history:N})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:N},n)};C.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(s?s:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)((0,l.withRouter)(b.default),{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return C.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,m.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},414:function(e,n){e.exports=[]},279:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(71),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},363:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},10:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},395:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},381:function(e,n,t){t(10),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(396)})})}},397:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},125:function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},r="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,n,a){if("string"!=typeof n){var u=Object.getOwnPropertyNames(n);r&&(u=u.concat(Object.getOwnPropertySymbols(n)));for(var i=0;i<u.length;++i)if(!(t[u[i]]||o[u[i]]||a&&a[u[i]]))try{e[u[i]]=n[u[i]]}catch(e){}}return e}},474:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},50:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(u);m=!0;for(var n=h.length;n;){for(d=h,h=[];++g<n;)d&&d[g].run();g=-1,n=h.length}d=null,m=!1,a(e)}}function s(e,n){this.fun=e,this.array=n}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new s(e,n)),1!==h.length||m||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},383:function(e,n,t){t(10),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(284)})})}},384:function(e,n,t){t(10),e.exports=function(e){return t.e(0xedb9ba83608c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(285)})})}},385:function(e,n,t){t(10),e.exports=function(e){return t.e(0x620f737b6699,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(286)})})}}});
//# sourceMappingURL=app-57577da1c513202b1607.js.map