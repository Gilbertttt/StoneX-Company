// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">📍</div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Creative Street, Design District, Tokyo 100-0001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">📱</div>
                  <div>
                    <h4 className="font-medium mb-1">Phone Number</h4>
                    <p className="text-gray-600">+81 (0)3 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">✉️</div>
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-gray-600">hello@stonex.co</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">🕒</div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors"
                    >
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;