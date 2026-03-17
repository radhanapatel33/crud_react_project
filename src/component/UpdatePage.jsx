import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from "react-router"
import '../App.css'
import { updateUserData } from '../CrudRedux/Slices/CrudSlice';

function UpdatePage() {
    const { id } = useParams();
    console.log(id);


    const [updateData, setUpdateData] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let data = useSelector((state) => state.allCrud.data);

    useEffect(() => {
        if (id && data.length > 0) {
            let userData = data.filter((value) => value.id == id);
            setUpdateData(userData[0])
        }
    }, [id, data])

    const getDetails = (event) => {
        setUpdateData({ ...updateData, [event.target.name]: event.target.value })
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUserData(updateData));
        alert('Your Data Updated Successfully...')
        navigate('/')
    }
    return (

        <Container className="mt-4">
            <center><h2 className='m-3 ms-5 text-warning-emphasis'><i> Student Update Form </i></h2></center>

            <Form className='shadow-lg p-3 mb-5 bg-info text-white rounded-3' onSubmit={handelSubmit}>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formID">
                        <Form.Label>Student_Id</Form.Label>
                        <Form.Control type="number" name='id' placeholder="Enter id" value={updateData?.id || ''}
                            readOnly required onChange={getDetails} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Student_Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" value={updateData?.name || ''} required onChange={getDetails} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Student_Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" value={updateData?.email || ''} required onChange={getDetails} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Student_Age</Form.Label>
                        <Form.Control type="number" name='age' placeholder="Enter age" min="2" value={updateData?.age || ''} onChange={getDetails} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>Student_City</Form.Label>
                        <Form.Select name='city' value={updateData?.city || ''} onChange={getDetails}>
                            <option value="value={updateData.state}" disabled>Select state</option>
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
                        <Form.Label>Student_Phone Number</Form.Label>
                        <Form.Control type='tel' name='phone' placeholder="Enter number" value={updateData?.phone || ''} onChange={getDetails} />
                    </Form.Group>
                </Row>

                <Button variant="warning" type="submit" className='me-4'>
                    Update
                </Button>
                <Link to='/'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </Form>
        </Container>
    )
}

export default UpdatePage;

