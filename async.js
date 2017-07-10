
module.exports = function() {
    Array.prototype.foreachPromise = function (fn) {
        let index = 0;
        let self = this;
        function next() {
            if( index < self.length) {
                fn(self[index++]).then(next)
            }
        }
        next();
    }
}
