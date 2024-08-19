import Image from "next/image"

const CartList = ({ data }) => {

  const { name, image, Quantity, price } = data

  return (
    <div className="">

      <div className='bg-[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between rounded-xl'>
        <Image className='rounded-md m-3' src={image} alt="" width={200} height={200}  />

        <div>
          <div className='font-bold text-2xl'>{name}</div>
          <div >Qty: {Quantity}</div>
          <div className='text-2xl font-bold mt-3'>{price * Quantity}$</div>

        </div>
        
      </div>

    </div>
  )
}

export default CartList