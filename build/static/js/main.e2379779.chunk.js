(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){},168:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(38),i=n.n(s),d=(n(137),n(138),n(29)),o=n(30),r=n(35),l=n(37),j=n(231),u=n(227),b=n(232),h=n(87),O=n(15),f=(n(139),n.p+"static/media/profile_pic.536fd505.jpg"),x=n(1),p=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{class:"split left",children:Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)("img",{className:"profile_image",src:f,alt:"Profile Pic"})})}),Object(x.jsx)("div",{className:"split right",children:Object(x.jsxs)("div",{className:"centered",children:[Object(x.jsx)("div",{className:"name_title",children:"Your Name"}),Object(x.jsx)("div",{className:"brief_description",children:"Tell us about yourself in a few sentences. Tell us your interests and say a fun fact about yourself."})]})})]})}}]),n}(a.Component),v=n(16),m=(n(141),n(235)),g=n(237),y=n(239),C=n(234),T=n(240),k=function(e){var t=e.todos,n=e.deleteTodo,a=t.length?t.map((function(e){var t="#ffffffff";return new Date(e.duedate)<new Date&&(t="red"),console.log(t),Object(x.jsx)(m.a,{children:Object(x.jsx)(g.a,{"data-testid":e.content,style:{marginTop:10,background:t},children:Object(x.jsxs)(y.a,{component:"a",href:"#simple-list",children:[Object(x.jsx)(C.a,{style:{paddingLeft:0},color:"primary",onClick:function(){return n(e.id)}}),Object(x.jsx)(T.a,{primary:e.content,secondary:e.duedate})]})})},e.id)})):Object(x.jsx)("p",{children:"You have no todo's left "});return Object(x.jsx)("div",{className:"todoCollection",style:{padding:"10px"},children:a})},D=n(9),N=n(230),S=n(236),w=n(119),L=n(228),A=n(229),I=n(116),_=n.n(I),P=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({content:t.target.value,date:Date().toLocaleString("en-US")})},e.handleDateChange=function(t){var n=null;null!=t&&(n=new Date(t).toLocaleDateString()),e.setState({duedate:n})},e.handleSubmit=function(t){if(t.preventDefault(),e.state.content.trim()){var n={id:e.state.id,task:e.state.content,currentDate:e.state.date,dueDate:e.state.duedate};_()({method:"POST",url:"http://localhost:8080/add/item",data:{jsonObject:n},headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data.message)})),e.props.addTodo(e.state),e.setState({content:"",date:"",duedate:null})}},e.state={content:"",date:"",duedate:null},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(N.a,{label:"Add New Item",variant:"outlined",onChange:this.handleChange,value:this.state.content}),Object(x.jsx)(w.a,{dateAdapter:A.a,children:Object(x.jsx)(L.a,{id:"new-item-date",label:"Due Date",value:this.state.duedate,onChange:this.handleDateChange,renderInput:function(e){return Object(x.jsx)(N.a,Object(D.a)({},e))}})}),Object(x.jsx)(S.a,{style:{marginLeft:"10px"},onClick:this.handleSubmit,variant:"contained",color:"primary",children:"Add"})]})}}]),n}(a.Component),H=(n(168),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.addTodo=function(t){if(!e.state.todos.find((function(e){return e.content===t.content}))&&null!=t.duedate&&"Invalid Date"!==t.duedate){t.id=Math.random();var n=[].concat(Object(v.a)(e.state.todos),[t]);e.setState({todos:n})}},e.state={todos:[]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"Home",children:[Object(x.jsx)("h1",{children:"Todo's "}),Object(x.jsx)(P,{addTodo:this.addTodo}),Object(x.jsx)(k,{todos:this.state.todos,deleteTodo:this.deleteTodo})]})}}]),n}(a.Component)),J=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(h.a,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(j.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(b.a,{className:"me-auto",children:[Object(x.jsx)(b.a.Link,{as:h.b,to:"/",children:" Home "}),Object(x.jsx)(b.a.Link,{as:h.b,to:"/about",children:"About"})]})})]})})}),Object(x.jsx)("div",{children:Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{exact:!0,path:"/",element:Object(x.jsx)(H,{})}),Object(x.jsx)(O.a,{exact:!0,path:"/about",element:Object(x.jsx)(p,{})})]})})]})}}]),n}(a.Component);var M=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(J,{})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.e2379779.chunk.js.map