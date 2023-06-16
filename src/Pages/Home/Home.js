import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-auto min-height-40 shadow bg-gradient-to-r from-violet-400 to-violet-300">
          <Link to="/devices">
            <div className="grid grid-rows-1 justify-center content-center self-center mt-12">
              <p className="text-white text-2xl font-bold">Total Clients</p>
              <p className="text-white text-2xl font-bold ml-10">234</p>
            </div>
          </Link>
        </div>
        <div className="rounded bg-white h-auto min-height-40 shadow bg-gradient-to-r from-pink-400 to-pink-300">
          <div className="grid grid-rows-1 justify-center content-center self-center mt-12">
            <p className="text-white text-2xl font-bold">Total Users</p>
            <p className="text-white text-2xl font-bold ml-10">92</p>
          </div>
        </div>
        <div className="rounded bg-white h-40 min-height-40 shadow bg-gradient-to-r from-yellow-400 to-yellow-300">
          <div className="grid grid-rows-1 justify-center content-center self-center mt-12">
            <p className="text-white text-2xl font-bold">New clients</p>
            <p className="text-white text-2xl font-bold ml-10">12</p>
          </div>
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow"></div>
    </div>
  );
}

export default Home;
