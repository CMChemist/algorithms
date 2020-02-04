// MERGE SORTED ARRAY

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/* ************************************************** */

// @param {number[]} nums1
// @param {number} m
// @param {number[]} nums2
// @param {number} n
// @return {void} Do not return anything, modify nums1 in-place instead.

//BEST SOLUTION
var merge = function(nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        console.log('m = ', m)
        console.log('n = ', n)
        console.log('nums1 = ', nums1)
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
};


//MY SOLUTION
// var merge = function(nums1, m, nums2, n) {
//     let location = nums1.length - 1;
//     m = m - 1;
//     n = n - 1;
    
//     while(m >= 0 && n >=0) {
//        if(nums2[n] > nums1[m]) {
//             nums1[location] = nums2[n];
//             location--;
//             n--;
//         } else {
//             nums1[location] = nums1[m];
//             location--;
//             m--;
//         }
//     };
//     if(m < 0) {
//         while (n >= 0) {
//             nums1[location] = nums2[n];
//             location--;
//             n--;
//         }
//     }
// };

const nums1 = [0,0,0,0,0]
const m = 0;
const nums2 =[1,2,3,4,5];
const n = 5;

console.log('Before arr1 = ',nums1)
merge(nums1, m, nums2, n)
console.log('arr1 = ',nums1)
console.log('arr2 = ',nums2)
console.log('nums1[-1] = ', nums1[-1])
console.log('nums2[4] = ',nums2[4])
console.log('nums1[m] > nums2[n]',nums1[m] > nums2[n])


