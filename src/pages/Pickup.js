import Nav from "../components/nav";
import background from "../assets/images/pickupBackground.svg";
import blackbanner from "../assets/images/blackbanner.svg";
import { useState, useEffect } from "react";
import food from "../assets/icons/food.svg";
import map from "../assets/icons/map.svg";
import lightning from "../assets/icons/lightning.svg";

export default function Pickup() {
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

  return (
    <>
      <section
        className="bg-local bg-center bg-no-repeat bg-cover h-80 md:h-screen md:shadow-[inset_0px_50px_50px_0px_rgba(0,0,0,0.6),inset_0px_-200px_300px_0px_rgba(0,0,0,0.9)]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative top-[350px] md:top-[280px] lg:top-[480px] w-[100%] text-center flex flex-wrap flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-8">
          <h1 className="text-black md:text-white text-4xl md:text-6xl font-bold">
            Grow your sales with Pickup
          </h1>
          <p className="text-gray-600 lg:text-white text-xl">
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
        <div className="relative w-full top-[200px] md:top-[-180px] md:mb-[-180px] lg:top-[-200px] lg:mb-[-200px] px-2 md:px-8 lg:px-48 z-10">
          <div className="flex flex-col gap-6 bg-white shadow-lg rounded-md justify-center items-center py-16">
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
    </>
  );
}
