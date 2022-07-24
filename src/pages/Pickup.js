import Nav from "../components/nav";
import background from "../assets/images/pickupBackground.svg";
import backgroundMobile from '../assets/images/pickupBackgroundMobile.svg'
import blackbanner from "../assets/images/blackbanner.svg";
import { useState, useEffect } from "react";
import food from "../assets/icons/buildBrand.svg";
import map from "../assets/icons/increase_orders.svg";
import lightning from "../assets/icons/relationships.svg";
import {useContext} from 'react'
import { WindowSizeContext } from "../App";
import BusinessCard from "../components/businessCard";
import promote from "../assets/images/pickup-cost-effective.avif";
import reachCustomers from "../assets/images/pickup-kit.svg";
import support from "../assets/images/pickup-covid.avif";
import SignupBar from "../components/signupBar";
import tableService from "../assets/images/pickup-table-service.avif";
import deliverySupport from "../assets/images/deliverySupport.avif";
import SupportCard from "../components/supportCard";
import Footer from "../components/footer";


export default function Pickup() {
  const windowSize = useContext(WindowSizeContext)
  const [scrollY, setScrollY] = useState(0);
  const [answerAOpen, setAnswerAOpen] = useState(true)
  const [answerBOpen, setAnswerBOpen] = useState(true)
  const [answerCOpen, setAnswerCOpen] = useState(true)
  const [answerDOpen, setAnswerDOpen] = useState(true)

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
            Grow your sales with Pickup
          </h1>
          <p className="text-gray-600 lg:text-white text-md md:text-xl">
            Allows customers to collect orders direct from you. Pickup is an
            additional way <br /> for customers to order from your restaurant
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
              <div className="flex flex-col items-center justify-between lg:w-[32%] gap-2">
                <img src={map} alt="" style={{ width: "110px" }} />
                <span className="font-bold text-2xl">Grow your sales</span>
                <span className="text-[#828585] text-center">
                  Offers customers another way to order from you, adding
                  incremental sales
                </span>
              </div>
              <div className="flex flex-col items-center justify-between lg:w-[32%] gap-2">
                <img src={food} alt="" style={{ width: "110px" }} />
                <span className="font-bold text-2xl">Build your brand</span>
                <span className="text-[#828585] text-center">
                  Customers discover your brand in the Pickup section of the app
                  and in-store
                </span>
              </div>
              <div className="flex flex-col items-center justify-between lg:w-[32%] gap-2">
                <img src={lightning} alt="" style={{ width: "110px" }} />
                <span className="font-bold text-2xl">Create Relationships</span>
                <span className="text-[#828585] text-center">
                  Meet customers face to face, and encourage them to return for
                  a meal in-house
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 md:px-8 lg:px-48 text-center mt-80 md:mt-40 lg:mt-8">
        <h2 className="text-4xl font-bold">How we can help your business</h2>
        <div className="w-full mt-8 flex flex-wrap justify-between items-center gap-2">
          <BusinessCard
            flexWrap="flex-wrap"
            img={promote}
            title="Cost effective"
            body={["Customers collect their meal direct from you and save on delivery costs, encouraging more frequent orders.","When a customer opts for Pickup you save on commission too."]}
            index="1"
          />
          <BusinessCard
            flexWrap="flex-wrap-reverse"
            img={reachCustomers}
            title="All the same kit"
            body={["No additional technology, or investment is needed to enable Pickup, alongside Delivery.","For ease and flexibility, you'll use the same device for all orders."]}
            index="2"
          />
          <BusinessCard
            flexWrap="flex-wrap"
            img={support}
            title="COVID-safe"
            body={["Just like rider handovers, maintain safe distancing for customer collections with contact-free Pickup.","Comply with COVID-19 regulations by reducing interactions."]}
            index="3"
          />
        </div>
      </section>

      <section className="my-10">
        <SignupBar
          title="Enable Pickup for your business"
          btnText="Sign up"
        />
      </section>

      <section className="px-2 md:px-8 lg:px-48 text-start lg:text-center my-16 flex flex-col">
        <h4 className="text-4xl font-bold">Flexible ordering, for you and your customers</h4>
        <p className="mt-4">
          A few more ways we can help you to generate more customer orders
        </p>
        <div className="flex justify-center mt-12 flex-wrap gap-4">
          <SupportCard
            img={tableService}
            title="Table Service"
            description="Customers order ahead or in-store using the 24/7 Postal app."
          />
          <SupportCard
            img={deliverySupport}
            title="Delivery"
            description="Your food, delivered by the experts. Create long-term growth by offering delivery."
          />
        </div>
      </section>

      <section>
        <div className="px-2 md:px-8 lg:px-48 py-16 bg-yellow-300">
          <div className="flex flex-col items-center justify-center w-[65%] mx-auto">
            <h4 className="text-4xl font-bold text-white mb-8">Frequently asked questions</h4>
            <details class="list-none w-full cursor-pointer shadow-lg ">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerAOpen(!answerAOpen)}>
                    <span className="">Is Pickup automatically enabled?</span>
                    <button>
                        { answerAOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>No, but you can choose to use Pickup by logging into Restaurant Hub, find out more here.</p>
                  <p>If you're in an area where Pickup is more popular, we may contact you to suggest you enable this delivery method.</p>
                  <p>Not working for you? You can easily switch it off in Hub too.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerBOpen(!answerBOpen)}>
                    <span className="">Will my Delivery menu be used for Pickup?</span>
                    <button>
                        { answerBOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>Yes, but you can have different menu items for both Delivery and Pickup.</p>
                  <p>For the same menu item, the prices should be the same for both Delivery and Pickup.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerCOpen(!answerCOpen)}>
                    <span className="">Can I run Marketer offers for Pickup?</span>
                    <button>
                        { answerCOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>Yes, our promotional tool, Marketer can be enabled for Delivery, Pickup and Table Service.</p>
                  <p>Marketer is a great way to grow your customer base, especially with customers seeking better value meals, by offering menu item or whole menu offers.</p>
                  <p>Find out more about Marketer</p>
                  <p>Find out more about Table Service.</p>
                </div>
            </details>
            <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]" onClick={() => setAnswerDOpen(!answerDOpen)}>
                    <span className="">How does 24/7 Postal deal with complaints for Pickup orders?</span>
                    <button>
                        { answerDOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>)}
                    </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>If a customer complains in store, their complaint can often be dealt with more quickly by your staff.</p>
                  <p>If a customer requires a refund for a Pickup order, after they've left your restaurant they can request this in the 24/7 Postal app.</p>
                </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
