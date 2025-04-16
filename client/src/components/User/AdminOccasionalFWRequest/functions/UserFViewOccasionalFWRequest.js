import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserFViewOccasionalFWRequest = () => {
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
    // Implement update logic here
    navigate(`/update/Occasional/${OccasionalFWRequest._id}`, { state: { OccasionalFWRequest } });
  };
  return {
    fetchOccasionalRequest,
    handleUpdate,
  };
};

export default UserFViewOccasionalFWRequest;
