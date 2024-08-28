
"use client";
import axios from "axios";
import { useRecoilState } from 'recoil';
import { cartState, subtotalState } from '../../../atoms/cartState';
import CartList from '../../../components/CartList';
import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs'; // Clerk Authentifizierungs-Hook
import { useRouter } from "next/navigation" // Importiere die richtige Funktion
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import Link from "next/link";
const Cart = () => {
  const { userId } = useAuth(); // Clerk Authentifizierungs-Daten
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [subtotal, setSubtotal] = useRecoilState(subtotalState);
  const router = useRouter();
  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotalPrice = () => {
    let total = 0;
    cartItem.forEach(item => total += (item.price * item.Quantity));
    return total;
  };

  // Effekt, um den Gesamtpreis zu berechnen, wenn sich die Warenkorbartikel ändern
  useEffect(() => {
    setSubtotal(calculateTotalPrice());
  }, [cartItem]);

  const createCheckoutSession = async () => {
    if (!userId) {
      // Wenn nicht eingeloggt, zur Anmeldeseite weiterleiten
      return router.push('/sign-in'); // Redirect zur Login-Seite von Clerk
    }
    
    try {
      
      const res = await axios.post('/api/checkout_sessions', { cartItem });
     /*  console.log(res); */
      window.location = res.data.sessionURL; // Weiterleitung zur Checkout-Session
      console.log("94",res.data.sessionURL)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex items-center justify-center mx-auto min-h-screen py-16 sm:py-44 px-4 sm:px-6 lg:px-8 flex-col sm:flex-row '>
          <div className="w-full max-w-md mt-8 " >
            {cartItem.length <= 0
              ? (
                <>
                <div className="w-full h-screen flex justify-center items-center flex-col">
                  <h1 className="text-4xl font-bold">Your Cart Is Empty</h1>
                  <Link href={"/"}>
                  <button className="mt-10 bg-primary hover:bg-tertiary rounded-md p-3">Go to Home page</button>
                  </Link>
                </div>
                
                </>
              ) : (
                
                cartItem.map(item => <CartList className="w-full mt-8" key={item.id} data={item} />)
              )}
              <div className="m-6 pr-3">
                  <div className="text-[9px] flex gap-1">
                  <RiErrorWarningLine className="h-3 w-3" />
                  <p>Items placed in this bag are not reserved.</p> 
                  </div>
                  <div className="text-[9px] flex gap-1">
                  <RiErrorWarningLine  className="h-3 w-3" />
                  <p>Pricing: Originally refers to the price the item was first listed at.</p>
                  </div>
                  <div className="text-[9px] flex gap-1">
                  <RiErrorWarningLine  className="h-3 w-3"/>
                  <p>Wenn Du die Darstellung in deutscher Sprache bevorzugst, wähle bitte die deutsche Sprachoption (DE") oben in der Navigation.</p>
                  </div>
              </div>
            </div>
            {cartItem.length > 0 && (
              
                  <div className="bg-gray-100 p-4 md:p-6 rounded-md w-full items-center max-w-md sm:mt-14 shadow-[0_0_10px]">
                      <div className="flex justify-between mb-3">
                                <h2 className="text-left font-bold">Subtotal:</h2>
                                <h2 className="text-right">{subtotal}$</h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="font-bold">
                          Total <span className="text-xs text-gray-400 opacity-70 ">vat included</span> :
                        </h2>
                        <h2 className="text-right">{subtotal}$</h2>
                        
                      </div>

                      <p className="text-sm mt-3">Add a voucher (Optional)</p>
                          <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            placeholder="Enter Your Voucher Code"
                          />
          
                      
                      <button
                        className='text-center bg-primary text-black py-3 px-10 mt-4 block mx-auto hover:bg-tertiary rounded-md mb-4 w-full'
                        onClick={createCheckoutSession}>
                        Checkout & pay
                      </button>
                      <p>we accept</p>
                      <div className="flex flex-row gap-3 ">
                      <FaCcMastercard  className="h-8 w-8 text-gray-700" />
                      <FaCcVisa  className="h-8 w-8 text-gray-700" />
                      <FaCcPaypal className="h-8 w-8 text-gray-700" />
                      <FaGooglePay className="h-8 w-8 text-gray-700" />
                      <FaApplePay  className="h-8 w-8 text-gray-700"/>
                      </div>




                  </div>
              
                
              
            )}
          
      
    </div>
  );
};

export default Cart;
