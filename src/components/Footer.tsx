import React from 'react';
import { Heart, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
              PORTFOLIO
            </h3>
            <p className="text-sm text-gray-500">Crafting Digital Excellence</p>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-gray-700">•</span>
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using</span>
            <Code2 size={14} className="text-amber-500" />
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 bg-clip-text text-transparent font-semibold">
              React & Tailwind CSS
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 text-sm"
          >
            <a href="#home" className="text-gray-500 hover:text-amber-400 transition-colors">
              Home
            </a>
            <span className="text-gray-700">•</span>
            <a href="#tentang" className="text-gray-500 hover:text-amber-400 transition-colors">
              About
            </a>
            <span className="text-gray-700">•</span>
            <a href="#proyek" className="text-gray-500 hover:text-amber-400 transition-colors">
              Projects
            </a>
            <span className="text-gray-700">•</span>
            <a href="#kontak" className="text-gray-500 hover:text-amber-400 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
