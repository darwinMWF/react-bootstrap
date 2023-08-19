import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' text="First slide" alt='image' className='w-100 d-block'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' text="second slide" alt='image' className='w-100 d-block'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://media.istockphoto.com/id/1173544006/photo/winding-road.jpg?s=612x612&w=0&k=20&c=_VMEnB08arEsLnbES0knQUWHPrCD8TQFCy99JC4RZIQ=' text="third slide" alt='image' className='w-100 d-block'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

  );
}

export default ControlledCarousel;