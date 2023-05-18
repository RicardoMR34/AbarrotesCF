import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Form , Modal} from 'react-bootstrap';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function UpdateProduct() {
  //modal name
  const  [productName, setProductName] = useState({
    name: ''
  });
  //modal price
  const  [productPrice, setProductPrice] = useState({
    price: ''
  });
  //modal photo
  const [productPhoto, setProductPhoto] = useState({
    photo: ''
  });

  const [formValueControl, setformValueControl] = useState({
    control_number: ''
  });

  const onChange = (e) => {
    e.persist();
    setformValueControl({ ...formValueControl, [e.target.name]: e.target.value });
  };
  
  const handleIndex = (e) => {
    if (e && e.preventDefault())
      e.preventDefault();

    const formData = new FormData();
    formData.append("control_number", formValueControl.control_number);

    const config={
      headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
    };
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/product_find",formData,config)
    .then(response => {
      console.log('response: axios post find product');
      console.log(formValueControl.control_number);
      setProductName(`${response.data[0].name}`);
      setProductPrice(`${response.data[0].price}`);
      setProductPhoto(`${response.data[0].photo}`);
      console.log(response.data[0].name);
      console.log(response.data[0].photo);
      console.log(response.data[0].price);
      console.log("-----------------------------");
      console.log("Estado nombre: "+productName);
      console.log("Estado photo: "+productPhoto);
      console.log("Estado price: "+productPrice);
    }).catch(error => {
      console.log(error);
    });
  };

  const [modalProduct, setmodalProduct] = useState({
    name: '',
    price: '',
    photo: ''
  });

  const onChangeModal = (e) => {
    e.persist();
    setmodalProduct({ ...modalProduct, [e.target.name]: e.target.value });
  };

  const modalConfirm = (e) => {
    handleClose();
    if (e && e.preventDefault())
      e.preventDefault();
    const modalData = new FormData();
    modalData.append("control_number", formValueControl.control_number);
    modalData.append("name", modalProduct.name);
    modalData.append("price", modalProduct.price);
    modalData.append("photo", modalProduct.photo);
    const config={
      headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
    };
    axios.post("http://127.0.0.1/AbarrotesCF/public/api/product_updateProduct",modalData,config)
    .then(response => {
      console.log('response: axios post updateProduct');
      console.log(formValueControl.control_number);
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
     handleIndex(); 
     modalConfirm();
    }, []);

  const [show, setShow] = useState(false);
  const handleClose = () =>setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <br></br>

      <div class="col text-center">
        <h1><b>Actualizaciones de productos</b></h1>
      </div>
      <Form onSubmit={handleIndex}>
        <Form.Group className="mb-3" controlId="formValueControl">
          <Form.Label><h4>Número de control</h4></Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número de control del producto"
            name="control_number" value={formValueControl.control_number} onChange={onChange} />
          <Form.Text className="text-muted">
            **Obligatorio: Ingrese el número de control del producto a actualizar
          </Form.Text>
        </Form.Group>
        
        <div class="col text-center">
          <Button variant="outline-success" type="submit" size="lg" onClick={handleShow}>
            Mostrar
          </Button>
        </div>
        <br></br>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresa nuevos datos del producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="modalName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre"
                autoFocus
                name="name"
                value={modalProduct.name}
                onChange={onChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="modalPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="precio"
                autoFocus
                name="price"
                value={modalProduct.price}
                onChange={onChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="modalPhoto">
              <Form.Label>Fotografia</Form.Label>
              <Form.Control
                type="text"
                placeholder="https:..."
                autoFocus
                name="photo"
                value={modalProduct.photo}
                onChange={onChangeModal}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Cerrar
          </Button>
          <Button variant="outline-success" onClick={modalConfirm}>
            Confirmar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


export default UpdateProduct;