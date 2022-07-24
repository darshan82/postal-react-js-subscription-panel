import { useState } from "react";
import Nav from "../components/nav";
import background from "../assets/images/technologyBackground.svg";
import backgroundMedium from "../assets/images/technologyBackgroundMedium.svg";
import { useContext } from "react";
import { WindowSizeContext } from "../App";
import trackOrder from "../assets/images/trackOrder.svg";
import saveTime from "../assets/images/saveTime.svg";
import getInsights from "../assets/images/getInsights.svg";
import yourTablet from "../assets/images/yourTablet.svg";
import algorithm from "../assets/images/algorithm.svg";
import restaurantHub from "../assets/images/restaurantHub.svg";
import pointOfSale from "../assets/images/pointOfSale.svg";
import BusinessCard from "../components/businessCard";
import SignupBar from "../components/signupBar";
import { GoCheck } from "react-icons/go";
import ownDevice from "../assets/images/ownDevice.svg";
import deliverooDevice from "../assets/images/deliverooDevice.svg";
import inappMarketing from '../assets/images/inappMarketing.avif'
import technologyPickup from '../assets/images/technologyPickup.avif'
import SupportCard from "../components/supportCard";
import Footer from "../components/footer";
const Technology = () => {
  const windowSize = useContext(WindowSizeContext);
  const [answerAOpen, setAnswerAOpen] = useState(true);
  const [answerBOpen, setAnswerBOpen] = useState(true);
  const [answerCOpen, setAnswerCOpen] = useState(true);
  const [answerDOpen, setAnswerDOpen] = useState(true);
  const [answerEOpen, setAnswerEOpen] = useState(true);
  const [answerFOpen, setAnswerFOpen] = useState(true);
  return (
    <>
      <Nav page="technology" />
      <section className="w-full relative top-[92px] flex flex-col lg:flex-row justify-between gap-3 h-[640px]">
        <div
          className={`${
            windowSize.innerWidth > 1023 && "ml-2 md:ml-8 lg:ml-48"
          } flex flex-col justify-center lg:items-start gap-5 w-[100%] lg:w-[40%] h-full`}
        >
          <h1 className="text-4xl font-bold text-center lg:text-start">
            Our technology
          </h1>
          <p className="text-[#828585] text-center lg:text-start w-[100%]">
            World-class tech to help you streamline operations and manage your
            business more easily.
          </p>
          <button className="w-1/4 mx-auto lg:mx-0 px-[24px] py-[12px] text-white font-semibold bg-yellow-300 rounded">
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
              <img src={trackOrder} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">+50%</span>
              <span className="text-[#828585] text-center">
                More total orders
              </span>
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={saveTime} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">+60%</span>
              <span className="text-[#828585] text-center">
                More new customer orders
              </span>
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[25%] gap-2">
              <img src={getInsights} alt="" style={{ width: "110px" }} />
              <span className="font-bold text-2xl">+8%</span>
              <span className="text-[#828585] text-center">
                Existing customer order increase
              </span>
            </div>
          </div>
        </section>

        <div className="px-2 md:px-8 lg:px-48 my-16">
          <p className="border-b border-gray-300"></p>
        </div>

        <section className="px-2 md:px-8 lg:px-48 text-center">
          <h2 className="text-3xl font-bold">Helping your business to grow</h2>
          <div className="w-full mt-8 flex flex-wrap justify-between items-center gap-2">
            <BusinessCard
              flexWrap="flex-wrap"
              img={yourTablet}
              title="Your tablet"
              body={[
                "Check order details, track the status of a rider and view pick up times in a few taps.",
                "Our dedicated all-in-one tablet and printer helps you manage your Deliveroo orders more easily.",
              ]}
              index="1"
              page="technology"
            />
            <BusinessCard
              flexWrap="flex-wrap-reverse"
              img={algorithm}
              title="Our algorithm"
              body={[
                "Every order on Deliveroo is powered by our predictive algorithm, ‘Frank’.",
                "Frank works out the most efficient way to deliver orders, based on the location of restaurants, riders and customers.",
              ]}
              index="2"
              page="technology"
            />
            <BusinessCard
              flexWrap="flex-wrap"
              img={restaurantHub}
              title="Restaurant Hub"
              body={[
                "Hub has all the tools and insights you need to deliver a great customer experience.",
                "From updating your menu, to checking sales and ratings, you can manage your business anywhere, on any device - and get help if you need it.",
              ]}
              index="1"
              page="technology"
            />
            <BusinessCard
              flexWrap="flex-wrap-reverse"
              img={pointOfSale}
              title="Point of Sale integration"
              body={[
                "Connect your Deliveroo menu to your Point of Sale (POS) system and automatically receive orders through your till.",
                "Staff won’t have to manually enter orders into the till and your stock levels can be updated in real time.",
              ]}
              index="2"
              page="technology"
            />
          </div>
        </section>

        <div className="my-4">
          <SignupBar title="Not a Deliveroo parneter yet?" btnText="Sign up" />
        </div>

        <section className="px-2 md:px-8 lg:px-48 py-4 my-8">
          <div className="w-full lg:w-[70%] mx-auto">
            <h2 className="text-3xl font-bold text-center">
              Getting your Deliveroo orders
            </h2>
            <p className="my-8 w-[75%] mx-auto text-[#505050]">
              Whether you use a Deliveroo tablet or your own device, our
              algorithm ‘Frank’ keeps things running smoothly. Using realtime
              info Frank calculates your prep time, so riders arrive at just the
              right time.
            </p>
            <div className="w-full flex flex-wrap rounded-lg lg:shadow-lg mt-12">
              <div className="flex flex-col items-center mx-auto lg:w-1/2 shadow-lg lg:shadow-none">
                <div className="bg-yellow-400 p-[30px] w-full flex flex-col items-center">
                  <img src={ownDevice} alt="" className="w-[90px]" />
                  <p className="text-white font-bold text-2xl">
                    Your own device
                  </p>
                </div>
                <div className="flex flex-col items-center p-[30px]">
                  <ul>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>
                        Use your own device to take orders - we recommend a
                        laptop or tablet
                      </span>
                    </li>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>Connect to your own printer</span>
                    </li>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>Access Restaurant Hub</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center mx-auto lg:w-1/2 shadow-lg lg:shadow-none">
                <div className="bg-[#450163] p-[30px] w-full flex flex-col items-center">
                  <img src={deliverooDevice} alt="" className="w-[90px]" />
                  <p className="text-white font-bold text-2xl">
                    Deliveroo device
                  </p>
                </div>
                <div className="flex flex-col items-center p-[30px] lg:border-l">
                  <ul>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>
                        View and print your orders using our wireless device
                        with built-in printer
                      </span>
                    </li>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>Easy to use - no additional kit required</span>
                    </li>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>Connect your POS system</span>
                    </li>
                    <li className="flex items-center gap-2 mt-2 text-[#505050]">
                      <GoCheck className="text-yellow-500" />{" "}
                      <span>Access Restaurant Hub</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-2 md:px-8 lg:px-48 text-start lg:text-center my-16 flex flex-col">
          <h4 className="text-4xl font-bold">
            Services to help you succeed
          </h4>
          <p className="mt-4">
            How we support our restaurant partners
          </p>
          <div className="flex justify-center mt-12 flex-wrap gap-4">
            <SupportCard
              img={inappMarketing}
              title="In-app marketing"
              description="Advertise your restaurant on Deliveroo and create offers in a few clicks with our free promotional tool, Marketer."
            />
            <SupportCard
              img={technologyPickup}
              title="Pickup"
              description="Have your customers come to you to collect their orders and give them a chance to see your business in person."
            />
          </div>
        </section>

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
                    Do I have to use Deliveroo device?
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
                  Most of our partners choose to use Deliveroo’s all-in-one tablet and printer solution. It’s fast, easy to use, and we have a dedicated support team for any technical issues.
                  </p>
                  <p>
                  If you choose Basic set up you can use your own device (we recommend using a laptop or tablet).
                  </p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerBOpen(!answerBOpen)}
                >
                  <span className="">How much does a Deliveroo tablet cost?</span>
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
                  he cost of one of Deliveroo’s Sunmi devices is included in the one-off joining fee, when you opt for Standard set up.
                  </p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerCOpen(!answerCOpen)}
                >
                  <span className="">What if I need help with my Deliveroo tablet?</span>
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
                  Our searchable <b>Help center</b> has detailed instructions for setting up and using your Deliveroo tablet, and troubleshooting guides if you have a problem.
                  </p>
                  <p>We also have a dedicated tablet team to help with maintenance and repairs.</p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerDOpen(!answerDOpen)}
                >
                  <span className="">What is Restaurant Hub and How do I use it?</span>
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
                  Restaurant Hub has all the tools and insights you need as a Deliveroo partner in one place.
                  </p>
                  <p>You can access your orders, invoices and also contact the support team by logging in to Hub.</p>
                  <p><b>Learn more about Hub</b></p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerEOpen(!answerEOpen)}
                >
                  <span className="">How do I connect my Deliveroo menu to POS system?</span>
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
                  Many partners choose to connect with Deliveroo’s API for ease and simplicity.
                  </p>
                  <p>If your POS system is supported, this means orders can flow directly from Deliveroo into your till once the order has been accepted.</p>
                  <p><b>Find out more here</b></p>
                </div>
              </details>
              <details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                <summary
                  className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]"
                  onClick={() => setAnswerFOpen(!answerFOpen)}
                >
                  <span className="">How does Deliveroo's algorithm work out prep times?</span>
                  <button>
                    {answerFOpen ? (
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
                  Prep time is our term for how long it takes restaurants to get an order ready for pickup by a rider. We use prep time to calculate the estimated order duration (EOD) we show to customers on Deliveroo.
                  </p>
                  <p>When you first set up Deliveroo you have to set your prep time for quiet, moderate and busy periods. We use these numbers as a baseline to train our algorithm.</p>
                  <p>Once you start delivering orders, we’ll use machine learning to set more accurate prep times. Our algorithm learns from your restaurant’s order information over the last 14 days.</p>
                  <p>Learn more about <b>prep times and our algorithm</b>.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Technology;
