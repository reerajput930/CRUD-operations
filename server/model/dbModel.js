const mongoose = require("mongoose");

const db = mongoose.Schema({
  name: {
    type:"string",
    required:true
  },
  position: {
    type:"string",
    required:true
  }, 
});

const dbmodel = mongoose.model("User",db)

module.exports = dbmodel
