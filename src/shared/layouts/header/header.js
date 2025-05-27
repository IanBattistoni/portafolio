import './header.css';

function Header() {
  return (
    <header className="header">
      <div className='container-header'>
        <a href='#projects'  title='Ir a proyectos'>Proyectos</a>
        <a href='#experiences' title='Ir al inicio'>Experiencia</a>
        <a href='#stack' title='Sobre nosotros'>Sobre mí</a>
      </div>
    </header>
  );
}

export default Header;