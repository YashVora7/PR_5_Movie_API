const Movie = require("../models/movie.schema")

const createmovie=async(req,res)=>{
    let data=await Movie.create(req.body)
    res.status(201).send(data)
}

const deletemovie=async(req,res)=>{
    let{id}=req.params
    const data = await Movie.findById(id);
    if (!data) {
        return res.status(404).json({ error: "Movie not found" });
    }
    await Movie.findByIdAndDelete(id);
    res.json({ message: "Movie deleted" });
}

const updatemovie = async (req, res) => {
    let { id } = req.params
    let data = await Movie.findByIdAndUpdate(id, req.body)
    data = await Movie.findById(id)
    res.status(200).send(data)
}

const ratingmovie = async (req, res) => {
    let { id } = req.params
    let { rating } = req.body
    if (rating < 0 || rating > 10) {
        return res.status(400).json({ error: 'Invalid rating. Rating must be between 0 and 10.' });
    }

    let data = await Movie.findById(id)

    if (!data) {
        res.send({ error: "Movie not found" })
    }
    data.ratings.push({ value: rating })

    let printmovie = await data.save()
    res.json(printmovie)
}

const commentmovie = async (req, res) => {
    let { id } = req.params
    let { text } = req.body

    let data = await Movie.findById(id)

    if (!data) {
        res.send({ error: "Movie not found" })
    }
    data.comments.push({ text })

    let print = await data.save()
    res.json(print)
}

const filtermovie = async(req , res) =>{
    let {title , addedBy , releaseDate , category} = req.query;
    let filter = {}

    if(title){
        filter.title = title;
    }
    if(addedBy){
        filter.addedBy = addedBy;
    }
    if(releaseDate){
        filter.releaseDate = releaseDate;
    }
    if(category){
        filter.category = category;
    }
    const data = await Movie.find(filter)
    res.json(data)
}

module.exports = {createmovie, deletemovie, updatemovie, ratingmovie, commentmovie, filtermovie}