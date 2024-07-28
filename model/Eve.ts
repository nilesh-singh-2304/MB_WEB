import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const EvenSchema = new Schema(
  {
    name: {type: String , required:true , unique:true},
    image: {type: String , required:true},
    insta : {type: String , required:true},
    linkedin : {type: String , required:true},
    yout : {type: String , required:true},
    onel : {type: String , required:true},
    desc : {type: String , required:true},
    timeline : {type: String , required:true},
    mode : {type: String , required:true},
    prize : {type: String , required:true},
    level : {type: String , required:true},
    category : {type: String , required:true},
    
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Eve", EvenSchema);
