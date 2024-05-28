
{
    const numbers = [ 4, 6, 7, 8, 90, 56]
    console.log( numbers);

    console.log( numbers [5]);

}


// The code console.log(results[2].marks[3]) will output the fourth mark (index 3) of the third student (index 2) in the results array.

// The code console.log(results[1].name + ": " + results[1].marks[3]) will output the name of the second student (index 1) followed by a colon and then the fourth mark (index 3) of that student.


    const results = [
     {
         name: "Jane",
         marks: [89, 45, 67, 89, 67]
     },
     {
         name: "Alfred",
         marks: [89, 56, 43, 78, 89]
     },
     {
         name:"Steve",
         marks: [67, 89, 56, 44, 90]
     }
    ]
    console.log(results[2].marks[3])
    console.log(results[1].name + ": " + results[1].marks[3])



    // This code calculates and prints the average marks for each student in the results array.

    function calculateAverageMarks(student) {
        let sum = 0;
        for (let mark of student.marks) {
          sum += mark;
        }
        return sum / student.marks.length;
      }
      
      for (let student of results) {
        console.log(`${student.name} has an average mark of ${calculateAverageMarks(student)}`);
      }



    //   This code finds and prints the name of the student with the highest mark in the results array.

    let highestMark = -Infinity;
    let studentWithHighestMark = null;

      for (let student of results) {
          let maxMark = Math.max(...student.marks);
              if (maxMark > highestMark) {
                   highestMark = maxMark;
                   studentWithHighestMark = student.name;
  }
}

        console.log(`${studentWithHighestMark} has the highest mark of ${highestMark}`);


        
    

// 1. **`function isPassing(student) { ... }`**: This defines a function called `isPassing` that takes a single parameter `student`. Inside the function:
//    - `const passingScore = 60;` declares a constant variable `passingScore` with a value of 60. This is the score considered as passing.
//    - `return student.marks.every(mark => mark >= passingScore);` uses the `every` method on the `student.marks` array. The `every` method checks if every element in the array meets a condition. In this case, it checks if every mark in the `student.marks` array is greater than or equal to the `passingScore`. If all marks are greater than or equal to the `passingScore`, the function returns `true`, indicating that the student has passed all exams. Otherwise, it returns `false`.

// 2. **`for (let student of results) { ... }`**: This loop iterates over each object in the `results` array.
//    - `let student` declares a variable `student` that represents each object in the array during each iteration.

// 3. **`if (isPassing(student)) { ... } else { ... }`**: Inside the loop, it checks if the current `student` object passes all exams by calling the `isPassing` function with the `student` object as an argument.
//    - If `isPassing(student)` returns `true`, it means the student has passed all exams, so it logs `${student.name} has passed all exams`.
//    - If `isPassing(student)` returns `false`, it means the student has not passed all exams, so it logs `${student.name} has not passed all exams`.

// So, overall, this code iterates through each student in the `results` array and checks if they have passed all exams based on the condition that all their marks are greater than or equal to 60. It then logs the result for each student.
      
function isPassing(student) {
    const passingScore = 60;
    return student.marks.every(mark => mark >= passingScore);
  }
  
  for (let student of results) {
    if (isPassing(student)) {
      console.log(`${student.name} has passed all exams`);
    } else {
      console.log(`${student.name} has not passed all exams`);
    }
  }

      
 