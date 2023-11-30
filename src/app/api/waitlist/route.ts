import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/waitlist";

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const { email } = await req.json();
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email }])
      .select();
    if (error) {
      throw error;
    }

    const response = NextResponse.json({ message: "success", data });
    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
