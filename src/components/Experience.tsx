
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Undergraduate In BEng (Hons) Software Engineering",
      institution: "University of Westminster",
      duration: "Sep 2023 – Present",
      description: "Developing a strong foundation in software development, system design, and problem-solving through academic and project-based learning.",
      skills: ["Programming", "Coding", "Software Development"],
      logo: "assets/UOW_logo.jpg", 
    },
    {
      title: "Professional Certificate in Marketing (PCM)",
      institution: "Sri Lanka Institute of Marketing - SLIM",
      duration: "May 2023 – Jul 2023",
      description: "Gained skills in marketing strategies, consumer behavior, and market analysis.",
      skills: ["Marketing", "Digital Marketing"],
      logo: "assets/SLIM_logo.jpg", 
    },
    {
      title: "General Certificate of Education",
      institution: "Richmond College, Galle",
      duration: "Mar 2009 – Feb 2023",
      description: "Completed O Levels In 2019 And A Levels (Maths Stream) In 2022.",
      skills: ["Student Services", "Student Engagement"],
      logo: "assets/richmond_logo.jpg", 
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Centered Heading */}
          <h2 className="section-title text-center">Educational Experiences</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/20 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-secondary/20 hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.institution} logo`}
                      className="w-16 h-16 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/logos/fallback-image.png'; // Fallback image
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {exp.institution}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {exp.duration}
                    </p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
