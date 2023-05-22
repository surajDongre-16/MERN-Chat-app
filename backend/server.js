const express = require("express");
const dotenv = require("dotenv");

const chats = require("./data/data");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API  is running");
});

app.get("/app/chat", (req, res) => {
  res.send(chats);
});

app.get("/app/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
