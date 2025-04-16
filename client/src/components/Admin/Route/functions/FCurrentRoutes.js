import { useState, useEffect } from 'react';
import axios from 'axios';

const FCurrentRoutes = () => {
  const [routes, setroutes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchroutes();
  }, []);

  const fetchroutes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/routes/viewdailyroute');
      setroutes(response.data);
    } catch (error) {
      setError('Error fetching Routes');
    }
  };

  return { routes, error };
};

export default FCurrentRoutes;
