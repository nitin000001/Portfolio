import React, { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const SideBar = () => {
  const personalData = [
    {
      icon: <MdMarkEmailUnread />,
      title: "Email",
      value: "nitinmaurya0717@gmail.com",
      link: "mailto:nitinmaurya0717@gmail.com",
    },
    {
      icon: <IoMdCall />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: <SlCalender />,
      title: "BirthDay",
      value: "July 17, 2004",
      link: null, 
    },
    {
      icon: <CiLocationOn />,
      title: "Location",
      value: "S.N. Dubey Road, Dahisar(E) Mumbai.",
      link: "https://www.google.com/maps?q=S.N.+Dubey+Road,+Dahisar(E)+Mumbai", 
    },
  ];

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="border sm:p-9 rounded-2xl shadow-lg">

      <div className="flex justify-between items-center gap-5 p-5">
        <div className="flex items-center gap-4">
          <figure className="rounded-lg">
            <img
              src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-3d-employee-video-chat-png-image_10199492.png"
              className="w-16 h-16 object-cover rounded-full bg-gray-500"
              alt="profile"
            />
          </figure>
          <div>
            <h1 className="text-2xl font-thin tracking-tighter">Nitin Maurya</h1>
            <p className="bg-gray-800 text-sm py-1 px-3 text-white text-center rounded-md">
              Web Developer
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpened(!isOpened)}
          className="w-28 h-10 text-xs rounded-lg text-white font-bold 
          bg-gradient-to-br from-yellow-300 to-gray-600 border-2 border-yellow-200 
          hover:border-black transition-all duration-300"
        >
          {isOpened ? "Hide Contacts" : "Show Contacts"}
        </button>
      </div>

      <hr className="w-[90%] mx-auto border border-gray-600" />

      {/* Data Section */}
      <div
        className={`p-5 grid gap-4 transition-all duration-500 ${
          isOpened ? "sm:grid-cols-2 grid-cols-1" : "hidden"
        }`}
      >
        {personalData.map((data, index) => (
          <div key={index} className="flex items-center gap-4 bg-stone-800 p-5 rounded-lg">
            <div className="icon p-3 bg-black rounded-full text-yellow-400">
              {data.icon}
            </div>
            <div>
              <h3 className="text-xs text-gray-500">{data.title}</h3>
              {data.link ? (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light hover:text-yellow-500"
                >
                  {data.value}
                </a>
              ) : (
                <h2 className="text-sm font-light">{data.value}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
