import React from "react";

const Project = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center py-8 px-4">
      <header className="text-center mb-12">
        <p className="text-lg text-gray-600">
          Welcome to my Project! Here you’ll find details about my skills, projects, and how to contact me.
        </p>
      </header>

      {/* Skills Section
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "C++"].map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-md rounded-lg p-4 text-center text-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section> */}

      {/* Projects Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">NitSphere Website</h3>
            <p className="text-gray-600">
              A full-stack social media platform built with the MERN stack, featuring user authentication, admin dashboards, and many more features.
            </p>
            <a
              href="https://nitsphere-nm-q93g.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
       
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-4">
          Feel free to reach out for collaborations or inquiries!
        </p>
        <a
          href="mailto:nitinmaurya0717@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Email Me
        </a>
      </section>
    </div>
  );
};

export default Project;
