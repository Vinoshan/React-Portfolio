import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  // Initialize state for form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        />

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
