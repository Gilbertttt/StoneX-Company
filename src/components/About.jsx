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
            <p className="text-gray-600 mb-6">
            At StoneX, we believe every student's project holds the power to change the world. Across Africa, thousands of brilliant final year projects are forgotten after grading, locked away in archives instead of shaping the future. StoneX is building Nigeria's Innovation Revival Hub; a platform where student ideas don't end at school, but launch as real-world solutions.

            </p>
            <p className="text-gray-600 mb-8">
            We help students refine their ideas, secure funding, access mentorship, and build startups. By bridging the gap between academia and industry, we enable young inventors to create impact, not just resumes. Don't let your last good idea be your final year project with StoneX, it's only the beginning.
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
                <span className="font-medium">UI / UX Design</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 text-2xl">✓</div>
                <span className="font-medium">Product Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;