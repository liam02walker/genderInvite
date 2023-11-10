const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const mongoose = require("mongoose");
const User = require("./Models/User");

mongoose.connect(process.env.MONGODB_LINK);

app.get("/", (_, response) => {
  response.json("These are not the GETs you're looking for.");
});

app.get("/users", async (request, response) => {
  const users = await User.find(request.query);
  response.json(users);
});

app.post("/users", async (request, response) => {
  const newUser = await User.create(request.body);
  response.json(newUser);
});

// Edit Route
app.put("/users/:id", async (request, response) => {
  const updatedGame = await User.findByIdAndUpdate(request.params.id, request.body);
  response.json(updatedGame);
});

app.delete("/users/:id", async (request, response) => {
  const deletedGame = await User.findByIdAndDelete(request.params.id);
  response.json(deletedGame);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
