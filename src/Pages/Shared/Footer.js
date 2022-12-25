import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/chemistry.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-slate-100 text-black">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="flex items-center justify-center space-x-3 lg:justify-start"
          >
            <span className="ml-2 text-xl font-bold font-mono tracking-wide uppercase">
              <span className="bg-emerald-600 text-white border-2 border-emerald-600 py-1 px-2 rounded-l-md">
                CHEM
              </span>
              <span className="text-gray-800 border-2 border-gray-700 py-1 px-1 rounded-r-md">
                TUTOR
              </span>
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-900">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Integrations
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-900">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Public API
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Documentation
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-900">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                rel="noopener noreferrer"
                to="/"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook></FaFacebook>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter></FaTwitter>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram></FaInstagram>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        © 2033 CHEM Tutor All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
