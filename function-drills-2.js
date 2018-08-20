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
    default:
      return 0;
  }
}
console.log('this should be an l: ' + decode('cycle'));
console.log(decodeSentence('craft block argon meter bells brown croon droop'));



const months = function(month){
  switch(month){
    case 'January':
      return 'January has 31 days';
      break;
    case 'February':
      return 'February has 28 days';
      break;
    case 'March':
      return 'March has 31 days';
      break;
    case 'April':
      return 'April has 30 days';
      break;
    case 'May':
      return 'May has 31 days';
      break;
    case 'June':
      return 'June has 30 days';
      break;
    case 'July':
      return 'July has 31 days';
      break;
    case 'August':
      return 'August has 31 days';
      break;
    case 'September':
      return 'September has 30 days';
      break;
    case 'October':
      return 'October has 31 days';
      break;
    case 'November':
      return 'November has 30 days';
      break;
    case 'December':
      return 'December has 31 days';
      break;
    default:
      throw Error('Must provide a valid month');
  }
}

const printMonth = function(month, leapYear = false){
  if(month === 'February' && leapYear === true){
      return 'February has 29 days';
  } else {
    return months(month);
  }
}

console.log(printMonth('February', true));

const rockPaperScissors = function(num){
  if (num < 1 || num > 3){
    throw new Error("Must be a number between 1 and 3")
  }
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if ((num === 1 && randomNo === 3 )|| (num === 3 && randomNo === 2) || (num === 2 && randomNo === 1) ){
    return 'you win';
  }else if(num === randomNo){
    return 'it is a tie';
  } else {
    return 'the computer beat you';
  }
}



