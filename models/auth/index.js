///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
},
  {timestamps:true}
);

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const User = model("user", userSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = User;
