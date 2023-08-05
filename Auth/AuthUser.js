const AuthUser =async (req, res,next) => {
    try {
        console.log('middleware');
        next();
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


module.exports = AuthUser