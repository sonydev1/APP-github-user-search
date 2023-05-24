import React from 'react'
 import { IoBusiness, IoLink, IoLocation, IoLogoTwitter } from 'react-icons/io5' 

function BodyAbouth({bio,repos,following,followers,locate,twitter,copany,blog}) {
  return (
    <div className=" lg:col-end-4 lg:col-span-2 grid gap-4">

    <p>
    {bio || 'This profile has no bio'}
    </p>
    <div className="bg-[#141c2f] flex  justify-around py-3 items-center text-whithe text-center rounded-xl">
      <div className=" ">
        <p>Repo</p>
        <span className="font-sans font-bold">{repos}</span>
      </div>
      <div className=" ">
        <p>Followers</p>
        <span className="font-sans font-bold">{followers}</span>
      </div>
      <div className=" ">
        <p>Following</p>
        <span className="font-sans font-bold">{following}</span>
      </div>
    </div>

  <div className="md:grid md:grid-cols-2 gap-4">
    <article className="flex gap-4 items-center w-full">
      <IoLocation />
      {locate || "Not Available"}
    </article>
    <article className="flex gap-4 items-center w-full">
      <IoLogoTwitter />
     
     {!twitter ? "Not Available":<a href={`https://twitter.com/${twitter}`} target='_blank'> {twitter }</a> 
     }
    </article>
    <article className="flex gap-4 items-center w-full">
      <IoLink />
      {!blog ? "Not Available":<a href={blog} target='_blank'> {blog }</a> 
     }
    </article>

    <article className="flex gap-4 items-center w-full">
      <IoBusiness />
      {copany || "Not Available"}
    </article>
  </div> 
  </div>
  )
}

export default BodyAbouth