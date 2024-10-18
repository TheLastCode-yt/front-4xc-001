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
      {/* max-w-screen-xl */}
      <div className="mx-auto container  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href={'/'}>
              <Image
                alt="logo"
                width={68}
                height={26}
                src="/icons/logo-blue.svg"
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
                    'xl:py-[10px] xl:px-[20px] py-[8px] px-[16px] xl:text-base text-sm '
                  }
                >
                  Registre-se
                </ButtonOrLink>
              </div>

              {/* Hamburger Menu Button */}
              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className={`relative group bg-custom__blue-focus p-[10px] rounded transition-all duration-200`}
                >
                  <div
                    className={`relative flex overflow-hidden items-center justify-center w-[18px] h-[18px] transform transition-all duration-200`}
                  >
                    <div
                      className={`flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden`}
                    >
                      {/* First line */}
                      <div
                        className={`bg-custom__blue h-[2px] w-7 transform transition-all duration-300 origin-left ${
                          isMenuOpen ? 'translate-x-10' : 'translate-x-0'
                        }`}
                      />
                      {/* Second line */}
                      <div
                        className={`bg-custom__blue h-[2px] w-7 rounded transform transition-all duration-300 ${
                          isMenuOpen
                            ? 'translate-x-10 delay-75'
                            : 'translate-x-0'
                        }`}
                      />
                      {/* Third line */}
                      <div
                        className={`bg-custom__blue h-[2px] w-7 transform transition-all duration-300 origin-left ${
                          isMenuOpen
                            ? 'translate-x-10 delay-150'
                            : 'translate-x-0'
                        }`}
                      />

                      {/* Cross lines */}
                      <div
                        className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                          isMenuOpen ? 'translate-x-0' : '-translate-x-10'
                        } flex w-0 ${isMenuOpen ? 'w-12' : 'overflow-hidden'}`}
                      >
                        <div
                          className={`absolute bg-custom__blue h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                            isMenuOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                        <div
                          className={`absolute bg-custom__blue h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                            isMenuOpen ? '-rotate-45' : 'rotate-0'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu with Animation */}
        <div
          className={`md:hidden transition-all duration-500 
            ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
        >
          <nav aria-label="Global">
            <ul className="flex flex-col items-start mt-2 space-y-2">
              {links.map((link, index) => (
                <li key={index} className="py-2">
                  <Link
                    href={link.url}
                    className={`block transition-all duration-500 font-bold
                      ${
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
