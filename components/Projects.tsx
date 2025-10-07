'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Database, ChartBar as BarChart, Brain, Code, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Database Management System',
      description: 'Designed and implemented a comprehensive database management system using PostgreSQL, focusing on data integrity, optimization, and complex query operations.',
      tools: ['PostgreSQL', 'SQL', 'Database Design'],
      icon: Database,
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Power BI Interactive Dashboard',
      description: 'Created dynamic and interactive dashboards for business intelligence, enabling data-driven decision making through compelling visualizations.',
      tools: ['Power BI', 'DAX', 'Data Visualization'],
      icon: BarChart,
      color: 'from-yellow-600 to-orange-600',
    },
    {
      title: 'AI Integration with SQL',
      description: 'Developed an innovative solution integrating AI capabilities with SQL databases to automate data analysis and generate intelligent insights.',
      tools: ['Python', 'SQL', 'AI/ML', 'API Integration'],
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Python Data Manipulation Scripts',
      description: 'Built automated Python scripts for data cleaning, transformation, and analysis, improving data processing efficiency by 60%.',
      tools: ['Python', 'Pandas', 'NumPy', 'Automation'],
      icon: Code,
      color: 'from-green-600 to-teal-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full bg-gray-50 dark:bg-slate-800 border-none shadow-xl hover:shadow-2xl transition-all group">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
