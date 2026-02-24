import { HackOnMembers, HackOnTeams } from "@/config/appwrite";
import { HackOnRegWebHook } from "@/sampledata/HTMLTemplate";
import { AddDataToCollection } from "@/Services/Appwrite";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const Data = await req.json();
    const { team_name, name, email, college, year, phone, department } =
      Data?.payload?.payment?.entity?.notes;
    const AmountInr = Data?.payload?.payment?.entity?.amount / 100;
    const tax2 = Math.round((AmountInr / 100) * 2);    
    const resHacON = await AddDataToCollection(HackOnTeams, {
      TeamName: team_name,
      LName: name,
      LEmail: email,
      LCollege: college,
      LPhoneNo: `${phone}`,
      LYear: `${year}`,
      LDepartment: department,
      PaymentID: Data.payload.payment.entity.id,
      Amount: `${AmountInr - tax2}`,
    });

    await AddDataToCollection(HackOnMembers, {
      Name: name,
      PhNumber: phone,
      email: email,
      Role: "Leader",
      hackOnTeams: resHacON.$id,
    });

    const HTMLDATA = HackOnRegWebHook(
      name,
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        resHacON.$id
      )}`,
      "Hack on",
      "21st Feb 2025",
      "GCOEN",
      "Success",
      Data.payload.payment.entity.id,
      team_name,
      AmountInr
    );

    const resMail = await SendEmail(
      name,
      email,
      HTMLDATA,
      "Thank you for Register the Event!"
    );

    return NextResponse.json(resMail);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(error.message);
  }
}

export const SendEmail = async (name, email, message, subject, attachments) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail app password (not your main password)
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      html: message,

      attachments: attachments,
    };

    const resu = await transporter.sendMail(mailOptions);

    return resu;
  } catch (error) {
    return console.log(error.message);
  }
};
