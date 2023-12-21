// Task 1 , 2 , 3 , 4 . ვერააა

let num1 = prompt("ჩაწერეთ რიცხვი")
let equal = "square"

let square = (num1, equal)
if (num1) {
    return num1 * equal
}

console.log(square)
// ვერ გავიგეეეეე(((((((((((((((((())))))))))))))))))


// Task 5

let vegetables = "carrot";
let vegetables2 = "broccoli";
let vegetables3 = "onion";

switch (vegetables){
    case "carrot":
        alert("Hello!")
    break;
    case "broccoli":
        alert("Welcome!");
    break;
};

switch (vegetables2){
    case "carrot":
        alert("Hello!")
    break;
    case "broccoli":
        alert("Welcome!");
    break;
};

switch (vegetables3){
    case "broccoli":
        alert("Hello!");
        break;
    case "carrot":
        alert ("Welcome!");
        break;
    default:
        alert ("Neither!");
}

// Task 6
let action = "move";

switch (action){
    case "move":
        alert("you're moving!");
        break;
    case "jump":
        alert("you're jumping!");
        break;
    case "run":
        alert("you're running!");
        break;
    default:
        alert("invalid action.");
        break;
};