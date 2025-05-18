import React from 'react';
import './home.css';
//assets
import ianImage from '../../assets/img/ian-img6.JPG';
import consultaGCImage from '../../assets/img/ConsultaGC.png';
import consultaGCImage2 from '../../assets/img/descarga.PNG';
import GitHubIcon from '../../shared/icons/GitHubIcon';
import LinkedInIcon from '../../shared/icons/LinkedIn';
import AngularIcon from '../../shared/icons/AngularIcon';
import JavaIcon from '../../shared/icons/JavaIcon';
import NestIcon from '../../shared/icons/NestIcon';
function Home() {

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
          </div>
        </div>
        <div className='ian-img'>
          <img src={ianImage} alt='Ian Battistoni' />
        </div>
      </section>

      <section className='projects'>

        <h2>Projects</h2>

          <article className='project'>
            <div className='project-image'>
              <a href='https://consulta.giftcard.cl' target='_blank' title='ir a la página'>
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
              </div>
            </div>
          </article>

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

      </section>
      <section className='experiences'>
        <h2>
          Experiencia
        </h2>
        <div className='experience-container'>
          <div className='experience'>
            <h3>Cencosud</h3>
            <span>2024-2025</span>
            <p>Rol:</p>
            <p>Ingeniero de software</p>
          </div>
          <div className='experience'>
            <h3>Exdev</h3>
            <span>2018-2024</span>
          </div>
          
        </div>
      </section>

      
    </section>
  );
}

export default Home;