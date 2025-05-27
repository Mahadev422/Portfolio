import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const certificates = [
    {
      title: "Html",
      images: ["/Portfolio/certificates/html-cert.png"],
    },
    {
      title: "Css",
      images: ["/Portfolio/certificates/css-cert.png"],
    },
    {
      title: "Javascript",
      images: ["/Portfolio/certificates/js-cert-hr2.png","/Portfolio/certificates/js-cert-hr1.png", "/Portfolio/certificates/js-cert.png"],
    },
    {
      title: "React",
      images: ["/Portfolio/certificates/react-cert-hr.png"],
    },
    {
      title: "Node",
      images: ["/Portfolio/certificates/node-cert-hr.png"],
    },
    {
      title: "Rest API",
      images: ["/Portfolio/certificates/rest-api-cert-hr.png"],
    },
  ];

  const handleView = (cert) => {
    setSelectedCert(cert);
    setSelectedIndex(0); // Reset index on opening
  };

  const handleNext = () => {
    if (!selectedCert) return;
    setSelectedIndex((prevIndex) =>
      prevIndex === selectedCert.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="dark:bg-gray-800 transition-all dark:hover:shadow-blue-950 hover:shadow-md rounded-xl p-4 flex items-center justify-between shadow-sm"
            >
              <h3 className="text-lg font-medium">{cert.title}</h3>
              <button
                onClick={() => handleView(cert)}
                className="bg-cyan-500 text-white text-sm px-4 py-1.5 rounded hover:bg-cyan-600 transition-colors"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="relative bg-white dark:bg-gray-800 rounded-lg p-4 max-w-3xl w-[90%] max-h-[90vh] overflow-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4 sticky top-0 py-2 z-10">
                  <h3 className="text-xl font-semibold">
                    {selectedCert.title} ({selectedIndex + 1}/{selectedCert.images.length})
                  </h3>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-500 hover:text-gray-700 text-lg"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative border p-1">
                  <img
                    src={selectedCert.images[selectedIndex]}
                    alt={`${selectedCert.title} ${selectedIndex + 1}`}
                    className="w-full h-auto rounded"
                  />
                </div>

                {selectedCert.images.length > 1 && (
                  <div className="text-right mt-4">
                    <button
                      onClick={handleNext}
                      className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
                    >
                      Next
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificate;
