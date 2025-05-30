import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './home.css';
//assets
import ianImage from '../../assets/img/ian-img-presentation.jpg';
import consultaGCImage from '../../assets/img/ConsultaGC.png';

import GitHubIcon from '../../shared/icons/GitHubIcon';
import LinkedInIcon from '../../shared/icons/LinkedIn';
import AngularIcon from '../../shared/icons/AngularIcon';
import JavaIcon from '../../shared/icons/JavaIcon';
import NestIcon from '../../shared/icons/NestIcon';
import YoutubeIcon from '../../shared/icons/YoutubeIcon';
import DownloadIcon from '../../shared/icons/DownloadIcon';
import PostgresSQLIcon from '../../shared/icons/PostgresSQLIcon';
import ExpressIcon from '../../shared/icons/ExpressIcon';
import ReactIcon from '../../shared/icons/ReactIcon';
import JavaScriptIcon from '../../shared/icons/JavaScriptIcon';
import NodeIcon from '../../shared/icons/NodeIcon';
import MySQLIcon from '../../shared/icons/MySQLIcon';
import TypeScriptIcon from '../../shared/icons/TypeScriptIcon';
import PythonIcon from '../../shared/icons/PythonIcon';


import ininsignia from '../../assets/img/in-insignia.webp';
import utemimg from '../../assets/img/utem-insignia.webp';

import feria2img from '../../assets/img/feria-exdev-img.webp';
import tesisimg from  '../../assets/img/dfensa-tesis-img.jpg';
import arduinoimg from '../../assets/img/arduino-img.webp';



