// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//     Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//My solution
const binaryArrayToNumber = arr => {
    let result = 0;
    arr.forEach((el, index) =>{
        result += (el*(2**(arr.length - index - 1)));
    })
    return result;
};

//Best practice
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([0,0,0,1,1,0])) //6

