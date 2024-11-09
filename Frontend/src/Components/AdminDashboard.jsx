import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/applications/jobapplications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Admin Panel</h1>

      <div className="w-full max-w-4xl overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full table-auto">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Statement</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application._id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{application.name}</td>
                <td className="px-4 py-2 border-b">{application.email}</td>
                <td className="px-4 py-2 border-b">{application.phoneNumber}</td>
                <td className="px-4 py-2 border-b">{application.statement}</td>
                <td className="px-4 py-2 border-b">{application.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
