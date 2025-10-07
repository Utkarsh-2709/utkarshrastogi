'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* === PHOTO SECTION === */}
            <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex justify-center"
>
  {/* Glowing Capsule Wrapper */}
  <div className="relative w-72 h-80">
    {/* Outer animated glow ring */}
    <div className="absolute inset-0 rounded-[9999px] bg-gradient-to-tr from-blue-600 to-cyan-500 animate-[pulseGlow_3s_ease-in-out_infinite] blur-md"></div>

    {/* Inner capsule container */}
    <div className="relative w-full h-full rounded-[9999px] bg-white dark:bg-slate-900 p-1">
      <div className="w-full h-full rounded-[9999px] overflow-hidden">
        <Image
          src="/myphoto.jpg"
          alt="My Photo"
          width={288}
          height={320}
          className="object-cover w-full h-full rounded-[9999px]"
        />
      </div>
    </div>
  </div>
</motion.div>


            {/* === ABOUT TEXT SECTION === */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-gray-50 dark:bg-slate-800 border-none shadow-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Aspiring <span className="font-semibold text-blue-600 dark:text-blue-400">Data Analyst</span> with hands-on web development experience and a strong foundation in data analysis tools.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Currently working as a <span className="font-semibold text-blue-600 dark:text-blue-400">Web Developer Intern</span> at Cyberpassion Technologies Pvt. Ltd.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Skilled in <span className="font-semibold">PostgreSQL, Python, Power BI, and AI tools</span>. Passionate about transforming data into meaningful insights.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* === Custom Animation === */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
            filter: blur(18px);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.12);
            filter: blur(28px);
          }
        }
      `}</style>
    </section>
  );
}