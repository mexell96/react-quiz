(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{25:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__2SPod",close:"Drawer_close__d89hv",active:"Drawer_active__GI6wT"}},32:function(e,t,n){e.exports={Button:"Button_Button__klxbp",error:"Button_error__AN2eU",success:"Button_success__2velc",primary:"Button_primary__1t5qe"}},33:function(e,t,n){e.exports={Input:"Input_Input__2VNZT",invalid:"Input_invalid__30Zq7"}},34:function(e,t,n){e.exports={Auth:"Auth_Auth__286Ko",AuthForm:"Auth_AuthForm__3JfSj"}},35:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__N9A-c",Question:"ActiveQuiz_Question__2Xytz"}},36:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__2LpsN",success:"AnswerItem_success__100qU",error:"AnswerItem_error__3DaFk"}},37:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__39Fs3",success:"FinishedQuiz_success__3Vq__",error:"FinishedQuiz_error__dc3ej"}},38:function(e,t,n){e.exports={Loader:"Loader_Loader__3G4yp","lds-ripple":"Loader_lds-ripple__DBKNM",center:"Loader_center__1Z8LX"}},39:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2K11F",QuizWrapper:"Quiz_QuizWrapper__2a1KA"}},40:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__fEbic",open:"MenuToggle_open__VBPxz"}},51:function(e,t,n){e.exports={AnswerList:"AnswersList_AnswerList__3vpOI"}},52:function(e,t,n){e.exports={Select:"Select_Select__3-N9P"}},53:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__1muK2"}},54:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__2iG0q"}},55:function(e,t,n){e.exports={Layout:"Layout_Layout__2GY-h"}},56:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3a15J"}},63:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(22),a=n.n(i),s=(n(63),n(5)),o=n(6),c=n(9),u=n(8),l=n(15),d=n.n(l),h=n(18),p=n(24),j=n.n(p),b="FETCH_QUIZES_START",f="FETCH_QUIZES_SUCCESS",v="FETCH_QUIZES_ERROR",O="FETCH_QUIZ_SUCCESS",m="QUIZ_SET_STATE",x="FINISH_QUIZ",_="QUIZ_NEXT_QUESTION",g="QUIZ_RETRY",z="CREATE_QUIZ_QUESTION",w="RESET_QUIZ_CREATION",y="AUTH_SUCCESS",C="AUTH_LOGOUT";function k(e){return function(t){setTimeout((function(){t(q())}),1e3*e)}}function q(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:C}}function Q(e){return{type:y,token:e}}var S=n(7),A=n(4),I=n(0),T=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(I.jsx)(A.a,{to:"/"})}}]),n}(r.Component),N=Object(S.b)(null,(function(e){return{logout:function(){e(q())}}}))(T),E=n(2),F=n(50),L=n.n(F),D=n(32),H=n.n(D),M=function(e){var t=[H.a.Button,H.a[e.type]];return Object(I.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})},U=n(33),B=n.n(U);function V(e){var t=e.valid,n=e.touched,r=e.shouldValidate;return!t&&r&&n}var Z=function(e){var t=e.type||"text",n=[B.a.Input],r="".concat(t,"-").concat(Math.random());return V(e)&&n.push(B.a.invalid),Object(I.jsxs)("div",{className:n.join(" "),children:[Object(I.jsx)("label",{htmlFor:r,children:e.label}),Object(I.jsx)("input",{type:t,id:r,value:e.value,onChange:e.onChange}),V(e)?Object(I.jsx)("span",{children:e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}):null]})},R=n(34),P=n.n(R),G=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"Password",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!0)},e.registerHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!1)},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var r=Object(E.a)({},e.state.formControls),i=Object(E.a)({},r[n]);i.value=t.target.value,i.touched=!0,i.valid=e.validateControl(i.value,i.validation),r[n]=i;var a=!0;Object.keys(r).forEach((function(e){a=r[e].valid&&a})),e.setState({formControls:r,isFormValid:a})},e}return Object(o.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=L.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(I.jsx)(Z,{type:r.type,value:r.value,valid:r.valid,touched:r.touched,label:r.label,shouldValidate:!!r.validation,errorMessage:r.errorMessage,onChange:function(n){e.onChangeHandler(n,t)}},t+n)}))}},{key:"render",value:function(){return Object(I.jsx)("div",{className:P.a.Auth,children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(I.jsxs)("form",{onSubmit:this.submitHandler,className:P.a.AuthForm,children:[this.renderInputs(),Object(I.jsx)(M,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(I.jsx)(M,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})}}]),n}(r.Component),K=Object(S.b)(null,(function(e){return{auth:function(t,n,r){e(function(e,t,n){return function(){var r=Object(h.a)(d.a.mark((function r(i){var a,s,o,c,u;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a={email:e,password:t,returnSecureToken:!0},s="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKCTDGk_YxjZay91L0tilhwRTwH-EZD_s",n&&(s="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKCTDGk_YxjZay91L0tilhwRTwH-EZD_s"),r.next=5,j.a.post(s,a);case 5:o=r.sent,c=o.data,u=new Date((new Date).getTime()+1e3*c.expiresIn),localStorage.setItem("token",c.idToken),localStorage.setItem("userId",c.localId),localStorage.setItem("expirationDate",u),i(Q(c.idToken)),i(k(c.expiresIn));case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))(G),X=n(35),W=n.n(X),J=n(36),Y=n.n(J),$=function(e){var t=[Y.a.AnswerItem];return e.state&&t.push(Y.a[e.state]),Object(I.jsx)("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)},children:e.answer.text})},ee=n(51),te=n.n(ee),ne=function(e){return Object(I.jsx)("ul",{className:te.a.AnswerList,children:e.answers.map((function(t,n){return Object(I.jsx)($,{answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null},n)}))})},re=function(e){return Object(I.jsxs)("div",{className:W.a.ActiveQuiz,children:[Object(I.jsxs)("p",{className:W.a.Question,children:[Object(I.jsxs)("span",{children:[Object(I.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(I.jsxs)("small",{children:[e.answerNumber," \u0438\u0437 ",e.quizLength]})]}),Object(I.jsx)(ne,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick})]})},ie=n(37),ae=n.n(ie),se=n(16),oe=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return Object(I.jsxs)("div",{className:ae.a.FinishedQuiz,children:[Object(I.jsx)("ul",{children:e.quiz.map((function(t,n){var r=["fa","error"===e.results[t.id]?"fa-times":"fa-check",ae.a[e.results[t.id]]];return Object(I.jsxs)("li",{children:[Object(I.jsx)("strong",{children:n+1}),".\xa0",t.question,Object(I.jsx)("i",{className:r.join(" ")})]},n)}))}),Object(I.jsxs)("p",{children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{onClick:e.onRetry,type:"primary",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(I.jsx)(se.b,{to:"/",children:Object(I.jsx)(M,{type:"success",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"})})]})]})},ce=n(38),ue=n.n(ce),le=function(){return Object(I.jsx)("div",{className:ue.a.center,children:Object(I.jsxs)("div",{className:ue.a.Loader,children:[Object(I.jsx)("div",{}),Object(I.jsx)("div",{})]})})},de=n(21),he=j.a.create({baseURL:"https://quiz-4fff1-default-rtdb.firebaseio.com/"});function pe(e){return{type:O,quiz:e}}function je(){return{type:b}}function be(e){return{type:f,quizes:e}}function fe(e){return{type:v,error:e}}function ve(e,t){return{type:m,answerState:e,results:t}}function Oe(e){return function(t,n){var r=n().quiz;if(r.answerState){var i=Object.keys(r.answerState)[0];if("success"===r.answerState[i])return}var a=r.quiz[r.activeQuestion],s=r.results;if(a.rightAnswerId===e){s[a.id]||(s[a.id]="success"),t(ve(Object(de.a)({},e,"success"),s));var o=window.setTimeout((function(){var e;!function(e){return e.activeQuestion+1===e.quiz.length}(r)?t((e=r.activeQuestion+1,{type:_,number:e})):t({type:x}),window.clearTimeout(o)}),1e3)}else s[a.id]="error",t(ve(Object(de.a)({},e,"error"),s))}}var me=n(39),xe=n.n(me),_e=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuizById(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return Object(I.jsx)("div",{className:xe.a.Quiz,children:Object(I.jsxs)("div",{className:xe.a.QuizWrapper,children:[Object(I.jsx)("h1",{children:"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),this.props.loading||!this.props.quiz?Object(I.jsx)(le,{}):this.props.isFinished?Object(I.jsx)(oe,{results:this.props.results,quiz:this.props.quiz,onRetry:this.props.retryQuiz}):Object(I.jsx)(re,{answers:this.props.quiz[this.props.activeQuestion].answers,question:this.props.quiz[this.props.activeQuestion].question,onAnswerClick:this.props.quizAnswerClick,quizLength:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})]})})}}]),n}(r.Component),ge=Object(S.b)((function(e){return{results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz,loading:e.quiz.loading}}),(function(e){return{fetchQuizById:function(t){var n;e((n=t,function(){var e=Object(h.a)(d.a.mark((function e(t){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(je()),e.prev=1,e.next=4,he.get("/quizes/".concat(n,".json"));case 4:r=e.sent,i=r.data,t(pe(i)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t(fe(e.t0)),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},quizAnswerClick:function(t){return e(Oe(t))},retryQuiz:function(){return e({type:g})}}}))(_e),ze=n(52),we=n.n(ze),ye=function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(I.jsxs)("div",{className:we.a.Select,children:[Object(I.jsx)("label",{htmlFor:t,children:e.label}),Object(I.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(I.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})};function Ce(e,t){return Object(E.a)(Object(E.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function qe(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Qe=function(e){return e.children};var Se=n(53),Ae=n.n(Se);function Ie(e){return Ce({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function Te(){return{question:Ce({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Ie(1),option2:Ie(2),option3:Ie(3),option4:Ie(4)}}var Ne=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isFormValid:!1,rightAnswerId:1,formControls:Te()},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=e.state.formControls,r=n.question,i=n.option1,a=n.option2,s=n.option3,o=n.option4,c={question:r.value,id:e.props.quiz.length+1,rightAnswerId:e.state.rightAnswerId,answers:[{text:i.value,id:i.id},{text:a.value,id:a.id},{text:s.value,id:s.id},{text:o.value,id:o.id}]};e.props.createQuizQuestion(c),e.setState({isFormValid:!1,rightAnswerId:1,formControls:Te()})},e.createQuizHandler=function(t){t.preventDefault(),e.setState({isFormValid:!1,rightAnswerId:1,formControls:Te()}),e.props.finishCreateQuiz()},e.changeHandler=function(t,n){var r=Object(E.a)({},e.state.formControls),i=Object(E.a)({},r[n]);i.touched=!0,i.value=t,i.valid=ke(i.value,i.validation),r[n]=i,e.setState({formControls:r,isFormValid:qe(r)})},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(o.a)(n,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(I.jsxs)(Qe,{children:[Object(I.jsx)(Z,{label:r.label,value:r.value,valid:r.valid,shouldValidate:!!r.validation,touched:r.touched,errorMessage:r.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?Object(I.jsx)("hr",{}):null]},t+n)}))}},{key:"render",value:function(){var e=Object(I.jsx)(ye,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return Object(I.jsx)("div",{className:Ae.a.QuizCreator,children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"}),Object(I.jsxs)("form",{onSubmit:this.submitHandler,children:[this.renderControls(),e,Object(I.jsx)(M,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),Object(I.jsx)(M,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})]})]})})}}]),n}(r.Component),Ee=Object(S.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{createQuizQuestion:function(t){e(function(e){return{type:z,item:e}}(t))},finishCreateQuiz:function(){e(function(){var e=Object(h.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.post("/quizes.json",n().create.quiz);case 2:t({type:w});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(Ne),Fe=n(54),Le=n.n(Fe),De=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderQuizes",value:function(){return this.props.quizes.map((function(e){return Object(I.jsx)("li",{children:Object(I.jsx)(se.c,{to:"/quiz/"+e.id,children:e.name})},e.id)}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return Object(I.jsx)("div",{className:Le.a.QuizList,children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"}),this.props.loading&&0!==this.props.quizes.length?Object(I.jsx)(le,{}):Object(I.jsx)("ul",{children:this.renderQuizes()})]})})}}]),n}(r.Component),He=Object(S.b)((function(e){return{quizes:e.quiz.quizes,loading:e.quiz.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(h.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(je()),e.prev=1,e.next=4,he.get("/quizes.json");case 4:n=e.sent,r=[],Object.keys(n.data).forEach((function(e,t){r.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),t(be(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(fe(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(De),Me=n(55),Ue=n.n(Me),Be=n(40),Ve=n.n(Be),Ze=function(e){var t=[Ve.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(Ve.a.open)):t.push("fa-bars"),Object(I.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},Re=n(56),Pe=n.n(Re),Ge=function(e){return Object(I.jsx)("div",{className:Pe.a.Backdrop,onClick:e.onClick})},Ke=n(25),Xe=n.n(Ke),We=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).clickHandler=function(){e.props.onClose()},e}return Object(o.a)(n,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return Object(I.jsx)("li",{children:Object(I.jsx)(se.c,{to:e.to,exact:e.exact,activeClassName:Xe.a.active,onClick:t.clickHandler,children:e.label})},n)}))}},{key:"render",value:function(){var e=[Xe.a.Drawer];this.props.isOpen||e.push(Xe.a.close);var t=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0}];return this.props.isAuthenticated?(t.push({to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}),t.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1})):t.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1}),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("nav",{className:e.join(" "),children:Object(I.jsx)("ul",{children:this.renderLinks(t)})}),this.props.isOpen?Object(I.jsx)(Ge,{onClick:this.props.onClose}):null]})}}]),n}(r.Component),Je=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("div",{className:Ue.a.Layout,children:[Object(I.jsx)(We,{isOpen:this.state.menu,onClose:this.menuCloseHandler,isAuthenticated:this.props.isAuthenticated}),Object(I.jsx)(Ze,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),Object(I.jsx)("main",{children:this.props.children})]})}}]),n}(r.Component),Ye=Object(S.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(Je),$e=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=Object(I.jsxs)(A.d,{children:[Object(I.jsx)(A.b,{path:"/auth",component:K}),Object(I.jsx)(A.b,{path:"/quiz/:id",component:ge}),Object(I.jsx)(A.b,{path:"/",exact:!0,component:He}),Object(I.jsx)(A.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(I.jsxs)(A.d,{children:[Object(I.jsx)(A.b,{path:"/quiz-creator",component:Ee}),Object(I.jsx)(A.b,{path:"/quiz/:id",component:ge}),Object(I.jsx)(A.b,{path:"/logout",component:N}),Object(I.jsx)(A.b,{path:"/",exact:!0,component:He}),Object(I.jsx)(A.a,{to:"/"})]})),Object(I.jsx)(Ye,{children:e})}}]),n}(r.Component),et=Object(A.g)(Object(S.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(q()):(e(Q(t)),e(k((n.getTime()-(new Date).getTime())/1e3)))}else e(q())}))}}}))($e)),tt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))},nt=n(17),rt={token:null};var it=n(58),at={quiz:[]};var st={quizes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var ot=Object(nt.c)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case f:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,quizes:t.quizes});case v:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,error:t.error});case O:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,quiz:t.quiz});case m:return Object(E.a)(Object(E.a)({},e),{},{answerState:t.answerState,results:t.results});case x:return Object(E.a)(Object(E.a)({},e),{},{isFinished:!0});case _:return Object(E.a)(Object(E.a)({},e),{},{answerState:null,activeQuestion:t.number});case g:return Object(E.a)(Object(E.a)({},e),{},{activeQuestion:0,answerState:null,isFinished:!1,results:{}});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(E.a)(Object(E.a)({},e),{},{quiz:[].concat(Object(it.a)(e.quiz),[t.item])});case w:return Object(E.a)(Object(E.a)({},e),{},{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(E.a)(Object(E.a)({},e),{},{token:t.token});case C:return Object(E.a)(Object(E.a)({},e),{},{token:null});default:return e}}}),ct=n(57),ut="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):nt.d,lt=Object(nt.e)(ot,ut(Object(nt.a)(ct.a))),dt=Object(I.jsx)(S.a,{store:lt,children:Object(I.jsx)(se.a,{children:Object(I.jsx)(et,{})})});a.a.render(dt,document.getElementById("root")),tt()}},[[89,1,2]]]);
//# sourceMappingURL=main.9710fc0c.chunk.js.map