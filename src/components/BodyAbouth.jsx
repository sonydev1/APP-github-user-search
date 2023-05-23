import React from 'react'
 import { IoBusiness, IoLink, IoLocation, IoLogoTwitter } from 'react-icons/io5' 

function BodyAbouth() {
  return (
    <div className=" lg:col-end-4 lg:col-span-2 grid gap-4">

    <p>
    Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.
    </p>
    <div className="bg-[#141c2f] flex  justify-around py-3 items-center text-whithe text-center rounded-xl">
      <div className=" ">
        <p>Repo</p>
        <span className="font-sans font-bold">25</span>
      </div>
      <div className=" ">
        <p>Followers</p>
        <span className="font-sans font-bold">3938</span>
      </div>
      <div className=" ">
        <p>Following</p>
        <span className="font-sans font-bold">9</span>
      </div>
    </div>

  <div className="md:grid md:grid-cols-2 gap-4">
    <article className="flex gap-4 items-center w-full">
      <IoLocation />
      Cartagena
    </article>
    <article className="flex gap-4 items-center w-full">
      <IoLogoTwitter />
      Not Available
    </article>
    <article className="flex gap-4 items-center w-full">
      <IoLink />
      <a href="https://www.frontendmentor.io/">frontendmentor.io</a> 
    </article>

    <article className="flex gap-4 items-center w-full">
      <IoBusiness />
      @github
    </article>
  </div> 
  </div>
  )
}

export default BodyAbouth