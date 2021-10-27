import mongoose from "mongoose";

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  shop: {
    type: String,
    required: true,
    unique:true
  },
  access_token: {
    type: String,
    required: true,
  }
});

export  const activeShopModel = mongoose.model('active_shops', shopSchema);
