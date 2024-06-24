export default function WaitlistForm() {
  return (
    <form className="mt-4">
        <input type="text" className="bg-[#ffffff41] text-white outline-none mb-10 p-4 w-full rounded-md" placeholder="Full Name" />

        <input type="text" className="bg-[#ffffff41] text-white outline-none p-4 mb-5 w-full rounded-md" placeholder="Email address" />

        <button type="submit" className="bg-[#032AB4] p-3 rounded-md text-white font-semibold text-2xl w-full">JOIN</button>
    </form>
  )
}
