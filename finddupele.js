// find the duplicate elements from and Array
var studentDetails = [23, 45, 67, 90, 45, 23, 67, 3, 4, 5, 6, 5, 6];
var uniqueEle = [];
var dup_ele = [];
studentDetails.forEach(function (value) {
    if (!uniqueEle.includes(value)) {
        uniqueEle.push(value);
    }
    else {
        dup_ele.push(value);
    }
});
console.log("Unique Elements: " + uniqueEle);
console.log("Duplicate Elements: " + dup_ele);
