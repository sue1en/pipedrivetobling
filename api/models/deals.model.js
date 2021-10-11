const mongoose = require("mongoose");

const dealsSchema = {
  name:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true
  },
  value:{
    type:Number,
    required:true
  },
};

module.exports = dealsSchema;