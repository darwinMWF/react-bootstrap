import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="171x180"
        src="https://media.istockphoto.com/id/1173544006/photo/winding-road.jpg?s=612x612&w=0&k=20&c=_VMEnB08arEsLnbES0knQUWHPrCD8TQFCy99JC4RZIQ="
      />
      <Figure.Caption>
        <h1>natural view</h1>
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;