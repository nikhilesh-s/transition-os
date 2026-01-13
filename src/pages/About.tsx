import { Heart, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Built for students, by students
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl mb-8"
        >
          <div className="flex items-start space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <Heart size={28} className="text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why We Built This</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The transition into college-level coursework can feel scattered ; multiple
                schedules, unclear requirements, new levels of independence. We built Transition OS
                after experiencing these challenges firsthand in Middle College and Dual Enrollment programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We wanted to create something simple, accessible, and immediately useful. No
                complicated apps, no expensive subscriptions ; just clean, effective tools that
                anyone can use.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl mb-8"
        >
          <div className="flex items-start space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 gradient-secondary rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <Users size={28} className="text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Student-Created Resource</h2>
              <p className="text-gray-700 leading-relaxed">
                Transition OS is created and maintained by students who understand the unique
                challenges of navigating high school and college simultaneously. We're committed
                to keeping these resources free, accessible, and continuously improving based
                on student feedback.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl"
        >
          <div className="flex items-start space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 gradient-purple rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <Shield size={28} className="text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Privacy & Data Info</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong>We do not collect, store, or access your personal data.</strong> All
                  templates are Google Sheets that you copy directly to your own Google Drive. Once
                  you make a copy, the template belongs entirely to you.
                </p>
                <p className="leading-relaxed">
                  Your information, schedules, assignments, and goals remain private and under your
                  control. We have no access to what you write in your templates.
                </p>
                <p className="leading-relaxed">
                  The only data we may collect is anonymous feedback through our feedback form,
                  which you submit voluntarily to help us improve the platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-8 glass rounded-[2rem] p-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800">A Note on Independence</h3>
          <p className="text-gray-700">
            This is an independent student project and is not officially affiliated with or
            endorsed by any Middle College program, Dual Enrollment program, or educational institution. 
            We're just students trying to help other students succeed.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
