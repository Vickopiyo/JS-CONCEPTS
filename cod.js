

let arr1 = [1,2,3,4]
let arr2= [1,2,3,4]


function solution(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(function(a,b){
        if(a < b){
            return -1;
        } else if(a == b){
            return 0;
        } else {
            return 1;
        }
    });
    B.sort(function(a,b){
        if(a < b){
            return -1;
        } else if(a == b){
            return 0;
        } else { 
            return 1;
        }
    });
    var i = 0;
    for (var k = 0; k < n; k++) {
        if (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}
console.log(solution(arr1,arr2))