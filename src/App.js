import './App.css';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import Habilidades from './components/Habilidades/Habilidades';
import Main from './components/Main/Main';
import Projetos from './components/Projetos/Projetos';
import Sobre from './components/Sobre/Sobre';



function App(){
  return(
    <div className="App">
      {/* <Main/> */}
      {/* <Footer/> */}
      {/* <Sobre/> */}
      {/* <Projetos/> */}
      {/* <Habilidades/> */}
      <Contato/>
    </div>
  );
}

export default App;
