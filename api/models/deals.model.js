const mongoose = require("mongoose");

const dealsSchema = {
  title:{
    type:String,
    required:true
  },
  client_name:{
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
  won_time:{
    type:Date,
    required:true
  }
};

module.exports = dealsSchema;