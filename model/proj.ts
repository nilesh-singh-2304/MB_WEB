import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const ProjSchema = new Schema(
  {
    name: {type: String , required:true , unique:true},
    image: {type: String , required:true},
    insta : {type: String , required:true},
    linkedin : {type: String , required:true},
    yout : {type: String , required:true},
    drive : {type: String , required:true},
    onel : {type: String , required:true},
    desc : {type: String , required:true},
    domain : {type: String , required:true},
    category : {type: String , required:true},
    motive : {type: String , required:true},
    disp : {type: String , required:true},
    projl : {type: String , required:true},
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Proj", ProjSchema);
