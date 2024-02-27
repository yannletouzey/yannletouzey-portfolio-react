import { useEffect, useRef } from "react";
import './index.scss';
const ScreenStart = () => {
  const timeRotate = 500;
  const timeDisapear = timeRotate * 3;
  const containerRef = useRef();
  const boxRightRef = useRef();
  const boxLeftRef = useRef();
  useEffect(() => {
    const containerHeight = containerRef.current.clientHeight;
    const containerWidth = containerRef.current.clientWidth;
    const diagContainer = Math.sqrt(
      containerWidth * containerWidth + containerHeight * containerHeight
    );
    setTimeout(() => {
      containerRef.current.style.zIndex = -100;
      containerRef.current.style.display = "none";
    }, timeDisapear);
    boxRightRef.current.style.height = `${diagContainer}px`;
    boxRightRef.current.style.width = `${containerWidth}px`;
    boxLeftRef.current.style.height = `${diagContainer}px`;
    boxLeftRef.current.style.width = `${containerWidth}px`;
    const offsetBox = (diagContainer - containerHeight) / 2;
    boxRightRef.current.style.top = `-${offsetBox}px`;
    boxLeftRef.current.style.top = `-${offsetBox}px`;
    const rotate = Math.acos(containerHeight / diagContainer) * (180 / Math.PI);
    boxRightRef.current.style.transition = `${timeRotate}ms`;
    boxRightRef.current.style.transform = `rotate(-${rotate}deg)`;
    boxLeftRef.current.style.transition = `${timeRotate}ms`;
    boxLeftRef.current.style.transform = `rotate(-${rotate}deg)`;
  }, [])

  return (
    <div className="container__start" ref={containerRef}>
      <div className="container__start--right" ref={boxRightRef}></div>
      <div className="container__start--left" ref={boxLeftRef}></div>
    </div>
  )
}
export default ScreenStart;