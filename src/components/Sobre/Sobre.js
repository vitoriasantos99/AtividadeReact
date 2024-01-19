import './sobre.css';
import logo from '../../images/logo.png'

function Sobre(){
    return(        
        <div className='sobre'>
        <div className='mim'>
        <img src={logo} alt='logo'/>
        <h1>Sobre Mim</h1>
        </div>
        <p>
        Como um bruxo do mundo mágico, mergulhei nas profundezas encantadas da   
        programação e do desenvolvimento web. Meu nome é Harry Potter, e assim como domino
        feitiços em Hogwarts, também domino as linguagens de programação. Com uma varinha e
        um teclado, conjuro códigos mágicos que transformam linhas de texto em experiências
        mágicas online. Da Sala Precisa aos servidores na nuvem, minha jornada como
        Desenvolvedor Full Stack é tão épica quanto derrotar Lord Voldemort. Desafios são como
        Horcruxes, e estou determinado a resolvê-los com a mesma coragem que usei para enfrentar as trevas
        Lumos no código e avante, para construir um mundo digital repleto de possibilidades!</p>
        </div>
    )
}

export default Sobre;


