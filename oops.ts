type TypeCar = {
    brand: string,
    model: string,
    year: number
}

class Car implements TypeCar { // class ka context .m
    brand = "toyota"
    model = "corolla"
    year = 2024
    displayDetail() { // method hai ye is mn show nh hoga sirf properties ati hen 
        return `
        Brand : ${this.brand} 
        Model :${this.model}
        Year  :${this.year}`
    }
}

let myCar = new Car()  // myCar sy instance mil ra hai means ky object 
console.log(myCar.displayDetail());
// console.log(typeof myCar); answer : object 


let object = new Object()
console.log(object); // 


let Myname = new String("")
console.log(Myname); // empty
