import './signupBar.css'
const SignupBar = (props) => {
    const {title, btnText} = props
    return (
        <div className="px-2 md:px-8 lg:px-48 relative" >
            <div className="p-[48px] bg-[#440063] rounded-lg bg-center" >
                <div className='pinkbar flex justify-between items-center flex-wrap'>
                    <h2 className="text-2xl text-white font-bold z-10">{title}</h2>
                    <button className="text-white font-semibold bg-yellow-300 rounded px-[24px] py-[12px] z-10">{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default SignupBar