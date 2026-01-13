import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function StartHere() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full text-sm font-semibold text-gray-700 shadow-lg mb-6">
            <Sparkles size={18} className="text-[#9D5060]" />
            Takes less than 10 minutes
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            Quickstart Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            This guide walks you through setting up your first week with Transition OS. You'll learn how to use the core templates and build a simple, sustainable system in under 10 minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="glass-strong rounded-[2.5rem] p-12 shadow-xl mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center shadow-lg"
            >
              <BookOpen size={36} className="text-white" />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            What You'll Learn
          </h2>

          <div className="space-y-5 text-lg text-gray-700 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#9D5060] mt-2 flex-shrink-0"></div>
              <p>How to set up your weekly schedule and block time for what matters</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#9D5060] mt-2 flex-shrink-0"></div>
              <p>How to track assignments and deadlines so nothing slips through the cracks</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#9D5060] mt-2 flex-shrink-0"></div>
              <p>How to use the task and project tracker for larger assignments</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#9D5060] mt-2 flex-shrink-0"></div>
              <p>How to stay consistent without overcomplicating your system</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              href="https://docs.google.com/document/d/1rQbHV1DBIrNtxdtSasc4EhWGUF-asQXBzoHhJimrUD0/copy"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <BookOpen size={20} />
              Open Quickstart Guide
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass rounded-[2rem] p-8 text-center"
        >
          <p className="text-gray-600 leading-relaxed">
            The guide will open in a new tab. Make a copy to your Google Drive so you can check off steps as you go.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
