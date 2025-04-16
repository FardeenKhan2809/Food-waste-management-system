import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteRegularFWRequest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { RegularFWRequest } = state || {};

  useEffect(() => {
    if (!RegularFWRequest) {
      console.error('RegularFWRequest not found or missing information.');
      navigate('/admin');
    }
  }, [RegularFWRequest, navigate]);

  const handleDelete = async () => {
    try {
      if (!RegularFWRequest) {
        console.error('Requst not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/Regular/${RegularFWRequest._id}`);
      alert('RegularFWRequest Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting RegularFWRequest:', error);
    }
  };

  return { RegularFWRequest, handleDelete };
};

export default FDeleteRegularFWRequest;
