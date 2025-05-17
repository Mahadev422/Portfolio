import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiThumbsUp, FiThumbsDown, FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(feedback, rating);
    setSubmitted(true);
    setFeedback('');
    setRating(null);
    setTimeout(() => setSubmitted(false), 3000);
  };


  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Feedback Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 bg-gray-800 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">We'd love your feedback!</h3>
          
          {submitted ? (
            <div className="p-4 bg-green-900/30 text-green-400 rounded-md">
              Thank you for your feedback! We appreciate your input.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <p className="text-sm mb-2">How would you rate your experience?</p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setRating('positive')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${rating === 'positive' ? 'bg-green-900/50 text-green-400' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    <FiThumbsUp /> Positive
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating('negative')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${rating === 'negative' ? 'bg-red-900/50 text-red-400' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    <FiThumbsDown /> Needs Improvement
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm mb-2">
                  What can we improve?
                </label>
                <textarea
                  id="feedback"
                  rows="3"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your suggestions..."
                />
              </div>

              <button
                type="submit"
                disabled={!feedback || !rating}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg ${(!feedback || !rating) ? 'bg-gray-700 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
              >
                <FiSend /> Send Feedback
              </button>
            </form>
          )}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">DevResources</h4>
            <p className="text-sm">
              The ultimate collection of tools and components for modern web development.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/Mahadev422/Portfolio.git"
              target='_blank'
              className="text-gray-400 hover:text-white transition-colors">
                <FiGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter className="text-xl" />
              </a>
              <a href="https://linkedin.com/in/mahadevkumar"
              target='_blank'
              className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="mailto:youremail@example.com"
              target='_blank' 
              className="text-gray-400 hover:text-white transition-colors">
                <FiMail className="text-xl" />
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Mahadev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;