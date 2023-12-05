function cakes(recipe, available) {
    const props1 = Object.getOwnPropertyNames(recipe);
    let res = Infinity;
    for (let i = 0; i < props1.length; i++) {
        if(!available[props1[i]])return 0;
        if(Math.floor(available[props1[i]] / recipe[props1[i]]) < res) res = Math.floor(available[props1[i]] / recipe[props1[i]]);
    }
    return res;
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available));