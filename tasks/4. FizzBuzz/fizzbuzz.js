export function getFizzBuzzUntil(n) {
  // TODO: write your code here

  //default array
  let array = [];

  //add number and Fizz and Buzz into the default array
  for (let i = 1; i<n+1; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
      //if satisfy both 3 and 5
      array.push('FizzBuzz');
    }else if (i % 3 === 0){
      //if satisfy 3
      array.push('Fizz');
    }else if (i % 5 === 0){
      //if satisfy 5
      array.push('Buzz');
    }else{
      //otherwise, simply add the number into the default array
      array.push(i);
    }
  }
  return array;
}
