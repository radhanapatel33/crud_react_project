import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate ,Link} from "react-router"

import '../App.css'
import { insertData } from '../CrudRedux/Slices/CrudSlice';

function CreatePage() {

    const [insertUserData, setInsertUserData] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getDetails = (event) => {
        setInsertUserData({ ...insertUserData, [event.target.name]: event.target.value })
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        dispatch(insertData(insertUserData));
        alert("Your Data Inserted Successfully...");
        navigate('/')
    }
    return (

        <Container className="mt-4">
            <h2 className='mt-3 mb-4 ms-5 text-warning-emphasis text-center'><i> Student Registration Form </i></h2>

            <Form className='shadow-lg p-3 mb-5 px-4 bg-info text-white rounded-3' onSubmit={handelSubmit}>
                <Row className="mb-3 ">
                    <Form.Group as={Col} controlId="formID">
                        <Form.Label>Student_Id</Form.Label>
                        <Form.Control type="number" name='id' placeholder="Enter id" required onChange={getDetails} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Student_Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required onChange={getDetails} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Student_Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required onChange={getDetails} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Student_Age</Form.Label>
                        <Form.Control type="number" name='age' placeholder="Enter age" min="1" onChange={getDetails} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>Student_City</Form.Label>
                        <Form.Select defaultValue="" name='city' onChange={getDetails}>
                            <option value="">Select city</option>
                            <option>Rewa</option>
                            <option>Indore</option>
                            <option>Ujjain</option>
                            <option>Bihar</option>
                            <option>Delhi</option>
                            <option>Sidhi</option>
                            <option>Satna</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='tel' name='phone' placeholder="Enter number" onChange={getDetails} />
                    </Form.Group>
                </Row>

                <Button variant="success" type="submit" className='my-3 me-4'>
                    Submit
                </Button>
                <Link to='/'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </Form>
        </Container>
    )
}

export default CreatePage;

