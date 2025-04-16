import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FViewSourceTable = () => {
  const navigate = useNavigate();

  const fetchSources = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sources');
      return response.data;
    } catch (error) {
      console.error('Error fetching sources:', error);
      throw new Error('Failed to fetch sources');
    }
  };

  
  const handleUpdate = (source) => {
    navigate(`/update/sources/${source._id}`, { state: { source } });
  };

  const handleDelete = async (source) => {
    navigate(`/delete/sources/${source._id}`, { state: { source } });
  };

  return {
    fetchSources,
    handleUpdate,
    handleDelete,
  };
};

export default FViewSourceTable;
