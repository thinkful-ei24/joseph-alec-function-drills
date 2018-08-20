'use strict';

const getYearOfBirth = function(age){
    if (typeof age !== 'number'){
        throw new TypeError("Must be a number");
    }
    if(age < 0){
        throw new Error('Age cannot be negative');
    }
    return 2018 - age;
}
const createGreeting = function(name, age){
    if (!name || !age){
        throw new Error ('Arguments not valid');
    }
    const yob = getYearOfBirth(age);
    return `Hi my name is ${name} and i am ${age} years old
     and I was born in ${yob}`;
}

try {
    const greeting1 = createGreeting('joseph', '44');
    console.log(greeting1);
} catch(e){
    console.log(e.message);
}
