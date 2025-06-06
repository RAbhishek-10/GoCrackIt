import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ExamCategories from '../components/home/ExamCategories';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import UpcomingExams from '../components/home/UpcomingExams';
import PricingPlans from '../components/home/PricingPlans';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'GoCrackIt - Ace Your Government Exams';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div>
      <Hero />
      <ExamCategories />
      <Features />
      <UpcomingExams />
      <Testimonials />
      <PricingPlans />
      <Newsletter />
    </div>
  );
};

export default HomePage;