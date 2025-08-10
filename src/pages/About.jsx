// src/pages/About.jsx
import { motion } from 'framer-motion';
export default function About() {
  return ( <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
    <div className="p-10 space-y-4">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p>
        As a Full Stack Web Developer, I design and build scalable, user-centric web applications from front to back...
      </p>
      <h3 className="text-xl font-semibold mt-6">Skills</h3>
      <ul className="list-disc ml-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Java</li>
        <li>React</li>
      </ul>
    </div>
</motion.div>
  );
}
