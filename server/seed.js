const mongoose = require("mongoose");
require("dotenv").config(); // brings dotenv
const User = require("./Models/User");

// connecting to database
mongoose.connect(process.env.MONGODB_LINK);

let seed = async () => {
  await User.create([
    {
      Name: "Liam",
      Attending: false,
      Vote: "Boy",
    },
  ]);

  console.log("User created");
  mongoose.disconnect(); // Disconnect the database at the end as connection is no longer needed
};

seed(); // call the function.
