var intersect = function(nums1, nums2) {
    let intersections = []
    let result;
    for(let i=0; i < nums1.length; i++) {
        result = nums2.find(element => element === nums1[i])
        if(result != undefined){
            let j = nums2.findIndex(element => element === nums1[i])
            nums2.splice(j,1);
            intersections.push(nums1[i]);
        }
    }
    return intersections;  
}