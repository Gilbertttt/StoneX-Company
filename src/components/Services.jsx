// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Startup Transformation",
      description: "We help turn academic projects into viable startups, supporting growth beyond graduation and initial academic goals.",
      icon: "🎨"
    },
    {
      title: "Project Exposure & Marketing",
      description: "We showcase final year projects globally using IT solutions platforms and targeted channels to attract investors and partners.",
      icon: "🛒"
    },
    {
      title: "Project Repository System",
      description: "StoneX offers a secure e-repository to store, organize, and market student projects in partnership with universities.",
      icon: "💻"
    },
    {
      title: "Project Refinement & Refactoring",
      description: "We work with students to enhance and refactor projects, turning raw ideas into minimum viable products (MVPs).",
      icon: "🛠️" 
      
    },  
    {
      title: "Targeted Connection to Markets",
      description: "We match projects to industries and sectors that can benefit most, ensuring ideas find the right audience and purpose.",
      icon: "📈"
    },
    {
      title: "Problem Matching via IT Solutions",
      description: "StoneX uses tech tools to match student innovations with real-world problems, driving practical, scalable impact.",
      icon: "🖌️"  
    },
   
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          We Build Your Projects to Reach Its Target Audience
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;