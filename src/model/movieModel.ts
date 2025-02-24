import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title : {
        type : "string",
        required : true
    },

    year : {
        type : "string",
        required : true
    },

    // image : { type: mongoose.Schema.Types.ObjectId, required: true },
    image : { type: "string", required: true },
})


const Movie = mongoose.models.Movie || mongoose.model("Movie" , MovieSchema)


export default Movie