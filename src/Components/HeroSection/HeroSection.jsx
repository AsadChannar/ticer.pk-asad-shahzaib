import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Images/slideshow/full-slide-1.jpg';
import slider2 from '../Images/slideshow/full-slide-2.jpg';
import slider3 from '../Images/slideshow/full-slide-5.jpg';
import slider4 from '../Images/slideshow/slide-1.jpg';
import slider5 from '../Images/slideshow/slide-2.jpg';
import slider6 from '../Images/slideshow/slide-3.jpg';
function HeroSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-300 w-100"
          src={slider4}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider6}
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;