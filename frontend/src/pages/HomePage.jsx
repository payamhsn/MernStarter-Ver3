import { Link } from "react-router-dom";
import { KeyRound, BookOpen, UserCheck, Github } from "lucide-react";
import { motion } from "framer-motion";

const Feature = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-xl border border-gray-700"
  >
    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-green-400">{title}</h3>
    <p className="mt-2 text-center text-gray-300 text-sm">{description}</p>
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
        >
          MERN Authentication Starter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          A complete authentication system with user management and notes
          feature. Perfect starting point for your MERN stack projects.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        <Feature
          icon={KeyRound}
          title="JWT Authentication"
          description="Secure user authentication using JSON Web Tokens with httpOnly cookies for maximum security."
        />
        <Feature
          icon={UserCheck}
          title="User Management"
          description="Complete user system with registration, login, profile updates, and session management."
        />
        <Feature
          icon={BookOpen}
          title="Notes Feature"
          description="Built-in notes system demonstrating CRUD operations and user data management."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center space-y-8"
      >
        <div className="space-x-4">
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-300 shadow-lg"
          >
            Try Demo
          </Link>
          <a
            href="https://github.com/yourusername/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg"
          >
            <Github className="inline-block mr-2 h-5 w-5" />
            View Source
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
