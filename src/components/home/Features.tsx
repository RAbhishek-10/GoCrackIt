import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, Clock, Award, BookOpen, 
  PieChart, Users, Zap, Smartphone 
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Timed Mock Tests',
    description: 'Practice with realistic exam timers to improve your speed and accuracy'
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Get comprehensive insights into your performance with section-wise analysis'
  },
  {
    icon: Award,
    title: 'All-India Ranking',
    description: 'Compare your performance with peers across the country'
  },
  {
    icon: BookOpen,
    title: 'Exam-focused Content',
    description: 'Questions designed by experts based on latest exam patterns'
  },
  {
    icon: PieChart,
    title: 'Strength & Weakness',
    description: 'Identify your strong and weak areas to focus your preparation'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Get your doubts cleared by our subject matter experts'
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get immediate feedback and detailed solutions after test completion'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Practice anytime, anywhere with our responsive platform'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose <span className="text-primary-600">GoCrackIt</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our platform is designed to give you the best preparation experience with features that set us apart
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="text-primary-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;