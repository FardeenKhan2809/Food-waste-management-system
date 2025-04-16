import { useState, useEffect } from 'react';
import axios from 'axios';

const ReportuseFViewSlurryDistributions = () => {
  const [slurryDistributions, setSlurryDistributions] = useState([]);
  const [error, setError] = useState(null);

  const fetchSlurryDistributions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/viewslurrydistributions');
      setSlurryDistributions(response.data);
    } catch (error) {
      setError('Error fetching slurry distributions');
    }
  };

  useEffect(() => {
    fetchSlurryDistributions();
  }, []);

  return { slurryDistributions, error, fetchSlurryDistributions };
};

export default ReportuseFViewSlurryDistributions;
