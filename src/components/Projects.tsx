import { motion } from 'framer-motion'
import {  FaDog, FaGlobe } from 'react-icons/fa'
import { FaCodeFork, FaHotel, FaHouseChimney, FaPlugCircleBolt } from 'react-icons/fa6'

const projects = [
  {
    title: "Veta.lk (On Going) ",
    description: "A Centralized Platform Mobile App For All The Veterinary Needs In Sri Lanka",
    icon: <FaDog className="text-4xl text-primary mb-4" />,
    tags: ["Mobile App Development", "SDGP Project", "Vet Services In SL"],
    link: "https://veta-app-marketing-site.vercel.app/"
  },
  {
    title: "Real-Time Event Ticketing System",
    description: "Real-Time Event Ticketing System built with **Spring Boot & React.js**, using Multi-Threading and the Producer-Consumer pattern. Vendors add tickets while customers purchase them concurrently, simulating real-time booking.",
    icon: <FaCodeFork className="text-4xl text-primary mb-4" />,
    tags: ["Object-Oriented Programming", "FullStack", "Multi-Threading"],
    link: "#"
  },
  {
    title: "Villa White Dome",
    description: "Led digital marketing initiatives and managed online presence for a luxury villa, resulting in increased bookings and brand visibility.",
    icon: <FaHotel className="text-4xl text-primary mb-4" />,
    tags: ["Digital Marketing", "Social Media", "Content Strategy"],
    link: "https://sites.google.com/view/villawhitedome-level1certified/home"
  },
  {
    title: "White Goods - Home Appliance Suppliers",
    description: "Developed and executed comprehensive digital marketing strategies for a home appliance showroom, driving sales and customer engagement.",
    icon: <FaPlugCircleBolt className="text-4xl text-primary mb-4" />,
    tags: ["Marketing", "Brand Strategy", "Analytics"],
    link: "https://web.facebook.com/p/White-Goods-61553452745524/?_rdc=1&_rdr"
  },
  {
    title: "Healthy Harvest ",
    description: "A Website Aligned With The United Nations Sustainable Development Goals of “Good Health & Well Being”",
    icon: <FaGlobe className="text-4xl text-primary mb-4" />,
    tags: ["UN SDG's", "Web Development", "Group Work"],
    link: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">Featured Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="text-center">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-orange-400 transition-colors duration-300 inline-flex items-center"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects