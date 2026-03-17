import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom'
import { searchByData } from '../CrudRedux/Slices/CrudSlice';

function HomeNav() {
    const [searchData, setSearchData] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchByData(searchData));
    }, [searchData]);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand> CRUD </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/' style={{ textDecoration: "none" }}>
                                <Navbar.Brand>Home</Navbar.Brand>
                            </NavLink>
                            <NavLink to='/create' style={{ textDecoration: "none" }}>
                                <Navbar.Brand> Create </Navbar.Brand>
                            </NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(event) => setSearchData(event.target.value)}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}


export default HomeNav;

