import { useState } from "react";
import { Award, Eye, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const certificates = [
    {
      title: "HTML Fundamentals",
      category: "Frontend Development",
      issuer: "Professional Certification",
      year: "2024",
      color: "from-orange-500 to-red-500",
      images: ["/Portfolio/certificates/html-cert.png"],
      skills: ["Semantic HTML", "Web Standards", "Accessibility"]
    },
    {
      title: "CSS Advanced Styling",
      category: "Frontend Development", 
      issuer: "Professional Certification",
      year: "2024",
      color: "from-blue-500 to-indigo-500",
      images: ["/Portfolio/certificates/css-cert.png"],
      skills: ["Responsive Design", "Flexbox", "CSS Grid", "Animations"]
    },
    {
      title: "JavaScript Mastery",
      category: "Programming Languages",
      issuer: "HackerRank & Others",
      year: "2024",
      color: "from-yellow-500 to-orange-500",
      images: ["/Portfolio/certificates/js-cert-hr2.png","/Portfolio/certificates/js-cert-hr1.png", "/Portfolio/certificates/js-cert.png"],
      skills: ["ES6+", "DOM Manipulation", "Async Programming", "Problem Solving"]
    },
    {
      title: "React Development",
      category: "Frontend Frameworks",
      issuer: "HackerRank",
      year: "2024", 
      color: "from-cyan-500 to-blue-500",
      images: ["/Portfolio/certificates/react-cert-hr.png"],
      skills: ["Component Architecture", "Hooks", "State Management", "JSX"]
    },
    {
      title: "Node.js Backend",
      category: "Backend Development",
      issuer: "HackerRank",
      year: "2024",
      color: "from-green-500 to-emerald-500", 
      images: ["/Portfolio/certificates/node-cert-hr.png"],
      skills: ["Server Development", "NPM", "File Systems", "Event Loop"]
    },
    {
      title: "REST API Design",
      category: "Web Services",
      issuer: "HackerRank",
      year: "2024",
      color: "from-purple-500 to-pink-500",
      images: ["/Portfolio/certificates/rest-api-cert-hr.png"],
      skills: ["HTTP Methods", "API Design", "JSON", "Authentication"]
    },
  ];

  const handleView = (cert) => {
    setSelectedCert(cert);
    setSelectedIndex(0);
  };

  const handleNext = () => {
    if (!selectedCert) return;
    setSelectedIndex((prevIndex) =>
      prevIndex === selectedCert.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    if (!selectedCert) return;
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? selectedCert.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Verified skills and knowledge through industry-recognized certifications and comprehensive training programs.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-transparent hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `fadeInUp 0.6s ease-out forwards`
              }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {cert.category}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Button */}
                <button
                  onClick={() => handleView(cert)}
                  className={`w-full bg-gradient-to-r ${cert.color} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-xl`}
                >
                  <Eye className="w-4 h-4" />
                  View Certificate
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            />

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {selectedCert.issuer} • Certificate {selectedIndex + 1} of {selectedCert.images.length}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative bg-gray-50 dark:bg-gray-900 p-6">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-inner p-4">
                  <img
                    src={selectedCert.images[selectedIndex]}
                    alt={`${selectedCert.title} Certificate ${selectedIndex + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Navigation */}
                {selectedCert.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50">
                
                {selectedCert.images.length > 1 && (
                  <div className="flex justify-center gap-2">
                    {selectedCert.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setSelectedIndex(dotIndex)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          dotIndex === selectedIndex
                            ? `bg-gradient-to-r ${selectedCert.color}`
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Certificate;