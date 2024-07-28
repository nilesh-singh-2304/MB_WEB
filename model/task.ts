import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const TaskSchema = new Schema(
  {
    title: {type: String , required:true , unique:true},
    desc: {type: String , required:true},
    start: {type: String , required:true},
    end: {type: String , required:true},
    category : {type: String , required:true}
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Task", TaskSchema);
