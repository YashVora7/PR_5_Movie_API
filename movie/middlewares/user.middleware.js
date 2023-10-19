const signupcheck=(req,res,next)=>{
    let{username,password,email}=req.body
    if(username&&password&&email){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"})
    }
}
const logincheck=(req,res,next)=>{
    let{password,email}=req.body
    if(password&&email){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"})
    }
}
module.exports={signupcheck,logincheck}