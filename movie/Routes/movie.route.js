const {Router}=require("express")
const { createmovie, deletemovie, updatemovie, ratingmovie, commentmovie, filtermovie,  } = require("../controllers/movie.controller")
const { checkmovie } = require("../middlewares/movie.middleware")
const movie=Router()

movie.get("/",(req,res)=>{
    res.status(200).send("Welcome to the movie API")
})
movie.delete("/movie/delete/:id",deletemovie)

movie.post("/movie/create",checkmovie, createmovie)

movie.patch("/movie/update/:id",updatemovie)

movie.patch("/movie/rating/:id",ratingmovie)

movie.patch("/movie/comment/:id", commentmovie)

movie.get("/movie/filter",filtermovie)

module.exports=movie