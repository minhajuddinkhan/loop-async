'use strict';

require('./async')();



[ 1, 2, 3, 4, 5].foreachPromise((i) => {
    return request(i);
});


// mimics request.
function request(url) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('response from url', url);
                resolve(url)
            },500);
    })
}