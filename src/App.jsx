import Header from "./components/Header";
import From from "./components/From";
import Abouth from "./components/Abouth";

import { useEffect, useState } from "react";
import { getData } from "./FechtData";

function App() {
  const [userInfo, setUserInfo] = useState();
  const [userName, setUserName] = useState('octocat');

  useEffect(() => {
    async function getInfo() {
      await getData(userName)
        .then((data) => {
          console.log(`:> ${data}`);
          setUserInfo(data);
        })
        .catch((err) => console.error(err));
    }

    getInfo();
  }, []);

  function SearchUser(e) {
    e.preventDefault();
    const userN = e.target.userName.value;
console.log(userN);
    setUserName(userN);
  }

  return (
    <main className="h-screen  p-3 w-screen flex flex-col justify-center items-center">
      <section className="  sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[60%]  transition-all duration-500">
        <Header />
        <From evento={SearchUser} />
        <Abouth data={userInfo} />
      </section>
      <p className="text-white text-lg mt-3">Made with ❤️ by Victor Padilla</p>
    </main>
  );
}

export default App;
