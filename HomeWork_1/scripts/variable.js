let userInputName = prompt ("ჩაწერეთ თქვენი სახელი");
let userLastName = prompt ("ჩაწერეთ თქვენი გვარი");
let userDateOfBirth = prompt ("ჩაწერეთ თქვენი დაბადების წელი");
let userPlace = prompt ("ჩაწერეთ თქვენი საცხოვრებელი ადგილი");
const currentYear = 2023;
let userAge = currentYear - userDateOfBirth;
alert("გამარჯობა, " + userInputName + " " + userLastName + "! მიხარია, რომ უკვე " + userAge + " წლის ხარ და " + userPlace + "-ში ცხოვრობ!");