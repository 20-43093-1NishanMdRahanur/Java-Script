#comments

/*
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(sum);
*/

#let keyward

declaring let twice

let x = "John Doe";

let x = 0;

function scope with let

var x = 5;
function sleep(){

}

sleep();

function scope with block scope

var x = 5;
function sleep(){

}

if (a = b){

}
sleep();

block scope:with global scope

let x = 7;
if (true){

let x = 6;
console.log(x);

}

console.log(x);

#hoising(var)

carName = "Volvo";  

var carName;
console.log(carName);


#let hoisting

carName = "Volvo";  
let carName;
console.log(carName);


#Difference between let and const

const a = 5;

a = 7;//value can reassign

//for let

let a;

a = 5;//we can declare and assign value for let


#array using const

const a = [1, 2, 3, 4];



const b = 5;


#operators

let x = 5 + 5;
let y = "5" + 5;
let z = "hello" + 5;

console.log(x);//return number
console.log(y);//return string
console.log(z);//return string+num

##type of operator

let x = 5 + 5;
let y = "5" + 5;
let z = "hello" + 5;

console.log(typeof x);//return number
console.log(typeof y);//return string
console.log(typeof z);//return string

// using name value pair
let x = 5;
let y = 6;
let z = 7;

let myObject = {x : 5, y : 6, z : 7};


//data type

let x = 5;
let y = 6;
let z = 7;

let myObject = {x : 5, y : 6, z : 7};

console.log(typeof x);


##function

function sleep(){
console.log("Im working from morning");

sleep();


//dynamic

function sleep(name){
console.log(name + "is working from morning");
}


sleep(Rahanur);
sleep(Nishan);
sleep(prince);


//

/*let age = prompt ("what is your age?");

if (age>10 && age<20){
    console.log("Your age is lies between 10 and 20");
}
else {
    console.log("your age doesnot lies between 10 and 20")

}*/

//Question no
/*
let age = prompt ("what is your age?");
switch(age){
    case '12':
        console.log("your age is 12");
        break;

        case '13':
            console.log("your age is 13");
            break;

            case '14':
                console.log("your age is 14"); 
                break;

                case '15':
                console.log("your age is 15");
                break;

                default:
                console.log("your age is time to married")

}
*/

//problem divisible by 2 or 3
/*
let age = prompt ("what is your number?");
num = Number.parseInt(age);
if (num % 2 == 0 && num % 3 ==0){
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not devisibale by 2 or 3")
}
*/


//problem number 3
/*
let age = prompt ("what is your number?");
num = Number.parseInt(age);
if (num % 2 == 0 )
{
    console.log("your number is divisible by 2")


}
else(number % 3 == 0)
{
    
    console.log("your number is  devisibale by 3")
}

*/


//problem 4
/*
let age = 18;
let a = age > 18 ? "You can drive " : "You can not drive" ;
console.log(a);
*/
/*
const cars =["sadi", "volvo", "bmw"];
cars[0] = "audi";
cars.push("toyota");

console.log(cars);

*/


//let hoisting
/*
carName = "Volvo";
var carName;
console.log(carName);
*/
//objects
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

//console.log(person.firstName);
//console.log(person['lastName']); 

person.age = 31;
person['lastName'] = "Smith";

console.log(person.age);
console.log(person.lastName);

*/

//function
/*
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(sum);
*/

const person = {
    firstName:"Jhon",
    lastName:"Doe",
    Id:5566,
    fullName : function (){
        return this.firstName + " " + this.lastName;

    },
    getFullName: function() {
        return this.fullName();
    }
};

console.log(person.getFullName());