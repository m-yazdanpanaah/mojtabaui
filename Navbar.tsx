import React from 'react';
import { SmoothScroll } from './SmoothScroll';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="pt-8 flex md:justify-between text-ocean h-16 relative z-10">
      <p className="text-xl font-bold text-hearth"/>
      <ul className="gap-8 mr-4 hidden md:flex">
          <SmoothScroll text="Portfolio" to="portfolio" />
          <SmoothScroll text="About" to="about" />
          <SmoothScroll text="Contact me" to="contact" />
          <a className="cursor-pointer" href='https://mojtaba-blog.vercel.app/'>
             Blog </a>




      </ul>
    </nav>
  );
};

export default Navbar;
