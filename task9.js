// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘


const variations = [
    ["0", "8"],
    ["1", "2", "4"],
    ["2", "1", "5", "3"],
    ["3", "2", "6"],
    ["4", "1", "5", "7"],
    ["5", "4", "2", "6", "8"],
    ["6", "9", "5", "3"],
    ["7", "8", "4"],
    ["8", "7", "5", "9", "0"],
    ["9","8", "6"],
]

function getPINs(observed) {
    // TODO: This is your job, detective!
    if(observed.length === 1){
        for (const variation in variations) {
            if(observed == variation){
                return variations[variation]
            }
        }
    }
    else{
         const arr = observed.split('').map(el=>{
            for (let i = 0; i < variations.length; i++) {
                if(i == el){
                    return variations[i];
                }
            }
        });
         console.log(variations)
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            arr[i].forEach(el=>{
                res=[]
            })
        }
    }
}

console.log(getPINs("88"));