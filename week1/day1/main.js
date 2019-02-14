var myString = "some string content";
var index;


myString = 2345234;
console.log(myString);

var array = ['cat', 'cow'];

array[2] = 'dog';

console.log(array.push('new content'));

console.log(array, index);

for (let index = 0; index < array.length; index++) {
  console.log('running loop', index, array[index]);
}

console.log('index', index);

// for (var element in array) {
//   console.log('element ', element, array[element]);
// }

// for (var [index, element] of array.entries()) {
//   console.log('element ', element, index);
// }

// 0 hair color, 1 'eyecolor
// var person = ['brown', 'blue', 3.44, ['pizza']];

var person = {
  hair: 'brown',
  eyecolor: 'blue',
  height: 3.44,
  favorites: ['pizza'],
  key: 'this is key'
};

// for (var key in person) {
//   console.log('key is ', key, person[key]);
// }


// function sayHello(name, ...rest) {
//   var age = 89;
//   // console.log(rest)
//   // console.log('hello ' + name, person);
//   console.log(`Hello ${name}`);
  
//   person.eyecolor = 'orange';
// }

// sayHello('Jason', person.key, true, 213489234);

// const say = sayHello;

// console.log(say)
// // console.log(person);

// function delegate(name, func) {
//   console.log(func);
//   console.log(typeof name);
  
//   if (typeof func === 'function') {
//     console.log('calling func from delegate');
//     func(name);
//   }

// }

// delegate('Bob', say);


function counter() {
  var count = 0;
  // increment a number;
  function childScope() {
    count++;
    // return new value
    return count;
  }

  return childScope;
}

counter = counter();
console.log(counter());
// => 1

console.log(counter());
// => 2
console.log(counter());
// => 3
console.log(counter());
// => 4
console.log(counter());
// => 5
console.log(counter());
// => 6