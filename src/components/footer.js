export default function Footer(){
    return (
        <footer className="px-2 md:px-8 lg:px-48 py-16">
        <div className="flex flex-row items-start justify-between gap-8 py-4 border-b overflow-x-scroll">
          <div className="flex flex-col gap-2 ">
            <strong className="mb-2">Postal Restaurants</strong>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Editions
            </span>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Marketing
            </span>
          </div>
          <di className="flex flex-col gap-2 ">
            <strong className="mb-2">Legal</strong>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Privacy
            </span>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Policies
            </span>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Cookies
            </span>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Terms and conditions
            </span>
          </di>
          <div className="flex flex-col gap-2 ">
            <strong className="mb-2">Help</strong>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Help Center
            </span>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Covid-19
            </span>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Contact Us
            </span>
          </div>
          <div className="hidden lg:flex flex-col gap-2">
            <strong className="mb-2">Want your business on Deliveroo?</strong>
            <span className="text-[#828585] hover:text-yellow-400 cursor-pointer">
              Send us your information and we’ll reach out to help you become a
              <br /> Deliveroo partner.
            </span>
            <button className="w-1/2 mt-2 bg-yellow-300 rounded px-5 py-2 border-yellow-300 border-solid border-2 text-lg text-black font-semibold cursor-pointer">
              Become a partner
            </button>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[#828585]">© 2022 Deliveroo</p>
        </div>
      </footer>
    )
}