// Your code here
let arr = [1,1,1,1,2,3,3,3,3];

Array.prototype.myPrint = function() {
    this.forEach(ele => {
        console.log(ele);
    });
    return;
}

// arr.myPrint();

Array.prototype.uniq = function() {
    let set = new Set(this);
    return Array.from(set);
}

// console.log(arr.uniq());

Array.prototype.twoSum = function() {
    let resArr = [];
    for (i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] == 0) {
                resArr.push([i, j]);
            }
        }
    }
    return resArr;
}

let arr2 = [-1, 0, 2, -2, 1];

console.log(arr2.twoSum());

Array.prototype.transpose = function() {
    let resArr = [];
    for (i = 0; i < this.length; i++) {
        let subArr = [];
        for (j = 0; j < this.length; j++) {
            subArr.push(this[j][i]);
        }
        resArr.push(subArr);
    }
    return resArr;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());