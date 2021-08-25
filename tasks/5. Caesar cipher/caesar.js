export function encryptCaesar(inputString, key) {
  // TODO: write your code here

  //for speicific conditons.(if key < 0 or key > 26)
  if (key < 0) {
    return encryptCaesar(inputString, key+26);
  } else if (key > 26){
    return encryptCaesar(inputString, key%26);
  }

  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    //get each character
    let char = inputString[i];

    //check if the current character is a letter.
    if (char.match(/[a-z]/i)) {
      let c = inputString.charCodeAt(i);

      //check if the current character is upper case or lower case. Then add the key value to each character.
      if (c >= 65 && c <= 90) {
        char = String.fromCharCode(((c - 65 + key) % 26) + 65);
      }else if (c >= 97 && c <= 122){
        char = String.fromCharCode(((c - 97 + key) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}
