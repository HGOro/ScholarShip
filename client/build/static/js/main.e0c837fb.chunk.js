(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},146:function(e,t,n){},148:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(31),c=n.n(l),i=(n(91),n(13)),o=n(24);n(92),n(93);var s=function(){return r.a.createElement("div",null,r.a.createElement("ul",{class:"nav"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(i.b,{to:"/",class:"link"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(i.b,{to:"/login",class:"link"},"Log In")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(i.b,{to:"subjects",class:"link"},"Subjects")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(i.b,{to:"/research",class:"link"},"Research")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(i.b,{to:"/myproject",class:"link"},"My Project")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(i.b,{to:"/dashboard",class:"link"}," dashboard"))))},u=n(5),m=n(6),h=n(8),d=n(7),f=n(9),p=(n(101),n(78)),g=n.n(p),b=function(){return r.a.createElement("div",{class:"header"},r.a.createElement("div",{class:"logo-box"},r.a.createElement("img",{src:g.a,alt:"logo",class:"logo"})),r.a.createElement("div",{class:"text-box"},r.a.createElement("h1",{class:"heading-primary"},r.a.createElement("span",{class:"heading-primary-main"},"Scholar",r.a.createElement("span",{class:"shipText"},"Ship")),r.a.createElement("span",{class:"heading-primary-sub"},"Big ideas for little people")),r.a.createElement(i.b,{to:"/login",class:"btn btn-white btn-animated"},"Begin to Learn!")))},E=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}]),t}(a.Component),v=n(3),y=(n(146),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={subjects:[{name:"Math",info:"Facts, Quizzes, and More",quizzes:[{url:"/math",text:"Times Tables"}],icon:"math.png"},{name:"Reading",info:"Words, Stories, and More",icon:"reading.png"},{name:"Writing",info:"Build Words and Sentences",icon:"writing.png"},{name:"Science",info:"How the World Works",icon:"science.png"},{name:"History",info:"Past to Present",icon:"history.png"},{name:"Art",info:"Expression and Exploration",icon:"art.png"}]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v.Container,{id:"subjects"},r.a.createElement(v.Row,null,this.state.subjects.map(function(e,t){return r.a.createElement(v.Col,{m:6,s:12,l:4,key:t},"Math"===e.name?r.a.createElement(v.Card,{header:r.a.createElement("img",{src:"./assets/img/subjects/".concat(e.icon)}),title:e.name,reveal:r.a.createElement("ul",null,e.quizzes.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(i.b,{to:e.url},e.text))}))},r.a.createElement("p",null,e.info)):r.a.createElement(v.Card,{header:r.a.createElement("img",{src:"./assets/img/subjects/".concat(e.icon)}),title:e.name,reveal:r.a.createElement("p",null,"Coming Soon!")},r.a.createElement("p",null,e.info)))})))}}]),t}(a.Component)),j=n(79),O=n(18),S=n.n(O),w=n(27),k=n(10);n(148);var C=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.clickHandler(t,e.articleId)}},"Save Article"))},x=n(84),z=n(11);function N(){var e=Object(k.a)(["\n  font-size: 18px;\n  ont-family: 'Wendy One', sans-serif; \n"]);return N=function(){return e},e}var D=z.a.div(N()),Q=function(e){var t=Object(a.useState)(""),n=Object(x.a)(t,2),l=n[0],c=n[1];return r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"notes"},"Notes: "),r.a.createElement("textarea",{id:"notes",name:"notes",onChange:function(e){return c(e.target.value)},value:l,rows:"3",cols:"35"}),r.a.createElement("button",{onClick:function(t){e.saveNotesHandler(t,e.articleId,l),c("")}},"Save Notes"))};function I(){var e=Object(k.a)(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return I=function(){return e},e}function W(){var e=Object(k.a)(["\n  border: 2px solid black;\n  background: lightgray;\n  width: 600px;\n  height: auto;\n  margin: 20px;\n  padding: 15px;\n  overflow: scroll;\n  font-size: 18px;\n  font-family: 'Wendy One', sans-serif;\n"]);return W=function(){return e},e}var T=z.a.div(W()),B=z.a.div(I()),A=function(e){return r.a.createElement(T,null,r.a.createElement(B,null,r.a.createElement("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"500",height:"200",src:e.result.href}),r.a.createElement("div",null,r.a.createElement("a",{href:e.result.href,target:"_blank",rel:"noopener noreferrer"},e.result.title))),r.a.createElement("div",null,e.result.comments.map(function(e){return r.a.createElement("p",null,e.comment)})),e.result.isSave?r.a.createElement(Q,{articleId:e.result._id,saveNotesHandler:e.saveNotesHandler}):r.a.createElement(C,{clickHandler:e.clickHandler,articleId:e.result._id}))};function _(){var e=Object(k.a)(["\n  text-align: center;\n  padding: 10px;\n  font-family: 'Wendy One', sans-serif;\n"]);return _=function(){return e},e}function M(){var e=Object(k.a)(["\n  font-size: 24px;\n  font-family: 'Wendy One', sans-serif;\n  padding: 8px;\n  margin: 10px;\n"]);return M=function(){return e},e}function R(){var e=Object(k.a)(["\n  font-size: 20px;\n  font-family: 'Wendy One', sans-serif;\n  padding: 20px;\n  justify-content: center;\n  flex-direction: column;\n  align-items: left;\n"]);return R=function(){return e},e}var H=z.a.div(R()),P=z.a.button(M()),q=z.a.h1(_()),L=function(e){return r.a.createElement(H,null,r.a.createElement(q,null,"Research My Project"),r.a.createElement(P,{onClick:e.handleScrapeBtnClick},"News for Kids.net"),r.a.createElement(P,null,"PBS.org"),r.a.createElement(P,null,"CNN Student"),r.a.createElement(P,null,"TIME for Kids"),r.a.createElement(P,null,"Scholastic News Online"),r.a.createElement("p",null,"Wikipedia: ",r.a.createElement("input",{className:"userinput"}),r.a.createElement("button",{className:"searchWiki"},"Search")))},F=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",results:[]},n.handleScrapeBtnClick=function(){var e=Object(w.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.fetchScrapeData();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.fetchScrapeData=function(){fetch("http://localhost:3001/api/research/scrape",{method:"GET",dataType:"JSON",headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return e.json()}).then(function(e){console.log("inside fetchScrapeData",e),n.setState({results:e.result})}).catch(function(e){console.log(e,"catch the hoop")})},n.handleSaveArticleBtnClick=function(){var e=Object(w.a)(S.a.mark(function e(t,a){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("Save Article Clicked",a),n.saveArticleData(a);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.saveArticleData=function(){var e=Object(w.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:3001/api/research/savearticle/".concat(t),{method:"POST"}).then(function(e){return e.json()}).then(function(e){console.log("saveA rticleData result",e),console.log("saveArticleData state",n.state),n.setState({results:n.state.results.map(function(t){return t._id!==e._id?t:e})})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleSaveNotesBtnClick=function(){var e=Object(w.a)(S.a.mark(function e(t,a,r){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a),console.log(r),n.saveNotesData(a,r);case 4:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.saveNotesData=function(){var e=Object(w.a)(S.a.mark(function e(t,a){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),console.log(a),fetch("http://localhost:3001/api/research/savecomment/".concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({notes:a})}).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState(Object(j.a)({},n.state,{results:n.state.results.map(function(t){return t._id!==e._id?t:e})}))});case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L,{handleScrapeBtnClick:this.handleScrapeBtnClick}),this.state.results.map(function(t){return r.a.createElement(A,{key:t._id,result:t,clickHandler:e.handleSaveArticleBtnClick,saveNotesHandler:e.handleSaveNotesBtnClick})}))}}]),t}(a.Component);function J(){var e=Object(k.a)(["\n  font-family: 'Wendy One', sans-serif;\n  padding: 9px;\n  font-size: 24px;\n  margin-left: 5px;\n"]);return J=function(){return e},e}function G(){var e=Object(k.a)(["\n  font-family: 'Wendy One', sans-serif;\n  padding: 6px;\n  font-size: 22px;\n  margin-left: 8px;\n"]);return G=function(){return e},e}function K(){var e=Object(k.a)(["\n  font-family: 'Wendy One', sans-serif;\n  padding: 6px;\n  font-size: 22px;\n  margin-left: 5px;\n"]);return K=function(){return e},e}function U(){var e=Object(k.a)(["\n  font-size: 24px;\n  font-family: 'Wendy One', sans-serif;\n  padding: 8px;\n  margin: 10px;\n"]);return U=function(){return e},e}function V(){var e=Object(k.a)(["\n  text-align: center;\n  font-family: 'Wendy One', sans-serif;\n  padding: 20px;\n"]);return V=function(){return e},e}var Y=z.a.h1(V()),$=z.a.button(U()),X=z.a.h3(K()),Z=z.a.p(G()),ee=z.a.a(J()),te=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},n.handleViewMaterialsBtnClick=function(e){e.preventDefault(),n.fetchSavedArticles()},n.fetchSavedArticles=function(){fetch("http://localhost:3001/api/research/readarticles",{method:"GET"}).then(function(e){return e.json()}).then(function(e){console.log("inside fetchSavedArticles",e),console.log(e),n.setState({results:e})}).catch(function(e){console.log(e,"catch read article error")})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,null,"My Project"),r.a.createElement($,{onClick:this.handleViewMaterialsBtnClick},"View Saved Materials"),this.state.results.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(X,null,e.title,r.a.createElement(ee,{href:e.href,target:"_blank"},"Read"),e.comments.map(function(e){return r.a.createElement(Z,null,e.comment)})))}))}}]),t}(a.Component),ne=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v.Container,null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("h3",null,"Account Information:"),r.a.createElement("h4",null,"Name:"),r.a.createElement("p",null,"First: Test | Last: Test"),r.a.createElement("span",null,r.a.createElement("h4",null,"email:"),r.a.createElement("p",null,"test@test.com")))}}]),t}(a.Component),ae=n(22),re=n(82),le=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={chartData:e.chartData},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(re.a,{data:this.state.chartData,width:100,height:50,options:{title:{display:!0,text:"Multiplication Tables Progress",fontSize:25},legend:{display:!0,position:"right"}}}))}}]),t}(a.Component),ce=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).generateTwoNums=function(){var e=Math.floor(12*Math.random()),t=Math.floor(12*Math.random()),a=e*t;n.setState(function(n){return{num1:e,num2:t,answer:a,questionCount:n.questionCount+1,answerSubmitted:!1}})},n.countRangeSubmit=function(e){e.preventDefault(),n.state.totalQuestions>0&&(n.generateTwoNums(),n.setState({selectedQuiz:!0,rangeDisable:!0}))},n.countRangeChange=function(e){var t,a=e.target.name,r=e.target.value,l="math-tt-".concat(r);r=parseInt(r),n.setState((t={},Object(ae.a)(t,a,r),Object(ae.a)(t,"rangeDisable",!1),Object(ae.a)(t,"quizId",l),t))},n.userQuizCount=function(){return r.a.createElement(v.Row,null,r.a.createElement(v.Col,{s:12},r.a.createElement("form",null,r.a.createElement(v.Icon,null,"blur_on"),r.a.createElement("span",null,"Select how many problems you would like to solve?"),r.a.createElement(v.Icon,null,"blur_on"),r.a.createElement(v.Range,{min:"5",max:"50",step:"5",name:"totalQuestions",required:!0,onChange:n.countRangeChange}),r.a.createElement(v.Button,{onClick:n.countRangeSubmit,type:"submit",disabled:n.state.rangeDisable},"Submit"))))},n.submitAnswer=function(e){if("Enter"===e.key){var t=e.target.value;(t=parseInt(t))===n.state.answer?n.setState(function(e){return{right:!0,wrong:!1,answerSubmitted:!0,totalRight:e.totalRight+1}}):n.setState(function(e){return{wrong:!0,right:!1,answerSubmitted:!0,totalWrong:e.totalWrong+1}})}},n.handleNextQuestion=function(){n.generateTwoNums()},n.renderQuiz=function(){return n.state.questionCount<=n.state.totalQuestions&&!n.state.answerSubmitted?r.a.createElement("div",null,r.a.createElement("h3",null,n.state.num1," x ",n.state.num2," ="),r.a.createElement("div",null,r.a.createElement("input",{type:"number",onKeyDown:n.submitAnswer}),r.a.createElement("p",null,"Type your answer above and press Enter"))):n.state.questionCount<=n.state.totalQuestions&&n.state.answerSubmitted?n.state.right?r.a.createElement("div",null,r.a.createElement("h1",null,"You got it right!"),r.a.createElement(v.Button,{onClick:n.handleNextQuestion},"Next Question")):r.a.createElement("div",null,r.a.createElement("h1",null,"You got it wrong!"),r.a.createElement(v.Button,{onClick:n.handleNextQuestion},"Next Question")):n.state.questionCount>n.state.totalQuestions?r.a.createElement(v.Container,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Quiz Completed!"),r.a.createElement("h2",null,"Correct:",n.state.totalRight),r.a.createElement("h2",null,"Wrong:",n.state.totalWrong)),r.a.createElement(le,{chartData:n.state.chartData})):void 0},n.handleStartClick=function(){n.setState({startQuiz:!0})},n.renderInstructions=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Get ready to multiply!"),r.a.createElement("p",null,"Click Start Quiz, then type in your answer and press enter for each multiplication problem."),r.a.createElement("p",null,"You will have ",5*n.state.totalQuestions," seconds to finish this quiz."),r.a.createElement(v.Button,{onClick:n.handleStartClick},"Start Quiz"))},n.startQuiz=function(){return n.state.selectedQuiz&&n.state.startQuiz?n.renderQuiz():n.renderInstructions()},n.state={isLoggedIn:!1,right:!1,wrong:!1,questionCount:0,totalQuestions:0,timer:10,totalTime:0,totalRight:0,totalWrong:0,quizId:"",selectedQuiz:!1,rangeDisable:!0,num1:null,num2:null,answer:null,quizStart:!1,answerSubmitted:!1,chartData:{}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=document.cookie;e.length>0&&-1!==(e=e.split("; ")).indexOf("authenticated=true")&&this.setState({isLoggedIn:!0}),this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["test1","test2","test3","test4","test5","test6","test7","test8"],datasets:[{label:"Answers Correct",data:[0,4,3,6,9,8,12,0],backgroundColor:["rgba(0, 255, 255, 0.75)"],borderColor:["rgba(0, 0, 255, 0.1)"]}]}})}},{key:"render",value:function(){return r.a.createElement(v.Container,{id:"math"},this.state.selectedQuiz?this.startQuiz():this.userQuizCount())}}]),t}(a.Component),ie=function(e){return fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e),credentials:"include",mode:"cors"})},oe=function(e){return fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e),credentials:"include",mode:"cors"})},se=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value,a=e.target.name;"local_pw"===a&&t.length>5&&n.setState({buttonStatus:!1}),n.setState(Object(ae.a)({},a,t))},n.handleSubmitAccess=function(e){e.preventDefault();var t={email:n.state.email,local_pw:n.state.local_pw},a=e.target.innerText;a=a.toLowerCase(),n.refs.submitForm.reset(),"signup"===a?n.handleSignup(t):n.handleLogin(t)},n.state={email:"",local_pw:"",message:"",buttonStatus:!0},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleLogin",value:function(e){var t=this;ie(e).then(function(e){return e.json()}).then(function(e){!0===e?window.location.href="/dashboard":(t.setState({message:"UH-OH! Please try again."}),document.getElementById("form-error").className+="error")}).catch(function(e){return console.log("err",e)})}},{key:"handleSignup",value:function(e){var t=this;oe(e).then(function(e){return e.json()}).then(function(e){!0===e?window.location.href="/dashboard":(t.setState({message:"UH-OH! Please try again."}),document.getElementById("form-error").className+="error")}).catch(function(e){return console.log("err",e)})}},{key:"resetError",value:function(){var e=document.getElementById("form-error");this.setState({message:""}),e.classList.remove("error")}},{key:"renderLoginForm",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{ref:"submitForm",onClick:this.resetError.bind(this)},r.a.createElement("p",{id:"form-error"},this.state.message),r.a.createElement("input",{icon:"mail_outline",label:"Email",name:"email",validate:!0,email:!0,onChange:this.handleInputChange,minLength:"4"}),r.a.createElement("input",{icon:"lock_outline",password:!0,label:"Password",name:"local_pw",onChange:this.handleInputChange,minLength:"6",required:!0}),r.a.createElement("button",{waves:"light",style:{marginRight:"5px"},onClick:this.handleSubmitAccess},"LOGIN"),r.a.createElement("button",{style:{marginRight:"5px"},onClick:this.handleSubmitAccess},"SIGNUP")))}},{key:"render",value:function(){return r.a.createElement("div",null,"HOME",this.renderLoginForm())}}]),t}(a.Component);var ue=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(o.a,{exact:!0,path:"/",component:E}),r.a.createElement(o.a,{exact:!0,path:"/subjects",component:y}),r.a.createElement(o.a,{exact:!0,path:"/math",component:ce}),r.a.createElement(o.a,{exact:!0,path:"/login",component:se}),r.a.createElement(o.a,{exact:!0,path:"/research",component:F}),r.a.createElement(o.a,{exact:!0,path:"/myproject",component:te}),r.a.createElement(o.a,{path:"/dashboard",component:ne})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,n){e.exports=n.p+"static/media/logo.0b7cabd6.png"},86:function(e,t,n){e.exports=n(240)},91:function(e,t,n){},92:function(e,t,n){e.exports=n.p+"static/media/logo.0b7cabd6.png"},93:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.e0c837fb.chunk.js.map