import pinkBG from '../assets/images/pinkBG.svg'
import './signupBar.css'
const SignupBar = (props) => {
    const {title, btnText} = props
    return (
        <div className="px-2 md:px-8 lg:px-48 relative" >
            <div className="pinkbar p-[48px] bg-[#440063] rounded-lg flex justify-between items-center bg-center" >
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <button className="text-white font-semibold bg-yellow-300 rounded px-[24px] py-[12px]">{btnText}</button>
            </div>
        </div>
    )
}

export default SignupBar
// style={{ backgroundImage: `url(${pinkBG})`, backgroundPosition: 'center' }}