import React from "react";
import { BsCodeSlash, BsGraphUp, BsCloudUpload } from "react-icons/bs";
import { SiAffinitydesigner, SiSpeedtest, SiMongodb, SiNodedotjs } from "react-icons/si";

const About = () => {
  const devData = [
    {
      icon: <BsCodeSlash />,
      name: "Web Development",
      desc: "High-quality development of sites at the professional level",
    },
    {
      icon: <SiAffinitydesigner />,
      name: "UI/UX Design",
      desc: "Creating user-centric, visually appealing, and interactive designs",
    },
    {
      icon: <SiMongodb />,
      name: "Frontend Development",
      desc: "Building responsive and engaging interfaces using React.js and modern web technologies",
    },
    {
      icon: <SiNodedotjs />,
      name: "Backend Development",
      desc: "Developing robust server-side applications with Node.js and Express.js",
    },
    {
      icon: <BsCloudUpload />,
      name: "API Integration",
      desc: "Seamless integration of RESTful APIs and third-party services",
    },
    {
      icon: <SiSpeedtest />,
      name: "Performance Optimization",
      desc: "Improving website performance and ensuring faster load times with best practices",
    },
    {
      icon: <BsGraphUp />,
      name: "Scalable Solutions",
      desc: "Creating scalable and efficient solutions for business needs",
    },
  ];

  return (
    <div className="font-sans text-gray-300">
      <h1 className="pl-5 text-2xl ">About</h1>
      <hr className="w-5 border ml-5 border-[#42f5ec]" />
      <h3 className="scrollBar p-9 mb-3 h-52 mt-2 overflow-x-auto leading-7 text-lg">
        <p className="text-2xl font-semibold">Hello there!</p>
        I am Nitin Maurya, a passionate web developer with a strong foundation in front-end
        and back-end technologies. Proficient in HTML, CSS, JavaScript, and React.js, <br />
        I specialize in building modern, responsive, and user-friendly web applications. My
        expertise extends to the MERN stack (MongoDB, Express.js, React.js, Node.js),
        enabling me to develop full-stack solutions efficiently. I also work with tools
        like Vite for faster and optimized development workflows. I enjoy creating
        innovative, scalable applications and continuously enhancing my skills in web
        development to deliver impactful projects.
      </h3>

      <h2 className="pl-5 text-3xl ">What I'm Doing</h2>
      <hr className="w-10 border ml-5 border-[#42f5ec]" />
      <div className="scrollBar h-56 overflow-x-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-5">
        {devData.map((data, index) => (
          <div key={index} className=" flex items-center gap-5 p-5 bg-stone-800 rounded-lg shadow-lg">
            <div className="icon text-yellow-400 bg-black rounded-lg p-4 text-2xl">
              {data.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p className="text-sm">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
