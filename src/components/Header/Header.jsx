import Image from "next/image"
import Circle from "./Circle";
export default function Header() {
  return (
    <header className="relative">
    <Circle 
        circleStyle='h-[50rem]  w-[50rem] border-[2rem] border-[#44444480] translate-x-[-35rem] absolute top-[-3rem] rounded-full'
      />
      <Circle 
        circleStyle='absolute top-[-3rem] left-0 transform translate-x-[50rem]  h-[50rem]  w-[50rem] border-[2rem] border-[#44444480] rounded-full'
      />
    </header>
  )
}
