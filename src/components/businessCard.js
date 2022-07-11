import {BiRightArrowAlt} from 'react-icons/bi'
const BusinessCard = (props) => {
    const {flexWrap, img, imgWidth, contentWidth, title, body, reference, index} = props
    return (
        <div className={`w-full mt-8 flex ${flexWrap} justify-between items-center gap-2`}>
          {
            index/2 === 1 ? (<>
          <div className={`md:w-[${contentWidth}%] flex flex-col items-start gap-2`}>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="text-start">{body}</p>
            <p className="flex justify-start items-center text-yellow-300"><a href='.' className="">{reference}</a><BiRightArrowAlt /></p>
          </div>
          <img src={img} alt={img} className={`md:w-[${imgWidth}%] object-cover h-[300px] rounded-lg shadow-[2px_2px_5px_2px_rgba(0,0,0,0.2)]`}/>
            </>) : (<><img src={img} alt={img} className={`md:w-[${imgWidth}%] object-cover h-[300px] rounded-lg shadow-[2px_2px_5px_2px_rgba(0,0,0,0.2)]`}/>
          <div className={`md:w-[${contentWidth}%] flex flex-col items-start gap-2`}>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="text-start">{body}</p>
            <p className="flex justify-start items-center text-yellow-300"><a href='.' className="">{reference}</a><BiRightArrowAlt /></p>
          </div></>)
          }
        </div>
    )
}

export default BusinessCard