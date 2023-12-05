// var maxSequence = function(arr){
//     if(arr.length == 0){
//         return 0;
//     }
//     let maxCurrent = arr[0];
//     let arrLength = arr.length;
//     let maxGlobal = arr[0];
//
//     for (let i = 1; i < arrLength; i++) {
//         maxCurrent = Math.max(maxCurrent + arr[i], arr[i]);
//         if(maxCurrent > maxGlobal){
//             maxGlobal = maxCurrent;
//         }
//     }
//     if(maxGlobal < 0) {
//         return 0
//     } else{
//         return maxGlobal;
//     }
// }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));