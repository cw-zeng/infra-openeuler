(window.webpackJsonp=window.webpackJsonp||[]).push([[311,24,363],{1165:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(686);function r(e){return Boolean(e&&"PAID"===e.subscription)}function o(e,t,n){return!r(t)||i(e,t,n)}function i(e,t,n){return Boolean(t&&Object(a.b)(e)&&(t.actions&&t.actions.admin||n.some((function(e){return e.key===t.key}))))}},2091:function(e,t,n){"use strict";n.r(t),t.default="This organization is subscribed to a paid plan, allowing private projects. Its private projects, members, Quality Profiles and Quality Gates are visible to members only.\n\n---\n\nSee also: [Organization Visibility](/organizations/organization-visibility/)\n"},2246:function(e,t,n){"use strict";n.r(t),n.d(t,"OrganizationPage",(function(){return K}));var a=n(13),r=n(681),o=n(670),i=n(682),s=n(768),c=n(772),l=n(672),u=n(1143),m=n.n(u),p=n(685),g=n(679),f=n.n(g),d=n(665),v=n(676),b=n.n(v),h=n(666),y=n.n(h),E=n(683),O=n.n(E),j=n(176),_=n(687),z=n(1153),k=n(1511),N=n(808);function x(e){var t,n,r,o=e.currentUser,i=e.organization,s=e.organizations.filter((function(e){return e.key!==i.key})),c=i.actions&&i.actions.admin;return i.alm?(t=Object(N.g)(i.alm.key),n=a.createElement(a.Fragment,null,a.createElement("p",null,Object(j.translateWithParameters)("organization.bound_to_x",Object(j.translate)(t))),a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement("a",{href:i.alm.url,rel:"noopener noreferrer",target:"_blank"},Object(j.translateWithParameters)("organization.see_on_x",Object(j.translate)(t)))),r=Object(_.getBaseUrl)()+"/images/sonarcloud/"+t+".svg"):Object(N.c)(o)&&(t=Object(N.b)(o)||"",n=a.createElement(a.Fragment,null,a.createElement("p",null,Object(j.translateWithParameters)("organization.not_bound_to_x",Object(j.translate)(t))),c&&a.createElement(a.Fragment,null,a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement(d.Link,{to:"/organizations/"+i.key+"/edit"},Object(j.translate)("organization.go_to_settings_to_bind")))),r=Object(_.getBaseUrl)()+"/images/sonarcloud/"+t+"-unbound.svg"),a.createElement("header",{className:"navbar-context-header"},a.createElement(z.a,{organization:i}),s.length?a.createElement(b.a,{className:"display-inline-block",overlay:a.createElement("ul",{className:"menu"},f()(s,(function(e){return e.name.toLowerCase()})).map((function(e){return a.createElement(k.a,{key:e.key,organization:e})})))},a.createElement("a",{className:"display-inline-flex-center spacer-left link-base-color link-no-underline",href:"#"},i.name,a.createElement(O.a,{className:"little-spacer-left"}))):a.createElement("span",{className:"spacer-left"},i.name),t&&a.createElement(y.a,{mouseLeaveDelay:.25,overlay:n},a.createElement("img",{alt:Object(j.translate)(t),className:"text-middle spacer-left",height:16,src:r,width:16})),null!=i.description&&a.createElement("div",{className:"navbar-context-description"},a.createElement("p",{className:"text-limited text-top",title:i.description},i.description)))}var C=n(1042),w=n.n(C),L=n(1165),P=n(671),S=n(660),U=["edit","groups","permissions","permission_templates","projects_management","webhooks"];function M(e){var t=e.location,n=e.organization,r=n.adminPages,o=void 0===r?[]:r,i=o.map((function(e){return"extension/"+e.key})).concat(U).some((function(e){return t.pathname.endsWith("organizations/"+n.key+"/"+e)}));return a.createElement(b.a,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/edit"},Object(j.translate)("organization.settings"))),o.map((function(e){return a.createElement("li",{key:e.key},a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/extension/"+e.key},e.name))})),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/groups"},Object(j.translate)("user_groups.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/permissions"},Object(j.translate)("permissions.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/permission_templates"},Object(j.translate)("permission_templates"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/projects_management"},Object(j.translate)("projects_management"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/webhooks"},Object(j.translate)("webhooks.page")))),tagName:"li"},a.createElement("a",{className:S("dropdown-toggle",{active:i}),href:"#",id:"organization-navigation-admin"},Object(j.translate)("layout.settings"),a.createElement(O.a,{className:"little-spacer-left"})))}function W(e){var t=e.location,n=e.organization,r=n.pages||[];if(0===r.length)return null;var o=r.some((function(e){return t.pathname==="/organizations/"+n.key+"/extension/"+e.key}));return a.createElement(b.a,{overlay:a.createElement("ul",{className:"menu"},r.map((function(e){return a.createElement("li",{key:e.key},a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/extension/"+e.key},e.name))}))),tagName:"li"},a.createElement("a",{className:S("dropdown-toggle",{active:o}),href:"#",id:"organization-navigation-more"},Object(j.translate)("more"),a.createElement(O.a,{className:"little-spacer-left"})))}var D=Object(o.connect)((function(e){return{currentUser:Object(l.getCurrentUser)(e),userOrganizations:Object(l.getMyOrganizations)(e)}}))((function(e){var t=e.currentUser,n=e.location,r=e.organization,o=e.userOrganizations,i=Object(L.a)(t,r,o),s=r.actions,c=void 0===s?{}:s;return a.createElement(w.a,{className:"navbar-context-tabs"},a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/projects"},Object(j.translate)("projects.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:{pathname:"/organizations/"+r.key+"/issues",query:{resolved:"false"}}},Object(j.translate)("issues.page"))),i&&a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/quality_profiles"},Object(j.translate)("quality_profiles.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/rules"},Object(j.translate)("coding_rules.page"))),i&&a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:Object(P.x)(r.key)},Object(j.translate)("quality_gates.page"))),Object(L.b)(t,r,o)&&a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/members"},Object(j.translate)("organization.members.page"))),a.createElement(W,{location:n,organization:r}),c.admin&&a.createElement(M,{location:n,organization:r}))})),R=n(905),T=n(710),A=n(38);function B(e){var t=e.currentUser,r=e.organization,o=e.userOrganizations,i=Object(A.isSonarCloud)();return a.createElement("div",{className:"navbar-context-meta"},null!=r.url&&a.createElement("a",{className:"spacer-right text-limited",href:r.url,rel:"nofollow",title:r.url},r.url),i&&Object(L.c)(r)&&Object(L.a)(t,r,o)&&a.createElement(T.a,{className:"spacer-right",doc:Promise.resolve().then(n.bind(null,2091))},a.createElement("div",{className:"badge"},Object(j.translate)("organization.paid_plan.badge"))),a.createElement("div",{className:"text-muted"},a.createElement("strong",null,Object(j.translate)("organization.key"),":")," ",r.key),i&&a.createElement("div",{className:"navbar-context-meta-secondary"},a.createElement(R.a,{currentPage:{type:"ORGANIZATION",organization:r.key}})))}function q(e){var t=e.currentUser,n=e.location,r=e.organization,o=e.userOrganizations;return a.createElement(m.a,{height:p.rawSizes.contextNavHeightRaw,id:"context-navigation"},a.createElement("div",{className:"navbar-context-justified"},a.createElement(x,{currentUser:t,organization:r,organizations:o}),a.createElement(B,{currentUser:t,organization:r,userOrganizations:o})),a.createElement(D,{location:n,organization:r}))}var F,I=(F=function(e,t){return(F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}F(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.updateOrganization=function(e){t.setState({loading:!0}),t.props.fetchOrganization(e).then(t.stopLoading,t.stopLoading)},t}return I(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.updateOrganization(this.props.params.organizationKey)},t.prototype.componentWillReceiveProps=function(e){e.params.organizationKey!==this.props.params.organizationKey&&this.updateOrganization(e.params.organizationKey)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.organization;return e&&e.actions&&null!=e.actions.admin?a.createElement("div",null,a.createElement(r.a,{defaultTitle:e.name,defer:!1,titleTemplate:"%s - "+e.name}),a.createElement(i.a,{suggestions:"organization_space"}),a.createElement(q,{currentUser:this.props.currentUser,location:this.props.location,organization:e,userOrganizations:this.props.userOrganizations}),this.props.children):this.state.loading?null:a.createElement(s.default,{withContainer:!1})},t}(a.PureComponent),H={fetchOrganization:c.f};t.default=Object(o.connect)((function(e,t){return{currentUser:Object(l.getCurrentUser)(e),organization:Object(l.getOrganizationByKey)(e,t.params.organizationKey),userOrganizations:Object(l.getMyOrganizations)(e)}}),H)(K)},673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(660),r=n(13),o=n(720),i=n(688);n(689);var s=n(666);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return r.createElement(n,{className:a("help-tooltip",e.className)},r.createElement(s.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},e.children||r.createElement(i.ThemeConsumer,null,(function(e){return r.createElement(o.default,{fill:e.colors.gray71,size:12})})))))}},682:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,r=n(13),o=n(709),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function s(e){var t=e.suggestions;return r.createElement(o.a.Consumer,null,(function(e){var n=e.addSuggestions,a=e.removeSuggestions;return r.createElement(c,{addSuggestions:n,removeSuggestions:a,suggestions:t})}))}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(r.PureComponent)},689:function(e,t,n){var a=n(662),r=n(690);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},690:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},710:function(e,t,n){"use strict";var a,r=n(13),o=n(673),i=n.n(o),s=n(675),c=n(734),l=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=Object(s.lazyLoadComponent)((function(){return Promise.all([n.e(6),n.e(23)]).then(n.bind(null,853))}),"DocMarkdownBlock"),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then((function(t){var n=t.default;e.mounted&&e.setState({content:n})}),(function(){}))},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return this.state.content?r.createElement(i.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(u,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(c.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null},t}(r.PureComponent);t.a=m},734:function(e,t,n){"use strict";function a(e){for(var t,n,a=0;a<e.length;a++){if("---"===e[a].trim()){if(void 0!==t){n=a;break}t=a}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function r(e){for(var t={},n=0;n<e.length;n++){var a=e[n].split(":").map((function(e){return e.trim()}));2===a.length&&(t[a[0]]=a[1])}return t}function o(e,t){for(var n="\x3c!-- "+t+" --\x3e",a="\x3c!-- /"+t+" --\x3e",r=e,o=r.indexOf(n),i=r.indexOf(a);-1!==o&&-1!==i;)o<i?r=r.substring(0,o)+r.substring(i+a.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'+r.substring(i,o+n.length)+'"')),r=r.substring(0,i)+r.substring(i+a.length,o)+r.substring(o+n.length)),o=r.indexOf(n),i=r.indexOf(a);return r}e.exports={getFrontMatter:function(e){var t=e.split("\n"),n=a(t);return n?r(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){var t=e.split("\n"),n=a(t);if(n){var o=r(t.slice(n.firstLine+1,n.lastLine)),i=t.slice(n.lastLine+1).join("\n");return{frontmatter:o,content:i}}return{frontmatter:{},content:e}},filterContent:function(e){var t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",a=n(38),r=a.isSonarCloud,i=a.getInstance,s=o(e.replace(/{instance}/gi,i()),"static");return(r()?o(s,"sonarqube"):o(s,"sonarcloud")).replace(new RegExp("^"+t+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+t,"g"),"")}}},751:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(13),r=n(831),o=n.n(r),i=n(685),s=n(854);function c(e){var t=e.children;return a.createElement("div",{className:"global-container"},a.createElement("div",{className:"page-wrapper",id:"container"},a.createElement(o.a,{className:"navbar-global",height:i.rawSizes.globalNavHeightRaw}),t),a.createElement(s.a,null))}},768:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(13),r=n(681),o=n(665),i=n(176),s=n(751);function c(e){var t=e.withContainer,n=void 0===t||t?s.default:a.Fragment;return a.createElement(n,null,a.createElement(r.a,{defaultTitle:Object(i.translate)("404_not_found"),defer:!1}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("h2",{className:"big-spacer-bottom"},Object(i.translate)("page_not_found")),a.createElement("p",{className:"spacer-bottom"},Object(i.translate)("address_mistyped_or_page_moved")),a.createElement("p",null,a.createElement(o.Link,{to:"/"},Object(i.translate)("go_back_to_homepage"))))))}},808:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return u}));var a=n(686);function r(e,t){return t.endsWith("/")||(t+="/"),c(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function o(e){return Object(a.b)(e)&&e.externalProvider?u(e.externalProvider):void 0}function i(e){return Object(a.b)(e)&&(s(e.externalProvider)||c(e.externalProvider))}function s(e){return!!e&&e.startsWith("bitbucket")}function c(e){return"github"===e}function l(e){return"microsoft"===e}function u(e){return s(e)?"bitbucket":e}},905:function(e,t,n){"use strict";var a,r=n(660),o=n(13),i=n(670),s=n(661),c=n(666),l=n.n(c),u=n(936),m=n.n(u),p=n(176),g=n(686),f=n(672),d=n(870),v=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b={type:"PROJECTS"},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){t.props.setHomePage(t.props.currentPage)},t.handleReset=function(){t.props.setHomePage(b)},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.currentUser;if(!Object(g.b)(n))return null;var a=n.homepage,i=void 0!==a&&E(a,t),c=i&&E(t,b),u=i?Object(p.translate)(c?"homepage.current.is_default":"homepage.current"):Object(p.translate)("homepage.check");return o.createElement(l.a,{overlay:u},c?o.createElement("span",{"aria-label":u,className:r("display-inline-block",this.props.className)},o.createElement(m.a,{filled:i})):o.createElement(s.ButtonLink,{"aria-label":u,className:r("link-no-underline","set-homepage-link",this.props.className),onClick:i?this.handleReset:this.handleClick},o.createElement(m.a,{filled:i})))},t}(o.PureComponent),y={setHomePage:d.f};function E(e,t){return e.type===t.type&&e.branch===t.branch&&e.component===t.component&&e.organization===t.organization}t.a=Object(i.connect)((function(e){return{currentUser:Object(f.getCurrentUser)(e)}}),y)(h)},936:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13),s=n(688),c=n(664);t.default=function(e){var t=e.className,n=e.fill,l=e.filled,u=void 0!==l&&l,m=r(e,["className","fill","filled"]);return i.createElement(s.ThemeConsumer,null,(function(e){return i.createElement(c.default,a({className:o(t,"icon-outline",{"is-filled":u}),style:{color:n||e.colors.orange}},m),i.createElement("g",{transform:"matrix(0.870918,0,0,0.870918,0.978227,0.978227)"},i.createElement("path",{d:"M15.9,7.8L8.2,0.1C8.1,0 7.9,0 7.8,0.1L0.1,7.8C0,7.9 0,8.1 0.1,8.2C0.2,8.3 0.2,8.3 0.3,8.3L2.2,8.3L2.2,15.8C2.2,15.9 2.2,15.9 2.3,16C2.3,16 2.4,16.1 2.5,16.1L6.2,16.1C6.3,16.1 6.5,16 6.5,15.8L6.5,10.5L9.7,10.5L9.7,15.8C9.7,15.9 9.8,16.1 10,16.1L13.7,16.1C13.8,16.1 14,16 14,15.8L14,8.2L15.9,8.2C16,8.2 16,8.2 16.1,8.1C16,8 16.1,7.9 15.9,7.8Z"})))}))}}}]);
//# sourceMappingURL=311.1593679646964.chunk.js.map