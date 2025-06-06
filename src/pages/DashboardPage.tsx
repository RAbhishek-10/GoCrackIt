import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Clock, CheckCircle, BarChart2, 
  Calendar, Award, AlertCircle, User
} from 'lucide-react';

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const upcomingTests = [
    { id: 1, name: 'SSC CGL Tier 1 Mock Test 5', date: '2025-05-10', duration: '60 min' },
    { id: 2, name: 'Banking Prelims Full Mock', date: '2025-05-15', duration: '45 min' },
    { id: 3, name: 'Railway NTPC CBT 1 Practice', date: '2025-05-20', duration: '90 min' },
  ];

  const recentTests = [
    { 
      id: 1, 
      name: 'SSC CGL Tier 1 Mock Test 4', 
      date: '2025-05-01', 
      score: 85, 
      totalQuestions: 100,
      accuracy: 88,
      timeTaken: '52 min',
      rank: 42
    },
    { 
      id: 2, 
      name: 'IBPS PO Prelims Mock 3', 
      date: '2025-04-25', 
      score: 72, 
      totalQuestions: 100,
      accuracy: 76,
      timeTaken: '58 min',
      rank: 128
    },
  ];

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
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Aspirant!</h1>
              <p className="text-primary-100">
                "Success is the sum of small efforts, repeated day in and day out."
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-2 px-6 rounded-lg transition-colors">
                Take a Test
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">Total Tests</h3>
            </div>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-gray-500 mt-1">5 tests this week</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">Completed</h3>
            </div>
            <p className="text-3xl font-bold">18</p>
            <p className="text-sm text-gray-500 mt-1">75% completion rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <BarChart2 className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">Avg. Score</h3>
            </div>
            <p className="text-3xl font-bold">78%</p>
            <p className="text-sm text-gray-500 mt-1">↑ 5% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">Study Time</h3>
            </div>
            <p className="text-3xl font-bold">42h</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </div>
        </motion.div>

        {/* Upcoming Tests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-xl font-semibold">Upcoming Tests</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {upcomingTests.map((test) => (
                  <tr key={test.id}>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{test.name}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(test.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{test.duration}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <button className="btn-primary py-1.5 px-4 text-sm">
                        Start Test
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              View All Tests
            </button>
          </div>
        </motion.div>

        {/* Recent Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <BarChart2 className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold">Recent Performance</h2>
            </div>
            
            <div className="space-y-6">
              {recentTests.map((test) => (
                <div key={test.id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">{test.name}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(test.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Score: {test.score}/{test.totalQuestions}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Accuracy</p>
                      <p className="font-semibold text-gray-900">{test.accuracy}%</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Time Taken</p>
                      <p className="font-semibold text-gray-900">{test.timeTaken}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Rank</p>
                      <p className="font-semibold text-gray-900">#{test.rank}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="text-sm text-gray-600 hover:text-gray-900">
                      View Solutions
                    </button>
                    <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                      Detailed Analysis
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold">Leaderboard</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-primary-50 border border-primary-100 rounded-lg">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <User className="h-4 w-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">You</p>
                  <p className="text-xs text-gray-500">85% accuracy</p>
                </div>
                <div className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  #42
                </div>
              </div>
              
              {[
                { id: 1, name: 'Rahul S.', accuracy: 96, rank: 1 },
                { id: 2, name: 'Priya M.', accuracy: 94, rank: 2 },
                { id: 3, name: 'Amit K.', accuracy: 91, rank: 3 },
              ].map((user) => (
                <div key={user.id} className="flex items-center p-3 border border-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.accuracy}% accuracy</p>
                  </div>
                  <div className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    #{user.rank}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View Full Leaderboard
              </button>
            </div>
          </motion.div>
        </div>

        {/* Study Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <AlertCircle className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-xl font-semibold">Improvement Areas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Quantitative Aptitude</h3>
              <div className="h-2 bg-gray-100 rounded-full mb-2">
                <div className="h-2 bg-red-500 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mb-3">35% accuracy - Needs improvement</p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Practice Now
              </button>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Reasoning</h3>
              <div className="h-2 bg-gray-100 rounded-full mb-2">
                <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mb-3">65% accuracy - Average</p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Practice Now
              </button>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">English Language</h3>
              <div className="h-2 bg-gray-100 rounded-full mb-2">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mb-3">85% accuracy - Good</p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Practice Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;