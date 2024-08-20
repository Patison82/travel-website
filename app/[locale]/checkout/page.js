"use client";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

console.log("Stripe Publishable Key:", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PreviewPage() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
    }
  }, []);

  return (
    <form className="flex justify-center pt-32 mx-auto" action="/api/checkout_sessions" method="POST">
      <section className="bg-white ">
        <div className="container mx-auto  pb-10 px-4 pt-32">
          <Image src="/checkout.jpg" alt="hotel avina" width={500} height={100} className="rounded-md" />
          <div>
            <h3 className="text-xl font-bold pt-4">Hotel-Avina</h3>
            <h5 className="font-lg pt-2 ">200$</h5>
          </div>
        </div>

        <button type="submit" role="link "className=" flex justify-center bg-teal-600 p-3 rounded-md m-5 ">
          Checkout & Pay
        </button>
      </section>
    </form>
  );
}
