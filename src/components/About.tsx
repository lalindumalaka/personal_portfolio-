import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: About Me text */}
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                I'm a passionate Software Engineering student at the University of Westminster,
                combining my technical knowledge with practical experience in digital marketing.
              </p>
              <p className="text-lg">
                My journey in tech is driven by a desire to create meaningful digital experiences
                that make a real impact. I Love To specialize in Dev Ops Approach , Web Development, FullStack Development, Artificial Intelligence and Digital Marketing,
                bringing a unique blend of technical and marketing expertise to my projects.
              </p>
              <p className="text-lg">
                Currently, I'm focused on expanding my skills in modern New IT Technologies While
                managing Digital Marketing campaigns for established businesses.
              </p>
            </div>

            {/* Right side: Experience Highlights and Personal Fun Facts */}
            <div className="space-y-6">
              {/* Experience Highlights */}
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Experience Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    Digital Marketing & Booking Channel Manager at Villa White Dome
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    Social Media Strategist & Manager at White Goods
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    Beginner FullStack Developer
                  </li>
                </ul>
              </div>

              {/* Personal Fun Facts */}
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Personal Fun Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    Highly Curious About Scientific Discoveries
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    A Pure INTP-A Personality
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    Center-Right Authoritarian Political Ideologist
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;