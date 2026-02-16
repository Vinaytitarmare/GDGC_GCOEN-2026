import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function generatedSignature(razorpayOrderId, razorpayPaymentId) {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
}

export async function POST(request) {
  // Validate required environment variable
  if (!process.env.RAZORPAY_KEY_SECRET) {
    console.error("Missing Razorpay credentials. Required: RAZORPAY_KEY_SECRET");
    return NextResponse.json(
      { message: "payment verification service is not configured properly", isOk: false },
      { status: 500 }
    );
  }

  const { orderId, razorpayPaymentId, razorpaySignature } =
    await request.json();

  const signature = generatedSignature(orderId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  }

  // Probably some database calls here to update order or add premium status to user
  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 }
  );
}
