import Image from "next/image";
import phone from "../assets/phone.svg";
export default function HeaderOne() {
  return (
    <div className="relative flex px-20 py-8 justify-between mt-[-2rem] items-center">
      <div>
        <h1 className="uppercase text-white font-small-bold  text-6xl mb-2">
          CAR
        </h1>
        <span className="uppercase text-[#032AB4] font-small-bold text-6xl mb-2">
          Maintenance
        </span>
        <h1 className="uppercase text-white font-small-bold text-6xl mb-2">
          Just GOt
        </h1>
        <h1 className="uppercase text-white font-small-bold text-6xl mb-2">
          Easier!
        </h1>
        <div className=" bg-white mt-10 cursor-pointer w-[25rem] shadow-md shadow-slate-600 flex gap-8 items-center rounded-lg p-2">
          <div className="bg-black cursor-pointer text-white text-center px-4 py-2 w-[10rem] rounded-lg">
            About Us
          </div>
          <p>JOIN THE WAITLIST</p>
        </div>
      </div>
      <div>
        <Image
          src={phone}
          className="w-[23rem]  mt-[-2rem]"
          alt="A phone with a blue background and a logo in it"
        />
      </div>
    </div>
  );
}
