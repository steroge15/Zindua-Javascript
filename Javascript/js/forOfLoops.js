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
        for (let i of arr){
            sum = sum + i
        }
        return sum;
    }
   console.log(getSum(numbers));


function getMaximum(arr){
    let i = numbers;
    max = arr[0];
    for ( let i of arr){
        if(max < i){
            max = i
        }
    }
    return max;
}
console.log(getMaximum(numbers));

}