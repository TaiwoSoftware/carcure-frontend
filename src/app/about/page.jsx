import ReUsableContainer from "@/components/AboutComponent/ReUsableContainer";
import Circle from "@/components/Header/Circle";

export default function page() {
  return (
    <div className="p-4">
      <div className="relative">
        <Circle circleStyle="h-[50rem]  w-[50rem] border-[3rem] border-[#44444480] translate-x-[-35rem] absolute top-[-3rem] rounded-full" />
        <Circle circleStyle="absolute top-[-5rem] left-0 transform translate-x-[60rem]  h-[50rem]  w-[50rem] border-[3rem] border-[#44444480] rounded-full" />
      </div>
      <div className="relative p-4">
        <h1 className="text-white mb-4 font-bold  text-2xl">About Us</h1>
        <ReUsableContainer
          content={
            <>
              <div className="bg-[#fff] h-[10rem]  rounded-lg p-4 mb-4"></div>
              <h1 className="text-white font-bold text-2xl">CarCure</h1>
              <p className="text-white mt-4 font-normal">
                At Car Cure, we understand the frustration of unexpected car
                troubles. That&#39;s why we&#39;ve created an app that puts the
                power of expert mechanics right at your fingertips. Whether
                you&#39;re stranded on the roadside or need routine maintenance,
                Car Cure has you covered.
              </p>
            </>
          }
        />
        <ReUsableContainer
          content={
            <>
              <div className="flex gap-4">
                <div className="bg-[#D9D9D9] h-7 w-7 rounded-full p-4"></div>
                <h1 className="text-white font-bold text-2xl">Why Carcure?</h1>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold  mr-2">Instant Assistance:</span>
                    No more waiting for appointments. With Car Cure, help is
                    just a tap away. Our network of certified mechanics is ready
                    to assist you wherever you are.
                  </p>
                </div>
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold mr-2">Transparent pricing:</span>
                    Say goodbye to hidden fees. Get upfront pricing estimates
                    for your repair or service before any work begins, ensuring
                    transparency and trust.
                  </p>
                </div>
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold mr-2">Quality service:</span>
                    We handpick experienced mechanics to ensure top-notch
                    service. Rest assured, your car is in good hands with
                    carcure.
                  </p>
                </div>
              </div>
            </>
          }
        />

        <ReUsableContainer
          content={
            <>
              <div className="flex gap-4">
                <div className="bg-[#D9D9D9] h-7 w-7 rounded-full p-4"></div>
                <h1 className="text-white font-bold text-2xl">Our Services</h1>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold  mr-2">Emergency Repairs:</span>
                    Flat tire? Dead battery? We&#39;ll get you moving again. Routine
                    Maintenance: From oil changes to brake checks, keep your car
                    running smoothly.
                  </p>
                </div>
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold mr-2">Diagnostic Services:</span>
                    Unsure what&#39;s wrong? Our mechanics will diagnose the issue quickly and accurately.
                  </p>
                </div>
                
              </div>
            </>
          }
        />

        <ReUsableContainer
          content={
            <>
              <div className="flex gap-4">
                <div className="bg-[#D9D9D9] h-7 w-7 rounded-full p-4"></div>
                <h1 className="text-white font-bold text-2xl">How It works?</h1>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold  mr-2">Request Assistance:</span>
                    Simply open the Car Cure app and describe your car issue or
                    service needs.
                  </p>
                </div>
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold mr-2">Recieve Quotes:</span>
                    Get instant quotes from nearby mechanics along with their
                    availability.
                  </p>
                </div>
                <div className="bg-[#ffffff1c] p-8 rounded-md h-[17rem] mt-6">
                  <div className="bg-[#fff] p-10 mb-4 "></div>
                  <p className="text-white text-center">
                    <span className="font-bold mr-2">
                      Choose Your Mechanics:
                    </span>
                    Select the mechanic that fits your needs and budget.
                  </p>
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
