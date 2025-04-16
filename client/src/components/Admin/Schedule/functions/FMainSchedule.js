import { useState, useEffect } from 'react';
import axios from 'axios';

const FScheduleMain = () => {
  const [schedule, setschedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchschedule();
  }, []);

  const fetchschedule = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schedulemain');
      setschedule(response.data);
    } catch (error) {
      setError('Error fetching Schedule');
    }
  };

  return { schedule, error };
};

export default FScheduleMain;
