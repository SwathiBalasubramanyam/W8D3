// Your code here


Array.prototype.range = function(start, end) {
    if (start == end){
        return [this[start]];
    }
    return [this[start]].concat(this.range(start+1, end));
}

function sumRec(arr) {
    if (arr.length == 1){
        return arr[0];
    }

    return (arr[0] + sumRec(arr.slice(1)));
} 

// console.log(sumRec([1,2,3]));

function exponenet(base, exp){
    if (exp == 0) {
        return 1;
    }
    return base * exponenet(base, exp-1);
}
// console.log(exponenet(3, 3));


function exponenet2(base, exp){
    if (exp == 0) {
        return 1;
    } else if (exp == 1) {
        return base;
    } else if (exp % 2 == 0){
        return exponenet2(base, exp/2) ** 2;
    } else {
        return base * (exponenet2(base, (exp - 1) / 2) ** 2);
    }
}

// console.log(exponenet2(3, 3));

function fibonacci(n) {
    if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0,1];
    }
    let fib = fibonacci(n - 1);
    let sum = fib[fib.length-1] + fib[fib.length-2];

    return fib.concat(sum)
}

console.log(fibonacci(10));

function deepDup(arr) {
    let resArr = [];
    arr.forEach((el=> {
        if (el instanceof Array) {
            // base case if el is an array
        }
    }));
}

// [2,3,4,6,[5,7,9], [3]]