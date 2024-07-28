// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import proj from "@/model/proj";
import connectDB from "@/mongoose/mongoose";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};
export async function POST(request: NextRequest , res: NextResponse) {
   await mongoose.connect(process.env.MONGO_URI)
   try {
    const body = await request.json();
    console.log(body)
    if(body.action == "add"){
      let p = new proj({
        name : body.name,
        image : body.image,
        insta : body.insta,
        linkedin : body.linkedin,
        yout : body.yout,
        drive : body.drive,
        onel : body.onel,
        desc : body.desc,
        domain : body.domain,
        category : body.category,
        motive : body.motive,
        disp : body.disp,
        projl : body.projl
        
    })
    await p.save();
    
  
    return NextResponse.json({ success:true  , data: body});
    }

    if(body.action == "fetch"){
      console.log(body.name.naam)
      let co = await proj.findOne({name:body.name.naam})
      return NextResponse.json({ success:true  , data:co});
    }

    if(body.action == "edit"){
      console.log(body.Name.naam)
      let co = await proj.findOneAndUpdate({name:body.Name.naam} , {name : body.name , image : body.image , insta : body.insta , linkedin : body.linkedin , yout : body.yout , drive : body.drive , onel : body.onel , desc : body.desc , domain : body.domain , category : body.category , motive : body.motive , disp : body.disp , projl : body.projl} )
      console.log(co)
      return NextResponse.json({ success:true  , data:co});
    }



    if(body.action == "delete"){
      
      let c = await proj.findOneAndDelete({name:body.name.naam})
      console.log('success')
      return NextResponse.json({ success:true });
    }
   } catch (error: any) {
    return NextResponse.json({ success:true  , data: error});
    
   }
}

export async function GET(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
    const body = await proj.find({})
    

  return NextResponse.json({ success:true  , comps: body});
}
