// function deleteNth(arr,n){
//     let result = [];
//     for (let i = arr.length-1; i >= 0; i--) {
//         let counter = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] === arr[j]){
//                 counter++;
//             }
//             if(j == arr.length-1){
//                 if(counter > n){
//                     arr.splice(i,1)
//                 }
//                 else{
//                     result.unshift(arr[i])
//                 }
//             }
//         }
//     }
//     return result;
// }

//Best practice
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
        cache[n] = (cache[n]||0) + 1;
        return cache[n] <= x;
    });
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2))
console.log(deleteNth([20,37,20,21], 1))
console.log(deleteNth([20,37,20,21], 1))
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

