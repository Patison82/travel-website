
import Image from "next/image";
import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { cartState, favoriteState } from '../atoms/cartState';

const CartList = ({ data }) => {
  const { id, name, image, Quantity, price } = data;
  const [cartItems, setCartItems] = useRecoilState(cartState);
  /* const [favorites, setFavorites] = useRecoilState(favoriteState); */

  const handleRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

 /*  const handleAddToFavorites = () => {
    const existingItem = favorites.find(item => item.id === id);
    if (!existingItem) {
      setFavorites([...favorites, { id, name, image, Quantity, price }]);
    }
  }; */

  return (
    <div className="flex justify-start w-full sm:px-6 lg:px-8 ">
      <div className=" flex items-center justify-center rounded-xl flex-row  ">
          <div className="w-24 h-24 sm:w-25 sm:h-25 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center ">
            <Image
              className="rounded-md "
              src={image}
              alt={name}
              layout="responsive"
              width={100}
              height={100}
              priority
            />
          </div>
        <div className="ml-2 ">
            <div className="sm:font-bold text-xs md:text-lg sm:text-[12px]  ">{name}</div>
            <div className="text-xs sm:text-[10px] ">Qty: {Quantity}</div>
            <div className=" text-xs md:text-sm sm:font-bold sm:mt-1 sm:text-[10px]">
              {price * Quantity}$
            </div>
            <button onClick={handleRemove} >
                <FaRegTrashAlt className="w-2" />
              </button>
            
        </div>
      </div>
    </div>
  );
};

export default CartList;

