// Your code here

Array.prototype.myEach = function(callback) {
    for(i=0;i<this.length;i++) {
        callback(this[i]);
    }
};

let callback = function(el) {
    return el * 2 ;
};

Array.prototype.myMap = function(callback) {
    let resArr = [];
    
    this.myEach((el => resArr.push(callback(el))));
    return resArr;
};



let myReduceCallback = function(acc, el){
    return acc + el;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = this[0];
    let arr = this;
    
    if (initialValue) {
        accumulator = initialValue ;
    } else {
        arr = this.slice(1)
    };

    arr.myEach((el => {
        accumulator = callback(accumulator, el);
    }))
    return accumulator;
}

console.log([-1, 0, 2, -2, 1].myReduce(myReduceCallback, 5));