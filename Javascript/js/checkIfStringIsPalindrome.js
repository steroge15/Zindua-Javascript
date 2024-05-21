function isPalindrome(str) {
    // Convert the string to lowercase to handle case-insensitivity
    str = str.toLowerCase();
    // Remove non-alphanumeric characters from the string using regular expression
    str = str.replace(/[^a-z0-9]/g, '');
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("dad"));