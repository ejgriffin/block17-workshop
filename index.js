const coffeeMenu = require("./coffee_data.js");

// Print array of all drinks on the menu
// Print array of just the drink names.
// Print array of the map function

const printNames = (item) => {
  return item.name;
};
const coffeeNames = coffeeMenu.map(printNames);

console.log(coffeeNames);
