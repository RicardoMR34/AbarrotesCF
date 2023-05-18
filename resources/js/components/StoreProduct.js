import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Container } from 'react-bootstrap';


function StoreProduct() {
  const [formValue, setformValue] = useState({
    control_number: '',
    name: '',
    price: '',
    stock: '',
    photo: '',
    provider_Id: '',
    departament_Id: ''
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
    formData.append("price", formValue.price);
    formData.append("stock", formValue.stock);
    formData.append("photo", formValue.photo);
    formData.append("provider_Id", formValue.provider_Id);
    formData.append("departament_Id", formValue.departament_Id);
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/save_product", formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      console.log('response: axios save_product');
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
        <h1><b>Altas de productos</b></h1>
      </div>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formControl_number">
          <Form.Label><h4>Número de control</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número de control del producto"
            name="control_number" value={formValue.control_number} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label><h4>Nombre</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre del producto"
            name="name" value={formValue.name} onChange={onChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label><h4>Precio</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el precio del producto"
            name="price" value={formValue.price} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStock">
          <Form.Label><h4>Stock</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el stock del producto"
            name="stock" value={formValue.stock} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoto">
          <Form.Label><h4>Foto</h4></Form.Label>
          <Form.Control type="text" placeholder="Ingrese la foto del producto"
            name="photo" value={formValue.photo} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProvider_Id">
          <Form.Label><h4>Proveedor</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número del proveedor"
            name="provider_Id" value={formValue.provider_Id} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDepartament_Id">
          <Form.Label><h4>Departamento</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número de departamento"
            name="departament_Id" value={formValue.departament_Id} onChange={onChange} />
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

export default StoreProduct;