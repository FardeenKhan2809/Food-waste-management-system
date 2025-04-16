import { useState, useEffect } from 'react';
import axios from 'axios';

const UserFViewMember = () => {
  const [members, setmembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchmembers();
  }, []);

  const fetchmembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/members');
      setmembers(response.data);
    } catch (error) {
      setError('Error fetching members');
    }
  };

  return { members, error };
};

export default UserFViewMember;
