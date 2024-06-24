export default function WaitListCountDown() {
  return (
    <div>
      <h1 className="text-[#032AB4] font-bold text-3xl">COUNTDOWN WITH US!</h1>
      <p className="text-white mt-4 text-2xl">DAYS REMAINING</p>
      <div>
        <h1 className="text-white font-bold text-[10rem]">00</h1>
        <div className="grid grid-cols-3 ml-6 gap-14">
          <p className="text-white text-2xl">HOURS</p>
          <p className="text-white text-2xl uppercase">Minutes</p>
          <p className="text-white text-2xl uppercase">Seconds</p>
        </div>
        <h1 className="text-white font-bold text-[9rem]">00:00:00</h1>
      </div>
    </div>
  );
}
