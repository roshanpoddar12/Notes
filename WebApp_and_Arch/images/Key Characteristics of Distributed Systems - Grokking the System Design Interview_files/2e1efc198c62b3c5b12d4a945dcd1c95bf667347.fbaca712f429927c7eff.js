(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"1Ua+":function(e,t,n){"use strict";n.d(t,"d",(function(){return J})),n.d(t,"e",(function(){return B})),n.d(t,"c",(function(){return K})),n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return V}));var r=n("1OyB"),o=n("vuIU"),a=n("JX7q"),i=n("Ji7U"),l=n("md7G"),u=n("foSv"),c=n("rePB"),s=n("q1tI"),p=n.n(s),d=n("diBh"),f=n("7rlJ"),h=n.n(f),g=n("uwxr"),b=n("IzWC"),v=n("RFJL"),y=n("47Jv"),m=n("IP2g"),O=n("wHSu"),j=n("Evd+"),x=n("Vgjn"),C=n("W3D4"),k=n("uoqg"),E=n("neBe"),w=n("hVso"),S=n("hlFM"),D=n("VMC0"),L=n("XZhq"),A=n("Wm40"),T=n("vOnD"),P=n("Dsxo"),R={CenterLabel:T.d.label.withConfig({displayName:"styles__CenterLabel",componentId:"sc-1t470lf-0"})(["display:inline-flex;cursor:pointer;margin:0 15px 0 3px;.checkbox{margin-top:0px;margin-bottom:15px;}.form{margin-left:5px;border-radius:",";width:60px;}.fa-info-circle{margin:-4px 8px 0 -13px;}align-items:center;"],P.u),CheckboxContainer:T.d.div.withConfig({displayName:"styles__CheckboxContainer",componentId:"sc-1t470lf-1"})(["background:",";padding:5px;padding-left:15px;margin:5px 10px 5px 15px;border-radius:",";display:inline-block;"],(function(e){return e.theme.palette.common.white}),P.u),DownloadLabel:T.d.label.withConfig({displayName:"styles__DownloadLabel",componentId:"sc-1t470lf-2"})(["display:inline-flex;cursor:pointer;margin:0 15px 0 3px;.checkbox{margin-top:0px;margin-bottom:15px;}.form{margin-left:5px;border-radius:",";width:60px;}.fa-info-circle{margin:-4px 8px 0 -13px;}span{margin-right:10px;margin-top:2px;}"],P.u),DownloadLabel2:T.d.div.withConfig({displayName:"styles__DownloadLabel2",componentId:"sc-1t470lf-3"})(["display:inline-flex;cursor:pointer;margin:0 15px 0 3px;.checkbox{margin-top:0px;margin-bottom:15px;}.form{margin-left:5px;border-radius:",";width:60px;}.fa-info-circle{margin:-4px 8px 0 -13px;}span{margin-right:10px;margin-top:2px;}"],P.u),JottedPositionOverride:T.d.div.withConfig({displayName:"styles__JottedPositionOverride",componentId:"sc-1t470lf-4"})(["position:relative;"])},N=n("RsOY"),M=n.n(N),q=n("jxKE"),I=p.a.createElement;function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var J="javascript",B=["default","vsDark","vsLight"],K={default:"vsDark",vsDark:"vsDark",vsLight:"vsLight"},_={default:"vscode-dark",vsDark:"vscode-dark",vsLight:"vscode-light"};h()(String(Object.keys(null!==K&&void 0!==K?K:{}))===String(Object.keys(null!==_&&void 0!==_?_:{})));var W=function(e){return Object.keys(null!==e&&void 0!==e?e:{}).filter((function(t){return{}.hasOwnProperty.call(e,t)}))},V=function(e){Object(i.a)(n,e);var t=H(n);function n(){var e,o;Object(r.a)(this,n);for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return o=t.call.apply(t,[this].concat(l)),Object(c.a)(Object(a.a)(o),"OutputImageHeightRef",p.a.createRef()),Object(c.a)(Object(a.a)(o),"state",{showDockerOptions:(o.props.judge||o.props.runnable)&&(null===(e=o.props.docker.jobs)||void 0===e?void 0:e.length)>0}),Object(c.a)(Object(a.a)(o),"getHelloWordCode",(function(){var e,t=o.props,n=t.executionConfig,r=t.executionMetadata,a=n.usercodeLanguage,i=null===r||void 0===r?void 0:null===(e=r.data)||void 0===e?void 0:e.languages;if({}.hasOwnProperty.call(i,a)){var l,u=null===i||void 0===i?void 0:null===(l=i[a])||void 0===l?void 0:l.hello_world;o.props.onMultiChange({content:u,onlyCodeChanged:!1})}})),Object(c.a)(Object(a.a)(o),"handleSelectLanguage",(function(e){var t,n,r,a=o.props.executionMetadata,i=null===a||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.languages;o.props.judge&&((null===i||void 0===i?void 0:null===(n=i[e.target.value])||void 0===n?void 0:n.judge)||o.props.onJudgeChange(!1));o.props.runnable&&((null===i||void 0===i?void 0:null===(r=i[e.target.value])||void 0===r?void 0:r.runnable)||o.props.onRunnableChange(!1));o.props.onLanguageSelect(e.target.value)})),Object(c.a)(Object(a.a)(o),"handleSelectEvaluateLanguage",(function(e){o.props.onEvaluateLanguageSelect(e.target.value)})),Object(c.a)(Object(a.a)(o),"handleSelectTheme",(function(e){o.props.onThemeSelect(e.target.value)})),Object(c.a)(Object(a.a)(o),"handleShowSolutionChange",(function(e){o.props.onShowSolutionChange(!!e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleEvaluateWithoutExecutionChange",(function(e){o.props.onEvaluateWithoutExecutionChange(!!e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleAllowDownloadChange",(function(e){o.props.onAllowDownloadChange(e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleTreatOutputAsHTMLChange",(function(e){o.props.onTreatOutputAsHTMLChange(e.target.checked)})),Object(c.a)(Object(a.a)(o),"changeFileReadonlyStatus",(function(e){o.props.changeFileReadonlyStatus(e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleTransformOutputChange",(function(e){var t=o.props,n=t.dispatch,r=t.lessonParams,a=t.executionConfig,i=t.onTransformOutputChange,l=t.updateOutputTransformCode;e.target.checked&&n(D.b.show(L.o,{title:"Tranform Output or Extract API keys.",confirmHandler:function(e){l(e),n(D.b.close())},executionConfig:a,lessonParams:r,defaultCode:a.outputTransformCode||C.a})),i(e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleEnableHiddenCodeChange",(function(e){o.props.onEnableHiddenCodeChange(e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleEnableStdinChange",(function(e){o.props.onEnableStdinChange(e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleRunnableChange",(function(e){o.props.onRunnableChange(e.target.checked),e.target.checked?o.props.onMultiChange({judge:!1,runnable:!0,evaluateWithoutExecution:!1,evaluateLanguage:null}):o.props.judge||o.props.handleApiKeySelection({}),o.handleDockerJobsVisibility(e.target.checked)})),Object(c.a)(Object(a.a)(o),"handleDockerJobsVisibility",(function(e){var t;(null===(t=o.props.docker.jobs)||void 0===t?void 0:t.length)>0&&o.setState({showDockerOptions:e})})),Object(c.a)(Object(a.a)(o),"changeDockerJob",(function(e){var t=o.props.docker.jobs.find((function(t){return t.key===e.target.value}));o.props.onDockerJobChanged(t)})),Object(c.a)(Object(a.a)(o),"handleJudgeChange",(function(e){e.target.checked?o.props.onMultiChange({judge:!0,runnable:!1}):o.props.onJudgeChange&&(o.props.onJudgeChange(!1),o.props.runnable||o.props.handleApiKeySelection({})),o.handleDockerJobsVisibility(e.target.checked)})),Object(c.a)(Object(a.a)(o),"filterJudgeLanguages",(function(e){var t,n=o.props.executionMetadata;return(null===n||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.languages)[e].judge})),Object(c.a)(Object(a.a)(o),"renderEvalLangOption",(function(e){var t,n=o.props.executionMetadata,r=null===n||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.languages;return I("option",{key:e,value:e},r[e].title)})),Object(c.a)(Object(a.a)(o),"handleHighlighedLinesChange",(function(e){o.props.onHighlightedLinesChange(e.target.value)})),Object(c.a)(Object(a.a)(o),"handleTimeLimitChange",(function(e){o.props.onTimeLimitChange(e.target.value)})),Object(c.a)(Object(a.a)(o),"validateOutputImageHeightChange",(function(e){var t,n=e.target.value,r=n;n<150||!n?r=150:n>999&&(r=999),(null===(t=o.OutputImageHeightRef)||void 0===t?void 0:t.current)&&(o.OutputImageHeightRef.current.value=r),o.props.onOutputImageHeightChange(r)})),Object(c.a)(Object(a.a)(o),"validateTimeLimitChange",(function(e){var t=e.target.value,n=t;t<1?n=1:t>55&&(n=55),o.props.onTimeLimitChange(n)})),Object(c.a)(Object(a.a)(o),"handlePlaygroundModeChange",(function(e){e.target.checked?o.props.onMultiChange({playgroundMode:!0,judge:!1,runnable:!0,evaluateWithoutExecution:!1,evaluateLanguage:null}):o.props.playgroundMode&&o.props.onMultiChange({playgroundMode:!1,runnable:!1})})),Object(c.a)(Object(a.a)(o),"getHelloWorldButton",(function(e,t){var n,r;return I(k.a,{popoverTitle:"Are you sure you want to replace the existing code?",handleConfirm:o.getHelloWordCode,hideOnConfirm:!0,danger:!0},I(S.a,{display:"inline-flex"},I(w.a,{m:0,size:"small",variant:"text",color:"default",disabled:Object.keys(null!==(n=o.props.selectedDockerJob)&&void 0!==n?n:{}).length>0},"Add Hello World for ",null===e||void 0===e?void 0:null===(r=e[t])||void 0===r?void 0:r.title)))})),o}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){var t=e.docker.jobs,n=this.props.docker.jobs;if(!d.a(t,n)){var r=(this.props.judge||this.props.runnable)&&(null===n||void 0===n?void 0:n.length)>0;this.setState({showDockerOptions:r})}}},{key:"render",value:function(){var e,t,n,r,o,a,i,l,u,s,d,f,h,C,k=this,w=this.props,S=w.executionMetadata,D=w.executionConfig,L=w.editMode,T=w.playgroundMode,P=w.showPlaygroundMode,N=w.apiKeys,H=w.selectedApiKeys,J=w.handleApiKeySelection,B=w.mainFileSelected,K=w.selectedEnvVars,_=w.handleEnvVarSelection,V=w.docker,z=K;0===Object.keys(K).length&&(null===V||void 0===V||null===(C=V.envs)||void 0===C||C.forEach((function(e){z=M()(z,Object(c.a)({},e.id,{$set:!0}))})));var F=null===S||void 0===S?void 0:null===(e=S.data)||void 0===e?void 0:e.languages,U=D.timeLimit||30,$=D.outputImageHeight||q.n,G=D.usercodeLanguage||D.language;return I("div",{className:"edcomp-toolbar",style:{paddingBottom:"4px",margin:"0px",borderRadius:"0px"}},I("div",null,I("div",{style:{display:"inline-flex",alignItems:"center",paddingLeft:15,paddingTop:2,paddingBottom:2,marginTop:5,marginBottom:3}},L&&P&&I(R.CheckboxContainer,null,I(R.DownloadLabel,{className:"form-label"},I("span",null,"Code Playground"),I(g.a,{inline:!0,checked:T,onChange:this.handlePlaygroundModeChange}))),(L||T)&&I(R.CenterLabel,{className:"form-label"},"Language",I(b.a,{componentClass:"select",style:{marginLeft:5},value:G,onChange:this.handleSelectLanguage,disabled:null===(t=this.props.selectedDockerJob)||void 0===t?void 0:t.key},W(F).filter((function(e){var t;return!T||(null===(t=F[e])||void 0===t?void 0:t.runnable)})).map((function(e){return I("option",{key:e,value:e},F[e].title)})))),T&&F&&B&&(null===F||void 0===F?void 0:null===(n=F[D.language])||void 0===n?void 0:n.runnable)&&this.getHelloWorldButton(F,D.language),Object.keys(null!==(r=this.props.selectedDockerJob)&&void 0!==r?r:{}).length>0&&(null===(o=this.props.docker)||void 0===o?void 0:null===(a=o.envs)||void 0===a?void 0:a.length)>0&&I(E.a,{title:"Environment Vars",envVars:this.props.docker.envs,selectedEnvVars:z,handleEnvVarSelection:_,isEnv:!0},I(R.CheckboxContainer,null,I(R.CenterLabel,{className:"form-label"},"Select Env Vars"))),(this.props.runnable||this.props.judge||this.props.playgroundMode)&&N&&N.length>0&&I(E.a,{title:"API Keys",apiKeys:N,selectedApiKeys:H,handleApiKeySelection:J,playground:this.props.playgroundMode,extractEnabled:!0},I(R.CheckboxContainer,null,I(R.CenterLabel,{className:"form-label"},"Select API Keys"))),L&&!T&&I(p.a.Fragment,null,this.props.specialInput&&(this.props.runnable||this.props.judge)&&I(R.CenterLabel,{className:"form-label"},"Special Input",I(b.a,{componentClass:"select",style:{marginLeft:5,minWidth:"100px"},onChange:this.props.onSpecialInputSelect,value:this.props.specialInput},I("option",{value:x.d},"No Input"),I("option",{value:x.b},"Freehand"),I("option",{value:x.f},"Upload Image"),I("option",{value:x.e},"Text Input"))),this.state.showDockerOptions&&I(R.CenterLabel,{className:"form-label"},"Docker(Beta)",I(b.a,{componentClass:"select",style:{marginLeft:5,minWidth:"100px"},onChange:function(){return k.changeDockerJob.apply(k,arguments)},disabled:!Object(j.h)(null===(i=this.props)||void 0===i?void 0:null===(l=i.docker)||void 0===l?void 0:null===(u=l.container)||void 0===u?void 0:u.buildStatus)},I("option",{selected:!0,value:-1},"Select a Job"),null===(s=this.props.docker.jobs)||void 0===s?void 0:s.map((function(e,t){var n;return I("option",{key:t,value:e.key,selected:e.key===(null===(n=k.props.selectedDockerJob)||void 0===n?void 0:n.key)}," ",e.name," ")})))),(this.props.runnable||this.props.judge)&&I(R.CenterLabel,{className:"form-label"},"Time Limit (secs)",I(b.a,{componentClass:"input",className:"form",type:"number",onChange:this.handleTimeLimitChange,onBlur:this.validateTimeLimitChange,value:U})),I(A.a,{value:this.props.highlightedLines,onChangeLines:this.handleHighlighedLinesChange})))),L&&!T&&I(p.a.Fragment,null,I(R.CheckboxContainer,null,I(R.DownloadLabel,{className:"form-label"},I("span",null,"Execute"),I(g.a,{inline:!0,disabled:!(null===F||void 0===F?void 0:null===(d=F[G])||void 0===d?void 0:d.runnable),checked:this.props.runnable,onChange:this.handleRunnableChange})),F&&B&&(null===F||void 0===F?void 0:null===(f=F[G])||void 0===f?void 0:f.runnable)&&this.getHelloWorldButton(F,G)),(this.props.runnable||this.props.judge)&&I(R.CheckboxContainer,null,I(R.CenterLabel,{className:"form-label"},"Output Image Height (px)",I(b.a,{inputRef:function(e){k.OutputImageHeightRef.current=e},maxLength:3,componentClass:"input",className:"form",type:"number",onBlur:this.validateOutputImageHeightChange,defaultValue:$}))),I(R.CheckboxContainer,null,I(R.DownloadLabel,{className:"form-label"},I("span",null,"Exercise"),I(g.a,{inline:!0,disabled:!(null===F||void 0===F?void 0:null===(h=F[G])||void 0===h?void 0:h.judge),checked:this.props.judge,onChange:this.handleJudgeChange}))),I(R.CheckboxContainer,null,this.props.runnable?I(R.DownloadLabel,{className:"form-label"},I("span",null,"Hidden Code"),I(g.a,{inline:!0,checked:this.props.enableHiddenCode,onChange:this.handleEnableHiddenCodeChange})):null,this.props.runnable?I(R.DownloadLabel,{className:"form-label"},I("span",null,"Stdin"),I(g.a,{inline:!0,checked:this.props.enableStdin,onChange:this.handleEnableStdinChange})):null,this.props.runnable?I(R.DownloadLabel,{className:"form-label"},I("span",null,"Treat Output as HTML"),I(g.a,{inline:!0,checked:this.props.treatOutputAsHTML,onChange:this.handleTreatOutputAsHTMLChange})):null,this.props.runnable?I(R.DownloadLabel2,{className:"form-label"},I("span",{cursor:"pointer",onClick:function(){k.handleTransformOutputChange({target:{checked:!0}})}},"Transform Output / Extract API Keys"),I(g.a,{inline:!0,checked:this.props.executionConfig.transformOutput||!1,onChange:this.handleTransformOutputChange})):null,this.props.judge?I(R.DownloadLabel,{className:"form-label"},I("span",null,"Solution"),I(g.a,{inline:!0,checked:this.props.showSolution,onChange:this.handleShowSolutionChange})):null,this.props.judge?I(R.DownloadLabel,{className:"form-label"},I("span",null,"Evaluate in Another Language "),I(v.a,{placement:"top",overlay:I(y.a,{id:"code-options-tooltip"},"Access the user code as edTestMetadata.userCode")},I(m.a,{icon:O.g})),I(g.a,{inline:!0,checked:this.props.evaluateWithoutExecution,onChange:this.handleEvaluateWithoutExecutionChange})):null,this.props.evaluateWithoutExecution?I(R.CenterLabel,{className:"form-label"},"Language for evaluation",I(b.a,{componentClass:"select",style:{marginLeft:5},value:D.language,onChange:this.handleSelectEvaluateLanguage},W(F).filter(this.filterJudgeLanguages).map(this.renderEvalLangOption),")")):null,I(R.DownloadLabel,{className:"form-label"},I("span",null,"Downloadable"),I(g.a,{inline:!0,checked:this.props.allowDownload,onChange:this.handleAllowDownloadChange}))),I(R.CheckboxContainer,null,I(R.DownloadLabel,{className:"form-label"},I("span",null,"Mark current file as read-only"),I(g.a,{inline:!0,checked:this.props.readOnly,onChange:this.changeFileReadonlyStatus})))))}}]),n}(p.a.Component);Object(c.a)(V,"defaultProps",{docker:{jobs:[]},selectedDockerJob:{},onDockerJobChanged:function(){},specialInput:"",playgroundMode:!1,showPlaygroundMode:!1,runnable:!1,judge:!1,allowDownload:!1,treatOutputAsHTML:!1,enableHiddenCode:!1,enableStdin:!1,showSolution:!1,evaluateWithoutExecution:!1,apiKeys:null,selectedApiKeys:{},selectedEnvVars:{},handleApiKeySelection:function(){},handleEnvVarSelection:function(){},readOnly:!1})},"7rlJ":function(e,t,n){"use strict";(function(t){var r=n("Qetd");function o(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,a=Math.min(n,r);o<a;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function a(e){return t.Buffer&&"function"===typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=n("7tlc"),l=Object.prototype.hasOwnProperty,u=Array.prototype.slice,c="foo"===function(){}.name;function s(e){return Object.prototype.toString.call(e)}function p(e){return!a(e)&&("function"===typeof t.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var d=e.exports=y,f=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(i.isFunction(e)){if(c)return e.name;var t=e.toString().match(f);return t&&t[1]}}function g(e,t){return"string"===typeof e?e.length<t?e:e.slice(0,t):e}function b(e){if(c||!i.isFunction(e))return i.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function v(e,t,n,r,o){throw new d.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function y(e,t){e||v(e,!0,t,"==",d.ok)}function m(e,t,n,r){if(e===t)return!0;if(a(e)&&a(t))return 0===o(e,t);if(i.isDate(e)&&i.isDate(t))return e.getTime()===t.getTime();if(i.isRegExp(e)&&i.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"===typeof e||null!==t&&"object"===typeof t){if(p(e)&&p(t)&&s(e)===s(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(a(e)!==a(t))return!1;var l=(r=r||{actual:[],expected:[]}).actual.indexOf(e);return-1!==l&&l===r.expected.indexOf(t)||(r.actual.push(e),r.expected.push(t),function(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(i.isPrimitive(e)||i.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=O(e),a=O(t);if(o&&!a||!o&&a)return!1;if(o)return e=u.call(e),t=u.call(t),m(e,t,n);var l,c,s=C(e),p=C(t);if(s.length!==p.length)return!1;for(s.sort(),p.sort(),c=s.length-1;c>=0;c--)if(s[c]!==p[c])return!1;for(c=s.length-1;c>=0;c--)if(l=s[c],!m(e[l],t[l],n,r))return!1;return!0}(e,t,n,r))}return n?e===t:e==t}function O(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function j(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(n){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function x(e,t,n,r){var o;if("function"!==typeof t)throw new TypeError('"block" argument must be a function');"string"===typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(n){t=n}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&v(o,n,"Missing expected exception"+r);var a="string"===typeof r,l=!e&&o&&!n;if((!e&&i.isError(o)&&a&&j(o,n)||l)&&v(o,n,"Got unwanted exception"+r),e&&o&&n&&!j(o,n)||!e&&o)throw o}d.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=g(b((t=this).actual),128)+" "+t.operator+" "+g(b(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||v;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,a=h(n),i=o.indexOf("\n"+a);if(i>=0){var l=o.indexOf("\n",i+1);o=o.substring(l+1)}this.stack=o}}},i.inherits(d.AssertionError,Error),d.fail=v,d.ok=y,d.equal=function(e,t,n){e!=t&&v(e,t,n,"==",d.equal)},d.notEqual=function(e,t,n){e==t&&v(e,t,n,"!=",d.notEqual)},d.deepEqual=function(e,t,n){m(e,t,!1)||v(e,t,n,"deepEqual",d.deepEqual)},d.deepStrictEqual=function(e,t,n){m(e,t,!0)||v(e,t,n,"deepStrictEqual",d.deepStrictEqual)},d.notDeepEqual=function(e,t,n){m(e,t,!1)&&v(e,t,n,"notDeepEqual",d.notDeepEqual)},d.notDeepStrictEqual=function e(t,n,r){m(t,n,!0)&&v(t,n,r,"notDeepStrictEqual",e)},d.strictEqual=function(e,t,n){e!==t&&v(e,t,n,"===",d.strictEqual)},d.notStrictEqual=function(e,t,n){e===t&&v(e,t,n,"!==",d.notStrictEqual)},d.throws=function(e,t,n){x(!0,e,t,n)},d.doesNotThrow=function(e,t,n){x(!1,e,t,n)},d.ifError=function(e){if(e)throw e},d.strict=r((function e(t,n){t||v(t,!0,n,"==",e)}),d,{equal:d.strictEqual,deepEqual:d.deepStrictEqual,notEqual:d.notStrictEqual,notDeepEqual:d.notDeepStrictEqual}),d.strict.strict=d.strict;var C=Object.keys||function(e){var t=[];for(var n in e)l.call(e,n)&&t.push(n);return t}}).call(this,n("yLpj"))},"7tlc":function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(l(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,a=r.length,i=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),u=r[n];n<a;u=r[++n])g(u)||!O(u)?i+=" "+u:i+=" "+l(u);return i},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var a,i={};function l(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),s(r,e,r.depth)}function u(e,t){var n=l.styles[t];return n?"\x1b["+l.colors[n][0]+"m"+e+"\x1b["+l.colors[n][1]+"m":e}function c(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&C(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return v(o)||(o=s(e,o,r)),o}var a=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(v(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(b(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(a)return a;var i=Object.keys(n),l=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),x(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return p(n);if(0===i.length){if(C(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(m(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return p(n)}var c,O="",k=!1,E=["{","}"];(f(n)&&(k=!0,E=["[","]"]),C(n))&&(O=" [Function"+(n.name?": "+n.name:"")+"]");return m(n)&&(O=" "+RegExp.prototype.toString.call(n)),j(n)&&(O=" "+Date.prototype.toUTCString.call(n)),x(n)&&(O=" "+p(n)),0!==i.length||k&&0!=n.length?r<0?m(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=k?function(e,t,n,r,o){for(var a=[],i=0,l=t.length;i<l;++i)D(t,String(i))?a.push(d(e,t,n,r,String(i),!0)):a.push("");return o.forEach((function(o){o.match(/^\d+$/)||a.push(d(e,t,n,r,o,!0))})),a}(e,n,r,l,i):i.map((function(t){return d(e,n,r,l,t,k)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,O,E)):E[0]+O+E[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,a){var i,l,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?l=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(l=e.stylize("[Setter]","special")),D(r,o)||(i="["+o+"]"),l||(e.seen.indexOf(u.value)<0?(l=g(n)?s(e,u.value,null):s(e,u.value,n-1)).indexOf("\n")>-1&&(l=a?l.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+l.split("\n").map((function(e){return"   "+e})).join("\n")):l=e.stylize("[Circular]","special")),y(i)){if(a&&o.match(/^\d+$/))return l;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+l}function f(e){return Array.isArray(e)}function h(e){return"boolean"===typeof e}function g(e){return null===e}function b(e){return"number"===typeof e}function v(e){return"string"===typeof e}function y(e){return void 0===e}function m(e){return O(e)&&"[object RegExp]"===k(e)}function O(e){return"object"===typeof e&&null!==e}function j(e){return O(e)&&"[object Date]"===k(e)}function x(e){return O(e)&&("[object Error]"===k(e)||e instanceof Error)}function C(e){return"function"===typeof e}function k(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(y(a)&&(a=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!i[n])if(new RegExp("\\b"+n+"\\b","i").test(a)){var r=e.pid;i[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else i[n]=function(){};return i[n]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=f,t.isBoolean=h,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=v,t.isSymbol=function(e){return"symbol"===typeof e},t.isUndefined=y,t.isRegExp=m,t.isObject=O,t.isDate=j,t.isError=x,t.isFunction=C,t.isPrimitive=function(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e},t.isBuffer=n("j/1Z");var w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return[e.getDate(),w[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",S(),t.format.apply(t,arguments))},t.inherits=n("FfBw"),t._extend=function(e,t){if(!t||!O(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var L="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function A(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(L&&e[L]){var t;if("function"!==typeof(t=e[L]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,L,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],a=0;a<arguments.length;a++)o.push(arguments[a]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(i){n(i)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),L&&Object.defineProperty(t,L,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=L,t.callbackify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var a=this,i=function(){return o.apply(a,arguments)};t.apply(this,n).then((function(t){e.nextTick(i,null,t)}),(function(t){e.nextTick(A,t,i)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("8oxB"))},FfBw:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},W3D4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="function outputTransform(stdout, stderr) {\n  // Transform output or perform API key extraction.\n  const apiKeys = {};\n  return { apiKeys, stdout, stderr };\n}"},Wm40:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("1OyB"),o=n("vuIU"),a=n("JX7q"),i=n("Ji7U"),l=n("md7G"),u=n("foSv"),c=n("rePB"),s=n("q1tI"),p=n.n(s),d=n("IzWC"),f=n("h4VS"),h=n("vOnD");function g(){var e=Object(f.a)(["\n  .highlight-lines-global {\n    transition: 0.2s;\n    cursor: pointer;\n    &:hover {\n      color: "," !important;\n    }\n  }\n"]);return g=function(){return e},e}var b=Object(h.b)(g(),(function(e){return e.theme.palette.primary.main})),v=p.a.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(e){Object(i.a)(n,e);var t=y(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),Object(c.a)(Object(a.a)(e),"state",{isEditing:!1}),Object(c.a)(Object(a.a)(e),"controlRef",p.a.createRef()),Object(c.a)(Object(a.a)(e),"onBlur",(function(t){e.setState({isEditing:!1}),e.props.onChangeLines(t)})),e}return Object(o.a)(n,[{key:"changeToEditMode",value:function(e){e.preventDefault(),this.setState({isEditing:!0})}},{key:"renderEditMode",value:function(){var e=this;return v(d.a,{placeholder:"Enter line ranges to highlight                                                                                                                            1                                                                                                                                                                         5 9",rows:3,cols:25,inputRef:function(t){e.controlRef.current=t},componentClass:"textarea",defaultValue:this.props.value,onBlur:this.onBlur})}},{key:"renderReadMode",value:function(){return v("span",{onClick:this.changeToEditMode.bind(this),className:"highlight-lines-global"},"Highlight lines")}},{key:"componentDidUpdate",value:function(e,t){var n;this.state.isEditing&&(null===(n=this.controlRef.current)||void 0===n||n.focus())}},{key:"render",value:function(){return v("div",{style:{display:"inline-flex",marginRight:15}},v(b,null),this.state.isEditing?this.renderEditMode():this.renderReadMode())}}]),n}(p.a.Component)},YG7K:function(e,t,n){"use strict";var r=n("kOwS"),o=n("hi2O"),a=n("c7wz"),i=n("TSYQ"),l=n.n(i),u=n("q1tI"),c=n.n(u),s=n("17x9"),p=n.n(s),d=n("uwnE"),f={striped:p.a.bool,bordered:p.a.bool,condensed:p.a.bool,hover:p.a.bool,responsive:p.a.bool},h=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.striped,a=t.bordered,i=t.condensed,u=t.hover,s=t.responsive,p=t.className,f=Object(o.a)(t,["striped","bordered","condensed","hover","responsive","className"]),h=Object(d.f)(f),g=h[0],b=h[1],v=Object(r.a)({},Object(d.d)(g),((e={})[Object(d.e)(g,"striped")]=n,e[Object(d.e)(g,"bordered")]=a,e[Object(d.e)(g,"condensed")]=i,e[Object(d.e)(g,"hover")]=u,e)),y=c.a.createElement("table",Object(r.a)({},b,{className:l()(p,v)}));return s?c.a.createElement("div",{className:Object(d.e)(g,"responsive")},y):y},t}(c.a.Component);h.propTypes=f,h.defaultProps={bordered:!1,condensed:!1,hover:!1,responsive:!1,striped:!1},t.a=Object(d.a)("table",h)},"j/1Z":function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},neBe:function(e,t,n){"use strict";(function(e){var r=n("1OyB"),o=n("vuIU"),a=n("JX7q"),i=n("Ji7U"),l=n("md7G"),u=n("foSv"),c=n("rePB"),s=n("q1tI"),p=n.n(s),d=n("YG7K"),f=n("RFJL"),h=n("47Jv"),g=n("wHH0"),b=n("ISQA"),v=n("RsOY"),y=n.n(v),m=n("bWLx"),O=n("vOnD"),j=n("+zGO"),x=n("XDgg"),C=p.a.createElement;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var S=function(t){Object(i.a)(l,t);var n=w(l);function l(){var t;Object(r.a)(this,l);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return t=n.call.apply(n,[this].concat(i)),Object(c.a)(Object(a.a)(t),"overlayRef",null),Object(c.a)(Object(a.a)(t),"handleApiKeyChange",(function(e,n,r){var o={};t.props.selectedApiKeys&&(o=E({},t.props.selectedApiKeys)),o[e]?o=o[e][n]?y()(o,Object(c.a)({},e,Object(c.a)({},n,{$set:!o[e][n]}))):y()(o,Object(c.a)({},e,Object(c.a)({},n,{$set:!0}))):(o=y()(o,Object(c.a)({},e,{$set:{}})),o=y()(o,Object(c.a)({},e,Object(c.a)({},n,{$set:!0})))),t.props.handleApiKeySelection(o)})),Object(c.a)(Object(a.a)(t),"handleEnvChange",(function(e,n){var r={};t.props.selectedEnvVars&&(r=E({},t.props.selectedEnvVars)),r=r[e]?y()(r,Object(c.a)({},e,{$set:!r[e]})):y()(r,Object(c.a)({},e,{$set:!0})),t.props.handleEnvVarSelection(r)})),Object(c.a)(Object(a.a)(t),"handleHide",(function(){t.overlayRef&&t.overlayRef.hide()})),Object(c.a)(Object(a.a)(t),"renderEnvSelectorTable",(function(){var e=t.props,n=e.envVars,r=e.selectedEnvVars;return C(d.a,{striped:!0},C("thead",null,C("tr",null,C("th",null,"Required"),C("th",null,"Key"),C("th",null,"Value"))),C("tbody",null,n&&n.map((function(e,n){return C("tr",{key:"".concat(e.key,"_env_var")},C("th",null,C(b.a,{id:"select-".concat(e.key),checked:null===r||void 0===r?void 0:r[e.id],onChange:function(n){t.handleEnvChange(e.id,n)}})),C("th",null,e.key),C("th",null,e.value))}))))})),Object(c.a)(Object(a.a)(t),"renderApiKeySelectorTable",(function(){var n=t.props,r=n.apiKeys,o=n.selectedApiKeys,a=n.extractEnabled;return C(d.a,{striped:!0},C("thead",null,C("tr",null,C("th",null,"Required"," ",C(f.a,{placement:"top",trigger:["hover"],overlay:C(h.a,{id:"required-api-key"},"Learn about Required API keys."),rootClose:!0},C("a",{href:"/courses/author-guide/BnxqxY5wY1n#required-api-keys",target:"_blank"},C(x.a,{icon:"HelpCircle",size:12})))),a&&C("th",null,"Extract"," ",C(f.a,{placement:"top",trigger:["hover"],overlay:C(h.a,{id:"required-api-key"},"Learn about Extracted API keys."),rootClose:!0},C("a",{href:"/courses/author-guide/q20MppwKmGR#extracted-api-keys",target:"_blank"},C(x.a,{icon:"HelpCircle",size:12})))),C("th",{style:{maxWidth:"150px"}},"Key"),C("th",{style:{maxWidth:"150px"}},"Value"),C("th",{style:{maxWidth:"150px"}},"Help Text"))),C("tbody",null,r&&r.map((function(n,r){var i,l;return C("tr",{key:"".concat(n.key,"_api_keys")},C("th",null,C(b.a,{id:e.env.REACT_APP_STANDALONE?"selenium-required-".concat(n.key):null,checked:null===o||void 0===o?void 0:null===(i=o[n.id])||void 0===i?void 0:i.required,onChange:function(e){t.handleApiKeyChange(n.id,"required",e)}})),a&&C("th",null,C(b.a,{id:e.env.REACT_APP_STANDALONE?"selenium-extract-".concat(n.key):null,checked:null===o||void 0===o?void 0:null===(l=o[n.id])||void 0===l?void 0:l.extract,onChange:function(e){t.handleApiKeyChange(n.id,"extract",e)}})),C("th",{style:{maxWidth:"150px",overflowWrap:"break-word"}},n.key),C("th",{style:{maxWidth:"150px",overflowWrap:"break-word"}},n.value),C("th",{style:{maxWidth:"150px",overflowWrap:"break-word"}},n.urlText))}))))})),Object(c.a)(Object(a.a)(t),"renderPopover",(function(){var e=t.props,n=e.title,r=e.isEnv,o=e.theme;return C(b.b,{theme:o},C(O.a,{theme:o},C(m.a,{theme:o},C(b.c,null,C(b.d,null,C("div",null,C("strong",null,n))," ",C("i",{onClick:t.handleHide},C(g.a,{size:20}))),r?t.renderEnvSelectorTable():t.renderApiKeySelectorTable()))))})),t}return Object(o.a)(l,[{key:"render",value:function(){var e=this;return C(b.e,{addMargin:this.props.playground},C(f.a,{trigger:"click",placement:"bottom",rootClose:!0,onExit:this.handleHide,overlay:this.renderPopover(),ref:function(t){e.overlayRef=t}},this.props.children))}}]),l}(p.a.Component);Object(c.a)(S,"defaultProps",{apiKeys:[],selectedApiKeys:{},handleApiKeySelection:function(){return null},envVars:[],selectedEnvVars:{},handleEnvVarSelection:function(){return null},isEnv:!1,playground:!1,extractEnabled:!1}),t.a=Object(j.a)(S)}).call(this,n("8oxB"))}}]);
//# sourceMappingURL=2e1efc198c62b3c5b12d4a945dcd1c95bf667347.fbaca712f429927c7eff.js.map