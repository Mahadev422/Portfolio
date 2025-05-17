import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="w-full md:w-1/3"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-1 rounded-full">
                <div className="bg-gray-800 p-1 rounded-full">
                  <img
                    src="profile.png"
                    alt="Profile"
                    className="rounded-full w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-2/3"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-6">
                I'm a passionate full-stack developer with expertise in building
                scalable web applications. My journey began with a Computer
                Science degree and has evolved through working with startups and
                Fortune 500 companies alike.
              </p>
              <p className="mb-6">
                I believe in writing clean, maintainable code and staying at the
                forefront of web technologies. When I'm not coding, you can find
                me contributing to open-source projects or mentoring junior
                developers.
              </p>

              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-2 rounded">
                <div>
                  <h4 className="font-medium text-gray-400">Name:</h4>
                  <p>Mahadev Kumar</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">Email:</h4>
                  <p>24je0035@iitism.ac.in</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">Experience:</h4>
                  <p>7+ Years</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-400">Location:</h4>
                  <p>IIT(ISM) Dhanbad, Jharkhand</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
