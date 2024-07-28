// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/model/query";
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
      let p = new query({
        name : body.name,
        email : body.email,
        phone : body.phone,
        desc : body.desc,
        category : body.category,
        servreq : body.servreq,
        noofday : body.noofday,
        college : body.college
        
    })
    await p.save();
    
  
    return NextResponse.json({ success:true  , data: body});
    
   } catch (error: any) {
    return NextResponse.json({ success:true  , data: error});
    
   }
}

export async function GET(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
    const body = await query.find({})
    

  return NextResponse.json({ success:true  , comps: body});
}
