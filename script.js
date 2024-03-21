// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.body.appendChild(div);
var inputValue = window.prompt("numero")
createElement(inputValue);



function createElement(cantidad){

    var num = inputValue ;
        for (let i = 0; i < num; i++) {
            var div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "red";
            div.style.color = "white";
            div.innerHTML = "Hello";
            // div.classList.add("grid");
            // div.appendChild(div);

            document.body.appendChild(div);
        
      }
    
    

}
