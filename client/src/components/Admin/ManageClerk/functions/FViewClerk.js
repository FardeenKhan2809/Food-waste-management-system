import { useState, useEffect } from 'react';
import axios from 'axios';

const FViewclerk = () => {
  const [clerk, setclerk] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchclerk();
  }, []);

  const fetchclerk = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Clerks');
      setclerk(response.data);
    } catch (error) {
      setError('Error fetching clerk');
    }
  };

  return { clerk, error };
};

export default FViewclerk;
