// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// @param {number[]} nums
// @param {number} target
// @return {number[]}
const twoSum = (nums, target) => {
    let hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        console.log('i = ', i)
        console.log('complement = ', complement)
        console.log('hashTable[complement] = ', hashTable[complement])
        if (hashTable[complement] != undefined) {
            return [hashTable[complement], i]
        }
        hashTable[nums[i]] = i
    }
}

let nums = [2, 7, 11, 15]
let result = twoSum(nums, 9)
console.log('result = ', result)