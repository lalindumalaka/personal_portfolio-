import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 75 },
      { name: "Flutter", level: 80 },
      { name: "React.js", level: 80 },
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "SQL ,PHP & MongoDB", level: 75 },
      { name: "Node.js", level: 75 },
      { name: "Git", level: 80 },
      { name: "Spring-Boot", level: 70 }
    ]
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "Social Media Management", level: 95 },
      { name: "Content Strategy", level: 90 },
      { name: "Graphic Designing", level: 80 },
      { name: "SEO", level: 65 },
      { name: "Analytics", level: 80 },
      { name: "Email Marketing", level: 85 },
      
      
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills