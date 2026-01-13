import { motion } from 'framer-motion';
import { Calendar, CheckSquare, DollarSign, FolderOpen, Zap, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function Templates() {
  const templates = [
    {
      icon: Calendar,
      title: 'Weekly Schedule Template',
      description: 'Track classes, work, commitments, and study time in one clean view.',
      link: 'https://docs.google.com/spreadsheets/d/175y2d0B0yNPZ-E7MXQSt_6n5wWvfsNhjZRd5zn4LJyA/copy',
    },
    {
      icon: CheckSquare,
      title: 'Assignment & Exam Tracker',
      description: 'Never miss a deadline with organized tracking of all assignments and exams.',
      link: 'https://docs.google.com/spreadsheets/d/1eNiBPjj1t0t8D-IZ_bzJfGKbPG50gTtGx4oBFUhrYDE/copy',
    },
    {
      icon: DollarSign,
      title: 'Personal Budget Sheet',
      description: 'Manage expenses, track spending, and stay financially organized.',
      link: 'https://docs.google.com/spreadsheets/d/175USbdV_wo6oMUvRy4kMmbQMDszc5GhtHgDvsvFcMXs/copy',
    },
    {
      icon: FolderOpen,
      title: 'Task & Project Tracker',
      description: 'Break down large projects into manageable tasks and track progress.',
      link: 'https://docs.google.com/spreadsheets/d/1_4e5aXqenc8J3Bb0k1XgncNV9iLxFClsWhXel05vINs/copy',
    },
    {
      icon: Zap,
      title: 'XP / Streak Tracker',
      description: 'Gamify your habits and track daily streaks to stay motivated.',
      link: 'https://docs.google.com/spreadsheets/d/1Oezo3gvZITtEh1Gl1MToGcEoGqiNewSQjzJppUTgVoE/copy',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full text-sm font-semibold text-gray-700 shadow-lg mb-6">
            <Sparkles size={18} className="text-[#9D5060]" />
            Copy to your Google Drive
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            Templates Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the templates that fit your needs. Click "Use Template" to make a copy to
            your Google Drive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-strong rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center mb-6 shadow-lg"
              >
                <template.icon size={28} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{template.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{template.description}</p>
              <Button href={template.link} variant="outline" className="w-full">
                Use Template
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="glass-strong rounded-[2.5rem] p-10 shadow-2xl max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            How to Use These Templates
          </h2>
          <div className="space-y-4 text-gray-700 text-lg mb-8">
            <p>
              <strong className="text-[#9D5060]">Step 1:</strong> Click "Use Template" on any template you want to use
            </p>
            <p>
              <strong className="text-[#9D5060]">Step 2:</strong> In Google Sheets, go to File → Make a copy
            </p>
            <p>
              <strong className="text-[#9D5060]">Step 3:</strong> The copy will save to your Google Drive automatically
            </p>
            <p>
              <strong className="text-[#9D5060]">Step 4:</strong> Customize with your own information
            </p>
          </div>
          <div className="p-6 glass rounded-3xl">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-[#9D5060]">Pro tip:</strong> Create a folder in your Google Drive called "Transition OS"
              and keep all your copies there for easy access.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
