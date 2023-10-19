const checkmovie=(req,res,next)=>{
    let{title,description,releaseDate,category,actors,image,ratings,comments,addedBy}=req.body
    if(title&&description&&releaseDate,category,actors,image,ratings,comments,addedBy){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"})
    }
}
module.exports={checkmovie}