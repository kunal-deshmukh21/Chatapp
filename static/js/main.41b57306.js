!function(){var e,n=io(),t=document.querySelector("#textarea"),a=document.querySelector(".message__area");do{e=prompt("Please enter your name: ")}while(!e);function o(e,n){var t=document.createElement("div"),o=n;t.classList.add(o,"message");var r="\n        <h4>".concat(e.user,"</h4>\n        <p>").concat(e.message,"</p>\n    ");t.innerHTML=r,a.appendChild(t)}function r(){a.scrollTop=a.scrollHeight}t.addEventListener("keyup",(function(a){"Enter"===a.key&&function(a){var s={user:e,message:a.trim()};o(s,"outgoing"),t.value="",r(),n.emit("message",s)}(a.target.value)})),n.on("message",(function(e){o(e,"incoming"),r()}))}();
//# sourceMappingURL=main.41b57306.js.map