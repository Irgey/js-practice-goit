/*
  |============================
  | First lesson
  |============================
*/

// Створіть масив genres з елементами Jazz і Blues
//   Додайте 'Rock&roll' у кінець масиву
//   Виведіть у консоль перший елемент масиву
//   Виведіть у консоль останній елемент масиву.
//   Код має працювати для масиву довільної довжини.
//   Вставте 'Contry' та 'Reggie' на початок масиву

// const genres = ["Jazz", "Blues"];
// genres.push("Rock&roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// genres.unshift("Contry", "Reggie");
// console.log(genres);
// Привіт
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються в змінній величин у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = "8 11";
// const valuesArray = values.split(" ");
// const result = Number(valuesArray[0]) * Number(valuesArray[1]);
// console.log(result);

// Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
// і виводить його в консоль.
// Методи split reverse join

// const stringEl = "   Welcome to the future       ";
// const textArray = stringEl.split(" ");
// let result = "";
// for (let i = textArray.length - 1; i >= 0; i -= 1) {
//   result += textArray[i] + " ";
// }
// for (let i = 0; i < textArray.length; i += 1) {
//   result = textArray[i] + result;
// }
// for (let text of textArray) {
//   result = text + " " + result;
// }
// console.log(result.trim());

/*
  |============================
  | Second lesson
  |============================
*/
//Написати функцію, яка буде перевіряти чи є в масиві число 4 і повертати новий масив з цими четвірками.
//Якщо  в масиві є число 10, то функція повертає рядок 'В цьому масиві є число 10'.

// function filterArray(arr) {
//   if (arr.includes(10)) {
//     return `В цьому масиві (${arr}) є число 10`;
//   }

//   const resultArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === 4) {
//       resultArray.push(arr[i]);
//     }
//   }
//   return resultArray;
// }
// console.log(filterArray([2, 34, 55, 67, 4, 14, 10, 4, 45.98, 4]));
// console.log(filterArray([4, 6, 8, 2, 9, 4, 4, 78, 12, 11, 6, 4, 4]));

//Рекурсія масивів
// Написати фунцію,яка буде рахувати суму чисел у масиві навіть,якщо в середині замість чисел інші масиви.

/*
  |============================
  | Рекурсія
  |============================
*/

// function sumCount(arr) {
//   let total = 0;
//   for (let number of arr) {
//     if (Array.isArray(number)) {
//       const miniResult = sumCount(number);
//       total += miniResult;
//       continue;
//     }
//     total += number;
//   }
//   return total;
// }

// console.log(sumCount([[1, 3], 2, 5]));

// Напиши функцію для гри в Бінго. Гравцю даються рандомні числа,які він збирає(в масив).
//Для цього треба записати число в змінну.
//Якщо гравець отримав число,яке в нього є,то він його не може взяти другий раз і функція викликає сама себе знову.
//Коли гравець збирає числа від 1 до 5,то він перемагає і функція повертає рядок 'БІНГО' , масив очищається і фунція більше себе не викликає.
// Рандомні числа исла отримуються за допомогою допоміжної функції RandomNumber.
// function randomNumber(){
// return (Math.random() * (5 - 1) + 1).toFixed(0)
// }

// let playerDesk = [];
// function bingoGame(){
//     console.log(`Додаємо число <число>`);
//     console.log(`БІНГО! `);
//     console.log('Таке число вже є!');
// }
// bingoGame()
