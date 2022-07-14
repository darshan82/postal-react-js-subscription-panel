const SupportCard = (props) => {
    const {img, title, description} = props
    return (
        <div className="relative bg-local bg-center bg-no-repeat bg-cover h-screen w-[100%] lg:w-[32%] h-[450px] cursor-pointer rounded-lg shadow-[inset_0px_-200px_100px_-50px_rgba(0,0,0,0.9)] transition-all ease-in-out hover:translate-y-1 hover:scale-105 duration-200" style={{backgroundImage: `url(${img})`}}>
            <div className="absolute bottom-4 flex flex-col items-start justify-center gap-6 px-8">
                <div>
                    <h4 className="text-start text-white text-4xl font-bold">{title}</h4>
                    <p className="text-start text-white mt-2">{description}</p>
                </div>
                <button className="bg-yellow-300 rounded px-4 py-2">Find out more</button>
            </div>
        </div>
    )
}

export default SupportCard