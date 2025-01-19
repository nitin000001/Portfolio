import React from "react";
import resumeFile from "../../public/resume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        You can preview my resume below or click the button to download it:
      </p>

      {/* Resume Preview */}
      <iframe
        src={resumeFile}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[600px] border border-gray-300 rounded-lg shadow-md mb-6"
        title="Resume Preview"
      />

      <a
        href={resumeFile}
        download="Nitin_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
