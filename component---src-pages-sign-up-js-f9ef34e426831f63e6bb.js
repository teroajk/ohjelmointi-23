(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[717],{38015:function(e,t,n){"use strict";var a=n(92137),r=n(41788),i=n(87757),s=n.n(i),o=n(67294),l=n(85420),u=n(29114),c=n(1097),m=n(48086),p=n(22702),d=n(31690),h=n(89711),f=n(31295),v=n(90058),_=n(92206),g=n(87198),E=n(83332),b=n(65769),C=n(52311),w=n(82441),Z=n(84119),k=n(13578),y=n(50238),x=Z.ZP.div.withConfig({displayName:"CourseOptionsEditor__Row",componentId:"sc-15i8a3h-0"})(["margin-bottom:1.5rem;"]),S=Z.ZP.form.withConfig({displayName:"CourseOptionsEditor__Form",componentId:"sc-15i8a3h-1"})([""]),I=Z.ZP.div.withConfig({displayName:"CourseOptionsEditor__InfoBox",componentId:"sc-15i8a3h-2"})(["margin-bottom:2rem;"]),O=Z.ZP.div.withConfig({displayName:"CourseOptionsEditor__FormContainer",componentId:"sc-15i8a3h-3"})(["height:100%;margin-top:2rem;"]),F=(0,Z.ZP)(l.Z).withConfig({displayName:"CourseOptionsEditor__WarningBox",componentId:"sc-15i8a3h-4"})(["margin:2rem 0;background:#f1a9a0;padding:1rem;font-weight:bold;"]),j=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call(this,...r)||this).onClick=function(){var e=(0,a.Z)(s().mark((function e(n){var a,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({submitting:!0}),a={digital_education_for_all:t.state.digital_education_for_all,use_course_variant:t.state.use_course_variant,course_variant:t.state.course_variant,marketing:t.state.marketing,research:t.state.research},r={first_name:t.state.first_name,last_name:t.state.last_name,organizational_id:t.state.student_number},e.prev=4,e.next=7,(0,C.ek)({extraFields:a,userField:r});case 7:t.setState({submitting:!1}),t.props.onComplete(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),t.setState({errorObj:e.t0,submitting:!1});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),t.state={submitting:!1,error:!0,errorObj:void 0,digital_education_for_all:!1,marketing:!1,research:void 0,first_name:void 0,last_name:void 0,use_course_variant:void 0,course_variant:"",course_variants:[],email:void 0,student_number:void 0,loading:!0,focused:null},t.handleInput=function(e){var n,a=e.target.name,r=e.target.value;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.handleCheckboxInput=function(e){var n,a=e.target.name,r=e.target.checked;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.handleCourseVariantCheckbox=function(e){t.setState({use_course_variant:e.target.checked,course_variant:""},(function(){t.validate()}))},t.handleFocus=function(e){var n=e.target.name;t.setState({focused:n})},t.handleUnFocus=function(){t.setState({focused:null})},t.validate=function(){t.setState((function(e){var t=void 0===e.research,n=e.use_course_variant&&!e.course_variant;return{error:t||n}}))},t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,a.Z)(s().mark((function e(){var t,n,a,r,i,o,l,u,c,m,p,d,h,f=this;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.$V)();case 2:return m=e.sent,e.next=5,(0,C.lI)();case 5:p=e.sent,d="t"===(null===(t=m.extra_fields)||void 0===t?void 0:t.use_course_variant),h=null!==(n=null===(a=m.extra_fields)||void 0===a?void 0:a.course_variant)&&void 0!==n?n:"",p.find((function(e){return e.key===h}))||(d=!1,h=""),this.setState({first_name:null===(r=m.user_field)||void 0===r?void 0:r.first_name,last_name:null===(i=m.user_field)||void 0===i?void 0:i.last_name,email:m.email,student_number:null===(o=m.user_field)||void 0===o?void 0:o.organizational_id,digital_education_for_all:"t"===(null===(l=m.extra_fields)||void 0===l?void 0:l.digital_education_for_all),use_course_variant:d,course_variant:h,course_variants:p,marketing:"t"===(null===(u=m.extra_fields)||void 0===u?void 0:u.marketing),research:null===(c=m.extra_fields)||void 0===c?void 0:c.research,loading:!1},(function(){f.validate()}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){return o.createElement(O,null,o.createElement(w.Z,{loading:this.state.loading,heightHint:"490px"},o.createElement(I,null,o.createElement(l.Z,null,o.createElement(u.Z,null,this.props.t("loggedInWith"),this.state.email)))),o.createElement("h1",null,this.props.t("studentInfo")),o.createElement(S,null,o.createElement(I,null,this.props.t("aboutYourself")),o.createElement(w.Z,{loading:this.state.loading,heightHint:"490px"},o.createElement("div",null,o.createElement(x,null,o.createElement(c.Z,{variant:"outlined",type:"text",label:this.props.t("firstName"),autoComplete:"given-name",name:"first_name",InputLabelProps:{shrink:this.state.first_name||"first_name"===this.state.focused},fullWidth:!0,value:this.state.first_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),o.createElement(x,null,o.createElement(c.Z,{variant:"outlined",type:"text",label:this.props.t("lastName"),autoComplete:"family-name",name:"last_name",InputLabelProps:{shrink:this.state.last_name||"last_name"===this.state.focused},fullWidth:!0,value:this.state.last_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),o.createElement(x,null,o.createElement(c.Z,{variant:"outlined",type:"text",label:this.props.t("sid"),name:"student_number",InputLabelProps:{shrink:this.state.student_number||"student_number"===this.state.focused},fullWidth:!0,value:this.state.student_number,onChange:this.handleInput,helperText:this.props.t("nosid"),onFocus:this.handleFocus,onBlur:this.handleUnFocus})),o.createElement(x,null,o.createElement(m.Z,{control:o.createElement(p.Z,{checked:this.state.digital_education_for_all,onChange:this.handleCheckboxInput,name:"digital_education_for_all",value:"1"}),label:"Olen tällä hetkellä opiskelijana Digital Education for All -hankkeessa. Jätä tämä valitsematta mikäli et tiedä kyseisestä hankkeesta."})),o.createElement(x,null,o.createElement(m.Z,{control:o.createElement(p.Z,{checked:this.state.marketing,onChange:this.handleCheckboxInput,name:"marketing",value:"1"}),label:this.props.t("marketing")})),0===this.state.course_variants.length?null:o.createElement("div",null,o.createElement("h2",null,this.props.t("courseInfo")),o.createElement(x,null,o.createElement(m.Z,{control:o.createElement(p.Z,{checked:this.state.use_course_variant,onChange:this.handleCourseVariantCheckbox,name:"use_course_variant",value:"1"}),disabled:0===this.state.course_variants.length,label:this.props.t("useCourseVariantLabel")})),o.createElement(x,null,o.createElement(d.Z,{fullWidth:!0,variant:"outlined"},o.createElement(h.Z,{id:"select-course",shrink:this.state.course_variant||"course_variant"===this.state.focused},this.props.t("courseVariant")),o.createElement(f.Z,{key:this.state.use_course_variant,disabled:!this.state.use_course_variant,labelId:"select-course",label:this.props.t("courseVariant"),name:"course_variant",value:this.state.course_variant,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus},o.createElement(v.Z,{value:"",disabled:!0},this.props.t("chooseCourse")),this.state.course_variants.map((function(e){var t=e.tmcOrganization+"-"+e.tmcCourse;return o.createElement(v.Z,{value:t,key:t},e.organizationName,": ",e.title)})))))))),o.createElement("h2",null,this.props.t("researchTitle")),o.createElement("p",null,this.props.t("research1")),o.createElement("ol",null,o.createElement("li",null,this.props.t("research2")),o.createElement("li",null,this.props.t("research3")),o.createElement("li",null,this.props.t("research4"))),o.createElement("p",null,this.props.t("research5"),o.createElement(b.MS,{href:"https://dl.acm.org/citation.cfm?id=2858798",target:"_blank",rel:"noopener noreferrer"},"Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies"),"."),o.createElement("p",null,this.props.t("research6")),o.createElement("p",null,this.props.t("research7")),o.createElement(x,null,o.createElement(w.Z,{loading:this.state.loading,heightHint:"115px"},o.createElement(_.Z,{"aria-label":this.props.t("researchAgree"),name:"research",value:this.state.research,onChange:this.handleInput},o.createElement(m.Z,{value:"1",control:o.createElement(g.Z,{color:"primary"}),label:this.props.t("researchYes")}),o.createElement(m.Z,{value:"0",control:o.createElement(g.Z,null),label:this.props.t("researchNo")})))),o.createElement(x,null,o.createElement(E.Z,{onClick:this.onClick,disabled:this.state.submitting||this.state.error,loading:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0},this.props.t("save")))),this.state.error&&o.createElement(I,null,o.createElement("b",null,this.props.t("fillRequired"))),this.state.errorObj&&o.createElement(F,null,this.state.errorObj.toString()))},t}(o.Component);t.Z=(0,y.Z)("common")((0,k.Z)(j))},10316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var a=n(41788),r=n(67294),i=n(35414),s=n(3772),o=n(92137),l=n(87757),u=n.n(l),c=n(25444),m=n(1097),p=n(83332),d=n(52311),h=n(47065),f=n(65769),v=n(50238),_=n(84119),g=n(13578),E=_.ZP.div.withConfig({displayName:"CreateAccountForm__Row",componentId:"jadb0u-0"})(["margin-bottom:1.5rem;"]),b=_.ZP.form.withConfig({displayName:"CreateAccountForm__Form",componentId:"jadb0u-1"})([""]),C=_.ZP.div.withConfig({displayName:"CreateAccountForm__InfoBox",componentId:"jadb0u-2"})(["margin-bottom:2rem;"]),w=_.ZP.div.withConfig({displayName:"CreateAccountForm__FormContainer",componentId:"jadb0u-3"})(["height:100%;margin-top:2rem;"]),Z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call(this,...a)||this).onClick=function(){var e=(0,o.Z)(u().mark((function e(n){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.setState({submitting:!0,triedSubmitting:!0}),t.validate()){e.next=5;break}return t.setState({canSubmit:!1,submitting:!1}),e.abrupt("return");case 5:return e.prev=5,e.next=8,(0,d.o1)({email:t.state.email,password:t.state.password,password_confirmation:t.state.password_confirmation});case 8:return e.next=10,(0,d.YR)({username:t.state.email,password:t.state.password});case 10:t.props.onComplete(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5);try{a="",Object.entries(e.t0).forEach((function(e){var n=e[0];e[1].forEach((function(e){var r=(0,h.fm)(n.replace(/_/g," ")+" "+e+".");"Email has already been taken."===r&&(r=t.props.t("emailInUse")),a=a+" "+r}))})),""===a&&(a=t.props.t("problemCreatingAccount")+JSON.stringify(e.t0)),t.setState({error:a,submitting:!1,errorObj:e.t0})}catch(r){t.setState({error:JSON.stringify(e.t0),submitting:!1})}t.setState({submitting:!1});case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),t.handleInput=function(e){var n,a=e.target.name,r=e.target.value;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.validate=function(){var e={error:"",errorObj:{}},n=t.state,a=n.email,r=n.password,i=n.password_confirmation,s=n.validatePassword,o=n.validateEmail,l=n.triedSubmitting;return a&&o&&(-1===a.indexOf("@")&&(e.error+=t.props.t("noAt"),e.errorObj.email=t.props.t("noAt")),a&&-1===a.indexOf(".")&&(e.error+=t.props.t("noAt"),e.errorObj.email=t.props.t("noAt"))),r&&i&&s&&r!==i&&(e.error+=t.props.t("passwordsNoMatch"),e.errorObj.password=t.props.t("passwordsNoMatch"),e.errorObj.password_confirmation=t.props.t("passwordsNoMatch")),""===e.error&&(e.error=!1,e.canSubmit=!0),a&&r&&i?(t.setState(e),!e.error):(l&&(e.canSubmit=!1),!1)},t.state={email:void 0,password:void 0,password_confirmation:void 0,submitting:!1,error:!1,errorObj:{},validatePassword:!1,validateEmail:!1,canSubmit:!0,triedSubmitting:!0},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this;return this.context.loggedIn?((0,c.navigate)("/"),r.createElement("div",null,"Redirecting...")):r.createElement(w,null,r.createElement("h1",null,this.props.t("createAccount")),r.createElement(b,{onChange:this.validate},r.createElement(C,null,this.props.t("courseUses")," ",r.createElement(f.MS,{href:"https://mooc.fi",target:"_blank",rel:"noopener noreferrer"},"mooc.fi")," ",this.props.t("courseUses2")),r.createElement(E,null,r.createElement(m.Z,{variant:"outlined",type:"email",name:"email",autoComplete:"email",label:this.props.t("email"),error:this.state.errorObj.email,fullWidth:!0,value:this.state.email,onChange:this.handleInput,onBlur:function(){e.setState({validateEmail:!0},(function(){e.validate()}))}})),r.createElement(E,null,r.createElement(m.Z,{variant:"outlined",type:this.state.showPassword?"text":"password",label:this.props.t("password"),name:"password",error:this.state.errorObj.password,fullWidth:!0,value:this.state.password,onChange:this.handleInput})),r.createElement(E,null,r.createElement(m.Z,{variant:"outlined",type:this.state.showPassword?"text":"password",label:this.props.t("passwordAgain"),name:"password_confirmation",error:this.state.errorObj.password_confirmation,fullWidth:!0,value:this.state.password_confirmation,onChange:this.handleInput,onBlur:function(){e.setState({validatePassword:!0},(function(){e.validate()}))}})),r.createElement(E,null,r.createElement(p.Z,{onClick:this.onClick,disabled:this.state.submitting||!this.state.canSubmit,variant:"contained",color:"primary",fullWidth:!0,type:"submit"},this.props.t("create")))),r.createElement(E,null,r.createElement(c.Link,{to:"/sign-in"},this.props.t("alreadyHaveAccount"))),this.state.error&&r.createElement(C,null,r.createElement("b",null,this.props.t("error")," ",this.state.error)))},t}(r.Component),k=(0,v.Z)("user")((0,g.Z)(Z)),y=n(38015),x=n.p+"static/email-example-dfbd631229d83018bc9fcaba5fffd852.png",S=_.ZP.div.withConfig({displayName:"ConfirmEmail__InfoBox",componentId:"sc-1t4zqh3-0"})(["margin-bottom:2rem;"]),I=_.ZP.div.withConfig({displayName:"ConfirmEmail__FormContainer",componentId:"sc-1t4zqh3-1"})(["height:100%;margin-top:2rem;"]),O=_.ZP.img.withConfig({displayName:"ConfirmEmail__StyledImage",componentId:"sc-1t4zqh3-2"})(["width:100%;padding:1rem 0;"]),F=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call(this,...a)||this).onClick=function(){var e=(0,o.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={email:void 0,password:void 0,submitting:!1,error:!1},t}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(I,null,r.createElement("h1",null,this.props.t("welcomeToCourse")),r.createElement(S,null,r.createElement("p",null,this.props.t("emailSent")," "),r.createElement("p",null,this.props.t("emailExample")),r.createElement(O,{src:x,alt:this.props.t("emaiLExampleAria")})),r.createElement("p",null,this.props.t("nowContinue")," ",r.createElement(c.Link,{to:"/osa-1"},this.props.t("toMaterial")),"."))},t}(r.Component),j=(0,v.Z)("user")((0,g.Z)(F)),N=n(54021),P=n(86810),A=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call(this,...a)||this).state={step:1},t.onStepComplete=function(){t.setState((function(e){return{step:e.step+1}})),"undefined"!=typeof window&&window.scrollTo(0,0)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e;return e=1===this.state.step?r.createElement(k,{onComplete:this.onStepComplete}):2===this.state.step?r.createElement(y.Z,{courseVariant:"nodl",onComplete:this.onStepComplete}):r.createElement(j,{onComplete:this.onStepComplete}),r.createElement(s.Z,null,r.createElement(i.Z,{title:"Luo käyttäjätunnus"}),r.createElement(P.Z,null,e))},t}(r.Component);A.contextType=N.ZP;var W=(0,N._N)(A)}}]);
//# sourceMappingURL=component---src-pages-sign-up-js-f9ef34e426831f63e6bb.js.map