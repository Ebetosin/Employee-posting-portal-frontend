import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:8083/api/employees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setEmployees(data);
        // Assuming the API returns an array of employee objects
      }

      catch (error) {
        console.error('Error fetching employees:', error);
      }
    }

    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:8083/api/employee/${employeeId}`, {
        method: 'DELETE',
      });

      console.log(`Employee with ID ${employeeId} deleted successfully`);


      // Remove the deleted employee from the state
      setEmployees(employees.filter(employee => employee.id !== employeeId));
    }

    catch (error) {
      console.error('Error deleting employee:', error.message);
      // Optionally, you can show an error message to the user
    }
  }

  const handleUpdate = (employeeId) => {
          navigate(`/employee/${employeeId}`);
  }


  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'>Employees</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  {/* <th>Email</th> */}
                  {/* <th>Phone</th> */}
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    {/* <td>{employee.email}</td> */}
                    {/* <td>{employee.phone}</td> */}
                    <td>{employee.department}</td>
                    <Button className='m-1' variant="outline-secondary" onClick={()=>handleUpdate(employee.id)}>Update</Button>
                    <Button className='m-1' variant="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard