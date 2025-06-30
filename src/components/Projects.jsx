// src/components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web design', 'branding', 'development'];
  
  const projects = [
    { id: 1, title: 'E-commerce Platform', category: 'development', description: 'Modern online shopping experience' },
    { id: 2, title: 'Corporate Branding', category: 'branding', description: 'Complete brand identity for tech firm' },
    { id: 3, title: 'Portfolio Website', category: 'web design', description: 'Elegant portfolio for creative agency' },
    { id: 4, title: 'Mobile Application', category: 'development', description: 'Fitness tracking mobile app' },
    { id: 5, title: 'Restaurant Branding', category: 'branding', description: 'Vibrant identity for culinary experience' },
    { id: 6, title: 'SaaS Dashboard', category: 'web design', description: 'User-friendly interface for complex data' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses like yours
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-6 py-2 rounded-full capitalize ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group overflow-hidden rounded-xl">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-blue-200">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <span className="text-sm text-blue-600 uppercase font-medium tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;