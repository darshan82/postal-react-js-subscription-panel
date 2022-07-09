import './App.css';
import Nav from './components/nav';
import background from './assets/images/mainBackground.avif'
import blackbanner from './assets/images/blackbanner.svg'
import {useState, useEffect} from 'react'
function App() {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", logit);
    return () => {
      window.removeEventListener("scroll", logit);
    };
  },[scrollY]);

  return (
    <div className='w-full'>
      <div className='bg-local bg-center bg-no-repeat bg-cover h-60 md:h-screen shadow-[inset_0px_50px_50px_0px_rgba(0,0,0,0.6),inset_0px_-200px_300px_0px_rgba(0,0,0,0.9)]' style={{backgroundImage: `url(${background})`}}>
        <Nav scrollY={scrollY}/>
        <div className='pt-[480px] text-center inline-block flex flex-wrap flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-8'>
          <h1 className='text-white text-6xl font-bold'>Become a Deliveroo <span className='text-yellow-300'>restaurant</span> partner</h1>
          <p className='text-white text-xl'>Together we can keep your kitchen busier than ever</p>
          <button className='text-black text-xl font-semibold bg-yellow-300 rounded py-[12px] px-[24px] min-w-[300px]'>Get started</button>
        </div>
      </div>
      <img src={blackbanner} alt='banner' className=''/>
      

    </div>
  );
}

export default App;
