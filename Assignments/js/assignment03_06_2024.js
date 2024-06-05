//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]


const arr=[ 7,2,11,8,21]
const twoSum = (arr) => {
     sum = 13
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          return [i, j];
        }
      }
    }
    return ["error"];
  };
  console.log(twoSum(arr));



  example_arr = [5,6,8,9,5,4,3]

  function twoSumm(arr, target) {
    for(i=0;i<arr.length;i++){
      compliment = target - arr[i]
      if(arr.includes(compliment) && arr.indexOf(compliment) !=i){
         return[i, arr.indexOf(compliment)]
      }
    }
  }

  console.log(twoSumm(example_arr, 10))


  // Using Bubble Sort method


  arry =[2, 4, 5, 62, 1, 8]

  function bubbleSort (arry){
    for(i=0; i<arry.length; i++){
      for(j=i+1; j<arry.length; j++){
        if (arry[i]>arry[j]){
          temp=arry[i]
          arry[i]=arry[j]
          arry[j]=temp
        }
      }
    }return(arry)
  }
  console.log(bubbleSort(arry))





