// EnquiryForm.js
import React from 'react';

const EnquiryForm = () => {
  return (
    <div>
      <h2>Customer Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileService">Mobile Service</label>
          <input type="text" id="mobileService" name="mobileService" placeholder="Enter mobile service" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
