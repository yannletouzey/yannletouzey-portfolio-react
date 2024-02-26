import { useEffect, useState, useRef } from "react";
const CarouselDescLink = ({dataCarouselElement}) => {
  const linkRef = useRef();
  const [link, setLink] = useState();
  const [hover, setHover] = useState();
  const [inline, setInline] = useState();
  const tooltip = useRef();
  useEffect(() => {
    setInline(dataCarouselElement.inline);
    if (inline) {
      const text = linkRef.current.children[0].children[0].textContent;
      linkRef.current.children[0].children[0].innerHTML = '';

      const text2 = linkRef.current.children[1].children[0].textContent;
      linkRef.current.children[1].children[0].innerHTML = '';
      const textArray = Array.from(text);
      const textArray2 = Array.from(text2);
      textArray.forEach((e, i) => {
        const span = document.createElement('span');
        span.style.display = "inline-block";
        span.style.transition = "0.5s";
        span.style.transitionDelay = `${0.03 * i}s`
        span.id = i;
        span.textContent = e;
        linkRef.current.children[0].children[0].appendChild(span);
      });
      textArray2.forEach((e, i) => {
        const span = document.createElement('span');
        span.style.display = "inline-block";
        span.style.transition = "0.5s";
        span.style.transitionDelay = `${0.03 * i}s`
        span.id = i;
        span.textContent = e;
        linkRef.current.children[1].children[0].appendChild(span);
      });
    }
  }, [inline]);
  useEffect(() => {
      hover ? tooltip.current.style.display = "inline" : tooltip.current.style.display = "none";
  }, [hover])
  useEffect(() => {
  }, [link])
  return (
    <div className="container__carousel--desc--link">
      {inline ? 
        <div className="container__carousel--desc--link--inline" ref={linkRef} onMouseEnter={() => setLink(true)} onMouseLeave={() => setLink(false)}>
          <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
            <div className="containerLink s1">
              {dataCarouselElement.title}
            </div>
          </a> 
          <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
            <div className="containerLink s2">
              {dataCarouselElement.title}
            </div>
          </a>
        </div>
        : 
        <>
          <p className="container__carousel--msgNotOnline" ref={tooltip} >"{dataCarouselElement.title}" n'est pas encore en ligne</p>
          <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{dataCarouselElement.title}</p>
        </>}
    </div>
  )
}
export default CarouselDescLink;