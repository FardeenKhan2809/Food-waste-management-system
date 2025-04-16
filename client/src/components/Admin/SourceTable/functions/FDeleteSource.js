import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteSource = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { source } = state || {};


  useEffect(() => {
    if (!source) {
      console.error('Source not found or missing information.');
      navigate('/admin');
    }
  }, [source, navigate]);


  const handleDelete = async () => {
    try {
      if (!source) {
        console.error('Source not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/sources/${source._id}`);
      alert('Source Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Source:', error);
    }
  };


  return { source, handleDelete };
};

export default FDeleteSource;
