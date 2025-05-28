import { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const [
    scrolled, setScrolled
  ] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      setScrolled(window.scrollY >20);
    };

    window.addEventListener('scroll',handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="header">
      <nav className={`container-header ${scrolled ? 'scrolled' : ''}`}>
        <a href='#projects'  title='Ir a proyectos'>Proyectos</a>
        <a href='#experiences' title='Ir al inicio'>Experiencia</a>
        <a href='#stack' title='Sobre nosotros'>Sobre mí</a>
      </nav>
    </header>
  );
}

export default Header;