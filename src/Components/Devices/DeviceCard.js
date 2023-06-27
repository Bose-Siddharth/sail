import React from "react";
import StatusGreen from "./StatusGreen";
import { WifiIcon } from "@heroicons/react/24/solid";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function DeviceCard(props) {
  return (
    <Link to="/machine">
      <div className=" max-w-fit max-h-fit shadow-md bg-slate-100">
        <div className="flex flex-col p-2">
          <div className=" font-bold text-lg text-purple-400">{props.name}</div>
          <div className=" font-medium text-sm text-purple-300">
            {props.serial}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row items-center">
            <WifiIcon className="h-6 w-6 text-gray-500" />
            <ArrowLongLeftIcon className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <img
              src="/assets/motor.png"
              alt="motor"
              className="h-24 w-24 object-contain"
            />
          </div>
          <div className="flex flex-row items-center">
            <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
            <WifiIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DeviceCard;
