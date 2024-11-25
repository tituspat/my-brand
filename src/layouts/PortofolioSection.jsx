import React, { useState } from 'react';
import { 
  ExternalLink, 
  Maximize2, 
  Code, 
  Users, 
  Calendar,
  Layers,
  Monitor,
  Smartphone,
  Database,
  X
} from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Semua Proyek', icon: <Layers className="w-4 h-4" /> },
    { id: 'web', label: 'Website', icon: <Monitor className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile App', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'system', label: 'Sistem', icon: <Database className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      category: "web",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz, dan progress tracking",
      image: "/api/placeholder/800/600", // Replace with your Figma export
      features: ["Live Streaming", "Interactive Quiz", "Progress Analytics"],
      tech: ["React", "Node.js", "MongoDB"],
      client: "EduTech Indonesia",
      year: "2024",
      preview: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      color: "purple"
    },
    {
      id: 2,
      title: "Healthcare Management",
      category: "system",
      description: "Sistem manajemen rumah sakit terintegrasi dengan EMR dan appointment system",
      image: "/api/placeholder/800/600",
      features: ["Electronic Medical Records", "Appointment System", "Pharmacy Management"],
      tech: ["Vue.js", "Laravel", "PostgreSQL"],
      client: "RS Premier",
      year: "2023",
      preview: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      color: "blue"
    },
    // Add more projects as needed
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
            <Code className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Terbaru </span>
            Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kumpulan proyek terbaik yang telah kami kerjakan dengan tingkat kepuasan klien yang tinggi
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Preview */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Lihat Detail
                    </button>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-${project.color}-100 text-${project.color}-700`}>
                    {filters.find(f => f.id === project.category)?.icon}
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {project.client}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedProject.preview.map((img, index) => (
                    <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
                      <img 
                        src={img}
                        alt={`${selectedProject.title} preview ${index + 1}`}
                        className="w-full rounded-lg shadow-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Tentang Proyek</h4>
                    <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                    
                    <h4 className="font-semibold text-lg mb-4">Fitur Utama</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">Teknologi</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-lg mb-4">Detail Proyek</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-gray-600">
                        <Users className="w-5 h-5" />
                        <span>Klien: {selectedProject.client}</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span>Tahun: {selectedProject.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;