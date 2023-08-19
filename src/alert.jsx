
// import  Alert  from "react-bootstrap/Alert";
// import Button from 'react-bootstrap/Button'
// import { useState } from "react";

// export const MyAlert = ()=>{
//     const [show, setShow] = useState(false);

//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }


import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function MyAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default MyAlert;
