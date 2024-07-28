// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import members from "@/model/members";
var jwt = require('jsonwebtoken');
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
      let p = new members({
        name : body.name,
        branch : body.branch,
        batch : body.batch,
        image : body.image,
        bannerimg : body.bannerimg,
        email : body.email,
        insta : body.insta,
        linkedin : body.linkedin,
        phone : body.phone,
        role : body.role,
        tagline : body.tagline,
        mbid : body.mbid,
        mbpass : body.mbpass
        
    })
    await p.save();
    
  
    return NextResponse.json({ success:true  , data: body});
    }

    if(body.action == "fetch"){
      console.log(body.mbid.mbid)
      let co = await members.findOne({mbid:body.mbid.mbid})
      return NextResponse.json({ success:true  , data:co});
    }

    if(body.action == "edit"){
      let co = await members.findOneAndUpdate({mbid:body.mbid.mbid} , {name : body.name , branch:body.branch , batch:body.batch , image:body.image , bannerimg:body.bannerimg , email:body.email , insta:body.insta , linkedin:body.linkedin , phone:body.phone , role:body.role , tagline:body.tagline , mbid:body.mbid.mbid , mbpass:body.mbpass} )
      console.log(co)
      return NextResponse.json({ success:true  , data:co});
    }

    if(body.action == "find"){
        console.log(body.role)
        let co = await members.find({role : body.role})
        return NextResponse.json({ success:true  , data:co});
      }



    if(body.action == "delete"){
      
      let c = await members.findOneAndDelete({mbid:body.mbid.mbid})
      console.log('success')
      return NextResponse.json({ success:true });
    }


    if(body.action == "login"){
      
      let c = await members.findOne({mbid:body.mbid , role : body.role})
      var token = jwt.sign({"email":body.email , "name":body.name }, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: '5d' });
      if(  c==null){
        return NextResponse.json({ success:false });
      }
      if(body.mbpass == c.mbpass){
        return NextResponse.json({ success:true , name:c.name , email:c.email , token:token , role:c.role });
      }
      else{
        return NextResponse.json({ success:false });
      }
    }
   } catch (error: any) {
    return NextResponse.json({ success:true  , data: error});
    
   }
}

export async function GET(request: NextRequest , res: NextResponse) {
  const connect = await mongoose.connect(process.env.MONGO_URI)
    const body = await members.find({})
    

  return NextResponse.json({ success:true  , comps: body});
}
