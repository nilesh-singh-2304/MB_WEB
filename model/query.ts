import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const QuerSchema = new Schema(
  {
    name: {type: String , required:true , unique:true},
    email: {type: String , required:true},
    phone : {type: String , required:true},
    desc : {type: String , required:true},
    category : {type: String , required:true},
    servreq : {type: String },
    noofday : {type: String },
    college : {type: String },
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Query", QuerSchema);
