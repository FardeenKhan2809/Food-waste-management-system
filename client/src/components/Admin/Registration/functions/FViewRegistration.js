import { useState, useEffect } from 'react';
import axios from 'axios';

const FViewRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/registrations');
      setRegistrations(response.data);
    } catch (error) {
      setError('Error fetching registrations');
    }
  };

  return { registrations, error };
};

export default FViewRegistrations;
