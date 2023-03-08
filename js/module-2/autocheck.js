/*
  |============================
  | Task 25/32
  |============================
*/
// function getCommonElements(array1, array2) {
//   let resultArr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       resultArr.push(array1[i]);
//     }
//   }
//   return resultArr;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
/*
  |============================
  | task 32/32
  |============================
*/
function includes(array, value) {
  let result = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      result = true;
      return result;
    }
  }
  return result;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
