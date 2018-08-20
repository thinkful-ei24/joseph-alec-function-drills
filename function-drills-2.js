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

// console.log('this should be And beyond: ' + beyond(-Infinity));
// console.log('this should be And beyond: ' + beyond(Infinity));
// console.log('this should be to Infinity: ' + beyond(5));
// console.log('this should be to negative Infinity: ' + beyond(-5));
// console.log('this should be to staying home : ' + beyond(0));

const decodeSentence = function(str){
  const words = str.split(" ");
  console.log(words);
  let newStr = '';
  for(let word of words){
    newStr+=decode(word);
  }
  return newStr;
}

const decode = function(word){
  let countTo = letToNum(word[0]);
  if(countTo === 0){
    return ' ';
  }
  return word[countTo-1];
}


const letToNum = function(letter){
  switch(letter){
    case 'a':
      return 2;
      break;
    case 'b':
      return 3;
      break;
    case 'c':
      return 4;
      break;
    case 'd':
      return 5;
      break;
    default: return 0;
  }
}

console.log('this should be an l: ' + decode('cycle'));
console.log(decodeSentence('craft block argon meter bells brown croon droop'));
