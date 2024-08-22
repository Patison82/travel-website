/* "use client"
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { cartState } from '@/atoms/cartState';
import toast from 'react-hot-toast';
import { subtotalState } from '../atoms/cartState';
const HotelCard = ({ hotel }) => {
    const [cartItem,setCartItem] = useRecoilState(cartState)


    const addItemCart = () => {


        if (cartItem.findIndex(h => h.id === hotel.id) === -1){

        
        setCartItem(prevState=>[...prevState, hotel]);
    }else{
        setCartItem(prevState=>{
            return prevState.map((item)=>{
                return item.id === hotel.id?{...item, quantity :item.quantity+1}: item
            })
        })
    }


    toast(`${hotel.name}added to cart`)

      };

  return (
    <div className="flex flex-col justify-center items-center ">
      <Image
        className="mx-auto w-[350px] h-[200px] object-contain"
        src={hotel.image}
        alt={hotel.name}
        width={350}
        height={200}
      />
      <div>
        <h2>{hotel.name}</h2>
        <h3>{hotel.price} €</h3>
        <button onClick={() => addItemCart(hotel)} className="bg-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
 */
"use client";
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { cartState, subtotalState } from '@/atoms/cartState';
import toast from 'react-hot-toast';

const HotelCard = ({ hotel }) => {
    const [cartItem, setCartItem] = useRecoilState(cartState);
    const [subtotal, setSubtotal] = useRecoilState(subtotalState);

    const addItemCart = () => {
        let updatedCart;

        if (cartItem.findIndex(h => h.id === hotel.id) === -1) {
            updatedCart = [...cartItem, hotel];
            setCartItem(updatedCart);
        } else {
            updatedCart = cartItem.map((item) =>
                item.id === hotel.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItem(updatedCart);
        }

        // Subtotal aktualisieren
        const newSubtotal = updatedCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
        setSubtotal(newSubtotal);

        // Toast mit Hotelname und aktuellem Subtotal anzeigen
        toast(`${hotel.name} added to cart`);
    };

    return (
        <div className="flex flex-col justify-center items-center ">
            <Image
                className="mx-auto w-[350px] h-[200px] object-contain"
                src={hotel.image}
                alt={hotel.name}
                width={350}
                height={200}
                style={{ width: 'auto', height: 'auto' }}
                priority
            />
            <div>
                <h2>{hotel.name}</h2>
                <h3>{hotel.price} €</h3>
                <button onClick={() => addItemCart(hotel)} className="bg-white">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default HotelCard;