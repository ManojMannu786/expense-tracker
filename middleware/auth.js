const jwt = require('jsonwebtoken');

const User = require('../model/user')

exports.verifyToken = (req,res,next)=>{
    try{
        const token = req.header('authorization');
        // console.log(token);
        const secretKey = 'ManojKumarSharpenier'
        const userId = Number(jwt.verify(token, `${secretKey}`))
        User.findByPk(userId).then(user=>{
            console.log(JSON.stringify(user));
            req.user = user;
            next();
        }).catch(err=>{throw new Error(err)})


    } catch(err){
        console.log(err);
        res.status(201).json({success: false})
        // err
      }
}