function Home() {

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (slider && slider.children[index]) {
      const slide = slider.children[index];
      slider.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % totalSlides;
      scrollToSlide(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className='home-page'>
      <section className='presentation'>
        <div className='text'>
        <h1>Ian Battistoni</h1>
        <h3>Ingeniero de software</h3>
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/ianbattistoni/' target='_blank' rel='noopener noreferrer'>
                <LinkedInIcon className='social-icon' />
              </a>
            <a href='https://github.com/IanBattistoni' target='_blank' rel='noopener noreferrer'>
                <GitHubIcon className='social-icon' />
              </a>
              <a href='https://www.youtube.com/@IANBATTISTONI' target='_blank' rel='noopener noreferrer'>
                <YoutubeIcon className='social-icon' />
              </a>
              <a href='https://github.com/IanBattistoni' className='cv-button' title='Github' target='_blank' rel='noopener noreferrer'>
                Descargar CV
                <DownloadIcon className='cv-icon' />
              </a>
          </div>
        </div>
        <div className='ian-img'>
          <img src={ianImage} alt='Ian Battistoni' />
        </div>
      </section>

      <section id='projects' className='projects'>

        <h2>Proyectos</h2>

          <article className='project'>
            <div className='project-image'>
              <a href='https://consulta.giftcard.cl' title='ir al sitio'>
                <img src={consultaGCImage} alt='Ian Battistoni' />
              </a>
            </div>
            <div className='project-info'>
              <h3>Consulta de saldo Gift Card Cencosud</h3>
              <p>
                Software para que las personas puedan consultar la 
                informacion correspondiente
                sus Gift Card de Cencosud
              </p>
              <div className='icons-container'>
                <span title='Angular'>
                  <AngularIcon className='info-icon' />
                </span>
                <span title='Java'>
                  <JavaIcon className='info-icon' />
                </span>
                <span title='Nest'>
                  <NestIcon className='info-icon' />
                </span>
                <span title='PostgresSQL'>
                  <PostgresSQLIcon className='info-icon' />
                </span>
              </div>
            </div>
          </article>
          {/* ... 
          <article className='project'>
            <div className='project-image'></div>
            <div className='project-info'>
              <h3>Followers following</h3>
            </div>
          </article>

          <article className='project'>
            <div className='project-image'></div>
            <div className='project-info'>
            <h3>Repositorio estudiantil Studyhall</h3>
            </div>
          </article>

          <article className='project'>
            <div className='project-image'></div>
            <div className='project-info'>
            <h3>Analisis de pdfs utilizando ia</h3>
            </div>
          </article>
*/}
      </section>
      
      <section id='experiences' className='experiences'>
        <h2>
          Experiencia
        </h2>
        
          <article className='experience'>
            <div className='experience-summary'>
              <h3>Cencosud</h3>
              <time>2024-2025</time>
            </div>
            <div className='experience-details'>
                <h3>Ingeniero de software</h3>
                <p>Dando servicios para el area de Venta Empresas de Cencosud,
                  area relacionada con los servicios de Gift Card.
                </p>
            </div>
   
            
          </article>
          <article className='experience'>
            
            <div className='experience-summary'>
              <h3>Exdev</h3>
              <time>2018-2024</time>
            </div>
            <div className='experience-details'>
                <h3>Ingeniero de software</h3>
                <p>Club universitario centrado en el desarrollo experimental, 
                  donde colaboro en la concepción y ejecución de ideas innovadoras.
                </p>
            </div>
          </article>
          
        
      </section>


      <section id='about' className='about-me'>
            <h2>
              Sobre mí
            </h2>
            <article className='about-container'>
              <p>
                Ingeniero de software de 25 años titulado en Ingeniería Civil en Computación con mención en Informática por la Universidad Tecnológica Metropolitana (UTEM). Tengo experiencia en desarrollo full stack de soluciones web utilizando tecnologías como Angular, React, NestJS, Java, Python, NodeJS y PostgreSQL.
              </p>
              <div className='about-slider'>
                <div className='slider' ref={sliderRef}>
                  <img id='slide-1' className='Defensa-tesisIMG' src={tesisimg} alt='Defensa de tesis'/>
                  <img id='slide-2' className='Feria-exdev1IMG' src={arduinoimg} alt='Feria exdev' />
                  <img id='slide-3' className='Feria-exdev2IMG' src={feria2img} alt='Feria exdev2' />
                </div>
                <div className='slider-nav'>
                  <button onClick={() => scrollToSlide(0)}></button>
                  <button onClick={() => scrollToSlide(1)}></button>
                  <button onClick={() => scrollToSlide(2)}></button>
                </div>
              </div>
            </article>
      </section>

      <section id='stack' className='technologies'>
        <h2>
          Habilidades
        </h2>
        <div className='carousel'>
          <div className='image-container'>
                <div className='skill-card'> 
                  <span title='Angular'>
                    <AngularIcon className='skill-icon' />
                  </span>
                  <h4>Angular</h4>
                </div>
                <div className='skill-card'> 
                  <span title='React'>
                    <ReactIcon className='skill-icon' />
                  </span>
                  <h4>React</h4>
                </div>
                <div className='skill-card'> 
                  <span title='Nest'>
                  <NestIcon className='skill-icon' />
                  </span>
                  <h4>NestJS</h4>
                </div>
                <div className='skill-card'> 
                  <span title='ExpressIcon'>
                  <ExpressIcon className='skill-icon' />
                </span>
                  <h4>ExpressJS</h4>
                </div>
                <div className='skill-card'> 
                  <span title='JavaScript'>
                  <JavaScriptIcon className='skill-icon' />
                  </span>
                  <h4>JavaScript</h4>
                </div>
                <div className='skill-card'> 
                  <span title='TypeScript'>
                  <TypeScriptIcon className='skill-icon' />
                  </span>
                  <h4>TypeScript</h4>
                </div>
                <div className='skill-card'> 
                  <span title='Python'>
                  <PythonIcon className='skill-icon' />
                  </span>
                  <h4>Python</h4>
                </div>
                <div className='skill-card'> 
                  <span title='Java'>
                  <JavaIcon className='skill-icon' />
                  </span>
                  <h4>Java</h4>
                </div>
                
                <div className='skill-card'> 
                  <span title='PostgresSQL'>
                  <PostgresSQLIcon className='skill-icon' />
                </span>
                  <h4>PostgresSQL</h4>
                </div>
         
                <div className='skill-card'> 
                  <span title='MySQL'>
                  <MySQLIcon className='skill-icon' />
                </span>
                  <h4>MySQL</h4>
                </div>
                <div className='skill-card'> 
                  <span title='NodejsL'>
                  <NodeIcon className='skill-icon' />
                </span>
                  <h4>NodeJS</h4>
                </div>

                <div className='skill-card'> 
                  <span title='Angular'>
                    <AngularIcon className='skill-icon' />
                  </span>
                  <h4>Angular</h4>
                </div>
                <div className='skill-card'> 
                  <span title='React'>
                    <ReactIcon className='skill-icon' />
                  </span>
                  <h4>React</h4>
                </div>
                <div className='skill-card'> 
                  <span title='Nest'>
                  <NestIcon className='skill-icon' />
                  </span>
                  <h4>NestJS</h4>
                </div>
                <div className='skill-card'> 
                  <span title='ExpressIcon'>
                  <ExpressIcon className='skill-icon' />
                </span>
                  <h4>ExpressJS</h4>
                </div>
                <div className='skill-card'> 
                  <span title='JavaScript'>
                  <JavaScriptIcon className='skill-icon' />
                  </span>
                  <h4>JavaScript</h4>
                </div>
                <div className='skill-card'> 
                  <span title='TypeScript'>
                  <TypeScriptIcon className='skill-icon' />
                  </span>
                  <h4>TypeScript</h4>
                </div>
                <div className='skill-card'> 
                  <span title='Python'>
                  <PythonIcon className='skill-icon' />
                  </span>
                  <h4>Python</h4>
                </div>
                <div className='skill-card'> 
                  <span title='Java'>
                  <JavaIcon className='skill-icon' />
                  </span>
                  <h4>Java</h4>
                </div>
                
                <div className='skill-card'> 
                  <span title='PostgresSQL'>
                  <PostgresSQLIcon className='skill-icon' />
                </span>
                  <h4>PostgresSQL</h4>
                </div>
         
                <div className='skill-card'> 
                  <span title='MySQL'>
                  <MySQLIcon className='skill-icon' />
                </span>
                  <h4>MySQL</h4>
                </div>
                <div className='skill-card'> 
                  <span title='NodejsL'>
                  <NodeIcon className='skill-icon' />
                </span>
                  <h4>NodeJS</h4>
                </div>

                
                


                

   
                
          </div>
        </div>
      </section>
      {/*
      <section className='technologies'>
            <h2>
              Herramientas
            </h2>
            <div className='carousel'>
              <div className='image-container'>
                  <div className='skill-card'>

                  </div>

              </div>
              
            </div>
      </section>
      */}
      <section className='studies'>
        <h2>
          Estudios
        </h2>
                            
          
          <article className='study'>
            <div className='studyIMG'>
              <img src={utemimg} alt='utem' />
            </div>
            
            <div className='study-summary'>
              <h3>Universidad Tecnológica Metropolitana</h3>
              <h4>Ingeniería Civil en Computación mención Informática</h4>
              <time>2019-2024</time>
            </div>

   
            
          </article>
          <article className='study'>
            <div className='studyIMG'>
              <img src={ininsignia} alt="insignia" />
            </div>
            <div className='study-summary'>
              <h3>Instituto Nacional</h3>
              <time>2012-2017</time>
            </div>
 
          </article>
          
        
      </section>
      
    </section>
  );
}

export default Home;