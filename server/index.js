const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const user = require('./routes/user')
const cors = require("cors");
// reading the variables in .env file
require("dotenv").config();

app.use(cors());    
app.use(express.json());

app.use('/users',user)

app.get("/", (req, res) => {
  res.send("home");
});

// console.log(process.env.dbusername)
// console.log(process.env.dbpassword)
mongoose.connect( `mongodb+srv://${process.env.dbusername}:${process.env.dbpassword}@nodeexpress-project.i1wimde.mongodb.net/mern_practice?retryWrites=true&w=majority`).then(() => {
    // .then handling the promise
    app.listen(PORT, () => {
      console.log("server is started ...");
    });
  })
  .catch((error) => console.log(error.message));
