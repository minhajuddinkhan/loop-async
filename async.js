
let func = (i) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('yo');
        resolve();
    },500)

})
}

let arr = [1,2,3];

function processArray(array, fn) {
    var index = 0;

    function next() {
        if (index < array.length) {
            fn(array[index++]).then(next);
        }
    }
    next();
}



processArray(arr,func);