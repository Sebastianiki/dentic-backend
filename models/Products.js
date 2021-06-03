const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    store:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
    },
    "units-in-pack":{
        type: Number,
        required: true,
    },
    "fast-shipping":{
        type: Boolean,
        required: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    image:{
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model('Product', ProductSchema)