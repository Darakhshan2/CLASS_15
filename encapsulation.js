// collecting all data some are private (only for me) , public , protected
// ny default all data are public 
//class has special method called  constructor function / constructor method 
var Cars = /** @class */ (function () {
    function Cars(brand, model, year) {
        this.brandS = brand;
        this.modelS = model;
        this.yearS = year;
    } // jb bh class call hogi ye sab sy phly at ahai or class sy object(intance) ye banata hai 
    Cars.prototype.displayDetail = function () {
        return "\n        Brand : ".concat(this.brandS, " \n        Model :").concat(this.modelS, "\n        Year : ").concat(this.yearS);
    };
    return Cars;
}());
var OldCar = new Cars("Honda", "Civic", 2020); // ye ()  yahan constructor ke hen 
console.log(OldCar.displayDetail());
