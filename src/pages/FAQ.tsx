import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Do you collect my data?',
      answer:
        'No. We do not collect, store, or access any of your personal data. All templates are Google Sheets that you copy to your own Google Drive. Once copied, they belong entirely to you and we have no access to them.',
    },
    {
      question: 'How do templates save?',
      answer:
        'When you copy a template to your Google Drive, it automatically saves like any other Google Sheet. All changes you make are saved instantly through Google\'s auto-save feature. You don\'t need to do anything special.',
    },
    {
      question: 'Can I share this with classmates?',
      answer:
        'Absolutely! We encourage sharing. You can share the website link with anyone, and they can copy the templates for themselves. You can also share your personal copies of templates with specific people using Google Drive\'s sharing features.',
    },
    {
      question: 'Is this officially approved by schools?',
      answer:
        'This is an independent student project and is not officially affiliated with or endorsed by any Middle College program, Dual Enrollment program, or educational institution. We\'re students who wanted to help other students stay organized.',
    },
    {
      question: 'Do I need to know how to use Sheets?',
      answer:
        'Basic familiarity with Google Sheets is helpful, but not required. If you can type into cells and click buttons, you can use these templates. We\'ve designed them to be as simple and intuitive as possible.',
    },
    {
      question: 'Are the templates mobile-friendly?',
      answer:
        'Yes! All templates are Google Sheets, which work on mobile devices through the Google Sheets app or mobile browser. You can access and edit your templates from anywhere.',
    },
    {
      question: 'What if I need help with a template?',
      answer:
        'Check out our Quickstart Guide and individual template guides for detailed instructions. If you still need help, you can reach out through our Feedback form and we\'ll do our best to assist you.',
    },
    {
      question: 'Can I customize the templates?',
      answer:
        'Definitely! Once you copy a template to your Drive, it\'s yours to customize however you want. Change colors, add columns, remove sections ; make it work for you.',
    },
    {
      question: 'Do I need a Google account?',
      answer:
        'Yes, you need a Google account to copy and use the templates since they\'re built in Google Sheets. Most students already have one through their school email.',
    },
    {
      question: 'How often are new templates added?',
      answer:
        'We\'re constantly working on new resources based on student feedback. Follow our updates or submit suggestions through the Feedback form to help us prioritize what to build next.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <HelpCircle size={36} className="text-white" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about Transition OS
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-strong rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4 text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-[#9D5060]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-strong rounded-[2rem] p-8 shadow-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            If you didn't find the answer you were looking for, feel free to reach out through
            our feedback form. We're here to help!
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/feedback"
            className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
