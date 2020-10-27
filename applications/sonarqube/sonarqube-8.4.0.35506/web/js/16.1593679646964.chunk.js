(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1023:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(660),a=n(13),o=n(176),i=n(710);function l(e){var t=e.className,l=e.tooltip,c=void 0===l||l,s=a.createElement("div",{className:r("badge badge-info",t)},Object(o.translate)("quality_profiles.built_in"));return c?a.createElement(i.a,{doc:Promise.resolve().then(n.bind(null,1106))},s):s}},1036:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(13),a=n(665),o=n(813),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){var t=e.name,n=e.language,c=e.organization,s=e.children,u=l(e,["name","language","organization","children"]);return r.createElement(a.Link,i({activeClassName:"link-no-underline",to:Object(o.c)(t,n,c)},u),s)}},1106:function(e,t,n){"use strict";n.r(t),t.default="Built-in profiles are provided directly by the language analyzers and may be updated with each new analyzer version. They represent best-practice, minimum rule sets.\n"},1598:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(13),a=n(666),o=n.n(a),i=n(712),l=n.n(i),c=n(703),s=n.n(c),u=n(176);function p(e){var t=e.date;return t?r.createElement(o.a,{overlay:r.createElement(s.a,{date:t})},r.createElement("span",null,r.createElement(l.a,{date:t}))):r.createElement("span",null,Object(u.translate)("never"))}},1610:function(e,t,n){"use strict";var r,a=n(13),o=n(729),i=n.n(o),l=n(176),c=n(711),s=n(708),u=n(38),p=n(671),f=n(813),m=n(661),d=n(678),h=n.n(d),y=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,name:null},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.name;null!=n&&(t.setState({loading:!0}),Object(c.i)(t.props.profile.key,n).then((function(e){return t.props.onCopy(e.name)}),(function(){t.mounted&&t.setState({loading:!1})})))},t}return y(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(l.translateWithParameters)("quality_profiles.copy_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"copy-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"copy-profile-name"},Object(l.translate)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"copy-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{disabled:n,id:"copy-profile-submit"},Object(l.translate)("copy")),a.createElement(m.ResetButtonLink,{id:"copy-profile-cancel",onClick:this.props.onClose},Object(l.translate)("cancel")))))},t}(a.PureComponent),b=n(674),v=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.handleFormSubmit=function(e){e.preventDefault(),t.setState({loading:!0}),Object(c.l)(t.props.profile).then(t.props.onDelete,(function(){t.mounted&&t.setState({loading:!1})}))},t}return v(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(l.translate)("quality_profiles.delete_confirm_title");return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("form",{id:"delete-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"js-modal-messages"}),e.childrenCount>0?a.createElement("div",null,a.createElement(b.Alert,{variant:"warning"},Object(l.translate)("quality_profiles.this_profile_has_descendants")),a.createElement("p",null,Object(l.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",e.name,e.languageName))):a.createElement("p",null,Object(l.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x",e.name,e.languageName))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{className:"button-red",disabled:this.state.loading,id:"delete-profile-submit"},Object(l.translate)("delete")),a.createElement(m.ResetButtonLink,{id:"delete-profile-cancel",onClick:this.props.onClose},Object(l.translate)("cancel")))))},t}(a.PureComponent),_=n(667),C=n.n(_),E=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.canSubmit=function(e){return Boolean(e.name&&e.name.length)},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleFormSubmit=function(e){return j(t,void 0,void 0,(function(){var t,n,r,a,o,i;return w(this,(function(l){switch(l.label){case 0:if(e.preventDefault(),!this.canSubmit(this.state))return[3,5];t=this.props,n=t.organization,r=t.profile,a=this.state.name,(o=new FormData).append("language",r.language),o.append("name",a),n&&o.append("organization",n),this.setState({loading:!0}),l.label=1;case 1:return l.trys.push([1,,4,5]),[4,Object(c.j)(o)];case 2:return i=l.sent().profile,[4,Object(c.g)(i,r)];case 3:return l.sent(),this.props.onExtend(i.name),[3,5];case 4:return this.mounted&&this.setState({loading:!1}),[7];case 5:return[2]}}))}))},t}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(l.translateWithParameters)("quality_profiles.extend_x_title",e.name,e.languageName);return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"extend-profile-name"},Object(l.translate)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"extend-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name?this.state.name:""}))),a.createElement("div",{className:"modal-foot"},a.createElement(C.a,{className:"spacer-right",loading:this.state.loading}),a.createElement(m.SubmitButton,{disabled:this.state.loading||!this.canSubmit(this.state),id:"extend-profile-submit"},Object(l.translate)("extend")),a.createElement(m.ResetButtonLink,{id:"extend-profile-cancel",onClick:this.props.onClose},Object(l.translate)("cancel")))))},t}(a.PureComponent),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,name:null},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.name;null!=n&&(t.setState({loading:!0}),Object(c.x)(t.props.profile.key,n).then((function(){return t.props.onRename(n)}),(function(){t.mounted&&t.setState({loading:!1})})))},t}return P(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(l.translateWithParameters)("quality_profiles.rename_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"rename-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"rename-profile-name"},Object(l.translate)("quality_profiles.new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"rename-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{disabled:n,id:"rename-profile-submit"},Object(l.translate)("rename")),a.createElement(m.ResetButtonLink,{id:"rename-profile-cancel",onClick:this.props.onClose},Object(l.translate)("cancel")))))},t}(a.PureComponent),q=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={copyFormOpen:!1,extendFormOpen:!1,deleteFormOpen:!1,renameFormOpen:!1},t.closeCopyForm=function(){t.setState({copyFormOpen:!1})},t.closeDeleteForm=function(){t.setState({deleteFormOpen:!1})},t.closeExtendForm=function(){t.setState({extendFormOpen:!1})},t.closeRenameForm=function(){t.setState({renameFormOpen:!1})},t.handleCopyClick=function(){t.setState({copyFormOpen:!0})},t.handleDeleteClick=function(){t.setState({deleteFormOpen:!0})},t.handleExtendClick=function(){t.setState({extendFormOpen:!0})},t.handleRenameClick=function(){t.setState({renameFormOpen:!0})},t.handleProfileCopy=function(e){t.closeCopyForm(),t.navigateToNewProfile(e)},t.handleProfileDelete=function(){t.props.router.replace(Object(f.e)(t.props.organization)),t.props.updateProfiles()},t.handleProfileExtend=function(e){t.closeExtendForm(),t.navigateToNewProfile(e)},t.handleProfileRename=function(e){t.closeRenameForm(),t.props.updateProfiles().then((function(){t.props.fromList||t.props.router.replace(Object(f.c)(e,t.props.profile.language,t.props.organization))}),(function(){}))},t.handleSetDefaultClick=function(){Object(c.C)(t.props.profile).then(t.props.updateProfiles,(function(){}))},t.navigateToNewProfile=function(e){t.props.updateProfiles().then((function(){t.props.router.push(Object(f.c)(e,t.props.profile.language,t.props.organization))}),(function(){}))},t}return q(t,e),t.prototype.render=function(){var e=this.props.profile,t=e.actions,n=void 0===t?{}:t,r=""+Object(u.getBaseUrl)()+Object(c.t)(e),s=Object(p.A)({qprofile:e.key,activation:"false"},this.props.organization);return a.createElement(a.Fragment,null,a.createElement(i.a,{className:this.props.className},n.edit&&a.createElement(o.ActionsDropdownItem,{to:s},a.createElement("span",{"data-test":"quality-profiles__activate-more-rules"},Object(l.translate)("quality_profiles.activate_more_rules"))),!e.isBuiltIn&&a.createElement(o.ActionsDropdownItem,{download:e.key+".xml",to:r},a.createElement("span",{"data-test":"quality-profiles__backup"},Object(l.translate)("backup_verb"))),a.createElement(o.ActionsDropdownItem,{to:Object(f.b)(e.name,e.language,this.props.organization)},a.createElement("span",{"data-test":"quality-profiles__compare"},Object(l.translate)("compare"))),n.copy&&a.createElement(a.Fragment,null,a.createElement(o.ActionsDropdownItem,{onClick:this.handleCopyClick},a.createElement("span",{"data-test":"quality-profiles__copy"},Object(l.translate)("copy"))),a.createElement(o.ActionsDropdownItem,{onClick:this.handleExtendClick},a.createElement("span",{"data-test":"quality-profiles__extend"},Object(l.translate)("extend")))),n.edit&&a.createElement(o.ActionsDropdownItem,{onClick:this.handleRenameClick},a.createElement("span",{"data-test":"quality-profiles__rename"},Object(l.translate)("rename"))),n.setAsDefault&&a.createElement(o.ActionsDropdownItem,{onClick:this.handleSetDefaultClick},a.createElement("span",{"data-test":"quality-profiles__set-as-default"},Object(l.translate)("set_as_default"))),n.delete&&a.createElement(o.ActionsDropdownDivider,null),n.delete&&a.createElement(o.ActionsDropdownItem,{destructive:!0,onClick:this.handleDeleteClick},a.createElement("span",{"data-test":"quality-profiles__delete"},Object(l.translate)("delete")))),this.state.copyFormOpen&&a.createElement(g,{onClose:this.closeCopyForm,onCopy:this.handleProfileCopy,profile:e}),this.state.extendFormOpen&&a.createElement(N,{onClose:this.closeExtendForm,onExtend:this.handleProfileExtend,organization:this.props.organization,profile:e}),this.state.deleteFormOpen&&a.createElement(O,{onClose:this.closeDeleteForm,onDelete:this.handleProfileDelete,profile:e}),this.state.renameFormOpen&&a.createElement(x,{onClose:this.closeRenameForm,onRename:this.handleProfileRename,profile:e}))},t}(a.PureComponent);t.a=Object(s.a)(S)},673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660),a=n(13),o=n(720),i=n(688);n(689);var l=n(666);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return a.createElement(n,{className:r("help-tooltip",e.className)},a.createElement(l.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},a.createElement("span",{className:"display-inline-flex-center"},e.children||a.createElement(i.ThemeConsumer,null,(function(e){return a.createElement(o.default,{fill:e.colors.gray71,size:12})})))))}},689:function(e,t,n){var r=n(662),a=n(690);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},690:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},700:function(e,t,n){var r=n(718),a=n(694),o=n(764),i=n(707);e.exports=function(e,t){return(i(e)?r:o)(e,a(t,3))}},703:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),o=n(668),i=n(129);t.formatterOption={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},t.default=function(e){var n=e.children,l=e.date;return a.createElement(o.FormattedDate,r({value:i.parseDate(l)},t.formatterOption),n)}},710:function(e,t,n){"use strict";var r,a=n(13),o=n(673),i=n.n(o),l=n(675),c=n(734),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=Object(l.lazyLoadComponent)((function(){return Promise.all([n.e(6),n.e(23)]).then(n.bind(null,853))}),"DocMarkdownBlock"),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t}return s(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then((function(t){var n=t.default;e.mounted&&e.setState({content:n})}),(function(){}))},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return this.state.content?a.createElement(i.a,{className:this.props.className,overlay:a.createElement("div",{className:"abs-width-300"},a.createElement(u,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(c.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null},t}(a.PureComponent);t.a=p},711:function(e,t,n){"use strict";n.d(t,"A",(function(){return s})),n.d(t,"s",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"y",(function(){return f})),n.d(t,"r",(function(){return m})),n.d(t,"q",(function(){return d})),n.d(t,"C",(function(){return h})),n.d(t,"x",(function(){return y})),n.d(t,"i",(function(){return g})),n.d(t,"l",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"t",(function(){return O})),n.d(t,"u",(function(){return _})),n.d(t,"o",(function(){return C})),n.d(t,"n",(function(){return E})),n.d(t,"p",(function(){return j})),n.d(t,"h",(function(){return w})),n.d(t,"d",(function(){return N})),n.d(t,"m",(function(){return P})),n.d(t,"B",(function(){return x})),n.d(t,"z",(function(){return q})),n.d(t,"c",(function(){return S})),n.d(t,"w",(function(){return k})),n.d(t,"b",(function(){return F})),n.d(t,"v",(function(){return z})),n.d(t,"e",(function(){return D})),n.d(t,"f",(function(){return L})),n.d(t,"a",(function(){return A})),n.d(t,"k",(function(){return R}));var r=n(700),a=n.n(r),o=n(821),i=n(49),l=n(677),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function s(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function u(e){var t=e.compareToSonarWay,n=e.profile.key;return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:t,key:n})}function p(e){return Object(i.postJSON)("/api/qualityprofiles/create",e).catch(l.a)}function f(e){return Object(i.postJSON)("/api/qualityprofiles/restore",e).catch(l.a)}function m(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function d(e){var t=e.language,n=e.name,r=e.organization;return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:t,qualityProfile:n,organization:r}).catch(l.a)}function h(e){var t=e.language,n=e.name,r=e.organization;return Object(i.post)("/api/qualityprofiles/set_default",{language:t,qualityProfile:n,organization:r})}function y(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function g(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function b(e){var t=e.language,n=e.name,r=e.organization;return Object(i.post)("/api/qualityprofiles/delete",{language:t,qualityProfile:n,organization:r}).catch(l.a)}function v(e,t){var n=e.language,r=e.name,a=e.organization;return Object(i.post)("/api/qualityprofiles/change_parent",{language:n,qualityProfile:r,organization:a,parentQualityProfile:t?t.name:void 0}).catch(l.a)}function O(e){var t=e.language,n=e.name,r=e.organization;return"/api/qualityprofiles/backup?"+Object.entries({language:t,qualityProfile:n,organization:r}).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&")}function _(e,t){var n=e.key,r=t.language,a=t.name,o=t.organization;return"/api/qualityprofiles/export?"+Object.entries({exporterKey:n,language:r,qualityProfile:a,organization:o}).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&")}function C(){return Object(i.getJSON)("/api/qualityprofiles/importers").then((function(e){return e.importers}),l.a)}function E(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then((function(e){return e.exporters}))}function j(e,t,n,r){var a=n.language,o=n.name,l=n.organization;return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:e,to:t,language:a,qualityProfile:o,organization:l,p:r})}function w(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function N(e,t){var n=e.language,r=e.name,a=e.organization;return Object(i.post)("/api/qualityprofiles/add_project",{language:n,qualityProfile:r,organization:a,project:t}).catch(l.a)}function P(e,t){var n=e.language,r=e.name,a=e.organization;return Object(i.post)("/api/qualityprofiles/remove_project",{language:n,qualityProfile:r,organization:a,project:t}).catch(l.a)}function x(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function q(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function S(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function k(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function F(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function z(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function D(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function L(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function A(e){var t=e.params&&a()(e.params,(function(e,t){return t+"="+Object(o.csvEscape)(e)})).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",c(c({},e),{params:t})).catch(l.a)}function R(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),a=n(668),o=n(129);t.default=function(e){var t=e.children,n=e.date;return r.createElement(a.FormattedRelative,{value:o.parseDate(n)},t)}},729:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13),l=n(178),c=n(176),s=n(683),u=n(730),p=n(661),f=n(721),m=n(676),d=n(666);t.default=function(e){var t=e.children,n=e.className,r=e.overlayPlacement,a=e.small,l=e.toggleClassName;return i.createElement(m.default,{className:n,onOpen:e.onOpen,overlay:i.createElement("ul",{className:"menu"},t),overlayPlacement:r},i.createElement(p.Button,{className:o("dropdown-toggle",l,{"button-small":a})},i.createElement(u.default,{size:a?12:14}),i.createElement(s.default,{className:"little-spacer-left"})))};var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return a(t,e),t.prototype.render=function(){var e=this,t=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?i.createElement("li",null,i.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?i.createElement("li",null,i.createElement(l.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?i.createElement(f.ClipboardBase,null,(function(n){var r=n.setCopyButton,a=n.copySuccess;return i.createElement(d.default,{overlay:c.translate("copied_action"),visible:a},i.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:r},i.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))})):i.createElement("li",null,i.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(i.PureComponent);t.ActionsDropdownItem=h,t.ActionsDropdownDivider=function(){return i.createElement("li",{className:"divider"})}},730:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=n(664);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,l=e.size,c=void 0===l?14:l,s=a(e,["fill","size"]);return o.createElement(i.default,r({size:c,viewBox:"0 0 14 14"},s),o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:n}})))}},734:function(e,t,n){"use strict";function r(e){for(var t,n,r=0;r<e.length;r++){if("---"===e[r].trim()){if(void 0!==t){n=r;break}t=r}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function a(e){for(var t={},n=0;n<e.length;n++){var r=e[n].split(":").map((function(e){return e.trim()}));2===r.length&&(t[r[0]]=r[1])}return t}function o(e,t){for(var n="\x3c!-- "+t+" --\x3e",r="\x3c!-- /"+t+" --\x3e",a=e,o=a.indexOf(n),i=a.indexOf(r);-1!==o&&-1!==i;)o<i?a=a.substring(0,o)+a.substring(i+r.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'+a.substring(i,o+n.length)+'"')),a=a.substring(0,i)+a.substring(i+r.length,o)+a.substring(o+n.length)),o=a.indexOf(n),i=a.indexOf(r);return a}e.exports={getFrontMatter:function(e){var t=e.split("\n"),n=r(t);return n?a(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){var t=e.split("\n"),n=r(t);if(n){var o=a(t.slice(n.firstLine+1,n.lastLine)),i=t.slice(n.lastLine+1).join("\n");return{frontmatter:o,content:i}}return{frontmatter:{},content:e}},filterContent:function(e){var t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",r=n(38),a=r.isSonarCloud,i=r.getInstance,l=o(e.replace(/{instance}/gi,i()),"static");return(a()?o(l,"sonarqube"):o(l,"sonarcloud")).replace(new RegExp("^"+t+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+t,"g"),"")}}},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvEscape=function(e){return'"'+e.replace(/"/g,'\\"')+'"'}}}]);
//# sourceMappingURL=16.1593679646964.chunk.js.map