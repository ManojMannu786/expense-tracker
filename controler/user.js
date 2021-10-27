const User = require('../model/user')

exports.postLogin = (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const pass = req.body.pass;
    // bcrypt.genSalt(saltRounds, function(err,salt){
    //     bcrypt.hash(pass,salt, function(err,hash){
    //         if(err){
    //             console.log(err)
    //             res.json({message: 'unable to create new user'})
    //         }
    //         User.create({
    //             name:name,
    //             email:email,
    //             phone:phone,
    //             pass:pass
    //         })
    //          .then(()=>res.status(201).json({succes: true, message: 'suucessfully stored'}))
    //          .catch(err=>res.status(403).json({succes: false, message: err}))
        // res.json({name:name, phone:phone, email: email, password: pass})
    //     })
    // })
    User.create({
        name:name,
        email:email,
        phone:phone,
        pass:pass
    })
     .then(()=>res.status(201).json({succes: true, message: 'suucessfully stored'}))
     .catch(err=>res.status(403).json({succes: false, message: err}))
    
}