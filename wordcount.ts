// Word Count: Given a paragraph of text, write a function to count the occurrences of each word.

let count = 0;
function countWord(str: string){
    let strArray = [...str];
    console.log(strArray);

    for(let i: number = 0;i<=str.length-1;i++){
        if(strArray[i] in strArray){
            count+=1;
        }
        console.log("Count of " + strArray[i] + " is " + count);
    }
}

countWord("Madhur Patil");