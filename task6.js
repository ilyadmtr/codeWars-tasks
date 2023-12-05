//Best practice
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//My result
// function duplicateCount(text){
//     let counter = 0;
//     const res = text.toLowerCase().split('').reduce(function(acc, el) {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {});
//     for (const re in res) {
//         if(res[re] > 1){
//             counter++;
//         }
//     }
//     return counter;
// }

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabBcde"));