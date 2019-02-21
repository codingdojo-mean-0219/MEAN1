function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: () => 'cover the floor!'
        }
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`${item} is out of stock`));
      }
  
    }, deliveryTime);
  });
}

function receivedItem(item) {
  console.log(`Received ${item.product}. Time to ${item.directions()}`);
}


const paint = orderSupplies('paint');
const tarp = orderSupplies('tarp');
const brush = orderSupplies('brush');
const roller = orderSupplies('roller').catch(console.log);

Promise.all([tarp, paint, brush, roller])
  .then(items => items.forEach(receivedItem))
  .catch(error => console.log(error.message));


// tarp
//   .then(receivedItem)
//   .then(() => paint)
//   .then(receivedItem)
//   .then(() => brush)
//   .then(receivedItem)
//   .catch(console.log);
 
// orderSupplies('paint', function (item) {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });


// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);

//   havePaint = true;
// });

// orderSupplies('brush', function (item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function () { 
//       console.log('....checking for paint...');

//       if (havePaint) {
//         receivedItem(item);
//         clearInterval(timer);
//       }
//     }, 50);
//   }
// });


// orderSupplies('brush', handleBrush);

// function handleBrush(item) {
//   console.log('......checking for paint.....', item);
//   if (havePaint) {
//     return receivedItem(item);
//   }

//   setTimeout(handleBrush, 50, item);
// }



// const items = ['tarp', 'paint', 'brush'];

// function order(products) {
//   const received = [];

//   for (let index = 0; index < products.length; index++) {
//     const product = products[index];

//     console.log(`About to order ${product} at index ${index}`);

//     orderSupplies(product, function (item) {
//       received[index] = item;
//       console.log('this is the item', index, received);

//       if (received.filter(i => i).length === products.length) {
//         received.forEach(receivedItem);
//       }
//     });
//   }
// }

// order(items);


// const paint = new Promise((resolve, reject) => {
//   orderSupplies('paint', resolve);
// });
// const brush = new Promise((resolve, reject) => {
//   orderSupplies('brush', resolve);
// });
// const tarp = new Promise((resolve, reject) => {
//   orderSupplies('tarp', resolve);
// });


// tarp
//   .then(receivedItem)
//   .then(() => paint)
//   .then(item => {
//     receivedItem(item)
//   })
//   .then(() => brush)
//   .then(item => receivedItem(item))
//   .catch(error => console.log(error));
