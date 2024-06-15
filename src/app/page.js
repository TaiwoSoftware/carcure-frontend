import HeaderOne from "@/components/HomeComponents/HeaderOne";
import Header from "@/components/Header/Header";
import SmallerImage from "@/components/HomeComponents/SmallerImage";
import tyreOne from  '../components/assets/tyre.svg';
export default function Home() {
  return (
    <>
      <Header />
      <div>
        <HeaderOne />
      </div>
      <div>
        <SmallerImage 
          src={tyreOne}
          alt={'Wheel image'}
        />
      </div>
    </>
  );
}
