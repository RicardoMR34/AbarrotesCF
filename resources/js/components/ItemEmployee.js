import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ItemEmployee = (props) => (
    <Container>
        <br></br>
        <Card border="success" style={{ width: '15rem' }}>
            <Card.Header>{props.control_number}</Card.Header>
            <div class="col text-center" >
                <Card.Body>
                    <Card.Title>{props.name} {props.last_name}</Card.Title>
                    <Card.Text> Dirección de casa= {props.address}</Card.Text>
                    <Card.Text> Número de teléfono= {props.phone_number}</Card.Text>
                    <Card.Text> Estatus actual= {props.status}</Card.Text>
                </Card.Body>
            </div>
        </Card>
        <br></br>
    </Container>
)

export default ItemEmployee;

