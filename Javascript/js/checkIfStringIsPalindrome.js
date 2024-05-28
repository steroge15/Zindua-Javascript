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