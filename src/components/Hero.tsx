import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-cover bg-center relative"
    >
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('assets/hero-pic.png')",
          filter: "blur(3px)", // Adjust blur strength
        }}
      ></div>

      {/* Dark overlay to improve readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center md:text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Hi, I'm <span className="gradient-text">Lalindu Palliyaguruge</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-body">
           <b> Software Engineering Undergraduate & Digital Marketing Enthusiast</b>
            <br />
           <b> Turning Ideas Into Impactful Digital Experiences</b>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-secondary">
              Get in Touch
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 text-gray-400 font-body"
          >
            
            <b> A Passionate </b> <span className="text-primary">Tech Enthusiast</span> <b>From</b>{' '}
            <span className="text-primary">Sri Lanka</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
