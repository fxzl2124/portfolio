import React from 'react';
import ProjectCard, { type ProjectCardProps } from './ProjectCard';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projectData: ProjectCardProps[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform built with MERN stack, featuring secure payment integration, real-time inventory management, and responsive design.',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Admin Dashboard',
      description: 'Responsive analytics dashboard for visualizing user data and business metrics with interactive charts and real-time updates.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Recharts', 'Auth0'],
      repoUrl: '#',
    },
    {
      title: 'Weather Application',
      description: 'Clean and intuitive weather app that fetches real-time data from public APIs with location-based forecasts and beautiful animations.',
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'API', 'Framer Motion'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat interface with AI integration, featuring real-time messaging, markdown support, and beautiful UI animations.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['React', 'WebSocket', 'OpenAI', 'Tailwind'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals with drag-and-drop interface and dynamic page builder.',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'TipTap'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Social Media App',
      description: 'Full-stack social media application with posts, comments, likes, and real-time notifications.',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      liveUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <section id="proyek" className="relative py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-amber-500 font-semibold tracking-wider text-xs sm:text-sm mb-3"
          >
            PORTFOLIO
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
