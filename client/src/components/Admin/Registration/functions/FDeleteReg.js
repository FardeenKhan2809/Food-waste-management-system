import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteReg = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { registration } = state || {};

  useEffect(() => {
    if (!registration) {
      console.error('Data not found or missing information.');
      navigate('/admin');
    }
  }, [registration, navigate]);

  
  const handleDelete = async () => {
    try {
      if (!registration) {
        console.error('Data not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/registrations/${registration._id}`);
      alert('Data Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Data:', error);
    }
  };

  return { registration, handleDelete };
};

export default FDeleteReg;
