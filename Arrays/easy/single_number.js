// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


// @param {number[]} nums
// @return {number}
var singleNumber = function(nums) {
    no_dups = []
    nums.forEach(num => {
        if(no_dups.includes(num)) {
            no_dups = no_dups.filter(el => el != num)
        }else {
            no_dups.push(num)
        }
    })
    return no_dups[0]
    
};