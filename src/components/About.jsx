// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About StoneX</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Crafting Digital Excellence Since 2018</h3>
            <p className="text-gray-600 mb-6">
              StoneX is a creative digital agency focused on building beautiful, functional websites 
              and applications that help businesses grow and thrive in the digital landscape.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of designers, developers, and strategists work collaboratively to deliver 
              solutions that not only look stunning but also drive real results for our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 text-2xl">✓</div>
                <span className="font-medium">Creative Design</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 text-2xl">✓</div>
                <span className="font-medium">Web Development</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 text-2xl">✓</div>
                <span className="font-medium">Brand Strategy</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 text-2xl">✓</div>
                <span className="font-medium">Digital Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;