import { WaitListEmailTemplate } from "../../components/email-templates/WaitListTemplate/";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const data = await resend.emails.send({
      from: "Gleephoria <with-glee@gleephoria-test.com>",
      to: [email],
      subject: "Gleerphoria - Thanks for joining the waitlist ♥",
      react: WaitListEmailTemplate({ firstName: "User" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
