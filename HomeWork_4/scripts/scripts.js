// Task 1 (10 ელემენტისგან შემდგარი მასივიდან ყოველი მესამე ელემენტის ეკრანზე გამოიტანა)

let students = ["Nia","vaniko","Anna","Nick","Irakli","David","Nino", "Salome", "Goga", "Sopho"];
// students.
// console.log(students);

// Task 2 (10-დან 1-მდე რიცხვებს გამოტანა) ^^^

let numbers = [1,2,3,4,5,6,7,8,9,10];
let reversed = numbers.reverse();
console.log(numbers);


// Task 3 (ამოიღეთ 'Bob' სახელი და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე) ^^^

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
names.splice(2, 1);
names.splice(3, 1);
names.splice(6, 1);
names.splice(5, 1);
console.log(names);


// // Task 4 (შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს)
// function numberPower (number, power){
//     if (number === 5 && power === 3){
//         return 125;
//     } else {
//         return number * numberPower ( number * power );
//     }
// }
// console.log (numberPower(1))
// console.log (numberPower(5))
// ვერააააააააააააააა(((((((((((())))))))))))


// Task 6 (რიცხვის ფაქტორიალი, მაგ. 5! => 2*3*4*5 = 120, ) ^^^

function factorialCalculator(number){
    if (number === 0 || number === 1){
        return 1;
    } else{
        return number * factorialCalculator (number - 1);
    }
}
console.log(factorialCalculator(1));
console.log(factorialCalculator(2));
console.log(factorialCalculator(3));
console.log(factorialCalculator(4));
console.log(factorialCalculator(5));
    
// Task 7 (ასობგერის კაპიტალიზირება) ^^^
let text = "Javascript";
console.log(text.replace("j", "J"))