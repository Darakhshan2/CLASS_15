// collecting all data some are private (only for me) , public , protected
// ny default all data are public 
//class has special method called  constructor function / constructor method 


class Cars { // class ka context 
     brandS :  string
     modelS : string
      yearS : number

    constructor(brand:string, model:string , year:number){
        this.brandS = brand;
        this.modelS = model;
        this.yearS = year
    } // jb bh class call hogi ye sab sy phly at ahai or class sy object(intance) ye banata hai 
    
    
    displayDetail() { // method hai ye is mn show nh hoga sirf properties ati hen 
        return `
        Brand : ${this.brandS} 
        Model :${this.modelS}
        Year : ${this.yearS}`
    }
}
const OldCar = new Cars("Honda","Civic" ,2020) // ye ()  yahan constructor ke hen 
console.log(OldCar.displayDetail())
