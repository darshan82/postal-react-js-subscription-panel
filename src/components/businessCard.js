import { BiRightArrowAlt } from "react-icons/bi";
const BusinessCard = (props) => {
  const { flexWrap, img, title, body, reference, index, page = "home" } = props;
  return (
    <div
      className={`w-full mt-8 flex ${flexWrap} justify-between items-center gap-2`}
    >
      {index / 2 === 1 ? (
        <>
          <div
            className={`w-[100%] md:w-[${
              page === "home" ? 40 : 55
            }%] flex flex-col items-start gap-2`}
          >
            <h4 className="text-2xl font-bold text-start">{title}</h4>
            <div className="flex flex-col gap-2">
              {body?.map((val, index) => (
                <p key={index} className="text-start text-[#707070]">
                  {val}
                </p>
              ))}
            </div>
            {reference && (
              <p className="flex justify-start items-center text-yellow-300">
                <a href="." className="">
                  {reference}
                </a>
                <BiRightArrowAlt />
              </p>
            )}
          </div>
          <img
            src={img}
            alt={img}
            className={`w-[100%] md:w-[${page === "home" ? 55 : 40}%] ${
              page === "home" && "object-cover"
            } h-[300px] rounded-lg ${
              page === "home" && "shadow-[2px_2px_5px_2px_rgba(0,0,0,0.2)]"
            }`}
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt={img}
            className={`w-[100%] md:w-[${page === "home" ? 55 : 40}%] ${
              page === "home" && "object-cover"
            } h-[300px] rounded-lg ${
              page === "home" && "shadow-[2px_2px_5px_2px_rgba(0,0,0,0.2)]"
            }`}
          />
          <div
            className={`w-[100%] md:w-[${
              page === "home" ? 40 : 55
            }%] flex flex-col items-start gap-2`}
          >
            <h4 className="text-2xl font-bold text-start">{title}</h4>
            <div className="flex flex-col gap-2">
              {body?.map((val, index) => (
                <p key={index} className="text-start text-[#707070]">
                  {val}
                </p>
              ))}
            </div>
            {reference && (
              <p className="flex justify-start items-center text-yellow-300">
                <a href="." className="">
                  {reference}
                </a>
                <BiRightArrowAlt />
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessCard;
