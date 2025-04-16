import { useState, useEffect } from 'react';
import axios from 'axios';

const UserFViewVolunteer = () => {
  const [volunteers, setvolunteer] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchvolunteers();
  }, []);

  const fetchvolunteers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/volunteer-tables');
      setvolunteer(response.data);
    } catch (error) {
      setError('Error fetching volunteer');
    }
  };

  return { volunteers, error };
};

export default UserFViewVolunteer;
