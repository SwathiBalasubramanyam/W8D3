// Your code here
Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
}
let arr4 = [9,2,7];
console.log(arr4.bubbleSort());

String.prototype.substrings = function() {
    let resArr = [];
    for(i=0;i<this.length;i++) {
        for(j=i+1;j<=this.length;j++) {
            resArr.push(this.slice(i,j));
        }
    }
    return resArr;
}
console.log("abc".substrings());