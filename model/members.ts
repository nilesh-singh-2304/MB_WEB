import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const MemSchema = new Schema(
  {
    name: {type: String , required:true},
    branch : {type: String , required:true},
    batch : {type: String , required:true},
    image: {type: String , required:true },
    bannerimg : {type: String , default:"https://pagedone.io/asset/uploads/1705471739.png"},
    email : {type: String , required:true , unique:true},
    insta : {type: String },
    linkedin : {type: String },
    phone : {type: String , required:true},
    intrests : {type: Array, default:[]},
    hobbies : {type: Array, default:[]},
    skills : {type: Array, default:[]},
    role : {type: String , required:true},
    tagline : {type: String , required:true},
    mbid : {type: String , required:true , unique:true},
    mbpass : {type: String , required:true , unique:true},
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Member", MemSchema);
