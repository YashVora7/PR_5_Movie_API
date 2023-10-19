const {Router}=require("express")
const { createmovie, deletemovie,  } = require("../controllers/movie.controller")
const { checkmovie } = require("../middlewares/movie.middleware")
const router=Router()

router.get("/",(req,res)=>{
    res.status(200).send("Welcome to the movie API")
})
router.post("/movie/create",checkmovie,createmovie)
// router.post("/user/login",loginuser)
router.delete("/movie/delete/:id",deletemovie)
// router.get("/user/",userdata)

module.exports=router