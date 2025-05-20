import './header.css';

function Header() {
  return (
    <header className="header">
      <div className='container-header'>
        <a href='/' title='Ir al inicio'>Inicio</a>
        <a href='/about' title='Sobre nosotros'>Sobre mí</a>
      </div>
    </header>
  );
}

export default Header;