import Image from "next/image";
import tyreOne from "../assets/tyre.svg";
export default function Circle({ circleStyle, content, secondContent, thirdContent, fourthContent}) {
  return (
    <div className={circleStyle}>
      {content}
      {secondContent}
      {thirdContent}
      {fourthContent}
    </div>
  );
}
