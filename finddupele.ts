// find the duplicate elements from and Array

let studentDetails: number[] = [23, 45, 67, 90, 45, 23, 67, 3, 4, 5, 6, 5, 6];
let uniqueEle: number[] = [];
let dup_ele: number[] = [];
studentDetails.forEach((value: number) => {
  if (!uniqueEle.includes(value)) {
    uniqueEle.push(value);
  } else {
    dup_ele.push(value);
  }
});

console.log("Unique Elements: " + uniqueEle);
console.log("Duplicate Elements: " + dup_ele);