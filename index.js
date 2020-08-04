let surname = prompt("What is your surname?","");
let name = prompt("What is your name?","");
let middleName = prompt("What is your middle name?","");
let age = prompt("What is your age?", "");

let ageInDays = 365 * age + Math.floor(age / 4);

let sex = confirm("You are a man?");
if (sex === true) {
    yourSex = "мужчина";
} else {
    yourSex = "женщина";
}

// if (((sex === true) && (age >= 65)) || ((sex === false) && (age >= 55))) {   
//     pension = "Вы на пенсии";
// } else {
//     pension = "Вы не на пенсии";
// }

if (sex === true) {
    if (age >= 65) {
        pension = "Вы на пенсии";
    } else {
        pension = `На вас еще ${65 - age} лет пахать можно!`;
    }
} else if (sex === false) {
    if (age >= 55) {
        pension = "Вы на пенсии";
    } else {
        pension = `На вас еще ${55 - age} лет пахать можно!`;
    }
}


alert(`Ваше ФИО: ${surname + " " + name + " " + middleName}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${ageInDays}
Через 5 лет вам будет: ${+age + 5}
Ваш пол: ${yourSex}
Вы на пенсии: ${pension}`);