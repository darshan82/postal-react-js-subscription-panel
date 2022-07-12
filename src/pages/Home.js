import Nav from "../components/nav";
import background from "../assets/images/mainBackground.avif";
import promote from '../assets/images/promote.avif'
import reachCustomers from '../assets/images/reachCustomers.avif'
import support from '../assets/images/support.avif'
import delivery from '../assets/images/delivery.avif'
import phone from '../assets/images/phone.avif'
import tortilla from '../assets/images/tortilla.svg'
import blackbanner from "../assets/images/blackbanner.svg";
import { useState, useEffect } from "react";
import food from "../assets/icons/food.svg";
import map from "../assets/icons/map.svg";
import lightning from "../assets/icons/lightning.svg";
import BusinessCard from "../components/businessCard";
import SignupBar from "../components/signupBar";

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
             img={promote}
             title='Promote your business'
             body='Boost sales by increasing your visibility on the most popular online channels.'
             reference='Find out more about marketing'
             index='1'
          />
          <BusinessCard
             flexWrap='flex-wrap-reverse'
             img={reachCustomers}
             title='Reach more customers'
             body='Attract new customers and keep them coming back for more with the delivery type that works for you.'
             reference='Find out more about our delivery services'
             index='2'
          />
          <BusinessCard
             flexWrap='flex-wrap'
             img={support}
             title='Recieve the support you need'
             body='Watch your business grow with the support of our Restaurant Hub, built to help you succeed.'
             reference='Find out more about Restaurant Hub'
             index='3'
          />
        </div>
      </section>

      <section className="px-2 md:px-8 lg:px-48 text-center mt-8 bg-[#58057d] pt-8">
        <div className="flex flex-wrap w-full justify-evenly items-center gap-12">
          <img src={tortilla} alt={tortilla} className='w-[224px]'/>
          <div className="flex flex-col items-center gap-4 lg:w-[35%]">
            <h3 className="text-2xl text-white font-bold">"Deliveroo are awesome to work with. They’re super supportive and always suggest new ideas to grow our sales"</h3>
            <p className="text-white font-bold text-[#C1C7C7]">Head of Marketing, Tortilla</p>
          </div>
          <img src={phone} alt='' className='relative top-[-30px] mb-[-30px] lg:top-[-80px] lg:mb-[-80px] w-[336px]'/>
        </div>
      </section>

      <section className="px-2 md:px-8 lg:px-48 text-start lg:text-center my-6 pt-8" >
        <div>
          <h2 className="text-4xl font-bold">How does Deliveroo work?</h2>
          <p className="mt-2">Fire up your kitchen for Deliveroo orders in a few easy steps</p>
        </div>
        <div className="mt-8 flex justify-between items-center gap-8">
          <img src={delivery} alt={delivery} className='hidden lg:block w-[50%] h-[340px] object-cover rounded-lg shadow-[2px_2px_5px_2px_rgba(0,0,0,0.2)]'/>
          <div class="">
            <div class="flex">
              <div class="flex flex-col items-center justify-start mr-4">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-gray-300"></div>
              </div>
              <div class="pb-12">
                <p class="mb-2 text-xl font-bold text-start">Sign Up</p>
                <p class="text-gray-700 text-start">
                Tell us about your business - you'll need your FSA rating to get started
                </p>
              </div>
            </div>

            <div class="flex">
              <div class="flex flex-col items-center justify-start mr-4">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-gray-300"></div>
              </div>
              <div class="pb-12">
                <p class="mb-2 text-xl font-bold text-start">Set Up</p>
                <p class="text-gray-700 text-start">
                Upload a menu and share your store hours
                </p>
              </div>
            </div>

            <div class="flex">
              <div class="flex flex-col items-center mr-4">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="pt-1">
                <p class="mb-2 text-xl font-bold text-start">Sell</p>
                <p className="text-gray-700 text-start">Watch the orders come in and track them via <a href='.' className="text-yellow-400 cursor-pointer">Restaurant Hub</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="my-8">
        <SignupBar title='Not a Deliveroo parneter yet?' btnText="Create account"/>
      </div>
      <p>hello world</p>
    </>
  );
};

export default Home;
