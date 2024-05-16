'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import demoImage from '../public/img/demo_image.jpg';
import { AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const loggedIn = false;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => setShowDropdown((prev) => true);
  const handleHideDropdown = () => setShowDropdown((prev) => false);
  return (
    <>
      <div className="container py-2 h-16 flex items-center justify-between">
        <Link href="/">
          <h2>
            My<span className="special-word">Blogs.</span>
          </h2>
        </Link>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              href="/blog"
              className={
                pathname === '/blog' ? 'text-primaryColor font-bold' : ''
              }
            >
              Blog
            </Link>
          </li>

          {loggedIn ? (
            <>
              <li>
                <Link
                  href="/create-blog"
                  className={
                    pathname === '/create-blog'
                      ? 'text-primaryColor font-bold'
                      : ''
                  }
                >
                  Create Blog
                </Link>
              </li>
              <li>
                <div className="relative">
                  <Image
                    onClick={handleShowDropdown}
                    src={demoImage}
                    alt="avatar"
                    sizes="100vw"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                  {showDropdown && (
                    <div className="absolute top-0 right-0 bg-primaryColorLight p-5">
                      <AiOutlineClose
                        onClick={handleHideDropdown}
                        className="w-full cursor-pointer"
                      />
                      <button onClick={handleHideDropdown}>Logout</button>
                      <Link onClick={handleHideDropdown} href="/user">
                        Profile
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className={
                    pathname === '/login' ? 'text-primaryColor font-bold' : ''
                  }
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className={
                    pathname === '/signup' ? 'text-primaryColor font-bold' : ''
                  }
                >
                  signup
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              href="/contactus"
              className={
                pathname === '/contactus' ? 'text-primaryColor font-bold' : ''
              }
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
