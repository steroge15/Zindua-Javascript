{
    const numbers = [56, 78, 89, 90]
    // for (let i in numbers){
    //     console.log(numbers[i])
    // }
    // for (let number of numbers){
    //     console.log(number)
    // }
    //function to get the sum of elements in an array
    function getSum(arr){
        sum = 0
        for (let i in arr){
            sum = sum + arr[i]
        }
        return sum;
    }
   console.log(getSum(numbers));


   function getMaximum(arr){
    max = arr[o];
    for ( let i in arr){
        if ((arr[i]) > max ) {
            max = arr[i];
        }
    }
    console.log(numbers);
   }


}