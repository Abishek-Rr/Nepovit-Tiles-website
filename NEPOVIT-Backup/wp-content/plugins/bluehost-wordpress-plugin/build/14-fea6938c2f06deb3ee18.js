(window.webpackJsonp_bluehost_wordpress_plugin=window.webpackJsonp_bluehost_wordpress_plugin||[]).push([[14],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return S}));var r=n(32),c=n.n(r),a=n(8),s=n.n(a),o=n(1),l=n(6);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(o.useState)(e),n=s()(t,2),r=n[0],a=n[1];function u(e){a([].concat(c()(r),[e]))}function i(e){return r.includes(e)}function b(e){a(Object(l.without)(r,e))}function p(e){i(e)?b(e):u(e)}return[{favorites:r},{addFavorite:u,hasFavorite:i,removeFavorite:b,setFavorites:a,toggleFavorite:p}]}var i=n(117),b=n.n(i),p=n(18),m=n.n(p),d=n(15),h=n.n(d);function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"themes",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.useState)(!1),r=s()(n,2),c=r[0],a=r[1],l=Object(o.useState)(!1),u=s()(l,2),i=u[0],p=u[1],d=Object(o.useState)(!1),O=s()(d,2),f=O[0],j=O[1],g=Object(o.useState)(e),_=s()(g,2),v=_[0],w=_[1],E=Object(o.useState)(t),y=s()(E,2),N=y[0],S=y[1],k=Object(o.useState)({}),P=s()(k,2),C=P[0],x=P[1];return Object(o.useEffect)((function(){!function(){var e=b()(m.a.mark((function e(){var t,n,r,c,o,l,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a(!1),p(!1),j(!0),e.prev=3,t=new URLSearchParams(""),n=0,r=Object.entries(N);n<r.length;n++)c=s()(r[n],2),o=c[0],l=c[1],t.append(o,l);return e.next=8,h()({path:"/mojo/v1/"+v+"?"+t.toString()});case 8:u=e.sent,x(u),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),p(!0),x(e.t0);case 16:j(!1),a(!0);case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}()()}),[v,N]),[{done:c,isError:i,isLoading:f,params:N,payload:C},{setType:w,setParams:S}]}function f(e){return[function(t,n){switch(n){case"favorites":return function(t){return Object(l.filter)(t,(function(t){return e.includes(t.id)}))}(t);default:return t}}]}var j=n(122),g=n.n(j);function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(o.useState)(e),n=s()(t,2),r=n[0],c=n[1];function a(e){return r?new g.a(e,{threshold:.1,keys:["name","short_description","features","tags"]}).search(r):e}return[{query:r},{search:a,setQuery:c}]}function v(){function e(e){return e.sort((function(e,t){return e.created_timestamp>t.created_timestamp?1:e.created_timestamp<t.created_timestamp?-1:e.name<t.name?1:-1}))}function t(t){return Object(l.reverse)(e(t))}function n(e){return Object(l.sortBy)(e,(function(e){return parseInt(e.prices.single_domain_license,10)}))}function r(e){return Object(l.reverse)(n(e))}function c(e){return e.sort((function(e,t){return e.sales_count>t.sales_count?1:e.sales_count<t.sales_count?-1:e.name<t.name?1:-1}))}function a(e){return Object(l.reverse)(c(e))}return[function(s){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sales",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";switch(s=Object.values(s),o){case"date":return"desc"===l?t(s):e(s);case"price":return"desc"===l?r(s):n(s);default:return"desc"===l?a(s):c(s)}}]}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=Object(o.useState)(e),c=s()(r,2),a=c[0],u=c[1],i=Object(o.useState)([]),b=s()(i,2),p=b[0],m=b[1],d=Object(o.useState)(t),h=s()(d,2),O=h[0],f=h[1],j=Object(o.useState)([]),g=s()(j,2),_=g[0],v=g[1],w=Object(o.useState)(1),E=s()(w,2),y=E[0],N=E[1],S=Object(o.useState)(n),k=s()(S,2),P=k[0],C=k[1];return Object(o.useEffect)((function(){var e=Object(l.chunk)(a,O);v(e),N(e.length)}),[a]),Object(o.useEffect)((function(){m(_[P-1])}),[_,P]),[{items:p,itemsPerPage:O,pageCount:y,pageNumber:P},{setCollection:u,setItemsPerPage:f,setPageNumber:C}]}var E=n(27),y=n.n(E),N=n(3);function S(){var e=Object(o.useState)(null),t=s()(e,2),n=t[0],r=t[1],c=Object(o.useState)(null),a=s()(c,2),l=a[0],u=a[1],i=Object(o.useState)(null),p=s()(i,2),d=p[0],O=p[1],f=Object(o.useState)(null),j=s()(f,2),g=j[0],_=j[1],v=Object(o.useState)(!1),w=s()(v,2),E=w[0],S=w[1],k=Object(o.useState)(!1),P=s()(k,2),C=P[0],x=P[1],T=Object(o.useState)(!1),D=s()(T,2),F=D[0],L=D[1],U=Object(o.useState)(null),V=s()(U,2),q=V[0],I=V[1],R=Object(o.useState)(null),W=s()(R,2),B=W[0],M=W[1],A=Object(o.useState)(null),H=s()(A,2),Y=H[0],J=H[1],Q=Object(o.useState)(null),z=s()(Q,2),G=z[0],Z=z[1],K=Object(o.useState)(null),X=s()(K,2),$=X[0],ee=X[1],te=Object(o.useState)(null),ne=s()(te,2),re=ne[0],ce=ne[1],ae=Object(o.useState)(""),se=s()(ae,2),oe=se[0],le=se[1],ue=Object(N.__)("An unknown error has occurred.","bluehost-wordpress-plugin"),ie=function(){var e=b()(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),L(!0),O(null),e.prev=3,e.next=6,h()(t);case 6:if(!(n=e.sent).hasOwnProperty("status")||"error"!==n.status){e.next=9;break}throw new Error(n.message);case 9:return L(!1),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(3),L(!1),x(!0),O(("object"===y()(e.t0)?e.t0.message:e.t0)||ue),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(_x){return e.apply(this,arguments)}}(),be=function(e){e.hasOwnProperty("stagingExists")&&_(e.stagingExists),e.hasOwnProperty("currentEnvironment")&&u("production"===e.currentEnvironment),e.hasOwnProperty("productionDir")&&I(e.productionDir),e.hasOwnProperty("productionThumbnailUrl")&&M(e.productionThumbnailUrl),e.hasOwnProperty("productionUrl")&&J(e.productionUrl),e.hasOwnProperty("stagingDir")&&Z(e.stagingDir),e.hasOwnProperty("stagingThumbnailUrl")&&ee(e.stagingThumbnailUrl),e.hasOwnProperty("stagingUrl")&&ce(e.stagingUrl),e.hasOwnProperty("creationDate")&&r(e.creationDate)};function pe(){return(pe=b()(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,ie({path:"/bluehost/v1/staging",method:"POST"});case 3:(t=e.sent)&&(be(t),O(t.message),x("error"===t.status)),S(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({path:"/bluehost/v1/staging",method:"DELETE"});case 2:e.sent&&(_(!1),O(Object(N.__)("Staging website destroyed.","bluehost-wordpress-plugin")));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=b()(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(t),e.next=3,ie({path:"/bluehost/v1/staging/switch-to?env=".concat(t)});case 3:(n=e.sent)&&n.hasOwnProperty("load_page")&&(window.location.href=n.load_page);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({path:"/bluehost/v1/staging/clone",method:"POST"});case 2:e.sent&&O(Object(N.__)("Website cloned successfully.","bluehost-wordpress-plugin"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return(Oe=b()(m.a.mark((function e(){var t,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"all",e.next=3,ie({path:"/bluehost/v1/staging/deploy?type=".concat(t),method:"POST"});case 3:e.sent&&O(Object(N.__)("Changes deployed successfully.","bluehost-wordpress-plugin"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){ie({path:"/bluehost/v1/staging"}).then(be)}),[]),[{creationDate:n,hasStaging:g,isCreatingStaging:E,isError:C,isProduction:l,isLoading:F,notice:d,productionDir:q,productionThumbnailUrl:B,productionUrl:Y,stagingDir:G,stagingThumbnailUrl:$,stagingUrl:re,switchingTo:oe},{cloneEnv:function(){return he.apply(this,arguments)},createEnv:function(){return pe.apply(this,arguments)},deleteEnv:function(){return me.apply(this,arguments)},deployChanges:function(){return Oe.apply(this,arguments)},setNotice:O,switchToEnv:function(e){return de.apply(this,arguments)}}]}},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return k}));var r=n(13),c=n.n(r),a=n(1),s=n(5),o=n(23),l=n(3),u=n(2),i=n.n(u),b=n(6),p=n(116),m=n(7),d=n(12),h=function(e){var t=e.type,n=void 0===t?"base":t,r=e.descriptivePageTitle,u=void 0!==r&&r,h=c()(e,["type","descriptivePageTitle"]),O=document.querySelector(".bwa-route-contents"),f=Object(m.useLocation)(),j=Object(d.useSelect)((function(e){return e("bluehost/plugin").getTopLevelPages()}),[]);if(null==j)return!1;var g=function(){var e=Object(l.__)("Bluehost WordPress Plugin","bluehost-wordpress-plugin"),t=document.querySelector("h2");return!1!==u?u:null!==t?t.innerText:e};return Object(a.useEffect)((function(){var e,t,n,r,c;Object(s.d)(j),Object(s.c)((e=!1,t=f.pathname,(n=Object(b.keyBy)(j,"path"))[t]?e=n[t].slug:j.forEach((function(n){t.includes(n.path)&&(e=n.slug)})),e)),O.focus({preventScroll:!0}),r=f,c=g(),void 0!==r.state&&void 0!==r.state.redirect&&"unspecified-or-root"===r.state.redirect||Object(p.speak)(c,"assertive"),Object(s.g)(f,g())}),[f.pathname]),Object(a.createElement)("section",{className:i()(["component-template-"+n,"base-template","animated","fadeIn","page-fade-speed",h.className?h.className:null])},Object(a.createElement)(o.j,null),h.children)},O=n(10),f=n.n(O),j=(n(119),function(e){var t=e.type,n=void 0===t?"common":t,r=e.children,s=c()(e,["type","children"]);return Object(a.createElement)(h,f()({type:n},s),r)}),g=n(32),_=n.n(g),v=n(8),w=n.n(v),E=(n(120),n(9)),y=n(118),N=n(4),S=[{label:Object(l.__)("Popular","bluehost-wordpress-plugin"),value:"sort-sales-desc"},{label:Object(l.__)("Price (High to Low)","bluehost-wordpress-plugin"),value:"sort-price-desc"},{label:Object(l.__)("Price (Low to High)","bluehost-wordpress-plugin"),value:"sort-price-asc"},{label:Object(l.__)("Date Added","bluehost-wordpress-plugin"),value:"sort-date-desc"}],k=function(e){var t=e.type,n=void 0===t?"marketplace":t,r=e.className,s=void 0===r?"":r,u=e.isLoading,b=e.payload,p=e.render,m=e.marketplaceType,d=void 0===m?"themes":m,h=c()(e,["type","className","isLoading","payload","render","marketplaceType"]),O=Object(y.a)(),g=w()(O,2),v=g[0].favorites,k=g[1],P=k.hasFavorite,C=k.toggleFavorite,x=Object(y.c)(v),T=w()(x,1)[0],D=Object(y.f)(),F=w()(D,2),L=F[0],U=L.items,V=L.itemsPerPage,q=L.pageCount,I=L.pageNumber,R=F[1],W=R.setCollection,B=R.setPageNumber,M=Object(a.useState)("sort-sales-desc"),A=w()(M,2),H=A[0],Y=A[1],J=Object(y.e)(),Q=w()(J,1)[0],z=Object(y.d)(),G=w()(z,2),Z=G[0].query,K=G[1],X=K.search,$=K.setQuery;return s=i()("bluehost-marketplace",s),Object(a.useEffect)((function(){var e=b.items||[],t=H.split("-"),n=w()(t,3),r=n[0],c=n[1],a=n[2];e="filter"===r?T(Q(e,"sales"),c):Q(e,c,a),e=X(e,Z),W(e),B(1)}),[b,H,Z]),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[I]),Object(a.createElement)(j,f()({type:n,className:s,marketplaceType:d},h),Object(a.createElement)("section",{className:"".concat(s,"__header")},Object(a.createElement)("div",{className:"".concat(s,"__header-primary")},Object(a.createElement)(E.c,{level:"h2",size:1,className:"marketplace-page-title"},function(e){switch(e){case"plugins":return Object(l.__)("Premium Plugins","bluehost-wordpress-plugin");case"services":return Object(l.__)("Premium Services","bluehost-wordpress-plugin");default:return Object(l.__)("Premium Themes","bluehost-wordpress-plugin")}}(d)),Object(a.createElement)("div",{className:"".concat(s,"__pagination-container")},Object(a.createElement)(E.f,{callback:B,currentPage:I,pageCount:q}))),Object(a.createElement)("div",{className:"".concat(s,"__header-secondary")},Object(a.createElement)(o.o,{value:Z,onChange:$}),Object(a.createElement)(E.b,{id:"sort-filter",label:Object(l.__)("Sort By","bluehost-wordpress-plugin"),onChange:function(e){return Y(e)},options:S,value:H,width:178}))),Object(a.createElement)("div",{className:"".concat(s,"__content")},u?Object(a.createElement)(o.n,null,_()(Array(V).keys()).map((function(e){return Object(a.createElement)(o.m,{key:e})}))):U&&U.length?Object(a.createElement)(o.n,null,U.map((function(e){return p({item:e,hasFavorite:P,toggleFavorite:C})}))):"filter-favorites"===H?Object(a.createElement)("div",{className:"bluehost-no-results"},Object(a.createElement)(N.v,null),Object(a.createElement)("h2",null,Object(l.__)("You don't have any favorites yet.","bluehost-wordpress-plugin")),Object(a.createElement)("p",null,Object(l.__)("Add favorites by starring items you like.","bluehost-wordpress-plugin")),Object(a.createElement)("a",{href:"#",onClick:function(e){e.preventDefault(),Y("sort-sales-desc")}},function(){switch(d){case"plugins":return Object(l.__)("View Plugins","bluehost-wordpress-plugin");case"services":return Object(l.__)("View Services","bluehost-wordpress-plugin");default:return Object(l.__)("View Themes","bluehost-wordpress-plugin")}}())):Object(a.createElement)(o.g,null)),Object(a.createElement)("footer",{className:"".concat(s,"__footer")},Object(a.createElement)("div",{className:"".concat(s,"__ad")}),Object(a.createElement)(E.f,{callback:B,currentPage:I,pageCount:q})))}},143:function(e,t,n){"use strict";t.a=n.p+"images/blue-sky-group.55b18632.png"},191:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var r=n(1),c=(n(191),n(9)),a=n(4),s=n(121),o=n(148),l=n.n(o),u=n(8),i=n.n(u),b=n(234),p=n(242),m=n(244),d=n(11),h=n.n(d),O=n(2),f=n.n(O);function j(e){var t,n=e.className,c=e.group,a=e.isChecked,s=e.onChange,o=e.value;return Object(r.createElement)("label",{className:f()((t={btn:!0,"btn-secondary":!0},h()(t,"".concat(n,"__option"),!0),h()(t,"--is-active",a),t))},Object(r.createElement)("input",{checked:a,className:"".concat(n,"__option-field"),name:c,onClick:function(){a&&s("")},onChange:function(){s(o)},type:"radio",value:o}),Object(r.createElement)("span",{className:"".concat(n,"__option-field-label")},o))}function g(e){var t=e.className,n=e.defaultValue,c=void 0===n?"":n,a=e.group,s=e.onChange,o=e.options,l=Object(r.useState)(c),u=i()(l,2),b=u[0],p=u[1];return Object(r.createElement)("div",{className:"".concat(t,"__group")},o.map((function(e,n){return Object(r.createElement)(j,{className:t,group:a,isChecked:b===e,key:n,value:e,onChange:function(e){p(b!==e?e:""),s(e)}})})))}function _(e){var t=e.className,n=void 0===t?"resources-search-filters":t,c=e.defaultValue,a=e.group,s=e.label,o=e.onChange,l=e.options;return Object(r.createElement)("div",{className:n},Object(r.createElement)("span",{className:"".concat(n,"__label screen-reader-text")},s),Object(r.createElement)(g,{className:n,defaultValue:c,group:a,onChange:o,options:l}))}var v=n(3),w=n(232),E=Object(w.a)((function(e){var t=e.defaultRefinement,n=e.onSubmit,c=e.refine,s=Object(r.useState)(t),o=i()(s,2),l=o[0],u=o[1];return Object(r.createElement)("form",{action:"",className:"resources-search-form",noValidate:!0,onSubmit:function(e){e.preventDefault(),c(l),n(l)},role:"search"},Object(r.createElement)("input",{type:"text",placeholder:Object(v.__)("Search Resources","bluehost-wordpress-plugin"),value:l,onChange:function(e){return u(e.target.value)},"aria-label":Object(v.__)("Search","bluehost-wordpress-plugin")}),Object(r.createElement)("button",{type:"submit"},Object(r.createElement)(a.F,null),Object(r.createElement)("span",{className:"screen-reader-text"},Object(v.__)("Search Resources","bluehost-wordpress-plugin"))))})),y=n(243),N=n(233),S=n(5);function k(e,t){return e.length<=t?e:e.substr(0,t)+"..."}var P=function(e){var t=e.hasMore,n=e.onClick;return t?Object(r.createElement)("div",{className:"button-container"},Object(r.createElement)("button",{className:"components-button bluehost is-secondary is-link",onClick:n},Object(v.__)("More","bluehost-wordpress-plugin"))):null},C=Object(y.a)((function(e){e.hasMore;var t=e.hits,n=e.refineNext;return t.length?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"resources-search-results"},t.map((function(e,t){var n=e.permalink,c=e.content,a=e.post_title,s=new URL(n);return s.host="bluehost.com",Object(r.createElement)("a",{className:"resource-card",href:Object(S.a)(s.toString(),{utm_content:"help_resource_card",utm_term:a}),key:t,rel:"noreferrer noopener",target:"_blank"},Object(r.createElement)("div",{className:"resource-card__title",dangerouslySetInnerHTML:{__html:a}}),Object(r.createElement)("div",{className:"resource-card__description",dangerouslySetInnerHTML:{__html:k(c,100)}}))}))),Object(r.createElement)(P,{hasMore:!1,onClick:n})):Object(r.createElement)("p",{className:"resource-search-no-results"},Object(v.__)("There were no results for your query. Please try again.","bluehost-wordpress-plugin"))})),x=Object(N.a)((function(){return Object(r.createElement)(C,null)})),T=n(213),D=n.n(T),F=n(6),L=D()("AVE0JWZU92","92e960b820b03fb532d5f440191ec0fe"),U=Object(b.a)(),V=function(){Object(r.useRef)(!0);var e=Object(r.useState)(""),t=i()(e,2),n=t[0],c=t[1],a=Object(r.useState)({query:n}),s=i()(a,2),o=s[0],l=s[1],u=Object(r.useState)(["post_type:post"]),b=i()(u,2),d=b[0],h=b[1],O=Object(r.useState)("Websites"),f=i()(O,2),j=f[0],g=f[1];return Object(r.useEffect)((function(){h(j?["post_type:post","taxonomies.category:".concat(j)]:["post_type:post"])}),[j]),Object(r.useEffect)((function(){Object(S.f)({action:"resource-center-search",data:{query:{text:n,category:j}}})}),[n,j]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(p.a,{indexName:"bh_rc_searchable_posts",searchClient:L,searchState:o,onSearchStateChange:l},Object(r.createElement)(m.a,{hitsPerPage:6,filters:Object(F.join)(d," AND "),distinct:!0}),Object(r.createElement)(E,{defaultRefinement:n,onSubmit:function(e){return c(e)}}),Object(r.createElement)(_,{defaultValue:j,group:"taxonomies.user_level_tax",label:Object(v.__)("Filter by","bluehost-wordpress-plugin"),onChange:function(e){return g(e)},options:["Websites","Marketing","Business"]}),Object(r.createElement)(x,{cache:U})))},q=n(143);t.default=function(){return Object(r.createElement)(s.a,{className:"page-help"},Object(r.createElement)(c.c,{level:"h2",size:0},Object(v.__)("Help","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"clouds"},Object(r.createElement)("div",{className:"section-intro"},Object(r.createElement)("div",{className:"chat-button-container"},Object(r.createElement)(c.a,{className:"chat-button",href:Object(S.a)("https://helpchat.bluehost.com/",{utm_content:"help_chat_button",utm_term:"Chat with us"}),isPrimary:!0,rel:"noopener noreferrer",target:"_blank"},Object(v.__)("Chat with us","bluehost-wordpress-plugin")," ",Object(r.createElement)(a.i,{className:"chat-icon"}))),Object(r.createElement)("h3",{className:"section-title"},Object(v.__)("From DIY to full-service help","bluehost-wordpress-plugin")),Object(r.createElement)("p",{className:"section-description"},Object(v.__)("Feeling stuck? Choose how much help you'd like, from how-to articles to your own website concierge.","bluehost-wordpress-plugin"))),Object(r.createElement)("div",{className:"section-blue-sky"},Object(r.createElement)("div",{className:"section-title"},Object(r.createElement)(a.e,null),Object(r.createElement)("span",{className:"screen-reader-text"},Object(v.__)("Blue Sky","bluehost-wordpress-plugin"))),Object(r.createElement)("div",{className:"media-block"},Object(r.createElement)("div",{className:"media-block__media"},Object(r.createElement)("div",{className:"react-player-container"},Object(r.createElement)(l.a,{className:"react-player",height:"100%",light:q.a,playIcon:Object(r.createElement)("span",null),url:"https://www.youtube.com/embed/QEir4T7VweY",width:"100%"}))),Object(r.createElement)("div",{className:"media-block__details"},Object(r.createElement)("div",{className:"media-block__title"},Object(v.__)("Get your own website guide","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"media-block__description"},Object(v.__)("Our WordPress experts can jump in wherever you need help, teaching you how to build, grow, and maintain your website.","bluehost-wordpress-plugin")),Object(r.createElement)(c.a,{className:"media-block__button",href:"#/marketplace/services/blue-sky",isSecondary:!0,onClick:function(){window.scrollTo(0,0)}},Object(v.__)("Get Blue Sky","bluehost-wordpress-plugin")))))),Object(r.createElement)("div",{className:"section-featured-services"},Object(r.createElement)("div",{className:"section-title"},Object(v.__)("Let us do it for you","bluehost-wordpress-plugin")),Object(r.createElement)("p",{className:"section-description"},Object(v.__)("What can we help you achieve today?","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"featured-services"},Object(r.createElement)("div",{className:"featured-services-list"},Object(r.createElement)("div",{className:"featured-service"},Object(r.createElement)("div",{className:"featured-service__image"},Object(r.createElement)(a.k,null)),Object(r.createElement)("div",{className:"featured-service__title"},Object(v.__)("Full-Service Website","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"featured-service__description"},Object(v.__)("Ongoing marketing assistance and design","bluehost-wordpress-plugin")),Object(r.createElement)(c.a,{className:"featured-service__button","data-testid":"full-service",href:"https://www.bluehost.com/solutions/full-service#full-service",isSecondary:!0,utmContent:"help_full_service"},Object(v.__)("Learn more","bluehost-wordpress-plugin"))),Object(r.createElement)("div",{className:"featured-service"},Object(r.createElement)("div",{className:"featured-service__image"},Object(r.createElement)(a.D,null)),Object(r.createElement)("div",{className:"featured-service__title"},Object(v.__)("SEO Services","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"featured-service__description"},Object(v.__)("Fine tune your website for better visibility","bluehost-wordpress-plugin")),Object(r.createElement)(c.a,{className:"featured-service__button","data-testid":"seo-services",href:"https://www.bluehost.com/solutions/full-service#seo-services",isSecondary:!0,utmContent:"help_seo_services"},Object(v.__)("Learn more","bluehost-wordpress-plugin"))),Object(r.createElement)("div",{className:"featured-service"},Object(r.createElement)("div",{className:"featured-service__image"},Object(r.createElement)(a.h,null)),Object(r.createElement)("div",{className:"featured-service__title"},Object(v.__)("Our experts can help","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"featured-service__description"},Object(v.__)("Consult with an expert to figure out the best next steps.","bluehost-wordpress-plugin")),Object(r.createElement)(c.a,{className:"featured-service__button",href:"https://www.bluehost.com/solutions/full-service#request-form",isSecondary:!0,utmContent:"help_request_consultation"},Object(v.__)("Request a consultation","bluehost-wordpress-plugin")))))),Object(r.createElement)("div",{className:"section-resources"},Object(r.createElement)("div",{className:"section-title"},Object(v.__)("DIY","bluehost-wordpress-plugin")),Object(r.createElement)("p",{className:"section-description"},Object(v.__)("Checkout our resource center for helpful how-to articles and guides.","bluehost-wordpress-plugin")),Object(r.createElement)("div",{className:"resources-search"},Object(r.createElement)(V,null),Object(r.createElement)("div",{className:"button-container"},Object(r.createElement)(c.a,{href:"https://www.bluehost.com/resources/",isSecondary:!0,utmContent:"help_visit_resource_center"},Object(v.__)("Visit resource center","bluehost-wordpress-plugin"))))),Object(r.createElement)("footer",{className:"help-footer"},Object(r.createElement)("a",{className:"call-to-action",href:"tel:8884014678"},Object(r.createElement)(a.g,{className:"footer-icon"}),Object(r.createElement)("span",null,Object(v.__)("888-401-4678","bluehost-wordpress-plugin"))),Object(r.createElement)("a",{className:"call-to-action",href:Object(S.a)("https://helpchat.bluehost.com/",{utm_content:"help_chat_link",utm_term:"Chat with us"})},Object(r.createElement)(a.i,{className:"footer-icon"}),Object(r.createElement)("span",null,Object(v.__)("Chat with us","bluehost-wordpress-plugin")))))}}}]);