'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'; // ✅ added Instagram here
import { Button } from '@/components/ui/button';

export default function Hero() {
  const roles = ['Data Analyst', 'Web Developer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg sm:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4">
              Hi, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Utkarsh Rastogi
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-16 sm:h-20 flex items-center justify-center mb-6"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentRole === index ? 1 : 0,
                    y: currentRole === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    currentRole === index ? 'block' : 'hidden'
                  }`}
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Turning data into insights and ideas into digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          {/* ✅ Social icons section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
              onClick={() => window.open('https://github.com/Utkarsh-2709', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
              onClick={() => window.open('https://www.linkedin.com/in/utkarsh-rastogi-750830337/', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>

            {/* ✅ Instagram */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
              onClick={() => window.open('https://www.instagram.com/utkarsh_2709/', '_blank')}
            >
              <Instagram className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
