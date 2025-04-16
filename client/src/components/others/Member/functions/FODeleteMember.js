import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FDeleteMember = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { member } = state || {};

  useEffect(() => {
    if (!member) {
      console.error('Member not found or missing information.');
      navigate('/admin');
    }
  }, [member, navigate]);

  const handleDelete = async () => {
    try {
      if (!member) {
        console.error('Farmer not found or missing information.');
        navigate('/admin');
        return;
      }

      await axios.delete(`http://localhost:5000/api/members/${member._id}`);
      alert('Member Deleted!');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting Member:', error);
    }
  };

  return { member, handleDelete };
};

export default FDeleteMember;
