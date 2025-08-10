import { Typewriter } from 'react-simple-typewriter';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
  const targetId = location.hash.replace("#", "");
  if (targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // delay ensures scroll happens after render
    }
  }
}, [location]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-10">
        {/* Spline 3D Model */}
        <div
          className="w-full h-[400px] mb-10 rounded-xl overflow-hidden"
          data-aos="fade-down"
        >
          <Spline scene="https://prod.spline.design/yxdmIWU1Us5vJJC9/scene.splinecode" />
        </div>

        {/* Heading and Typewriter */}
        <h1
          className="text-4xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          <span className="text-blue-400">Hi, I'm </span> Priyanshu
        </h1>

        <h2
          className="text-2xl text-gray-300 mb-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typewriter 
            words={['💻 Full Stack Developer', '🚀 React Enthusiast', '🛠️ Building Scalable Apps']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h2>

        {/* About Section */}
        <div
          id="about"
           className="scroll-mt-24 flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
        >
          <p className="text-lg text-white text-justify md:w-2/3 md:pl-0 pl-2" >
            I’m a passionate developer who enjoys creating dynamic and responsive web applications using the latest technologies.
            I specialize in React and Node.js, and I love working on projects that solve real-world problems.
            When I’m not coding, you can find me exploring new tech trends or contributing to open-source projects.
          </p>
          <img
            src="hero.png"
            alt="Priyanshu"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
            data-aos="zoom-in-left"
          />
        </div>

        {/* Skills Section */}
        <section
          id="skills"
          className="mt-16 max-w-5xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-3xl font-semibold text-center mb-10 text-blue-400">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'HTML', image: '/skills/html.png' },
              { name: 'CSS', image: '/skills/css.png' },
              { name: 'JavaScript', image: '/skills/js.png' },
              { name: 'React', image: '/skills/react.png' },
              { name: 'Node.js', image: '/skills/nodejs.png' },
              { name: 'Express', image: '/skills/express.png' },
              { name: 'MongoDB', image: '/skills/mongo.png' },
              { name: 'Git & GitHub', image: '/skills/github.png' },
              { name: 'MySQL', image: '/skills/mysql.png' },
              { name: 'Python', image: '/skills/python.png' },
              { name: 'Java', image: '/skills/java.png' },
              { name: 'C++', image: '/skills/c-.png' }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-2xl shadow-lg text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
        {/* Resume Section */}
<section
  id="resume"
  className="mt-16 max-w-5xl mx-auto px-4 text-center"
  data-aos="fade-up"
  data-aos-delay="800"
>
  <h2 className="text-3xl font-semibold text-blue-400 mb-6">Resume</h2>
  <p className="text-gray-300 mb-6">
    Interested in working together or learning more about me? Download my resume!
  </p>
  <a
    href="/Resume.PDF"
    download
    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    📄 Download Resume
  </a>
</section>
      </div>
    </motion.div>
  );
}
