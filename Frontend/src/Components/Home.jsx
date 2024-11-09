import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    statement: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone number is required';
    if (!formData.statement) formErrors.statement = 'Statement is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post(
          'http://localhost:5000/api/applications/jobapplications',
          formData
        );

        console.log('Application submitted:', response.data);
        alert('Form submitted successfully!');
        setLoading(false);
        handleCloseForm();
      } catch (error) {
        console.error('Error submitting form:', error.response ? error.response.data.message : error.message);
        alert('Error submitting form. Please try again later.');
        setLoading(false);
      }
    }
  };

  const handleApplyClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setFormData({ name: '', email: '', phoneNumber: '', statement: '' });
    setErrors({});
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-black min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-6xl font-serif font-bold p-4 text-center text-white">
        Proviz School of AI
      </div>

      {/* Apply Now Button */}
      <button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        onClick={handleApplyClick}
      >
        Apply Now
      </button>

      {/* Application Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-2xl transform transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">Application Form</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={handleCloseForm}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-800 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-800 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label className="block text-gray-800 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-800 font-medium">Statement</label>
                <textarea
                  name="statement"
                  value={formData.statement}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Tell us about yourself"
                ></textarea>
                {errors.statement && <p className="text-red-500 text-sm">{errors.statement}</p>}
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ${loading ? 'cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
