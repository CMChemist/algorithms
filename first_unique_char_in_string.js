// Given a string, find the first non-repeating character in it and 
// return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

// @param {string} s
// @return {number}

var firstUniqChar = function(s) {
    for(var i=0;i<s.length;i++){
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
};

// var firstUniqChar = function(s) {
//     const chars = s.split("")
//     let i = 0;
//     let result;
//     while(i<chars.length) {
//         result = chars.filter(char => char === chars[i])
//         // console.log('result = ', result)
//         if(result.length === 1) {
//             return i
//         }
//         i++;
//     }
//     return -1
// };