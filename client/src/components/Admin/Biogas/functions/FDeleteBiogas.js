import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteBiogas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { biogas } = state || {};

  useEffect(() => {
    if (!biogas) {
      console.error('Biogas data not found or missing.');
      navigate('/admin');
    }
  }, [biogas, navigate]);

  
  const handleDelete = async () => {

     
    try {
      if (!biogas) {
        console.error('Biogas data not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/biogas/${biogas._id}`);
      alert('Biogas dat Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Biogas data:', error);
    }
  };

  return { biogas, handleDelete };
};

export default FDeleteBiogas;
