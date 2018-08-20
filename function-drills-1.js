'use strict';

const getYearOfBirth = function(age){
    return 2018 - age;
}
const createGreeting = function(name, age){
    const yob = getYearOfBirth(age);
    return `Hi my name is ${name} and i am ${age} years old
     and I was born in ${yob}`;
}

const greeting1 = createGreeting('joseph',44);
console.log(greeting1);