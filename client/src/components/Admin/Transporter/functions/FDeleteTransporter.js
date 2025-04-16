import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteTransporter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { transporter } = state || {};


  useEffect(() => {
    if (!transporter) {
      console.error('Transporter not found or missing information.');
      navigate('/admin');
    }
  }, [transporter, navigate]);


  const handleDelete = async () => {
    try {
      if (!transporter) {
        console.error('Transporter not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/transporters/${transporter._id}`);
      alert('Tranporter Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Transporter:', error);
    }
  };

  return { transporter, handleDelete };
};

export default FDeleteTransporter;
