import './main.css';
import logo from '../../images/logo.png'

function Main(){
    return(
        <div className='texto'>
            <div>
            <h1>Oi, me chamo <span>Vitória!</span></h1>
            <p>Sou desenvolver Full Stack</p>
            </div>
            <img src={logo} alt="logo"/>
        </div>
        
    )
}

export default Main;