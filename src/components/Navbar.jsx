import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ContactPopup from "./ContactPopup"; // 👈 import the popup

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false); // 👈 contact popup toggle
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Resume", path: "/#resume" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Priyanshu <span className="text-blue-500">Portfolio</span>
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-blue-400 transition duration-200 font-medium ${
                  location.hash === link.path ? "text-blue-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Contact Button */}
            <button
              onClick={() => setShowContact(true)}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Get In touch
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="text-white hover:text-blue-400 transition duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Contact Button */}
            <button
              onClick={() => {
                closeMenu();
                setShowContact(true);
              }}
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Get in Touch
            </button>
          </div>
        )}
      </nav>

      {/* Contact Popup */}
      <ContactPopup show={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
