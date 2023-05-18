import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function StoreEmployee() {
  const [formValue, setformValue] = useState({
    control_number: '',
    name: '',
    last_name: '',
    password: '',
    address: '',
    phone_number: '',
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
    formData.append("name", formValue.name);
    formData.append("last_name", formValue.last_name);
    formData.append("password", formValue.password);
    formData.append("address", formValue.address);
    formData.append("phone_number", formValue.phone_number.toString());
    formData.append("status", formValue.status);
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/employees_store",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      console.log('response: axios employees_store');
      console.log(formValue.name);
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <Container>
      <br></br>
      <div class="col text-center">
        <h1><b>Altas de empleados</b></h1>
      </div>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formControl_number">
          <Form.Label><h4>Número de control</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número de control del empleado"
            name="control_number" value={formValue.control_number} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label><h4>Nombre</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre del empleado"
            name="name" value={formValue.name} onChange={onChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formLast_name">
          <Form.Label><h4>Apellidos</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese los apellidos del empleado"
            name="last_name" value={formValue.last_name} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label><h4>Contraseña</h4></Form.Label>
          <Form.Control type="password" placeholder="Ingrese la contraseña del empleado"
            name="password" value={formValue.password} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label><h4>Dirección</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese la dirección del empleado"
            name="address" value={formValue.address} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone_number">
          <Form.Label><h4>Número de teléfono</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese el número de teléfono del empleado"
            name="phone_number" value={formValue.phone_number} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Label><h4>Estatus</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese el estatus del empleado"
            name="status" value={formValue.status} onChange={onChange} />
        </Form.Group>

        <div class="col text-center">
          <Button variant="outline-success" type="submit" size="lg">
            Guardar
          </Button>
        </div>
        <br></br>
      </Form>
    </Container>
  );
}

export default StoreEmployee;
