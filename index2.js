'use strict';

function jediName(firstName, lastName) {
  return  lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Harry', 'Potter'));

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