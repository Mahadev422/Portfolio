import { useState } from "react";
import { User, MapPin, Mail, GraduationCap, Code, Award, Download, ExternalLink, Calendar, Building } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const personalInfo = [
    { icon: User, label: "Full Name", value: "Mahadev Kumar" },
    { icon: Mail, label: "Email", value: "24je0035@iitism.ac.in" },
    { icon: MapPin, label: "Location", value: "IIT(ISM) Dhanbad, Jharkhand" },
    { icon: Calendar, label: "Status", value: "Undergraduate Student" }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer combining engineering fundamentals with modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-8">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full">
                    <img
                      src="/Portfolio/profile.jpg"
                      alt="Mahadev Kumar"
                      className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Mahadev Kumar
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  Full-Stack Developer
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Civil Engineering Student @ IIT(ISM)
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <info.icon className="w-5 h-5 text-blue-500" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a href="https://mahadev422.github.io/new-resume/" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" target="_blank">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex">
                  {[
                    { id: 'overview', label: 'Overview', icon: User },
                    { id: 'education', label: 'Education', icon: GraduationCap },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        activeTab === tab.id
                          ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Who I Am
                      </h3>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          I'm a passionate full-stack developer with a unique background combining engineering fundamentals 
                          with modern web technologies. Currently pursuing my B.Tech in Civil Engineering at 
                          <span className="font-semibold text-blue-600 dark:text-blue-400"> IIT(ISM), Dhanbad</span>, 
                          I've developed a strong foundation in problem-solving and analytical thinking.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          My journey into web development began with curiosity and has evolved into expertise across 
                          the full technology stack. I believe in writing clean, maintainable code and staying at 
                          the forefront of web technologies to create meaningful digital experiences.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          I'm driven by the intersection of engineering principles and creative problem-solving, 
                          always eager to learn new technologies and tackle challenging projects that make a real impact.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        What Sets Me Apart
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Strong engineering foundation from prestigious IIT(ISM)
                        </li>
                        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Full-stack development with modern technologies
                        </li>
                        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Continuous learning and professional certifications
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {/* Education Tab */}
                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Educational Background
                    </h3>
                    <div className="relative">
                      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
                      <div className="relative bg-white dark:bg-gray-700/50 p-6 rounded-xl border-l-4 border-blue-500 ml-8">
                        <div className="absolute -left-10 top-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                              Bachelor of Technology (B.Tech)
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              Civil Engineering
                            </p>
                          </div>
                          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            2024 - 2028
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">Indian Institute of Technology (ISM), Dhanbad</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          Pursuing undergraduate studies at one of India's premier technical institutions, 
                          developing strong analytical and problem-solving skills while exploring the 
                          intersection of traditional engineering and modern technology.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;