import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FViewBiogas = () => {
  const navigate = useNavigate();

  const fetchBiogas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Biowaste');
      return response.data;
    } catch (error) {
      console.error('Error fetching biogas:', error);
      throw new Error('Failed to fetch biogas');
    }
  };

  
  const handleUpdate = (biogas) => {
    navigate(`/update/biogas/${biogas._id}`, { state: { biogas } });
  };

  const handleDelete = async (biogas) => {
    navigate(`/delete/biogas/${biogas._id}`, { state: { biogas } });
  };

  return {
    fetchBiogas,
    handleUpdate,
    handleDelete,
  };
};

export default FViewBiogas;
