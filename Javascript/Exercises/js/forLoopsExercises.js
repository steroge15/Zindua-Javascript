// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.


let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627

const array = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let sum = 0;
        for (i=0;i<array.length;i++){
        sum  = sum + array[i]
     }
      
        console.log(sum[array]);