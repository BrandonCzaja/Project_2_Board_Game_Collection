///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const collectionSchema = new Schema({
  username: { type: String, required: true},
  game: String,
  imageURL: String,
},
{timestamps: true}
);

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Collection = model("collection", collectionSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Collection;
