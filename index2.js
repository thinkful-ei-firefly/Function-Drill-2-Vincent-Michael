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


// Rock paper scissors

// function rps(choice) {
//   let result = 'test';
//   const randomNum = Math.floor(Math.random() * 3) + 1;
//   if (choice !== 1 && choice !== 2 && choice !== 3) {
//     throw new Error('Must represent rock, paper, or scissors with the number 1, 2, or three.');
//   }
//   switch (choice) {
//   case randomNum === choice:{
//     result = 'It\'s a tie!';
//     break;
//   }
//   case randomNum === 1 && choice === 2:{
//     result = 'Computer chose rock, player chose paper. Player wins!';
//     break;
//   }
//   case randomNum === 1 && choice === 3:{
//     result = 'Computer chose rock, player chose scissors. Computer wins!';
//     break;
//   }
//   case randomNum === 2 && choice === 1:{
//     result = 'Computer chose paper, player chose rock. Computer wins!';
//     break;
//   }
//   case randomNum === 2 && choice === 3:{
//     result = 'Computer chose paper, player chose scissors. Player wins!';
//     break;
//   }
//   case randomNum === 3 && choice === 1:{
//     result = 'Computer chose scissors, player chose rock. Player wins!';
//     break;
//   }
//   case randomNum === 3 && choice === 2:{
//     result = 'Computer chose scissors, player chose paper. Computer wins!';
//     break;
//   }
//   }
//   return result;
// }


// console.log(rps(1));


function rps(choice) {
  let result = 'test';
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (choice !== 1 && choice !== 2 && choice !== 3) {
    throw new Error('Must represent rock, paper, or scissors with the number 1, 2, or 3.');
  }

  if (randomNum === choice){
    result = 'It\'s a tie!';
    
  }
  if (randomNum === 1 && choice === 2){
    result = 'Computer chose rock, player chose paper. Player wins!';
    
  }
  if (randomNum === 1 && choice === 3){
    result = 'Computer chose rock, player chose scissors. Computer wins!';
    
  }
  if (randomNum === 2 && choice === 1){
    result = 'Computer chose paper, player chose rock. Computer wins!';
    
  }
  if (randomNum === 2 && choice === 3){
    result = 'Computer chose paper, player chose scissors. Player wins!';
    
  }
  if (randomNum === 3 && choice === 1){
    result = 'Computer chose scissors, player chose rock. Player wins!';
    
  }
  if (randomNum === 3 && choice === 2){
    result = 'Computer chose scissors, player chose paper. Computer wins!';
    
  }
  return result;
}


console.log(rps(3));
















/*
tie: 1/1, 2/2, 3/3

c1 p2 'Computer chose rock, player chose paper. Player wins!'
c1 p3 'Computer chose rock, player chose scissors. Computer wins!'
c2 p1 'Computer chose paper, player chose rock. Computer wins!'
c2 p3 'Computer chose paper, player chose scissors. Player wins!'
c3 p1 'Computer chose scissors, player chose rock. Player wins!'
c3 p2 'Computer chose scissors, player chose paper. Computer wins!'
p1 c2 'Computer chose paper, player chose rock. Computer wins!'
p1 c3 'Computer chose scissors, player chose rock. Player wins!'
p2 c1 'Computer chose rock, player chose paper. Player wins!'
p2 c3 'Computer chose scissors, player chose paper. Computer wins!'
p3 c1 'Computer chose rock, player chose scissors. Computer wins!'
p3 c2 'Computer chose paper, player chose scissors. Player wins!'






*/