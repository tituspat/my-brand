import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ReactTyped } from "react-typed";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { title: "Home", link: "#" },
    { title: "About Us", link: "#" },
    {
      title: "Services",
      link: "#",
      dropdown: [
        { title: "Web Development", link: "#" },
        { title: "Mobile Development", link: "#" },
        { title: "UI/UX Design", link: "#" }
      ]
    },
    { title: "Portfolio", link: "#" },
    { title: "Contact Us", link: "#" }
  ];

  return (
    <nav className="border-b border-gray-800 bg-[#191919d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold">
              <ReactTyped className=" text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]" strings={["Kelompok 1", "Website Dev"]} typeSpeed={100} loop backSpeed={30} cursorChar="|" showCursor={true}/>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                    onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                    onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                  
                  {item.dropdown && (
                    <div
                      className={`absolute z-10 -ml-4 mt-0 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                        ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                        transition-all duration-200 transform group-hover:opacity-100 group-hover:visible`}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.link}
                className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
              {item.dropdown && (
                <div className="pl-4">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <a
                      key={dropdownIndex}
                      href={dropdownItem.link}
                      className="text-white/80 hover:bg-white/10 block px-3 py-2 rounded-md text-sm"
                    >
                      {dropdownItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;