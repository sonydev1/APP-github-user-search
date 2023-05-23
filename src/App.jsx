
import Header from './components/Header';
import From from './components/From';
import Abouth from './components/Abouth';

function App() {

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <section className='px-3  sm:w-[70%] lg:w-[70%] xl:w-[60%]  transition-all duration-500'>
      <Header/>
        <From/>
        <Abouth/>
      <h1 className="text-3xl text-center font-sans font-bold">Hola mundo 👋</h1>
      </section>
    </main>
  )
}

export default App
