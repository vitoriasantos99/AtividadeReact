import './habilidades.css';
import logo from '../../images/logo.png'
import react from '../../images/react.png'
import javascript from '../../images/javascript.png'
import css from '../../images/css.png'
import html from '../../images/html.png'
import banco from '../../images/banco.png'
import node from '../../images/node.png'

function Habilidades(){
    return(
        <div>
        <div className='topo'>
        <img src={logo} alt='logo'/>
        <h1>Habilidades</h1>
        </div>
        <div className='logos'>
        <div className='react'>
            <p>ReactJS</p>
            <img src={react} alt='React JS'/>
        </div>
        <div className='javascript'>
            <p>JavaScript</p>
            <img src={javascript} alt='JavaScript'/>
        </div>
        <div className='css'> 
            <p>CSS 3</p>
            <img src={css} alt='CSS 3'/>
        </div>
        <div className='html'>
            <p>HTML 5</p>
            <img src={html} alt='HTML 5'/>
        </div>
        <div className='banco'>
            <p>DB Relacional</p>
            <img src={banco} alt='Banco de Dados'/>
        </div>
        <div className='node'>
            <p>NodeJS</p>
            <img src={node} alt='Node JS'/>
        </div>
        </div>
        </div>
    )
}

export default Habilidades;
