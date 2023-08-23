import React from 'react'
import './certificat.css';
import img1 from '../../assets/certificat1.png';
const data =[{
  id:1,
  image:img1,
  title:'Front End Development Libraries',
}
];

const Certificat = () => {
  return (
    <section id="certificat">
      <h5>What I got</h5>
      <h2>Certificates</h2>

      <div className='container certificat_container'>
        {data.map(({id,image,title}) => {
          return(
            <article className='certificat_item'>
            <div className='certificat_item-image'>
                <a href='https://freecodecamp.org/certification/hvmzv/front-end-development-libraries' target='_blank'>
            <img src={image} alt={id}/>
            </a>
              </div>
            <h3>{title}</h3>
          </article>
          )
        })
        }
       
      
      </div>
    </section>
  )
}

export default Certificat