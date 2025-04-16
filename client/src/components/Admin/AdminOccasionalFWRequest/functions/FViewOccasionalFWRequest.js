import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FViewOccasionalFWRequest = () => {
  const navigate = useNavigate();

  const fetchOccasionalRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getOccasional-fw');
      return response.data;
    } catch (error) {
      console.error('Error fetching Occasional:', error);
      throw new Error('Failed to fetch Occasional');
    }
  };

  
  const handleUpdate = (OccasionalFWRequest) => {
    navigate(`/update/Occasional/${OccasionalFWRequest._id}`, { state: { OccasionalFWRequest } });
  };

  const handleDelete = async (OccasionalFWRequest) => {
    navigate(`/delete/Occasional/${OccasionalFWRequest._id}`, { state: { OccasionalFWRequest } });
  };

  return {
    fetchOccasionalRequest,
    handleUpdate,
    handleDelete,
  };
};

export default FViewOccasionalFWRequest;
