

// //for ( let i = 0; i <= 10; i++){
//     console.log( 'Today is Thursday ' + i );
// }

// const arr = [ 34, 56, 78, 90, 23, 56, 76, 43]

// console.log(arr);

// for ( let i = 0; i < arr.length; i++ ){
//     arr[i] = arr[i] + 2;
//     // console.log(arr);
// }

// // a. Print the numbers 0 - 20, one number per line.
 
// for ( let i = 0; i <= 20; i++ ){
//     // console.log(i);    
// }

// // b. Print only the ODD values from 3 - 29, one number per line.

// for ( let i = 0; i <= 29; i++ ){
//     arr[i] = arr[i] + 1;
//     // console.log( i / 2 % 1);

// }
// // c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.

// for ( let i = -14; i >= 12; i++ ){
//     console.log( arr[i] = arr[i] + 1);
// }

// // Print the numbers from 0 to 15

// for ( let i = 0; i <= 15; i++){
//     // console.log(i);

// }// Print the numbers from 12 to 24

// for ( let i = 12; i <= 24; i++){
//     // console.log (i);

// } // Print the ODD numbers from 7 to 31

// for ( let i = 7; i <= 31; i++){
//     // console.log( i % 2 == 1);

// }

// // Print the EVEN numbers from 10 to -20

// for ( let i = 10; i >= -20; i++ ){
//     // console.log ( i = ( i / 2 % == 0 ) )

// }

// // we want to print a greeting 10 times

// for( let i = 0; i < 10; i++){
//     console.log( 'Hello world');
// }

// // initialize the variable
// // check the condition
// // execute the block if the condition is true. If not true, break out of the loop
// // update the variable
// // condition. If true, execute the block
// // update
// {
//     // sum of numbers:
//     // upto n
//     let n = 5
//     // 0 + 1+2+3+4+5
//     let sum = 0;
//     for (let k = 0; k <= n; k++ ){
//         console.log("Sum before update: " + sum + ". k is currently: " + k)
//         sum = sum + k;
//         console.log("Sum after update: " + sum)
//         console.log("\n")
//     }
// }

// function getSum(n){
//     let sum = 0;
//     for ( let k = 0; k <= n; k++){
//         sum = sum + k;
//     }
//     return sum;

// }
// console.log(getSum(81));

// // write a function that prints values from 0 to n
// // the function shold take an integer n as it's parameter and uses a for loop to print all the numbers from 0 to n

// function printInterger(n){
//     for ( let i = 0; i <= n; i++){
//         console.log(n);
//     }


// }

// // write a function that skips by 2 prints values from 0 to n
// // the function shold take an integer n as it's parameter and uses a for loop to print all the numbers from 0 to n

// function printInterger(n){
//     for ( let i = 0; i <= n; i+=2 ){
//         console.log(n);
//     }
    
// }
// // write a function that prints numbers in reverse from n to 0

// function printNumbersInReverse(r){
//     for ( let z = r; z >= 0; z-- ){
//         console.log(z);
//     }


// }

// printNumbersInReverse(17);

// write a function that prints even numbers from 0 upto n

// function printEvenNumber(n){
//     for ( let k = 0; k <= n; k++){
//         if (k % 2 == 0){
//             console.log(k);
//         }
//     }
// }
// printEvenNumber(200);

// write a function that only prints multiples of 5 and 10 from 0 to n

// function printMultiples(n){
//     for ( let z = 0; z <= n; z++){
//         if ( z % 5 == 0 || z % 10 == 0){
//             console.log(z);
//         }
//     }
// }
// printMultiples(350);

//write a function that takes 2 parameters: a and e
// function should return the (a^e) for example (3^4)

// function powerOf(a, e){
//     let 
//     for ( let z = 1; z <= e; z++){
//         prod = prod * a;
//     }
//     return prod;
//     {
//         console.log(powerOf(5, 3));
//     }
// }

// {
//     // arrays
//     const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
//     for (let i = 0; i < numbers.length; i++){
//         console.log(numbers[i])
//     }
// }
// print the values of the array backwards

// const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
//let n = numbers.length - 1;
// for ( let i = n; i >= 0; i--){
//     console.log(numbers[i]);

// } 
// // get the sum of the array

// function getSumInArray (){
//     let sum = 0;
//     for ( let i = 0; i < numbers.length; i++){
//         sum = sum + numbers[i]
//     }
//     return sum;

// }

// function to only sum up even numbers and return the sum of the even numbers in that array

// const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
// function returnEvenNumbers(){
//     let sum = 0;
//     for ( let i = 0; i < numbers.length; i++){
//         if ( numbers[i] % 2 == 0) {
//             sum = sum + numbers [i];

//         }
//         return sum;
//     }
// }
// console.log(returnEvenNumbers);

{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    // arrays
    // for (let i = 0; i < numbers.length; i++){
    //     console.log(numbers[i])
    // }
    // // print the values of the array backwards
    // for (let i = numbers.length-1; i >= 0; i--){
    //     console.log(numbers[i])
    // }
    // get the sum of all
    function getSumInArray(){
        let sum = 0;
        for (let i = 0; i < numbers.length; i++){
            sum = sum + numbers[i]
        }
        return sum;
    }
    // function to only sum up even numbers and return the sum of the even numbers in that array.
    function getSumEvenInArray(){
        let sum = 0;
        for (let i = 0; i < numbers.length; i++){
            if(numbers[i] % 2 == 0){
                sum = sum + numbers[i];
            }
        }
        return sum
    }
    // get the smallest number in the array
    function getLeast(){
        let currentSmallest = numbers[0]
        for (let i = 0; i < numbers.length; i ++){
            if(numbers[i] < currentSmallest){
                currentSmallest = numbers[i];
            }
        }
        return currentSmallest;
    }
    console.log(getLeast())
}