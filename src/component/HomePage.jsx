import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getReadAllData } from '../CrudRedux/Slices/CrudSlice';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


function HomePage() {

  const dispatch = useDispatch();

  const studentData = useSelector((state) => state.allCrud.data);
  const searchData = useSelector((state) => state.allCrud.search);

  console.log(studentData);

  useEffect(() => {
    dispatch(getReadAllData());
  }, [])

  return (
    <div className="container">
      <h1 className='text-center'>Home Page</h1>
      <Link to='/create'>
        <button className='btn btn-primary mb-5 border rounded-3 p-2'>Add Student</button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student_Id</th>
            <th>Student_Name</th>
            <th>Student_Age</th>
            <th>Student_Email</th>
            <th>Student_Phone</th>
            <th>Student_City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            studentData.filter((value) => {
              if (searchData.length == 0) {
                return value;
              } else {
                return value.name.toLowerCase().includes(searchData.toLowerCase())
              }
            })
              .map((value,index) => {
                return (
                  <tr key={value.id?? index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.city}</td>
                    <td>
                      <Link to={`/read/${value.id}`}>
                        <Button variant="outline-primary ms-3">Read</Button>
                      </Link>
                      <Link to={`/update/${value.id}`}>
                        <Button variant="outline-warning ms-3">Update</Button>
                      </Link>
                      <Link to={`/delete/${value.id}`}>
                        <Button variant="outline-danger ms-3">Delete</Button>
                      </Link>
                    </td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;

