
const numArray = [99, 23, 253, 488];
// function square(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const sqr = array[index] * array[index];
//     console.log('looping ', index, array[index], sqr);

//     results.push(sqr);
//   }

//   return results;
// }

// function add(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const added = array[index] + array[index];
//     console.log('looping ', index, array[index], added);

//     results.push(added);
//   }

//   return results;
// }


function map(array, callback) {
  const results = [];
  console.log(callback)
  for (let index = 0; index < array.length; index++) {
    // const added = array[index] + array[index];
    // console.log('looping ', index, array[index], added);
    const result = callback(array[index], index, array);

    console.log('result is ', result);

    results.push(result);
  }

  return results;
}

// function addTwoValues(num1, num2) {
//   return num1 + num2;
// }


// // console.log(square(numArray));
// console.log(map(numArray, currentValue => currentValue + currentValue));
// console.log(map(numArray, currentValue => currentValue * currentValue));

// const mult = x => y => y * x;

// const mult1 = function (x) {
//   return function (y) {
//     return y * x;
//   }
// }

// console.log('before');

// function sayHello(name) {
//   setTimeout(function () {
//     console.log(`Hello ${name}`);
//    }, 3000);
// }

// sayHello('Bob');

// console.log('after');

function getThingsFromDB(query, callback) {
  
  return setTimeout(function () {
    const data = ['thing1', 'thing2', 'thing3'];
    // console.log('callback', callback);

    callback(data);
   }, 1500);

}


getThingsFromDB('select * from things;', function (things) {
  console.log('in callback in the future!!!', things);

  things.forEach(thing => console.log('I got a thing! ' + thing));
});


// console.log('things ', things);