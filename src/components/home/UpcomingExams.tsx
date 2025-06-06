import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingExams = [
  {
    id: 'ssc-cgl-2025',
    title: 'SSC CGL 2025',
    date: 'May 15, 2025',
    registrationEnd: 'April 10, 2025',
    applicants: '2.5M+',
    testSeries: '/test-series/ssc-cgl',
    color: 'bg-blue-500',
  },
  {
    id: 'ibps-po-2025',
    title: 'IBPS PO 2025',
    date: 'June 8, 2025',
    registrationEnd: 'May 20, 2025',
    applicants: '1.8M+',
    testSeries: '/test-series/ibps-po',
    color: 'bg-green-500',
  },
  {
    id: 'rrb-ntpc-2025',
    title: 'RRB NTPC 2025',
    date: 'July 12, 2025',
    registrationEnd: 'June 15, 2025',
    applicants: '2.2M+',
    testSeries: '/test-series/rrb-ntpc',
    color: 'bg-purple-500',
  },
  {
    id: 'sbi-clerk-2025',
    title: 'SBI Clerk 2025',
    date: 'August 5, 2025',
    registrationEnd: 'July 10, 2025',
    applicants: '1.5M+',
    testSeries: '/test-series/sbi-clerk',
    color: 'bg-orange-500',
  },
];

const UpcomingExams = () => {
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
    <section className="py-20 bg-gray-50" id="upcoming-exams">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Upcoming Government Exams
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest exam schedules and prepare with our comprehensive test series
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {upcomingExams.map((exam) => (
            <motion.div
              key={exam.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className={`h-2 ${exam.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{exam.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    <span>Exam Date: {exam.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    <span>Registration Ends: {exam.registrationEnd}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-gray-400" />
                    <span>Expected Applicants: {exam.applicants}</span>
                  </div>
                </div>
                
                <Link
                  to={exam.testSeries}
                  className="flex items-center justify-center w-full py-2.5 bg-gray-100 hover:bg-primary-50 text-primary-700 rounded-lg font-medium transition-colors"
                >
                  <span>Prepare with Test Series</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            to="/test-series" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            View all upcoming exams
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingExams;