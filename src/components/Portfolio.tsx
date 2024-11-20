import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Corporate Website',
    description: 'Professional website for a leading tech company',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['TypeScript', 'Next.js', 'Tailwind']
  },
  {
    title: 'Educational Platform',
    description: 'Interactive learning management system',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Vue.js', 'Firebase', 'Sass']
  },
  {
    title: 'Healthcare Portal',
    description: 'Secure patient management system',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['React', 'GraphQL', 'PostgreSQL']
  },
  {
    title: 'Real Estate App',
    description: 'Property listing and management platform',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Next.js', 'Prisma', 'PostgreSQL']
  },
  {
    title: 'Social Network',
    description: 'Community platform with real-time features',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['React', 'Socket.io', 'MongoDB']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}