console.log("This is my first typescript code");
var age = [1, 2, 3, 4, 5];
for (var _i = 0, age_1 = age; _i < age_1.length; _i++) {
    var num = age_1[_i];
    console.log(num);
}
var Test = /** @class */ (function () {
    function Test(a, b) {
        this.a = a;
        this.b = b;
    }
    Test.prototype.add = function () {
        console.log("Addition: ", this.a + this.b);
    };
    Test.prototype.substract = function (a, b) {
        console.log("Substraction: ", a - b);
    };
    return Test;
}());
var obj = new Test(5, 7);
obj.add();
console.log(obj.a, obj.b);
obj.substract(5, 6);
console.log(obj.a, obj.b);
