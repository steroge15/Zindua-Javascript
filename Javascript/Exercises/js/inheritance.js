// Create a `Vehicle` class with the following properties:
// - `make` (e.g., 'Toyota')
// - `model` (e.g., 'Corolla')
// - `year` (e.g., 2015)
// Include a method `getDetails` that returns a string: "Make: Toyota, Model: Corolla, Year: 2015."
// Then, create a `Car` class that inherits from `Vehicle` and adds a new property `fuelType` (e.g., 'Gasoline'). Override the `getDetails` method to include the fuel type.

class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails(){
        console.log(`The make of this car is a ${this.make}. The model is a ${this.model} which was produced in the year ${this.year}.`)
    }
}

class Car extends Vehicle{
    constructor(make,model,year,fuelType){
    super (make,model,year)
    this.fuelType = fuelType
}
getDetails(){
    console.log(`The make of this car is a ${this.make}. The model is a ${this.model} which was produced in the year ${this.year}.The fuel type is ${this.fuelType}.`)
}
}
let gari1=new Car('Toyota','Mark X','2012','Diesel')
let gari2=new Car('Land rover','Discovery','2014','Petrol')

 gari2.getDetails()


class Employee{
    constructor(name, salary, department){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
}

   let employee1 = new Employee('John',100000,'Accounts')
    console.log(employee1.name)



