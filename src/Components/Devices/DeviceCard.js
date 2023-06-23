import React from "react";
import StatusGreen from "./StatusGreen";
import { WifiIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function DeviceCard(props) {
  return (
    <Link to="/machine" >
      <div className="h-48 max-w-sm min-h-full bg-slate-100 rounded-xl shadow-md hover:shadow-lg flex mt-3 p-3">
        <div className="w-6/12 p-3 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-700">{props.name}</h1>
            <div className=" mt-2 mb-2">
              <p className="text-gray-500 text-sm">
                <span className="text-gray-700">{props.serial}</span>
              </p>
            </div>
          </div>
          <div className=" flex justify-start gap-7 ">
            <div className="flex justify-center items-center flex-col">
              <WifiIcon className="h-6 w-6 text-green-400" />
              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                D1
              </span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <WifiIcon className="h-6 w-6 text-red-400" />
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                D2
              </span>
            </div>
          </div>
        </div>
        <div className="w-6/12 p-3 justify-center flex items-start">
          <div className="border-4 border-white rounded-full shadow-md relative inline-block">
            <img
              className=" object-cover rounded-full w-24 h-24"
              src="https://tse4.mm.bing.net/th?id=OIP.OhGBY1_AEMABRb1ypZQT9AHaFj&pid=Api&P=0&h=180"
              alt=""
            />
            <div className="absolute border-4 rounded-full top-2 right-0 border-white shadow-md">
              <StatusGreen />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DeviceCard;
