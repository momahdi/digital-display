(this.webpackJsonpscreen=this.webpackJsonpscreen||[]).push([[0],{19:function(e,t,n){e.exports=n(46)},24:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){e.exports=n.p+"static/media/search.adf6a7e1.png"},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),s=(n(24),n(2)),l=n.n(s),o=n(13),u=n(14),d=n(15),m=n(16),h=n(18),p=n(17),v=(n(26),n(27));function g(){var e=new Date;return(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())}var f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value),n.checkFields)},n.handlechange=function(e){n.setState({displayid:e.target.value})},n.handleSubmitbtn=function(e){n.setState({text:"Connecting to Display"}),console.log("hej")},n.state={text:"",currenttime:g(),senttime:"",displaylink:"https://iot-display.herokuapp.com/display/get/",displayid:""},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;setInterval((function(){y(e.state.displaylink+e.state.displayid);var t=E.getState();if(t!==e.state.text&&void 0!==t){var n={target:{name:"senttime",value:g()}};e.handleChange(n)}n={target:{name:"text",value:t}};e.handleChange(n)}),1e4)}},{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){var e={target:{name:"currenttime",value:g()}};this.handleChange(e)}},{key:"onKeyPress",value:function(e){13===e.which&&e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h5",null,"Enter Display ID"),r.a.createElement("form",{onKeyPress:this.onKeyPress},r.a.createElement("input",{id:"input",onChange:this.handlechange,value:this.state.displayid,placeholder:"Enter ID",type:"text"}),r.a.createElement("button",{type:"button",onClick:function(t){return e.handleSubmitbtn()},className:"send"},r.a.createElement("img",{width:"35",src:n(45),alt:"could not load"}))),r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:"text "},r.a.createElement("p",null),r.a.createElement("div",{id:"text"},this.state.text)),r.a.createElement("div",{className:"currenttime "},r.a.createElement("p",null,"Current Time"),r.a.createElement("div",{id:""},this.state.currenttime)),r.a.createElement("div",{className:"senttime "},r.a.createElement("p",null,"Recieved Time"),r.a.createElement("div",{id:""},this.state.senttime)))))}}]),a}(a.Component),y=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get(t);case 3:n=e.sent,a=a=n.data.display.message.text,E.changeState(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e,t={changeState:function(t){e=t},getState:function(){return e}};return t}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.0f342a3d.chunk.js.map