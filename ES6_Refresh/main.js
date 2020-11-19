//CONST & LET
//diff between let and var
let name = 'John';
console.log(name);

const person = {
  name: 'john',
  age: 33
}

person.name = 'Jack';
console.log(person)

const nums = [1, 2, 3, 4];

nums.push(5);
console.log(nums);

// ARROW FUNCTION


// function sayHello() {
//   console.log('Hello');
// }

const sayHello = () => console.log('Hello');
sayHello();

//using backticks to use template literals
const sayHello1 = (name) => console.log(`Hello ${name}`);
sayHello1('Brad');

// FOREACH
//doesn't return
const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit, index) =>
  console.log(fruit));
// MAP
//returns
const singleFruit = fruits.map((el) => el.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER
const people = [{
    id: 1,
    name: 'karen'
  },
  {
    id: 2,
    name: 'john'
  },
  {
    id: 3,
    name: 'tammy'
  }
]

const people2 = people.filter(person => person.id !== 2)

console.log(people2)
//SPREAD

const arr = [1, 2, 3]
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

console.log(arr2);

const person3 = {
  name: 'Angelo',
  age: 30
}

const newPerson = {
  ...person3,
  email: 'abc@ymail.com'
}

console.log(newPerson);
// DESTRUCTING

const profile = {
  nameFirst: 'John Doe',
  address: {
    street: '40 main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
}

// const {
//   nameFirst
// } = profile

// console.log(nameFirst)
console.log(profile)
const {
  nameFirst,
  address,
  hobbies
} = profile
console.log(nameFirst, address.street, hobbies[0]);

const {
  street,
  city
} = profile.address

console.log(street, city);

//CLASSES
class Person {
  constructor(name, age) {
    //if the constructor doesn't have any parameter then this.name = 'John will be static
    //this.name = 'John';
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }

}
console.log('Class\n\n');
const person1 = new Person();
const person2 = new Person('Tammy', 30);

console.log(person1.name);
console.log(person2.name)
console.log(person2.greet());

//SUBCLASS
class Customer extends Person {

  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }


  info() {
    return `${this.name} owes ${this.balance}.00`;
  }

}

const Customer1 = new Customer('Kevein', 32, 3000)

console.log(Customer1.name);
console.log(Customer1.info())



//MODULES