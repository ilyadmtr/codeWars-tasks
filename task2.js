// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//     If the function is passed a valid PIN string, return true, else return false.
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//My variant
function validatePIN (pin) {
   return  (pin.split('').length == 4
           ||  pin.split('').length == 6) && ! pin.split('').map(el => Number.isInteger(Number.parseInt(el, 10))).includes(false);
}
//Best practice
function ValidatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// console.log(validatePIN('1234'));
// console.log(validatePIN('12345'));
// console.log(validatePIN('a234'));
// console.log(validatePIN('.234'));
// console.log(validatePIN('123456'));
// console.log(validatePIN('12.0'));
// console.log(validatePIN('896624'));
// console.log(validatePIN('-12345'));
// console.log(validatePIN('34^2'));
// console.log(validatePIN('342 '));