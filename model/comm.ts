import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const CompSchema = new Schema(
  {
    name: {type: String , required:true , unique:true},
    image: {type: String , required:true},
    insta: {type: String , required:true},
    linkedin: {type: String , required:true},
    web: {type: String , required:true},
    college: {type: String , required:true},
    rank: {type: String , required:true},
    price: {type: String , required:true},
    month: {type: String , required:true},
    email : {type: String },
    
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Comm", CompSchema);
