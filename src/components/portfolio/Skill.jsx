import { motion } from "framer-motion";
import { FiCode, FiLayers, FiSmartphone, FiDatabase } from "react-icons/fi";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3, FaServer } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";

const Skill = () => {
  const technicalSkills = [
    { name: "HTML", percentage: 90, icon: <FaHtml5 /> },
    { name: "CSS", percentage: 90, icon: <FaCss3 /> },
    { name: "JavaScript", percentage: 95, icon: <DiJavascript1 /> },
    { name: "React.js", percentage: 95, icon: <FaReact /> },
    { name: "Redux", percentage: 85, icon: <SiRedux /> },
    { name: "Node.js", percentage: 85, icon: <FaNodeJs /> },
    { name: "MongoDB", percentage: 80, icon: <SiMongodb /> },
    { name: "Git", percentage: 90, icon: <FaGitAlt /> },
    { name: "Three.js", percentage: 75, icon: <TbBrandThreejs />}
  ];
  const skills = [
    {
      title: "Frontend Development",
      icon: <FiLayers />,
      description:
        "Expertise in building responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS.",
    },
    {
      title: "Database",
      icon: <FiDatabase />,
      description:
        "Expert in using Monogdb with mongoose for making REST API's and performing CRUD operation.",
    },
    {
      title: "Full-Stack Development",
      icon: <FaServer />,
      description:
        "Experience designing and implementing RESTful APIs, and serverless architectures with Node.js.",
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
                className="rounded-xl dark:bg-gray-800 hover:drop-shadow-md dark:hover:drop-shadow-gray-700 bg-green-100 p-6 transition-shadow"
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

          <div className="my-10">
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
