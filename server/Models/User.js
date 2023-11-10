const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  Name: String,
  Attending: Boolean,
  Vote: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
