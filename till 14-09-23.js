//premetive values are immutable

const person = {
    name : 'Prince Nishan',
    age  : 35

};

person.name = "Rahanur";

//mutable

let number = 3;
number = 4;

//we can keep function as object property

const person = {
    name : 'Prince Nishan',
    age  : 35

    getName:function(){
        return 'Prince Nishan'
    }

};

//Name value pair

const person = {
    name : 'Prince Nishan',
    age  : 35

    getName:function(){
        return 'Prince Nishan'
    }

};

const person2 = person;
person.age = 26;
console.log(person2);

//properties order are not important

const person = {
    age : 23,
    name: 'prince'
};

//we can change object properties directly

const person = {
    age : 23,
    name: 'prince'
};

person.country = 'Bangladesh';
console.log(person);

//we can use [''] in console.log

const person = {
    age : 23,
    name: 'prince'
};

person.country = 'Bangladesh';
console.log(person);

console.log(person['age']);

//for accessing a object we can use for in loop
const person = {
    age : 23,
    name: 'prince'
};

let txt = '';
for (let x in person){
    txt + = person [x];


}

console.log(txt);

//we can add new value for object

const person = {
    age : 23,
    name: 'prince'
};

let txt = '';
for (let x in person){
    txt + = person [x];

}

person.university = 'AIUB';

person.convocaction = 23;
console.log(txt);

// for deleting a property

delete person.university;
console.log(person);

//prototype:Inharit kore niye asha
/*
let a = new String("Uganga");

console.dir(a);
//out put will show 
'U'
'g'
'a'
'n'
'd'
'a'
*/

//js object display

const person = {
    name : "prince",
    age : "23",
    city : "dinajpur",

};

console.log (person);


//if we want to show the properties

const person = {
    name : "prince",
    age : "23",
    city : "dinajpur",

};

console.log (Object.values(person));

//if we want to retuen the properties as a string

const person = {
    name : "prince",
    age : "23",
    city : "dinajpur",

};

console.log (JSON.stringify(person));

//object accessor (getter)

const person = {
    name : "prince",
    age : "23",
    city : "dinajpur",
    get city() {
        return this.city;

    }
    };
console.log(person.city);//retuen Dinajpur

//object accessor (setter)

const person = {
    name : "prince",
    age : "23",
    city : "dinajpur",

    set city () {
        this.city = "Dhaka"
    }
};
person.city = "Dhaka";
console.log(person);
