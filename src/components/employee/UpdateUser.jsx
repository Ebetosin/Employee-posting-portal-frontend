import {useEffect, useState} from 'react';
import './UpdateUser.css';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const UpdateUser = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      useEffect(()=>{
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8083/api/employee/${id}`, );
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }
        }

        fetchEmployee();
      }, [id]); 

      const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`http://localhost:8083/api/employee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Employee Updated:', data);
      navigate('/'); // Redirect to the dashboard after posting
    }

    catch (error) {
      console.error('Error updating employee:', error.message);
    }
  };

  return (
    <div className="post-user-container">
      <div className="post-user-card">
        <h2 className="post-user-title">Edit Employee</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDepartment" className="mb-3">
            <Form.Control
              type="text"
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="primary">
            Edit Employee
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateUser