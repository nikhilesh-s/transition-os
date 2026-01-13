import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 rounded-full gradient-primary opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 rounded-full gradient-secondary opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          style={{ y, opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full text-sm font-semibold text-gray-700 shadow-lg">
              <Sparkles size={18} className="text-[#9D5060]" />
              For Dual Enrollment, Middle College & Summer Courses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#9D5060] via-[#2D1F30] to-[#376380] bg-clip-text text-transparent">
              Your Transition
            </span>
            <br />
            <span className="text-gray-800">to College, Organized.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Simple tools for Dual Enrollment, Middle College Programs, and Summer Courses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button to="/start" size="lg">
              Start Here
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button to="/templates" variant="outline" size="lg">
              View Templates
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-strong rounded-[3rem] p-12 shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
              What is Transition OS?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transition OS is a collection of clean, easy-to-use templates and guides designed by Nikhilesh Suravarjjala and Zayan Ahmad to help students manage their classes, schedules, deadlines, projects, budgeting, habits, and academic planning ; all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-strong rounded-[3rem] p-12 shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
              Who should use Transition OS?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Anyone who's balancing high school and college courses can use Transition OS to stay organized with clear schedules and assignment tracking. The spreadsheets and tools are also broadly useful as clean, practical resources that help set students up for success. Some examples of who may use Transition OS include dual enrollment students, students in middle college programs, high school students taking summer college courses, and community college students.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-strong rounded-[3rem] p-12 shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2D1F30] to-[#9D5060] bg-clip-text text-transparent">
              Why We Made This
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Transition OS was built after experiencing firsthand how confusing it can be to manage multiple schedules, expectations, and systems during early college experiences. When you're navigating different platforms, conflicting calendars, and new levels of independence, it's easy to feel scattered.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The goal is simple: provide a student-owned system that reduces friction and mental load. No complicated apps, no expensive subscriptions ; just clean, practical tools that help you stay on track without adding more stress to your life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent"
          >
            Quick Links
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            <Button to="/templates" variant="glass" className="w-full">
              Templates
            </Button>
            <Button to="/quickstart" variant="glass" className="w-full">
              Quickstart Guide
            </Button>
            <Button to="/feedback" variant="glass" className="w-full">
              Feedback Form
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
