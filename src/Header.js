import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import axios from 'axios';

const Header = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileService: '',
    message: '',
    phoneNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const toggleEnquiryForm = () => {
    setShowEnquiryForm(!showEnquiryForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.mobileService.trim() === '' ||
      formData.message.trim() === '' ||
      formData.phoneNumber.trim() === ''
    ) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    // Phone number validation
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      setErrorMessage('Phone number must be 10 digits and should not contain characters.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/submit', formData);
      console.log(response.data.message);

      // Reset the form and error message after successful submission
      setFormData({
        name: '',
        email: '',
        mobileService: '',
        message: '',
        phoneNumber: '',
      });
      setErrorMessage('');

      // Close the form
      toggleEnquiryForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="header">
      <div className="yamaha">Yamaha</div>
      <div className="enquiryIcon" onClick={toggleEnquiryForm}>
        &#128172;
      </div>
      {showEnquiryForm && (
        <div className="enquiryOverlay">
          <Link to="/enquiry" className="enquiryClose" onClick={toggleEnquiryForm}>
            &#10006;
          </Link>
          <div className="enquiryForm">
            <h2>Customer Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileService">Mobile Service</label>
                <input
                  type="text"
                  id="mobileService"
                  name="mobileService"
                  placeholder="Enter Car service"
                  onChange={handleChange}
                  value={formData.mobileService}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
