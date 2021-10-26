exports.postLogin = (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.email;
    const pass = req.body.pass;
    res.json({name:name, phone:phone, email: email, password: pass})
}