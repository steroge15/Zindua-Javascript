function isPalindrome(str) {
    // Convert the string to lowercase to handle case-insensitivity
    str = str.toLowerCase();
    // Remove non-alphanumeric characters from the string using regular expression
    str = str.replace(/[^a-z0-9]/g, '');
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("dad"));




{
    function isPalindrome(str){
        let d = str.length -1
        for(let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[d]) {
                return false;
            }
            d--;
        }
        return true;
    }
let str1 = "sis";
let str2 = "nitin";
let str3 = "nathan";
 console.log(isPalindrome (str1));
 console.log(isPalindrome(str2));
 console.log(isPalindrome(str3));
}



// 1. **Function Definition**:

// ```javascript
// function isPalindrome(str) {
// ```
// This line defines a function named `isPalindrome` that takes one parameter, `str`, which represents the string to be checked.


// 2. **Initialization**:
// ```javascript
//   const len = str.length;
// ```
// This line initializes a constant variable `len` to store the length of the input string `str`.


// 3. **Loop through the String**:
// ```javascript
//   for (let i = 0; i < len / 2; i++) {
// ```
// This line starts a loop that iterates from `i = 0` to `i < len / 2`. The loop runs until `i` reaches half the length of the string (`len / 2`). This is because when checking for a palindrome, we only need to compare characters up to the middle of the string with the corresponding characters from the end of the string.


// 4. **Comparing Characters**:
// ```javascript
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
// ```
// Inside the loop, this `if` statement checks if the character at index `i` from the beginning of the string (`str[i]`) is not equal to the character at index `len - 1 - i` from the end of the string (`str[len - 1 - i]`). If the characters are not equal, it means the string is not a palindrome, so the function returns `false`.


// 5. **Return True if Palindrome**:
// ```javascript
//   return true;
// ```
// If the loop completes without finding any unequal characters (i.e., if the string passes the palindrome test), the function returns `true`, indicating that the input string is indeed a palindrome.


// 6. **Function Call and Output**:
// ```javascript
// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// ```
// These lines call the `isPalindrome` function with different input strings and log the result to the console.



// So, the `isPalindrome` function checks if a given string is a palindrome by comparing characters from the beginning and end of the string. If any characters don't match, it returns `false`; otherwise, it returns `true` if all characters match.


function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("radar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  



//This recursive function checks if the first and last characters of the string are the same. If they are, it calls itself recursively with the substring excluding the first and last characters. If any of the characters don't match or the length of the string is 1 or less, it returns false or true accordingly.

  function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, -1));
  }
  
  console.log(isPalindrome("deified")); // Output: true
  console.log(isPalindrome("hello"));   // Output: false



//This function splits the string into an array of characters, reverses the array, and then joins it back into a string. Finally, it compares the original string with the reversed string to determine if it's a palindrome.

  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(isPalindrome("level")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  
  