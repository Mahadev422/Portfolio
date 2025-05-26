import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiSend,
  FiThumbsUp,
  FiThumbsDown,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://node-authentication-d8r6.onrender.com/auth/feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rating, feedback }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSubmitted(result || 'Thank you for your feedback!');
        setFeedback('');
        setRating(null);
      } else {
        console.error('Error submitting feedback:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 bg-gray-800 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            We'd love your feedback!
          </h3>

          {submitted ? (
            <div className="p-4 bg-green-900/30 text-green-400 rounded-md">
              {submitted}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <p className="text-sm mb-2">How would you rate your experience?</p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setRating('positive')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      rating === 'positive'
                        ? 'bg-green-900/50 text-green-400'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <FiThumbsUp /> Positive
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating('negative')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      rating === 'negative'
                        ? 'bg-red-900/50 text-red-400'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
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
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your suggestions..."
                />
              </div>

              <button
                type="submit"
                disabled={!feedback || !rating || isLoading}
                className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg transition-colors ${
                  !feedback || !rating || isLoading
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isLoading ? (
                  <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <FiSend />
                )}
                {isLoading ? 'Sending...' : 'Send Feedback'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">DevResources</h4>
            <p className="text-sm">
              The ultimate collection of tools and components for modern web
              development.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Mahadev422/Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-[1.2] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-full"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/rajmahadev422/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-[1.2] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-full"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahadev-kumar-15b2ba320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-[1.2] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-full"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="text-gray-400 hover:text-white hover:scale-[1.2] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-full"
              >
                <FiMail className="text-xl" />
              </a>
            </div>
            <p className="text-sm">Subscribe to our newsletter for updates</p>
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
