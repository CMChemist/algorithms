// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

//  @param {string} s
//  @return {boolean}
const isPalindrome = (s) => {
    let charOnly = s.replace(/\W/g, '');
    charOnly = charOnly.toLowerCase();
    let charOnlyArray = charOnly.split("")
    let i = 0;
    let j = charOnlyArray.length - 1;
    while (i < j) {
        if (charOnlyArray[i] != charOnlyArray[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// console.log(isPalindrome("race a car"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))