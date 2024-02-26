import { useEffect, useState, useRef } from "react";
import dataCarousel from "../assets/data/dataCarousel.js";
console.log(dataCarousel);
const Stack = ({ stack }) => {

  const [tagStack, setTagStack] = useState();
  useEffect(() => {
    setTagStack(stack)
  }, [])
  
  return (
    <div className="container__carousel--tagStack">
      {tagStack}
    </div>
  )
}
export default Stack;