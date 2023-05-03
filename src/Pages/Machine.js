import React from 'react'

function Machine() {
  return (
    <div className="px-4 md:px-16">
          <p className="text-gray-700 text-3xl mb-16 font-bold">Machine</p>

          <div className="grid lg:grid-cols-3 gap-5 mb-16">
            <div className="rounded bg-white h-auto min-height-40 shadow bg-gradient-to-r from-violet-400 to-violet-300"></div>
            <div className="rounded bg-white h-auto min-height-40 shadow bg-gradient-to-r from-pink-400 to-pink-300"></div>
            <div className="rounded bg-white h-40 min-height-40 shadow bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
          </div>
          <div className="grid col-1 bg-white h-96 shadow"></div>
        </div>
  )
}

export default Machine
