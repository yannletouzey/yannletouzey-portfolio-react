import { useEffect, useState } from "react";
import './index.scss';

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