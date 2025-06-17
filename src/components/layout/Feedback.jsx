import { motion } from "framer-motion"
import { CheckCircle, Send, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react"
import { useState } from "react";
const Feedback = () => {
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
  
  return (
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
  )
}

export default Feedback
