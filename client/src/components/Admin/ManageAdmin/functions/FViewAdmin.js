import { useState, useEffect } from 'react';
import axios from 'axios';

const FViewadmin = () => {
  const [admin, setadmin] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchadmin();
  }, []);

  const fetchadmin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admins');
      setadmin(response.data);
    } catch (error) {
      setError('Error fetching admin');
    }
  };

  return { admin, error };
};

export default FViewadmin;
