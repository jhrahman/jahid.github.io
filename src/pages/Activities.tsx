import { motion } from 'framer-motion'
import React from 'react'

const Activities = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

interface Project {
  title: string;
  description: string;
  image?: string;
  livePreview?: React.ReactNode;
  liveImage?: React.ReactNode;
  tags: string[];
  features: string[];
}

const projects: Project[] = [
    {
      title: 'Basic E-commerce Website',
      description: 'A responsive e-commerce website with product showcase and shopping features.',
      image: '/images/project1.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: []
    },
    {
      title: 'CRUD Operation Web Application',
      description: 'A web-based asset management system with complete CRUD functionality',
      image: '/images/project2.png',
      liveImage: (
        <div className="bg-[#d3e5fc] p-4 rounded-t-lg h-64 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full">
            <div className="text-black text-xl font-bold mb-4">JTV Client PC App v4.0</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <input type="text" placeholder="Device Name" className="w-full p-2 border rounded text-sm text-gray-700" />
                <input type="text" placeholder="IP Address" className="w-full p-2 border rounded text-sm text-gray-700" />
              </div>
              <div className="space-y-2">
                <select className="w-full p-2 border rounded text-sm text-gray-700">
                  <option>---None---</option>
                </select>
                <input type="text" placeholder="MAC Address" className="w-full p-2 border rounded text-sm text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      ),
      tags: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'],
      features: []
    },
    {
      title: 'Internal Office Network Topology',
      description: 'Comprehensive network infrastructure design and implementation for internal office communications',
      image: '/images/project3.png',
      tags: ['DHCP', 'VLAN', 'VTP', 'InterVLAN Routing', 'IP Routing', 'Static Route', 'SSH', 'Switching', 'Standard ACL', 'Extended ACL'],
      features: []
    },
  ]

  // Handle click on modal backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <React.Fragment>
      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative bg-black/50 p-4 rounded-lg shadow-2xl transform"
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-[70vw] max-h-[75vh] w-auto h-auto object-contain rounded-lg [-webkit-image-rendering:crisp-edges]"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <motion.button 
              className="absolute -top-4 -right-4 text-white hover:text-accent bg-black/80 rounded-full p-2 shadow-lg z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
            >
              <span className="sr-only">Close preview</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-accent px-4"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-secondary rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="relative group">
              {project.image ? (
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative cursor-pointer"
                    onClick={() => project.image && setSelectedImage(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-out"
                    />
                    {/* Hover overlay with Live Demo button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      {(project.title === "Basic E-commerce Website" || project.title === "CRUD Operation Web Application") && (
                        <motion.a
                          href={project.title === "Basic E-commerce Website" 
                            ? "https://jhrahman.github.io/laurels/"
                            : "https://jtv-pc.netlify.app/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg shadow-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="font-medium">Live Demo</span>
                          <svg 
                            className="w-4 h-4 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              ) : project.livePreview ? (
                project.livePreview
              ) : null}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-accent text-center">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary px-4 py-2 rounded-full text-sm border border-accent/20 hover:border-accent/50 transition-colors hover:scale-105 transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </React.Fragment>
  );
}

export default Activities