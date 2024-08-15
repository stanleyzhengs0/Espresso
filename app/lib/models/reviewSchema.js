import mongoose from "mongoose";

const reviewSchema =  mongoose.Schema({
    cafeName: { 
        type: String, 
        required: true,
        trim: true,
    }, 
    name: { 
        type: String, 
        required: true,
        trim: true,
    },
    rating: { 
        type: Number, 
        required: true,
        min: 1,
        max: 5,
    },
    description: {
        type: String
    },
    datePosted: {
        type: String,
    }
})

const Review = mongoose.model.reviews || mongoose.model("reviews", reviewSchema)

export default Review