let str : string = "madhur"

let strArray : string[] = [...str];

let newArray: string[]= [];

for(let i : number = strArray.length-1; i>=0; i--){
    let value : string = strArray[i];
    newArray.push(value);
}


let ogStr: string = strArray.join('');
let reversedString: string = newArray.join('');



if (ogStr == reversedString){
    console.log("String is Palindrome")
}
else{
    console.log("String is not a palindrome")
}