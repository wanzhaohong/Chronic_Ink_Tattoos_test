export function isPalindrome(inputString) {
  // TODO: write your code here
  //position for backward
  let counter = inputString.length - 1;
  //loop ends in the middle of the string.
  for (let counter2 = 0; counter2 < counter/2; counter2++) {
    //forward
    let a = inputString[counter2];
    
    //backward
    let b = inputString[counter-counter2];

    //if two characters don't matched, return false
    if (a != b) {
      return false;
    }
  }
  return true;
}