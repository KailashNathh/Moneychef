import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState(" ");
  const [submitted, setSubmitted] = useState(false);

  // Handling form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Simple validation checks
  const validateForm = () => {
    const errors = {};

    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email.includes('@')) errors.email = 'Invalid email';
    if (formData.password.length < 6) errors.password = 'Password should be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';

    return errors;
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      // Here you can send the formData to the backend
      console.log('Form data submitted:', formData);
    } else {
      setFormErrors(errors);
      setSubmitted(false);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {submitted && <div className="success-message">Registration successful!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
