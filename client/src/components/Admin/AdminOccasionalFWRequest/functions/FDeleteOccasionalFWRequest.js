import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteOccasionalFWRequest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { OccasionalFWRequest } = state || {};

  useEffect(() => {
    if (!OccasionalFWRequest) {
      console.error('OccasionalFWRequest not found or missing information.');
      navigate('/admin');
    }
  }, [OccasionalFWRequest, navigate]);

  const handleDelete = async () => {
    try {
      if (!OccasionalFWRequest) {
        console.error('Requst not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/OccasionalFWRequests/${OccasionalFWRequest._id}`);
      alert('OccasionalFWRequest Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting OccasionalFWRequest:', error);
    }
  };

  return { OccasionalFWRequest, handleDelete };
};

export default FDeleteOccasionalFWRequest;
