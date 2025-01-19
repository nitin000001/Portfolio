import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <a
            href="mailto:nitinmaurya0717@gmail.com"
            className="text-white-300 hover:text-white mr-6"
          >
            <MdMarkEmailRead />
          </a>
          <a
            href="tel:+919321696390"
            className="text-white-300 hover:text-white"
          >
            <MdAddCall />
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/nitin000001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" hover:text-white text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/nitinmaurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className=" hover:text-white text-2xl" />
          </a>
          <a href="#" rel="noopener noreferrer">
            <FaTwitter className=" hover:text-white text-2xl" />
          </a>
        </div>

        {/* Skills/Technologies */}
        <div className="text-center text-sm mb-4">
          <p>Technologies I work with:</p>
          <p>HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Tailwind CSS</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs">
          <p>© 2025 Nitin Maurya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
