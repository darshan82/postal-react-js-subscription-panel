import './faqs.css'
const Faqs = (props) => {
  const {data} = props
  return (
    <div className="px-2 md:px-8 lg:px-48 py-16 bg-yellow-300">
      <div className="flex flex-col items-center justify-center w-[65%] mx-auto">
        <h4 className="text-4xl font-bold text-white mb-8">Frequently asked questions</h4>
          {
            data?.length && data?.map(qs => {
              return (<details class="list-none w-full cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
              <summary className="flex justify-between p-4 bg-white hover:bg-gray-100 border-b border-[#E5E5E5]">
                  <span className="">{qs?.question}</span>
                  <button class="ml-auto">
                      <svg className={`transition ease-in duration-300`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
              </summary>
  
              <div className="bg-white p-4 transition-all duration-500 ease-in-out border-b border-[#E5E5E5]">{qs?.answer}</div>
          </details>)
            })
          }
      </div>
    </div>
  );
};
export default Faqs;
