(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1437:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t(13),r=t(695),i=t.n(r),a=t(744);function c(e){var n=e.component,t=e.limited,r=n.name,c=void 0===r?"—":r;return o.createElement(o.Fragment,null,n.qualifier&&o.createElement(i.a,{className:"little-spacer-right",qualifier:n.qualifier}),t?Object(a.collapsePath)(c,15):c)}},1440:function(e,n,t){"use strict";var o,r=t(13),i=t(1132),a=t(661),c=t(1015),s=t.n(c),p=t(1441),l=t.n(p),u=t(1442),m=t.n(u),h=t(1443),f=t.n(h),d=t(176),w=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),k=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleDrag=function(e,t){n.props.onResize(t.deltaY)},n}return w(n,e),n.prototype.render=function(){return r.createElement("header",{className:"workspace-viewer-header"},r.createElement("h6",{className:"workspace-viewer-name"},this.props.children),r.createElement(i.DraggableCore,{offsetParent:document.body,onDrag:this.handleDrag},r.createElement("div",{className:"workspace-viewer-resize js-resize"})),r.createElement("div",{className:"workspace-viewer-actions"},r.createElement(y,{icon:f.a,onClick:this.props.onCollapse,tooltip:"workspace.minimize"}),this.props.maximized?r.createElement(y,{icon:l.a,onClick:this.props.onMinimize,tooltip:"workspace.normal_size"}):r.createElement(y,{icon:m.a,onClick:this.props.onMaximize,tooltip:"workspace.full_window"}),r.createElement(y,{icon:s.a,onClick:this.props.onClose,tooltip:"workspace.close"})))},n}(r.PureComponent);function y(e){var n=e.icon,t=e.onClick,o=e.tooltip;return r.createElement(a.ButtonIcon,{className:"workspace-header-icon",color:"#fff",onClick:t,tooltip:Object(d.translate)(o)},r.createElement(n,{fill:void 0}))}n.a=k},2209:function(e,n,t){"use strict";t.r(n),t.d(n,"WorkspaceComponentViewer",(function(){return w}));var o,r=t(716),i=t.n(r),a=t(13),c=t(670),s=t(767),p=t(713),l=t(680),u=t(772),m=t(939),h=t(1437),f=t(1440),d=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),w=function(e){function n(n){var t=e.call(this,n)||this;return t.handleClose=function(){t.props.onClose(t.props.component.key)},t.handleIssueChange=function(e){t.refreshBranchStatus()},t.handleLoaded=function(e){if(t.props.onLoad({key:t.props.component.key,name:e.path,qualifier:e.q}),t.container&&t.props.component.line){var n=t.container.querySelector('.source-line[data-line-number="'+t.props.component.line+'"]');n&&Object(s.scrollToElement)(n,{smooth:!1,parent:t.container,topOffset:50,bottomOffset:50})}},t.refreshBranchStatus=function(){var e=t.props.component,n=e.branchLike;n&&Object(l.h)(n)&&Object(p.t)(e.key).then((function(e){e&&e.length>0&&t.props.fetchBranchStatus(n,e.pop().key)}),(function(){}))},t.refreshBranchStatus=i()(t.refreshBranchStatus,1e3),t}return d(n,e),n.prototype.componentDidMount=function(){document.documentElement&&document.documentElement.classList.add("with-workspace")},n.prototype.componentWillUnmount=function(){document.documentElement&&document.documentElement.classList.remove("with-workspace")},n.prototype.render=function(){var e=this,n=this.props.component;return a.createElement("div",{className:"workspace-viewer"},a.createElement(f.a,{maximized:this.props.maximized,onClose:this.handleClose,onCollapse:this.props.onCollapse,onMaximize:this.props.onMaximize,onMinimize:this.props.onMinimize,onResize:this.props.onResize},a.createElement(h.a,{component:n})),a.createElement("div",{className:"workspace-viewer-container",ref:function(n){return e.container=n},style:{height:this.props.height}},a.createElement(m.a,{aroundLine:n.line,branchLike:n.branchLike,component:n.key,highlightedLine:n.line,onIssueChange:this.handleIssueChange,onLoaded:this.handleLoaded})))},n}(a.PureComponent),k={fetchBranchStatus:u.c};n.default=Object(c.connect)(null,k)(w)},939:function(e,n,t){"use strict";var o=t(675),r=Object(o.lazyLoadComponent)((function(){return Promise.all([t.e(0),t.e(2),t.e(4),t.e(13),t.e(287)]).then(t.bind(null,1194))}),"SourceViewer");n.a=r}},0,[0,2,4,13,287]]);
//# sourceMappingURL=351.1593679646964.chunk.js.map