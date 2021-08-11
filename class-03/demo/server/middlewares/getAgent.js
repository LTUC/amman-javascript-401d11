// user-agent : req headers 
module.exports = (req, res, next)=> {
    req.myName = 'Rawan';
    req.browser =  req.headers['user-agent'];
    next();
}