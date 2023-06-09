import React from "react";

function MonitorData() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Monitor</p>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-16">
        <div className="factorySectionCard shadow-md hover:shadow-2xl rounded flex flex-col items-center ">
          <div className="h-40 w-full min-height-40 bg-gradient-to-r from-red-500 to-red-200 rounded-t"></div>
          <div className="h-48 w-48 border-4 rounded-full -mt-28 flex items-center justify-center backdrop-blur-2xl border-gray-100 shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7G_pxjLuFrY6CqK6RAGaf33MQQGCmFUCmQ&usqp=CAU"
              className="h-40 w-40 rounded-full object-cover "
              alt="factory section"
            ></img>
          </div>
          <div className="w-full p-3 pb-6">
            <div className=" w-full text-center flex flex-col">
              <span className="text-gray-700 text-3xl font-bold">CCP</span>
              <span className="text-gray-700 text-md font-semibold">
                A-Block/S1
              </span>
            </div>
            <div className="flex justify-around mt-10">
              <div className="h-10 w-10  bg-gray-200 shadow-inner "></div>
              <div className="h-10 w-10  bg-gray-200 shadow-inner"></div>
              <div className="h-10 w-10  bg-gray-200 shadow-inner"></div>
            </div>
            <div className="flex justify-evenly mt-3">
              <div className="h-10 w-10  bg-gray-200 shadow-inner"></div>
              <div className="h-10 w-10  bg-gray-200 shadow-inner"></div>
            </div>
          </div>
        </div>
        <div className="factorySectionCard shadow-md hover:shadow-2xl rounded flex flex-col items-center ">
          <div className="h-40 w-full min-height-40 bg-gradient-to-r from-red-500 to-red-200 rounded-t"></div>
          <div className="h-48 w-48 border-4 rounded-full -mt-28 flex items-center justify-center backdrop-blur-2xl border-gray-100 shadow-md">
            <img
              src="https://d12oja0ew7x0i8.cloudfront.net/images/news/ImageForNews_57209_16361199958445561.jpg"
              className="h-40 w-40 rounded-full object-cover "
              alt="factory section"
            ></img>
          </div>
          <div className="h-48 p-3 w-full text-center flex flex-col">
            <span className="text-gray-700 text-3xl font-bold">CCP</span>
            <span className="text-gray-700 text-md font-semibold">
              A-Block/S2
            </span>
          </div>
        </div>
        <div className="factorySectionCard shadow-md hover:shadow-2xl rounded flex flex-col items-center ">
          <div className="h-40 w-full min-height-40 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t"></div>
          <div className="h-48 w-48 border-4 rounded-full -mt-28 flex items-center justify-center backdrop-blur-2xl border-gray-100 shadow-md">
            <img
              src="https://aosts.com/wp-content/uploads/2018/07/how-is-water-purified-in-a-water-treatment-plant.jpg"
              className="h-40 w-40 rounded-full object-cover "
              alt="factory section"
            ></img>
          </div>
          <div className="h-48 p-3 w-full text-center flex flex-col">
            <span className="text-gray-700 text-3xl font-bold">CCP</span>
            <span className="text-gray-700 text-md font-semibold">
              C-Block/S14
            </span>
          </div>
        </div>
        <div className="factorySectionCard shadow-md hover:shadow-2xl rounded flex flex-col items-center ">
          <div className="h-40 w-full min-height-40 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t"></div>
          <div className="h-48 w-48 border-4 rounded-full -mt-28 flex items-center justify-center backdrop-blur-2xl border-gray-100 shadow-md">
            <img
              src="https://aosts.com/wp-content/uploads/2018/07/how-is-water-purified-in-a-water-treatment-plant.jpg"
              className="h-40 w-40 rounded-full object-cover "
              alt="factory section"
            ></img>
          </div>
          <div className="h-48 p-3 ">
            <div className=" w-full text-center flex flex-col">
              <span className="text-gray-700 text-3xl font-bold">CCP</span>
              <span className="text-gray-700 text-md font-semibold">
                C-Block/S12
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-3 gap-14 mb-16">
        <div className="rounded bg-white h-40 min-height-40 shadow bg-gradient-to-r from-violet-400 to-violet-300"></div>
        <div className="rounded bg-white h-40 min-height-40 shadow bg-gradient-to-r from-pink-400 to-pink-300"></div>
        <div className="rounded bg-white h-40 min-height-40 shadow bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
      </div> */}
    </div>
  );
}

export default MonitorData;
