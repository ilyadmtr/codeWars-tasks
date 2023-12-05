// Take 2 strings s1 and s2 including only letters from a to z.
//     Return a new sorted string, the longest possible,
//     containing distinct letters - each taken only once - coming from s1 or s2.
//My variant
function longest(s1, s2) {
    return [...new Set([...s1.split(''), ...s2.split('')].sort())].join('');
}
//Best practice
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
console.log(longest(a, b))