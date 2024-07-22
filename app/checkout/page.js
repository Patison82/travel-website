"use client"
import {useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  
  console.log('Stripe Publishable Key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
export default function PreviewPage() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <form className="flex justify-center pt-32" action="/api/checkout_sessions" method="POST">
      <section >
        <div>
            <Image
            src="/checkout.jpg"
            alt="hotel avina"
            width={100}
            height={50}
            />
            <div>
                <h3 className="heading">Hotel-Avina</h3>
                <h5 className="price">200$</h5>
            </div>
        </div>

        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style js>
        {`
        .heading{
        font_size:28px
        
        
        font_weight:200;
        }
        .price{
        
        font_size:18px
        font_weight:bold;
        }
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}