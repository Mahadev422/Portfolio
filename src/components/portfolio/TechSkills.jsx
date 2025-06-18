import { Palette, Server, Star, Code, Zap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const TechSkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);


  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const skillCategories = [
    { id: "all", label: "All Skills", icon: Star },
    { id: "frontend", label: "Frontend", icon: Palette },
    { id: "backend", label: "Backend", icon: Server },
    { id: "tools", label: "Tools", icon: Zap },
  ];



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

    const filteredSkills =
    activeCategory === "all"
      ? technicalSkills
      : technicalSkills.filter((skill) => skill.category === activeCategory);


  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Technical Proficiencies
      </h3>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="bg-white dark:bg-gray-800 rounded p-1 shadow-lg border border-gray-200 dark:border-gray-700">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {getSkillLevelText(skill.level)} • {skill.level}%
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.li
                        className="list-none"
                        key={i}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            i < Math.floor(skill.level / 20)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      </motion.li>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                    style={{
                      width:
                        hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
