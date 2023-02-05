import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\img\pala-bullpadel.jpg" />
      <Card.Body>
        <Card.Title>PALA BULLPADEL HACK AIR DALE CANDELA</Card.Title>
        <Card.Text>
        La pala Hack AIR DALE CANDELA de Bullpadel es una pala exclusiva, homenaje a nuestro jugador más carismático Paquito Navarro.

        Es una pala con forma de diamante, de máxima potencia y alto rendimiento sin pérdidas de control. Está pala está concebida para jugadores profesionales o avanzados.

        Núcleo externo compuesto del nuevo carbono combinado Xtend Carbon 18K.

        Núcleo interno de la nueva goma MultiEva.

        Marco CarbonTube de fibra de carbono 100%.
        </Card.Text>
        <Button variant="warning">USD 399,99</Button>
        <Button variant="warning">AÑADIR AL CARRITO</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemList;