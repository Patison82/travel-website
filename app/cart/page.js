/* // components/Cart.js
"use client";
import axios from "axios";
import { useRecoilState } from 'recoil';
import { cartState, subtotalState } from '../../atoms/cartState';
import CartList from '../../components/CartList';
import { useEffect } from 'react';

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [subtotal, setSubtotal] = useRecoilState(subtotalState);

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
    await axios.post('api/checkout_sessions', { cartItem })
      .then(res => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='container mx-auto'>
        {cartItem.length <= 0
          ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
          : cartItem.map(item => <CartList key={item.id} data={item} />)}

        {cartItem.length > 0 && (
          <div className='max-w-[800px] mx-auto mt-4'>
            <h2 className='text-right text-3xl font-bold'>Total: ${subtotal}</h2>
         
            <button
              className='text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800'
              onClick={createCheckoutSession}>
              Checkout & pay
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; */
"use client";
import axios from "axios";
import { useRecoilState } from 'recoil';
import { cartState, subtotalState } from '../../atoms/cartState';
import CartList from '../../components/CartList';
import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs'; // Clerk Authentifizierungs-Hook
import { useRouter } from "next/navigation" // Importiere die richtige Funktion

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
      console.log(res);
      window.location = res.data.sessionURL; // Weiterleitung zur Checkout-Session
      console.log("94",res.data.sessionURL)
    } catch (err) {
      console.error(err);
    }
  };

    // Wenn eingeloggt, die Checkout-Session erstellen
   /*  await axios.post('api/checkout_sessions', { cartItem })
      .then(res => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch(err => console.log(err));
  }; */

  return (
    <div >
      <div className='flex justify-center items-center flex-col mx-auto  pt-28'>
        {cartItem.length <= 0
          ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
          : cartItem.map(item => <CartList key={item.id} data={item} />)}

        {cartItem.length > 0 && (
          <div className='max-w-[800px] mx-auto mt-4 '>
            <h2 className='text-right text-3xl font-bold'>Total: {subtotal}$</h2>
         
            <button
              className='text-right bg-tertiary text-black py-4 px-12 mt-4 block mx-auto hover:bg-slate-400 rounded-md mb-4'
              onClick={createCheckoutSession}>
              Checkout & pay
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
