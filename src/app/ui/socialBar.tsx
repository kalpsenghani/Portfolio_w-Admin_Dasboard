"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function SocialBar() {
  return (
    <div className="fixed left-10 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
      {/* Gmail */}
      <a 
        href="mailto:kalpsenghani0601@gmail.com" 
        className="group relative p-2"
        aria-label="Email"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <MdEmail 
          className="w-6 h-6 text-gray-300 hover:text-purple-500 transition-colors duration-300 relative" 
        />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/kalpsenghani" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2"
        aria-label="GitHub"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <FaGithub 
          className="w-6 h-6 text-gray-300 hover:text-purple-500 transition-colors duration-300 relative" 
        />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/kalp-senghani-899958233/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2"
        aria-label="LinkedIn"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <FaLinkedin 
          className="w-6 h-6 text-gray-300 hover:text-purple-500 transition-colors duration-300 relative" 
        />
      </a>

      {/* Facebook */}
      <a 
        href="https://facebook.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2"
        aria-label="Facebook"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <FaFacebook 
          className="w-6 h-6 text-gray-300 hover:text-purple-500 transition-colors duration-300 relative" 
        />
      </a>

      {/* Instagram */}
      <a 
        href="https://instagram.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative p-2"
        aria-label="Instagram"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <FaInstagram 
          className="w-6 h-6 text-gray-300 hover:text-purple-500 transition-colors duration-300 relative" 
        />
      </a>

      {/* Vertical Line */}
      <div className="w-px h-24 bg-gradient-to-b from-purple-500/50 to-blue-500/50 mx-auto"></div>
    </div>
  );
} 