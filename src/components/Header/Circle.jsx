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
