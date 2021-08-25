export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  
  //default array for storing brackets.
  let array = [];

  //search through the inputString for the brackets.
  for (let i = 0; i < inputString.length; i++) {

    if (inputString[i] === "(") {
      //push to default array if it is a open bracket.
      array.push(inputString[i]);
    } else if (inputString[i] === ")") {
      if (array[array.length - 1] === "(") {
        //if find a matched close bracket, then delete the previous open bracket from the default array.
        array.pop();
      }else{
        //push the close bracket to the default array if can not find the matched open bracket from the default array.
        array.push(")");
      } 
    }
  }

  //check if the default array contains the unmatched brackets.
  if (array.includes(")") || array.includes("(")) {
    return false;
  }else{
    return true;
  }
}