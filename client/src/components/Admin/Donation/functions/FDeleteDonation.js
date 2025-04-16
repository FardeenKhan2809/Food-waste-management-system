import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteDonation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { donation } = state || {};

  useEffect(() => {
    if (!donation) {
      console.error('Donation not found or missing information.');
      navigate('/admin');
    }
  }, [donation, navigate]);

  const handleDelete = async () => {
    try {
      if (!donation) {
        console.error('Donation data not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/donation/${donation._id}`);
      alert('Donation data Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Donation:', error);
    }
  };

  return { donation, handleDelete };
};
export default FDeleteDonation;
