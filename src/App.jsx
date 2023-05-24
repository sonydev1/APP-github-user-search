import Header from "./components/Header";
import From from "./components/From";
import Abouth from "./components/Abouth";

import { useEffect, useState } from "react";
import { getData } from "./FechtData.js";

function App() {
  const [userInfo, setUserInfo] = useState();
  const [userName, setUserName] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getInfo() {
      await getData(userName)
        .then((data) => {
          setUserInfo(data);
          setError();
        })
        .catch((err) => {
          setError('');
          setUserInfo();
        });
    }

    getInfo();
  }, [userName]);

  function SearchUser(e) {
    e.preventDefault();
    const userN = e.target.userName.value;
    userN === "" ? alert("tines que ingresar un Username") : setUserName(userN);
  }

  return (
    <main className="h-screen  p-3 w-screen flex flex-col justify-center items-center">
      <section className="  sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[60%]  transition-all duration-500">
        <Header />
        <From evento={SearchUser} />
        {userInfo && <Abouth data={userInfo} />}
         {error && (
          <div className="bg-red-500 w-full p-3 rounded-xl">
            <h1 className="text-center text-2xl text-white font-bold font-mono">
              {error}
            </h1>
          </div>
        )} 
      </section>
      <p className="text-white text-lg mt-3">Made with ❤️ by Victor Padilla</p>
    </main>
  );
}

export default App;
