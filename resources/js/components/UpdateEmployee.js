import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function UpdateProduct() {
  const [formValue, setformValue] = useState({
    control_number: '',
    status: ''
  })

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("control_number", formValue.control_number);
    formData.append("status", formValue.status);
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/employees_update",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      console.log('response: axios save_product');
      console.log(formValue.control_number);
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <Container>
      <br></br>
      <div class="col text-center">
        <h1><b>Actualización de estatus del empleado</b></h1>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formControl_number">
          <Form.Label><h4>Número de control</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número de control del producto"
            name="control_number" value={formValue.control_number} onChange={onChange} />
          <Form.Text className="text-muted">
            **Obligatorio: Ingrese el número de control del empleado a actualizar
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Label><h4>Estatus</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre del producto"
            name="status" value={formValue.status} onChange={onChange} />
          <Form.Text className="text-muted">
            **Ingrese "I" para Inactivarlo o "A" para activarlo, SOLO MAYÚSCULAS
          </Form.Text>
        </Form.Group>


        <div class="col text-center">
          <Button variant="outline-success" type="submit" size="lg">
            Actualizar
          </Button>
        </div>
        <br></br>
      </Form>
    </Container>

  );
}

export default UpdateProduct;