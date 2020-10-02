///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const collectionSchema = new Schema({
  username: { type: String, required: true},
  game: {type:String, unique: true, sparse:true, required:false},
  imageURL: {type:String, unique: true, sparse:true, required:false},
},
{timestamps: true}
);

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Collection = model("collections", collectionSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Collection;
