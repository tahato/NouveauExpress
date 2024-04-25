const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./userRouter");
app.use("/user",router);
let mongoose = require("mongoose");

app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/template", (req, res) => {
  res.render("views.pug");
});

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch((err) => {
    console.error("Erro", err.message);
  });



const port = process.env.PORT;
app.listen(port);
console.log(`Server is running on ${port}`);
