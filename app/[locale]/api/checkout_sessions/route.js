// app/api/checkout_sessions/route.js


import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();  // Asynchron den Request Body lesen
    const items = body.cartItem;  // Es sollte 'cartItem' sein, nicht 'cardItem'

    console.log(items);

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {  // Verwende 'product_data' anstelle von 'hotel_data'
          name: item.name,
          images: [item.image],  // Hier kein Origin erforderlich
        },
        unit_amount: item.price * 100,
      },
      quantity: item.Quantity,  // Verwende 'Quantity' (wenn es großgeschrieben ist)
    }));

    const { origin } = new URL(req.url);

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/`,
    });

    return NextResponse.json({ sessionURL: session.url });
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}

