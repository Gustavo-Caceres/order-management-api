import express from "express";
import connectDB from './config/Database.js'

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

await connectDB()

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});