// scope bindings
var name;// variable declaration
name = 'Fiona Adhiambo'; // variable assignment of type 'string'
console.log(name);
name = 'Fleria Kate';
console.log(name);
let fruit;

fruit = 'Mango';
console.log(fruit);
fruit = 'Pineapple';
console.log(fruit);
// Expect an exception to be thrown
//let fruit = 'Pawpaw'; z
//console.log(fruit);

//Const in action
//const PI = 3.142;
console.log(PI);
// Error warning upon reassignment of a constant
//PI = 12.32;
//console.log(PI);
// Understanding objects in js
let person = {
name: 'Ronnie Kabala',
email: 'kabalaroni@gmail.com',
gender: 'Male',
occupation: 'Student Software Engineer'
};

// Reference a value from key-value pair in person object
let jina = person.name;
let occupation = person.occupation;
console.log('My name is'+ jina + 'and I am a '+ person.occupation)
// expressions evalute to value