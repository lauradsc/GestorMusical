import Carousel from 'react-bootstrap/Carousel';
import slide01 from '../assets/slide01.jpg';
import slide02 from '../assets/slide02.jpg';
import slide03 from '../assets/slide03.jpg';

const Home = () => {
    return (
    <div className="row">
    <div className="container h1 text-center mt-5 m-5"> Bem-vindo ao seu melhor gerenciador musical! </div>
       <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide02}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide03}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div> 
    );
  };
  
  export default Home;