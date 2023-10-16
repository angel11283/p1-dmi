import { useState } from 'react';
import './App.css';

const Menu = () => {
    const [ menu, setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className='App'>
        <header className='Menu'>
            <h1 className='Menu-h1'>
                <a href="#" className="Menu-a">
                    Menú
                </a>
            </h1>
            <button onClick={ toggleMenu } className='Menu-button'>
                <svg className='Menu-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <nav className={ `Menu-nav ${ menu ? 'isActive' : '' }` }>
                <ul className="Menu-ul">
                    <li className="Menu-li"><a href="/" className="Menu-a">Perfil</a></li>
                    <li className="Menu-li"><a href="#" className="Menu-a">Configuración</a></li>
                    <li className="Menu-li"><a href="#" className="Menu-a">Servicios</a></li>
                </ul>
            </nav>
        </header>
        </div>
    )
}
export default Menu;