// const person = {
//     firstName : 'Stephen',
//     lastName: 'Njoroge',
//     age: 30,
//     school : {
//         schoolName: 'Kirwara High School',
//         location: 'Gatundu',
//         level: 'Provincial High School'

//     }
// }
// // let name = person.name;
// // let age = perso.age;
// // let location = person.location


// const { firstName, lastName,age, location, fullName = `${firstName} ${lastName}`}= person

// // console.log(fullName)

// function getUserDetails({name,age,school:{schoolName}}){
//     console.log(`My name is ${name} and I am ${age} years old and I went to ${schoolName}`)
// }



// let arr = [{make:'Toyota',colour:'White',cc:2400}, {make:'Audi',colour:'Red',cc:2800}, {make:'Merc',colour:'Blue',cc:2000}, {make:'BMW',colour:'Black',cc:2200}, {make:'Honda',colour:'Green',cc:1800},{make:'Hyundai',colour:'Biege', cc:1500}, {make:'Nissan',colour:'Yellow',cc:1000}]

// arr.forEach(({make,colour,cc}) => {
//     console.log(`The make of the car is ${make}, the colour is ${colour} and the cc's are ${cc}.`)
// }

// )


//   Assignment:
// Consider an array of students:
// [
//      {name: "Dan", age: 14, marks: {maths: 50, english: 70, sci: 77, ss: 50}},
//         {name: "Jane", age: 13, marks: {maths: 54, english: 75, sci: 57, ss: 60}}
// ]
// Write a program that prints the details of a student in the following format:
// Name: Dan, age: 14, averageMarks: 61
// Name: Jane, age: 13, averageMarks: 61
// Use loops and object destructuring


// for (const {name, age, averageMarks} of users) {
//     console.log(`The student ${name} who is ${age} years old had an average score of ${averageMarks}`)
    
// }

// {
//     const students = [
//      {
//          name: "John",
//          age: 13,
//          marks: {
//              maths: 80,
//              english: 70,
//              sci: 56,
//              ss: 70
//          }
//      },
//      {
//          name: "Anne",
//          age: 12,
//          marks: {
//              maths: 70,
//              english: 79,
//              sci: 66,
//              ss: 77
//          }
//      },
//      {
//          name: "Dave",
//          age: 13,
//          marks: {
//              maths: 60,
//              english: 74,
//              sci: 86,
//              ss: 72
//          }
//      }
//     ]
 
//     students.forEach(({name, age, marks:{maths, english, sci, ss}})=>{
//      average = (maths+english+sci+ss) /4
 
//      console.log(`Name: ${name}, age: ${age}, averageMarks: ${average}`)
//     })
     
//  }


 const student = {
    name: 'Dan',
    age: 24,
    major: 'Computer Science',
    gpa: 3.9,
    school: {
        schoolName:'Mangu',
        numberOfStudents: 1500,
        county: 'Kiambu',
        level:'National',
        performance:{
             average:10.3,
             a:70,
             b:150,
             c:10
    }
 }
}


function introduce ({name, age, major, gpa,school:{schoolName,numberOfStudents,county,level,performance:{average,a,b,c}}}) {
    console.log(`My name is ${name}. I am ${age} years old. I am undertaking a major in ${major} and have an average of ${gpa} gpa. I attended ${schoolName} High School in ${county} county. This is a ${level} school and during my finalyear, I had an average of ${average} in all subjects. Thank you.`)

}

 introduce(student)


 const array = [
    {
        countryName: 'Kenya',
        population: '50M',
        continent: 'Africa',
        language: 'Kiswahili'
        
    },
    {
        countryName: 'Ecuador',
        population: '50M',
        continent: 'South America',
        language: 'Spanish'
        
    },
    {
        countryName: 'Japan',
        population: '100M',
        continent: 'Asia',
        language: 'Japanese'
        
    },
    {
        countryName: 'Denmark',
        population: '50M',
        continent: 'Europe',
        language: 'Danish'
        
    }
 ]

 for (const {countryName, population,continent,language} of array) {
    console.log(`This is ${countryName} with a population of ${population}. The country is in the ${continent} continent and the citizens speak ${language}.`)
 }