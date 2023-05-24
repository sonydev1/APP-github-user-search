import HeaderAbouth from "./HeaderAbouth";
import BodyAbouth from "./BodyAbouth";

function Abouth({ data }) {
  return (
    
      
        <section className="px-5 py-8 bg-[#1f2a48] rounded-xl font-mono text-white grid lg:grid-cols-3 md:grid-cols-1 gap-y-5">
          <HeaderAbouth
            name={data.name}
            avatar={data.avatar_url}
            user={data.login}
            create={data.created_at}
          />

          <BodyAbouth
            bio={data.bio}
            blog={data.blog}
            copany={data.company}
            locate={data.location}
            followers={data.followers}
            following={data.following}
            twitter={data.twitter_username}
            repos={data.public_repos}
          />
        </section>
      
  );
}

export default Abouth;
