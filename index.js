const coffeeMenu = require("./coffee_data.js");

// Print array of all drinks on the menu
// Print array of just the drink names.
// Print array of the map function

const printNames = (item) => {
  return item.name;
};
const coffeeNames = coffeeMenu.map(printNames);

// console.log(coffeeNames);

//  Print array of drinks that cost 5 and under
// -- filter function

const fiveAndUnder = coffeeMenu.filter((item) => {
  return item.price <= 5;
});

// console.log(fiveAndUnder.map(printNames));

// Print array of drinks that are priced at an even number
// filter function

const evenPrice = coffeeMenu.filter((item) => {
  return item.price % 2 === 0;
});
// console.log(evenPrice.map(printNames));

//Print the total if you were to order one of every drink.
// reduce function

const orderTotal = coffeeMenu.reduce((acc, currentValue) => {
  return acc + currentValue.price;
}, 0);

// console.log(orderTotal);

// Print an array with all the drinks that are seasonal.
// use filter function

const seasonalDrinks = coffeeMenu.filter((item) => {
  return item.seasonal;
});
// console.log(seasonalDrinks.map(printNames));

// coffeeMenu.map(item =>{
//     console.log(`${item.name} with imported beans!`)
// })

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
// use map function and const for seasonalDrinks

seasonalDrinks.map((item) => {
  console.log(`${item.name} with imported beans`);
});
console.log(seasonalDrinks.map(printNames));
