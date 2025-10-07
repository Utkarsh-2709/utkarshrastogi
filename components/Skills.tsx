'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Database, Brain, Code } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Data Analysis',
      icon: Database,
      skills: ['PostgreSQL', 'Python', 'Microsoft Excel', 'Power BI'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'AI Tools',
      icon: Brain,
      skills: ['Claude AI', 'ChatGPT', 'Perplexity', 'LeetCode', 'Cursor', 'Replit'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      color: 'from-green-600 to-teal-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full bg-white dark:bg-slate-900 border-none shadow-xl hover:shadow-2xl transition-all group">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
