import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteVolunteer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { volunteer } = state || {};


  useEffect(() => {
    if (!volunteer) {
      console.error('Volunteer not found or missing information.');
      navigate('/admin');
    }
  }, [volunteer, navigate]);

  const handleDelete = async () => {
    try {
      if (!volunteer) {
        console.error('Volunteer not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/volunteer/${volunteer._id}`);
      alert('Volunteer Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Volunteer:', error);
    }
  };
  return { volunteer, handleDelete };
};

export default FDeleteVolunteer;
