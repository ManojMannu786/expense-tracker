const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user')

exports.postSignUp = (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const pass = req.body.pass;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err,salt){
        bcrypt.hash(pass,salt, function(err,hash){
            if(err){
                console.log(err)
                res.json({message: 'unable to create new user'})
            }
            User.create({
                name:name,
                email:email,
                phone:phone,
                pass:hash   // store hash insted of actual password
            })
             .then(()=>res.status(201).json({succes: true, message: 'suucessfully stored'}))
             .catch(err=>res.status(403).json({succes: false, message: err}))
        // res.json({name:name, phone:phone, email: email, password: pass})
        })
    })
    // User.create({
    //     name:name,
    //     email:email,
    //     phone:phone,
    //     pass:pass
    // })
    //  .then(()=>res.status(201).json({succes: true, message: 'suucessfully stored'}))
    //  .catch(err=>res.status(403).json({succes: false, message: err}))
}

function generateAccessToken(id){
    // const random = Math.random();
    const secretKey = 'ManojKumarSharpenier'
    return jwt.sign(id, `${secretKey}`)
}

exports.postLogin = (req,res,next)=>{
    const email = req.body.email;
    const pass = req.body.pass;
    User.findAll({where:{email:email}}).then(user=>{
        if(user.length>0){
            bcrypt.compare(pass, user[0].pass, function(err,response){
                if(err){
                    console.log(err)
                    return res.json({success: false, message: 'something went wrong'})
                }
                if(response){
                    // console.log(JSON.stringify(user))
                    // console.log(user[0].id)
                    const token = generateAccessToken(user[0].id)
                    res.json({token:token, message:'successfully logged in'})
                }
                else{
                    return res.status(401).json({success:false, message: 'invalid password'})
                }
            })
        }
        else{
            return res.status(404).json({success:false, message:'email is not registered'})
        }
        
    }).catch(err=>console.log('err occured :'+ err))
}