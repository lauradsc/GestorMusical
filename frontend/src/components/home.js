//Página de apresentação
import MusicGirl from '../assets/musicgirl.svg';
import '../App.css';


const Home = () => {
    return (
      <div className="container justify-content-center align-items-center">
      <div className="row">
        <div className="col-xs-6 col-md-4 text-center">
          <h1 className="main-text">Bem-vindo ao<br></br> Gerenciador Musical!</h1>
          <p className="sub-main-text">Navegue nas opções ao lado para conhecer mais :)</p>
        </div>
        <div className="col-xs-12 col-md-8 text-center">
          <img src={MusicGirl} className="main-img img-fluid" alt="Imagem Musical" />
        </div>
      </div>
    </div>
    );
  };
  
  export default Home;