import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Clock, Calendar, Users, Tag } from 'lucide-react';

const TestSeriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ssc', name: 'SSC Exams' },
    { id: 'banking', name: 'Banking Exams' },
    { id: 'railways', name: 'Railway Exams' },
    { id: 'state-psc', name: 'State PSC' },
    { id: 'teaching', name: 'Teaching Exams' },
  ];

  const testSeries = [
    {
      id: 1,
      title: 'SSC CGL Tier 1 Complete Package',
      category: 'ssc',
      description: 'Comprehensive test series for SSC CGL Tier 1 with 30 full-length mock tests and 20 section-wise tests.',
      tests: 50,
      duration: '60 min per test',
      validity: '1 year',
      enrolled: '5.2K',
      price: 999,
      discountedPrice: 799,
      featured: true,
    },
    {
      id: 2,
      title: 'IBPS PO Prelims + Mains',
      category: 'banking',
      description: 'Complete preparation package for IBPS PO with prelims and mains mock tests, sectional tests, and previous year papers.',
      tests: 45,
      duration: 'Varies',
      validity: '1 year',
      enrolled: '4.8K',
      price: 1299,
      discountedPrice: 999,
      featured: true,
    },
    {
      id: 3,
      title: 'RRB NTPC CBT 1 & 2',
      category: 'railways',
      description: 'Comprehensive test series for Railway NTPC CBT 1 and CBT 2 with bilingual (Hindi & English) questions.',
      tests: 40,
      duration: '90 min per test',
      validity: '1 year',
      enrolled: '6.1K',
      price: 899,
      discountedPrice: 699,
      featured: false,
    },
    {
      id: 4,
      title: 'SBI Clerk Prelims',
      category: 'banking',
      description: 'Focused test series for SBI Clerk Prelims with detailed solutions and performance analytics.',
      tests: 30,
      duration: '45 min per test',
      validity: '6 months',
      enrolled: '3.5K',
      price: 699,
      discountedPrice: 499,
      featured: false,
    },
    {
      id: 5,
      title: 'UP Police Constable',
      category: 'state-psc',
      description: 'Bilingual test series for UP Police Constable recruitment with latest pattern questions.',
      tests: 25,
      duration: '120 min per test',
      validity: '6 months',
      enrolled: '7.2K',
      price: 599,
      discountedPrice: 399,
      featured: false,
    },
    {
      id: 6,
      title: 'CTET Paper I & II',
      category: 'teaching',
      description: 'Complete test series for CTET Paper I (Class 1-5) and Paper II (Class 6-8) with pedagogical content.',
      tests: 35,
      duration: '150 min per test',
      validity: '1 year',
      enrolled: '4.3K',
      price: 1199,
      discountedPrice: 899,
      featured: true,
    },
  ];

  const filteredTests = testSeries
    .filter(test => selectedCategory === 'all' || test.category === selectedCategory)
    .filter(test => test.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary-200 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-primary-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Test Series
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practice with our meticulously designed test series that match the actual exam pattern and help you prepare effectively.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search test series..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input pl-10 pr-10 appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Featured Test Series */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Featured Test Series</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests
              .filter(test => test.featured)
              .map(test => (
                <div key={test.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-primary-600 text-white px-4 py-1 text-sm font-medium">
                    Featured
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{test.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.tests} Tests</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.validity}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.enrolled} enrolled</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">₹{test.discountedPrice}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₹{test.price}</span>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {Math.round((1 - test.discountedPrice / test.price) * 100)}% OFF
                      </span>
                    </div>
                    
                    <button className="btn-primary w-full py-2.5">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>

        {/* All Test Series */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">All Test Series</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests
              .filter(test => !test.featured)
              .map(test => (
                <div key={test.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{test.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.tests} Tests</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.validity}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{test.enrolled} enrolled</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">₹{test.discountedPrice}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₹{test.price}</span>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {Math.round((1 - test.discountedPrice / test.price) * 100)}% OFF
                      </span>
                    </div>
                    
                    <button className="btn-primary w-full py-2.5">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
          
          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No test series found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-outline py-2 px-6"
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TestSeriesPage;