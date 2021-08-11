'use strict';

function square(n) {
    return (req, res, next) => {
        // console.log("from the middleware : ", req.params.id)
        if (typeof n == 'number') {
            req.number = n * n;
            next();
        } else {
            next(`this is not a number ${n}`)
        }
        
    }
}

module.exports = square;