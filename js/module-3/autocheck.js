/*
  |============================
  | Task 19/41
  |============================
*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let resultArray = [];
//   for (let product of products) {
//     if (product[propName]) {
//       resultArray.push(product[propName]);
//     }
//   }
//   return resultArray;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

/*
  |============================
  | Task 20/41
  |============================
*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

/*
  |============================
  | Task 33/41
  |============================
*/
// Change code below this line
// function findMatches(...params) {
//   const [arr, ...restProps] = params;
//   const matches = []; // Don't change this line
//   for (let property of restProps) {
//     if (arr.includes(property)) {
//       matches.push(property);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches());
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
/*
  |============================
  | Task 41/41
  |============================
*/
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    const { potions } = this;
    return potions;
  },
  addPotion(newPotion) {
    const { potions } = this;

    const { name: newPotionName, price: newPotionPrice } = newPotion;
    for (const { name } of potions) {
      if (name === newPotionName) {
        return `Error! Potion "${newPotionName}" is already in your inventory!`;
      }
    }
    potions.push(newPotion);
    return `Potion "${newPotionName}" with price ${newPotionPrice} was added to your inventory!`;
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (name === potionName) {
        potions.splice(i, 1);
        return `Potion ${potionName} was deleted!`;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    console.log(`Changing ${oldName} to ${newName}, finding...`);
    for (let i = 0; i < potions.length; i += 1) {
      let { name } = potions[i];
      console.log(`${i + 1}.${name}`);

      if (name === oldName) {
        console.log(`${name} is finded!`);

        potions[i].name = newName;
        return `Potion ${oldName} was renamed as ${newName}!`;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  countTotalPrice() {
    let total = 0;
    const { potions } = this;
    for (const potion of potions) {
      const { price } = potion;
      total += price;
    }
    return `Total price of inventory is ${total} credits`;
  },
};
console.table(atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion("Dragon breath"));

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));

// console.log(atTheOldToad.removePotion("Speed potion"));

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.countTotalPrice());
console.table(atTheOldToad.getPotions());
