/*
  |============================
  | First lesson
  |============================
*/
//Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 3 ** 5;
// console.log(result);

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// console.log(`floor >> ${Math.floor(value)}`);
// console.log(`ceil >> ${Math.ceil(value)}`);
// console.log(`round >> ${Math.round(value)}`);

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// const anotherMsg =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock";
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// console.log(anotherMsg);

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// First variant
// let weight = "88,3";
// let height = "1.75";

// const bmi = weight.replace(",", ".") / Math.pow(height.replace(",", "."), 2);
// console.log(bmi.toFixed(1)); // 28.8
// Second variant
// let weight = "88,3";
// let height = "1.75";
// weight = Number.parseFloat(weight.replace(",", "."));
// console.log(`weight >> ${weight}`);
// height = Number.parseFloat(height.replace(",", "."));
// console.log(`height >> ${height}`);
// const bmi = weight / Math.pow(height, 2);
// console.log(`Your BMI is ${bmi.toFixed(1)}`); // 28.8


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

/*
  |============================
  | Second lesson
  |============================
*/

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = Number.parseInt(Math.random() * 23);
// const mins = Number.parseInt(Math.random() * 59);
// let timeString;
// if (mins === 0) {
//   console.log(`${hours} г.`);
// } else {
//   console.log(`${hours} г. ${mins} хв.`);
// }

// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
// (null || undefined) ?? "foo"; // returns "foo"

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?".
// Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?");
// const correctAnswer = "ECMAScript";
// if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//   console.log("Правильно!");
// } else {
//   console.log(`Не знаєте? ${correctAnswer}!`);
// }

//  Напиши скрипт котрий порахує суму чисел від 1 до 10,проаускаючи парні числа та виведе у консоль результат

// let totalValue = 0;
// for (let index = 1; index <= 10; index += 1) {
//   if (index % 2 === 1) {
//     console.log(index);
//     totalValue += index;
//   }
// }
// console.log(
//   `Загальна сума непарних чисел в даному проміжку складає ${totalValue}`
// );

// Напиши скрипт який буде просити нас ввести число більше за 100, доки ми таке не введемо

//   Скористайся циклом while

// let userNumber = 0;
// const startBorderNumber = 100;

// while (userNumber <= startBorderNumber) {
//   userNumber = Number(
//     prompt(`Будь ласка, введіть число більше, ніж ${startBorderNumber}`)
//   );
// }
