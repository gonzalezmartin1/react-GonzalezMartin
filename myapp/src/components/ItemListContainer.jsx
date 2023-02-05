import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './ItemList';
import '../App.css';



function ItemListContainer (props) {
return(
<Container fluid>
    <Row><h1>{props.greeting}</h1></Row>
    <Row>
        <Col><ItemList /></Col>
        <Col><ItemList /></Col>
        <Col><ItemList /></Col>    
    </Row>
</Container>

    )
}

export default ItemListContainer;