import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
  const { amount } = await req.json();

  // Validate required environment variables
  if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error("Missing Razorpay credentials. Required: NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET");
    return NextResponse.json(
      { error: "Payment service is not configured properly" },
      { status: 500 }
    );
  }

  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  
  // Amount is already in paisa (multiplied by 100 in the client)
  const options = {
    amount: amount, // amount in the smallest currency unit (paisa)
    currency: "INR",
    receipt: "receipt#" + Math.random().toString(36).substring(7),
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

