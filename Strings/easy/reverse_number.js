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
    let num = x.toString();
    num = num.split('')
    console.log('num = ', num)
    let i = 0;
    let j = num.length - 1;
    let temp = '';

    if (num[0] === '-') {
        i = 1;
    }
    while (i < j) {
        temp = num[j];
        num[j] = num[i];
        num[i] = temp;
        console.log('i = ', i)
        console.log('j = ', j)
        console.log('temp = ', temp)
        i++;
        j--;

    console.log('num = ', num)
    }
    num = num.join('');
    return parseInt(num);
};

console.log(reverse(123))