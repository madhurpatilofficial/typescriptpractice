var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PostGraduation = /** @class */ (function () {
    function PostGraduation(category) {
        this.category = category;
    }
    PostGraduation.prototype.getCategoryDetails = function () {
        console.log(this.category);
    };
    return PostGraduation;
}());
var MBA = /** @class */ (function (_super) {
    __extends(MBA, _super);
    function MBA(specialization, college, fees, category) {
        var _this = _super.call(this, category) || this;
        _this.specialization = specialization;
        _this.college = college;
        _this.fees = fees;
        return _this;
    }
    MBA.prototype.getSpecializationDetails = function () {
        console.log(this.specialization);
    };
    MBA.prototype.getCollege = function () {
        console.log(this.college);
    };
    MBA.prototype.getFees = function () {
        console.log(this.fees);
    };
    return MBA;
}(PostGraduation));
var collegeObj = new MBA("Business Analytics", "ASM IBMR", 2000000, "Management");
collegeObj.getCategoryDetails();
collegeObj.getSpecializationDetails();
collegeObj.getCollege();
collegeObj.getFees();
