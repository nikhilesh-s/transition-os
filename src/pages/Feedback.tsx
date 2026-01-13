import { MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Feedback() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full text-sm font-semibold text-gray-700 shadow-lg mb-6">
            <Sparkles size={18} className="text-[#9D5060]" />
            Help us improve
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            Feedback
          </h1>
          <p className="text-xl text-gray-600">
            Your input helps make Transition OS better for everyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="glass-strong rounded-[2rem] p-10 shadow-xl mb-8"
        >
          <div className="flex items-start space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <MessageSquare size={28} className="text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">We Want to Hear From You</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your feedback is essential to making Transition OS better for everyone. Whether
                you have suggestions for new templates, found something confusing, or just want to share how
                these tools have helped you — we want to know.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This form takes less than 2 minutes and helps us prioritize what to
                build next.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass-strong rounded-[2rem] p-10 shadow-xl mb-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">What We're Looking For:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#9D5060] mr-2 font-bold">•</span>
              <span>Ideas for new templates or features</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9D5060] mr-2 font-bold">•</span>
              <span>Improvements to existing templates</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9D5060] mr-2 font-bold">•</span>
              <span>Confusing parts that need clarification</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9D5060] mr-2 font-bold">•</span>
              <span>Issues or bugs you've encountered</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9D5060] mr-2 font-bold">•</span>
              <span>Success stories about how Transition OS helped you</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="glass-strong rounded-[2rem] p-10 shadow-xl text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Submit Your Feedback</h3>
          <p className="text-gray-600 mb-6">
            Your feedback helps us make Transition OS better for everyone. The form takes less than 2 minutes.
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLScHngxG1mjEourxPVSpARkbeWshNfIrg3n3farcJJYRqMNwTA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Open Feedback Form
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
