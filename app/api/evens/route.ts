// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Eve from "@/model/Eve";
import connectDB from "@/mongoose/mongoose";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};
export async function POST(request: NextRequest , res: NextResponse) {
  //  await mongoose.connect(process.env.MONGO_URI)
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
   try {
    const body = await request.json();
    console.log(body)
    if(body.action == "add"){
      let p = new Eve({
        name : body.name,
        image : body.image,
        insta : body.insta,
        linkedin : body.linkedin,
        yout : body.yout,
        onel : body.onel,
        desc : body.desc,
        timeline : body.timeline,
        mode : body.mode,
        prize : body.prize,
        level : body.level,
        category : body.category
        
    })
    await p.save();
    
  
    return NextResponse.json({ success:true  , data: body});
    }

    if(body.action == "fetch"){
      console.log(body.name.naam)
      let co = await Eve.findOne({name:body.name.naam})
      return NextResponse.json({ success:true  , data:co});
    }

    if(body.action == "edit"){
      console.log(body.Name.naam)
      let co = await Eve.findOneAndUpdate({name:body.Name.naam} , {name : body.name , image : body.image , insta : body.insta , linkedin : body.linkedin , yout : body.yout , onel : body.onel , desc : body.desc , timeline : body.timeline , mode : body.mode , prize : body.prize , level : body.level , category : body.category} )
      return NextResponse.json({ success:true  , data:co});
    }



    if(body.action == "delete"){
      
      let c = await Eve.findOneAndDelete({name:body.name.naam})
      console.log('success')
      return NextResponse.json({ success:true });
    }
   } catch (error: any) {
    return NextResponse.json({ success:true  , data: error});
    
   }
}

export async function GET(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
    const body = await Eve.find({})
    

  return NextResponse.json({ success:true  , comps: body});
}
