import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-auto relative z-10 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-[3rem] px-8 py-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="font-bold text-xl bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
                  Transition OS
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your transition to college, organized.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/templates"
                    className="text-sm text-gray-600 hover:text-[#9D5060] transition-colors"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    className="text-sm text-gray-600 hover:text-[#9D5060] transition-colors"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-800">Coming Soon</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/gpa"
                    className="text-sm text-gray-500 hover:text-[#9D5060] transition-colors"
                  >
                    Universal GPA Calculator
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-gray-500">
                    Advanced Planning Tools
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-800">Info</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#9D5060] transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <span className="text-sm text-gray-600">
                    Built by Students
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200/50">
            <p className="text-sm text-gray-600 text-center">
              © 2026 Transition OS. Built for students, by students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
