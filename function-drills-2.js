const jediName = function(firstName, lastName){
  const partOne = lastName.substring(0, 3);
  const partTwo = firstName.substring(0, 2);
  const theName = partOne + partTwo;
  return theName;
}

console.log(jediName('john', 'smith'));

const beyond = function(num){
  if(num === Infinity || num === -Infinity){
    return 'And beyond';
  } else if(num > 0){
    return 'to Infinity';
  } else if(num < 0){
    return 'to negative Infinity';
  } else if(num === 0){
    return 'Staying Home';
  }
}

console.log('this should be And beyond: ' + beyond(-Infinity));
console.log('this should be And beyond: ' + beyond(Infinity));
console.log('this should be to Infinity: ' + beyond(5));
console.log('this should be to negative Infinity: ' + beyond(-5));
console.log('this should be to staying home : ' + beyond(0));
