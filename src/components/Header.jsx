import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* components */
import ButtonOrLink from './ButtonOrLink';

const Header = () => {
  const links = [
    { name: 'Negociação', url: '/' },
    { name: 'Mercados e Ferramentas', url: '/' },
    { name: 'Centro de Conhecimento', url: '/' },
    { name: 'Empresa', url: '/' },
  ];

  return (
    <header className="w-full bg-white shadow-lg h-[64px] fixed z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
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

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-x-2">
            <ButtonOrLink
              href="/"
              className={'bg-custom__blue px-[20px] py-[15px]'}
            >
              Registre-se
            </ButtonOrLink>
            <ButtonOrLink
              href="/"
              className={'px-[30px] text-blue-500 bg-transparent'}
            >
              Login
            </ButtonOrLink>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-blue-500">
              {/* Icon for mobile menu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
