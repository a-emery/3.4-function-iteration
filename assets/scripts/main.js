/*
Examples

  averagePrice()

*/

var totalPrice = 0;

items.forEach(function(item) {
  totalPrice += (item.price);
});

console.log("The average cost for the items is $" + (totalPrice / items.length).toFixed(2));

/*

Examples

*/

items.filter(function(item) {
  if (item.price >= 14 && item.price <= 18) {
  console.log(item.title + " costs $" + item.price);
}
});

items.filter(function(item) {
  if (item.currency_code === "GBP") {
  console.log(item.title + " costs \u00A3" + item.price);
}
});

items.forEach(function (item) {
  if(item.materials.indexOf('wood') > -1) {
    console.log(item.title);
  }
});

items.filter(function(item) {
  if (item.materials.length >= 8) {
  console.log(item.title + " is made of " + item.materials.length + " materials");
}
});

var madeBySellers = 0;

items.filter(function(item) {
  if (item.who_made === 'i_did') {
  madeBySellers ++;
}
});

console.log(madeBySellers);
