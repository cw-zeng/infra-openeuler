(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1421:function(t,e,n){"use strict";n.r(e),e.default="The Default gate is applied to all projects not explicitly assigned to a gate. Quality Profile and Gate administrators can assign projects to a gate from the Quality Profile page. Project administrators can also choose a non-default gate.\n"},2263:function(t,e,n){"use strict";n.r(e);var o,r=n(13),i=n(681),a=n(176),s=n(837),c=n(701),u=n(682),l=n(769),p=n(909),f=n(692),d=n.n(f),g=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!1},e.stopLoading=function(){e.mounted&&e.setState({loading:!1})},e.handleChange=function(t){var n=e.props.gate,o=null==n&&null!=t.value,r=null!=n&&null==t.value,i=null!=n&&n.id!==t.value;(o||r||i)&&(e.setState({loading:!0}),e.props.onChange(n&&n.id,t.value).then(e.stopLoading,e.stopLoading))},e.renderGateName=function(t){return t.isDefault?r.createElement("span",null,r.createElement("strong",null,Object(a.translate)("default")),": ",t.label):r.createElement("span",null,t.label)},e}return g(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.renderSelect=function(){var t=this.props,e=t.gate,n=t.allGates.map((function(t){return{value:String(t.id),label:t.name,isDefault:t.isDefault}}));return r.createElement(d.a,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderGateName,options:n,style:{width:300},value:e&&String(e.id),valueRenderer:this.renderGateName})},e.prototype.render=function(){return r.createElement("div",null,this.renderSelect(),this.state.loading&&r.createElement("i",{className:"spinner spacer-left"}))},e}(r.PureComponent),m=n(710);function y(){return r.createElement("header",{className:"page-header"},r.createElement("div",{className:"page-title display-flex-center"},r.createElement("h1",null,Object(a.translate)("project_quality_gate.page")),r.createElement(m.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1421))})),r.createElement("div",{className:"page-description"},Object(a.translate)("project_quality_gate.page.description")))}var v=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!0},e.handleChangeGate=function(t,n){var o=e.state.allGates;if(!t&&!n||!o)return Promise.resolve();var r=e.props.component,i={gateId:n||t,organization:r.organization,projectKey:r.key};return(n?Object(s.a)(i):Object(s.g)(i)).then((function(){if(e.mounted)if(Object(l.a)(Object(a.translate)("project_quality_gate.successfully_updated")),n){var t=o.find((function(t){return t.id===n}));t&&(e.setState({gate:t}),e.props.onComponentChange({qualityGate:t}))}else e.setState({gate:void 0})}))},e}return v(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchQualityGates():Object(p.a)()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.checkPermissions=function(){var t=this.props.component.configuration;return!!(t&&t.showQualityGates)},e.prototype.fetchQualityGates=function(){var t=this,e=this.props.component;this.setState({loading:!0}),Promise.all([Object(s.i)({organization:e.organization}),Object(s.k)({organization:e.organization,project:e.key})]).then((function(e){var n=e[0],o=e[1];t.mounted&&t.setState({allGates:null==n?void 0:n.qualitygates,gate:o,loading:!1})}),(function(){t.mounted&&t.setState({loading:!1})}))},e.prototype.render=function(){if(!this.checkPermissions())return null;var t=this.state,e=t.allGates,n=t.gate,o=t.loading;return r.createElement("div",{className:"page page-limited",id:"project-quality-gate"},r.createElement(u.a,{suggestions:"project_quality_gate"}),r.createElement(i.a,{defer:!1,title:Object(a.translate)("project_quality_gate.page")}),r.createElement(c.a,{anchor:"qg_main"}),r.createElement(y,null),o?r.createElement("i",{className:"spinner"}):e&&r.createElement(h,{allGates:e,gate:n,onChange:this.handleChangeGate}))},e}(r.PureComponent);e.default=_},673:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(660),r=n(13),i=n(720),a=n(688);n(689);var s=n(666);e.default=function(t){var e=t.tagName,n=void 0===e?"div":e;return r.createElement(n,{className:o("help-tooltip",t.className)},r.createElement(s.default,{mouseLeaveDelay:.25,onShow:t.onShow,overlay:t.overlay,placement:t.placement},r.createElement("span",{className:"display-inline-flex-center"},t.children||r.createElement(a.ThemeConsumer,null,(function(t){return r.createElement(i.default,{fill:t.colors.gray71,size:12})})))))}},682:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o,r=n(13),i=n(709),a=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function s(t){var e=t.suggestions;return r.createElement(i.a.Consumer,null,(function(t){var n=t.addSuggestions,o=t.removeSuggestions;return r.createElement(c,{addSuggestions:n,removeSuggestions:o,suggestions:e})}))}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},e.prototype.componentDidUpdate=function(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))},e.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},e.prototype.render=function(){return null},e}(r.PureComponent)},689:function(t,e,n){var o=n(662),r=n(690);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},690:function(t,e,n){(e=n(663)(!1)).push([t.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),t.exports=e},701:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o,r=n(13),i=n(176),a=n(750),s=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(){return(c=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function u(t){return r.createElement(a.a.Consumer,null,(function(e){var n=e.addA11ySkipLink,o=e.removeA11ySkipLink;return r.createElement(l,c({addA11ySkipLink:n,removeA11ySkipLink:o},t))}))}var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getLink=function(){var t=e.props,n=t.anchor,o=t.label;return{key:n,label:void 0===o?Object(i.translate)("skip_to_content"):o,weight:t.weight}},e}return s(e,t),e.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},e.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},e.prototype.render=function(){var t=this.props.anchor;return r.createElement("span",{id:"a11y_target__"+t})},e}(r.PureComponent)},710:function(t,e,n){"use strict";var o,r=n(13),i=n(673),a=n.n(i),s=n(675),c=n(734),u=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=Object(s.lazyLoadComponent)((function(){return Promise.all([n.e(6),n.e(23)]).then(n.bind(null,853))}),"DocMarkdownBlock"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={},e}return u(e,t),e.prototype.componentDidMount=function(){var t=this;this.mounted=!0,this.props.doc.then((function(e){var n=e.default;t.mounted&&t.setState({content:n})}),(function(){}))},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){return this.state.content?r.createElement(a.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(l,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(c.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null},e}(r.PureComponent);e.a=p},734:function(t,e,n){"use strict";function o(t){for(var e,n,o=0;o<t.length;o++){if("---"===t[o].trim()){if(void 0!==e){n=o;break}e=o}}return void 0!==n?{firstLine:e,lastLine:n}:void 0}function r(t){for(var e={},n=0;n<t.length;n++){var o=t[n].split(":").map((function(t){return t.trim()}));2===o.length&&(e[o[0]]=o[1])}return e}function i(t,e){for(var n="\x3c!-- "+e+" --\x3e",o="\x3c!-- /"+e+" --\x3e",r=t,i=r.indexOf(n),a=r.indexOf(o);-1!==i&&-1!==a;)i<a?r=r.substring(0,i)+r.substring(a+o.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'+r.substring(a,i+n.length)+'"')),r=r.substring(0,a)+r.substring(a+o.length,i)+r.substring(i+n.length)),i=r.indexOf(n),a=r.indexOf(o);return r}t.exports={getFrontMatter:function(t){var e=t.split("\n"),n=o(e);return n?r(e.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(t){var e=t.split("\n"),n=o(e);if(n){var i=r(e.slice(n.firstLine+1,n.lastLine)),a=e.slice(n.lastLine+1).join("\n");return{frontmatter:i,content:a}}return{frontmatter:{},content:t}},filterContent:function(t){var e="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",o=n(38),r=o.isSonarCloud,a=o.getInstance,s=i(t.replace(/{instance}/gi,a()),"static");return(r()?i(s,"sonarqube"):i(s,"sonarcloud")).replace(new RegExp("^"+e+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+e,"g"),"")}}},769:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(736),r=n(735);function i(t){Object(r.default)().dispatch(o.b(t))}},909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(181),r=n.n(o),i=n(888),a=n(735);function s(){var t=Object(a.default)(),e=r()(),n=window.location.pathname+window.location.search+window.location.hash;t.dispatch(Object(i.c)()),e.replace({pathname:"/sessions/new",query:{return_to:n}})}}}]);
//# sourceMappingURL=318.1593679646964.chunk.js.map