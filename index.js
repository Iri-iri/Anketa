let yuorSurname = null;
while (true) {
  const surname = prompt("What is your surname?", "");
  if (Number(surname) || surname === null || surname === "") {
    alert("Введите корректное значение");
  } else {
    yuorSurname = surname;
    break;
  }
}

let yuorName = null;
while (true) {
  const name = prompt("What is your name?", "");
  if (Number(name) || name === null || name === "") {
    alert("Введите корректное значение");
  } else {
    yuorName = name;
    break;
  }
}

let yuorMiddleName = null;
while (true) {
  const middleName = prompt("What is your middlename?", "");
  if (Number(middleName) || middleName === null || middleName === "") {
    alert("Введите корректное значение");
  } else {
    yuorMiddleName = middleName;
    break;
  }
}

let yourAge = null;
while (true) {
  const age = prompt("What is your age?", "");
  if (!Number(age)) {
    alert("Введите корректное значение");
  } else {
    yourAge = age;
    break;
  }
}

const ageInDays = 365 * yourAge + Math.floor(yourAge / 4);
const gender = confirm("Are you a man?");

let yourGender = null;
if (gender) {
  yourGender = "мужчина";
} else {
  yourGender = "женщина";
}

let pension = null;
if (gender) {
  if (yourAge >= 65) {
    pension = "Вы на пенсии";
  } else {
    pension = `На вас еще ${65 - yourAge} лет пахать можно!`;
  }
} else {
  if (yourAge >= 55) {
    pension = "Вы на пенсии";
  } else {
    pension = `На вас еще ${55 - yourAge} лет пахать можно!`;
  }
}

alert(`Ваше ФИО: ${yuorSurname + " " + yuorName + " " + yuorMiddleName}
 Ваш возраст в годах: ${yourAge} 
 Ваш возраст в днях: ${ageInDays}
 Через 5 лет вам будет: ${+yourAge + 5}
 Ваш пол: ${yourGender}
 Вы на пенсии: ${pension}`);