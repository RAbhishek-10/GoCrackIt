import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Calendar, Clock, Shield, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const stripePromise = loadStripe('your_publishable_key');

const PaymentPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);
  const [testDetails, setTestDetails] = useState<any>(null);

  useEffect(() => {
    // Fetch test details from API
    const fetchTestDetails = async () => {
      try {
        // In a real app, make an API call
        const response = await fetch(`https://api.gocrackit.com/tests/${testId}`);
        const data = await response.json();
        setTestDetails(data);
      } catch (error) {
        console.error('Error fetching test details:', error);
        toast.error('Failed to load test details');
      }
    };

    if (testId) {
      fetchTestDetails();
    }
  }, [testId]);

  const plans = {
    monthly: {
      basic: {
        price: 499,
        features: [
          'Access to all mock tests',
          'Detailed performance analytics',
          'Basic study materials',
          'Email support'
        ]
      },
      premium: {
        price: 999,
        features: [
          'Everything in Basic',
          'Live doubt clearing sessions',
          'Personalized study plan',
          'Priority support',
          'Interview preparation'
        ]
      }
    },
    yearly: {
      basic: {
        price: 4999,
        features: [
          'All Basic monthly features',
          '2 months free',
          'Download study materials',
          'Offline access'
        ]
      },
      premium: {
        price: 9999,
        features: [
          'All Premium monthly features',
          '2 months free',
          'One-on-one mentorship',
          'Job placement assistance',
          'Resume building workshop'
        ]
      }
    }
  };

  const handlePayment = async (planType: 'basic' | 'premium') => {
    setIsProcessing(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // In a real app, make an API call to create a payment session
      const response = await fetch('https://api.gocrackit.com/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planType,
          duration: selectedPlan,
          testId
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your preparation needs
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedPlan === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedPlan === 'yearly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs font-medium text-green-500">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">₹{plans[selectedPlan].basic.price}</span>
                <span className="text-gray-500 ml-2">/{selectedPlan === 'monthly' ? 'month' : 'year'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plans[selectedPlan].basic.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePayment('basic')}
                disabled={isProcessing}
                className="w-full btn-primary py-3"
              >
                {isProcessing ? 'Processing...' : 'Get Started'}
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-primary-500 relative"
          >
            <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Recommended
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">₹{plans[selectedPlan].premium.price}</span>
                <span className="text-gray-500 ml-2">/{selectedPlan === 'monthly' ? 'month' : 'year'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plans[selectedPlan].premium.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePayment('premium')}
                disabled={isProcessing}
                className="w-full btn-primary py-3"
              >
                {isProcessing ? 'Processing...' : 'Get Premium Access'}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h4 className="text-xl font-semibold mb-6">Payment Security</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">Secure Payments</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">Multiple Payment Options</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">Auto-Renewal</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;