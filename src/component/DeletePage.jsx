import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from "react-router"
import '../App.css'
import { deleteUserData } from '../CrudRedux/Slices/CrudSlice';

function DeletePage() {
    const { id } = useParams();
    console.log(id);

    const [deleteData, setDeleteData] = useState([]);
    console.log(deleteData);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    let data = useSelector((state) => state.allCrud.data);
    console.log(data);


    useEffect(() => {
        if (id) {
            let userData = data.filter((value) => value.id == id);
            setDeleteData(userData[0])
        }
    }, [id]);

    const handelSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteUserData(deleteData));
        alert('Your Data Deleted Successfully...');
        navigate('/')
    }


    return (
        <Container className="mt-4">
               <center><h2 className='m-3 ms-5 text-warning-emphasis'><i> Student Delete Form </i></h2></center>
            <Form className='shadow-lg p-3 mb-5 bg-info text-white rounded-3' onSubmit={handelSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formID">
                        <Form.Label>Student_Id</Form.Label>
                        <Form.Control type="number" name='id' placeholder="Enter id" value={deleteData?.id ||''}
                            required disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Student_Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" value={deleteData?.name ||''}
                            required disabled />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Student_Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" value={deleteData?.email ||''}
                            required disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Student_Age</Form.Label>
                        <Form.Control type="number" name='age' placeholder="Enter age" min="2"
                            value={deleteData?.age ||''} disabled />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>Student_City</Form.Label>
                        <Form.Select name='city' value={deleteData?.city ||''} disabled>
                            <option value="value={deleteData.state}" disabled>Select state</option>
                            <option>Rewa</option>
                            <option>Indore</option>
                            <option>Ujjain</option>
                            <option>Bihar</option>
                            <option>Delhi</option>
                        </Form.Select>
                    </Form.Group>

                     <Form.Group as={Col} controlId="formPhoneNumber">
                        <Form.Label>Student_Phone Number</Form.Label>
                        <Form.Control type='tel' name='phone' placeholder="Enter number"
                            value={deleteData?.phone ||''} disabled />
                    </Form.Group>
                </Row>

                <Button variant="danger" type="submit" className='me-4'>
                    Delete
                </Button>
                <Link to='/'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </Form>
        </Container>
    )
}

export default DeletePage;

