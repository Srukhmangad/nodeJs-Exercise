const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: {
        type: String,
        required: true
        },
    
    name: {
        type: String,
        required: true
        },

    total_qnty: {
        type: Number,
        required: true
        },

    category: {
        type: String,
        required: true
        },

    price: {
        type: Number,
        required: true
        }

    });

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
