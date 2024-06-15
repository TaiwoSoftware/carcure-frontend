import Image from "next/image";
import phone from "../assets/phone.svg";
import tyreOne from "../assets/tyre.svg";
export default function HeaderOne() {
  return (
    <div className="relative flex p-8 justify-between mt-[-2rem] items-center">
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
      </div>
      <div>
        <Image
          src={phone}
          className="w-[25rem] "
          alt="A phone with a blue background and a logo in it"
        />
      </div>
    </div>
  );
}
