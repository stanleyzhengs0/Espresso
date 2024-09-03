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

//checks if review model exists already, if not creates a new one
const Review = mongoose.models.Reviews || mongoose.model("Reviews", reviewSchema)

export default Review
