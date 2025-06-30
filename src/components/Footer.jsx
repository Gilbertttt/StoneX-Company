// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'Services', links: ['Web Design', 'Development', 'Branding', 'Marketing'] },
    { title: 'Company', links: ['About Us', 'Team', 'Careers', 'Contact'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              <span className="ml-3 text-xl font-bold">StoneX</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating meaningful digital experiences that drive growth and innovation for forward-thinking brands.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} StoneX Co. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;