// Create a function that takes an array of arrays e.g [[8,9,4,56,78,], [67, 89, 98], [56,45,32,45], [45,67,80]] and returns a single array that has the sum of all the elements in each inner array. It should also print the sum of all the elements in the array.
//        From the above array example it should return: [155, 254, 178, 192] and prints 779 as the total sum.
//        Use  forEach loops

function sumOfArrays(arrays) {
    let sum = 0;
    let result = [];
    
    arrays.forEach(innerArray => {
        let innerSum = 0;
        innerArray.forEach(num => {
            innerSum += num;
            sum += num;
        });
        result.push(innerSum);
    });
    
    console.log("Sum of all elements in the array:", sum);
    return result;
}

// Example usage:
const arrays = [[8,9,4,56,78], [67, 89, 98], [56,45,32,45], [45,67,80]];
console.log(sumOfArrays(arrays)); // Output: [155, 254, 178, 192]


{
    // array of arrays
    const sample_array = [[89, 56, 43], [32, 77, 56, 43], [90, 43, 49, 23, 90]]
    function getSumOfElements(arr){
        arr_sum = []
        arr.forEach((innerArr) => {
            let sum = 0
            innerArr.forEach((value) =>{
                sum = sum + value
            })
            arr_sum.push(sum)
        });
        return arr_sum
    }
    console.log(getSumOfElements(sample_array))
}


{
    // array of arrays
    const sample_array = [[89, 56, 43], [32, 77, 56, 43], [90, 43, 49, 23, 90]]
    function getSumOfElements(arr){
        let sum_array = []
        arr.forEach((innerArray)=>{
            let sum = 0
            innerArray.forEach((element)=>{
                sum = sum + element
            })
            sum_array.push(sum)
        })
        let total_sum = 0;
        sum_array.forEach((value)=>{
            total_sum = total_sum + value
        })
        console.log("Total: " + total_sum)
        return sum_array;
    }
    console.log(getSumOfElements(sample_array))
}
