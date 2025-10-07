'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Integrating AI with SQL',
      issuer: 'Online Learning Platform',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Data Analysis Fundamentals',
      issuer: 'Online Learning Platform',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Online Learning Platform',
      color: 'from-green-600 to-teal-600',
    },
    {
      title: 'Power BI Dashboard Design',
      issuer: 'Online Learning Platform',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      title: 'Responsive Web Development',
      issuer: 'Online Learning Platform',
      color: 'from-red-600 to-pink-600',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full bg-white dark:bg-slate-900 border-none shadow-xl hover:shadow-2xl transition-all group cursor-pointer">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
