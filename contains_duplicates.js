const containsDuplicate = (nums) => {
    for(let i=0; i<nums.length-1;i++){
        for(let j=1; j<nums.length; j++){
            console.log
            if(nums[i] === nums[j] && i != j) {
                return true;
            }
        }
    }
    return false;
};