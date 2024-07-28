import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/mongoose/mongoose";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};
export async function POST(request: NextRequest , res: NextResponse) {
    const body  = await request.json();
  return NextResponse.json({ success:true  , data: body});
}
