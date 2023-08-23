import React from 'react'
import './about.css';
import ME from '../../assets/sanfour3.jpg';
import {BsCalendarDate} from 'react-icons/bs';
import {FaUniversity} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

       <div className='about_me'>
        <div className='about_me_image'>
        <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>

           <article className='about_card'>
             <BsCalendarDate className='about_icon'/>
             <h5>DATE OF BIRTH</h5>
             <small>01/01/2001</small>
           </article>

           <article className='about_card'>
             <FaUniversity className='about_icon'/>
             <h5>INSAT</h5>
             <small>Software Engineering</small>
           </article>

           <article className='about_card'>
             <FaLanguage className='about_icon'/>
             <h5>LANGUAGES</h5>
             <ul>
               <li><small>*Arabic</small></li>
               <li><small>*Frensh</small></li>
               <li><small>*English</small></li>
             </ul>
             
           </article>
          </div>

          <p>
          Hello, my name is Hamza. I am a Software Engineering Student at National Institute of Applied Science and Technology (INSAT).
          <br/><br/>
          I am always energetic and eager to learn new skills.
          <br/><br/>
          Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
          <br/><br/>
          Hard-working web developer and designer with a flair for creating elegant solutions in the least amount of time. 
          <br/><br/>
          For further information , you can reach out to me on my website.
          </p>
          <div id='contactBtn'>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
       </div>
      
    </section>
  )
}

export default About