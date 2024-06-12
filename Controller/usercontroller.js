
const users = require('../Model/userSchema')

const jwt = require('jsonwebtoken')

exports.register = async (req,res)=>{

    const {username,email,password} = req.body
  
    try{ const existUser = await users.findOne({email})
    if(existUser){
        res.status(406).json('account already exist....please login')
    }else{
        const NewUser = new users({
            username,
            email,
            password
        })
        await NewUser.save()

        res.status(200).json(NewUser)
    }
}
  catch(err){
    res.status(401).json(`register request failed due to ${err}`)}
}


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, 'abinusers');
            return res.status(200).json({ user: existingUser, token });
        } else {
            return res.status(404).json("Invalid email or password.");
        }
    } catch (err) {
        return res.status(401).json(`Login request failed due to ${err}`);
    }
}