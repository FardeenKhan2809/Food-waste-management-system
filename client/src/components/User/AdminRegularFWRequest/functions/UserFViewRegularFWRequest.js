import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserFViewRegularFWRequest = () => {
  const navigate = useNavigate();

  const fetchRegularRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getFWRegular');
      return response.data;
    } catch (error) {
      console.error('Error fetching Regular:', error);
      throw new Error('Failed to fetch Regular');
    }
  };

  
  const handleUpdate = (RegularFWRequest) => {
    // Implement update logic here
    navigate(`/update/Regular/${RegularFWRequest._id}`, { state: { RegularFWRequest } });
  };

  return {
    fetchRegularRequest,
    handleUpdate,
  };
};

export default UserFViewRegularFWRequest;
