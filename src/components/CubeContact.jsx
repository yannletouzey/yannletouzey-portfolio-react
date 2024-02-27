const CubeContact = ( {id, link, logo, alt}) => {
  return (
    <div  id={id} className="header__contact--cube">
      <div className="face front">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={alt}/>
        </a>
      </div>
      <div className="face back">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={alt}/>
        </a>
      </div>
      <div className="face left">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={alt}/>
        </a>
      </div>
      <div className="face right">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={alt}/>
        </a>
      </div>
      <div className="face top">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={alt}/>
        </a>
      </div>
      <div className="face bottom">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={alt}/>
        </a>
      </div>
    </div>
  )
}
export default CubeContact;