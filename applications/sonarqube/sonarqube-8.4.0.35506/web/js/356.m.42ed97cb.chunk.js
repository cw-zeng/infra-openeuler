(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1171:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(311),n=a(487),s=a(2),i=a(312),l=a(330),o=a.n(l),c=a(343),m=a.n(c),p=a(325),h=a(31),u=a(362),d=a(379),b=a(417),v=a(465);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class O extends s.PureComponent{constructor(e){super(e),this.mounted=!1,this.getParams=({activation:e,rule:t}=this.props)=>{const a={};if(t&&t.params){for(const e of t.params)a[e.key]=e.defaultValue||"";if(e&&e.params)for(const t of e.params)a[t.key]=t.value}return a},this.getQualityProfilesWithDepth=({profiles:e}=this.props)=>Object(v.g)(e.filter(e=>!e.isBuiltIn&&e.actions&&e.actions.edit&&e.language===this.props.rule.lang)).map(e=>f({},e,{depth:e.depth-1})),this.handleFormSubmit=e=>{e.preventDefault(),this.setState({submitting:!0});const t={key:this.state.profile,organization:this.props.organization,params:this.state.params,rule:this.props.rule.key,severity:this.state.severity};Object(u.a)(t).then(()=>this.props.onDone(t.severity)).then(()=>{this.mounted&&(this.setState({submitting:!1}),this.props.onClose())},()=>{this.mounted&&this.setState({submitting:!1})})},this.handleParameterChange=e=>{const{name:t,value:a}=e.currentTarget;this.setState(e=>({params:f({},e.params,{[t]:a})}))},this.handleProfileChange=({value:e})=>{this.setState({profile:e})},this.handleSeverityChange=({value:e})=>{this.setState({severity:e})},this.renderSeverityOption=({value:e})=>s.createElement(d.a,{severity:e});const t=this.getQualityProfilesWithDepth(e);this.state={params:this.getParams(e),profile:t.length>0?t[0].key:"",severity:e.activation?e.activation.severity:e.rule.severity,submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{activation:e,rule:t}=this.props,{profile:a,severity:l,submitting:c}=this.state,{params:u=[]}=t,d=this.getQualityProfilesWithDepth(),v=!!t.templateKey,y=d.length<=0,f=!!e;return s.createElement(o.a,{contentLabel:this.props.modalHeader,onRequestClose:this.props.onClose,size:"small"},s.createElement("form",{onSubmit:this.handleFormSubmit},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,this.props.modalHeader)),s.createElement("div",{className:r("modal-body",{"modal-container":u.length>0})},!f&&y&&s.createElement(p.Alert,{variant:"info"},Object(h.translate)("coding_rules.active_in_all_profiles")),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(h.translate)("coding_rules.quality_profile")),s.createElement(m.a,{className:"js-profile",clearable:!1,disabled:c||1===d.length,onChange:this.handleProfileChange,options:d.map(e=>({label:"   ".repeat(e.depth)+e.name,value:e.key})),value:a})),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(h.translate)("severity")),s.createElement(m.a,{className:"js-severity",clearable:!1,disabled:c,onChange:this.handleSeverityChange,optionRenderer:this.renderSeverityOption,options:b.f.map(e=>({label:Object(h.translate)("severity",e),value:e})),searchable:!1,value:l,valueRenderer:this.renderSeverityOption})),v?s.createElement("div",{className:"modal-field"},s.createElement("p",{className:"note"},Object(h.translate)("coding_rules.custom_rule.activation_notice"))):u.map(e=>s.createElement("div",{className:"modal-field",key:e.key},s.createElement("label",{title:e.key},e.key),"TEXT"===e.type?s.createElement("textarea",{disabled:c,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,rows:3,value:this.state.params[e.key]||""}):s.createElement("input",{disabled:c,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,type:"text",value:this.state.params[e.key]||""}),s.createElement("div",{className:"note",dangerouslySetInnerHTML:{__html:Object(n.sanitize)(e.htmlDesc||"")}})))),s.createElement("footer",{className:"modal-foot"},c&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(i.SubmitButton,{disabled:c||y},f?Object(h.translate)("save"):Object(h.translate)("coding_rules.activate")),s.createElement(i.ResetButtonLink,{disabled:c,onClick:this.props.onClose},Object(h.translate)("cancel")))))}}},379:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(2),n=a(470),s=a.n(n),i=a(31);function l({className:e,severity:t}){return t?r.createElement("span",{className:e},r.createElement(s.a,{className:"little-spacer-right",severity:t}),Object(i.translate)("severity",t)):null}}}]);
//# sourceMappingURL=356.m.42ed97cb.chunk.js.map