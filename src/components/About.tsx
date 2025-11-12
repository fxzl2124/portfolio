import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
    'Node.js', 'Figma', 'Git', 'Next.js', 'REST API'
  ];

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces with attention to detail'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized applications for exceptional user experience'
    },
    {
      icon: Award,
      title: 'Quality Delivery',
      description: 'Delivering projects on time with highest standards'
    }
  ];

  return (
    <section id="tentang" className="relative py-32 overflow-hidden">
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
            ABOUT ME
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group mx-auto max-w-sm lg:max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-1 sm:p-2">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop"
                alt="Profile"
                className="w-full aspect-square rounded-xl sm:rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              I'm a passionate <span className="text-amber-400 font-semibold">frontend developer</span> with expertise in creating 
              seamless and engaging digital experiences. With a keen eye for design and a commitment to 
              writing clean, efficient code, I transform complex ideas into elegant solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Beyond coding, I'm constantly exploring new technologies and design trends, 
              always seeking ways to grow and push the boundaries of what's possible in web development.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-purple-600"></span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-amber-500/50 hover:text-amber-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <feature.icon className="w-10 h-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
