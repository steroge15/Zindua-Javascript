class Student{
    #age;

    constructor(name,age,average){
        this.name = name;
        this.#age = age;
        this.average = average;
    }

    getGrade(){
        if(this.average > 50){
            return 'Pass';
        }else {
            return 'Fail';
        }
    }

    get getAge(){
        return this.#age
    }

    get getName(){
        return this.name;
    }

    set setName(newName){
        this.name = newName;
    }

    get getAverage(){
        return this.average;
    }

    set setAge(newAge){
        this.#age = newAge
    }

    static getSchoolDetails(){
        console.log('This is called Kenyatta Primary School.')
    }
}

let studentObj = new Student('John',13,78)
studentObj.setAge = 15;
studentObj.setName = 'Steve';

console.log(studentObj.getAge);
console.log(studentObj.getName);
console.log(studentObj.getAverage);


class Calculator{
    static add( a,b){
        return a + b
    }
    static subtract (a,b){
        return a - b
    }
    static multiply (a,b){
        return a * b
    }
    static divide(a,b){
        return a / b
    }
    static power(a,b){
        return a ^ b
    }



}