import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* รูปภาพ */}
        <motion.div 
          className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#533f38]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://via.placeholder.com/300" alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

        {/* ข้อมูล */}
        <motion.div 
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#533f38] mb-4">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate web developer with expertise in React, JavaScript, and modern web technologies.
            I love creating interactive and user-friendly web applications that make a difference.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="px-6 py-3 bg-[#533f38] hover:bg-[#402d29] text-white font-semibold rounded-lg transition">Download CV</a>
            <a href="#" className="px-6 py-3 border-2 border-[#533f38] text-[#533f38] hover:bg-[#533f38] hover:text-white font-semibold rounded-lg transition">Contact Me</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
