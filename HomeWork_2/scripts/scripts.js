//1.Arrays
let planets = ["Venus","Earth", "Mars", "Jupiter","Saturn","Uranus"];
console.log(typeof planets);

//2.მასივის პირველი ელემენტის გამოტანა
console.log(planets[0]);

//3.მასივის ბოლო ელემენტის გამოტანა
console.log(planets [planets.length -1]);

//4.ფერების გამოტანა მოცემული თანმიმდევრობით
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]

console.log("1" + o[1] + " choice is " + color[0] + ".");// "1st choice is Blue ."
console.log("2" + o[2] + " choice is " + color[1] + ".");// "2nd choice is Green."
console.log("3" + o[3] + " choice is " + color[2] + ".");// "3rd choice is Red."
console.log("4" + o[0] + " choice is " + color[3] + ".");// "4th choice is Orange."
console.log("5" + o[0] + " choice is " + color[4] + ".");// "5th choice is Violet."
console.log("6" + o[0] + " choice is " + color[5] + ".");// "6th choice is Indigo."
console.log("7" + o[0] + " choice is " + color[6] + ".");// "7th choice is Yellow."

//5.About Student
let student = {
    firstName: "Nick",
    lastName: "Gabunia",
    age: 22,
    favouriteColor: "pink",
    address: { 
        city: "Tbilisi",
        street: "Vazha-Pshavela-Avenue",
    }
}
//ახალი მონაცემის დამატება
student.isMarried = false;
console.log(student.isMarried);

//მონცემის წაშლა
delete student.street;
console.log(student.street);

//არსებულ ობიექტში მონაცემების ჩანაცვლება
//  ???????