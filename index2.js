// Jedi Name

'use strict';

function jediName(firstName, lastName) {
  return  lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Harry', 'Potter'));


// To infinity

function beyond(num){
  if (num === Infinity || num === Number.NEGATIVE_INFINITY){
    console.log('And Beyond');
  }
  if (Infinity > num && num > 0){
    console.log('To Infinity');
  }
  if (0 > num && num > Number.NEGATIVE_INFINITY){
    console.log('To Negative Infinity');
  }
  if (num===0){
    console.log('Staying Home');
  }
}

beyond(0);



// Cracking the code

function decode(word) {
  let container = '';
  if (word.charAt(0) === 'a') {
    container += word.charAt(1);
  }

  if (word.charAt(0) === 'b') {
    container += word.charAt(2);
  }

  if (word.charAt(0) === 'c') {
    container += word.charAt(3);
  }

  if (word.charAt(0) === 'd') {
    container += word.charAt(4);
  }

  else {
    container += ' ';
  }
  return container;
}

let example = 'craft block argon meter bells brown croon droop'.split(' ');

let result = '';
for (let i = 0; i < example.length; i++) {
  result += decode(example[i]);
}

console.log(result);


// How many days in a month

function howManyDays(month, leapYear) {
  let result;
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = `${month} has 31 days`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result = `${month} has 30 days`;
    break;
  case 'February':
    if (leapYear === true) {
      result = `${month} has 29 days`;
    } else if (leapYear === false) {
      result = `${month} has 28 days`;
    }
    break;
  }
  return result;
}

console.log(howManyDays('January'));