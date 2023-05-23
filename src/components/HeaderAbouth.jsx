import React from 'react'

function HeaderAbouth() {
  return (
    <article className="grid grid-cols-2  lg:col-span-3 lg:grid lg:grid-cols-3 items-center">
        <div className="  flex justify-center p-2 ">
          <img
            src="https://avatars.githubusercontent.com/u/52568098?v=4"
            alt=""
            className="rounded-full shadow-lg shadow-[#0079fe] w-28 h-2w-28 lg:w-36 lg:h-36"
          />
        </div>

        <div className="relative lg:col-span-2  lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-3 ">
          <h1 className="text-xl font-bold lg:col-span-2">Victor Padilla</h1>
          <span className="text-[#0079fe] lg:col-span-2">@sonydev</span>
          <p className="lg:absolute lg:top-1 lg:right-2">Joined 25 jan 2023</p>
        </div>
      </article>
  )
}

export default HeaderAbouth