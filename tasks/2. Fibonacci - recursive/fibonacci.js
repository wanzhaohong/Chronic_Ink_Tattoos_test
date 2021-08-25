export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  //default array
  let array = [0, 1];
  //return the default array for the default case.
  if (n === 2){
    return array;
  }else{
    //for the recursion.
    let result = getFibonacciUntil(n - 1);
    //push the sum of the preceding two number to the end of the result array.
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
}


