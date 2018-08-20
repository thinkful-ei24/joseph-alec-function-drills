const jediName = function(firstName, lastName){
  const partOne = lastName.substring(0, 3);
  const partTwo = firstName.substring(0, 2);
  const theName = partOne + partTwo;
  return theName;
}

console.log(jediName('john', 'smith'));
