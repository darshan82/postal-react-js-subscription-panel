import Nav from "../components/nav";
import background from "../assets/images/mainBackground.avif";
import promote from '../assets/images/promote.avif'
import reachCustomers from '../assets/images/reachCustomers.avif'
import support from '../assets/images/support.avif'
import blackbanner from "../assets/images/blackbanner.svg";
import { useState, useEffect } from "react";
import food from "../assets/icons/food.svg";
import map from "../assets/icons/map.svg";
import lightning from "../assets/icons/lightning.svg";
import BusinessCard from "../components/businessCard";

const STATS = [
  { img: map, count: 148000, caption: "Restaurant partners globally" },
  { img: food, count: 74800000, caption: "Meals delivered globally" },
  { img: lightning, count: 20, caption: "Average meal delivery time" },
];
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
  console.log(scrollY);
  return (
    <>
      <section
        className="bg-local bg-center bg-no-repeat bg-cover h-screen shadow-[inset_0px_50px_50px_0px_rgba(0,0,0,0.6),inset_0px_-200px_300px_0px_rgba(0,0,0,0.9)]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative top-[480px] text-center inline-block flex flex-wrap flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-8">
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
      </section>

      <Nav scrollY={scrollY} />

      <section className="">
        <img src={blackbanner} alt="banner" className="z-0" />
        <div className="relative w-full top-[-200px] mb-[-200px] px-2 md:px-8 lg:px-48 z-10">
          <div className="flex flex-col gap-6 bg-white shadow-lg rounded-md justify-center items-center py-16">
            <h4 className="text-2xl font-bold">We're here to deliver</h4>
            <div className="w-full flex flex-wrap justify-evenly">
              {STATS?.map((data, index) => (
                <div className="flex flex-col items-center justify-between gap-2">
                  <img
                    src={data?.img}
                    alt={data?.img}
                    style={{ width: "110px" }}
                  />
                  <span className="font-bold text-4xl">
                    {data?.count.toLocaleString()}
                    {index === 2 ? " mins" : "+"}
                  </span>
                  <span className="text-[#828585]">{data?.caption}</span>
                </div>
              ))}
            </div>
            <span className="absolute bottom-2 lg:right-52 text-[#BBBBBB] text-[13px]">Global figures as of March 2022</span>
          </div>
        </div>
      </section>
      
      <section className="px-2 md:px-8 lg:px-48 text-center mt-8">
        <h2 className="text-4xl font-bold">How we can help your business</h2>
        <div className="w-full mt-8 flex flex-wrap justify-between items-center gap-2">
          <BusinessCard
             flexWrap='flex-wrap'
             imgWidth='55'
             img={promote}
             contentWidth='40'
             title='Promote your business'
             body='Boost sales by increasing your visibility on the most popular online channels.'
             reference='Find out more about marketing'
             index='1'
          />
          <BusinessCard
             flexWrap='flex-wrap-reverse'
             imgWidth='55'
             img={reachCustomers}
             contentWidth='40'
             title='Reach more customers'
             body='Attract new customers and keep them coming back for more with the delivery type that works for you.'
             reference='Find out more about our delivery services'
             index='2'
          />
          <BusinessCard
             flexWrap='flex-wrap'
             imgWidth='55'
             img={support}
             contentWidth='40'
             title='Recieve the support you need'
             body='Watch your business grow with the support of our Restaurant Hub, built to help you succeed.'
             reference='Find out more about Restaurant Hub'
             index='3'
          />
        </div>
      </section>
    </>
  );
};

export default Home;
