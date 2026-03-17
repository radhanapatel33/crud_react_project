import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../App.css'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
function ReadPage() {

    const [readData, setReadData] = useState([]);

    const { id } = useParams();

    const data = useSelector((state) => state.allCrud.data);

    useEffect(() => {
        if (id) {
            let userData = data.filter((value) => value.id == id);
            setReadData(userData);
        }
    }, [id])

    return (
        <>
            <div>
                {
                    readData.map((item, index) => {
                        return (
                            <Container key={index} 
                            className='read-container mt-4 center'>
                                <center><h2 className=" fst-italic text-danger-emphasis ">
                                            Student Details...
                                        </h2></center>
                                <div>
                                    <Card className='cards m-auto mt-3 bg-info text-white rounded-3'style={{width:"40%"}}>
                                        <Card.Body className='m-auto'>
                                            <Card.Title>{`Student Id: ${item.id}`}</Card.Title>
                                            <Card.Title>{`Student Name: ${item.name}`}</Card.Title>
                                            <Card.Title>{`Student Email: ${item.email}`}</Card.Title>
                                            <Card.Title>{`Student Age: ${item.age}`}</Card.Title>
                                            <Card.Title>{`Student Phone: ${item.phone}`}</Card.Title>
                                            <Card.Title>{`Student City: ${item.city}`}</Card.Title>

                                            <Link to="/">
                                                <Button className="custom-btn mt-3 me-3 rounded-pill">
                                                    Go Back Home
                                                </Button>
                                            </Link>

                                            <Link to={`/update/${item.id}`}>
                                                <Button className="edit-btn btn-warning mt-3 rounded-pill px-4 ">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Container>
                        )
                    })
                }
            </div>
        </>
    );
}

export default ReadPage;

