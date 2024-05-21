// Write a function to determine if a string has all unique characters.

let uniqueArray: string[] = [];
function uniqueCharacters(str: string) {
  let strArray: string[] = [...str];
  strArray.forEach((value) => {
    if (!uniqueArray.includes(value)) {
      uniqueArray.push(value);
    }
  });
  console.log(uniqueArray);
  console.log(strArray);

  if (strArray.length == uniqueArray.length) {
    console.log("Your String is Unique");
  } else {
    console.log("Your String is not unique");
  }
}
uniqueCharacters("madhur");