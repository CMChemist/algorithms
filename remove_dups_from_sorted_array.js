var removeDuplicates = function(nums) {
    let length = nums.length;
    for(i = 0; i < length; i++){
        for(j = i+1; j < length; j++) {
            if (nums[i] === nums[j]) {
                let removed = nums.splice(j,1);
                nums.push(...removed);
                length--;
            }
            console.log('i = ', i) 
            console.log('j = ', j) 
            console.log('nums[i] = ', nums[i]) 
            console.log('nums[j] = ', nums[j]) 
            console.log('length = ', length)
            console.log('nums = ', nums) 
        }
    }
    return length;
};

let array = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(array)