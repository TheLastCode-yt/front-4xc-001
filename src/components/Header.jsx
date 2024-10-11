'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/* components */
import ButtonOrLink from './ButtonOrLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'abrir conta', url: '/account/open' },
    { name: 'metodos de deposito', url: '/pricing/deposit-methods' },
    { name: 'link 3', url: '/pricing/model' },
    { name: 'segurança', url: '/safety' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-white fixed w-screen z-50">
      <div className="mx-auto container max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href={'/'}>
              <Image
                alt="logo"
                width={90}
                height={26}
                src="/icons/fxProLogo.svg"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className={`text-black transition-all duration-300 ${
                        pathname === link.url
                          ? 'text-custom__blue'
                          : 'hover:text-custom__blue'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <ButtonOrLink
                  href={'https://trader4xc.com/signup/'}
                  className={
                    'xl:py-[10px] xl:px-[20px] py-[8px] px-[16px] xl:text-base text-sm'
                  }
                >
                  Registre-se
                </ButtonOrLink>
              </div>

              {/* Hamburger Menu Button */}
              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu with Animation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
          }`}
        >
          <nav aria-label="Global">
            <ul className="flex flex-col items-start mt-2 space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className={`block transition-all duration-300 ${
                      pathname === link.url
                        ? 'text-custom__blue'
                        : 'text-black hover:text-custom__blue'
                    }`}
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
