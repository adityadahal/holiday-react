import React, { useState } from 'react';
import sendEmail from './sendEmail'; // Path to the service you created
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './HolidayPlanForm.css';

function HolidayPlanForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendEmail(formData);

    setFormData({ name: '', email: '', destination: '', phone: '' });
  };

  return (
    <div className='holiday-plan-form mt-5'>
      <Container>
        <h4 className='text-light mb-4'>Plan Your Holiday</h4>
        <Form onSubmit={handleSubmit}>
          <Row className='g-3'>
            <Col md={3}>
              <Form.Group controlId='formName'>
                <Form.Label className='text-light'>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId='formEmail'>
                <Form.Label className='text-light'>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId='formDestination'>
                <Form.Label className='text-light'>Destination</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter destination'
                  name='destination'
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId='formPhone'>
                <Form.Label className='text-light'>Phone</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Enter your phone number'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12} className='d-flex justify-content-end'>
              <Button type='submit' variant='success' className='mt-3'>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default HolidayPlanForm;
