import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreeScene from '../three/ThreeScene';
import { BookOpen, Award, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Trusted by 10,000+ aspirants
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Ace Your <span className="gradient-text">Government Exams</span> With Confidence
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Comprehensive test series for SSC, Railways, Banking, and State PSC exams. 
              Practice with real exam patterns and boost your preparation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/register" className="btn-primary text-center py-3 px-8 text-lg">
                Get Started
              </Link>
              <Link to="/test-series" className="btn-outline text-center py-3 px-8 text-lg">
                View Test Series
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            {/* This div is intentionally left empty as the 3D scene will be the background */}
          </motion.div>
        </div>
        
        {/* Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-primary-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exam-Focused Content</h3>
            <p className="text-gray-600">
              Meticulously designed questions matching the latest exam patterns and syllabus.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Award className="text-primary-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Detailed Analysis</h3>
            <p className="text-gray-600">
              Comprehensive performance reports with section-wise and topic-wise analysis.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-primary-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Timed Practice</h3>
            <p className="text-gray-600">
              Realistic exam environment with timer and instant result evaluation.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,141.14c67.64,0,133.76-18.59,206.53-84.7Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;