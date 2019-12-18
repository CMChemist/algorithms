var sortArrayByParity = function(A) {
    let newArray =[]
    for(i=0;i<A.length;i++){
        if(A[i]%2 == 0) {
            newArray.unshift(A[i])
        } else {
            newArray.push(A[i])
        }
    }
    return newArray;
};