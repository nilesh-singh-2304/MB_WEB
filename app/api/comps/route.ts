// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import comm from "@/model/comm";
import connectDB from "@/mongoose/mongoose";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};
export async function POST(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
   try {
    const body = await request.json();
    if(body.action == "add"){
      let p = new comm({
        name : body.name,
        image : body.image,
        insta : body.insta,
        linkedin : body.linkedin,
        web : body.web,
        college : body.college,
        rank : body.rank,
        price : body.price,
        month : body.month
        
    })
    await p.save();
    
  
    return NextResponse.json({ success:true  , data: body});
    }

    if(body.action == "fetch"){
      
      let co = await comm.findOne({name:body.name.naam})
      return NextResponse.json({ success:true  , data:co});
    }

    if(body.action == "edit"){
      console.log(body.Name.naam)
      let co = await comm.findOneAndUpdate({name:body.Name.naam} , {name : body.name , image : body.image , insta : body.insta , linkedin : body.linkedin , web : body.web , college : body.college , rank : body.rank , price : body.price , month : body.month})
      return NextResponse.json({ success:true  , data:co});
    }



    if(body.action == "delete"){
      
      let c = await comm.findOneAndDelete({name:body.name.naam})
      console.log('success')
      return NextResponse.json({ success:true });
    }
   } catch (error: any) {
    return NextResponse.json({ success:true  , data: error});
    
   }
}

export async function GET(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
    const body = await comm.find({})
    

  return NextResponse.json({ success:true  , comps: body});
}
