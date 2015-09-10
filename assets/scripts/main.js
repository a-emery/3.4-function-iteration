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
