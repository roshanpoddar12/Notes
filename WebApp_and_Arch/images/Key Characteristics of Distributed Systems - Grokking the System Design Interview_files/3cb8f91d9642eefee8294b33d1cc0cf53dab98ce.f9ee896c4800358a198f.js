(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{"7sjA":function(t,e,n){"use strict";n.d(e,"n",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return b})),n.d(e,"M",(function(){return g})),n.d(e,"J",(function(){return O})),n.d(e,"i",(function(){return h})),n.d(e,"L",(function(){return v})),n.d(e,"x",(function(){return j})),n.d(e,"N",(function(){return x})),n.d(e,"E",(function(){return _})),n.d(e,"t",(function(){return T})),n.d(e,"jb",(function(){return P})),n.d(e,"U",(function(){return S})),n.d(e,"g",(function(){return k})),n.d(e,"H",(function(){return E})),n.d(e,"gb",(function(){return C})),n.d(e,"cb",(function(){return N})),n.d(e,"hb",(function(){return I})),n.d(e,"ib",(function(){return U})),n.d(e,"p",(function(){return A})),n.d(e,"ob",(function(){return L})),n.d(e,"v",(function(){return D})),n.d(e,"Q",(function(){return R})),n.d(e,"s",(function(){return z})),n.d(e,"qb",(function(){return G})),n.d(e,"rb",(function(){return B})),n.d(e,"P",(function(){return H})),n.d(e,"c",(function(){return M})),n.d(e,"X",(function(){return W})),n.d(e,"k",(function(){return V})),n.d(e,"d",(function(){return J})),n.d(e,"r",(function(){return q})),n.d(e,"O",(function(){return Z})),n.d(e,"bb",(function(){return F})),n.d(e,"pb",(function(){return K})),n.d(e,"R",(function(){return X})),n.d(e,"S",(function(){return Y})),n.d(e,"sb",(function(){return Q})),n.d(e,"W",(function(){return $})),n.d(e,"f",(function(){return tt})),n.d(e,"u",(function(){return et})),n.d(e,"l",(function(){return nt})),n.d(e,"m",(function(){return rt})),n.d(e,"fb",(function(){return it})),n.d(e,"db",(function(){return at})),n.d(e,"Y",(function(){return ot})),n.d(e,"h",(function(){return ct})),n.d(e,"tb",(function(){return ut})),n.d(e,"q",(function(){return lt})),n.d(e,"ab",(function(){return st})),n.d(e,"z",(function(){return pt})),n.d(e,"o",(function(){return dt})),n.d(e,"mb",(function(){return ft})),n.d(e,"A",(function(){return mt})),n.d(e,"w",(function(){return yt})),n.d(e,"F",(function(){return bt})),n.d(e,"eb",(function(){return gt})),n.d(e,"kb",(function(){return Ot})),n.d(e,"C",(function(){return ht})),n.d(e,"I",(function(){return wt})),n.d(e,"e",(function(){return vt})),n.d(e,"nb",(function(){return jt})),n.d(e,"K",(function(){return xt})),n.d(e,"j",(function(){return _t})),n.d(e,"y",(function(){return Tt})),n.d(e,"G",(function(){return Pt})),n.d(e,"D",(function(){return St})),n.d(e,"V",(function(){return kt})),n.d(e,"T",(function(){return Et})),n.d(e,"Z",(function(){return Ct})),n.d(e,"B",(function(){return Nt})),n.d(e,"lb",(function(){return It}));var r=n("o0o1"),i=n.n(r),a=n("HaE+"),o=n("Ff2n"),c=n("ODXe"),u=n("rePB"),l=n("fNkK"),s=n("jxKE"),p=n("zzTb");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(t){return Object(l.a)({url:"/api/editorial/affiliate/email/".concat(t),type:"POST"})},y=function(t){return Object(l.a)({url:"/api/editorial/return/work",type:"PUT",data:t})},b=function(t){return Object(l.a)({url:"/api/editorial/track/return",type:"PUT",data:t})},g=function(){return Object(l.a)({url:"/api/editorial/skill",type:"GET"})},O=function(t){var e=t.author_id,n=t.collection_id,r=t.assessment_id,i=t.attempt_id,a=t.question_id;return Object(l.a)({url:"/api/assessment/".concat(e,"/").concat(n,"/").concat(r,"/compare/").concat(i,"/").concat(a),type:"GET"})},h=function(t){var e=f(f({},t),{},{capability:"CANNOT_EDIT_EDPRESSO_SHOT",status:!t.can_edit_edpresso_shot});return Object(l.a)({url:"/api/editorial/user/capability",type:"PUT",data:e})},w=function(t){return Object.entries(t).reduce((function(t,e){var n=Object(c.a)(e,2),r=n[0],i=n[1];return(t?t+"&":"?")+"".concat(r,"=").concat(i)}),"")},v=function(t,e,n){return Object(l.a)({url:"/api/editorial/coupon/get_site_coupons".concat(w(t),"&coupon_status=").concat(e,"&search_string=").concat(n),type:"GET"})},j=function(t){return Object(l.a)({url:"/api/editorial/coupon/disable_site_coupon/".concat(t),type:"PUT"})},x=function(){return Object(l.a)({url:"/api/editorial/courses-submitted-for-review",type:"GET"})},_=function(){return Object(l.a)({url:"/api/editorial/collections-submitted-for-deletion/get",type:"GET"})},T=function(t,e){return Object(l.a)({url:"/api/editorial/collections-submitted-for-deletion/".concat(t,"/").concat(e),type:"DELETE"})},P=function(t,e,n){return Object(l.a)({url:"/api/editorial/assign-for-review",type:"PUT",data:{author_id:t,work_id:e,email:n}})},S=function(t,e){return Object(l.a)({url:"/api/editorial/user/info?".concat(e,"=").concat(t),type:"GET"})},k=function(t,e){return Object(l.a)({url:"/api/editorial/credit",type:"POST",data:{email:t,credit_amount:e}})},E=function(t){return Object(l.a)({url:"/api/editorial/get-email-by-referral-code",type:"POST",data:{referral_code:t}})},C=function(t){return Object(l.a)({url:"/api/editorial/work/author_ref/".concat(t.author_id,"/").concat(t.work_id,"/").concat(t.ref_author_id),type:"PUT"})},N=function(t){return Object(l.a)({url:"/api/editorial/work/author_ref/".concat(t.author_id,"/").concat(t.work_id,"/reset"),type:"PUT"})},I=function(t){return Object(l.a)({url:"/api/editorial/work/author_ref/percentage",type:"PUT",data:t})},U=function(t){return Object(l.a)({url:"/api/editorial/work/author_ref/stats",type:"PUT",data:t})},A=function(t,e){return Object(l.a)({url:"/api/editorial/marketing/redirect/".concat(t),type:"POST",data:{redirect_url:e}})},L=function(t,e){return Object(l.a)({url:"/api/editorial/marketing/redirect/".concat(t),type:"PUT",data:{redirect_url:e}})},D=function(t){return Object(l.a)({url:"/api/editorial/marketing/redirect/".concat(t),type:"DELETE"})},R=function(){return Object(l.a)({url:"/api/reader/tracks/featured",type:"GET"})},z=function(t){return Object(l.a)({url:"/api/editorial/track",type:"POST",data:t})},G=function(t,e){return Object(l.a)({url:"/api/editorial/track/".concat(e),type:"PUT",data:t})},B=function(t){return Object(l.a)({url:"/api/track/set-status",type:"PUT",data:t})},H=function(t){return Object(l.a)({url:"/api/track/".concat(t,"/image/upload/url"),type:"GET"})},M=function(t,e){return Object(l.a)({url:"".concat(t),type:"POST",data:e,processData:!1})},W=function(t){return Object(l.a)({url:"/api/user/loginas",type:"POST",data:t})},V=function(t){return Object(l.a)({url:"/api/editorial/update-fields-in-course-catalog",type:"POST",data:t})},J=function(t){return Object(l.a)({url:"/api/editorial/account-sales",type:"POST",data:t})},q=function(t){return Object(l.a)({url:"/api/editorial/create-testimonial",type:"POST",data:t})},Z=function(t){var e="/api/get-testimonial";return t===s.S.AUTHOR?e+="?filter=".concat(s.S.AUTHOR):t===s.S.LEARNER&&(e+="?filter=".concat(s.S.LEARNER)),Object(l.a)({url:e,type:"GET"})},F=function(t){return Object(l.a)({url:"/api/remove-testimonial",type:"PUT",data:{testimonial_ids:JSON.stringify(t)}})},K=function(t){return Object(l.a)({url:"/api/editorial/update-ranks",type:"PUT",data:{ordered_ids:JSON.stringify(t)}})},X=function(){return Object(l.a)({url:"/api/editorial/user/capabilities/all",type:"GET"})},Y=function(t){return Object(l.a)({url:"/api/editorial/user/capabilities?email=".concat(t),type:"GET"})},Q=function(t){return Object(l.a)({url:"/api/editorial/user/capabilities/update",type:"PUT",data:t})},$=function(t){return Object(l.a)({url:"/api/editorial/user/users-by-capabilities",type:"POST",data:t})},tt=function(t,e,n){return Object(l.a)({url:"/api/editorial/course-url/".concat(t,"/").concat(e,"/").concat(n),type:"PUT"})},et=function(t,e){return Object(l.a)({url:"/api/editorial/course-url/".concat(t,"?force_delete=").concat(e?"True":"False"),type:"DELETE"})},nt=function(t){return Object(l.a)({url:"/api/collection/legacy_ids/".concat(t),type:"GET"})},rt=function(t,e){return Object(l.a)({url:"/api/collection/slug/".concat(t,"/").concat(e),type:"GET"})},it=function(t){var e=t.email,n=t.status;return Object(l.a)({url:"/api/editorial/subscription/email/".concat(e,"/status/").concat(n),type:"PUT"})},at=function(t){var e=t.orgDomainName,n=t.status;return Object(l.a)({url:"/api/editorial/subscription/domain/".concat(e,"/status/").concat(n),type:"PUT"})},ot=function(t){return Object(l.a)({url:"/api/editorial/github-student-status",type:"PUT",data:t})},ct=function(t){return Object(l.a)({url:"/api/editorial/retroactively",type:"POST",data:t})},ut=function(t){var e=t.workType,n=Object(o.a)(t,["workType"]);return Object(l.a)({url:"/api/editorial/work-execution-metadata/".concat(e),type:"POST",data:f({},n)})},lt=function(t){return Object(l.a)({url:"/api/custom-actions/scholarship/type/influencer_scholarship",type:"PUT",data:t})},st=function(t){return Object(l.a)({url:"/api/braintree/post-chargebacks",type:"POST",data:t})},pt=function(t,e){return Object(l.a)({url:"/api/editorial/user/email",type:"PUT",data:{email:t,new_email:e}})},dt=function(t){return Object(l.a)({url:"/api/editorial/enterprise/organization",type:"PUT",data:{org_name:t.org_name,org_admins:JSON.stringify(t.org_admins),org_domains:JSON.stringify(t.org_domains||[]),can_view_user_per_course_stats:t.can_view_user_per_course_stats}})},ft=function(t,e){return Object(l.a)({url:"/api/editorial/enterprise/organization/".concat(t),type:"PUT",data:{org_name:e.org_name,org_admins:JSON.stringify(e.org_admins),can_view_user_per_course_stats:e.can_view_user_per_course_stats}})},mt=function(t,e){return Object(l.a)({url:"/api/editorial/user/api_key",type:"PUT",data:{email:t,api_key:e}})},yt=function(t){return Object(l.a)({url:"/api/editorial/user/delete",type:"PUT",data:{email:t}})},bt=function(){var t=Object(a.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)({url:"/api/edpresso/shot/related-courses/".concat(e),type:"GET"});case 2:if("string"!==typeof(n=t.sent)){t.next=5;break}return t.abrupt("return",Object(p.a)(JSON.parse(n)));case 5:return t.abrupt("return",null);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gt=function(t,e){return Object(l.a)({url:"/api/edpresso/shot/related-courses/".concat(e),type:"PUT",data:{related_course_urls:JSON.stringify(t)}})},Ot=function(t,e){return Object(l.a)({url:"/api/editorial/user/".concat(e),type:"PUT",data:{email:t}})},ht=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(l.a)({url:"/api/page/editor/all/5004/".concat(t),type:"GET"})},wt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(l.a)({url:"/api/enterprise/organization/".concat(t,"/subscription/").concat(e,"?get_courses_url=").concat(n),type:"GET"})},vt=function(t,e){return Object(l.a)({url:"/api/editorial/enterprise/organization/".concat(t,"/subscription"),type:"POST",data:e})},jt=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(l.a)({url:"/api/editorial/enterprise/organization/".concat(t,"/subscription/").concat(e,"?get_courses_url=").concat(r),type:"PUT",data:n})},xt=function(){return Object(l.a)({url:"/api/page/editor/marketing-page/images",type:"GET"})},_t=function(t,e){return Object(l.a)({url:"/api/page/editor/marketing-page/image/".concat(e,"/").concat(t),type:"POST"})},Tt=function(t){return Object(l.a)({url:"/api/page/editor/marketing-page/image/".concat(t),type:"GET",responseType:"blob"})},Pt=function(t){var e=Object.keys(t).map((function(e){return t[e]&&"".concat(e,"=").concat(t[e])})).filter((function(t){return t})),n=e.length?e.join("&"):"";return Object(l.a)({url:"/api/editorial/get-effective-price?".concat(n),type:"GET"})},St=function(t){return Object(l.a)({url:"/api/editorial/collaborator/view",type:"POST",data:t})},kt=function(t){return Object(l.a)({url:"/api/editorial/time-spent/user/total",type:"POST",data:{email:t}})},Et=function(t,e,n){return Object(l.a)({url:"/api/editorial/time-spent/user/courses",type:"POST",data:{email:t,start_date:e,end_date:n}})},Ct=function(t,e,n){return function(r){return Object(l.a)({url:"/api/editorial/time-spent/access/".concat(t),type:"POST",data:{emails:JSON.stringify(r),add_users:e,can_view_user_per_course_stats:n}})}},Nt=function(t){return Object(l.a)({url:"/api/editorial/time-spent/access/".concat(t),type:"GET"})},It=function(t){return Object(l.a)({url:"/api/editorial/blacklist-domain",type:"POST",data:t})}},B3Kv:function(t,e,n){"use strict";var r=n("1OyB"),i=n("vuIU"),a=n("JX7q"),o=n("Ji7U"),c=n("md7G"),u=n("foSv"),l=n("rePB"),s=n("q1tI"),p=n.n(s),d=n("7sjA"),f=n("jxKE"),m=n("vOnD"),y=n("zGpi"),b=p.a.createElement,g=function(t){return b("svg",t,b("defs",null,b("style",null,".a5","{","fill:#4951f5;","}")),b("path",{className:"a5",d:"M2437.833,1356.4v61.192c-1.506.581-2.995,1.6-4.522,1.662-5.19.21-10.4.141-15.594.053-1.883-.032-2.789.488-3.185,2.508q-1.5,7.644-3.544,15.175c-.363,1.337-1.424,3.023-2.564,3.433-.851.305-2.6-.945-3.511-1.916-5.406-5.781-10.655-11.709-16.037-17.513a10.41,10.41,0,0,0-2.767-1.553,10.146,10.146,0,0,0-.974,2.885q-.152,7.465-.025,14.933c.051,2.88-1.17,4.126-4.054,4.068-4.519-.091-9.072.307-13.553-.109-5.171-.48-9.164.749-12.08,5.289a27.268,27.268,0,0,1-4.775,5.265c-1.163,1.052-2.888,2.495-4.04,2.249-1.073-.229-2.017-2.363-2.49-3.829-.922-2.86-1.475-5.838-2.209-8.887-3.431,0-6.6.2-9.732-.088-1.5-.14-2.919-1.214-4.375-1.866v-38.076c1.537-.509,3.059-1.4,4.614-1.456,5.022-.188,10.056-.07,15.344-.07v-4.294q0-17.836.008-35.671c.007-4.224.551-4.774,4.627-4.775q40.385-.013,80.769.055C2434.721,1355.068,2436.277,1355.933,2437.833,1356.4Zm-84.329,4.147v53.364c11.16,0,22.015.066,32.868-.05a7.013,7.013,0,0,1,5.87,2.608c4.534,5.182,9.23,10.221,14.269,15.764,1.158-4.919,2.431-9.242,3.136-13.656.584-3.66,2.259-4.928,5.909-4.753,5.5.263,11.029.068,16.52.068v-53.345Zm25.919,58.788c-9.195,0-18.005.015-26.817-.007-4.26-.01-4.818-.6-4.843-4.958-.017-2.993,0-5.987,0-8.916h-14.214v30.393a83.139,83.139,0,0,0,8.4-.056c3.488-.366,4.97,1.224,5.431,4.433.247,1.717.747,3.4,1.259,5.646,2.526-2.746,4.713-4.868,6.589-7.238a7.1,7.1,0,0,1,6.424-2.825c5.845.189,11.7.058,17.771.058Z",transform:"translate(-2327.802 -1355)"}),b("path",{className:"a5",d:"M2452.193,1425.611v4.992h-59.426v-4.992Z",transform:"translate(-2358.098 -1387.929)"}),b("path",{className:"a5",d:"M2392.736,1400.024V1395h37.626v5.02Z",transform:"translate(-2358.083 -1373.655)"}))};g.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"110.031",height:"99.047",viewBox:"0 0 110.031 99.047"};var O=m.d.div.withConfig({displayName:"styles__TestimonialsSectionStyled",componentId:"sc-11m0uez-0"})(["display:flex;flex-direction:column;align-items:center;align-self:center;flex:0 0 auto;width:100%;padding:40px 20px 20px;"," @media (max-width:","){max-width:100%;}@media (min-width:","){max-width:1160px;margin-left:auto;margin-right:auto;}"],(function(t){return t.isAuthorsPage&&Object(m.c)(["margin-top:-40px;padding:20px 20px 20px;"])}),y.i.pixels,y.f.pixels),h=m.d.div.withConfig({displayName:"styles__Title",componentId:"sc-11m0uez-1"})(["margin-bottom:30px;"]),w=m.d.div.withConfig({displayName:"styles__TitleHolder",componentId:"sc-11m0uez-2"})(["display:flex;margin-bottom:10px;@media (max-width:","){flex-direction:column-reverse;margin-bottom:0px;}"],y.f.pixels),v=Object(m.d)(g).withConfig({displayName:"styles__ConversationImg",componentId:"sc-11m0uez-3"})(["margin:0 20px;width:80px;@media (max-width:","){display:none;}"],y.f.pixels),j=O,x=p.a.createElement,_="left",T="right",P=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.13";return t===_?x("svg",{width:"638px",height:"275px",viewBox:"0 0 638 275",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},x("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:n},x("g",{transform:"translate(-2878.000000, -3103.000000)",fill:e.palette.primary.lightP2,fillRule:"nonzero"},x("path",{d:"M2890,3102.99994 L3503.58,3102.99994 C3510.20742,3102.99994 3515.58,3108.37253 3515.58,3114.99994 C3515.58,3114.99994 3515.58,3114.99994 3515.58,3114.99994 L3515.58,3326 C3515.58,3332.62742 3510.20742,3338 3503.58,3338 L3045.55593,3338 C3044.55517,3338 3043.59076,3338.37514 3042.85304,3339.05138 L3002.12813,3376.38254 C3000.49966,3377.87531 2997.96939,3377.7653 2996.47662,3376.13683 C2995.86368,3375.46816 2995.49621,3374.61101 2995.4345,3373.70602 L2993.25418,3341.7279 C2993.11108,3339.62925 2991.36697,3338 2989.26344,3338 L2890,3338 C2883.37258,3338 2878,3332.62742 2878,3326 L2878,3114.99994 C2878,3108.37253 2883.37258,3102.99994 2890,3102.99994 Z"})))):t===T?x("svg",{width:"638px",height:"275px",viewBox:"0 0 638 275",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},x("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:n},x("g",{transform:"translate(-634.000000, -3103.000000)",fill:e.palette.primary.lightP2,fillRule:"nonzero"},x("path",{d:"M646,3102.99994 L1259.58,3102.99994 C1266.20742,3102.99994 1271.58,3108.37253 1271.58,3114.99994 C1271.58,3114.99994 1271.58,3114.99994 1271.58,3114.99994 L1271.58,3326 C1271.58,3332.62742 1266.20742,3338 1259.58,3338 L801.555935,3338 C800.555168,3338 799.590756,3338.37514 798.853036,3339.05138 L758.128135,3376.38254 C756.499659,3377.87531 753.969389,3377.7653 752.47662,3376.13683 C751.863675,3375.46816 751.496205,3374.61101 751.434502,3373.70602 L749.254175,3341.7279 C749.111085,3339.62925 747.366972,3338 745.263441,3338 L646,3338 C639.372583,3338 634,3332.62742 634,3326 L634,3114.99994 C634,3108.37253 639.372583,3102.99994 646,3102.99994 Z",transform:"translate(952.790002, 3242.499972) scale(-1, 1) translate(-952.790002, -3242.499972) "})))):x("svg",{width:"639px",height:"270px",viewBox:"0 0 639 270",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},x("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:n},x("g",{transform:"translate(-1813.000000, -3151.000000)",fill:e.palette.primary.lightP2,fillRule:"nonzero"},x("path",{d:"M1825.58,3151 L2439.16,3151 C2445.78742,3151 2451.16,3156.37258 2451.16,3163 L2451.16,3374 C2451.16,3380.62742 2445.78742,3386 2439.16,3386 L2159.74161,3386 C2158.39272,3386 2157.13467,3386.67985 2156.39556,3387.80822 L2136.38362,3418.35923 C2135.17313,3420.20721 2132.69376,3420.72399 2130.84578,3419.51351 C2130.43106,3419.24185 2130.07045,3418.89546 2129.78233,3418.49199 L2107.77644,3387.67546 C2107.02562,3386.62403 2105.81319,3386 2104.52121,3386 L1825.58,3386 C1818.95258,3386 1813.58,3380.62742 1813.58,3374 L1813.58,3163 C1813.58,3156.37258 1818.95258,3151 1825.58,3151 Z"}))))},S=(m.d.div.withConfig({displayName:"styles__TestimonialsSectionStyled",componentId:"sc-27r5lg-0"})(["display:flex;flex-direction:column;align-items:center;align-self:center;flex:0 0 auto;width:90%;max-width:1000px;padding:20px;margin-left:auto;margin-right:auto;"]),m.d.div.withConfig({displayName:"styles__Testimonials",componentId:"sc-27r5lg-1"})(["display:flex;justify-content:center;flex-wrap:wrap;"])),k=m.d.div.withConfig({displayName:"styles__Testimonial",componentId:"sc-27r5lg-2"})(["position:relative;margin:0 20px;@media (max-width:","){margin:0 5px;flex-direction:column;}"],y.m.pixels),E=m.d.div.withConfig({displayName:"styles__Testimonial_Text",componentId:"sc-27r5lg-3"})(["position:absolute;top:20px;width:280px;left:25px;"]),C=m.d.div.withConfig({displayName:"styles__Testimonial_Person",componentId:"sc-27r5lg-4"})(["position:absolute;right:25px;bottom:58px;text-align:left;"]),N=m.d.div.withConfig({displayName:"styles__Testimonial_Person_Occupation",componentId:"sc-27r5lg-5"})(["font-style:italic;position:absolute;right:25px;bottom:40px;text-align:left;"]),I=m.d.div.attrs((function(t){return{children:P(t.dialogBoxStyle,t.theme)}})).withConfig({displayName:"styles__Testimonial_DialogBox",componentId:"sc-27r5lg-6"})(["> svg{height:150px;width:310px;}"]),U=p.a.createElement,A=function(){return U(S,null,[{text:"\u201cEducative is a big part of why I got my current job... the courses are really high quality.\u201d",person:" - Carlos L.",occupation:"Software Developer",dialogBoxStyle:"left"},{text:"\u201cI'm understanding topics better than with any book or video tutorial I've done. Truly made for developers. \u201d",person:" - Anthony W.",occupation:" a self-employed consultant",dialogBoxStyle:"right"},{text:"\u201cThanks for a great resource! You guys are a lifesaver.\u201d",person:" - Kaushik J.",occupation:" works at Microsoft",dialogBoxStyle:"right"}].map((function(t){var e=t.text,n=t.person,r=t.occupation,i=t.dialogBoxStyle;return U(k,{key:e},U(I,{dialogBoxStyle:i}),U(E,null,e),U(C,null,n),U(N,null,r))})))},L=n("0Xgo"),D=n("BM/e"),R=n("a9Uy"),z=n("ZBNC"),G=n("H2TA"),B=n("+zGO"),H=p.a.createElement;function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function V(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var J=function(t){Object(o.a)(n,t);var e=V(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o)),Object(l.a)(Object(a.a)(t),"state",{testimonials:[],loaded:!1}),Object(l.a)(Object(a.a)(t),"loading",!1),Object(l.a)(Object(a.a)(t),"loadTestimonials",(function(){if(t.props.inView){t.loading=!0;var e=t.props.isAuthorsPage?f.S.AUTHOR:f.S.LEARNER;Object(d.O)(e).then((function(t){return JSON.parse(t)})).then((function(e){var n=new DOMParser,r=e.map((function(t){if(t.testimonial_type===f.R.TWEET){var e=n.parseFromString(t.text,"text/html");t=W(W({},t),{},{text:e.getElementsByTagName("p")[0].innerHTML})}return t}));t.setState({loaded:!0,testimonials:r}),t.loading=!1})).catch((function(){t.setState({loaded:!0}),t.loading=!1}))}})),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.inView&&this.loadTestimonials()}},{key:"componentDidUpdate",value:function(){var t=this.state.loaded;!this.props.inView||this.loading||t||this.loadTestimonials()}},{key:"render",value:function(){var t=this.props.isAuthorsPage,e=this.state,n=e.testimonials,r=e.loaded,i=t?"What other authors are saying":"Why learners enjoy Educative",a=null;return a=!n.length&&r?H(A,{isAuthorsPage:t}):r?H(D.a,{testimonials:n,isAuthorsPage:t}):L.TestimonialsPlaceholder,H(j,null,H(w,null,!this.props.isAuthorsPage&&H(h,null,H(R.a,{variant:"h3",align:"center"},i)),this.props.isAuthorsPage&&H(p.a.Fragment,null,H(R.a,{className:this.props.classes.Heading,variant:"h3",mt:2},i),H(v,null))),a)}}]),n}(p.a.Component);Object(l.a)(J,"defaultProps",{isAuthorsPage:!1,testimonials:[],inView:!0});e.a=Object(G.a)((function(t){return Object(z.a)({Heading:Object(l.a)({width:"100%"},t.breakpoints.down(780),{textAlign:"left"})})}))(Object(B.a)(J))},"BM/e":function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("YB7C"),o=n("jxKE"),c=n("vOnD"),u=n("zGpi"),l=n("Dsxo"),s=n("IP2g"),p=n("8tEE"),d=n("UUHW"),f=n("mdnA"),m=n("ntTH"),y=(c.d.div.withConfig({displayName:"TestimonialScrollableStyled__TestimonialsScrollableStyled",componentId:"sc-1i0en95-0"})([""]),c.d.div.withConfig({displayName:"TestimonialScrollableStyled__Testimonial",componentId:"sc-1i0en95-1"})(["display:flex;flex-direction:column;align-items:center;position:relative;width:310px;min-width:310px;border-radius:",";padding:32px 16px;box-shadow:0px 0px 20px ",";transition:0.4s;:hover{box-shadow:0px 10px 20px ",";transform:translateY(-3px);}margin:10px;@media (max-width:","){width:240px;min-width:240px;}"],l.A,(function(t){return t.theme.palette.alphas.black06}),(function(t){return t.theme.palette.alphas.black06}),u.f.pixels)),b=c.d.div.withConfig({displayName:"TestimonialScrollableStyled__Id",componentId:"sc-1i0en95-2"})([""]),g=c.d.div.withConfig({displayName:"TestimonialScrollableStyled__AuthorDetailsWrapper",componentId:"sc-1i0en95-3"})(["max-width:200px;word-wrap:break-word;"]),O=c.d.a.withConfig({displayName:"TestimonialScrollableStyled__TweetLink",componentId:"sc-1i0en95-4"})(["width:100%;"]),h=c.d.div.withConfig({displayName:"TestimonialScrollableStyled__HeaderWrapper",componentId:"sc-1i0en95-5"})(["display:flex;align-items:center;justify-content:space-between;cursor:pointer;svg{width:24px !important;height:24px !important;}"]),w=c.d.div.attrs((function(t){return{dangerouslySetInnerHTML:{__html:t.text}}})).withConfig({displayName:"TestimonialScrollableStyled__Text",componentId:"sc-1i0en95-6"})(["margin:48px 0 32px;padding-bottom:32px;border-bottom:1px solid ",";word-wrap:break-word;a{transition:0.2s;color:",";:hover{color:",";}}"],(function(t){return t.theme.palette.grey[400]}),(function(t){return t.theme.palette.primary.main}),(function(t){return t.theme.palette.primary.dark})),v=Object(c.d)(d.a).withConfig({displayName:"TestimonialScrollableStyled__TwitterIcon",componentId:"sc-1i0en95-7"})([""]),j=Object(c.d)(f.a).withConfig({displayName:"TestimonialScrollableStyled__EnvelopeIcon",componentId:"sc-1i0en95-8"})([""]),x=Object(c.d)(s.a).attrs((function(){return{icon:p.a}})).withConfig({displayName:"TestimonialScrollableStyled__RedditIcon",componentId:"sc-1i0en95-9"})([""]),_=Object(c.d)(m.a).withConfig({displayName:"TestimonialScrollableStyled__LinkedinIcon",componentId:"sc-1i0en95-10"})([""]),T=n("a9Uy"),P=i.a.createElement,S=function(t){return P("svg",t,P("path",{d:"M5.80148 10.6111V12.5526H10.8291V23H0V12.5526H0.00026174V10.6111C0.00026174 6.66858 1.176 3.7411 3.49502 1.90944C5.09923 0.642414 7.12981 0 9.53049 0V5.59663C8.22728 5.59663 5.80148 5.59663 5.80148 10.6111ZM23.7015 5.59663V0C21.301 0 19.2704 0.642414 17.6662 1.90944C15.3471 3.7411 14.1713 6.6687 14.1713 10.6111V12.5526V23H25V12.5526H19.9724V10.6111C19.9725 5.59663 22.3983 5.59663 23.7015 5.59663Z",fill:"#8887FF"}))};S.defaultProps={width:"25",height:"23",viewBox:"0 0 25 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"};e.a=i.a.memo((function(t){var e=t.testimonials;return P(a.a,{horizontal:!0,key:"1",showGradient:!1},e.map((function(t,e){return P(y,{key:t.id},P(T.a,{variant:"bodyMedium"},P(S,null),P(w,{text:t.text}),P(O,{href:t.testimonial_link,target:"_blank",rel:"noreferrer"},P(h,null,P(g,null,P(T.a,{variant:"h4",m:0,mb:.5},t.author_name),P(b,null,t.author_id)),(n=t.testimonial_type)===o.R.TWEET?P(v,null):n===o.R.REDDIT?P(x,null):n===o.R.EMAIL?P(j,null):n===o.R.LINKEDIN?P(_,null):null))));var n})))}))},IP2g:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("7O5W"),i=n("17x9"),a=n.n(i),o=n("q1tI"),c=n.n(o);function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var y=!1;try{y=!0}catch(w){}function b(t){return null===t?null:"object"===u(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?l({},t,e):{}}function O(t){var e=t.forwardedRef,n=d(t,["forwardedRef"]),i=n.icon,a=n.mask,o=n.symbol,c=n.className,u=n.title,s=b(i),m=g("classes",[].concat(f(function(t){var e,n=t.spin,r=t.pulse,i=t.fixedWidth,a=t.inverse,o=t.border,c=t.listItem,u=t.flip,s=t.size,p=t.rotation,d=t.pull,f=(l(e={"fa-spin":n,"fa-pulse":r,"fa-fw":i,"fa-inverse":a,"fa-border":o,"fa-li":c,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(s),"undefined"!==typeof s&&null!==s),l(e,"fa-rotate-".concat(p),"undefined"!==typeof p&&null!==p&&0!==p),l(e,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),l(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(f).map((function(t){return f[t]?t:null})).filter((function(t){return t}))}(n)),f(c.split(" ")))),w=g("transform","string"===typeof n.transform?r.d.transform(n.transform):n.transform),v=g("mask",b(a)),j=Object(r.c)(s,p({},m,{},w,{},v,{symbol:o,title:u}));if(!j)return function(){var t;!y&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",s),null;var x=j.abstract,_={ref:e};return Object.keys(n).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(_[t]=n[t])})),h(x[0],_)}O.displayName="FontAwesomeIcon",O.propTypes={border:a.a.bool,className:a.a.string,mask:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),fixedWidth:a.a.bool,inverse:a.a.bool,flip:a.a.oneOf(["horizontal","vertical","both"]),icon:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),listItem:a.a.bool,pull:a.a.oneOf(["right","left"]),pulse:a.a.bool,rotation:a.a.oneOf([0,90,180,270]),size:a.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a.a.bool,symbol:a.a.oneOfType([a.a.bool,a.a.string]),title:a.a.string,transform:a.a.oneOfType([a.a.string,a.a.object]),swapOpacity:a.a.bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return t(e,n)})),a=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=r.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),i=m(e.slice(0,r)),a=e.slice(r+1).trim();return i.startsWith("webkit")?t[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=a:t[i]=a,t}),{});break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[m(e)]=r}return t}),{attrs:{}}),o=r.style,c=void 0===o?{}:o,u=d(r,["style"]);return a.attrs.style=p({},a.attrs.style,{},c),e.apply(void 0,[n.tag,p({},a.attrs,{},u)].concat(f(i)))}.bind(null,c.a.createElement)},mdnA:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("17x9"),o=n.n(a);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=Object(r.forwardRef)((function(t,e){var n=t.color,r=void 0===n?"currentColor":n,a=t.size,o=void 0===a?24:a,l=u(t,["color","size"]);return(i.a.createElement("svg",c({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),i.a.createElement("polyline",{points:"22,6 12,13 2,6"})))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Mail",e.a=l}}]);
//# sourceMappingURL=3cb8f91d9642eefee8294b33d1cc0cf53dab98ce.f9ee896c4800358a198f.js.map