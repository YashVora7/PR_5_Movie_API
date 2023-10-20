const express =require("express");
const connect = require("./config/db");
const movie = require("./Routes/movie.route");
const router = require("./Routes/user.route");
const app=express()
app.use(express.json())

app.use(router)
app.use(movie)

app.listen(8090,()=>{
    connect()
    console.log("server port on 8090");
})