// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.body.appendChild(div);
window.onload = createElement(5);
const caja = document.getElementById("caja");
const inputValue= caja.value;
function createElement(cantidad){

    var num = inputValue ;
        for (let i = 0; i < num; i++) {
            var div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "red";
            div.style.color = "white";
            div.innerHTML = "Hello";

            document.body.appendChild(div);
        
      }

}