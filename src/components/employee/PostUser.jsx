import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './PostUser.css';
import { useNavigate } from 'react-router-dom';

const PostUser = () => {
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('http://localhost:8083/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Employee created:', data);
      navigate('/'); // Redirect to the dashboard after posting
    }

    catch (error) {
      console.error('Error creating employee:', error.message);
    }
  };

  return (
    <div className="post-user-container">
      <div className="post-user-card">
        <h2 className="post-user-title">Post New Employee</h2>
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
            Post Employee
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostUser;
