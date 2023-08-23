import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
       <div className='container services_container center'>
       <article className='service'>
       <div className='service_head'>
        <h3>WEB DEVELOPMENT & DESIGN</h3>
       </div>
       <ul className='service_list'>
        <li>
          <BiCheck className='service_list-icon' />
          <p>WEB PROJECT MANAGEMENT (Showcase site, e-commerce ...)</p>
        </li>
        <li>
          <BiCheck className='service_list-icon' />
          <p>PAGE DYNAMISM BY JAVASCRIPT</p>
        </li>
        <li>
          <BiCheck className='service_list-icon' />
          <p>MULTI-PLATFORM DESIGN (Compatible with all media, tablet and mobile application)</p>
        </li>
        <li>
          <BiCheck className='service_list-icon' />
          <p>GRAPHIC DESIGN & WEBDESIGN (Logos, business cards ...)</p>
        </li>
       </ul>
       </article>

       
       </div>
    </section>
  )
}

export default Services