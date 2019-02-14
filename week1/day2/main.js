

function Person(name, items) {

  if (!(this instanceof Person)) {
    console.log(name + ' is not a person')
    return new Person(name, items);
  }
  // console.log('this is ', this);

  // const person = { name };
  this.name = name;
  this.items = items;

  // this.take = take;



  // return person;
  // return this;
}

Person.prototype.take = function take(item, target) {
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target does not have an items array');
  }

  // for (let index = 0; index < target.items.length; index++) { 
  for (const [index, currentItem] of target.items.entries()) {
    if (item === currentItem) {
      console.log('found item ', item);
      // target.items.pop(index);

      // slice => ['sand', 'gold', 'cat food'] => ['gold'] => ['sand', 'gold', 'cat food']
      // splice => ['sand', 'gold', 'cat food'] => ['gold'] => ['sand', 'cat food']
      
      target.items.splice(index, 1);

      this.items.push(item);
      console.log(target.items);
      console.log(this.items)

      return true;
    }
  }

  return false;
}



const bob = Person('Bob', ['sand', 'gold', 'cat food']);
const sally = new Person('Sally', ['phone', 'money', 'cookies']);

console.log(bob);
console.log(sally);
// [[0, 'sand'],  [1, 'gold'], [2, 'cat food']]

bob.take('phone', sally);

// interface Target {
//   items: string[];
// }

// take('gold', bob);