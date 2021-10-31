const User = require('../model/user');
const Expense = require('../model/expense')

exports.postAddExpense = (req,res,next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    // console.log(amount,description,category)

    //req has user id with token from front End??
    console.log(req.user)
    req.user.createExpense({
        amount: amount,
        description: description,
        category: category
    }).then((expense)=>res.status(201).json({expense, success: true}))
      .catch(err=> res.status(403).json({success: false, error: err}))
}