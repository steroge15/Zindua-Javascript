//  Write a function that flattens an array i.e given a 2D array, the function should return a 1D array with all the elements of each inner array of the original array.

{
    const arr = [[34, 67, 89], ["Dan", "John", 78], [7, "Apple", "Orange", 67, 90]]
    //normal loops
    function flatten(sample_array){
        let flattened_arr = []
        for(let i = 0; i < sample_array.length; i++){
            for (let k = 0; k < sample_array[i].length; k++){
                flattened_arr.push(sample_array[i][k])
            }
        }
        return flattened_arr
    }
    //console.log(flatten(arr))
    function flattenForEach(sample_array){
        let flattened_arr = []
        sample_array.forEach((inner_array)=>{
            inner_array.forEach((element)=>{
                flattened_arr.push(element)
            })
        })
        return flattened_arr
    }
    console.log(flattenForEach(arr))
}