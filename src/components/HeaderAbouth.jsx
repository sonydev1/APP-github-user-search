function HeaderAbouth({ avatar, name, user, create }) {
  const date = new Date(create || '').toLocaleDateString("en-US",{
    year:"numeric",
    month:"short",
    day:"numeric",
    
  })
  return (
    <article className="grid grid-cols-2  lg:col-span-3 lg:grid lg:grid-cols-3 items-center">
      <div className="  md:flex md:justify-center  ">
        <img
          src={avatar }
          alt=""
          className="rounded-full drop-shadow-2xl  w-28 h-28  lg:w-36 lg:h-36"
        />
      </div>

      <div className="relative -ml-8 md:ml-0 lg:col-span-2  lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-3 ">
        <h1 className="text-xl font-bold lg:col-span-2">{name}</h1>
        <span className="text-[#0079fe] lg:col-span-2">@{user}</span>
        <p className="lg:absolute lg:top-1 lg:right-2 font-mono font-thin"> joined {date}</p>
      </div>
    </article>
  );
}
export default HeaderAbouth;

