import React from 'react';
import { Container, Card, } from 'react-bootstrap';

const ItemProduct = (props) => (
    <Container>
        <br></br>
        <Card border="success" style={{ width: '21rem' }}>
            <div class="col text-center" >
                <Card.Img variant="top" src={props.photo} style={{ width: "60%" }} />
                <Card.Body>
                    <Card.Title>{props.control_number} {props.name}</Card.Title>
                    <Card.Text> Precio= {props.price}</Card.Text>
                    <Card.Text> Stock= {props.stock}</Card.Text>
                </Card.Body>
            </div>
        </Card>
        <br></br>
    </Container>

)

export default ItemProduct;