import { motion } from 'framer-motion';
import { Calculator, Sparkles, Plus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  type: string;
  grade: string;
  credits: string;
}

export default function GPA() {
  const [district, setDistrict] = useState('');
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: '', type: 'Regular', grade: '', credits: '' },
  ]);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: Date.now().toString(), name: '', type: 'Regular', grade: '', credits: '' },
    ]);
  };

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)));
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full text-sm font-semibold text-gray-700 shadow-lg mb-6">
            <Sparkles size={18} className="text-[#9D5060]" />
            Built by dual-enrollment students
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] via-[#2D1F30] to-[#376380] bg-clip-text text-transparent">
            Universal GPA Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One GPA tool for all Tri-Valley students. Works across Dublin, Pleasanton, and Livermore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl mb-8"
        >
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 gradient-primary rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <Calculator size={24} className="text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Understanding GPA Types</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-[#9D5060]">High School GPA:</strong> Calculated based on your school district's
                  weighting system for regular, honors, and AP courses.
                </p>
                <p>
                  <strong className="text-[#9D5060]">College / Dual Enrollment GPA:</strong> Based on your college coursework
                  using a standard 4.0 scale without high school weighting.
                </p>
                <p>
                  <strong className="text-[#9D5060]">UC/CSU Transferable GPA:</strong> Calculated using UC/CSU approved
                  transferable courses with their specific calculation method.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Different systems exist because high schools, community colleges, and universities each have
                  their own standards for evaluating academic performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl mb-8"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800">Select Your School District</h3>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl glass border-2 border-gray-300 focus:border-[#9D5060] focus:outline-none text-gray-700 font-medium transition-colors"
          >
            <option value="">Choose your district...</option>
            <option value="dublin">Dublin Unified</option>
            <option value="pleasanton">Pleasanton Unified</option>
            <option value="livermore">Livermore Valley Joint Unified</option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl mb-8"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800">Enter Your Courses</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-2 text-sm font-bold text-gray-700">Course Name</th>
                  <th className="text-left py-3 px-2 text-sm font-bold text-gray-700">Course Type</th>
                  <th className="text-left py-3 px-2 text-sm font-bold text-gray-700">Grade</th>
                  <th className="text-left py-3 px-2 text-sm font-bold text-gray-700">Credits/Units</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.id} className="border-b border-gray-200">
                    <td className="py-3 px-2">
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        placeholder="e.g., English 3"
                        className="w-full px-3 py-2 rounded-xl glass border border-gray-300 focus:border-[#9D5060] focus:outline-none text-gray-700"
                      />
                    </td>
                    <td className="py-3 px-2">
                      <select
                        value={course.type}
                        onChange={(e) => updateCourse(course.id, 'type', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl glass border border-gray-300 focus:border-[#9D5060] focus:outline-none text-gray-700"
                      >
                        <option value="Regular">Regular</option>
                        <option value="Honors">Honors</option>
                        <option value="AP">AP</option>
                        <option value="College">College</option>
                        <option value="DE Transferable">DE Transferable</option>
                      </select>
                    </td>
                    <td className="py-3 px-2">
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl glass border border-gray-300 focus:border-[#9D5060] focus:outline-none text-gray-700"
                      >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="D-">D-</option>
                        <option value="F">F</option>
                      </select>
                    </td>
                    <td className="py-3 px-2">
                      <input
                        type="number"
                        value={course.credits}
                        onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                        placeholder="5"
                        min="0"
                        step="0.5"
                        className="w-full px-3 py-2 rounded-xl glass border border-gray-300 focus:border-[#9D5060] focus:outline-none text-gray-700"
                      />
                    </td>
                    <td className="py-3 px-2">
                      {courses.length > 1 && (
                        <button
                          onClick={() => removeCourse(course.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          ×
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addCourse}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 gradient-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Plus size={20} />
            Add Another Class
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Your High School GPA', value: '—' },
            { title: 'Your College / Dual Enrollment GPA', value: '—' },
            { title: 'Your UC/CSU Transferable GPA', value: '—' },
          ].map((gpa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-strong rounded-[2rem] p-8 shadow-xl text-center"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-800">{gpa.title}</h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
                {gpa.value}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="glass rounded-[2rem] p-6 mb-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50"
        >
          <div className="flex items-start gap-3">
            <HelpCircle size={24} className="text-[#9D5060] flex-shrink-0 mt-1" />
            <p className="text-gray-700">
              <strong>Note:</strong> GPA calculations vary by district. This tool will support Dublin, Pleasanton,
              and Livermore once algorithms are added. The calculation logic will be implemented in a future update.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Does dual enrollment affect my high school GPA?</h4>
              <p className="text-gray-700">
                Yes, dual enrollment courses can impact your high school GPA depending on your district's policy.
                Some districts weight college courses similarly to AP classes, while others treat them as regular courses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Will these GPAs appear on my transcript?</h4>
              <p className="text-gray-700">
                Your high school GPA appears on your high school transcript, and your college GPA appears on your
                college transcript. UC/CSU calculate their own GPA when you apply using your self-reported grades.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Do UC/CSU calculate GPA differently?</h4>
              <p className="text-gray-700">
                Yes! UC and CSU systems use their own specific calculation methods that only include certain "a-g"
                approved courses taken during 10th and 11th grade, with a cap on weighted courses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Why do college classes get different weighting?</h4>
              <p className="text-gray-700">
                High schools weight college courses to reflect their rigor and college-level difficulty. However,
                the weighting varies by district policy and may differ from AP or Honors course weighting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
