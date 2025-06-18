import {
  Code,
  Database,
  Server,
  Layers,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import TechSkills from "./TechSkills";

const Skills = () => {

  const technicalSkills = [
    {
      name: "HTML5",
      level: 90,
      category: "frontend",
      color: "from-orange-500 to-red-500",
      description: "Semantic markup, accessibility, modern HTML5 features",
    },
    {
      name: "CSS3",
      level: 90,
      category: "frontend",
      color: "from-blue-500 to-indigo-500",
      description: "Advanced CSS, Flexbox, Grid, animations, responsive design",
    },
    {
      name: "JavaScript",
      level: 95,
      category: "frontend",
      color: "from-yellow-500 to-orange-500",
      description: "ES6+, DOM manipulation, async programming, modern JS",
    },
    {
      name: "React.js",
      level: 95,
      category: "frontend",
      color: "from-cyan-500 to-blue-500",
      description:
        "Hooks, Context, component architecture, performance optimization",
    },
    {
      name: "Redux",
      level: 85,
      category: "frontend",
      color: "from-purple-500 to-pink-500",
      description: "State management, middleware, Redux Toolkit",
    },
    {
      name: "Node.js",
      level: 85,
      category: "backend",
      color: "from-green-500 to-emerald-500",
      description: "Server-side JavaScript, Express.js, API development",
    },
    {
      name: "MongoDB",
      level: 80,
      category: "backend",
      color: "from-green-600 to-teal-500",
      description: "NoSQL database, Mongoose ODM, aggregation pipelines",
    },
    {
      name: "Git",
      level: 90,
      category: "tools",
      color: "from-gray-600 to-gray-800",
      description: "Version control, branching strategies, collaboration",
    },
    {
      name: "Three.js",
      level: 75,
      category: "frontend",
      color: "from-indigo-600 to-purple-600",
      description: "3D graphics, WebGL, interactive visualizations",
    },
  ];

  const coreCompetencies = [
    {
      title: "Frontend Development",
      icon: Layers,
      description:
        "Building responsive, accessible, and performant user interfaces with modern frameworks and best practices.",
      skills: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      icon: Server,
      description:
        "Designing and implementing scalable server-side applications, RESTful APIs, and database architectures.",
      skills: ["Node.js", "Express.js", "REST APIs", "Database Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database Management",
      icon: Database,
      description:
        "Expert in MongoDB with Mongoose for creating robust APIs and performing efficient CRUD operations.",
      skills: ["MongoDB", "Mongoose", "Data Modeling", "Query Optimization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Full-Stack Integration",
      icon: Globe,
      description:
        "End-to-end application development combining frontend excellence with robust backend solutions.",
      skills: ["MERN Stack", "API Integration", "Authentication", "Deployment"],
      color: "from-orange-500 to-red-500",
    },
  ];


  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise in modern web
            development technologies, from frontend frameworks to backend
            architectures.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:scale-105"
                initial={{ opacity: 0, transform: 'translateY(30px)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${competency.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <competency.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {competency.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {competency.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {competency.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {competency.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                      +{competency.skills.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Proficiencies */}
        <TechSkills />

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/50">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {technicalSkills.length}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Technologies
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {Math.round(
                    technicalSkills.reduce(
                      (acc, skill) => acc + skill.level,
                      0
                    ) / technicalSkills.length
                  )}
                  %
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average Proficiency
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {coreCompetencies.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Core Areas
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Continuously expanding my technical expertise through hands-on
              projects, professional certifications, and staying current with
              industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
