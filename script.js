// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.body.appendChild(div);
window.onload = createElement();

function createElement(cantidad){

    var num = cantidad ;
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