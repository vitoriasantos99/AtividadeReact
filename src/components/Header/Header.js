import logo from '../../images/logo.png'
import './header.css';

function Header(){
    return(
        <header className='header'>
            <img src={logo} alt="logo"/>
            <h1>Oi, me chamo Vitória!</h1>
            <p>Sou desenvolver Full Stack</p>
        </header>
    )
}

export default Header;