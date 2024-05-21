// remove vowels from string
let ogStr: string = "madhru";
let str : string[]  = [...ogStr];
let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
function checkVowels(){
    str = str.filter((value) => !vowels.includes(value));
    console.log(str.join(''));
}
checkVowels();