import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteadmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { admin } = state || {};

  useEffect(() => {
    if (!admin) {
      console.error('Data not found or missing information.');
      navigate('/admin');
    }
  }, [admin, navigate]);

  
  const handleDelete = async () => {
    try {
      if (!admin) {
        console.error('Data not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/admins/${admin._id}`);
      alert('Data Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Data:', error);
    }
  };

  return { admin, handleDelete };
};

export default FDeleteadmin;
