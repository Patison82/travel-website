"use client"
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { UserButton } from '@clerk/nextjs';
import { useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();

  return (
    
    <header className="bg-transparent fixed top-0 right-0 left-0 z-40">
      <nav className="navbar w-[90%] my-0 mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link href="/">
              <Image
                className="rounded"
                src="/pavasa.png"
                alt="Logo"
                width={75}
                height={50}
              />
            </Link>
          </div>
          <ul className="capitalize">
            <li className="btn btn-ghost text-[1rem] hidden hover:bg-primary sm:flex">
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact" passHref={true} legacyBehavior={true}>
                <a className="btn btn-ghost text-[1rem] hover:bg-primary">Contact</a>
              </Link>
            </li>
          </ul>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:bg-primary"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <Link href="/checkout" className="card-actions">
                    <button className="btn bg-primary btn-block">
                      View cart
                    </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              {!user ? (
                <>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar hover:bg-primary"
                  >
                    <div className="w-10 rounded-full">
                      <FaUserCircle
                        className="ml-[0.15rem] mt-[0.15rem]"
                        size={35}
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link href="/sign-in" className="justify-between hover:bg-primary">
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link href="/sign-up" className="justify-between hover:bg-primary">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <UserButton showName />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
