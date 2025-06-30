// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive websites that engage your audience and reflect your brand identity.",
      icon: "🎨"
    },
    {
      title: "Web Development",
      description: "Robust, scalable web applications built with modern technologies for optimal performance.",
      icon: "💻"
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding solutions that establish a memorable presence in your market.",
      icon: "🆔"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that increase visibility, drive traffic, and convert leads.",
      icon: "📈"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces and seamless user experiences that keep visitors engaged.",
      icon: "🖌️"
    },
    {
      title: "E-commerce",
      description: "Custom online stores designed to maximize conversions and provide exceptional shopping experiences.",
      icon: "🛒"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business succeed online
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