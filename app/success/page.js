 import Link from 'next/link'


const Success = () => {
  return (
    <div className='h-screen grid place-items-center'>

      <div className='text-center'>

        <h1 className='text-8xl font-bold'>Thank You</h1>
        <p className='text-center text-2xl'>Order placed! You will receive an email confirmation.</p>

        <Link href="/">
          <p className='bg-tertiary text-black py-4 px-3  mt-8 hover:bg-primary cursor-pointer rounded-lg'>Continue Shopping</p>
        </Link>

      </div>

    </div>
  )
}

export default Success
