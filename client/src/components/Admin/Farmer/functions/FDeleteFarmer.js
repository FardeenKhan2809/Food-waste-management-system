import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteFarmer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { farmer } = state || {};


  useEffect(() => {
    if (!farmer) {
      console.error('Farmer not found or missing information.');
      navigate('/admin');
    }
  }, [farmer, navigate]);


  const handleDelete = async () => {
    try {
      if (!farmer) {
        console.error('Farmer not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/Farmers/${farmer._id}`);
      alert('Farmer Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Farmer:', error);
    }
  };

  return { farmer, handleDelete };
};

export default FDeleteFarmer;
