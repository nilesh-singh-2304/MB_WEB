// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import task from "@/model/task";
import connectDB from "@/mongoose/mongoose";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

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
      let p = new task({
        title : body.title ,
        desc : body.desc,
        start : body.start,
        end : body.end,
        category : body.category
        
    })
    await p.save();
    
  
    return NextResponse.json({ success:true  , data: body});
    }

    if(body.action == "fetch"){
      console.log(body.name.naam)
      let co = await task.findOne({title:body.name.naam})
      return NextResponse.json({ success:true  , data:co});
    }

    if(body.action == "edit"){
      console.log(body.Name.naam)
      let co = await task.findOneAndUpdate({title:body.Name.naam} , {title : body.title , desc : body.desc , start : body.start , end : body.end , category : body.category} )
      console.log(co)
      return NextResponse.json({ success:true  , data:co});
    }



    if(body.action == "delete"){
      
      let c = await task.findOneAndDelete({title:body.name.naam})
      console.log('success')
      return NextResponse.json({ success:true });
    }
   } catch (error: any) {
    return NextResponse.json({ success:true  , data: error});
    
   }
}

export async function GET(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
    const body = await task.find({})
    

  return NextResponse.json({ success:true  , comps: body});
}
