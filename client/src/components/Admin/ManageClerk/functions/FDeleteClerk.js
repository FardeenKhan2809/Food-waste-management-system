import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteclerk = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { clerk } = state || {};

  useEffect(() => {
    if (!clerk) {
      console.error('Data not found or missing information.');
      navigate('/admin');
    }
  }, [clerk, navigate]);

  
  const handleDelete = async () => {
    try {
      if (!clerk) {
        console.error('Data not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/clerks/${clerk._id}`);
      alert('Data Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Data:', error);
    }
  };

  return { clerk, handleDelete };
};

export default FDeleteclerk;
