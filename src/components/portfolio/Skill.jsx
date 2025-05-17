import { motion } from "framer-motion";
import { FiCode, FiLayers, FiSmartphone, FiDatabase } from "react-icons/fi";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const Skill = () => {
  const technicalSkills = [
    { name: "React", percentage: 95, icon: <FaReact /> },
    { name: "JavaScript", percentage: 95, icon: <DiJavascript1 /> },
    { name: "Node.js", percentage: 85, icon: <FaNodeJs /> },
    { name: "HTML", percentage: 90, icon: <FaHtml5 /> },
    { name: "CSS", percentage: 90, icon: <FaCss3 /> },
    { name: "MongoDB", percentage: 80, icon: <SiMongodb /> },
    { name: "Redux", percentage: 85, icon: <SiRedux /> },
    { name: "Git", percentage: 90, icon: <FaGitAlt /> },
  ];
  const skills = [
    {
      title: "Frontend Development",
      icon: <FiLayers />,
      description:
        "Expertise in building responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS.",
    },
    {
      title: "Backend Development",
      icon: <FiDatabase />,
      description:
        "Experience designing and implementing RESTful APIs, GraphQL services, and serverless architectures with Node.js.",
    },
    {
      title: "Full-Stack Development",
      icon: <FiSmartphone />,
      description:
        "Skilled in building cross-platform web applications using React vite with vite module integration.",
    },
    {
      title: "DevOps & Cloud",
      icon: <FiCode />,
      description:
        "Proficient in CI/CD pipelines, containerization with Docker, and cloud platforms like AWS and Azure.",
    },
  ];

  return (
    <section id="skills" className="py-4">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            I've worked with a variety of technologies in the web development
            world. Here are some of my core competencies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="rounded-xl bg-green-100 p-6 border border-gray-700 hover:border-cyan-400/30 transition-all"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl text-cyan-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-400 mb-4">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Technical Proficiencies
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full bg-gray-700 rounded h-10 relative overflow-hidden">
                    <motion.div
                      className="bg-cyan-500 h-full flex items-center px-4 space-x-4 text-white absolute top-0 left-0"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="bg-blue-600 p-1 rounded-full">
                        {skill.icon}
                      </span>
                      <span className="ml-auto text-sm">
                        {skill.percentage}%
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
