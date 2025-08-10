import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPopup({ show, onClose }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_4sncyxp",
        "template_wu0yh2d",
        form.current,
        "0DA0Y4iv88VDPBir4"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        onClose();
      })
      .catch((error) => {
        console.error(error.text);
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glass Effect Form Only */}
            <div className="bg-white/10 backdrop-blur-lg text-white rounded-2xl w-[90vw] max-w-md p-6 relative shadow-2xl border border-white/20">
              <button
                className="absolute top-4 right-4 text-white hover:text-red-400"
                onClick={onClose}
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 bg-white/10 placeholder-white/70 text-white border border-white/20 rounded focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 bg-white/10 placeholder-white/70 text-white border border-white/20 rounded focus:outline-none"
                  required
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-2 bg-white/10 placeholder-white/70 text-white border border-white/20 rounded focus:outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full flex items-center justify-center"
                >
                  {isSending ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
