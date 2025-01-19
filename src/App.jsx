import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-neutral-900  p-5 min-h-screen  text-white ">
      <div >
      <SideBar />
      </div>
     <div >
      <Navbar />
      <Outlet />
     </div>
    </div>
  );
};

export default App;
