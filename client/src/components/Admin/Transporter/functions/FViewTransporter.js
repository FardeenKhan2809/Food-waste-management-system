import { useState, useEffect } from 'react';
import axios from 'axios';

const FViewTransporter = () => {
  const [transporters, settransporters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchtransporters();
  }, []);

  const fetchtransporters = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transporter');
      settransporters(response.data);
    } catch (error) {
      setError('Error fetching Transporter');
    }
  };

  return { transporters, error };
};

export default FViewTransporter;
