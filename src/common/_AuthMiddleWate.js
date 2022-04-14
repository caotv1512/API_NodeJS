import _JWT from './_JWT'

const isAuth = async (req, res, next)=>{
    const token = req.headers.authorization;
    if (token) {
      try {
            const authData = await _JWT.check(token);
            req.auth = authData;
            next();
      } catch (error) {
        return res.send({data: 'Token is not defined!!!'});
      }
    }
    else{
        return res.send({data: 'Token is correct!!!'});
    }
}

module.exports ={
    isAuth: isAuth,
}