// src/components/Testimonials.jsx
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc.",
      content: "Working with StoneX transformed our online presence. Their attention to detail and creative approach resulted in a website that truly represents our brand.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Global Solutions",
      content: "The team at StoneX delivered beyond our expectations. Their technical expertise and strategic thinking helped us achieve our business goals faster than anticipated.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Product Manager",
      company: "Innovate Labs",
      content: "StoneX's design solutions have significantly improved our user engagement metrics. Their user-centered approach makes all the difference.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm relative">
            <div className="absolute top-0 left-0 text-6xl text-blue-100 font-serif">"</div>
            
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-dashed mr-6" />
              <div>
                <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg italic">
              {testimonials[currentIndex].content}
            </p>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-blue-50"
            >
              &larr;
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-blue-50"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;