import React, { useEffect, useState } from 'react'
import './index.scss';

export default function Projects({ setTitleCurrent }) {
  const [data, setData] = useState([]);
  const getData = async() => {
    const res = await fetch('https://apidata-one.vercel.app/api/data');
    const data = await res.json();
    data.forEach((project) => {
      
      if (project.typeProject !== 'serious') {        
        setData((data) => [...data, project]);
      }
    })
  }

  useEffect(() => {
    setTitleCurrent("Projets divers");
    getData();
  }, []);

  return (
    <section id="container" className="container">
      <ul className="container__projects" style={{ listStyle: 'none', width: '100%'}}>
        {data.map((dataElement, index) => {
          return (
            <li className='container__project' key={index}>
              <a href={dataElement.link} target="_blank" rel="noopener noreferrer">{dataElement.link}</a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
