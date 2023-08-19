// import Button from 'react-bootstrap/Button'

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicExample from "./accordion";
import { Myform } from "./form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import ControlledCarousel from "./carousel";
import FigureExample from './figure'
import  MyNavigation  from "./navbar";

import Image from "react-bootstrap/esm/Image";
// import Alert from 'react-bootstrap/Alert';

// import { MyAlert } from "./alert";

function App() {
  return (
    <>
    <MyNavigation />
  <ControlledCarousel/>
      {/* <h1>hello react boostrap</h1>
      <Button type='submit'>
        button 
      </Button> */}
      {/* <Container className='border border-danger bg-primary-subtle' fluid="lg" >
        <Col className='justify-content-center'>
          <Col className='border border-success '  xs="6" md={{order:"last",span:'6',offset:"4"}} >1</Col>
          <Col className='border border-success ' md="2">2</Col>
          <Col  className='border border-success' md={{order:"first",span:"4"}} >3</Col>
        </Row>
      </Container> */}

      {/* <Stack gap={2} className='border mt-5' direction='horizontal' style={{height:"50vh"}}>
      <div className="p-2 bg-danger-subtle w-25 h-100 overflow-auto " >
        <div className="card">
          <img src="https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE" alt=""  />
          <h1>this is my card</h1>
          <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis porro praesentium aliquam neque ducimus in inventore? Dolorem mollitia laboriosam eum labore explicabo, ducimus necessitatibus incidunt eius quaerat corporis veniam aliquam?</p>
        </div>
      </div>
      <div className="p-2 bg-danger ms-auto">Second item</div>
      <div className="p-2 bg-success">Third item</div>
      </Stack>
      
     
        <input type="text" />
        <input type="text" />
        <input type="text" /> */}
      <Myform />
      <BasicExample />
      {/* <Alert variant="danger" className='mt-5'>
          This is a primary alert—check it out!
        </Alert> */}
      {/* <MyAlert /> */}

        <Container>
      <Row xs={1} md={2} className="g-4">
      {["https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"].map((x, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={x} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>

    <FigureExample />

   
      <Row className="g-md-5" xs={1} md={3}>
        <Col >
        </Col>
        {/* <Col >
          <Image src="https://media.istockphoto.com/id/1173544006/photo/winding-road.jpg?s=612x612&w=0&k=20&c=_VMEnB08arEsLnbES0knQUWHPrCD8TQFCy99JC4RZIQ=" roundedCircle />
          </Col>
          <Col >
          <Image src="https://media.istockphoto.com/id/1173544006/photo/winding-road.jpg?s=612x612&w=0&k=20&c=_VMEnB08arEsLnbES0knQUWHPrCD8TQFCy99JC4RZIQ=" thumbnail />
        </Col> */}
      </Row>

      <Container >
        <Image src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" fluid />
        </Container>
    
     
    

     
  </> 
  );
}

export default App;
