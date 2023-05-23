
import Header from './components/Header';
import From from './components/From';
import Abouth from './components/Abouth';

import { useEffect, useState } from 'react';
import {getData} from './FechtData';

function App() {
  const [userInfo,setUserInfo] = useState()
  

  useEffect( () =>{
    async function getInfo() {
      await getData('Bluuweb')
      .then((data) => {
        setUserInfo(data)
      }).catch(err => console.error(err))
      
    }

   
   
    getInfo()
 
  
  },[]);

   console.log(userInfo); 
  return (
    <main className="h-screen  p-3 w-screen flex flex-col justify-center items-center">
      <section className='px-3  sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[60%]  transition-all duration-500'>
      <Header/>
        <From/>
        <Abouth/>
      </section>
      <p className='text-white text-lg mt-3'>hollo wor</p>
    </main>
  )
}

export default App
