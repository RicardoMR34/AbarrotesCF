import { React, useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import axios from 'axios';
import ItemProduct from './ItemProduct';

const IndexProduct = () => {
  const [listProduct, setListProduct] = useState([])

  useEffect(() => { getProduct() }, [])

  const getProduct = async () => {
    const res = await axios.get('http://127.0.0.1/AbarrotesCF/public/api/product_index')
    setListProduct(res.data)
    console.log(res)
  }

  return (
    <Container>
      <br></br>
      <div class="col text-center">
        <h1><b>Lista de productos</b></h1>
      </div>
      <br></br>

      <div>
        <CardGroup>
          {listProduct.map(item => (<div key={item.id}><ItemProduct control_number={item.control_number} name={item.name} price={item.price} stock={item.stock} photo={item.photo} /></div>))}
        </CardGroup>
      </div>
    </Container>
  );
}


export default IndexProduct;
