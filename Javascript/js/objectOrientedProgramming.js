class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //method
    introduce(ageToAdd){
        console.log(`Hello. My name is ${this.name} and I will be ${this.age + ageToAdd} years old in ${ageToAdd} years to come. My salary will be ${this.calculateSalary()} in ${ageToAdd}`)
    }

    calculateSalary(){
        if(this.age){
            return '200,000'
        }else if(this.age>30){
            return '150,000'
        }else if(this.age>20){
            return '100,000'
        }else{return '70,000'}
    }
}
 let person1 = new Person ('John', 45);
 let person2 = new Person ('Darius', 21);

//  console.log(person1.name)
//  console.log(person2.name)

person2.introduce(20)


class Car {
    constructor(colour, model, mileage, weight, price){
        this.colour = colour;
        this.model = model;
        this.mileage = mileage;
        this.weight = weight;
        this.price = price;
    }

    introduce(){
        console.log(`This ${this.model} is the latest and ${this.colour} is the original factory colour. The ${this.price} Million asking price is justified as it is at it's peak!`)
    }
}

let car1 = new Car('Red','Merc','10K','2.5 Tonnes','5.2')
let car2 = new Car('White','BMW','30K','2 Tonnes','3.8')

// console.log(car1,car2)

// car1.introduce()
// car2.introduce()