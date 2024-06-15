import Image from "next/image";

export default function SmallerImage({src, alt}) {
  return (
    <div className="relative top-[-45rem] bg-black">
        <Image 
            src={src} alt={alt} className='absolute right-[3rem]'
        />
    </div>
  )
}
