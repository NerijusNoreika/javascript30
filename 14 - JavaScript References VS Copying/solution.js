// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Name 1";
let name2 = "Name 2";
console.log(name, name2);
name = "Name 1 modified";
console.log(name, name2);

// Let's say we have an array
// and we want to make a copy of it.

const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;

// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!

console.log(players, team);
team[2] = "Modified";
console.log(players, team);

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way

const team2 = players.slice();
team2[0] = "Modified yet again in Team 2";
console.log(team, team2);

// or create a new array and concat the old one in

const team3 = [].concat(players);
// or use the new ES6 Spread

const team4 = [...players];
console.log(team4);
// or....

const team5 = Array.from(team);

// WITH OBJECTS: 
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object

const person = {
  name: "Nerijus Noreika",
  age: 27,
};

console.log("OBJECTS: ");
console.log();

// and think we make a copy:

const captain = person;
captain.age = 37;
console.log(person, captain);

// how do we take a copy instead?

let captain2 = Object.assign({}, person);
captain2.age = 100;
captain2.number = 1000;
console.log(captain, captain2);

// We will hopefully soon see the object ...spread

const captain3 = { ...person };
captain3.age = 1000;
console.log(captain, captain3);

// Things to note - THIS IS ONLY 1 LEVEL DEEP -
// both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.

const ner = {
  name: "Nerijus",
  age: 26,
  social: {
    twitter: "@web_nerijus",
    facebook: "nerijus",
  },
};

const ner2 = Object.assign({}, ner);
ner2.social.facebook = "Both copy and original changed";
console.log(ner, ner2);

// THIS MEANS THAT ONLY FRIST LEVEL IS COPIED AS NEW OBJECT/ARRAY. Other properties are referenced from ORIGINAL.

const ner3 = { ...ner };
ner3.social.facebook =
  "Both spread operator and Object.assign change the 2nd or deeper values";
console.log(ner, ner3);

/// How to deep copy: stringify value and then parse

const ner4 = JSON.parse(JSON.stringify(ner));
ner4.social.facebook = "Working properly";
console.log(ner, ner4);

// or use special function for it
