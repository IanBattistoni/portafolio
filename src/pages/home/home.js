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
import YoutubeIcon from '../../shared/icons/YoutubeIcon';
import DownloadIcon from '../../shared/icons/DownloadIcon';
import PostgresSQLIcon from '../../shared/icons/PostgresSQLIcon';
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
              <a href='https://www.youtube.com/@IANBATTISTONI' target='_blank' rel='noopener noreferrer'>
                <YoutubeIcon className='social-icon' />
              </a>
              <a href='https://github.com/IanBattistoni' title='Github' target='_blank' rel='noopener noreferrer'>
                <DownloadIcon className='social-icon' />
              </a>
          </div>
        </div>
        <div className='ian-img'>
          <img src={ianImage} alt='Ian Battistoni' />
        </div>
      </section>

      <section className='projects'>

        <h2>Proyectos</h2>

          <article className='project'>
            <div className='project-image'>
              <a href='https://consulta.giftcard.cl' target='_blank' title='ir al sitio'>
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
      
      <section className='experiences'>
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

      
    </section>
  );
}

export default Home;