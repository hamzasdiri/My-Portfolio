import React from 'react'
import './portfolio.css';
import img1 from '../../assets/baskety.png';
import img2 from '../../assets/crud.png';
import img3 from '../../assets/philia2.png';
const data =[{
  id:1,
  image:img1,
  title:'BASKETY',
  github:'https://github.com/hamzasdiri/baskety',
  demo:'https://baskety.netlify.app/'
},
{
  id:2,
  image:img2,
  title:'CRUD APP',
  github:'https://github.com/hamzasdiri/baskety',
  demo:'https://baskety.netlify.app/'
},
{
  id:3,
  image:img3,
  title:'LOGO (Mobile App)'
}
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {data.map(({id,image,title,github,demo}) => {
          return(
            <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            <img src={image} alt={id}/>
              </div>
            <h3>{title}</h3>
            {id <= 2 ?
            <div className='portfolio_item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary'  target='_blank'>Live Demo</a>
            </div>
        :
        <div className='portfolio_item-cta'></div>
        
        }
          </article>
          )
        })
        }
       
      
      </div>
    </section>
  )
}

export default Portfolio