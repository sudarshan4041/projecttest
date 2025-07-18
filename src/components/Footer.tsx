import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      contactTitle: "Contact With Us",
      email: "stingfupvtltd@stingfu.com",
      copyright: "Copyright © 2025 stingfu. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        service: "Service Policy",
        legal: "Legal",
        sitemap: "Site Map"
      }
    },
    hi: {
      contactTitle: "हमसे संपर्क करें",
      email: "stingfupvtltd@stingfu.com",
      copyright: "कॉपीराइट © 2025 stingfu। सभी अधिकार सुरक्षित।",
      links: {
        privacy: "गोपनीयता नीति",
        terms: "उपयोग की शर्तें",
        service: "सेवा नीति",
        legal: "कानूनी",
        sitemap: "साइट मैप"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            {currentContent.contactTitle}
          </h3>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Mail className="w-5 h-5 text-cyan-400" />
            <a 
              href={`mailto:${currentContent.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {currentContent.email}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              {currentContent.copyright}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {currentContent.links.privacy}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {currentContent.links.terms}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {currentContent.links.service}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {currentContent.links.legal}
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {currentContent.links.sitemap}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}