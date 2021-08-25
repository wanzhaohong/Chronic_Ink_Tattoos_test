export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  //check if the initialValue is existed. If does not exists, take the first value of the array as the start.
  let acc = (initialValue === undefined) ? array[0] : initialValue;
  //From the initialValue to determine where it start.
  let start_index = (initialValue === undefined) ? 1 : 0;
  for (let i = start_index; i < array.length; i++) {
    //using reducer function to sum all of the value from array.
    acc = reducer(acc, array[i]);
  }
  return acc;
}
