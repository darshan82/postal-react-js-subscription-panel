import { useState } from "react";
import Nav from "../components/nav";
import background from "../assets/images/marketingBackground.svg";
import backgroundMedium from "../assets/images/marketingBackgroundMedium.svg";
import marketing from "../assets/images/deliverooMarketing.avif";
import marketingService from "../assets/images/marketingService.svg";
import marketingCustomers from "../assets/images/marketingCustomers.svg";
import BusinessCard from "../components/businessCard";
import { useContext } from "react";
import { WindowSizeContext } from "../App";
import { GoCheck } from "react-icons/go";
import food from "../assets/icons/marketingNewCustomers.svg";
import map from "../assets/icons/deliveryGrowSales.svg";
import lightning from "../assets/icons/increase_orders.svg";
import marketer from "../assets/images/marketer.avif";
import SignupBar from "../components/signupBar";
import athenian from "../assets/images/athenian.avif";
import barburrito from "../assets/images/barburrito.avif";
import prairiefire from "../assets/images/prairiefire.avif";
import honiPoke from "../assets/images/honiPoke.avif";
import yo from "../assets/images/yo.avif";
import papaJohns from "../assets/images/papaJohns.avif";
import Footer from "../components/footer";
const Marketing = () => {
  const windowSize = useContext(WindowSizeContext);
  const [answerAOpen, setAnswerAOpen] = useState(true);
  const [answerBOpen, setAnswerBOpen] = useState(true);
  const [answerCOpen, setAnswerCOpen] = useState(true);
  const [answerDOpen, setAnswerDOpen] = useState(true);
  const [answerEOpen, setAnswerEOpen] = useState(true);
  return (
    <>
      <Nav page='marketing'/>
      <section className="w-full relative top-[92px] flex flex-col lg:flex-row justify-between gap-3 h-[640px]">
        <div
          className={`${
            windowSize.innerWidth > 1023 && "ml-2 md:ml-8 lg:ml-48"
          } flex flex-col justify-center lg:items-start gap-5 w-[100%] lg:w-[30%] h-full`}
        >
          <h1 className="text-4xl font-bold text-center lg:text-start">
            Marketing and promotions
          </h1>
          <p className="text-[#828585] text-center lg:text-start w-[100%]">
            Reach new, local customers with our marketing and promote your
            business in a couple of clicks.
          </p>
          <button className=" mx-auto lg:mx-0 px-[24px] py-[12px] text-white font-semibold bg-yellow-300 rounded">
            Sign up
          </button>
        </div>
        <img
          src={windowSize.innerWidth > 1023 ? background : backgroundMedium}
          alt=""
          className={`object-cover w-[100%] lg:w-[55%] text-end`}
        />
      </section>

      <div className="bg-[#FBFBFB] py-8 mt-36 md:mt-40 lg:mt-24">
        <section className="px-2 md:px-8 lg:px-48 text-center">
          <h2 className="text-3xl font-bold">Helping your business to grow</h2>
          <div className="w-full mt-8 flex flex-wrap justify-between items-center gap-2">
            <BusinessCard
              flexWrap="flex-wrap"
              img={marketing}
              title="24/7 Postal marketing"
              body={[
                "We promote you to local customers through the app.",
                "For no additional cost you can also be featured in regular email and social media advertising, we optimise your visibility on Google too.",
              ]}
              index="1"
              page="marketing"
            />
            <BusinessCard
              flexWrap="flex-wrap-reverse"
              img={marketingCustomers}
              title="Reach new customers"
              body={[
                "There's no 'typical' 24/7 Postal customer.",
                "We're constantly growing our app users, bringing you Delivery orders all day long. Switch on Pickup and Table Service and bring the same customers to your restaurant door.",
              ]}
              index="2"
              page="marketing"
            />
            <BusinessCard
              flexWrap="flex-wrap"
              img={marketingService}
              title="Service please!"
              body={[
                "Turn Wednesdays into Wild Wednesdays by switching on a 'happy hour' deal.",
                "Our partners use Marketer to speed up slow days, creating loyal customers with regular or one-off deals.",
              ]}
              index="3"
              page="marketing"
            />
          </div>
        </section>

        <div className="px-2 md:px-8 lg:px-48 my-8">
          <p className="border-b border-gray-300"></p>
        </div>

        <section className="px-2 md:px-8 lg:px-48 py-4">
          <div className="w-full lg:w-[70%] mx-auto">
            <h2 className="text-3xl font-bold text-center">
              What is Marketer?
            </h2>
            <p className="my-4 text-[#505050]">
              Attract new customers looking for the best value meals with
              Marketer, our promotional tool. It allows you to create offers on
              individual items or your entire menu.
            </p>
            <ul>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>Highlighted on your menu</span>
              </li>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>Visible at the top of your app</span>
              </li>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>Choose the customers you want to target</span>
              </li>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>
                  Plan future offers, even across multiple restaurants
                </span>
              </li>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>
                  Supported by email, in-app and traditional marketing
                </span>
              </li>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>
                  Make offers available for <b>Delivery</b>, <b>Pickup</b> or{" "}
                  <b>Table Service</b>
                </span>
              </li>
              <li className="flex items-center gap-2 mt-2 text-[#505050]">
                <GoCheck className="text-yellow-500" />{" "}
                <span>Highlighted on your menu</span>
              </li>
            </ul>
            <p className="my-4 text-[#505050]">
              When your promotion finishes, we'll send a detailed report telling
              you how it performed with advice on how to improve for next time.
            </p>
          </div>
        </section>

        <section className="px-2 md:px-8 lg:px-48 my-8">
          <h2 className="text-3xl font-bold text-center my-2">
            Restaurant success with Marketer offers
          </h2>
          <p className="text-[#505050] text-center">
            Global averages on offers of at least 20%, for 1 week or more, as of
            June 2020
          </p>

          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-8 my-4">
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={map} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">+50%</span>
              <span className="text-[#828585] text-center">
                More total orders
              </span>
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={food} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">+60%</span>
              <span className="text-[#828585] text-center">
                More new customer orders
              </span>
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={lightning} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">+8%</span>
              <span className="text-[#828585] text-center">
                Existing customer order increase
              </span>
            </div>
          </div>
        </section>

        <div className="px-2 md:px-8 lg:px-48 my-8">
          <p className="border-b border-gray-300"></p>
        </div>

        <section className="px-2 md:px-8 lg:px-48 py-4">
          <div className="">
            <h2 className="text-3xl font-bold text-center">
              Restaurants already using Marketer
            </h2>
            <p className="my-4 text-[#505050] text-center">
              Trusted by restaurants and takeaways all over the world
            </p>
          </div>
          <div className="w-full flex flex-wrap-reverse items-center justify-end gap-2 lg:gap-8 my-8">
            <div className="w-[100%] lg:w-[40%] flex flex-col gap-2 text-[#505050]">
              <img src={athenian} className="w-[90px]" />
              <p>
                “We’ve been on Marketer since it first launched, and from our
                very early stages we saw massive increases in traffic. The first
                offer we did for 30% off, we saw a 110% increase.
              </p>
              <p>
                Every time we use Marketer on average we will see about a 50%
                increase in order volumes and the amazing thing is that
                actually, most of the customers then stay to continue buying
                from the Athenian.”
              </p>
              <p>Tim Vlassis, The Athenian</p>
            </div>
            <img
              src={marketer}
              alt=""
              className="rounded-md w-[100%] lg:w-[48%]"
            />
          </div>
          <div className="flex flex-wrap gap-4 lg:flex-row justify-evenly items-center">
            <img src={athenian} className="w-[90px]" />
            <img src={barburrito} className="w-[90px]" />
            <img src={prairiefire} className="w-[90px]" />
            <img src={honiPoke} className="w-[50px] h-[50px]" />
            <img src={yo} className="w-[90px]" />
            <img src={papaJohns} className="w-[90px]" />
          </div>
        </section>

        <div className="my-4">
          <SignupBar title="Not a 24/7 Postal parneter yet?" btnText="Sign up" />
        </div>

        <section>
          <div className="px-2 md:px-8 lg:px-48 py-16">
            <div className="flex flex-col items-center justify-center w-[65%] mx-auto">
              <h4 className="text-4xl font-bold mb-8">
                Frequently asked questions
              </h4>
              <details class="list-none w-full cursor-pointer shadow-lg ">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerAOpen(!answerAOpen)}
                >
                  <span className="">
                    What is 24/7 Postal Plus?
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
                  <b>24/7 Postal Plus</b> is our monthly subscription service for customers, giving them free delivery on all orders.
                  </p>
                  <p>
                  Compared to other regular customers, <b>Plus</b > customers typically order twice as often and spend twice as much over the course of one month. This means they’re a great option to target with offers.
                  </p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerBOpen(!answerBOpen)}
                >
                  <span className="">what is regular offer?</span>
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
                  Regular offers run at specific times of day and/or certain days of the week. Repeating offers regularly is a great way to grow your orders and reward loyal customers.
                  </p>
                  <p>
                  You’ll set a start and end date, or a time period on an annual basis e.g. a regular ‘happy hour’ from 4 to 5 pm, through the winter holidays.
                  </p>
                  <p>It isn’t possible to schedule or create new offers, during the time your regular offer is scheduled for.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerCOpen(!answerCOpen)}
                >
                  <span className="">Do I have to pay to use Marketer?</span>
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
                  <b>Marketer</b> is free to use – you simply cover the cost of the discount against the total value of a customer's order, and we’ll also take commission on the order.
                  </p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerDOpen(!answerDOpen)}
                >
                  <span className="">What is a 24/7 Postal marketing offer?</span>
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
                  We regularly run advertising and marketing campaigns using <b>Marketer</b> offers, that you can participate in.
                  </p>
                  <p>We’ll tell you about upcoming campaigns via email or in <b>Restaurant Hub</b> notifications.</p>
                  <p>Taking part in campaigns is a great way to make your restaurant more visible, increase orders and find new customers.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerEOpen(!answerEOpen)}
                >
                  <span className="">I have multiple restaurants, can I create offers at any site?</span>
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
                  When you create your offer, choose which restaurant site or sites you’d like your offer to be available for using <b>Restaurant Hub</b>. You can create offers at different sites, running at the same time.
                  </p>
                  <p>Customers will only be able to see the offer at the sites you’ve selected.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray-100 my-0">
        <Footer />
      </div>
    </>
  );
};
export default Marketing;
