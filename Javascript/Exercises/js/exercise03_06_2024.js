// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];

removeDuplicates = (arr) => {
    let res = []
    arr.forEach(element => {
        if(!res.includes(element)) {
            res.push(element);
        }
        
    });
    return res
}

console.log (removeDuplicates(arr))




