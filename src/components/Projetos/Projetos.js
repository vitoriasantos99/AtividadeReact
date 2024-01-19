import './projetos.css';
import logo from '../../images/logo.png'

function Projetos(){
    return(
      <div className='tudo'>
        <div className='topo'>
        <img src={logo} alt='logo'/>
        <h1>Meus Projetos</h1>
        </div>
        
        <div className='projeto'> 
        <div className='quantum'>
        <h2>QuantumQuiddtch</h2>
        <p>Juntei-me a liga de Quadribol
        Quântico para transforma o esporte
        mais emocionante do mundo bruxo
        em uma experiência virtual inovadora.
        O QuantumQuiddtch é um projeto 
        que combina a adrenalina do
        Quadribol com elementos de
        realidade virtual e aumentada.
        Prepare-se para montar sua vassoura
        digital, lançar feitiços em 3D e
        competir em partidas emocionantes,
        tudo do conforto do seu computador.
        Vamos levar o Quadribol a novos 
        patamares!
        </p>
        </div>
        
        <div className='potion'>
        <h2>PotionCraft</h2>
        <p>O PotionCraft é um assistente digital
        que torna a arte de criar poções 
        mágicas mais acessível a todos os
        bruxos e bruxas. Com uma extensa
        biblioteca de receitas, guias 
        interativos e sugestões
        personalizadas com base nas  
        preferencias do usuário, este projeto
        visa simplificar a prática de preparar
        poções. Deixe-me guiar você através
        do fascinante mundo das misturas
        mágicas, onde cada linha de código é 
        um ingrediente para o sucesso alquímico!
        </p>
        </div>
        
        <div className='code'>
        <h2>CodeHogwarts</h2>
        <p>Na CodeHogwarts, estou trabalhando
        para levar a magia da programação
        para todos os bruxos e bruxas. Este
        projeto é uma escola de magia virtual
        onde os estudantes podem aprender e
        aprimorar suas habilidades em 
        desenvolvimento web, feitiços de 
        codificação e encantamento de  
        programação. Com cursos interativos
        e desafios mágicos, estamos 
        formando a próxima geração de 
        desenvolvedores bruxos
        </p>
        </div>
        </div>
      </div>
    )
}

export default Projetos;