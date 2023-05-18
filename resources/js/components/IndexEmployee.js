import { React, useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import axios from 'axios';
import ItemEmployee from './ItemEmployee';


const IndexEmployee = () => {
    const [listEmployee, setListEmployee] = useState([])

    useEffect(() => { getEmployee() }, [])

    const getEmployee = async () => {
        const res = await axios.get('http://127.0.0.1/AbarrotesCF/public/api/employees_index')
        setListEmployee(res.data)
        console.log(res)}

    return (
        <Container>
            <br></br>
            <div class="col text-center">
                <h1><b>Lista de empleados</b></h1>
            </div>
            <br></br>
            <div>
                <CardGroup>
                    {listEmployee.map(item => (<div key={item.id}><ItemEmployee control_number={item.control_number} name={item.name} last_name={item.last_name} address={item.address} phone_number={item.phone_number} status={item.status} /></div>))}
                </CardGroup>
            </div>
        </Container>
    );
}

export default IndexEmployee;
