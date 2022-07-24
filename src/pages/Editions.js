import { useState } from "react";
import Nav from "../components/nav";
import background from "../assets/images/editionsBackground.svg";
import backgroundMedium from "../assets/images/editionsBackgroundMedium.svg";
import { useContext } from "react";
import { WindowSizeContext } from "../App";
import BusinessCard from "../components/businessCard";
import SignupBar from "../components/signupBar";
import editionsIncluded from "../assets/images/editionsIncluded.svg";
import locations from "../assets/images/locations.svg";
import highStandards from "../assets/images/highStandards.svg";
import editionsKitchen from "../assets/images/editionsKitchen.svg";
import editionsBuildBrand from "../assets/images/editionsBuildBrand.svg";
import editionsContract from "../assets/images/editionsContract.svg";
import editionsCustomers from "../assets/images/editionsCustomers.svg";
import bleeker from '../assets/images/bleeker.avif'
import shakeshack from '../assets/images/shakeshack.avif'
import pho from '../assets/images/Pho.svg'
import honest from '../assets/images/honest.avif'
import dishoom from '../assets/images/dishoom.avif'
import bleekerReview from '../assets/images/bleekerReview.avif'
import rosa from '../assets/images/rosa.avif'
import Footer from "../components/footer";
const Editions = () => {
  const windowSize = useContext(WindowSizeContext);
  const [answerAOpen, setAnswerAOpen] = useState(true);
  const [answerBOpen, setAnswerBOpen] = useState(true);
  const [answerCOpen, setAnswerCOpen] = useState(true);
  const [answerDOpen, setAnswerDOpen] = useState(true);
  const [answerEOpen, setAnswerEOpen] = useState(true);
  return (
    <>
      <Nav page="editions" />
      <section className="w-full relative top-[92px] flex flex-col lg:flex-row justify-between gap-3 h-[640px]">
        <div
          className={`${
            windowSize.innerWidth > 1023 && "ml-2 md:ml-8 lg:ml-48"
          } flex flex-col justify-center lg:items-start gap-5 w-[100%] lg:w-[40%] h-full`}
        >
          <h1 className="text-4xl font-bold text-center lg:text-start">
            Introducing Editions, our delivery-only kitchens
          </h1>
          <p className="text-[#828585] text-center lg:text-start w-[100%]">
            Editions connects growing businesses with hungry customers, in brand
            new areas.
          </p>
          {/* <button className="w-1/4 mx-auto lg:mx-0 px-[24px] py-[12px] text-white font-semibold bg-yellow-300 rounded">Sign up</button> */}
        </div>
        <img
          src={windowSize.innerWidth > 1023 ? background : backgroundMedium}
          alt=""
          className={`object-cover w-[100%] lg:w-[55%] text-end`}
        />
      </section>
      <div className="bg-[#FBFBFB] py-8 mt-36 md:mt-40 lg:mt-24">
        <section className="px-2 md:px-8 lg:px-48 my-8">
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-8 my-4">
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={editionsIncluded} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">Everything Included</span>
              <span className="text-[#828585] text-center">
                Partners prepare amazing food for their customers - we look
                after everything else, including delivery
              </span>
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={locations} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">Hand-picked locations</span>
              <span className="text-[#828585] text-center">
                Our data helps us bring global favourites and the best
                independents to more customers than ever
              </span>
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={highStandards} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">High, High standards</span>
              <span className="text-[#828585] text-center">
                100% of our kitchens are 5-star EHO rated or equivalent, we're
                hot on hygiene and safety
              </span>
            </div>
          </div>
        </section>

        <div className="px-2 md:px-8 lg:px-48 my-8">
          <p className="border-b border-gray-300"></p>
        </div>

        <section className="px-2 md:px-8 lg:px-48 text-center mt-16">
          <h2 className="text-3xl font-bold">What is an 'Editions kitchen'?</h2>
          <div className="w-full mt-8 flex flex-wrap justify-between items-center gap-2">
            <BusinessCard
              flexWrap="flex-wrap"
              img={editionsKitchen}
              title="All-inclusive service"
              body={[
                "Avoid extra costs as you expand into a new area. 24/7 Postal invests in your success with bespoke kitchens, designed for any cuisine.",
                "A percentage fee covers your upkeep costs, marketing support and a growth manager, dedicated to your success.",
              ]}
              index="1"
              page="marketing"
            />
            <BusinessCard
              flexWrap="flex-wrap-reverse"
              img={editionsBuildBrand}
              title="Build your brand"
              body={[
                "Give customers the best possible experience, with the help of our data and technology.",
                "You can be confident of our high, high standards with a site manager to look after your operations. Site managers are also on hand to help you optimise your menu, packaging and give expansion advice.",
              ]}
              index="2"
              page="marketing"
            />
            <BusinessCard
              flexWrap="flex-wrap"
              img={editionsContract}
              title="One flexible contract"
              body={[
                "Your fee and contract includes rent, rates and waste management as standard. As you grow, you can quickly expand into new areas or cities with another Editions site.",
                "Our partners use Marketer to speed up slow days, creating loyal customers with regular or one-off deals.",
              ]}
              index="1"
              page="marketing"
            />
            <BusinessCard
              flexWrap="flex-wrap-reverse"
              img={editionsCustomers}
              title="Customers and Editions"
              body={[
                "Our sites are designed for delivery, which is why Editions partner's ratings are consistently higher than traditional restaurants.",
                "We've answered some common customer questions in the FAQ section at the bottom of this page.",
              ]}
              index="2"
              page="marketing"
            />
          </div>
        </section>

        <div className="my-4">
          <SignupBar
            title="Not a 24/7 Postal parneter yet?"
            btnText="Sign up"
          />
        </div>

        <section className="px-2 md:px-8 lg:px-48 py-4 mt-8">
          <div className="w-full lg:w-[70%] mx-auto">
            <h2 className="text-3xl font-bold text-center">
              Take a look inside
            </h2>
            <p className="my-4 text-[#505050]">
              With <b>Editions</b> restaurants in 8 countries, we can now fulfil
              even more delivery orders with affordable, custom, delivery-only
              kitchens. Watch the video below, to see what goes on inside an{" "}
              <b>Editions</b> site.
            </p>
          </div>
        </section>

        <div className="px-2 md:px-8 lg:px-48 my-8">
          <p className="border-b border-gray-300"></p>
        </div>

        <section className="px-2 md:px-8 lg:px-48 py-4">
          <div className="">
            <h2 className="text-3xl font-bold text-center">
              Meet our Editions family
            </h2>
            <p className="my-4 text-[#505050] text-center">
              A global network of kitchens, chefs and site managers
            </p>
          </div>
          <div className="w-full flex flex-wrap-reverse items-center justify-end gap-2 lg:gap-8 my-8">
            <div className="w-[100%] lg:w-[40%] flex flex-col gap-2 text-[#505050]">
              <img src={bleeker} className="w-[90px]" />
              <p>
                "The Editions teams are true professionals. The process from
                getting a site to opening was so streamlined."
              </p>
              <p>
              We've never had such a stress free opening, and in the middle of a pandemic we were able to grow our business - thanks to Editions.
              </p>
              <p>Zan Kaufman, Bleecker Burger</p>
            </div>
            <img
              src={bleekerReview}
              alt=""
              className="rounded-md w-[100%] lg:w-[48%]"
            />
          </div>
          <div className="flex flex-wrap gap-4 lg:flex-row justify-evenly items-center">
            <img src={rosa} className="w-[90px]" />
            <img src={shakeshack} className="w-[90px]" />
            <img src={pho} className="w-[90px] h-[50px]" />
            <img src={honest} className="w-[50px] h-[50px]" />
            <img src={dishoom} className="w-[90px]" />
          </div>
        </section>

        <div className="px-2 md:px-8 lg:px-48 my-8">
          <p className="border-b border-gray-300"></p>
        </div>

        <section>
          <div className="px-2 md:px-8 lg:px-48 py-16">
            <div className="flex flex-col items-center justify-center w-[65%] mx-auto">
              <h4 className="text-4xl font-bold mb-8">
                Common partner questions
              </h4>
              <details class="list-none w-full cursor-pointer shadow-lg ">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerAOpen(!answerAOpen)}
                >
                  <span className="">
                    How do I join 24/7 Postal editions?
                  </span>
                  <button>
                    {answerAOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  <b>Editions</b> works on a simple single percentage commission, and you need to be an existing partner to join.
                  </p>
                  <p>
                  To find out more about the kinds of restaurants we're looking for, or to discuss pricing visit <b>Restaurant Hub</b> Help or speak to your account manager.
                  </p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerBOpen(!answerBOpen)}
                >
                  <span className="">what support will 24/7 Postal give me?</span>
                  <button>
                    {answerBOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  We provide a custom kitchen, perfect for your menu and manage your dispatch operations - from kitchen to customer.
                  </p>
                  <p>
                  A site manager is also on hand to help with everything from rider pick up, to issues with supplies, or your kitchen.
                  </p>
                  <p>Constantly improve your customer satisfaction with our data and insights, and let our growth managers help you to build your brand for delivery.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerCOpen(!answerCOpen)}
                >
                  <span className="">Why are editions site called 'dark' or 'cloud' kitchens?</span>
                  <button>
                    {answerCOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  Editions kitchens prepare food for delivery-only customers, meaning none of the food prepared is eaten on site. Our “super kitchens” are home to new, exciting and often unique restaurant brands.
                  </p>
                  <p>These super kitchens are sometimes referred to as dark or cloud kitchens, based on a similar set up by well-known supermarket brands - set up for delivery, without a storefront for customers.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerDOpen(!answerDOpen)}
                >
                  <span className="">How does 24/7 Postal select Editions sites?</span>
                  <button>
                    {answerDOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  Our main goal is to increase selection for customers in high-demand and high potential areas. We use world-leading technology to identify cuisine gaps and predict which types of restaurants will succeed.
                  </p>
                  <p>We select sites based on our ability to ensure high, high standards of health and safety.</p>
                  <p>We save money for partners and customer by avoiding high-street rents, as almost all sites are away from residential roads.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerEOpen(!answerEOpen)}
                >
                  <span className="">How do you select Editions site managers and growth managers?</span>
                  <button>
                    {answerEOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  For more information about our recruitment, you can visit <b>Restaurant Hub</b> or speak to your account manager.
                  </p>
                  <p>If you're an aspiring site manager, visit our <b className="text-yellow-400">Careers page</b> for the latest <b>Editions</b> job openings.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section>
          <div className="px-2 md:px-8 lg:px-48 py-16">
            <div className="flex flex-col items-center justify-center w-[65%] mx-auto">
              <h4 className="text-4xl font-bold mb-8">
                Common customer questions
              </h4>
              <details class="list-none w-full cursor-pointer shadow-lg ">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerAOpen(!answerAOpen)}
                >
                  <span className="">
                    Can I visit an Editions kitchen in my area?
                  </span>
                  <button>
                    {answerAOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  Access to our delivery-only sites is restricted to partners, staff and riders.
                  </p>
                  <p>
                  This is the same as many restaurants, where customers can't access or view the kitchen or 'back of house' operations - here's more information for our more curious customers.
                  </p>
                  <p>Watch the video above to take a look inside our <b>Editions</b> kitchens.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerBOpen(!answerBOpen)}
                >
                  <span className="">How can I tell which restaurants are in Editions on the app?</span>
                  <button>
                    {answerBOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  If we have an <b>Editions</b> site in your area, you'll see these clearly labelled in your app feed. You can also search '24/7 Postal Editions' to see all your nearest <b>Editions</b> restaurants.
                  </p>
                 </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerCOpen(!answerCOpen)}
                >
                  <span className="">What makes delivery-only kitchens safer?</span>
                  <button>
                    {answerCOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  We start by picking <b>Editions</b> sites based on our ability to ensure high, high standards of health and safety.
                  </p>
                  <p>On site teams are employed to make sure all restaurant partners maintain the highest standards for hygiene, health and safety. That's why 100% of Editions kitchens have a 5-star EHO (Environmental Health Officer) or equivalent rating.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerDOpen(!answerDOpen)}
                >
                  <span className="">Is all the food made in the same kitchen?</span>
                  <button>
                    {answerDOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  No. All restaurants on site have their own dedicated staff, food preparation and cooking areas.
                  </p>
                  </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerEOpen(!answerEOpen)}
                >
                  <span className="">Do chefs work for the Restaurant or 24/7 Postal?</span>
                  <button>
                    {answerEOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    )}
                  </button>
                </summary>
                <div className="flex flex-col gap-2 text-[#707070] bg-white p-4 border-b border-[#E5E5E5]">
                  <p>
                  24/7 Postal provide a managed kitchen space and delivery service, letting our restaurant partners focus on making the food you love.
                  </p>
                  <p>All chefs are employed and trained directly by our restaurant partners, meaning you can enjoy the same delicious dishes you would find at a restaurant's dine-in restaurant.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <div className="bg-[#F8F8F8]">
            <Footer />
        </div>
      </div>
    </>
  );
};
export default Editions;
