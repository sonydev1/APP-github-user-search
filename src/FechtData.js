

const BASE_URL = "https://api.github.com/users";

export function getUser(userName) {
  const url = new URL(BASE_URL + "/" + userName);

  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
      throw(console.error(res.status))
      }
      return res.json();
        
       
      
    })
    .catch((err) => {
      console.log(err);
    });
}

 function formatData (data) {
   const {
    login ,
    avatar_url ,

    name ,
    company ,
    blog ,
    location ,

    bio,
   twitter_username,
    public_repos ,

    followers,
    following,
    created_at ,
  } =  data
  
  return {
    login,
    avatar_url ,

    name ,
    company ,
    blog ,
    location ,

    bio,
   twitter_username,
    public_repos ,

    followers,
    following,
    created_at 
  }
};



async function  getData  (searchParams) {
  const User = await getUser(searchParams).then(formatData);
  
  return  User ;
};

export { getData };

