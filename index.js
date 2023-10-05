const coffeeMenu = require("./coffee_data.js");

// Print array of all drinks on the menu
// Print array of just the drink names.
// use the map function

const drinkNames = (item) => {
  return item.name;
};
const coffeeNames = coffeeMenu.map(drinkNames);

console.log(coffeeNames);
console.table(coffeeNames);

//  Print array of drinks that cost 5 and under
// use filter function

const fiveAndBelow = coffeeMenu.filter((item) => {
  return item.price <= 5;
});

console.log(fiveAndBelow.map(drinkNames));
console.table(fiveAndBelow.map(drinkNames));

// Print array of drinks that are priced at an even number
// filter function

const evenValue = coffeeMenu.filter((item) => {
  return item.price % 2 === 0;
});
console.log(evenValue.map(drinkNames));
console.table(evenValue.map(drinkNames));

//Print the total if you were to order one of every drink.
// reduce function

const fullMenu = coffeeMenu.reduce((acc, currentValue) => {
  return acc + currentValue.price;
}, 0);

console.log(fullMenu);
console.table(fullMenu);

// Print an array with all the drinks that are seasonal.
// use filter function

const seasonalBeverages = coffeeMenu.filter((item) => {
  return item.seasonal;
});
console.log(seasonalBeverages.map(drinkNames));
console.table(seasonalBeverages.map(drinkNames));

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
// use map function and const for seasonalBeverages

seasonalBeverages.map((item) => {
  console.log(`${item.name} with imported beans`);
});
