import Circle from "@/components/Header/Circle";
import WaitListCountDown from "@/components/WaitList/WaitListCountDown";
import WaitListForm from "@/components/WaitList/WaitListForm";

export default function page() {
  return (
    <div className="p-8">
      <div className="relative">    
        <Circle circleStyle="h-[50rem]  w-[50rem] border-[3rem] border-[#44444480] translate-x-[-35rem] absolute top-[-3rem] rounded-full" />
        <Circle circleStyle="absolute top-[-3rem] left-0 transform translate-x-[50rem]  h-[50rem]  w-[50rem] border-[3rem] border-[#44444480] rounded-full" />
      </div>
      <div className="relative">
        <div className="flex gap-52 ">
          <div className="w-full">
            <WaitListCountDown />
          </div>
          <div className="w-full">
            <WaitListForm />
          </div>
        </div>
      </div>
    </div>
  );
}
