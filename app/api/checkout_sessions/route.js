// app/api/checkout_sessions/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { origin } = new URL(req.url);
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1PdqQRFQn13QZEjzdze1Ie9W',
          quantity: 2,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
