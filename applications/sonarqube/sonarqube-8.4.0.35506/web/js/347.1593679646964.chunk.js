(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1437:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(13),o=n(695),l=n.n(o),c=n(744);function a(e){var t=e.component,n=e.limited,o=t.name,a=void 0===o?"—":o;return r.createElement(r.Fragment,null,t.qualifier&&r.createElement(l.a,{className:"little-spacer-right",qualifier:t.qualifier}),n?Object(c.collapsePath)(a,15):a)}},1438:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(13),o=n(1439),l=n.n(o),c=n(685);function a(e){var t=e.limited,n=e.rule.name,o=void 0===n?"—":n;return r.createElement(r.Fragment,null,r.createElement(l.a,{className:"little-spacer-right",fill:c.colors.blue}),t?r.createElement("span",{className:"text-limited"},o):o)}},1439:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),c=n(664);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,a=o(e,["fill"]);return l.createElement(c.default,r({},a),l.createElement("path",{d:"M10.042 5.083a.3.3 0 0 1-.292.292.3.3 0 0 1-.292-.292c0-.629-.975-.875-1.458-.875a.3.3 0 0 1-.292-.291A.3.3 0 0 1 8 3.625c.848 0 2.042.447 2.042 1.458zm1.458 0c0-1.823-1.85-2.916-3.5-2.916S4.5 3.26 4.5 5.083c0 .584.237 1.194.62 1.641.173.2.373.392.556.602.647.774 1.194 1.686 1.285 2.716h2.078c.091-1.03.638-1.942 1.285-2.716.183-.21.383-.402.556-.602.383-.447.62-1.057.62-1.64zm1.167 0c0 .94-.31 1.75-.94 2.443-.628.693-1.457 1.668-1.53 2.643a.876.876 0 0 1 .428.748.852.852 0 0 1-.228.583.852.852 0 0 1 .228.583c0 .301-.155.575-.41.739a.89.89 0 0 1 .118.428c0 .592-.465.875-.993.875A1.479 1.479 0 0 1 8 15a1.479 1.479 0 0 1-1.34-.875c-.528 0-.993-.283-.993-.875 0-.146.045-.3.118-.428a.876.876 0 0 1-.41-.739c0-.218.082-.428.228-.583a.852.852 0 0 1-.228-.583c0-.301.164-.593.428-.748-.073-.975-.902-1.95-1.53-2.643a3.507 3.507 0 0 1-.94-2.443C3.333 2.604 5.694 1 8 1c2.306 0 4.667 1.604 4.667 4.083z",style:{fill:n}}))}},2253:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r,o=n(13),l=n(1437),c=n(661),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleNameClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onOpen()},t}return a(t,e),t.prototype.render=function(){return o.createElement("li",{className:"workspace-nav-item"},o.createElement("a",{className:"workspace-nav-item-link",href:"#",onClick:this.handleNameClick},this.props.children),o.createElement(c.ClearButton,{className:"js-close workspace-nav-item-close workspace-header-icon button-small little-spacer-left",color:"#fff",iconProps:{size:12},onClick:this.props.onClose}))},t}(o.PureComponent),u=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClose=function(){t.props.onClose(t.props.component.key)},t.handleOpen=function(){t.props.onOpen(t.props.component.key)},t}return u(t,e),t.prototype.render=function(){return o.createElement(i,{onClose:this.handleClose,onOpen:this.handleOpen},o.createElement(l.a,{component:this.props.component,limited:!0}))},t}(o.PureComponent),p=n(1438),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClose=function(){t.props.onClose(t.props.rule.key)},t.handleOpen=function(){t.props.onOpen(t.props.rule.key)},t}return f(t,e),t.prototype.render=function(){return o.createElement(i,{onClose:this.handleClose,onOpen:this.handleOpen},o.createElement(p.a,{limited:!0,rule:this.props.rule}))},t}(o.PureComponent);function m(e){var t=e.components.filter((function(t){return t.key!==e.open.component})),n=e.rules.filter((function(t){return t.key!==e.open.rule}));return o.createElement("nav",{className:"workspace-nav"},o.createElement("ul",{className:"workspace-nav-list"},t.map((function(t){return o.createElement(s,{component:t,key:"component-"+t.key,onClose:e.onComponentClose,onOpen:e.onComponentOpen})})),n.map((function(t){return o.createElement(h,{key:"rule-"+t.key,onClose:e.onRuleClose,onOpen:e.onRuleOpen,rule:t})}))))}},695:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),c=n(664),a={app:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M3.014 10.986a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm-5.004-.021c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zm-4.98 1.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2.984 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 2.984 6zm9.984 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 12.968 6zm-5.004-.021c1.103 0 2 .897 2 2a2 2 0 1 1-2-2zM2.984 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2zM3 1.025a2 2 0 1 1-.001 4.001A2 2 0 0 1 3 1.025zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zM7.98 1.004c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zM3 2.025a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.98 2.004a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2z",style:{fill:t||n.colors.blue}})}))},brc:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M8 9V8h6v1h1v1h1v6H6v-6h1V9h1zm7 2H7v4h8v-4zm-1-7v3h-1V5H1v7h4v1H0V4h14zm-1-2v1.5h-1V3H2v.5H1V2h12zm-1-2v1.5h-1V1H3v.5H2V0h10z",style:{fill:t||n.colors.blue}})}))},dev:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M7.974 8.02a3.5 3.5 0 0 1-2.482-1.017 3.428 3.428 0 0 1-1.028-2.455c0-.927.365-1.8 1.028-2.455a3.505 3.505 0 0 1 2.482-1.017 3.5 3.5 0 0 1 2.482 1.017 3.434 3.434 0 0 1 1.027 2.455c0 .928-.365 1.8-1.027 2.455A3.504 3.504 0 0 1 7.974 8.02zm0-5.778c-1.286 0-2.332 1.034-2.332 2.306s1.046 2.307 2.332 2.307c1.285 0 2.332-1.035 2.332-2.307S9.258 2.242 7.974 2.242zm3.534 6.418c.127.016.243.045.348.086.17.066.302.146.406.246.132.124.253.282.36.47.126.218.226.442.3.668.08.253.15.535.206.838.056.313.095.604.113.867.02.28.03.57.03.862 0 .532-.174.758-.306.882-.142.132-.397.31-.973.31H3.948c-.233 0-.437-.03-.606-.09-.14-.05-.26-.123-.366-.222-.13-.123-.306-.35-.306-.88 0-.294.01-.584.03-.863.018-.263.056-.554.112-.867a6.5 6.5 0 0 1 .207-.838c.073-.226.173-.45.298-.667.108-.19.23-.347.36-.47.106-.1.238-.18.407-.247.105-.04.22-.07.348-.086.202.13.432.277.683.435.342.217.756.4 1.265.564.523.166 1.06.25 1.59.25a5.25 5.25 0 0 0 1.592-.25c.51-.164.923-.348 1.266-.565.25-.158.48-.304.682-.435l-.002.002zm-.244-1.18c-.055 0-.184.066-.387.196-.202.13-.43.276-.685.437-.255.16-.586.307-.994.437-.408.13-.818.196-1.23.196-.41 0-.82-.065-1.228-.196a4.303 4.303 0 0 1-.993-.437c-.255-.16-.484-.306-.686-.437-.202-.13-.33-.196-.386-.196-.374 0-.716.06-1.026.183-.31.12-.572.283-.787.487a3.28 3.28 0 0 0-.57.737 4.662 4.662 0 0 0-.395.888c-.098.303-.18.633-.244.988a9.652 9.652 0 0 0-.128.992c-.02.306-.032.62-.032.942 0 .73.224 1.304.672 1.726.448.42 1.043.632 1.785.632h8.044c.743 0 1.34-.21 1.787-.633.447-.42.67-.996.67-1.725 0-.32-.01-.635-.03-.942a9.159 9.159 0 0 0-.374-1.98c-.098-.304-.23-.6-.395-.888a3.23 3.23 0 0 0-.57-.737 2.404 2.404 0 0 0-.788-.487 2.779 2.779 0 0 0-1.026-.183h-.004z",style:{fill:t||n.colors.blue}})}))},dir:i,fil:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M14 15H2V1l7.997.02c1 .034 1.759.758 2.428 1.42.667.663 1.561 1.605 1.574 2.555H14V15zM9 2H3v12h10V6H9V2zm3 10H4v-1h8v1zm0-2H4V9h8v1zm-1.988-5h3.008c-.012-.674-.714-1.443-1.204-1.937-.488-.495-1.039-1.058-1.816-1.055v2.96l.012.032z",style:{fill:t||n.colors.blue}})}))},svw:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M14 7h2v9H7v-2H0V0h14v7zM8 8v7h7V8H8zm3 6H9v-2h2v2zm3 0h-2v-2h2v2zm-1-7V1H1v12h6V7h6zm-7 5H2V8h4v4zm5-1H9V9h2v2zm3 0h-2V9h2v2zM5 9H3v2h2V9zm1-3H2V2h4v4zm6 0H8V2h4v4zM5 3H3v2h2V3zm6 0H9v2h2V3z",style:{fill:t||n.colors.blue}})}))},trk:u,uts:s,vw:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M14.97 14.97H1.016V1.015H14.97V14.97zm-1-12.955H2.015V13.97H13.97V2.015zm-.973 10.982H9V9h3.997v3.997zM7 12.996H3.004V9H7v3.996zM11.997 10H10v1.997h1.997V10zM6 10H4.004v1.996H6V10zm1-3H3.006V3.006H7V7zm5.985 0H9V3.015h3.985V7zM6 4.006H4.006V6H6V4.006zm5.985.009H10V6h1.985V4.015z",style:{fill:t||n.colors.blue}})}))},cla:s,dev_prj:u,lib:function(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M1 13h4V3H1v10zm3-1H2v-2h2v2zM2 4h2v4H2V4zm4 9h4V3H6v10zm3-1H7v-2h2v2zM7 4h2v4H7V4zm4 9h4V3h-4v10zm3-1h-2v-2h2v2zm-2-8h2v4h-2V4z",style:{fill:t||n.colors.blue}})}))},pac:i};function i(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M14 12.286V5.703a.673.673 0 0 0-.195-.5.644.644 0 0 0-.49-.203H6.704a.686.686 0 0 1-.5-.214.707.707 0 0 1-.203-.51v-.57c0-.2-.07-.363-.207-.502A.679.679 0 0 0 5.29 3H2.707a.672.672 0 0 0-.5.204.683.683 0 0 0-.206.5v8.582c0 .2.07.367.206.506.137.14.304.208.5.208h10.61a.66.66 0 0 0 .49-.208.685.685 0 0 0 .194-.506H14zm1-6.598v6.65c0 .458-.152.83-.475 1.16-.324.326-.7.502-1.15.502H2.647c-.452 0-.84-.175-1.162-.503a1.572 1.572 0 0 1-.486-1.158V3.654a1.6 1.6 0 0 1 .486-1.17A1.578 1.578 0 0 1 2.648 2h2.7c.45 0 .84.157 1.164.485.324.328.488.714.488 1.17V4h6.373c.452 0 .83.174 1.152.5.323.33.475.73.475 1.187v.001z",style:{fill:t||n.colors.orange}})}))}function u(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M14.985 13.988L1 14.005 1.02 5h13.966v8.988h-.001zM1.998 5.995l.006 7.02L14.022 13 14 6.004l-12.002-.01v.001zM3 4.5V4h9.996l.004.5h1l-.005-1.497-11.98.003L2 4.5h1zm1-2v-.504h8.002L12 2.5h1l-.004-1.495H3.003L3 2.5h1z",style:{fill:t||n.colors.blue}})}))}function s(e){var t=e.fill,n=o(e,["fill"]);return l.createElement(c.ThemedIcon,r({},n),(function(e){var n=e.theme;return l.createElement("path",{d:"M14 15H2V1l7.997.02c1.013-.03 1.57.893 2.239 1.555.667.663 1.75 1.47 1.763 2.42H14V15zM9 2H3v12h10V6H9V2zM7 8l-3 2.5L7 13V8zm1 5l3-2.5L8 8v5zm2.012-8h3.008c-.012-.674-.78-1.258-1.27-1.752-.488-.495-.973-1.243-1.75-1.24v2.96l.012.032z",style:{fill:t||n.colors.blue}})}))}t.default=function(e){if(!e.qualifier)return null;var t=e.qualifier.toLowerCase(),n=a[t];return n?l.createElement(n,{className:e.className,fill:e.fill}):null}}}]);
//# sourceMappingURL=347.1593679646964.chunk.js.map