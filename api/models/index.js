const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = (model, options = {}) => {
  return new Schema({
    ...model,
  }, {
    versionKey:false,
    toJSON:{
      vistuals:true
    },
    ...options
  });
};

const dealsSchema = require("./deals.model")
const dealModel = mongoose.model("deals", 
createSchema(dealsSchema, {collection:"dealsCollection", timestamps:true}));

module.exports={
  dealModel,
};