(this["webpackJsonpstorage-app"]=this["webpackJsonpstorage-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),r=n(4),o=n(3),i=n(5),l=n(0),u=n.n(l),c=n(11),m=n.n(c),h=n(6),p=n(12),d=n.n(p),E=(n(7),new(n(13).a)("questionsDB"));E.version(1).stores({questions:"id,question, option1, option2, option3, option4, answer"}),E.open().catch((function(e){console.log(e.stack||e)}));var b=E,v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name;"txtQuestion"===t?n.setState({question:e.target.value}):"txtOption1"===t?n.setState({option1:e.target.value}):"txtOption2"===t?n.setState({option2:e.target.value}):"txtOption3"===t?n.setState({option3:e.target.value}):"txtOption4"===t?n.setState({option4:e.target.value}):"txtAnswer"===t&&n.setState({answer:e.target.value})},n.insertData=function(e){var t=n.state,a=t.question,s=t.option1,r=t.option2,o=t.option3,i=t.option4,l=t.answer;e.preventDefault(),a.length<1||s.length<1||r.length<1||o.length<1||i.length<1||l.length<1?alert("Check that no textfield is empty"):s!==l&&r!==l&&o!==l&&i!==l?alert("The answer must be one of the options"):b.questions.put({id:d()(),question:n.state.question,option1:n.state.option1,option2:n.state.option2,option3:n.state.option3,option4:n.state.option4,answer:n.state.answer}).then((function(){n.setState({question:"",option1:"",option2:"",option3:"",option4:"",answer:""})}))},n.state={question:"",option1:"",option2:"",option3:"",option4:"",answer:""},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return u.a.createElement("form",null,u.a.createElement("label",null,"Enter Question: "),u.a.createElement("input",{ref:"q",name:"txtQuestion",onChange:this.handleChange,type:"text",value:this.state.question,size:"70"}),u.a.createElement("hr",null),"Answer Options",u.a.createElement("p",null,u.a.createElement("label",null,"Option 1: "),u.a.createElement("input",{ref:"o1",name:"txtOption1",onChange:this.handleChange,type:"text",value:this.state.option1})),u.a.createElement("p",null,u.a.createElement("label",null,"Option 2: "),u.a.createElement("input",{ref:"o2",name:"txtOption2",onChange:this.handleChange,type:"text",value:this.state.option2})),u.a.createElement("p",null,u.a.createElement("label",null,"Option 3: "),u.a.createElement("input",{ref:"o3",name:"txtOption3",onChange:this.handleChange,type:"text",value:this.state.option3})),u.a.createElement("p",null,u.a.createElement("label",null,"Option 4: "),u.a.createElement("input",{ref:"o4",name:"txtOption4",onChange:this.handleChange,type:"text",value:this.state.option4})),u.a.createElement("hr",null),u.a.createElement("p",null,u.a.createElement("label",null,"Answer: "),u.a.createElement("input",{name:"txtAnswer",onChange:this.handleChange,type:"text",value:this.state.answer})),u.a.createElement("hr",null),u.a.createElement("input",{type:"submit",className:"button",value:"Submit Question",onClick:this.insertData}))}}]),t}(l.Component),g=function(e){return u.a.createElement("div",null,u.a.createElement("div",{className:"header"},"Current User: ",u.a.createElement("span",null,e.username)))},f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).loadQuestions=function(){var e=[];b.questions.each((function(t){return e.push(t)})).then((function(){return n.setState({questionBank:e})}))},n.deleteQuestion=function(e){var t=e.target.id;b.questions.delete(t).then((function(){n.loadQuestions()}))},n.state={questionBank:[],cancel:!1},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;this.loadQuestions();var t=this.state.questionBank.map((function(t){return u.a.createElement("div",{className:"questionItem",key:t.id},u.a.createElement("span",null,t.question),u.a.createElement("button",{id:t.id,onClick:e.deleteQuestion},"Delete"),u.a.createElement("br",null),"A. ",t.option1,"; B. ",t.option2,"; C. ",t.option3,"; D. ",t.option4,";",u.a.createElement("hr",null))}));return!0===this.state.cancel?u.a.createElement(w,{username:this.props.username}):u.a.createElement("div",null,u.a.createElement(g,{username:this.props.username}),u.a.createElement("center",null,u.a.createElement("h3",null,"Available Questions")),t,u.a.createElement("center",null,u.a.createElement("h3",null,"Enter new question using the form below")),u.a.createElement("div",{className:"container small"},u.a.createElement(v,null),u.a.createElement("button",{onClick:function(){e.setState({cancel:!0})}},"Go Back")))}}]),t}(l.Component),k=n(9);var O=function(e){var t=Object(l.useState)(!1),n=Object(k.a)(t,2),a=n[0],s=n[1],r=Object(l.useState)(!1),o=Object(k.a)(r,2),i=o[0],c=o[1];return!0===a?u.a.createElement("div",null,u.a.createElement(Q,null)):!0===i?u.a.createElement("div",null,u.a.createElement(C,{username:e.username})):u.a.createElement("div",null,u.a.createElement(g,{username:e.username}),u.a.createElement("div",{className:"container small"},u.a.createElement("div",{className:"scoresheet"},u.a.createElement("h1",null,"Quiz Successfully Completed"),u.a.createElement("br",null),u.a.createElement("h3",null,"Your score is ",e.score),u.a.createElement("h4",null,"That is ",e.score/e.totalQuestions*100,"% ")),u.a.createElement("button",{className:"retakeButton",onClick:function(){return c(!0)}},"Restart Quiz"),u.a.createElement("button",{onClick:function(){return s(!0)}},"Exit Quiz")))},C=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).loadQuestions=function(){var e=[];b.questions.each((function(t){return e.push(t)})).then((function(){return n.setState({questionBank:e})}))},n.nextQuestionHander=function(){n.setState({currentIndex:n.state.currentIndex+1,disabled:!0,disabledOptions:!1,disabledCheck:!0,option1:!1,option2:!1,option3:!1,option4:!1,correctAnswer:"",userAnswer:""})},n.checkAnswer=function(){var e=n.state,t=e.score,a=e.userAnswer,s=e.questionBank,r=e.currentIndex;n.answerIsCorrect(a)&&n.setState({score:t+1}),n.setState({disabledOptions:!0,disabled:!1,correctAnswer:s[r].answer})},n.setUserAnswer=function(e){"o1"===e.target.id?n.setState({option1:e.target.checked,userAnswer:e.target.value}):"o2"===e.target.id?n.setState({option2:e.target.checked,userAnswer:e.target.value}):"o3"===e.target.id?n.setState({option3:e.target.checked,userAnswer:e.target.value}):"o4"===e.target.id&&n.setState({option4:e.target.checked,userAnswer:e.target.value}),n.setState({disabledCheck:!1})},n.state={questionBank:[],currentIndex:0,userAnswer:null,score:0,disabled:!0,disabledOptions:!1,option1:!1,option2:!1,option3:!1,option4:!1,endQuiz:!1,disabledCheck:!0},n.checkAnswer=n.checkAnswer.bind(Object(h.a)(n)),n.answerIsCorrect=n.answerIsCorrect.bind(Object(h.a)(n)),n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadQuestions()}},{key:"answerIsCorrect",value:function(e){var t=this.state,n=t.currentIndex;return e===t.questionBank[n].answer}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentIndex,a=t.endQuiz,s=t.questionBank,r=t.score,o=t.userAnswer,i=t.correctAnswer,l=s[n];return n<=s.length-1&&!1===a?u.a.createElement("div",null,u.a.createElement(g,{username:this.props.username}),u.a.createElement("div",{className:"container"},u.a.createElement("h2",null," ",l.question),u.a.createElement("h4",null,"Question ",n+1," of ",s.length," "),u.a.createElement("fieldset",{disabled:this.state.disabledOptions},u.a.createElement("div",{className:"options"},u.a.createElement("input",{id:"o1",onChange:this.setUserAnswer,type:"radio",name:"group1",value:l.option1,checked:this.state.option1})," ",l.option1),u.a.createElement("div",{className:"options"},u.a.createElement("input",{id:"o2",onChange:this.setUserAnswer,type:"radio",name:"group1",value:l.option2,checked:this.state.option2})," ",l.option2),u.a.createElement("div",{className:"options"},u.a.createElement("input",{id:"o3",onChange:this.setUserAnswer,type:"radio",name:"group1",value:l.option3,checked:this.state.option3})," ",l.option3),u.a.createElement("div",{className:"options"},u.a.createElement("input",{id:"o4",onChange:this.setUserAnswer,type:"radio",name:"group1",value:l.option4,checked:this.state.option4})," ",l.option4)),u.a.createElement("div",null,u.a.createElement("button",{onClick:this.checkAnswer,disabled:this.state.disabledCheck},"Check Answer"),u.a.createElement("span",null,"Your answer: ",o," "),u.a.createElement("span",null,"   Correct answer: ",i)),u.a.createElement("button",{className:"button",onClick:this.nextQuestionHander,disabled:this.state.disabled},"Next")),u.a.createElement("div",null,u.a.createElement("center",null,u.a.createElement("button",{onClick:function(){e.setState({endQuiz:!0})}},"End Quiz Now")),u.a.createElement("br",null))):u.a.createElement("div",null,u.a.createElement(O,{username:this.props.username,score:r,totalQuestions:s.length}),u.a.createElement("br",null))}}]),t}(l.Component),w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={numberOfQuestions:0,gotoQuestionManager:!1,gotoQuiz:!1,username:"",goBack:!1},n.manageQuestions=n.manageQuestions.bind(Object(h.a)(n)),n.startQuiz=n.startQuiz.bind(Object(h.a)(n)),n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=0;b.questions.each((function(e){return t+=1})).then((function(){e.setState({numberOfQuestions:t})})),this.setState({username:this.props.username})}},{key:"manageQuestions",value:function(){this.setState({gotoQuestionManager:!0})}},{key:"startQuiz",value:function(){0===this.state.numberOfQuestions?alert("You must add at least one question before you can start the quiz"):this.setState({gotoQuiz:!0})}},{key:"render",value:function(){var e=this;return!0===this.state.gotoQuestionManager?u.a.createElement("div",null,u.a.createElement(f,{username:this.state.username})):!0===this.state.gotoQuiz?u.a.createElement("div",null,u.a.createElement(C,{username:this.state.username})):!0===this.state.goBack?u.a.createElement("div",null,u.a.createElement(Q,null)):u.a.createElement("div",null,u.a.createElement(g,{username:this.props.username}),u.a.createElement("div",{className:"container"},u.a.createElement("hr",null),u.a.createElement("center",null,u.a.createElement("h1",null,"Quiz Dashboard"),u.a.createElement("h4",null,"Number of questions in the database must be one or more before you can starte the quiz"),u.a.createElement("h5",null,"To add a question, please click on the Manage Questions button")),u.a.createElement("hr",null),"Number of Question: ",this.state.numberOfQuestions,u.a.createElement("br",null),u.a.createElement("button",{className:"button",onClick:this.manageQuestions},"Manage Questions"),u.a.createElement("button",{className:"button green",onClick:this.startQuiz},"Start Quiz")," ",u.a.createElement("br",null),u.a.createElement("button",{onClick:function(){e.setState({username:"",goBack:!0})}},"Exit")))}}]),t}(l.Component),Q=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).setUsername=function(e){n.setState({username:e.target.value})},n.state={username:"",start:!1},n.startGame=n.startGame.bind(Object(h.a)(n)),n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"startGame",value:function(){""!==this.state.username&&this.setState({start:!0})}},{key:"render",value:function(){return!0===this.state.start?u.a.createElement("div",null,u.a.createElement(w,{username:this.state.username})):u.a.createElement("div",null,u.a.createElement(g,{username:this.state.username}),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"home"},u.a.createElement("h1",null,"Welcome to the Quiz"),u.a.createElement("br",null),"Enter your username to start ",u.a.createElement("br",null),u.a.createElement("input",{type:"text",onChange:this.setUsername,value:this.state.username}),u.a.createElement("br",null),u.a.createElement("button",{className:"button",disabled:this.state.username.length<1,onClick:this.startGame},"Game Dashboard"))))}}]),t}(l.Component);n.d(t,"App",(function(){return j}));var j=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(Q,null))}}]),t}(l.Component);m.a.render(u.a.createElement(j,null),document.getElementById("root"))},7:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.000a6f01.chunk.js.map