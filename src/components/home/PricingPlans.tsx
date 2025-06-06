import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Free',
      description: 'Basic access to get started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { text: '5 Free Mock Tests', included: true },
        { text: 'Basic Performance Analytics', included: true },
        { text: 'Limited Question Bank Access', included: true },
        { text: 'Email Support', included: false },
        { text: 'Detailed Solutions', included: false },
        { text: 'Personalized Study Plan', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Premium',
      description: 'Most popular choice for serious aspirants',
      monthlyPrice: 499,
      annualPrice: 4999,
      features: [
        { text: 'Unlimited Mock Tests', included: true },
        { text: 'Advanced Analytics Dashboard', included: true },
        { text: 'Full Question Bank Access', included: true },
        { text: 'Priority Email Support', included: true },
        { text: 'Detailed Solutions & Explanations', included: true },
        { text: 'Personalized Study Plan', included: false },
      ],
      cta: 'Get Premium',
      popular: true,
    },
    {
      name: 'Pro',
      description: 'Complete preparation package',
      monthlyPrice: 999,
      annualPrice: 9999,
      features: [
        { text: 'Everything in Premium', included: true },
        { text: 'One-on-One Mentorship', included: true },
        { text: 'Live Doubt Clearing Sessions', included: true },
        { text: 'Interview Preparation', included: true },
        { text: 'Personalized Study Plan', included: true },
        { text: 'Guaranteed Rank Improvement', included: true },
      ],
      cta: 'Get Pro',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Affordable Test Series Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Choose the plan that fits your preparation needs and budget
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center mb-8"
          >
            <span className={`mr-3 ${!isAnnual ? 'font-medium text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle pricing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-green-600 text-xs font-medium ml-1">Save 20%</span>
            </span>
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`rounded-xl overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-primary-500 shadow-xl relative' 
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">
                    {isAnnual ? '/year' : '/month'}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/register"
                  className={`block w-full py-2.5 text-center rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>Need a custom plan for your coaching institute?</p>
          <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
            Contact us for bulk pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;