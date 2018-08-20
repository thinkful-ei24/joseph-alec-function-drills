'use strict';

const createGreeting = function(name, age){
    const yearOfBirth = 2018 - age;
    return `Hi my name is ${name} and i am ${age} years old
     and I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('joseph',44);
console.log(greeting1);