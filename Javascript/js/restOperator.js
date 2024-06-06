const student = {
    name: 'Farida',
    course: "Mathematics",
    maths: 89,
    english: 80,
    kisw:45,
    physics:77,
    chem: 87
}

const {name, course, ...performance} = student 
// console.log(student, performance) 

let output = {name, course, performance}
console.log(output)

