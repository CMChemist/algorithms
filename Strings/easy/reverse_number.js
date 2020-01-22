// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// @param {number} x
// @return {number}
const reverse = (x) => {
    let reversed = 0;
    while (x != 0) {
        let pop = x % 10;
        x = Math.trunc(x / 10);
        if (reversed > 2147483647 / 10 || (reversed == 2147483647 / 10 && pop > 7)) return 0;
        if (reversed < -2147483648 / 10 || (reversed == -2147483648 / 10 && pop < -8)) return 0;
        reversed = reversed * 10 + pop;
    }
    return reversed;
};

console.log(reverse(123))