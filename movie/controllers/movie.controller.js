const Movie = require("../models/movie.schema")

const createmovie=async(req,res)=>{
    let data=await Movie.create(req.body)
    res.status(201).send(data)
}

const deletemovie=async(req,res)=>{
    let{id}=req.params
    let data=await Movie.findByIdAndDelete(id)
    res.status(200).send({message: 'Movie deleted successfully'})
}

module.exports = {createmovie, deletemovie}