import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ReactTyped } from "react-typed";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <span className=""><ReactTyped className="text-2xl font-bold text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]" strings={["OvertimeDev", "MidnightDev", "Your Daily Dev"]} typeSpeed={100} loop backSpeed={30} cursorChar="|" showCursor={true}/></span>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                        <a href="#beranda" className="text-gray-700 hover:text-blue-600 px-3 py-2">Beranda</a>
                        <a href="#layanan" className="text-gray-700 hover:text-blue-600 px-3 py-2">Layanan</a>
                        <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2">Portfolio</a>
                        <a href="#testimoni" className="text-gray-700 hover:text-blue-600 px-3 py-2">Testimoni</a>
                        <a href="#kontak" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;