import React from 'react';
import './about.css';
import Exdevimg from '../../assets/img/Exdevimg.webp';
import Feriaimg from '../../assets/img/Feriaimg.webp';
import Arduinoimg from '../../assets/img/Arduinoimg.webp';
import Feria2img from '../../assets/img/Feria2img.webp';

function About() {

    return (
        <section className='about-page'>
            <div className='carousel-wrapper'>
                <div className="carousel-track">
                    <img src={Exdevimg} alt='Exdev' />
                    <img src={Feriaimg} alt='Feria' />
                    <img src={Arduinoimg} alt='Arduino' />
                    <img src={Feria2img} alt='Feria2' />
                </div>
            </div>
      </section>
    );
  }
  
  export default About;