import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, BookOpen, Target, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About GoCrackIt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Empowering aspirants to achieve their dreams through quality test preparation
          </motion.p>
        </div>
      </section>

      {/* Our Mission */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At GoCrackIt, we believe that quality education should be accessible to all. Our mission is to democratize test preparation by providing high-quality, affordable mock tests that help aspirants prepare effectively for government competitive exams.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the challenges faced by millions of aspirants across India who dream of securing government jobs. Our platform is designed to address these challenges by offering realistic test simulations, detailed performance analytics, and personalized improvement strategies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Quality Content:</span> All our tests are designed by experts with years of experience in competitive exam preparation.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Affordability:</span> We offer premium quality test series at prices that are accessible to students from all economic backgrounds.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Innovation:</span> We continuously innovate our platform to provide the best learning experience and stay updated with the latest exam patterns.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted platform for government exam preparation in India.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every test and feature we develop.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Building a supportive community of aspirants helping each other succeed.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning</h3>
                <p className="text-gray-600">
                  Continuous learning and improvement is at the core of what we do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">50K+</p>
              <p className="text-primary-200">Active Users</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">200+</p>
              <p className="text-primary-200">Test Series</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">5K+</p>
              <p className="text-primary-200">Success Stories</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">4.8</p>
              <p className="text-primary-200">User Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of experienced educators, exam toppers, and technology experts who are passionate about helping students succeed.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Former IAS officer with 15+ years of experience in education and government sectors.',
              },
              {
                name: 'Priya Sharma',
                role: 'Head of Content',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'SSC topper with expertise in creating high-quality test content for competitive exams.',
              },
              {
                name: 'Amit Verma',
                role: 'CTO',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Tech expert with a passion for creating innovative educational platforms.',
              },
              {
                name: 'Neha Patel',
                role: 'Head of Operations',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Operations specialist with experience in scaling educational startups.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Start Your Preparation Journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Join thousands of successful aspirants who have cracked their exams with GoCrackIt
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/register" className="btn-primary py-3 px-8 text-lg">
              Get Started
            </a>
            <a href="/test-series" className="btn-outline py-3 px-8 text-lg">
              Explore Test Series
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;