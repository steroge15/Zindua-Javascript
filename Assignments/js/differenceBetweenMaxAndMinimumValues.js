// Assignment:
// Write a function that takes an array as its parameter. Function should return the difference between the maximum and the minimum values in the array. Example:
// arr = [56, 78, 12, 45, 67, 80]
// The function should return 68 i.e 80 - 12

    
{
    let array = [9,12,18,29,54,78,35,63,19];


    function minimumNumber(array){
        minNumber = array[0];

        for (k=0;k<array.length;k++) {
           if (array[k] < minNumber){
            minNumber = array[k]
           }
        }
        return minNumber

     }

    function maximumNumber(array){
        let maxNumber = array[0];
        for (l=0;l<karray.length;l++){
            if (array[l] > maxNumber){
                maxNumber = array[l]
            }
            
        }
        return maxNumber

     } 
     diff = maximumNumber (array)- minimumNumber(array)

   console.log (diff)

   

 }