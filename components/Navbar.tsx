import React from 'react';
import { SmoothScroll } from './SmoothScroll';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <nav className="pt-8 flex md:justify-between text-ocean h-16 relative z-10">
            <p className="text-xl font-bold text-hearth">
            Mojtaba</p>
            <ul className="gap-8 mr-4 hidden md:flex">
            </ul>
        </nav>
    );
};

export default Navbar;
