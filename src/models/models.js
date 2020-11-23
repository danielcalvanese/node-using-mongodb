import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Product name is required.'
  },
  description: {
    type: String,
    required: 'Product description is required.'
  }
  category: {
    type: String,
  }
  price: {
    type: Number,
  }
  created_date: {
    type: Date,
    default: Date.now
  }
})
