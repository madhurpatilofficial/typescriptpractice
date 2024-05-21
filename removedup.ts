// remove duplicate elements from array

let studentMarks = [34, 20, 30, 40, 50, 70, 20, 30];
let uniqueStudentsMarks = [];
let dupElements = [];
studentMarks.forEach((value) => {
    if (!uniqueStudentsMarks.includes(value)){
        uniqueStudentsMarks.push(value);
    }
    else{
        dupElements.push(value);
    }
})

console.log(uniqueStudentsMarks);
console.log("Duplicate Elements were: ", dupElements);