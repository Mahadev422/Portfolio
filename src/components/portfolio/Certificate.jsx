import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Html",
      image: "/Portfolio/certificates/html-cert.png",
    },
    {
      title: "Css",
      image: "/Portfolio/certificates/css-cert.png",
    },
    {
      title: "Javascript",
      image: "/Portfolio/certificates/js-cert.png",
    },
  ];

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
              className="border-gray-700 hover:border-cyan-400/30 transition-all border rounded-xl p-4 flex items-center justify-between shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {cert.title}
              </h3>
              <button
                onClick={() => setSelectedCert(cert)}
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
              {/* Dark overlay */}
              <motion.div
                className="absolute inset-0 bg-black/70 bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="relative bg-white rounded-lg p-4 max-w-3xl w-[90%] max-h-[90vh] overflow-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2 z-10">
                  <h3 className="text-xl font-semibold">
                    {selectedCert.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-500 hover:text-gray-700 text-lg"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto rounded"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificate;