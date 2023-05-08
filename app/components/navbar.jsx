'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 sharp-corners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            {' '}
            <Image
              src="/images/logoipsum-236.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Link>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <span className="px-3 py-2 rounded-md text-sm font-medium  text-black hover:text-red-500">
                    <i className="fas fa-home"></i> Home
                  </span>
                </Link>
                <Link href="/chat">
                  <span className="px-3 py-2 rounded-md text-sm font-medium  text-black hover:text-red-500">
                    <i className="fas fa-comments"></i> Chat
                  </span>
                </Link>
                <Link href="/pricing">
                  <span className="px-3 py-2 rounded-md text-sm font-medium  text-black hover:text-red-500">
                    <i className="fas fa-dollar-sign"></i> Pricing
                  </span>
                </Link>
                <Link href="/about">
                  <span className="px-3 py-2 rounded-md text-sm font-medium  text-black hover:text-red-500">
                    <i className="fas fa-info-circle"></i> About
                  </span>
                </Link>
                <Link href="/register">
                  <span className="px-3 py-2 rounded-md text-sm font-medium  text-black hover:text-red-500">
                    <i className="fas fa-user-plus"></i> Register
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">
                Home
              </span>
            </Link>
            <Link href="/pricing">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Pricing
              </span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                About
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
