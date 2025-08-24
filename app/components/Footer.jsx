"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Eye} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2"><Eye size={36} className="hover:text-red-600"/>Vision</h3>
          <p className="mt-2 text-sm">Empowering modern web experiences with speed and design.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-500">Home</a></li>
            <li><a href="/about" className="hover:text-red-500">About</a></li>
            <li><a href="/services" className="hover:text-red-500">Services</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Connect</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://twitter.com">
              <Twitter size={26} className="hover:text-blue-500 transition" />
            </a>
            <a href="https://linkedin.com">
              <Linkedin size={26} className="hover:text-cyan-500 transition" />
            </a>
            <a href="https://instagram.com">
              <Instagram size={26} className="hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-md text-gray-500 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} Vision. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
