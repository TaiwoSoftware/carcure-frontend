import Image from "next/image";
import tyreOne from '../assets/tyre.svg'
import carOne from '../assets/car1.svg';
import carTwo from '../assets/car2.svg';
import Circle from "./Circle";
import tyreTwo from '../assets/tyre2.svg';
export default function Header() {
  return (
    <header className="relative">
      <Circle circleStyle="h-[50rem]  w-[50rem] border-[3rem] border-[#44444480] translate-x-[-35rem] absolute top-[-3rem] rounded-full" />
      <Circle
        circleStyle="absolute top-[-3rem] left-0 transform translate-x-[50rem]  h-[50rem]  w-[50rem] border-[3rem] border-[#44444480] rounded-full"
        content={
          <>
            <Image
              src={tyreOne}
              alt="tyre"
              className="absolute top-[6rem] left-[-4rem]"
            />
            secondContent = {
              <Image 
                src={carOne}
                alt="top car"
                className="absolute top-[4rem] left-[10rem]"
              />
            }

            thirdContent = {
              <Image 
                src={carTwo}
                alt="lower car"
                className="absolute top-[25rem] left-[14rem]"
              />
            }

            fourthContent = {
              <>
                <Image 
                  src={tyreTwo}
                  alt="down tyre"
                  className="absolute top-[36rem] left-[10rem]"
                />
              </>
            }
          </>
          
        }
      />
    </header>
  );
}
