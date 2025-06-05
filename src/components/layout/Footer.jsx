import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import {
  Send,
  ThumbsUp,
  ThumbsDown,
  Mail,
  ArrowRight,
  Heart,
  Code,
  Star,
  Users,
  Coffee,
  ExternalLink,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const stats = [
    { icon: Code, label: 'Projects Built', value: '3' },
    { icon: Users, label: 'Happy Clients', value: '5' },
    { icon: Coffee, label: 'Cups of Coffee', value: '10' },
    { icon: Star, label: 'GitHub Stars', value: '5' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Mobile Apps', href: '#' },
    { label: 'Consulting', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(56,189,248,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.1)_0%,_transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800/50"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Your Opinion Matters</span>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Help Me <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Improve</span>
              </h3>
              <p className="text-gray-400 text-lg">
                Your feedback drives continuous improvement and helps create better experiences
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Thank You!</h4>
                  <p className="text-gray-300">{submitted}</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-medium mb-4">How would you rate your experience?</p>
                    <div className="flex gap-4 justify-center">
                      <motion.button
                        type="button"
                        onClick={() => setRating('positive')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          rating === 'positive'
                            ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                            : 'bg-gray-700/50 hover:bg-gray-600/50 border-2 border-transparent'
                        }`}
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <span className="font-medium">Love It!</span>
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setRating('negative')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          rating === 'negative'
                            ? 'bg-red-500/20 text-red-400 border-2 border-red-500/50'
                            : 'bg-gray-700/50 hover:bg-gray-600/50 border-2 border-transparent'
                        }`}
                      >
                        <ThumbsDown className="w-5 h-5" />
                        <span className="font-medium">Needs Work</span>
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="feedback" className="block text-white font-medium mb-2">
                      What can I improve? (Optional)
                    </label>
                    <textarea
                      id="feedback"
                      rows="4"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                      placeholder="Share your thoughts, suggestions, or ideas..."
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={!rating || isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all ${
                      !rating || isLoading
                        ? 'bg-gray-700/50 cursor-not-allowed text-gray-400'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg'
                    }`}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isLoading ? 'Sending...' : 'Send Feedback'}
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h4 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                  Mahadev Kumar
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  Passionate full-stack developer crafting digital experiences that matter. 
                  Specializing in modern web technologies and innovative solutions.
                </p>
                
                {/* Newsletter Signup */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
                  {subscribed ? (
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>Thanks for subscribing!</span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        required
                      />
                      <motion.button
                        onClick={handleNewsletterSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-4 py-2 rounded-lg transition-all"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h5 className="text-white font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h5 className="text-white font-semibold mb-4">Services</h5>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.label}>
                      <motion.a
                        href={service.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        <span>{service.label}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Links & Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-gray-800/50"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-gray-400">Connect with me:</span>
                  <div className="flex gap-4">
                    {[
                      { icon: FiGithub, href: 'https://github.com/Mahadev422/Portfolio.git', label: 'GitHub' },
                      { icon: FiInstagram, href: 'https://www.instagram.com/rajmahadev422/', label: 'Instagram' },
                      { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mahadev-kumar-15b2ba320', label: 'LinkedIn' },
                      { icon: Mail, href: 'mailto:youremail@example.com', label: 'Email' },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>© {new Date().getFullYear()} Made with</span>
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                  <span>by Mahadev Kumar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;