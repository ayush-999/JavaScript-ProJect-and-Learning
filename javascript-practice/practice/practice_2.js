// Q. For given array with prices of 5 items [250, 645, 300, 900, 50] all items have an offer of 10% OFF on them. change the array to store final price after applying offer.

let offerFun = (items, offer) => {
  for (let i = 0; i < items.length; i++) {
    let offerVal = items[i] / offer;
    items[i] -= offerVal 
  } 
};

let items = [250, 645, 300, 900, 50];

let offer = 10;

offerFun(items, offer);

console.log(items)