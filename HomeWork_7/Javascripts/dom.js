// ფოტოს გადიდება-დაპატარავება
document.getElementById("Photo");
    
function ZoomIn() {
    let i = 0; i < Photo.length; i++;
    document.getElementById("Photo").style.width = "";
}  

  
function ZoomOut() {
    document.getElementById("Photo").style.width = "50%"
}


//ფერის შეცვლა მარტო ბოქსებზე

function ChangeColor(){
    let colors = ["red", "blue", "pink", "black","yellow","green","purple","orange", "brown", "gray"];

    let box = document.getElementById("box");
    let child = document.getElementById("child");

    child.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

//ტექსტის ჩვენება-დამალვის ფუნქციის ღილაკი   (ვერგავაკეთე)

let show = document.getElementById("show");
let hide = document.getElementById("hide");
let result = document.getElementById("result");

// function showText{
//     result.style.display = "block"
//     result.style.color = "red"
//     result.innerHTML = "heyy world";
// }
// function hideText{

// }