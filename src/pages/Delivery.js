import Nav from "../components/nav";
import background from "../assets/images/deliveryBackground.svg";
import backgroundMobile from '../assets/images/deliveryBackgroundMobile.svg'
import blackbanner from "../assets/images/blackbanner.svg";
import { useState, useEffect } from "react";
import food from "../assets/icons/deliveryGrowSales.svg";
import map from "../assets/icons/riderNetwork.svg";
import lightning from "../assets/icons/deliveryTime.svg";
import {useContext} from 'react'
import { WindowSizeContext } from "../App";
import BusinessCard from "../components/businessCard";
import trackCard from "../assets/images/deliveryTrackCard.svg";
import safetyCard from "../assets/images/deliverySafety.avif";
import ridersCard from "../assets/images/deliveryRiders.avif";
import SignupBar from "../components/signupBar";
import SupportCard from "../components/supportCard";
import Footer from "../components/footer";
import tableService from '../assets/images/pickup-table-service.avif'
import pickupBackground from '../assets/images/pickupBackground.svg'


export default function Delivery() {
  const windowSize = useContext(WindowSizeContext)
  const [scrollY, setScrollY] = useState(0);
  const [answerAOpen, setAnswerAOpen] = useState(true)
  const [answerBOpen, setAnswerBOpen] = useState(true)
  const [answerCOpen, setAnswerCOpen] = useState(true)
  const [answerDOpen, setAnswerDOpen] = useState(true)
  const [answerEOpen, setAnswerEOpen] = useState(true)

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", logit);
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);

  return (
    <>
      <section
        className="bg-local bg-center bg-no-repeat bg-cover h-80 md:h-screen md:shadow-[inset_0px_50px_50px_0px_rgba(0,0,0,0.6),inset_0px_-200px_300px_0px_rgba(0,0,0,0.9)]"
        style={{ backgroundImage: `url(${windowSize.innerWidth > 767 ? background : backgroundMobile})` }}
      >
        <div className="relative top-[330px] md:top-[280px] lg:top-[480px] w-[100%] text-center flex flex-wrap flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-8">
          <h1 className="text-black md:text-white text-2xl md:text-4xl lg:text-6xl font-bold">
            World-class food delivery
          </h1>
          <p className="text-gray-600 lg:text-white text-md md:text-xl">
          Give your customers the best possible experience and create long-term<br /> growth by offering delivery
          </p>
          <button className="text-black text-xl font-semibold bg-yellow-300 rounded py-[12px] px-[24px] min-w-[100px] md:min-w-[200px] lg:min-w-[300px]">
            Sign up
          </button>
        </div>
      </section>

      <Nav scrollY={scrollY} page="home" />

      <section className="">
        <img
          src={blackbanner}
          alt="banner"
          className="z-0 invisible lg:visible"
        />
        <div className="relative w-full top-[230px] md:top-[-180px] md:mb-[-180px] lg:top-[-200px] lg:mb-[-200px] px-2 md:px-8 lg:px-48 z-10">
          <div className="flex flex-col gap-6 bg-white shadow-lg rounded-md justify-center items-center p-[50px]">
            <div className="w-full flex flex-wrap justify-evenly">
              <div className="flex flex-col items-center justify-between lg:w-[28%] gap-2">
                <img src={map} alt="" style={{ width: "110px" }} />
                <span className="font-bold text-2xl">Rider Network</span>
                <span className="text-[#828585] text-center">
                    A global network of over 100,000<br /> riders
                </span>
              </div>
              <div className="flex flex-col items-center justify-between lg:w-[28%] gap-2">
                <img src={food} alt="" style={{ width: "110px" }} />
                <span className="font-bold text-2xl">Grow your sales</span>
                <span className="text-[#828585] text-center">
                Reach more customers and get a sales boost of up to 30%
                </span>
              </div>
              <div className="flex flex-col items-center justify-between lg:w-[28%] gap-2">
                <img src={lightning} alt="" style={{ width: "110px" }} />
                <span className="font-bold text-2xl">30 minutes</span>
                <span className="text-[#828585] text-center">
                Our average delivery time for customer orders
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 md:px-8 lg:px-48 text-center mt-80 md:mt-40 lg:mt-8">
        <h2 className="text-4xl font-bold">Your food, delivered by the experts</h2>
        <div className="w-full mt-8 flex flex-wrap justify-between items-center gap-2">
          <BusinessCard
            flexWrap="flex-wrap"
            img={trackCard}
            title="Tracked from kitchen to doorstep"
            body={["See the status of your orders, where your rider is and get an alert when they arrive."," We’ll let customers know when their food is on its way and handle all customer service on your behalf."]}
            index="1"
          />
          <BusinessCard
            flexWrap="flex-wrap-reverse"
            img={ridersCard}
            title="'Switch on' riders"
            body={["We only connect you with nearby Deliveroo riders, so that customers get hot, fresh, speedy deliveries.","You get an exact pick up time so you know when a rider will collect the food. All you need is have it ready for the pick up time."]}
            index="2"
          />
          <BusinessCard
            flexWrap="flex-wrap"
            img={safetyCard}
            title="Safety and quality guaranteed"
            body={["All new Deliveroo riders are given road safety training, free rider insurance and free reflective kit.","We make sure your food reaches customers exactly as it should, with food safety training and free insulated bags for riders."]}
            index="3"
          />
        </div>
      </section>

      <section className="my-10">
        <SignupBar
          title="Not a Deliveroo partner yet?"
          btnText="Sign up"
        />
      </section>

      <section className="px-2 md:px-8 lg:px-48 text-start lg:text-center my-16 flex flex-col">
        <h4 className="text-4xl font-bold">More ways to take your orders</h4>
        <p className="mt-4">
          Flexibility for you and your customers
        </p>
        <div className="flex justify-center mt-12 flex-wrap gap-4">
          <SupportCard
            img={pickupBackground}
            title="Pickup"
            description="Have your customers come to you to collect their orders and give them a chance to see your business in person."
          />
          <SupportCard
            img={tableService}
            title="Table Service"
            description="A new, contact free way to order and pay. Your customers can order from their table using the Deliveroo app."
          />
        </div>
      </section>

      <section>
        <div className="px-2 md:px-8 lg:px-48 py-16 bg-yellow-300">
          <div className="flex flex-col items-center justify-center w-[65%] mx-auto">
            <h4 className="text-4xl font-bold text-white mb-8">Frequently asked questions</h4>
            <details class="list-none w-full cursor-pointer shadow-lg ">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerAOpen(!answerAOpen)}>
                    <span className="">What if I have a problem with a rider?</span>
                    <button>
                        { answerAOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>At Deliveroo we want our partners, riders and customers to have the best possible food delivery experience with us.</p>
                  <p>Riders are required to act professionally and take due care when providing delivery services. Our Community guidelines set out the behaviour we expect from riders when they are riding with Deliveroo.</p>
                  <p>If we are made aware of a rider acting in breach of their supplier agreement, we will investigate and take any appropriate action.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerBOpen(!answerBOpen)}>
                    <span className="">What vehicles do riders use?</span>
                    <button>
                        { answerBOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>Riders can use a bicycle, scooter, car, motorbike or e-vehicle for deliveries.</p>
                  <p>Our technology will match each order to the rider who is best able to deliver it safely and efficiently, based on a number of factors such as delivery distance and rider availability.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerCOpen(!answerCOpen)}>
                    <span className="">Are riders insured?</span>
                    <button>
                        { answerCOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>Deliveroo provides free rider accident insurance and free rider public liability insurance to all riders (and their substitutes) whilst they are logged on to our app and for one hour afterwards.</p>
                  <p>Find out more on our insurance partner's website.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerDOpen(!answerDOpen)}>
                    <span className="">How does Deliveroo look after rider's welfare?</span>
                    <button>
                        { answerDOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>The safety and well being of riders is our priority. We provide free insurance and reflective kit for all riders, and run regular road safety campaigns.</p>
                  <p>In response to the COVID-19 pandemic, Deliveroo introduced contact-free delivery and pickup. Riders can also request free face masks and hand sanitisers from Deliveroo.</p>
                  <p>If a rider experiences symptoms of COVID-19, or needs to self-isolate, they can apply for our Rider Support Fund which was established to help riders financially while they can't work.</p>
                  <p>We support, celebrates and reward riders through our rider Perks platform and annual Rider Awards.</p>
                  <p>Riders can also apply for a fully-funded junior degree level scholarship or complete one of 700 free online courses via our skills partner, OpenClassrooms.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerEOpen(!answerEOpen)}>
                    <span className="">Can I use my own riders?</span>
                    <button>
                        { answerEOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>You can choose how you partner with us. When you sign up we offer different options for set up and delivery, so you can pick the right products for your business.</p>
                </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
