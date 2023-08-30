export function calculateTotal (items, tax) {

  let number = 0;

  for (let item of items) {
    if (item.taxable) {
      if (tax<0) {
        tax = Math.abs(tax);
      }
      number += item.price + (item.price * tax);
    } else {
      number += item.price;
    }
  }

  return number;

}

// let items = [
//   {
//     price: 100,
//     taxable: false
//   },
//   {
//     price: 50,
//     taxable: false
//   },
//   {
//     price: 250,
//     taxable: true
//   }
// ];

// let tax = 0.0975;

// console.log(calculateTotal(items, tax));
