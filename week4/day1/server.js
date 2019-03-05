const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log(`Mongodb connected`));

// const m = { Schema: 'this is a schema', type: 'this is a type' };

// const { Schema: schema, type } = m;

// console.log(schema, type);

// animal schema (blueprint)
const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  legs: {
    type: Number,
    required: [true, 'Leg information needed'],
    min: [0, 'You must have more than 0 legs'],
  },
  age: Number,
  isPet: {
    type: Boolean,
    default: true,
  },
});

mongoose.model('Animal', AnimalSchema);

/// animal model
// lowercase and pluralize => Animal => animals (collection)
const Animal = mongoose.model('Animal');

const animal = new Animal({
  name: 'Sarge',
  legs: 9,
  age: 35
});


animal.save()
  .then(savedAnimal => console.log(savedAnimal))
  .catch(error => {
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);

    // for (let index = 0; index < keys.length; index++) {
    //   console.log(keys[index]);
    //   errors.push(error.errors[keys[index]].message)
    // }

    console.log(errors);

  });