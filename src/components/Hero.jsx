// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Projects for our<span className="text-blue-600"> World Today</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            We transform ideas into exceptional digital experiences that resonate with your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View Projects
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-gray-600 flex justify-center">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;