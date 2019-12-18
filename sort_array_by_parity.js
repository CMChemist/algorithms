var sortArrayByParity = function(A) {
    let odd = []
    let even= []
    for(i=0;i<A.length;i++){
        if(A[i]%2 == 0) {
            even.push(A[i])
        } else {
            odd.push(A[i])
        }
    }
    return even.concat(odd);
};