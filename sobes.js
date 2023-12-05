document.body.id = 1;
console.log(document.body.id === 1); // false



const merge  = (a, b)=>{
    return [...a, ...b].sort(function (a, b){
        return a - b;
    })
}

test(()=>{
    const a = [1,2,3,3,4,4,5,6,9];
    const b = [1,3,6,7,7,9,9,9,11];

    expect(merge(a,b)).toEqual([1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 9, 9, 9, 9, 11])
} )
