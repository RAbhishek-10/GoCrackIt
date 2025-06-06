import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FileText, Users, BarChart, Clock } from 'lucide-react';

const examCategories = [
  {
    id: 'ssc',
    title: 'SSC Exams',
    description: 'Staff Selection Commission exams including CGL, CHSL, MTS, and more',
    icon: FileText,
    color: 'bg-blue-500',
    tests: 45,
    users: '10K+',
  },
  {
    id: 'banking',
    title: 'Banking Exams',
    description: 'SBI PO, IBPS PO, Clerk, RRB, and other banking examinations',
    icon: Users,
    color: 'bg-green-500',
    tests: 38,
    users: '8K+',
  },
  {
    id: 'railways',
    title: 'Railway Exams',
    description: 'RRB NTPC, Group D, ALP, and other railway recruitment tests',
    icon: BarChart,
    color: 'bg-purple-500',
    tests: 32,
    users: '7K+',
  },
  {
    id: 'state-psc',
    title: 'State PSC Exams',
    description: 'Various state public service commission examinations',
    icon: Clock,
    color: 'bg-orange-500',
    tests: 28,
    users: '5K+',
  },
];

const ExamCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white" id="exam-categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prepare for Top Government Exams
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive test series designed by experts to help you excel in various competitive examinations
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {examCategories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="card p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="text-white h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{category.tests} Tests</span>
                  <span>{category.users} Users</span>
                </div>
                <Link
                  to={`/test-series/${category.id}`}
                  className="inline-block w-full text-center py-2 px-4 bg-gray-100 hover:bg-primary-50 text-primary-700 rounded-lg font-medium transition-colors"
                >
                  View Test Series
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExamCategories;