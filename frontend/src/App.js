//importando todos os meus componentes necessários para desenvolvimento no meu arquivo de compilação principal
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; //biblioteca de rotas para permitir navegação entre diferentes páginas
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import Artistas from './components/artistas_lista.js';
import GerenciarArtistas from './components/gerenciar.js';

function App() {
  return (
      <div> 
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/artistas" element={<Artistas/>} />
        <Route exact path="/gerenciar" element={<GerenciarArtistas/>} />

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
