import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import { Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function Products() {
  const [formValue, setformValue] = useState({
    control_number:'',
    name:'',
    price:'',
    stock:'',
    photo:'',
    provider_Id:'',
    departament_Id:''
  })

  const onChange = (e) => {
    e.persist();
    setformValue({...formValue, [e.target.name]: e.target.value});
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
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/save_product",
    formData,
    {headers: {'Content-Type': 'multipart/form-data',
     'Accept':'application/json'}}
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
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formControl_number">
            <Form.Label>Control number</Form.Label>
            <Form.Control type="number" placeholder="Enter product´s control number" 
            name="control_number" value={formValue.control_number} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the number control of the product
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" 
            name="name" value={formValue.name} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the name of the product
            </Form.Text>
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" 
            name="price" value={formValue.price} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the price of the product
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" placeholder="Enter stock" 
            name="stock" value={formValue.stock} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the stock of the product
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoto">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" placeholder="Enter photo" 
            name="photo" value={formValue.photo} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the photo of the product
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProvider_Id">
            <Form.Label>Provider_id</Form.Label>
            <Form.Control type="number" placeholder="Enter provider_Id" 
            name="provider_Id" value={formValue.provider_Id} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the provider_Id of the product
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDepartament_Id">
            <Form.Label>Departament_Id</Form.Label>
            <Form.Control type="number" placeholder="Enter departament_Id" 
            name="departament_Id" value={formValue.departament_Id} onChange={onChange}/>
            <Form.Text className="text-muted">
            Enter the departament_Id of the product
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar
          </Button>

        </Form>
      </Container>
      
    );
}


//DELETE
function Eliminar(){
  const [formValue, setformValue] = useState({
    id:'',
  })


  const onChange = (e) => {
    e.persist();
    setformValue({...formValue, [e.target.name]: e.target.value});
   }
   
  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("id", formValue.id);
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/product_destroy",
    formData,
    {headers: {'Content-Type': 'multipart/form-data',
     'Accept':'application/json'}}
    ).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};
  
    return (
        <Container>
          <title>
            Borrar productos
          </title>
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formId">
            <Form.Label>Número de control</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el número de control del producto" 
            name="id" value={formValue.id} onChange={onChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Eliminar
          </Button>

        </Form>
      </Container>
      
    );

}
  
//function Example(){}

export default Products;
/*if (document.getElementById('main')) {//document es un objeto de los navegadores
  ReactDOM.render(<Eliminar/>, document.getElementById('main'));//indicamos que funcion usaremos
}*/