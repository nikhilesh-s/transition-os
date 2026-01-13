import { BookOpen, Calendar, Package, GraduationCap, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function Guides() {
  const guides = [
    {
      title: 'How to Use Each Template',
      description:
        'Detailed walkthrough of every template in the library. Learn the best practices for using each tool effectively.',
      icon: <BookOpen size={32} />,
      available: true,
      link: '/quickstart',
    },
    {
      title: 'Planning Your Week (HS + CC)',
      description:
        'Master the art of balancing high school and college schedules. Tips for time management, prioritization, and staying organized.',
      icon: <Calendar size={32} />,
      available: true,
      link: '/quickstart',
    },
    {
      title: 'MC Starter Kit',
      description:
        'Everything new Middle College students need to know. From registration to graduation, this guide covers it all.',
      icon: <Package size={32} />,
      available: true,
      link: '/start',
    },
    {
      title: 'GPA & Transcript Guide',
      description:
        'Understand how your GPA is calculated, how to read your transcript, and tips for maintaining strong grades.',
      icon: <GraduationCap size={32} />,
      available: false,
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-6">Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth guides to help you make the most of your Middle College experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guides.map((guide, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 ${
                !guide.available ? 'opacity-60' : 'hover:shadow-md transition-shadow'
              }`}
            >
              <div className="w-16 h-16 bg-[#E5ECF8] rounded-lg flex items-center justify-center mb-4 text-[#2E7DFF]">
                {guide.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{guide.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{guide.description}</p>
              {guide.available ? (
                <Button to={guide.link} variant="primary" className="w-full">
                  Read Guide
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              ) : (
                <div className="w-full bg-gray-200 text-gray-500 py-3 px-4 rounded-lg font-medium text-center">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">More Resources Coming Soon</h2>
          <p className="text-gray-700 mb-6">
            We're constantly working on new guides and resources to help Middle College students
            succeed. Have a suggestion for a guide you'd like to see?
          </p>
          <Button to="/feedback" variant="secondary">
            Share Your Ideas
          </Button>
        </div>
      </div>
    </div>
  );
}
