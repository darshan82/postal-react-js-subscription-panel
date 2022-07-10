import Nav from "../components/nav";
import background from "../assets/images/mainBackground.avif";
import blackbanner from "../assets/images/blackbanner.svg";
import { useState, useEffect } from "react";
import food from '../assets/icons/food.svg'
import map from '../assets/icons/map.svg'
import lightning from '../assets/icons/lightning.svg'

const STATS = [
    {img: map, count: 148000, caption: 'Restaurant partners globally'}, 
    {img: food,count: 74800000, caption: 'Meals delivered globally'},
    {img: lightning, count: 20, caption: 'Average meal delivery time'}
]
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", logit);
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);
  console.log(scrollY)
  return (
    <>
      <div
        className="bg-local bg-center bg-no-repeat bg-cover h-60 md:h-screen shadow-[inset_0px_50px_50px_0px_rgba(0,0,0,0.6),inset_0px_-200px_300px_0px_rgba(0,0,0,0.9)]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Nav scrollY={scrollY} />
        <div className="pt-[480px] text-center inline-block flex flex-wrap flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-8">
          <h1 className="text-white text-6xl font-bold">
            Become a Deliveroo{" "}
            <span className="text-yellow-300">restaurant</span> partner
          </h1>
          <p className="text-white text-xl">
            Together we can keep your kitchen busier than ever
          </p>
          <button className="text-black text-xl font-semibold bg-yellow-300 rounded py-[12px] px-[24px] min-w-[300px]">
            Get started
          </button>
        </div>
      </div>
      <div className="">
        <img src={blackbanner} alt="banner" className="z-0" />
        <div className="relative top-[-200px] px-2 md:px-8 lg:px-48 z-10">
            <div className="flex flex-col gap-6 bg-white shadow-lg rounded-md justify-center items-center py-16">
                <h4 className="text-2xl font-bold">We're here to deliver</h4>
                <div className="w-full flex flex-wrap justify-evenly">
                    {STATS?.map((data, index) => (<div className="flex flex-col items-center justify-between gap-2">
                        <img src={data?.img} alt={data?.img} style={{width: '110px'}}/>
                        <span className="font-bold text-4xl">{data?.count.toLocaleString()}{index === 2? ' mins' : '+'}</span>
                        <span className="text-[#828585]">{data?.caption}</span>
                    </div>))}
                </div>
            </div>
        </div>
      </div>

      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
    </>
  );
};

export default Home;
