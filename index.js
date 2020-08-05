const surname = prompt("What is your surname?", "");
const name = prompt("What is your name?", "");
const middleName = prompt("What is your middle name?", "");
const age = prompt("What is your age?", "");
const ageInDays = 365 * age + Math.floor(age / 4);
const gender = confirm("Are you a man?");

let yourGender = null;
if (gender) {
    yourGender = "мужчина";
} else {
    yourGender = "женщина";
}

let pension = null;
if (gender) {
    if (age >= 65) {
        pension = "Вы на пенсии";
    } else {
        pension = `На вас еще ${65 - age} лет пахать можно!`;
    }
} else {
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
Ваш пол: ${yourGender}
Вы на пенсии: ${pension}`)