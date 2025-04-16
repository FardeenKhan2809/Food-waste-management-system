import { useState, useEffect } from 'react';
import axios from 'axios';

const ReportFViewVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0); // New state to store total records
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/volunteer-tables');
      setVolunteers(response.data);
      setTotalRecords(response.data.length); // Set total records count
    } catch (error) {
      setError('Error fetching volunteers');
    }
  };

  return { volunteers, totalRecords, error }; // Return totalRecords along with volunteers and error
};

export default ReportFViewVolunteer;
