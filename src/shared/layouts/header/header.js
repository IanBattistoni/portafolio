import './header.css';

function Header() {
  return (
    <header className="header">
      <div className='container-header'>
        <a href='/' title='Ir al inicio'>Inicio</a>
        <a href='/about' title='Sobre nosotros'>Nostros</a>
        <a href='https://ko-fi.com' target="_blank" rel="noopener noreferrer" title='Regalanos un café'>koffy</a>
      </div>
    </header>
  );
}

export default Header;