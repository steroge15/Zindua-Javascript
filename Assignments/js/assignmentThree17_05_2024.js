// ASSIGNMENT 3
// Topic: Objects, operators, loops, arrays, Strings
// Create a function that takes an array of a tleast 5 objects as its parameter. Each object is a student. 
// The student object has two fields: name and marks. The name is a string -> student name. 
// The marks field is an array of 5 elements each representing the student's performance in 5 subjects. 
// Write a function that iterates through the array and gets the average marks for each student. 
// The function should print the students names and their average marks in descending order. 
// Example:
// arrayOfStudents = [{name: "Stephen", marks: [45, 78, 90, 32, 67]}, {name: "Maryanne", marks: [89, 78, 10, 67, 47]}, {name: "Kelvin", marks: [55, 88, 94, 52, 37]}, {name: "Claire", marks: [44, 68, 88, 62, 77]}]
// Output: Claire: 67.8
//                Kelvin: 65.2
//                Stephen: 62.4
//                Maryanne: 58.2
// Run the function with a sample array to verify the output

// Solution to assignment 3:

{
    // an array of objects
    //objects: students: marks, name
    // get the average marks, print out( sorted )
    //function to get the average in an array:
    //example: [78, 89, 78, 90, 65]
    
    function getAverage(marks){
        let sum = 0;
        for (let i = 0; i <= marks.length-1; i++){
            sum = sum + marks[i];
        }
        return sum / marks.length;
    }
   //
   sample_students = [
    {
        name: "John",
        marks: [78, 90, 54, 55, 32]
    },
    {
        name: "Dennis",
        marks: [89, 90, 56, 44, 58]
    },
    {
        name: "Agnes",
        marks: [90, 56, 45, 88, 90]
    },
    {
        name: "Alvin",
        marks: [81, 56, 77, 88, 96]
    }
   ]
   function getStudentsAverage(students){
    let student_avg = []
    for (i = 0; i <= students.length-1; i++){
        student_rslts = {
            name: students[i].name,
            avg: getAverage(students[i].marks)
        }
        if(i == 0){
            student_avg.push(student_rslts)
        }else{
            if (student_rslts.avg > student_avg[0].avg){
                let new_array = []
                new_array.push(student_rslts)
                for (k = 0; k < student_avg.length; k++){
                    new_array.push(student_avg[k])
                }
                student_avg = new_array
            }else if(student_rslts.avg > student_avg[i - 1].avg){
                popped_student = student_avg.pop()
                student_avg.push(student_rslts)
                student_avg.push(popped_student)
            }
            else{
                student_avg.push(student_rslts)
            }
        }
    }
    console.log(student_avg)
   }
   getStudentsAverage(sample_students)
}