import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, PowerIcon, UserIcon } from "@heroicons/react/24/solid";

const SideBar = forwardRef(({ showNav }, ref) => {
  const location = useLocation();
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-md z-50">
      <div className="flex justify-center mt-7 mb-14 px-14 ">
        <div className="flex flex-col items-center">
          <img className="w-32 h-auto" src="/IEMA.png" alt="company logo" />
          <h1 className="text-xl font-bold text-blue-900">IEMA</h1>
        </div>
      </div>

      <div className="flex flex-col">
        <Link to="/home">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              location.pathname === "/home"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2 text-blue-600">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div className="text-blue-600">
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link to="/monitor">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              location.pathname === "/monitor"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2 text-blue-600">
              <UserIcon className="h-5 w-5" />
            </div>
            <div className="text-blue-600">
              <p>Monitor</p>
            </div>
          </div>
        </Link>
        <Link to="/machine">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              location.pathname === "/machine"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2 text-blue-600">
              <UserIcon className="h-5 w-5" />
            </div>
            <div className="text-blue-600">
              <p>Machine Details</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              location.pathname === "/"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2 text-blue-600">
              <PowerIcon className="h-5 w-5" />
            </div>
            <div className="text-blue-600">
              <p>Logout</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

// SideBar.displayName = "SideBar";

export default SideBar;
