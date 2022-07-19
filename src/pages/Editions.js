import Nav from "../components/nav"
import background from '../assets/images/editionsBackground.svg'
import backgroundMedium from '../assets/images/editionsBackgroundMedium.svg'
import { useContext } from "react"
import { WindowSizeContext } from '../App';
const Editions = () => {
    const windowSize = useContext(WindowSizeContext)
    return (<>
        <Nav />
        <section className="w-full relative top-[92px] flex flex-col lg:flex-row justify-between gap-3 h-[640px]">
            <div className={`${windowSize.innerWidth > 1023 && 'ml-2 md:ml-8 lg:ml-48'} flex flex-col justify-center lg:items-start gap-5 w-[100%] lg:w-[40%] h-full`}>
                <h1 className="text-4xl font-bold text-center lg:text-start">Introducing Editions, our delivery-only kitchens</h1>
                <p className="text-[#828585] text-center lg:text-start w-[100%]">Editions connects growing businesses with hungry customers, in brand new areas.</p>
                {/* <button className="w-1/4 mx-auto lg:mx-0 px-[24px] py-[12px] text-white font-semibold bg-yellow-300 rounded">Sign up</button> */}
            </div>
            <img src={windowSize.innerWidth > 1023 ? background : backgroundMedium} alt="" className={`object-cover w-[100%] lg:w-[55%] text-end`}/>
        </section>
        <h1 className="bg-[#FBFBFB] mt-[92px] h-screen">welcome to my world welcome to my world</h1>
        </>)
}
export default Editions