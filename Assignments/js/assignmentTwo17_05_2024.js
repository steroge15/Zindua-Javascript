// ASSIGNMENT TWO:
// Topic: if statements, loops, functions, Strings
// Write a function that takes a string as an argument and counts the number of vowels in the String. 
// Example: the string "zindua" has 3 vowels. The function should return 3.
 {
    function countVowels( user_input){
        let vowels = "aeiouAEIOU";
        let count = 0;

        for (let i = 0; i < user_input.length; i++){
            if vowels.includes(user_input[i]){
                count++
            }
        }
        return count;
    }
    console.log(countVowels("ZINDUAzindua"));
 }