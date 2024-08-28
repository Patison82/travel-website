"use client";

import Link from 'next/link';
import Image from 'next/image';
import "./globals.css";




export default function Error() {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:flex-row md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24">
      <div className="relative w-full pb-12 xl:w-1/2 xl:pt-24 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div>
              <h1 className="my-2 text-2xl font-bold" style={{ color: '#5FADA6' }}>
                Looks like you have found the doorway to the great nothing!
              </h1>
              <p className="my-2" style={{ color: '#5FADA6' }}>
                Sorry about that! Please visit our HOMEPAGE to get where you need to go.
              </p>

              <Link href="/">
                <button
                  style={{ color: 'black' }}
                  className="my-2 rounded border border-[#5FADA6] bg-[#F4CAA6] py-4 px-8 text-center text-white hover:bg-[#E5D6C8] focus:outline-none focus:ring-2 focus:ring-opacity-50 sm:w-full lg:w-auto"
                >
                  Take Me Back!
                </button>
              </Link>


            </div>
          </div>
          <div className="relative w-full h-60">
            <Image
              src="https://i.ibb.co/G9DC8S0/404-2.png"
              alt="404 Image"
              layout="responsive"
              objectFit="contain"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-60">
        <Image
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="Group Image"
          layout="responsive"
          objectFit="contain"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}