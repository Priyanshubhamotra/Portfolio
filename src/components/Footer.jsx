import { FaGithub, FaLinkedin, FaEnvelope,FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-1 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-lg font-semibold">Connect with me</h3>
        <div className="flex justify-center space-x-4 text-xl">
          <a
            href="https://github.com/Priyanshubhamotra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-bhamotra-67b03127a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/917982981917" 
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:mbhamotra@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Priyanshu Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
