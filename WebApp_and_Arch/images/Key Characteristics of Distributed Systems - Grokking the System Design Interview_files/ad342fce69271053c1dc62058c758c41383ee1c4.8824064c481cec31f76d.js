(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61],{"/9rZ":function(t,e,n){"use strict";var i=n("KQm4"),o=n("q1tI"),r=n.n(o),a=n("61uB"),c=n.n(a),l=n("1OyB"),s=n("vuIU"),u=n("Ji7U"),d=n("md7G"),p=n("foSv"),m=n("rePB"),f=n("Fn3X"),h=n("/MKj"),g=n("+zGO"),x=n("JERB"),y=n("rQ5L"),b=n("PCJJ"),w=n("zafh"),v=n("OG3W"),C=n("a9Uy"),k=n("mymk"),O=r.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Object(p.a)(t);if(e){var o=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t){Object(u.a)(n,t);var e=_(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.data,n=t.isViewer;return 0===e.tags.length||""===e.tags[0]?null:O(y.f,{isViewer:n},e.tags.map((function(t,e){return t=k.a.titleCaseString(t),O(y.h,{ref:"tag_".concat(e),key:"".concat(t,"_").concat(e)},O(C.a,{variant:"navigation"},t))})))}}]),n}(r.a.Component);Object(m.a)(j,"defaultProps",{isViewer:!1});var I=n("JX7q"),S=n("ADEI"),N=n("SLmk"),T=n("+Zpp"),D=n("8SmY"),L=n("WVQk"),P=n("abDY"),R=n("XZhq"),B=n("VMC0"),A=r.a.createElement;function z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Object(p.a)(t);if(e){var o=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Object(d.a)(this,n)}}var E=function(t){Object(u.a)(n,t);var e=z(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(m.a)(Object(I.a)(t),"handleBookmark",(function(e){var n=t.props,i=n.isLoggedIn,o=n.dispatch,r=n.location,a=n.shotId,c=n.isBookmarked,l=n.isSavedShot;(e.preventDefault(),e.stopPropagation(),i)?(o(l?P.a.set({isBookmarkedByReader:!c,shotId:a}):L.b.bookmark(!c,a)),(c?D.T:D.g)(a).then((function(){Object(T.c)(T.b.SHOT,c?T.a.SHOT_UNBOOKMARK:T.a.SHOT_BOOKMARK)})).catch((function(){o(l?P.a.set({isBookmarkedByReader:!c,shotId:a}):L.b.bookmark(!c,a))}))):o(B.b.show(R.l,{ru:r}))})),t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.isBookmarked;return A(S.b,null,A(S.c,{onClick:this.handleBookmark,borderless:!0,isDashboard:!0,"aria-label":"bookmark shot"},A(N.b,{fillColor:t})))}}]),n}(r.a.Component),V=n("nOHt"),M=n("YFqc"),F=n.n(M),U=r.a.createElement;function G(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Object(p.a)(t);if(e){var o=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Object(d.a)(this,n)}}var q=function(t){return U("svg",t,U("g",{id:"UI",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},U("g",{transform:"translate(-831.000000, -1108.000000)",fill:"black",fillRule:"nonzero",id:"Group-17"},U("g",{transform:"translate(831.000000, 1108.000000)"},U("path",{className:"fill",d:"M10.5,0 C4.70097115,0 0,4.70102163 0,10.5 C0,16.2989784 4.70097115,21 10.5,21 C16.2989784,21 21,16.2989784 21,10.5 C21,4.70102163 16.2989784,0 10.5,0 Z M9.4121899,19.4350457 C7.42001683,19.1964736 5.57676202,18.3046803 4.13599038,16.8639591 C2.43610096,15.1640697 1.49998558,12.9039952 1.49998558,10.5 C1.49998558,8.33588942 2.25901442,6.28869231 3.65051683,4.66144471 C3.68635817,5.09138942 3.77485096,5.55232933 3.7521851,5.88181731 C3.66939663,7.08300721 3.55086779,7.83476683 4.25396394,8.84816827 C4.5278726,9.2428774 4.59516346,9.80871635 4.72848317,10.2655673 C4.858875,10.712524 5.37978606,10.9469567 5.73905769,11.2223293 C6.46391106,11.7780721 7.15736538,12.424024 7.92598558,12.9131322 C8.43326683,13.2359567 8.75013462,13.3965361 8.60156971,14.0155817 C8.48208173,14.5134231 8.44871394,14.8200937 8.19116106,15.2636178 C8.1125625,15.3989567 8.48783654,16.2690937 8.61272596,16.3939832 C8.99123077,16.7724375 9.36680769,17.1196442 9.77938702,17.4603894 C10.4190288,17.9888726 9.71724519,18.6755625 9.4121899,19.4350457 Z M16.8639591,16.8639591 C15.5699856,18.1579327 13.9512692,19.0086851 12.1916611,19.3416058 C12.4410361,18.7249327 12.8850649,18.1770144 13.2969375,17.8593894 C13.6551995,17.5829567 14.1039231,17.0512428 14.2910553,16.6300817 C14.4780361,16.209476 14.7257452,15.8448534 14.9764327,15.4580697 C15.3330793,14.9078798 14.0971082,14.0781274 13.6965937,13.9042212 C12.7953101,13.5129447 12.1168486,12.9849663 11.3158702,12.4213486 C10.7451851,12.0198245 9.58655048,12.6310457 8.94226442,12.3498173 C8.0598101,11.9644976 7.33278606,11.2949712 6.56573077,10.7173197 C5.77419231,10.1211923 5.81245673,9.42622356 5.81245673,8.54679808 C6.43246154,8.56966587 7.31446154,8.37521394 7.72608173,8.8738125 C7.85596875,9.03116106 8.30257212,9.73410577 8.60151923,9.48432692 C8.84574519,9.28023317 8.42054567,8.46214183 8.33841346,8.2698101 C8.08575721,7.67842788 8.91409615,7.44778125 9.33808413,7.04676202 C9.89135337,6.52357933 11.0781562,5.7030649 10.984363,5.32804327 C10.8905697,4.95302163 9.79685337,3.8905024 9.15448558,4.05628125 C9.05821875,4.08111779 8.21064663,4.96983173 8.04688702,5.10925962 C8.05122837,4.81919712 8.05556971,4.5291851 8.06001202,4.2391226 C8.06278846,4.05597837 7.71835817,3.86798798 7.73436058,3.74986298 C7.77474519,3.45131971 8.60575962,2.90950962 8.81247837,2.67174519 C8.66764904,2.58123317 8.17344231,2.15674038 8.02386779,2.21903365 C7.66171875,2.36997115 7.25272356,2.47396154 6.89057452,2.62484856 C6.89057452,2.4992524 6.87532933,2.38127885 6.85715625,2.26476923 C7.58286779,1.94345913 8.35073077,1.72003125 9.1444399,1.60084615 L9.85541106,1.88656731 L10.3573918,2.48229087 L10.858363,2.99886058 L11.2962837,3.13995433 L11.9918582,2.48395673 L11.8125,2.01564663 L11.8125,1.5946875 C13.188101,1.79449038 14.4871731,2.30767788 15.6249087,3.09901442 C15.4213702,3.11723798 15.1976899,3.14717308 14.9453365,3.17927885 C14.8410937,3.11769231 14.7073702,3.08972596 14.593738,3.04686779 C14.9234279,3.75571875 15.2673029,4.45477644 15.6166803,5.15423798 C15.9898846,5.90140385 16.8177692,6.70283654 16.9631538,7.49154808 C17.1344856,8.42120192 17.0156034,9.26564423 17.1093462,10.3594111 C17.1996058,11.4126923 18.2968558,12.6094399 18.2968558,12.6094399 C18.2968558,12.6094399 18.8035313,12.7820337 19.2248942,12.7219111 C18.8321034,14.2758606 18.0268341,15.7009832 16.8639591,16.8639591 Z"})))))};q.defaultProps={width:"21px",height:"21px",className:"globe-icon",viewBox:"0 0 21 21",version:"1.1",xmlns:"http://www.w3.org/2000/svg"};var H=Object(h.b)(),W=function(t){Object(u.a)(n,t);var e=G(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"renderShotSummaryControls",value:function(t){var e=this,n=t.buttons.map((function(t){var n=t.icon,i=t.text,o=t.type,r=t.active,a=t.url,c=t.urlPath;return U(y.b,{key:o,active:r,onClick:function(t){t.preventDefault(),t.stopPropagation(),e.props.router.push({pathname:c,query:{editMode:!0}},a)}},U(y.a,null,n),U(y.e,null,U(C.a,{variant:"bodySmall"},i)))}));return U(y.d,null,n)}},{key:"getShotMisc",value:function(){var t=this.props.data,e=t.url,n=t.id,i="/edpresso/".concat(e);return{buttons:[""!==e&&null!==e&&{type:"published",text:"Published",url:i,urlPath:"/edpresso/[shotUrl]",icon:U(q,null)},{type:"edit",text:"Edit",url:"/shoteditor/".concat(n),urlPath:"/shoteditor/[shotId]",active:!0,icon:U(f.a,null)}].filter(Boolean),viewUrl:i}}},{key:"render",value:function(){var t=this.props,e=t.data,n=t.isViewer,i=t.inDashboard,o=t.isSavedShot,r=t.isRelated,a=t.dispatch,c=t.isLoggedIn,l=t.router,s=t.tileView,u=this.getShotMisc(),d=n?"/edpresso/".concat(e.url):"/shoteditor/".concat(e.id),p=Object(v.b)(e.creatorId,e.creatorImageUrl),m=Object(v.c)(e.creatorId),f=e.isBookmarkedByReader;return U(F.a,{as:d,href:n?"/edpresso/[shotUrl]":"/shoteditor/[shotId]"},U(y.i,{inDashboard:i,isRelated:r,tileView:s},U(y.g,null,U(C.a,{variant:"h5",component:"h2",mt:0},e.title)),!r&&U(j,{data:e,isViewer:n}),!r&&n&&(i||o)&&U(E,{isBookmarked:f,shotId:e.id,dispatch:a,isLoggedIn:c,location:l.asPath,isSavedShot:o}),!n&&U(y.c,null,U("div",null,U(C.a,{variant:"bodySmall"},e.creatorId&&U(b.c,{isShot:!0},U(F.a,{as:m,href:"/profile/view/[authorId]"},U(b.H,{size:18,inShotTile:!0},U(x.a,{image:p,size:"18",name:e.creatorName,inShotTile:!0}))),U(F.a,{as:m,href:"/profile/view/[authorId]"},U(b.f,{className:"italics"},U(C.a,{variant:"bodySmall"},e.creatorName)))),Object(v.f)(e.updated))),this.renderShotSummaryControls(u))))}}]),n}(r.a.Component);Object(m.a)(W,"defaultProps",{isViewer:!1,inDashboard:!1,isRelated:!1,isSavedShot:!1,tileView:w.a.SHOT_DEFAULT});var Z=Object(V.withRouter)(H(Object(g.a)(W))),J=n("6xYp"),K=n("0Xgo"),Q=n("xDz/"),Y=r.a.createElement;e.a=function(t){var e=t.children,n=void 0===e?null:e,o=t.loading,r=void 0!==o&&o,a=t.shots,l=void 0===a?[]:a,s=t.isViewer,u=void 0!==s&&s,d=t.inDashboard,p=void 0!==d&&d,m=t.isRelated,f=void 0!==m&&m,h=t.isBookmark,g=void 0!==h&&h,x=t.isLoggedIn,y=void 0!==x&&x,b=t.dispatch,v=void 0===b?null:b,C=t.tileView,k=void 0===C?w.a.SHOT_DEFAULT:C,O=function(t,e,n,o,r,a,c,l,s,u){var d=Z,p=n.map((function(t,e){return Y(d,{key:t.id,data:t,index:e,isViewer:o,inDashboard:r,isSavedShot:c,isRelated:a,dispatch:l,isLoggedIn:s,tileView:u})}));return p.length||!t||c||(p=o?new Array(9).fill(Y("div",null)).map((function(t,e){return u===w.a.LIST?Y(Q.c,{isViewer:o,key:e},K.shotPlaceholderTile):Y(Q.c,{key:e},K.shotPlaceholderTileSmall)})):new Array(9).fill(Y("div",null)).map((function(t,e){return Y(Q.c,{isViewer:o,key:e},K.shotPlaceholderTileSmall)}))),e&&(p=e.length>1?[].concat(Object(i.a)(e),Object(i.a)(p)):[e].concat(Object(i.a)(p))),p}(r,n,l,u,p,f,g,v,y,k),_={default:3,1023:2,764:1};return u&&!f&&(_={default:2,1023:1,764:1}),p&&k===w.a.LIST&&(_={default:1,1023:1,764:1}),Y(J.c,{isRelated:f,isShot:!0},Y(Q.d,{inDashboard:p,isListView:k===w.a.LIST},Y(c.a,{className:"my-masonry-grid",columnClassName:p&&k===w.a.LIST?"list-masonry-grid_column":"my-masonry-grid_column",breakpointCols:_},O)))}},"61uB":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n("q1tI"),l=(i=c)&&i.__esModule?i:{default:i};var s={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=2,d=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var i=void 0;return i=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||u,n.state={columnCount:i},n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var t=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){t.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var t=window&&window.innerWidth||1/0,e=this.props.breakpointCols;"object"!==("undefined"===typeof e?"undefined":r(e))&&(e={default:parseInt(e)||u});var n=1/0,i=e.default||u;for(var o in e){var a=parseInt(o);a>0&&t<=a&&a<n&&(n=a,i=e[o])}i=Math.max(1,parseInt(i)||1),this.state.columnCount!==i&&this.setState({columnCount:i})}},{key:"itemsInColumns",value:function(){for(var t=this.state.columnCount,e=new Array(t),n=[].concat(this.props.children||[]),i=0;i<n.length;i++){var o=i%t;e[o]||(e[o]=[]),e[o].push(n[i])}return e}},{key:"renderColumns",value:function(){var t=this.props,e=t.column,n=t.columnAttrs,i=void 0===n?{}:n,r=t.columnClassName,a=this.itemsInColumns(),c=100/a.length+"%",s=r;"string"!==typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof s&&(s="my-masonry-grid_column"));var u=o({},e,i,{style:o({},i.style,{width:c}),className:s});return a.map((function(t,e){return l.default.createElement("div",o({},u,{key:e}),t)}))}},{key:"logDeprecated",value:function(t){console.error("[Masonry]",t)}},{key:"render",value:function(){var t=this.props,e=(t.children,t.breakpointCols,t.columnClassName,t.columnAttrs,t.column,t.className),n=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}(t,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),i=e;return"string"!==typeof e&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof e&&(i="my-masonry-grid")),l.default.createElement("div",o({},n,{className:i}),this.renderColumns())}}]),e}(l.default.Component);d.defaultProps=s,e.default=d},"6xYp":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var i=n("vOnD"),o=n("zGpi"),r=i.d.div.attrs((function(){return{id:t.env.REACT_APP_STANDALONE?"selenium-featured":null}})).withConfig({displayName:"DashboardGrid",componentId:"sc-6fzutm-0"})(["align-self:center;width:100%;max-width:1100px;margin:20px auto;.my-masonry-grid{display:flex;justify-content:center;max-width:1026px;margin:auto;"," ","}.my-masonry-grid_column{width:auto !important;min-width:33.33%;@media (max-width:","){margin:auto;}","}"," @media (max-width:","){","}@media (max-width:","){"," ","}"],(function(t){return t.isShot&&Object(i.c)(["flex-wrap:wrap;"])}),(function(t){return t.displayFlexStart&&Object(i.c)(["justify-content:flex-start;@media (max-width:","){justify-content:center;padding-left:unset;}"],o.f.pixels)}),o.m.pixels,(function(t){return!t.isShot&&Object(i.c)(["@media (max-width:","){width:100% !important;}"],o.f.pixels)}),(function(t){return t.isCarouselInView&&Object(i.c)(["display:flex;justify-content:center;flex:inherit;margin-left:-100px;width:105%;"])}),o.m.pixels,(function(t){return t.restrictMaxWidths&&Object(i.c)(["max-width:780px;"])}),o.f.pixels,(function(t){return t.isCarouselInView&&Object(i.c)(["justify-content:center;padding:20px 0;margin-left:-30px;width:160%;"])}),(function(t){return t.restrictMaxWidths&&Object(i.c)(["max-width:410px;"])})),a=(i.d.div.withConfig({displayName:"DashboardGrid__AuthorTop",componentId:"sc-6fzutm-1"})(["margin-top:60px;"]),i.d.div.withConfig({displayName:"DashboardGrid__BlockType",componentId:"sc-6fzutm-2"})(["display:flex;flex-direction:row;flex:1 0 auto;justify-content:flex-start;align-items:center;margin:30px auto;max-width:1026px;padding:0 16px;color:",";flex-wrap:wrap;svg{stroke-width:1.5px;margin-right:8px;}",";",";"],(function(t){return t.theme.palette.grey.A100}),(function(t){return t.centered&&Object(i.c)(["max-width:1040px;padding:0 20px;margin:0 auto;width:100%;"])}),(function(t){return t.alignItems&&Object(i.c)(["align-items:center;"])}))),c=i.d.div.withConfig({displayName:"DashboardGrid__ListTilesContainer",componentId:"sc-6fzutm-3"})(["display:flex;flex-direction:column;align-items:center;@media (min-width:","){margin-left:75px;align-items:unset;}"],o.m.pixels);e.c=r}).call(this,n("8oxB"))},ADEI:function(t,e,n){"use strict";n.d(e,"j",(function(){return f})),n.d(e,"i",(function(){return h})),n.d(e,"f",(function(){return g})),n.d(e,"d",(function(){return x})),n.d(e,"o",(function(){return y})),n.d(e,"p",(function(){return b})),n.d(e,"n",(function(){return w})),n.d(e,"m",(function(){return v})),n.d(e,"c",(function(){return C})),n.d(e,"l",(function(){return k})),n.d(e,"g",(function(){return O})),n.d(e,"b",(function(){return _})),n.d(e,"h",(function(){return j})),n.d(e,"a",(function(){return I})),n.d(e,"e",(function(){return S})),n.d(e,"k",(function(){return N}));var i=n("Ff2n"),o=n("q1tI"),r=n.n(o),a=n("vOnD"),c=n("aWbt"),l=n("dN85"),s=n("zGpi"),u=n("PS9J"),d=n("Dsxo"),p=n("ImUn"),m=r.a.createElement,f=(a.d.div.withConfig({displayName:"styles__ShotStyled",componentId:"sc-1wnsl1a-0"})(["display:flex;width:100%;flex:1;justify-content:space-between;align-items:center;position:absolute;overflow-x:hidden;z-index:",";pointer-events:none;margin-top:100px;"],u.k),a.d.div.withConfig({displayName:"styles__RelatedShotsHeading",componentId:"sc-1wnsl1a-1"})(["justify-content:center;align-items:center;color:",";padding:10px 50px;text-align:center;height:10px;margin-bottom:30px;padding-top:0px;margin-top:-30px;"],(function(t){return t.theme.palette.grey.A400}))),h=Object(a.d)(f).withConfig({displayName:"styles__RelatedCoursesHeading",componentId:"sc-1wnsl1a-2"})(["margin-top:40px;"]),g=a.d.div.withConfig({displayName:"styles__Divider",componentId:"sc-1wnsl1a-3"})(["background-color:",";padding:1px 50%;margin:30px 0px 20px;"],(function(t){return t.theme.palette.primary.lightP2})),x=a.d.div.withConfig({displayName:"styles__Contributor",componentId:"sc-1wnsl1a-4"})(["display:flex;width:90%;max-width:780px;flex:1 0 auto;margin-top:6px;align-items:flex-end;@media (max-width:","){align-items:baseline;}"],s.k.pixels),y=a.d.span.withConfig({displayName:"styles__Text",componentId:"sc-1wnsl1a-5"})(["display:flex;flex:1 0 auto;max-width:85px;"," ",""],(function(t){return t.isRelated&&Object(a.c)(["max-width:210px;background:",";justify-content:center;margin:auto;margin-top:-36px;"],(function(t){return t.theme.palette.common.white}))}),(function(t){return t.isShot&&Object(a.c)(["max-width:200px;"])})),b=a.d.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1wnsl1a-6"})(["z-index:",";background:",";width:100%;max-width:1100px;margin-top:110px;padding-bottom:100px;"],u.n,(function(t){return t.theme.palette.common.white})),w=(a.d.div.withConfig({displayName:"styles__HeadingWrapper",componentId:"sc-1wnsl1a-7"})(["display:flex;justify-content:center;margin-top:-36px;"]),a.d.div.withConfig({displayName:"styles__SocialsPanel",componentId:"sc-1wnsl1a-8"})(["position:fixed;display:flex;margin-left:-120px;margin-top:150px;flex-direction:column;@media (max-width:","){height:50px;width:100%;z-index:5;margin-top:-65px;margin-left:6%;align-self:flex-end;justify-content:flex-end;align-items:flex-start;padding:0px 20px;flex-direction:row;}.social{display:flex;justify-content:center;:focus{outline:none;}}"],s.c.pixels)),v=a.d.div.withConfig({displayName:"styles__SocialsIcon",componentId:"sc-1wnsl1a-9"})(["border-radius:",";display:flex;width:50px;height:50px;align-items:center;justify-content:center;text-align:center;transition:0.2s;border:none;background-color:transparent;svg{stroke:",";}:hover,:focus{outline:none;svg{stroke:",";}}@media (max-width:","){margin-top:15px;margin-right:10px;background-color:",";:hover,:focus{color:",";}border:1px solid ",";}"],d.c,(function(t){return t.theme.palette.grey[500]}),(function(t){return t.theme.palette.accent3.contrastText}),s.c.pixels,(function(t){return t.theme.palette.common.white}),(function(t){return t.theme.palette.common.black}),(function(t){return t.theme.palette.common.black})),C=a.d.button.withConfig({displayName:"styles__CircleButton",componentId:"sc-1wnsl1a-10"})(["border-radius:",";display:flex;width:50px;height:50px;align-items:center;justify-content:center;text-align:center;transition:0.2s;border:none;background-color:transparent;"," svg,#FeedbackIcon{stroke:",";}:hover,:focus{outline:none;svg,#FeedbackIcon{stroke:",";}}@media (max-width:","){margin-top:15px;margin-right:10px;:hover,:focus{color:",";}","}"],d.c,(function(t){return t.isDashboard&&Object(a.c)(["width:25px;height:25px;padding:0px;"])}),(function(t){return t.theme.palette.grey[500]}),(function(t){return t.theme.palette.accent3.contrastText}),s.c.pixels,(function(t){return t.theme.palette.common.black}),(function(t){return t.borderless&&Object(a.c)(["border:none;background:"," !important;"],(function(t){return t.theme.palette.common.white}))})),k=a.d.div.withConfig({displayName:"styles__SocialMediaContainer",componentId:"sc-1wnsl1a-11"})(["display:flex;flex-direction:column;.social_media_pop-enter{opacity:0.01 !important;height:0;margin-bottom:0;padding:0;}.social_media_pop-enter.social_media_pop-enter-active{opacity:1 !important;height:25px;margin-bottom:25px;transition:0.3s ease-in;}.social_media_pop-exit{opacity:1 !important;height:24px;margin-bottom:25px;}.social_media_pop-exit.social_media_pop-exit-active{opacity:0.01 !important;height:0;margin-bottom:0;padding:0;transition:0.3s ease-in;}"]),O=Object(a.d)(c.a).withConfig({displayName:"styles__FacebookButton",componentId:"sc-1wnsl1a-12"})(["border-top:1px solid ",";@media (max-width:","){border-top:none;}"],(function(t){return t.theme.palette.grey[300]}),s.c.pixels),_=a.d.div.withConfig({displayName:"styles__ButtonsContainer",componentId:"sc-1wnsl1a-13"})(["display:flex;flex-direction:row;justify-content:flex-end;width:100%;"]),j=Object(a.d)((function(t){t.isLiked;var e=Object(i.a)(t,["isLiked"]);return m(l.a,e)})).withConfig({displayName:"styles__LikeIcon",componentId:"sc-1wnsl1a-14"})(["stroke:"," !important;fill:none;size:22;cursor:pointer;",":hover{stroke:"," !important;}"],(function(t){return t.theme.palette.grey[500]}),(function(t){return t.isLiked&&Object(a.c)(["fill:",";stroke:"," !important;"],(function(t){return t.theme.palette.accent3.contrastText}),(function(t){return t.theme.palette.accent3.contrastText}))}),(function(t){return t.theme.palette.common.black})),I=a.d.hr.withConfig({displayName:"styles__Border",componentId:"sc-1wnsl1a-15"})(["width:54px;@media (max-width:","){display:none;}"],s.c.pixels),S=a.d.div.withConfig({displayName:"styles__ContributorAttributionWrapper",componentId:"sc-1wnsl1a-16"})(["display:flex;flex-direction:column;flex:0 0 auto;color:",";width:100%;max-width:712px;margin-bottom:10px;padding:0px 16px;",""],(function(t){return t.theme.palette.grey.A400}),(function(t){return t.isShotPreview&&Object(a.c)(["margin-top:0px;"])})),N=Object(a.d)(p.a).withConfig({displayName:"styles__ShotAuthorName",componentId:"sc-1wnsl1a-17"})(["color:inherit;width:auto;margin-left:10px;"])},SLmk:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("Ff2n"),o=n("q1tI"),r=n.n(o),a=n("vOnD"),c=n("ulad"),l=n("c37F"),s=n("zGpi"),u=n("Dsxo"),d=r.a.createElement,p=Object(a.d)((function(t){t.fillColor,t.isCollectionPage,t.pinned_by_reader;var e=Object(i.a)(t,["fillColor","isCollectionPage","pinned_by_reader"]);return d(l.a,e)})).withConfig({displayName:"Bookmark__BookmarkStyled",componentId:"sc-1emlnud-0"})(["stroke:"," !important;"," size:22;vertical-align:middle;:hover{stroke:"," !important;}"],(function(t){return t.theme.palette.grey[500]}),(function(t){return t.fillColor&&Object(a.c)(["fill:",";stroke:"," !important;"],(function(t){return t.isCollectionPage?function(t){return t.theme.palette.primary.main}:function(t){return t.theme.palette.accent3.contrastText}}),(function(t){return t.isCollectionPage?function(t){return t.theme.palette.primary.main}:function(t){return t.theme.palette.accent3.contrastText}}))}),(function(t){return t.isCollectionPage&&!t.pinned_by_reader?function(t){return t.theme.palette.grey[500]}:t.isCollectionPage&&t.pinned_by_reader?function(t){return t.theme.palette.primary.main}:function(t){return t.theme.palette.accent3.contrastText}})),m=Object(a.d)(c.a).withConfig({displayName:"Bookmark__PopOver",componentId:"sc-1emlnud-1"})(["text-align:center;border-radius:",";min-width:130px;&.popover{box-shadow:0 0 10px ",";border:none;padding:10px;}@media (max-width:","){margin-left:0px !important;margin-top:15px !important;}"],u.l,(function(t){return t.theme.palette.alphas.black2}),s.e.pixels);e.b=p},dN85:function(t,e,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("17x9"),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=Object(i.forwardRef)((function(t,e){var n=t.color,i=void 0===n?"currentColor":n,r=t.size,a=void 0===r?24:r,s=l(t,["color","size"]);return(o.a.createElement("svg",c({ref:e,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.a.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})))}));s.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},s.displayName="Heart",e.a=s},rQ5L:function(t,e,n){"use strict";n.d(e,"c",(function(){return g})),n.d(e,"g",(function(){return x})),n.d(e,"f",(function(){return y})),n.d(e,"h",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return m.a})),n.d(e,"a",(function(){return f.a})),n.d(e,"e",(function(){return w}));var i=n("vOnD"),o=n("zGpi"),r=n("Dsxo"),a=n("zafh"),c=i.d.div.withConfig({displayName:"Bottom",componentId:"e4m64w-0"})(["display:flex;justify-content:center;align-items:center;"]),l=i.d.div.withConfig({displayName:"TagsContainer",componentId:"sc-1hpj9zr-0"})(["padding:15px 15px 0px 15px;text-align:center;"]),s=n("Zf07"),u=n("QEZu"),d=n("NNnm"),p=i.d.span.withConfig({displayName:"Tag",componentId:"sc-42max7-0"})(["display:inline-block;vertical-align:top;color:",";padding:6px 15px;background-color:",";border-radius:",";margin:0px 5px 5px 0px;cursor:pointer;"," &:last-child{margin-right:0;}"],(function(t){return t.theme.palette.grey.A400}),(function(t){return t.theme.palette.grey[100]}),r.z,(function(t){return t.selected&&Object(i.c)(["background:",";border:1px solid ",";transition:0.2s;:hover{transform:scale(1.1);}"],(function(t){return t.theme.palette.grey[300]}),(function(t){return t.theme.palette.grey[300]}))})),m=(n("tZcu"),n("0e5M")),f=n("Cz5u"),h=i.d.a.withConfig({displayName:"ShotTile",componentId:"e7wllb-0"})(["display:flex;align-items:flex-start;flex-direction:column;width:310px;margin:24px 16px;padding:15px 15px;border-radius:",";border:1px solid ",";position:relative;transition:0.2s;cursor:pointer;background:",";"," ",":focus{text-decoration:none;color:",";}&:hover{border:1px solid ",";}@media (max-width:","){width:290px;}",""],r.D,(function(t){return t.theme.palette.grey[200]}),(function(t){return t.theme.palette.common.white}),(function(t){return t.inDashboard&&t.tileView===a.a.LIST&&Object(i.c)(["width:93%;margin:12px 16px;"])}),(function(t){return t.isRelated&&Object(i.c)(["height:110px;"])}),(function(t){return t.theme.palette.common.black}),(function(t){return t.theme.palette.common.black}),o.f.pixels,(function(t){return t.inDashboard&&t.tileView===a.a.LIST&&Object(i.c)(["@media (max-width:","){margin:12px 0px;}"],o.f.pixels)})),g=Object(i.d)(c).withConfig({displayName:"ShotTile__ShotBottom",componentId:"e7wllb-1"})(["align-items:flex-end;flex:1;width:100%;justify-content:space-between;margin-top:20px;"]),x=Object(i.d)(s.a).withConfig({displayName:"ShotTile__ShotTitle",componentId:"e7wllb-2"})(["text-align:start;margin-top:0px;width:100%;"]),y=Object(i.d)(l).withConfig({displayName:"ShotTile__ShotTagsContainer",componentId:"e7wllb-3"})(["display:flex;padding-left:0px;padding-bottom:15px;flex-wrap:wrap;",""],(function(t){return t.isViewer&&Object(i.c)(["padding-bottom:0px;padding-top:30px;"])})),b=Object(i.d)(u.a).withConfig({displayName:"ShotTile__ShotIconButtonsContainer",componentId:"e7wllb-4"})(["justify-content:flex-end;flex-direction:row-reverse;padding:0px;"]),w=Object(i.d)(d.a).withConfig({displayName:"ShotTile__ShotIconText",componentId:"e7wllb-5"})(["margin-left:10px;margin-right:10px;"]);e.i=h},zafh:function(t,e,n){"use strict";e.a={LIST:"LIST",GRID:"GRID",DEFAULT:"GRID",SHOT_DEFAULT:"LIST"}}}]);
//# sourceMappingURL=ad342fce69271053c1dc62058c758c41383ee1c4.8824064c481cec31f76d.js.map