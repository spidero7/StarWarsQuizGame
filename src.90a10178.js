parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"OveB":[function(require,module,exports) {
"use strict";let e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.timeLeft=exports.ProgressBar=void 0,exports.timeLeft=e;const r=()=>{document.querySelector(".progress-bar").style.display="block";let r=0;exports.timeLeft=e=60;const s=e=>{return`${Math.floor(e/60)>9?`${Math.floor(e/60)}`:`0${Math.floor(e/60)}`}:${e%60>9?`${e%60}`:`0${e%60}`}`};document.querySelector(".progress-bar").innerHTML=`<div class="progress-bar-wrapper">\n        <figure class="progress-bar-lightsaber-handle"><img src="static/assets/ui/LightsaberHandle.png" alt=""></figure>\n        <div class="progress-bar-lightsaber-empty">\n          <div class="progress-bar-lightsaber-full"></div>\n        </div>\n      </div>\n      <div class="progress-bar-timer">\n        <span>Time left: ${s(e)}</span>\n      </div>`;const t=document.getElementsByClassName("progress-bar-lightsaber-full")[0],a=document.getElementsByClassName("progress-bar-timer")[0];t.style.animation="progress-bar 60s linear forwards",a.style.animation="text-color 60s linear forwards",(()=>{const t=setInterval(()=>{r+=1,exports.timeLeft=e=60-r,document.querySelector(".progress-bar-timer>span").innerHTML=`Time left: ${s(e)}`,0===e&&(clearInterval(t),document.querySelector(".progress-bar").style.display="none")},1e3)})()};exports.ProgressBar=r;
},{}],"gCSq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EndTable=exports.EndGame=void 0;var e=require("./Questions");const t=document.getElementById("end-result-p"),n=document.getElementById("end-summary"),d=(e,d,r,o)=>{t.innerText=`YOUR RESULT: ${d}`,n.innerText=`The force is strong in you, young Padawan! During 1 minute you have answered ${d}/${o} questions and computer guessed ${r}/${o}.`};exports.EndGame=d;const r=document.getElementById("end-img"),o=document.getElementById("end-correct"),s=document.getElementById("end-your-answer"),m=document.getElementById("end-computer-answer"),c=document.getElementById("save-hall-of-fame-button"),i=(e,t)=>{for(let n=0;n<e.length;n++){const d=document.createElement("div");d.id=`end-answer-row-${n}`,d.style="height: 130px; text-align: center; padding-left: 1rem; width: 100%; align-items: center; display: grid;grid-template-columns: 0.8fr 1fr 1fr 1fr;",document.getElementById("end-answers-table").appendChild(d);const r=document.createElement("div");r.id=`end-img-${n}`,document.getElementById(`end-answer-row-${n}`).appendChild(r);const o=document.createElement("img");o.src=`./static/assets/modes/${t}/${e[n].numberOfQuestion+1}.png`,o.style="object-fit: cover; max-width: 100px; max-height: 100px; border-radius: 20px",document.getElementById(`end-img-${n}`).appendChild(o);const s=document.createElement("div");s.id="end-correct",document.getElementById(`end-answer-row-${n}`).appendChild(s),s.innerText=`${e[n].answer}`;const m=document.createElement("div");m.id="end-your-answer",document.getElementById(`end-answer-row-${n}`).appendChild(m),m.innerText=`${e[n].user}`;const i=document.createElement("div");i.id="end-computer-answer",document.getElementById(`end-answer-row-${n}`).appendChild(i),i.innerText=`${e[n].computer}`,e[n].answer===e[n].user?m.style="color: green; font-weight: 600":m.style="color: red; font-weight: 600;",e[n].answer===e[n].computer?i.style="color: green; font-weight: 600":i.style="color: red; font-weight: 600;",c.onclick=function(){for(let t=0;t<=e.length+2;t++){const e=document.getElementById("end-answers-table");e.removeChild(e.childNodes[0])}}}};exports.EndTable=i;
},{"./Questions":"t7KV"}],"t7KV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Questions=exports.AnswersRaport=void 0;var e=require("./ProgressBar"),t=require("./GameOver");let s=[];exports.AnswersRaport=s;const n=async(n,a)=>{n=l(a,n),exports.AnswersRaport=s=[];const c=document.getElementById("swquiz-app"),h=document.getElementsByClassName("loader")[0],g=document.getElementsByClassName("question-finish")[0],v=document.getElementsByClassName("question-image__wrapper")[0],f=document.getElementsByClassName("question-content__wrapper")[0],y=document.getElementsByClassName("main-question__wrapper")[0],w=document.getElementsByClassName("question-image__image")[0],E=document.getElementsByClassName("p-content--item"),b=document.getElementsByClassName("question-content--item"),k=document.getElementsByClassName("question-api-error__wrapper")[0],L=(document.getElementsByClassName("question-api-error--content")[0],document.getElementsByClassName("p-content--header-question")[0]),x=document.getElementsByClassName("end-game")[0],C=document.getElementsByClassName("p-content--computer-question")[0];document.getElementsByClassName("question-content--computer")[0];k.style.display="none",y.style.display="flex",h.style.display="flex",v.style.display="none",f.style.display="none",c.style.backgroundColor="rgba(0,0,0,0.5)";let q=0,T=0,B={good:"",bad:[]},M=[],N=[],O=[],_=0,j=0,S=!1,D=0,W=0;switch(a){case"people":L.innerText="MODE: Who is this character? ";break;case"starships":L.innerText="MODE: What kind of starship is this? ";break;case"vehicles":L.innerText="MODE: What kind of vehicle is this? ";break;default:L.innerText="MODE: Who is this character? "}var{responseOk:I,responseStatus:A,StarWarsDataCount:P,StarWarsDataLength:Q}=await r(n,N,M);async function R(e){if(p(b),C.innerText="",W++,e>=0&&e<=3){let t={answer:"",user:"",computer:"",numberOfQuestion:0};b[0].removeEventListener("click",$,!1),b[1].removeEventListener("click",G,!1),b[2].removeEventListener("click",z,!1),b[3].removeEventListener("click",J,!1);let{computerChoise:n,computerPoint:a}=u(B);T+=a,t.answer=b[_].innerText,t.user=b[e].innerText,t.numberOfQuestion=D,t.computer=b[n].innerText,s.push(t),C.innerText=`${t.computer}`,a?C.classList.add("answer-good"):C.classList.add("answer-bad"),e==_?q+=1:b[e].classList.add("answer-bad"),b[_].classList.add("answer-good"),b[e].classList.add("answer-selected"),await o(1e3),b[e].classList.remove("answer-selected"),b[_].classList.remove("answer-good"),b[e].classList.remove("answer-bad"),b[n].classList.remove("answer-computer"),C.classList.remove("answer-bad"),C.classList.remove("answer-good"),C.innerText="",p(b),b[0].addEventListener("click",$),b[1].addEventListener("click",G),b[2].addEventListener("click",z),b[3].addEventListener("click",J)}let{answer:n,selected:r}=d(M,O);if(-1!=n){await o(50),D=n.good,w.style.backgroundImage=`url(./static/assets/modes/${a}/${n.good+1}.png)`,await o(250);let e=m();E[e.good].innerText=M[n.good],E[e.bad[0]].innerText=M[n.bad[0]],E[e.bad[1]].innerText=M[n.bad[1]],E[e.bad[2]].innerText=M[n.bad[2]],B.good=e.good,B.bad=[e.bad[0],e.bad[1],e.bad[2]],_=e.good}else g.style.display="flex",v.style.display="none",f.style.display="none",await o(4e3),(0,t.EndGame)(s,q,T,W),(0,t.EndTable)(s,a),g.style.display="none",x.style.display="flex",q=0,T=0,exports.AnswersRaport=s=[],s.length=0,O.length=0,O=[],b[0].removeEventListener("click",$,!1),b[1].removeEventListener("click",G,!1),b[2].removeEventListener("click",z,!1),b[3].removeEventListener("click",J,!1)}function $(){R(0)}function G(){R(1)}function z(){R(2)}function J(){R(3)}I&&(j=Math.ceil(P/Q)),i(n,I,j,a,N,M),R(),(0,e.ProgressBar)(),b[0].addEventListener("click",$),b[1].addEventListener("click",G),b[2].addEventListener("click",z),b[3].addEventListener("click",J),h.style.display="none",v.style.display="block",f.style.display="block",c.style.backgroundColor="transparent";const U=setInterval(()=>{e.timeLeft<=0?((0,t.EndGame)(s,q,T,W),(0,t.EndTable)(s,a,s),S=!0,y.style.display="none",x.style.display="flex",localStorage.setItem("mostRecentScore",q),localStorage.setItem("QuestionsTotal",W),document.getElementById("hall-of-fame-save").reset(),clearInterval(U),q=0,T=0,exports.AnswersRaport=s=[],s.length=0,O.length=0,O=[],b[0].removeEventListener("click",$,!1),b[1].removeEventListener("click",G,!1),b[2].removeEventListener("click",z,!1),b[3].removeEventListener("click",J,!1)):S=!1},1e3)};function a(e,t){c(require(l(t,e,!0)),[],"fields","name")}function o(e){return new Promise(t=>{setTimeout(()=>{t("resolved")},e)})}async function r(e,t,s){let n,a,o,r;const i=new AbortController,l=i.signal;return r=setTimeout(()=>{i.abort(),a=-1},5e3),await fetch(e,{method:"get",signal:l}).then(async e=>{if(e.ok){let t=e.json();return o=t,n=!0,a=e.status,t}}).then(e=>{o=e;for(const s of e.results)t.push(s)}).catch(()=>{alert("Ups... something wrong with Rest API"),200!=a&&(n=!1)}),n?(c(t,s,"name"),{responseOk:n,responseStatus:a,StarWarsDataCount:o.count,StarWarsDataLength:o.results.length}):{responseOk:!1,responseStatus:a,StarWarsDataCount:0,StarWarsDataLength:0}}async function i(e,t,s,n,a,i){let l;if(t)for(let c=1;c<s;c++)r(l=`https://swapi.dev/api/${n}/?page=`+(c+1),a,i),await o(800);else{let e;switch(n){case"people":c(e=require("../../swapi-json-server/people.json"),i,"fields","name");break;case"starships":c(e=require("../../swapi-json-server/starships.json"),i,"fields","starship_class");break;case"vehicles":c(e=require("../../swapi-json-server/vehicles.json"),i,"fields","vehicle_class");break;default:c(e=require("../../swapi-json-server/people.json"),i,"fields","name")}}}function l(e="people",t="",s=!1){let n;if(s)n="people"==e||"vehicles"==e||"starships"==e?`../../swapi-json-server/${e}.json`:"../../swapi-json-server/people.JSON";else switch(e){case"people":n=t+"/people/";break;case"starships":n=t+"/starships/";break;case"vehicles":n=t+"/vehicles/";break;default:n=t+"/people/"}return n}function c(e=[],t=[],s="",n=""){let a=s,o=n;for(let r=0;r<e.length;r++)s.length>0?n.length>0?t[r]=e[r][a][o]:t[r]=e[r][a]:t[r]=e[r];return t}function d(e,t=[]){let s,n=!1,a=[],o=!1,r=e.length-1;if(e.length>t.length&&e.length>0){do{const e=Math.floor(Math.random()*(r-0+1)+0);n=!1;for(let s of t)s==e&&(n=!0);n||(t.push(e),s=e)}while(n);do{o=!1;const e=Math.floor(Math.random()*(r-0+1)+0),t=Math.floor(Math.random()*(r-0+1)+0),n=Math.floor(Math.random()*(r-0+1)+0);s!=e&&s!=t&&s!=n&&e!=s&&e!=t&&e!=n&&t!=s&&t!=e&&t!=n&&n!=s&&n!=e&&n!=t&&(o=!0,a.push(e),a.push(t),a.push(n))}while(!o);return{answer:{good:s,bad:[a[0],a[1],a[2]]},selected:t,questions:e}}return{answer:-1,selected:t,questions:e}}function m(){const e=[0,1,2,3],t=Math.floor(4*Math.random()+0);let s=e.indexOf(t);return e.splice(s,1),{good:t,bad:e}}function u(e){let t=e.good;e.good,e.bad;const s=Math.floor(Math.random()*(t-0+1)+0);let n;return{computerChoise:s,computerPoint:n=s==e.good?1:0}}function p(e){for(let t=0;t<e.length;t++)e[t].classList.remove("answer-selected"),e[t].classList.remove("answer-good"),e[t].classList.remove("answer-bad"),e[t].classList.remove("answer-computer")}exports.Questions=n,module.exports={Questions:n,randomOption:m,selectQuestion:d};
},{"./ProgressBar":"OveB","./GameOver":"gCSq"}],"tHAm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleRulesButtonClick=o,exports.saveHighScore=h,exports.updateText=a;var e=require("./MainMenu");const t={people:{title:"Who is this character?",Rules:"You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which Star Wars character is shown in the picture on the left.",Src:'<img src="./static/assets/modes/people/35.png" alt="random character" class="img-rules">'},vehicles:{title:"Do you recognize this vehicle?",Rules:"You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which Star Wars vehicle is shown in the picture on the left.",Src:'<img src="./static/assets/modes/vehicles/4.png" alt="random character" class="img-rules">'},starships:{title:"Do you recognize this starship?",Rules:"You have one minute (1m) to answer as many questions as possible. During the game you need to choose from available options which Star Wars starship is shown in the picture on the left.",Src:'<img src="./static/assets/modes/starships/13.png" alt="random character" class="img-rules">'}},s=document.querySelectorAll(".main-menu--option");function o(e){let t=document.querySelectorAll(".main-menu--option");"Rules"===e.target.textContent?e.target.textContent="Hall of fame":"Hall of fame"===e.target.textContent&&(e.target.textContent="Rules"),t.forEach(e=>{e.classList.contains("main-menu--selected")&&a(e.id)})}function a(e){const s=document.querySelector(".rules-head"),o=document.querySelector(".rules"),a=document.querySelector(".hall-of-fame"),n=document.querySelector(".head-img-rules");let r=[];switch(e){case"people":r=JSON.parse(localStorage.getItem("highScoresPeople"))||[];break;case"vehicles":r=JSON.parse(localStorage.getItem("highScoresVehicle"))||[];break;case"starships":r=JSON.parse(localStorage.getItem("highScoresStarship"))||[]}n.innerHTML=t[e].Src,s.textContent=t[e].title,o.innerHTML="Hall of fame"===a.textContent?'<div><h2>Mode rules:</h2><p class="rule-on-change">'+t[e].Rules+"</p></div>":r.length?"<div><h2>Mode ranking:</h2><table><tr><th>Place</th><th>Player</th><th>Answered</th><th>Percents</th></tr>"+r.filter((e,t)=>t<5).map((e,t)=>{return"<tr><td>"+(t+1)+'</td><td><div style="overflow:hidden">'+e.name+"</div></td> <td>"+e.score+"/"+e.max_score+"</td><td>"+e.scorePercents.toFixed(2)+"%</td></tr>"}).join(" ")+'</table><div class="all-ranking-btn-flex"><button class="btn" id="all-ranking-btn">See all</button></div></div>':"<div><h2>Mode ranking:</h2><p>The leadership is empty</p></div>","Hall of fame"!==a.textContent&&r.length&&l(r)}s.forEach(e=>{e.classList.contains("main-menu--selected")&&a(e.id)});const n=document.getElementById("Hall-of-fame-modal");let r=document.getElementsByClassName("close")[0];function l(e){document.getElementById("all-ranking-btn").addEventListener("click",()=>{c(e)})}function c(e){document.querySelector(".modal-body").innerHTML="<div><table><tr><th>Place</th><th>Player</th><th>Answered</th><th>Percents</th></tr>"+e.map((e,t)=>{return"<tr><td>"+(t+1)+'</td><td><div style="overflow:hidden">'+e.name+"</div></td> <td>"+e.score+"/"+e.max_score+"</td><td>"+e.scorePercents.toFixed(2)+"%</td></tr>"}).join(" ")+"</table></div>",n.style.display="block"}r.addEventListener("click",()=>n.style.display="none"),window.addEventListener("click",e=>{e.target===n&&(n.style.display="none")});const i=document.getElementById("player-name-hall-of-fame");function h(t){t.preventDefault(),i.value||(i.value="noname");const s={score:localStorage.getItem("mostRecentScore"),max_score:localStorage.getItem("QuestionsTotal"),scorePercents:localStorage.getItem("mostRecentScore")/localStorage.getItem("QuestionsTotal")*100,name:i.value};switch(e.category){case"people":d("highScoresPeople",s);break;case"vehicles":d("highScoresVehicle",s);break;case"starships":d("highScoresStarship",s)}}function d(e,t){const s=JSON.parse(localStorage.getItem(e))||[];if(localStorage.getItem(e)){const e=s.filter(e=>i.value===e.name);if(e.length>0){if(e[0].scorePercents<t.scorePercents){e[0].score=localStorage.getItem("mostRecentScore"),e[0].max_score=localStorage.getItem("QuestionsTotal"),e[0].scorePercents=localStorage.getItem("mostRecentScore")/localStorage.getItem("QuestionsTotal")*100;const t=s.findIndex(e=>e.name==i.value);s.splice(t,1),s.push(e[0])}}else s.push(t)}else s.push(t);s.sort((e,t)=>t.scorePercents-e.scorePercents);let o=document.querySelector(".end-game"),a=document.querySelector("#rules__wrapper");localStorage.setItem(e,JSON.stringify(s)),o.style.display="none",a.style.display="inline",c(s)}
},{"./MainMenu":"ecPM"}],"ecPM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.category=void 0,exports.handleModeUpdate=o;var e=require("./HallOfFameAndMode"),t=require("./App");const r=document.querySelectorAll(".main-menu--option");let a="people";function o(o){if(t.acceptingMode){if(!o.target.classList.contains("main-menu--selected")){for(var n=0;n<r.length;n++)r[n].classList.remove("main-menu--selected");o.target.classList.add("main-menu--selected"),exports.category=a=o.target.innerText.toLowerCase()}(0,e.updateText)(a)}}exports.category=a,r.forEach(e=>e.addEventListener("click",o));
},{"./HallOfFameAndMode":"tHAm","./App":"rDxQ"}],"rDxQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.acceptingMode=exports.App=void 0;var e=require("./Questions"),t=require("./MainMenu"),o=require("./HallOfFameAndMode");let n=!0;exports.acceptingMode=n;const s=({options:s})=>{const r=document.getElementsByClassName("play-the-game")[0],a=document.getElementById("rules__wrapper");r.addEventListener("click",()=>{(0,e.Questions)(s.swApiBaseUrl,`${t.category}`),a.style.display="none",exports.acceptingMode=n=!1}),document.querySelector(".hall-of-fame").addEventListener("click",o.handleRulesButtonClick),document.getElementById("save-hall-of-fame-button").addEventListener("click",e=>{(0,o.saveHighScore)(e),exports.acceptingMode=n=!0})};exports.App=s;
},{"./Questions":"t7KV","./MainMenu":"ecPM","./HallOfFameAndMode":"tHAm"}],"H99C":[function(require,module,exports) {
"use strict";require("../node_modules/regenerator-runtime/runtime");var e=require("./app/App"),r=require("./app/ProgressBar");const i=1e3,p="https://swapi.dev/api",s=12e4;window.onload=(()=>(0,e.App)({options:{swApiBaseUrl:p,quizMaxTime:12e4}}));
},{"../node_modules/regenerator-runtime/runtime":"KA2S","./app/App":"rDxQ","./app/ProgressBar":"OveB"}]},{},["H99C"], null)
//# sourceMappingURL=src.90a10178.js.map