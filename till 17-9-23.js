/*
const Prince = {
    firstName:'prince',
    lastname:'Nishan',
    age:35,
    fullName: function () {
        return this.firstName + ' ' + this.lastname
    }

};


const Sakib = {
    firstName:'Sakib',
    lastname:'hasan',
    age:32,
    fullName: function () {
        return this.firstName + ' ' + this.lastname
    }

};
*/

//using constructor as blue print of a person
/*
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {

        return this.firstName + ' ' + this.lastname
    }
  }

  const prince = new Person('prince', 'Nishan', 23);
  const sakib = new Person('sakib', 'hasan', 75);
  const riyad = new Person('Mahmudullah', 'riyad', 37);

  console.log(prince);

  //console.log(sakib.fullName());
  //console.log(riyad);
*/

//we can not change or add any value outside the constructor 
/*
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {

        return this.firstName + ' ' + this.lastname
    }
  }

  const prince = new Person('prince', 'Nishan', 23);
  const sakib = new Person('sakib', 'hasan', 75);
  const riyad = new Person('Mahmudullah', 'riyad', 37);

  Person.country = 'Bangladesh';
  console.log(prince);
//it will give an error
*/

//we can use prototype and dir function
/*
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {

        return this.firstName + ' ' + this.lastname
    }
  }

  const prince = new Person('prince', 'Nishan', 23);
  const sakib = new Person('sakib', 'hasan', 75);
  const riyad = new Person('Mahmudullah', 'riyad', 37);

  Person.prototype.country = 'Bangladesh';
  console.dir(Person);

  //it will show the console prototype as Bangladesh

*/

/*

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {

        return this.firstName + ' ' + this.lastname
    }
  }

  const prince = new Person('prince', 'Nishan', 23);
  const sakib = new Person('sakib', 'hasan', 75);
  const riyad = new Person('Mahmudullah', 'riyad', 37);


  const rifa = new String ('rifa');

  console.dir(rifa);

  console.log(rifa.toUpperCase());

String.prototype.coding = function(){
    return 'doing todays task';
}

const x = "Bangladesh";

console.log(x.coding());//x is a string so it will go to 
//String prototype can find todays task
//we dont need to use any buildin function
//we have to create new prototype

*/

//an array
/*
const numbers = [1, 2, 3, 4, 5];

for (let i = 0 ; i < numbers.length; i++) {
    console.log(numbers[i]);
}
*/
//an object
/*
const numbers = {
    one: 1,
    two: 2,
    three: 3
};

console.dir(numbers);
*/

//array
/*
const numbers = {
    one: 1,
    two: 2,
    three: 3
};

const nums = [1, 2, 3];
comsole.dir(nums);

*/
// iterable
/*
const numbers = {
    one: 1,
    two: 2,
    three: 3
};

const nums = [1, 2, 3];
comsole.dir(nums);

for (let n of numbers) {
    console.log(n);
}

*/

//making an object iterator
/*
const myNumbers = {};

myNumbers[Symbol.iterator] = function() {
    let n = 0 ;
    let done = false;
    return {
        next(){
            n += 10;
            if (n == 100) {done = true}

            return{
                value: n,
                done: done
            }

        }
    }
}

for (let num of myNumbers) {
    console.log(num);
}

*/

//create a set
/*
const letters = new Set(["a","b","c"]);

console.log(letters);
*/

//

/*
const letters = new Set(["a","b","c"]);

console.log(letters.values());

*/

//return a key value pair if name value absent
//retuens vale value pair

/*
const a = {
    firstName: 'Prince',
    lastName:'Nishan'
}

console.log(Object.entries(a));

*/

// functon definaton
/*
 function sleep() {
    console.log('I am working');

 }


a * b ;

sleep();
*/

// function expression 

/*
const a = function sleep() {
    console.log('I am working');

 }


a();

*/
//
/*
function myFunction(a, b) {
    console.log("hello");

}

//const result = myFunction(3, 4);
console.log(typeof myFunction);
*/
//arrow function
/*
const x = function(x, y) {
    return true;
}

const x = (x, y) => x * y;

*/

// function peramiter
/*
C

// js function doesnt check the type of the peramiters

function a (x, y) {
    return x * y;
}

a('prince', 23);//strinf and number both will receive

*/

// js function doesnt check the number of peramiters
/*
function a (x, y) {
    return x * y;
}

console.log(a(23, 5, 10, 7)); //it will consider 23 as x 5 as y

*/

function a(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(a(3, 7, 8, 9));



